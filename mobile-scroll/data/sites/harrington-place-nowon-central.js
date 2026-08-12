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

  // 실제 상담 건수에 이 값을 더해 "오늘까지 N명이 문의했습니다"에 표시 — 182명 노출 목적
  inquiryCountOffset: 181,

  popup: {
    enabled: true,
    image: {
      src: "/apt/harrington-place-nowon-central/popup.webp",
      alt: "해링턴플레이스 노원 센트럴 팝업",
      // 이미지 안 "지금 문의하세요!" 버튼 위치(% 기준) — 클릭하면 상담 전화(tel:)로 바로 연결
      cta: {
        tel:  "1661-8664",
        rect: { top: "86%", left: "8%", width: "84%", height: "7%" },
      },
    },
  },

  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "SKT",    value: "SKT" },
    { label: "shinhan", value: "shinhan" },
  ],

  // sub-visual 섹션 다음에 상담신청 폼을 하나 더 노출 (하단 상담신청 섹션과 합쳐 총 2개)
  extraContactFormExcludeUtm: [],
  extraContactFormAfterSectionId: "sub-visual",

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
    bgColor: "#0F1B33",  // contain 사용 시 남는 여백을 네이비로 채움
    image: {
      src:    "/apt/harrington-place-nowon-central/main.webp",
      alt:    "해링턴플레이스 노원 센트럴 대표 이미지",
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
        { src: "/apt/harrington-place-nowon-central/sub-main.webp", alt: "해링턴플레이스 노원 센트럴 서브 메인 이미지" },
        // 클릭하면 상담 전화(tel:)로 바로 연결
        { src: "/apt/harrington-place-nowon-central/gif_img.gif",   alt: "해링턴플레이스 노원 센트럴 소개 애니메이션", tel: "1661-8664" },
      ],
    },
    {
      id:       "overview",
      type:     "spec-only",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모를 한눈에",
      headerPaddingTop: "48px",  // 이 섹션만 위 여백을 사이트 공통값보다 넉넉하게
      specItems: [
        { label: "사업명",   value: "해링턴 플레이스 노원 센트럴" },
        { label: "대지위치", value: "서울 노원구 노원로 495(상계동 690, 해링턴플레이스 노원 센트럴)" },
        { label: "공급호수", value: "299세대" },
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
      navLabel: "모델하우스",
      title:    "모델하우스 미리보기",
      subtitle: "방문 전, 미리 만나보는 모델하우스",
      images: [
        { src: "/apt/harrington-place-nowon-central/2-2.webp", alt: "모델하우스 미리보기" },
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
      // 2단 그리드 갤러리 — 클릭하면 라이트박스로 크게 보임
      gallery: Array.from({ length: 20 }, (_, i) => ({
        src: `/apt/harrington-place-nowon-central/community-${i + 1}.webp`,
        alt: "해링턴플레이스 노원 센트럴 커뮤니티",
      })),
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor:  "#0F1B33",  // 네이비
      imageFit:      "cover",  // 모바일은 여백 없이 항상 꽉 채움
      imagePosition: "center bottom",  // 잘릴 땐 항상 위쪽만 잘리고 아래쪽 내용은 항상 보존
      aspectRatio:   "1800 / 2700",  // main.webp 실제 비율(1800/2935)보다 낮춰서 PC에서 위쪽을 좀 더 크롭
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #7B6C55, #A08B6D)",
      width:      "40px",
      height:     "3px",
    },

    // 섹션 사이 여백 축소 (기본 60px/64px/36px → 더 좁게)
    ImageSection_spacing: {
      sectionPaddingBottom: "0px",
      headerPaddingTop:     "4px",
      headerPaddingBottom:  "0px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#C9BBA0",
      borderColor: "rgba(201,187,160,0.55)",
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
      accentColor: "#C9BBA0",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:       "#ffffff",
      fontSize:    "1.15rem",
      accentColor: "#ffffff",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#0F1B33",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "linear-gradient(90deg, #7B6C55, #96835F)",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#E4DCC9",
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
