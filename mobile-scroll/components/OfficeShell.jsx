"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import BottomBar from "./BottomBar";

function OfficeShellInner({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, contactConfig, company, theme }) {
  const searchParams = useSearchParams();
  const officeId = searchParams.get("office");
  const utmSource = searchParams.get("utm_source");

  const officeData = offices
    ? (offices.find((o) => o.id === officeId) ?? offices[0])
    : null;

  // telNumberByUtm에 등록된 utm_source로 들어온 경우에만 화면 문의처 번호를 덮어씀 (adminPhones는 영향 없음)
  const telNumber   = officeData?.telNumber ?? telNumberByUtm?.[utmSource] ?? defaultTelNumber;
  const adminPhones = officeData?.adminPhones ?? defaultAdminPhones;

  return (
    <>
      <ContactForm config={{ ...contactConfig, adminPhones }} />
      <SiteFooter company={company} telNumber={telNumber} />
      <BottomBar telNumber={telNumber} theme={theme} />
    </>
  );
}

export default function OfficeShell({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, contactConfig, company, theme }) {
  const fallbackTelNumber   = offices?.[0]?.telNumber   ?? defaultTelNumber;
  const fallbackAdminPhones = offices?.[0]?.adminPhones ?? defaultAdminPhones;

  return (
    <Suspense
      fallback={
        <>
          <ContactForm config={{ ...contactConfig, adminPhones: fallbackAdminPhones }} />
          <SiteFooter company={company} telNumber={fallbackTelNumber} />
          <BottomBar telNumber={fallbackTelNumber} theme={theme} />
        </>
      }
    >
      <OfficeShellInner
        offices={offices}
        defaultTelNumber={defaultTelNumber}
        defaultAdminPhones={defaultAdminPhones}
        telNumberByUtm={telNumberByUtm}
        contactConfig={contactConfig}
        company={company}
        theme={theme}
      />
    </Suspense>
  );
}
