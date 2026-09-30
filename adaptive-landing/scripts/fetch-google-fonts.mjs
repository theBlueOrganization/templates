// Google Fonts를 저장소에 내려받아 셀프호스팅하는 스크립트 (npm run fonts:fetch)
// next/font/google은 빌드할 때마다 Google 서버에서 CSS·폰트 파일을 새로 받아오는데, 그 요청이
// 가끔 실패하면 Vercel 빌드 전체가 "An error occurred in `next/font`"로 멈춤. 그래서 폰트 파일을
// app/fonts/files/에 한 번 받아두고, app/fonts/fonts.css(@font-face + unicode-range)로 불러옴 →
// 빌드 중 외부 요청 없음. 폰트를 추가/변경할 때만 아래 FONTS를 고치고 이 스크립트를 다시 실행.
// 한글 폰트는 Google이 주는 그대로 글자 범위(unicode-range)별 조각 파일로 받아, 페이지에 쓰인
// 글자가 들어있는 조각만 브라우저가 내려받음 (next/font/google과 같은 방식)
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'app/fonts')
const FILES_DIR = path.join(OUT_DIR, 'files')

// next/font/google이 쓰는 것과 같은 UA — woff2 + unicode-range 조각 CSS를 받기 위함
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'

// family: Google Fonts 패밀리명, weights: 받을 굵기, variable: 기존 next/font variable명(그대로 유지),
// fallback: 폰트 로딩 전·조각에 없는 글자에 쓸 대체 폰트
const FONTS = [
  { family: 'Noto Sans KR', weights: [300, 400, 700], variable: '--font-noto-sans-kr', fallback: 'sans-serif' },
  { family: 'Noto Serif KR', weights: [300, 400, 700], variable: '--font-noto-serif-kr', fallback: 'serif' },
  { family: 'Bebas Neue', weights: [400], variable: '--font-bebas-neue', fallback: 'sans-serif' },
  // eupseong-prugio(업성 푸르지오) 현장의 영문 레이블/뱃지 전용 폰트
  { family: 'Cormorant Garamond', weights: [500, 600, 700], variable: '--font-cormorant-garamond', fallback: 'serif' },
  { family: 'Playfair Display', weights: [600], variable: '--font-playfair-display', fallback: 'serif' },
  { family: 'Montserrat', weights: [400, 500], variable: '--font-montserrat', fallback: 'sans-serif' },
  // wonjongyeok-world-meridian-fore 현장의 "특별한 혜택" 섹션 손글씨 강조 문구 전용 폰트 (한글 손글씨체)
  { family: 'Gaegu', weights: [700], variable: '--font-nanum-pen', fallback: 'cursive' },
]

const slug = (s) => s.toLowerCase().replace(/\s+/g, '-')

async function fetchWithRetry(url, asText) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA } })
      if (!res.ok) throw new Error(`${res.status} ${url}`)
      return asText ? await res.text() : Buffer.from(await res.arrayBuffer())
    } catch (err) {
      if (attempt >= 3) throw err
      await new Promise((r) => setTimeout(r, 1000 * attempt))
    }
  }
}

async function main() {
  await fs.rm(FILES_DIR, { recursive: true, force: true })
  await fs.mkdir(FILES_DIR, { recursive: true })

  const cssParts = []
  const rootVars = []

  for (const font of FONTS) {
    const query = `${font.family.replace(/ /g, '+')}:wght@${font.weights.join(';')}`
    const css = await fetchWithRetry(`https://fonts.googleapis.com/css2?family=${query}&display=swap`, true)

    // 파일명: <패밀리>-<굵기>-<조각>.woff2 — 조각은 한글 폰트면 Google 파일 URL 끝의 번호(….12.woff2),
    // 영문 폰트면 CSS 주석의 서브셋명(/* latin */ 등)
    const blocks = [...css.matchAll(/(\/\*\s*([^*]+?)\s*\*\/\s*)?@font-face\s*\{([^}]+)\}/g)]
    const downloads = []
    for (const [, , label, body] of blocks) {
      const url = body.match(/url\(([^)]+)\)/)[1]
      const weight = body.match(/font-weight:\s*(\d+)/)[1]
      const range = body.match(/unicode-range:\s*([^;]+);/)?.[1]
      const sliceNum = url.match(/\.(\d+)\.woff2$/)?.[1]
      const part = (sliceNum ?? label ?? 'all').replace(/[^a-z0-9-]+/gi, '-')
      const fileName = `${slug(font.family)}-${weight}-${part}.woff2`
      downloads.push(fetchWithRetry(url).then((buf) => fs.writeFile(path.join(FILES_DIR, fileName), buf)))
      cssParts.push(
        [
          '@font-face {',
          `  font-family: '${font.family}';`,
          '  font-style: normal;',
          `  font-weight: ${weight};`,
          '  font-display: swap;',
          `  src: url('./files/${fileName}') format('woff2');`,
          range ? `  unicode-range: ${range};` : null,
          '}',
        ]
          .filter(Boolean)
          .join('\n')
      )
    }
    await Promise.all(downloads)
    rootVars.push(`  ${font.variable}: '${font.family}', ${font.fallback};`)
    console.log(`${font.family}: ${blocks.length} files`)
  }

  const header = [
    '/* 자동 생성 파일 — 직접 수정하지 말고 scripts/fetch-google-fonts.mjs를 고친 뒤 npm run fonts:fetch 로 다시 생성 */',
    '/* 기존 next/font/google의 CSS 변수명(--font-noto-sans-kr 등)을 그대로 유지 */',
    ':root {',
    ...rootVars,
    '}',
  ].join('\n')
  await fs.writeFile(path.join(OUT_DIR, 'fonts.css'), `${header}\n\n${cssParts.join('\n\n')}\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
