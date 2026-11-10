// 폰트는 next/font/google 대신 저장소에 받아둔 파일로 셀프호스팅 — 빌드 중 Google 서버 요청이 가끔 실패해
// Vercel 빌드가 멈추던 문제 방지. 폰트 추가/변경은 scripts/fetch-google-fonts.mjs 수정 후 npm run fonts:fetch
import './fonts/fonts.css'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  // OG/Twitter 이미지처럼 상대경로로 지정된 메타데이터를 절대 URL로 변환할 때 기준이 되는 origin.
  // basePath('/apt2')는 여기 안 붙음(leading-slash 상대경로는 origin 기준으로 해석되어 metadataBase의
  // 경로 부분이 무시됨) — 그래서 각 현장의 ogImage 값 자체를 basePath 포함 절대 URL로 지정해야 함
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://adaptive-landing-ochre.vercel.app'),
  title: '분양 랜딩페이지',
  description: '분양 정보 및 빠른 상담 신청',
}

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning — 아래 인라인 스크립트가 하이드레이션 전에 <html>에 클래스를 붙이므로
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 다이렉트 링크(#앵커로 진입)면 하이드레이션 전에 인트로 오버레이를 CSS로 숨겨 검은 화면 깜빡임 방지 — lib/directLink.js */}
        <script dangerouslySetInnerHTML={{ __html: "if(location.hash.length>1)document.documentElement.classList.add('direct-link')" }} />
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
