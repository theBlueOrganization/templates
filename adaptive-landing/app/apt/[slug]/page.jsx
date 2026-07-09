import { notFound } from 'next/navigation'
import { getSiteBySlug, getAllSlugs } from '../../../data/siteRegistry'
import TopNav from '../../../components/ui/TopNav'
import HeroSection from '../../../components/sections/HeroSection'
import SectionRenderer from '../../../components/sections/SectionRenderer'
import ContactForm from '../../../components/sections/ContactForm'
import SiteFooter from '../../../components/ui/SiteFooter'
import BottomBar from '../../../components/ui/BottomBar'
import PopupBanner from '../../../components/ui/PopupBanner'
import SignatureHeader from '../../../components/ui/SignatureHeader'
import SignatureFooter from '../../../components/ui/SignatureFooter'
import SignatureHero from '../../../components/sections/SignatureHero'
import SignatureSummary from '../../../components/sections/SignatureSummary'
import SignatureLocation from '../../../components/sections/SignatureLocation'
import SignaturePremiumIntro from '../../../components/sections/SignaturePremiumIntro'
import SignaturePremiumValue from '../../../components/sections/SignaturePremiumValue'
import SignatureLandscape from '../../../components/sections/SignatureLandscape'
import SignatureComplex from '../../../components/sections/SignatureComplex'
import SignatureUnitPlan from '../../../components/sections/SignatureUnitPlan'
import SignatureClub from '../../../components/sections/SignatureClub'
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

// eupseong-prugio처럼 example-apt의 5종 범용 섹션으로 표현할 수 없는, 완전히 다른
// 레이아웃(전용 헤더/폼/드래그 평면도 등)의 현장은 template: 'signature' 값을 두고
// 이 함수가 전용 컴포넌트 스택으로 별도 렌더링한다. 자세한 내용은
// data/sites/eupseong-prugio.js 상단 주석 참고.
function SignaturePage({ site }) {
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

  return (
    <>
      <SignatureHeader header={sig.header} sectionIds={sectionIds} ctaTargetId={sig.vipForm.id} />
      <main>
        <SignatureHero hero={sig.hero} telNumber={site.telNumber} visitTargetId={sig.vipForm.id} />
        <SignatureSummary summary={sig.summary} />
        <SignatureLocation location={sig.location} />
        <SignaturePremiumIntro premiumIntro={sig.premiumIntro} />
        <SignaturePremiumValue premiumValue={sig.premiumValue} />
        <SignatureLandscape landscape={sig.landscape} />
        <SignatureComplex complex={sig.complex} />
        <SignatureUnitPlan unitPlan={sig.unitPlan} />
        <SignatureClub club={sig.club} />
        <SignatureVipForm config={site} />
      </main>
      <SignatureFooter footer={sig.footer} telNumber={site.telNumber} />
    </>
  )
}

export default async function AptPage({ params }) {
  const { slug } = await params
  const site = getSiteBySlug(slug)
  if (!site) notFound()

  if (site.template === 'signature') {
    return <SignaturePage site={site} />
  }

  const navItems = site.sections
    .filter((s) => s.navLabel)
    .map((s) => ({ label: s.navLabel, target: s.id }))

  return (
    <>
      <TopNav items={navItems} telNumber={site.telNumber} />
      <main>
        <HeroSection hero={site.hero} theme={site.theme} />
        {site.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} theme={site.theme} />
        ))}
        <ContactForm config={site} />
      </main>
      <SiteFooter company={site.company} telNumber={site.telNumber} />
      <BottomBar telNumber={site.telNumber} theme={site.theme} />
      {site.popup?.enabled && <PopupBanner popup={site.popup} />}
    </>
  )
}
