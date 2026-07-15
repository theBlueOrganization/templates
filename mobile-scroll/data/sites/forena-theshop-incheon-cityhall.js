/**
 * 현장 슬러그: forena-theshop-incheon-cityhall
 * URL: /apt/forena-theshop-incheon-cityhall
 */

const config = {
  slug:        "forena-theshop-incheon-cityhall",
  projectName: "포레나더샵인천시청역",
  shortName:   "포레나더샵인천시청역",
  telNumber:   "1668 0093",
  ogImage:     "/apt/forena-theshop-incheon-cityhall/share_img.png",
  favicon:     "/apt/forena-theshop-incheon-cityhall/favicon.ico",
  adminPhones:  ["01034894684"],
  sheetId:      "",
  sheetTab:     "포레나더샵인천시청역",

  popup: {
    enabled: true,
    image: {
      src: "/apt/forena-theshop-incheon-cityhall/4.webp",
      alt: "포레나더샵인천시청역 팝업",
    },
  },
  
  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "SKT",    value: "SKT" },
    { label: "shinhan",    value: "shinhan" },
  ],


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
    eyebrow:       "트리플 역세권｜초품아 안심학군｜중앙공원 에코라이프",
    eyebrowUrgent: 1,
    brand:         "포레나더샵 인천시청역",
    title:         "인천시청역 트리플 역세권\nGTX-B로 더 빨라질 서울\n2,568세대 명품 대단지",
    subtitle:      "간석1구역 주택재개발 정비사업",
    bgColor:       "linear-gradient(to right, rgb(48 101 192), rgb(55 112 199), rgb(72 127 207))",
    accentKeyword:  ["인천시청역", "GTX-B", "2,568세대"],
    image: {
      src:    "/apt/forena-theshop-incheon-cityhall/1.webp",
      alt:    "포레나더샵인천시청역 대표 이미지",
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
        { src: "/apt/forena-theshop-incheon-cityhall/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "상인천초교 주변 주택재개발 정비사업" },
        { label: "대지위치", value: "인천광역시 남동구 간석1동 311-1번지 일원" },
        { label: "대지면적", value: "89,594.40㎡ / 27,102.31평" },
        { label: "건축면적", value: "14,186.0751㎡ / 4,291.29평" },
        { label: "연면적",   value: "390,151.2376㎡ / 118,020.75평" },
        { label: "건폐율",   value: "15.83%" },
        { label: "용적률",   value: "272.69%" },
        { label: "건축규모", value: "지하4층 ~ 지상18층~35층" },
        { label: "세대수",   value: "총 2,568세대(일반분양 735세대)" },
        { label: "주차대수", value: "총 3,243대(세대당 1.26대)" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/forena-theshop-incheon-cityhall/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/forena-theshop-incheon-cityhall/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "자연과 조화를 이루는 단지 설계",
      images: [
        { src: "/apt/forena-theshop-incheon-cityhall/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/forena-theshop-incheon-cityhall/3-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/forena-theshop-incheon-cityhall/3-2.webp", alt: "평면도" },
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
      background: "linear-gradient(90deg, #b8860b, #f5d67d)",
      width:      "40px",
      height:     "3px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#f5c15c",
      borderColor: "rgba(245,193,92,0.5)",
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
      accentColor: "#f5c15c",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#0F1B33",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "#f8e090",
      color:      "#0F1B33",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#f1e9d2",
      color:      "#0F1B33",
    },
    BottomBar_regBtn: {
      background: "#0F1B33",
      color:      "#ffffff",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 포레나더샵인천시청역 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 포레나더샵인천시청역 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
