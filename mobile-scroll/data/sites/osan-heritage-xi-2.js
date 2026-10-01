/**
 * 현장 슬러그: osan-heritage-xi-2
 * URL: /apt/osan-heritage-xi-2
 * 오산헤리티지자이(osan-heritage-xi)와 내용은 동일, 리드 데이터 분리를 위해
 * slug·subdomain·sheetTab만 별도로 둔 현장
 */
// 상담 접수 알림은 SMS 대신 카카오 알림톡으로 발송
// env KAKAO_TEMPLATE_ID 폴백이 실제로 안 잡히는 것으로 보여, 테스트를 위해 기존 승인 템플릿ID(숭의역 라온프라이빗 스카이브용)를 임시로 직접 지정 — 템플릿 변수/문구가 안 맞으면 발송 실패할 수 있음, 확정되면 오산헤리티지자이 전용 템플릿ID로 교체 필요

const config = {
  slug:        "osan-heritage-xi-2",
  subdomain:   "오산헤리티지자이zi",
  projectName: "오산헤리티지자이",
  shortName:   "오산헤리티지자이",
  telNumber:   "1600-1646",
  ogImage:     "/apt/osan-heritage-xi-2/share_img.png",
  adminPhones:  ["01050268008"],
  kakao:        true,
  kakaoTemplateId: "KA01TP260622093537285QA4EPtdxJyI",
  sheetId:      "",
  sheetTab:     "오산헤리티지자이2",

  popup: {
    enabled: true,
    image: {
      src: "/apt/osan-heritage-xi-2/popup.webp",
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

  hero: {
    eyebrow:       "선착순 동·호 지정｜GS건설 자이",
    eyebrowUrgent: 1,
    brand:         "오산헤리티지자이",
    title:         "계약금 5%\n파격 조건!",
    subtitle:      " 문의) 1600-1646",
    bgColor:       "#1e293b",
    accentKeyword: ["5%"],
    // 광고주 요청: 진입 시 '1차 계약금 500만원'이 가장 먼저 보이도록 초대형 숫자 카드로 강조
    highlight: {
      label:  "1차 계약금",
      prefix: "단",
      value:  "500",
      unit:   "만원",
      desc:   "총 5%로 입주까지 추가 자금 無",
    },
    image: {
      src:    "/apt/osan-heritage-xi-2/main2.webp",
      alt:    "오산헤리티지자이 대표 이미지",
      width:  750,
      height: 500,
    },
  },

  // 히어로 바로 다음에 노출되는 핵심 혜택 세로 리스트 — 광고주 강조 요청 순서대로 배치
  // (계약 조건 → 인근 시세 → 개발호재 → 교통망)
  // variant "condition": 더샵 송도그란테르 "특별한 4가지 조건" 스타일 (스크롤로 가운데 온 항목 카드 강조)
  benefits: {
    variant: "condition",
    eyebrow: "SPECIAL 5",
    brand:   "오산헤리티지자이",
    title:   "지금 잡아야 할\n5가지 핵심",
    desc:    "계약 조건부터 시세·개발호재·교통망까지 한눈에 확인하세요.",
    bgImage: { src: "/apt/osan-heritage-xi-2/main2.webp", alt: "오산헤리티지자이 단지 전경" },
    items: [
      { num: "01", label: "1차 계약금\n단 500만원" },
      { num: "02", label: "계약금 총 5%로\n입주까지 추가 자금 無" },
      { num: "03", label: "인근 병점역 아이파크캐슬\n매도가 9.7억" },
      { num: "04", label: "병점역 복합환승센터\n공사비 2,200억 개발 중" },
      { num: "05", label: "1호선 · 동탄 연장선 · 트램\nGTX-C 교통망 수혜지" },
    ],
  },

  // 섹션 이미지는 adaptive-landing 오산헤리티지자이x(osan-heritage-xi-x) 현장의 공식 사이트 원본 사진을
  // 1200px webp로 변환해 사용 — 텍스트가 박힌 긴 통이미지 대신 사진 + HTML 텍스트(features 타입)·탭 구성으로 교체
  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "총 1,783세대 GS건설 자이 대단지",
      // 1단지/2단지 탭 메뉴 — 탭별로 이미지·스펙을 따로 보여줌
      tabs: [
        {
          label: "1단지",
          images: [
            { src: "/apt/osan-heritage-xi-2/1-1.webp", alt: "오산헤리티지자이 단지 전경" },
          ],
          specItems: [
            { label: "사업명",   value: "오산 양산4지구 도시개발사업지구내 1BL공동주택 신축공사" },
            { label: "대지위치", value: "경기도 오산시 양산동 223번지 일원" },
            { label: "대지면적", value: "55,220㎡" },
            { label: "연면적",   value: "185,635.8279㎡" },
            { label: "건폐율",   value: "18.19%" },
            { label: "용적률",   value: "225.73%" },
            { label: "건축규모", value: "지하 2층 ~ 지상 27층 / 13개동" },
            { label: "세대수",   value: "총 1,783세대(1BL 1,069세대)" },
          ],
        },
        {
          label: "2단지",
          images: [
            { src: "/apt/osan-heritage-xi-2/1-2.webp", alt: "오산헤리티지자이 단지 전경" },
          ],
          specItems: [
            { label: "사업명",   value: "오산 양산4지구 도시개발사업지구내 2BL공동주택 신축공사" },
            { label: "대지위치", value: "경기도 오산시 양산동 328-2번지 일원" },
            { label: "대지면적", value: "36,880㎡" },
            { label: "연면적",   value: "127,132.1994㎡" },
            { label: "건폐율",   value: "17.38%" },
            { label: "용적률",   value: "226.13%" },
            { label: "건축규모", value: "지하 2층 ~ 지상 27층 / 9개동" },
            { label: "세대수",   value: "총 1,783세대(2BL 714세대)" },
          ],
        },
      ],
    },
    {
      id:        "location",
      type:      "features",
      headerAlign: "center",
      navLabel:  "입지환경",
      dark:      true,
      eyebrow:   "LOCATION",
      title:     "병점X동탄 더블생활권\nGTX-C 교통망 수혜지",
      subtitle:  "1호선·동탄 연장선·트램·GTX-C, 병점역 복합환승센터(공사비 2,200억) 개발 중",
      leadImage: { src: "/apt/osan-heritage-xi-2/2-0.webp", alt: "오산헤리티지자이 광역 위치 안내도" },
      items: [
        {
          tag:   "STATION",
          title: "더 커질 병점역 미래가치",
          desc:  "GTX-C 병점역 연장 추진, 동탄트램(계획) 등 병점·동탄 생활권",
          image: { src: "/apt/osan-heritage-xi-2/2-1.webp", alt: "병점역 미래가치" },
        },
        {
          tag:   "TRAFFIC",
          title: "쾌속 광역 교통망",
          desc:  "수도권 제2순환·오산화성·오산용인고속도로(계획) 등 광역 교통망",
          image: { src: "/apt/osan-heritage-xi-2/2-2.webp", alt: "쾌속 광역 교통망" },
        },
        {
          tag:   "EDUCATION",
          title: "탁월한 교육 인프라",
          desc:  "도보통학 양산1초(가칭·계획)·양산중('27예정), 세마중·고, 양산도서관 등",
          image: { src: "/apt/osan-heritage-xi-2/2-3.webp", alt: "탁월한 교육 인프라" },
        },
        {
          tag:   "LIFE",
          title: "센트럴 그린라이프",
          desc:  "병점복합타운 생활인프라, 단지 앞 대규모 체육공원 조성(계획)",
          image: { src: "/apt/osan-heritage-xi-2/2-4.webp", alt: "센트럴 그린라이프" },
        },
      ],
      note: "※ 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있으며, 개발 계획은 관계 기관 사정에 따라 변경될 수 있습니다.",
    },
    // 영상 섹션 — adaptive-landing 오산헤리티지자이x의 story(HERITAGE FILM) 문구·자이TV 공식 영상 3개 그대로
    {
      id:          "film",
      type:        "film",
      eyebrow:     "HERITAGE FILM",
      titleLine1:  "영상으로 먼저 만나는",
      titleAccent: "오산헤리티지자이",
      desc:        "자이가 완성하는 병점생활권의 새로운 헤리티지, 영상과 이미지로 미리 확인해보세요.",
      numbers: [
        { value: "1,783", label: "총 세대수 (1BL 1,069세대 · 2BL 714세대)" },
        { value: "GTX-C", label: "병점역 미래가치" },
        { value: "22",    label: "총 22개동 (1BL 13개동 · 2BL 9개동), 지하 2층~최고 27층" },
      ],
      scenes: [
        { youtubeId: "ZtsXOJ8pBcI", tag: "01 · BRAND FILM",   title: "Recreate, Every Moment",      desc: "당신으로부터 차이가 되다" },
        { youtubeId: "TYkfBe32BxQ", tag: "02 · INTRODUCTION", title: "병점역 新주거타운의 중심에,", desc: "오산헤리티지자이" },
        { youtubeId: "VFzBckoz8WM", tag: "03 · TEASER",       title: "오산헤리티지자이 티저영상",   desc: "영상으로 미리 만나는 오산헤리티지자이" },
      ],
    },
    // 프리미엄 도입 배너 — adaptive-landing 오산헤리티지자이x의 premiumIntro 문구·사진(가운데를 세로로 크롭)
    {
      id:         "premium-intro",
      type:       "intro-banner",
      bgImage:    { src: "/apt/osan-heritage-xi-2/3-0.webp", alt: "오산헤리티지자이 단지 전경" },
      introLines: ["新주거타운의 미래를 여는", "병점역 라이프의 新중심이 찾아옵니다."],
      title:      "오산헤리티지자이",
      footnote:   "※ 상기 내용 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.",
    },
    // 호반써밋 첨단3지구 "PREMIUM 8" 카드형(layout: "premium") — 아이콘·강조문구 색을 바둑판으로 번갈아 배치
    {
      id:        "premium",
      type:      "features",
      navLabel:  "프리미엄",
      layout:    "premium",
      titleLead: "오산헤리티지자이만의",
      titleWord: "PREMIUM",
      titleNum:  "6",
      items: [
        { icon: "train",   lead: "GTX-C 연장 추진·동탄트램(계획)",     strong: "병점역 미래가치",     image: { src: "/apt/osan-heritage-xi-2/3-1.webp", alt: "병점역 미래가치 이미지컷" } },
        { icon: "road",    lead: "제2순환·오산용인고속도로(계획)",     strong: "쾌속 광역 교통망",    image: { src: "/apt/osan-heritage-xi-2/3-2.webp", alt: "광역 교통망 이미지컷" },     iconTone: "dark", strongTone: "dark" },
        { icon: "school",  lead: "도보통학 양산1초(가칭·계획)",        strong: "탁월한 교육 인프라",  image: { src: "/apt/osan-heritage-xi-2/3-3.webp", alt: "교육 인프라 이미지컷" },     iconTone: "dark", strongTone: "dark" },
        { icon: "eco",     lead: "단지 앞 대규모 체육공원(계획)",      strong: "센트럴 그린라이프",   image: { src: "/apt/osan-heritage-xi-2/3-4.webp", alt: "그린라이프 이미지컷" } },
        { icon: "diamond", lead: "스카이라운지·피트니스·작은도서관",   strong: "다채로운 커뮤니티",   image: { src: "/apt/osan-heritage-xi-2/3-5.webp", alt: "커뮤니티 이미지컷" } },
        { icon: "city",    lead: "미니신도시급 1,783세대 대단지",      strong: "완성형 新주거타운",   image: { src: "/apt/osan-heritage-xi-2/3-6.webp", alt: "신주거타운 비전 이미지컷" }, iconTone: "dark", strongTone: "dark" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지배치",
      title:    "단지배치",
      subtitle: "1BL 13개동 · 2BL 9개동, 총 22개동",
      tabWrap:  true,
      tabs: [
        { label: "배치도", images: [{ src: "/apt/osan-heritage-xi-2/4-1.webp", alt: "오산헤리티지자이 단지 배치도(1BL·2BL)" }] },
        { label: "1BL 동호수", images: [{ src: "/apt/osan-heritage-xi-2/4-2.webp", alt: "오산헤리티지자이 1BL 동호수 배치표" }] },
        { label: "2BL 동호수", images: [{ src: "/apt/osan-heritage-xi-2/4-3.webp", alt: "오산헤리티지자이 2BL 동호수 배치표" }] },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "CLUB XIAN · CLUB CLOUD",
      tabs: [
        {
          label: "CLUB XIAN",
          subTabs: [
            { label: "1BL",           images: [{ src: "/apt/osan-heritage-xi-2/5-1.webp", alt: "1BL CLUB XIAN 시설 안내" }] },
            { label: "2BL",           images: [{ src: "/apt/osan-heritage-xi-2/5-2.webp", alt: "2BL CLUB XIAN 시설 안내" }] },
            { label: "특화 커뮤니티", images: [{ src: "/apt/osan-heritage-xi-2/5-3.webp", alt: "CLUB XIAN 특화 커뮤니티 시설 안내" }] },
          ],
        },
        {
          label: "CLUB CLOUD",
          subTabs: [
            { label: "1BL", images: [{ src: "/apt/osan-heritage-xi-2/5-4.webp", alt: "1BL CLUB CLOUD(26F) 시설 안내" }] },
            { label: "2BL", images: [{ src: "/apt/osan-heritage-xi-2/5-5.webp", alt: "2BL CLUB CLOUD(26F) 시설 안내" }] },
          ],
        },
      ],
    },
    {
      id:       "complex",
      type:     "image-then-spec",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "75㎡부터 166㎡P까지 8개 타입 (면적은 1BL 기준)",
      tabWrap:  true,
      tabs: [
        { label: "75",   images: [{ src: "/apt/osan-heritage-xi-2/6-1.webp", alt: "75㎡ 타입 평면도" }],   specItems: [{ label: "세대수", value: "1BL 44세대 · 2BL 47세대 (총 91세대)" },            { label: "전용면적", value: "75.4736㎡" },  { label: "공급면적", value: "99.1264㎡" },  { label: "계약면적", value: "149.6620㎡" }] },
        { label: "84A",  images: [{ src: "/apt/osan-heritage-xi-2/6-2.webp", alt: "84㎡A 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 270세대 · 2BL 239세대 (총 509세대)" },         { label: "전용면적", value: "84.9796㎡" },  { label: "공급면적", value: "110.8249㎡" }, { label: "계약면적", value: "167.7255㎡" }] },
        { label: "84B",  images: [{ src: "/apt/osan-heritage-xi-2/6-3.webp", alt: "84㎡B 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 260세대 · 2BL 176세대 (총 436세대)" },         { label: "전용면적", value: "84.9665㎡" },  { label: "공급면적", value: "111.4029㎡" }, { label: "계약면적", value: "168.2948㎡" }] },
        { label: "84C",  images: [{ src: "/apt/osan-heritage-xi-2/6-4.webp", alt: "84㎡C 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 262세대 · 2BL 184세대 (총 446세대)" },         { label: "전용면적", value: "84.8237㎡" },  { label: "공급면적", value: "110.4619㎡" }, { label: "계약면적", value: "167.2581㎡" }] },
        { label: "84D",  images: [{ src: "/apt/osan-heritage-xi-2/6-5.webp", alt: "84㎡D 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 88세대 (총 88세대)" },                         { label: "전용면적", value: "84.9708㎡" },  { label: "공급면적", value: "110.7265㎡" }, { label: "계약면적", value: "167.6212㎡" }] },
        { label: "102",  images: [{ src: "/apt/osan-heritage-xi-2/6-6.webp", alt: "102㎡ 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 97세대 · 2BL 43세대 (총 140세대)" },           { label: "전용면적", value: "102.6201㎡" }, { label: "공급면적", value: "130.3482㎡" }, { label: "계약면적", value: "199.0605㎡" }] },
        { label: "124",  images: [{ src: "/apt/osan-heritage-xi-2/6-7.webp", alt: "124㎡ 타입 평면도" }],  specItems: [{ label: "세대수", value: "1BL 45세대 · 2BL 23세대 (총 68세대)" },            { label: "전용면적", value: "124.8692㎡" }, { label: "공급면적", value: "155.8720㎡" }, { label: "계약면적", value: "239.4820㎡" }] },
        { label: "166P", images: [{ src: "/apt/osan-heritage-xi-2/6-8.webp", alt: "166㎡P 타입 평면도" }], specItems: [{ label: "세대수", value: "1BL 3세대 · 2BL 2세대 (총 5세대, 펜트하우스)" }, { label: "전용면적", value: "166.2309㎡" }, { label: "공급면적", value: "210.1771㎡" }, { label: "계약면적", value: "321.4820㎡" }] },
      ],
    },
  ],


  theme: {
    // ── 히어로 커튼 색상 ──
    // 높이는 숭의역 라온프라이빗 스카이브와 동일하게 기본값(100dvh) 사용
    // imageFit: 100% auto는 현재 이미지 비율상 위쪽에 배경색 여백이 남아 cover로 원복
    // (다른 현장들처럼 여백 없이 꽉 채움 — 모바일에서 PC보다 조금 더 확대되어 보이는 건 감수)
    hero: {
      curtainColor: "#1e293b",
      // 500만원 강조 카드가 하늘 배경 위에서도 또렷하게 보이도록 상단 오버레이를 기본값보다 진하게
      textOverlay: "linear-gradient(to bottom, rgba(6,10,30,0.92) 0%, rgba(6,10,30,0.7) 50%, rgba(6,10,30,0) 85%)",
    },

    // features 타입 섹션(입지환경·프리미엄) 강조색 — 히어로 골드 톤과 통일
    FeatureSection: {
      accent: "#f59e0b",
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
    // 금액 키워드가 한눈에 들어오도록 기존보다 크게 + 골드 강조색
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(1.9rem,9.5vw,3rem)",
      accentColor: "#fbbf24",
    },

    // 핵심 혜택 리스트(condition 변형) — 배경 사진 위 오버레이, 활성 카드는 참고 디자인과 같은 연하늘색
    BenefitsSection: {
      overlay:          "linear-gradient(180deg, rgba(10,16,32,0.88) 0%, rgba(10,16,32,0.8) 40%, rgba(10,16,32,0.92) 100%)",
      activeBackground: "#c9d9ea",
      activeTextColor:  "#0f1f3d",
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
      background: "#1e3a5f",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 탭 활성 버튼(사업개요·단지배치·커뮤니티·평면도) — 하단 관심고객등록 버튼과 같은 남색으로 통일
    ImageSection_tabActive: {
      background:  "#1e3a5f",
      borderColor: "#1e3a5f",
      color:       "#ffffff",
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
