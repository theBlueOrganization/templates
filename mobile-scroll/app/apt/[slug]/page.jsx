import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getSiteBySlug, getAllSlugs } from "../../../data/siteRegistry";
import TopNav          from "../../../components/TopNav";
import HeroSection     from "../../../components/HeroSection";
import BenefitsSection from "../../../components/BenefitsSection";
import ImageSection    from "../../../components/ImageSection";
import VideoSection    from "../../../components/VideoSection";
import OfficeShell     from "../../../components/OfficeShell";
import PopupBanner     from "../../../components/PopupBanner";
import ExtraContactForm from "../../../components/ExtraContactForm";
import SunguiRaonPrivate2Landing from "../../../components/sungui-raon-private-2/SunguiRaonPrivate2Landing";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) return {};
  return {
    title: `${site.projectName} - 공식 분양 안내`,
    description: `${site.projectName} 분양 정보 및 빠른 상담 신청`,
    openGraph: {
      title: `${site.projectName} - 공식 분양 안내`,
      description: `${site.projectName} 분양 정보 및 빠른 상담 신청`,
      images: [{ url: site.ogImage }],
    },
    ...(site.favicon ? { icons: { icon: site.favicon } } : {}),
  };
}

export default async function AptPage({ params }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) notFound();

  // 숭의역 라온프라이빗2는 원본 사이트(diling.kr/su-raon)를 그대로 재현한 완전히 다른
  // 구조의 전용 페이지 — 공용 섹션/테마 렌더링 파이프라인을 타지 않고 통째로 분리한다.
  // SMS/구글시트/카카오 발송은 동일한 site 데이터(adminPhones, sheetTab 등)를 그대로 사용.
  if (slug === "sungui-raon-private-2") {
    return <SunguiRaonPrivate2Landing site={site} />;
  }

  const navItems = site.sections
    .filter((s) => s.navLabel)
    .map((s) => ({ label: s.navLabel, target: s.id }));

  const contactConfig = {
    projectName:      site.projectName,
    visitTimeOptions: site.visitTimeOptions,
    privacyText:      site.privacyText,
    sheetId:          site.sheetId,
    sheetTab:         site.sheetTab,
    showUtmInSms:     site.showUtmInSms,
    kakao:            site.kakao,
    slug:             site.slug,
    theme:            site.theme,
    inquiryCountOffset: site.inquiryCountOffset,
  };

  const extraContactForm = (site.extraContactFormByUtm || site.extraContactFormExcludeUtm) && (
    <ExtraContactForm
      utmValues={site.extraContactFormByUtm ? Object.keys(site.extraContactFormByUtm) : null}
      excludeUtmValues={site.extraContactFormExcludeUtm ?? null}
      offices={site.offices ?? null}
      adminPhonesByUtm={site.adminPhonesByUtm}
      defaultAdminPhones={site.adminPhones}
      contactConfig={contactConfig}
    />
  );

  return (
    <>
      <TopNav navItems={navItems} theme={site.theme} />
      <HeroSection {...site.hero} theme={site.theme} heroByUtm={site.heroByUtm} />

      {site.benefits && <BenefitsSection benefits={site.benefits} theme={site.theme} />}

      {/* extraContactFormAfterSectionId 미설정 시 기존 동작대로 히어로 바로 다음에 노출 */}
      {extraContactForm && !site.extraContactFormAfterSectionId && extraContactForm}

      {site.sections.map((section) => (
        <Fragment key={section.id}>
          {section.type === "video"
            ? <VideoSection {...section} theme={site.theme} />
            : <ImageSection {...section} theme={site.theme} />}
          {extraContactForm && site.extraContactFormAfterSectionId === section.id && extraContactForm}
        </Fragment>
      ))}

      <OfficeShell
        offices={site.offices ?? null}
        defaultTelNumber={site.telNumber}
        defaultAdminPhones={site.adminPhones}
        telNumberByUtm={site.telNumberByUtm}
        adminPhonesByUtm={site.adminPhonesByUtm}
        contactConfig={contactConfig}
        company={site.company}
        clientCompany={site.clientCompany}
        theme={site.theme}
      />

      {site.popup && (
        <PopupBanner popup={site.popup} popupByUtm={site.popupByUtm} />
      )}
    </>
  );
}
