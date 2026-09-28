// 포레나 인천학익 — 인천광역시 미추홀구 학익2동 290-1번지 일원(학익 4구역) 주택재개발정비사업.
// 시행 학익4주택재개발정비사업조합 / 시공 (주)한화·건설 / 분양대행 (주)루트이앤씨.
// 지하 2층~지상 29층, 5개동 총 562세대 중 일반분양 250세대(전용 49~74㎡, 84㎡ 미만 100% 구성).
// 출처1: 「포레나 인천학익 직원 교육자료」PDF(원본 파일 확보, 2026-09-23) — 사업개요·세부 면적표·
//   단지 배치도·투시도·위치도·49/59A·B·C/74A·B 평면도·커뮤니티(골프 트레이닝 센터/시니어
//   클럽하우스&북하우스/웰니스 센터/포레나 프리스쿨) 아이소메트릭 평면도 원문 이미지를
//   pdftoppm(poppler)으로 페이지 렌더링 후 크롭하여 실제 이미지로 사용(public/apt/forena-incheon-hagik/).
// 출처2: 공식 홍보 사이트(https://firstboard.co.kr/, 2026-09-23 확인) — 대표전화(1800-7076),
//   프리미엄 6종 카피, 입지 Point 4종 실사진(교통/생활/교육/미래), 동호수 배치표(101~105동,
//   위 PDF에는 없는 자료) 이미지를 그대로 받아 사용.
// 출처3: 사용자가 직접 전달한 고화질 원본 컷(워터마크·페이지 여백 없는 완성본) — 히어로
//   배경(hero-bg.png), 위치도(location-map.png), 프리미엄 인트로 배경(premium-intro-bg.png),
//   49/59A·B·C/74A·B 평면도(unit-*.png), 진입 팝업 완성 디자인(popup.png)을 그대로 받아 교체.
// 대표번호 1877-3569, 상담 알림 문자 수신번호(adminPhones) 010-2918-3185 — 2026-09-28 사용자 전달값으로 반영.
const config = {
  slug: 'forena-incheon-hagik',
  // 선택 필드: 있으면 포레나인천학익.addupapt.kr → /apt/forena-incheon-hagik로 자동 리다이렉트(middleware.js)
  subdomain: '포레나인천학익',
  projectName: '포레나 인천학익',
  shortName: '포레나 인천학익',
  telNumber: '1877-3569',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/forena-incheon-hagik/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01029183185'],
  sheetId: '',
  sheetTab: '포레나인천학익',
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
      // logo-white.png는 투명 여백이 커서(글자가 좌측 19% 지점부터 시작, 세로로도 위쪽 치우침) 모바일 헤더에서
      // 좌우 여백·세로 중앙이 안 맞아 보였음 → 여백을 잘라낸 hero-brand-logo.png로 교체하고 표시 폭을 맞춤
      logo: { src: '/apt/forena-incheon-hagik/hero-brand-logo.png', alt: '포레나 인천학익', width: 642, height: 189 },
      logoSize: { base: 92, lg: 120, xl: 138 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1877-3569',
    },

    // 진입 팝업 — 완성된 디자인 이미지(popup.png) 그대로 노출, 이미지 전체를 탭하면
    // link(tel:)로 바로 전화 연결되고, 하단 "팝업닫기" 바를 탭하면 닫힘 (SignaturePopupBanner)
    popup: {
      enabled: true,
      image: {
        src: '/apt/forena-incheon-hagik/popup.png',
        alt: '포레나 인천학익 특별분양 - 1차 계약금 0원, 즉시 입주, 마지막 기회 상담문의',
        width: 1374,
        height: 1145,
        link: 'tel:1877-3569',
        linkLabel: '상담 전화 연결',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴 — components/ui/SignatureQuickMenu.
    // 두산위브더제니스 부천과 동일한 구성(분양문의/관심고객/MENU 세로 바 + QUICK MENU 패널)으로,
    // targetId는 이 현장의 실제 섹션 id(overview/location/premium-value/complex/unit-plan/community)에 맞춤
    quickMenu: {
      brand: 'FORENA INCHEON HAGIK',
      phoneLabel: '분양문의',
      phone: '1877-3569',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '포레나 인천학익\n분양 상담을 도와드립니다.',
      address: '인천광역시 미추홀구 학익2동 290-1번지 일원',
      tagline: 'THE CENTER OF HAGIK NEW TOWN',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 두산위브더제니스 부천 히어로와 동일한 구성 — 배경 3장 크로스페이드 슬라이드(썸네일 네비) +
    // 슬라이드별 구분선 문구(eyebrowDivider) + 상단 정렬 타이틀 + 브랜드 로고 락업, 어두운 오버레이 없음.
    // 슬라이드 문구는 공식 사이트 프리미엄 6종 카피(중심입지/더블교통망/혁신설계)에서 발췌.
    // 브랜드 로고는 logo-white.png의 투명 여백을 잘라낸 hero-brand-logo.png(2줄 락업)를 사용
    hero: {
      eyebrowDivider: true,
      // 요청 반영 — 타이틀 문구를 현장명으로, 세리프체(Noto Serif KR)로 변경. 세리프는 300/400만 로드돼 있어
      // 기본 600을 쓰면 브라우저 가짜 볼드가 생기므로 실제 로드된 400으로 지정
      titleLine1: '포레나 인천학익',
      fontFamily: 'var(--font-serif)',
      titleWeight: 400,
      // 요청 반영 — 세리프 타이틀 자간이 넓어 보여 기본(-0.03em)보다 좁힘
      titleLetterSpacing: '-0.08em',
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      brandLogo: { src: '/apt/forena-incheon-hagik/hero-brand-logo.png', alt: '포레나 인천학익', width: 642, height: 189 },
      brandLogoSize: { base: 44, lg: 64 },
      // 요청 반영 — 모바일 히어로 이미지 3장을 살짝 위로 올림
      mobileBgShiftUp: 60,
      slides: [
        {
          eyebrowLine1: '약 5,000세대 브랜드타운의',
          eyebrowLine2: '중심입지.',
          bgImage: { src: '/apt/forena-incheon-hagik/hero-bg.png', alt: '포레나 인천학익 투시도(주경)' },
          // 모바일(768px 미만) 전용 세로형 컷 — 사용자 제공 "제목 없음-2.png"(750x1053)
          bgImageMobile: { src: '/apt/forena-incheon-hagik/hero-bg-mobile-1.png', alt: '포레나 인천학익 투시도(주경)' },
        },
        {
          eyebrowLine1: '문학IC·인하대역 더블교통망',
          eyebrowLine2: '빠른 교통.',
          bgImage: { src: '/apt/forena-incheon-hagik/premium-intro-bg.png', alt: '포레나 인천학익 101동 투시도' },
          // 모바일 전용 — 사용자 제공 "그룹 1.png"(750x1055)
          bgImageMobile: { src: '/apt/forena-incheon-hagik/hero-bg-mobile-2.png', alt: '포레나 인천학익 101동 투시도' },
        },
        {
          eyebrowLine1: '판상형 100%·남향 위주 배치',
          eyebrowLine2: '혁신설계.',
          bgImage: { src: '/apt/forena-incheon-hagik/overview-photo.png', alt: '포레나 인천학익 조감도' },
          // 모바일 전용 — 사용자 제공 "그룹 2.png"(750x942)
          bgImageMobile: { src: '/apt/forena-incheon-hagik/hero-bg-mobile-3.png', alt: '포레나 인천학익 조감도' },
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '포레나 인천학익', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '관심고객등록 시 분양 일정을 가장 빠르게 안내드립니다',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 사업개요
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/forena-incheon-hagik/overview-photo.png', alt: '포레나 인천학익 조감도' },
      thumbs: [
        { src: '/apt/forena-incheon-hagik/overview-thumb-1.jpg', alt: '메리키즈그라운드(어린이놀이터) 썸네일' },
        { src: '/apt/forena-incheon-hagik/overview-thumb-2.jpg', alt: '카페브리즈(커뮤니티 광장) 썸네일' },
        { src: '/apt/forena-incheon-hagik/overview-thumb-3.jpg', alt: '단지 정문 야경 렌더링 썸네일' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '학익4구역 주택재개발정비사업' },
        { label: '대지위치', value: '인천광역시 미추홀구 학익2동 290-1번지 일원(학익 4구역)' },
        { label: '지역지구', value: '준주거지역, 정비구역' },
        { label: '건축규모', value: ['지하 2층 ~ 지상 29층, 5개동', '총 562세대 중 일반분양 250세대'] },
        { label: '대지면적', value: '16,519.00㎡(4,997.00평)' },
        { label: '조경면적', value: '5,030.24㎡(1,521.65평) / 녹지율 30.45%' },
        { label: '건폐율/용적률', value: '20.61% / 298.82%' },
        { label: '주차대수', value: ['656대(법정 562대)', '세대당 주차대수 1.17대'] },
      ],
    },

    // 위치안내
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '학익새도시의 ',
      eyebrowAccent: '중심입지',
      title: 'Perfect Location',
      descTitle: '완성된 도심 인프라와 미래 교통망을 한자리에 품었습니다.',
      descTitleAccent: ['완성된 도심 인프라', '미래 교통망'],
      descBody1: '제2경인고속도로 문학IC와 수인분당선 인하대역 인근,',
      descBody1Accent: ['문학IC', '인하대역'],
      descBody2: '포레나 인천학익이 당신의 완벽한 일상을 완성합니다.',
      mapImage: { src: '/apt/forena-incheon-hagik/location-map.png', alt: '포레나 인천학익 위치 안내도' },
      features: [
        {
          titlePrefix: '빠른',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Speed UP',
          image: { src: '/apt/forena-incheon-hagik/feature-traffic.jpg', alt: '교통 환경' },
          descStrong: '제2경인고속도로 문학IC',
          descRest: ' 인접 및 수인분당선 인하대역 인근의 우수한 광역 교통망',
        },
        {
          titlePrefix: '편리한',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life UP',
          image: { src: '/apt/forena-incheon-hagik/feature-life.jpg', alt: '생활 인프라' },
          descStrong: '법조타운 먹거리 상권과 홈플러스·CGV',
          descRest: ', 미추홀공원 등 완성된 생활 인프라',
        },
        {
          titlePrefix: '가까운',
          titleStrong: '명문학군',
          titleSuffix: '으로',
          tag: 'Smart UP',
          image: { src: '/apt/forena-incheon-hagik/feature-education.jpg', alt: '학군 및 교육환경' },
          descStrong: '연학초·인주중·인하사대부중고',
          descRest: ' 등 도보통학권의 우수학군 및 학원가',
        },
        {
          titlePrefix: '놀라운',
          titleStrong: '미래가치',
          titleSuffix: '로',
          tag: 'Class UP',
          // 사용자 제공 고화질 원본(card-image-8.webp, 2160x964, 2026-09-28)으로 교체 — 기존 feature-future.jpg(600x260, "이미지컷" 워터마크) 대체
          image: { src: '/apt/forena-incheon-hagik/card-image-8.webp', alt: '개발 호재 및 미래가치' },
          descStrong: '약 5,000세대 학익새도시',
          descRest: '로 거듭날 원도심 재정비사업의 중심',
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    // 프리미엄 인트로 — 전환용 섹션
    premiumIntro: {
      eyebrow: 'HAGIK NEW TOWN',
      titleLine1: '학익새도시를 완성하는',
      titleLine2: '포레나 인천학익',
      descLine1: '지하 2층~지상 29층 5개동, 총 562세대 중 일반분양 250세대 규모',
      descLine1Accent: ['562세대'],
      descLine2: '학익 재개발지구와 용현학익지구가 함께 만드는 학익새도시의 중심에서 새로운 미래가치를 완성합니다.',
      bgImage: { src: '/apt/forena-incheon-hagik/premium-intro-bg.png', alt: '포레나 인천학익 101동 야경 투시도' },
    },

    // 프리미엄 가치
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '포레나 인천학익 ',
      titleAccent: 'SIGNATURE 6',
      // 카피 출처: 공식 사이트(firstboard.co.kr) 프리미엄 페이지 6종 인포그래픽 원문 그대로
      cards: [
        { num: '01', title: ['한화 포레나의', '브랜드 프리미엄'], desc: ['일상을 남다른 품격으로 완성하는', '한화 포레나의 프리미엄 주거 자부심'] },
        { num: '02', title: ['학익새도시의', '중심입지'], desc: ['약 5,000세대 브랜드 타운으로', '새롭게 탄생할 학익의 한가운데 입지'] },
        { num: '03', title: ['어디든 빠른', '더블교통망'], desc: ['제2경인고속 문학IC, 수인분당선', '인하대역으로 양호한 교통접근성'] },
        { num: '04', title: ['한걸음에 누리는', '안심학세권'], desc: ['연학초, 인주중, 학익여고, 학익고 등', '도보통학이 가능한 명문학군'] },
        { num: '05', title: ['다채로운', '커뮤니티 경험'], desc: ['피트니스센터, 골프연습장,', '작은도서관, 맘스스테이션 등 취향대로 누리는 일상'] },
        { num: '06', title: ['쾌적하고 실용적인', '혁신설계'], desc: ['59·74㎡에 트렌디한 4Bay', '공간구성 및 전세대 세대창고 제공'] },
      ],
    },

    // 단지구성 — 단지소개(complex) 바로 앞에 렌더링(SignatureComplexIntro).
    // 출처: 사용자 제공 원본 컷(단지구성.jpg, PREMIUM ARCHITECTURE) — 타이틀·설명·특화 포인트 6종 문구를
    // 이미지에서 그대로 옮겨 적고, 조감도/문주/메리키즈그라운드/카페브리즈 사진은 잘라서 complex-intro-*.jpg로 사용
    complexIntro: {
      id: 'complex-intro',
      labelTop: 'PREMIUM',
      labelBottom: 'ARCHITECTURE',
      titleLine1: '클래스가 다른 최고 29층 스카이라인으로',
      titleLine2: '학익의 새로운 랜드마크가 되다!',
      desc: '한화건설의 앞선 브랜드가치와 함께 살면 살수록 자부심을 더하는 특화설계로 포레나만의 고품격 라이프가 시작됩니다.',
      mainImages: [
        { src: '/apt/forena-incheon-hagik/complex-intro-aerial.jpg', alt: '포레나 인천학익 단지 조감도', width: 1000, height: 732 },
        { src: '/apt/forena-incheon-hagik/complex-intro-gate.jpg', alt: '포레나 인천학익 문주 야경 투시도', width: 1000, height: 537 },
      ],
      photos: [
        { caption: '메리키즈그라운드', image: { src: '/apt/forena-incheon-hagik/complex-intro-kids.jpg', alt: '메리키즈그라운드(어린이놀이터) 투시도', width: 491, height: 288 } },
        { caption: '카페브리즈', image: { src: '/apt/forena-incheon-hagik/complex-intro-cafe.jpg', alt: '카페브리즈(커뮤니티 광장) 투시도', width: 491, height: 288 } },
      ],
      points: [
        { title: '전세대 남향위주 배치', desc: '채광과 통풍을 극대화한 우수한 남향중심 배치' },
        { title: '스쿨버스 스테이션', desc: '부모님도 아이들도 안심할 수 있는 안전한 통학차량 정류소' },
        { title: '카페브리즈', titleSub: '(커뮤니티 광장)', desc: '산책로를 구경하며 여유로운 시간을 보낼 수 있는 중앙광장' },
        { title: '포레나 문주 디자인', desc: '포레나만의 색채와 패턴으로 세련미를 더한 차별화된 디자인' },
        { title: '메리키즈그라운드', titleSub: '(어린이놀이터)', desc: '아이들의 EQ와 창의력을 높여줄 즐겁고 신나는 놀이 공간' },
        { title: '중소형 타입', titleSub: '(49㎡, 59㎡, 74㎡)', desc: '체감 면적을 넓혀 공간 활용도를 높인 중소형 타입으로 구성' },
      ],
    },

    // 단지소개 — 배치도 + 동호수표 이미지 2장
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '동간거리를 확보한 개방감 있는 설계',
      titleLine2: '단지소개',
      desc: '지하 2층~지상 29층, 5개동 총 562세대 중 일반분양 250세대 규모로 조성되는 학익 4구역 재개발단지',
      siteMap: {
        // 사용자 제공 캡처(2026-09-28)로 교체 — 동별 타입 배치 + 전체 562세대 타입별 세대수 범례 포함
        image: { src: '/apt/forena-incheon-hagik/complex-sitemap.png', alt: '포레나 인천학익 단지 배치도 및 타입별 세대수', width: 1213, height: 562 },
      },
      donghoChart: {
        image: { src: '/apt/forena-incheon-hagik/complex-dongho-chart.jpg', alt: '포레나 인천학익 동호수 배치표(101~105동)', width: 1000, height: 1560 },
      },
    },

    // 세대안내 — 49/59A·B·C/74A·B (전용 84㎡ 미만 100% 구성, 판상형 100%)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'FORENA INCHEON HAGIK',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['학익새도시의 주거문화를 선도하는', '포레나 인천학익', '판상형 100%·남향 위주 배치로', '완성한 실속형 평면을 만나보십시오.'],
      groups: [
        {
          area: '49㎡',
          types: [
            {
              letter: 'A',
              countText: '총 250세대 중 일반분양 41세대',
              image: { src: '/apt/forena-incheon-hagik/unit-49a.png', alt: '49㎡ A 타입 평면도', width: 899, height: 854 },
              specs: { exclusive: '49.9644', supply: '68.9945' },
            },
          ],
        },
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 250세대 중 일반분양 88세대',
              image: { src: '/apt/forena-incheon-hagik/unit-59a.png', alt: '59㎡ A 타입 평면도', width: 589, height: 371 },
              specs: { exclusive: '59.9229', supply: '81.9094' },
            },
            {
              letter: 'B',
              countText: '총 250세대 중 일반분양 35세대',
              image: { src: '/apt/forena-incheon-hagik/unit-59b.png', alt: '59㎡ B 타입 평면도', width: 591, height: 371 },
              specs: { exclusive: '59.9989', supply: '82.0035' },
            },
            {
              letter: 'C',
              countText: '총 250세대 중 일반분양 43세대',
              image: { src: '/apt/forena-incheon-hagik/unit-59c.png', alt: '59㎡ C 타입 평면도', width: 607, height: 377 },
              specs: { exclusive: '59.8980', supply: '81.8966' },
            },
          ],
        },
        {
          area: '74㎡',
          types: [
            {
              letter: 'A',
              countText: '총 250세대 중 일반분양 38세대',
              image: { src: '/apt/forena-incheon-hagik/unit-74a.png', alt: '74㎡ A 타입 평면도', width: 727, height: 493 },
              specs: { exclusive: '74.8171', supply: '101.5662' },
            },
            {
              letter: 'B',
              countText: '총 250세대 중 일반분양 5세대',
              image: { src: '/apt/forena-incheon-hagik/unit-74b.png', alt: '74㎡ B 타입 평면도', width: 738, height: 496 },
              specs: { exclusive: '74.8540', supply: '101.6130' },
            },
          ],
        },
      ],
    },

    // 커뮤니티 — 사용자 제공 완성본(image 90.png)이 421px 저화질이라 이미지 통째로 넣지 않고 섹션으로 재구성
    // (SignatureClubFloors, variant: 'floors'). 타이틀·설명·시설별 문구·번호 범례는 image 90.png에서 그대로
    // 옮겨 적고, 아이소메트릭 평면도(club-*.jpg)와 동 위치 키맵(club-keymap.png)은 같은 내용의 1000px
    // 고해상도 원본(커뮤니티.jpg)에서 잘라서 사용. legend 순서는 평면도 안 번호 마커와 1:1로 맞춤
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'floors',
      intro: {
        labelTop: 'PREMIUM',
        labelBottom: 'COMMUNITY',
        titleLine1: '특별한 일상이 시작되는',
        titleLine2: '차별화된 커뮤니티 공간',
        desc: '입주민 모두 건강한 삶을 위해 다양한 운동시설부터 학습공간까지 멀리 나가지 않아도 단지 안에서 여가, 문화생활을 누릴 수 있습니다.',
        keymap: { src: '/apt/forena-incheon-hagik/club-keymap.png', alt: '커뮤니티 시설 동별 위치 키맵(101~105동)', width: 235, height: 275 },
      },
      panels: [
        {
          badge: { label: 'B1', color: '#f28a2c' },
          items: [
            {
              title: '골프 트레이닝 센터',
              color: '#f28a2c',
              align: 'right',
              desc: '소음에 방해받지 않도록 지하 1층에 설계하여, 스크린골프 및 퍼팅룸을 별도로 자유롭게 이용할 수 있는 쾌적한 실내 연습 공간',
              legend: ['골프연습장', '스크린골프', '퍼팅룸', '샤워 & 락커룸(남)'],
              image: { src: '/apt/forena-incheon-hagik/club-golf.jpg', alt: 'B1 골프 트레이닝 센터 아이소메트릭 평면도', width: 588, height: 400 },
            },
          ],
        },
        {
          badge: { label: '1F', color: '#555557' },
          items: [
            {
              title: '시니어 클럽 하우스 & 북하우스',
              color: '#2fa58c',
              desc: '휴식, 친교, 취미생활을 위한 실버 전용 공간과 독서, 문화 활동을 위한 작은 도서관',
              legend: ['할머니방', '오락실', '할아버지방', '취미실', '작은도서관', '독서실(남)', '독서실(여)'],
              legendColumns: 3,
              image: { src: '/apt/forena-incheon-hagik/club-senior.jpg', alt: '1F 시니어 클럽 하우스 & 북하우스 아이소메트릭 평면도', width: 480, height: 420 },
            },
            {
              title: '포레나 프리스쿨',
              color: '#2f8fc6',
              align: 'right',
              desc: '입주민들이 자녀를 안심하고 맡길 수 있는 단지 내 어린이집',
              legend: ['보육실1', '주방', '유희실1', '보육실2', '원장실', '교사실', '유희실2', '보육실3'],
              legendColumns: 3,
              image: { src: '/apt/forena-incheon-hagik/club-preschool.jpg', alt: '1F 포레나 프리스쿨 아이소메트릭 평면도', width: 490, height: 500 },
            },
          ],
        },
        {
          badge: { label: '1F', color: '#6f2f9d' },
          items: [
            {
              title: '웰니스센터',
              color: '#6f2f9d',
              align: 'right',
              desc: '다양한 운동기구를 구비하여, 개인별 수준에 맞는 운동을 통해 몸과 마음을 활력있게 만드는 피트니스 공간, 요가·스트레칭 등 다양한 운동을 할 수 있도록 구비된 별도의 독립 공간',
              legend: ['피트니스', 'GX룸', '샤워 & 락커룸(여)', '관리사무소'],
              image: { src: '/apt/forena-incheon-hagik/club-wellness.jpg', alt: '1F 웰니스센터 아이소메트릭 평면도', width: 625, height: 700 },
            },
          ],
        },
      ],
    },

    // 상담신청/관심고객등록 폼 — vipForm.showAfterVideo가 true라 히어로 섹션 바로 다음에
    // 이 섹션이 한 번 더 렌더링되고(id: `${id}-early`), 기존과 동일하게 페이지 맨 아래에도 렌더링됨
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'INTEREST REGISTRATION',
      titleLine1: '포레나 인천학익',
      titleLine2: '관심고객등록',
      desc: '간단한 정보를 남겨주시면 학익 4구역 재개발사업 「포레나 인천학익」의 분양 일정과 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      // 요청 반영 — 여백 없는 로고로 교체해 가운데 정렬 + 크게(170px), 하이라이트 문구는 "학익새도시의 중심," 뒤에서 줄바꿈
      logo: { src: '/apt/forena-incheon-hagik/hero-brand-logo.png', alt: '포레나 인천학익', width: 642, height: 189 },
      logoAlign: 'center',
      logoWidth: 170,
      highlightText: '학익새도시의 중심,\n포레나 인천학익',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '학익4주택재개발정비사업조합' },
        { label: '시공', value: '(주)한화/건설' },
        { label: '분양대행', value: '(주)루트이앤씨' },
        // 요청 반영 — 대행사 정보는 구분선 아래 새 줄에서 시작(dividerBefore), 라벨/문구 변경 및 대행사 전화번호 추가
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
      csPhone: '1877-3569',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
