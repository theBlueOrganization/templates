import exampleApt from './sites/example-apt'
import eupseongPrugio from './sites/eupseong-prugio'
import wonjongyeokWorldMeridianFore from './sites/wonjongyeok-world-meridian-fore'

/**
 * 새 현장 추가 방법:
 * 1. data/sites/[slug].js 생성 (example-apt.js를 복사해서 내용만 바꾸면 됨)
 * 2. 아래 import 추가
 * 3. sites 배열에 추가
 * 4. public/apt/[slug]/ 에 이미지 추가
 * 5. git push → 배포
 *
 * 예: 서울숲 아파트를 추가한다면
 *   import seoulforestApt from './sites/seoulforest-apt'
 *   const sites = [exampleApt, seoulforestApt]
 */
const sites = [exampleApt, eupseongPrugio, wonjongyeokWorldMeridianFore]

// slug로 현장 하나를 찾음 (app/apt/[slug]/page.jsx에서 사용)
export function getSiteBySlug(slug) {
  return sites.find((s) => s.slug === slug) ?? null
}

// 등록된 모든 slug 목록 (generateStaticParams에서 빌드 시 페이지를 미리 만들 때 사용)
export function getAllSlugs() {
  return sites.map((s) => s.slug)
}

export default sites
