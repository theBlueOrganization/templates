// ────────────────────────────────────────────────────────────
// 새 현장을 추가할 때는 이 파일을 복사해서 값만 바꾸면 됩니다.
//   1) 이 파일을 data/sites/새현장-슬러그.js로 복사
//   2) 아래 값들을 새 현장 정보로 수정 (Figma 디자인에 맞춰 signature 하위 필드 교체)
//   3) data/siteRegistry.js에 import + sites 배열 등록
//   4) public/apt/새현장-슬러그/ 폴더에 이미지 넣기
//
// adaptive-landing은 이 signature 스택 하나만 씁니다(범용 섹션 타입 시스템 없음).
// signature 객체 아래 각 필드가 그대로 하나의 섹션 컴포넌트에 대응합니다:
//   header        → components/ui/SignatureHeader
//   hero          → components/sections/SignatureHero
//   summary       → components/sections/SignatureSummary   (사업개요)
//   location      → components/sections/SignatureLocation  (위치)
//   premiumIntro  → components/sections/SignaturePremiumIntro
//   premiumValue  → components/sections/SignaturePremiumValue
//   landscape     → components/sections/SignatureLandscape (조경안내)
//   complex       → components/sections/SignatureComplex   (단지소개, 배치도·동호수표)
//   unitPlan      → components/sections/SignatureUnitPlan  (세대안내, 탭형 평면도)
//   club          → components/sections/SignatureClub (커뮤니티 — intro/wellness/sportsHealth/cafeLounge/eduKids)
//   vipForm       → components/sections/SignatureVipForm (상담신청 폼)
//   footer        → components/ui/SignatureFooter
//   quickMenu     → components/ui/SignatureQuickMenu (선택 필드 — PC 1024px 이상 전용 우측 고정
//                   퀵메뉴. 없으면 렌더되지 않음. wonjongyeok-world-meridian-fore.js 참고)
// 위 필드는 컴포넌트가 optional chaining 없이 그대로 읽으므로 전부 채워야 합니다.
// ────────────────────────────────────────────────────────────
const config = {
  // URL이 됨: /apt/example-apt
  slug: 'example-apt',
  // 선택 필드: 있으면 [subdomain].addupapt.kr → /apt/[slug]로 자동 리다이렉트됨 (middleware.js, 공백 없는 한글 문자열)
  subdomain: '예시아파트',
  projectName: '예시 아파트',
  shortName: '예시 아파트',
  telNumber: '1533-0000',
  // 선택 필드: ?utm_source=값으로 들어온 방문자에게만 telNumber를 다르게 노출
  // (SignatureHeader/SignatureHero/SignatureFooter 전화번호 공통 적용)
  // telNumberByUtm: { 카카오: '02-111-1111', 문자: '02-222-2222' },
  // 카카오톡/문자로 링크 공유했을 때 보이는 썸네일 이미지 (1200x630px 절대 URL)
  ogImage: 'https://example.vercel.app/apt/example-apt/og.webp',
  // 상담신청이 들어오면 SMS를 받을 번호들 (비워두면 .env.local의 ADMIN_PHONE으로 폴백)
  adminPhones: ['01000000000'],
  // 선택 필드: ?utm_source=값으로 들어온 상담신청만 SMS 수신번호를 다르게 (adminPhones 대신 사용) — 매체별 담당 상담원 분리용
  // adminPhonesByUtm: { 카카오: ['01011112222'], 문자: ['01033334444'] },
  // 비워두면 .env.local의 GOOGLE_SHEET_ID를 사용
  sheetId: '',
  // 이 현장 상담 데이터가 저장될 구글시트의 탭(시트) 이름 — 시트에 미리 만들어둬야 함
  sheetTab: '예시아파트',
  // true면 상담 접수 알림 문자에 "유입매체: 카카오" 같은 줄이 추가됨 (utm_source가 있고 직접유입이 아닐 때만)
  showUtmInSms: true,
  // 선택 필드: true + kakaoTemplateId가 있으면 상담 접수 알림을 SMS 대신 카카오 알림톡으로 발송 (실패 시 SMS로 자동 폴백)
  // kakao: true,
  // 솔라피 콘솔 → 카카오 알림톡 → 템플릿 관리에서 발급받은 템플릿ID (없으면 .env.local의 KAKAO_TEMPLATE_ID로 폴백)
  // kakaoTemplateId: '',

  // 회사 정보 (보통 현장마다 똑같음, 대행사 정보)
  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 상담신청 폼의 "원하시는 일시" select 옵션 목록
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
    // PC 상단 고정 헤더 — gnb 배열 순서가 아래 sectionIds(각 섹션의 id)와 1:1로 매칭됨
    header: {
      logo: { src: '/apt/example-apt/logo-white.png', alt: '예시 아파트', width: 250, height: 66 },
      gnb: ['사업안내', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1533-0000',
    },

    // 첫 화면 히어로 — mobileBar는 모바일 전용 하단 액션바(전화상담/방문예약)
    hero: {
      eyebrowLine1: '예시 지역의 스카이라인을 완성하는',
      eyebrowLine2: '새로운 마스터피스',
      titleLine1: '예시 아파트',
      titleLine2: '브랜드타운',
      descLine1: '단 5%의 계약금으로 입주까지 이어지는 완벽한 특권.',
      descLine1Accent: ['5%의 계약금'],
      descLine2: '압도적인 스케일의 하이엔드 커뮤니티와',
      descLine3: '프리미엄 라이프를 당신의 일상으로 초대합니다.',
      bgImage: { src: '/apt/example-apt/hero-bg.jpg', alt: '예시 아파트 대표 조감도' },
      // 안내 멘트는 배열이라 여러 개 넣으면 자동으로 위→아래 롤링됨
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '예시 아파트', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '예약 후 상담만해도 사은품 제공',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 사업개요
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/example-apt/overview-photo.jpg', alt: '예시 아파트 조감도' },
      thumbs: [
        { src: '/apt/example-apt/overview-thumb-1.jpg', alt: '단지 전경 썸네일' },
        { src: '/apt/example-apt/overview-thumb-2.jpg', alt: '커뮤니티 시설 썸네일' },
        { src: '/apt/example-apt/overview-thumb-3.jpg', alt: '조경 전경 썸네일' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '예시 공동주택 신축공사' },
        { label: '대지위치', value: '서울특별시 예시구 예시동 000번지 일원' },
        { label: '대지면적', value: '62,267.00㎡(18,835.76평)' },
        // 값이 여러 줄이면 배열로
        { label: '건축규모', value: ['지하 2층 ~ 지상 29층 4개동, 총 500세대', '일반분양 400세대, 임대 100세대'] },
        { label: '조경면적', value: '26,230.48㎡(7,934.72평) / 조경률 42.13%' },
        { label: '주차대수', value: ['공동주택 총 600대', '세대당 1.2대'] },
      ],
    },

    // 위치안내 — features 배열이 카드형 4개 블록으로 렌더링됨
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '예시 지역의 ',
      eyebrowAccent: '랜드마크',
      title: 'Perfect Location',
      descTitle: '자연의 쾌적함과 도심의 인프라를 한자리에 품었습니다.',
      descTitleAccent: ['자연의 쾌적함', '도심의 인프라'],
      descBody1: '어디로든 통하는 쾌속 교통망과 도보 거리의 명품 학군까지,',
      descBody1Accent: ['쾌속 교통망', '명품 학군'],
      descBody2: '예시 아파트가 당신의 완벽한 일상을 완성합니다.',
      mapImage: { src: '/apt/example-apt/location-map.jpg', alt: '예시 아파트 위치 안내도' },
      features: [
        {
          titlePrefix: '멋진',
          titleStrong: '공원뷰',
          titleSuffix: '로',
          tag: 'Class UP',
          image: { src: '/apt/example-apt/feature-park-view.jpg', alt: '공원 뷰' },
          descStrong: '예시중앙공원',
          descRest: '을 품은 남향 위주 배치로 펼쳐지는 힐링 라이프 명품 뷰 (일부세대 제외)',
        },
        {
          titlePrefix: '가까운',
          titleStrong: '학교',
          titleSuffix: '로',
          tag: 'Smart UP',
          image: { src: '/apt/example-apt/feature-education.jpg', alt: '학군 및 교육환경' },
          descStrong: '단지 내 초·중교(예정)',
          descRest: ', 학원가 등 한 번에 누리는 원스톱 교육환경',
        },
        {
          titlePrefix: '편리한',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life UP',
          image: { src: '/apt/example-apt/feature-infra.jpg', alt: '생활 인프라' },
          descStrong: '대형마트, 중심상권',
          descRest: ' 등 멀티 인프라와 직주근접 생활권',
        },
        {
          titlePrefix: '빠른',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Speed UP',
          image: { src: '/apt/example-apt/feature-traffic.jpg', alt: '교통 환경' },
          descStrong: '지하철역(예정), 간선도로',
          descRest: ', 고속도로 IC 등 쾌속교통망',
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    // 프리미엄 인트로 — 배경 이미지 위에 짧은 카피만 얹는 전환용 섹션
    premiumIntro: {
      eyebrow: 'NATURAL NOBILITY',
      titleLine1: '예시 지역을 압도하는',
      titleLine2: '예시 아파트 브랜드타운',
      descLine1: '총 500세대 규모의 압도적 브랜드 타운 프리미엄',
      descLine1Accent: ['500세대'],
      descLine2: '자연의 평온함과 도심의 활기를 동시에 누리는 새로운 주거 중심을 완성합니다.',
      bgImage: { src: '/apt/example-apt/premium-intro-bg.jpg', alt: '예시 아파트 프리미엄 전경' },
    },

    // 프리미엄 가치 — cards 6장 고정 그리드
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '예시 아파트 ',
      titleAccent: 'SIGNATURE 6',
      cards: [
        { num: '01', title: ['500세대', '랜드마크 스케일'], desc: ['지하 2층~지상 29층 4개동 대단지 위용'] },
        { num: '02', title: ['희소한', '브랜드타운'], desc: ['프리미엄으로 검증된 미래가치'] },
        { num: '03', title: ['차별화된', '단지 특화설계'], desc: ['실내수영장, 유아풀 등 일상의 격을 높이는', '하이엔드 커뮤니티'] },
        { num: '04', title: ['대규모 힐링', '단지 조경'], desc: ['공원과 연계된 쾌적한 자연환경 및', '특화된 테마 조경 설계'] },
        { num: '05', title: ['전 세대 제공', '프라이빗 세대창고'], desc: ['부피가 큰 레저용품 등을 효율적으로 보관하여', '실내 공간을 더욱 넓게 쓰는 특화 서비스'] },
        { num: '06', title: ['59·74·84㎡', '다양한 주택형'], desc: ['전용 59㎡부터 84㎡까지, 선호도 높은', '평면 위주의 혁신 공간 설계 적용'] },
      ],
    },

    // 조경 패널 3장 — 각 패널이 자기 이미지·뱃지·제목·설명을 따로 갖는다(실제 납품 시 패널별로 다른 시설을 소개하도록 자유롭게 수정)
    landscape: {
      panels: [
        {
          image: { src: '/apt/example-apt/landscape-1.jpg', alt: '단지 조경 - 물놀이터 전경 1' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/example-apt/landscape-2.jpg', alt: '단지 조경 - 물놀이터 전경 2' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/example-apt/landscape-3.jpg', alt: '단지 조경 - 물놀이터 전경 3' },
          badge: 'FUN GROUND',
          titlePlain: '역동적인 ',
          titleAccent: '물놀이터',
          desc: '물의 리듬과 함께 뛰어 놀며, 감각과 재미 창의력까지 깨우는 역동적인 물놀이터에서 즐거운 시간을 누리실 수 있습니다.',
        },
      ],
    },

    // 단지소개 — 배치도 + 동호수표 이미지 2장
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '누구나 알고 있던 여가와 휴식을 넘어',
      titleLine2: '단지소개',
      desc: '다채롭게 펼쳐진 프리미엄 커뮤니티에서 남다른 삶의 여유를 즐기다',
      siteMap: {
        image: { src: '/apt/example-apt/complex-sitemap.png', alt: '예시 아파트 단지 배치도 및 타입별 세대수', width: 1318, height: 1732 },
      },
      donghoChart: {
        image: { src: '/apt/example-apt/complex-dongho-chart.png', alt: '예시 아파트 동호수 배치표', width: 1433, height: 1920 },
      },
    },

    // 세대안내 — 탭(면적/타입)을 클릭하면 오른쪽 평면도 이미지·스펙표가 전환됨
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'EXAMPLE APARTMENT',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['예시 지역의 주거문화를 선도하는', '예시 아파트', '당신의 라이프스타일에 맞춘', '다양한 혁신 평면을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 500세대 중 일반분양 200세대',
              image: { src: '/apt/example-apt/unit-59a.jpg', alt: '59㎡ A 타입 평면도' },
              specs: { exclusive: '59.9800', common: '22.1000', supply: '82.0800', otherCommon: '40.0000', contract: '122.0800' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '총 500세대 중 일반분양 150세대',
              image: { src: '/apt/example-apt/unit-84a.jpg', alt: '84㎡ A 타입 평면도' },
              specs: { exclusive: '84.9265', common: '30.1023', supply: '115.0288', otherCommon: '60.1200', contract: '175.1488' },
            },
            {
              letter: 'B',
              countText: '총 500세대 중 일반분양 50세대',
              image: { src: '/apt/example-apt/unit-84a.jpg', alt: '84㎡ B 타입 평면도' },
              specs: { exclusive: '84.7532', common: '29.9887', supply: '114.7419', otherCommon: '59.9800', contract: '174.7219' },
            },
          ],
        },
      ],
    },

    // 커뮤니티 — intro/floorPlanB1/wellness/sportsHealth/cafeLounge/eduKids 전부 필수(하위 컴포넌트가 optional chaining 없이 읽음)
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      intro: {
        eyebrow: 'COMMUNITY',
        titleLine1: '누구나 알고 있던 여가와 휴식을 넘어',
        titleLine2: '전혀 새로운 삶의 스타일이 열리다',
        desc: '다채롭게 펼쳐진 프리미엄 커뮤니티에서 남다른 삶의 여유를 즐기다',
      },
      floorPlanB1: {
        title: '',
        dragHint: '좌우로 밀어서 B1F 도면을 확인하세요',
        image: { src: '/apt/example-apt/floorplan-b1f.jpg', alt: 'B1F 커뮤니티 평면도' },
      },
      wellness: {
        badge: 'SIGNATURE AMENITY',
        titlePlain: '단지 내 유일무이 프리미엄',
        titleAccent: '사우나 & 실내수영장',
        desc: '단지 안에서 누리는 특급 호텔급 수영장과 스파 사우나 시설로 완벽한 힐링을 선사합니다.',
        dark: true,
        hero: {
          image: { src: '/apt/example-apt/facility-pool-main.jpg', alt: '프리미엄 실내수영장 전경' },
          title: '프리미엄 실내수영장',
          desc: '호텔급 스케일을 자랑하는 실내수영장에서 쾌적한 아침을 시작하세요.',
        },
        halves: [
          { image: { src: '/apt/example-apt/facility-sauna.jpg', alt: '프리미엄 사우나' }, caption: '프리미엄 사우나' },
          { image: { src: '/apt/example-apt/facility-kids-pool.jpg', alt: '어린이 맞춤 안전 유아풀' }, caption: '어린이 맞춤 안전 유아풀' },
        ],
      },
      sportsHealth: {
        badge: 'SPORTS & HEALTH',
        titlePlain: '에너지를 채우는 ',
        titleAccent: '활력 공간',
        desc: '다양한 최신 운동 기구와 쾌적한 환경을 갖춘 하이엔드 스포츠 존',
        showcases: [
          {
            side: 'left',
            tag: 'GOLF CLUB',
            title: '골프연습장',
            desc: '계절에 구애받지 않고 쾌적하게 필드의 실전 감각을 생생하게 익힐 수 있는 입주민 전용 스크린 골프 연습장입니다.',
            main: { image: { src: '/apt/example-apt/facility-golf-main.jpg', alt: '골프연습장 전체 전경' }, caption: '스크린 골프 연습장' },
            sub: { image: { src: '/apt/example-apt/facility-golf-detail.jpg', alt: '스크린 타석 상세' }, caption: '스크린 타석 상세' },
          },
          {
            side: 'right',
            tag: 'FITNESS CENTER',
            title: '피트니스 센터 & GX룸',
            desc: '다양한 최신 유산소/웨이트 기구를 갖춘 피트니스 센터와 요가, 필라테스를 즐길 수 있는 다목적 GX룸입니다.',
            main: { image: { src: '/apt/example-apt/facility-fitness-main.jpg', alt: '피트니스 센터 전체' }, caption: '피트니스 센터 전경' },
            sub: { image: { src: '/apt/example-apt/facility-fitness-detail.jpg', alt: '피트니스 기구 상세' }, caption: '피트니스 기구 상세' },
          },
        ],
        floorPlanB2: {
          title: '실내체육관 B2F',
          dragHint: '좌우로 밀어서 B2F 도면을 확인하세요',
          image: { src: '/apt/example-apt/floorplan-b2f.jpg', alt: 'B2F 실내체육관 평면도' },
        },
      },
      cafeLounge: {
        badge: 'CAFE & LOUNGE',
        titlePlain: '휴식과 교류의 ',
        titleAccent: '커뮤니티 라운지',
        desc: ['이웃과 여유로운 담소를 나누며', '차 한 잔의 여유를 즐기는 공간'],
        halves: [
          { image: { src: '/apt/example-apt/facility-cafe-brunch.jpg', alt: '브런치 카페' }, caption: '브런치 카페' },
          { image: { src: '/apt/example-apt/facility-cafe-1f.jpg', alt: '1층 카페테리아' }, caption: '1층 카페테리아' },
        ],
      },
      eduKids: {
        badge: 'EDU & KIDS ZONE',
        titlePlain: '아이들의 꿈이 자라는 ',
        titleAccent: '에듀 & 키즈 공간',
        desc: '조용한 도서관과 창의력을 키우는 실내놀이터',
        showcases: [
          {
            side: 'left',
            tag: 'LIBRARY',
            title: '작은도서관 & 독서실',
            desc: '조용하고 아늑한 분위기 속에서 독서의 즐거움을 누리고, 자녀들이 학업에 온전히 집중할 수 있도록 조성된 프리미엄 에듀 공간입니다.',
            main: { image: { src: '/apt/example-apt/facility-library-main.jpg', alt: '작은도서관 학습 컷' }, caption: '입주민 전용 스터디존' },
            sub: { image: { src: '/apt/example-apt/facility-library-detail.jpg', alt: '작은도서관 인테리어' }, caption: '작은도서관 실내' },
          },
          {
            side: 'right',
            tag: 'KIDS PLAY',
            title: '실내놀이터',
            desc: '미세먼지나 궂은 날씨 걱정 없이 아이들이 쾌적하고 안전하게 뛰어놀며 상상력을 무한히 키울 수 있는 신나는 실내 플레이존입니다.',
            main: { image: { src: '/apt/example-apt/facility-kids-main.jpg', alt: '실내놀이터 가족 컷' }, caption: '가족 실내놀이터' },
            sub: { image: { src: '/apt/example-apt/facility-kids-detail.jpg', alt: '실내놀이터 공간 CG' }, caption: '키즈 플레이존' },
          },
        ],
      },
    },

    // 상담신청 폼 — 여기서 입력받은 값이 /api/sms(문자 발송 + 시트 저장)로 전송됨
    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '예시 아파트',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 자동으로 모델하우스 상세주소가 발송되며, 예약고객에게는 방문사은품이 증정 됩니다. 상품권은 소진 시 까지 제공되며, 예약없이 내방하신 고객께는 제공되지 않습니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/example-apt/footer-logo.png', alt: '예시 아파트' },
      highlightText: '청약통장없이 로열동호수 선점!',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '예시자산신탁(주)' },
        { label: '시공', value: '(주)예시건설 / 홍길동 / 104-81-00000' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1533-0000',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
