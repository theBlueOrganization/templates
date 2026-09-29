import Script from "next/script";

// Meta(페이스북) 픽셀 ID는 숫자만 허용 (인라인 스크립트에 그대로 삽입되므로 형식 검증으로 방어)
const PIXEL_ID_PATTERN = /^\d+$/;

// 현장 설정(site.metaPixelId)에 픽셀 ID가 있는 현장에서만 렌더 — 모든 현장이 root layout을 공유하므로
// layout.jsx가 아니라 app/apt/[slug]/page.jsx에서 현장별로 넣는다. 랜딩이 단일 페이지라 최초 PageView만 전송
export default function MetaPixel({ pixelId }) {
  if (!pixelId || !PIXEL_ID_PATTERN.test(pixelId)) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
