import { notFound } from "next/navigation";
import { getSiteBySlug, getAllSlugs } from "../../../data/siteRegistry";
import TopNav       from "../../../components/TopNav";
import HeroSection  from "../../../components/HeroSection";
import ImageSection from "../../../components/ImageSection";
import OfficeShell  from "../../../components/OfficeShell";
import PopupBanner  from "../../../components/PopupBanner";

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
  };
}

export default async function AptPage({ params }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) notFound();

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
  };

  return (
    <>
      <TopNav navItems={navItems} />
      <HeroSection {...site.hero} theme={site.theme} />

      {site.sections.map((section) => (
        <ImageSection key={section.id} {...section} theme={site.theme} />
      ))}

      <OfficeShell
        offices={site.offices ?? null}
        defaultTelNumber={site.telNumber}
        defaultAdminPhones={site.adminPhones}
        contactConfig={contactConfig}
        company={site.company}
        theme={site.theme}
      />

      {site.popup?.enabled && (
        <PopupBanner popup={site.popup} />
      )}
    </>
  );
}
