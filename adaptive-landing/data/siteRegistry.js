import exampleApt from './sites/example-apt'
import eupseongPrugio from './sites/eupseong-prugio'
import wonjongyeokWorldMeridianFore from './sites/wonjongyeok-world-meridian-fore'
import theSharpSongdoGrandTerre from './sites/the-sharp-songdo-grand-terre'
import theSharpGeomdanLakepark from './sites/the-sharp-geomdan-lakepark'
import theSharpGeomdanLakepark2 from './sites/the-sharp-geomdan-lakepark-2'
import theSharpGeomdanLakepark3 from './sites/the-sharp-geomdan-lakepark-3'
import theSharpGeomdanLakepark4 from './sites/the-sharp-geomdan-lakepark-4'
import deoksoDoubleviewHangang from './sites/deokso-doubleview-hangang'
import dalseoXiGenic from './sites/dalseo-xi-genic'
import dalseoXiGenic2 from './sites/dalseo-xi-genic-2'
import hanyangIclassYangju from './sites/hanyang-iclass-yangju'
import hanyangIclassYangju2 from './sites/hanyang-iclass-yangju-2'
import doosanWevethezenithBucheon from './sites/doosan-wevethezenith-bucheon'
import osanHeritageXiX from './sites/osan-heritage-xi-x'
import osanHeritageXiXi from './sites/osan-heritage-xi-xi'
import osanHeritageXiXi2 from './sites/osan-heritage-xi-xi-2'
import osanHeritageXiXi3 from './sites/osan-heritage-xi-xi-3'
import osanHeritageXiXi3S from './sites/osan-heritage-xi-xi-3-s'
import osanHeritageXiXi4 from './sites/osan-heritage-xi-xi-4'
import osanHeritageXiXi5 from './sites/osan-heritage-xi-xi-5'
import osanHeritageXiXi1 from './sites/osan-heritage-xi-xi1'
import cheongnaArkonePrugio from './sites/cheongna-arkone-prugio'
import cheongnaArkonePrugio2 from './sites/cheongna-arkone-prugio-2'
import cheongnaArkonePrugio3 from './sites/cheongna-arkone-prugio-3'
import cheongnaArkonePrugio32 from './sites/cheongna-arkone-prugio-3-2'
import cheongnaArkonePrugio4 from './sites/cheongna-arkone-prugio-4'
import forenaIncheonHagik from './sites/forena-incheon-hagik'
import cityOciel9 from './sites/city-ociel-9'
import cityOciel92 from './sites/city-ociel-9-2'
import pungmuSujainGracent2 from './sites/pungmu-sujain-gracent-2'
import chumdan3HobanSummit from './sites/chumdan3-hoban-summit'
import chumdan3HobanSummit2 from './sites/chumdan3-hoban-summit-2'
import bukOsanXiDeforet from './sites/buk-osan-xi-deforet'
import bukOsanXiDeforet2 from './sites/buk-osan-xi-deforet-2'
import bukOsanXiDeforet3 from './sites/buk-osan-xi-deforet-3'
import cheongnaThelivTiamoCasa from './sites/cheongna-theliv-tiamo-casa'
import cheongnaThelivTiamoCasa2 from './sites/cheongna-theliv-tiamo-casa-2'
import pajuHobanSummitEastpark from './sites/paju-hoban-summit-eastpark'
import yonginGorimDongmunTheEast from './sites/yongin-gorim-dongmun-the-east'
import yonginGorimDongmunTheEast2 from './sites/yongin-gorim-dongmun-the-east-2'
import yeongjongShinilViaafCrest from './sites/yeongjong-shinil-viaaf-crest'
import yangsanXiParkPaliche from './sites/yangsan-xi-park-paliche'
import yangsanXiParkPaliche2 from './sites/yangsan-xi-park-paliche-2'
import elifGeomdanForedu from './sites/elif-geomdan-foredu'
import geomdanCentrevilleEducity from './sites/geomdan-centreville-educity'
import uijeongbuFeliztowerYangwoo from './sites/uijeongbu-feliztower-yangwoo'
import namseongHernity from './sites/namseong-hernity'
import yeowolJungangHeightsArbiche from './sites/yeowol-jungang-heights-arbiche'
import seochoPh1603 from './sites/seocho-ph1603'
import deokeunDmcEileensGarden3 from './sites/deokeun-dmc-eileens-garden-3'
import deokeunDmcEileensGarden32 from './sites/deokeun-dmc-eileens-garden-3-2'

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
const sites = [
  exampleApt,
  eupseongPrugio,
  wonjongyeokWorldMeridianFore,
  theSharpSongdoGrandTerre,
  theSharpGeomdanLakepark,
  theSharpGeomdanLakepark2,
  theSharpGeomdanLakepark3,
  theSharpGeomdanLakepark4,
  deoksoDoubleviewHangang,
  dalseoXiGenic,
  dalseoXiGenic2,
  hanyangIclassYangju,
  hanyangIclassYangju2,
  doosanWevethezenithBucheon,
  osanHeritageXiX,
  osanHeritageXiXi,
  osanHeritageXiXi2,
  osanHeritageXiXi3,
  osanHeritageXiXi3S,
  osanHeritageXiXi4,
  osanHeritageXiXi5,
  osanHeritageXiXi1,
  cheongnaArkonePrugio,
  cheongnaArkonePrugio2,
  cheongnaArkonePrugio3,
  cheongnaArkonePrugio32,
  cheongnaArkonePrugio4,
  forenaIncheonHagik,
  cityOciel9,
  cityOciel92,
  pungmuSujainGracent2,
  chumdan3HobanSummit,
  chumdan3HobanSummit2,
  bukOsanXiDeforet,
  bukOsanXiDeforet2,
  bukOsanXiDeforet3,
  cheongnaThelivTiamoCasa,
  cheongnaThelivTiamoCasa2,
  pajuHobanSummitEastpark,
  yonginGorimDongmunTheEast,
  yonginGorimDongmunTheEast2,
  yeongjongShinilViaafCrest,
  yangsanXiParkPaliche,
  yangsanXiParkPaliche2,
  elifGeomdanForedu,
  geomdanCentrevilleEducity,
  uijeongbuFeliztowerYangwoo,
  namseongHernity,
  yeowolJungangHeightsArbiche,
  seochoPh1603,
  deokeunDmcEileensGarden3,
  deokeunDmcEileensGarden32,
]

// slug로 현장 하나를 찾음 (app/apt/[slug]/page.jsx에서 사용)
export function getSiteBySlug(slug) {
  return sites.find((s) => s.slug === slug) ?? null
}

// 등록된 모든 slug 목록 (generateStaticParams에서 빌드 시 페이지를 미리 만들 때 사용)
export function getAllSlugs() {
  return sites.map((s) => s.slug)
}

export default sites
