// 의정부역 펠리스타워 양우내안愛 — 경기도 의정부시 의정부동 424번지 일원. 시공 양우건설, 시행 의정부동지역주택조합.
// 지하 6층~지상 49층, 아파트 1,252세대 중 일반분양 414세대(59·84A·84B·84C) + 오피스텔 48실 + 업무시설 168실 + 근린생활시설 38실.
// 고화질 CG(2026-11-10 사용자 제공 원본 9장 — 항공조감도·조감도·투시도·부감도·전망뷰·상가투시도A/B·어린이놀이터·배치도)로
//   히어로·인트로·OG·사업개요·프리미엄 인트로·프리미엄01/04·단지안내 투시도 탭 제작(원본 jpg는 용량이 커서 git에 올리지 않음).
// 출처: 공식 홈페이지(https://feliztower-yangwoo.co.kr/) — 사업개요·입지환경·프리미엄·단지설계·단지배치도·동호수배치도·커뮤니티·시스템·주택형 이미지를
//   받아 크롭/webp 변환(public/apt/uijeongbu-feliztower-yangwoo/). 로고는 홈페이지 logo.svg를 PNG로 변환(브론즈 원본 + 흰색 버전).
// 진입 팝업(popup1.webp — 2026-11-10 사용자 제공 이미지) — 2026-11-10 사용자 요청 이벤트: 방문예약 내방 시 신세계상품권 1만원, 계약 시 신세계상품권 30만원 증정.
// 대표번호 1588-4643 — 2026-11-10 사용자 전달값(홈페이지 번호 1577-3197 아님).
const config = {
  slug: 'uijeongbu-feliztower-yangwoo',
  projectName: '의정부역 펠리스타워 양우내안愛',
  shortName: '의정부역 펠리스타워',
  telNumber: '1588-4643',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/uijeongbu-feliztower-yangwoo/og.jpg',
  // 상담신청 알림 수신번호 — 전달받으면 추가
  adminPhones: [],
  sheetId: '',
  sheetTab: '의정부펠리스타워',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 공식 홈페이지 CSS 색 — 브론즈 #84654f(메인) · 딥브라운 #472122 · 라이트브론즈 #b9967b · 연회색 #f3f3f3. 섹션 배치는 pageThemes.css의 'feliz' 프리셋
  colorTheme: {
    navy: '#84654f',
    ink: '#472122',
    cream: '#f3f3f3',
    gold: '#b9967b',
    visitBtnBg: '#b9967b',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'feliz',
  // 공식 홈페이지 메인 문구 글씨체(Noto Serif KR 300·600 / Noto Sans KR 400)
  extraFontLinks: ['https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&family=Noto+Serif+KR:wght@300;600&display=swap'],

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
        src: '/apt/uijeongbu-feliztower-yangwoo/logo-white.png',
        alt: '의정부역 펠리스타워 양우내안愛',
        width: 669,
        height: 199,
      },
      logoSize: { base: 130, lg: 150, xl: 160 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1588-4643',
      // 모바일 우측: 전화 아이콘 + 1588.4643 + 원형 사람 아이콘(방문예약) + 얇은 햄버거(2026-11-10 사용자 요청, 공식 홈페이지 모바일 헤더 느낌)
      mobileQuick: { phoneDisplay: '1588.4643' },
      // 히어로 위쪽이 밝은 하늘이라 투명 헤더일 때 어두운 로고·글씨
      transparentDark: true,
      logoDark: {
        src: '/apt/uijeongbu-feliztower-yangwoo/logo-color.png',
        alt: '의정부역 펠리스타워 양우내안愛',
        width: 669,
        height: 199,
      },
    },

    // 진입 팝업 — 신세계상품권 증정 이벤트(방문예약 1만원 / 계약 30만원) → 닫으면 방문예약 폼
    popup: {
      enabled: true,
      order: 'imageFirst',
      openDelayMs: 500,
      closeIcon: true,
      // 인트로가 끝난 뒤에 띄움 — 인트로 진행 중에 열리면 인트로 레이어(z-index 10000)가 팝업을 덮어 버튼이 안 눌림
      afterIntro: true,
      fitViewport: true,
      maxWidth: 460,
      images: [
        {
          src: '/apt/uijeongbu-feliztower-yangwoo/popup1.webp',
          alt: '분양 특별 혜택 이벤트 — 예약 방문시 신세계상품권 1만원 증정, 계약 시 신세계상품권 30만원 증정. 지금 바로 방문예약하기',
          width: 1254,
          height: 1254,
          // 이미지 속 "지금 바로 방문예약하기" 버튼 위치(이미지 대비 %) — 누르면 팝업을 닫고 방문예약상담 섹션(#vip-reservation)으로 이동(폼 팝업은 생략)
          hotspots: [{ link: '#vip-reservation', label: '지금 바로 방문예약하기', left: 20, top: 79.5, width: 56.5, height: 10 }],
        },
      ],
      visitForm: {
        enabled: true,
        accentColor: '#84654f',
        title: '방문예약상담',
        desc: '방문예약 후 내방 시 신세계상품권 1만원 증정',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약'],
        submitLabel: '방문예약하고 상품권 받기',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'FELIZTOWER',
      phoneLabel: '분양문의',
      phone: '1588-4643',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#472122',
      ctaTargetId: 'vip-reservation',
      deskText: '의정부역 펠리스타워 양우내안愛\n분양 상담을 도와드립니다.',
      address: '경기도 의정부시 의정부동 424번지 일원',
      tagline: '의정부역 초역세권 49층 랜드마크',
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

    // 인트로 — 검은 화면에 원 2개 → 로고 → 원 안에 히어로 이미지가 차오르며 열림(SignatureCircleIntro, 2026-11-10 사용자 요청)
    circleIntro: {
      logo: { src: '/apt/uijeongbu-feliztower-yangwoo/logo-white.png', alt: '의정부역 펠리스타워 양우내안愛 FELIZTOWER', width: 669, height: 199 },
      bgImage: '/apt/uijeongbu-feliztower-yangwoo/hero.webp',
      bgImageMobile: '/apt/uijeongbu-feliztower-yangwoo/hero-m.webp',
    },

    // 히어로 — 고화질 항공조감도(수락산 배경 + 49층 타워). 문구는 사용자 제공 캡처(2026-11-10) 그대로:
    //   (글씨체·크기·위치는 공식 홈페이지 index.html .main_tit_box 기준 — pageThemes.css feliz) 명조 브론즈 '의정부의 다시 없을 자리 / 단 하나의 랜드마크' → 고딕 설명 2줄 → 와인색 세로선 → 국문 워드마크
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.55) 38%, rgba(255, 255, 255, 0) 62%)',
        desktop: 'radial-gradient(ellipse 48% 62% at 34% 42%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 80%), linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 30%)',
      },
      bgImage: {
        src: '/apt/uijeongbu-feliztower-yangwoo/hero.webp',
        alt: '의정부역 펠리스타워 양우내안愛 투시도',
      },
      bgImageMobile: {
        src: '/apt/uijeongbu-feliztower-yangwoo/hero-m.webp',
        alt: '의정부역 펠리스타워 양우내안愛 투시도',
      },
      estCopy: {
        color: '#897766',
        shadow: '0 0 18px rgba(255, 255, 255, 0.7)',
        serifAll: true,
        serifTitle: true,
        brand: '의정부의 다시 없을 자리',
        lines: [{ light: '', strong: '단 하나의 랜드마크', dots: 0 }],
        desc: ['의정부 최중심 입지에 가장 앞선 비전으로 빛나는', '초고층 하이엔드 라이프가 시작됩니다'],
        descColor: 'rgba(0, 0, 0, 0.7)',
        lineColor: '#472122',
        logo: { src: '/apt/uijeongbu-feliztower-yangwoo/wordmark-wine.png', alt: '의정부역 펠리스타워 양우내안愛', width: 1305, height: 136 },
        ctaBadge: {
          ringText: 'FELIZTOWER · VISIT RESERVATION · ',
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: 'EVENT', textStrong: '계약 시 신세계상품권 30만원', textLight: ' 증정' },
          { badge: 'EVENT', textStrong: '방문예약 내방 시 신세계상품권', textLight: ' 1만원 증정' },
        ],
        announceBg: '#472122',
        bubbleText: '방문예약상담',
        dotColor: '#b9967b',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 사업개요 — 공식 홈페이지 SUMMARY
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/uijeongbu-feliztower-yangwoo/overview-photo.webp',
        alt: '의정부역 펠리스타워 양우내안愛 조감도',
      },
      notice: '※ 상기 사업개요의 계획상 수치는 시공 및 인허가 과정에서 변경될 수 있습니다.',
      specItems: [
        { label: '단지명', value: '의정부역 펠리스타워 양우내안愛' },
        { label: '대지위치', value: '경기도 의정부시 의정부동 424번지 일원' },
        { label: '건축규모', value: '지하 6층 ~ 지상 49층' },
        { label: '대지/연면적', value: '21,968.50㎡ / 238,496.1406㎡' },
        { label: '세대수', value: ['아파트 1,252세대 중 일반분양 414세대', '오피스텔 48실 · 업무시설 168실'] },
        { label: '타입별 일반분양', value: ['59㎡ 26세대 · 84㎡A 177세대', '84㎡B 123세대 · 84㎡C 88세대'] },
        { label: '시공', value: '양우건설(주)' },
      ],
    },

    // 위치안내 — 공식 홈페이지 입지환경 위치도(지도 부분만) + 번호 항목 4개
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'FELIZTOWER LOCATION',
        titlePlain: '의정부 GTX비전 맨 앞,',
        titleAccent: '가장 높은 프리미엄의 시작',
        desc: '비전도, 교통도, 생활도 한 걸음에 누리는 의정부의 중심 — 1호선 의정부역 바로 앞, 강남 20분대 GTX-C(착공) 비전',
        mapImage: {
          src: '/apt/uijeongbu-feliztower-yangwoo/location-map.webp',
          alt: '의정부역 펠리스타워 양우내안愛 광역 위치도 — 1호선 의정부역/GTX-C(착공), 의정부경전철, 교외선, 7호선 연장(공사중), 신세계백화점, 의정부시청 등',
        },
        mapCaption: '노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        items: [
          { num: '01', category: '교통', title: '강남 20분대 GTX-C(착공) 비전', desc: '1호선 의정부역 초역세권, GTX-C(착공)로 강남과 더 가까워질 미래가치' },
          { num: '02', category: '역세권', title: '트리플 역세권 쾌속교통', desc: '1호선 의정부역에 의정부경전철·교외선까지 가깝게 누리는 트리플 역세권' },
          { num: '03', category: '인프라', title: '의정부 최중심 생활 인프라', desc: '의정부시청, 신세계백화점, 역전근린공원, 로데오거리 등 주요 인프라가 집중된 입지' },
          { num: '04', category: '미래가치', title: '7호선 연장·캠프라과디아 개발', desc: '7호선 연장(공사중)과 캠프라과디아 개발의 최대 수혜로 더 높아질 프리미엄' },
        ],
        sourceNote: '※ GTX-C 의정부역에 관한 내용은 「국토교통부 고시 제2024-483호」, 7호선(연장 예정)에 관한 내용은 「경기도 공고 제2023-5732호」를 참고하였습니다. 교통시설 및 개발계획은 인·허가 및 정부시책에 따라 변경·취소될 수 있으며 이는 사업주체 및 시공사와 무관합니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 이미지컷 + 오른쪽 카피(공식 홈페이지 'ALL INCLUSIVE LIFE COMPLEX')
    premiumIntro: {
      split: true,
      eyebrow: 'ALL INCLUSIVE LIFE COMPLEX',
      titleLine1: '의정부를 대표할 라이프 복합타워',
      paragraphs: [
        ['주거와 비즈니스, 상업시설 등', '도시에서 누리는 모든 라이프스타일을 담은 가장 높은 품격'],
        ['의정부 최중심 입지에 가장 앞선 비전으로 빛나는', '초고층 하이엔드 라이프가 시작됩니다'],
      ],
      bgImage: {
        src: '/apt/uijeongbu-feliztower-yangwoo/premium-split.webp',
        alt: '의정부역 펠리스타워 양우내안愛 부감도',
      },
    },

    // 프리미엄 — 공식 홈페이지 '한 차원 높은 프리미엄' 6가지(cardStyle 'zigzag')
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'FELIZTOWER',
      titlePlain: '한 차원 높은 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(135deg, #5a2c2d 0%, #472122 55%, #2e1516 100%)',
        head: '#efe6de',
        accentOdd: '#efe6de',
        accentEven: '#d9c1ad',
        line: '#6b4140',
      },
      cards: [
        premium('01', '의정부역 펠리스타워 양우내안愛 투시도', '의정부 초고층 49층 랜드마크 타워', ['주거와 업무, 상업시설 등 도시의 모든 일상을 담은', '의정부를 높일 초고층 49층 컴플렉스']),
        premium('02', '고속열차 이미지컷', '트리플 역세권 앞선 쾌속교통', ['1호선 의정부역 초역세권에 경전철, 교외선까지', '가깝게 누리는 트리플 역세권']),
        premium('03', '의정부역/GTX-C(착공) 위치도', 'GTX-C(착공) 압도적 미래비전', ['의정부의 미래를 견인할 GTX-C(착공) 비전과', '캠프라과디아 개발의 최대 수혜로 더 높아질 프리미엄']),
        premium('04', '의정부 도심 전망뷰', '의정부 중심의 풍부한 인프라', ['의정부시청, 신세계백화점, 역전근린공원, 로데오거리 등', '의정부의 주요 인프라가 집중된 최중심 입지']),
        premium('05', '라운지 이미지컷', '조식서비스(예정), 수영장 등 하이엔드 라이프', ['아침을 여유롭게 할 조식서비스(예정)에 수영장, 골프연습장,', '펫카페(예정), 주민카페 등 수준 높은 라이프']),
        premium('06', '고층빌딩 이미지컷', '신뢰의 건설명가, 양우건설', ['실력과 실적으로 검증된 노하우와 신뢰로', '대한민국 주거문화를 이끌어온 양우건설 시공']),
      ],
    },

    // 단지안내 — 공식 홈페이지 단지설계/단지배치도/동·호수배치도/커뮤니티/시스템 이미지를 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        complexTab('단지배치도', 'siteplan', [
          ['complex-siteplan', 1300, 1531, '높이만큼 넓은 개방감을 더한, 여유를 담은 단지 배치 — 101~105동, 총 1,252세대 중 일반분양 414세대', '단지배치도'],
        ]),
        complexTab('투시도', 'cg', [
          ['cg-perspective', 1600, 998, '의정부역 펠리스타워 양우내안愛 투시도', '투시도'],
          ['cg-lowangle', 1600, 860, '의정부역 펠리스타워 양우내안愛 부감도', '부감도'],
          ['cg-retail-a', 1600, 800, '단지 내 상가 투시도 A', '상가 A'],
          ['cg-retail-b', 1600, 783, '단지 내 상가 투시도 B', '상가 B'],
          ['cg-playground', 1600, 960, '단지 내 어린이놀이터 투시도', '어린이놀이터'],
        ]),
        complexTab('단지설계', 'design', [['complex-design', 1300, 2396, '도시의 품격을 높이는, 한 차원 높은 단지설계 — 초고층 랜드마크 대단지, 남향 위주 단지 배치, 편리한 지하주차설계, 품격 있는 외관 특화, 자연을 품은 조경설계']]),
        complexTab('동·호수배치', 'dong', [['complex-dong', 1300, 1481, '동·호수 배치도 — 59·84A·84B·84C 타입별 일반분양 동·호수']]),
        complexTab('커뮤니티', 'community', [['complex-community', 1300, 4508, '스페셜 커뮤니티 — 피트니스·GX룸, 실내골프장, 작은도서관, 경로당, 어린이집, 주민카페 등']]),
        complexTab('시스템', 'system', [
          ['complex-system', 1300, 1401, '효율을 높이는 친환경 기술, 에너지 세이빙 시스템 — 태양광 설비, 전기차 충전시설, LED조명, 대기전력차단, 각실제어 온도조절시스템, 일괄소등 스위치', '에너지 세이빙'],
          ['complex-system2', 1300, 1675, '디지털 편의 시스템', '디지털 편의'],
        ]),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다. 동·호수표는 제작과정상 오류가 있을 수 있으니 반드시 견본주택에서 확인하시기 바랍니다.',
    },

    // 세대안내 — 공식 홈페이지 주택형(59·84A·84B·84C). 면적은 각 평면 이미지 면적표 기준, 평면은 확장 기본형만 크롭
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'FELIZTOWER',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      tabbedGroups: true,
      subtitleLines: [
        '공간의 차이가',
        '삶의 품격이 되다',
        '59㎡ · 84㎡ 일반분양',
        '총 414세대',
      ],
      groups: [
        {
          area: '59㎡',
          types: [unit('B', 26, 180, 'unit-59', 843, 615, ['59.9777', '26.9417', '86.9194', '42.0560', '128.9754'], '59㎡B')],
        },
        {
          area: '84㎡',
          types: [
            unit('A', 177, 336, 'unit-84a', 776, 545, ['84.7415', '34.7740', '119.5155', '59.4203', '178.9358'], '84㎡A'),
            unit('B', 123, 368, 'unit-84b', 846, 545, ['84.8836', '33.0127', '117.8963', '59.5198', '177.4161'], '84㎡B'),
            unit('C', 88, 368, 'unit-84c', 762, 615, ['84.9911', '33.8153', '118.8064', '59.5953', '178.4017'], '84㎡C'),
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '의정부역 펠리스타워 양우내안愛',
      titleLine2: '방문예약상담',
      desc: '방문예약 후 모델하우스에 내방하시면 신세계상품권 1만원을, 계약하시면 신세계상품권 30만원을 드립니다. 간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
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
        src: '/apt/uijeongbu-feliztower-yangwoo/logo-white.png',
        alt: '의정부역 펠리스타워 양우내안愛',
        width: 669,
        height: 199,
      },
      logoAlign: 'center',
      logoWidth: 190,
      highlightText: '의정부역 초역세권 49층 랜드마크\n의정부역 펠리스타워 양우내안愛',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '의정부동지역주택조합' },
        { label: '시공', value: '양우건설(주)' },
        { label: '현장', value: '경기도 의정부시 의정부동 424번지 일원' },
        { label: '견본주택', value: '경기도 의정부시 호원동 434번지' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 CG 및 일러스트, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 사이트에 표기된 개발계획(예정) 등은 각 지방자치단체 및 언론보도자료를 인용한 것으로 국가 기관, 관할 지자체 및 기타 관계 기관의 사업추진 중 변경, 지연, 취소될 수 있습니다.',
        '※ 본 주택은 인근 수도권 전철 1호선의 열차 운행에 따라 소음·진동 등이 발생할 수 있으니 청약 및 계약 전 주변 여건을 충분히 확인하시기 바랍니다.',
        '※ 상품권 증정 이벤트는 현장 사정에 따라 변경 또는 조기 종료될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1588-4643',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

// 프리미엄 카드 한 장 — PC 640×345 / 모바일 430×300
function premium(num, imgAlt, title, desc) {
  return {
    num,
    image: { src: `/apt/uijeongbu-feliztower-yangwoo/premium-${num}.webp`, alt: imgAlt, width: 640, height: 345 },
    imageMobile: { src: `/apt/uijeongbu-feliztower-yangwoo/premium-${num}-m.webp`, alt: imgAlt, width: 430, height: 300 },
    title,
    desc,
  }
}

// 단지안내 탭 한 칸(이미지 여러 장이면 블록 버튼 생김) — [파일명, 폭, 높이, alt, 블록 버튼 이름]
function complexTab(label, thumb, images) {
  return {
    label,
    thumb: `/apt/uijeongbu-feliztower-yangwoo/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: images.map(([file, width, height, alt, blockLabel]) => ({
      label: blockLabel ?? 'FELIZTOWER',
      image: { src: `/apt/uijeongbu-feliztower-yangwoo/${file}.webp`, alt, width, height },
    })),
  }
}

// 세대안내 타입 한 칸 — 평면은 원본 주택형 이미지에서 확장 기본형 평면만 크롭
function unit(letter, saleCount, totalCount, file, width, height, [exclusive, common, supply, otherCommon, contract], name) {
  return {
    letter,
    countText: `${totalCount}세대 중 일반분양 ${saleCount}세대`,
    image: {
      src: `/apt/uijeongbu-feliztower-yangwoo/${file}.webp`,
      alt: `${name} 타입 평면도(확장 기본형)`,
      width,
      height,
    },
    specs: { exclusive, common, supply, otherCommon, contract },
  }
}

export default config
