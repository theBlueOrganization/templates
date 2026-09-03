/**
 * 현장 레지스트리
 * ─────────────────────────────────────────────────────────
 * 새 현장을 추가할 때:
 *   1. data/sites/[slug].js 파일 생성
 *   2. 아래 import + sites 배열에 추가
 *   3. public/apt/[slug]/ 폴더에 이미지 추가
 *   4. git push → 배포 완료
 * ─────────────────────────────────────────────────────────
 *
 * @typedef {Object} SiteConfig
 * @property {string}   slug
 * @property {string}   [subdomain] - addupapt.kr 한글 서브도메인 노출용 (선택, 없으면 기존 /apt/[slug] 경로로만 접근)
 * @property {"mobile-scroll"|"adaptive-landing"} [template] - 이 현장을 렌더링할 템플릿 프로젝트 (선택, 미지정 시 기존과 동일하게 "mobile-scroll"로 처리).
 *   "adaptive-landing"이면 middleware.js가 이 앱이 아니라 adaptive-landing 프로젝트로 요청을 프록시함 (Multi-Zone 구조, 자세한 설명은 middleware.js 참고)
 * @property {string}   projectName
 * @property {string}   shortName
 * @property {string}   telNumber
 * @property {string}   ogImage
 * @property {string}   [favicon] - 브라우저 탭 파비콘 경로 (선택, 없으면 기본 파비콘 없음)
 * @property {{ name: string, bizNumber: string, email: string }} company
 * @property {string[]} visitTimeOptions
 * @property {{ label: string, target: string }[]} navItems
 * @property {{ hero: Object, overview: Object, floorplan: Object }} sections
 * @property {string}   privacyText
 */

import doosanCheonan   from "./sites/sujainroicent-inha.js";
import hanlaJakjeon    from "./sites/hanla-jakjeon.js";
import sujainPungmu2   from "./sites/gimpo-pungmu-sujain2.js";
import sujainPungmu2b  from "./sites/gimpo-pungmu-sujain2-2.js";
import suguiRaonSkyve from "./sites/sungui-raon-private-skyve.js";
import suguiRaonPrivate2 from "./sites/sungui-raon-private-2.js";
import gyeongsanHobanSummit1  from "./sites/gyeongsan-hobansummit-1.js";
import cheonwangMoaelgaTreview  from "./sites/cheonwang-moaelga-treview.js";
import hillstateSiheungTheclass  from "./sites/hillstate-siheung-theclass.js";
import forenaTheshopIncheonCityhall  from "./sites/forena-theshop-incheon-cityhall.js";
import osanHeritageXi  from "./sites/osan-heritage-xi.js";
import osanHeritageXi2  from "./sites/osan-heritage-xi-2.js";
import osanHeritageXi3  from "./sites/osan-heritage-xi-3.js";
import harringtonPlaceNowonCentral  from "./sites/harrington-place-nowon-central.js";
import dongtanHeriumCentral  from "./sites/dongtan-herium-central.js";
import centrevilleGeoje  from "./sites/centreville-geoje.js";
import jeonjuArtiemLaterrace  from "./sites/jeonju-artiem-laterrace.js";


/** @type {SiteConfig[]} */
const sites = [
  doosanCheonan,
  hanlaJakjeon,
  sujainPungmu2,
  sujainPungmu2b,
  suguiRaonSkyve,
  suguiRaonPrivate2,
  gyeongsanHobanSummit1,
  cheonwangMoaelgaTreview,
  hillstateSiheungTheclass,
  forenaTheshopIncheonCityhall,
  osanHeritageXi,
  osanHeritageXi2,
  osanHeritageXi3,
  harringtonPlaceNowonCentral,
  dongtanHeriumCentral,
  centrevilleGeoje,
  jeonjuArtiemLaterrace,
];

// adaptive-landing 프로젝트가 실제로 렌더링하는 현장의 "포인터" 항목 — 이 앱은 이 현장들을
// 직접 렌더링하지 않고 middleware.js가 subdomain으로 인식해서 adaptive-landing으로 프록시하는
// 용도로만 사용함. 그래서 slug/subdomain/template 외의 필드(hero, sections, company 등)는
// 없어도 되고, getAllSlugs()(정적 경로 생성용)에서는 반드시 제외해야 함 — 안 그러면 이 앱이
// 빌드 시 이 슬러그들도 자기 것인 줄 알고 /apt/[slug]를 만들려다 필드 누락으로 빌드가 깨짐.
// 실제 현장 데이터는 adaptive-landing/data/sites/[slug].js에 있음
const adaptiveLandingPointers = [
  { slug: "eupseong-prugio", subdomain: "업성푸르지오레이크시티", template: "adaptive-landing" },
  { slug: "wonjongyeok-world-meridian-fore", subdomain: "원종역월드메르디앙포레", template: "adaptive-landing" },
  { slug: "the-sharp-songdo-grand-terre", subdomain: "더샵송도그란테르", template: "adaptive-landing" },
  { slug: "the-sharp-geomdan-lakepark", subdomain: "더샵검단레이크파크", template: "adaptive-landing" },
  { slug: "the-sharp-geomdan-lakepark-2", subdomain: "더샵검단레이크파크T", template: "adaptive-landing" },
];

const allSites = [...sites, ...adaptiveLandingPointers];

// ─── 유틸 함수 ────────────────────────────────────────────

/** slug로 단일 현장 조회 (이 앱이 직접 렌더링하는 현장만 — adaptive-landing 현장은 여기서 제외됨) */
export function getSiteBySlug(slug) {
  return sites.find((s) => s.slug === slug) ?? null;
}

/** 등록된 모든 slug 목록 (정적 경로 생성용 — 이 앱이 직접 렌더링하는 현장만) */
export function getAllSlugs() {
  return sites.map((s) => s.slug);
}

/** middleware.js 전용 — subdomain 라우팅에 필요한 모든 현장(adaptive-landing 포인터 포함) */
export function getAllSitesForRouting() {
  return allSites;
}

export default sites;
