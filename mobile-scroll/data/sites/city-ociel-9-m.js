/**
 * 현장 슬러그: city-ociel-9-m
 * URL: /apt/city-ociel-9-m
 * 시티오씨엘 9단지 오션파크뷰 — mobile-scroll(모바일 최적화) 버전.
 * adaptive-landing의 city-ociel-9(slug·subdomain '시티오씨엘9단지' 사용 중)와 충돌을 피하기 위해 '-m' 접미사.
 * 문구·이미지는 adaptive-landing city-ociel-9(교육자료 PDF + 공식 사이트 cityociel9.com 원본)를 그대로 옮기고,
 * 이미지는 1200px webp로 변환 — 통이미지 대신 사진 + HTML 텍스트(features/intro-banner) 구성
 * 대표번호 1600-8048, 관심고객 접수 알림 문자 수신번호 010-2069-8339 (2026-10-20 사용자 전달값)
 */

const config = {
  slug:        "city-ociel-9-m",
  subdomain:   "m시티오씨엘9단지",
  projectName: "시티오씨엘 9단지 오션파크뷰",
  shortName:   "시티오씨엘 9단지",
  telNumber:   "1600-8048",
  ogImage:     "/apt/city-ociel-9-m/share_img.png",
  adminPhones:  ["01020698339"],
  sheetId:      "",
  sheetTab:     "시티오씨엘9단지m",

  // ── 유입 경로 (utm_source) — 관리자 알림 문자에 유입매체 포함 ──
  showUtmInSms: true,

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
    eyebrow:       "시티오씨엘 단일 최대 규모｜1군 브랜드 컨소시엄",
    eyebrowUrgent: 0,
    brand:         "시티오씨엘 9단지 오션파크뷰",
    title:         "차이를 넘어,\n차원이 다른\n최고 49층 1,949세대",
    subtitle:      "문의) 1600-8048",
    bgColor:       "#1f2023",
    accentKeyword: ["49층", "1,949세대"],
    image: {
      src:    "/apt/city-ociel-9-m/1.webp",
      alt:    "시티오씨엘 9단지 오션파크뷰 투시도",
      width:  850,
      height: 1000,
    },
  },

  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "시티오씨엘 단일 최대 규모 1,949세대",
      images: [
        { src: "/apt/city-ociel-9-m/1-1.webp", alt: "시티오씨엘 9단지 오션파크뷰 투시도" },
      ],
      specItems: [
        { label: "사업명",        value: "시티오씨엘 9단지 오션파크뷰" },
        { label: "대지위치",      value: "인천 용현·학익 1BL 도시개발구역 공동3BL" },
        { label: "건축규모",      value: "지하 2층, 지상 최고 49층 / 9개동" },
        { label: "세대수",        value: "총 1,949세대(전용 59~136㎡)" },
        { label: "대지면적",      value: "91,275.6000㎡(27,610.86평)" },
        { label: "건축면적",      value: "9,272.7429㎡(2,805.00평)" },
        { label: "연면적",        value: "332,891.2799㎡(100,699.61평)" },
        { label: "건폐율/용적률", value: "7.87%(부대시설 제외) / 249.84%" },
        { label: "주차대수",      value: "총 2,660대(세대당 1.36대)" },
        { label: "시공",          value: "HDC현대산업개발 · 현대건설 · 포스코이앤씨" },
      ],
    },
    {
      id:          "location",
      type:        "features",
      headerAlign: "center",
      navLabel:    "입지환경",
      layout:      "simple",
      sectionBg:   "#ffffff",
      eyebrow:     "PERFECT LOCATION",
      title:       "인천 서남권\n최중심 입지",
      subtitle:    "경인고속·수도권 제2순환고속도로를 통한 인천전역 및 수도권 접근성 우수",
      leadImage:   { src: "/apt/city-ociel-9-m/2-0.webp", alt: "시티오씨엘 9단지 광역 입지도" },
      items: [
        {
          tag:   "PRESTIGE",
          title: "OVER THE NATURE",
          titleStrong: "NATURE",
          desc:  "그랜드파크(예정)와 남항근린공원, 갯골유수지, 서해바다 등 다양한 자연 인프라",
          image: { src: "/apt/city-ociel-9-m/2-1.webp", alt: "자연 인프라 이미지컷" },
        },
        {
          tag:   "PRESTIGE",
          title: "OVER THE EDU",
          titleStrong: "EDU",
          desc:  "인접한 용현학익2초(예정)와 바로 앞 용현학익중(예정), 고등학교(계획) 등 걸어서 등교하는 맘편한 학세권",
          image: { src: "/apt/city-ociel-9-m/2-2.webp", alt: "학세권 이미지컷" },
        },
        {
          tag:   "PRESTIGE",
          title: "OVER THE TRAFFIC",
          titleStrong: "TRAFFIC",
          desc:  "학익역(예정), KTX송도역(예정), GTX-B청학역(예정), 능해IC-제2경인고속도로 등의 쾌속 광역교통망",
          image: { src: "/apt/city-ociel-9-m/2-3.webp", alt: "광역교통망 이미지컷" },
        },
        {
          tag:   "PRESTIGE",
          title: "OVER THE LIFE",
          titleStrong: "LIFE",
          desc:  "13,000여 세대 시티오씨엘 상권, 인하대병원 등을 누리는 편리한 중심생활권",
          image: { src: "/apt/city-ociel-9-m/2-4.webp", alt: "중심생활권 이미지컷" },
        },
      ],
      note: "※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며, 개발계획 및 학교 등 예정사항은 향후 관계기관의 사정에 따라 변경될 수 있으니 참고용으로만 활용하시기 바랍니다.",
    },
    // 프리미엄 도입 배너 — adaptive-landing city-ociel-9 premiumIntro 문구
    {
      id:         "premium-intro",
      type:       "intro-banner",
      bgImage:    { src: "/apt/city-ociel-9-m/3-0.webp", srcWide: "/apt/city-ociel-9-m/3-0-wide.webp", alt: "시티오씨엘 9단지 오션파크뷰 투시도" },
      introLines: ["세상이 말하는 차이를 넘어 차원이 다른,", "시티오씨엘을 넘어선 시티오씨엘이 옵니다."],
      title:      "ABOVE PRIDES",
      footnote:   "※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.",
    },
    // PREMIUM 9 (교육자료 p.22) — 카드형(layout: "premium")
    {
      id:        "premium",
      type:      "features",
      navLabel:  "프리미엄",
      layout:    "premium",
      sectionBg: "linear-gradient(180deg, #f8f5ee 0%, #efe9dd 100%)",
      titleLead: "시티오씨엘 9단지만의",
      titleWord: "PREMIUM",
      titleNum:  "9",
      items: [
        { icon: "city",    lead: "미니신도시급 1만3천여세대 도시개발",   strong: "대규모 브랜드 타운",   image: { src: "/apt/city-ociel-9-m/3-1.webp", alt: "시티오씨엘 도시개발사업 조감도" } },
        { icon: "diamond", lead: "시티오씨엘 단일 최대 1,949세대",       strong: "단일 최대규모 단지",   image: { src: "/apt/city-ociel-9-m/3-2.webp", alt: "단지 전경 투시도" },        iconTone: "dark", strongTone: "dark" },
        { icon: "eco",     lead: "그랜드파크·서해바다 조망(일부세대)",   strong: "OCEAN · PARK View",   image: { src: "/apt/city-ociel-9-m/3-3.webp", alt: "파크뷰·오션뷰 조망" } },
        { icon: "school",  lead: "도보 약 300m 초교(개교확정)·중학교",   strong: "도보권 안심 통학",     image: { src: "/apt/city-ociel-9-m/3-4.webp", alt: "함께 등교하는 아이들 이미지컷" }, iconTone: "dark", strongTone: "dark" },
        { icon: "train",   lead: "GTX-B·KTX송도역·학익역(예정)",        strong: "쾌속 · 광역 교통망",   image: { src: "/apt/city-ociel-9-m/3-5.webp", alt: "KTX 열차 이미지컷" } },
        { icon: "eco",     lead: "약 10만평 그랜드파크(예정) 최인접",    strong: "그랜드파크 최인접",    image: { src: "/apt/city-ociel-9-m/3-6.webp", alt: "그랜드파크(예정) 이미지컷" }, iconTone: "dark", strongTone: "dark" },
        { icon: "road",    lead: "단지내 산책로·폰드, 건폐율 7.87%",     strong: "압도적인 단지 쾌적성", image: { src: "/apt/city-ociel-9-m/3-7.webp", alt: "공원형 단지 산책로 이미지컷" } },
        { icon: "city",    lead: "뮤지엄파크(예정)·체육시설(예정)",      strong: "One Stop 생활권",      image: { src: "/apt/city-ociel-9-m/3-8.webp", alt: "인천 뮤지엄파크(예정) 조감도" }, iconTone: "dark", strongTone: "dark" },
        { icon: "diamond", lead: "공간 활용도를 높인 평면·고급 마감재",  strong: "우수한 상품성 · 특화설계", image: { src: "/apt/city-ociel-9-m/3-9.webp", alt: "광폭 드레스룸·수납공간 이미지컷" } },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지안내",
      title:    "단지안내",
      subtitle: "최고 49층 9개동 총 1,949세대",
      tabWrap:  true,
      tabs: [
        { label: "단지설계",   images: [{ src: "/apt/city-ociel-9-m/4-1.webp", alt: "단지설계 — 시티오씨엘의 한계를 넘어서다" }] },
        { label: "단지배치도", images: [{ src: "/apt/city-ociel-9-m/4-2.webp", alt: "단지배치도 및 타입별 세대수(총 1,949세대)" }] },
        { label: "동호배치도", images: [{ src: "/apt/city-ociel-9-m/4-3.webp", alt: "동호배치도(901~909동)" }] },
        { label: "조경",       images: [{ src: "/apt/city-ociel-9-m/4-4.webp", alt: "조경 — 도심 속의 공원형 단지" }] },
        { label: "커뮤니티",   images: [{ src: "/apt/city-ociel-9-m/4-5.webp", alt: "커뮤니티 — 피트니스·다목적체육관·실내골프연습장·사우나·독서실 등" }] },
        { label: "개발계획",   images: [{ src: "/apt/city-ociel-9-m/4-6.webp", alt: "시티오씨엘 도시개발사업 계획도(5개 O ciel 그룹)" }] },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "59㎡부터 136㎡P까지 10개 타입",
      tabWrap:  true,
      tabs: [
        { label: "59",   images: [{ src: "/apt/city-ociel-9-m/5-1.webp",  alt: "59㎡ 타입 평면 안내" }] },
        { label: "75",   images: [{ src: "/apt/city-ociel-9-m/5-2.webp",  alt: "75㎡ 타입 평면 안내" }] },
        { label: "84A",  images: [{ src: "/apt/city-ociel-9-m/5-3.webp",  alt: "84㎡A 타입 평면 안내" }] },
        { label: "84B",  images: [{ src: "/apt/city-ociel-9-m/5-4.webp",  alt: "84㎡B 타입 평면 안내" }] },
        { label: "95",   images: [{ src: "/apt/city-ociel-9-m/5-5.webp",  alt: "95㎡ 타입 평면 안내" }] },
        { label: "101A", images: [{ src: "/apt/city-ociel-9-m/5-6.webp",  alt: "101㎡A 타입 평면 안내" }] },
        { label: "101B", images: [{ src: "/apt/city-ociel-9-m/5-7.webp",  alt: "101㎡B 타입 평면 안내" }] },
        { label: "110",  images: [{ src: "/apt/city-ociel-9-m/5-8.webp",  alt: "110㎡ 타입 평면 안내" }] },
        { label: "133P", images: [{ src: "/apt/city-ociel-9-m/5-9.webp",  alt: "133㎡P 타입 평면 안내" }] },
        { label: "136P", images: [{ src: "/apt/city-ociel-9-m/5-10.webp", alt: "136㎡P 타입 평면 안내" }] },
      ],
    },
  ],

  theme: {
    // ── 색상 체계 (adaptive-landing city-ociel-9과 동일) ──
    // 다크 #1f2023: 히어로·폼 배경·버튼 / 베이지 #a8967f: 강조 글자 / 연베이지 #d3c6b9: 보조 버튼
    hero: {
      curtainColor: "#1f2023",
      // 기본 남색 오버레이 대신 공식 사이트 메인 비주얼 배경색(#1f2023) 계열
      textOverlay: "linear-gradient(to bottom, rgba(31,32,35,0.92) 0%, rgba(31,32,35,0.65) 50%, rgba(31,32,35,0) 85%)",
    },

    FeatureSection: {
      accent:        "#a8967f",
      premiumAccent: "#1f2023",
      premiumDark:   "#a8967f",
    },

    TopNav_active: {
      color:       "#1f2023",
      borderColor: "#a8967f",
    },

    ImageSection_divider: {
      background: "linear-gradient(90deg, #1f2023, #a8967f)",
      width:      "40px",
      height:     "3px",
    },

    eyebrow: {
      color:       "#1f2023",
      borderColor: "#d3c6b9",
      background:  "#d3c6b9",
      fontSize:    "0.9rem",
      letterSpacing: "-0.01em",
    },
    eyebrowUrgent: {
      color:       "#ffffff",
      borderColor: "rgba(211,198,185,0.6)",
    },

    brand: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
      letterSpacing: "-0.01em",
    },
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(1.7rem,8.5vw,2.8rem)",
      accentColor: "#d3c6b9",
    },
    subtitle: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
      letterSpacing: "0",
    },

    contactSection: {
      background: "#1f2023",
    },
    ContactForm_submitBtn: {
      background: "#d3c6b9",
      color:      "#1f2023",
      fontSize:   "1.15rem",
    },

    ImageSection_tabActive: {
      background:  "#1f2023",
      borderColor: "#1f2023",
      color:       "#ffffff",
    },

    BottomBar_callBtn: {
      background: "#d3c6b9",
      color:      "#1f2023",
    },
    BottomBar_regBtn: {
      background: "#1f2023",
      color:      "#ffffff",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 시티오씨엘 9단지 오션파크뷰 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 시티오씨엘 9단지 오션파크뷰 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
