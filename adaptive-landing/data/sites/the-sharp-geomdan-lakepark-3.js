// 더샵 검단레이크파크 — 요청 반영: 전달받은 8절전단 PDF(0515_검단더샵레이크파크_8절전단_최종.pdf)를
// 분석해 실제 문구·수치와 전체 색상 무드를 반영했습니다.
// 콘텐츠 출처: PDF 원문 — 2,857세대(59㎡ 1,337세대·84㎡ 1,520세대), 시공 포스코이앤씨, 6월 초
// 오픈예정, 견본주택 신검단중앙역 3·4번출구, 검단호수공원역(인천1호선)·완정역(인천2호선) 더블역
// 생활권, 분양가상한제, 생애최초·신혼부부 특별공급 100% 사은품, 4대 인프라 카피 등.
// 히어로·사업개요·프리미엄·위치·조경 이미지는 카카오톡으로 전달받은 실제 CG 원본(004 전체조감도A·
// 005 조감도_23BL·007 광역조감도·009 액티브라운지·010 가로수길·014 플라워필드, 7000px대 원본)을
// 리사이즈·webp 변환해 public/apt/the-sharp-geomdan-lakepark-3/에 넣었습니다. 단, 지도 인포그래픽
// (location.mapImage)·단지배치도·동호수배치표·평면도·로고는 원본 자료가 없어 여전히 placeholder.
//
// colorTheme은 PDF 전단의 무드(짙은 네이비 배경 + 선명한 스카이블루/시안 포인트, 흰 텍스트)를
// 반영했습니다. 기존 더샵검단레이크파크2(부드러운 파스텔 네이비·하늘색)보다 더 짙고 채도 높은
// 네이비+시안 조합으로 톤을 달리해 "다른 디자인 느낌" 요청도 함께 반영.
const config = {
  slug: 'the-sharp-geomdan-lakepark-3',
  // 검단레이크파크2가 접미사 'T'를 쓰는 것과 같은 방식으로 'p' 접미사로 구분
  subdomain: '더샵검단레이크파크p',
  // 요청 반영 — projectName(메타데이터·title)만 "3"을 유지, 홈페이지 화면 문구는 전부 "더샵 검단레이크파크"로 표기
  projectName: '더샵 검단레이크파크3',
  shortName: '더샵 검단레이크파크',
  // 요청 반영 — 현장 전용 상담 트래킹 번호(단지번호)
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/the-sharp-geomdan-lakepark-3/og.jpg',
  // 요청 반영 — 상담 접수 알림을 받을 번호
  adminPhones: ['01044411561'],
  sheetId: '',
  sheetTab: '더샵검단레이크파크3',
  showUtmInSms: true,
  kakao: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 출처: PDF 전단 무드(짙은 네이비 배경 + 시안 포인트) — 기존 검단레이크파크2보다 더 짙고
  // 채도 높은 톤으로 차별화
  colorTheme: {
    navy: '#0a1a33',
    ink: '#050d1c',
    cream: '#eaf4fb',
    gold: '#29b6f6',
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
      logo: { src: '/apt/the-sharp-geomdan-lakepark-3/logo-white.svg', alt: '더샵 검단레이크파크', width: 130, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1811-4166',
    },

    // 출처: PDF 전단 메인 카피 "비교는 끝났다! 선택은 더샵!" 그대로 반영. bgImage는 요청 반영 —
    // 전달받은 실제 메인 비주얼(석양 조감도, 단지 경계 하이라이트)로 교체
    hero: {
      eyebrowLine1: '비교는 끝났다!',
      eyebrowLine2: '선택은 더샵!',
      titleLine1: '더샵',
      titleLine2: '검단레이크파크',
      descLine1: '2,857세대 대단지 브랜드타운, 6월 초 오픈 예정',
      descLine1Accent: ['2,857세대'],
      descLine2: '검단 유일의 1·2호선 더블역 생활권,',
      descLine3: '분양가상한제가 적용되는 합리적인 선택.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/hero-bg.webp', alt: '더샵 검단레이크파크 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '더샵 검단레이크파크', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '생애최초·신혼부부 특별공급 청약자 100% 사은품 증정',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: PDF 하단 4개 인프라 카드("다 갖춰진 정점의 생활인프라" 등) 그대로 반영
    benefits: {
      id: 'benefits',
      eyebrow: 'SPECIAL CONDITIONS',
      titleSmall: '더샵이 선택한 자리,',
      titleBold: '검단의 ',
      titleScript: '정점이 되다',
      desc: '더샵 검단레이크파크만의 특별한 조건을 확인하세요.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/wide-view.webp', alt: '더샵 검단레이크파크 단지 전경' },
      items: [
        { num: '01', tag: '생활인프라', title: ['다 갖춰진', '정점의 생활인프라'], desc: '대형녹지공원 U공원, 검단소방서·우체국·경찰서(예정), 검단구청 신·임시청사(예정)' },
        { num: '02', tag: '학세권', title: ['도보통학', '안심 학세권'], desc: '초등학교·중학교·유치원(예정), 완정역 학원가' },
        { num: '03', tag: '더블역', title: ['검단 유일의 1·2호선', '더블역 생활권'], desc: '검단호수공원역·완정역, 인천2호선연장(예정)·서울5호선연장(예정)·GTX-D(계획)' },
        { num: '04', tag: '분양가상한제', title: ['합리적인 선택', '분양가 상한제'], desc: '향후 미래 자산가치까지 기대되는 최적의 내 집마련 기회' },
      ],
    },

    // 출처: 요청 반영 — PC(1024px 이상) 전용 우측 고정 사이드메뉴바
    quickMenu: {
      brand: 'THE SHARP GEOMDAN LAKEPARK',
      phoneLabel: '분양문의',
      phone: '1811-4166',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '더샵 검단레이크파크\n분양 상담을 도와드립니다.',
      address: '인천광역시 검단구 마전동 산175-7번지 일원',
      tagline: "GEOMDAN'S PEAK, THE SHARP",
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 출처: PDF 하단 정보(2,857세대·59㎡ 1,337세대·84㎡ 1,520세대·6월 초 오픈예정·견본주택 위치)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '더샵 검단레이크파크',
      subtitle: '2,857세대, 6월 초 오픈 예정 — 검단의 정점이 되는 더샵 브랜드타운',
      photo: { src: '/apt/the-sharp-geomdan-lakepark-3/overview-photo.webp', alt: '더샵 검단레이크파크 단지 조감도' },
      thumbs: [
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-1.webp', alt: '23BL 단지 조감도' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-2.webp', alt: '액티브라운지 조경 전경' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-3.webp', alt: '플라워필드 조경 전경' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      // 출처: 요청 반영 — 사업개요 상세 스펙(대지위치·사업규모·세대수·공급타입·면적·건폐율·용적률·
      // 주차대수·시행시공·분양방식·견본주택) 그대로 반영. 오픈예정·특별공급은 기존 전단 정보 유지.
      specItems: [
        { label: '대지위치', value: '인천광역시 검단구 마전동 산175-7번지 일원(검단신도시)' },
        { label: '사업규모', value: ['22BL·23BL', '지하 3층~지상 29층, 26개동'] },
        { label: '세대수', value: ['22BL 1,454세대 · 23BL 1,403세대', '총 2,857세대'] },
        { label: '공급타입', value: '전용 59㎡ 2개 타입 · 전용 84㎡ 3개 타입(총 5개 타입)' },
        { label: '대지면적', value: ['22BL 63,675.00㎡', '23BL 61,410.00㎡'] },
        { label: '연면적', value: ['22BL 242,082.35㎡', '23BL 228,380.25㎡'] },
        { label: '건폐율', value: ['22BL 28.67%', '23BL 23.87%'] },
        { label: '용적률', value: '224.91%' },
        { label: '주차대수', value: ['22BL 2,376대(세대당 1.63대)', '23BL 2,151대(세대당 1.53대)'] },
        { label: '시행/시공', value: '한국자산신탁(주) / (주)포스코이앤씨(브랜드 · 더샵)' },
        { label: '분양방식', value: '분양가상한제 적용 단지' },
        { label: '견본주택', value: '인천광역시 검단구 원당동 796-5' },
        { label: '오픈예정', value: '6월 초 오픈 예정' },
        { label: '특별공급', value: ['신혼부부 특별공급 651세대', '생애최초 특별공급 538세대'] },
      ],
    },

    // 출처: PDF 2p "더샵이 선택한 자리, 검단의 정점이 되다" 및 "한층 더 편리해진 in 서울" 지도 카피
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '더샵이 선택한 자리, ',
      eyebrowAccent: '검단의 정점',
      title: '검단의 정점이 되다',
      descTitle: '검단 유일의 1·2호선 더블역 생활권을 도보로 이용',
      descTitleAccent: ['1·2호선 더블역 생활권'],
      descBody1: '인천2호선연장(예정)·서울5호선연장(예정)·GTX-D(계획)까지,',
      descBody1Accent: ['인천2호선연장', '서울5호선연장', 'GTX-D'],
      descBody2: '더샵 검단레이크파크가 검단의 새로운 기준을 완성합니다.',
      // 출처: 요청 반영 — 실제 위치 인포그래픽 지도 이미지로 교체
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-3/location-map.jpg', alt: '더샵 검단레이크파크 주변 인프라 안내도' },
      // 출처: 요청 반영(입지분석 4개칸 스크린샷) — 4대 인프라 카피를 그대로 반영
      features: [
        {
          titlePrefix: '다 갖춰진',
          titleStrong: '정점의 생활인프라',
          titleSuffix: '',
          tag: 'INFRA',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/feature-infra.webp', alt: '생활 인프라' },
          descStrong: '',
          descRest: '대형녹지공원 "U공원", 검단소방서·우체국,검단경찰서(예정), 검단구청 신·임시청사(예정)',
        },
        {
          titlePrefix: '도보통학',
          titleStrong: '안심 학세권',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/feature-education.webp', alt: '교육환경' },
          descStrong: '',
          descRest: '초등학교(예정), 중학교(예정), 유치원(예정), 완정역 학원가',
        },
        {
          titlePrefix: '검단 유일의 1·2호선',
          titleStrong: '더블역 생활권',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/feature-traffic.webp', alt: '더블역 생활권' },
          descStrong: '',
          descRest: '검단호수공원역·완정역, 인천2호선연장(예정), 서울5호선연장(예정), GTX-D노선(계획)',
        },
        {
          titlePrefix: '합리적인 선택',
          titleStrong: '분양가 상한제',
          titleSuffix: '',
          tag: 'PRICE CAP',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/feature-park.webp', alt: '분양가상한제 적용 단지' },
          descStrong: '',
          descRest: '향후 미래 자산가치까지 기대되는 최적의 내 집마련 기회',
        },
      ],
      disclaimer:
        '※ 상기 지역도는 실제와 다를 수 있으며, 지역도에 기재된 교통 및 각종 개발계획, 학군 배정 등은 사업주체나 해당기관의 사정에 따라 변경 또는 연기, 취소될 수 있으며 이는 시행사 및 시공사와 무관합니다.',
    },

    // 출처: PDF 문구 "비교는 끝났다! 선택은 더샵!" / "검단 그 변화의 정점에서 만나는 더샵"
    premiumIntro: {
      eyebrow: 'GEOMDAN LAKEPARK',
      titleLine1: '비교는 끝났다!',
      titleLine2: '선택은 더샵!',
      descLine1: '검단 그 변화의 정점에서 만나는 더샵',
      descLine1Accent: ['더샵'],
      descLine2: '2,857세대 대단지 브랜드타운이 검단의 새로운 기준이 됩니다.',
      // 출처: 요청 반영 — 실제 단지 게이트(정문) CG로 교체
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/premium-intro-bg.jpg', alt: '더샵 검단레이크파크 정문 게이트 전경' },
    },

    // 출처: PDF 2p 4대 인프라 카피 + "수변과 가까운 일상, 더 커지는 미래가치"(청라·동탄호수공원 시세 상승 사례) 요약
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '더샵 검단레이크파크가 특별한 ',
      titleAccent: '여섯 가지 이유',
      cards: [
        { num: '01', title: ['합리적인 선택', '분양가 상한제'], desc: ['향후 미래 자산가치까지 기대되는 최적의 내 집마련 기회'] },
        { num: '02', title: ['검단 유일의 1·2호선', '더블역 생활권'], desc: ['검단호수공원역·완정역, 도보 이용 가능한 더블역 생활권'] },
        { num: '03', title: ['도보통학', '안심 학세권'], desc: ['초등학교·중학교·유치원(예정), 완정역 학원가'] },
        { num: '04', title: ['다 갖춰진', '정점의 생활인프라'], desc: ['대형녹지공원 U공원, 검단구청 신·임시청사(예정)'] },
        { num: '05', title: ['수변과 가까운', '일상'], desc: ['나진포천 수변공원(예정), 중앙호수공원(예정)'] },
        { num: '06', title: ['더 커지는', '미래가치'], desc: ['청라·동탄호수공원 수변 단지의 시세 상승 사례로 검증된 입지'] },
      ],
    },

    // 출처: 실제 조경 CG(009 액티브라운지·010 가로수길·014 플라워필드)를 조경안내 3패널로 구성
    landscape: {
      panels: [
        {
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/landscape-1.webp', alt: '단지 조경 - 액티브라운지 전경' },
          badge: 'ACTIVE LOUNGE',
          titlePlain: '누구나 즐기는 ',
          titleAccent: '액티브라운지',
          desc: '넓은 잔디마당과 산책로가 어우러진 액티브라운지에서 이웃과 함께 여유로운 일상을 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/landscape-2.webp', alt: '단지 조경 - 가로수길 전경' },
          badge: 'TREE-LINED WALK',
          titlePlain: '사계절이 아름다운 ',
          titleAccent: '가로수길',
          desc: '벚꽃이 흩날리는 가로수길을 따라 걸으며 단지 안에서부터 느껴지는 계절의 변화를 만끽하실 수 있습니다.',
        },
        {
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/landscape-3.webp', alt: '단지 조경 - 플라워필드 전경' },
          badge: 'FLOWER FIELD',
          titlePlain: '색색의 꽃이 피어나는 ',
          titleAccent: '플라워필드',
          desc: '테마별로 조성된 화단과 산책로에서 계절마다 달라지는 정원의 풍경을 가까이에서 즐기실 수 있습니다.',
        },
      ],
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2와 같은 단지(22BL·23BL)의 실제 단지배치도·동호수배치도
    // 원본을 그대로 사용. donghoChart는 탭 전환 없이 22BL·23BL을 항상 나란히 보여줌(columns).
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '2개 블록, 26개동',
      titleLine2: '총 2,857세대 대단지',
      desc: '동 배치와 단지 내 주요 시설을 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/the-sharp-geomdan-lakepark-3/complex-sitemap.jpg', alt: '더샵 검단레이크파크 단지 배치도', width: 1200, height: 494 },
      },
      donghoChart: {
        columns: [
          { label: '22BL', sub: '1,454세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-3/dongho-22bl.jpg', alt: '더샵 검단레이크파크 22BL 동호수 배치도', width: 1150, height: 3181 } },
          { label: '23BL', sub: '1,403세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-3/dongho-23bl.jpg', alt: '더샵 검단레이크파크 23BL 동호수 배치도', width: 1150, height: 3109 } },
        ],
      },
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2 현장 참고. 같은 단지(22BL·23BL)의 실제 입주자모집공고
    // 기준 5개 타입(59㎡ A·B, 84㎡ A·B·C) 전용/공급/계약면적 그대로 반영, 평면도 이미지도 동일 원본 사용.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'GEOMDAN LAKEPARK',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['라이프스타일에 맞춘', '더샵 검단레이크파크', '전용 59㎡ 2개 타입, 84㎡ 3개 타입', '5가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 707세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-59a.jpg', alt: '더샵 검단레이크파크 59㎡A 타입 평면도' },
              specs: { exclusive: '59.9497', supply: '80.7560', contract: '137.3788' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 630세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-59b.jpg', alt: '더샵 검단레이크파크 59㎡B 타입 평면도' },
              specs: { exclusive: '59.8301', supply: '81.0950', contract: '137.6048' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 869세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84a.jpg', alt: '더샵 검단레이크파크 84㎡A 타입 평면도' },
              specs: { exclusive: '84.5181', supply: '111.7074', contract: '191.5353' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 336세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84b.jpg', alt: '더샵 검단레이크파크 84㎡B 타입 평면도' },
              specs: { exclusive: '84.0342', supply: '112.2416', contract: '191.6124' },
            },
            {
              letter: 'C',
              countText: '22BL·23BL 총 315세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84c.jpg', alt: '더샵 검단레이크파크 84㎡C 타입 평면도' },
              specs: { exclusive: '84.1796', supply: '111.1017', contract: '190.6097' },
            },
          ],
        },
      ],
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2와 같은 단지의 실제 블록별(22BL/23BL) 커뮤니티 시설
    // 배치도 CG를 그대로 사용. SignatureCommunityGeomdan(더샵검단레이크파크2와 동일 컴포넌트) 재사용.
    communityBlocks: {
      id: 'community',
      headingFont: 'var(--font-sans)',
      eyebrow: 'COMMUNITY GUIDE',
      titlePlain: '블록별 커뮤니티',
      titleAccent: '한눈에 보기',
      desc: '운동과 휴식, 교육과 교류까지 단지 안에서 이어지는\n더샵만의 다채로운 커뮤니티 시설을 확인해보세요.',
      imageOnly: true,
      blocks: [
        {
          label: '22BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-3/community-detail-1.jpg', alt: '더샵 검단레이크파크 22BL 커뮤니티 시설 배치도(6203·6204·6206동)' },
        },
        {
          label: '23BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-3/community-detail-2.jpg', alt: '더샵 검단레이크파크 23BL 커뮤니티 시설 배치도(6303~4동)' },
        },
      ],
      note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 CG 및 계획도입니다. 커뮤니티 시설의 명칭, 위치, 규모와 운영 방식은 인허가 및 실제 시공 과정에서 변경될 수 있으므로 계약 전 공식 공급자료를 확인하시기 바랍니다.',
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '더샵 검단레이크파크',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 생애최초·신혼부부 특별공급 청약자 모두에게 100% 사은품을 증정합니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 더샵 검단레이크파크 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
3. 개인정보의 처리 및 보유 기간 : 더샵 검단레이크파크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    footer: {
      logo: { src: '/apt/the-sharp-geomdan-lakepark-3/logo-white.svg', alt: '더샵 검단레이크파크' },
      highlightText: '1811-4166',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '한국자산신탁(주)' },
        { label: '시공', value: '(주)포스코이앤씨' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1811-4166',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
