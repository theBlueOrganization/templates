// 서초 PH1603 — 서울특별시 서초구 서초동 1603-56 외 5필지. 지하 5층~지상 16층, 공동주택 124세대(전용 59㎡ 위주 + 127㎡ 펜트하우스 1세대).
// 시공 효성중공업. 선시공 후분양, 즉시입주. 3호선 남부터미널역 150m.
// 출처: 2026-11-17 사용자 전달 문구(5억대 즉시입주·사업개요·특장점·계약조건) + 참고 사이트 https://www.ph1603.com
//   (사업개요 수치·입지환경·커뮤니티·인테리어·동호수/층고/면적표·평면 이미지). 참고 사이트의 대행사 번호(1666-1691)·로고는 사용 안 함.
// 이미지: 참고 사이트 이미지를 크롭/webp 변환(public/apt/seocho-ph1603/). PC 히어로·OG는 야간 항공 조감도,
//   모바일 히어로·사업개요는 사용자 추가 주간 투시도(이미지.png 1482×1600).
// 대표번호 1666-9338(사용자 전달 문구), 상담 접수 알림 010-3053-4088 — 2026-11-17 사용자 전달값.
const config = {
  slug: 'seocho-ph1603',
  // 서초ph1603.addupapt.kr → /apt/seocho-ph1603 (middleware.js)
  subdomain: '서초ph1603',
  projectName: '서초 PH1603',
  shortName: '서초 PH1603',
  telNumber: '1666-9338',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/seocho-ph1603/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01030534088'],
  sheetId: '',
  sheetTab: '서초PH1603',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // PH1603 '프라이빗 갤러리' 톤(2026-11-17 사용자 요청 '전체적으로 고급지게') — 에스프레소 블랙 #14110f · 딥 브라운 #221d19 · 샴페인 골드 #b39468.
  // 한글은 가는 고딕(Pretendard Light)·영문은 Cormorant. 섹션 배치·색은 pageThemes.css의 'ph1603' 프리셋
  colorTheme: {
    navy: '#221d19',
    ink: '#14110f',
    cream: '#f6f2ec',
    gold: '#b39468',
    visitBtnBg: '#b39468',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'ph1603',

  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl:
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
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
      logo: {
        src: '/apt/seocho-ph1603/logo-white.png',
        alt: '서초 PH1603',
        width: 1769,
        height: 624,
      },
      logoSize: { base: 96, lg: 112, xl: 120 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1666-9338',
      mobileQuick: { phoneDisplay: '1666.9338' },
      transparentDark: false,
      logoDark: {
        src: '/apt/seocho-ph1603/logo-dark.png',
        alt: '서초 PH1603',
        width: 1769,
        height: 624,
      },
    },

    // 진입 팝업 — 팝업 이미지가 없어 방문예약 폼 팝업만
    popup: {
      enabled: false,
      visitForm: {
        enabled: true,
        accentColor: '#221d19',
        title: '방문예약상담',
        desc: '현장은 예약제로 운영됩니다 (상담 10:00~18:00, 주말 동일)',
        checks: ['현장 방문예약', '원하는시간 전화예약'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'PH1603',
      phoneLabel: '대표문의',
      phone: '1666-9338',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#14110f',
      ctaTargetId: 'vip-reservation',
      deskText: '서초 PH1603\n상담을 도와드립니다.',
      address: '서울특별시 서초구 서초동 1603-56',
      tagline: '남부터미널역 150m · 즉시입주',
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

    // 히어로 — 야간 항공 조감도(PC 전체 / 모바일 타워 중심 크롭). 문구는 사용자 전달 메인 카피 '5억대 즉시입주! 서초 PH1603'
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(24, 19, 16, 0.66) 0%, rgba(24, 19, 16, 0.26) 36%, rgba(24, 19, 16, 0) 54%)',
        // PC — 문구가 오른쪽이라 오른쪽 위를 조금 더 어둡게(가로 + 세로 그라데이션 겹침)
        desktop: 'linear-gradient(270deg, rgba(20, 17, 15, 0.5) 0%, rgba(20, 17, 15, 0.18) 38%, rgba(20, 17, 15, 0) 60%), linear-gradient(180deg, rgba(20, 17, 15, 0.6) 0%, rgba(20, 17, 15, 0.22) 32%, rgba(20, 17, 15, 0) 55%)',
      },
      bgImage: {
        src: '/apt/seocho-ph1603/hero.webp',
        alt: '서초 PH1603 야간 조감도',
      },
      // 모바일 — 2026-11-17 사용자 추가 이미지(주간 투시도, 원본 public/apt/seocho-ph1603/이미지.png). 하늘 영역에 문구가 얹혀 타워와 겹치지 않음
      bgImageMobile: {
        src: '/apt/seocho-ph1603/hero-m.webp',
        alt: '서초 PH1603 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.5)',
        brand: '3호선 남부터미널역 150m · 선시공 후분양',
        lines: [{ light: '5억대 즉시입주! ', strong: '서초 PH1603', dots: 0 }],
        name: '서초 초역세권 24평 아파트형 16억~',
        badge: '토허제 제외 · 실거주 의무 없음 · 갭투자 가능',
        badgeBox: true,
        ctaBadge: {
          ringText: 'PH1603 · VISIT RESERVATION · ',
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '서초 PH1603', textLight: ' 즉시입주 가능 · 선시공 후분양' },
          { badge: '혜택', textStrong: '실투자금 5억대~', textLight: ' · 담보대출 최대 6억' },
          { badge: '특장점', textStrong: '토허제 제외 · 실거주 의무 없음', textLight: ' · 갭투자 가능' },
        ],
        announceBg: '#14110f',
        bubbleText: '방문예약상담',
        dotColor: '#b39468',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 특권 4가지 — 사용자 전달 문구('서초 PH1603 특장점')
    benefits: {
      id: 'benefits',
      eyebrow: 'PRIVATE PRIVILEGE',
      titleSmall: '파격적인 분양가와 금융혜택으로 새롭게 출발',
      // 2026-11-17 사용자 요청 — '4대 특장점' 대신 고급스러운 표현으로
      titleBold: '오직 서초 PH1603만이',
      titleScript: '누리는 네 가지 특권',
      // 계약조건은 2026-11-17 사용자 요청으로 노출 안 함(사업개요 표·특권 섹션 모두에서 제외). 빈 설명 줄은 pageThemes.css에서 숨김
      desc: '',
      bgImage: { src: '/apt/seocho-ph1603/benefits-bg.webp', alt: '서초 PH1603 갤러리 커뮤니티 투시도' },
      items: [
        { num: '01', tag: 'NO PERMIT', title: ['토지거래허가제', '제외'], desc: '별도 허가 절차 없이 신속한 계약' },
        { num: '02', tag: 'FREE LIVING', title: ['실거주 의무', '없음'], desc: '즉시 임대·전매 등 자유로운 자산 운용' },
        { num: '03', tag: 'GAP INVEST', title: ['갭투자', '가능'], desc: '임차 시 반전세(보증금 7억 / 월 130만원)' },
        { num: '04', tag: 'MOVE-IN', title: ['즉시입주', '가능'], desc: '선시공 후분양, 완성된 집을 보고 결정' },
      ],
    },

    // 사업개요 — 사용자 전달 사업개요 + 참고 사이트 사업개요(대지위치·면적·주차대수)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/seocho-ph1603/overview-photo.webp',
        alt: '서초 PH1603 투시도',
      },
      notice: '※ 상기 사업개요의 수치 및 분양조건은 현장 사정에 따라 일부 변경될 수 있으니 계약 전 반드시 확인하시기 바랍니다.',
      specItems: [
        { label: '단지명', value: '서초 PH1603' },
        { label: '대지위치', value: '서울특별시 서초구 서초동 1603-56 외 5필지' },
        { label: '건축규모', value: '지하 5층 ~ 지상 16층 (대지 1,440평)' },
        { label: '세대수', value: ['공동주택 124세대', '(근린생활시설 77호 별도)'] },
        { label: '주택형', value: '전용 59㎡ (실사용 24평)' },
        { label: '구조', value: '방2, 욕실2, 거실1 (천정고 2.8m)' },
        { label: '주차', value: ['전체 자주식, 세대당 1.24대', '(2.6m 광폭주차)'] },
        { label: '입지', value: '3호선 남부터미널역 150m' },
        { label: '시공사', value: '효성중공업' },
        { label: '분양방식', value: '선시공 후분양 · 즉시입주' },
      ],
    },

    // 위치안내 — 참고 사이트 입지환경 이미지 한 장 그대로(2026-11-17 사용자 요청). 아래 infrastructure는 이전 구성(미사용, 되돌릴 때용)
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'image',
      maxWidth: 1200,
      image: {
        src: '/apt/seocho-ph1603/location-environment.webp',
        alt: '서초 PH1603 입지환경 — 일상이 예술이 되는 대한민국이 가장 살고 싶은 서초동 1603번지. 예술의전당·오페라하우스·법조타운 및 신세계백화점, 강남성모병원 인접 / 남부터미널역 도보 2분, 교대역·서초역 인접, 서초IC / 정보사령부 부지개발(진행중), 롯데칠성부지 복합개발 / 서울고속버스터미널 부지(14만6260㎡) 복합개발 사업 예정',
        width: 1200,
        height: 1592,
      },
      // 모바일 — 위 완성 이미지는 폰 폭에서 글씨가 안 읽혀, 같은 문구를 텍스트로 + 조감도·개발 사진은 이미지 조각으로
      mobile: {
        eyebrow: 'PREMIUM LOCATION',
        titleLines: ['일상이 예술이 되는', '대한민국이 가장 살고 싶은', '서초동 1603번지'],
        subtitle: '상상하지 못한 일상을 누리다',
        descLines: ['빈 심포니의 선율, 백조의 호수의 안무,', '인상파 거장의 색채 등', '예술의전당이 삶의 여백을 채우는', '강남의 진정한 중심에서 일상, 예술이 되다.'],
        map: {
          src: '/apt/seocho-ph1603/location-map.webp',
          alt: '서초 PH1603 입지 조감도 — 남부터미널역, 교대역, 서초역, 서울교대, 서울중앙지방법원, 대법원, 예술의전당, 서초IC, 양재역, 역삼역, 서리풀 복합시설 개발',
          width: 1200,
          height: 827,
        },
        mapCaption: '조감도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
        pointsTitleLines: ['눈부신 변화의 중심,', '모든 인프라가 집중된 최상의 입지'],
        points: [
          '예술의전당·오페라하우스·법조타운 및 신세계백화점, 강남성모병원 인접',
          '남부터미널역 도보 2분, 교대역·서초역 인접, 서초IC',
          '정보사령부 부지개발(진행중), 롯데칠성부지 복합개발 프리미엄',
          '서울고속버스터미널 부지(14만6260㎡) 복합개발 사업 예정',
        ],
        photos: [
          { src: '/apt/seocho-ph1603/location-dev-arts.webp', alt: '예술의 전당', caption: '예술의 전당', width: 600, height: 363 },
          { src: '/apt/seocho-ph1603/location-dev-seoripul.webp', alt: '서리풀 복합시설 개발(정보사 부지) 조감도', caption: '서리풀 복합시설 개발(정보사 부지) 조감도', width: 600, height: 392 },
          { src: '/apt/seocho-ph1603/location-dev-terminal.webp', alt: '고속버스터미널 조감도', caption: '고속버스터미널 조감도', width: 600, height: 330 },
        ],
      },
      infrastructure: {
        eyebrow: 'PREMIUM LOCATION',
        titlePlain: '일상이 예술이 되는,',
        titleAccent: '서초의 중심 1603번지',
        desc: '3호선 남부터미널역 150m 초역세권에 예술의전당·법조타운·신세계백화점까지, 모든 인프라가 집중된 강남의 진정한 중심',
        mapImage: {
          src: '/apt/seocho-ph1603/location-map.webp',
          alt: '서초 PH1603 입지 조감도 — 남부터미널역, 교대역, 서초역, 서울교대, 서울중앙지방법원, 예술의전당, 서초IC, 양재역, 서리풀 복합시설 개발, 대법원',
        },
        mapCaption: '조감도 및 지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 개발 계획은 관계기관 사정에 따라 변경될 수 있습니다.',
        items: [
          { num: '01', category: '교통', title: '남부터미널역 150m 초역세권', desc: '3호선 남부터미널역 도보 2분, 교대역 도보 14분, 서초IC → 경부고속도로를 통한 광역 교통환경' },
          { num: '02', category: '생활', title: '강남 중심 생활인프라', desc: '예술의전당·오페라하우스·법조타운 및 신세계백화점, 강남성모병원, 우수 학군까지 최적화 생활권' },
          { num: '03', category: '개발', title: '눈부신 변화의 중심', desc: '경부고속도로 지하화(예정), 정보사령부 부지개발(진행중), 롯데칠성부지·코오롱부지 등 복합 업무시설 계획' },
          { num: '04', category: '미래', title: '서울고속버스터미널 복합개발', desc: '서울고속버스터미널 부지(14만6,260㎡) 복합개발 사업 예정으로 더욱 기대되는 미래가치' },
        ],
        sourceNote: '※ 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있습니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 59A 거실 인테리어 + 오른쪽 카피(참고 사이트 인테리어 카피)
    premiumIntro: {
      split: true,
      eyebrow: 'PREMIUM INTERIOR',
      titleLine1: '하이엔드를 넘어서는',
      paragraphs: [
        ['삶의 품격을 담아내는', '모던 헤리티지 공간'],
        ['서초의 중심에서 누리는', '독보적인 프라이빗 라이프, 서초 PH1603'],
      ],
      bgImage: {
        src: '/apt/seocho-ph1603/premium-split.webp',
        alt: '서초 PH1603 59A 거실 인테리어',
      },
    },

    // 프리미엄 6(cardStyle 'zigzag') — 참고 사이트 입지·커뮤니티·인테리어
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'PH1603',
      titlePlain: '서초 PH1603 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(160deg, #221d19 0%, #17130f 55%, #0f0c0a 100%)',
        head: '#e6d5b8',
        accentOdd: '#d9c29b',
        accentEven: '#b39468',
        line: 'rgba(179, 148, 104, 0.28)',
      },
      cards: [
        // 제목 — 영문 한 줄 + 한글 한 줄(\n, pre-line)
        premium('01', '서초 PH1603 야간 조감도', 'Premium Location\n남부터미널역 150m', ['3호선 남부터미널역 도보 2분, 교대역·서초IC 인접,', '예술의전당·법조타운·신세계백화점 생활권']),
        premium('02', '갤러리 커뮤니티 별동 정면 투시도', 'Gallery Community\n154평 갤러리 커뮤니티', ['대한민국 최초 하이 소사이어티의 이너서클,', '지하 1층~지상 1층 복층형 화이트 큐브 갤러리']),
        premium('03', '인클로즈드 부티크 가든 투시도', 'Boutique Garden\n도심 속 헤리티지 정원', ['완벽한 프라이버시를 보장하는 인클로즈드 정원,', '자연광이 드는 지하 2층 선큰광장']),
        premium('04', '메인 라운지 첨단 수경재배 시스템', 'Wellness Lounge\n웰빙 커뮤니티', ['첨단 수경재배 시스템의 메인 라운지,', '비즈니스 라운지·피트니스 라운지·요가룸']),
        premium('05', '59A 거실 인테리어', 'High Ceiling\n천정고 2.8m', ['전용 59㎡(실사용 24평) 방2·욕실2·거실1,', '거실·주방을 잇는 오픈 플랜 레이아웃']),
        premium('06', '59B 주방 인테리어', 'High-end Finish\n수입 마감재', ['유럽산 포세린타일·KOHLER 수전·히든도어 시스템,', '전체 자주식 세대당 1.24대(2.6m 광폭주차)']),
      ],
    },

    // 단지안내 — 참고 사이트 동호수 배치도·층고 현황·타입별 면적표·토지거래허가제 안내·부티크 가든을 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        complexTab('동호수배치도', 'dongho', [
          ['complex-dongho', 1200, 904, '서초 PH1603 동·호수 배치도 — 1~16층, 59㎡A 84세대 · 59㎡B 29세대 · 59㎡C 1세대 · 59㎡GA 4세대 · 59㎡PA 3세대 · 59㎡PB 2세대 · 127㎡P 1세대, 총 124세대', '동호수배치도'],
        ]),
        complexTab('타입별 면적표', 'area', [
          ['complex-area', 1200, 312, '서초 PH1603 타입별 면적표 — 59A·59B·59GA·59PA·59PB·59C·127P 전용·공급·계약면적, 합계 124세대'],
        ]),
        complexTab('층고 현황', 'elevation', [
          ['complex-elevation', 1200, 1310, '서초 PH1603 층고 현황 입면도 — 지하 1층 ~ 지상 16층, 옥탑층'],
        ]),
        complexTab('토지거래허가제', 'regulation', [
          ['complex-regulation', 1200, 720, 'PH1603 토지거래허가제 미해당 — 별도허가 불필요, 실거주 의무 없음, 갭투자 가능'],
        ]),
        complexTab('부티크 가든', 'garden', [
          ['complex-garden', 990, 750, '서초 PH1603 인클로즈드 부티크 가든 별동측면 투시도'],
        ]),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 세부 내용은 현장 사정에 따라 변경될 수 있습니다.',
    },

    // 세대안내 — 참고 사이트 타입별 평면도(확장형)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '전용 59㎡(실사용 24평) · 방2 욕실2 거실1 · 천정고 2.8m — 총 124세대',
      tabColumns: 3,
      tabColumnsMobile: 3,
      zoomLightbox: true,
      tabs: [
        { label: '59㎡A', image: { src: '/apt/seocho-ph1603/unit-59a.webp', alt: '59㎡A 타입(84세대) 평면 — 전용 59.70㎡, 공급 84.74㎡, 계약 149.56㎡', width: 700, height: 520 } },
        { label: '59㎡B', image: { src: '/apt/seocho-ph1603/unit-59b.webp', alt: '59㎡B 타입(29세대) 평면 — 전용 59.70㎡, 공급 84.74㎡, 계약 149.56㎡', width: 700, height: 520 } },
        { label: '59㎡GA', image: { src: '/apt/seocho-ph1603/unit-59ga.webp', alt: '59㎡GA 타입(4세대) 평면 — 전용 59.57㎡, 공급 84.71㎡, 계약 149.40㎡', width: 700, height: 520 } },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '서초 PH1603',
      titleLine2: '방문예약상담',
      desc: '원활한 관람을 위해 현장은 방문예약제로 운영됩니다.\n간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
      serviceOptions: ['현장 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 현장 방문예약 접수 및 상담 일정 조율 - 분양 일정, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 현장 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/seocho-ph1603/logo-white.png',
        alt: '서초 PH1603',
        width: 1769,
        height: 624,
      },
      logoAlign: 'center',
      logoWidth: 150,
      highlightText: '5억대 즉시입주!\n서초 PH1603',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '현장 위치', value: '서울특별시 서초구 서초동 1603-56 외 5필지' },
        { label: '시공', value: '효성중공업' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 CG 및 사진, 이미지, 일러스트 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다소 상이할 수 있습니다.',
        '※ 각종 개발계획, 교통시설 및 주변현황, 예정사항은 정부정책 및 관계기관의 사정, 사업주체의 진행 상황에 따라 변경 또는 취소될 수 있습니다.',
        '※ 분양가·계약조건·대출 한도 및 임대 시세는 현장 사정 및 금융기관 심사에 따라 변경될 수 있으니, 계약 전 반드시 현장에서 확인하시기 바랍니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 현장 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1666-9338',
      csHours: 'AM 10:00 ~ PM 18:00',
    },
  },
}

// 프리미엄 카드 한 장 — PC 1280×690 / 모바일 860×600(참고 사이트 CG 크롭)
function premium(num, imgAlt, title, desc) {
  return {
    num,
    image: { src: `/apt/seocho-ph1603/premium-${num}.webp`, alt: imgAlt, width: 640, height: 345 },
    imageMobile: { src: `/apt/seocho-ph1603/premium-${num}-m.webp`, alt: imgAlt, width: 430, height: 300 },
    title,
    desc,
  }
}

// 단지안내 탭 한 칸(이미지 여러 장이면 블록 버튼 생김) — [파일명, 폭, 높이, alt, 블록 버튼 이름]
function complexTab(label, thumb, images) {
  return {
    label,
    thumb: `/apt/seocho-ph1603/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: images.map(([file, width, height, alt, blockLabel]) => ({
      label: blockLabel ?? 'PH1603',
      image: { src: `/apt/seocho-ph1603/${file}.webp`, alt, width, height },
    })),
  }
}

export default config
