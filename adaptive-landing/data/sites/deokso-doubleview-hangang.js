// 덕소역 더블뷰 한강 — 경기도 남양주시 와부읍 덕소리 560-25번지 일원, 덕소강변 민간임대주택
// 개발사업. 공식 홈페이지(http://xn--wv4b07f0no7c73w61d.kr/, "덕소역더블뷰한강.kr")에서 사업개요
// 스펙표·Premium 7·교통망 안내·평면도·동호수배치표 이미지를 직접 확보해 채웠다(2026-09-03 스크래핑).
// structure는 example-apt.js와 동일한 표준 12필드 Signature 스택(the-sharp-geomdan-lakepark-2.js와
// 같은 방식)을 사용한다. 이미지는 public/apt/deokso-doubleview-hangang/ 에 원본 화질로 저장해 두었다.
//
// ⚠️ 공식 홈페이지에서 확인한 중요 사실 — 반드시 인지하고 진행할 것:
//   이 현장은 「민간임대주택에 관한 특별법」+「협동조합 기본법」에 따른 "민간임대협동조합" 사업이다.
//   즉 일반 시행사·시공사가 주도하는 통상적인 장기임대와 달리, 조합원이 출자금을 모아 건립하고
//   10년 임차 후 우선 분양전환받는 구조(사업주체=조합, 시공사는 별도 계약, 자금은 신탁사가 관리,
//   HUG 보증보험으로 임대보증금 보증)다. 공식 홈페이지 원문에도 "사업주체(조합)" 표를 그대로 노출하고
//   있어 카피도 이 구조를 숨기지 않고 그대로 반영했다. 시행/시공사명은 공식 홈페이지에도 게시되어
//   있지 않아 미확인 상태로 남겨둠 — 확정되는 대로 footer.companyLines 교체 필요.
//   세대수는 이전에 참고했던 뉴스 기사(278세대설)와 달리, 공식 사업개요표 기준 2개동·162세대가
//   맞는 수치다(unitPlan 세대수 합계 134세대는 공식 세대안내 페이지에 게시된 3개 타입 기준이며,
//   나머지는 별도 타입/충별 배분으로 추정 — 공급 시 공식 입주자모집공고로 재확인 필요).
const config = {
  slug: 'deokso-doubleview-hangang',
  subdomain: '덕소역더블뷰한강',
  projectName: '덕소역 더블뷰 한강',
  shortName: '덕소역 더블뷰 한강',
  telNumber: '1566-2696',
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
    navy: '#0f3a5f',
    ink: '#0a253f',
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
      logo: { src: '/apt/deokso-doubleview-hangang/logo.png', alt: '덕소역 더블뷰 한강', width: 150, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1566-2696',
    },

    // 출처: 공식 홈페이지 메인 카피("덕소역 역세권, 한강과 맞닿은 초 강변권 아파트", "4BAY 특화설계로
    // 365일 펼쳐지는 한강변 4계절 파노라마뷰") + 사업방식표(청약통장 불필요, 만 19세 이상 누구나)
    hero: {
      eyebrowLine1: '청약통장 없이 만 19세 이상 누구나',
      eyebrowLine2: '덕소역 역세권, 한강과 맞닿은 초강변권 아파트',
      titleLine1: '덕소역 더블뷰 한강,',
      titleLine2: '4Bay 특화설계로 펼쳐지는 한강 4계절 파노라마뷰',
      descLine1: '경의중앙선·KTX 덕소역 도보 5분, GTX-E·F 노선(예정)',
      descLine1Accent: ['덕소역 도보 5분'],
      descLine2: '민간임대협동조합 방식, 임대의무기간 10년 후 우선 분양전환',
      descLine3: '지하 2층~지상 28층 2개동, 총 162세대',
      bgImage: { src: '/apt/deokso-doubleview-hangang/hero-bg.png', alt: '덕소역 더블뷰 한강 한강변 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '덕소역 더블뷰 한강', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '방문예약 후 상담만 해도 안내',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 공식 홈페이지 사업안내(a1) 페이지 사업개요 스펙표 원문 그대로.
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '덕소강변 민간임대주택 개발사업',
      subtitle: '경기도 남양주시 와부읍 덕소리, 한강을 마주한 초강변 입지',
      photo: { src: '/apt/deokso-doubleview-hangang/summary-spec-table.png', alt: '덕소역 더블뷰 한강 사업개요 및 조감도' },
      thumbs: [
        { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '덕소역 더블뷰 한강 한강변 전경' },
        { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '단지 입구 조감도' },
        { src: '/apt/deokso-doubleview-hangang/landscape-1.png', alt: '단지 내 조경 전경' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '덕소강변 민간임대주택 개발사업' },
        { label: '대지위치', value: '경기도 남양주시 와부읍 덕소리 560-25번지 일원' },
        { label: '지역지구', value: '제3종 일반주거지역' },
        { label: '주용도', value: '공동주택, 근린생활시설, 부대복리시설' },
        { label: '건폐율 / 용적률', value: '20.79% / 223.27%' },
        { label: '규모', value: '2개동 (지하2층~지상28층) / 세대수 162세대' },
        { label: '공부상 면적', value: '7,126.00㎡(2,155.62평)' },
        { label: '주택사업 면적', value: '7,118.10㎡(2,153.23평)' },
        { label: '건축면적', value: '1,480.00㎡(447.70평)' },
        { label: '연면적', value: '22,267.92㎡(6,736.05평)' },
        { label: '주차대수', value: '계획 170대 이상' },
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
      title: '한강과 역세권을 동시에 품다',
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
          image: { src: '/apt/deokso-doubleview-hangang/premium-traffic.png', alt: '교통 — GTX-B·KTX·9호선·6호선 노선 안내' },
          descStrong: '',
          descRest: '덕소역 도보 5분(경의중앙선·KTX), GTX-B·9호선 연장(강동하남남양주선)·6호선 연장 검토',
        },
        {
          titlePrefix: '',
          titleStrong: '우수한 교육환경',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/deokso-doubleview-hangang/premium-education.png', alt: '교육 — 농어촌특별전형의 메카 덕소' },
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
        '※ 상기 내용과 이미지는 공식 홈페이지 자료를 기준으로 구성했습니다. GTX-B·E·F, 6호선·9호선 연장 등 교통계획은 확정되지 않은 사항으로 관계기관의 결정에 따라 변경 또는 취소될 수 있으며, 이는 사업주체와 무관합니다.',
    },

    // 출처: 공식 홈페이지 메인 "내일을 보다!" 섹션 — 덕소뉴타운 개발(약 8,530~9,970세대 계획) 원문.
    premiumIntro: {
      eyebrow: 'DEOKSO NEWTOWN',
      titleLine1: '덕소뉴타운 개발로',
      titleLine2: '미래는 더 커지고, GTX-E·F로 교통은 더 빨라진다',
      descLine1: '사업지 주변 약 8,530~9,970세대 규모 재개발로 조성되는 명품 주거타운(예정)',
      descLine1Accent: ['8,530~9,970세대'],
      descLine2: '덕소역 더블뷰 한강이 그 새로운 출발점이 됩니다',
      bgImage: { src: '/apt/deokso-doubleview-hangang/premium-newtown.png', alt: '덕소뉴타운 개발계획 및 위치도' },
    },

    // 출처: 공식 홈페이지 사업안내(a1) "Premium 7" 섹션 원문 그대로(7개 항목 전부 반영).
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
          desc: ['덕소역 도보 5분(경의중앙선·KTX), GTX-E·F(예정)', '서울양양고속도로·수도권제1순환고속도로·강변북로 등'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-traffic.png', alt: '4통8달 교통 프리미엄' },
        },
        {
          num: 'PREMIUM 02',
          title: ['풍부한 쇼핑,', '문화 프리미엄'],
          desc: ['롯데마트·현대프리미엄아울렛·스타필드 하남·신세계백화점·이케아 강동', '와부체육문화센터·와부도서관 등 생활 인프라'],
          image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '풍부한 쇼핑, 문화 프리미엄' },
        },
        {
          num: 'PREMIUM 03',
          title: ['우수한', '교육 프리미엄'],
          desc: ['덕소초·와부초·예봉초·와부중 등 도보 학군', '덕소고·와부고 등 농어촌 특별전형 지원 가능 교육특권'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-education.png', alt: '우수한 교육 프리미엄' },
        },
        {
          num: 'PREMIUM 04',
          title: ['안심 의료서비스', '프리미엄'],
          desc: ['한양대학교구리병원·남양주한양병원·강동성심병원', '치과·내과·정형외과·피부과 등 생활밀착형 병원 밀집'],
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
          desc: ['왕숙 도시첨단산업단지', '수도권 최대 - 2028년 판교테크노밸리 1.7배 규모 / 향후 16만명 고용 예정'],
          image: { src: '/apt/deokso-doubleview-hangang/location-map.png', alt: '직주 근접 프리미엄' },
        },
        {
          num: 'PREMIUM 07',
          title: ['덕소역세권', '미래가치 프리미엄'],
          desc: ['19만여 평, 약 8,530~9,970세대 규모의 덕소뉴타운 개발(예정)', '덕소역 GTX-E·F 추가 예정(2035년 개통 목표)'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-newtown.png', alt: '덕소역세권 미래가치 프리미엄' },
        },
      ],
    },

    // 참고: 공식 홈페이지에 별도 조경 갤러리 페이지는 없어, 사업안내 페이지의 단지 조경·입구 CG를
    // 재사용해 구성한 패널. 실제 조경 컨셉명·상세 문구는 시행 측 확인 후 교체 권장.
    landscape: {
      panels: [
        {
          image: { src: '/apt/deokso-doubleview-hangang/landscape-1.png', alt: '단지 내 조경 광장' },
          badge: 'RIVERSIDE GARDEN',
          titlePlain: '한강을 곁에 둔 ',
          titleAccent: '단지 조경 광장',
          desc: '벚꽃과 조형 식재로 꾸며진 단지 내 조경 광장에서 계절마다 달라지는 풍경을 가까이 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '단지 입구 조경' },
          badge: 'MAIN ENTRANCE',
          titlePlain: '품격 있는 ',
          titleAccent: '단지 입구',
          desc: '캐노피와 조경이 어우러진 단지 입구에서부터 시작되는 프리미엄 주거의 첫인상을 만나보실 수 있습니다.',
        },
        {
          image: { src: '/apt/deokso-doubleview-hangang/location-sitemap.png', alt: '한강공원 삼패지구 인접 입지' },
          badge: 'HANGANG PARK',
          titlePlain: '도보로 이어지는 ',
          titleAccent: '한강공원 삼패지구',
          desc: '남양주한강공원 삼패지구와 가까운 입지로, 산책과 자전거 라이딩 등 한강변 일상을 가까이 누리실 수 있습니다.',
        },
      ],
    },

    // 출처: 공식 홈페이지 단지안내(a2) 페이지 — 101동·102동 동호수 배치표 원문(59A·74A·74C 라인 구성).
    // 별도의 전체 단지 배치도(조감 평면)는 공식 페이지에 게시되어 있지 않아 조감 전경 이미지로 대체.
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '101동·102동, 총 162세대',
      titleLine2: '한강을 마주한 컴팩트 단지',
      desc: '동 배치와 타입별 라인 구성을 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '덕소역 더블뷰 한강 단지 조감 전경', width: 1496, height: 892 },
      },
      donghoChart: {
        image: { src: '/apt/deokso-doubleview-hangang/complex-dongho-chart.png', alt: '덕소역 더블뷰 한강 101동·102동 동호수 배치표', width: 1365, height: 869 },
      },
    },

    // 출처: 공식 홈페이지 세대안내(a3) 페이지 평면 스펙표 원문 그대로(59㎡A·74㎡A·74㎡C 3개 타입).
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'DOUBLEVIEW HANGANG',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['한강을 품은 라이프스타일에 맞춘', '덕소역 더블뷰 한강', '전용 59㎡ 1개 타입, 74㎡ 2개 타입', '3가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '(25.33평형) 23세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-59a.png', alt: '덕소역 더블뷰 한강 59㎡A 타입 평면도' },
              specs: { exclusive: '59.75', common: '24.00', supply: '83.75', otherCommon: '39.97', contract: '123.73' },
            },
          ],
        },
        {
          area: '74㎡',
          types: [
            {
              letter: 'A',
              countText: '(30.10평형) 74세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74a.png', alt: '덕소역 더블뷰 한강 74㎡A 타입 평면도' },
              specs: { exclusive: '74.66', common: '24.85', supply: '99.51', otherCommon: '40.59', contract: '140.11' },
            },
            {
              letter: 'C',
              countText: '(30.14평형) 37세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74c.png', alt: '덕소역 더블뷰 한강 74㎡C 타입 평면도' },
              specs: { exclusive: '74.73', common: '24.91', supply: '99.64', otherCommon: '40.59', contract: '140.24' },
            },
          ],
        },
      ],
    },

    // 참고: 공식 홈페이지(a1~a4, information)에 별도 커뮤니티 시설 소개 페이지·이미지가 게시되어
    // 있지 않아, 2개동 162세대 규모에 맞춘 통상적 부대복리시설 수준으로 보수적으로 구성했다.
    // 실제 시설 구성·이미지는 시행 측 확인 후 교체 필요.
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      intro: {
        eyebrow: 'COMMUNITY',
        titleLine1: '한강을 곁에 둔 일상 속',
        titleLine2: '아늑한 커뮤니티가 열리다',
        desc: '규모에 맞춘 알찬 구성의 부대복리시설로 입주민의 일상을 채웁니다.',
      },
      floorPlanB1: {
        title: '',
        dragHint: '좌우로 밀어서 B1F 도면을 확인하세요',
        image: { src: '/apt/deokso-doubleview-hangang/complex-dongho-chart.png', alt: '단지 배치 참고 도면' },
      },
      wellness: {
        badge: 'WELLNESS',
        titlePlain: '단지 안에서 누리는',
        titleAccent: '피트니스 공간',
        desc: '입주민 전용 피트니스 공간에서 운동을 통해 건강한 일상을 이어가실 수 있습니다.',
        dark: true,
        hero: {
          image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '단지 부대시설 입구' },
          title: '피트니스 공간',
          desc: '입주민 전용 운동 공간에서 쾌적한 아침을 시작하세요.',
        },
        halves: [
          { image: { src: '/apt/deokso-doubleview-hangang/landscape-1.png', alt: '단지 내 휴게 공간 1' }, caption: '휴게 공간' },
          { image: { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '단지 내 휴게 공간 2' }, caption: '단지 전경' },
        ],
      },
      sportsHealth: {
        badge: 'LOUNGE',
        titlePlain: '이웃과 교류하는 ',
        titleAccent: '입주민 라운지',
        desc: '방문객 응대와 이웃과의 소통이 가능한 입주민 라운지 공간',
        showcases: [
          {
            side: 'left',
            tag: 'LOUNGE',
            title: '입주민 라운지',
            desc: '이웃과 담소를 나누거나 손님을 맞이할 수 있는 입주민 공용 라운지 공간입니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '입주민 라운지 전경' }, caption: '입주민 라운지' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/landscape-1.png', alt: '라운지 인근 조경' }, caption: '라운지 인근 조경' },
          },
          {
            side: 'right',
            tag: 'SECURITY',
            title: '경비실 · 출입관리',
            desc: '차단기 게이트와 경비실을 갖춰 외부 차량·방문객 출입을 체계적으로 관리합니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/feature-entrance.png', alt: '단지 출입 게이트' }, caption: '단지 출입 게이트' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/overview-photo.png', alt: '단지 조감 전경' }, caption: '단지 조감 전경' },
          },
        ],
        floorPlanB2: {
          title: '동호수 배치 참고',
          dragHint: '좌우로 밀어서 101동·102동 배치를 확인하세요',
          image: { src: '/apt/deokso-doubleview-hangang/complex-dongho-chart.png', alt: '101동·102동 동호수 배치도' },
        },
      },
      cafeLounge: {
        badge: 'OUTDOOR',
        titlePlain: '한강을 곁에 둔 ',
        titleAccent: '단지 조경 공간',
        desc: ['벚꽃과 조형 식재로 꾸며진', '단지 내 조경 광장'],
        halves: [
          { image: { src: '/apt/deokso-doubleview-hangang/landscape-1.png', alt: '단지 조경 광장 1' }, caption: '단지 조경 광장' },
          { image: { src: '/apt/deokso-doubleview-hangang/location-sitemap.png', alt: '한강공원 삼패지구 인접 입지' }, caption: '한강공원 삼패지구 인접' },
        ],
      },
      eduKids: {
        badge: 'EDUCATION',
        titlePlain: '농어촌특별전형의 메카, ',
        titleAccent: '덕소 학군',
        desc: '와부읍 소재 학교 재학 시 대입 농어촌 특별전형 지원이 가능한 교육 인프라',
        showcases: [
          {
            side: 'left',
            tag: 'SCHOOL',
            title: '도보 학군',
            desc: '덕소초·와부초 500m 도보권, 와부중·덕소고 도보 10분 거리로 통학 부담을 덜어드립니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/premium-education.png', alt: '덕소·와부 학군 안내' }, caption: '덕소·와부 학군' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/location-map.png', alt: '주변 교통·생활 인프라' }, caption: '주변 교통·생활 인프라' },
          },
          {
            side: 'right',
            tag: 'SPECIAL ADMISSION',
            title: '농어촌 특별전형',
            desc: '와부읍 소재지 특성상 덕소고·와부고 재학 시 대입 농어촌 특별전형 지원이 가능합니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/premium-education.png', alt: '농어촌특별전형 안내' }, caption: '농어촌특별전형 안내' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/premium-newtown.png', alt: '덕소뉴타운 개발계획' }, caption: '덕소뉴타운 개발계획' },
          },
        ],
      },
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

    // 시행(조합)/시공사명은 공식 홈페이지에도 게시되어 있지 않아 미확인 상태로 표기.
    footer: {
      logo: { src: '/apt/deokso-doubleview-hangang/logo.png', alt: '덕소역 더블뷰 한강', width: 160, height: 30 },
      highlightText: '1566-2696',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '사업방식', value: '민간임대협동조합 (조합원 출자 방식)' },
        { label: '시행', value: '확인 필요(조합명 미확인)' },
        { label: '시공', value: '확인 필요(시공사명 미확인)' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사업은 민간임대협동조합 방식으로 진행되며, 조합원 출자·분양전환 조건 등은 계약 전 반드시 공식 자료로 확인하시기 바랍니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용 및 사업 일정은 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1566-2696',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
