// 여월 중앙하이츠 아르비채 — 경기도 부천시 오정구 여월동 8-9(현장 및 구경하는집). 지하 2층~지상 13층 2개 동(101·102동), 총 102세대(59·63·84·108㎡).
// 여월동 광남 복지 가로주택정비사업(시행 여월동광남복지가로주택정비사업조합, 시공 CA이앤씨㈜ — 브랜드 중앙하이츠). 선시공 후분양, 즉시입주.
// 출처: 2026-11-16 사용자 제공 「여울 중앙하이츠 아르비체 리플렛 1105.pdf」(4가지 혜택·무상제공 옵션표·배치도·동호수·평면·입지 문구)
//   + 「여월중앙하이츠 아르비채 2차 교육자료.pdf」(사업개요·분양면적·세부입지·High PREMIUM 6·스마트 시스템, 투시도·조감도 CG)
//   + 참고 페이지(https://sites.google.com/view/jungang-heights — '25평 4억원대~ 즉시입주' 문구만, 번호 1644-5863은 사용 안 함).
// 이미지: 위 PDF를 200dpi로 렌더 후 크롭/webp 변환(public/apt/yeowol-jungang-heights-arbiche/). 교육자료의 내부용 문구
//   (주거환경 '주거선호도 낮음', '상품교육시 확인' 각주 등)는 크롭에서 제외. 로고는 이미지가 없어 '중앙하이츠 + 아르비채' 텍스트 워드마크로 제작.
// 대표번호 1877-3569, 상담 접수 알림 010-2918-3185 — 2026-11-16 사용자 전달값(리플렛 번호 1555-3734 아님).
const config = {
  slug: 'yeowol-jungang-heights-arbiche',
  // 여월중앙하이츠아르비채.addupapt.kr → /apt/yeowol-jungang-heights-arbiche (middleware.js)
  subdomain: '여월중앙하이츠아르비채',
  projectName: '여월 중앙하이츠 아르비채',
  shortName: '여월 중앙하이츠 아르비채',
  telNumber: '1877-3569',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/yeowol-jungang-heights-arbiche/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01029183185'],
  sheetId: '',
  sheetTab: '여월중앙하이츠아르비채',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 리플렛 톤 — 리플렛 남색 #002e6f · 딥네이비 #00245a · 아르비채 골드 #a08559. 섹션 배치는 pageThemes.css의 'arbiche' 프리셋
  colorTheme: {
    navy: '#002e6f',
    ink: '#00245a',
    cream: '#eceef1',
    gold: '#a08559',
    visitBtnBg: '#a08559',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'arbiche',

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
        src: '/apt/yeowol-jungang-heights-arbiche/logo-white.png',
        alt: '여월 중앙하이츠 아르비채',
        width: 1252,
        height: 273,
      },
      logoSize: { base: 132, lg: 156, xl: 168 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1877-3569',
      mobileQuick: { phoneDisplay: '1877.3569' },
      transparentDark: false,
      logoDark: {
        src: '/apt/yeowol-jungang-heights-arbiche/logo-navy.png',
        alt: '여월 중앙하이츠 아르비채',
        width: 1252,
        height: 273,
      },
    },

    // 진입 팝업 — 팝업 이미지가 없어 방문예약 폼 팝업만
    popup: {
      enabled: false,
      visitForm: {
        enabled: true,
        accentColor: '#002e6f',
        title: '방문예약상담',
        desc: '현장 및 구경하는집은 예약제로 운영됩니다 (상담 10:00~18:00, 주말 동일)',
        checks: ['모델하우스예약', '원하는시간 전화예약'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'ARBICHE',
      phoneLabel: '대표문의',
      phone: '1877-3569',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#00245a',
      ctaTargetId: 'vip-reservation',
      deskText: '여월 중앙하이츠 아르비채\n상담을 도와드립니다.',
      address: '경기도 부천시 오정구 여월동 8-9',
      tagline: '서해선 원종역 · 즉시입주 신축',
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

    // 히어로 — 교육자료 투시도(PC 전체 / 모바일 세로 크롭). 문구는 리플렛 메인 카피 '서울을 잇는, 여월의 가치!'
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      // 모바일 배경 하단을 안내 바(약 36px) 위에서 끝내 건물 아랫부분이 가리지 않게
      mobileBgBottomInset: 36,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(10, 22, 56, 0.6) 0%, rgba(10, 22, 56, 0.22) 34%, rgba(10, 22, 56, 0) 52%)',
        desktop: 'linear-gradient(180deg, rgba(10, 22, 56, 0.62) 0%, rgba(10, 22, 56, 0.28) 32%, rgba(10, 22, 56, 0) 55%)',
      },
      bgImage: {
        src: '/apt/yeowol-jungang-heights-arbiche/hero.webp',
        alt: '여월 중앙하이츠 아르비채 투시도',
      },
      bgImageMobile: {
        src: '/apt/yeowol-jungang-heights-arbiche/hero-mobile.webp',
        alt: '여월 중앙하이츠 아르비채 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
        brand: '서해선 원종역 · 총 102세대 즉시입주',
        lines: [{ light: '서울을 잇는, ', strong: '여월의 가치', dots: 0 }],
        name: '여월 중앙하이츠 아르비채',
        badge: '계약금 5% · 14가지 유상옵션 무상제공',
        badgeBox: true,
        ctaBadge: {
          ringText: 'ARBICHE · VISIT RESERVATION · ',
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '여월 중앙하이츠 아르비채', textLight: ' 즉시입주 가능 신축' },
          { badge: '혜택', textStrong: '계약금 5%로 입주시까지', textLight: ' · 4년 전 수준 분양가' },
          { badge: '옵션', textStrong: '14가지 유상옵션(2,960만원 상당)', textLight: ' 무상제공' },
        ],
        announceBg: '#00245a',
        bubbleText: '방문예약상담',
        dotColor: '#a08559',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 사업개요 — 교육자료 사업개요·분양면적
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/yeowol-jungang-heights-arbiche/overview-photo.webp',
        alt: '여월 중앙하이츠 아르비채 조감도',
      },
      notice: '※ 상기 사업개요의 수치는 인·허가 과정 및 실제 시공 시 일부 변경될 수 있습니다.',
      specItems: [
        { label: '단지명', value: '여월 중앙하이츠 아르비채' },
        { label: '사업명', value: '여월동 광남 복지 가로주택정비사업' },
        { label: '대지위치', value: ['경기도 부천시 오정구', '여월동 8-9번지 외 4필지'] },
        { label: '건축규모', value: '지하 2층 ~ 지상 13층, 2개 동' },
        { label: '세대수', value: '총 102세대' },
        { label: '주택형', value: ['59㎡ · 63㎡ · 84㎡ · 108㎡', '(59㎡ 16세대 · 63㎡ 36세대', '84㎡ 48세대 · 108㎡ 2세대)'] },
        { label: '대지/건축면적', value: '4,014.90㎡ / 1,519.01㎡' },
        { label: '건폐율/용적률', value: '37.83% / 249.95%' },
        { label: '주차대수', value: '121대 (세대당 1.19대)' },
        { label: '시행/시공', value: ['여월동광남복지', '가로주택정비사업조합', 'CA이앤씨㈜ (중앙하이츠)'] },
      ],
    },

    // 위치안내 — 리플렛 위치도 + 번호 항목 4개(교육자료 세부입지 · 리플렛 LOCATION PREMIUM)
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'ARBICHE LOCATION',
        titlePlain: '서해선을 따라 중심으로,',
        titleAccent: '더 크고 편하게',
        desc: '서해선 원종역과 부천종합운동장역 더블 생활권,\n홈플러스·원종종합시장과 여월초·여월중을\n도보로 누리는 여월동 중심 입지',
        mapImage: {
          src: '/apt/yeowol-jungang-heights-arbiche/location-map.webp',
          alt: '여월 중앙하이츠 아르비채 위치도 — 서해선 원종역, 대장-홍대선(예정), 부천종합운동장역(7호선·GTX-B 예정), 경인고속도로 지하화(예정), S-BRT(예정), 부천대장 공공주택지구, 홈플러스, 부천우리병원, 여월초·여월중·까치울중',
        },
        mapCaption: '지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        // 리플렛 '더 ~한 ~의 중심' 4칸 — 지도 아래 2×2 사진 카드
        listStyle: 'photoCards',
        items: [
          { num: '01', category: '교통', title: '더 빨라질 교통의 중심', desc: '서해선 원종역과 연결되는 대장홍대선(예정),\n부천종합운동장역에서 만나는 GTX-B노선(예정)\n및 서부광역급행철도(예정), S-BRT(예정) 등', image: { src: '/apt/yeowol-jungang-heights-arbiche/location-card-01.webp', alt: '교통 이미지컷(지하철)' } },
          { num: '02', category: '생활', title: '더 풍부한 생활의 중심', desc: '홈플러스, 오정구청, 중앙시장, 대형병원,\n금융기관 등 잘 갖춰진 원도심 생활 인프라와\n가마골 어린이공원, 여월공원, 도당수목원,\n은데미공원 등 쾌적한 자연환경', image: { src: '/apt/yeowol-jungang-heights-arbiche/location-card-02.webp', alt: '생활 이미지컷' } },
          { num: '03', category: '교육', title: '더 우수한 교육의 중심', desc: '단지 인근 여월초, 여월중, 까치울중, 도당고,\n부천북고 등 도보 통학이 가능한 안심학세권에\n꿈여울도서관, 북부도서관 등 남다른 교육환경', image: { src: '/apt/yeowol-jungang-heights-arbiche/location-card-03.webp', alt: '교육 이미지컷' } },
          { num: '04', category: '개발', title: '더 빛나는 개발의 중심', desc: '부천종합운동장 역세권융복합개발 및\n성곡지구개발, 3기 신도시 부천대장지구,\n오정군부대 이전개발 등 다양한 개발호재로\n내일이 더욱 기대되는 미래가치', image: { src: '/apt/yeowol-jungang-heights-arbiche/location-card-04.webp', alt: '도시 이미지컷' } },
        ],
        sourceNote: '※ 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 배정 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 투시도 + 오른쪽 카피(교육자료 상품안내 카피)
    premiumIntro: {
      split: true,
      eyebrow: 'JUNGANG HEIGHTS',
      titleLine1: '새로운 오정구를 앞서 누리는',
      paragraphs: [
        ['하이츠 아르비채 라이프의 시작,', '학군부터 눈부신 비전까지 누리다'],
        ['40년 브랜드 역사를 자랑하는 중앙하이츠가', '여월동에 선보이는 즉시입주 신축 아파트'],
      ],
      bgImage: {
        src: '/apt/yeowol-jungang-heights-arbiche/premium-split.webp',
        alt: '여월 중앙하이츠 아르비채 투시도',
      },
    },

    // 프리미엄 — 교육자료 'High PREMIUM 6'(cardStyle 'zigzag')
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'ARBICHE',
      titlePlain: '여월 중앙하이츠 아르비채 High ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(135deg, #003781 0%, #002e6f 55%, #002763 100%)',
        head: '#e8dcc4',
        accentOdd: '#e8dcc4',
        accentEven: '#d4c09a',
        line: 'rgba(255, 255, 255, 0.2)',
      },
      cards: [
        premium('01', '교육 이미지컷', 'Special EDU ·\n도보로 누리는 교육인프라', ['여월초·여월중·까치울중 등 도보권,', '1km 이내 부천북고 등 우수한 교육환경']),
        premium('02', '교통 이미지컷', 'Transit Convenience ·\n사통팔달 교통망', ['원종역(서해선·대장홍대선 예정) 더블역,', '부천종합운동장역(7호선·GTX-B 예정),', '서부권광역급행철도(예정)·S-BRT 신설 등']),
        premium('03', '생활 이미지컷', 'All-in one ·\n15분 내로 모든 것을', ['홈플러스·중앙시장·우리병원은 물론', '차량 이용 상동·중동 상권까지 15분 내 생활']),
        premium('04', '공원 이미지컷', 'High life ·\n여월 정주여건의 정점', ['춘의산·도당수목원·여월공원 등 힐링 라이프,', '가마골어린이공원·성곡파출소·성곡행정복지센터 등']),
        premium('05', '도시 이미지컷', 'More Vision ·\n오정구의 변화를 앞서', ['부천대장신도시·원종택지지구,', '오정구 군부대 이전부지·성곡도시개발구역 등', '더 기대되는 입지']),
        premium('06', '여월 중앙하이츠 아르비채 투시도', 'High Value ·\n비교불가 상품가치', ['중소형 평형 위주 공급, 에너지절감 시스템,', '층간소음 저감, 지하주차장 자동환기·LED 조명,', '개방형 발코니·테라스(일부 세대)']),
      ],
    },

    // 단지안내 — 리플렛 단지배치도·동호수배치도·무상제공 옵션표 + 교육자료 조감도·투시도·스마트 시스템을 원형 썸네일 탭으로
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
          ['complex-siteplan', 1423, 1223, '여월 중앙하이츠 아르비채 단지배치도 — 101동(84㎡), 102동(59·63·108㎡), 주차장 출입구, 근린생활시설, 지하 1층 운동시설·편의시설·관리사무소', '단지배치도'],
        ]),
        complexTab('동호수배치도', 'dongho', [
          ['complex-dongho', 1423, 824, '여월 중앙하이츠 아르비채 동호수배치도 — 101동 2~13층 84㎡, 102동 2~11층 59·63·108㎡', '동호수배치도'],
        ]),
        complexTab('조감도·투시도', 'cg', [
          ['complex-bird', 1800, 1037, '여월 중앙하이츠 아르비채 조감도 — 부천여월중·초등학교, 북부도서관, 오정 군부대 이전부지, 부천대장·원종 공공주택지구, 경인고속, 성오로', '조감도'],
          ['complex-street', 1800, 966, '여월 중앙하이츠 아르비채 투시도', '투시도'],
        ]),
        complexTab('무상제공 옵션', 'option', [
          ['complex-option', 1473, 1298, '여월동 설치품목(옵션 & 기본) — 발코니 확장, 펜트리+시스템선반, 우물천장, 아트월, 강마루, 아일랜드 식탁, 에어컨 2대, 욕실 비데, 전동건조대, 음식물 탈수기, 터치패드, 홈네트워크 등 합계 29,600,000원(VAT 포함) 무상제공'],
        ]),
        complexTab('스마트 시스템', 'smart', [
          ['complex-smart', 1600, 658, '스마트 시스템 — LED 100% 조명, 전력회생형 승강기, 역류 방지 댐퍼, 세대 내 저소음관 배관, 바닥충간 소음 저감재, 세대 환기 시스템, 대기전력 차단콘센트, 홈네트워크, 지하주차장 자동환기, 고효율 인증 기자재, 엘리베이터 호출, 전기차 충전시스템'],
        ]),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 세부 설계 내용은 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 리플렛 타입별 평면(확장기본형) + 면적표
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '3Bay 판상형 남향 위주 배치,\n맞통풍 구조와 넉넉한 수납공간\n59·63·84·108㎡ 총 102세대',
      tabColumns: 4,
      tabColumnsMobile: 4,
      zoomLightbox: true,
      tabs: [
        { label: '59㎡', image: { src: '/apt/yeowol-jungang-heights-arbiche/unit-59.webp', alt: '59㎡ 타입(16세대) 평면 — 전용 59.99㎡, 공급 77.75㎡, 계약 128.34㎡, 3Bay 판상형 3Room', width: 1510, height: 737 } },
        { label: '63㎡', image: { src: '/apt/yeowol-jungang-heights-arbiche/unit-63.webp', alt: '63㎡ 타입(36세대) 평면 — 전용 63.91㎡, 공급 82.59㎡, 계약 136.49㎡, 3Bay 판상형 3Room', width: 1510, height: 737 } },
        { label: '84㎡', image: { src: '/apt/yeowol-jungang-heights-arbiche/unit-84.webp', alt: '84㎡ 타입(48세대) 평면 — 전용 84.95㎡, 공급 109.12㎡, 계약 180.76㎡, 3Bay 판상형 3Room + 드레스룸', width: 1536, height: 737 } },
        { label: '108㎡', image: { src: '/apt/yeowol-jungang-heights-arbiche/unit-108.webp', alt: '108㎡ 타입(2세대) 평면 — 전용 108.69㎡, 공급 141.65㎡, 계약 233.32㎡', width: 1536, height: 737 } },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '여월 중앙하이츠 아르비채',
      titleLine2: '방문예약상담',
      desc: '원활한 관람을 위해 현장 및 구경하는집은 방문예약제로 운영됩니다. 간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
      serviceOptions: ['모델하우스예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 현장 방문예약 접수 및 상담 일정 조율 - 분양 일정, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 현장 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/yeowol-jungang-heights-arbiche/logo-white.png',
        alt: '여월 중앙하이츠 아르비채',
        width: 1252,
        height: 273,
      },
      logoAlign: 'center',
      logoWidth: 200,
      highlightText: '서울을 잇는, 여월의 가치\n여월 중앙하이츠 아르비채',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '현장 및 구경하는집', value: '경기도 부천시 오정구 여월동 8-9' },
        { label: '시행', value: '여월동광남복지가로주택정비사업조합' },
        { label: '시공', value: 'CA이앤씨 주식회사' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 CG 및 사진, 이미지, 일러스트 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다소 상이할 수 있습니다.',
        '※ 각종 개발계획, 교통시설 및 주변현황, 예정사항은 정부정책 및 관계기관의 사정, 사업주체의 진행 상황에 따라 변경 또는 취소될 수 있습니다.',
        '※ 무상제공 옵션 및 분양조건은 현장 사정에 따라 변경될 수 있으니, 계약 전 반드시 현장에서 확인하시기 바랍니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 현장 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1877-3569',
      csHours: 'AM 10:00 ~ PM 18:00',
    },
  },
}

// 프리미엄 카드 한 장 — PC 1280×720 / 모바일 860×600(01~05 이미지컷, 06 투시도)
function premium(num, imgAlt, title, desc) {
  return {
    num,
    image: { src: `/apt/yeowol-jungang-heights-arbiche/premium-${num}.webp`, alt: imgAlt, width: 640, height: 360 },
    imageMobile: { src: `/apt/yeowol-jungang-heights-arbiche/premium-${num}-m.webp`, alt: imgAlt, width: 430, height: 300 },
    title,
    desc,
  }
}

// 단지안내 탭 한 칸(이미지 여러 장이면 블록 버튼 생김) — [파일명, 폭, 높이, alt, 블록 버튼 이름]
function complexTab(label, thumb, images) {
  return {
    label,
    thumb: `/apt/yeowol-jungang-heights-arbiche/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: images.map(([file, width, height, alt, blockLabel]) => ({
      label: blockLabel ?? 'ARBICHE',
      image: { src: `/apt/yeowol-jungang-heights-arbiche/${file}.webp`, alt, width, height },
    })),
  }
}

export default config
