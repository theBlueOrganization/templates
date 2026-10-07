// 청라 더리브 티아모 까사2 (청라더리브티아모casa.addupapt.kr) — 원본(cheongna-theliv-tiamo-casa)은 아크원처럼 풀페이지
// 몰입형(SignatureTiamoImmersive)이고, 이 사이트는 같은 콘텐츠를 기존 섹션형(헤더→히어로→사업개요→…→상담신청)으로 보여주는 2번째 사이트.
// 이미지는 원본 폴더(/apt/cheongna-theliv-tiamo-casa/)를 그대로 공유.
// 청라 더리브 티아모 까사 — 인천광역시 서구 청라동 157-11(인천 청라국제도시 157-11 오피스텔). 시행위탁 청라플러스,
// 시공 SGC E&C(SGC이테크건설) 더리브. 지하3층~지상46층 3개동(101~103동), 오피스텔 523실
// (76 208실 / 84A 208실 / 84B 104실 / 211 펜트하우스 3실), 20층 스카이브릿지로 3개동 연결.
// 출처: 참고 사이트(http://청라더리브티아모까사.com/index.html, 2026-10-01 확인) — 메인 비주얼 3장·사업개요·입지환경·
// 프리미엄8·단지설계·동호수/단지배치도·특화시스템·커뮤니티·평면정보·Dada 원본 이미지/문구 반영.
// 참고 사이트는 이미 입주(2025.11) 이후 상태라 입주안내 팝업과 2022년 공급금액표(gg)는 넣지 않음.
// 참고 사이트 메인 비주얼 원본이 1160x806이라 PC 히어로는 다소 흐릴 수 있음 — 고해상도 CG 받으면 교체 권장.
// 헤더/푸터 로고는 참고 사이트 푸터 흰색 로고(204x24) 원본.
// 대표번호 1533-6480, 상담 알림 문자 진의원 010-7190-1052 / 최용호 010-4985-1470 (2026-10-01 사용자 전달값).
// 구조는 같은 방식(참고 사이트 이미지 기반)으로 만든 buk-osan-xi-deforet를 기준으로 구성.
const config = {
  slug: 'cheongna-theliv-tiamo-casa-2',
  // 청라더리브티아모casa.addupapt.kr → /apt/cheongna-theliv-tiamo-casa-2 (mobile-scroll middleware 프록시)
  subdomain: '청라더리브티아모casa',
  // 문자 제목에서 원본과 구분되도록 '2'를 붙이고, 카톡 공유 제목(metaTitle)은 원본과 같게
  projectName: '청라 더리브 티아모 까사2',
  metaTitle: '청라 더리브 티아모 까사',
  shortName: '청라 더리브 티아모 까사',
  telNumber: '1533-6480',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/cheongna-theliv-tiamo-casa/og.jpg',
  // 참고 사이트 남색(#0d2b45 계열) + 브라운 골드 포인트(#b8906f)
  colorTheme: {
    navy: '#0d2b45',
    ink: '#0d2b45',
    cream: '#f7f4f0',
    gold: '#b8906f',
    visitBtnColor: '#ffffff',
  },
  // 요청 반영(2026-10-07) — 상담 알림 문자 수신번호 3개로 교체
  adminPhones: ['01090447402', '01048086474', '01071901052'],
  // 문자 본문에 담당자명 표기용
  adminPhoneNames: {
    '01090447402': '최현정',
    '01048086474': '이수지',
    '01071901052': '진의원',
  },
  sheetId: '',
  sheetTab: '청라더리브티아모casa',
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
    // 요청 반영(2026-10-02) — PC에서 섹션끼리 너무 붙어 보여 섹션·탭·이미지 사이 여백을 넉넉히(page.jsx main[data-spacing='roomy'])
    roomySpacing: true,

    header: {
      logo: { src: '/apt/cheongna-theliv-tiamo-casa/logo-white.png', alt: '청라 더리브 티아모 까사', width: 204, height: 24 },
      logoSize: { base: 150, lg: 180, xl: 204 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1533-6480',
    },

    quickMenu: {
      brand: '더리브 티아모 까사',
      phoneLabel: '분양문의',
      phone: '1533-6480',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '청라 더리브 티아모 까사\n분양 상담을 도와드립니다.',
      address: '인천광역시 서구 청라동 157-11',
      tagline: 'NEW LUXURISM',
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

    // 참고 사이트 메인 비주얼 3장(문구 없는 CG) — 문구는 메인 카피(가장 이상적인 일상의 시작 / 최고 46층 랜드마크) 발췌
    hero: {
      // 요청 반영(2026-10-01) — 참고 사이트 메인 첫 화면처럼: 왼쪽 슬라이드 + 오른쪽 흰 바탕 카피 + 하단 남색 물결(SignatureHeroTiamo).
      //   아래 eyebrow/title/desc/badge는 기본 히어로용 값이라 이 화면에선 안 쓰지만 variant를 빼면 바로 복귀하도록 남겨둠.
      //   참고 사이트 메인 우측의 전속모델 사진(main_model.png·name.png)은 초상권 문제로 넣지 않음
      variant: 'tiamo',
      tiamo: {
        leadLines: ['눈앞에 보이는 7호선 커낼웨이역', '더 완벽한 생활의 중심,', '가장 새로운 청라의 시작!'],
        titleRows: [
          [
            { text: '가장', size: 'sm', tone: 'gold' },
            { text: '이상적인', size: 'lg', tone: 'gold' },
          ],
          [
            { text: '일상', size: 'lg', tone: 'navy' },
            { text: '의', size: 'sm', tone: 'navy' },
            { text: '시작', size: 'lg', tone: 'navy' },
          ],
        ],
        logo: { src: '/apt/cheongna-theliv-tiamo-casa/hero-luxurism-logo.png', alt: '새로운 청라, 그 중심에 NEW LUXURISM — 청라 더리브 티아모 Casa', width: 300, height: 65 },
        bgImage: '/apt/cheongna-theliv-tiamo-casa/hero-bg-wave.webp',
        // 요청 반영(2026-10-02) — 모바일은 전체화면 이미지 위에 카피를 얹어서(어두운 배경) 남색 로고 대신 흰 문구 + 흰 로고
        logoMobile: {
          eyebrow: '새로운 청라, 그 중심에',
          eyebrowStrong: 'NEW LUXURISM',
          src: '/apt/cheongna-theliv-tiamo-casa/logo-white.png',
          alt: '청라 더리브 티아모 Casa',
          width: 204,
          height: 24,
        },
      },
      eyebrowLine1: '새로운 청라, 그 중심에',
      eyebrowLine2: 'NEW LUXURISM',
      titleLine1: '청라 더리브 티아모 까사',
      titleLine2: '가장 이상적인 일상의 시작',
      // 모바일 390px 폭에서 '청라 더리브 티아모 까사' 한 줄이 넘치지 않도록
      titleSize: { base: 22, md: 48, lg: 64 },
      descLine1: '7호선 커낼웨이역(예정) 초역세권',
      descLine2: '최고 46층 스카이브릿지 랜드마크',
      descLine3: '청라호수공원·커낼웨이 수변 프리미엄',
      slides: [
        {
          bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/hero-1.webp', alt: '청라 더리브 티아모 까사 조감도 — 커낼웨이 수변' },
          bgImageMobile: { src: '/apt/cheongna-theliv-tiamo-casa/hero-m-1.webp', alt: '청라 더리브 티아모 까사 조감도 — 커낼웨이 수변' },
        },
        {
          bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/hero-2.webp', alt: '청라 더리브 티아모 까사 야경 투시도 — 스카이브릿지' },
          bgImageMobile: { src: '/apt/cheongna-theliv-tiamo-casa/hero-m-2.webp', alt: '청라 더리브 티아모 까사 야경 투시도 — 스카이브릿지' },
        },
        {
          bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/hero-3.webp', alt: '청라 더리브 티아모 까사 광역 조감도' },
          bgImageMobile: { src: '/apt/cheongna-theliv-tiamo-casa/hero-m-3.webp', alt: '청라 더리브 티아모 까사 광역 조감도' },
        },
      ],
      overlay: true,
      badge: {
        lines: ['최고 46층', '랜드마크'],
        borderColor: '#b8906f',
      },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '청라 더리브 티아모 까사', textLight: ' 공식 안내센터입니다.' }],
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 요청 반영(2026-10-07) — 영상 섹션(YouTube 30초 TVCM) 삭제

    // 출처: 참고 사이트 사업개요(planning) 원문
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '청라 더리브 티아모 까사',
      subtitle: '인천 청라국제도시 157-11, 최고 46층 3개동 오피스텔 총 523실',
      photo: { src: '/apt/cheongna-theliv-tiamo-casa/overview-aerial.webp', alt: '청라 더리브 티아모 까사 조감도' },
      thumbs: [{ src: '/apt/cheongna-theliv-tiamo-casa/hero-2.webp', alt: '청라 더리브 티아모 까사 야경 투시도' }],
      notice: '※ 상기 면적은 계획면적이므로 세부계획 시 변경될 수 있습니다. 상기 CG는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있습니다.',
      specItems: [
        { label: '사업명', value: '인천 청라국제도시 (157-11) 오피스텔 신축공사' },
        { label: '대지위치', value: '인천광역시 서구 청라동 일반 157-11' },
        { label: '지역지구', value: '경제자유구역, 일반상업지역, 지구단위계획구역, 성장관리권역' },
        { label: '대지면적/건축면적', value: '10,685.00㎡ / 5,844.5888㎡' },
        { label: '연면적', value: '91,210.6607㎡' },
        { label: '건폐율/용적률', value: '54.70% / 599.99%' },
        { label: '규모/구조', value: '지하3층, 지상46층 / 철근콘크리트구조' },
        { label: '공급규모', value: '오피스텔 523실 (76 208실 / 84A 208실 / 84B 104실 / 211 3실)' },
        { label: '주차대수', value: '652대' },
      ],
    },

    // 출처: 참고 사이트 입지환경(location) — 광역 위치도 + CENTRAL 4종 원문, 카드 사진은 같은 페이지 이미지컷 크롭
    location: {
      id: 'location',
      navLabel: '입지환경',
      // 요청 반영(2026-10-02) — 작은 라벨(12px)만 있어 문구가 너무 작아 보여 큰 제목(PC 64px)으로
      title: 'LOCATION',
      mapImage: { src: '/apt/cheongna-theliv-tiamo-casa/location-map.webp', alt: '청라 더리브 티아모 까사 광역 위치도 — 7호선 커낼웨이역(예정), 청라호수공원, 커낼웨이', width: 1100, height: 742 },
      features: [
        {
          titlePrefix: '7호선 초역세권',
          titleStrong: ' 프리미엄의 중심',
          titleSuffix: '',
          tag: 'CENTRAL TRAFFIC',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/feature-traffic.webp', alt: '7호선 커낼웨이역(예정) 이미지컷' },
          descStrong: '',
          descRest: '바로 앞 7호선 커낼웨이역(예정) 및 서울 지하철 2호선 연장(예정), 청라IC, BRT, GRT 등 쾌속 교통망',
        },
        {
          titlePrefix: '한 걸음',
          titleStrong: ' 생활인프라의 중심',
          titleSuffix: '',
          tag: 'CENTRAL LIFE',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/feature-life.webp', alt: '쇼핑하는 가족 이미지컷' },
          descStrong: '',
          descRest: '홈플러스, 이마트, 롯데마트, 스타필드청라(예정), 코스트코(예정) 등 편리한 생활환경',
        },
        {
          titlePrefix: '커낼웨이',
          titleStrong: ' 힐링 라이프의 중심',
          titleSuffix: '',
          tag: 'CENTRAL NATURE',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/feature-nature.webp', alt: '공원에서 조깅하는 이미지컷' },
          descStrong: '',
          descRest: '청라호수공원, 바로 앞 커낼웨이 등 쾌적한 자연을 더 가까이 누리는 힐링라이프',
        },
        {
          titlePrefix: '청라의 빛나는',
          titleStrong: ' 미래가치의 중심',
          titleSuffix: '',
          tag: 'CENTRAL VISION',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/feature-vision.webp', alt: '의료복합타운 이미지컷' },
          descStrong: '',
          descRest: '하나금융·드림타운(예정), 의료복합타운 아산병원(예정) 등 눈부신 미래가치의 중심',
        },
      ],
      disclaimer:
        '※ 상기 지역도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다. 상기 현황 및 개발계획은 사업주체, 국가기관, 지자체 및 기타 기관의 사업추진 중 변경 및 지연 또는 취소될 수 있으며, 이는 당사와는 무관합니다.',
    },

    // 요청 반영(2026-10-01) — city-ociel-9-2처럼 왼쪽 이미지컷 + 오른쪽 세로 카피(split).
    //   문구는 참고 사이트 메인 'NEW LUXURISM' 섹션(sec02b) 원문을 줄 단위로 끊어 PC·모바일 동일 줄바꿈
    premiumIntro: {
      split: true,
      eyebrow: 'NEW LUXURISM',
      titleLine1: '가장 새로운 청라의 시작',
      paragraphs: [
        ['모두의 청라에서', '당신만의 청라로', '다 갖춘 중심에서', '단 하나의 시그니처로'],
        ['청라의 하늘아래', '가장 새로운 럭셔리로', '새롭게 선보입니다'],
      ],
      imageBadge: '투시도',
      bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/hero-2.webp', alt: '청라 더리브 티아모 까사 야경 투시도' },
    },
    // 요청 반영(2026-10-01) — NEW LUXURISM 섹션 다음에 참고 사이트 메인 'PERFECT TRIPLE 01~03' 내용을 같은 split 디자인으로
    //   3개 이어 붙임(이미지 좌/우 지그재그). 문구는 참고 사이트 원문 그대로, 사진은 참고 사이트 이미지 크롭
    //   (01 커뮤니티 스카이브릿지 CG, 02 사업개요 조감도, 03 입지환경 7호선 이미지컷 — 03은 원본 이미지가 작아 다소 흐릴 수 있음)
    premiumIntroExtras: [
      {
        split: true,
        reverse: true,
        eyebrow: 'PERFECT TRIPLE 01',
        titleLine1: '청라의 드높은 하늘, 당신의 특권이 되다',
        paragraphs: [
          { head: '청라의 자부심, 스카이브릿지', lines: ['단지의 품격을 높여주는 스카이브릿지로', '3개동이 연결된 유니크한 외관 설계'] },
          { head: '최고 46층 랜드마크 가치', lines: ['최상층 펜트하우스부터 46층 초고층', '설계로 청라를 대표할 랜드마크 특권'] },
        ],
        imageBadge: '이미지컷',
        bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/triple-01-skybridge.webp', alt: '청라 더리브 티아모 까사 스카이브릿지 이미지컷' },
      },
      {
        split: true,
        eyebrow: 'PERFECT TRIPLE 02',
        titleLine1: '늘 푸른 공원과 호수, 일상에 여유를 더하다',
        paragraphs: [
          { head: '커낼웨이 수변 조망', lines: ['청라호수공원, 커낼웨이 등 쾌적한 자연을', '더 가까이 누리는 에코 라이프의 완성'] },
          { head: '한걸음에 누리는 생활 인프라', lines: ['홈플러스, 이마트, 롯데마트, 스타필드 청라(예정),', '코스트코(예정) 등 다채로운 생활 환경'] },
        ],
        imageBadge: '조감도',
        bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/overview-aerial.webp', alt: '청라 더리브 티아모 까사 조감도 — 커낼웨이와 청라호수공원' },
      },
      {
        split: true,
        reverse: true,
        eyebrow: 'PERFECT TRIPLE 03',
        titleLine1: '7호선 초역세권, 서울을 빠르게 잇다',
        paragraphs: [
          { head: '7호선 초역세권 프리미엄', lines: ['바로 앞, 7호선 커낼웨이역(예정) 및 서울 지하철', '2호선 연장(예정), 청라IC, BRT, GRT 등 쾌속교통망'] },
          { head: '청라의 끝없는 미래가치', lines: ['하나금융·드림타운(예정) 의료복합타운 아산병원', '(예정) 등 눈부신 미래가치의 최중심'] },
        ],
        imageBadge: '이미지컷',
        bgImage: { src: '/apt/cheongna-theliv-tiamo-casa/triple-03-traffic.webp', alt: '7호선 커낼웨이역(예정) 이미지컷' },
      },
    ],


    // 출처: 참고 사이트 단지설계(complex) — SPECIAL DESIGN(웰컴테라스·시크릿정원·휴게정원 / 커낼스트리트·아케이드·스카이브릿지)
    newsImage: {
      src: '/apt/cheongna-theliv-tiamo-casa/complex-design.webp',
      alt: '청라 더리브 티아모 까사 단지설계 — 우수한 녹지와 고객의 동선을 고려한 오피스텔, 최고 46층 청라의 랜드마크',
      width: 1100,
      height: 2312,
      maxWidth: 1000,
    },

    // 출처: 참고 사이트 프리미엄8(premium) 원문 — 줄바꿈까지 원본 그대로. 카드 사진은 원본 4x2 그리드에서 각 칸 이미지를 잘라낸 것
    // 요청 반영(2026-10-01) — 참고 사이트처럼 4열 x 2줄, 금색 'Premium 0N' 라벨 + 각진 얇은 테두리 카드(columns: 4)
    // 요청 반영(2026-10-02) — 원본 카드 사진(260x152)이 흐려 premium-hd-0N으로 교체: 01·02는 2560 CG(hr-skybridge-exterior·
    //   hr-canal-aerial), 05·06은 실내 CG(int-kitchen·int-dining), 03·04·07·08은 같은 컷의 입지 이미지(feature-*, 548px)
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'NEW LUXURISM',
      // 요청 반영(2026-10-02) — 모바일 줄바꿈: 청라 더리브 / 티아모 까사 / PREMIUM 8 (PC는 한 줄)
      titlePlain: '청라 더리브\n티아모 까사\n',
      titleAccent: 'PREMIUM 8',
      cardTextAlign: 'center',
      columns: 4,
      cards: [
        {
          num: 'Premium 01',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-01.webp', alt: '청라의 자부심 스카이브릿지' },
          title: ['청라의 자부심', '스카이브릿지'],
          desc: ['단지의 품격을 높여주는', '스카이브릿지로 3개 동이', '연결되는 유니크한 외관설계'],
        },
        {
          num: 'Premium 02',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-02.webp', alt: '최고 46층 랜드마크 조감도' },
          title: ['최고 46층', '랜드마크 가치'],
          desc: ['최상층 펜트하우스부터', '46층 초고층 설계로', '청라를 대표할 랜드마크'],
        },
        {
          num: 'Premium 03',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-03.webp', alt: '7호선 커낼웨이역 초역세권 이미지컷' },
          title: ['7호선 커낼웨이역', '초역세권'],
          desc: ['바로 앞, 7호선 커낼웨이역(예정) 및', '서울 지하철 2호선 연장(예정),', '청라IC, BRT, GRT 등 쾌속 교통망'],
        },
        {
          num: 'Premium 04',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-04.webp', alt: '커낼웨이 수변조망 이미지컷' },
          title: ['커낼웨이', '수변조망'],
          desc: ['청라호수공원, 커낼웨이 등', '쾌적한 자연을 더 가까이', '누리는 에코라이프의 완성'],
        },
        {
          num: 'Premium 05',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-05.webp', alt: '주방 인테리어 CG' },
          title: ['하이엔드 주방가구', 'Dada 인테리어'],
          desc: ['세계최고의 주방가구', '몰테니앤씨그룹의 브랜드', 'Dada 전 세대 적용', '※ 펜트타입(211㎡) 3세대 제외'],
        },
        {
          num: 'Premium 06',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-06.webp', alt: '다이닝·주방 가전 인테리어 CG' },
          title: ['생활가전', '무상옵션 제공'],
          desc: ['FCU 에어컨, 비스포크 냉장&냉동고,', '세탁기&건조기, 전기오븐, 하이브리드', '쿡탑 등 가전가구(일부) 무상제공'],
        },
        {
          num: 'Premium 07',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-07.webp', alt: '생활인프라 이미지컷' },
          title: ['한 걸음에 누리는', '생활인프라'],
          desc: ['홈플러스, 롯데마트,', '스타필드 청라(예정), 코스트코(예정) 등', '다채로운 생활 환경'],
        },
        {
          num: 'Premium 08',
          image: { src: '/apt/cheongna-theliv-tiamo-casa/premium-hd-08.webp', alt: '의료복합타운 이미지컷' },
          title: ['청라의 끝없는', '미래가치'],
          desc: ['하나금융·드림타운(예정),', '의료복합타운 아산병원(예정)', '등 눈부신 미래가치의 최중심'],
        },
      ],
    },



    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '지하3층~지상46층 3개동',
      titleLine2: '오피스텔 총 523실, 청라의 새로운 랜드마크',
      desc: '단지배치도와 동호수배치도로 동 배치와 라인별 타입 구성을 한눈에 확인해보세요.',
      // 출처: 참고 사이트 배치도(dh) 원본 — 단지배치도 / 동호수배치도
      siteMap: {
        image: { src: '/apt/cheongna-theliv-tiamo-casa/complex-sitemap.webp', alt: '청라 더리브 티아모 까사 단지배치도 (76 208실 / 84A 208실 / 84B 104실 / 211 3실, 합계 523실)', width: 1100, height: 612 },
      },
      donghoChart: {
        image: { src: '/apt/cheongna-theliv-tiamo-casa/complex-dongho.webp', alt: '청라 더리브 티아모 까사 동호수배치도(101~103동)', width: 1100, height: 945 },
      },
    },

    // 출처: 참고 사이트 평면정보(unit) 4개 타입 원본 — 면적·키맵·평면이 한 장에 포함된 완성 이미지
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '76㎡부터 211㎡ 펜트하우스까지, 청라 더리브 티아모 까사의 4개 타입을 만나보세요.',
      tabColumns: 4,
      tabColumnsMobile: 4,
      zoomLightbox: true,
      tabs: [
        { label: '76', image: { src: '/apt/cheongna-theliv-tiamo-casa/unit-76.webp', alt: '76㎡ 평면정보 (208실, 전용 76.6326㎡ / 공급 107.9174㎡ / 계약 150.4997㎡)', width: 1100, height: 1487 } },
        { label: '84A', image: { src: '/apt/cheongna-theliv-tiamo-casa/unit-84a.webp', alt: '84㎡A 평면정보 (208실, 전용 84.9878㎡ / 공급 119.3696㎡ / 계약 166.5946㎡)', width: 1100, height: 1610 } },
        { label: '84B', image: { src: '/apt/cheongna-theliv-tiamo-casa/unit-84b.webp', alt: '84㎡B 평면정보 (104실, 전용 84.9843㎡ / 공급 119.6914㎡ / 계약 166.9145㎡)', width: 1100, height: 1617 } },
        { label: '211', image: { src: '/apt/cheongna-theliv-tiamo-casa/unit-211.webp', alt: '211㎡ 펜트하우스 평면정보 (3실, 전용 211.6980㎡ / 공급 296.7958㎡ / 계약 414.4300㎡)', width: 1100, height: 1103 } },
      ],
    },

    // 출처: 참고 사이트 커뮤니티(community)·특화시스템(system01~06)·Dada(dada) 원본 이미지
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      // 요청 반영(2026-10-02) — 커뮤니티·시스템 이미지를 누르면 확대(모달에서 한 번 더 누르면 2.5배)
      zoomLightbox: true,
      plainImageGroups: [
        {
          title: 'COMMUNITY',
          // 요청 반영(2026-10-02) — 이미지가 1장뿐이라 '커뮤니티 시설' 탭 버튼은 숨김
          hideTabs: true,
          tabs: [
            {
              label: '커뮤니티 시설',
              image: { src: '/apt/cheongna-theliv-tiamo-casa/community.webp', alt: '청라 더리브 티아모 까사 커뮤니티 — 스카이브릿지, 피트니스 클럽, G/X룸', width: 1100, height: 2030 },
            },
          ],
        },
        {
          title: 'SYSTEM',
          // 요청 반영(2026-10-02) — 둥근 버튼이 모바일에서 3/3/1로 어색하게 줄바꿈돼, 세대안내 타입 탭과 같은 줄 구분 그리드로
          //   (모바일 4열 → 4+3, PC 7열 한 줄)
          tabStyle: 'grid',
          tabColumns: 7,
          tabColumnsMobile: 4,
          tabs: [
            { label: '디지털', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-01.webp', alt: '디지털 시스템', width: 1100, height: 963 } },
            { label: '시큐리티', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-02.webp', alt: '시큐리티 시스템', width: 1100, height: 963 } },
            { label: '웰빙', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-03.webp', alt: '웰빙 시스템', width: 1100, height: 743 } },
            { label: '친환경 에너지', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-04.webp', alt: '친환경 에너지 시스템', width: 1100, height: 933 } },
            { label: '다용도 수납', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-05.webp', alt: '다용도 수납 시스템', width: 1100, height: 985 } },
            { label: '빌트인', image: { src: '/apt/cheongna-theliv-tiamo-casa/system-06.webp', alt: '빌트인 시스템', width: 1100, height: 985 } },
            { label: 'Dada', image: { src: '/apt/cheongna-theliv-tiamo-casa/dada.webp', alt: '세계 최고의 주방가구 다다(Dada)와 함께 합니다', width: 1100, height: 1436 } },
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VIP Reservation',
      titleLine1: '청라 더리브 티아모 까사',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다.',
      serviceOptions: ['현장 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 방문예약 접수 및 상담 일정 조율 - 분양 일정, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    // 출처: 참고 사이트 푸터(시행위탁·시공) 원문
    footer: {
      logo: { src: '/apt/cheongna-theliv-tiamo-casa/logo-white.png', alt: '청라 더리브 티아모 까사', width: 204, height: 24 },
      logoAlign: 'center',
      highlightText: '분양문의 1533-6480',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행위탁', value: '청라플러스' },
        { label: '시공', value: 'SGC E&C' },
        { label: '이메일', value: 'addup@addup.kr' },
        { label: '담당회사', value: '주식회사 더블루파트너스', newLine: true },
        { label: '사업자 등록번호', value: '789-81-03093' },
        { label: '전화번호', value: '1666-1755' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 일러스트 및 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 사이트에 기재된 부동산 관련 내용은 정부 정책에 따라 향후 일부 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 현장 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1533-6480',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 요청 반영(2026-10-02) — 진입 팝업 1번: 완성본 이미지 → 닫으면 팝업 2번: 방문예약 폼
    //   (원본 사이트 방문예약 다이얼로그와 같은 디자인 — SignatureVisitPopupTiamo)
    // 요청 반영(2026-10-07) — 팝업 1번 이미지를 popup0.webp(원본 티아모 까사와 같은 이미지)로 교체, 이미지 안 '문의하기'
    //   버튼 위치만 눌리게 hotspot → 관심고객(상담신청 및 방문예약) 섹션(#vip-reservation)으로 이동(이때는 팝업 2번을 띄우지 않음)
    popup: {
      enabled: true,
      order: 'imageFirst',
      openDelayMs: 1200,
      // 이미지 우상단에 X가 그려져 있어 하단 '팝업닫기' 바 없이 이미지를 누르면 닫힘
      hideCloseBar: true,
      fitViewport: true,
      images: [
        {
          src: '/apt/cheongna-theliv-tiamo-casa/popup0.webp',
          alt: '청라를 완성하는 BIG3 — 스타필드, 서울청라아산병원, 하나금융그룹 하나드림타운. 아파트를 담은 대단지 오피스텔, 주거형 523실 이상 대단지. 5억~6억대로 청라 중심에 입주',
          width: 1159,
          height: 1358,
          hotspots: [
            { link: '#vip-reservation', label: '문의하기 — 관심고객등록', left: 54.5, top: 85.5, width: 38.5, height: 9.5 },
          ],
        },
      ],
      // 요청 반영(2026-10-07) — 이미지 팝업 다음에 뜨던 방문예약(관심고객) 폼 팝업 삭제
    },
  },
}

export default config
