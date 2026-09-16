// 청라 아크원 푸르지오 — 인천광역시 서구 청라동 86-1번지, 청라국제도시 주상복합용지 M5BL.
// 지하 5층~지상 49층 총 6개동 1,855가구(APT 868세대·전용 84/103㎡, OT 987실·전용 105/121/136㎡) +
// 근린생활시설(1~2층). 시행 (주)청라스마트시티, 시공 (주)대우건설(PRUGIO).
//
// 출처: 공식 사이트(https://arkone-prugio.com, 2026-09-16 확인)의 하위 페이지 원문 그대로 반영
//   - /pages/overview(사업개요), /pages/brand(브랜드), /pages/location(입지안내),
//     /pages/premium(프리미엄), /pages/contact(문의)
// 확인 시점 기준 공식 사이트는 청약 이전 "관심고객등록"만 받는 사전 홍보 단계라 커뮤니티 시설,
// 단지 배치도, 동호수 배치표, 세대 평면도가 아직 공개되지 않음(사이트맵에 해당 하위페이지 자체가 없음).
// 그래서 이 템플릿에서:
//   - club(커뮤니티)은 선택 필드라 통째로 생략
//   - complex(단지소개)·unitPlan(세대안내)은 이 템플릿에서 필수 섹션이라 뺄 수 없어, 실제 이미지 대신
//     "공개 예정" 안내 플레이스홀더 이미지(스크립트로 직접 생성, public/apt/cheongna-arkone-prugio/
//     complex-sitemap.webp·complex-dongho-chart.webp·unit-*.webp)를 임시로 넣어둠 — 공식 사이트에
//     배치도/동호수표/평면도가 올라오면 실제 이미지로 교체 필요
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
// ⚠️ adminPhones/sheetTab은 담당자 실제 연락처가 정해지면 반드시 교체 필요(현재 예시 값)
const config = {
  slug: 'cheongna-arkone-prugio',
  subdomain: '청라아크원푸르지오',
  projectName: '청라 아크원 푸르지오',
  shortName: '청라 아크원 푸르지오',
  // 출처: 공식 사이트 대표 문의전화 원문(2026-09-16)
  telNumber: '1551-6881',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/cheongna-arkone-prugio/og.jpg',
  // 출처: 공식 사이트 token.css 원문(2026-09-16) — primary-500/primary-900/secondary-500/secondary-100
  colorTheme: {
    navy: '#004B45',
    ink: '#002521',
    cream: '#F3F0EC',
    gold: '#8B7F71',
  },
  // 출처: 공식 사이트 font.css/token.css 원문(2026-09-16) — --font-base: "SUIT", "Pretendard", sans-serif
  webfont: {
    family: "'SUIT', 'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css',
  },
  // TODO: 담당자 실제 연락처로 교체
  adminPhones: ['01000000000'],
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
      logo: { src: '/apt/cheongna-arkone-prugio/logo-white.svg', alt: '청라 아크원 푸르지오', width: 161, height: 26 },
      // 요청 반영 — 기본 로고 폭(140/190/220px)이 가로로 긴 워드마크(161x26, 약 6.2:1) 특성상
      // 너무 넓고 커 보여서 축소
      logoSize: { base: 96, lg: 130, xl: 150 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1551-6881',
    },

    // PC 우측 고정 사이드 퀵메뉴 — 공식 사이트가 fullPage.js 기반 풀스크린 스크롤 구조라 화면
    // 우측에 항상 떠 있는 섹션 내비게이션을 쓰는 것을 참고해 추가(osan-heritage-xi-x와 동일 컴포넌트)
    quickMenu: {
      brand: '청라 아크원 푸르지오',
      phoneLabel: '분양문의',
      phone: '1551-6881',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '청라 아크원 푸르지오\n관심고객등록을 도와드립니다.',
      address: '인천광역시 서구 청라동 86-1번지 일원',
      tagline: 'ABSOLUTE REMARKABLE ONE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    hero: {
      // 요청 반영 — 기본 오버레이(radial-gradient로 가장자리를 85% 검게 덮는 비네트)가 사진을
      // 거의 검은 배경처럼 보이게 만들어서 완전히 끔. 공식 사이트 메인 비주얼도 사진 위에 별도
      // 어두운 스크림 없이 워드마크만 얹는 방식이라 실제 디자인에도 더 가까움
      overlay: false,
      // 요청 반영 — 문구를 가운데 대신 좌측정렬로 배치
      align: 'left',
      // 요청 반영(참고 화면 캡처) — 문구를 세로 중앙 대신 상단(하늘 배경 위)에 배치
      contentTop: true,
      // 요청 반영(참고 화면 캡처) — 큰 3줄 영문 헤드라인 → 국문 서브타이틀 → 스파클 구분선 → 작은
      // 소제목 → 이니셜(A·R·K·O) 강조 태그라인 → 하단 안내 카피 순서의 포스터형 레이아웃.
      // SignatureHero에 이 순서를 그리는 전용 분기(contentVariant: 'poster')를 새로 추가함
      contentVariant: 'poster',
      // 참고 화면 문구 전부 흰색이라 순백색으로 통일(오버레이를 껐으니 사진 위 가독성 확보를 위해
      // 텍스트 그림자는 keepTextShadow로 유지)
      textColor: '#FFFFFF',
      keepTextShadow: true,
      titleLine1: 'CHEONG NA',
      titleLine2: 'ARK-ONE',
      titleLine3: 'PRUGIO',
      subtitleKr: '청라 아크원 푸르지오',
      taglineLabel: '아크원(ARK-ONE)이란?',
      // "ABSOLUTE REMARKABLE ONE"에서 ARK-ONE을 이루는 이니셜(A·R·K·O)만 크게 강조
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
      // 출처: 공식 사이트 메인 비주얼 원본(/resources/img/main/main_visual_img.v3.jpg, 2026-09-16)
      bgImage: { src: '/apt/cheongna-arkone-prugio/hero-bg.webp', alt: '청라 아크원 푸르지오 대표 조감도 — ABSOLUTE REMARKABLE ONE' },
      // 출처: 사용자 전달 모바일 전용 세로형 이미지(main_visual_img_m.v3.jpg → hero-bg-mobile.webp,
      // 750x1380, 2026-09-16) — 768px 미만에서는 이 세로형 크롭을, 그 이상은 기존 가로형 bgImage를 사용
      bgImageMobile: { src: '/apt/cheongna-arkone-prugio/hero-bg-mobile.webp', alt: '청라 아크원 푸르지오 대표 조감도(모바일) — ABSOLUTE REMARKABLE ONE' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '청라 아크원 푸르지오', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '관심고객등록 시 분양소식을 가장 먼저 안내드립니다',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    // 출처: 공식 사이트 /pages/overview 원문 그대로(2026-09-16)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '청라 아크원 푸르지오',
      subtitle: '청라국제도시 주상복합용지 M5BL, 청라를 대표하는 푸르지오 대규모 브랜드타운',
      photo: { src: '/apt/cheongna-arkone-prugio/overview-photo.webp', alt: '청라 아크원 푸르지오 조감도' },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 사전홍보용으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다.',
      specItems: [
        { label: '사업명', value: '청라 아크원 푸르지오' },
        { label: '대지위치', value: '인천광역시 서구 청라동 86-1번지 (청라국제도시 주상복합용지 M5BL)' },
        { label: '대지면적', value: '35,306.00㎡ (10,680.07평)' },
        { label: '건축규모', value: ['지하 5층 ~ 지상 49층, 총 6개동', 'APT 868세대(전용 84㎡·103㎡), OT 987실(전용 105㎡·121㎡·136㎡)', '근린생활시설 1~2층'] },
        {
          label: '연면적',
          value: [
            'APT 173,952.7508㎡ (52,620.7071평)',
            'OT 245,645.4826㎡ (74,307.7585평)',
            '근린생활시설 4,959.8424㎡ (1,500.3523평)',
          ],
        },
        { label: '주차대수', value: '총 3,124대 (APT 1,389대 · OT 1,695대 · 근린생활시설 40대)' },
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시공', value: '(주)대우건설' },
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
      titleAlign: 'left',
      titleWeight: 700,
      // 출처: 공식 사이트 위치안내도 원본(/resources/img/sub/location_map_img.v3.jpg)
      mapImage: { src: '/apt/cheongna-arkone-prugio/location-map.webp', alt: '청라 아크원 푸르지오 위치 안내도 — 청라국제도시 주변 교통 및 생활 인프라' },
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
      bgImage: { src: '/apt/cheongna-arkone-prugio/premium-intro-bg.webp', alt: '청라 아크원 푸르지오 프리미엄 전경' },
      titleLine1: '공간의 특별함도 자부심의 높이도',
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
          { src: '/apt/cheongna-arkone-prugio/premium-photo-01.webp', alt: '청라 아크원 푸르지오 야경 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio/premium-photo-01b.webp', alt: '청라 아크원 푸르지오 야경 이미지컷 2' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 02',
        title: ['국제업무단지의', '센트럴 라이프'],
        descLines: ['청라의 중심으로 완성되는', '국제업무단지의 특별한 주거 가치'],
        images: [{ src: '/apt/cheongna-arkone-prugio/premium-photo-02.webp', alt: '청라 아크원 푸르지오 도심 전경 이미지컷' }],
      },
      {
        eyebrow: 'PREMIUM 03',
        title: ['오션 · 시티뷰', '조망 특화'],
        descLines: ['오션 · 시티뷰를 동시에 누리는', '2면 or 3면 개방구조(일부세대)'],
        images: [
          { src: '/apt/cheongna-arkone-prugio/premium-photo-03.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio/premium-photo-03b.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 2' },
        ],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 04',
        title: ['높은 희소가치와', '합리적 분양가'],
        descLines: ['청라가 기다려온 신규공급,', "2017년 이후 10년만의 분양가 상한제 공급 아파트"],
        images: [
          { src: '/apt/cheongna-arkone-prugio/premium-photo-04.webp', alt: '청라 아크원 푸르지오 실내 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio/premium-photo-04b.webp', alt: '청라 아크원 푸르지오 실내 이미지컷 2' },
        ],
      },
      {
        eyebrow: 'PREMIUM 05',
        title: ['멀티', '라이프 플랫폼'],
        descLines: ['팬트리 2개소 이상 제공,', '다양한 공간 활용의 멀티 발코니(OT)'],
        images: [
          { src: '/apt/cheongna-arkone-prugio/premium-photo-05.webp', alt: '청라 아크원 푸르지오 발코니 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio/premium-photo-05b.webp', alt: '청라 아크원 푸르지오 발코니 이미지컷 2' },
        ],
      },
    ],

    // ⚠️ 공식 사이트에 단지 배치도·동호수 배치표가 아직 공개되지 않아(사전 홍보 단계) 실제 이미지 대신
    // "공개 예정" 플레이스홀더 이미지 사용 — 공개되면 교체 필요
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '지하 5층~지상 49층 총 6개동',
      titleLine2: '1,855가구, 청라의 새로운 랜드마크',
      desc: '단지 배치와 동호수 구성은 공식 분양 일정에 맞춰 순차적으로 공개될 예정입니다.',
      siteMap: {
        image: { src: '/apt/cheongna-arkone-prugio/complex-sitemap.webp', alt: '청라 아크원 푸르지오 단지 배치도 — 공개 예정', width: 1200, height: 1200 },
      },
      donghoChart: {
        image: { src: '/apt/cheongna-arkone-prugio/complex-dongho-chart.webp', alt: '청라 아크원 푸르지오 동호수 배치표 — 공개 예정', width: 1200, height: 1500 },
      },
    },

    // ⚠️ 공식 사이트에 평형별 평면도가 아직 공개되지 않아(사전 홍보 단계) 실제 도면 대신 "공개 예정"
    // 플레이스홀더 이미지 사용 — 공개되면 교체 필요. exclusive 값은 공식 사이트 사업개요에 기재된
    // 공급 주택형(APT 84/103㎡, OT 105/121/136㎡)의 명목 전용면적만 반영(세부 소수점 값 미공개)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'CHEONGNA ARKONE PRUGIO',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['청라국제도시의 중심에서 시작하는', '청라 아크원 푸르지오', '당신의 라이프스타일에 맞춘', '다양한 평면을 만나보십시오.'],
      groups: [
        {
          area: 'APT 84㎡',
          types: [
            {
              letter: '',
              countText: 'APT 총 868세대(전용 84㎡·103㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio/unit-apt-84.webp', alt: 'APT 84㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '84' },
            },
          ],
        },
        {
          area: 'APT 103㎡',
          types: [
            {
              letter: '',
              countText: 'APT 총 868세대(전용 84㎡·103㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio/unit-apt-103.webp', alt: 'APT 103㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '103' },
            },
          ],
        },
        {
          area: 'OT 105㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio/unit-ot-105.webp', alt: 'OT 105㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '105' },
            },
          ],
        },
        {
          area: 'OT 121㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio/unit-ot-121.webp', alt: 'OT 121㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '121' },
            },
          ],
        },
        {
          area: 'OT 136㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio/unit-ot-136.webp', alt: 'OT 136㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '136' },
            },
          ],
        },
      ],
    },

    // 공식 사이트가 아직 청약 전 "관심고객등록" 단계라 모델하우스 방문예약 대신 사전등록 문구로 구성
    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '청라 아크원 푸르지오',
      titleLine2: '관심고객 사전등록',
      desc: '간단한 정보를 입력해 주시면 청라 아크원 푸르지오의 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
      serviceOptions: ['관심고객 사전등록', '분양일정 문자 안내'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 관심고객 등록 접수 및 분양 일정 안내 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 관심고객 등록 및 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    // 출처: 공식 사이트 /pages/contact 회사정보 원문 그대로(2026-09-16). 온라인대행은 공식 사이트의
    // (주)넥스미디어·(주)나인야드 대신, 이 랜딩페이지를 운영하는 더블루파트너스로 표기(다른 현장과 동일 컨벤션)
    footer: {
      logo: { src: '/apt/cheongna-arkone-prugio/logo-white.svg', alt: '청라 아크원 푸르지오', width: 130, height: 21 },
      logoAlign: 'center',
      highlightText: '분양문의 1551-6881',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시행사업자번호', value: '866-88-02497' },
        { label: '시공', value: '(주)대우건설' },
        { label: '시공사업자번호', value: '104-81-58180' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1551-6881',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 요청 반영 — 진입 시 관심고객등록 팝업 노출. 이름+연락처+서비스+희망일시만 받는 간이 신청
    // 폼(SignatureInterestPopup, 다른 현장에서도 쓰는 공용 컴포넌트)으로, 제출 시 vipForm과 동일한
    // /api/sms로 바로 전송됨. variant:'light'는 크림+골드 톤(우리 브랜드 컬러)으로 보이게 하는
    // 옵션 — 기본값(다크 네이비 카드) 대신 사용
    popup: {
      interest: {
        enabled: true,
        variant: 'light',
        eyebrow: 'INTEREST',
        title: '관심고객등록',
        desc: '간단한 정보를 입력해 주시면\n청라 아크원 푸르지오의 분양 일정을 가장 먼저 안내해드립니다.',
        submitLabel: '관심고객 등록',
      },
    },
  },
}

export default config
