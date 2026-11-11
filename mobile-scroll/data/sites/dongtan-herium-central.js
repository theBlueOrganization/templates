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
  telNumber:   "1800-4336",
  ogImage:     "/apt/dongtan-herium-central/share_img3.png",
  favicon:     "/apt/dongtan-herium-central/favicon.ico",
  adminPhones:  ["01064603622"],
  // 상담 접수 알림은 SMS 대신 카카오 알림톡으로 발송 (기존 승인 템플릿ID 공용 사용)
  kakao:        true,
  kakaoTemplateId: "KA01TP260622093537285QA4EPtdxJyI",
  sheetId:      "",
  sheetTab:     "동탄헤리움센트럴",

  // 실제 상담 건수에 이 값을 더해 "오늘까지 N명이 문의했습니다"에 표시
  inquiryCountOffset: 20,

  popup: {
    enabled: true,
    image: {
      src: "/apt/dongtan-herium-central/popup-1111.webp",
      alt: "동탄헤리움센트럴 팝업",
      cta: {
        target: "#contact-section",
        // 이미지 하단 "방문 예약 하러 가기" 버튼 영역만 클릭 핫스팟으로 지정
        rect: { top: "85.5%", left: "16%", width: "68%", height: "10%" },
      },
    },
  },

  // 선착순 파격 할인 분양(sub-visual) 섹션 다음에 관심고객등록(상담신청) 폼을 하나 더 노출 (하단 상담신청 섹션과 합쳐 총 2개)
  extraContactFormExcludeUtm: [],
  extraContactFormAfterSectionId: "sub-visual",

  company: {
    label:     "광고 대행사", // 푸터 라벨(기본값: 홈페이지 운영·관리 대행사)
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
    phone:     "1666-1755",
  },

  // 푸터 법적 고지 하단에 추가로 노출할 현장별 문구
  footerNotice: [
    "※ 본 웹사이트는 단순 참고용이며, 각종 개발계획은 관계기관 및 사업주체에 따라, 세제/금융조건등은 법령 제.개정 및 금융기관이나 개인별 요건에 따라 달라질 수 있습니다.",
    "※ 자세한 사항은 홍보관을 방문하여 상담을 통해 확인하시기 바랍니다.",
  ],

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
    eyebrow:       "동탄신도시｜상담예약",
    eyebrowUrgent: 1, 
    brand:         "「동탄역헤리움센트럴」",
    title:         "동탄의 내일을 선점할 랜드마크\n동탄 1·2신도시 핵심 입지!",
    subtitle:      "SRT.GTX-A(개통), 인동선.동탄트램(예정)",
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
      sectionBg:  "#010A27",
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
        { src: "/apt/dongtan-herium-central/2-1.webp?v=1002", alt: "프리미엄" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "고품격 주거 공간",
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

  // 개인정보 동의 문구 — 2026-11-09 사용자 전달 양식. 청라 아크원(2026-10-23)처럼 처리자 에덴위너스 / 처리 수탁자 더블루파트너스(광고 대행사)로 표기
  privacyText: `[필수] 개인정보 수집·이용 동의
• 개인정보처리자: 주식회사 에덴위너스
• 개인정보 처리 수탁자: 주식회사 더블루파트너스 (광고 대행사 / 홈페이지 운영, 상담 신청 접수 및 관리)
• 수집 항목: 성명, 휴대전화번호
• 수집·이용 목적: '동탄역 헤리움 센트럴 1~3차' 상담 신청 접수, 문의 응대 및 관련 업무 처리
• 보유 및 이용 기간: 상담 신청일로부터 6개월간 보관 후 지체 없이 파기 (단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관)
※ 귀하는 동의를 거부할 권리가 있으나, 필수 항목 미동의 시 상담 신청 접수가 제한됩니다.

[선택] 마케팅 목적 개인정보 수집·이용 동의
• 개인정보처리자: 주식회사 에덴위너스
• 개인정보 처리 수탁자: 주식회사 더블루파트너스 (광고 대행사 / 홈페이지 운영, 상담 신청 접수 및 관리)
• 수집 항목: 성명, 휴대전화번호
• 수집·이용 목적: '동탄역 헤리움 센트럴 1~3차' 분양·매매·임대 관련 부동산 상품 정보, 이벤트 및 프로모션 안내
• 보유 및 이용 기간: 동의일로부터 2년 또는 동의 철회 시까지 (단, 법령상 보존 의무가 있는 경우 제외)

[선택] 영리목적 광고성 정보 수신 동의
• 발송 주체: 주식회사 에덴위너스 ('동탄역 헤리움 센트럴 1~3차' 분양·매매대행사)
• 발송 목적: '동탄역 헤리움 센트럴 1~3차' 부동산 상품(분양·매매·임대), 이벤트 및 프로모션 광고 안내
• 희망 수신 매체 (직접 선택): 문자메시지(SMS·LMS·MMS) / 전화(음성) / 카카오톡
• 철회 안내: 수신 동의는 대표번호(1800-4336)를 통해 언제든 철회할 수 있습니다.
※ 선택 동의에 동의하지 않아도 상담 신청 및 계약에 불이익이 없으며, 고객이 직접 선택한 매체로만 발송합니다.`,

  // 상담폼의 "사은품 증정 고객 등록하기" 체크박스 숨김 (2026-11-10 요청)
  hideGiftCheck: true,

  // 필수 동의 아래에 노출할 선택 동의 체크박스 (2026-11-10 요청). 결과는 구글시트 끝 열·SMS 본문에 기록
  optionalConsents: [
    { key: "marketing_agree", label: "[선택] 마케팅 목적 개인정보 수집·이용에 동의합니다", sheetLabel: "마케팅동의" },
    {
      key: "ad_agree",
      label: "[선택] 영리목적 광고성 정보 수신에 동의합니다",
      sheetLabel: "광고수신동의",
      channels: ["문자메시지(SMS·LMS·MMS)", "전화(음성)", "카카오톡"],
    },
  ],
};

export default config;
