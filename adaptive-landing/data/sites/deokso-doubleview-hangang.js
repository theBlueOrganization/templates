// 덕소역 더블뷰 한강 — 경기도 남양주시 와부읍 덕소리 560-7번지 일원(홍보관은 560-25번지 일원),
// 덕소강변 민간임대주택 개발사업. 2026-09-07 카카오톡으로 수령한 공식 브리핑자료(덕소역 더블뷰
// 브리핑자료 박 팀장 8.19, pptx/pdf)에서 사업개요 스펙표·Premium 7·평면도·동호수배치표·단지배치도
// 이미지를 직접 확보해 채웠다. 이 브리핑자료가 이전에 참고했던 공식 홈페이지 스크래핑(2026-09-03,
// 2개동·162세대·건폐율 20.79% 등)보다 최신·정확한 자료이므로 그 수치들을 전부 대체했다.
// structure는 example-apt.js와 동일한 표준 12필드 Signature 스택(the-sharp-geomdan-lakepark-2.js와
// 같은 방식)을 사용한다. 이미지는 public/apt/deokso-doubleview-hangang/ 에 원본 화질로 저장해 두었다.
//
// ⚠️ 확인한 중요 사실 — 반드시 인지하고 진행할 것:
//   이 현장은 「민간임대주택에 관한 특별법」+「협동조합 기본법」에 따른 "민간임대협동조합" 사업이다.
//   즉 일반 시행사·시공사가 주도하는 통상적인 장기임대와 달리, 조합원이 출자금을 모아 건립하고
//   10년 임차 후 우선 분양전환받는 구조(사업주체=조합, 시공사는 별도 계약, 자금은 신탁사가 관리,
//   HUG 보증보험으로 임대보증금 보증)다. 브리핑자료 표지에 시행 (주)하나산업개발, 자금관리
//   신영부동산신탁(주), 모집주체 덕소강변민간임대협동조합이 명시돼 있어 footer.companyLines에
//   반영했다. 시공사명만 브리핑자료에도 게시되어 있지 않아 미확인 상태로 남겨둠 — 확정되는 대로 교체 필요.
//   세대수는 브리핑자료 기준 3개동(101·102·103동)·지하2층~지상37층·총 278세대(59㎡형 75세대=
//   59A 57세대+59B 18세대, 74㎡형 203세대=74A 166세대+74B 37세대)가 정확한 수치다.
const config = {
  slug: 'deokso-doubleview-hangang',
  subdomain: '덕소역더블뷰한강',
  projectName: '덕소역 더블뷰 한강',
  shortName: '덕소역 더블뷰 한강',
  telNumber: '1566-7409',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/deokso-doubleview-hangang/hero-bg.png',
  adminPhones: ['01094216962'],
  sheetId: '',
  sheetTab: '덕소역더블뷰한강',
  showUtmInSms: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  colorTheme: {
    navy: '#0F1E31',
    ink: '#0F1E31',
    cream: '#eef5fa',
    gold: '#5b9bd5',
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
      logo: { src: '/apt/deokso-doubleview-hangang/logo-badge.png', alt: '덕소역 더블뷰 한강', width: 150, height: 28 },
      logoWhite: { src: '/apt/deokso-doubleview-hangang/logo-white.png', alt: '덕소역 더블뷰 한강', width: 150, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1566-7409',
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 메뉴바 — 히어로 텍스트를 없앤 만큼 접힌 세로 바로 통화·관심고객·전체
    // 메뉴 이동을 상시 노출한다. 모바일은 기존 SignatureMobileBottomBar가 동일 역할을 하므로 자동 숨김.
    quickMenu: {
      brand: 'DOUBLEVIEW HANGANG',
      phoneLabel: '전화상담',
      phone: '1566-7409',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '덕소역 더블뷰 한강\n상담을 도와드립니다.',
      address: '경기도 남양주시 와부읍 덕소리 560-25번지 일원',
      tagline: 'HANGANG PANORAMA VIEW\nDEOKSO DOUBLEVIEW HANGANG',
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

    // 출처: 공식 홈페이지 메인 카피("덕소역 역세권, 한강과 맞닿은 초 강변권 아파트", "4BAY 특화설계로
    // 365일 펼쳐지는 한강변 4계절 파노라마뷰") + 사업방식표(청약통장 불필요, 만 19세 이상 누구나)
    hero: {
      eyebrowLine1: '탁트인 한강뷰,',
      eyebrowLine2: '한강공원이 단지 바로 앞',
      titleLine1: '덕소역 역세권,',
      titleLine2: '한강과 맞닿은 초강변권 아파트',
      titleLine3: '덕소역 더블뷰 한강',
      descLine1: '경의중앙선·KTX 덕소역 도보 5분, GTX-E·F 노선(예정)',
      descLine2: '민간임대협동조합 방식, 임대의무기간 10년 후 우선 분양전환',
      descLine3: '지하 2층~지상 37층 3개동, 총 278세대',
      bgImage: { src: '/apt/deokso-doubleview-hangang/hero-bg.png', alt: '덕소역 더블뷰 한강 한강변 조감도' },
      bgImageMobile: { src: '/apt/deokso-doubleview-hangang/m-image.jpg', alt: '덕소역 더블뷰 한강 민간임대 아파트 임대분양, 한강·산 더블 조망' },
      hideTextMobile: true,
      textColor: '#ffffff',
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '덕소역 더블뷰 한강', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '방문예약 후 상담만 해도 안내',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 히어로 바로 다음에 오는 전체폭 영상 섹션 — 히어로는 정지 이미지(hero-bg.png/mobile-image.png)로
    // 두고, 영상(hero-bg.mp4)은 이 섹션에서만 재생.
    videoSection: {
      src: '/apt/deokso-doubleview-hangang/hero-bg.mp4',
      poster: '/apt/deokso-doubleview-hangang/hero-bg.png',
    },

    // 출처: 공식 홈페이지 사업안내(a1) 페이지 사업개요 스펙표 원문 그대로.
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '덕소강변 민간임대주택 개발사업',
      subtitle: '경기도 남양주시 와부읍 덕소리, 한강을 마주한 초강변 입지',
      photo: { src: '/apt/deokso-doubleview-hangang/hero-bg.png', alt: '덕소역 더블뷰 한강 한강변 조감도' },
      thumbs: [
        { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '덕소역 더블뷰 한강 한강변 전경' },
        { src: '/apt/deokso-doubleview-hangang/landscape-riverwalk.jpg', alt: '수변공원 산책로 레퍼런스' },
        { src: '/apt/deokso-doubleview-hangang/landscape-underline-ref.jpg', alt: '수변공원 조성 레퍼런스 — The Underline' },
        { src: '/apt/deokso-doubleview-hangang/landscape-riverside-ref.jpg', alt: '연속 수변녹지축 레퍼런스' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '덕소강변 민간임대주택 개발사업' },
        { label: '대지위치', value: '경기도 남양주시 와부읍 덕소리 560-7번지 일원' },
        { label: '대지면적', value: '8,565.00㎡(실사용면적)' },
        { label: '건폐율 / 용적률', value: '17.37% / 337.36%' },
        { label: '규모', value: '3개동 (지하2층~지상37층) / 공급세대 278세대(59㎡형 75세대, 74㎡형 203세대)' },
        { label: '건축면적', value: '1,480.00㎡' },
        { label: '연면적', value: '40,325.29㎡(지상 28,743.04㎡ / 지하 11,582.25㎡)' },
        { label: '주차대수', value: '330대 예정' },
        { label: '공급방식', value: '민간임대협동조합 (임대의무기간 10년, 종료 후 우선 분양전환)' },
      ],
    },

    // 출처: 공식 홈페이지 사업안내(a1) 페이지 — 교통(4통8달 교통 프리미엄), 교육(우수한 교육 프리미엄
    // + 농어촌특별전형 자료), 생활(풍부한 쇼핑·문화 프리미엄), 한강뷰(초강변 한강벨트 프리미엄) 원문.
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '한강이 마주하는 자리, ',
      eyebrowAccent: '덕소역 역세권',
      title: '한강과 역세권을\n동시에 품다',
      descTitle: '거실에서 펼쳐지는 파노라마 한강조망과 4통8달 교통망',
      descTitleAccent: ['파노라마 한강조망', '4통8달 교통망'],
      descBody1: '경의중앙선·KTX가 정차하는 덕소역 도보 5분, GTX-E·F 노선(예정)까지 더해지는 교통망,',
      descBody1Accent: ['덕소역 도보 5분', 'GTX-E·F 노선'],
      descBody2: '덕소역 더블뷰 한강이 남양주 와부읍의 새로운 기준을 완성합니다.',
      mapImage: { src: '/apt/deokso-doubleview-hangang/location-map.png', alt: '덕소역 더블뷰 한강 주변 광역 교통망 안내도' },
      features: [
        {
          titlePrefix: '',
          titleStrong: '초강변 한강벨트',
          titleSuffix: '',
          tag: 'RIVER VIEW',
          image: { src: '/apt/deokso-doubleview-hangang/location-sitemap.png', alt: '초강변 입지 — 덕소아파트 현장 위치도' },
          descStrong: '',
          descRest: '초강변 입지, 한강공원 삼패지구 인접, 한강조망·4Bay 특화설계(일부세대 제외)',
        },
        {
          titlePrefix: '',
          titleStrong: '4통8달 교통',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/deokso-doubleview-hangang/premium-ktx.jpg', alt: '교통 — 경의선·KTX·GTX-E,F 노선 안내' },
          descStrong: '',
          descRest: '덕소역 도보 5분(경의선·KTX), GTX-E,F(예정), 서울양양·수도권제1순환고속도로·강변북로, 덕소삼패 IC·미사대교·올림픽대로 진입 용이',
        },
        {
          titlePrefix: '',
          titleStrong: '우수한 교육환경',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/deokso-doubleview-hangang/premium-graduation.avif', alt: '교육 — 농어촌특별전형의 메카 덕소' },
          descStrong: '',
          descRest: '덕소초·와부초·예봉초·와부중 등 도보 학군, 덕소고·와부고 농어촌 특별전형 지원 가능',
        },
        {
          titlePrefix: '',
          titleStrong: '풍부한 생활 인프라',
          titleSuffix: '',
          tag: 'INFRA',
          image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '생활 — 단지 입구 전경' },
          descStrong: '',
          descRest: '롯데마트·현대프리미엄아울렛·스타필드 하남·신세계백화점·이케아 강동 및 한양대학교구리병원 등 인접',
        },
      ],
      disclaimer:
        '※ 상기 내용과 이미지는 공식 브리핑자료를 기준으로 구성했습니다. GTX-E·F 등 교통계획은 확정되지 않은 사항으로 관계기관의 결정에 따라 변경 또는 취소될 수 있으며, 이는 사업주체와 무관합니다.',
    },

    // 출처: 2026-09-07 수령한 공식 브리핑자료 PREMIUM 7 슬라이드 — 덕소뉴타운 개발(약 8,400세대 계획) 원문.
    premiumIntro: {
      eyebrow: 'DEOKSO NEWTOWN',
      titleLine1: '덕소미시신도시개발로',
      titleLine2: '미래는 더 커지고,\nGTX-E·F로 교통은 더 빨라진다',
      descLine1: '사업지 주변 19만여 평,\n약 8,400세대 규모 재개발로 조성되는\r명품 주거타운(예정)',
      descLine1Accent: ['8,400세대'],
      descLine2: '덕소역 더블뷰 한강이 그 새로운 출발점이 됩니다',
      bgImage: { src: '/apt/deokso-doubleview-hangang/hero-bg.png', alt: '덕소역 더블뷰 한강 한강변 조감도' },
    },

    // 호반건설 시공참여(LOI 수령) 관련 언론보도 캡처 — premiumIntro 섹션 바로 다음에 노출.
    newsImage: {
      src: '/apt/deokso-doubleview-hangang/NEWS.jpg',
      alt: '덕소역 더블뷰 한강, 호반건설 시공참여 사업참여의향서(LOI) 수령 관련 언론보도',
      width: 1045,
      height: 1488,
    },

    // 출처: 2026-09-07 수령한 공식 브리핑자료(덕소역 더블뷰 브리핑자료 박 팀장 8.19) "Premium 7" 슬라이드 원문 그대로.
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM 7',
      titlePlain: '덕소역 더블뷰 한강 ',
      titleAccent: 'Premium 7',
      subtitle: '교통부터 쇼핑·문화, 교육, 의료, 한강뷰, 직주근접, 역세권 미래가치까지',
      subtitleLight: '와부읍의 중심에서 누리는 7가지 프리미엄을 확인해보세요.',
      cards: [
        {
          num: 'PREMIUM 01',
          title: ['4통8달', '교통 프리미엄'],
          desc: [
            '덕소역 도보 5분(경의선·KTX), GTX-E,F(예정)',
            '서울양양·수도권제1순환고속도로·강변북로 등',
            '덕소삼패IC·미사대교·올림픽대로 진입 용이',
          ],
          image: { src: '/apt/deokso-doubleview-hangang/premium-ktx.jpg', alt: '4통8달 교통 프리미엄' },
        },
        {
          num: 'PREMIUM 02',
          title: ['풍부한 쇼핑,', '문화 프리미엄'],
          desc: [
            '롯데마트·현대프리미엄아울렛·스타필드 하남·신세계백화점',
            '이케아 강동·와부체육문화센터·와부도서관·행정복지센터',
            '강동·하남·다산신도시 인프라 이용가능',
          ],
          image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '풍부한 쇼핑, 문화 프리미엄' },
        },
        {
          num: 'PREMIUM 03',
          title: ['우수한', '교육 프리미엄'],
          desc: ['덕소초·와부초·예봉초·와부중 등 도보로 누리는 초/중/고 학군', '덕소고·와부고 등 농어촌 특별전형 지원 가능 교육특권'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-graduation.avif', alt: '우수한 교육 프리미엄' },
        },
        {
          num: 'PREMIUM 04',
          title: ['안심 의료서비스', '프리미엄'],
          desc: [
            '한양대학교구리병원·남양주한양병원·강동성심병원',
            '와부건강생활지원센터·치과/내과/정형외과/피부과 등',
            '당 사업지 인근 생활밀착형 병원 밀집',
          ],
          image: { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '안심 의료서비스 프리미엄' },
        },
        {
          num: 'PREMIUM 05',
          title: ['초강변', '한강벨트 프리미엄'],
          desc: ['초강변 입지, 한강공원 삼패지구, 친환경 단지설계(일부세대 제외)', '한강조망, 선호도 높은 4Bay 특화설계(일부세대 제외)'],
          image: { src: '/apt/deokso-doubleview-hangang/hero-bg.png', alt: '초강변 한강벨트 프리미엄' },
        },
        {
          num: 'PREMIUM 06',
          title: ['직주근접', '프리미엄'],
          desc: ['왕숙 도시첨단산업단지, 수도권 최대 - 2028년 판교테크노 밸리', '1.7배 규모/향후 16만명 고용 예정'],
          image: { src: '/apt/deokso-doubleview-hangang/location-map.png', alt: '직주 근접 프리미엄' },
        },
        {
          num: 'PREMIUM 07',
          title: ['덕소역세권', '미래가치 프리미엄'],
          desc: ['19만여 평 약 8,400세대 규모의 덕소뉴타운 개발(예정)', '덕소역 GTX-E,F 추가 예정(2035년 개통 목표)'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-future-value.jpg', alt: '덕소역세권 미래가치 프리미엄' },
        },
      ],
    },

    // 출처: 2026-09-07 수령한 공식 브리핑자료 원본 동호수 배치도(101동·102동·103동 배치 + 타입별
    // 세대수 + 전체 동호수 그리드) 고화질 이미지 1장만 반영.
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '101동·102동·103동, 총 278세대',
      titleLine2: '한강을 마주한 강변 단지',
      desc: '동 배치와 타입별 라인 구성을 한눈에 확인해보세요.',
      singleImage: { src: '/apt/deokso-doubleview-hangang/complex-dongho-plan.png', alt: '덕소역 더블뷰 한강 동호수 배치도', width: 1359, height: 1825 },
    },

    // 출처: 공식 홈페이지 세대안내(a3) 페이지 평면 스펙표 원문 그대로(59㎡A·74㎡A·74㎡C 3개 타입).
    // 출처: 2026-09-07 수령한 공식 브리핑자료 "06. 설계도면 - 평면도" 슬라이드 4종(74A·74B·59A·59B) 스펙표 원문 그대로.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'DOUBLEVIEW HANGANG',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['한강을 품은 라이프스타일에 맞춘', '덕소역 더블뷰 한강', '전용 59㎡ 2개 타입, 74㎡ 2개 타입', '4가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '(18.07평형) 57세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-59a.jpg', alt: '덕소역 더블뷰 한강 59㎡A 타입 평면도', width: 1582, height: 1209 },
              specs: { exclusive: '59.75', common: '23.47', supply: '83.22', otherCommon: '38.30', contract: '121.52' },
            },
            {
              letter: 'B',
              countText: '(18.07평형) 18세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-59b.jpg', alt: '덕소역 더블뷰 한강 59㎡B 타입 평면도', width: 1582, height: 1209 },
              specs: { exclusive: '59.75', common: '23.47', supply: '83.22', otherCommon: '38.30', contract: '121.52' },
            },
          ],
        },
        {
          area: '74㎡',
          types: [
            {
              letter: 'A',
              countText: '(22.58평형) 166세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74a.jpg', alt: '덕소역 더블뷰 한강 74㎡A 타입 평면도', width: 1600, height: 1209 },
              specs: { exclusive: '74.66', common: '33.16', supply: '107.83', otherCommon: '43.93', contract: '151.76' },
            },
            {
              letter: 'B',
              countText: '(22.61평형) 37세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74b.jpg', alt: '덕소역 더블뷰 한강 74㎡B 타입 평면도', width: 1598, height: 1209 },
              specs: { exclusive: '74.77', common: '33.16', supply: '107.86', otherCommon: '43.94', contract: '151.80' },
            },
          ],
        },
      ],
    },

    // 출처: 2026-09-07 수령한 공식 브리핑자료 "08. 커뮤니티 시설(Community premium)" 슬라이드 —
    // 피트니스·입주민라운지·게스트하우스·북카페·돌봄센터·스크린골프장·단지내 사우나·시니어클럽
    // 8종 실사진(sharp로 개별 컷 크롭)과 카피 원문을 그대로 8칸 카드 그리드로 나열.
    // SignatureClub(풀 규모 클럽하우스용, 히어로+쇼케이스+halves 슬롯)은 이 현장 자산(합성 그리드
    // 사진 2장)과 슬롯 형태가 맞지 않아 크롭이 어색해 SignatureClubSimple(카드 그리드형)로 교체.
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      hideIcon: true,
      intro: {
        watermark: 'COMMUNITY',
        titleLine1: 'Your Life, Your Vision –',
        titleLine2: '삶에 품격을 더하는 커뮤니티',
        desc: '힐링 라이프스타일을 위한 운동시설은 입주민의 삶에 매일매일 활력을 넘치게 하고, 여유롭고 편안하게 누릴 수 있는 커뮤니티 시설은 삶의 품격까지 더합니다.',
      },
      facilities: [
        {
          key: 'fitness',
          image: { src: '/apt/deokso-doubleview-hangang/community-fitness.jpg', alt: '피트니스', width: 374, height: 170 },
          icon: 'fitness',
          labelEn: 'FITNESS',
          title: '피트니스',
          desc: '다양한 운동기구를 갖춘 입주민을 위한 체력단련 공간',
        },
        {
          key: 'lounge',
          image: { src: '/apt/deokso-doubleview-hangang/community-lounge.jpg', alt: '입주민라운지', width: 374, height: 170 },
          icon: 'lounge',
          labelEn: 'LOUNGE',
          title: '입주민라운지',
          desc: '차 한잔의 여유를 즐기면서 편안하게 대화를 나눌 수 있는 소통의 공간',
        },
        {
          key: 'daycare',
          image: { src: '/apt/deokso-doubleview-hangang/community-daycare.jpg', alt: '돌봄센터', width: 373, height: 169 },
          labelEn: 'CARE',
          title: '돌봄센터',
          desc: '자녀들에게 쾌적하고 안전한 교육 환경을 제공하는 단지 내 돌봄 공간',
        },
        {
          key: 'screengolf',
          image: { src: '/apt/deokso-doubleview-hangang/community-screengolf.jpg', alt: '스크린골프장', width: 373, height: 169 },
          labelEn: 'GOLF',
          title: '스크린골프장',
          desc: '필드의 생생함을 느끼며 골프연습을 즐길 수 있는 스크린골프장',
        },
        {
          key: 'guesthouse',
          image: { src: '/apt/deokso-doubleview-hangang/community-guesthouse.jpg', alt: '게스트하우스', width: 374, height: 170 },
          labelEn: 'GUEST',
          title: '게스트하우스',
          desc: '친척, 손님 방문 시 내 집처럼 편안하게 머물 수 있는 공간',
        },
        {
          key: 'bookcafe',
          image: { src: '/apt/deokso-doubleview-hangang/community-bookcafe.jpg', alt: '북카페', width: 374, height: 170 },
          icon: 'library',
          labelEn: 'CAFE',
          title: '북카페',
          desc: '독서를 통해 마음의 양식을 쌓는 여가 공간',
        },
        {
          key: 'sauna',
          image: { src: '/apt/deokso-doubleview-hangang/community-sauna.jpg', alt: '단지내 사우나', width: 373, height: 169 },
          labelEn: 'SAUNA',
          title: '단지내 사우나',
          desc: '입주민들의 힐링과 재충전을 위해 목욕 시설을 갖춘 사우나',
        },
        {
          key: 'senior',
          image: { src: '/apt/deokso-doubleview-hangang/community-senior.jpg', alt: '시니어클럽', width: 373, height: 169 },
          labelEn: 'SENIOR',
          title: '시니어클럽',
          desc: '어르신들이 편안히 담소를 나눌 수 있는 여가공간',
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '덕소역 더블뷰 한강',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 방문 상담은 10:00~18:00 1시간 단위로 예약할 수 있습니다.',
      serviceOptions: ['홍보관 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `당사는 고객의 정보를 중요시하며 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 준수하고 있으며, 수집된 정보는 고객의 방문예약과 상담을 위한 목적으로만 활용됩니다.

1. 수집하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
2. 개인정보 수집 및 이용목적 : 덕소역 더블뷰 한강 분양(임대)정보 안내, 방문예약 접수 및 상담 진행
3. 개인정보 보유 및 이용기간 : 분양(임대 모집) 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    // 출처: 2026-09-07 수령한 공식 브리핑자료 표지 — 시행/개발신탁/자금관리/모집주체 원문. 시공사명은
    // 본 브리핑자료에도 별도 게시되어 있지 않아 미확인 상태로 남겨둠(확정되는 대로 교체 필요).
    footer: {
      logo: { src: '/apt/deokso-doubleview-hangang/logo-badge.png', alt: '덕소역 더블뷰 한강', width: 160, height: 30 },
      highlightText: '1566-7409',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사업은 민간임대협동조합 방식으로 진행되며, 조합원 출자·분양전환 조건 등은 계약 전 반드시 공식 자료로 확인하시기 바랍니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용 및 사업 일정은 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1566-7409',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
