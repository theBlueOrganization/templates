import Script from "next/script";

// Meta(페이스북) 픽셀 ID는 숫자만 허용 (인라인 스크립트에 그대로 삽입되므로 형식 검증으로 방어)
const PIXEL_ID_PATTERN = /^\d+$/;
// 허용 호스트도 인라인 스크립트에 삽입되므로 도메인 문자(퓨니코드 포함)만 허용
const HOST_PATTERN = /^[a-z0-9.-]+$/;

// 현장 설정(site.metaPixelId)에 픽셀 ID가 있는 현장에서만 렌더 — 모든 현장이 root layout을 공유하므로
// layout.jsx가 아니라 app/apt/[slug]/page.jsx에서 현장별로 넣는다. 랜딩이 단일 페이지라 최초 PageView만 전송.
// host — 이 주소(현장 한글 도메인의 퓨니코드 호스트)로 접속했을 때만 픽셀 실행. vercel.app 배포 주소 등
// 다른 주소로 같은 페이지를 열면 실행하지 않아 광고 데이터에 섞이지 않음. JS가 꺼진 환경에서는 접속 주소를
// 확인할 수 없어 <noscript> 이미지 픽셀은 넣지 않음
export default function MetaPixel({ pixelId, host }) {
  if (!pixelId || !PIXEL_ID_PATTERN.test(pixelId)) return null;
  if (!host || !HOST_PATTERN.test(host)) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        if (window.location.hostname === '${host}') {
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
        }
      `}
    </Script>
  );
}
