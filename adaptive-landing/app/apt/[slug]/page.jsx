import { notFound } from 'next/navigation'
import { getSiteBySlug, getAllSlugs } from '../../../data/siteRegistry'
import MetaPixel from '../../../components/MetaPixel'
import SignatureHeader from '../../../components/ui/SignatureHeader'
import SignatureFooter from '../../../components/ui/SignatureFooter'
import SignatureQuickMenu from '../../../components/ui/SignatureQuickMenu'
import SignaturePopupSequence from '../../../components/ui/SignaturePopupSequence'
import SignaturePopupNoticeGeomdan from '../../../components/ui/SignaturePopupNoticeGeomdan'
import SignatureMobileBottomBar from '../../../components/ui/SignatureMobileBottomBar'
import SignatureHero from '../../../components/sections/SignatureHero'
import SignatureVideoSection from '../../../components/sections/SignatureVideoSection'
import SignatureHeroMinimal from '../../../components/sections/SignatureHeroMinimal'
import SignatureHeroDualLife from '../../../components/sections/SignatureHeroDualLife'
import SignatureHeroLegacy from '../../../components/sections/SignatureHeroLegacy'
import SignatureHeroOciel from '../../../components/sections/SignatureHeroOciel'
import SignatureHeroTiamo from '../../../components/sections/SignatureHeroTiamo'
import SignatureCircleIntro from '../../../components/sections/SignatureCircleIntro'
import SignatureBenefits from '../../../components/sections/SignatureBenefits'
import SignatureSummary from '../../../components/sections/SignatureSummary'
import SignatureSummaryTabs from '../../../components/sections/SignatureSummaryTabs'
import SignatureLocation from '../../../components/sections/SignatureLocation'
import SignatureLocationVision from '../../../components/sections/SignatureLocationVision'
import SignaturePremiumIntro from '../../../components/sections/SignaturePremiumIntro'
import SignatureNewsImage from '../../../components/sections/SignatureNewsImage'
import SignaturePremiumValue from '../../../components/sections/SignaturePremiumValue'
import SignaturePremiumSplit from '../../../components/sections/SignaturePremiumSplit'
import SignatureLandscape from '../../../components/sections/SignatureLandscape'
import SignatureComplex from '../../../components/sections/SignatureComplex'
import SignatureComplexBlocks from '../../../components/sections/SignatureComplexBlocks'
import SignatureComplexIntro from '../../../components/sections/SignatureComplexIntro'
import SignatureTransitDetail from '../../../components/sections/SignatureTransitDetail'
import SignatureUnitPlan from '../../../components/sections/SignatureUnitPlan'
import SignatureUnitPlanTabs from '../../../components/sections/SignatureUnitPlanTabs'
import SignatureClub from '../../../components/sections/SignatureClub'
import SignatureClubSimple from '../../../components/sections/SignatureClubSimple'
import SignatureClubZones from '../../../components/sections/SignatureClubZones'
import SignatureClubFloors from '../../../components/sections/SignatureClubFloors'
import SignatureVipForm from '../../../components/sections/SignatureVipForm'
import SignatureHeaderGeomdan from '../../../components/ui/SignatureHeaderGeomdan'
import SignatureFooterGeomdan from '../../../components/ui/SignatureFooterGeomdan'
import SignatureHeroGeomdan from '../../../components/sections/SignatureHeroGeomdan'
import SignatureVisitReservation from '../../../components/sections/SignatureVisitReservation'
import SignatureOverviewGeomdan from '../../../components/sections/SignatureOverviewGeomdan'
import SignatureSellingStory from '../../../components/sections/SignatureSellingStory'
import SignaturePremiumDuo from '../../../components/sections/SignaturePremiumDuo'
import SignatureInfrastructure from '../../../components/sections/SignatureInfrastructure'
import SignatureValueBand from '../../../components/sections/SignatureValueBand'
import SignatureLivingSpaces from '../../../components/sections/SignatureLivingSpaces'
import SignatureSmartHome from '../../../components/sections/SignatureSmartHome'
import SignatureFloorplansGeomdan from '../../../components/sections/SignatureFloorplansGeomdan'
import SignatureSiteplanGeomdan from '../../../components/sections/SignatureSiteplanGeomdan'
import SignatureEmodelHouse from '../../../components/sections/SignatureEmodelHouse'
import SignatureLandscapeGeomdan from '../../../components/sections/SignatureLandscapeGeomdan'
import SignatureCommunityGeomdan from '../../../components/sections/SignatureCommunityGeomdan'
import SignatureNotice from '../../../components/sections/SignatureNotice'
import SignatureFaq from '../../../components/sections/SignatureFaq'
import SignatureLocationGeomdan from '../../../components/sections/SignatureLocationGeomdan'
import SignatureFinalInterest from '../../../components/sections/SignatureFinalInterest'
import SignatureBottomDockGeomdan from '../../../components/ui/SignatureBottomDockGeomdan'
import SignatureArkoneImmersive from '../../../components/sections/SignatureArkoneImmersive'
import {
  SignatureArkoneIntro,
  SignatureHeroArkone,
  SignatureArkoneLandmarks,
  SignatureArkoneNetwork,
  SignatureArkonePopups,
} from '../../../components/sections/SignatureArkoneHighlights'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const site = getSiteBySlug(slug)
  if (!site) return {}
  // metaTitle — 공유 링크(카카오톡 등)에 노출되는 이름만 따로 바꾸고 싶을 때(예: 내부 분양팀 구분용
  // "...2"가 붙은 projectName은 SMS 알림 등에 그대로 쓰되, 고객에게 보이는 제목은 다르게) 지정.
  // 없으면 기존처럼 projectName을 그대로 사용
  const metaTitle = site.metaTitle ?? site.projectName
  return {
    title: `${metaTitle} - 공식 분양 안내`,
    description: `${metaTitle} 분양 정보 및 빠른 상담 신청`,
    openGraph: {
      title: `${metaTitle} - 공식 분양 안내`,
      description: `${metaTitle} 분양 정보 및 빠른 상담 신청`,
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
      locale: 'ko_KR',
      type: 'website',
    },
  }
}

export default async function AptPage({ params }) {
  const { slug } = await params
  const site = getSiteBySlug(slug)
  if (!site) notFound()

  const sig = site.signature

  // 청라 아크원 푸르지오(cheongna-arkone-prugio) 전용 — 참고 시안(풀페이지 스크롤 스냅 + 인트로)이
  // 기존 12섹션 고정 흐름과 완전히 다른 구조라, headerGeomdan과 같은 방식으로 여기서 전용 렌더
  // 트리로 완전히 분기하고 이후의 기존 로직은 타지 않는다. Solapi/구글시트 등 site 최상위 설정은
  // 그대로 두고, 디자인만 이 전용 컴포넌트가 담당한다.
  if (sig.arkoneImmersive) {
    // 이 페이지는 telNumber/adminPhones/sheetId 등 라우팅용 설정과, 재사용하는 개인정보
    // 동의문·회사정보 몇 개만 필요 — site 전체를 그대로 넘기면 안 쓰는 legacy signature.*
    // 콘텐츠(hero/summary/premiumSplits/unitPlan 등)까지 클라이언트 페이로드로 직렬화돼
    // 불필요하게 커지므로, 실제로 쓰는 값만 추려서 넘긴다.
    const immersiveSite = {
      slug: site.slug,
      telNumber: site.telNumber,
      projectName: site.projectName,
      adminPhones: site.adminPhones,
      adminPhonesByUtm: site.adminPhonesByUtm,
      adminPhoneNames: site.adminPhoneNames,
      smsMediaLabel: site.smsMediaLabel,
      colorTheme: site.colorTheme,
      sheetId: site.sheetId,
      sheetTab: site.sheetTab,
      showUtmInSms: site.showUtmInSms,
      visitTimeOptions: site.visitTimeOptions,
      company: { email: site.company.email },
      signature: {
        footer: {
          companyLines: sig.footer.companyLines,
          disclaimers: sig.footer.disclaimers,
          csHours: sig.footer.csHours,
        },
        vipForm: { privacyText: sig.vipForm.privacyText },
      },
    }
    return <SignatureArkoneImmersive site={immersiveSite} />
  }

  // 더샵 검단레이크파크(the-sharp-geomdan-lakepark) 전용 — 참고 사이트(apt-all.app)의 섹션 순서/구성이
  // 기존 12섹션 고정 흐름과 완전히 달라 signature 필드 이름 자체가 다르므로(headerGeomdan 등),
  // 이 필드가 있는 현장이면 여기서 전용 렌더 트리로 완전히 분기하고 이후의 기존 로직은 타지 않는다.
  if (sig.headerGeomdan) {
    return (
      <div>
        <SignatureHeaderGeomdan header={sig.headerGeomdan} telNumber={site.telNumber} />
        {sig.popupNotice?.enabled && (
          <SignaturePopupNoticeGeomdan popup={sig.popupNotice} visitTargetId={sig.visitReservation.id} />
        )}
        <main>
          <SignatureHeroGeomdan hero={sig.heroGeomdan} />
          <SignatureVisitReservation visitReservation={sig.visitReservation} config={site} />
          <SignatureOverviewGeomdan overview={sig.overviewGeomdan} />
          <SignatureSellingStory story={sig.story} />
          <SignaturePremiumDuo premiumDuo={sig.premiumDuo} />
          <SignatureInfrastructure infrastructure={sig.infrastructure} />
          <SignatureValueBand priceBand={sig.priceBand} telNumber={site.telNumber} />
          <SignatureLivingSpaces spaces={sig.spaces} />
          <SignatureSmartHome smarthome={sig.smarthome} />
          <SignatureFloorplansGeomdan floorplans={sig.floorplans} />
          <SignatureSiteplanGeomdan siteplan={sig.siteplan} />
          <SignatureEmodelHouse emodelhouse={sig.emodelhouse} />
          <SignatureLandscapeGeomdan landscape={sig.landscapeGeomdan} />
          <SignatureCommunityGeomdan community={sig.community} />
          <SignatureNotice notice={sig.notice} />
          <SignatureFaq faq={sig.faq} />
          <SignatureLocationGeomdan location={sig.locationGeomdan} />
          <SignatureFinalInterest finalInterest={sig.finalInterest} config={site} />
        </main>
        <SignatureFooterGeomdan footer={sig.footerGeomdan} projectName={site.projectName} />
        {sig.heroGeomdan.mobileBar && (
          <SignatureBottomDockGeomdan
            telNumber={site.telNumber}
            visitTargetId={sig.visitReservation.id}
            callLabel={sig.heroGeomdan.mobileBar.callLabel}
            visitLabel={sig.heroGeomdan.mobileBar.visitLabel}
          />
        )}
      </div>
    )
  }

  // header.gnb 순서와 1:1로 매칭되는 실제 섹션 id — 커뮤니티 섹션(club 또는 communityBlocks)은
  // 현장에 따라 통째로 뺄 수 있어 선택적으로 포함
  // 사업개요(summary)·단지안내(complex)·세대안내(unitPlan)도 현장에 따라 뺄 수 있음 — 뺀 현장은 gnb에서도
  // 해당 라벨을 빼야 순서가 맞음. header.gnbTargetIds가 있으면 이 기본 순서 대신 그 id 목록을 그대로 사용
  // (예: cheongna-arkone-prugio-3 — 청라핵심/교통호재처럼 기본 목록에 없는 섹션을 메뉴에 넣을 때)
  const sectionIds = sig.header.gnbTargetIds ?? [
    ...(sig.summary ? [sig.summary.id] : []),
    sig.location.id,
    sig.premiumValue.id,
    ...(sig.complex ? [sig.complex.id] : []),
    ...(sig.unitPlan ? [sig.unitPlan.id] : []),
    ...(sig.club ? [sig.club.id] : sig.communityBlocks ? [sig.communityBlocks.id] : []),
    sig.vipForm.id,
  ]

  // --navy/--ink/--cream/--gold는 app/globals.css :root에 원종역 색상값으로 전역 선언돼 있음.
  // 공용 Signature* 컴포넌트들은 이 값을 var(--navy, 기존하드코딩값) 형태로 참조하므로,
  // colorTheme이 없는 현장(eupseong-prugio 등)에서는 값을 'initial'로 무효화해 각 파일의
  // 기존 하드코딩 색(폴백)이 그대로 적용되게 하고, 원종역만 실제 팔레트 값으로 덮어씀
  const themeStyle = site.colorTheme
    ? {
        '--navy': site.colorTheme.navy,
        '--ink': site.colorTheme.ink,
        '--cream': site.colorTheme.cream,
        '--gold': site.colorTheme.gold,
        ...(site.colorTheme.visitBtnColor && { '--visit-btn-color': site.colorTheme.visitBtnColor }),
        // visitBtnBg — 방문예약/관심고객 CTA 버튼들(하단바·헤더·퀵메뉴·vipForm 제출)의 배경. 지정한 현장만
        // 글자색도 visitBtnColor로 함께 바꿈(--visit-btn-bg-text) — 미지정 현장은 기존 색 그대로
        ...(site.colorTheme.visitBtnBg && {
          '--visit-btn-bg': site.colorTheme.visitBtnBg,
          ...(site.colorTheme.visitBtnColor && { '--visit-btn-bg-text': site.colorTheme.visitBtnColor }),
        }),
      }
    : { '--navy': 'initial', '--ink': 'initial', '--cream': 'initial', '--gold': 'initial' }

  // 선택 필드 — 현장 자체 웹폰트(CDN CSS + font-family 이름)를 쓰고 싶을 때만 지정. --font-sans를
  // 이 값으로 덮어써서 본문 전반(대부분의 컴포넌트가 var(--font-sans) 참조)에 적용됨
  if (site.webfont) {
    themeStyle['--font-sans'] = site.webfont.family
    // webfont.serifFamily — 제목용 명조 계열(var(--font-serif))까지 현장 폰트로 바꾸고 싶을 때만 지정
    if (site.webfont.serifFamily) themeStyle['--font-serif'] = site.webfont.serifFamily
  }

  return (
    <div style={themeStyle}>
      {/* 선택 필드 — metaPixelId를 지정한 현장에서만, 그 현장 한글 도메인(subdomain.addupapt.kr)으로 접속했을 때만
          Meta 픽셀 로드. 호스트는 mobile-scroll middleware와 같은 방식(new URL)으로 퓨니코드 변환 */}
      {site.metaPixelId && (
        <MetaPixel pixelId={site.metaPixelId} host={new URL(`https://${site.subdomain}.addupapt.kr`).hostname} />
      )}
      {site.webfont && <link rel="stylesheet" href={site.webfont.cssUrl} />}
      {site.extraFontLinks?.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <SignatureHeader
        header={sig.header}
        sectionIds={sectionIds}
        ctaTargetId={sig.vipForm.id}
        telNumberByUtm={site.telNumberByUtm}
        // 청라 더리브 티아모 까사 히어로(variant 'tiamo')는 흰 바탕이라 투명 헤더를 쓰면 메뉴가 안 보여 꺼둠
        transparentOverHero={sig.hero.variant !== 'tiamo'}
      />
      {sig.popupNotice?.enabled && (
        <SignaturePopupNoticeGeomdan popup={sig.popupNotice} visitTargetId={sig.vipForm.id} />
      )}
      {/* 청라 아크원 푸르지오 원본의 인트로(5.6초 전체화면 오버레이)를 일반 템플릿 현장에서 쓸 때 */}
      {sig.arkoneIntro && <SignatureArkoneIntro intro={sig.arkoneIntro} />}
      {/* 시티오씨엘 9단지 인트로(원 드로잉 → 원이 열림)를 일반 히어로 현장에서 전체화면 오버레이로 쓸 때 */}
      {sig.circleIntro && <SignatureCircleIntro intro={sig.circleIntro} />}
      <main>
        {sig.hero.variant === 'arkone' ? (
          <SignatureHeroArkone hero={sig.hero} />
        ) : sig.hero.variant === 'tiamo' ? (
          // 청라 더리브 티아모 까사2 — 참고 사이트 메인(왼쪽 슬라이드 + 오른쪽 흰 바탕 카피 + 하단 남색 물결) 재구성
          <SignatureHeroTiamo hero={sig.hero} />
        ) : sig.hero.variant === 'ociel' ? (
          // 시티오씨엘 9단지 — 공식 사이트 인트로(원 드로잉 → 원이 열리며 메인 슬라이드) 재구성
          <SignatureHeroOciel hero={sig.hero} />
        ) : sig.hero.variant === 'dualLife' ? (
          // 풍무역세권 수자인 그라센트 2차 — 공식 홈페이지 메인 비주얼(노을 전경 + 명조 카피 + 블럭 지시선 태그) 재구성
          <SignatureHeroDualLife
            hero={sig.hero}
            telNumber={site.telNumber}
            telNumberByUtm={site.telNumberByUtm}
            visitTargetId={sig.vipForm.id}
          />
        ) : sig.hero.variant === 'minimal' ? (
          <SignatureHeroMinimal
            hero={sig.hero}
            telNumber={site.telNumber}
            telNumberByUtm={site.telNumberByUtm}
            visitTargetId={sig.vipForm.id}
          />
        ) : sig.hero.variant === 'legacy' ? (
          <SignatureHeroLegacy
            hero={sig.hero}
            telNumber={site.telNumber}
            telNumberByUtm={site.telNumberByUtm}
            visitTargetId={sig.vipForm.id}
          />
        ) : (
          <SignatureHero
            hero={sig.hero}
            telNumber={site.telNumber}
            telNumberByUtm={site.telNumberByUtm}
            visitTargetId={sig.vipForm.id}
            holdForIntro={!!sig.circleIntro}
          />
        )}
        {/* 청라 아크원 푸르지오 원본의 청라 핵심 3종(스타필드/아산병원/하나금융) + 미래 교통 계획 */}
        {sig.arkoneLandmarks && <SignatureArkoneLandmarks landmarks={sig.arkoneLandmarks} />}
        {sig.arkoneNetwork && <SignatureArkoneNetwork network={sig.arkoneNetwork} />}
        {/* benefits.afterHero — 영상 자리(히어로 바로 다음)에 혜택 섹션을 두는 현장용 */}
        {sig.benefits?.afterHero && <SignatureBenefits benefits={sig.benefits} />}
        {sig.videoSection && <SignatureVideoSection video={sig.videoSection} />}
        {sig.vipForm.showAfterVideo && (
          <SignatureVipForm config={site} sectionId={`${sig.vipForm.id}-early`} />
        )}
        {sig.benefits && !sig.benefits.afterHero && <SignatureBenefits benefits={sig.benefits} />}
        {sig.visitReservation && <SignatureVisitReservation visitReservation={sig.visitReservation} config={site} />}
        {sig.summary &&
          (sig.summary.variant === 'tabs' ? (
            <SignatureSummaryTabs summary={sig.summary} />
          ) : (
            <SignatureSummary summary={sig.summary} />
          ))}
        {sig.vipForm.showAfterSummary && (
          <SignatureVipForm config={site} sectionId={`${sig.vipForm.id}-early`} />
        )}
        {sig.location.variant === 'vision' ? (
          <SignatureLocationVision location={sig.location} />
        ) : (
          <SignatureLocation location={sig.location} />
        )}
        {sig.transitDetail && <SignatureTransitDetail transit={sig.transitDetail} />}
        {sig.story && <SignatureSellingStory story={sig.story} />}
        <SignaturePremiumIntro premiumIntro={sig.premiumIntro} />
        {sig.newsImage && <SignatureNewsImage image={sig.newsImage} maxWidth={sig.newsImage.maxWidth} />}
        <SignaturePremiumValue premiumValue={sig.premiumValue} />
        {sig.premiumSplits?.map((split, i) => (
          <SignaturePremiumSplit key={i} split={split} />
        ))}
        {sig.infrastructure && <SignatureInfrastructure infrastructure={sig.infrastructure} />}
        {sig.landscapeGeomdan && <SignatureLandscapeGeomdan landscape={sig.landscapeGeomdan} />}
        {sig.landscape && <SignatureLandscape landscape={sig.landscape} />}
        {sig.complexIntro && <SignatureComplexIntro complexIntro={sig.complexIntro} />}
        {sig.complex &&
          (sig.complex.variant === 'imageTabs' ? (
            <SignatureUnitPlanTabs unitPlan={sig.complex} />
          ) : sig.complex.variant === 'blockTabs' ? (
            <SignatureComplexBlocks complex={sig.complex} />
          ) : (
            <SignatureComplex complex={sig.complex} />
          ))}
        {sig.unitPlan &&
          (sig.unitPlan.variant === 'imageTabs' ? (
            <SignatureUnitPlanTabs unitPlan={sig.unitPlan} />
          ) : (
            <SignatureUnitPlan unitPlan={sig.unitPlan} />
          ))}
        {sig.smarthome && <SignatureSmartHome smarthome={sig.smarthome} />}
        {sig.communityBlocks ? (
          <SignatureCommunityGeomdan community={sig.communityBlocks} />
        ) : (
          sig.club &&
          (sig.club.variant === 'simple' ? (
            <SignatureClubSimple club={sig.club} />
          ) : sig.club.variant === 'floors' ? (
            <SignatureClubFloors club={sig.club} />
          ) : sig.club.variant === 'zones' ? (
            <SignatureClubZones club={sig.club} />
          ) : (
            <SignatureClub club={sig.club} />
          ))
        )}
        {sig.notice && <SignatureNotice notice={sig.notice} />}
        {sig.faq && <SignatureFaq faq={sig.faq} />}
        {sig.eventImage && (
          <SignatureNewsImage id={sig.eventImage.id} image={sig.eventImage} title={sig.eventImage.title} maxWidth={sig.eventImage.maxWidth} />
        )}
        <SignatureVipForm config={site} />
      </main>
      <SignatureFooter
        footer={sig.footer}
        telNumber={site.telNumber}
        telNumberByUtm={site.telNumberByUtm}
        projectName={site.projectName}
      />
      {sig.quickMenu && <SignatureQuickMenu quickMenu={sig.quickMenu} telNumberByUtm={site.telNumberByUtm} />}
      <SignaturePopupSequence popup={sig.popup} config={site} />
      {/* 청라 아크원 푸르지오 원본의 진입 팝업(안내 팝업 → 닫으면 방문예약 다이얼로그) */}
      {sig.arkonePopups && <SignatureArkonePopups popups={sig.arkonePopups} config={site} />}
      {sig.hero.mobileBar && (
        <SignatureMobileBottomBar
          telNumber={site.telNumber}
          telNumberByUtm={site.telNumberByUtm}
          visitTargetId={sig.vipForm.id}
          callLabel={sig.hero.mobileBar.callLabel}
          visitLabel={sig.hero.mobileBar.visitLabel}
        />
      )}
    </div>
  )
}
