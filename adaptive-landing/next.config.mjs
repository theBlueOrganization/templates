import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
}

export default nextConfig
