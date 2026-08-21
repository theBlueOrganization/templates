import {
  Noto_Sans_KR,
  Noto_Serif_KR,
  Bebas_Neue,
  Cormorant_Garamond,
  Playfair_Display,
  Montserrat,
  Gaegu,
} from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

// eupseong-prugio(업성 푸르지오) 현장의 영문 레이블/뱃지 전용 폰트
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

// wonjongyeok-world-meridian-fore 현장의 "특별한 혜택" 섹션 손글씨 강조 문구 전용 폰트 (한글 손글씨체, korean 서브셋 포함)
const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-nanum-pen',
  display: 'swap',
})

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
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${montserrat.variable} ${gaegu.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
