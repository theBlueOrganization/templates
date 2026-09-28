// 청라 아크원(3차 분양팀용) — cheongna-arkone-prugio-2.js를 그대로 복제한 신규 분양팀 사이트.
// dalseo-xi-genic-2/hanyang-iclass-yangju-2 등과 같은 방식으로, subdomain은 이 팀 전용 도메인을
// 썼다(대표번호는 2026-09-28 요청으로 원본과 동일한 1533-6480으로 변경). 콘텐츠·이미지는 원본(cheongna-arkone-prugio)과
// 동일 — 원본 상단 주석 참고.
//
// 이 사이트만의 차이점:
//   - subdomain: 청라아크원푸르지오c.addupapt.kr
//   - telNumber/header.phone/quickMenu.phone/footer.highlightText·csPhone: 1533-6480 (2026-09-28 원본과 동일 번호로 변경)
//   - projectName: 처음엔 내부 구분용으로 "3"을 붙였으나 2026-09-28 문자 형식을 원본과 맞추기 위해 원본과 동일하게 변경
//   - metaTitle: 카카오톡 등 공유 시 노출되는 제목은 원본과 동일하게 "청라 아크원 푸르지오"로 고정
//     (projectName과 분리 지정)
//   - sheetTab: 청라아크원푸르지오 (2026-09-28 원본과 동일하게 변경)
//
// 아래는 원본(cheongna-arkone-prugio.js) 상단 주석 원문:
//
// 출처: 공식 사이트(https://arkone-prugio.com, 2026-09-16 확인)의 하위 페이지 원문 그대로 반영
//   - /pages/overview(사업개요), /pages/brand(브랜드), /pages/location(입지안내),
//     /pages/premium(프리미엄), /pages/contact(문의)
// 확인 시점 기준 공식 사이트는 청약 이전 "관심고객등록"만 받는 사전 홍보 단계라 커뮤니티 시설,
// 단지 배치도, 동호수 배치표, 세대 평면도가 아직 공개되지 않음(사이트맵에 해당 하위페이지 자체가 없음).
// 그래서 이 템플릿에서:
//   - club(커뮤니티)은 선택 필드라 통째로 생략
//   - complex(단지소개)·unitPlan(세대안내)은 이 템플릿에서 필수 섹션이라 뺄 수 없어, 실제 이미지 대신
//     "공개 예정" 안내 플레이스홀더 이미지(스크립트로 직접 생성, public/apt/cheongna-arkone-prugio-3/
//     complex-sitemap.webp·complex-dongho-chart.webp·unit-*.webp)를 임시로 넣어둠 — 공식 사이트에
//     배치도/동호수표/평면도가 올라오면 실제 이미지로 교체 필요
//     → 요청 반영(2026-09-28): 이 현장은 summary(사업개요)·complex(단지배치도·동호수배치도)·unitPlan(UNIT PLAN) 섹션을 통째로 삭제
//       (page.jsx에서 세 섹션을 선택 섹션으로 변경, 해당 이미지도 삭제)
// 히어로·사업개요·프리미엄5종·위치안내 이미지는 공식 사이트 원본을 그대로 받아 webp로 변환해 사용.
// 히어로 타이틀도 공식 메인 비주얼의 워드마크 SVG 원본(main_visual_name_img.v3.svg, white, 540x303)을
// 그대로 받아 hero.titleImage로 사용 — "ABSOLUTE REMARKABLE ONE" 표기가 이미지 안에 포함돼 있음.
//
// colorTheme/webfont — 공식 사이트는 Referer 헤더 없이 직접 접속하면 핫링크 방지로 CSS가 막히지만,
// Referer를 붙여 받으면 실제 CSS 사슬(temp_header.v3.css → common.css → token.css/font.css)을
// 그대로 읽을 수 있었음(2026-09-16 확인). token.css의 실제 디자인 토큰 원문 그대로 반영:
//   --primary-500: #004B45(딥그린, 브랜드 프라이머리) / --primary-900: #002521
//   --secondary-500: #8B7F71(웜톤 그레이지, 브랜드 세컨더리) / --secondary-100: #F3F0EC
//   --font-base: "SUIT", "Pretendard", sans-serif (SUIT 원본 CDN: cdn.jsdelivr.net/gh/sunn-us/SUIT)
// 이 값을 그대로 navy=primary-500 / ink=primary-900 / gold=secondary-500 / cream=secondary-100에
// 매핑(기존 기본 남색/골드 대신 실제 공식 브랜드 컬러 사용)
//
const config = {
  slug: 'cheongna-arkone-prugio-3',
  // 이 팀 전용 서브도메인 — 원본(청라아크원푸르지오)과 겹치지 않는 별도 도메인으로 지정
  subdomain: '청라아크원푸르지오c',

  // 요청 반영(2026-09-28) — 상담 접수 문자가 원본(cheongna-arkone-prugio)과 완전히 같은 형식으로 가도록
  // projectName에서 "3"을 빼고 원본과 동일하게 지정(문자 제목 "[청라 아크원 푸르지오] 신규 상담 신청").
  // 이전: "3"이 붙은 projectName은 SMS/카카오 알림톡 등에 그대로 쓰되, 고객에게 보이는 제목(metaTitle)은
  // 원래 이름 그대로 유지
  projectName: '청라 아크원 푸르지오',
  metaTitle: '청라 아크원 푸르지오',
  shortName: '청라 아크원 푸르지오',
  telNumber: '1533-6480',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/cheongna-arkone-prugio-3/og.jpg',
  // 출처: 공식 사이트 token.css 원문(2026-09-16) — primary-500/primary-900/secondary-500/secondary-100
  colorTheme: {
    navy: '#004B45',
    ink: '#002521',
    cream: '#F3F0EC',
    gold: '#8B7F71',
    // 요청 반영(2026-09-28) — 하단 고정바 방문예약(관심고객등록) 버튼을 원본 청라 아크원 푸르지오 하단바 버튼 색으로
    visitBtnBg: 'linear-gradient(90deg, #cfea77, #9bd3bd)',
    visitBtnColor: '#073a32',
  },
  // 출처: 공식 사이트 font.css/token.css 원문(2026-09-16) — --font-base: "SUIT", "Pretendard", sans-serif
  webfont: {
    family: "'SUIT', 'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css',
  },
  // 요청 반영(2026-09-28) — 원본(cheongna-arkone-prugio)과 동일하게 대표번호 1533-6480, 상담 접수 알림은
  // 진의원·최용호 2명에게 발송하고 문자 본문에 "유입매체+담당자" 표기(예: "현대+진의원")
  adminPhones: ['01071901052', '01049851470'],
  // 문자 본문에 "매체+담당자" 표기(예: "현대+진의원")를 붙이기 위한 수신번호→담당자명 매핑
  adminPhoneNames: {
    '01071901052': '진의원',
    '01049851470': '최용호',
  },
  // 위 표기의 "매체" 부분 — 직접유입(utm_source 없음)일 때만 "현대"로 고정 표시.
  // 추후 이 현장에 실제 유입경로(예: ?utm_source=lpoint)가 생기면 그 값이 자동으로 매체명이 되어
  // "엘포인트+진의원"처럼 구분되고, 이 "현대" 값은 직접유입 몫으로만 그대로 남아 서로 꼬이지 않음
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
      // 출처: 공식 사이트 공용 워드마크(/resources/img/common/logotype.svg, 원본 161x26 black) —
      // 헤더 배경이 스크롤 여부와 무관하게 항상 --navy(딥그린 #004B45)라 흰색 버전만 사용
      logo: { src: '/apt/cheongna-arkone-prugio-3/logo-white.svg', alt: '청라 아크원 푸르지오', width: 161, height: 26 },
      // 요청 반영 — 기본 로고 폭(140/190/220px)이 가로로 긴 워드마크(161x26, 약 6.2:1) 특성상
      // 너무 넓고 커 보여서 축소
      logoSize: { base: 96, lg: 130, xl: 150 },
      // 요청 반영(2026-09-28) — 사업개요·단지안내(단지배치도·동호수배치도)·세대안내(UNIT PLAN) 섹션 삭제에 맞춰 메뉴에서도 제거
      gnb: ['입지환경', '프리미엄', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1533-6480',
    },

    // PC 우측 고정 사이드 퀵메뉴 — 공식 사이트가 fullPage.js 기반 풀스크린 스크롤 구조라 화면
    // 우측에 항상 떠 있는 섹션 내비게이션을 쓰는 것을 참고해 추가(osan-heritage-xi-x와 동일 컴포넌트)
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
        { num: '02', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '03', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '04', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 요청 반영(2026-09-28) — 인트로 + 히어로 + 청라 핵심 3종 + 미래 교통 계획을 청라 아크원 푸르지오
    // 원본(cheongna-arkone-prugio, SignatureArkoneImmersive)의 문구·이미지·출처 그대로 가져와 반영.
    // 원본은 풀페이지 몰입형 전용 컴포넌트라, 이 현장의 일반 스크롤 템플릿 안에 끼울 수 있게 떼어낸
    // SignatureArkoneHighlights(인트로/히어로/랜드마크/교통)를 사용. 이미지·영상은 원본 v2 폴더에서
    // 이 현장 폴더로 복사(hero-video.mp4, starfield/hospital/hana.webp, prugio-symbol.svg).
    // 이전 히어로(포스터형 워드마크 레이아웃)는 git 기록(245359b 기준 cheongna-arkone-prugio-2.js)에 있음
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
      // 영상 로딩 전/자동재생 차단 시 보이는 대표 조감도
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

    // 청라 핵심 3종 — 원본 LANDMARKS/SOURCES 그대로(출처: 공식 발표·공공자료 원문, 2026년 확인)
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

    // 미래 교통 계획 — 원본 ROUTES/SOURCES 그대로
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

    // 출처: 공식 사이트 /pages/location 원문 그대로(2026-09-16). 사용자 제공 참고 화면(원형 아이콘
    // 배지 + 좌측정렬 대형 타이틀 "CENTRAL LOCATION / PRUGIO" + 2열 화이트 카드) 참고 요청 반영 —
    // SignatureLocation에 icon 전용 카드 변형(iconCard)을 새로 추가해서 구성(사진/번호 없이 원형
    // 아이콘 배지만 사용, navy/gold 배지색이 카드 순서대로 교차)
    location: {
      id: 'location',
      navLabel: '입지환경',
      // 요청 반영 — 2줄로 나누지 않고 한 줄로
      title: 'CENTRAL LOCATION PRUGIO',
      // 요청 반영(2026-09-28) — PC에서는 제목을 한 줄로(모바일은 기존처럼 폭에 맞춰 줄바꿈)
      titleOneLineDesktop: true,
      titleAlign: 'left',
      titleWeight: 700,
      // 출처: 공식 사이트 위치안내도 원본(/resources/img/sub/location_map_img.v3.jpg)
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

    // 출처: 공식 사이트 /pages/premium 대표 카피 그대로(2026-09-16), 배경은 프리미엄 03(오션뷰) 사진과
    // 결이 비슷한 메인 비주얼을 재사용
    premiumIntro: {
      bgImage: { src: '/apt/cheongna-arkone-prugio-3/premium-intro-bg.webp', alt: '청라 아크원 푸르지오 프리미엄 전경' },
      // 요청 반영(2026-09-28) — "자부심의 높이도" 앞에서 줄바꿈
      titleLine1: '공간의 특별함도\n자부심의 높이도',
      // 요청 반영 — "정점을 넘어 완성된 라이프로"와 "청라 아크원 푸르지오"를 한 줄로 잇지 않고
      // 별도 줄로 분리(공식 사이트 프리미엄 페이지 원문 줄바꿈과 동일)
      titleLine2: '정점을 넘어 완성된 라이프로\n청라 아크원 푸르지오',
      descLine1: '총 2,911가구(청라 피크원 푸르지오 포함) 규모의',
      descLine1Accent: ['2,911가구'],
      descLine2: '청라를 대표하는 푸르지오 대규모 브랜드타운을 완성합니다.',
    },

    // 출처: 공식 사이트 /pages/premium(2026-09-16). 공식 페이지 실제 구조를 다시 확인해보니 카드
    // 그리드가 아니라 "PREMIUM 01~05" 각 항목이 텍스트+사진 좌우 분할로 지그재그(홀/짝수마다 좌우
    // 반전)로 이어지는 구성이었음 — premiumSplits(SignaturePremiumSplit)로 교체해서 원본에 더
    // 가깝게 재구성. premiumValue는 이 템플릿에서 필수 섹션이라 뺄 수 없어, 아래 premiumSplits와
    // 내용이 겹치지 않도록 사진 없이 숫자+제목만 있는 짧은 인덱스 스트립으로 축소
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '청라 아크원 푸르지오 ',
      titleAccent: 'PREMIUM 5',
      cardTextAlign: 'center',
      // 요청 반영(2026-09-28) — 카드 배경색(크림) 없이 테두리만 그라데이션 선으로
      cardBorder: 'gradient',
      cards: [
        { num: '01', title: ['총 2,911가구', '브랜드타운'], desc: ['청라를 대표하는', '푸르지오 대규모 타운'] },
        { num: '02', title: ['국제업무단지', '센트럴 라이프'], desc: ['청라의 중심으로', '완성되는 주거 가치'] },
        { num: '03', title: ['오션 · 시티뷰', '조망 특화'], desc: ['2면 or 3면 개방구조', '(일부세대)'] },
        { num: '04', title: ['높은 희소가치', '합리적 분양가'], desc: ['2017년 이후 10년만의', '분양가 상한제 공급'] },
        { num: '05', title: ['멀티', '라이프 플랫폼'], desc: ['팬트리 2개소 이상,', '멀티 발코니(OT)'] },
      ],
    },

    // 출처: 공식 사이트 /pages/premium PREMIUM 01~05 원문/이미지 그대로(2026-09-16) — 텍스트+사진
    // 좌우 분할, 짝수 항목은 reverse:true로 좌우를 바꿔 지그재그 구성(공식 페이지와 동일)
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

    // 공식 사이트가 아직 청약 전 "관심고객등록" 단계라 모델하우스 방문예약 대신 사전등록 문구로 구성
    vipForm: {
      id: 'vip-reservation',
      // 요청 반영(2026-09-28) — 섹션 배경을 연한 초록색으로(원본 청라 아크원 푸르지오 밝은 패널 톤),
      // tone:'light'로 흰색 글자를 어두운 초록 톤으로 바꿔 가독성 유지
      bgColor: '#e7f1ea',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      tone: 'light',
      eyebrow: 'VIP Reservation',
      titleLine1: '청라 아크원 푸르지오',
      titleLine2: '관심고객 사전등록',
      desc: '간단한 정보를 입력해 주시면 청라 아크원 푸르지오의 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
      // 요청 반영(2026-09-28) — 방문예약 팝업(arkonePopups)의 상담 내용 4개와 통일
      serviceOptions: ['방문예약', '모델하우스 위치 전송', '자료요청', '기타문의'],
      // 요청 반영(2026-09-28) — 원본 현장 폼에는 연령대 항목이 없어 문자 형식을 맞추려고 제거(ageOptions 미지정 시 행 숨김)
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
2. 개인정보의 수집 및 이용 목적 - 관심고객 등록 접수 및 분양 일정 안내 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 관심고객 등록 및 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    // 출처: 공식 사이트 /pages/contact 회사정보 원문 그대로(2026-09-16). 온라인대행은 공식 사이트의
    // (주)넥스미디어·(주)나인야드 대신, 이 랜딩페이지를 운영하는 더블루파트너스로 표기(다른 현장과 동일 컨벤션)
    footer: {
      logo: { src: '/apt/cheongna-arkone-prugio-3/logo-white.svg', alt: '청라 아크원 푸르지오', width: 130, height: 21 },
      logoAlign: 'center',
      // 요청 반영(2026-09-28) — 로고가 작아 보여서 확대(기본 110px → 170px), 데스크톱에서도 가운데 정렬
      logoWidth: 170,
      logoAlignDesktop: 'center',
      highlightText: '분양문의 1533-6480',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시행사업자번호', value: '866-88-02497' },
        { label: '시공', value: '(주)대우건설' },
        { label: '시공사업자번호', value: '104-81-58180' },
        // 요청 반영(2026-09-28) — "온라인대행"을 "광고 운영·관리 대행사 더블루파트너스"로 바꾸고, 구분선 아래
        // 새 줄에서 시작(dividerBefore)해 위 시행/시공 그룹과 구분, 대행사 전화번호 추가(forena-incheon-hagik과 동일 컨벤션)
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

    // 요청 반영(2026-09-28) — 기존 관심고객등록 팝업(popup.interest) 대신 청라 아크원 푸르지오 원본과
    // 같은 진입 팝업으로 교체: 안내 팝업(이미지+현장명+안내문+닫기) → 닫으면 이어서 방문예약 다이얼로그.
    // 문구·이미지(notice-popup.webp)는 원본 그대로. 인트로(5.6초)가 끝난 뒤 뜨도록 지연
    arkonePopups: {
      notice: {
        openDelayMs: 6300,
        image: '/apt/cheongna-arkone-prugio-3/notice-popup.webp',
        title: '청라 아크원 푸르지오',
        desc: '관심고객등록 시 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
        // 요청 반영(2026-09-28) — 안내 문구 아래 혜택 안내 추가
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
