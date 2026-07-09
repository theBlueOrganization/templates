import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sheetTab = searchParams.get('sheetTab') ?? process.env.GOOGLE_SHEET_DEFAULT_TAB ?? '상담신청'
    const sheetId = searchParams.get('sheetId') || process.env.GOOGLE_SHEET_ID

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `'${sheetTab}'!A:A`,
    })

    const count = Math.max((res.data.values?.length ?? 1) - 1, 0)
    return NextResponse.json({ count })
  } catch (e) {
    console.error('[COUNT]', e)
    return NextResponse.json({ count: 0 })
  }
}
