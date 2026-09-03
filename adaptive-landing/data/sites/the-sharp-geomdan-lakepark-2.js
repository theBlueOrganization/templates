// 더샵 검단레이크파크2 — the-sharp-geomdan-lakepark.js(참고 사이트 apt-all.app 재현)와는 별도 현장으로,
// 시공사 공식 홈페이지(https://xn--c79an5jhjs4nmongpjhypa161d.kr/)에서 문구·수치·이미지를 직접 가져와
// 채웠고, 구조는 example-apt.js와 동일한 표준 12필드 Signature 스택(the-sharp-songdo-grand-terre.js와
// 같은 방식)을 사용한다. signature 필드 ↔ 컴포넌트 매핑은 example-apt.js 상단 주석 참고.
//
// 공식 홈페이지는 메인 1페이지 안에 사업개요·프리미엄·조경·커뮤니티 정도만 담고 있고 단지배치도/
// 동호수배치도/타입별 상세 평면(59A·84B·84C 등)은 별도로 제공하지 않아, 그 두 섹션(complex/unitPlan)
// 이미지와 전용/공급면적 수치만 the-sharp-geomdan-lakepark.js가 이미 확보해 둔 동일 단지의 실제
// 자료(같은 22BL·23BL 프로젝트)를 그대로 재사용했다. 나머지 전 섹션은 공식 홈페이지 원본이다.
//
// 공식 홈페이지의 "분양일정" 캘린더(특별공급 26.06.24 등)는 오늘 기준 이미 지난 날짜라 제외했고,
// 대표 전화번호도 공식 홈페이지 번호(1600-2857)가 아니라 이 현장 전용 상담 트래킹 번호를 쓴다.
const config = {
  slug: 'the-sharp-geomdan-lakepark-2',
  subdomain: '더샵검단레이크파크2',
  projectName: '더샵 검단레이크파크2',
  shortName: '더샵 검단레이크파크2',
  telNumber: '1666-1050',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt2/apt/the-sharp-geomdan-lakepark-2/og.jpg',
  adminPhones: ['01048086474', '01071901052', '01090447402'],
  sheetId: '',
  sheetTab: '더샵검단레이크파크2',
  showUtmInSms: true,
  kakao: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 요청 반영 — 공식 홈페이지 느낌의 차분한 네이비·하늘색 톤으로 전체 팔레트 변경
  // (--navy/--ink/--cream/--gold는 app/apt/[slug]/page.jsx가 이 값을 CSS 변수로 주입,
  // Signature* 컴포넌트들이 이 변수를 accent/배경색으로 참조함 — the-sharp-songdo-grand-terre.js와 동일 방식)
  colorTheme: {
    navy: '#173a63',
    ink: '#122542',
    cream: '#eef4f9',
    gold: '#6fa8dc',
  },

  // 요청 반영 — 공식 홈페이지와 동일한 서체(Pretendard, 오픈소스 SIL OFL 라이선스)를 이 현장에만 적용
  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css',
  },

  visitTimeOptions: [
    '10:00 ~ 11:00',
    '11:00 ~ 12:00',
    '12:00 ~ 13:00',
    '13:00 ~ 14:00',
    '14:00 ~ 15:00',
    '15:00 ~ 16:00',
    '16:00 ~ 17:00',
    '17:00 ~ 18:00',
  ],

  signature: {
    header: {
      logo: { src: '/apt/the-sharp-geomdan-lakepark-2/logo-white.svg', alt: '더샵 검단레이크파크', width: 130, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-1050',
    },

    // 출처: 요청 반영 — 더샵 송도그란테르 현장과 동일한 PC(1024px 이상) 전용 우측 고정 퀵메뉴
    quickMenu: {
      brand: 'THE SHARP GEOMDAN LAKEPARK',
      phoneLabel: '분양문의',
      phone: '1666-1050',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '더샵 검단레이크파크\n분양 상담을 도와드립니다.',
      address: '인천광역시 검단구 마전동 산175-7번지 일원',
      tagline: "GEOMDAN'S FIRST THE SHARP",
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '04', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '05', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '06', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 요청 반영 — 검정 배경/어두운 스크림을 없애 영상·이미지가 그대로 밝게 보이게 함
    hero: {
      overlay: false,
      textColor: '#000000',
      eyebrowLine1: '검단, 첫번째 더샵',
      eyebrowLine2: '1군 브랜드 대단지를 소유할 마지막 기회',
      titleLine1: '검단 첫 더샵,',
      titleLine2: '2,857세대 수변 브랜드타운',
      descLine1: '민간분양 분양가상한제 적용단지',
      descLine1Accent: ['분양가상한제'],
      descLine2: '나진포천 수변공원과 중앙호수공원을 가까이 둔 워터프론트 라이프',
      descLine3: '22BL 1,454세대 · 23BL 1,403세대, 지하 3층~지상 29층 26개동',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-2/hero-bg.jpg', alt: '더샵 검단레이크파크 대표 조감도' },
      bgVideo: { src: '/apt/the-sharp-geomdan-lakepark-2/hero-bg.mp4' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '더샵 검단레이크파크', textLight: ' 공식 안내센터입니다.' }],
        // 요청 반영 — 말풍선 2개: 방문예약하기(관심고객 폼으로 이동) / 문의하기(전화번호 노출)
        bubbles: [
          { label: '방문예약하기', action: 'visit' },
          { label: '문의하기', action: 'call' },
        ],
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 요청 반영 — 더샵 송도그란테르 현장(SignatureBenefits)과 동일한 "특별한 4가지 조건" 패턴을
    // 이 현장의 실제 특징(분양가상한제·브랜드·교통·수변)으로 채움
    benefits: {
      id: 'benefits',
      eyebrow: 'SPECIAL CONDITIONS',
      titleSmall: '더샵 검단레이크파크',
      titleBold: '특별한 ',
      titleScript: '4가지 조건',
      desc: '더샵 검단레이크파크만의 특별한 조건을 확인하세요.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-2/hero-bg.jpg', alt: '더샵 검단레이크파크 단지 전경' },
      items: [
        { num: '01', tag: 'NO.1', title: ['분양가상한제', '적용단지'], desc: '' },
        { num: '02', tag: 'NO.2', title: ['검단 첫번째', '더샵 브랜드'], desc: '' },
        { num: '03', tag: 'NO.3', title: ['검단 유일', '더블역 생활권'], desc: '' },
        { num: '04', tag: 'NO.4', title: ['나진포천', '워터프론트 입지'], desc: '' },
      ],
    },

    // 출처: https://xn--c79an5jhjs4nmongpjhypa161d.kr/ SECTION_03(사업개요) — 대지위치/대지면적/건축규모/
    // 세대수/주차대수 수치는 공식 홈페이지 원문 그대로. 건축면적(㎡)은 대지면적 대비 비율(건폐율)로 환산해 표기.
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '검단 첫 더샵, 2,857세대 더샵 브랜드타운',
      subtitle: '검단에 없던 빛나는 자부심을 선사하는 총 2,857세대 빅스케일 더샵 브랜드타운',
      photo: { src: '/apt/the-sharp-geomdan-lakepark-2/overview-photo.jpg', alt: '더샵 검단레이크파크 22BL·23BL 단지 조감도(주간)' },
      thumbs: [
        { src: '/apt/the-sharp-geomdan-lakepark-2/premium-06-brandtown.jpg', alt: '더샵 검단레이크파크 22BL·23BL 단지 조감도(야간)' },
        { src: '/apt/the-sharp-geomdan-lakepark-2/thumb-garden-lawn.jpg', alt: '더샵 조경 Nature Garden' },
        { src: '/apt/the-sharp-geomdan-lakepark-2/thumb-community.jpg', alt: '더샵 검단레이크파크 커뮤니티' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      // 출처: 요청 반영 — 사업개요 상세표 이미지에 있던 사업위치/용적률/건폐율/연면적 항목을 추가로 반영
      specItems: [
        { label: '사업위치', value: '인천검단AB22&23BL공동주택' },
        { label: '대지위치', value: '인천광역시 검단구 마전동 산175-7번지 일원(검단지구 AB22BL, 검단지구 AB23BL)' },
        { label: '규모', value: ['22BL, 23BL 2개 블록', '지하 3층, 지상1층 ~ 지상 29층, 26개동'] },
        { label: '용적률', value: '224.91%' },
        { label: '대지면적', value: ['22BL 63,675.00㎡', '23BL 61,410.00㎡'] },
        { label: '건축면적', value: ['22BL 18,258.1855㎡', '23BL 14,657.8821㎡'] },
        { label: '건폐율', value: ['22BL 28.67%', '23BL 23.87%'] },
        { label: '연면적', value: ['22BL 242,082.3493㎡', '23BL 228,380.2491㎡'] },
        { label: '세대수', value: ['22BL 1,454세대', '23BL 1,403세대 총 2,857세대'] },
      ],
    },

    // 출처: https://xn--c79an5jhjs4nmongpjhypa161d.kr/ SECTION_13(LOCATION) — 현장/견본주택 주소 및
    // 네이버·카카오 지도 링크는 공식 홈페이지 원문 그대로. features 4개 카드는 SECTION_07·08의
    // Traffic/Life Premium, Safe School Zone 문구를 교통·자연·교육·생활 4개 카테고리로 재구성.
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '더샵이 선택한 자리, ',
      eyebrowAccent: '검단의 정점',
      title: '검단의 정점이 되다',
      descTitle: '나진포천 수변공원과 만수산을 가까이 둔 워터프론트 입지',
      descTitleAccent: ['나진포천 수변공원', '만수산'],
      descBody1: '검단 유일 지하철 1·2호선 더블역 생활권과 인천2호선·서울5호선 연장(예정), GTX-D(계획)까지,',
      descBody1Accent: ['더블역 생활권'],
      descBody2: '더샵 검단레이크파크가 검단의 새로운 기준을 완성합니다.',
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-2/location-map.jpg', alt: '더샵 검단레이크파크 주변 인프라 안내도' },
      features: [
        {
          titlePrefix: '',
          titleStrong: '수변공원 생활권',
          titleSuffix: '',
          tag: 'WATER',
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-03-waterfront.jpg', alt: '수변 — 나진포천 수변공원' },
          descStrong: '',
          descRest: '나진포천 수변공원(예정), 중앙호수공원(예정)과 가까운 주거환경',
        },
        {
          titlePrefix: '',
          titleStrong: '더블역 교통환경',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/feature-traffic.jpg', alt: '교통 — 더블역 생활권' },
          descStrong: '',
          descRest: '인천1호선 검단호수공원역과 인천2호선 연장계획으로 이어지는 교통망',
        },
        {
          titlePrefix: '',
          titleStrong: '안심 교육환경',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/feature-education.jpg', alt: '교육 — 안심 교육환경' },
          descStrong: '',
          descRest: '단지 인근 유치원·초등학교·중학교 계획과 완정역 학원가 생활권',
        },
        {
          titlePrefix: '',
          titleStrong: '생활·문화 인프라',
          titleSuffix: '',
          tag: 'CULTURE',
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/feature-infra.jpg', alt: '생활 — 생활·문화 인프라' },
          descStrong: '',
          descRest: '박물관·도서관(예정), 커낼콤플렉스(예정) 등 풍부한 생활 기반',
        },
      ],
      disclaimer:
        '※ 상기 내용과 이미지는 공식 홈페이지의 교통·입지환경 자료를 기준으로 구성했습니다. 인천2호선 및 서울5호선 연장은 예정, GTX-D 노선은 계획 단계이며 사업 내용과 일정은 변경될 수 있습니다.',
    },

    // 출처: SECTION_10(GEOMDAN LAKEPARK 게이트 CG) — "검단이 선택한 자리"를 상징하는 단지 정문 이미지 위에
    // SECTION_03의 "검단, 첫번째 더샵 / 1군 브랜드 대단지를 소유할 마지막 기회" 카피를 얹은 전환 섹션.
    premiumIntro: {
      eyebrow: 'GEOMDAN LAKEPARK',
      titleLine1: '검단, 첫번째 더샵',
      titleLine2: '1군 브랜드 대단지를 소유할 마지막 기회',
      descLine1: '기적의 도시 송도에서 그래왔던 것처럼, 더샵의 이름으로 높아질 검단의 위상',
      descLine1Accent: ['더샵'],
      descLine2: '진정한 랜드마크의 자부심으로 검단의 클래스를 한 차원 더 높이다',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-2/hero-bg.jpg', alt: '더샵 검단레이크파크 단지 전경' },
    },

    // 출처: 요청 반영(참고 스크린샷) — PREMIUM 6 카드형 그리드. 이미지는 공식 홈페이지 원본 사진.
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM 6',
      titlePlain: '더샵 검단레이크파크가 더 특별한 ',
      titleAccent: '여섯 가지 이유',
      subtitle: '브랜드부터 수변, 교통, 교육, 커뮤니티까지',
      subtitleLight: '검단의 중심에서 누리는 가치를 한눈에 확인해보세요.',
      cards: [
        {
          num: 'PREMIUM 01',
          title: ['검단 첫 번째', '더샵 브랜드타운'],
          desc: ['총 2,857세대, 2개 블록으로 완성되는 대단지 브랜드타운'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-06-brandtown.jpg', alt: '더샵 검단레이크파크 브랜드타운 야경 조감도' },
        },
        {
          num: 'PREMIUM 02',
          title: ['검단의 정점 입지,', '수변 프리미엄'],
          desc: ['나진포천 수변공원과 중앙호수공원 생활권을 가까이 누리는 주거환경'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-03-waterfront.jpg', alt: '검단의 정점 입지, 수변 프리미엄' },
        },
        {
          num: 'PREMIUM 03',
          title: ['검단 유일의', '더블역 생활권'],
          desc: ['완정역부터 검단호수공원역까지 인천지하철 1·2호선을 누리는 입지'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/feature-traffic.jpg', alt: '검단 유일의 더블역 생활권' },
        },
        {
          num: 'PREMIUM 04',
          title: ['서울 어디든', '편리한 광역교통'],
          desc: ['수도권 간선도로와 계획 교통망을 통해 더 넓게 이어지는 생활권'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-04-subway.jpg', alt: '서울 어디든 편리한 광역교통' },
        },
        {
          num: 'PREMIUM 05',
          title: ['안심을 더한', '교육환경'],
          desc: ['단지 앞 교육시설 계획과 완정역 학원가를 가까이 누리는 교육 인프라'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-05-library.jpg', alt: '안심을 더한 교육환경' },
        },
        {
          num: 'PREMIUM 06',
          title: ['대단지', '올인원 커뮤니티'],
          desc: ['운동·휴식·교육·교류를 단지 안에서 누리는 다채로운 커뮤니티'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-2/premium-intro-bg.jpg', alt: '대단지 올인원 커뮤니티' },
        },
      ],
    },

    // 출처: 요청 반영(참고 스크린샷) — 공식 홈페이지 SECTION_04·05(수변), SECTION_07(트래픽/생활) 원문을
    // 텍스트+이미지 2단 분할 레이아웃으로 재구성. PREMIUM 6 다음, 단지안내 앞에 순서대로 노출.
    premiumSplits: [
      {
        eyebrow: 'Waterfront Premium',
        title: ['신도시의 정점은 언제나', '물(水)입니다!'],
        descLines: ['나진포천 수변공원, 중앙호수공원 선(先)자리', '이제는 검단의 차례'],
        images: [{ src: '/apt/the-sharp-geomdan-lakepark-2/premium-03-waterfront.jpg', alt: '수변 워터프론트 라이프스타일' }],
        ghostLine1: 'Waterfront',
        ghostLine2: 'Premium',
      },
      {
        eyebrow: 'Traffic Premium',
        title: 'in서울 어디든 편리하게 통하다!',
        descLines: [
          '검단 유일의 지하철 1·2호선 더블역 생활권에',
          '인천2호선연장(예정), 서울5호선연장(예정),',
          'GTX-D노선(계획) 등 광역으로 빠르게 통하는 교통망',
        ],
        badges: [
          { line: '인천 1호선', route: '검단호수공원역 → 마곡나루역', time: '20분대' },
          { line: '인천 1호선', route: '검단호수공원역 → 여의도역', time: '30분대' },
          { line: '인천 2호선', route: '완정역 → 가산디지털단지역', time: '50분대', accent: true },
        ],
        images: [
          { src: '/apt/the-sharp-geomdan-lakepark-2/premium-04-subway.jpg', alt: '광역 교통 프리미엄 — 지하철' },
          { src: '/apt/the-sharp-geomdan-lakepark-2/feature-traffic.jpg', alt: '더블역 생활권 — 지하철 승강장' },
        ],
        reverse: true,
        ghostLine1: 'In Seoul',
        ghostLine2: 'Traffic Premium',
      },
      {
        eyebrow: 'Life Premium',
        title: '완성된 생활 환경, 삶을 누리다!',
        descLines: ['대형녹지공원 "U공원", 워라밸파크(예정), 박물관·도서관(예정)', '검단구청 신청사(예정), 검단경찰서(예정), 검단소방서·우체국 등 편리한 생활인프라'],
        images: [{ src: '/apt/the-sharp-geomdan-lakepark-2/feature-infra.jpg', alt: '검단 생활·교육 인프라 공원' }],
        ghostLine1: 'Complete',
        ghostLine2: 'Life Premium',
      },
    ],

    // 단지배치도 · 동호수배치도 — 공식 홈페이지는 별도 제공하지 않아 같은 단지(22BL·23BL)의
    // 실제 배치도 자료(the-sharp-geomdan-lakepark.js 확보분)를 재사용.
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '2개 블록, 26개동',
      titleLine2: '총 2,857세대 대단지',
      desc: '동 배치와 단지 내 주요 시설을 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/the-sharp-geomdan-lakepark-2/complex-sitemap.jpg', alt: '더샵 검단레이크파크 단지 배치도', width: 1200, height: 494 },
      },
      // 요청 반영 — 탭으로 하나씩 전환하지 않고 22BL·23BL을 항상 나란히 동시에 보여줌
      donghoChart: {
        columns: [
          { label: '22BL', sub: '1,454세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-2/dongho-22bl.jpg', alt: '더샵 검단레이크파크 22BL 동호수 배치도', width: 1150, height: 3181 } },
          { label: '23BL', sub: '1,403세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-2/dongho-23bl.jpg', alt: '더샵 검단레이크파크 23BL 동호수 배치도', width: 1150, height: 3109 } },
        ],
      },
    },

    // 세대안내 — 전용/공급면적은 같은 단지(22BL 기준)의 실제 입주자모집공고 수치(the-sharp-geomdan-lakepark.js
    // 확보분)를 그대로 사용. 공식 홈페이지 메인은 59㎡B·84㎡A 두 타입만 소개하지만 실제 공급 타입은 5개.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'GEOMDAN LAKEPARK',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['라이프스타일에 맞춘', '더샵 검단레이크파크', '전용 59㎡ 2개 타입, 84㎡ 3개 타입', '5가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 707세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-2/unit-59a.jpg', alt: '더샵 검단레이크파크 59㎡A 타입 평면도 (공식 홈페이지)' },
              specs: { exclusive: '59.9497', supply: '80.7560', contract: '137.3788' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 630세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-2/unit-59b.jpg', alt: '더샵 검단레이크파크 59㎡B 타입 평면도 (공식 홈페이지)' },
              specs: { exclusive: '59.8301', supply: '81.0950', contract: '137.6048' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 869세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-2/unit-84a.jpg', alt: '더샵 검단레이크파크 84㎡A 타입 평면도 (공식 홈페이지)' },
              specs: { exclusive: '84.5181', supply: '111.7074', contract: '191.5353' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 336세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-2/unit-84b.jpg', alt: '더샵 검단레이크파크 84㎡B 타입 평면도 (공식 홈페이지)' },
              specs: { exclusive: '84.0342', supply: '112.2416', contract: '191.6124' },
            },
            {
              letter: 'C',
              countText: '22BL·23BL 총 315세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-2/unit-84c.jpg', alt: '더샵 검단레이크파크 84㎡C 타입 평면도 (공식 홈페이지)' },
              specs: { exclusive: '84.1796', supply: '111.1017', contract: '190.6097' },
            },
          ],
        },
      ],
    },

    // 출처: 공식 홈페이지 /pages/community — 블록별(22BL/23BL) 실제 커뮤니티 시설 배치도(라벨 포함 CG).
    // SignatureCommunityGeomdan(site1과 동일 컴포넌트)을 재사용 — 요청 반영(참고 스크린샷과 동일 레이아웃).
    communityBlocks: {
      id: 'community',
      // 요청 반영 — 제목 폰트가 다른 섹션과 달리 세리프로 튀어서 나머지와 동일하게 산세리프로
      headingFont: 'var(--font-sans)',
      eyebrow: 'COMMUNITY GUIDE',
      titlePlain: '블록별 커뮤니티',
      titleAccent: '한눈에 보기',
      desc: '운동과 휴식, 교육과 교류까지 단지 안에서 이어지는 더샵만의 다채로운 커뮤니티 시설을 확인해보세요.',
      // 요청 반영 — 블록별 텍스트(라벨/제목/시설군 목록) 없이 배치도 이미지만
      imageOnly: true,
      blocks: [
        {
          label: '22BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-2/community-detail-1.jpg', alt: '더샵 검단레이크파크 22BL 커뮤니티 시설 배치도(6203·6204·6206동)' },
          groups: [
            { name: 'SPORTS', text: '6206동 B1층 — 필라테스·피트니스, GX룸, 사우나(남/여), 스크린골프룸, 퍼팅그린, 실내골프연습장 · 6206동 B2층 — 약 122평 규모 실내체육관' },
            { name: 'LIFESTYLE', text: '6203동 B1층 — 게스트하우스, 다이닝라운지' },
            { name: 'EDUCATION & KIDS', text: '6204동 B1층 — 프라이빗스터디, 에듀&비즈니스 라운지, 그린카페 라운지, 패밀리 라이브러리, 키즈존' },
          ],
        },
        {
          label: '23BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-2/community-detail-2.jpg', alt: '더샵 검단레이크파크 23BL 커뮤니티 시설 배치도(6303~4동)' },
          groups: [
            { name: 'SPORTS', text: '6303~4동 B1층 — 스크린골프룸, 실내골프연습장, 퍼팅그린 · 6303~4동 B2층 — 필라테스, GX룸, 피트니스, 사우나(남/여), 약 123평 규모 실내체육관' },
            { name: 'LIFESTYLE', text: '6303~4동 B1층 — 게스트하우스, 다이닝라운지, 락커룸 · B2층 — 게스트하우스, 다이닝라운지' },
            { name: 'EDUCATION & KIDS', text: '6303~4동 B1층 — 키즈존, 패밀리 라이브러리 · B2층 — 미팅룸, 프라이빗스터디, 에듀&비즈니스 라운지, 그린카페라운지, 헬스케어 라운지' },
          ],
        },
      ],
      note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 CG 및 계획도입니다. 커뮤니티 시설의 명칭, 위치, 규모와 운영 방식은 인허가 및 실제 시공 과정에서 변경될 수 있으므로 계약 전 공식 공급자료를 확인하시기 바랍니다. 자료 출처 · 공식 홈페이지.',
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '더샵 검단레이크파크',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 방문 상담은 10:00~18:00 1시간 단위로 예약할 수 있습니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 더샵 검단레이크파크 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
3. 개인정보의 처리 및 보유 기간 : 더샵 검단레이크파크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    // 출처: 공식 홈페이지 하단 footer — 시행/시공은 원문 그대로, 온라인대행은 이 홈페이지 운영·관리
    // 대행사(주식회사 더블루파트너스)로 표기 (원문의 ㈜넥스미디어는 공식 홈페이지 자체 운영대행사).
    footer: {
      logo: { src: '/apt/the-sharp-geomdan-lakepark-2/logo-white.svg', alt: '더샵 검단레이크파크', width: 160, height: 63 },
      highlightText: '1666-1050',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '한국자산신탁(주)' },
        { label: '시공', value: '(주)포스코이앤씨' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1666-1050',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
