/**
 * 현장 슬러그: sungui-raon-private-skyve
 * URL: /apt/sungui-raon-private-skyve
 */

const config = {
  slug:        "sungui-raon-private-skyve",
  projectName: "숭의역 라온프라이빗 스카이브",
  shortName:   "숭의역 라온프라이빗 스카이브",
  telNumber:   "1800-2261",
  ogImage:     "/apt/sungui-raon-private-skyve/share_img.png",
  adminPhones:  ["01071901052","01048086474","01090447402"],
  sheetId:      "",
  sheetTab:     "숭의역라온프라이빗스카이브",

  popup: {
    enabled: true,
    image: {
      src: "/apt/sungui-raon-private-skyve/4.webp",
      alt: "숭의역 라온프라이빗 스카이브 팝업",
    },
  },

  // utm_source=SKT1/Lpoint2/sh로 들어온 방문자에게만 팝업 이미지를 다르게 표시
  popupByUtm: {
    SKT1: {
      src: "/apt/sungui-raon-private-skyve/4-2.webp",
      alt: "숭의역 라온프라이빗 스카이브 팝업",
    },
    Lpoint2: {
      src: "/apt/sungui-raon-private-skyve/4-2.webp",
      alt: "숭의역 라온프라이빗 스카이브 팝업",
    },
    sh: {
      src: "/apt/sungui-raon-private-skyve/4-2.webp",
      alt: "숭의역 라온프라이빗 스카이브 팝업",
    },
  },

  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "SKT1",    value: "SKT1" },
    { label: "SKT2",    value: "SKT2" },
    { label: "Lpoint",    value: "lpoint" },
    { label: "Lpoint2",    value: "Lpoint2" },
    { label: "신한",    value: "sh" },
    { label: "B",    value: "B" },
    { label: "C",    value: "C" },
  ],

  // utm_source=sh로 들어온 상담만 문자 발송 시 현장명 뒤에 "+신한"을 붙여서 표시
  smsProjectNameByUtm: {
    sh: "신한",
  },

  // utm_source=B로 들어온 방문자에게만 화면 문의처 번호를 다르게 표시 (문자 수신번호(adminPhones)는 영향 없음)
  telNumberByUtm: {
    B: "1666-1352",
  },

  // utm_source=B로 들어온 상담만 문자 대신 카카오 알림톡으로 발송 (다른 유입경로는 그대로 문자)
  kakaoByUtm: {
    B: "KA01TP260622093537285QA4EPtdxJyI",
  },

  // utm_source=B는 기존 팀 수신번호가 아니라 이 번호로만 발송 (임시번호, 추후 고객사 번호로 교체 예정)
  adminPhonesByUtm: {
    B: ["01094216962"],
  },

  // utm_source=C로 들어온 방문자에게만 히어로 문구를 다르게 표시 (subtitle은 기존 값 유지)
  heroByUtm: {
    C: {
      title: "4가지 노선 초역세권 41층\n인천 25평 3억원대 아파트\n주변 시세 차익 1억 예상",
      accentKeyword: ["4가지 노선", "3억원대", "1억 예상"],
    },
  },

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
  },

  visitTimeOptions: [
    "10시 이전",
    "10:00 ~ 11:00",
    "11:00 ~ 12:00",
    "12:00 ~ 13:00",
    "13:00 ~ 14:00",
    "14:00 ~ 15:00",
    "15:00 ~ 16:00",
    "16:00 ~ 17:00",
    "17:00 ~ 18:00",
  ],

  hero: {
    eyebrow:       "숭의역 초역세권",
    eyebrowUrgent: 1,
    brand:         "숭의역 라온프라이빗 스카이브",
    title: "5년전 분양가 그대로\n인천 3억원대 아파트\n전세금이면 내집 마련 가능\n지금 아니면 다시 없을 기회",
    subtitle:      "숭의역 도보 5분 · 신광초 50m",
    bgColor:       " #181a37",
    accentKeyword:  ["5년전 분양가", "3억원대","내집 마련"],
    image: {
      src:    "/apt/sungui-raon-private-skyve/1.webp",
      alt:    "숭의역 라온프라이빗 스카이브 대표 이미지",
      width:  800,
      height: 500,
    },
    enableVariants: true,
  },

  sections: [
    {
      id:       "pet-friendly",
      type:     "image",
      title:    "특별제공",
      subtitle: "라온 프라이빗의 펫특화 설계",
      images: [
        { src: "/apt/sungui-raon-private-skyve/1-4.webp", alt: "펫특화 설계" },
      ],
    },
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모·특화설계를 한눈에",
      images: [
        { src: "/apt/sungui-raon-private-skyve/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "인천 신흥동3가 지역주택조합 주상복합 신축공사" },
        { label: "대지위치", value: "인천광역시 중구 신흥동3가 7-79번지 외 25필지" },
        { label: "대지면적", value: "8,155.20㎡" },
        { label: "연면적",   value: "94,114.8939㎡" },
        { label: "건폐율",   value: "50.04%" },
        { label: "용적률",   value: "751.59%" },
        { label: "건축규모", value: "아파트(지하5층,지상41층) / 오피스텔(지하5층, 지상 33층) / 근린생활시설(지하1층, 지상3층)" },
        { label: "세대수",   value: ["총 608세대(아파트 440세대, 오피스텔 168실)"] },
        { label: "주차대수", value: "총 730대" },
        { label: "전용면적", value: "아파트 59㎡, 84㎡ / 오피스텔 44㎡OA" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/sungui-raon-private-skyve/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/sungui-raon-private-skyve/1-3.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "초고층 고품격 주거공간",
      images: [
        { src: "/apt/sungui-raon-private-skyve/2-1.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/sungui-raon-private-skyve/2-2.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/sungui-raon-private-skyve/3-1.webp", alt: "평면도" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#293747",  // 커튼 시작 색상 (원하는 색으로 변경)
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #8baf3d, #a7ce41)",
      width:      "40px",
      height:     "3px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#ff6b6b",
      borderColor: "rgba(255,107,107,0.5)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent)
    eyebrowUrgent: {
      color:       "#ff6b6b",
      borderColor: "rgba(255,107,107,0.5)",
    },

    // 히어로 브랜드명
    brand: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },
    // 히어로 메인 타이틀
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(1.6rem,8vw,2.7rem)",
      accentColor: "#a7ce41",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#1e293b",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#e2e8f0",
      color:      "#1e293b",
    },
    BottomBar_regBtn: {
      background: "#1e3a5f",
      color:      "#ffffff",
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