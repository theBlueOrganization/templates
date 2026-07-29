/**
 * 현장 슬러그: osan-heritage-xi
 * URL: /apt/osan-heritage-xi
 */
// 상담 접수 알림은 SMS 대신 카카오 알림톡으로 발송
// env KAKAO_TEMPLATE_ID 폴백이 실제로 안 잡히는 것으로 보여, 테스트를 위해 기존 승인 템플릿ID(숭의역 라온프라이빗 스카이브용)를 임시로 직접 지정 — 템플릿 변수/문구가 안 맞으면 발송 실패할 수 있음, 확정되면 오산헤리티지자이 전용 템플릿ID로 교체 필요

const config = {
  slug:        "osan-heritage-xi",
  subdomain:   "오산헤리티지자이",
  projectName: "오산헤리티지자이",
  shortName:   "오산헤리티지자이",
  telNumber:   "1555-1841",
  ogImage:     "/apt/osan-heritage-xi/share_img.png",
  adminPhones:  ["01032662158"],
  kakao:        true,
  kakaoTemplateId: "KA01TP260622093537285QA4EPtdxJyI",
  sheetId:      "",
  sheetTab:     "오산헤리티지자이",

  // 분양사(개인정보 수집주체) 정보 — SiteFooter의 더블루파트너스(운영대행사) 정보와 별개로,
  // ClientFooter가 그 위에 더 강조된 톤으로 노출
  clientCompany: {
    name:      "(주)세인디엔씨",
    bizNumber: "824-88-01908",
  },

  popup: {
    enabled: true,
    image: {
      src: "/apt/osan-heritage-xi/popup.webp",
      alt: "오산헤리티지자이 팝업",
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

  // TODO: 실제 히어로 이미지·문구 준비되면 교체
  hero: {
    eyebrow:       "특별공급｜선착순",
    eyebrowUrgent: 1,
    brand:         "오산헤리티지자이",
    title:         "병점X동탄 더블생활권\nGTX-C 역세권 대단지\n오산 최초 프리미엄 브랜드",
    subtitle:      " GS건설 헤리티지자이",
    bgColor:       "#1e293b",
    accentKeyword: ["병점X동탄", "역세권", "프리미엄 브랜드"],
    image: {
      src:    "/apt/osan-heritage-xi/main1.webp",
      alt:    "오산헤리티지자이 대표 이미지",
      width:  750,
      height: 500,
    },
  },

  // TODO: 실제 이미지·스펙 데이터 준비되면 교체 (구조는 포레나더샵인천시청역과 동일)
  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모를 한눈에",
      // 1단지/2단지 탭 메뉴 — 탭별로 이미지·스펙을 따로 보여줌 (기존 images/specItems는 1단지로 이동)
      tabs: [
        {
          label: "1단지",
          images: [
            { src: "/apt/osan-heritage-xi/1-1.webp", alt: "사업개요 1단지" },
          ],
          specItems: [
            { label: "사업명",   value: "오산 양산4지구 도시개발사업지구내 1BL공동주택 신축공사" },
            { label: "대지위치", value: "경기도 오산시 양산동 223번지 일원" },
            { label: "대지면적", value: "55,220㎡" },
            { label: "연면적",   value: "185,635.8279㎡" },
            { label: "건폐율",   value: "18.19%" },
            { label: "용적률",   value: "225.73%" },
            { label: "건축규모", value: "지하 2층 ~ 지상 27층 / 13개동" },
            { label: "세대수", value: "총 1,783세대(1BL 1,069세대)" },
           
            
          ],
        },
        {
          label: "2단지",
          images: [
            { src: "/apt/osan-heritage-xi/1-2.webp", alt: "사업개요 2단지" },
          ],
          specItems: [
        { label: "사업명",   value: "오산 양산4지구 도시개발사업지구내 2BL공동주택 신축공사" },
            { label: "대지위치", value: "경기도 오산시 양산동 328-2번지 일원" },
            { label: "대지면적", value: "36,880㎡" },
            { label: "연면적",   value: "127,132.1994㎡" },
            { label: "건폐율",   value: "17.38%" },
            { label: "용적률",   value: "226.13%" },
            { label: "건축규모", value: "지하 2층 ~ 지상 27층 / 9개동" },
            { label: "세대수", value: "총 1,783세대(2BL 714세대)" },
         
           
          ],
        },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/osan-heritage-xi/1-3.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/osan-heritage-xi/2-1.webp", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "자연과 조화를 이루는 단지 설계",
      images: [
        { src: "/apt/osan-heritage-xi/2-2.webp", alt: "단지설계" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "일상에 활력을 더하는 주거공간",
      images: [
        { src: "/apt/osan-heritage-xi/3-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "휴식이 완성되는 주거공간",
      images: [
        { src: "/apt/osan-heritage-xi/3-2.webp", alt: "평면도 75~84C" },
        { src: "/apt/osan-heritage-xi/3-2b.webp", alt: "평면도 84D~166P" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    // 높이는 숭의역 라온프라이빗 스카이브와 동일하게 기본값(100dvh) 사용
    hero: {
      curtainColor: "#1e293b",
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
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
      accentColor: "#60a5fa",
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

1. 개인정보의 처리 목적 : 오산헤리티지자이 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 오산헤리티지자이 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
