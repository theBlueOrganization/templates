"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import BottomBar from "./BottomBar";

function OfficeShellInner({ offices, defaultTelNumber, defaultAdminPhones, contactConfig, company, theme }) {
  const searchParams = useSearchParams();
  const officeId = searchParams.get("office");

  const officeData = offices
    ? (offices.find((o) => o.id === officeId) ?? offices[0])
    : null;

  const telNumber   = officeData?.telNumber   ?? defaultTelNumber;
  const adminPhones = officeData?.adminPhones ?? defaultAdminPhones;

  return (
    <>
      <ContactForm config={{ ...contactConfig, adminPhones }} />
      <SiteFooter company={company} telNumber={telNumber} />
      <BottomBar telNumber={telNumber} theme={theme} />
    </>
  );
}

export default function OfficeShell({ offices, defaultTelNumber, defaultAdminPhones, contactConfig, company, theme }) {
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
        contactConfig={contactConfig}
        company={company}
        theme={theme}
      />
    </Suspense>
  );
}
