// 청라 아크원 푸르지오3 (청라아크원푸르지오c.addupapt.kr) — 푸르지오2를 복제한 3차 분양팀 사이트.
// 대표번호 1666-1050·상담 알림 진의원(2026-10-26 변경), 유입경로 SKT/OK캐쉬백은 아래 *ByUtm 참고.
// 원본의 인트로·히어로·청라핵심·교통·진입 팝업을 SignatureArkoneHighlights로 가져와 사용하고,
// 사업개요·단지안내·세대안내 섹션은 뺌. 콘텐츠 출처: 공식 사이트 arkone-prugio.com(2026-09-16).
const config = {
  slug: 'cheongna-arkone-prugio-3',
  subdomain: '청라아크원푸르지오c',

  // 문자 제목에 쓰임 — 원본과 같은 형식이 되도록 "3" 없이
  projectName: '청라 아크원 푸르지오',
  metaTitle: '청라 아크원 푸르지오',
  shortName: '청라 아크원 푸르지오',
  telNumber: '1666-1050',
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
  // 요청 반영(2026-10-26) — 대표번호 1666-1050, 직접유입 상담 알림은 진의원에게만
  adminPhones: ['01071901052'],
  // 추가 유입경로(2026-10-26) — ?utm_source=SKT / okcashbag 로 들어오면 화면 번호·문자 제목·수신자를 바꿈
  telNumberByUtm: {
    SKT: '1666-1050',
    okcashbag: '1800-2261',
  },
  // 문자 제목 "[청라 아크원 푸르지오 +SKT] 신규 상담 신청"
  smsProjectNameByUtm: {
    SKT: 'SKT',
    okcashbag: 'OK캐쉬백',
  },
  adminPhonesByUtm: {
    SKT: ['01048086474', '01090447402', '01071901052'], // 이수지, 최현정, 진의원
    okcashbag: ['01048086474', '01090447402', '01071901052'],
  },
  // 문자에 "매체+담당자"(예: SKT+진의원, utm 없으면 직접유입+진의원) 표기용
  adminPhoneNames: {
    '01071901052': '진의원',
    '01048086474': '이수지',
    '01090447402': '최현정',
  },
  sheetId: '',
  sheetTab: '청라아크원푸르지오',
  showUtmInSms: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 관심고객등록 섹션·방문예약 팝업을 카드형 "방문예약 신청" 폼(ArkoneApplyForm)으로 — 요청 반영(2026-10-23)
  applyForm: {
    title: '방문예약 신청',
    desc: '11월 2일 특별공급 · 3일 1순위 청약. 방문 희망일과 시간을 남겨주세요.',
    submitLabel: '방문예약 신청하기',
    // 이용약관 전문 보기 — 시행사 요청(2026-10-23) "개인정보 수집 및 이용 안내" 표 형식.
    // 실제 접수·운영은 더블루파트너스가 하므로 처리 위탁(수탁자) 줄과 동의 거부권 줄을 더하고,
    // 수집 항목은 이 폼이 실제로 받는 항목으로 구체화함
    privacyTable: [
      ['개인정보처리자', '㈜청라스마트시티'],
      ['개인정보 처리 수탁자', '㈜더블루파트너스 (홈페이지 운영, 관심고객 접수 및 관리)'],
      ['수집방법', '공식 홈페이지 고객 등록, 현장 QR 및 고객이 직접 동의한 접수 경로'],
      ['수집 항목', '성명, 휴대전화번호, 청약자 구분, 방문희망일시'],
      ['이용 목적', '분양상담, 견본주택 오픈, 분양일정, 청약·계약, 미분양·잔여세대 및 분양 관련 이벤트 안내 등 분양 홍보와 판매 권유'],
      ['보유·이용기간', '아파트·오피스텔·상업시설 중 마지막 상품의 전 세대 분양계약 체결일로부터 90일까지. 단, 동의 철회 또는 이용 목적 달성 시 지체 없이 파기'],
      ['동의 거부 권리', '개인정보 수집 및 이용에 대한 동의를 거부할 수 있으며, 거부 시 방문예약 접수가 제한될 수 있습니다.'],
    ],
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
      gnb: ['입지환경', '교통호재', '청라핵심', '프리미엄', '청약안내', '관심고객등록'],
      // gnb 라벨과 같은 순서로 이동할 섹션 id (청라핵심 = 첫 랜드마크 스타필드)
      gnbTargetIds: ['location', 'network', 'starfield', 'premium-value', 'subscription', 'vip-reservation'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-1050',
    },

    quickMenu: {
      brand: '청라 아크원 푸르지오',
      phoneLabel: '분양문의',
      phone: '1666-1050',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '청라 아크원 푸르지오\n관심고객등록을 도와드립니다.',
      address: '인천광역시 서구 청라동 86-1번지 일원',
      tagline: 'ABSOLUTE REMARKABLE ONE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '03', label: 'TRAFFIC', sub: '교통호재', targetId: 'network' },
        { num: '04', label: 'VALUE', sub: '청라핵심', targetId: 'starfield' },
        { num: '05', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '06', label: 'INFORMATION', sub: '청약안내', targetId: 'subscription' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // ↓ 원본(SignatureArkoneImmersive)에서 가져온 히어로·청라핵심·교통 (요청 반영 2026-10-22 — 진입 인트로는 제거)
    hero: {
      // 요청 반영(2026-10-22) — 문구를 이전 포스터형(큰 3줄 영문 → 국문 → 스파클 → ARK-ONE 이니셜 강조 → 안내 카피)으로
      // 되돌림. 배지는 원본 아크원 히어로 것을 그대로 사용, 배경은 움직임 없는 고정 이미지(요청 반영 2026-10-22 — 배경 영상 제거, 공식 사이트 메인 비주얼 조감도 PC 가로형/모바일 세로형 사용)
      // 요청 반영(2026-10-22) — 원본 아크원 히어로 하단처럼 어두운 청록 그라데이션을 깔아 글씨가 잘 보이게(특히 모바일)
      overlayGradient: {
        // 모바일은 위에서 화면 절반까지만 어둡게(아래 건물은 가리지 않게)
        mobile: 'linear-gradient(180deg, rgba(3, 38, 34, 0.82) 0%, rgba(3, 38, 34, 0.5) 30%, rgba(3, 38, 34, 0) 50%)',
        desktop: 'linear-gradient(90deg, rgba(3, 38, 34, 0.7) 0%, rgba(3, 38, 34, 0.25) 55%, rgba(3, 38, 34, 0.1) 100%), linear-gradient(180deg, rgba(3, 38, 34, 0) 55%, rgba(3, 38, 34, 0.7) 100%)',
      },
      align: 'left',
      // 요청 반영(2026-10-22) — 모바일 문구를 왼쪽으로 더 붙임(기본 40px)
      paddingLeftMobile: '22px',
      contentTop: true,
      contentVariant: 'poster',
      textColor: '#FFFFFF',
      keepTextShadow: true,
      titleLine1: 'CHEONG NA',
      titleLine2: 'ARK-ONE',
      titleLine3: 'PRUGIO',
      subtitleKr: '청라 아크원 푸르지오',
      // 요청 반영(2026-10-22) — 국문 이름 아래 별(스파클) 구분선 삭제
      hideDivider: true,
      taglineLabel: '아크원(ARK-ONE)이란?',
      tagline: [
        { text: 'A', big: true },
        { text: 'bsolute ' },
        { text: 'R', big: true },
        { text: 'emar' },
        { text: 'K', big: true },
        { text: 'able ' },
        { text: 'O', big: true },
        { text: 'ne' },
      ],
      eyebrowLine1: '청라의 절대적 기준이 될',
      eyebrowLine2: '단 하나의 주거명작을 상징',
      badge: { small: '10년만의 공급', lines: ['분양가 상한제', '적용단지'] },
      bgImageMobile: { src: '/apt/cheongna-arkone-prugio-3/hero-bg-mobile.webp', alt: '청라 아크원 푸르지오 대표 조감도(모바일) — ABSOLUTE REMARKABLE ONE' },
      bgImage: { src: '/apt/cheongna-arkone-prugio-3/hero-bg.webp', alt: '청라 아크원 푸르지오 대표 조감도 — ABSOLUTE REMARKABLE ONE' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '청라 아크원 푸르지오', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '관심고객등록 시 분양소식을 가장 먼저 안내드립니다',
        // 요청 반영(2026-10-26) — 히어로 아래 "관심고객등록" 버튼을 갈색(--gold) 대신 다른 CTA와 같은 연두 그라데이션으로
        visitBg: 'linear-gradient(90deg, #cfea77, #9bd3bd)',
        visitColor: '#073a32',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    arkoneLandmarks: {
      // 요청 반영(2026-10-22) — 전체화면 3섹션 대신 이전 인트로 1단계처럼 사진 카드 3장(라벨·이름)으로
      layout: 'cards',
      // 요청 반영(2026-10-22) — 히어로 바로 뒤 대신 교통호재 다음, 프리미엄 바로 앞에 배치
      beforePremium: true,
      items: [
        {
          id: 'starfield', eyebrow: '청라의 여가 중심', titleTop: '스타필드 청라', titleBottom: '바로 앞의 일상',
          sceneLabel: '01 · CULTURE', sceneName: '스타필드 청라 · 돔구장',
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
          sceneLabel: '02 · MEDICAL', sceneName: '서울아산청라병원 · 의료복합타운',
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
          sceneLabel: '03 · BUSINESS', sceneName: '하나금융그룹 · 청라 본사',
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
      // 요청 반영(2026-10-22) — 청라핵심 바로 뒤 대신 입지환경 섹션 바로 아래에 배치
      afterLocation: true,
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

    // 히어로 바로 아래 "사전 청약 이벤트 금1돈" 배너 — 요청 반영(2026-10-26)
    goldEvent: { label: '사전 청약 이벤트', highlight: '금1돈', suffix: '을 드립니다', ctaLabel: '사전예약 하기' },

    // 요청 반영(2026-10-26) — 공식 사이트(arkone-prugio.com/pages/changeinfo·docspecial·docnormal)와 같은 청약안내 3탭
    subscriptionTabs: {
      id: 'subscription',
      eyebrow: 'INFORMATION',
      titlePlain: '청약',
      titleAccent: '안내',
      tabColumns: 3,
      zoomLightbox: true,
      tabs: [
        { label: '변경된 청약정보', image: { src: '/apt/cheongna-arkone-prugio-3/subscription-changeinfo.webp', alt: '변경된 청약제도 안내', width: 2000, height: 4790 } },
        { label: '특별공급 안내', image: { src: '/apt/cheongna-arkone-prugio-3/subscription-docspecial.webp', alt: '특별공급 청약 안내', width: 2000, height: 2930 } },
        { label: '일반공급 안내', image: { src: '/apt/cheongna-arkone-prugio-3/subscription-docnormal.webp', alt: '일반공급 청약 안내', width: 2000, height: 2750 } },
      ],
    },

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
      highlightText: '분양문의 1666-1050',
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
      csPhone: '1666-1050',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 진입 팝업: 안내(+혜택) → × 닫으면 방문예약 다이얼로그(applyForm 폼).
    // 요청 반영(2026-10-23) — 인트로가 빠졌으므로 인트로 대기(6.3초) 없이 바로 띄움
    arkonePopups: {
      notice: {
        openDelayMs: 700,
        image: '/apt/cheongna-arkone-prugio-3/notice-popup.webp',
        title: '청라 아크원 푸르지오',
        desc: '관심고객등록 시 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
        benefit: {
          label: '혜택',
          // 요청 반영(2026-10-26) — 경품 이벤트 추가, 선착순 100명 삭제
          text: '사전예약 후 방문 상담 고객님들께\n「7만원 상당 고급 와인」 증정!\n+ 경품 이벤트 진행중\n1등 트롬세탁기/LG디오스 인덕션/아이패드에어',
        },
      },
    },
  },
}

export default config
