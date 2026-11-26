/**
 * 현장 슬러그: sangok-xi-hillstate-hanulche
 * URL: /apt/sangok-xi-hillstate-hanulche
 * 한글도메인: 산곡역자이힐스테이트하늘채.addupapt.kr
 * 구성은 포레나더샵인천시청역(forena-theshop-incheon-cityhall)과 동일한 이미지 섹션형
 */

const config = {
  slug:        "sangok-xi-hillstate-hanulche",
  subdomain:   "산곡역자이힐스테이트하늘채",
  projectName: "산곡역자이힐스테이트&하늘채",
  shortName:   "산곡역자이힐스테이트&하늘채",
  telNumber:   "1600 6422",
  ogImage:     "/apt/sangok-xi-hillstate-hanulche/share_img.jpg",
  adminPhones:  ["01050017276"],
  kakao:        true,
  kakaoTemplateId: "KA01TP260622093537285QA4EPtdxJyI",
  sheetId:      "",
  sheetTab:     "산곡역자이힐스테이트하늘채",

  popup: {
    enabled: false,
    image: {
      src: "/apt/sangok-xi-hillstate-hanulche/4.webp",
      alt: "산곡역자이힐스테이트&하늘채 팝업",
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
    eyebrow:       "7호선 산곡역 초역세권｜더블 초품아",
    eyebrowUrgent: 1,
    brand:         "산곡역 자이힐스테이트&하늘채",
    title:         "7호선 산곡역 초역세권\n자이·힐스테이트·하늘채\n2,706세대 브랜드 타운",
    subtitle:      "인천 부평구 산곡동 · 전용 50·59·75·84㎡",
    bgColor:       "linear-gradient(to bottom, rgb(150 190 230), rgb(205 225 245))",
    accentKeyword:  ["산곡역", "2,706세대"],
    image: {
      src:    "/apt/sangok-xi-hillstate-hanulche/1.webp",
      alt:    "산곡역자이힐스테이트&하늘채 대표 이미지",
      width:  1200,
      height: 1508,
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
        { src: "/apt/sangok-xi-hillstate-hanulche/1-1.webp", alt: "산곡역자이힐스테이트&하늘채 메인 조감도" },
        { src: "/apt/sangok-xi-hillstate-hanulche/1-2.webp", alt: "산곡역자이힐스테이트&하늘채 메인 투시도" },
      ],
      specItems: [
        { label: "단지명",   value: "산곡역자이힐스테이트&하늘채" },
        { label: "공급위치", value: "인천광역시 부평구 산곡동 10번지 일원" },
        { label: "건축규모", value: "지하 3층 ~ 지상 17~33층, 아파트 20개동" },
        { label: "세대수",   value: "총 2,706세대 (일반분양 1,289세대)" },
        { label: "주택형",   value: "전용 50㎡A·B / 59㎡A·B·C / 75㎡A·B / 84㎡A·B" },
        { label: "견본주택", value: "인천광역시 부평구 산곡동 43-2번지" },
      ],
    },
    {
      id:       "siteplan",
      type:     "image",
      navLabel: "단지배치",
      title:    "단지배치",
      subtitle: "숲과 정원이 흐르는 20개동 단지 설계",
      images: [
        { src: "/apt/sangok-xi-hillstate-hanulche/2-0.webp", alt: "단지배치도 및 공급세대" },
        { src: "/apt/sangok-xi-hillstate-hanulche/2-1.webp", alt: "단지배치도(탑뷰 CG)" },
      ],
    },
    {
      id:       "design",
      type:     "image",
      title:    "단지설계",
      subtitle: "한 걸음 앞선 설계로 한 차원 높은 삶으로",
      images: [
        { src: "/apt/sangok-xi-hillstate-hanulche/6-1.webp", alt: "단지설계" },
      ],
    },
    {
      id:        "location",
      type:      "features",
      navLabel:  "입지환경",
      layout:    "simple",
      headerAlign: "center",
      sectionBg: "#ffffff",
      accent:    "#0F2A44",
      eyebrow:   "LOCATION",
      title:     "서울과 직결되는\n7호선 산곡역의 가치",
      subtitle:  "산곡역 5·6번 출구 앞, 강남·구로·부천을 잇는 7호선 초역세권",
      leadImage: { src: "/apt/sangok-xi-hillstate-hanulche/3-0.webp", alt: "산곡역자이힐스테이트&하늘채 광역 조감도" },
      items: [
        {
          tag:   "TRAFFIC",
          title: "7호선 산곡역 초역세권",
          titleStrong: "초역세권",
          desc:  "산곡역 5·6번 출구 바로 앞, 고속터미널역 55분 · 7호선 청라 연장(계획)",
          image: { src: "/apt/sangok-xi-hillstate-hanulche/3-1.webp", alt: "7호선 산곡역 초역세권 이미지컷" },
        },
        {
          tag:   "EDUCATION",
          title: "더블 초품아 안심 등굣길",
          titleStrong: "더블 초품아",
          desc:  "단지 앞 산곡북초·마곡초 도보 통학, 산곡중·청천중·세일고·명신여고·인천외고",
          image: { src: "/apt/sangok-xi-hillstate-hanulche/3-2.webp", alt: "더블 초품아 이미지컷" },
        },
      ],
    },
    {
      id:       "location-detail",
      type:     "image",
      title:    "7호선 산곡역 바로 앞",
      subtitle: "교통·교육·자연·미래가치를 한눈에",
      images: [
        { src: "/apt/sangok-xi-hillstate-hanulche/3-3.webp", alt: "입지환경 상세" },
      ],
    },
    {
      id:        "premium",
      type:      "features",
      navLabel:  "프리미엄",
      layout:    "premium",
      sectionBg: "linear-gradient(180deg, #f6f9fc 0%, #e9f1f8 100%)",
      titleLead: "산곡역자이힐스테이트&하늘채만의",
      titleWord: "PREMIUM",
      titleNum:  "5",
      note:      "※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 상이합니다. 개발계획은 관계기관 사정에 따라 변경될 수 있습니다.",
      items: [
        { icon: "train",   lead: "산곡역 5·6번 출구 바로 앞",             strong: "7호선 초역세권",       image: { src: "/apt/sangok-xi-hillstate-hanulche/4-1.webp", alt: "7호선 초역세권 이미지컷" } },
        { icon: "school",  lead: "단지 앞 산곡북초·마곡초 도보 통학",      strong: "더블 초품아",          image: { src: "/apt/sangok-xi-hillstate-hanulche/4-2.webp", alt: "더블 초품아 이미지컷" },   iconTone: "dark", strongTone: "dark" },
        { icon: "eco",     lead: "원적산공원·외골놀이공원·원적산 둘레길",  strong: "힐링 라이프",          image: { src: "/apt/sangok-xi-hillstate-hanulche/4-3.webp", alt: "원적산 숲세권 조감" },     iconTone: "dark", strongTone: "dark" },
        { icon: "diamond", lead: "옛 1113공병단·캠프마켓 개발(계획)",      strong: "빛나는 미래가치",      image: { src: "/apt/sangok-xi-hillstate-hanulche/4-4.webp", alt: "부평 도심 전경" } },
        { icon: "city",    lead: "자이·힐스테이트·하늘채의 만남",          strong: "2,706세대 브랜드 타운", image: { src: "/apt/sangok-xi-hillstate-hanulche/4-5.webp", alt: "단지 조감도" } },
      ],
    },
    {
      id:        "community",
      type:      "features",
      navLabel:  "커뮤니티",
      layout:    "grid",
      headerAlign: "center",
      accent:    "#0F2A44",
      eyebrow:   "COMMUNITY",
      title:     "삶의 즐거움이 커지는\n스페셜 커뮤니티",
      subtitle:  "교보문고와 함께하는 작은도서관부터 피트니스·골프·사우나까지",
      note:      "※ 상기 CG 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며 반드시 견본주택에서 확인하시기 바랍니다.",
      items: [
        { tag: "FITNESS",     title: "피트니스",            image: { src: "/apt/sangok-xi-hillstate-hanulche/8-1.webp", alt: "피트니스" } },
        { tag: "GOLF",        title: "골프연습장",          image: { src: "/apt/sangok-xi-hillstate-hanulche/8-2.webp", alt: "골프연습장" } },
        { tag: "LIBRARY",     title: "작은도서관(교보문고)", image: { src: "/apt/sangok-xi-hillstate-hanulche/8-3.webp", alt: "작은도서관" } },
        { tag: "CAFE",        title: "카페라운지",          image: { src: "/apt/sangok-xi-hillstate-hanulche/8-4.webp", alt: "카페라운지" } },
        { tag: "SAUNA",       title: "사우나",              image: { src: "/apt/sangok-xi-hillstate-hanulche/8-5.webp", alt: "사우나" } },
        { tag: "PILATES·GX",  title: "그룹필라테스·GX룸",   image: { src: "/apt/sangok-xi-hillstate-hanulche/8-6.webp", alt: "그룹필라테스·GX룸" } },
        { tag: "STUDY",       title: "독서실·1인 독서실",   image: { src: "/apt/sangok-xi-hillstate-hanulche/8-7.webp", alt: "독서실" } },
        { tag: "GUEST HOUSE", title: "게스트하우스",        image: { src: "/apt/sangok-xi-hillstate-hanulche/8-8.webp", alt: "게스트하우스" } },
      ],
    },
    {
      id:       "unitplan",
      type:     "image",
      navLabel: "평면도",
      title:    "평면도",
      subtitle: "전용 50㎡부터 84㎡까지 9개 타입",
      tabWrap:  true,
      tabs: [
        { label: "50A", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-1.webp", alt: "50㎡A 평면도" }] },
        { label: "50B", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-2.webp", alt: "50㎡B 평면도" }] },
        { label: "59A", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-3.webp", alt: "59㎡A 평면도" }] },
        { label: "59B", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-4.webp", alt: "59㎡B 평면도" }] },
        { label: "59C", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-5.webp", alt: "59㎡C 평면도" }] },
        { label: "75A", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-6.webp", alt: "75㎡A 평면도" }] },
        { label: "75B", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-7.webp", alt: "75㎡B 평면도" }] },
        { label: "84A", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-8.webp", alt: "84㎡A 평면도" }] },
        { label: "84B", images: [{ src: "/apt/sangok-xi-hillstate-hanulche/9-9.webp", alt: "84㎡B 평면도" }] },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#0F2A44",  // 자이 네이비
      // 밝은 하늘 위 흰 타이틀 가독성용 — 상단만 네이비로 살짝 눌러 줌
      textOverlay:  "linear-gradient(to bottom, rgba(10,28,48,0.82) 0%, rgba(10,28,48,0.45) 40%, rgba(10,28,48,0) 70%)",
    },

    // 사진 카드 섹션(입지·프리미엄·커뮤니티) — 미지정 시 기본 테라코타(분홍빛)라 현장 색으로 지정
    FeatureSection: {
      accent:        "#0F2A44",
      premiumAccent: "#0F2A44",  // 자이 네이비
      premiumDark:   "#1f8fc4",  // 하늘색 포인트
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #0F2A44, #29a8e0)",
      width:      "40px",
      height:     "3px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#ffffff",
      borderColor: "rgba(255,255,255,0.6)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent)
    eyebrowUrgent: {
      color:       "#ffe066",
      borderColor: "rgba(255,224,102,0.6)",
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
      accentColor: "#7fd3ff",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#0F2A44",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "#29a8e0",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#e6f3fb",
      color:      "#0F2A44",
    },
    BottomBar_regBtn: {
      background: "#0F2A44",
      color:      "#ffffff",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 산곡역자이힐스테이트&하늘채 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 산곡역자이힐스테이트&하늘채 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
