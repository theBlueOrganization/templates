// 검단 센트레빌 에듀시티 — 인천 서구 당하동 검단지구 AB8블록. 시공 동부건설(센트레빌).
// 지하 2층~지상 25층 17개동(1601~1617동), 전용 74·84·101·120㎡ 총 1,534세대. 분양가 상한제 적용단지.
// 출처: 분양 홍보 페이지(https://showhouse.iwinv.net/0226/) 이미지 — 분양조건(이 조건 지금만 가능)·체크포인트·위치도·방문 전 체크리스트,
//   PREMIUM 5, 커뮤니티(센트웰), 단지배치도·마스터플랜·조경·동호수배치, 평면(84A·84B·101A·101B·101C·120P)을 받아 크롭/webp 변환
//   (public/apt/geomdan-centreville-educity/). 74㎡A·B 평면은 원본 페이지에 없어 세대안내에서 제외.
//   히어로·OG·개요·프리미엄02/05는 사용자 제공 고화질 원본(정면 투시도·조감도·펫스쿨 조경, 2026-11-09)으로 제작. 로고는 원본 홍보물의 센트레빌 로고를 투명 배경으로 다시 그림(logo-white/color.png, 1200×320).
// 대표번호 1866-1040, 상담 접수 알림 010-5178-0565 — 2026-11-09 사용자 전달값.
const config = {
  slug: 'geomdan-centreville-educity',
  // 검단센트레빌에듀시티.addupapt.kr → /apt/geomdan-centreville-educity (middleware.js)
  subdomain: '검단센트레빌에듀시티',
  projectName: '검단 센트레빌 에듀시티',
  shortName: '검단 센트레빌 에듀시티',
  telNumber: '1866-1040',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/geomdan-centreville-educity/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01051780565'],
  sheetId: '',
  sheetTab: '검단센트레빌에듀시티',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 사용자 제공 시안(Development Business, 2026-11-09) 톤 — 딥네이비(#0b1a4a) + 스틸블루(#2f5584) + 라이트 스틸블루(#5b7ca6). 섹션 배치는 app/apt/[slug]/pageThemes.css의 'centreville' 프리셋
  colorTheme: {
    navy: '#2f5584',
    ink: '#0b1a4a',
    cream: '#eef2f7',
    gold: '#5b7ca6',
    visitBtnBg: '#5b7ca6',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'centreville',

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
        src: '/apt/geomdan-centreville-educity/logo-white.png',
        alt: '검단 센트레빌 에듀시티',
        width: 1200,
        height: 320,
      },
      logoSize: { base: 120, lg: 140, xl: 150 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1866-1040',
      transparentDark: false,
      logoDark: {
        src: '/apt/geomdan-centreville-educity/logo-color.png',
        alt: '검단 센트레빌 에듀시티',
        width: 1200,
        height: 320,
      },
    },

    // 진입 팝업 — 원본 페이지 팝업(검단신도시 1,534세대 대단지 · 검단 마지막 5억대~ · 계약금 500만원(1차)) → 닫으면 방문예약 폼
    popup: {
      enabled: true,
      order: 'imageFirst',
      openDelayMs: 700,
      closeIcon: true,
      fitViewport: true,
      maxWidth: 380,
      images: [
        {
          src: '/apt/geomdan-centreville-educity/popup-1.webp',
          alt: '검단신도시 1,534세대 대단지, 검단 마지막 5억대~, 계약금 500만원(1차), 유초중고 학세권',
          width: 518,
          height: 858,
        },
      ],
      visitForm: {
        enabled: true,
        accentColor: '#2f5584',
        title: '방문예약상담',
        desc: '상담 가능시간 10:00~18:00 (담당자와 조율가능)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'CENTREVILLE',
      phoneLabel: '분양문의',
      phone: '1866-1040',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#0b1a4a',
      ctaTargetId: 'vip-reservation',
      deskText: '검단 센트레빌 에듀시티\n분양 상담을 도와드립니다.',
      address: '인천광역시 서구 당하동 검단지구 AB8블록',
      tagline: '검단신도시 1,534세대 브랜드 대단지',
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

    // 히어로 — 단지 투시도(하단) + 남색 하늘 위 고정 문구
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(11, 26, 74, 0.35) 0%, rgba(11, 26, 74, 0) 50%)',
        desktop: 'linear-gradient(180deg, rgba(11, 26, 74, 0.3) 0%, rgba(11, 26, 74, 0) 45%)',
      },
      bgImage: {
        src: '/apt/geomdan-centreville-educity/hero-1.webp',
        alt: '검단 센트레빌 에듀시티 투시도',
      },
      bgImageMobile: {
        src: '/apt/geomdan-centreville-educity/hero-1-m.webp',
        alt: '검단 센트레빌 에듀시티 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
        brand: '검단신도시 1,534세대 대단지',
        lines: [{ light: '검단 마지막 ', strong: '5억대~', dots: 0 }],
        name: '검단 센트레빌 에듀시티',
        badge: '1차 계약금 500만원 · 입주시까지 계약금 5%',
        badgeBox: true,
        ctaBadge: {
          ringText: 'CENTREVILLE · VISIT RESERVATION · ',
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '검단 센트레빌 에듀시티', textLight: ' 선착순 동·호 지정 계약 중' },
        ],
        announceBg: '#0b1a4a',
        bubbleText: '방문예약상담',
        dotColor: '#5b7ca6',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 히어로 바로 아래 홍보 이미지 — 사용자가 캡처로 지정한 원본 구간(2026-11-09): 분양 조건 → 체크포인트 → 방문 전 체크리스트
    promoImages: [
      {
        id: 'promo-conditions',
        src: '/apt/geomdan-centreville-educity/promo-conditions.webp',
        alt: '이 조건, 지금만 가능합니다 — 1차 계약금 500만원, 입주시까지 계약금 5%, 인천 마지막 5억원대. 수도권 내집마련 마지막 최적의 기회: 분양가 상한제 적용, 10·15 대책 수혜 단지, 서울을 잇는 편리한 교통, 유·초·중·고 쿼드러플 학세권, 1,534세대 초대형 브랜드 타운, 검단 최대규모 커뮤니티',
        width: 1453,
        height: 1843,
      },
      {
        id: 'promo-checkpoint',
        src: '/apt/geomdan-centreville-educity/promo-checkpoint.webp',
        alt: '계약 시 꼭 확인해야 할 체크포인트 — CHECK POINT 1 입주시까지 계약금 5%, CHECK POINT 2 계약금(1차) 500만원',
        width: 1200,
        height: 1894,
      },
      {
        id: 'promo-checklist',
        src: '/apt/geomdan-centreville-educity/promo-checklist.webp',
        alt: '검단 센트레빌 에듀시티 방문 전 체크 리스트 — 입주시까지 계약금 5% 끝, 검단신도시 마지막 5억대~, 단지앞 유·초·중·고 안심통학 학세권, 단지내 초대형 중앙광장. 검단입성, 지금이 마지막 기회',
        width: 1504,
        height: 1038,
      },
    ],

    // 사업개요 — 언론 보도 기준(지하 2층~지상 25층 17개동, 1,534세대) + 원본 페이지 타입별 세대수
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/geomdan-centreville-educity/overview-photo.webp',
        alt: '검단 센트레빌 에듀시티 단지 조감도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '단지명', value: '검단 센트레빌 에듀시티' },
        { label: '대지위치', value: ['인천검단지구 AB8블록', '(인천광역시 서구 당하동 일원)'] },
        { label: '건축규모', value: '지하 2층 ~ 지상 25층, 17개동' },
        { label: '세대수', value: '전용 74·84·101·120㎡ 총 1,534세대' },
        { label: '타입별 세대수', value: ['74㎡ 220세대 · 84㎡ 840세대', '101㎡ 466세대 · 120㎡(P) 8세대'] },
        { label: '시공', value: '동부건설(주)' },
      ],
    },

    // 위치안내 — 원본 LOCATION 위치도(지도 부분만) + 번호 항목 4개
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'CENTREVILLE LOCATION',
        titlePlain: '인천 검단지구에서',
        titleAccent: '아이 키우기 좋은 최적의 학세권 프리미엄',
        desc: '단지 앞 유·초·중·고 안심통학 학세권, 인천1호선 아라역과 GTX-D(예정)로 서울을 잇는 편리한 교통',
        mapImage: { src: '/apt/geomdan-centreville-educity/location-map.webp', alt: '검단 센트레빌 에듀시티 광역 위치도 — 인천1호선 아라역, GTX-D(예정), 인천아라초·중·고, 인천아라꿈유치원, 아라 노을공원 등' },
        mapCaption: '노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        items: [
          { num: '01', category: '교육', title: '유·초·중·고 쿼드러플 학세권', desc: '단지 바로 앞 인천아라꿈유치원·인천아라초·인천아라중·인천아라고, 도보통학 및 안심등교 가능' },
          { num: '02', category: '교통', title: '서울을 잇는 편리한 교통', desc: '인천1호선 아라역, GTX-D(예정)·검단IC(예정) 등 서울 생활권까지 10분대' },
          { num: '03', category: '자연', title: '365m 센트레 그랜드 파크', desc: '365m 대형 중앙광장에서 외부공원 연결, 20개 테마 조경시설' },
          { num: '04', category: '가치', title: '분양가 상한제 적용', desc: '주변 시세 대비 합리적인 분양가, 1,534세대 초대형 브랜드 타운' },
        ],
        sourceNote: '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 이미지컷 + 오른쪽 카피(원본 '처음 만나는 센트레 그랜드 파크')
    premiumIntro: {
      split: true,
      eyebrow: 'CENTRE GRAND PARK',
      titleLine1: '처음 만나는 센트레 그랜드 파크',
      paragraphs: [
        ['석양과 수경을 누리며 휴식을 만나는', '고품격 티하우스 라운지'],
        ['365m 대형 중앙광장과 2,000m 산책로를 따라', '20개 테마공원이 조성되는 하이엔드 조경'],
      ],
      imageBadge: '이미지컷',
      bgImage: {
        src: '/apt/geomdan-centreville-educity/premium-split.webp',
        alt: '센트레 그랜드 파크 티하우스 라운지 이미지컷',
      },
    },

    // 프리미엄 — 원본 'PREMIUM 5'(cardStyle 'zigzag')
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'CENTREVILLE',
      titlePlain: '검단 센트레빌 에듀시티 ',
      titleAccent: 'PREMIUM',
      titleNumber: '5',
      colors: {
        bg: 'linear-gradient(135deg, #3d6491 0%, #2f5584 55%, #223f66 100%)',
        head: '#d6e3f3',
        accentOdd: '#d6e3f3',
        accentEven: '#b9cde6',
        line: '#4f709b',
      },
      cards: [
        {
          num: '01',
          image: { src: '/apt/geomdan-centreville-educity/premium-01.webp', alt: '공부하는 아이들 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/geomdan-centreville-educity/premium-01-m.webp', alt: '공부하는 아이들 이미지컷', width: 430, height: 300 },
          title: '유초중고 초학세권',
          desc: ['유치원과 초·중·고교가 가까워', '도보 통학이 가능한 최적의 학세권'],
        },
        {
          num: '02',
          image: { src: '/apt/geomdan-centreville-educity/premium-02.webp', alt: '펫스쿨 테마조경 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/geomdan-centreville-educity/premium-02-m.webp', alt: '펫스쿨 테마조경 이미지컷', width: 430, height: 300 },
          title: '365M 센트레 그랜드 파크',
          desc: ['365m 대형 중앙광장에서 외부공원 연결', '20개 테마 조경시설'],
        },
        {
          num: '03',
          image: { src: '/apt/geomdan-centreville-educity/premium-03.webp', alt: '스포웰 피트니스 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/geomdan-centreville-educity/premium-03-m.webp', alt: '스포웰 피트니스 이미지컷', width: 430, height: 300 },
          title: '센트웰 프레스티지 커뮤니티',
          desc: ['스포웰 / 컬트웰 / 에듀웰 / 키즈웰로 구성된', '센트웰 프레스티지 커뮤니티'],
        },
        {
          num: '04',
          image: { src: '/apt/geomdan-centreville-educity/premium-04.webp', alt: '고속열차 이미지컷', width: 640, height: 345 },
          imageMobile: { src: '/apt/geomdan-centreville-educity/premium-04-m.webp', alt: '고속열차 이미지컷', width: 430, height: 300 },
          title: '광역교통 개발호재',
          desc: ['아라역 개통과 GTX-D(예정) 등', '미래가치 상승 기대'],
        },
        {
          num: '05',
          image: { src: '/apt/geomdan-centreville-educity/premium-05.webp', alt: '검단 센트레빌 에듀시티 조감도', width: 640, height: 345 },
          imageMobile: { src: '/apt/geomdan-centreville-educity/premium-05-m.webp', alt: '검단 센트레빌 에듀시티 조감도', width: 430, height: 300 },
          title: '브랜드 대단지',
          desc: ['인천 검단의 자부심이 되는', '1,534세대 센트레빌 브랜드 대단지'],
        },
      ],
    },

    // 단지안내 — 원본 단지배치도/마스터플랜/조경/동호수배치/커뮤니티 이미지를 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        complexTab('단지배치도', 'siteplan', 'complex-siteplan', 990, 675, '검단 센트레빌 에듀시티 단지배치도(1601~1617동) — 365m 대형 중앙광장과 2,000m 산책로, 총 1,534세대'),
        complexTab('마스터플랜', 'masterplan', 'complex-masterplan', 1336, 830, '검단 내 최대 규모를 자랑하는 센트레 그랜드 파크 — GRAND 365(365M 대형중앙광장), PROMENADE 2000(2,000M 산책로를 따라 조성되는 20개의 테마 정원)'),
        complexTab('조경', 'landscape', 'complex-landscape', 1200, 1542, '조경 — 시그니처 게이트, 그랜드 365(365m 대형 중앙광장), 프롬나드 2000(2,000m 산책로를 따라 조성되는 20개의 테마정원)'),
        complexTab('동·호수배치', 'dong', 'complex-dong', 1080, 3357, '입주자 중심의 차별화된 동·호수 배치 — 74㎡A 149세대, 74㎡B 71세대, 84㎡A 579세대, 84㎡B 261세대, 101㎡A 275세대, 101㎡B 66세대, 101㎡C 125세대, 120㎡(P) 8세대'),
        complexTab('커뮤니티', 'community', 'complex-community', 1300, 3380, '센트웰 프레스티지 커뮤니티 — 스포웰(피트니스·스크린골프·GX룸·사우나), 에듀&키즈웰(독서실·작은도서관·키즈 플레이 클럽·어린이집), 컬트웰(티하우스·아너스라운지·게스트하우스)'),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 원본 페이지 평면(84A·84B·101A·101B·101C·120P). 면적은 각 평면 이미지의 면적표 기준
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'CENTREVILLE',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      tabbedGroups: true,
      subtitleLines: [
        '실속형 74㎡부터',
        '펜트하우스 120㎡까지',
        '다양한 선호도에 맞춘',
        '총 1,534세대',
      ],
      groups: [
        {
          area: '84㎡',
          types: [
            unit('A', 579, 'unit-84a', 858, 662, ['84.9714', '25.2578', '110.2292', '56.1987', '166.4279'], '84㎡A'),
            unit('B', 261, 'unit-84b', 866, 653, ['84.9964', '26.0964', '111.0928', '56.2154', '167.3082'], '84㎡B'),
          ],
        },
        {
          area: '101㎡',
          types: [
            unit('A', 275, 'unit-101a', 858, 663, ['101.7961', '29.4147', '131.2108', '67.3263', '198.5371'], '101㎡A'),
            unit('B', 66, 'unit-101b', 866, 672, ['101.8671', '29.4641', '131.3312', '67.3734', '198.7046'], '101㎡B'),
            unit('C', 125, 'unit-101c', 1300, 1046, ['101.9837', '29.8851', '131.8688', '67.4506', '199.3194'], '101㎡C'),
          ],
        },
        {
          area: '120㎡',
          types: [
            unit('P', 8, 'unit-120p', 865, 672, ['120.5868', '38.7105', '159.2973', '79.7545', '239.0518'], '120㎡P'),
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '검단 센트레빌 에듀시티',
      titleLine2: '방문예약상담',
      desc: '원활한 관람을 위해 모델하우스 방문은 방문예약제로 운영됩니다. 간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
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
        src: '/apt/geomdan-centreville-educity/logo-white.png',
        alt: '검단 센트레빌 에듀시티',
        width: 1200,
        height: 320,
      },
      logoAlign: 'center',
      logoWidth: 170,
      highlightText: '검단신도시 1,534세대 브랜드 대단지\n검단 센트레빌 에듀시티',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시공', value: '동부건설(주)' },
        { label: '현장', value: '인천광역시 서구 당하동 검단지구 AB8블록' },
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
      csPhone: '1866-1040',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

// 단지안내 탭 한 칸(이미지 1장)
function complexTab(label, thumb, file, width, height, alt) {
  return {
    label,
    thumb: `/apt/geomdan-centreville-educity/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: [
      {
        label: 'CENTREVILLE',
        image: { src: `/apt/geomdan-centreville-educity/${file}.webp`, alt, width, height },
      },
    ],
  }
}

// 세대안내 타입 한 칸 — 평면은 원본 평면 이미지에서 오른쪽 평면 박스만 크롭
function unit(letter, count, file, width, height, [exclusive, common, supply, otherCommon, contract], name) {
  return {
    letter,
    countText: `${count}세대`,
    image: {
      src: `/apt/geomdan-centreville-educity/${file}.webp`,
      alt: `${name} 타입 평면도(확장 기본형)`,
      width,
      height,
    },
    specs: { exclusive, common, supply, otherCommon, contract },
  }
}

export default config
