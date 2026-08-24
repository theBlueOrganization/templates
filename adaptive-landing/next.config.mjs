import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// public 정적 파일 rewrite(아래 참고)는 basePath 밖으로 나가는 destination이라 Next.js가
// 반드시 절대 URL(http/https로 시작)을 요구함 — 이 배포 자기 자신을 가리키는 origin.
// VERCEL_URL은 Vercel이 프리뷰/프로덕션 모든 배포에 자동으로 심어주는 그 배포 자신의
// 호스트네임이라 배포마다 따로 설정할 필요 없음 (로컬 개발 중에는 localhost로 대체)
const SELF_ORIGIN = process.env.SELF_ORIGIN ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // theblue-apt(mobile-scroll)가 *.addupapt.kr 와일드카드 도메인을 갖고 있고, 그 미들웨어가
  // Multi-Zone 방식으로 이 앱을 프록시함 — 프록시 대상 경로 접두사(mobile-scroll의
  // middleware.js에 있는 ADAPTIVE_LANDING_BASE_PATH)와 반드시 일치해야 함
  basePath: '/apt2',
  images: {
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // basePath 적용 전(=/apt2 없이) 이 프로젝트의 vercel.app 기본 주소를 직접 고객에게 전달한
  // 링크가 있어서(예: wonjongyeok-world-meridian-fore), basePath 적용 후에도 그 링크가 깨지지
  // 않도록 이전 형태의 경로를 새 경로로 리다이렉트. basePath:false가 있어야 source/destination이
  // 자동으로 /apt2가 붙지 않고 적힌 그대로 매칭/이동됨.
  // 페이지 경로(/apt/:slug, 세그먼트 1개)만 대상 — 브라우저 주소창 이동이라 눈에 보이는
  // 리다이렉트(3xx)여도 문제 없음
  async redirects() {
    return [
      {
        source: '/apt/:slug',
        destination: '/apt2/apt/:slug',
        basePath: false,
        permanent: false,
      },
      // 루트(/)는 내부에서 전체 현장 목록을 확인하는 용도라, basePath 적용 후에도
      // 그대로 접속되게 유지 (basePath:false 없으면 /apt2/가 목적지에 자동으로 또 붙어버림)
      {
        source: '/',
        destination: '/apt2',
        basePath: false,
        permanent: false,
      },
    ]
  },
  // public 정적 파일(/apt/:slug/이미지.webp 등)은 위 페이지 리다이렉트와 달리 반드시 rewrite
  // (3xx 없이 투명 전달)로 처리해야 함 — next/image의 내부 최적화 요청이 로컬 이미지 src를
  // 그대로(=/apt2 접두어 없이) 자기 자신에게 fetch하는데, Next.js 이미지 최적화기는 보안상
  // 리다이렉트 응답을 절대 따라가지 않고 "The requested resource isn't a valid image"로
  // 실패 처리함. 이 프로젝트의 모든 현장 이미지가 이 문제로 깨져 있었음 — basePath:false가
  // 있어야 destination에 /apt2가 중복으로 또 안 붙음
  async rewrites() {
    return [
      {
        source: '/apt/:slug/:path*',
        destination: `${SELF_ORIGIN}/apt2/apt/:slug/:path*`,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
