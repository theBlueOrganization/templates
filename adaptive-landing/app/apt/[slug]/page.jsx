import { notFound } from 'next/navigation'
import { getSiteBySlug, getAllSlugs } from '../../../data/siteRegistry'
import SignatureHeader from '../../../components/ui/SignatureHeader'
import SignatureFooter from '../../../components/ui/SignatureFooter'
import SignatureQuickMenu from '../../../components/ui/SignatureQuickMenu'
import SignaturePopupSequence from '../../../components/ui/SignaturePopupSequence'
import SignaturePopupNoticeGeomdan from '../../../components/ui/SignaturePopupNoticeGeomdan'
import SignatureMobileBottomBar from '../../../components/ui/SignatureMobileBottomBar'
import SignatureHero from '../../../components/sections/SignatureHero'
import SignatureVideoSection from '../../../components/sections/SignatureVideoSection'
import SignatureHeroMinimal from '../../../components/sections/SignatureHeroMinimal'
import SignatureHeroLegacy from '../../../components/sections/SignatureHeroLegacy'
import SignatureBenefits from '../../../components/sections/SignatureBenefits'
import SignatureSummary from '../../../components/sections/SignatureSummary'
import SignatureLocation from '../../../components/sections/SignatureLocation'
import SignaturePremiumIntro from '../../../components/sections/SignaturePremiumIntro'
import SignatureNewsImage from '../../../components/sections/SignatureNewsImage'
import SignaturePremiumValue from '../../../components/sections/SignaturePremiumValue'
import SignaturePremiumSplit from '../../../components/sections/SignaturePremiumSplit'
import SignatureLandscape from '../../../components/sections/SignatureLandscape'
import SignatureComplex from '../../../components/sections/SignatureComplex'
import SignatureTransitDetail from '../../../components/sections/SignatureTransitDetail'
import SignatureUnitPlan from '../../../components/sections/SignatureUnitPlan'
import SignatureClub from '../../../components/sections/SignatureClub'
import SignatureClubSimple from '../../../components/sections/SignatureClubSimple'
import SignatureClubZones from '../../../components/sections/SignatureClubZones'
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
        vipForm: { privacyText: sig.vipForm.privacyText, serviceOptions: sig.vipForm.serviceOptions },
        popup: sig.popup,
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
  const sectionIds = [
    sig.summary.id,
    sig.location.id,
    sig.premiumValue.id,
    sig.complex.id,
    sig.unitPlan.id,
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
      }
    : { '--navy': 'initial', '--ink': 'initial', '--cream': 'initial', '--gold': 'initial' }

  // 선택 필드 — 현장 자체 웹폰트(CDN CSS + font-family 이름)를 쓰고 싶을 때만 지정. --font-sans를
  // 이 값으로 덮어써서 본문 전반(대부분의 컴포넌트가 var(--font-sans) 참조)에 적용됨
  if (site.webfont) {
    themeStyle['--font-sans'] = site.webfont.family
  }

  return (
    <div style={themeStyle}>
      {site.webfont && <link rel="stylesheet" href={site.webfont.cssUrl} />}
      {site.extraFontLinks?.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <SignatureHeader
        header={sig.header}
        sectionIds={sectionIds}
        ctaTargetId={sig.vipForm.id}
        telNumberByUtm={site.telNumberByUtm}
        transparentOverHero
      />
      {sig.popupNotice?.enabled && (
        <SignaturePopupNoticeGeomdan popup={sig.popupNotice} visitTargetId={sig.vipForm.id} />
      )}
      <main>
        {sig.hero.variant === 'minimal' ? (
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
          />
        )}
        {sig.videoSection && <SignatureVideoSection video={sig.videoSection} />}
        {sig.vipForm.showAfterVideo && (
          <SignatureVipForm config={site} sectionId={`${sig.vipForm.id}-early`} />
        )}
        {sig.benefits && <SignatureBenefits benefits={sig.benefits} />}
        {sig.visitReservation && <SignatureVisitReservation visitReservation={sig.visitReservation} config={site} />}
        <SignatureSummary summary={sig.summary} />
        {sig.vipForm.showAfterSummary && (
          <SignatureVipForm config={site} sectionId={`${sig.vipForm.id}-early`} />
        )}
        <SignatureLocation location={sig.location} />
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
        <SignatureComplex complex={sig.complex} />
        <SignatureUnitPlan unitPlan={sig.unitPlan} />
        {sig.smarthome && <SignatureSmartHome smarthome={sig.smarthome} />}
        {sig.communityBlocks ? (
          <SignatureCommunityGeomdan community={sig.communityBlocks} />
        ) : (
          sig.club &&
          (sig.club.variant === 'simple' ? (
            <SignatureClubSimple club={sig.club} />
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
