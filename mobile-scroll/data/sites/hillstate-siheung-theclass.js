/**
 * 현장 슬러그: hillstate-siheung-theclass
 * URL: /apt/hillstate-siheung-theclass
 */

const config = {
  slug:        "hillstate-siheung-theclass",
  subdomain:   "힐스테이트시흥더클래스",
  projectName: "힐스테이트 시흥 더 클래스",
  shortName:   "힐스테이트 시흥 더 클래스",
  telNumber:   "1833-6561",
  ogImage:     "/apt/hillstate-siheung-theclass/share_img.png",
  favicon:     "/apt/hillstate-siheung-theclass/favicon.jpg",
  adminPhones:  ["01027075551"],
  sheetId:      "",
  sheetTab:     "힐스테이트시흥더클래스",

  popup: {
    enabled: true,
    image: {
      src: "/apt/hillstate-siheung-theclass/4.webp",
      alt: "힐스테이트 시흥 더 클래스 팝업",
    },
  },

  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "BC",    value: "bc" },
  ],

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
    phone:     "1666-1755",
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
    eyebrow:       "은계·대야 마지막 신축",
    eyebrowUrgent: 1,
    brand:         "힐스테이트 시흥 더 클래스",
    title:         "시흥대야역 도보 3분\n초중고 안심 통학권\nGTX-B 환승 서울생활권",
    subtitle:      "역세권·교육·생활 인프라 완비",
    bgColor:       "linear-gradient(to right, rgb(63 129 200), rgb(60 125 199), rgb(67 131 201))",
    accentKeyword:  ["시흥대야역","안심 통학권","GTX-B","서울생활권"],
    image: {
      src:    "/apt/hillstate-siheung-theclass/1.webp",
      alt:    "힐스테이트 시흥 더 클래스 대표 이미지",
      width:  800,
      height: 500,
    },
  },

  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모를 한눈에",
      images: [
        { src: "/apt/hillstate-siheung-theclass/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "경기도 시흥시 대야동 대야1지구 공동주택 신축공사" },
        { label: "대지위치", value: "경기도 시흥시 대야동 140-5번지 일원" },
        { label: "대지면적", value: "19,062.00㎡ / 5,766.26평" },
        { label: "연면적",   value: "70,301.59㎡/ 21,266.23 평" },
        { label: "건폐율",   value: "17.00%" },
        { label: "용적률",   value: "249.62%" },
        { label: "건축규모", value: "지하2층 ~ 지상27층/5개동" },
        { label: "세대수",   value: "총 430세대" },
        { label: "주차대수", value: "공동주택 601대(세대당 1.39대)" },
        { label: "입주예정일", value: "2029년 3월" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/hillstate-siheung-theclass/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/hillstate-siheung-theclass/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "자연과 조화를 이루는 단지 설계",
      images: [
        { src: "/apt/hillstate-siheung-theclass/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/hillstate-siheung-theclass/3-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/hillstate-siheung-theclass/3-2.webp", alt: "평면도" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#413C3B",  // 커튼 시작 색상 (원하는 색으로 변경)
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #a01a23, #e97476)",
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
      accentColor: "#f5b43b",
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

1. 개인정보의 처리 목적 : 힐스테이트 시흥 더 클래스 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 힐스테이트 시흥 더 클래스 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
