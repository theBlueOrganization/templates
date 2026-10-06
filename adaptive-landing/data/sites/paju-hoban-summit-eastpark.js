// 호반써밋 이스트파크 — 파주운정3지구 A2블록 공동주택. 시행 파주운정A2 PFV, 시공 (주)호반산업.
// 지하 2층~지상 14~25층 14개동(501~514동), 59㎡~84㎡ 총 1,110세대(59A 396 / 84A 599 / 84B 115).
// 출처: 공식 홈페이지(http://hobansummit-uj.co.kr/a2/) — 메인 투시도(vis_1/vis_2), 사업개요(about_img1 + 표),
//   입지환경(area_img1 광역 위치도 / area_img2 세부 위치도·PREMIUM LOCATION 문구), 설계(design_img1), 조경(landscape_img1),
//   커뮤니티(community_img1), 동호수배치도(dong_img1), 평면(unit_img1~3에서 유상옵션 적용 평면만 크롭 + 면적표),
//   메인 프리미엄 사진(pre_slide_img3/4), 오시는길(견본주택·현장 주소) 이미지를 받아 크롭/webp 변환
//   (public/apt/paju-hoban-summit-eastpark/). 로고는 모바일 로고(컬러)를 흰색 투명 PNG로 바꿈(logo-white.png).
//   히어로 원형 배지 링(hero-badge-ring.png)은 chumdan3-hoban-summit에서 복사.
// 대표번호 1666-4691, 상담 접수 알림은 카카오 알림톡(실패 시 SMS 폴백)으로 010-9908-3238 — 2026-10-02 사용자 전달값.
const config = {
  slug: 'paju-hoban-summit-eastpark',
  // 호반써밋이스트파크.addupapt.kr → /apt/paju-hoban-summit-eastpark (middleware.js)
  subdomain: '호반써밋이스트파크',
  projectName: '파주 호반써밋 이스트파크',
  shortName: '파주 호반써밋 이스트파크',
  telNumber: '1666-4691',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/paju-hoban-summit-eastpark/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01099083238'],
  sheetId: '',
  sheetTab: '호반써밋이스트파크',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 핑크(테라코타 #b55a4b) + 녹색(#3f9b4f) + 찐녹색(#173d26) 조합 — 2026-10-06 사용자 요청
  //   현장명·강조 문구는 녹색, 버튼·CTA는 핑크, 어두운 배경은 찐녹색, 밝은 배경은 웜 베이지
  colorTheme: {
    navy: '#173d26',
    ink: '#0d0f0c',
    cream: '#f5efe6',
    gold: '#3f9b4f',
    visitBtnBg: '#b55a4b',
    visitBtnColor: '#ffffff',
  },

  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    serifFamily: "'Nanum Myeongjo', var(--font-noto-serif-kr, 'Noto Serif KR'), serif",
    cssUrl:
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  },
  extraFontLinks: [
    'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap',
  ],

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
      logo: {
        src: '/apt/paju-hoban-summit-eastpark/logo-white.png',
        alt: '파주 호반써밋 이스트파크 HOBAN SUMMIT EAST PARK',
        width: 400,
        height: 188,
      },
      logoSize: { base: 80, lg: 96, xl: 104 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-4691',
    },

    popup: { enabled: false },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'HOBAN SUMMIT',
      phoneLabel: '분양문의',
      phone: '1666-4691',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '파주 호반써밋 이스트파크\n분양 상담을 도와드립니다.',
      address: '파주운정3지구 A2블록',
      tagline: '운정신도시, 두 번째 호반써밋',
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

    // 인트로(원 2개 드로잉 → 로고 → 원이 열리며 히어로) — 배경은 히어로 첫 슬라이드와 같은 투시도
    circleIntro: {
      logo: {
        src: '/apt/paju-hoban-summit-eastpark/logo-white.png',
        alt: '파주 호반써밋 이스트파크 HOBAN SUMMIT EAST PARK',
        width: 400,
        height: 188,
      },
      bgImage: '/apt/paju-hoban-summit-eastpark/hero-1.webp',
      bgImageMobile: '/apt/paju-hoban-summit-eastpark/hero-1-m.webp',
    },

    // 히어로 — 공식 홈페이지 메인 투시도 2장(주간/석양), 문구는 메인 '운정신도시, 두 번째 호반써밋' 카피
    hero: {
      eyebrowDivider: false,
      titleLine1: '파주 호반써밋 이스트파크',
      titleWeight: 700,
      titleSize: { base: 28, md: 48, lg: 72 },
      eyebrowSize: { base: 15, lg: 21 },
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      mobileBgBottomInset: 100,
      mobileScrollMouse: true,
      desktopCopy: {
        mobile: true,
        // PC에서도 문구를 화면 가운데로 — 2026-10-06 사용자 요청
        center: true,
        // 문구 줄 간격 좁게 — 2026-10-06 사용자 요청
        tight: true,
        eyebrow: '운정신도시, 두 번째 호반써밋',
        title: '운정신도시가 원하던',
        accent: '파주 호반써밋 이스트파크',
        // 현장명 핑크(테라코타) 강조 — 2026-10-06 사용자 요청
        accentColor: '#b55a4b',
        // 문구 굵게 — 2026-10-06 사용자 요청
        bold: true,
        logo: {
          src: '/apt/paju-hoban-summit-eastpark/logo-black.png',
          alt: 'HOBAN SUMMIT EAST PARK',
        },
        badge: {
          ringSrc: '/apt/paju-hoban-summit-eastpark/hero-badge-ring.png',
          lines: ['A2블록', '총 1,110', '세대'],
        },
      },
      slides: [
        {
          eyebrowLine1: '운정신도시가 원하던 모든 프리미엄',
          eyebrowLine2: '운정신도시, 두 번째 호반써밋',
          bgImage: {
            src: '/apt/paju-hoban-summit-eastpark/hero-1.webp',
            alt: '파주 호반써밋 이스트파크 투시도',
          },
          bgImageMobile: {
            src: '/apt/paju-hoban-summit-eastpark/hero-1-m.webp',
            alt: '파주 호반써밋 이스트파크 투시도',
          },
        },
        {
          eyebrowLine1: '생활도 교육도 편안한 호반써밋',
          eyebrowLine2: 'A2블록 59㎡~84㎡ 총 1,110세대',
          bgImage: {
            src: '/apt/paju-hoban-summit-eastpark/hero-2.webp',
            alt: '파주 호반써밋 이스트파크 투시도',
          },
          bgImageMobile: {
            src: '/apt/paju-hoban-summit-eastpark/hero-2-m.webp',
            alt: '파주 호반써밋 이스트파크 투시도',
          },
        },
      ],
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '파주 호반써밋 이스트파크', textLight: ' 공식 안내센터입니다.' },
        ],
        announceBg: '#b55a4b',
        bubbleText: '관심고객등록',
        dotColor: '#3f9b4f',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    // 사업개요 — 공식 홈페이지 사업개요(about.html) 표 + 투시도
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/paju-hoban-summit-eastpark/overview-photo.webp',
        alt: '파주 호반써밋 이스트파크 투시도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '파주운정3지구 A2블록 공동주택' },
        { label: '대지위치', value: '경기도 파주시 당하동 428번지 일대 (파주운정3지구 A2블록)' },
        { label: '건축규모', value: ['지하 2층, 지상 14~25층 / 14개동', '59㎡~84㎡ 총 1,110세대'] },
        { label: '대지면적', value: '67,097.00㎡' },
        { label: '연면적', value: '179,007.5975㎡' },
        { label: '건축면적', value: '9,098.9611㎡' },
        { label: '건폐율/용적률', value: '13.56% / 169.95%' },
        { label: '시행/시공', value: '파주운정A2 PFV / (주)호반산업' },
      ],
    },

    // 위치안내 — 입지환경(area.html) 광역 위치도 + PREMIUM LOCATION 4개 항목
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '운정신도시가 원하던 ',
      eyebrowAccent: '모든 프리미엄',
      title: 'Premium Location',
      descTitle: '운정신도시가 원하던 모든 프리미엄, 호반써밋 앞으로.',
      descTitleAccent: ['호반써밋'],
      descBody1: '바로 앞 학교용지에 가까이 누리는 공원과 다양한 편의시설까지',
      descBody1Accent: ['학교용지'],
      descBody2: '더 편안하고 편리한 생활을 누립니다.',
      mapImage: {
        src: '/apt/paju-hoban-summit-eastpark/location-map.webp',
        alt: '파주 호반써밋 이스트파크 광역 위치도',
        width: 2000,
        height: 1530,
      },
      features: [
        {
          titlePrefix: '편리한',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Traffic',
          image: {
            src: '/apt/paju-hoban-summit-eastpark/feature-traffic.webp',
            alt: '금릉역·운정역 및 경의중앙선 위치도',
          },
          descStrong: '금릉역, 경의중앙선 운정역, 금촌IC, 서울문산고속도로',
          descRest: ' 등 서울·경기 어디로든 빠르게 이동',
        },
        {
          titlePrefix: '우수한',
          titleStrong: '교육',
          titleSuffix: '으로',
          tag: 'Education',
          image: {
            src: '/apt/paju-hoban-summit-eastpark/feature-edu.webp',
            alt: '등교하는 아이들 이미지컷',
          },
          descStrong: '단지 바로 앞 초·중교, 유치원 부지',
          descRest: ', 학원가 이용이 편리한 교육환경',
        },
        {
          titlePrefix: '쾌적한',
          titleStrong: '자연',
          titleSuffix: '으로',
          tag: 'Nature',
          image: {
            src: '/apt/paju-hoban-summit-eastpark/feature-nature.webp',
            alt: '단지 내 잔디광장 투시도',
          },
          descStrong: '단지 인근 근린공원 및 운정체육공원',
          descRest: '을 가까이 누리는 쾌적한 힐링 라이프',
        },
        {
          titlePrefix: '풍부한',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life',
          image: {
            src: '/apt/paju-hoban-summit-eastpark/feature-life.webp',
            alt: '단지 내 상가 투시도',
          },
          descStrong: '단지 인근 상업용지, 이마트',
          descRest: ', 운정1·2지구의 다양한 생활편의시설 이용 편리',
        },
      ],
      disclaimer:
        '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
    },

    // 프리미엄 인트로 — 설계(design.html) 'LANDMARK DESIGN' 조감도
    premiumIntro: {
      eyebrow: 'LANDMARK DESIGN',
      titleLine1: '대단지 스케일에 혁신적인 디테일을 더하다',
      titleLine2: '파주 호반써밋 이스트파크',
      titleLine2Color: '#2f7d3f',
      descLine1: '지하 2층~지상 25층 14개동, 총 1,110세대 대단지',
      descLine1Accent: ['1,110세대'],
      descLine2: '햇살과 바람이 가득한 친환경 설계로 쾌적하고 여유로운 라이프를 선사합니다.',
      bgImage: {
        src: '/apt/paju-hoban-summit-eastpark/premium-intro-bg.webp',
        alt: '파주 호반써밋 이스트파크 조감도',
      },
    },

    // 프리미엄 가치 — 메인 '편안한 호반써밋' / '대단지 프리미엄' + 설계 페이지 4가지 특장점
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM LIFE',
      titlePlain: '파주 호반써밋 이스트파크 ',
      titleAccent: 'PREMIUM 8',
      columns: 2,
      // 모바일도 2열(8개 카드를 4줄 2열로) + 카드마다 이미지 — 2026-10-06 사용자 요청
      mobileColumns: 2,
      cards: [
        {
          num: '01',
          image: { src: '/apt/paju-hoban-summit-eastpark/feature-traffic.webp', alt: '금릉역·운정역 및 경의중앙선 위치도' },
          title: ['서울·경기로 통하는', '광역 교통망'],
          desc: ['금릉역, 경의중앙선 운정역,', '금촌IC, 서울문산고속도로'],
        },
        {
          num: '02',
          image: { src: '/apt/paju-hoban-summit-eastpark/feature-edu.webp', alt: '등교하는 아이들 이미지컷' },
          title: ['단지 바로 앞', '안심 교육환경'],
          desc: ['초·중교, 유치원 부지와', '편리한 학원가 이용'],
        },
        {
          num: '03',
          image: { src: '/apt/paju-hoban-summit-eastpark/feature-nature.webp', alt: '단지 내 잔디광장 투시도' },
          title: ['가까이 누리는', '힐링 자연'],
          desc: ['단지 인근 근린공원과', '운정체육공원'],
        },
        {
          num: '04',
          image: { src: '/apt/paju-hoban-summit-eastpark/feature-life.webp', alt: '단지 내 상가 투시도' },
          title: ['운정신도시', '풍부한 생활 인프라'],
          desc: ['상업용지, 이마트,', '운정1·2지구 생활편의시설'],
        },
        {
          num: '05',
          image: { src: '/apt/paju-hoban-summit-eastpark/premium-05.webp', alt: '파주 호반써밋 이스트파크 투시도' },
          title: ['남향위주', '단지배치'],
          desc: ['일조와 채광을 고려한', '남향위주 쾌적한 단지배치'],
        },
        {
          num: '06',
          image: { src: '/apt/paju-hoban-summit-eastpark/premium-06.webp', alt: '파주 호반써밋 이스트파크 조감도' },
          title: ['전세대', '4베이 설계'],
          desc: ['전세대 4베이에 라이프스타일을', '고려한 다양한 타입 공간 설계'],
        },
        {
          num: '07',
          image: { src: '/apt/paju-hoban-summit-eastpark/unit-84a.webp', alt: '84㎡A 타입 평면도' },
          imageFit: 'contain',
          title: ['중소형', '혁신평면'],
          desc: ['선호도 높고 공간 활용도 높은', '혁신적인 설계의 중소형 평면'],
        },
        {
          num: '08',
          image: { src: '/apt/paju-hoban-summit-eastpark/premium-08.webp', alt: '단지 중앙 공원형 조경 투시도' },
          title: ['공원형', '단지조경'],
          desc: ['다채로운 정원과 놀이시설 및', '휴게공간을 곳곳에 마련한 공원형 단지'],
        },
      ],
    },

    // 단지안내 — 공식 홈페이지 단지정보(설계/조경/커뮤니티/동호수배치도) 원본 이미지를 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        {
          label: '설계',
          thumb: '/apt/paju-hoban-summit-eastpark/complex-thumb-design.webp',
          blocks: [
            {
              label: 'A2BL',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/complex-design.webp',
                alt: 'LANDMARK DESIGN — 투시도·조감도·주출입구·단지 내 상가, 남향위주 배치·전세대 4베이·중소형 혁신평면·쾌적한 단지조경',
                width: 1300,
                height: 2724,
              },
            },
          ],
        },
        {
          label: '조경',
          thumb: '/apt/paju-hoban-summit-eastpark/complex-thumb-landscape.webp',
          blocks: [
            {
              label: 'A2BL',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/complex-landscape.webp',
                alt: 'HEALING PARK — 어린이놀이터·어린이집·잔디광장·주민운동시설·경로당·어린이 승하차장',
                width: 1300,
                height: 3027,
              },
            },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/paju-hoban-summit-eastpark/complex-thumb-community.webp',
          blocks: [
            {
              label: 'A2BL',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/complex-community.webp',
                alt: 'COMMUNITY — 피트니스·GX룸·실내골프연습장·스크린골프·다목적실·독서실·스터디룸·작은도서관·키즈카페/맘스존·주민회의실·동호회실',
                width: 1300,
                height: 2200,
              },
            },
          ],
        },
        {
          label: '동·호수배치도',
          thumb: '/apt/paju-hoban-summit-eastpark/complex-thumb-dong.webp',
          title: '동·호수배치도',
          blocks: [
            {
              label: 'A2BL',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/complex-dong.webp',
                alt: '동·호수배치도(501~514동, 59A 396세대 / 84A 599세대 / 84B 115세대, 계 1,110세대)',
                width: 1300,
                height: 4633,
              },
            },
          ],
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 59㎡A / 84㎡A / 84㎡B. 평면·면적은 공식 홈페이지 세대정보(unit_tab1~3) 기준(유상옵션 적용 평면)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'HOBAN SUMMIT',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: [
        '취향을 담은 넉넉한 혁신평면에',
        '트렌디한 라이프스타일을 더한',
        '여유롭고 품격 있는 삶,',
        '호반써밋이 디자인합니다.',
      ],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '396세대 · 4BAY',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/unit-59a.webp',
                alt: '59㎡A 타입 평면도',
                width: 829,
                height: 642,
              },
              specs: {
                exclusive: '59.9683',
                common: '20.9907',
                supply: '80.9590',
                otherCommon: '46.5830',
                contract: '127.5420',
              },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '599세대 · 4BAY',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/unit-84a.webp',
                alt: '84㎡A 타입 평면도',
                width: 918,
                height: 699,
              },
              specs: {
                exclusive: '84.9251',
                common: '28.1619',
                supply: '113.0870',
                otherCommon: '65.9693',
                contract: '179.0563',
              },
            },
            {
              letter: 'B',
              countText: '115세대 · 4BAY',
              image: {
                src: '/apt/paju-hoban-summit-eastpark/unit-84b.webp',
                alt: '84㎡B 타입 평면도',
                width: 999,
                height: 683,
              },
              specs: {
                exclusive: '84.9289',
                common: '29.3438',
                supply: '114.2727',
                otherCommon: '65.9721',
                contract: '180.2448',
              },
            },
          ],
        },
      ],
    },

    // 관심고객등록 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '파주 호반써밋 이스트파크',
      titleLine2: '관심고객등록',
      desc: '간단한 정보를 남겨주시면 「파주 호반써밋 이스트파크」의 분양 정보와 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/paju-hoban-summit-eastpark/logo-white.png',
        alt: '파주 호반써밋 이스트파크 HOBAN SUMMIT EAST PARK',
        width: 400,
        height: 188,
      },
      logoAlign: 'center',
      logoWidth: 130,
      highlightText: '운정신도시, 두 번째 호반써밋\n파주 호반써밋 이스트파크',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '파주운정A2 PFV' },
        { label: '시공', value: '(주)호반산업' },
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
      csPhone: '1666-4691',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
