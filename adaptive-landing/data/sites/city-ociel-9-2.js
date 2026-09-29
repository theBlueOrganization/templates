// 시티오씨엘 9단지 오션파크뷰 (c시티오씨엘9단지.addupapt.kr) — 원본(city-ociel-9)을 복제한 2차 분양팀 사이트.
// 대표번호 1666-0390, 상담 알림 010-7745-0504 (2026-09-28 사용자 전달값). 현장명은 요청에 따라 원본과 동일하게
// "시티오씨엘 9단지 오션파크뷰"(2 없이). 콘텐츠·이미지는 원본과 동일 — 출처는 city-ociel-9.js 상단 주석 참고.
const config = {
  slug: 'city-ociel-9-2',
  subdomain: 'c시티오씨엘9단지',
  projectName: '시티오씨엘 9단지 오션파크뷰',
  shortName: '시티오씨엘 9단지',
  telNumber: '1666-0390',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/city-ociel-9-2/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01077450504'],
  sheetId: '',
  sheetTab: '시티오씨엘9단지2',
  showUtmInSms: true,

  // 요청 반영(2026-09-28) — 홈페이지 전체 색을 실버·아이보리 톤으로. navy(헤더·폼 배경·강조 글자)=실버 그레이,
  // cream(섹션 배경)=아이보리, gold(강조 글자)=진한 베이지, 방문예약 버튼=베이지 rgb(211, 198, 185) 바탕+진회색 글자
  colorTheme: {
    // 요청 반영 — 회색(#6f7378 / #34363a) 대신 #1f2023(공식 사이트 메인 비주얼 배경색), 원본(city-ociel-9)과 동일
    navy: '#1f2023',
    ink: '#1f2023',
    cream: '#f8f5ee',
    // 강조 글자용 — rgb(211, 198, 185)는 흰/아이보리 배경 위 글자로는 너무 연해서 같은 계열로 한 톤 진하게
    gold: '#a8967f',
    visitBtnBg: '#d3c6b9',
    visitBtnColor: '#1f2023',
  },

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
      // 요청 반영 — 가로 한 줄 흰색 로고(intro-slogan-1.png, '시티오씨엘 9단지 오션파크뷰' — 공식 사이트 메인 슬로건)
      logo: { src: '/apt/city-ociel-9-2/intro-slogan-1.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
      logoSize: { base: 190, lg: 230, xl: 270 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '상담신청 및 방문예약'],
      quickCtaLabel: '방문예약',
      phone: '1666-0390',
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'CITY OCIEL 9',
      phoneLabel: '분양문의',
      phone: '1666-0390',
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
      introLogo: { src: '/apt/city-ociel-9-2/intro-logo.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 668, height: 359 },
      clipBg: '/apt/city-ociel-9-2/intro-clip-bg.webp',
      badge: { ringText: 'CITYOCIEL - CITYOCIEL - CITYOCIEL - CITYOCIEL -', lines: ['GRAND', 'OPEN'] },
      slides: [
        {
          bgImage: { src: '/apt/city-ociel-9-2/intro-slide-1.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(주경)' },
          bgImageMobile: { src: '/apt/city-ociel-9-2/intro-slide-1-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(주경)' },
          slogan: { src: '/apt/city-ociel-9-2/intro-slogan-1.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9-2/intro-slogan-1-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
        },
        {
          bgImage: { src: '/apt/city-ociel-9-2/intro-slide-2.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(석양)' },
          bgImageMobile: { src: '/apt/city-ociel-9-2/intro-slide-2-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(석양)' },
          slogan: { src: '/apt/city-ociel-9-2/intro-slogan-2.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9-2/intro-slogan-2-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
        },
        {
          bgImage: { src: '/apt/city-ociel-9-2/intro-slide-3.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(일출)' },
          bgImageMobile: { src: '/apt/city-ociel-9-2/intro-slide-3-m.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도(일출)' },
          slogan: { src: '/apt/city-ociel-9-2/intro-slogan-3.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 701, height: 98 },
          sloganMobile: { src: '/apt/city-ociel-9-2/intro-slogan-3-m.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 361, height: 152 },
          sloganCenter: true,
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '시티오씨엘 9단지', textLight: ' 공식 안내센터입니다.' }],
        announceBg: '#1f2023',
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
      photo: { src: '/apt/city-ociel-9-2/hero-bg-1.webp', alt: '시티오씨엘 9단지 오션파크뷰 투시도' },
      thumbs: [
        { src: '/apt/city-ociel-9-2/hero-bg-2.webp', alt: '최고 49층 투시도 썸네일' },
        { src: '/apt/city-ociel-9-2/view-ocean-park.webp', alt: '파크뷰·오션뷰 조망 썸네일' },
        { src: '/apt/city-ociel-9-2/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도 썸네일' },
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
      mapImage: { src: '/apt/city-ociel-9-2/location-map.webp', alt: '시티오씨엘 9단지 광역 입지도' },
      // 요청 반영(2026-09-28) — 공식 사이트 입지환경 4종(OVER THE NATURE/EDU/TRAFFIC/LIFE) 문구·이미지컷 그대로
      hideFeatureIcon: true,
      features: [
        {
          num: '01',
          category: 'PRESTIGE LOCATION',
          title: 'OVER THE NATURE',
          image: { src: '/apt/city-ociel-9-2/loc-nature.webp', alt: '자연 인프라 이미지컷' },
          desc: '그랜드파크(예정)와 남항근린공원, 갯골유수지, 서해바다 등 다양한 자연 인프라',
        },
        {
          num: '02',
          category: 'PRESTIGE LOCATION',
          title: 'OVER THE EDU',
          image: { src: '/apt/city-ociel-9-2/loc-edu.webp', alt: '학세권 이미지컷' },
          desc: '인접한 용현학익2초(예정)와 바로 앞 용현학익중(예정), 고등학교(계획) 등 걸어서 등교하는 맘편한 학세권',
        },
        {
          num: '03',
          category: 'PRESTIGE LOCATION',
          title: 'OVER THE TRAFFIC',
          image: { src: '/apt/city-ociel-9-2/loc-traffic.webp', alt: '광역교통망 이미지컷' },
          desc: '학익역(예정), KTX송도역(예정), GTX-B청학역(예정), 능해IC-제2경인고속도로 등의 쾌속 광역교통망',
        },
        {
          num: '04',
          category: 'PRESTIGE LOCATION',
          title: 'OVER THE LIFE',
          image: { src: '/apt/city-ociel-9-2/loc-life.webp', alt: '중심생활권 이미지컷' },
          desc: '13,000여 세대 시티오씨엘 상권, 인하대병원 등을 누리는 편리한 중심생활권',
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며, 개발계획 및 학교 등 예정사항은 향후 관계기관의 사정에 따라 변경될 수 있으니 참고용으로만 활용하시기 바랍니다.',
    },

    // 프리미엄 인트로 — 왼쪽 이미지컷 + 오른쪽 세로 카피(split). paragraphs는 줄 단위로 끊어 PC·모바일 동일 줄바꿈
    premiumIntro: {
      split: true,
      eyebrow: 'ABOVE PRIDES',
      titleLine1: '시티오씨엘의 한계를 넘어서다',
      paragraphs: [
        ['세상이 말하는', '차이를 넘어', '차원이 다른'],
        ['시티오씨엘을', '넘어선', '시티오씨엘이 옵니다'],
      ],
      imageBadge: '이미지컷',
      bgImage: { src: '/apt/city-ociel-9-2/이미지1.png', alt: '시티오씨엘 이미지컷' },
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
          image: { src: '/apt/city-ociel-9-2/city-aerial.webp', alt: '시티오씨엘 도시개발사업 조감도' },
          title: ['대규모', '브랜드 타운'],
          desc: ['미니신도시급(1만3천여세대) 도시개발사업', '프리미엄을 선도하는 「명품 1군 브랜드 타운」'],
        },
        {
          num: '02',
          icon: 'tower',
          image: { src: '/apt/city-ociel-9-2/intro-slide-2.webp', alt: '시티오씨엘 9단지 오션파크뷰 단지 전경 투시도' },
          title: ['단일', '최대규모 단지'],
          desc: ['시티오씨엘 단일 최대규모(1,949세대)', '라이프스타일에 맞춘 다양한 평면 구성(59~136㎡)'],
        },
        {
          num: '03',
          icon: 'forest',
          image: { src: '/apt/city-ociel-9-2/view-ocean-park.webp', alt: '파크뷰·오션뷰 조망' },
          title: ['OCEAN · PARK', 'View'],
          desc: ['그랜드파크를 바라보는 쾌적한 공원 조망(일부세대)', '서해바다 · 인천대교 조망(일부세대)'],
        },
        {
          num: '04',
          icon: 'school',
          image: { src: '/apt/city-ociel-9-2/premium-school-kids.webp', alt: '함께 등교하는 아이들 이미지컷' },
          title: ['도보권', '안심 통학'],
          desc: ['도보통학 가능(약 300m) 초교(개교확정)', '중학교(개교확정), 고교(계획) 등 반경 1.5km 학군 형성'],
        },
        {
          num: '05',
          icon: 'train',
          image: { src: '/apt/city-ociel-9-2/premium-ktx.webp', alt: 'KTX 열차 이미지컷' },
          title: ['쾌속 · 광역', '교통망'],
          desc: ['GTX-B(인천시청역 예정), KTX송도역(예정), 수인분당(학익역 예정)', '제2경인고속도로, 수도권제2순환고속도로(개통예정)'],
        },
        {
          num: '06',
          icon: 'pin',
          image: { src: '/apt/city-ociel-9-2/photo-grandpark.webp', alt: '그랜드파크(예정) 이미지컷' },
          title: ['그랜드파크', '최인접 단지'],
          desc: ['약 10만평 규모의 공원형 랜드마크 그랜드파크 최인접', '내 집 앞에서 누리는 대규모 녹지 · 체육시설(예정)'],
        },
        {
          num: '07',
          icon: 'tower',
          image: { src: '/apt/city-ociel-9-2/premium-green-walk.webp', alt: '공원형 단지 산책로 이미지컷' },
          title: ['압도적인', '단지 쾌적성'],
          desc: ['대규모 공원형 녹지를 품은 단지(단지내 산책로, 폰드)', '넓은 동간거리 / 건폐율 7.87%(부대복리시설 제외)'],
        },
        {
          num: '08',
          icon: 'cart',
          image: { src: '/apt/city-ociel-9-2/photo-museum-park.webp', alt: '인천 뮤지엄파크(예정) 조감도' },
          title: ['완성된 인프라', '(One Stop 생활권)'],
          desc: ['주거 · 문화 · 여가 · 상업 인프라를 누릴 수 있는 중심 입지', '뮤지엄파크(예정) / 체육시설(예정)'],
        },
        {
          num: '09',
          icon: 'unitPlan',
          image: { src: '/apt/city-ociel-9-2/premium-interior.webp', alt: '광폭 드레스룸·수납공간 이미지컷' },
          title: ['우수한 상품성', '· 특화설계'],
          desc: ['공간 활용도를 극대화하는 평면설계 · 특화 공간', '주거품격을 높여 줄 고급스러운 내부 마감재'],
        },
      ],
    },

    // PREMIUM 상세 — 요청 반영(2026-09-28): 공식 사이트 프리미엄 페이지(cityociel9.com/intro/premium.asp)의
    // 8개 항목(LANDSCAPE~SYNERGY) 문구·이미지컷(sub_premium_img_01~08.jpg → webp)을 그대로. 텍스트+사진 좌우 분할(짝수 reverse),
    // 이미지가 가로형(720x426)이라 imageAspect로 원본 비율 유지
    premiumSplits: [
      {
        eyebrow: 'PREMIUM 01 · LANDSCAPE',
        title: '파크뷰와 오션뷰를 모두 소유하는 자리',
        descLines: [
          '도심 속 공원 조망과 서해 바다 조망을 모두 갖춘 독보적 입지(일부세대 제외)',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-landscape.webp', alt: '파크뷰·오션뷰 조망 이미지컷' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 02 · REFRESH',
        title: '자연과 어우러진 그랜드 에코라이프',
        descLines: [
          '단지 앞에 위치한 그랜드파크(예정), 공원형 녹지를 갖춘 쾌적한 단지,',
          '인근 남항근린공원, 갯골유수지 등 자연으로 둘러싸인 청정 주거환경',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-refresh.webp', alt: '그랜드 에코라이프 이미지컷' }],
      },
      {
        eyebrow: 'PREMIUM 03 · MOVEMENT',
        title: '일상의 시간을 앞당기는 광역 교통망',
        descLines: [
          '학익역(예정)과 KTX송도역(예정), GTX-B청학역(예정),',
          '능해IC-제2경인고속도로 등 출퇴근 시간을 단축하는 쾌속 교통망',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-movement.webp', alt: '광역 교통망 이미지컷' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 04 · SCHOOL',
        title: '초·중·고가 모인 안심 교육환경',
        descLines: [
          '초등학교(예정), 중학교(예정), 고등학교(계획)가',
          '모두 가까이 위치한 안정적인 통학환경',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-school.webp', alt: '안심 교육환경 이미지컷' }],
      },
      {
        eyebrow: 'PREMIUM 05 · PLAN',
        title: '다양한 삶을 수용하는 평면 구성',
        descLines: [
          '라이프스타일과 가족의 형태에 따라',
          '선택할 수 있는 다채로운 평형 제공',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-plan.webp', alt: '평면 구성 이미지컷' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 06 · SIGNATURE',
        title: '1만 3천여 세대 시티오씨엘 최대 단지',
        descLines: [
          '1만 3천여 세대 명품복합도시, 시티오씨엘 내 최대',
          '1,949세대 규모로 완성되는 압도적 대단지',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-signature.webp', alt: '시티오씨엘 최대 단지 이미지컷' }],
      },
      {
        eyebrow: 'PREMIUM 07 · INFRA',
        title: '편리하고 풍부하게 누리는 생활인프라',
        descLines: [
          '1만 3천여 세대 미니신도시 상권 및 인천뮤지엄파크(예정),',
          '인하대병원 등 완벽에 가까운 생활환경',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-infra.webp', alt: '생활인프라 이미지컷' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 08 · SYNERGY',
        title: '메이저 3사 공동 시공',
        descLines: [
          'IPARK현대산업개발, 현대건설, 포스코이앤씨까지',
          '국내 대표 건설 3사의 기술력과 노하우가 집약된 프리미엄 주거 단지',
        ],
        imageAspect: '720 / 426',
        images: [{ src: '/apt/city-ociel-9-2/premium8-synergy.webp', alt: '메이저 3사 공동 시공 이미지컷' }],
      },
    ],

    // 단지안내 — 요청 반영(2026-09-28): 사용자가 넣어준 공식 사이트 단지안내 완성 이미지(danji_design/danji_layout/
    // dong_layout/landscape/community.jpg → webp 변환)를 세대안내와 같은 탭+이미지 구성(SignatureUnitPlanTabs)으로 노출.
    // 교육자료의 도시개발계획(5개 O ciel 그룹)은 마지막 탭으로 유지(공급개요 탭은 요청으로 제외). 동호배치도는 글자가 작아 탭하면 원본 보기
    complex: {
      id: 'complex',
      variant: 'imageTabs',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      subtitle: '최고 49층 9개동 총 1,949세대, 시티오씨엘 단일 최대 규모 단지를 만나보십시오.',
      // 요청 반영 — PC에서는 탭을 왼쪽 세로 목록으로(모바일은 가로 4개씩)
      tabLayout: 'side',
      // 요청 반영 — 타이틀·부제와 탭/이미지가 너무 붙어 보여 여백 확대 [모바일, PC]
      headGap: [48, 88],
      tabColumns: 6,
      tabColumnsMobile: 3,
      tabs: [
        { label: '단지설계', image: { src: '/apt/city-ociel-9-2/complex-design.webp', alt: '단지설계 — 시티오씨엘의 한계를 넘어서다', width: 1100, height: 1848 } },
        { label: '단지배치도', image: { src: '/apt/city-ociel-9-2/complex-layout.webp', alt: '단지배치도 및 타입별 세대수(총 1,949세대)', width: 1100, height: 1234 }, zoomable: true },
        { label: '동호배치도', image: { src: '/apt/city-ociel-9-2/complex-dongho.webp', alt: '동호배치도(901~909동)', width: 1100, height: 1652 }, zoomable: true },
        { label: '조경', image: { src: '/apt/city-ociel-9-2/complex-landscape.webp', alt: '조경 — 도심 속의 공원형 단지', width: 1100, height: 2179 } },
        { label: '커뮤니티', image: { src: '/apt/city-ociel-9-2/complex-community.webp', alt: '커뮤니티 — 피트니스·다목적체육관·실내골프연습장·사우나·독서실 등', width: 1100, height: 2530 } },
        { label: '개발계획', image: { src: '/apt/city-ociel-9-2/complex-masterplan.webp', alt: '시티오씨엘 도시개발사업 계획도(5개 O ciel 그룹)', width: 2254, height: 1132 }, zoomable: true },
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
        { label: '59㎡', image: { src: '/apt/city-ociel-9-2/unit-type-59.webp', alt: '59㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1909 } },
        { label: '75㎡', image: { src: '/apt/city-ociel-9-2/unit-type-75.webp', alt: '75㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1811 } },
        { label: '84㎡A', image: { src: '/apt/city-ociel-9-2/unit-type-84a.webp', alt: '84㎡A 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1838 } },
        { label: '84㎡B', image: { src: '/apt/city-ociel-9-2/unit-type-84b.webp', alt: '84㎡B 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1875 } },
        { label: '95㎡', image: { src: '/apt/city-ociel-9-2/unit-type-95.webp', alt: '95㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1795 } },
        { label: '101㎡A', image: { src: '/apt/city-ociel-9-2/unit-type-101a.webp', alt: '101㎡A 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1807 } },
        { label: '101㎡B', image: { src: '/apt/city-ociel-9-2/unit-type-101b.webp', alt: '101㎡B 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1820 } },
        { label: '110㎡', image: { src: '/apt/city-ociel-9-2/unit-type-110.webp', alt: '110㎡ 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 1809 } },
        { label: '133㎡P', image: { src: '/apt/city-ociel-9-2/unit-type-133p.webp', alt: '133㎡P 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 2025 } },
        { label: '136㎡P', image: { src: '/apt/city-ociel-9-2/unit-type-136p.webp', alt: '136㎡P 타입 평면 안내(면적표·동 위치·기본형/확장형 평면도)', width: 1100, height: 2052 } },
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
      // 요청 반영 — 푸터 배경을 네이비 오버레이 없이 #1f2023 단색으로(원본 city-ociel-9와 동일)
      bgColor: '#1f2023',
      logo: { src: '/apt/city-ociel-9-2/logo-white.png', alt: '시티오씨엘 9단지 오션파크뷰', width: 1033, height: 371 },
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
      csPhone: '1666-0390',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
