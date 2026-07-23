"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import BottomBar from "./BottomBar";

function OfficeShellInner({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, adminPhonesByUtm, contactConfig, company, theme }) {
  const searchParams = useSearchParams();
  const officeId = searchParams.get("office");
  const utmSource = searchParams.get("utm_source");

  const officeData = offices
    ? (offices.find((o) => o.id === officeId) ?? offices[0])
    : null;

  // telNumberByUtm/adminPhonesByUtm에 등록된 utm_source로 들어온 경우에만 화면 번호·수신자를 덮어씀
  const telNumber   = officeData?.telNumber   ?? telNumberByUtm?.[utmSource]   ?? defaultTelNumber;
  const adminPhones = officeData?.adminPhones ?? adminPhonesByUtm?.[utmSource] ?? defaultAdminPhones;
  const officeLabel = officeData ? `${officeData.id} (${officeData.telNumber})` : "";

  return (
    <>
      <ContactForm config={{ ...contactConfig, adminPhones, officeLabel }} />
      <SiteFooter company={company} telNumber={telNumber} />
      <BottomBar telNumber={telNumber} theme={theme} />
    </>
  );
}

export default function OfficeShell({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, adminPhonesByUtm, contactConfig, company, theme }) {
  const fallbackTelNumber   = offices?.[0]?.telNumber   ?? defaultTelNumber;
  const fallbackAdminPhones = offices?.[0]?.adminPhones ?? defaultAdminPhones;
  const fallbackOfficeLabel = offices?.[0] ? `${offices[0].id} (${offices[0].telNumber})` : "";

  return (
    <Suspense
      fallback={
        <>
          <ContactForm config={{ ...contactConfig, adminPhones: fallbackAdminPhones, officeLabel: fallbackOfficeLabel }} />
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
        adminPhonesByUtm={adminPhonesByUtm}
        contactConfig={contactConfig}
        company={company}
        theme={theme}
      />
    </Suspense>
  );
}
