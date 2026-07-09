import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { google } from 'googleapis'

const SOLAPI_URL = 'https://api.solapi.com/messages/v4/send'

function makeSignature(apiKey, apiSecret) {
  const date = new Date().toISOString()
  const salt = crypto.randomBytes(16).toString('hex')
  const hmac = crypto.createHmac('sha256', apiSecret)
  hmac.update(date + salt)
  const signature = hmac.digest('hex')
  return {
    Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
  }
}

async function saveToSheet(payload) {
  const { name, phone, visit_date, visit_time, gift_check, privacy_agree, projectName, sheetId, sheetTab, utmSource, serviceType, ageRange } = payload

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  const tab = sheetTab ?? process.env.GOOGLE_SHEET_DEFAULT_TAB ?? '상담신청'

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId || process.env.GOOGLE_SHEET_ID,
    range: `'${tab}'!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          now,
          projectName,
          name,
          phone,
          visit_date ?? '',
          visit_time ?? '',
          gift_check ? '체크함' : '아님',
          privacy_agree ? '동의함' : '미동의',
          utmSource ?? '직접유입',
          serviceType ?? '',
          ageRange ?? '',
        ],
      ],
    },
  })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name,
      phone,
      visit_date,
      visit_time,
      gift_check,
      privacy_agree,
      projectName,
      adminPhones,
      sheetId,
      sheetTab,
      utmSource,
      showUtmInSms,
      serviceType,
      ageRange,
    } = body

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: '이름과 연락처는 필수 항목입니다.' },
        { status: 400 }
      )
    }

    const phoneRegex = /^01[016789]\d{7,8}$/
    if (!phoneRegex.test(phone.replace(/-/g, ''))) {
      return NextResponse.json(
        { success: false, message: '유효하지 않은 휴대전화 번호입니다.' },
        { status: 400 }
      )
    }

    const { SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER, ADMIN_PHONE } = process.env
    if (!SOLAPI_API_KEY || !SOLAPI_API_SECRET || !SOLAPI_SENDER || !ADMIN_PHONE) {
      console.error('[SMS] 필수 환경변수 누락')
      return NextResponse.json(
        { success: false, message: '서버 설정 오류. 관리자에게 문의하세요.' },
        { status: 500 }
      )
    }

    const recipients =
      Array.isArray(adminPhones) && adminPhones.length > 0
        ? adminPhones
        : [ADMIN_PHONE, process.env.ADMIN_PHONE2].filter(Boolean)

    const utmLine =
      showUtmInSms && utmSource && utmSource !== '직접유입'
        ? `\n유입매체: ${utmSource}`
        : ''

    const serviceLine = serviceType ? `\n희망서비스: ${serviceType}` : ''
    const ageLine = ageRange ? `\n연령대: ${ageRange}` : ''
    const giftLine = serviceType ? '' : `\n사은품등록: ${gift_check ? '체크함' : '아님'}`

    const adminMessage =
      `[${projectName}] 신규 상담 신청\n` +
      `이름: ${name}\n` +
      `연락처: ${phone}\n` +
      `방문예약일: ${visit_date || '미입력'}\n` +
      `방문예약시간: ${visit_time || '미입력'}` +
      giftLine +
      serviceLine +
      ageLine +
      `\n개인정보동의: ${privacy_agree ? '동의함' : '미동의'}` +
      utmLine

    const smsSends = recipients.map((to) =>
      fetch(SOLAPI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...makeSignature(SOLAPI_API_KEY, SOLAPI_API_SECRET),
        },
        body: JSON.stringify({ message: { to, from: SOLAPI_SENDER, text: adminMessage } }),
      })
    )

    const [adminRes] = await Promise.all([
      ...smsSends,
      saveToSheet({
        name,
        phone,
        visit_date,
        visit_time,
        gift_check,
        privacy_agree,
        projectName,
        sheetId,
        sheetTab,
        utmSource,
        serviceType,
        ageRange,
      }).catch((e) => console.error('[SHEET] 저장 실패:', e)),
    ])

    const solapiData = await adminRes.json()
    if (!adminRes.ok || solapiData.errorCode) {
      console.error('[SMS] Solapi 발송 실패:', solapiData)
      return NextResponse.json(
        { success: false, message: '문자 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[SMS] 서버 오류:', error)
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}
