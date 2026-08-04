/**
 * 현장 슬러그: sungui-raon-private-2
 * URL: /apt/sungui-raon-private-2
 *
 * 원본 홍보 사이트(diling.kr/su-raon)의 디자인·구조·크기를 그대로 재현한 전용 페이지.
 * 공용 mobile-scroll 섹션/테마 시스템을 쓰지 않고 components/sungui-raon-private-2/ 아래
 * 전용 컴포넌트로 렌더링된다(app/apt/[slug]/page.jsx에서 slug로 분기).
 * 이 파일은 그 전용 컴포넌트가 쓰는 에셋 경로 + SMS/구글시트 발송에 필요한 값만 담는다.
 */

const config = {
  slug:        "sungui-raon-private-2",
  subdomain:   "숭의역라온프라이빗스카이브",
  projectName: "숭의역 라온프라이빗 스카이브",
  shortName:   "숭의역 라온프라이빗",
  telNumber:   "1811-4166",
  ogImage:     "/apt/sungui-raon-private-2/share_img.webp",
  adminPhones:  ["01094216962"], // 임시 번호 — 추후 실제 수신번호로 교체 예정
  sheetId:      "",
  sheetTab:     "숭의역라온프라이빗스카이브2",

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
    phone:     "1666-1755",
  },

  // width/height: 실제 이미지 원본 비율 — <img>에 그대로 넘겨 브라우저가 로드 전에
  // 미리 공간을 확보하게 한다(레이아웃 시프트로 스크롤 중 이미지가 튀는 문제 방지)
  logo: {
    src: "/apt/sungui-raon-private-2/logo.webp",
    alt: "숭의역 라온프라이빗 스카이브",
    width: 492, height: 80,
  },

  heroImage: {
    pc:     "/apt/sungui-raon-private-2/1-pc.webp",
    mobile: "/apt/sungui-raon-private-2/1.webp",
  },

  locationImage: {
    src: "/apt/sungui-raon-private-2/1-1.webp",
    alt: "숭의역 라온프라이빗 입지환경 위치도",
    width: 1100, height: 1360,
  },

  sitePlanImages: [
    { src: "/apt/sungui-raon-private-2/2-1.webp", alt: "단지 배치도",   caption: "단지 배치도",   width: 1024, height: 485 },
    { src: "/apt/sungui-raon-private-2/2-2.webp", alt: "동·호수 배치도", caption: "동·호수 배치도", width: 1024, height: 752 },
    { src: "/apt/sungui-raon-private-2/2-3.webp", alt: "단지 조경",     caption: "단지 조경",     width: 914,  height: 1024 },
    { src: "/apt/sungui-raon-private-2/2-4.webp", alt: "커뮤니티",     caption: "커뮤니티",     width: 1004, height: 2048 },
  ],

  floorPlanTabs: [
    { label: "59A",  src: "/apt/sungui-raon-private-2/3-1.webp", alt: "59A 평면도",  width: 992, height: 1536 },
    { label: "59B",  src: "/apt/sungui-raon-private-2/3-2.webp", alt: "59B 평면도",  width: 992, height: 1536 },
    { label: "84B",  src: "/apt/sungui-raon-private-2/3-3.webp", alt: "84B 평면도",  width: 992, height: 1536 },
    { label: "44OA", src: "/apt/sungui-raon-private-2/3-4.webp", alt: "44OA 평면도", width: 877, height: 1536 },
  ],

  // 방문예약 사은품 증정 팝업 — image는 임시 자리표시자, 실제 사은품 이미지로 교체 예정
  popup: {
    id: "sr2-popup1",
    title: "방문예약 사은품 증정",
    targetText: "방문예약 등록 후, 모델하우스 관람고객",
    targetHighlight: "(담당자 지명 필수)",
    image: {
      src: "/apt/sungui-raon-private-2/popup1.webp",
      alt: "방문예약 사은품 이미지",
      width: 600, height: 800,
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 숭의역 라온프라이빗 스카이브 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 숭의역 라온프라이빗 스카이브 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
