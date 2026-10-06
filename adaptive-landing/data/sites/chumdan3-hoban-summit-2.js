// 호반써밋 첨단3지구 (호반써밋첨단3지구.addupapt.kr) — chumdan3-hoban-summit을 그대로 복제한 별도 분양팀 사이트.
// 대표번호 1666-6642, 상담 접수 알림은 카카오 알림톡(실패 시 SMS 폴백)으로 010-8146-7288 (2026-10-02 사용자 전달값).
// 원본과 달리 관심고객등록 폼을 히어로 바로 아래(vipForm.showAfterHero)에 두고, CTA 문구를 '관심고객등록'으로 통일.
// 이미지·문구 출처는 chumdan3-hoban-summit.js 상단 주석 참고. 카카오톡 공유 제목(metaTitle)은 접미사 없이 원래 이름.
const config = {
  slug: 'chumdan3-hoban-summit-2',
  // 호반써밋첨단3지구.addupapt.kr → /apt/chumdan3-hoban-summit-2 (middleware.js)
  subdomain: '호반써밋첨단3지구',
  // "-2"가 붙은 projectName은 SMS/시트 탭 등 내부용, 고객에게 보이는 공유 제목(metaTitle)은 원래 이름 유지
  projectName: '호반써밋 첨단3지구-2',
  metaTitle: '호반써밋 첨단3지구',
  shortName: '호반써밋 첨단3지구',
  telNumber: '1666-6642',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/chumdan3-hoban-summit-2/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01081467288'],
  sheetId: '',
  sheetTab: '첨단3지구호반써밋-2',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 공식 홈페이지(hobansummit-kjcd.co.kr) 톤 — 테라코타(#b87061 / 진한 #a95d4f) + 차콜(#1c1c1c)
  colorTheme: {
    navy: '#1c1c1c',
    ink: '#0d0802',
    cream: '#f6f2ee',
    gold: '#b87061',
    visitBtnBg: '#a95d4f',
    visitBtnColor: '#ffffff',
  },

  // 공식 홈페이지와 같은 폰트 — 본문 Pretendard, 제목 나눔명조(Nanum Myeongjo)
  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    serifFamily: "'Nanum Myeongjo', var(--font-noto-serif-kr, 'Noto Serif KR'), serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  },
  extraFontLinks: ['https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Nanum+Pen+Script&display=swap'],

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
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
      logo: { src: '/apt/chumdan3-hoban-summit-2/logo-white.png', alt: '호반써밋 첨단3지구 HOBAN SUMMIT', width: 347, height: 137 },
      logoSize: { base: 80, lg: 96, xl: 104 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-6642',
    },

    popup: { enabled: false },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'HOBAN SUMMIT',
      phoneLabel: '분양문의',
      phone: '1666-6642',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '호반써밋 첨단3지구\n관심고객등록을 도와드립니다.',
      address: '광주 첨단3지구 공동주택 A7BL, A8BL',
      tagline: '교육·공원의 중심',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 배경 3장 크로스페이드 — 공식 홈페이지 메인 투시도 2장(PC/모바일 별도) / A8BL 조감도(plan_8bl). 문구는 표지·사업개요 카피 발췌
    // 요청 반영(2026-10-01) — 시티오씨엘 9단지처럼 인트로(원 2개 드로잉 → 로고 → 원이 화면 전체로 열리며 히어로)
    //   배경은 히어로 첫 슬라이드와 같은 이미지라 열린 뒤 히어로로 그대로 이어짐 (SignatureCircleIntro)
    circleIntro: {
      logo: { src: '/apt/chumdan3-hoban-summit-2/logo-white.png', alt: '호반써밋 첨단3지구 HOBAN SUMMIT', width: 347, height: 137 },
      bgImage: '/apt/chumdan3-hoban-summit-2/hero-1.webp',
      bgImageMobile: '/apt/chumdan3-hoban-summit-2/hero-1-m.webp',
    },

    hero: {
      // 모바일은 eyebrow 두 줄을 세로로 쌓음(divider 한 줄 배치는 390px 폭에서 줄바꿈이 깨짐)
      eyebrowDivider: false,
      titleLine1: '호반써밋 첨단3지구',
      titleWeight: 700,
      titleSize: { base: 28, md: 48, lg: 72 },
      eyebrowSize: { base: 15, lg: 21 },
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      // 요청 반영(2026-09-30) — 모바일 이미지 하단(도로·건물 아랫부분)이 하단 바(100px)에 가려 그림이 위로 치우쳐 보이던 문제
      mobileBgBottomInset: 100,
      // 요청 반영(2026-09-30) — 모바일 히어로 하단에 마우스 모양 스크롤 힌트
      mobileScrollMouse: true,
      // PC(1024px 이상)는 공식 홈페이지 메인과 같은 우측 문구 블록 + 좌상단 회전 배지(SignatureHero desktopCopy), 모바일도 같은 블록(mobile: true)
      desktopCopy: {
        // 요청 반영(2026-09-30) — 모바일도 공식 홈페이지 모바일 메인처럼 같은 문구 블록 + 좌상단 원형 배지로
        mobile: true,
        // 요청 반영(2026-10-06) — 문구 글씨 살짝 두껍게
        semibold: true,
        eyebrow: '첨단3지구를 선점할 다시없을 기회',
        title: '첨단3지구',
        accent: '분양가 상한제 아파트',
        logo: { src: '/apt/chumdan3-hoban-summit-2/hero-logo.png', alt: 'HOBAN SUMMIT 첨단3지구' },
        badge: { ringSrc: '/apt/chumdan3-hoban-summit-2/hero-badge-ring.png', lines: ['분양가', '상한제', '아파트'] },
      },
      slides: [
        {
          eyebrowLine1: '첨단3지구를 선점할 다시없을 기회',
          eyebrowLine2: '첨단3지구 분양가 상한제 아파트',
          bgImage: { src: '/apt/chumdan3-hoban-summit-2/hero-1.webp', alt: '호반써밋 첨단3지구 투시도' },
          bgImageMobile: { src: '/apt/chumdan3-hoban-summit-2/hero-1-m.webp', alt: '호반써밋 첨단3지구 투시도' },
        },
        {
          eyebrowLine1: '미래는 초우량. 교통은 초고속. 가치는 초특급.',
          eyebrowLine2: 'A7BL·A8BL 총 805세대.',
          bgImage: { src: '/apt/chumdan3-hoban-summit-2/hero-2.webp', alt: '호반써밋 첨단3지구 투시도' },
          bgImageMobile: { src: '/apt/chumdan3-hoban-summit-2/hero-2-m.webp', alt: '호반써밋 첨단3지구 투시도' },
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '호반써밋 첨단3지구', textLight: ' 공식 안내센터입니다.' }],
        announceBg: '#a95d4f',
        bubbleText: '관심고객등록하기',
        dotColor: '#a95d4f',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    // 홍보영상 — 공식 홈페이지 메인/홍보영상(movie01.php)에 쓰인 Vimeo 영상(1191382235)을 히어로 바로 다음에 퍼옴
    videoSection: {
      vimeoId: '1191382235',
      title: '호반써밋 첨단3지구 홍보영상',
      vimeoControls: true,
    },

    // 사업개요 — 공식 홈페이지 사업개요(planning.php)와 같은 A7BL/A8BL 탭형(SignatureSummaryTabs). 수치는 공식 홈페이지 기준
    summary: {
      id: 'overview',
      variant: 'tabs',
      navLabel: 'overview',
      title: '사업개요',
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      blocks: [
        {
          label: 'A7BL',
          photo: { src: '/apt/chumdan3-hoban-summit-2/overview-a7.webp', alt: '호반써밋 첨단3지구 A7BL 투시도', width: 1200, height: 700 },
          specItems: [
            { label: '대지위치', value: '광주첨단3지구 택지개발지구내 A7BL' },
            { label: '대지면적', value: '21,550㎡' },
            { label: '건축면적', value: '4,491.5275㎡' },
            { label: '연면적', value: '61,169.3158㎡' },
            { label: '세대수 및 타입', value: '356세대 (84㎡A, 84㎡B)' },
            { label: '건폐율/용적률', value: '20.84% / 199.36%' },
          ],
        },
        {
          label: 'A8BL',
          photo: { src: '/apt/chumdan3-hoban-summit-2/overview-a8.webp', alt: '호반써밋 첨단3지구 A8BL 투시도', width: 1200, height: 700 },
          specItems: [
            { label: '대지위치', value: '광주첨단3지구 택지개발지구내 A8BL' },
            { label: '대지면적', value: '35,217㎡' },
            { label: '건축면적', value: '6,298.4445㎡' },
            { label: '연면적', value: '99,928.4592㎡' },
            { label: '세대수 및 타입', value: '449세대 (117㎡A, 117㎡B, 135㎡)' },
            { label: '건폐율/용적률', value: '17.88% / 201.29%' },
          ],
        },
      ],
    },

    // 위치안내 — 공식 홈페이지 입지환경(location.php) + 메인 'Hoban Summit Vision' 섹션 구성(SignatureLocationVision)
    location: {
      id: 'location',
      variant: 'vision',
      navLabel: '위치안내',
      title: 'LOCATION',
      eyebrow: '미래는 초우량, 교통은 초고속, 가치는 초특급',
      headlinePlain: '첨단3지구, ',
      headlineAccent: '광주의 새로운 중심으로 떠오르다',
      mapImage: { src: '/apt/chumdan3-hoban-summit-2/location-map.webp', alt: '호반써밋 첨단3지구 현장위치도', width: 2477, height: 1724 },
      caption: '나날이 빛날 도시. 혜택 좋은 도시. 마지막 새 도시.',
      // 요청 반영(2026-10-06) — 공식 location.php(location_img03) 구성 추가: 헤드라인 + 하단 이미지컷 2장 + 유의사항 전체
      captionTitle: '첨단을 달리는 프리미엄 도시가 탄생하다',
      // 요청 반영(2026-10-06) — 하단 이미지컷 2장은 PC에서 숨기고 모바일·태블릿만
      galleryMobileOnly: true,
      gallery: [
        { src: '/apt/chumdan3-hoban-summit-2/location-cut-night.webp', alt: '야경 이미지컷', width: 863, height: 358 },
        { src: '/apt/chumdan3-hoban-summit-2/location-cut-drone.webp', alt: '드론 이미지컷', width: 330, height: 358 },
      ],
      vision: {
        bgImage: '/apt/chumdan3-hoban-summit-2/vision-bg.webp',
        // 요청 반영(2026-10-06) — PC 왼쪽 이미지를 위 여백 없이 블록 맨 위로
        visualFlushTop: true,
        visual: { src: '/apt/chumdan3-hoban-summit-2/vision-left.webp', alt: 'Hoban Summit Vision 야경 이미지컷' },
        bottomImage: { src: '/apt/chumdan3-hoban-summit-2/vision-bottom.webp', alt: '광주 도심 야경 이미지컷' },
        items: [
          {
            label: '대한민국 1호 AI 수도',
            title: '첨단산업이 크는 곳에 거대한 미래가 있다',
            desc: '국가가 전략적으로 육성하는 대한민국 1호 데이터센터의 확실한 비전은 기본. AI 기반 첨단산업 및 교육 인프라로 화려하게 꽃피는 첨단3지구. 이곳에 광주의 미래가 있다',
          },
          {
            label: '80년 만에 통합하는 광주, 전남',
            title: '전남광주통합특별시로 도약하는 미래가치',
            desc: "인구 320만 명, 지역내총생산(GRDP) 150조 원, 4년간 국가재정 20조원이 투입되는 '슈퍼 광역경제권'의 새 중심 및 AI기반 첨단산업 및 교육인프라로 화려하게 꽃피는 AI메가클러스터가 형성될 특별시의 거대한 비전이 펼쳐진다",
          },
          {
            label: '광주 마지막 택지지구의 희소가치',
            title: '다시 없을 분양가 상한제 혜택을 누릴 기회',
            desc: '총 7,878세대 약 2만명을 수용하는 대규모 택지지구에 광주를 대표하는 신도시 프리미엄과 첨단 라이프를 품은 첨단3지구를 분양가 상한제로 선점할 다시 없을 기회가 찾아온다',
          },
          {
            label: '완벽한 교통 및 생활 인프라',
            title: '빠른 교통망, 편리한 일상과 통하는 중심 입지',
            desc: '지하철 2호선 지스트역(예정), 상무-첨단산단 도로 개통 등 쾌속 도로망, 진원천, 학림천, 근린공원 등 에코 인프라, 유초중고 도보학군',
          },
        ],
      },
      disclaimer: [
        '상기 지역도 및 교통도 등은 소비자의 이해를 돕기 위한 것이므로 실제와 차이가 있을 수 있습니다.',
        '단지 주변 교통시설, 기타 주변 시설 현황, 지구단위 계획 등은 인·허가 및 정부시책에 따라 변경 및 취소 가능하며 실제와 차이가 있으므로 직접 확인하시기 바라며, 이는 사업주체, 시공사와 무관합니다.',
        '단지 설계 사항들은 추후 완공 시 변경될 수 있으며 실제와 차이가 있을 수 있으므로 이와 관련하여 반드시 견본주택에서 확인하시기 바랍니다.',
        "첨단3지구의 첨단산업단지, 인공지능 데이터센터, 국립심뇌혈관센터, 초·중·고 및 공원 개발 계획은 '광주광역시 고시 제2020-552호, 전라남도 고시 제2020-587호'를 참고하였습니다.",
        '상무지구~첨단산단간 도로신설의 내용은 광주광역시 토목과 2026년 주요건설사업 현황(2026.01)을 참고하였습니다.',
        "월출동 의료특화산업단지 : 광주광역시 2023.05.14.(일) 보도자료 '광주시, 월출동에 의료특화 산업단지 조성' 참고",
        "지하철 2호선 계획 : '광주광역시 도시철도본부 관리부 관리과(2023.04.28)' 광주도시철도 2호선 공사개요 의거",
      ],
    },

    // 프리미엄 인트로 — 공식 홈페이지 투시도(planning_img02_1)
    // 요청 반영(2026-09-30) — city-ociel-9-2처럼 왼쪽 이미지컷 + 오른쪽 세로 카피(split). paragraphs는 줄 단위로 끊어 PC·모바일 동일 줄바꿈
    premiumIntro: {
      split: true,
      eyebrow: 'HOBAN SUMMIT',
      titleLine1: '지상에 차 없는 공원 같은 단지',
      paragraphs: [
        ['전남·광주 최초', '「호반 써밋 조경」 적용', '총 805세대 규모'],
        ['A7BL 356세대 / A8BL 449세대', '교육·공원의 중심에서', '프리미엄 라이프가 시작됩니다'],
      ],
      imageBadge: '투시도',
      bgImage: { src: '/apt/chumdan3-hoban-summit-2/premium-intro-bg.webp', alt: '호반써밋 첨단3지구 투시도' },
    },

    // 프리미엄 가치 — 사용자 제공 시안(PREMIUM 8 카드형, 2026-09-30) 문구 그대로. SignaturePremiumEight(cardStyle: 'premium8')
    //   사진은 공식 홈페이지 premium_list_img02~08, 1번(손 위의 집)만 공식 이미지에 없어 시안에서 크롭(premium-house.webp)
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'premium8',
      sideEyebrow: ['Premium Life', 'A Brighter Tomorrow'],
      titleLead: '호반써밋 첨단3지구만의',
      titleWord: 'PREMIUM',
      titleNum: '8',
      // 이 필드들은 기본 카드형(SignaturePremiumValue)용 — premium8에서는 쓰지 않지만 필수 필드라 유지
      eyebrow: 'PREMIUM LIFE',
      titlePlain: '호반써밋 첨단3지구 ',
      titleAccent: 'PREMIUM 8',
      cards: [
        { num: 'price', icon: 'price', iconTone: 'accent', image: { src: '/apt/chumdan3-hoban-summit-2/premium-house.webp', alt: '손 위의 집 이미지컷' }, lead: '분양가 상한제 적용으로', strong: '합리적인 분양가' },
        { num: 'diamond', icon: 'diamond', iconTone: 'dark', image: { src: '/apt/chumdan3-hoban-summit-2/premium-02.webp', position: '50% 75%', alt: '도시를 내려다보는 이미지컷' }, lead: '광주 마지막 택지지구의', strong: '높은 희소가치', strongTone: 'dark' },
        { num: 'cluster', icon: 'cluster', iconTone: 'accent', image: { src: '/apt/chumdan3-hoban-summit-2/premium-03.webp', position: '50% 60%', alt: '첨단산업 도시 이미지컷' }, lead: '국가 주도 첨단산업 클러스터의', strong: '확실한 비전' },
        { num: 'city', icon: 'city', iconTone: 'dark', image: { src: '/apt/chumdan3-hoban-summit-2/premium-04.webp', position: '50% 45%', alt: '미래 도시 이미지컷' }, lead: '전남광주통합특별시로 도약하는', strong: '새 중심 미래가치' },
        { num: 'jobs', icon: 'jobs', iconTone: 'dark', image: { src: '/apt/chumdan3-hoban-summit-2/premium-05.webp', alt: '출근길 이미지컷' }, lead: '사업지 인근 다수의 산업단지로', strong: '직주근접 라이프' },
        { num: 'school', icon: 'school', iconTone: 'accent', image: { src: '/apt/chumdan3-hoban-summit-2/premium-06.webp', position: '50% 30%', alt: '학생 이미지컷' }, lead: 'AI영재고, 도보학군, GIST 등', strong: '최상의 교육환경' },
        { num: 'train', icon: 'train', iconTone: 'dark', image: { src: '/apt/chumdan3-hoban-summit-2/premium-07.webp', alt: '철도 이미지컷' }, lead: '지하철 2호선, 상무-첨단도로 등', strong: '쾌속 교통망' },
        { num: 'eco', icon: 'eco', iconTone: 'accent', image: { src: '/apt/chumdan3-hoban-summit-2/premium-08.webp', position: '50% 78%', alt: '호수공원 이미지컷' }, lead: '진원천, 학림천, 근린공원 등', strong: '풍부한 에코 인프라' },
      ],
    },

    // 단지안내 — 공식 홈페이지 단지안내(설계 plan.php / 커뮤니티 community.php / 시스템 system.php / 단지·동호수배치도 block.php)
    //   구성 그대로: 카테고리 탭 → A7BL/A8BL 버튼 → 공식 이미지 (SignatureComplexBlocks, variant: 'blockTabs'). 시스템은 공통 1장
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      // 요청 반영(2026-09-30) — 카테고리 탭을 원형 썸네일로(city-ociel-9-2 단지안내와 같은 느낌). 썸네일은 기존 이미지에서 크롭(complex-thumb-*.webp)
      tabStyle: 'circle',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        {
          label: '설계',
          thumb: '/apt/chumdan3-hoban-summit-2/complex-thumb-design.webp',
          blocks: [
            { label: 'A7BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a7-aerial.webp', alt: 'A7BL 설계 — 조감도·주출입구·선큰·중앙광장', width: 1200, height: 1574 } },
            { label: 'A8BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a8-aerial.webp', alt: 'A8BL 설계 — 조감도', width: 1200, height: 1574 } },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/chumdan3-hoban-summit-2/complex-thumb-community.webp',
          blocks: [
            { label: 'A7BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a7-community.webp', alt: 'A7BL 커뮤니티 시설', width: 1200, height: 768 } },
            { label: 'A8BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a8-community.webp', alt: 'A8BL 커뮤니티 시설', width: 1200, height: 768 } },
          ],
        },
        {
          label: '시스템',
          thumb: '/apt/chumdan3-hoban-summit-2/complex-thumb-system.webp',
          blocks: [{ label: '공통', image: { src: '/apt/chumdan3-hoban-summit-2/complex-system.webp', alt: '호반써밋 첨단3지구 시스템', width: 1200, height: 2600 } }],
        },
        {
          label: '단지/동·호수배치도',
          thumb: '/apt/chumdan3-hoban-summit-2/complex-thumb-block.webp',
          title: '단지/동·호수배치도',
          blocks: [
            { label: 'A7BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a7-block.webp', alt: 'A7BL 단지배치도 및 동·호수 배치도(84㎡A 262세대 / 84㎡B 94세대)', width: 1200, height: 1735 } },
            { label: 'A8BL', image: { src: '/apt/chumdan3-hoban-summit-2/complex-a8-block.webp', alt: 'A8BL 단지배치도 및 동·호수 배치도(117㎡A 221세대 / 117㎡B 77세대 / 135㎡ 151세대)', width: 1200, height: 1735 } },
          ],
        },
      ],
      disclaimer: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — A7BL 84A/84B, A8BL 117A/117B/135. 평면·면적은 공식 홈페이지 유니트(확장 기본형) 기준
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'HOBAN SUMMIT',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['교육·공원의 중심', '호반써밋 첨단3지구', '남향 위주 판상형 맞통풍 구조로', '완성한 평면을 만나보십시오.'],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: 'A7BL 262세대 · 4BAY 판상형',
              image: { src: '/apt/chumdan3-hoban-summit-2/unit-84a.webp', alt: 'A7BL 84A 타입 확장 기본형 평면도', width: 714, height: 497 },
              specs: { exclusive: '84.9286', common: '30.6921', supply: '115.6207', otherCommon: '55.0415', contract: '170.6622' },
            },
            {
              letter: 'B',
              countText: 'A7BL 94세대 · 5BAY 판상형',
              image: { src: '/apt/chumdan3-hoban-summit-2/unit-84b.webp', alt: 'A7BL 84B 타입 확장 기본형 평면도', width: 804, height: 527 },
              specs: { exclusive: '84.9682', common: '30.6878', supply: '115.6560', otherCommon: '55.0671', contract: '170.7231' },
            },
          ],
        },
        {
          area: '117㎡',
          types: [
            {
              letter: 'A',
              countText: 'A8BL 221세대 · 4BAY 판상형',
              image: { src: '/apt/chumdan3-hoban-summit-2/unit-117a.webp', alt: 'A8BL 117A 타입 확장 기본형 평면도', width: 807, height: 515 },
              specs: { exclusive: '117.8549', common: '28.5353', supply: '146.3902', otherCommon: '64.3116', contract: '210.7018' },
            },
            {
              letter: 'B',
              countText: 'A8BL 77세대 · 4BAY 판상형',
              image: { src: '/apt/chumdan3-hoban-summit-2/unit-117b.webp', alt: 'A8BL 117B 타입 확장 기본형 평면도', width: 909, height: 515 },
              specs: { exclusive: '117.9486', common: '28.8321', supply: '146.7807', otherCommon: '64.3628', contract: '211.1435' },
            },
          ],
        },
        {
          area: '135㎡',
          types: [
            {
              letter: '',
              countText: 'A8BL 151세대 · 5BAY 판상형',
              image: { src: '/apt/chumdan3-hoban-summit-2/unit-135.webp', alt: 'A8BL 135 타입 확장 기본형 평면도', width: 885, height: 544 },
              specs: { exclusive: '135.9583', common: '32.2747', supply: '168.2330', otherCommon: '74.1904', contract: '242.4234' },
            },
          ],
        },
      ],
    },

    // 관심고객등록 폼 — 요청 반영(2026-10-02) 히어로 바로 아래(홍보영상보다 위) + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterHero: true,
      eyebrow: 'REGISTRATION',
      titleLine1: '호반써밋 첨단3지구',
      titleLine2: '관심고객등록',
      desc: '간단한 정보를 남겨주시면 「호반써밋 첨단3지구」의 분양 일정과 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/chumdan3-hoban-summit-2/logo-white.png', alt: '호반써밋 첨단3지구 HOBAN SUMMIT', width: 347, height: 137 },
      logoAlign: 'center',
      logoWidth: 130,
      highlightText: '교육·공원의 중심,\n호반써밋 첨단3지구',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '첨단678피에프브이 주식회사' },
        { label: '시공', value: '(주)호반건설' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 자료에 표현된 현황, 개발계획, 예정사항 등은 관계기관의 홈페이지 및 해당기관의 고시 등을 참조하여 작성된 것으로 사업계획 및 일정은 당사자와는 무관하며 사업주체 및 해당관청의 사정에 의해 지연, 변경 또는 취소될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1666-6642',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
