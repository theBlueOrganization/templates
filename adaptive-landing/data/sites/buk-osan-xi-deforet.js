// 북오산자이 드포레 — 경기도 오산시 내삼미동 288번지 일원(내삼미2구역 지구단위계획구역 A2BL), GS건설 Xi
// 브랜드 아파트. 아파트 지하2층~지상29층 11개동, 총 1,517세대 및 부대복리시설, 2029년 10월 입주 예정.
// 시행 한국투자부동산신탁㈜, 시공 GS건설(주), 위탁 (주)오앤티비홀딩스.
// 출처: 참고 사이트(https://ofthepoem.com, 2026-10-01 확인) — 메인 비주얼 5장(PC/모바일), 사업개요·입지환경·
// 프리미엄·단지설계·단지배치도·동호배치도·평면안내(12타입)·CLUB XIAN·SYSTEM·공급안내 원본 이미지/문구 반영.
// 참고 사이트 메인의 "총 1,783세대" 문구는 오산헤리티지자이 값이 잘못 남아있는 것으로 보여, 사업개요·
// 공급안내 원문 값(1,517세대)을 사용.
// 대표번호 1555-3124, 상담 알림 010-8602-8883 (2026-10-01 사용자 전달값).
// 구조는 같은 자이 브랜드인 osan-heritage-xi-xi를 기준으로 구성.
const config = {
  slug: 'buk-osan-xi-deforet',
  subdomain: '북오산자이드포레',
  projectName: '북오산자이드포레',
  metaTitle: '북오산자이 드포레',
  shortName: '북오산자이 드포레',
  telNumber: '1555-3124',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/buk-osan-xi-deforet/og.jpg',
  // 참고 사이트 이미지 전반의 남색(#0f2c45 계열)과 자이 포인트 블루를 사용
  colorTheme: {
    navy: '#12304a',
    ink: '#12304a',
    cream: '#ffffff',
    gold: '#006899',
    visitBtnColor: '#ffffff',
  },
  adminPhones: ['01086028883'],
  sheetId: '',
  sheetTab: '북오산자이드포레',
  showUtmInSms: true,
  kakao: true,

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
      // 자이 공용 BI 흰색 로고(osan-heritage-xi-xi와 동일 파일)
      logo: { src: '/apt/buk-osan-xi-deforet/logo-white.svg', alt: '북오산자이 드포레', width: 76, height: 41 },
      logoSize: { base: 52, lg: 64, xl: 72 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1555-3124',
    },

    quickMenu: {
      brand: '북오산자이 드포레',
      phoneLabel: '분양문의',
      phone: '1555-3124',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '북오산자이 드포레\n분양 상담을 도와드립니다.',
      address: '경기도 오산시 내삼미동 288번지 일원',
      tagline: 'SIGNATURE LIFE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '상담신청 및 방문예약', targetId: 'vip-reservation' },
      ],
    },

    // 요청 반영(2026-10-01) — 인트로(원 2개 드로잉 → 자이 로고 → 원이 화면 전체로 열리며 히어로) 추가.
    //   배경은 히어로 첫 슬라이드와 같은 이미지라 열린 뒤 히어로로 그대로 이어짐 (SignatureCircleIntro)
    circleIntro: {
      logo: { src: '/apt/buk-osan-xi-deforet/logo-white.svg', alt: '북오산자이 드포레', width: 76, height: 41 },
      bgImage: '/apt/buk-osan-xi-deforet/hero-slide-life.webp',
      bgImageMobile: '/apt/buk-osan-xi-deforet/hero-slide-life-mobile.webp',
    },

    hero: {
      eyebrowLine1: '자이라는 이름으로 완성될',
      eyebrowLine2: '새로운 시그니처 라이프',
      titleLine1: '북오산자이 드포레',
      titleLine2: '총 1,517세대 자이 대단지',
      descLine1: '동탄과 세교신도시를 연결하는 프리미엄 라이프',
      descLine2: '수도권제2순환고속도로 북오산IC, 사통팔달 교통망',
      descLine3: '지구 내 초등학교(계획)와 필봉산의 쾌적한 자연환경',
      // 참고 사이트 메인 비주얼 슬라이드 5장(PC 1920x1080 / 모바일 640x645) 원본 순서 그대로 —
      // 슬라이드 이미지에 문구가 포함돼 있어 hideText로 텍스트 오버레이를 막음
      slides: [
        {
          bgImage: { src: '/apt/buk-osan-xi-deforet/hero-slide-life.webp', alt: '북오산자이 드포레 — 자이라는 이름으로 완성될 새로운 시그니처 라이프' },
          bgImageMobile: { src: '/apt/buk-osan-xi-deforet/hero-slide-life-mobile.webp', alt: '북오산자이 드포레 — 자이라는 이름으로 완성될 새로운 시그니처 라이프' },
        },
        {
          bgImage: { src: '/apt/buk-osan-xi-deforet/hero-slide-double.webp', alt: '동탄과 세교신도시의 더블생활권' },
          bgImageMobile: { src: '/apt/buk-osan-xi-deforet/hero-slide-double-mobile.webp', alt: '동탄과 세교신도시의 더블생활권' },
        },
        {
          bgImage: { src: '/apt/buk-osan-xi-deforet/hero-slide-traffic.webp', alt: '수도권 이동이 편리한 사통팔달 교통망' },
          bgImageMobile: { src: '/apt/buk-osan-xi-deforet/hero-slide-traffic-mobile.webp', alt: '수도권 이동이 편리한 사통팔달 교통망' },
        },
        {
          bgImage: { src: '/apt/buk-osan-xi-deforet/hero-slide-healing.webp', alt: '여유롭고 쾌적한 자연환경' },
          bgImageMobile: { src: '/apt/buk-osan-xi-deforet/hero-slide-healing-mobile.webp', alt: '여유롭고 쾌적한 자연환경' },
        },
        {
          bgImage: { src: '/apt/buk-osan-xi-deforet/hero-slide-education.webp', alt: '도보 통학 가능한 지구 내 초등학교 계획' },
          bgImageMobile: { src: '/apt/buk-osan-xi-deforet/hero-slide-education-mobile.webp', alt: '도보 통학 가능한 지구 내 초등학교 계획' },
        },
      ],
      overlay: false,
      hideText: true,
      // 모바일 슬라이드 원본이 640x645(거의 정사각형)라 기본 640/835로 잡으면 좌우가 잘려 문구가 가려짐.
      // 요청 반영(2026-10-01) — 원본 비율 그대로는 낮아 보여 약 24% 늘림(좌우 각 ~10% 잘림 — 슬라이드 왼쪽 문구가
      //   화면 끝에서 16px 남는 한계치라 이보다 더 늘리면 문구가 잘림)
      slidesAspectRatioMobile: '640 / 800',
      // 요청 반영(2026-10-01) — 모바일 히어로 하단에 마우스 모양 스크롤 힌트(768px 이상에서는 자동 숨김).
      //   안내바를 히어로 아래로 내려둬서(mobileBar.offsetY) 기본 위치(하단 100px 위)는 너무 높아 하단 16px로 붙임
      mobileScrollMouse: true,
      mobileBgBottomInset: 0,
      badge: {
        lines: ['GS건설', '자이 대단지'],
        borderColor: '#5AC8FA',
      },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '북오산자이 드포레', textLight: ' 공식 안내센터입니다.' }],
        callLabel: '전화상담',
        visitLabel: '방문예약',
        hideActionButtons: true,
        // 안내바(40px)가 슬라이드 하단 문구를 가리지 않도록 히어로 바로 아래로 내림
        offsetY: 40,
      },
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '북오산자이 드포레',
      subtitle: '경기도 오산시 내삼미동, 내삼미2구역 A2BL에 들어서는 총 1,517세대 자이 대단지',
      photo: { src: '/apt/buk-osan-xi-deforet/overview-landmark.webp', alt: '북오산자이 드포레 단지 투시도' },
      thumbs: [
        { src: '/apt/buk-osan-xi-deforet/overview-aerial.webp', alt: '북오산자이 드포레 조감도' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다(면적 및 세대수 등 포함).',
      // 출처: 참고 사이트 사업개요(overview01) 및 공급안내(supply01) 원문
      specItems: [
        { label: '사업명', value: '북오산자이 드포레' },
        { label: '대지위치', value: ['경기도 오산시 내삼미동 288번지 일원', '[내삼미2구역 지구단위계획구역 A2BL]'] },
        { label: '공급규모', value: '아파트 지하2층~지상29층 11개동, 총 1,517세대 및 부대복리시설' },
        { label: '연면적', value: 'A2BL 244,439.8963㎡' },
        { label: '주택형', value: '전용 59㎡ / 74㎡ / 84㎡ / 99㎡ / 124㎡P / 125㎡P' },
        { label: '분양물 용도', value: '공동주택 및 부대복리시설' },
        { label: '시행/시공', value: '한국투자부동산신탁㈜ / GS건설(주)' },
        { label: '입주예정일', value: '2029년 10월 예정 (정확한 입주일자는 추후 통보)' },
      ],
    },

    location: {
      id: 'location',
      navLabel: '입지환경',
      label: 'LOCATION',
      // 참고 사이트 입지환경 이미지 상단(헤드라인 + 광역 위치도 + A1/A2BL 블록 안내도) 부분만 잘라 사용
      mapImage: { src: '/apt/buk-osan-xi-deforet/location-map.webp', alt: '북오산자이 드포레 광역 위치 안내도 — 동탄과 세교신도시를 연결하는 프리미엄 라이프', width: 1100, height: 1100 },
      // 카드 사진은 문구가 없는 메인 비주얼 슬라이드의 사진 영역을 잘라 사용
      features: [
        {
          titlePrefix: '도보 통학 가능한',
          titleStrong: ' 지구 내 초등학교',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/buk-osan-xi-deforet/feature-education.webp', alt: '도보 통학 가능한 지구 내 초등학교 계획' },
          descStrong: '',
          descRest: '지구 내 내삼미1초(가칭, 계획) 신설 계획, 인근 매홀중·매홀고 등 우수한 교육환경',
        },
        {
          titlePrefix: '여유롭고 쾌적한',
          titleStrong: ' 자연환경',
          titleSuffix: '',
          tag: 'HEALING',
          image: { src: '/apt/buk-osan-xi-deforet/feature-healing.webp', alt: '여유롭고 쾌적한 자연환경' },
          descStrong: '',
          descRest: '단지 내 조경 및 지구 내 근린공원 계획, 인근 필봉산·오산천·물향기수목원 등 휴식공간',
        },
        {
          titlePrefix: '수도권 이동이 편리한',
          titleStrong: ' 사통팔달 교통망',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/buk-osan-xi-deforet/feature-traffic.webp', alt: '수도권 이동이 편리한 사통팔달 교통망' },
          descStrong: '',
          descRest: '수도권제2순환고속도로 북오산IC 이용, 지하철 1호선 오산대역·세마역 등 대중교통 이용 가능',
        },
        {
          titlePrefix: '동탄과 세교신도시의',
          titleStrong: ' 더블생활권',
          titleSuffix: '',
          tag: 'LIFE',
          image: { src: '/apt/buk-osan-xi-deforet/feature-double.webp', alt: '동탄과 세교신도시의 더블생활권' },
          descStrong: '',
          descRest: '트레이더스 홀세일 클럽·롯데백화점(동탄점) 이용 편리, 오산세교1지구 및 동탄1신도시 접근성 우수',
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 개발계획과 교통계획은 인허가와 관계기관의 사업 추진 과정에 따라 변경, 지연 또는 취소될 수 있습니다.',
    },

    premiumIntro: {
      // 밝은 조감도 위 흰 문구 가독성을 위해 원본을 어둡게(밝기 60%) 보정한 배경 사용
      bgImage: { src: '/apt/buk-osan-xi-deforet/premium-intro-bg.webp', alt: '북오산자이 드포레 단지 조감도' },
      overlay: false,
      introBox: {
        color: '#ffffff',
        line1: '동탄과 세교신도시를 연결하는',
        line2: '프리미엄 라이프가 시작됩니다.',
      },
      titleLine1: '북오산자이 드포레',
      titleUnderline: true,
      titleColor: '#ffffff',
      footnote: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
    },

    // 출처: 참고 사이트 단지설계(complex01) 원본 — "곳곳마다 펼쳐지는 자연의 풍성한 혜택과 마주하다"
    newsImage: {
      src: '/apt/buk-osan-xi-deforet/complex-design.webp',
      alt: '북오산자이 드포레 단지설계 — 곳곳마다 펼쳐지는 자연의 풍성한 혜택과 마주하다',
      width: 1100,
      height: 1805,
      maxWidth: 1000,
    },

    // 출처: 참고 사이트 프리미엄(premium) "당신의 삶이 더 빛나게 될 가치 6" 원문 — 카드 사진은 원본
    // 3x2 그리드에서 각 칸을 그대로 잘라낸 것
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '북오산자이 드포레 ',
      titleAccent: 'PREMIUM 6',
      cardTextAlign: 'center',
      cards: [
        {
          num: '01',
          icon: 'tower',
          title: ['Value', '자이 대단지 프리미엄'],
          desc: ['총 1,517세대', '자이 브랜드 대단지'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-01.webp', alt: 'Value — 총 1,517세대 자이 대단지 프리미엄' },
        },
        {
          num: '02',
          icon: 'cart',
          title: ['Double', '더블생활권'],
          desc: ['동탄·세교의 생활인프라를', '함께 누리는 더블생활권'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-02.webp', alt: 'Double — 동탄·세교의 생활인프라 더블생활권' },
        },
        {
          num: '03',
          icon: 'car',
          title: ['Pass', '사통팔달 교통'],
          desc: ['북오산IC 이용', '사통팔달 광역 교통망'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-03.webp', alt: 'Pass — 북오산IC 이용 사통팔달 교통' },
        },
        {
          num: '04',
          icon: 'city',
          title: ['Extend', '도시확장의 중심'],
          desc: ['북오산 개발축의 핵심,', '내삼미1·2·3구역 개발계획'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-04.webp', alt: 'Extend — 북오산 개발축의 핵심 도시확장의 중심' },
        },
        {
          num: '05',
          icon: 'school',
          title: ['Safety', '안전한 도보통학'],
          desc: ['지구 내 초등학교(계획)', '안전한 도보통학'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-05.webp', alt: 'Safety — 지구 내 초등학교(계획) 안전한 도보통학' },
        },
        {
          num: '06',
          icon: 'forest',
          title: ['Healing', '쾌적한 자연환경'],
          desc: ['단지 가까이 필봉산,', '쾌적한 자연환경'],
          image: { src: '/apt/buk-osan-xi-deforet/premium-photo-06.webp', alt: 'Healing — 단지 가까이 필봉산 쾌적한 자연환경' },
        },
      ],
    },

    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '지하2층~지상29층 11개동',
      titleLine2: '총 1,517세대, 북오산의 새로운 랜드마크',
      desc: '단지배치도와 동호배치도로 동 배치와 라인별 주택형 구성을 한눈에 확인해보세요.',
      // 출처: 참고 사이트 단지배치도(complex02)·동호배치도(complex03) 원본
      siteMap: {
        image: { src: '/apt/buk-osan-xi-deforet/complex-sitemap.webp', alt: '북오산자이 드포레 단지배치도', width: 1100, height: 1041 },
      },
      donghoChart: {
        image: { src: '/apt/buk-osan-xi-deforet/complex-dongho.webp', alt: '북오산자이 드포레 동호수배치도(201~211동)', width: 1100, height: 1455 },
      },
    },

    // 출처: 참고 사이트 평면안내(product01) 12개 타입 원본 — 면적표·평면이 한 장에 포함된 완성 이미지라
    // imageTabs(탭 + 이미지 1장) 구성 사용
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '라이프스타일을 존중하는 59㎡부터 125㎡P 펜트하우스까지, 북오산자이 드포레의 12개 주택형을 만나보세요.',
      tabColumns: 6,
      tabColumnsMobile: 4,
      zoomLightbox: true,
      tabs: [
        { label: '59A', image: { src: '/apt/buk-osan-xi-deforet/unit-59a.webp', alt: '북오산자이 드포레 59A 평면안내', width: 1100, height: 2213 } },
        { label: '59B', image: { src: '/apt/buk-osan-xi-deforet/unit-59b.webp', alt: '북오산자이 드포레 59B 평면안내', width: 1100, height: 1987 } },
        { label: '74A', image: { src: '/apt/buk-osan-xi-deforet/unit-74a.webp', alt: '북오산자이 드포레 74A 평면안내', width: 1100, height: 2047 } },
        { label: '74B', image: { src: '/apt/buk-osan-xi-deforet/unit-74b.webp', alt: '북오산자이 드포레 74B 평면안내', width: 1100, height: 2046 } },
        { label: '74C', image: { src: '/apt/buk-osan-xi-deforet/unit-74c.webp', alt: '북오산자이 드포레 74C 평면안내', width: 1100, height: 2048 } },
        { label: '84A', image: { src: '/apt/buk-osan-xi-deforet/unit-84a.webp', alt: '북오산자이 드포레 84A 평면안내', width: 1100, height: 2179 } },
        { label: '84B', image: { src: '/apt/buk-osan-xi-deforet/unit-84b.webp', alt: '북오산자이 드포레 84B 평면안내', width: 1100, height: 2184 } },
        { label: '84C', image: { src: '/apt/buk-osan-xi-deforet/unit-84c.webp', alt: '북오산자이 드포레 84C 평면안내', width: 1100, height: 2212 } },
        { label: '99A', image: { src: '/apt/buk-osan-xi-deforet/unit-99a.webp', alt: '북오산자이 드포레 99A 평면안내', width: 1100, height: 2181 } },
        { label: '99B', image: { src: '/apt/buk-osan-xi-deforet/unit-99b.webp', alt: '북오산자이 드포레 99B 평면안내', width: 1100, height: 2179 } },
        { label: '124P', image: { src: '/apt/buk-osan-xi-deforet/unit-124p.webp', alt: '북오산자이 드포레 124P 펜트하우스 평면안내', width: 1100, height: 1897 } },
        { label: '125P', image: { src: '/apt/buk-osan-xi-deforet/unit-125p.webp', alt: '북오산자이 드포레 125P 펜트하우스 평면안내', width: 1100, height: 1803 } },
      ],
    },

    // 출처: 참고 사이트 CLUB XIAN(clubxian)·SYSTEM(system)·기본제공품목(basic) 원본 이미지
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      plainImageGroups: [
        {
          title: 'CLUB XIAN',
          tabs: [
            {
              label: '커뮤니티 시설',
              image: { src: '/apt/buk-osan-xi-deforet/club-xian.webp', alt: '북오산자이 드포레 CLUB XIAN(B1) 커뮤니티 시설 안내', width: 1100, height: 3061 },
            },
          ],
        },
        {
          title: 'SYSTEM',
          tabs: [
            {
              label: '스마트 & 안전',
              image: { src: '/apt/buk-osan-xi-deforet/system-smart.webp', alt: '북오산자이 드포레 스마트 & 안전 시스템', width: 1100, height: 2001 },
            },
            {
              label: '에너지',
              image: { src: '/apt/buk-osan-xi-deforet/system-energy.webp', alt: '북오산자이 드포레 에너지 시스템', width: 1100, height: 1434 },
            },
            {
              label: '편의',
              image: { src: '/apt/buk-osan-xi-deforet/system-convenience.webp', alt: '북오산자이 드포레 편의 시스템', width: 1100, height: 1462 },
            },
            {
              label: '기본제공품목',
              image: { src: '/apt/buk-osan-xi-deforet/basic-options.webp', alt: '북오산자이 드포레 확장 시 기본 제공품목 및 개별 유상옵션', width: 1100, height: 1998 },
            },
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VIP Reservation',
      titleLine1: '북오산자이 드포레',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다.',
      serviceOptions: ['견본주택 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 견본주택 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 견본주택 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    // 출처: 참고 사이트 푸터(시행·시공·위탁) 원문
    footer: {
      logo: { src: '/apt/buk-osan-xi-deforet/logo-white.svg', alt: '북오산자이 드포레', width: 76, height: 41 },
      logoAlign: 'center',
      highlightText: '분양문의 1555-3124',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '한국투자부동산신탁㈜' },
        { label: '시공', value: 'GS건설(주)' },
        { label: '위탁', value: '(주)오앤티비홀딩스' },
        { label: '이메일', value: 'addup@addup.kr' },
        { label: '담당회사', value: '주식회사 더블루파트너스', newLine: true },
        { label: '사업자 등록번호', value: '789-81-03093' },
        { label: '전화번호', value: '1666-1755' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1555-3124',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 요청 반영(2026-10-01) — 사용자 전달 "모델하우스 방문 및 계약 이벤트"(10/7~10/18) 이미지로 진입 팝업 교체
    // (참고 사이트의 잔여세대 동·호지정 계약 팝업 대체). 클릭 시 상담신청 섹션으로 이동
    popup: {
      enabled: true,
      images: [
        {
          src: '/apt/buk-osan-xi-deforet/popup-event.webp',
          alt: '북오산자이 드포레 모델하우스 방문 및 계약 이벤트(10/7~10/18) — 방문 상담 시 신세계상품권 1만원(선착순 30명), 복권 이벤트 1등 신세계상품권 30만원·2등 10만원권·3등 정관장 홍삼셋트',
          width: 1024,
          height: 1536,
          link: '#vip-reservation',
          linkLabel: '방문예약 바로가기',
        },
      ],
    },
  },
}

export default config
