// 청라 아크원 푸르지오3 (청라아크원푸르지오c.addupapt.kr) — 푸르지오2를 복제한 3차 분양팀 사이트.
// 대표번호·상담 알림(진의원·최용호)·문자 형식은 원본(cheongna-arkone-prugio)과 동일.
// 원본의 인트로·히어로·청라핵심·교통·진입 팝업을 SignatureArkoneHighlights로 가져와 사용하고,
// 사업개요·단지안내·세대안내 섹션은 뺌. 콘텐츠 출처: 공식 사이트 arkone-prugio.com(2026-09-16).
const config = {
  slug: 'cheongna-arkone-prugio-3',
  subdomain: '청라아크원푸르지오c',

  // 문자 제목에 쓰임 — 원본과 같은 형식이 되도록 "3" 없이
  projectName: '청라 아크원 푸르지오',
  metaTitle: '청라 아크원 푸르지오',
  shortName: '청라 아크원 푸르지오',
  telNumber: '1533-6480',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/cheongna-arkone-prugio-3/og.jpg',
  colorTheme: {
    navy: '#004B45',
    ink: '#002521',
    cream: '#F3F0EC',
    gold: '#8B7F71',
    // 방문예약/관심고객 CTA 버튼(하단바·헤더·퀵메뉴·폼 제출) 그라데이션
    visitBtnBg: 'linear-gradient(90deg, #cfea77, #9bd3bd)',
    visitBtnColor: '#073a32',
  },
  webfont: {
    family: "'SUIT', 'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css',
  },
  adminPhones: ['01071901052', '01049851470'],
  // 문자에 "매체+담당자"(예: 현대+진의원) 표기용
  adminPhoneNames: {
    '01071901052': '진의원',
    '01049851470': '최용호',
  },
  // 직접유입일 때의 매체명(utm_source 있으면 그 값 사용)
  smsMediaLabel: '현대',
  sheetId: '',
  sheetTab: '청라아크원푸르지오',
  showUtmInSms: true,

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
      logo: { src: '/apt/cheongna-arkone-prugio-3/logo-white.svg', alt: '청라 아크원 푸르지오', width: 161, height: 26 },
      logoSize: { base: 96, lg: 130, xl: 150 },
      gnb: ['청라핵심', '교통호재', '입지환경', '프리미엄', '관심고객등록'],
      // gnb 라벨과 같은 순서로 이동할 섹션 id (청라핵심 = 첫 랜드마크 스타필드)
      gnbTargetIds: ['starfield', 'network', 'location', 'premium-value', 'vip-reservation'],
      quickCtaLabel: '관심고객등록',
      phone: '1533-6480',
    },

    quickMenu: {
      brand: '청라 아크원 푸르지오',
      phoneLabel: '분양문의',
      phone: '1533-6480',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '청라 아크원 푸르지오\n관심고객등록을 도와드립니다.',
      address: '인천광역시 서구 청라동 86-1번지 일원',
      tagline: 'ABSOLUTE REMARKABLE ONE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'VALUE', sub: '청라핵심', targetId: 'starfield' },
        { num: '03', label: 'TRAFFIC', sub: '교통호재', targetId: 'network' },
        { num: '04', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '05', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '06', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // ↓ 원본(SignatureArkoneImmersive)에서 가져온 인트로·히어로·청라핵심·교통
    arkoneIntro: {
      ariaLabel: '청라의 핵심 인프라와 푸르지오를 소개하는 인트로',
      scenes: [
        { img: '/apt/cheongna-arkone-prugio-3/starfield.webp', label: '01 · CULTURE', name: '스타필드 청라 · 돔구장' },
        { img: '/apt/cheongna-arkone-prugio-3/hospital.webp', label: '02 · MEDICAL', name: '서울아산청라병원 · 의료복합타운' },
        { img: '/apt/cheongna-arkone-prugio-3/hana.webp', label: '03 · BUSINESS', name: '하나금융그룹 · 청라 본사' },
      ],
      copySmall: "CHEONGNA'S NEW AXIS",
      copyLine1: 'Life meets',
      copyLine2: 'the One.',
      symbol: '/apt/cheongna-arkone-prugio-3/prugio-symbol.svg',
      wordmark: '/apt/cheongna-arkone-prugio-3/logo-white.svg',
      tagline: 'ABSOLUTE · REMARKABLE · ONE',
    },

    hero: {
      variant: 'arkone',
      video: '/apt/cheongna-arkone-prugio-3/hero-video.mp4',
      poster: '/apt/cheongna-arkone-prugio-3/hero-bg.webp',
      badge: { small: '10년만의 공급', line1: '분양가 상한제', line2: '적용단지' },
      eyebrow: 'ABSOLUTE · REMARKABLE · ONE',
      titleLine1: '청라의 정점을',
      titleAccent: '빛내는 단 하나',
      desc: 'CHEONGNA ARK-ONE PRUGIO',
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '청라 아크원 푸르지오', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '관심고객등록 시 분양소식을 가장 먼저 안내드립니다',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    arkoneLandmarks: {
      items: [
        {
          id: 'starfield', eyebrow: '청라의 여가 중심', titleTop: '스타필드 청라', titleBottom: '바로 앞의 일상',
          desc: '돔구장과 350여 개 브랜드가 결합된 복합 문화·쇼핑 공간.',
          img: '/apt/cheongna-arkone-prugio-3/starfield.webp', imgAlt: '스타필드 청라 조감도', objectPosition: 'center',
          cardTitle: '문화·쇼핑·스포츠의 중심', cardDesc: '2027년 말 준공, 2028년 개장을 목표로 추진 중입니다.',
          stats: [['2.3만', '돔 좌석 계획'], ['350+', '브랜드 계획']],
          source: {
            title: '스타필드 청라 추진 현황', date: '신세계프라퍼티 발표 · 2026-05-21',
            body: '약 2.3만석 규모 돔과 350여 개 브랜드를 포함하는 스타필드 청라를 2027년 말 준공, 2028년 개장 목표로 제시했습니다. 목표 일정은 사업 여건에 따라 변경될 수 있습니다.',
            links: [['신세계프라퍼티 뉴스룸', 'https://www.shinsegaeproperty.com/en/propertysad/news/detail.do?idx=270']],
          },
        },
        {
          id: 'hospital', eyebrow: '청라 의료복합타운', titleTop: '서울아산청라병원', titleBottom: '미래 의료의 중심',
          desc: '800병상 규모 종합병원을 포함한 의료복합타운이 조성 중입니다.',
          img: '/apt/cheongna-arkone-prugio-3/hospital.webp', imgAlt: '서울아산청라병원 조감도', objectPosition: '30% center',
          cardTitle: '청라가 기다려온 의료 인프라', cardDesc: '2029년 하반기 준공을 목표로 추진되고 있습니다.',
          stats: [['800', '계획 병상'], ['2029', '하반기 준공 목표']],
          source: {
            title: '서울아산청라병원 공공자료', date: 'IFEZ 현장점검 · 2026-06-10',
            body: '청라의료복합타운은 800병상 규모 종합병원을 포함해 조성 중이며 2029년 하반기 준공 목표가 안내됐습니다.',
            links: [['IFEZ 추진 현황', 'https://www.ifez.go.kr/main/pst/view.do?pst_id=noti04&pst_sn=669463'], ['인천광역시 사업 안내', 'https://www.incheon.go.kr/IC010205/view?repSeq=DOM_0000000013835243']],
          },
        },
        {
          id: 'hana', eyebrow: '청라 금융 시대', titleTop: '하나금융그룹 본사', titleBottom: '청라로의 이동',
          desc: '그룹 헤드쿼터 준공과 관계사 순차 이전이 청라의 업무 중심성을 높입니다.',
          img: '/apt/cheongna-arkone-prugio-3/hana.webp', imgAlt: '하나금융그룹 청라 그룹 헤드쿼터', objectPosition: 'center',
          cardTitle: '청라 금융 업무의 중심', cardDesc: '2026년 5월 준공, 9월부터 10개 관계사가 순차 이전할 예정입니다.',
          stats: [['2,200', '순차 이전 예정'], ['4,000', '클러스터 기대 규모']],
          source: {
            title: '하나금융그룹 그룹 헤드쿼터', date: 'IFEZ 보도자료 · 2026-05-26',
            body: '그룹 HQ는 2026년 5월 21일 준공됐으며 9월부터 연말까지 10개 관계사 약 2,200명이 순차 이전할 예정입니다.',
            links: [['IFEZ 보도자료', 'https://www.ifez.go.kr/main/pst/view.do?pst_id=noti03&pst_sn=669389']],
          },
        },
      ],
    },

    arkoneNetwork: {
      id: 'network',
      eyebrow: '미래 교통 계획',
      titleLine1: '서울을 향한',
      titleAccent: '다섯 개의 축',
      desc: '확정 노선과 건의·검토 단계 계획을 구분해 공공자료 기준으로 정리했습니다.',
      routes: [
        {
          color: '#c7a86e', label: '9호선', desc: '공항철도 직결 사업 추진',
          source: {
            title: '서울지하철 9호선·공항철도 직결', date: '국토교통부·서울시·인천시 공개자료 기준',
            body: '서울지하철 9호선과 공항철도 직결운행은 수도권 서부의 환승 부담을 줄이기 위한 사업입니다. 차량 도입과 운영 분담 등 관계기관 협의 및 사업 절차에 따라 일정이 달라질 수 있습니다.',
            links: [['국토교통부', 'https://www.molit.go.kr/'], ['인천광역시', 'https://www.incheon.go.kr/']],
          },
        },
        {
          color: '#39bfc7', label: '2호선', desc: '청라 연장 국가계획 반영 건의',
          source: {
            title: '서울지하철 2호선 청라 연장', date: '인천광역시 공개자료 기준',
            body: '서울지하철 2호선 청라 연장은 국가철도망 구축계획 반영을 건의한 계획입니다. 확정 노선이나 개통 일정이 발표된 단계와 구분해 확인해야 합니다.',
            links: [['인천광역시', 'https://www.incheon.go.kr/'], ['국토교통부', 'https://www.molit.go.kr/']],
          },
        },
        {
          color: '#78c7ff', label: 'GTX-D', desc: 'Y자 노선 추진·검토',
          source: {
            title: 'GTX-D 청라 교통축', date: '국토교통부 공개자료 기준',
            body: 'GTX-D는 수도권 서부의 광역급행철도 접근성을 높이는 노선으로 추진·검토되고 있습니다. 세부 정차역과 일정은 후속 계획과 고시를 확인해야 합니다.',
            links: [['국토교통부', 'https://www.molit.go.kr/']],
          },
        },
        {
          color: '#c28cff', label: 'GTX-E', desc: '인천공항–청라–서울 축 계획',
          source: {
            title: 'GTX-E 인천공항–청라–서울 축', date: '국토교통부 공개자료 기준',
            body: 'GTX-E는 인천공항에서 청라를 거쳐 서울로 이어지는 광역급행철도 구상입니다. 사업 단계와 세부 노선은 관계기관의 후속 계획을 확인해야 합니다.',
            links: [['국토교통부', 'https://www.molit.go.kr/']],
          },
        },
        {
          color: '#77d084', label: '인천 3호선', desc: '제2차 도시철도망 구축계획 승인',
          source: {
            title: '인천도시철도 3호선', date: '인천광역시 도시철도망 계획 기준',
            body: '인천도시철도 3호선은 제2차 인천 도시철도망 구축계획에 포함된 노선입니다. 실제 착공과 개통까지는 타당성 검토와 후속 행정절차가 필요합니다.',
            links: [['인천광역시', 'https://www.incheon.go.kr/']],
          },
        },
      ],
    },

    location: {
      id: 'location',
      navLabel: '입지환경',
      title: 'CENTRAL LOCATION PRUGIO',
      titleOneLineDesktop: true,
      titleAlign: 'left',
      titleWeight: 700,
      mapImage: { src: '/apt/cheongna-arkone-prugio-3/location-map.webp', alt: '청라 아크원 푸르지오 위치 안내도 — 청라국제도시 주변 교통 및 생활 인프라' },
      features: [
        {
          icon: '교통',
          title: '서울-인천-경기를 잇는 쾌속교통망',
          desc: '강남까지 바로 잇는 7호선, 국제업무단지역 초역세권(예정), GTX-D·E(계획), 청라하늘대교 개통, 제2외곽순환도로 등',
        },
        {
          icon: 'diamond',
          badgeVariant: 'gold',
          title: '완성되고 있는 핵심 개발비전',
          desc: "하나드림타운('26년 예정), 영상문화복합단지('31년 계획), 인천로봇랜드(예정), 청라시티타워(계획) 등",
        },
        {
          icon: '생활',
          badgeVariant: 'gold',
          title: '눈앞에 다가온 트렌디한 생활특권',
          desc: "복합쇼핑몰+돔구장 형태의 스타필드 청라('28년 개장 예정), 서울아산청라병원('29년 예정), 코스트코 청라점 등",
        },
        {
          icon: 'book',
          title: '단지 앞 안전한 통학길 안심 교육환경',
          desc: '도보 5분 초교 신설(예정), 중교 신설(계획), 도보거리 경연초·중교, 청라달튼외국인학교',
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 현황 및 개발 계획은 관계 기관의 발표를 참조해 작성된 것으로 사업계획 및 일정은 당사와 무관하며 추후 변경될 수 있습니다.',
    },

    premiumIntro: {
      bgImage: { src: '/apt/cheongna-arkone-prugio-3/premium-intro-bg.webp', alt: '청라 아크원 푸르지오 프리미엄 전경' },
      titleLine1: '공간의 특별함도\n자부심의 높이도',
      titleLine2: '정점을 넘어 완성된 라이프로\n청라 아크원 푸르지오',
      descLine1: '총 2,911가구(청라 피크원 푸르지오 포함) 규모의',
      descLine1Accent: ['2,911가구'],
      descLine2: '청라를 대표하는 푸르지오 대규모 브랜드타운을 완성합니다.',
    },

    // 짧은 인덱스(숫자+제목) — 상세는 아래 premiumSplits
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '청라 아크원 푸르지오 ',
      titleAccent: 'PREMIUM 5',
      cardTextAlign: 'center',
      cardBorder: 'gradient',
      cards: [
        { num: '01', title: ['총 2,911가구', '브랜드타운'], desc: ['청라를 대표하는', '푸르지오 대규모 타운'] },
        { num: '02', title: ['국제업무단지', '센트럴 라이프'], desc: ['청라의 중심으로', '완성되는 주거 가치'] },
        { num: '03', title: ['오션 · 시티뷰', '조망 특화'], desc: ['2면 or 3면 개방구조', '(일부세대)'] },
        { num: '04', title: ['높은 희소가치', '합리적 분양가'], desc: ['2017년 이후 10년만의', '분양가 상한제 공급'] },
        { num: '05', title: ['멀티', '라이프 플랫폼'], desc: ['팬트리 2개소 이상,', '멀티 발코니(OT)'] },
      ],
    },

    // PREMIUM 01~05 텍스트+사진 좌우 분할(짝수 reverse)
    premiumSplits: [
      {
        eyebrow: 'PREMIUM 01',
        title: ['총 2,911가구', '푸르지오 브랜드타운'],
        descLines: ['최고 49층 총 2,911가구(청라 피크원 푸르지오 포함)로', '청라를 대표하는 푸르지오 대규모 브랜드타운'],
        images: [
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-01.webp', alt: '청라 아크원 푸르지오 야경 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-01b.webp', alt: '청라 아크원 푸르지오 야경 이미지컷 2' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 02',
        title: ['국제업무단지의', '센트럴 라이프'],
        descLines: ['청라의 중심으로 완성되는', '국제업무단지의 특별한 주거 가치'],
        images: [{ src: '/apt/cheongna-arkone-prugio-3/premium-photo-02.webp', alt: '청라 아크원 푸르지오 도심 전경 이미지컷' }],
      },
      {
        eyebrow: 'PREMIUM 03',
        title: ['오션 · 시티뷰', '조망 특화'],
        descLines: ['오션 · 시티뷰를 동시에 누리는', '2면 or 3면 개방구조(일부세대)'],
        images: [
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-03.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-03b.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 2' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 04',
        title: ['높은 희소가치와', '합리적 분양가'],
        descLines: ['청라가 기다려온 신규공급,', "2017년 이후 10년만의 분양가 상한제 공급 아파트"],
        images: [
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-04.webp', alt: '청라 아크원 푸르지오 실내 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-04b.webp', alt: '청라 아크원 푸르지오 실내 이미지컷 2' },
        ],
      },
      {
        eyebrow: 'PREMIUM 05',
        title: ['멀티', '라이프 플랫폼'],
        descLines: ['팬트리 2개소 이상 제공,', '다양한 공간 활용의 멀티 발코니(OT)'],
        images: [
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-05.webp', alt: '청라 아크원 푸르지오 발코니 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio-3/premium-photo-05b.webp', alt: '청라 아크원 푸르지오 발코니 이미지컷 2' },
        ],
      },
    ],

    vipForm: {
      id: 'vip-reservation',
      bgColor: '#e7f1ea',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      // 연한 초록 배경이라 글자를 어두운 톤으로
      tone: 'light',
      eyebrow: 'VIP Reservation',
      titleLine1: '청라 아크원 푸르지오',
      titleLine2: '관심고객 사전등록',
      desc: '간단한 정보를 입력해 주시면 청라 아크원 푸르지오의 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
      serviceOptions: ['방문예약', '모델하우스 위치 전송', '자료요청', '기타문의'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
2. 개인정보의 수집 및 이용 목적 - 관심고객 등록 접수 및 분양 일정 안내 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 관심고객 등록 및 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/cheongna-arkone-prugio-3/logo-white.svg', alt: '청라 아크원 푸르지오', width: 130, height: 21 },
      logoAlign: 'center',
      logoWidth: 170,
      logoAlignDesktop: 'center',
      highlightText: '분양문의 1533-6480',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시행사업자번호', value: '866-88-02497' },
        { label: '시공', value: '(주)대우건설' },
        { label: '시공사업자번호', value: '104-81-58180' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1533-6480',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 진입 팝업: 안내(+혜택) → × 닫으면 방문예약 다이얼로그. 인트로 뒤에 뜨도록 지연
    arkonePopups: {
      notice: {
        openDelayMs: 6300,
        image: '/apt/cheongna-arkone-prugio-3/notice-popup.webp',
        title: '청라 아크원 푸르지오',
        desc: '관심고객등록 시 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
        benefit: {
          label: '혜택',
          text: '사전예약 후 방문 상담 고객님들께\n「7만원 상당 고급 와인」 증정!\n(선착순 100명)',
        },
      },
      visit: {
        title: '방문예약',
        desc: '모델하우스 관람가능시간 10:00~18:00 (담당자와 조율가능)',
      },
    },
  },
}

export default config
