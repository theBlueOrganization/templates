/**
 * 현장 슬러그: cheonwang-moaelga-treview
 * URL: /apt/cheonwang-moaelga-treview
 */

const config = {
  slug:        "cheonwang-moaelga-treview",
  projectName: "천왕역 모아엘가 트레뷰",
  shortName:   "천왕역 모아엘가 트레뷰",
  telNumber:   "1688-0814",
  ogImage:     "/apt/cheonwang-moaelga-treview/share_img.png",
  adminPhones:  ["01094026953"],
  sheetId:      "",
  sheetTab:     "천왕역모아엘가트레뷰",

  // 순차 표시: 첫 번째 팝업을 닫으면 두 번째 팝업이 이어서 뜸
  popup: [
    {
      enabled: true,
      image: {
        src: "/apt/cheonwang-moaelga-treview/4.webp",
        alt: "천왕역 모아엘가 트레뷰 팝업",
      },
    },
    {
      enabled: true,
      image: {
        src: "/apt/cheonwang-moaelga-treview/4-1.webp",
        alt: "천왕역 모아엘가 트레뷰 팝업",
      },
    },
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
    eyebrow:       "토지거래허가 제외｜천왕역 초역세권",
    eyebrowUrgent: 2,
    brand:         "천왕역 모아엘가 트레뷰",
    title: "토지거래허가 제외 특권\n천왕역 1분 초역세권\n서울 직통 특급 교통망",
    subtitle:      "토지거래허가 제외 특권",
    bgColor:       " #233E7A",
    accentKeyword:  ["토지거래허가 제외", "초역세권", "특급 교통망"],
    image: {
      src:    "/apt/cheonwang-moaelga-treview/1.webp",
      alt:    "천왕역 모아엘가 트레뷰 대표 이미지",
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
      subtitle: "입지·규모·특화설계를 한눈에",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "서울시 구로구 오류동 213번지 일대" },
        { label: "용도지구", value: "2종일반주거지역, 준주거지역" },
        { label: "전체면적", value: "10,463.5㎡ (3,165.2 평)" },
        { label: "건축면적", value: "3,212.55㎡ (971.79 평)" },
        { label: "전체연면적", value: "73,641.98㎡ (22,276.69 평)" },
        { label: "건폐율",   value: "31.86%" },
        { label: "용적률",   value: "442.18%" },
        { label: "건축규모", value: "지하 4층~지상 26층" },
        { label: "세대수",   value: ["총 440세대"] },
        { label: "주차대수", value: "총 530 (세대당 1.13대)" },
        { label: "전용면적", value: "67㎡, 84㎡A, 84㎡B" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "초고층 고품격 주거공간",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/3-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/cheonwang-moaelga-treview/3-2.webp", alt: "평면도" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#233E7A",  // 커튼 시작 색상 (원하는 색으로 변경)
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #edcc1e, #ed9a1e)",
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
      fontSize:    "clamp(1.6rem,9vw,3rem)",
      accentColor: "#edcc1e",
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

1. 개인정보의 처리 목적 : 천왕역 모아엘가 트레뷰 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 천왕역 모아엘가 트레뷰 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;