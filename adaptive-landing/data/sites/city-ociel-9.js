// 시티오씨엘 9단지 오션파크뷰 — 인천 미추홀구 용현·학익 1BL 도시개발구역 공동주택 3BL.
// 시공 HDC현대산업개발·현대건설·포스코이앤씨 1군 브랜드 컨소시엄(IPARK·HILLSTATE·THE SHARP).
// 지하 2층~지상 최고 49층, 9개동 총 1,949세대(전용 59~136㎡) — 시티오씨엘 단일 최대 규모 단지.
// 출처: 「시티오씨엘 9단지 오션파크뷰 교육자료」PDF(56p, 2026-09-23 작성) — 사업개요·공급개요(분양면적표)·
//   광역/세부 입지·PREMIUM 9·타입별 평면도(59/75/84A/84B/95/101A/101B/110/133P/136P) 문구를 그대로 옮기고,
//   이미지는 PDF에 들어있는 원본 사진(pdfimages)과 페이지 렌더링(pdftoppm 220dpi) 크롭을 사용
//   (public/apt/city-ociel-9/). 교육자료에 커뮤니티·동호수 배치표 페이지가 없어 해당 섹션은 넣지 않음.
// 대표번호 1599-6643, 상담 알림 문자 수신번호(adminPhones) 010-3369-2468 — 2026-09-28 사용자 전달값.
const config = {
  slug: 'city-ociel-9',
  // 선택 필드: 있으면 시티오씨엘9단지.addupapt.kr → /apt/city-ociel-9로 자동 리다이렉트(middleware.js)
  subdomain: '시티오씨엘9단지',
  projectName: '시티오씨엘 9단지 오션파크뷰',
  shortName: '시티오씨엘 9단지',
  telNumber: '1599-6643',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/city-ociel-9/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01033692468'],
  sheetId: '',
  sheetTab: '시티오씨엘9단지',
  showUtmInSms: true,

  // 교육자료 표지·헤더의 딥 플럼(#2e2233) + "마침내 정점." 베이지 포인트
  colorTheme: { navy: '#2e2233', ink: '#1f1724', cream: '#ffffff', gold: '#b9a58d' },

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
      // 교육자료 표지의 흰색 CITY O CIEL 락업(smask 알파 합성 후 여백 트림)
      logo: { src: '/apt/city-ociel-9/logo-white.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 1033, height: 371 },
      logoSize: { base: 92, lg: 120, xl: 138 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '상담신청 및 방문예약'],
      quickCtaLabel: '방문예약',
      phone: '1599-6643',
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'CITY OCIEL 9',
      phoneLabel: '분양문의',
      phone: '1599-6643',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '시티오씨엘 9단지 오션파크뷰\n분양 상담을 도와드립니다.',
      address: '인천 미추홀구 용현·학익 1BL 도시개발구역 공동3BL',
      tagline: 'ABOVE PRIDES',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '방문예약', targetId: 'vip-reservation' },
      ],
    },

    // 공식 사이트(cityociel9.com) 메인 인트로를 참고한 전용 히어로(SignatureHeroOciel) — 원 2개 드로잉 →
    // 로고 → 원이 화면 전체로 열리며 메인 슬라이드 3장. 인트로 로고·원 안 배경·슬라이드(PC 1920x1000 / 모바일
    // 850x1000 전용 컷)·슬로건 이미지는 공식 사이트 메인 비주얼 원본(2026-09-28 수집)을 그대로 사용
    hero: {
      variant: 'ociel',
      srTitle: '시티오씨엘 9단지 오션파크뷰 — 차이를 넘어, 차원이 다른. ABOVE PRIDES',
      introLogo: { src: '/apt/city-ociel-9/intro-logo.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 668, height: 359 },
      clipBg: '/apt/city-ociel-9/intro-clip-bg.webp',
      badge: { ringText: 'CITYOCIEL - CITYOCIEL - CITYOCIEL - CITYOCIEL -', lines: ['GRAND', 'OPEN'] },
      slides: [
        {
          bgImage: { src: '/apt/city-ociel-9/intro-slide-1.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(주경)' },
          bgImageMobile: { src: '/apt/city-ociel-9/intro-slide-1-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(주경)' },
          slogan: { src: '/apt/city-ociel-9/intro-slogan-1.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9/intro-slogan-1-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
        },
        {
          bgImage: { src: '/apt/city-ociel-9/intro-slide-2.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(석양)' },
          bgImageMobile: { src: '/apt/city-ociel-9/intro-slide-2-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(석양)' },
          slogan: { src: '/apt/city-ociel-9/intro-slogan-2.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9/intro-slogan-2-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
        },
        {
          bgImage: { src: '/apt/city-ociel-9/intro-slide-3.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(일출)' },
          bgImageMobile: { src: '/apt/city-ociel-9/intro-slide-3-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(일출)' },
          slogan: { src: '/apt/city-ociel-9/intro-slogan-3.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9/intro-slogan-3-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
          sloganCenter: true,
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '시티오씨엘 9단지', textLight: ' 공식 안내센터입니다.' }],
        announceBg: '#2e2233',
        bubbleText: '방문예약하기',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 사업개요 (교육자료 p.9)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/city-ociel-9/hero-bg-1.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도' },
      thumbs: [
        { src: '/apt/city-ociel-9/hero-bg-2.webp', alt: '최고 49층 투시도 썸네일' },
        { src: '/apt/city-ociel-9/view-ocean-park.webp', alt: '파크뷰·오션뷰 조망 썸네일' },
        { src: '/apt/city-ociel-9/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도 썸네일' },
      ],
      notice: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며, 표기된 면적 등은 인허가·설계변경 등으로 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '시티오씨엘 9단지 오션파크뷰' },
        { label: '대지위치', value: '인천 용현·학익 1BL 도시개발구역 공동3BL' },
        { label: '건축규모', value: ['지하 2층, 지상 최고 49층 / 9개동', '총 1,949세대(전용 59~136㎡)'] },
        { label: '대지면적', value: '91,275.6000㎡(27,610.86평)' },
        { label: '건축면적', value: '9,272.7429㎡(2,805.00평)' },
        { label: '연면적', value: '332,891.2799㎡(100,699.61평)' },
        { label: '건폐율/용적률', value: '7.87%(부대시설 제외) / 249.84%' },
        { label: '주차대수', value: ['총 2,660대(아파트)', '세대당 1.36대'] },
        { label: '시공', value: 'HDC현대산업개발 · 현대건설 · 포스코이앤씨' },
      ],
    },

    // 위치안내 (교육자료 p.11~12 광역입지·세부입지)
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '인천 서남권 ',
      eyebrowAccent: '최중심 입지',
      title: 'Perfect Location',
      descTitle: '경인고속·수도권 제2순환고속도로를 통한 인천전역 및 수도권 접근성 우수',
      descTitleAccent: ['인천전역', '수도권 접근성'],
      descBody1: 'One Stop 생활권, 오션·파크 VIEW, 도보권(500m) 초교·중학교 개교 확정',
      descBody1Accent: ['One Stop 생활권', '오션·파크 VIEW'],
      descBody2: '인천 ifez(송도-청라-영종)를 연결하는 新 주거벨트의 중심, 시티오씨엘 9단지 오션파크뷰.',
      mapImage: { src: '/apt/city-ociel-9/location-map.webp', alt: '시티오씨엘 9단지 광역 입지도' },
      features: [
        {
          titlePrefix: '중심',
          titleStrong: '입지',
          titleSuffix: '로',
          tag: 'Center UP',
          image: { src: '/apt/city-ociel-9/city-aerial-2.webp', alt: '시티오씨엘 도시개발사업지구 조감도' },
          descStrong: '인천 중부권(미추홀구) 핵심 생활권',
          descRest: ' — 미니 신도시급 도시개발지구, 창조혁신용지(큐브오씨엘)·남동국가산단 인접 직주근접',
        },
        {
          titlePrefix: '빠른',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Speed UP',
          image: { src: '/apt/city-ociel-9/photo-train.webp', alt: '수인분당선 열차' },
          descStrong: '수인분당선 학익역(예정)·KTX 송도역(예정)',
          descRest: ', GTX-B 인천시청역(예정), 77번 국도·제2경인고속, 인천대로 S-BRT(약 9.4km) 시범사업 계획',
        },
        {
          titlePrefix: '안심',
          titleStrong: '학군',
          titleSuffix: '으로',
          tag: 'Smart UP',
          image: { src: '/apt/city-ociel-9/premium-school-map.webp', alt: '도보권 통학 학군 지도' },
          descStrong: '용현·학익2 초교(확정), 중학교(확정), 고교(계획)',
          descRest: ' — 반경 1km 용학초·용현남초·용현중·인항고 등 5개교 인접, 인하대·인하공전 인접',
        },
        {
          titlePrefix: '풍부한',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life UP',
          image: { src: '/apt/city-ociel-9/photo-grandpark.webp', alt: '그랜드파크(예정) 이미지컷' },
          descStrong: '10만평 규모 그랜드파크(예정)',
          descRest: ', 중심상업지구(스타오씨엘)·뮤지엄파크(예정), 기존 도심 생활권의 주요 상권·편의시설 이용 용이',
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며, 개발계획 및 학교 등 예정사항은 향후 관계기관의 사정에 따라 변경될 수 있으니 참고용으로만 활용하시기 바랍니다.',
    },

    // 프리미엄 인트로 — 전환용 섹션 (교육자료 p.4 사업개요)
    premiumIntro: {
      eyebrow: 'THE FINEST CITY',
      titleLine1: '총 46만평, 계획인구 약 1.3만세대의',
      titleLine2: '미니 신도시급 대규모 도시개발',
      descLine1: 'HDC현대산업개발 · 현대건설 · 포스코이앤씨 1군 브랜드 컨소시엄 시티오씨엘 13,149세대',
      descLine1Accent: ['13,149세대'],
      descLine2: '자급자족이 가능한 5개의 O ciel 그룹(큐브·라이브·스타·파크·링크)으로 구분, 하나의 생활권으로 연결됩니다.',
      bgImage: { src: '/apt/city-ociel-9/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도' },
    },

    // PREMIUM 9 (교육자료 p.22) — 카피 원문 그대로, 카드 사진은 각 프리미엄 상세 페이지의 원본 이미지
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'ABOVE PRIDES',
      titlePlain: '시티오씨엘 9단지 ',
      titleAccent: 'PREMIUM 9',
      cardTextAlign: 'center',
      cards: [
        {
          num: '01',
          icon: 'city',
          image: { src: '/apt/city-ociel-9/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도' },
          title: ['대규모', '브랜드 타운'],
          desc: ['미니신도시급(1만3천여세대) 도시개발사업', '프리미엄을 선도하는 「명품 1군 브랜드 타운」'],
        },
        {
          num: '02',
          icon: 'tower',
          image: { src: '/apt/city-ociel-9/hero-bg-3.webp', alt: '시티오씨엘 단지 야경 조감도' },
          title: ['단일', '최대규모 단지'],
          desc: ['시티오씨엘 단일 최대규모(1,949세대)', '라이프스타일에 맞춘 다양한 평면 구성(59~136㎡)'],
        },
        {
          num: '03',
          icon: 'forest',
          image: { src: '/apt/city-ociel-9/view-ocean-park.webp', alt: '파크뷰·오션뷰 조망' },
          title: ['OCEAN · PARK', 'View'],
          desc: ['그랜드파크를 바라보는 쾌적한 공원 조망(일부세대)', '서해바다 · 인천대교 조망(일부세대)'],
        },
        {
          num: '04',
          icon: 'school',
          image: { src: '/apt/city-ociel-9/premium-school-map.webp', alt: '도보권 통학 학군 지도' },
          title: ['도보권', '안심 통학'],
          desc: ['도보통학 가능(약 300m) 초교(개교확정)', '중학교(개교확정), 고교(계획) 등 반경 1.5km 학군 형성'],
        },
        {
          num: '05',
          icon: 'train',
          image: { src: '/apt/city-ociel-9/photo-train.webp', alt: '수인분당선 열차' },
          title: ['쾌속 · 광역', '교통망'],
          desc: ['GTX-B(인천시청역 예정), KTX송도역(예정), 수인분당(학익역 예정)', '제2경인고속도로, 수도권제2순환고속도로(개통예정)'],
        },
        {
          num: '06',
          icon: 'pin',
          image: { src: '/apt/city-ociel-9/photo-grandpark.webp', alt: '그랜드파크(예정) 이미지컷' },
          title: ['그랜드파크', '최인접 단지'],
          desc: ['약 10만평 규모의 공원형 랜드마크 그랜드파크 최인접', '내 집 앞에서 누리는 대규모 녹지 · 체육시설(예정)'],
        },
        {
          num: '07',
          icon: 'tower',
          image: { src: '/apt/city-ociel-9/hero-bg-2.webp', alt: '시티오씨엘 9단지 투시도' },
          title: ['압도적인', '단지 쾌적성'],
          desc: ['대규모 공원형 녹지를 품은 단지(단지내 산책로, 폰드)', '넓은 동간거리 / 건폐율 7.87%(부대복리시설 제외)'],
        },
        {
          num: '08',
          icon: 'cart',
          image: { src: '/apt/city-ociel-9/photo-museum-park.webp', alt: '인천 뮤지엄파크(예정) 조감도' },
          title: ['완성된 인프라', '(One Stop 생활권)'],
          desc: ['주거 · 문화 · 여가 · 상업 인프라를 누릴 수 있는 중심 입지', '뮤지엄파크(예정) / 체육시설(예정)'],
        },
        {
          num: '09',
          icon: 'unitPlan',
          image: { src: '/apt/city-ociel-9/unit-84a.webp', alt: '84㎡A 타입 평면도' },
          imageFit: 'contain',
          title: ['우수한 상품성', '· 특화설계'],
          desc: ['공간 활용도를 극대화하는 평면설계 · 특화 공간', '주거품격을 높여 줄 고급스러운 내부 마감재'],
        },
      ],
    },

    // PREMIUM 상세 — 텍스트+사진 좌우 분할(짝수 reverse). 교육자료 Chapter.3 각 페이지의 헤드카피 원문
    premiumSplits: [
      {
        eyebrow: 'PREMIUM 01 · 02',
        title: ['1만 3,149세대 브랜드타운,', '시티오씨엘 內 단일 최대 규모'],
        descLines: [
          'HDC현대산업개발 · 현대건설 · 포스코이앤씨 1군 브랜드 컨소시엄이 조성하는 미니 신도시급 도시개발사업.',
          '도시개발사업 총 13,149세대 中 시티오씨엘 9단지 오션파크뷰(1,949세대)는 시티오씨엘 內 단일 최대 규모 단지이자 그랜드파크 최인접 단지로, 향후 대장단지로 자리매김합니다.',
        ],
        images: [
          { src: '/apt/city-ociel-9/hero-bg-3.webp', alt: '시티오씨엘 단지 야경 조감도' },
          { src: '/apt/city-ociel-9/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 03',
        title: ['최고 49층 랜드마크,', 'OCEAN · PARK View'],
        descLines: [
          '인천 신규분양 아파트(40층~42층) 대비 높은 층수, 시티오씨엘 단지 중 최고 층수.',
          '그랜드파크를 바라보는 공원 조망과 서해바다 · 인천대교 조망이 가능한 독보적 조망단지(일부세대 제외).',
        ],
        images: [
          { src: '/apt/city-ociel-9/hero-bg-2.webp', alt: '시티오씨엘 9단지 최고 49층 투시도' },
          { src: '/apt/city-ociel-9/view-ocean-park.webp', alt: '파크뷰·오션뷰 조망' },
        ],
      },
      {
        eyebrow: 'PREMIUM 04',
        title: ['도보권 초 · 중학교 "개교 확정",', '고교 "계획"으로 안심 통학'],
        descLines: [
          '초교(\'27.03 개교예정)·초교(\'29.03 개교예정)·중학교(\'29.03 개교예정)·고교(계획)가 도보권에 위치하여 통학걱정 없는 안심 단지.',
          '반경 1.5km 內 용현·학익 학원가와 다수의 초·중·고교 밀집, 학세권 프리미엄을 누립니다.',
        ],
        images: [{ src: '/apt/city-ociel-9/location-detail-map.webp', alt: '시티오씨엘 9단지 세부 입지 및 학교 위치도' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 05',
        title: ['학익역(예정) 도보 약 11분,', '서울 및 수도권 접근성 대폭 향상'],
        descLines: [
          '\'28년 수인분당선 학익역(예정) 개통 시 GBD 1시간 40분대, KTX송도역(\'26.12 예정)까지 1정거장.',
          'GTX-B 인천시청역(예정, \'31년), 수도권 제2순환고속도로 인천-안산 구간(\'35년 개통예정)까지 쾌속 · 광역 교통망이 완성됩니다.',
        ],
        badges: [
          { line: '수인분당', route: '학익역(예정) → 송도역', time: '2분', accent: true },
          { line: '수인분당', route: '학익역(예정) → 수원역', time: '1시간 7분' },
          { line: '수인분당', route: '학익역(예정) → 강남구청역', time: '1시간 42분' },
          { line: '수인분당', route: '학익역(예정) → 청량리역', time: '1시간 45분' },
          { line: 'KTX', route: '송도역(예정) → 부산역', time: '2시간 29분(예상)', accent: true },
        ],
        images: [{ src: '/apt/city-ociel-9/photo-train.webp', alt: '수인분당선 열차' }],
      },
      {
        eyebrow: 'PREMIUM 06',
        title: ['PJT "바로 앞"', '10만여평 그랜드파크(예정)'],
        descLines: [
          '도심속 힐링이 가능한 내 집 앞 풍부한 녹지여건 · 보행가로(링크오씨엘) 예정.',
          '유원지 333,643㎡(약 10.1만평) 규모 — 축구장(2)·야구장(1)·농구장(3)·족구장(3)·테니스장(4)·배드민턴장(7)·게이트볼장(2)·체력단련장(4), 산책로 및 녹지시설 등. 송도 센트럴파크(약 11.2만평)에 버금가는 새로운 랜드마크로 부상이 기대됩니다.',
        ],
        images: [
          { src: '/apt/city-ociel-9/photo-grandpark.webp', alt: '그랜드파크(예정) 이미지컷' },
          { src: '/apt/city-ociel-9/photo-namhang-park.webp', alt: '남항근린공원' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 07',
        title: ['대지면적 2만 7천여평,', '건폐율 7.87%의 압도적 쾌적성'],
        descLines: [
          '인천권역 신규 아파트 평균 건폐율 15.74% 대비 절반 수준인 7.87%(부대시설 제외).',
          '넓은 동간거리와 단지 내 산책로 · 폰드 등 대규모 공원형 녹지를 품은 주거 쾌적성을 확보했습니다.',
        ],
        images: [{ src: '/apt/city-ociel-9/hero-bg-1.webp', alt: '시티오씨엘 9단지 투시도' }],
      },
      {
        eyebrow: 'PREMIUM 08',
        title: ['단지 인근에서 누리는', '"One Stop 생활인프라"'],
        descLines: [
          '반경 1km 內 인하대역 상권·용현시장·인하대병원·CGV·송암미술관 등 생활편의시설과 신흥상권(스타오씨엘) 형성 예정.',
          '도보권 1.2만여평 규모의 복합 문화시설 "인천 뮤지엄파크"(예정 — 시립박물관·시립미술관·예술공원·콘텐츠빌리지·콘텐츠플라자, 약 1km/도보 약 13분).',
        ],
        images: [
          { src: '/apt/city-ociel-9/photo-museum-park.webp', alt: '인천 뮤지엄파크(예정) 조감도' },
          { src: '/apt/city-ociel-9/photo-cgv.webp', alt: 'CGV 인천학익점' },
        ],
      },
    ],

    // 단지안내 — 요청 반영(2026-09-28): 사용자가 넣어준 공식 사이트 단지안내 완성 이미지(danji_design/danji_layout/
    // dong_layout/landscape/community.jpg → webp 변환)를 세대안내와 같은 탭+이미지 구성(SignatureUnitPlanTabs)으로 노출.
    // 교육자료의 도시개발계획(5개 O ciel 그룹)·공급개요(분양면적표)는 뒤쪽 탭으로 유지. 동호배치도는 글자가 작아 탭하면 원본 보기
    complex: {
      id: 'complex',
      variant: 'imageTabs',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      subtitle: '최고 49층 9개동 총 1,949세대, 시티오씨엘 단일 최대 규모 단지를 만나보십시오.',
      tabColumns: 7,
      tabColumnsMobile: 4,
      tabs: [
        { label: '단지설계', image: { src: '/apt/city-ociel-9/complex-design.webp', alt: '단지설계 — 시티오씨엘의 한계를 넘어서다', width: 1100, height: 1848 } },
        { label: '단지배치도', image: { src: '/apt/city-ociel-9/complex-layout.webp', alt: '단지배치도 및 타입별 세대수(총 1,949세대)', width: 1100, height: 1234 }, zoomable: true },
        { label: '동호배치도', image: { src: '/apt/city-ociel-9/complex-dongho.webp', alt: '동호배치도(901~909동)', width: 1100, height: 1652 }, zoomable: true },
        { label: '조경', image: { src: '/apt/city-ociel-9/complex-landscape.webp', alt: '조경 — 도심 속의 공원형 단지', width: 1100, height: 2179 } },
        { label: '커뮤니티', image: { src: '/apt/city-ociel-9/complex-community.webp', alt: '커뮤니티 — 피트니스·다목적체육관·실내골프연습장·사우나·독서실 등', width: 1100, height: 2530 } },
        { label: '개발계획', image: { src: '/apt/city-ociel-9/complex-masterplan.webp', alt: '시티오씨엘 도시개발사업 계획도(5개 O ciel 그룹)', width: 2254, height: 1132 }, zoomable: true },
        { label: '공급개요', image: { src: '/apt/city-ociel-9/complex-supply.webp', alt: '시티오씨엘 9단지 분양면적표 및 타입별 공급비율', width: 2254, height: 1120 }, zoomable: true },
      ],
    },

    // 세대안내 — 요청 반영(2026-09-28): 공식 사이트(cityociel9.com/type/type_info.asp)와 같은 구성으로 변경.
    // 타입 탭 10개(한 줄 5개) + 타입별 완성 이미지(면적 5종·동 위치 키맵·기본형/확장형(별도계약) 평면·유의사항)를
    // 공식 사이트 원본(type_*.jpg, 1100px) 그대로 사용 — SignatureUnitPlanTabs(variant: 'imageTabs')
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '라이프스타일에 맞춘 다양한 평면 구성, 시티오씨엘 9단지 오션파크뷰의 세대안내입니다.',
      tabs: [
        { label: '59㎡', image: { src: '/apt/city-ociel-9/unit-type-59.webp', alt: '59㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1909 } },
        { label: '75㎡', image: { src: '/apt/city-ociel-9/unit-type-75.webp', alt: '75㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1811 } },
        { label: '84㎡A', image: { src: '/apt/city-ociel-9/unit-type-84a.webp', alt: '84㎡A 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1838 } },
        { label: '84㎡B', image: { src: '/apt/city-ociel-9/unit-type-84b.webp', alt: '84㎡B 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1875 } },
        { label: '95㎡', image: { src: '/apt/city-ociel-9/unit-type-95.webp', alt: '95㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1795 } },
        { label: '101㎡A', image: { src: '/apt/city-ociel-9/unit-type-101a.webp', alt: '101㎡A 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1807 } },
        { label: '101㎡B', image: { src: '/apt/city-ociel-9/unit-type-101b.webp', alt: '101㎡B 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1820 } },
        { label: '110㎡', image: { src: '/apt/city-ociel-9/unit-type-110.webp', alt: '110㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1809 } },
        { label: '133㎡P', image: { src: '/apt/city-ociel-9/unit-type-133p.webp', alt: '133㎡P 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 2025 } },
        { label: '136㎡P', image: { src: '/apt/city-ociel-9/unit-type-136p.webp', alt: '136㎡P 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 2052 } },
      ],
    },

    // 상담신청/방문예약 폼 — showAfterVideo: 히어로 바로 다음에 한 번 더 렌더링(id: `${id}-early`)
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '시티오씨엘 9단지 오션파크뷰',
      titleLine2: '방문예약',
      desc: '간단한 정보를 남겨주시면 시티오씨엘 단일 최대 규모 「시티오씨엘 9단지 오션파크뷰」의 분양 일정과 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/city-ociel-9/logo-white.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 1033, height: 371 },
      logoAlign: 'center',
      logoWidth: 170,
      highlightText: '시티오씨엘,\n마침내 정점.',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시공', value: 'HDC현대산업개발 · 현대건설 · 포스코이앤씨' },
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
      csPhone: '1599-6643',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
