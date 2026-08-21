import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
  // 자동으로 /apt2가 붙지 않고 적힌 그대로 매칭/이동됨
  async redirects() {
    return [
      {
        source: '/apt/:slug*',
        destination: '/apt2/apt/:slug*',
        basePath: false,
        permanent: false,
      },
    ]
  },
}

export default nextConfig
