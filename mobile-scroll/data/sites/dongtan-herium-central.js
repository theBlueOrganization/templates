/**
 * 현장 슬러그: dongtan-herium-central
 * URL: /apt/dongtan-herium-central
 *
 * TODO: 해링턴플레이스노원센트럴(harrington-place-nowon-central) 틀을 복사한 스켈레톤입니다.
 * 아래 값(전화번호·이미지·문구·스펙 등)은 전부 실제 데이터로 교체해야 합니다.
 * 이미지는 public/apt/dongtan-herium-central/ 폴더에 아직 없으므로 반드시 추가해야 합니다.
 */

const config = {
  slug:        "dongtan-herium-central",
  subdomain:   "동탄헤리움센트럴",
  projectName: "동탄헤리움센트럴",
  shortName:   "동탄헤리움센트럴",
  telNumber:   "1800-4336", // TODO: 실제 상담 전화번호로 교체
  ogImage:     "/apt/dongtan-herium-central/share_img.png",
  favicon:     "/apt/dongtan-herium-central/favicon.ico",
  adminPhones:  ["01064603622"],
  sheetId:      "",
  sheetTab:     "동탄헤리움센트럴",

  // 실제 상담 건수에 이 값을 더해 "오늘까지 N명이 문의했습니다"에 표시 — TODO: 목표 노출 수치로 교체
  inquiryCountOffset: 181,

  popup: {
    enabled: true,
    image: {
      src: "/apt/dongtan-herium-central/popup.webp",
      alt: "동탄헤리움센트럴 팝업",
    },
  },

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
    eyebrow:       "동탄신도시｜사전예약",
    eyebrowUrgent: 1, 
    brand:         "「동탄역헤리움센트럴」",
    title:         "동탄의 내일을 선점할 랜드마크\n동탄 1·2신도시 핵심 입지!",
    subtitle:      "STR.GTX-A(확정), 인동선.동탄트램(예정)",
    accentKeyword: ["랜드마크", "동탄 1·2신도시"],
    bgColor: "#0F1B33", 
    image: {
      src:    "/apt/dongtan-herium-central/main.webp",
      alt:    "동탄헤리움센트럴 대표 이미지",
      width:  800,
      height: 500,
    },
  },

  sections: [
    {
      id:         "sub-visual",
      type:       "image",
      showHeader: false,
      images: [
        { src: "/apt/dongtan-herium-central/sub-main.webp", alt: "동탄헤리움센트럴 서브 메인 이미지" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/dongtan-herium-central/1-2.webp", alt: "입지환경" },
      ],
    }, 
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/dongtan-herium-central/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "초고층 고품격 주거공간",
      images: [
        { src: "/apt/dongtan-herium-central/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "floorplan",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      // 1차/2차/3차 탭 메뉴 — 각 차수 탭 안에 다시 타입별 서브탭 (개수 다름: 1차 3개, 2차 4개, 3차 3개)
      tabs: [
        {
          label: "1차(9-4BL)",
          subTabs: [
            { label: "59A", images: [{ src: "/apt/dongtan-herium-central/1-A.webp", alt: "1차(9-4BL) 59A 평면도" }] },
            { label: "59B", images: [{ src: "/apt/dongtan-herium-central/1-B.webp", alt: "1차(9-4BL) 59B 평면도" }] },
            { label: "62C", images: [{ src: "/apt/dongtan-herium-central/1-C.webp", alt: "1차(9-4BL) 62C 평면도" }] },
          ],
        },
        {
          label: "2차(9-5BL)",
          subTabs: [
            { label: "59A", images: [{ src: "/apt/dongtan-herium-central/2-A.webp", alt: "2차(9-5BL) 59A 평면도" }] },
            { label: "63B", images: [{ src: "/apt/dongtan-herium-central/2-B.webp", alt: "2차(9-5BL) 63B 평면도" }] },
            { label: "69C", images: [{ src: "/apt/dongtan-herium-central/2-C.webp", alt: "2차(9-5BL) 69C 평면도" }] },
            { label: "63D", images: [{ src: "/apt/dongtan-herium-central/2-D.webp", alt: "2차(9-5BL) 63D 평면도" }] },
          ],
        },
        {
          label: "3차(15-1BL)",
          subTabs: [
            { label: "59A", images: [{ src: "/apt/dongtan-herium-central/3-A.webp", alt: "3차(15-1BL) 59A 평면도" }] },
            { label: "64B", images: [{ src: "/apt/dongtan-herium-central/3-B.webp", alt: "3차(15-1BL) 64B 평면도" }] },
            { label: "72C", images: [{ src: "/apt/dongtan-herium-central/3-C.webp", alt: "3차(15-1BL) 72C 평면도" }] },
          ],
        },
      ],
    },
  ],

  theme: {
    // ── 브랜드 컬러 ── 네이비 #010A27 / 브론즈골드 #8C6F41 (포인트 골드 #FFCA2F 제거, 차분한 2톤으로)
    hero: {
      curtainColor: "#010A27",
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "#010A27",
      width:      "40px",
      height:     "3px",
    },

    // 탭 메뉴 활성 버튼(사업개요·평면도 탭)
    ImageSection_tabActive: {
      background:  "#010A27",
      borderColor: "#010A27",
      color:       "#ffffff",
    },
    // 서브탭 활성 버튼(평면도 59A/63B 등 타입별 탭) — 탭보다 한 단계 연하게
    ImageSection_subTabActive: {
      background:  "#16264A",
      borderColor: "#16264A",
      color:       "#ffffff",
    },

    // 상단 고정 네비게이션 활성 메뉴
    TopNav_active: {
      color:       "#8C6F41",
      borderColor: "#8C6F41",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#f5c15c",
      borderColor: "rgba(245,193,92,0.5)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent) — 히어로 강조 문구는 골드 포인트 유지
    eyebrowUrgent: {
      color:       "#ff6b6b",
      borderColor: "rgba(255,107,107,0.5)",
    },

    // 히어로 브랜드명
    brand: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1.15rem",
    },
    // 히어로 메인 타이틀 — 강조 키워드는 골드 포인트
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(1.45rem,7vw,2.7rem)",
      accentColor: "#FFCA2F",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:       "#ffffff",
      fontSize:    "clamp(0.75rem, 3vw, 1.15rem)",
      accentColor: "#FFCA2F",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#010A27",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background:  "#010A27",
      color:       "#ffffff",
      fontSize:    "1.15rem",
      shadowColor: "rgba(1,10,39,0.35)",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#010A27",
      color:      "#ffffff",
    },
    BottomBar_regBtn: {
      background: "#FFCA2F",
      color:      "#010A27",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 동탄헤리움센트럴 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 동탄헤리움센트럴 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
