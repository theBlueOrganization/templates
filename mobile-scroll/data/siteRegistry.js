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
import harringtonPlaceNowonCentral  from "./sites/harrington-place-nowon-central.js";


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
  harringtonPlaceNowonCentral,
];

// ─── 유틸 함수 ────────────────────────────────────────────

/** slug로 단일 현장 조회 */
export function getSiteBySlug(slug) {
  return sites.find((s) => s.slug === slug) ?? null;
}

/** 등록된 모든 slug 목록 (정적 경로 생성용) */
export function getAllSlugs() {
  return sites.map((s) => s.slug);
}

export default sites;
