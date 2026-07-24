"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

function ExtraContactFormInner({ utmValues, offices, adminPhonesByUtm, defaultAdminPhones, contactConfig }) {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utm_source");

  // extraContactFormByUtm에 등록된 utm_source로 들어온 경우에만 상담신청 폼을 추가로 노출
  if (!utmSource || !utmValues.includes(utmSource)) return null;

  const officeId = searchParams.get("office");
  const officeData = offices ? (offices.find((o) => o.id === officeId) ?? offices[0]) : null;
  const adminPhones = officeData?.adminPhones ?? adminPhonesByUtm?.[utmSource] ?? defaultAdminPhones;
  const officeLabel = officeData ? `${officeData.id} (${officeData.telNumber})` : "";

  return <ContactForm config={{ ...contactConfig, adminPhones, officeLabel }} instanceId="top" />;
}

export default function ExtraContactForm(props) {
  return (
    <Suspense fallback={null}>
      <ExtraContactFormInner {...props} />
    </Suspense>
  );
}
