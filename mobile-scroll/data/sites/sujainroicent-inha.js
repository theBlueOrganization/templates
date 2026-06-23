/**
 * 현장 슬러그: sujainroicent-inha
 * URL: /apt/sujainroicent-inha
 *
 * ─────────────────────────────────────────────────
 * 섹션 type 종류:
 *   "image"           → 제목 + 이미지
 *   "image-with-spec" → 제목 + 스펙 테이블 + 이미지
 *   "spec-only"       → 제목 + 스펙 테이블만
 *
 * 새 섹션 추가 = sections 배열에 객체 하나 추가
 * navLabel 있으면 상단 내비에 자동 등록됨
 * ─────────────────────────────────────────────────
 */

const config = {
  slug:        "sujainroicent-inha",
  projectName: "인하대역 수자인 로이센트",
  shortName:   "인하대역 수자인 로이센트",
  telNumber:   "1666-1050",
  ogImage:     "https://theblue-apt.vercel.app/apt/sujainroicent-inha/link_share_img.png",
  adminPhones:  ["01048086474","01071901052"],
  sheetId:      "",
  sheetTab:     "인하대역수자인로이센트",

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

  // ── 히어로 (100vh 풀스크린, 내비에 등록 안 됨) ──────────
  hero: {
    eyebrow:  "마감임박｜전매가능｜실거주의무없음",
    eyebrowUrgent: 1,
    brand:    "인하대역 수자인 로이센트",
    title:    "청약 통장 없이\n계약금 500만원으로\n 입주때까지",
    subtitle: "인하대역 초역세권 · 총 1,199세대 브랜드 대단지",

    // 이미지 최상단 색상을 스포이드로 찍어서 입력
    // → 이미지 위 빈 공간이 이 색으로 채워져 끊김 없이 연결됨
    bgColor: "linear-gradient(to right, #1d2545, #28375b)",

    accentKeyword: "500만원",

    image: {
      src:    "/apt/sujainroicent-inha/1.webp",
      alt:    "인하대역 수자인 로이센트 대표 이미지",
      width:  800,   // 이미지 원본 가로 사이즈
      height: 500,   // 이미지 원본 세로 사이즈
    },
  },

  // ── 콘텐츠 섹션 배열 ─────────────────────────────────────
  // 순서대로 렌더됨 / navLabel 있으면 상단 메뉴에 자동 노출
  sections: [
    //사업개요 — 제목 이미지 스펙 테이블
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모·특화설계를 한눈에",
      images: [
        { src: "/apt/sujainroicent-inha/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "대지위치",     value: "인천광역시 미추홀구 용현동 604-7번지 일원" },
        { label: "대지면적",     value: "58,684.00㎡ (17,751.91평)" },
        { label: "건축면적",     value: "8,799.6220㎡ (2,661.8857평)" },
        { label: "연면적",       value: "210,452.4601㎡ (63,661.8692평)" },
        { label: "건폐율/용적률", value: "14.99% / 249.46%" },
        { label: "건축규모",     value: "지하 2층 ~ 지상 43층 / 6개동" },
        { label: "세대수",       value: ["총 1,199세대", "일반분양 959세대, 민간임대 240세대"] },
        { label: "주차대수",     value: "1,660대 (세대당 1.38대)" },
        { label: "전용면적",     value: "84㎡, 101㎡" },
      ],
    },

    // 입지환경 — 이미지만
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/sujainroicent-inha/1-2.webp", alt: "입지환경" },
      ],
    },

    // 단지환경 — 이미지만
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지환경",
      title:    "단지환경",
      subtitle: "녹지가 완성하는 주거공간",
      images: [
        { src: "/apt/sujainroicent-inha/3-1.webp", alt: "단지환경" },
        { src: "/apt/sujainroicent-inha/3-2.webp", alt: "단지환경" },
      ],
    },
    // 단지환경 — 이미지만
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "삶의 질을 높여주는 주거공간",
      images: [
        { src: "/apt/sujainroicent-inha/2-1.webp", alt: "커뮤니티" },
        { src: "/apt/sujainroicent-inha/2-2.webp", alt: "커뮤니티" },
      ],
    },

    // 프리미엄 — 이미지만
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/sujainroicent-inha/4-1.webp", alt: "프리미엄" },
        { src: "/apt/sujainroicent-inha/4-2.webp", alt: "프리미엄" },
      ],
    },

  ],

  // ── 테마 색상·크기 설정 ──────────────────────────────────────
  // 각 항목을 원하는 값으로 수정하세요. 키를 삭제하면 CSS 기본값 적용
  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#1e293b",  // 커튼 시작 색상 (원하는 색으로 변경)
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#7ec8e3",
      borderColor: "rgba(126,200,227,0.45)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent)
    eyebrowUrgent: {
      color:       "#ff6b6b",
      borderColor: "rgba(255,107,107,0.5)",
    },

    // 히어로 브랜드명
    brand: {
      color:    "rgba(255,255,255,0.42)",
      fontSize: "1rem",
    },
    // 히어로 메인 타이틀
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(2.3rem,8vw,3rem)",
      accentColor: "#f5c445",            // accentKeyword 강조 색
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgba(255,255,255,0.75)",
      fontSize: "1rem",
    },
    
    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
      width:  "40px",
      height: "3px",
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

1. 개인정보의 처리 목적 : 인하대역 수자인 로이센트 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 인하대역 수자인 로이센트 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
