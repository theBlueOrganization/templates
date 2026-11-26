/**
 * 현장 슬러그: eumseong-prugio-centerpeak
 * URL: /apt/eumseong-prugio-centerpeak
 * 한글도메인: 음성푸르지오센터피크.addupapt.kr
 * 구성은 산곡역자이힐스테이트&하늘채(sangok-xi-hillstate-hanulche)와 같은 모바일 스크롤형 + 핵심 혜택 리스트
 *
 * 이미지: 공식 홈페이지는 종료되어 현장 PC상담북(220706 음성 푸르지오 센터피크 PC상담북.pdf)에서 추출
 * — 외관 CG·조경·주변 실사진은 PDF 내장 원본, 위치도·배치도·커뮤니티·특화설계·평면도는 300dpi 렌더 후 크롭
 * 문구 주의: "페이백" 단어 사용 금지 — "할인"으로 표기
 */

const config = {
  slug:        "eumseong-prugio-centerpeak",
  subdomain:   "음성푸르지오센터피크",
  projectName: "음성 푸르지오 센터피크",
  shortName:   "음성 푸르지오 센터피크",
  telNumber:   "1522 3204",
  ogImage:     "/apt/eumseong-prugio-centerpeak/share_img.jpg",
  adminPhones:  ["01023581878"],
  kakao:        true,
  kakaoTemplateId: "KA01TP260622093537285QA4EPtdxJyI",
  sheetId:      "",
  sheetTab:     "음성푸르지오센터피크",

  popup: {
    enabled: false,
    image: {
      src: "/apt/eumseong-prugio-centerpeak/4.webp",
      alt: "음성 푸르지오 센터피크 팝업",
    },
  },

  // ── 유입 경로 (utm_source) 옵션 ──
  showUtmInSms: true,
  utmSources: [
    { label: "SKT",     value: "SKT" },
    { label: "shinhan", value: "shinhan" },
  ],

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "contact@addup.kr",
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
    eyebrow:       "마감임박 잔여 20세대｜즉시입주 가능",
    eyebrowUrgent: 0,  // 공용 긴급 배지는 빨간색 깜빡임이라 브랜드 팔레트 유지 위해 끔
    brand:         "음성 푸르지오 센터피크",
    title:         "음성 기업복합도시\n푸르지오 센터피크\n지금 바로 입주",
    subtitle:      "충북 음성군 대소읍 · 총 2,456세대",
    bgColor:       "rgb(68 106 174)",  // 히어로 이미지 최상단 하늘 평균색 — 이미지 위쪽 빈 공간을 하늘로 이어 줌
    accentKeyword:  ["푸르지오 센터피크", "바로 입주"],
    image: {
      src:    "/apt/eumseong-prugio-centerpeak/1.webp",
      alt:    "음성 푸르지오 센터피크 외관 CG",
      width:  1200,
      height: 1025,  // 상단 220px는 bgColor로 부드럽게 녹여 배경과 경계선 없이 이어지게 함
    },
  },

  // 히어로 바로 다음 핵심 혜택 7가지 — 광고주 전달 순서 그대로 (황금열쇠 제외 요청 반영)
  benefits: {
    variant: "condition",
    eyebrow: "SPECIAL 7",
    brand:   "음성 푸르지오 센터피크",
    title:   "미분양 특례 적용\n7가지 특별 혜택",
    desc:    "즉시입주 가능한 기업복합도시 브랜드 아파트, 지금이 마지막 기회입니다.",
    bgImage: { src: "/apt/eumseong-prugio-centerpeak/1-2.webp", alt: "음성 푸르지오 센터피크 투시도" },
    items: [
      { num: "01", label: "미분양 특례 적용\n주택수 미포함" },
      { num: "02", label: "취득세\n50% 감면" },
      { num: "03", label: "5천세대 미니신도시\n기업복합도시" },
      { num: "04", label: "잔금유예\n6개월" },
      { num: "05", label: "최대\n4,000만원 혜택" },
      { num: "06", label: "최고급시설 초등학교\n3월 개교" },
      { num: "07", label: "마감임박\n잔여 20세대" },
    ],
  },

  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "즉시입주 가능한 대우건설 푸르지오",
      images: [
        { src: "/apt/eumseong-prugio-centerpeak/1-1.webp", alt: "푸르지오 브랜드 타운 조감도" },
        { src: "/apt/eumseong-prugio-centerpeak/1-2.webp", alt: "음성 푸르지오 센터피크 투시도" },
      ],
      specItems: [
        { label: "단지명",   value: "음성 푸르지오 센터피크" },
        { label: "대지위치", value: "충북 음성군 대소읍 성본리 21 일원 (성본산업단지 B2BL)" },
        { label: "건축규모", value: "지하 2층 ~ 지상 최고 35층, 8개동" },
        { label: "세대수",   value: "총 2,456세대 (푸르지오 1·2·3차 통합)" },
        { label: "시공",     value: "㈜대우건설" },
        { label: "입주",     value: "즉시입주 가능" },
      ],
    },
    {
      id:        "location",
      type:      "features",
      navLabel:  "입지환경",
      layout:    "simple",
      headerAlign: "center",
      sectionBg: "#ffffff",
      eyebrow:   "LOCATION",
      title:     "음성 기업복합도시의\n중심 입지",
      subtitle:  "중부고속도로 대소IC · 평택제천고속도로 금왕꽃동네IC 인접",
      leadImage: { src: "/apt/eumseong-prugio-centerpeak/2-0.webp", alt: "음성 푸르지오 센터피크 위치도" },
      items: [
        {
          tag:   "TRAFFIC",
          title: "진입도로 개통으로 더 빠르게",
          titleStrong: "진입도로 개통",
          desc:  "동·서측 왕복 4차로 진입도로 · 국도 21호선·82호선 연계, 혁신도시까지 약 8km",
          image: { src: "/apt/eumseong-prugio-centerpeak/7-2.webp", alt: "사업지 진출입로 계획" },
        },
        {
          tag:   "CITY",
          title: "총 2,456세대 푸르지오 브랜드타운",
          titleStrong: "푸르지오 브랜드타운",
          desc:  "5천여 세대 미니신도시급 주거타운 '음성 기업복합도시'의 중심",
          image: { src: "/apt/eumseong-prugio-centerpeak/7-1.webp", alt: "음성 기업복합도시 현황" },
        },
      ],
    },
    {
      id:        "infra",
      type:      "features",
      layout:    "grid",
      headerAlign: "center",
      eyebrow:   "INFRA",
      title:     "이미 완성된\n생활 인프라",
      subtitle:  "입주 기업 · 근린공원 · 학교용지까지 단지 주변 실사진",
      items: [
        { tag: "COMPANY", title: "한국건설생활환경시험연구원", image: { src: "/apt/eumseong-prugio-centerpeak/8-1.webp", alt: "한국건설생활환경시험연구원" } },
        { tag: "COMPANY", title: "현대렌탈케어",             image: { src: "/apt/eumseong-prugio-centerpeak/8-3.webp", alt: "현대렌탈케어" } },
        { tag: "COMPANY", title: "대보마그네틱",             image: { src: "/apt/eumseong-prugio-centerpeak/8-7.webp", alt: "대보마그네틱" } },
        { tag: "SCHOOL",  title: "학교용지",                 image: { src: "/apt/eumseong-prugio-centerpeak/8-2.webp", alt: "학교용지" } },
        { tag: "PARK",    title: "어린이공원",               image: { src: "/apt/eumseong-prugio-centerpeak/8-4.webp", alt: "어린이공원" } },
        { tag: "PARK",    title: "축구장",                   image: { src: "/apt/eumseong-prugio-centerpeak/8-6.webp", alt: "축구장" } },
        { tag: "PARK",    title: "농구장",                   image: { src: "/apt/eumseong-prugio-centerpeak/8-5.webp", alt: "농구장" } },
        { tag: "ROAD",    title: "사업지 앞 도로",           image: { src: "/apt/eumseong-prugio-centerpeak/8-8.webp", alt: "사업지 앞 도로" } },
      ],
    },
    {
      id:       "siteplan",
      type:     "image",
      navLabel: "단지배치",
      title:    "단지배치",
      subtitle: "조망과 채광, 통풍을 극대화한 남향 위주 단지배치",
      images: [
        { src: "/apt/eumseong-prugio-centerpeak/3-0.webp", alt: "음성 푸르지오 센터피크 단지배치도" },
      ],
    },
    {
      id:        "landscape",
      type:      "features",
      layout:    "grid",
      headerAlign: "center",
      eyebrow:   "LANDSCAPE",
      title:     "단지 안의 숲과 정원",
      subtitle:  "물의 풍경부터 힐링포레스트, 어린이놀이터까지",
      note:      "※ 상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다.",
      items: [
        { tag: "WATER",  title: "물의 풍경",     image: { src: "/apt/eumseong-prugio-centerpeak/3-1.webp", alt: "물의 풍경" } },
        { tag: "FOREST", title: "힐링포레스트",  image: { src: "/apt/eumseong-prugio-centerpeak/3-2.webp", alt: "힐링포레스트" } },
        { tag: "PLAY",   title: "어린이놀이터",  image: { src: "/apt/eumseong-prugio-centerpeak/3-3.webp", alt: "어린이놀이터" } },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "피트니스·골프클럽·G/X클럽·독서실·다함께돌봄센터·시니어클럽·어린이집",
      images: [
        { src: "/apt/eumseong-prugio-centerpeak/5-1.webp", alt: "그리너리 라운지 커뮤니티 평면" },
      ],
    },
    {
      id:       "design",
      type:     "image",
      navLabel: "단지설계",
      title:    "단지설계",
      subtitle: "대우건설 푸르지오만의 특화 시스템",
      tabCompact: true,
      tabs: [
        { label: "보안",     images: [{ src: "/apt/eumseong-prugio-centerpeak/6-1.webp", alt: "Five Zones Security System" }] },
        { label: "청정",     images: [{ src: "/apt/eumseong-prugio-centerpeak/6-2.webp", alt: "Five Zones Clean Air System" }] },
        { label: "스마트홈", images: [{ src: "/apt/eumseong-prugio-centerpeak/6-3.webp", alt: "푸르지오 스마트홈" }] },
      ],
    },
    {
      id:       "unitplan",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "전용 84㎡ · 110㎡ 5개 타입",
      tabWrap:  true,
      tabs: [
        { label: "84A",  images: [{ src: "/apt/eumseong-prugio-centerpeak/9-1.webp", alt: "84㎡A 평면도" }] },
        { label: "84B",  images: [{ src: "/apt/eumseong-prugio-centerpeak/9-2.webp", alt: "84㎡B 평면도" }] },
        { label: "84C",  images: [{ src: "/apt/eumseong-prugio-centerpeak/9-3.webp", alt: "84㎡C 평면도" }] },
        { label: "110A", images: [{ src: "/apt/eumseong-prugio-centerpeak/9-4.webp", alt: "110㎡A 평면도" }] },
        { label: "110B", images: [{ src: "/apt/eumseong-prugio-centerpeak/9-5.webp", alt: "110㎡B 평면도" }] },
      ],
    },
  ],

  // 색상은 푸르지오 공식 홈페이지 팔레트만 사용
  // 딥그린 #074f51 / 그린 #1e6163 · #407c7d / 그레이 #a1aaac / 웜그레이 #efedeb / 화이트
  theme: {
    hero: {
      curtainColor: "#074f51",
      textOverlay:  "linear-gradient(to bottom, rgba(7,79,81,0.55) 0%, rgba(7,79,81,0.25) 35%, rgba(7,79,81,0) 55%)",
      // 가로형 CG 전체 구도를 그대로 보여주기 위해 폭 맞춤 + 하단 정렬, 위쪽은 bgColor 하늘색
      imageFit:      "100% auto",
      imagePosition: "center bottom",
    },

    FeatureSection: {
      accent:        "#074f51",
      premiumAccent: "#074f51",
      premiumDark:   "#407c7d",
    },

    // 핵심 혜택 리스트(condition 변형)
    BenefitsSection: {
      overlay:          "linear-gradient(180deg, rgba(7,79,81,0.92) 0%, rgba(7,79,81,0.84) 40%, rgba(7,79,81,0.94) 100%)",
      eyebrowColor:     "#a1aaac",
      numColor:         "#a1aaac",
      activeBackground: "#efedeb",
      activeTextColor:  "#074f51",
      activeSubColor:   "#407c7d",
    },

    ImageSection_divider: {
      background: "#074f51",
      width:      "40px",
      height:     "3px",
    },
    ImageSection_tabActive: {
      background:  "#074f51",
      borderColor: "#074f51",
      color:       "#ffffff",
    },
    TopNav_active: {
      color:       "#074f51",
      borderColor: "#074f51",
    },

    eyebrow: {
      color:       "#ffffff",
      borderColor: "rgba(255,255,255,0.6)",
      fontSize:    "1rem",
    },

    brand: {
      color:    "#ffffff",
      fontSize: "1rem",
    },
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(1.6rem,8vw,2.7rem)",
      accentColor: "#efedeb",
    },
    subtitle: {
      color:    "#ffffff",
      fontSize: "1rem",
    },

    contactSection: {
      background: "#074f51",
    },
    ContactForm_submitBtn: {
      background: "#efedeb",
      color:      "#074f51",
      fontSize:   "1.15rem",
    },

    BottomBar_callBtn: {
      background: "#efedeb",
      color:      "#074f51",
    },
    BottomBar_regBtn: {
      background: "#074f51",
      color:      "#ffffff",
    },

    // 하단 푸터(대표 문의·대행사 정보·고지) — 홈페이지처럼 웜그레이 바탕 + 딥그린 글씨
    SiteFooter: {
      background: "#efedeb",
      textColor:  "#074f51",
      subColor:   "#407c7d",
      faintColor: "#a1aaac",
      lineColor:  "rgba(7,79,81,0.12)",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 음성 푸르지오 센터피크 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 음성 푸르지오 센터피크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (contact@addup.kr)`,
};

export default config;
