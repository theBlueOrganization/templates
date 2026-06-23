/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    qualities: [90],  // 허용할 품질 목록
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 모바일 최적화면 이 정도면 충분
  },
};

export default nextConfig;