"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

// GA4 측정 ID 형식만 허용 (인라인 스크립트에 그대로 삽입되므로 형식 검증으로 방어)
const GA_ID_PATTERN = /^G-[A-Za-z0-9]+$/;

// 최초 로드 pageview는 아래 gtag('config', ...) 스니펫이 이미 전송하므로,
// 이 트래커는 이후 클라이언트 사이드 라우트 전환(예: 현장 목록 → 현장 페이지)만 추가로 기록
function GAPageviewTracker({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    const query = searchParams.toString();
    window.gtag("config", gaId, { page_path: query ? `${pathname}?${query}` : pathname });
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId || !GA_ID_PATTERN.test(gaId)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Suspense fallback={null}>
        <GAPageviewTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
