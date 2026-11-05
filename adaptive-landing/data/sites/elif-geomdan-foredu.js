// 엘리프 검단 포레듀(ELIF) — 인천광역시 서구 검단신도시 AA32BL(마전동 398-2번지 일대). 시공 계룡건설산업(주).
// 지하 3층~지상 15층 11개동(7401~7411동), 전용 64·84·98·110㎡ 20개 타입 총 669세대. 분양가 상한제 적용단지.
// 출처: 공식 홈페이지(https://엘리프검단포레듀.com/) — 메인 비주얼(visual1~3, 모바일 m/visual2·3), 사업개요(overview1 조감도 + 표),
//   입지환경(location-environment1 광역 위치도 / 메인 프리미엄 슬라이드 4종 이미지컷), 프리미엄6(premium1에서 타원 이미지컷 크롭),
//   단지설계(plan1), 단지배치도(layout1), 동호배치도(building-layout1), 커뮤니티(community1),
//   세대정보(space/*_250829 — 상단 면적표는 텍스트로 옮기고 평면 부분만 크롭, 하단 유상옵션 목록 제외)
//   이미지를 받아 크롭/webp 변환(public/apt/elif-geomdan-foredu/). 로고는 공식 logo1(흰색) 원본, 녹색 로고는 같은 파일을 #0b4a3a로 칠함.
// 대표번호 1666-0035, 상담 접수 알림 010-2266-9007 — 2026-11-05 사용자 전달값.
// 모바일 평면 이미지 높이(가로 580px) — public/apt/elif-geomdan-foredu/unit-*-m.webp
const MOBILE_UNIT_HEIGHTS = {
  'unit-64a': 1076, 'unit-64b': 1275, 'unit-64c': 995, 'unit-64d': 1268,
  'unit-84a': 1117, 'unit-84b': 1223, 'unit-84c': 1036, 'unit-84c1': 1036, 'unit-84d': 1082, 'unit-84e': 1117, 'unit-84f': 1174,
  'unit-98a': 980, 'unit-98b': 1094, 'unit-98b1': 1091, 'unit-98c': 941,
  'unit-110p1': 965, 'unit-110p2': 992, 'unit-110p3': 978, 'unit-110s1': 1855, 'unit-110s2': 1670,
}

const config = {
  slug: 'elif-geomdan-foredu',
  // 엘리프검단포레듀.addupapt.kr → /apt/elif-geomdan-foredu (middleware.js)
  subdomain: '엘리프검단포레듀',
  projectName: '엘리프 검단 포레듀',
  shortName: '엘리프 검단 포레듀',
  telNumber: '1666-0035',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/elif-geomdan-foredu/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01022669007'],
  sheetId: '',
  sheetTab: '엘리프검단포레듀',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 공식 홈페이지 모바일 하단 톤 3색 — 딥그린(#054438) + 차콜(#302f2e) + 웜그레이(#787472). 2026-11-05 사용자 요청
  //   섹션별 그라데이션·배경 배치와 위치안내 폰트 통일은 app/apt/[slug]/pageThemes.css의 'elif' 프리셋
  colorTheme: {
    navy: '#054438',
    ink: '#302f2e',
    cream: '#f2f0ea',
    gold: '#787472',
    visitBtnBg: '#787472',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'elif',

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
        src: '/apt/elif-geomdan-foredu/logo-white.png',
        alt: 'ELIF 검단 포레듀',
        width: 188,
        height: 25,
      },
      logoSize: { base: 132, lg: 160, xl: 176 },
      // 상단 메뉴의 '방문예약상담' 항목은 빼달라는 요청(2026-11-05)
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내'],
      // 헤더 우측 '방문예약상담' 버튼은 빼달라는 요청(2026-11-05) — 빈 값이면 숨김(전화번호만)
      quickCtaLabel: '',
      phone: '1666-0035',
      // 히어로는 위쪽을 어둡게 깐 슬라이드 3장이라 투명 구간에서도 흰 로고·메뉴
      transparentDark: false,
      logoDark: {
        src: '/apt/elif-geomdan-foredu/logo-color.png',
        alt: 'ELIF 검단 포레듀',
        width: 188,
        height: 25,
      },
    },

    // 진입 팝업 — 1번 사용자 제공 이미지(검단신도시 마지막 내집마련 특급찬스, 2026-11-05) → 닫으면 2번 방문예약 폼
    //   이미지는 원본 popup.png의 바깥 어두운 테두리를 잘라내고 둥근 모서리로(popup-1.webp)
    popup: {
      enabled: true,
      order: 'imageFirst',
      // 전체화면 인트로가 끝난 뒤에 띄움
      afterIntro: true,
      openDelayMs: 700,
      closeIcon: true,
      fitViewport: true,
      maxWidth: 380,
      images: [
        {
          src: '/apt/elif-geomdan-foredu/popup-1.webp',
          alt: '검단신도시 마지막 내집마련 특급찬스 — 검단신도시 최저분양가, 분양가 상한제 아파트, 청약통장 없이 선착순 계약, 수변공원·근린공원 친환경, 유치원·단지앞 초등학교. 전화 1666-0035',
          width: 1013,
          height: 1468,
        },
      ],
      visitForm: {
        enabled: true,
        accentColor: '#054438',
        title: '방문예약상담',
        desc: '상담 가능시간 10:00~18:00 (담당자와 조율가능)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약', '자료요청', '기타문의'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'ELIF',
      phoneLabel: '분양문의',
      phone: '1666-0035',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#302f2e',
      ctaTargetId: 'vip-reservation',
      deskText: '엘리프 검단 포레듀\n분양 상담을 도와드립니다.',
      address: '인천광역시 서구 검단신도시 AA32BL',
      tagline: '단지 앞 초등학교(계획), 수변공원까지 검단신도시의 자부심',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '방문예약상담', targetId: 'vip-reservation' },
      ],
    },

    // 인트로 — 용인 고림 동문 디 이스트와 같은 연출(3분할 이미지+영문 카피 → 링 펄스+브랜드). 색은 공식 모바일 푸터의 진한 차콜(2026-11-05 사용자 요청)
    arkoneIntro: {
      ariaLabel: '엘리프 검단 포레듀를 소개하는 인트로',
      scenes: [
        { img: '/apt/elif-geomdan-foredu/hero-2.webp', label: '01 · LANDMARK', name: '총 669세대 검단 대단지' },
        { img: '/apt/elif-geomdan-foredu/hero-3.webp', label: '02 · EDUCATION', name: '단지 앞 초등학교(계획)' },
        { img: '/apt/elif-geomdan-foredu/hero-1.webp', label: '03 · NATURE', name: '수변공원을 품은 아파트' },
      ],
      copySmall: 'ENHANCE YOUR LIFE',
      copyLine1: 'Pride of',
      copyLine2: 'Geomdan.',
      brandName: '엘리프 검단 포레듀',
      tagline: 'ELIF · GEOMDAN FOREDU',
      theme: {
        base: '#302f2e',
        stageOne: 'radial-gradient(circle at 50% 35%, #4a4846 0, #302f2e 48%, #1a1918 100%)',
        stageTwo: 'radial-gradient(circle at center, #42403e, #302f2e 42%, #1c1b1a 100%)',
        ring: 'rgba(221, 219, 207, 0.4)',
        accent: '#dddbcf',
        sub: '#b9b4ae',
      },
    },

    // 히어로 — 공식 메인 비주얼 3장 자동 슬라이드(투시도·항공조감도·등굣길 이미지컷) + 고정 문구(estCopy). 2026-11-05 사용자 요청
    //   모바일은 공식 모바일 사이트(m/images/visual1~3) 세로 이미지. 위쪽을 어둡게 깔고 흰 글씨
    hero: {
      hideText: true,
      fullHeightSlides: true,
      // 모바일 세로 이미지 맨 아래 건물이 하단 안내띠에 가려 잘려 보여서, 이미지를 안내띠 위에서 끝나게(2026-11-05)
      mobileBgBottomInset: 40,
      mobileScrollMouse: true,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(28, 27, 26, 0.72) 0%, rgba(28, 27, 26, 0.35) 42%, rgba(28, 27, 26, 0) 68%)',
        desktop: 'linear-gradient(180deg, rgba(28, 27, 26, 0.62) 0%, rgba(28, 27, 26, 0.22) 40%, rgba(28, 27, 26, 0) 62%)',
      },
      slides: [
        {
          bgImage: { src: '/apt/elif-geomdan-foredu/hero-1.webp', alt: '엘리프 검단 포레듀 투시도' },
          bgImageMobile: { src: '/apt/elif-geomdan-foredu/hero-1-m.webp', alt: '엘리프 검단 포레듀 투시도' },
        },
        {
          bgImage: { src: '/apt/elif-geomdan-foredu/hero-2.webp', alt: '엘리프 검단 포레듀 항공 조감도' },
          bgImageMobile: { src: '/apt/elif-geomdan-foredu/hero-2-m.webp', alt: '엘리프 검단 포레듀 항공 조감도' },
        },
        {
          bgImage: { src: '/apt/elif-geomdan-foredu/hero-3.webp', alt: '단지 앞 초등학교(계획) 등굣길 이미지컷' },
          bgImageMobile: { src: '/apt/elif-geomdan-foredu/hero-3-m.webp', alt: '단지 앞 초등학교(계획) 등굣길 이미지컷' },
        },
      ],
      bgImage: {
        src: '/apt/elif-geomdan-foredu/hero-1.webp',
        alt: '엘리프 검단 포레듀 투시도',
      },
      bgImageMobile: {
        src: '/apt/elif-geomdan-foredu/hero-1-m.webp',
        alt: '엘리프 검단 포레듀 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
        // 공식 홈페이지 메인 문구 그대로(2026-11-05 사용자 전달): 윗줄 → 명조 제목 → 짧은 선 + 현장명 → 테두리 박스
        brand: '단지 앞 초등학교(계획), 수변공원까지',
        serifTitle: true,
        lines: [{ light: '', strong: '검단신도시의 자부심', dots: 0 }],
        name: '엘리프 검단 포레듀',
        badge: '분양가 상한제 적용단지',
        badgeBox: true,
        // PC 우상단 회전 원형 '방문예약 상담' 배지(ctaBadge)는 빼달라는 요청으로 제거(2026-11-05)
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '엘리프 검단 포레듀', textLight: ' 공식 안내센터입니다.' },
        ],
        announceBg: '#302f2e',
        bubbleText: '방문예약상담',
        dotColor: '#787472',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 사업개요 — 공식 홈페이지 사업개요(info/overview) 표 + 조감도
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/elif-geomdan-foredu/overview-photo.webp',
        alt: '엘리프 검단 포레듀 투시도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '인천검단신도시 AA32BL 공동주택 신축공사' },
        { label: '대지위치', value: ['인천검단 택지개발지구 내 AA32BL', '(인천광역시 서구 마전동 398-2번지 일대)'] },
        { label: '대지면적', value: '38,846.00㎡' },
        { label: '건축면적', value: '8,985.45㎡' },
        { label: '연면적', value: '120,321.02㎡' },
        { label: '건폐율/용적률', value: '23.13% / 196.85%' },
        { label: '건축규모', value: '지하 3층 ~ 지상 15층' },
        { label: '세대수', value: '전용 64·84·98·110㎡ 총 669세대' },
      ],
    },

    // 위치안내(입지분석) — 2026-11-05 사용자 요청으로 더샵 검단 레이크파크 교통·입지(infrastructure) 디자인:
    //   제목 2줄 + 설명 → 왼쪽 공식 광역 위치도(클릭 확대) / 오른쪽 번호 항목 4개. 색은 pageThemes.css 'elif'(딥그린)
    //   story(사진 씬 디자인)·eyebrowPlain~features(기존 위치도·입지 카드)는 지금 쓰지 않음(variant만 바꾸면 되돌릴 수 있게 남겨둠)
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'ELIF SPECIAL LOCATION',
        titlePlain: '앞으로가 더 기대되는',
        titleAccent: '검단의 프리미엄을 더 크게',
        desc: '단지 앞 초등학교(계획)와 수변공원을 품은 아파트, 분양가 상한제 적용단지로 합리적 내 집 마련의 기회',
        mapImage: { src: '/apt/elif-geomdan-foredu/location-map.webp', alt: '엘리프 검단 포레듀 광역 위치도 — 검단호수공원역·인천1·2호선·GTX-D(계획) 등 교통망과 주변 생활 인프라' },
        mapCaption: '공식 광역 위치도 · 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        // 항목 문구는 공식 홈페이지 입지환경(location-environment) 4가지 그대로
        items: [
          { num: '01', category: '교통', title: '교통 프리미엄', desc: '검단호수공원역 개통 및 서부권 광역급행철도 GTX-D(예정), 인천 2호선 연장 계획 등 높아지는 교통 비전' },
          { num: '02', category: '자연', title: '쾌적한 생활', desc: '단지를 둘러싼 근린공원과 나진포천 수변공원, 자연친화 조경까지 친환경 라이프' },
          { num: '03', category: '교육', title: '우수한 교육', desc: '단지 바로 앞 초등학교(계획)와 유치원(계획) 및 가까운 학원가로 아이 키우기 좋은 교육환경' },
          { num: '04', category: '가치', title: '분양가 상한제', desc: '더 높아질 검단 프리미엄을 더 합리적으로 누릴 분양가 상한제 적용단지의 기회' },
        ],
        sourceNote: '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
      },
      story: {
        eyebrow: 'ELIF SPECIAL LOCATION',
        // 제목·설명·씬 4개 문구는 공식 홈페이지 입지환경(location-environment) 문구 그대로(2026-11-05 사용자 확인 요청)
        titleLine1: '앞으로가 더 기대되는',
        titleSize: 'clamp(30px, 3vw, 46px)',
        titleAccent: '검단의 프리미엄을 더 크게',
        desc: '단지 앞 초등학교(계획)와 수변공원을 품은 아파트, 분양가 상한제 적용단지로 합리적 내 집 마련의 기회',
        numbers: [
          { value: '669', label: '전용 64·84·98·110㎡ 총 세대수' },
          { value: '20', label: '중소형부터 중대형까지 평면 타입' },
          { value: '11', label: '지하 3층~지상 15층 단지 동수' },
        ],
        // 4개 항목 — PC 2×2, 모바일 1열
        scenes: [
          {
            type: 'image',
            image: { src: '/apt/elif-geomdan-foredu/hero-2.webp', alt: '엘리프 검단 포레듀 항공 조감도와 주변 도로망' },
            tag: '01 · TRAFFIC',
            title: '교통 프리미엄',
            desc: '검단호수공원역 개통 및 서부권 광역급행철도 GTX-D(예정), 인천 2호선 연장 계획 등 높아지는 교통 비전',
          },
          {
            type: 'image',
            image: { src: '/apt/elif-geomdan-foredu/hero-1.webp', alt: '나진포천 수변공원 옆 엘리프 검단 포레듀 투시도' },
            tag: '02 · NATURE',
            title: '쾌적한 생활',
            desc: '단지를 둘러싼 근린공원과 나진포천 수변공원, 자연친화 조경까지 친환경 라이프',
          },
          {
            type: 'image',
            image: { src: '/apt/elif-geomdan-foredu/hero-3.webp', alt: '등굣길 이미지컷' },
            tag: '03 · EDUCATION',
            title: '우수한 교육',
            desc: '단지 바로 앞 초등학교(계획)와 유치원(계획) 및 가까운 학원가로 아이 키우기 좋은 교육환경',
          },
          {
            type: 'image',
            image: { src: '/apt/elif-geomdan-foredu/feature-price.webp', alt: '도시 야경을 바라보는 여성 이미지컷' },
            tag: '04 · VALUE',
            title: '분양가 상한제',
            desc: '더 높아질 검단 프리미엄을 더 합리적으로 누릴 분양가 상한제 적용단지의 기회',
          },
        ],
      },
      eyebrowPlain: '앞으로가 더 기대되는 ',
      eyebrowAccent: '검단의 프리미엄',
      title: 'Special Location',
      descTitle: '단지 앞 초등학교(계획)와 수변공원을 품은 아파트',
      descTitleAccent: ['초등학교(계획)', '수변공원'],
      descBody1: '분양가 상한제 적용단지로 합리적 내 집 마련의 기회,',
      descBody1Accent: ['분양가 상한제'],
      descBody2: '앞으로가 더 기대되는 검단의 프리미엄을 더 크게 누립니다.',
      mapImage: {
        src: '/apt/elif-geomdan-foredu/location-map.webp',
        alt: '엘리프 검단 포레듀 광역 위치도',
        width: 1300,
        height: 1030,
      },
      features: [
        {
          titlePrefix: '높아지는',
          titleStrong: '교통',
          titleSuffix: '비전',
          tag: 'Traffic',
          image: { src: '/apt/elif-geomdan-foredu/feature-traffic.webp', alt: '고속열차 이미지컷' },
          descStrong: '검단호수공원역 개통, GTX-D(예정)',
          descRest: ', 인천 2호선 연장 계획 등 높아지는 교통 비전',
        },
        {
          titlePrefix: '자연을 품은',
          titleStrong: '쾌적',
          titleSuffix: '한 생활',
          tag: 'Nature',
          image: { src: '/apt/elif-geomdan-foredu/feature-life.webp', alt: '잔디밭을 뛰어노는 아이들 이미지컷' },
          descStrong: '근린공원과 나진포천 수변공원',
          descRest: ', 자연친화 조경까지 친환경 라이프',
        },
        {
          titlePrefix: '우수한',
          titleStrong: '교육',
          titleSuffix: '환경',
          tag: 'Education',
          image: { src: '/apt/elif-geomdan-foredu/feature-education.webp', alt: '공부하는 학생 이미지컷' },
          descStrong: '단지 바로 앞 초등학교(계획)와 유치원(계획)',
          descRest: ' 및 가까운 학원가로 아이 키우기 좋은 교육환경',
        },
        {
          titlePrefix: '합리적인',
          titleStrong: '분양가',
          titleSuffix: '',
          tag: 'Value',
          image: { src: '/apt/elif-geomdan-foredu/feature-price.webp', alt: '도시 야경을 바라보는 여성 이미지컷' },
          descStrong: '분양가 상한제 적용단지',
          descRest: '로 더 높아질 검단 프리미엄을 더 합리적으로',
        },
      ],
      disclaimer:
        '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
    },

    // 프리미엄 인트로 — 왼쪽 투시도 + 오른쪽 세로 카피(공식 단지설계 문구)
    premiumIntro: {
      split: true,
      eyebrow: 'ELIF',
      titleLine1: '검단의 주거기준을 더 높게',
      paragraphs: [
        ['다양한 라이프스타일을 담은 설계,', '자연의 가치를 더한 프리미엄 단지', '지하 3층~지상 15층 총 669세대'],
        ['실속형 64㎡부터 품격 있는 110㎡까지,', '인천도시공사 택지설계공모 당선작으로', '검증된 품격을 누립니다'],
      ],
      imageBadge: '투시도',
      bgImage: {
        src: '/apt/elif-geomdan-foredu/premium-split.webp',
        alt: '엘리프 검단 포레듀 투시도',
      },
    },

    // 프리미엄 가치 — 공식 'PREMIUM 6'(premium/premium6) 구성(cardStyle 'zigzag')
    //   카드 이미지(premium6-0N)는 공식 premium1.jpg의 타원 이미지컷을 알약 모양(투명 모서리)으로 크롭
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'ELIF',
      titlePlain: '엘리프 검단 포레듀만의 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(135deg, #0b5a49 0%, #054438 55%, #03302a 100%)',
        head: '#a9c4b8',
        accentOdd: '#dddbcf',
        accentEven: '#b9b4ae',
        line: '#2f6656',
      },
      cards: [
        {
          num: '01',
          image: { src: '/apt/elif-geomdan-foredu/premium6-01.webp', alt: '도심 속 공원 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-01-m.webp', alt: '도심 속 공원 이미지컷', width: 430, height: 300 },
          title: '자연을 누리는 에코라이프',
          desc: ['쾌적한 주거환경-어린이공원(계획),', '단지와 인접한 근린공원(계획), 수변공원(계획)'],
        },
        {
          num: '02',
          image: { src: '/apt/elif-geomdan-foredu/premium6-02.webp', alt: '뛰어노는 아이들 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-02-m.webp', alt: '뛰어노는 아이들 이미지컷', width: 430, height: 300 },
          title: '돋보이는 우수한 교육환경',
          desc: ['단지 앞 초등학교(검단 12초 계획),', '유치원(검단 유10 계획) 안심 등·하교'],
        },
        {
          num: '03',
          image: { src: '/apt/elif-geomdan-foredu/premium6-03.webp', alt: '전철 이미지컷', width: 634, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-03-m.webp', alt: '전철 이미지컷', width: 430, height: 300 },
          title: '더 편리해지는 교통망',
          desc: ['인천지하철 1호선 검단연장선 개통,', 'GTX-D·인천2호선 고양연장선(계획) 등'],
        },
        {
          num: '04',
          image: { src: '/apt/elif-geomdan-foredu/premium6-04.webp', alt: '공원에서 운동하는 여성 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-04-m.webp', alt: '공원에서 운동하는 여성 이미지컷', width: 430, height: 300 },
          title: '기대감을 높이는 다양한 생활인프라',
          desc: ['학교·공원 앞 커낼콤플렉스(계획),', '워라밸빌리지(계획), 검단구청(계획) 등'],
        },
        {
          num: '05',
          image: { src: '/apt/elif-geomdan-foredu/premium6-05.webp', alt: '상승 그래프 이미지컷', width: 636, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-05-m.webp', alt: '상승 그래프 이미지컷', width: 430, height: 300 },
          title: '더 합리적으로 누릴 분양가',
          desc: ['분양가 상한제 적용단지로', '더 높아질 검단 프리미엄!'],
        },
        {
          num: '06',
          image: { src: '/apt/elif-geomdan-foredu/premium6-06.webp', alt: '도시 야경 이미지컷', width: 636, height: 345 },
          imageMobile: { src: '/apt/elif-geomdan-foredu/premium6-06-m.webp', alt: '도시 야경 이미지컷', width: 430, height: 300 },
          title: '검단신도시의 무수한 미래가치',
          desc: ['지역 개발을 통한 체계적인 인프라 구축과', '우수한 생활편의시설 등'],
        },
      ],
    },

    // 단지안내 — 공식 단지배치도/동호배치도/단지설계/커뮤니티 원본 이미지를 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        {
          label: '단지배치도',
          thumb: '/apt/elif-geomdan-foredu/complex-thumb-siteplan.webp',
          title: '단지배치도',
          blocks: [
            {
              label: 'ELIF',
              image: {
                src: '/apt/elif-geomdan-foredu/complex-siteplan.webp',
                alt: '엘리프 검단 포레듀 단지배치도(7401~7411동) 및 타입별 세대수표, 총 669세대',
                width: 1300,
                height: 1100,
              },
              imageMobile: {
                src: '/apt/elif-geomdan-foredu/complex-siteplan-m.webp',
                alt: '엘리프 검단 포레듀 단지배치도(모바일)',
                width: 580,
                height: 500,
              },
            },
          ],
        },
        {
          label: '동·호배치도',
          thumb: '/apt/elif-geomdan-foredu/complex-thumb-dong.webp',
          title: '동·호배치도',
          blocks: [
            {
              label: 'ELIF',
              image: {
                src: '/apt/elif-geomdan-foredu/complex-dong.webp',
                alt: '엘리프 검단 포레듀 동·호배치도(7401~7411동, 64A~110S2 20개 타입)',
                width: 1300,
                height: 1010,
              },
              imageMobile: {
                src: '/apt/elif-geomdan-foredu/complex-dong-m.webp',
                alt: '엘리프 검단 포레듀 동·호배치도(모바일)',
                width: 580,
                height: 1460,
              },
            },
          ],
        },
        {
          label: '단지설계',
          thumb: '/apt/elif-geomdan-foredu/complex-thumb-design.webp',
          blocks: [
            {
              label: 'ELIF',
              image: {
                src: '/apt/elif-geomdan-foredu/complex-design.webp',
                alt: '엘리프만의 특별함으로 검단의 주거기준을 더 높게 — 다양한 평면 구성, 공원과 연계된 커뮤니티 배치, 택지설계공모 당선작',
                width: 1300,
                height: 2101,
              },
              imageMobile: {
                src: '/apt/elif-geomdan-foredu/complex-design-m.webp',
                alt: '엘리프 검단 포레듀 단지설계(모바일)',
                width: 580,
                height: 1963,
              },
            },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/elif-geomdan-foredu/complex-thumb-community.webp',
          blocks: [
            {
              label: 'ELIF',
              image: {
                src: '/apt/elif-geomdan-foredu/complex-community.webp',
                alt: '커뮤니티 — 다함께 돌봄센터, 경로당, 어린이집, 재택오피스·실내놀이터, 주민운동시설, 실내정원, 웰컴라운지, 작은도서관',
                width: 1300,
                height: 5040,
              },
              imageMobile: {
                src: '/apt/elif-geomdan-foredu/complex-community-m.webp',
                alt: '엘리프 검단 포레듀 커뮤니티(모바일)',
                width: 580,
                height: 5247,
              },
            },
          ],
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 64㎡(A~D) / 84㎡(A~F, C1) / 98㎡(A~C, B1) / 110㎡(P1~P3, S1·S2).
    //   평면은 공식 세대정보(space/unit) 이미지의 확장옵션형·확장기본형 부분, 면적은 같은 이미지 상단 면적표 기준
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'ELIF',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      // 타입이 20개라 면적대(64·84·98·110㎡) 탭을 먼저 고르고 그 아래 타입 칩을 고르는 방식(2026-11-05 모바일 칩 잘림 수정)
      tabbedGroups: true,
      subtitleLines: [
        '실속형 64㎡부터',
        '품격 있는 110㎡까지',
        '다양한 선호도에 맞춘',
        '20개 타입 총 669세대',
      ],
      groups: [
        {
          area: '64㎡',
          types: [
            unit('A', 112, 'unit-64a', 635, ['64.84', '23.81', '88.65', '51.58', '140.23'], '64㎡A'),
            unit('B', 26, 'unit-64b', 715, ['64.57', '23.43', '88.00', '51.33', '139.33'], '64㎡B'),
            unit('C', 9, 'unit-64c', 630, ['64.78', '24.25', '89.03', '51.57', '140.60'], '64㎡C'),
            unit('D', 66, 'unit-64d', 705, ['64.71', '23.32', '88.03', '51.43', '139.46'], '64㎡D'),
          ],
        },
        {
          area: '84㎡',
          types: [
            unit('A', 43, 'unit-84a', 647, ['84.78', '29.50', '114.28', '67.29', '181.57'], '84㎡A'),
            unit('B', 96, 'unit-84b', 715, ['84.99', '29.83', '114.82', '67.48', '182.30'], '84㎡B'),
            unit('C', 8, 'unit-84c', 655, ['84.86', '30.17', '115.03', '67.41', '182.44'], '84㎡C'),
            unit('C1', 6, 'unit-84c1', 655, ['84.86', '30.17', '115.03', '67.41', '182.44'], '84㎡C1'),
            unit('D', 26, 'unit-84d', 715, ['84.92', '29.59', '114.51', '67.41', '181.92'], '84㎡D'),
            unit('E', 35, 'unit-84e', 657, ['84.88', '29.46', '114.34', '67.35', '181.69'], '84㎡E'),
            unit('F', 41, 'unit-84f', 715, ['84.85', '31.06', '115.91', '67.49', '183.40'], '84㎡F'),
          ],
        },
        {
          area: '98㎡',
          types: [
            unit('A', 44, 'unit-98a', 593, ['98.97', '34.42', '133.39', '78.55', '211.94'], '98㎡A'),
            unit('B', 45, 'unit-98b', 651, ['98.99', '35.03', '134.02', '78.63', '212.65'], '98㎡B'),
            unit('B1', 60, 'unit-98b1', 651, ['98.99', '34.76', '133.75', '78.60', '212.35'], '98㎡B1'),
            unit('C', 44, 'unit-98c', 602, ['98.92', '35.13', '134.05', '78.59', '212.64'], '98㎡C'),
          ],
        },
        {
          area: '110㎡',
          types: [
            unit('P1', 1, 'unit-110p1', 593, ['110.94', '42.01', '152.95', '89.92', '242.87'], '110㎡P1'),
            unit('P2', 2, 'unit-110p2', 636, ['110.93', '41.42', '152.35', '89.87', '242.22'], '110㎡P2'),
            unit('P3', 3, 'unit-110p3', 593, ['110.69', '42.24', '152.93', '89.75', '242.68'], '110㎡P3'),
            unit('S1', 1, 'unit-110s1', 1086, ['110.89', '47.50', '158.39', '90.40', '248.79'], '110㎡S1'),
            unit('S2', 1, 'unit-110s2', 1046, ['110.53', '47.38', '157.91', '90.11', '248.02'], '110㎡S2'),
          ],
        },
      ],
    },

    // 방문예약상담(맨 아래, 2026-11-05 '관심고객등록'에서 명칭 변경) 바로 위 이미지 — 사용자 제공 '모델하우스 방문예약 고객 특별 사은품 VIP 건강검진권'(2026-11-05)
    eventImage: {
      id: 'event',
      src: '/apt/elif-geomdan-foredu/event-gift.webp',
      alt: '모델하우스 방문 예약 고객님께 드리는 특별 사은품 혜택 — 방문예약 후 모델하우스 방문 시 VIP 건강검진권 증정. 사은품은 방문예약하신 담당자를 통해서만 직접방문시 제공됩니다.',
      width: 1254,
      height: 1254,
      maxWidth: 760,
    },

    // 방문예약상담 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '엘리프 검단 포레듀',
      titleLine2: '방문예약상담',
      desc: '간단한 정보를 남겨주시면 「엘리프 검단 포레듀」 모델하우스 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
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
        src: '/apt/elif-geomdan-foredu/logo-white.png',
        alt: 'ELIF 검단 포레듀',
        width: 188,
        height: 25,
      },
      logoAlign: 'center',
      logoWidth: 188,
      highlightText: '단지 앞 초등학교(계획),\n수변공원까지 검단신도시의 자부심\n엘리프 검단 포레듀',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시공', value: '계룡건설산업(주)' },
        { label: '현장', value: '인천광역시 서구 검단신도시 AA32BL' },
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
      csPhone: '1666-0035',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

// 세대안내 타입 한 칸 — 평면 이미지는 모두 가로 1300px(공식 세대정보 이미지에서 평면 부분만 크롭)
function unit(letter, count, file, height, [exclusive, common, supply, otherCommon, contract], name) {
  return {
    letter,
    countText: `${count}세대`,
    image: {
      src: `/apt/elif-geomdan-foredu/${file}.webp`,
      alt: `${name} 타입 평면도(확장옵션형·확장기본형)`,
      width: 1300,
      height,
    },
    // 1023px 이하 — 공식 모바일 사이트 세로형 평면(확장옵션형·확장기본형 세로 배치)
    imageMobile: {
      src: `/apt/elif-geomdan-foredu/${file}-m.webp`,
      alt: `${name} 타입 평면도(확장옵션형·확장기본형)`,
      width: 580,
      height: MOBILE_UNIT_HEIGHTS[file],
    },
    specs: { exclusive, common, supply, otherCommon, contract },
  }
}

export default config
