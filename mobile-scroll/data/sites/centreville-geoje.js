/**
 * 현장 슬러그: centreville-geoje
 * URL: /apt/centreville-geoje
 *
 * TODO: 동탄헤리움센트럴(dongtan-herium-central) 틀을 복사한 스켈레톤입니다.
 * 아래 값(이미지·문구·스펙 등)은 전부 실제 데이터로 교체해야 합니다.
 * 이미지는 public/apt/centreville-geoje/ 폴더에 아직 없으므로 반드시 추가해야 합니다.
 */

const config = {
  slug:        "centreville-geoje",
  subdomain:   "센트레빌아스테리움거제",
  projectName: "센트레빌아스테리움거제",
  shortName:   "센트레빌 아스테리움 거제",
  telNumber:   "1688-3358",
  ogImage:     "/apt/centreville-geoje/share_img.webp",
  favicon:     "/apt/centreville-geoje/favicon.webp",
  adminPhones:  ["01094216962"],
  sheetId:      "",
  sheetTab:     "센트레빌아스테리움거제",

  // 실제 상담 건수에 이 값을 더해 "오늘까지 N명이 문의했습니다"에 표시
  inquiryCountOffset: 180,

  popup: {
    enabled: false,
    image: {
      src: "/apt/centreville-geoje/popup.webp",
      alt: "센트레빌 아스테리움 거제 팝업",
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
    eyebrow:       "마운틴뷰｜초품아 학세권", // TODO: 실제 배지 문구로 교체 ("｜"로 구분)
    eyebrowUrgent: 1, // 왼쪽부터 1개 배지만 urgent 스타일
    brand:         "「센트레빌 아스테리움 거제」",
    title:         "동부건설 센트레빌의\n 품격높은 하이엔드브랜드의 자부심\n센트레빌 아스테리움 거제", // TODO: 실제 히어로 타이틀로 교체
    subtitle:      "문의) 1688-3358", // TODO: 실제 서브타이틀로 교체
    accentKeyword: "하이엔드브랜드",
    bgColor: "#12294D", // TODO: 히어로 이미지 스포이드로 추출한 배경색으로 교체
    image: {
      src:    "/apt/centreville-geoje/main.webp",
      alt:    "센트레빌 아스테리움 거제 대표 이미지",
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
        { src: "/apt/centreville-geoje/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "거제시 상동2지구 공동주택 신축공사" },
        { label: "사업위치", value: "경상남도 거제시 상동동 681번지 일원" },
        { label: "대지면적", value: "75,629㎡" },
        { label: "지역/지구", value: "제2종일반주거지역" },
        { label: "용도",     value: "공동주택, 근린생활시설" },
        { label: "건축규모", value: "지하3층 ~ 지상29층, 10개동, 1,307세대" },
        { label: "건축면적", value: "30,088.8589㎡ (9,101.88평)" },
        { label: "건폐율",   value: "39.78%" },
        { label: "용적률",   value: "198.98%" },
        { label: "주차대수", value: "1,792대 (공동주택 : 1,765 / 근생 : 27) / 세대당 : 1.35" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/centreville-geoje/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/centreville-geoje/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "자연과 조화를 이루는 단지 설계",
      images: [
        { src: "/apt/centreville-geoje/2-2.webp", alt: "단지설계" },
      ],
      // 2단 그리드 갤러리 — 클릭하면 라이트박스로 크게 보임
      gallery: Array.from({ length: 10 }, (_, i) => ({
        src: `/apt/centreville-geoje/complex-${i + 1}.webp`,
        alt: "센트레빌 아스테리움 거제 단지설계",
      })),
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/centreville-geoje/3-1.webp", alt: "커뮤니티" },
      ],
      // 2단 그리드 갤러리 — 클릭하면 라이트박스로 크게 보임
      // TODO: community-1.webp ~ community-18.webp 실제 이미지로 교체
      gallery: Array.from({ length: 18 }, (_, i) => ({
        src: `/apt/centreville-geoje/community-${i + 1}.webp`,
        alt: "센트레빌 아스테리움 거제 커뮤니티",
      })),
    },
    {
      id:       "floorplan",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/centreville-geoje/3-2.webp", alt: "평면도" },
      ],
    },
  ],

  theme: {
    // ── 브랜드 컬러 ── TODO: 실제 브랜드 컬러로 교체
    hero: {
      curtainColor: "#12294D",
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "#12294D",
      width:      "40px",
      height:     "3px",
    },

    // 탭 메뉴 활성 버튼
    ImageSection_tabActive: {
      background:  "#12294D",
      borderColor: "#12294D",
      color:       "#ffffff",
    },

    // 상단 고정 네비게이션 활성 메뉴
    TopNav_active: {
      color:       "#12294D",
      borderColor: "#12294D",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#C9BBA0",
      borderColor: "rgba(201,187,160,0.55)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent)
    eyebrowUrgent: {
      color:       "#38BDF8",
      borderColor: "rgba(56,189,248,0.5)",
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
      accentColor: "#38BDF8",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:       "#ffffff",
      fontSize:    "1.15rem",
      accentColor: "#38BDF8",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#12294D",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background:  "#12294D",
      color:       "#ffffff",
      fontSize:    "1.15rem",
      shadowColor: "rgba(18,41,77,0.35)",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#12294D",
      color:      "#ffffff",
    },
    BottomBar_regBtn: {
      background: "#38BDF8",
      color:      "#12294D",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 센트레빌 아스테리움 거제 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 센트레빌 아스테리움 거제 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
