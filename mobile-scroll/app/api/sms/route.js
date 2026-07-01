import { NextResponse } from "next/server";
import crypto from "crypto";
import { google } from "googleapis";
import { getSiteBySlug } from "../../../data/siteRegistry";

const SOLAPI_URL = "https://api.solapi.com/messages/v4/send";

function makeSignature(apiKey, apiSecret) {
  const date = new Date().toISOString();
  const salt = crypto.randomBytes(16).toString("hex");
  const hmac = crypto.createHmac("sha256", apiSecret);
  hmac.update(date + salt);
  const signature = hmac.digest("hex");
  return {
    Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
  };
}

async function saveToSheet({ name, phone, visit_date, visit_time, gift_check, privacy_agree, projectName, sheetId, sheetTab, utmSource }) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const now = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  const giftText    = gift_check    ? "체크함" : "아님";
  const privacyText = privacy_agree ? "동의함" : "미동의";
  const tab = sheetTab ?? process.env.GOOGLE_SHEET_DEFAULT_TAB ?? "상담신청";

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId || process.env.GOOGLE_SHEET_ID,
    range: `'${tab}'!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[now, projectName, name, phone, visit_date ?? "", visit_time ?? "", giftText, privacyText, utmSource ?? "미확인"]],
    },
  });
}

async function sendSms({ to, text }) {
  const { SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER } = process.env;
  const res = await fetch(SOLAPI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...makeSignature(SOLAPI_API_KEY, SOLAPI_API_SECRET) },
    body: JSON.stringify({ message: { to, from: SOLAPI_SENDER, text } }),
    signal: AbortSignal.timeout(8000),
  });
  const data = await res.json();
  if (!res.ok || data.errorCode) throw new Error(data.message || "SMS 발송 실패");
  return data;
}

async function sendKakaoAlimtalk({ to, templateId, variables }) {
  const { SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER, KAKAO_SENDER_KEY } = process.env;
  const res = await fetch(SOLAPI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...makeSignature(SOLAPI_API_KEY, SOLAPI_API_SECRET) },
    body: JSON.stringify({
      message: {
        to,
        from: SOLAPI_SENDER,
        kakaoOptions: {
          pfId: KAKAO_SENDER_KEY,
          templateId,
          variables,
        },
      },
    }),
    signal: AbortSignal.timeout(8000),
  });
  const data = await res.json();
  if (!res.ok || data.errorCode) throw new Error(data.message || "카카오 발송 실패");
  return data;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name, phone, visit_date, visit_time, gift_check, privacy_agree,
      projectName, adminPhones, sheetId, sheetTab, utmSource, showUtmInSms,
      useKakao, slug,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "이름과 연락처는 필수 항목입니다." },
        { status: 400 }
      );
    }

    const phoneRegex = /^01[016789]\d{7,8}$/;
    if (!phoneRegex.test(phone.replace(/-/g, ""))) {
      return NextResponse.json(
        { success: false, message: "유효하지 않은 휴대전화 번호입니다." },
        { status: 400 }
      );
    }

    const { SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER, ADMIN_PHONE } = process.env;
    if (!SOLAPI_API_KEY || !SOLAPI_API_SECRET || !SOLAPI_SENDER || !ADMIN_PHONE) {
      console.error("[SMS] 필수 환경변수 누락");
      return NextResponse.json(
        { success: false, message: "서버 설정 오류. 관리자에게 문의하세요." },
        { status: 500 }
      );
    }

    const recipients = (Array.isArray(adminPhones) && adminPhones.length > 0)
      ? adminPhones
      : [ADMIN_PHONE, process.env.ADMIN_PHONE2].filter(Boolean);

    const giftText    = gift_check    ? "체크함" : "아님";
    const privacyText = privacy_agree ? "동의함" : "미동의";

    const utmLine = showUtmInSms && utmSource && utmSource !== "미확인"
      ? `\n유입매체: ${utmSource}`
      : "";

    const adminMessage =
      `[${projectName}] 신규 상담 신청\n` +
      `이름: ${name}\n` +
      `연락처: ${phone}\n` +
      `방문예약일: ${visit_date || "미입력"}\n` +
      `방문예약시간: ${visit_time || "미입력"}\n` +
      `사은품등록: ${giftText}\n` +
      `개인정보동의: ${privacyText}` +
      utmLine;

    const siteConfig = slug ? getSiteBySlug(slug) : null;
    const resolvedTemplateId = siteConfig?.kakaoTemplateId || process.env.KAKAO_TEMPLATE_ID;

    const sheetPromise = saveToSheet({ name, phone, visit_date, visit_time, gift_check, privacy_agree, projectName, sheetId, sheetTab, utmSource });

    await Promise.all(
      recipients.map(async (to) => {
        if (useKakao && resolvedTemplateId) {
          try {
            await sendKakaoAlimtalk({
              to,
              templateId: resolvedTemplateId,
              variables: {
                "#{현장명}":      projectName  ?? "",
                "#{유입매체}":    utmSource    ?? "미확인",
                "#{이름}":        name         ?? "",
                "#{연락처}":      phone        ?? "",
                "#{방문예약일}":   visit_date  ?? "미입력",
                "#{방문예약시간}": visit_time  ?? "미입력",
                "#{사은품등록}":   giftText,
                "#{개인정보동의}": privacyText,
              },
            });
            console.log(`[카카오] 발송 성공: ${to}`);
          } catch (kakaoError) {
            console.warn(`[카카오] 실패 → SMS 폴백: ${to}`, kakaoError.message);
            await sendSms({ to, text: adminMessage });
          }
        } else {
          await sendSms({ to, text: adminMessage });
        }
      })
    );

    let sheetSaved = true;
    try {
      await sheetPromise;
    } catch (e) {
      console.error("[SHEET] 저장 실패:", e);
      sheetSaved = false;
    }

    return NextResponse.json({ success: true, sheetSaved });
  } catch (error) {
    console.error("[SMS] 서버 오류:", error);
    return NextResponse.json({ success: false, message: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
