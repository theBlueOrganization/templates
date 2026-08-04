"use client";

import landingCss from "./landingCss";
import SunguiRaonPrivate2Nav from "./SunguiRaonPrivate2Nav";
import SunguiRaonPrivate2Hero from "./SunguiRaonPrivate2Hero";
import SunguiRaonPrivate2Location from "./SunguiRaonPrivate2Location";
import SunguiRaonPrivate2SitePlan from "./SunguiRaonPrivate2SitePlan";
import SunguiRaonPrivate2FloorPlan from "./SunguiRaonPrivate2FloorPlan";
import SunguiRaonPrivate2ContactForm from "./SunguiRaonPrivate2ContactForm";
import SunguiRaonPrivate2FloatingCta from "./SunguiRaonPrivate2FloatingCta";
import SunguiRaonPrivate2ReservationPopup from "./SunguiRaonPrivate2ReservationPopup";
import SunguiRaonPrivate2Footer from "./SunguiRaonPrivate2Footer";

// 원본(diling.kr/su-raon)을 그대로 재현한 전용 페이지 조립부.
// 공용 mobile-scroll 섹션/테마 파이프라인과는 완전히 분리되어 있어 다른 현장에 영향 없음.
export default function SunguiRaonPrivate2Landing({ site }) {
  return (
    <div className="sr2">
      <style>{landingCss}</style>

      <SunguiRaonPrivate2Nav logo={site.logo} />
      <SunguiRaonPrivate2Hero heroImage={site.heroImage} alt={`${site.projectName} 대표 이미지`} />
      <SunguiRaonPrivate2Location image={site.locationImage} />
      <SunguiRaonPrivate2SitePlan images={site.sitePlanImages} />
      <SunguiRaonPrivate2FloorPlan tabs={site.floorPlanTabs} />
      <SunguiRaonPrivate2ContactForm
        projectName={site.projectName}
        adminPhones={site.adminPhones}
        sheetId={site.sheetId}
        sheetTab={site.sheetTab}
        slug={site.slug}
        privacyText={site.privacyText}
      />
      <SunguiRaonPrivate2FloatingCta telNumber={site.telNumber} />
      <SunguiRaonPrivate2Footer company={site.company} telNumber={site.telNumber} projectName={site.projectName} logo={site.logo} />

      {site.popup && (
        <SunguiRaonPrivate2ReservationPopup
          id={site.popup.id}
          image={site.popup.image}
          title={site.popup.title}
          targetText={site.popup.targetText}
          targetHighlight={site.popup.targetHighlight}
          projectName={site.projectName}
          adminPhones={site.adminPhones}
          sheetId={site.sheetId}
          sheetTab={site.sheetTab}
          slug={site.slug}
          privacyText={site.privacyText}
        />
      )}
    </div>
  );
}
