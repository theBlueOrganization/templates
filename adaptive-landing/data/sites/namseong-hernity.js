// 남성역 헤르니티 — 서울특별시 동작구 솔밭로 98(사업지). 지하 4층~지상 최고 37층 7개 동(101~107동), 총 1,210세대(59·84·106㎡).
// 지역주택조합 조합원 모집 사업(「주택법 시행규칙」 제11조의5 조합원 모집 광고 고지 필수 — 푸터 disclaimers).
// 출처: 참고 홈페이지(https://ledgold.co.kr/) 본문 — 사업개요·입지(교통/교육/생활/자연)·프리미엄 6·커뮤니티 문구.
// 이미지: 2026-11-10 사용자 제공 CG 4장(광역 조감도·투시도·조감도·단지배치도) + 2차 5장(광역 조감도2 — 단지안내, 드랍존·메인광장·보행통로·상가 —
//   프리미엄 03/04/06·단지 특화 탭, 오른쪽 위 'cam…' 라벨은 잘라냄)을 크롭/webp 변환(public/apt/namseong-hernity/).
//   PC 히어로는 2026-11-10 사용자 요청으로 투시도(모바일 히어로와 같은 CG) — 원본 하늘 그대로, 위 160px만 잘라 16:9(저층부까지 보이게). 문구는 pageThemes.css 'hernity'에서 PC용으로 작게.
//   모바일 히어로(hero-m)는 같은 투시도 세로 크롭 + 위쪽 하늘 띠를 늘려 타워를 아래로(짧은 폰에서 문구·타워 겹침 방지, 2026-11-10).
// 3차 참고 페이지(https://www.bunyangtop.kr/namseong-hernity_main, 2026-11-10 사용자 요청) 이미지 — 평면(59A·84A·106A, 타입별 세대수)·위치도·
//   커뮤니티 평면(시설 면적)·인테리어를 크롭/webp 변환, 타입별 가격대(59 7억대·84 8억대·106 10억대)·사업 진행(지구단위계획·교통영향평가 완료) 문구 반영.
//   로고는 이미지가 없어 'HERNITY / 남성역 헤르니티' 텍스트 워드마크로 제작.
// 대표번호 1522-6440, 상담 접수 알림 010-2499-4200 — 2026-11-10 사용자 전달값(참고 홈페이지 번호 1668-2474·1588-8328 아님).
const config = {
  slug: 'namseong-hernity',
  // 남성역헤르니티.addupapt.kr → /apt/namseong-hernity (middleware.js)
  subdomain: '남성역헤르니티',
  projectName: '남성역 헤르니티',
  shortName: '남성역 헤르니티',
  telNumber: '1522-6440',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/namseong-hernity/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01024994200'],
  sheetId: '',
  sheetTab: '남성역헤르니티',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // CG 외관 톤 — 딥네이비 #1d2b3f · 슬레이트 블루 #3c5370 · 샴페인 골드 #a8895a. 섹션 배치는 pageThemes.css의 'hernity' 프리셋
  colorTheme: {
    navy: '#3c5370',
    ink: '#1d2b3f',
    cream: '#f1f2f4',
    gold: '#a8895a',
    visitBtnBg: '#a8895a',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'hernity',

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
        src: '/apt/namseong-hernity/logo-white.png',
        alt: '남성역 헤르니티',
        width: 1252,
        height: 308,
      },
      logoSize: { base: 112, lg: 132, xl: 142 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1522-6440',
      mobileQuick: { phoneDisplay: '1522.6440' },
      transparentDark: false,
      logoDark: {
        src: '/apt/namseong-hernity/logo-navy.png',
        alt: '남성역 헤르니티',
        width: 1252,
        height: 308,
      },
    },

    // 진입 팝업 — 팝업 이미지가 없어 방문예약 폼 팝업만
    popup: {
      enabled: false,
      visitForm: {
        enabled: true,
        accentColor: '#3c5370',
        title: '방문예약상담',
        desc: '홍보관은 예약제로 운영됩니다 (상담 10:00~18:00, 주말 동일)',
        checks: ['홍보관 방문예약', '원하는시간 전화예약'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'HERNITY',
      phoneLabel: '대표문의',
      phone: '1522-6440',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#1d2b3f',
      ctaTargetId: 'vip-reservation',
      deskText: '남성역 헤르니티\n상담을 도와드립니다.',
      address: '서울특별시 동작구 솔밭로 98',
      tagline: '7호선 남성역 1,210세대 대단지',
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

    // 인트로(2026-11-11 요청) — 원 2개 드로잉 → 로고 → 원이 화면 전체로 열리며 히어로 (SignatureCircleIntro)
    //   배경은 히어로와 같은 투시도라 열린 뒤 히어로로 그대로 이어짐
    circleIntro: {
      logo: { src: '/apt/namseong-hernity/logo-white.png', alt: '남성역 헤르니티', width: 1252, height: 308 },
      bgImage: '/apt/namseong-hernity/hero.webp',
      bgImageMobile: '/apt/namseong-hernity/hero-m.webp',
    },

    // 히어로 — PC: 광역 조감도(한강·남산 + 단지) / 모바일: 투시도(타워 + 위쪽 하늘). 문구는 참고 홈페이지 메인 카피
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(17, 26, 40, 0.55) 0%, rgba(17, 26, 40, 0.18) 34%, rgba(17, 26, 40, 0) 52%)',
        desktop: 'linear-gradient(180deg, rgba(17, 26, 40, 0.62) 0%, rgba(17, 26, 40, 0.28) 32%, rgba(17, 26, 40, 0) 55%)',
      },
      bgImage: {
        src: '/apt/namseong-hernity/hero.webp',
        alt: '남성역 헤르니티 투시도',
      },
      bgImageMobile: {
        src: '/apt/namseong-hernity/hero-m.webp',
        alt: '남성역 헤르니티 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
        brand: '7호선 남성역 1,210세대 대단지',
        lines: [{ light: '강남생활권 ', strong: '랜드마크', dots: 0 }],
        name: '남성역 헤르니티',
        badge: '남성역 도보 4분 · 최고 37층 · 선착순 모집중',
        badgeBox: true,
        ctaBadge: {
          ringText: 'HERNITY · VISIT RESERVATION · ',
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '남성역 헤르니티', textLight: ' 선착순 조합원 모집중' },
          { badge: '가격', textStrong: '59㎡ 7억대 · 84㎡ 8억대', textLight: ' · 106㎡ 10억대' },
          { badge: '혜택', textStrong: '발코니 확장 · 가전 풀옵션', textLight: ' 무상 제공' },
        ],
        announceBg: '#1d2b3f',
        bubbleText: '방문예약상담',
        dotColor: '#a8895a',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 사업개요 — 참고 홈페이지 사업개요
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/namseong-hernity/overview-photo.webp',
        alt: '남성역 헤르니티 조감도',
      },
      notice: '※ 상기 사업개요의 계획상 수치는 인·허가 과정에서 변경될 수 있습니다.',
      specItems: [
        { label: '단지명', value: '남성역 헤르니티' },
        { label: '대지위치', value: '서울특별시 동작구 솔밭로 98' },
        { label: '건축규모', value: '지하 4층 ~ 지상 최고 37층, 7개 동' },
        { label: '세대수', value: '총 1,210세대' },
        { label: '주택형', value: ['59㎡ · 84㎡ · 106㎡', '(59A 502세대 · 84A 198세대 · 106A 42세대 등)'] },
        { label: '타입별 가격대', value: '59㎡ 7억대 · 84㎡ 8억대 · 106㎡ 10억대' },
        { label: '사업 진행', value: ['지구단위계획 완료(2024년 12월)', '교통영향평가 완료(2025년 12월)'] },
        { label: '대지/연면적', value: '31,856.80㎡ / 199,162.94㎡' },
        { label: '주차대수', value: '1,616대 (세대당 약 1.34대)' },
      ],
    },

    // 위치안내 — 광역 조감도(역 표시) + 번호 항목 4개(참고 홈페이지 FAST TRAFFIC / SMART EDU / CONVENIENT LIFE / REFRESHING NATURE)
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'HERNITY LOCATION',
        titlePlain: '강남은 가깝게,',
        titleAccent: '자연은 완벽하게',
        desc: '7호선 남성역 초역세권에 이수역 4·7호선 더블 역세권, 서리풀터널로 서초·강남까지 빠르게 연결되는 준강남 입지',
        mapImage: {
          src: '/apt/namseong-hernity/location-map2.webp',
          alt: '남성역 헤르니티 위치도 — 7호선 남성역·이수역·사당역·내방역, 까치산공원, 행림초, 국립서울현충원, 서리풀터널, 남부순환로, GTX-D(예정), 서부선(예정), 사당·이수 지구단위계획구역',
        },
        mapCaption: '지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        items: [
          { num: '01', category: '교통', title: '7호선 남성역 초역세권', desc: '남성역 도보 4분, 이수역 4·7호선 더블 역세권, 서리풀터널로 서초 직통' },
          { num: '02', category: '교육', title: '행림초 도보 통학', desc: '도보 3분 행림초(배정 예상)·병설유치원, 사당중·동작고 인접, 중앙대·숭실대·총신대' },
          { num: '03', category: '생활', title: '이수~사당 생활권', desc: '이수역 이마트·메가박스 등 이수역~사당역 상권과 단지 내 근린생활시설' },
          { num: '04', category: '자연', title: '까치산공원 공세권', desc: '까치산공원 바로 앞, 국립서울현충원 인접, 반포한강공원·관악산 차량 10분대' },
        ],
        sourceNote: '※ 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 배정 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 투시도 + 오른쪽 카피(참고 홈페이지 메인 카피)
    premiumIntro: {
      split: true,
      eyebrow: 'HERNITY',
      titleLine1: '자연과 도심의 완벽한 조화',
      paragraphs: [
        ['7호선 남성역 1,210세대 대단지,', '그 중심에 당신을 초대합니다'],
        ['일상의 여유에 삶의 품격을 더하는', '강남생활권 핵심입지의 새로운 랜드마크'],
      ],
      bgImage: {
        src: '/apt/namseong-hernity/premium-split.webp',
        alt: '남성역 헤르니티 투시도',
      },
    },

    // 프리미엄 — 참고 홈페이지 '헤르니티가 선보이는 프리미엄 6'(cardStyle 'zigzag')
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'HERNITY',
      titlePlain: '헤르니티가 선보이는 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(135deg, #4a6383 0%, #3c5370 55%, #2c3f57 100%)',
        head: '#e8dcc4',
        accentOdd: '#e8dcc4',
        accentEven: '#d4c09a',
        line: '#5a6f8a',
      },
      cards: [
        premium('01', '남성역·이수역·사당역 주변 광역 조감도', '서울 전역을 잇는 교통망', ['도보 4분 남성역 초역세권에 서리풀터널·강남순환도시고속도로,', 'GTX-D 노선 사업·사당복합환승센터 조성 추진']),
        premium('02', '단지 옆 녹지 조감도', '까치산공원 공세권', ['까치산공원 바로 앞, 총 144만㎡ 국립서울현충원 인접,', '반포한강공원·관악산까지 차량 10분대']),
        premium('03', '단지 내 상가 투시도', '풍부한 생활 인프라', ['약 1,898평 단지 내 근린생활시설과 이수역 이마트·메가박스,', '사당·서초·강남 생활권을 가깝게']),
        premium('04', '드롭존·맘스테이션 투시도', '안심 교육 환경', ['도보 3분 행림초(배정 예상), 사당중·동작고 인접,', '드롭존·맘스테이션으로 안전한 등하원']),
        premium('05', '남성역 헤르니티 조감도', '1,210세대 대단지', ['최고 37층, 남향 위주 배치와 넓은 통경축,', '메인 광장과 공공 보행 통로']),
        premium('06', '메인광장·어린이놀이터 투시도', '품격 있는 커뮤니티', ['피트니스·GX룸·골프연습장·사우나·카페테리아,', '작은 도서관·독서실·어린이집·돌봄센터·시니어존']),
      ],
    },

    // 단지안내 — 사용자 제공 단지배치도 + CG(조감도·투시도·광역 조감도) + 2차 제공 특화 CG(메인광장·보행통로·드롭존·상가)를 원형 썸네일 탭으로
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
          ['complex-siteplan', 1600, 1133, '남성역 헤르니티 단지배치도 — 101~107동, 중앙광장, 어린이놀이터, 주민운동시설, 작은도서관, 카페테리아, 어린이집, 근린생활시설', '단지배치도'],
        ]),
        complexTab('조감도·투시도', 'cg', [
          ['complex-bird', 1600, 1133, '남성역 헤르니티 조감도', '조감도'],
          ['complex-street', 1600, 1133, '남성역 헤르니티 투시도', '투시도'],
          ['complex-aerial2', 1600, 800, '남성역 헤르니티 광역 조감도 — 한강·남산 방향', '광역 조감도'],
          ['location-map', 1600, 800, '남성역 헤르니티 광역 조감도 — 남성역·이수역·사당역 주변', '광역 조감도 2'],
        ]),
        complexTab('단지 특화', 'special', [
          ['complex-plaza', 1600, 1010, '메인광장 투시도 — 수경시설·데크 광장과 어린이놀이터', '메인광장'],
          ['complex-walk', 1600, 1010, '공공 보행통로 투시도', '보행통로'],
          ['complex-drop', 1600, 1010, '드롭존·맘스테이션 투시도 — 차량 동선과 보행로를 분리한 안전한 등하원', '드롭존'],
          ['complex-retail', 1600, 1010, '단지 내 상가(근린생활시설) 투시도', '상가'],
        ]),
        complexTab('커뮤니티', 'community', [
          ['complex-community', 1300, 2974, '프리미엄 커뮤니티 — 피트니스센터 640.54㎡·골프연습장 572.20㎡(GX룸·스트레칭룸·스크린골프·사우나), 어린이집 400.74㎡·다함께 돌봄센터 69.38㎡, 경로당 350.83㎡·작은도서관 164.79㎡'],
        ]),
        complexTab('인테리어', 'interior', [
          ['complex-interior', 1200, 3580, '인테리어 이미지 — 거실, 주방, 침실1, 침실2, 서재, 화장실, 드레스룸'],
        ]),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다. 계획안 이미지는 확정된 계획이 아닙니다.',
    },

    // 세대안내 — 참고 페이지(bunyangtop) 타입별 3D 평면(확장형). 84B·84C 평면은 자료가 없어 제외
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '선호도 높은 59·84·106타입으로 구성된 총 1,210세대 — 머물수록 깊어지는 일상의 품격',
      tabColumns: 3,
      tabColumnsMobile: 3,
      zoomLightbox: true,
      tabs: [
        { label: '59A', image: { src: '/apt/namseong-hernity/unit-59a.webp', alt: '59A 타입(59㎡, 25평형 확장형) 평면 — 총 1,210세대 중 502세대', width: 1100, height: 714 } },
        { label: '84A', image: { src: '/apt/namseong-hernity/unit-84a.webp', alt: '84A 타입(84㎡, 36평형 확장형) 평면 — 총 1,210세대 중 198세대', width: 1100, height: 719 } },
        { label: '106A', image: { src: '/apt/namseong-hernity/unit-106a.webp', alt: '106A 타입(106㎡, 45평형 확장형) 평면 — 총 1,210세대 중 42세대', width: 1100, height: 741 } },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '남성역 헤르니티',
      titleLine2: '방문예약상담',
      desc: '원활한 관람을 위해 홍보관은 방문예약제로 운영됩니다. 간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
      serviceOptions: ['홍보관 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 홍보관 방문예약 접수 및 상담 일정 조율 - 사업 일정, 조합원 모집 안내, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 홍보관 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/namseong-hernity/logo-white.png',
        alt: '남성역 헤르니티',
        width: 1252,
        height: 308,
      },
      logoAlign: 'center',
      logoWidth: 170,
      highlightText: '7호선 남성역 1,210세대 대단지\n남성역 헤르니티',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '현장', value: '서울특별시 동작구 솔밭로 98' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 광고는 「주택법 시행규칙」 제11조의5(조합원 모집 광고 등에 관한 준수사항)에 의거한 지역주택조합의 조합원 모집을 위한 광고입니다.',
        '※ 본 사이트에 사용된 CG 및 일러스트, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있으며, 계획안 이미지는 확정된 계획이 아닙니다.',
        '※ 본 자료에 표현된 현황, 개발계획, 예정사항 등은 관계기관의 사정 및 인·허가 과정에 따라 지연, 변경 또는 취소될 수 있습니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 홍보관 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1522-6440',
      csHours: 'AM 10:00 ~ PM 18:00',
    },
  },
}

// 프리미엄 카드 한 장 — PC 1280×690 / 모바일 860×600(사용자 제공 CG 크롭)
function premium(num, imgAlt, title, desc) {
  return {
    num,
    image: { src: `/apt/namseong-hernity/premium-${num}.webp`, alt: imgAlt, width: 640, height: 345 },
    imageMobile: { src: `/apt/namseong-hernity/premium-${num}-m.webp`, alt: imgAlt, width: 430, height: 300 },
    title,
    desc,
  }
}

// 단지안내 탭 한 칸(이미지 여러 장이면 블록 버튼 생김) — [파일명, 폭, 높이, alt, 블록 버튼 이름]
function complexTab(label, thumb, images) {
  return {
    label,
    thumb: `/apt/namseong-hernity/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: images.map(([file, width, height, alt, blockLabel]) => ({
      label: blockLabel ?? 'HERNITY',
      image: { src: `/apt/namseong-hernity/${file}.webp`, alt, width, height },
    })),
  }
}

export default config
