/**
 * 현장 슬러그: harrington-place-nowon-central
 * URL: /apt/harrington-place-nowon-central
 *
 * TODO: 인천시청역(forena-theshop-incheon-cityhall) 틀을 복사한 스켈레톤입니다.
 * 아래 값들은 전부 실제 데이터로 교체해야 합니다.
 */

const config = {
  slug:        "harrington-place-nowon-central",
  subdomain:   "해링턴플레이스노원센트럴",
  projectName: "해링턴플레이스 노원 센트럴",
  shortName:   "해링턴플레이스 노원 센트럴",
  telNumber:   "1661-8664",
  ogImage:     "/apt/harrington-place-nowon-central/share_img.png",
  favicon:     "/apt/harrington-place-nowon-central/favicon.ico",
  adminPhones:  ["01081789400"],
  sheetId:      "",
  sheetTab:     "해링턴플레이스노원센트럴",

  popup: {
    enabled: false,
    image: {
      src: "/apt/harrington-place-nowon-central/4.webp",
      alt: "해링턴플레이스 노원 센트럴 팝업",
    },
  },

  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "SKT",    value: "SKT" },
    { label: "shinhan", value: "shinhan" },
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
    eyebrow:       "선착순 분양중｜더블역세권",
    eyebrowUrgent: 1,
    brand:         "해링턴플레이스 노원 센트럴",
    title:         "서울 동북권의 정점에 서다\n해링턴 플레이스\n노원 센트럴",
    subtitle:      "분양문의) 1661-8664",
    bgColor:       "linear-gradient(to right, rgb(48 101 192), rgb(55 112 199), rgb(72 127 207))",
    accentKeyword: ["동북권","해링턴 플레이스"],
    image: {
      src:    "/apt/harrington-place-nowon-central/1.webp",
      alt:    "해링턴플레이스 노원 센트럴 대표 이미지",
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
        { src: "/apt/harrington-place-nowon-central/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "해링턴 플레이스 노원 센트럴" },
        { label: "대지위치", value: "서울 노원구 노원로 495(상계동 690, 해링턴플레이스 노원 센트럴)" },
        { label: "공급호수", value: " 299세대중 공공지원 민간임대 150세대, 일반분양 61세대, 공공임대 88세대(서울시 26세대, SH 62세대)" },
        { label: "공급규모", value: "지하4층~지상23층" },
        { label: "시행사",   value: "주식회사 엘앤피개발" },
        { label: "시공사",   value: "효성중공업(주)" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/harrington-place-nowon-central/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/harrington-place-nowon-central/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "자연과 조화를 이루는 단지 설계",
      images: [
        { src: "/apt/harrington-place-nowon-central/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/harrington-place-nowon-central/3-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/harrington-place-nowon-central/3-2.webp", alt: "평면도" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#0F1B33",  // 네이비
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #5b4fd6, #a78bfa)",
      width:      "40px",
      height:     "3px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#b39ef5",
      borderColor: "rgba(179,158,245,0.55)",
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
      accentColor: "#9d7cf0",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:       "rgb(255, 255, 255)",
      fontSize:    "1.15rem",
      accentColor: "#ff6b6b",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#0F1B33",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "linear-gradient(90deg, #8b5cf6, #6d5bf5)",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#d6cdfb",
      color:      "#0F1B33",
    },
    BottomBar_regBtn: {
      background: "#0F1B33",
      color:      "#ffffff",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 해링턴플레이스 노원 센트럴 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 해링턴플레이스 노원 센트럴 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
