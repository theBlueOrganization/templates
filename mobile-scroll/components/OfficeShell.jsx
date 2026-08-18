"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import ClientFooter from "./ClientFooter";
import SiteFooter from "./SiteFooter";
import BottomBar from "./BottomBar";

function OfficeShellInner({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, adminPhonesByUtm, contactConfig, company, clientCompany, theme }) {
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
  // clientCompany는 단일 객체 또는 배열(분양대행사+시행사 등) 둘 다 지원
  const hasClientCompany = Array.isArray(clientCompany) ? clientCompany.length > 0 : !!clientCompany;

  return (
    <>
      <ContactForm config={{ ...contactConfig, adminPhones, officeLabel }} />
      <ClientFooter clientCompany={clientCompany} telNumber={telNumber} theme={theme} />
      <SiteFooter company={company} telNumber={telNumber} hideLeadContact={hasClientCompany} />
      <BottomBar telNumber={telNumber} theme={theme} />
    </>
  );
}

export default function OfficeShell({ offices, defaultTelNumber, defaultAdminPhones, telNumberByUtm, adminPhonesByUtm, contactConfig, company, clientCompany, theme }) {
  const fallbackTelNumber   = offices?.[0]?.telNumber   ?? defaultTelNumber;
  const fallbackAdminPhones = offices?.[0]?.adminPhones ?? defaultAdminPhones;
  const fallbackOfficeLabel = offices?.[0] ? `${offices[0].id} (${offices[0].telNumber})` : "";
  const hasClientCompany = Array.isArray(clientCompany) ? clientCompany.length > 0 : !!clientCompany;

  return (
    <Suspense
      fallback={
        <>
          <ContactForm config={{ ...contactConfig, adminPhones: fallbackAdminPhones, officeLabel: fallbackOfficeLabel, disabled: Boolean(offices) }} />
          <ClientFooter clientCompany={clientCompany} telNumber={fallbackTelNumber} theme={theme} />
          <SiteFooter company={company} telNumber={fallbackTelNumber} hideLeadContact={hasClientCompany} />
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
        clientCompany={clientCompany}
        theme={theme}
      />
    </Suspense>
  );
}
