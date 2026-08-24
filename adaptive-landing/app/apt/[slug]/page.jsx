import { notFound } from 'next/navigation'
import { getSiteBySlug, getAllSlugs } from '../../../data/siteRegistry'
import SignatureHeader from '../../../components/ui/SignatureHeader'
import SignatureFooter from '../../../components/ui/SignatureFooter'
import SignatureQuickMenu from '../../../components/ui/SignatureQuickMenu'
import SignaturePopupBanner from '../../../components/ui/SignaturePopupBanner'
import SignatureMobileBottomBar from '../../../components/ui/SignatureMobileBottomBar'
import SignatureHero from '../../../components/sections/SignatureHero'
import SignatureHeroMinimal from '../../../components/sections/SignatureHeroMinimal'
import SignatureBenefits from '../../../components/sections/SignatureBenefits'
import SignatureSummary from '../../../components/sections/SignatureSummary'
import SignatureLocation from '../../../components/sections/SignatureLocation'
import SignaturePremiumIntro from '../../../components/sections/SignaturePremiumIntro'
import SignaturePremiumValue from '../../../components/sections/SignaturePremiumValue'
import SignatureLandscape from '../../../components/sections/SignatureLandscape'
import SignatureComplex from '../../../components/sections/SignatureComplex'
import SignatureUnitPlan from '../../../components/sections/SignatureUnitPlan'
import SignatureClub from '../../../components/sections/SignatureClub'
import SignatureClubSimple from '../../../components/sections/SignatureClubSimple'
import SignatureClubZones from '../../../components/sections/SignatureClubZones'
import SignatureVipForm from '../../../components/sections/SignatureVipForm'

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
  return {
    title: `${site.projectName} - 공식 분양 안내`,
    description: `${site.projectName} 분양 정보 및 빠른 상담 신청`,
    openGraph: {
      title: `${site.projectName} - 공식 분양 안내`,
      description: `${site.projectName} 분양 정보 및 빠른 상담 신청`,
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
  // header.gnb 순서(사업안내/입지환경/프리미엄/단지안내/세대안내/커뮤니티/상담신청 및 방문예약)와 1:1로 매칭되는 실제 섹션 id
  const sectionIds = [
    sig.summary.id,
    sig.location.id,
    sig.premiumValue.id,
    sig.complex.id,
    sig.unitPlan.id,
    sig.club.id,
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
      }
    : { '--navy': 'initial', '--ink': 'initial', '--cream': 'initial', '--gold': 'initial' }

  return (
    <div style={themeStyle}>
      <SignatureHeader
        header={sig.header}
        sectionIds={sectionIds}
        ctaTargetId={sig.vipForm.id}
        telNumberByUtm={site.telNumberByUtm}
        transparentOverHero
      />
      <main>
        {sig.hero.variant === 'minimal' ? (
          <SignatureHeroMinimal
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
        {sig.benefits && <SignatureBenefits benefits={sig.benefits} />}
        <SignatureSummary summary={sig.summary} />
        <SignatureLocation location={sig.location} />
        <SignaturePremiumIntro premiumIntro={sig.premiumIntro} />
        <SignaturePremiumValue premiumValue={sig.premiumValue} />
        {sig.landscape && <SignatureLandscape landscape={sig.landscape} />}
        <SignatureComplex complex={sig.complex} />
        <SignatureUnitPlan unitPlan={sig.unitPlan} />
        {sig.club.variant === 'simple' ? (
          <SignatureClubSimple club={sig.club} />
        ) : sig.club.variant === 'zones' ? (
          <SignatureClubZones club={sig.club} />
        ) : (
          <SignatureClub club={sig.club} />
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
      {sig.popup?.enabled && <SignaturePopupBanner popup={sig.popup} />}
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
