// ────────────────────────────────────────────────────────────
// eupseong-prugio: Figma "Template2" 디자인을 그대로 구현한 현장.
// adaptive-landing은 이 signature 구조 하나만 쓴다 (data/sites/example-apt.js와 동일한 형태).
//
// signature 객체 아래 각 필드가 그대로 하나의 섹션 컴포넌트에 대응한다:
//   header        → components/ui/SignatureHeader
//   hero          → components/sections/SignatureHero
//   summary       → components/sections/SignatureSummary   (사업개요)
//   location      → components/sections/SignatureLocation  (위치)
//   premiumIntro  → components/sections/SignaturePremiumIntro
//   premiumValue  → components/sections/SignaturePremiumValue (SIGNATURE 6 카드)
//   landscape     → components/sections/SignatureLandscape (조경안내)
//   complex       → components/sections/SignatureComplex   (단지소개, 배치도·동호수표)
//   unitPlan      → components/sections/SignatureUnitPlan  (세대안내, 탭형 평면도)
//   club          → components/sections/SignatureClubIntro 외 커뮤니티 섹션들
//   vipForm       → components/sections/SignatureVipForm
//   footer        → components/ui/SignatureFooter
// ────────────────────────────────────────────────────────────
const config = {
  slug: 'eupseong-prugio',
  projectName: '업성 푸르지오 레이크시티',
  shortName: '업성 푸르지오',
  telNumber: '1533-6100',
  ogImage: 'https://example.vercel.app/apt/eupseong-prugio/hero-bg.jpg',
  // 비워두면 ADMIN_PHONE(.env) 환경변수로 폴백됨
  adminPhones: [],
  sheetId: '',
  sheetTab: '업성푸르지오레이크시티',
  showUtmInSms: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '343-87-03583',
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
      logo: { src: '/apt/eupseong-prugio/logo-white.png', alt: '업성 푸르지오 레이크시티', width: 250, height: 66 },
      gnb: ['사업안내', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1533-6100',
    },

    hero: {
      eyebrowLine1: '천안의 스카이라인을 완성하는',
      eyebrowLine2: '최후의 마스터피스',
      titleLine1: '업성 푸르지오',
      titleLine2: '레이크시티',
      descLine1: '단 5%의 리저브로 입주까지 이어지는 완벽한 특권.',
      descLine1Accent: ['5%의 리저브'],
      descLine2: '압도적인 스케일의 하이엔드 커뮤니티와',
      descLine3: '레이크파크의 빛나는 가치를 당신의 일상으로 초대합니다.',
      bgImage: { src: '/apt/eupseong-prugio/hero-bg.jpg', alt: '업성 푸르지오 레이크시티 대표 조감도' },
      // 모바일 전용 하단 액션바 — 안내 멘트는 배열이라 여러 개 넣으면 자동으로 위→아래 롤링됨
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '업성 푸르지오 레이크시티', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '예약 후 상담만해도 사은품 제공',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/eupseong-prugio/overview-photo.jpg', alt: '업성 푸르지오 레이크시티 조감도' },
      thumbs: [
        { src: '/apt/eupseong-prugio/overview-thumb-1.jpg', alt: '단지 전경 썸네일' },
        { src: '/apt/eupseong-prugio/overview-thumb-2.jpg', alt: '커뮤니티 시설 썸네일' },
        { src: '/apt/eupseong-prugio/overview-thumb-3.jpg', alt: '조경 전경 썸네일' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '신분평 더웨이시티 제일풍경채 1BL' },
        { label: '대지위치', value: '충청북도 청주시 서원구 장성동 204번지 일원' },
        { label: '대지면적', value: '62,267.00㎡(18,835.76평)' },
        {
          label: '건축규모',
          value: ['지하 2층 ~ 지상 29층 12개동, 총 1,448세대', '민간임대 : 59㎡ 793세대', '일반분양 : 75㎡·84㎡·112㎡ 655세대'],
        },
        { label: '조경면적', value: '26,230.48㎡(7,934.72평) / 조경률 42.13%' },
        { label: '주차대수', value: ['공동주택 총 2,045대(근린생활시설 8대 제외)', '세대당 1.41대'] },
      ],
      
    },

    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '업성의 ',
      eyebrowAccent: '랜드마크 푸르지오',
      title: 'Perfect Location',
      descTitle: '자연의 쾌적함과 도심의 인프라를 한자리에 품었습니다.',
      descTitleAccent: ['자연의 쾌적함', '도심의 인프라'],
      descBody1: '어디로든 통하는 쾌속 교통망과 도보 거리의 명품 학군까지,',
      descBody1Accent: ['쾌속 교통망', '명품 학군'],
      descBody2: '푸르지오 레이크시티가 당신의 완벽한 일상을 완성합니다.',
      mapImage: { src: '/apt/eupseong-prugio/location-map.jpg', alt: '업성 푸르지오 레이크시티 위치 안내도' },
      features: [
        {
          titlePrefix: '멋진',
          titleStrong: '호수뷰',
          titleSuffix: '로',
          tag: 'Class UP',
          image: { src: '/apt/eupseong-prugio/feature-lake-view.jpg', alt: '성성호수공원 레이크뷰' },
          descStrong: '성성호수공원',
          descRest: '을 품은 새도시 남향으로 펼쳐지는 힐링 라이프 명품 레이크 뷰 (일부세대 제외)',
        },
        {
          titlePrefix: '가까운',
          titleStrong: '학교',
          titleSuffix: '로',
          tag: 'Smart UP',
          image: { src: '/apt/eupseong-prugio/feature-education.jpg', alt: '학군 및 교육환경' },
          descStrong: '1블록 옆 고교(예정), 2블록 앞 초·중교(예정)',
          descRest: ', 성성지구 학원가 등 한 번에 누리는 원스톱 교육환경',
        },
        {
          titlePrefix: '편리한',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life UP',
          image: { src: '/apt/eupseong-prugio/feature-infra.jpg', alt: '생활 인프라' },
          descStrong: '이마트, 코스트코, 중심상권',
          descRest: ' 등 멀티 인프라와 삼성SDI 등 직주근접 생활권',
        },
        {
          titlePrefix: '빠른',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Speed UP',
          image: { src: '/apt/eupseong-prugio/feature-traffic.jpg', alt: '교통 환경' },
          descStrong: '1호선 부성역(예정), 번영로, 삼성대로',
          descRest: ', 천안대로, 경부고속도로 천안IC 등 쾌속교통망',
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    premiumIntro: {
      eyebrow: 'NATURAL NOBILITY',
      titleLine1: '천안 업성을 압도하는',
      titleLine2: '푸르지오 레이크시티',
      descLine1: '총 6,723세대 규모의 압도적 푸르지오 브랜드 타운 프리미엄',
      descLine1Accent: ['6,723세대'],
      descLine2: '호수의 평온함과 도심의 활기를 동시에 누리는 천안의 새로운 주거 중심을 완성합니다.',
      bgImage: { src: '/apt/eupseong-prugio/premium-intro-bg.jpg', alt: '업성 푸르지오 레이크시티 프리미엄 전경' },
    },

    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '업성 푸르지오 ',
      titleAccent: 'SIGNATURE 6',
      cards: [
        { num: '01', title: ['1,460세대', '랜드마크 스케일'], desc: ['총 1,908세대 중 금회공급 1블록 1,460세대,', '지하 2층~지상 39층 11개동 대단지 위용'] },
        { num: '02', title: ['6,723세대', '푸르지오 브랜드타운'], desc: ['천안을 대표하는 대규모 푸르지오 랜드마크', '프리미엄으로 검증된 미래가치'] },
        { num: '03', title: ['차별화된', '단지 특화설계'], desc: ['실내수영장, 유아풀, 스카이라운지 등 일상의', '격을 높이는 하이엔드 커뮤니티'] },
        { num: '04', title: ['대규모 힐링', '단지 조경'], desc: ['호수공원과 연계된 쾌적한 자연환경 및', '푸르지오만의 특화된 테마 조경 설계'] },
        { num: '05', title: ['전 세대 제공', '프라이빗 세대창고'], desc: ['부피가 큰 레저용품 등을 효율적으로 보관하여', '실내 공간을 더욱 넓게 쓰는 특화 서비스'] },
        { num: '06', title: ['72·84·95㎡', '다양한 주택형'], desc: ['전용 72㎡부터 95㎡까지, 선호도 높은 중대형', '평면 위주의 혁신 공간 설계 적용'] },
      ],
    },

    // 조경 패널 3장 — 각 패널이 자기 이미지·뱃지·제목·설명을 따로 갖는다(실제 납품 시 패널별로 다른 시설을 소개하도록 자유롭게 수정).
    landscape: {
      panels: [
        {
          image: { src: '/apt/eupseong-prugio/landscape-1.jpg', alt: '단지 조경 - 물놀이터 전경 1' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/eupseong-prugio/landscape-2.jpg', alt: '단지 조경 - 물놀이터 전경 2' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/eupseong-prugio/landscape-3.jpg', alt: '단지 조경 - 물놀이터 전경 3' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
      ],
    },

    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '누구나 알고 있던 여가와 휴식을 넘어',
      titleLine2: '단지소개',
      desc: '다채롭게 펼쳐진 프리미엄 커뮤니티에서 남다른 삶의 여유를 즐기다',
      siteMap: {
        image: {
          src: '/apt/eupseong-prugio/complex-sitemap.png',
          alt: '업성 푸르지오 레이크시티 단지 배치도 및 타입별 세대수',
          width: 1318,
          height: 1732,
        },
      },
      donghoChart: {
        image: {
          src: '/apt/eupseong-prugio/complex-dongho-chart.png',
          alt: '업성 푸르지오 레이크시티 동호수 배치표',
          width: 1433,
          height: 1920,
        },
      },
    },

    // 세대안내 — 탭(면적/타입)을 클릭하면 오른쪽 평면도 이미지·스펙표가 전환됨.
    // Figma에는 72㎡ A타입 평면도 1장만 실제로 채워져 있어(나머지 9개 타입은 프로토타입
    // 상 비어있음), 지금은 모든 타입이 같은 이미지를 임시로 공유한다.
    // 실제 납품 시 groups[].types[].image를 타입별 평면도로 교체할 것.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'PRUGIO LAKE CITY',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: [
        '천안의 주거문화를 선도하는',
        '업성 푸르지오 레이크시티',
        '당신의 라이프스타일에 맞춘',
        '다양한 혁신 평면을 만나보십시오.',
      ],
      groups: [
        {
          area: '72㎡',
          types: [
            {
              letter: 'A',
              countText: '총 1,908세대 중 금회공급 1블록 484세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '72㎡ A 타입 평면도' },
              specs: { exclusive: '72.7578', common: '28.2713', supply: '101.0291', otherCommon: '57.4260', contract: '158.4551' },
            },
            {
              letter: 'B',
              countText: '총 1,908세대 중 금회공급 1블록 198세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '72㎡ B 타입 평면도' },
              specs: { exclusive: '72.5312', common: '28.1054', supply: '100.6366', otherCommon: '57.1892', contract: '157.8258' },
            },
            {
              letter: 'C',
              countText: '총 1,908세대 중 금회공급 1블록 62세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '72㎡ C 타입 평면도' },
              specs: { exclusive: '71.9280', common: '27.8930', supply: '99.8210', otherCommon: '56.7500', contract: '156.5710' },
            },
            {
              letter: 'D',
              countText: '총 1,908세대 중 금회공급 1블록 49세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '72㎡ D 타입 평면도' },
              specs: { exclusive: '72.1054', common: '27.9820', supply: '100.0874', otherCommon: '56.9012', contract: '156.9886' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '총 1,908세대 중 금회공급 1블록 320세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '84㎡ A 타입 평면도' },
              specs: { exclusive: '84.9265', common: '30.1023', supply: '115.0288', otherCommon: '60.1200', contract: '175.1488' },
            },
            {
              letter: 'B',
              countText: '총 1,908세대 중 금회공급 1블록 210세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '84㎡ B 타입 평면도' },
              specs: { exclusive: '84.7532', common: '29.9887', supply: '114.7419', otherCommon: '59.9800', contract: '174.7219' },
            },
            {
              letter: 'C',
              countText: '총 1,908세대 중 금회공급 1블록 88세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '84㎡ C 타입 평면도' },
              specs: { exclusive: '84.1200', common: '29.7500', supply: '113.8700', otherCommon: '59.5000', contract: '173.3700' },
            },
            {
              letter: 'D',
              countText: '총 1,908세대 중 금회공급 1블록 74세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '84㎡ D 타입 평면도' },
              specs: { exclusive: '84.3400', common: '29.8600', supply: '114.2000', otherCommon: '59.7000', contract: '173.9000' },
            },
          ],
        },
        {
          area: '95㎡',
          types: [
            {
              letter: 'A',
              countText: '총 1,908세대 중 금회공급 1블록 55세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '95㎡ A 타입 평면도' },
              specs: { exclusive: '95.4820', common: '32.5400', supply: '128.0220', otherCommon: '63.2000', contract: '191.2220' },
            },
            {
              letter: 'B',
              countText: '총 1,908세대 중 금회공급 1블록 23세대',
              image: { src: '/apt/eupseong-prugio/unit-72a.jpg', alt: '95㎡ B 타입 평면도' },
              specs: { exclusive: '95.1200', common: '32.3100', supply: '127.4300', otherCommon: '62.9000', contract: '190.3300' },
            },
          ],
        },
      ],
    },

    club: {
      id: 'community',
      navLabel: '커뮤니티',
      intro: {
        eyebrow: 'COMMUNITY',
        titleLine1: '누구나 알고 있던 여가와 휴식을 넘어',
        titleLine2: '전혀 새로운 삶의 스타일이 열리다',
        desc: '다채롭게 펼쳐진 프리미엄 커뮤니티에서 남다른 삶의 여유를 즐기다',
      },
      floorPlanB1: {
        title: '',
        dragHint: '좌우로 밀어서 B1F 도면을 확인하세요',
        image: { src: '/apt/eupseong-prugio/floorplan-b1f.jpg', alt: 'B1F 커뮤니티 평면도' },
      },
      wellness: {
        badge: 'SIGNATURE AMENITY',
        titlePlain: '업성지구 유일무이 프리미엄',
        titleAccent: '사우나 & 실내수영장',
        desc: '단지 안에서 누리는 특급 호텔급 수영장과 스파 사우나 시설로 완벽한 힐링을 선사합니다.',
        dark: true,
        hero: {
          image: { src: '/apt/eupseong-prugio/facility-pool-main.jpg', alt: '프리미엄 실내수영장 전경' },
          title: '프리미엄 실내수영장',
          desc: '호텔급 스케일을 자랑하는 25m 4개 레인 실내수영장에서 쾌적한 아침을 시작하세요.',
        },
        halves: [
          { image: { src: '/apt/eupseong-prugio/facility-sauna.jpg', alt: '프리미엄 사우나' }, caption: '프리미엄 사우나' },
          { image: { src: '/apt/eupseong-prugio/facility-kids-pool.jpg', alt: '어린이 맞춤 안전 유아풀' }, caption: '어린이 맞춤 안전 유아풀' },
        ],
      },
      sportsHealth: {
        badge: 'SPORTS & HEALTH',
        titlePlain: '에너지를 채우는 ',
        titleAccent: '활력 공간',
        desc: '다양한 최신 운동 기구와 쾌적한 환경을 갖춘 하이엔드 스포츠 존',
        showcases: [
          {
            side: 'left',
            tag: 'GOLF CLUB',
            title: '골프연습장',
            desc: '계절에 구애받지 않고 쾌적하게 필드의 실전 감각을 생생하게 익힐 수 있는 입주민 전용 스크린 골프 연습장입니다.',
            main: { image: { src: '/apt/eupseong-prugio/facility-golf-main.jpg', alt: '골프연습장 전체 전경' }, caption: '스크린 골프 연습장' },
            sub: { image: { src: '/apt/eupseong-prugio/facility-golf-detail.jpg', alt: '스크린 타석 상세' }, caption: '스크린 타석 상세' },
          },
          {
            side: 'right',
            tag: 'FITNESS CENTER',
            title: '피트니스 센터 & GX룸',
            desc: '다양한 최신 유산소/웨이트 기구를 갖춘 피트니스 센터와 요가, 필라테스를 즐길 수 있는 다목적 GX룸입니다.',
            main: { image: { src: '/apt/eupseong-prugio/facility-fitness-main.jpg', alt: '피트니스 센터 전체' }, caption: '피트니스 센터 전경' },
            sub: { image: { src: '/apt/eupseong-prugio/facility-fitness-detail.jpg', alt: '피트니스 기구 상세' }, caption: '피트니스 기구 상세' },
          },
        ],
        floorPlanB2: {
          title: '실내체육관 B2F',
          dragHint: '좌우로 밀어서 B2F 도면을 확인하세요',
          image: { src: '/apt/eupseong-prugio/floorplan-b2f.jpg', alt: 'B2F 실내체육관 평면도' },
        },
      },
      cafeLounge: {
        badge: 'CAFE & LOUNGE',
        titlePlain: '휴식과 교류의 ',
        titleAccent: '커뮤니티 라운지',
        desc: ['이웃과 여유로운 담소를 나누며', '차 한 잔의 여유를 즐기는 공간'],
        halves: [
          { image: { src: '/apt/eupseong-prugio/facility-cafe-brunch.jpg', alt: '브런치 카페' }, caption: '브런치 카페' },
          { image: { src: '/apt/eupseong-prugio/facility-cafe-1f.jpg', alt: '1층 카페테리아' }, caption: '1층 카페테리아' },
        ],
      },
      eduKids: {
        badge: 'EDU & KIDS ZONE',
        titlePlain: '아이들의 꿈이 자라는 ',
        titleAccent: '에듀 & 키즈 공간',
        desc: '조용한 도서관과 창의력을 키우는 실내놀이터',
        showcases: [
          {
            side: 'left',
            tag: 'LIBRARY',
            title: '작은도서관 & 독서실',
            desc: '조용하고 아늑한 분위기 속에서 독서의 즐거움을 누리고, 자녀들이 학업에 온전히 집중할 수 있도록 조성된 프리미엄 에듀 공간입니다.',
            main: { image: { src: '/apt/eupseong-prugio/facility-library-main.jpg', alt: '작은도서관 학습 컷' }, caption: '입주민 전용 스터디존' },
            sub: { image: { src: '/apt/eupseong-prugio/facility-library-detail.jpg', alt: '작은도서관 인테리어' }, caption: '작은도서관 실내' },
          },
          {
            side: 'right',
            tag: 'KIDS PLAY',
            title: '실내놀이터',
            desc: '미세먼지나 궂은 날씨 걱정 없이 아이들이 쾌적하고 안전하게 뛰어놀며 상상력을 무한히 키울 수 있는 신나는 실내 플레이존입니다.',
            main: { image: { src: '/apt/eupseong-prugio/facility-kids-main.jpg', alt: '실내놀이터 가족 컷' }, caption: '가족 실내놀이터' },
            sub: { image: { src: '/apt/eupseong-prugio/facility-kids-detail.jpg', alt: '실내놀이터 공간 CG' }, caption: '키즈 플레이존' },
          },
        ],
      },
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '업성 푸르지오 레이크시티',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 자동으로 모델하우스 상세주소가 발송되며, 예약고객에게는 방문사은품이 증정 됩니다. 상품권은 소진 시 까지 제공되며, 예약없이 내방하신 고객께는 제공되지 않습니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/eupseong-prugio/footer-logo.png', alt: '업성 푸르지오 레이크시티' },
      highlightText: '청약통장없이 로열동호수 선점!',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '교보자산신탁(주)' },
        { label: '시공', value: '(주)대우건설 / 김보현 / 104-81-58180' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1600-8085',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.

1. 개인정보의 처리 목적: 업성 푸르지오 레이크시티 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목: 성명, 휴대전화번호, 관심 서비스, 방문 희망일시, 연령대
3. 개인정보의 처리 및 보유 기간: 당해 분양 사업 완료 후 6개월 이내
4. 동의 거부 권리 및 거부 시 불이익: 동의를 거부할 경우 관심고객 등록이 불가합니다.`,
}

export default config
