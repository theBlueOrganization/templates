// 오산헤리티지자이 — 경기도 오산시 병점생활권 일원, GS건설 Xi 브랜드 아파트 개발사업. 총 1,783세대
// (1BL 1,069세대 | 2BL 714세대), 시공 GS건설(주), 시행 (주)양산사지구에스피씨.
// 공식 사이트(https://www.xi.co.kr/osXI, 2026-09-14 확인) — 확인 당일 상세 페이지가 점검 중이라
// 처음에는 메인 화면(세대수·시공사·시행사·GTX-C·병점생활권·CLUB XIAN/CLUB CLOUD 명칭)만 반영했으나,
// 이후 점검이 끝나 실제 하위 페이지(메인 비주얼·사업개요·평형정보 등)를 다시 확인해 히어로 이미지·
// 색상(#283444 남색, #006899 포인트 블루)·사업개요 표(사용자 전달 원문)를 실제 값으로 갱신함.
//
// ⚠️ slug/subdomain에 'x' 접미사가 붙은 이유: mobile-scroll 프로젝트에 이미 slug `osan-heritage-xi`·
// 서브도메인 `오산헤리티지자이`(및 -2/-3 변형)로 완전히 다른 독립 현장이 살아있어 충돌 회피(2026-09-14
// 사용자 확인). 대신 projectName(내부용, SMS/시트 탭 등)은 'x'를 붙이고, 카카오톡 등 공유 시 노출되는
// metaTitle은 접미사 없이 '오산헤리티지자이' 그대로 유지(dalseo-xi-genic-2.js와 동일한 패턴).
//
// 2026-09-14 기준 사업개요·위치안내·프리미엄가치·단지소개(배치도/동호수표)·세대안내(8개 실제 타입)·
// 커뮤니티(CLUB XIAN/CLUB CLOUD)·로고·진입 팝업까지 공식 사이트 원본 및 사용자 전달 이미지로 전부 교체 완료.
// 아래 값은 모두 사용자(현장 담당자)가 직접 전달한 원문 그대로 반영:
//   대표 분양 상담 문의 1666-1081, 운영 (주)세인디엔씨(사업자등록번호 824-88-01908),
//   시행사 (주)양산사지구에스피씨(사업자등록번호 434-88-02873, 대표자 신우철·이담경)
const config = {
  slug: 'osan-heritage-xi-x',
  subdomain: '오산헤리티지자이x',
  // "x"가 붙은 projectName은 SMS/시트 탭 등 내부용, 고객에게 보이는 공유 제목(metaTitle)은 원래 이름 유지
  projectName: '오산헤리티지자이x',
  metaTitle: '오산헤리티지자이',
  shortName: '오산헤리티지자이',
  telNumber: '1666-1081',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/osan-heritage-xi-x/og.jpg',
  // 헤더·퀵메뉴 등 공용 Signature* 컴포넌트가 var(--navy 등)로 참조하는 사이트 전역 색상.
  // 출처: 공식 사이트(xi.co.kr/osXI) 실제 CSS 원문 색상값 그대로 반영(2026-09-14 확인) —
  // navy/ink #283444(공식 사이트 main_banner 배경 남색), gold #006899(공식 사이트 포인트색·활성 썸네일
  // 테두리 색으로 common.css 전반에서 22회 사용된 자이 공식 브랜드 블루), cream #ffffff
  colorTheme: {
    navy: '#283444',
    ink: '#283444',
    cream: '#ffffff',
    gold: '#006899',
    // 요청 반영 — 하단 고정 모바일 액션바 "방문예약" 버튼(파란 배경)의 기본 텍스트색이 --navy라
    // 배경과 대비가 약해 보여서 흰색으로 교체(다른 현장은 이 값이 없으면 기존 --navy 그대로 유지)
    visitBtnColor: '#ffffff',
  },
  adminPhones: ['01032662158'],
  sheetId: '',
  sheetTab: '오산헤리티지자이x',
  showUtmInSms: true,
  // 요청 반영 — 010-3266-2158로 가는 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)하고,
  // 현장명 뒤에 "+네이버"를 붙여 유입 매체를 구분(유입경로 utm 없이 들어온 직접유입 기준)
  kakao: true,
  smsProjectNameSuffix: '네이버',

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
      // 출처: 공식 사이트(xi.co.kr) 공용 BI 로고(/Content/img/common/bi.svg) — 원본은 남색·흰색
      // 버전이 한 파일에 나란히 들어있어 각각 잘라 logo.svg/logo-white.svg로 분리해뒀으나, 헤더
      // 배경(var(--navy))이 스크롤 여부와 상관없이 항상 남색이라 남색 로고를 쓰면 배경에 묻혀
      // 안 보임 — 요청 반영으로 스크롤 상태와 무관하게 흰색 버전만 사용
      logo: { src: '/apt/osan-heritage-xi-x/logo-white.svg', alt: '오산헤리티지자이', width: 76, height: 41 },
      // 요청 반영 — 로고가 와이드 워드마크 기본값(140/190/220px) 기준이라 컴팩트한 XI 마크에는
      // 너무 크게 보여서 줄임
      logoSize: { base: 52, lg: 64, xl: 72 },
      gnb: ['사업개요', '위치안내', '프리미엄가치', '단지소개', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-1081',
    },

    // PC 전용 우측 고정 사이드 퀵메뉴 — 공식 사이트(xi.co.kr/osXI)의 좌측 고정 퀵메뉴(견본주택예약·
    // 이메일링·분양안내·영상·위치안내·관심고객등록) 구성을 참고해 targetId를 아래 섹션 흐름에 맞게 재구성
    quickMenu: {
      brand: '오산헤리티지자이',
      phoneLabel: '분양문의',
      phone: '1666-1081',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '오산헤리티지자이\n분양 상담을 도와드립니다.',
      address: '경기도 오산시 병점생활권 일원',
      tagline: 'GTX-C PREMIUM',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄가치', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지소개', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '상담신청 및 방문예약', targetId: 'vip-reservation' },
      ],
    },

    hero: {
      eyebrowLine1: '병점생활권을 넘어, GTX-C가 여는',
      eyebrowLine2: '오산의 새로운 헤리티지',
      titleLine1: '오산헤리티지자이',
      titleLine2: '총 1,783세대 대단지',
      descLine1: '1BL 1,069세대·2BL 714세대, 자이가 완성하는 압도적 스케일',
      descLine1Accent: ['1BL 1,069세대', '2BL 714세대'],
      descLine2: 'GTX-C 노선을 따라 요동치는 미래가치와',
      descLine3: '규제를 피한 병점생활권의 입지를 동시에 누리는 곳',
      // 공식 사이트(xi.co.kr/osXI) 메인 비주얼 슬라이드 5장 원본 그대로(2026-09-14 확인, PC는 공식
      // 사이트에서, 모바일은 사용자가 직접 전달) — 슬라이드 이미지 자체에 문구가 이미 포함돼 있어
      // hideText:true로 중복 텍스트 오버레이를 막음(dalseo-xi-genic-2와 동일 패턴). 3.5초 간격
      // 자동 전환은 SignatureHero 공용 로직(hero.slides가 2장 이상이면 자동 적용)
      slides: [
        {
          bgImage: { src: '/apt/osan-heritage-xi-x/hero-bg.jpg', alt: '오산헤리티지자이 대표 조감도 — Lead the Change' },
          bgImageMobile: { src: '/apt/osan-heritage-xi-x/hero-bg-mobile.jpg', alt: '오산헤리티지자이 대표 조감도 — Lead the Change' },
        },
        {
          bgImage: { src: '/apt/osan-heritage-xi-x/hero-slide-value.jpg', alt: 'VALUE — 더 커질 병점역 미래가치' },
          bgImageMobile: { src: '/apt/osan-heritage-xi-x/hero-slide-value-mobile.jpg', alt: 'VALUE — 더 커질 병점역 미래가치' },
        },
        {
          bgImage: { src: '/apt/osan-heritage-xi-x/hero-slide-traffic.jpg', alt: 'TRAFFIC — 쾌속 광역 교통망' },
          bgImageMobile: { src: '/apt/osan-heritage-xi-x/hero-slide-traffic-mobile.jpg', alt: 'TRAFFIC — 쾌속 광역 교통망' },
        },
        {
          bgImage: { src: '/apt/osan-heritage-xi-x/hero-slide-education.jpg', alt: 'EDUCATION — 탁월한 교육 인프라' },
          bgImageMobile: { src: '/apt/osan-heritage-xi-x/hero-slide-education-mobile.jpg', alt: 'EDUCATION — 탁월한 교육 인프라' },
        },
        {
          bgImage: { src: '/apt/osan-heritage-xi-x/hero-slide-life.jpg', alt: 'LIFE — 센트럴 그린라이프' },
          bgImageMobile: { src: '/apt/osan-heritage-xi-x/hero-slide-life-mobile.jpg', alt: 'LIFE — 센트럴 그린라이프' },
        },
      ],
      overlay: false,
      hideText: true,
      // 요청 반영 — 모바일 슬라이드 이미지(640x1000)가 heroSlides 기본 비율(640/835)보다 세로로 길어
      // 히어로 높이가 낮아 보이던 문제 — 이미지 비율에 맞추는 대신 기존 100svh 풀스크린으로 고정
      fullHeightSlides: true,
      // 요청 반영 — 100svh 꽉 채운 높이가 너무 커 보여서 모바일에서만 살짝 줄임
      mobileHeight: '88svh',
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '오산헤리티지자이', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '예약 후 상담만 해도 방문사은품 제공',
        callLabel: '전화상담',
        visitLabel: '방문예약',
        // 요청 반영 — 히어로 구간에서는 전화상담/방문예약 버튼을 숨김(스크롤 후 나오는 하단 고정
        // SignatureMobileBottomBar에는 영향 없음, 그대로 유지됨)
        hideActionButtons: true,
        // 요청 반영 — 모바일 안내 배너(안내바)가 히어로 맨 아래(다음 영상 섹션 시작 지점)에
        // 딱 붙어 있어서 살짝 더 아래로 내림
        offsetY: 8,
      },
    },

    // 히어로 바로 다음 영상 섹션 — 사용자가 전달한 유튜브 영상(youtu.be/qQxcm17SLFk)을 그대로 삽입
    videoSection: {
      youtubeId: 'qQxcm17SLFk',
      title: '오산헤리티지자이 소개 영상',
      // 요청 반영 — 화면 전체 폭보다 살짝 작게
      maxWidth: 1200,
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '오산헤리티지자이',
      subtitle: '경기도 오산시 병점생활권 일원, 자이가 완성하는 대단지 헤리티지',
      // 출처: 사용자 전달 공식 사업개요 조감도 원본(2026-09-14)
      // 요청 반영 — 갤러리 순서 1번(정면 전경)/2번(측면 전경)/3번(조감도)으로 재배치
      photo: { src: '/apt/osan-heritage-xi-x/overview-thumb-1.png', alt: '오산헤리티지자이 단지 전경 — 정면' },
      thumbs: [
        { src: '/apt/osan-heritage-xi-x/overview-thumb-2.png', alt: '오산헤리티지자이 단지 전경 — 측면' },
        { src: '/apt/osan-heritage-xi-x/overview-photo.png', alt: '오산헤리티지자이 조감도(주간)' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 사전홍보용으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다(면적 및 세대수 등 포함).',
      // 출처: 사용자 전달 사업개요 표 원문 그대로(2026-09-14) — 1BL/2BL로 나뉜 값은
      // the-sharp-geomdan-lakepark 시리즈와 동일한 컨벤션으로 배열(줄바꿈)에 담아 반영
      specItems: [
        { label: '사업명', value: '오산 양산4지구 도시개발사업지구내 1, 2BL공동주택 신축공사' },
        { label: '대지위치', value: '경기도 오산시 양산동 223번지, 328-2번지 일원' },
        { label: '지역/지구', value: '지구단위계획구역, 제2종 일반주거지역' },
        { label: '공급규모', value: '총 1,783세대 (1BL 1,069세대 / 2BL 714세대)' },
        { label: '규모', value: ['1BL 지하2층~지상27층 13개동', '2BL 지하2층~지상27층 9개동'] },
        { label: '대지면적', value: ['1BL 55,220㎡', '2BL 36,880㎡'] },
        { label: '건축면적', value: ['1BL 10,043.5282㎡', '2BL 6,411.0338㎡'] },
        { label: '연면적', value: ['1BL 185,635.8279㎡', '2BL 127,132.1994㎡'] },
        { label: '건폐율', value: ['1BL 18.19%', '2BL 17.38%'] },
        { label: '용적률', value: ['1BL 225.73%', '2BL 226.13%'] },
        { label: '난방방식', value: '지역난방' },
        { label: '주차대수', value: ['1BL APT 1,604대 / 세대당 1.5대(근생 제외)', '2BL APT 1,071대 / 세대당 1.5대(근생 제외)'] },
        { label: '시행/시공', value: '(주)양산사지구에스피씨 / GS건설(주)' },
        { label: '입주예정일', value: '2029년 09월 예정' },
      ],
    },

    location: {
      id: 'location',
      navLabel: '위치안내',
      // 요청 반영 — 큰 헤드라인 문구 없이 LOCATION 라벨만 표시
      label: 'LOCATION',
      // 출처: 사용자 전달 공식 사이트 캡처(2026-09-14) — 병점역 GTX-C·동탄트램(계획)·1호선 및 동탄1신도시
      // 광역 인프라를 담은 실제 위치안내도
      mapImage: { src: '/apt/osan-heritage-xi-x/location-map.png', alt: '오산헤리티지자이 광역 위치 안내도 — 병점역 GTX-C·동탄트램(계획)', width: 1585, height: 1560 },
      // 출처: 사용자 전달 실사 사진 4장(2026-09-14, 병점역·전철·초등학교·공원 조깅) — 프리미엄가치
      // 카드 01~04(병점역 미래가치/광역교통망/교육인프라/그린라이프)와 동일한 테마로 재구성
      // (기존 COMMUNITY/BRAND 카드는 대응하는 실사 사진이 없어 이 4개로 교체)
      features: [
        {
          titlePrefix: '더 커질 병점역',
          titleStrong: ' 미래가치',
          titleSuffix: '',
          tag: 'STATION',
          image: { src: '/apt/osan-heritage-xi-x/feature-station.png', alt: '병점역 미래가치' },
          descStrong: '',
          descRest: 'GTX-C 병점역 연장 추진, 동탄트램(계획) 등 병점·동탄 생활권',
        },
        {
          titlePrefix: '',
          titleStrong: '쾌속 광역 교통망',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/osan-heritage-xi-x/feature-traffic.png', alt: '쾌속 광역 교통망' },
          descStrong: '',
          descRest: '수도권 제2순환·오산화성·오산용인고속도로(계획) 등 광역 교통망',
        },
        {
          titlePrefix: '',
          titleStrong: '탁월한 교육 인프라',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/osan-heritage-xi-x/feature-education.png', alt: '탁월한 교육 인프라' },
          descStrong: '',
          descRest: "도보통학 양산1초(가칭·계획)·양산중('27예정), 세마중·고, 양산도서관 등",
        },
        {
          titlePrefix: '센트럴',
          titleStrong: ' 그린라이프',
          titleSuffix: '',
          tag: 'LIFE',
          image: { src: '/apt/osan-heritage-xi-x/feature-life.png', alt: '센트럴 그린라이프' },
          descStrong: '',
          descRest: '병점복합타운 생활인프라, 단지 앞 대규모 체육공원 조성(계획)',
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 현황 및 개발 계획은 관계 기관의 발표를 참조해 작성된 것으로 사업계획 및 일정은 당사와 무관하며 추후 변경될 수 있습니다.',
    },

    // 검단레이크파크3의 3칸 스토리 섹션(01 영상 wide + 02·03 이미지) 참고 요청 반영 — 영상 자산이
    // 없어 01번 칸은 이미 삽입해둔 유튜브 홍보영상(qQxcm17SLFk)을 재사용하고, 02·03은 기존에 확보한
    // 실제 사진(사업개요 조감도, 프리미엄 커뮤니티 이미지컷)으로 채움
    story: {
      id: 'story',
      // 요청 반영 — PC에서 영상 3칸 사이 간격이 좁아 보여서 기본 16px보다 살짝 넓힘
      sceneGapDesktop: 28,
      eyebrow: 'HERITAGE FILM',
      titleLine1: '영상으로 먼저 만나는',
      titleAccent: '오산헤리티지자이',
      desc: '자이가 완성하는 병점생활권의 새로운 헤리티지, 영상과 이미지로 미리 확인해보세요.',
      numbers: [
        { value: '1,783', label: '총 세대수 (1BL 1,069세대 · 2BL 714세대)' },
        { value: 'GTX-C', label: '병점역 미래가치' },
        { value: '22', label: '총 22개동 (1BL 13개동 · 2BL 9개동), 지하 2층~최고 27층' },
      ],
      // 요청 반영 — 사용자가 전달한 유튜브 영상 3개를 각 칸에 그대로 배치(01은 와이드, 02·03은
      // wide:false로 좁은 2열 칸에 영상을 넣음 — videoSection의 qQxcm17SLFk와는 별개 영상).
      // 제목/설명은 자이TV 채널의 실제 영상 제목(YouTube oEmbed로 확인, 2026-09-14) 그대로 반영 —
      // 이전에 임의로 붙였던 "CLUB XIAN 커뮤니티" 등 문구가 실제 영상 내용과 달라서 교체
      scenes: [
        {
          type: 'video',
          youtubeId: 'ZtsXOJ8pBcI',
          ariaLabel: '오산헤리티지자이 공식 홍보 영상 — Recreate, Every Moment',
          tag: '01 · BRAND FILM',
          title: 'Recreate, Every Moment',
          desc: '당신으로부터 차이가 되다',
        },
        {
          type: 'video',
          wide: false,
          youtubeId: 'TYkfBe32BxQ',
          ariaLabel: '오산헤리티지자이 공식 홍보 영상 — 병점역 신주거타운의 중심',
          tag: '02 · INTRODUCTION',
          title: '병점역 新주거타운의 중심에,',
          desc: '오산헤리티지자이',
        },
        {
          type: 'video',
          wide: false,
          youtubeId: 'VFzBckoz8WM',
          ariaLabel: '오산헤리티지자이 티저영상',
          tag: '03 · TEASER',
          title: '오산헤리티지자이 티저영상',
          desc: '영상으로 미리 만나는 오산헤리티지자이',
        },
      ],
    },

    // 요청 반영 — 문구 전부 삭제, 사진만 깔끔하게 노출(흰색 스크림도 제거)
    // 요청 반영 — 사용자가 전달한 고화질 노을진 단지 정면 사진(텍스트 없는 원본)을 배경으로, 참고
    // 이미지와 동일하게 테두리 박스 문구 + 세로선 + 밑줄 타이틀 구성으로 재구성
    premiumIntro: {
      bgImage: { src: '/apt/osan-heritage-xi-x/premium-intro-bg.png', alt: '오산헤리티지자이 프리미엄 전경' },
      overlay: false,
      introBox: {
        line1: '新주거타운의 미래를 여는',
        line2: '병점역 라이프의 新중심이 찾아옵니다.',
      },
      titleLine1: '오산헤리티지자이',
      titleUnderline: true,
      titleColor: '#ffffff',
      footnote: '※ 상기 내용 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
    },

    // 출처: 공식 사이트(xi.co.kr/osxi, cmsMenuSeq=29671 단지설계) 원본 캡처(2026-09-14) — "자이가
    // 선보이는 감각적인 외관, 도시의 실루엣을 새롭게 바꿉니다" 및 랜드마크·지속가능 디자인, 자이펀그라운드,
    // 주민운동시설·엘리시안가든·잔디광장·순환산책로 소개가 한 이미지에 포함됨
    newsImage: {
      src: '/apt/osan-heritage-xi-x/complex-design.jpg',
      alt: '오산헤리티지자이 단지설계 — 도시의 실루엣을 새롭게 바꾸는 감각적인 외관',
      width: 1100,
      height: 1658,
      // 요청 반영 — 기본 760px 캡이 좁아 보여서 원본 폭에 가깝게 확대
      maxWidth: 1000,
    },

    // 출처: 사용자 전달 공식 사이트 프리미엄 카드 6종 원문 그대로(2026-09-14)
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '오산헤리티지자이 ',
      titleAccent: 'SIGNATURE',
      // 요청 반영 — 카드 아이콘/제목/설명 텍스트를 좌측정렬 대신 중앙정렬로
      cardTextAlign: 'center',
      // 카드별 image는 공식 사이트 프리미엄 페이지의 3x2 사진 그리드 원본에서 각 셀을 그대로 잘라낸 것
      // (사진 자체에 있는 "이미지컷" 표기는 원본에 포함된 것으로 그대로 둠 — 공식 사이트도 확정 실사가
      // 아닌 사전 이미지컷 단계임을 표기하고 있음)
      cards: [
        {
          num: '01',
          icon: 'tunnel',
          title: ['더 커질 병점역', '미래가치'],
          desc: ['GTX-C 병점역 연장 추진,', '동탄트램(계획) 등 병점·동탄 생활권'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-01.jpg', alt: '병점역 미래가치 이미지컷' },
        },
        {
          num: '02',
          icon: 'car',
          title: ['쾌속', '광역 교통망'],
          desc: ['수도권 제2순환·오산화성·', '오산용인고속도로(계획) 등 광역 교통망'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-02.jpg', alt: '쾌속 광역교통망 이미지컷' },
        },
        {
          num: '03',
          icon: 'school',
          title: ['탁월한', '교육 인프라'],
          desc: ["도보통학 양산1초(가칭·계획)·양산중('27예정)", '세마중·고, 양산도서관 등'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-03.jpg', alt: '탁월한 교육 인프라 이미지컷' },
        },
        {
          num: '04',
          icon: 'forest',
          title: ['센트럴', '그린라이프'],
          desc: ['병점복합타운 생활인프라,', '단지 앞 대규모 체육공원 조성(계획)'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-04.jpg', alt: '센트럴 그린라이프 이미지컷' },
        },
        {
          num: '05',
          icon: 'train',
          title: ['다채로운', '커뮤니티'],
          desc: ['스카이라운지, 피트니스,', '작은도서관 등 수준 높은 커뮤니티'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-05.jpg', alt: '다채로운 커뮤니티 이미지컷' },
        },
        {
          num: '06',
          icon: 'city',
          title: ['완성형', '新주거타운 비전'],
          desc: ['미니신도시급 新주거타운을 이끌', '1,783세대(1BL/2BL) 대단지'],
          image: { src: '/apt/osan-heritage-xi-x/premium-photo-06.jpg', alt: '완성형 신주거타운 비전 이미지컷' },
        },
      ],
    },

    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '1BL 1,069세대·2BL 714세대',
      titleLine2: '총 1,783세대, 오산의 새로운 랜드마크',
      desc: 'CLUB XIAN, CLUB CLOUD부터 동 배치와 세대 라인 구성까지 한눈에 확인해보세요.',
      // 출처: 사용자 전달 공식 단지 배치도·동호수 배치표 원본(2026-09-14) — 배치도는 1BL·2BL을
      // 한 이미지에 함께 담은 전체 버전 사용, 동호수 배치표는 1BL(101~113동)/2BL(201~209동) 각각
      // 별도 이미지라 tabs로 전환
      siteMap: {
        image: { src: '/apt/osan-heritage-xi-x/complex-sitemap.png', alt: '오산헤리티지자이 단지 배치도(1BL·2BL)', width: 1158, height: 1172 },
      },
      donghoChart: {
        tabs: [
          {
            label: '1BL (101~113동)',
            image: { src: '/apt/osan-heritage-xi-x/complex-dongho-1bl.png', alt: '오산헤리티지자이 1BL 동호수 배치표', width: 1129, height: 1218 },
          },
          {
            label: '2BL (201~209동)',
            image: { src: '/apt/osan-heritage-xi-x/complex-dongho-2bl.png', alt: '오산헤리티지자이 2BL 동호수 배치표', width: 1215, height: 1348 },
          },
        ],
      },
    },

    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'OSAN HERITAGE XI',
      // 요청 반영 — 원형 안 평면도 이미지가 작아 보여서 기본값(570px/75%)보다 크게
      circleImageMax: 660,
      circleImagePct: '87%',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['병점생활권 중심에서 시작하는', '오산헤리티지자이', '당신의 라이프스타일에 맞춘', '다양한 혁신 평면을 만나보십시오.'],
      // 출처: 사용자 전달 공식 평형정보(cmsMenuSeq=29666) 및 동호수 가이드 원본(2026-09-14) —
      // 실제 공급 타입은 75/84A/84B/84C/84D/102/124/166P 8종(기존 59㎡A·84㎡A 2종 placeholder는 오류였음).
      // specs(전용/공급/계약면적)는 1BL 기준 값 — 2BL은 전용면적은 동일하나 공급·계약면적이 소폭
      // 다름(예: 84A 공급 1BL 110.8249㎡ vs 2BL 111.8083㎡, 세대 발코니 확장 범위 차이로 추정)
      tabbedGroups: true,
      groups: [
        {
          area: '75㎡',
          types: [
            {
              letter: '',
              countText: '1BL 44세대 · 2BL 47세대 (총 91세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-75.jpg', alt: '오산헤리티지자이 75㎡ 타입 평면도', width: 1100, height: 1611 },
              specs: { exclusive: '75.4736', supply: '99.1264', contract: '149.6620' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '1BL 270세대 · 2BL 239세대 (총 509세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-84a.jpg', alt: '오산헤리티지자이 84㎡A 타입 평면도', width: 1100, height: 1605 },
              specs: { exclusive: '84.9796', supply: '110.8249', contract: '167.7255' },
            },
            {
              letter: 'B',
              countText: '1BL 260세대 · 2BL 176세대 (총 436세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-84b.jpg', alt: '오산헤리티지자이 84㎡B 타입 평면도', width: 1100, height: 1592 },
              specs: { exclusive: '84.9665', supply: '111.4029', contract: '168.2948' },
            },
            {
              letter: 'C',
              countText: '1BL 262세대 · 2BL 184세대 (총 446세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-84c.jpg', alt: '오산헤리티지자이 84㎡C 타입 평면도', width: 1100, height: 1619 },
              specs: { exclusive: '84.8237', supply: '110.4619', contract: '167.2581' },
            },
            {
              letter: 'D',
              countText: '1BL 88세대 (2BL 미공급, 총 88세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-84d.jpg', alt: '오산헤리티지자이 84㎡D 타입 평면도', width: 1100, height: 1601 },
              specs: { exclusive: '84.9708', supply: '110.7265', contract: '167.6212' },
            },
          ],
        },
        {
          area: '102㎡',
          types: [
            {
              letter: '',
              countText: '1BL 97세대 · 2BL 43세대 (총 140세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-102.jpg', alt: '오산헤리티지자이 102㎡ 타입 평면도', width: 1100, height: 1654 },
              specs: { exclusive: '102.6201', supply: '130.3482', contract: '199.0605' },
            },
          ],
        },
        {
          area: '124㎡',
          types: [
            {
              letter: '',
              countText: '1BL 45세대 · 2BL 23세대 (총 68세대)',
              image: { src: '/apt/osan-heritage-xi-x/unit-124.jpg', alt: '오산헤리티지자이 124㎡ 타입 평면도', width: 1100, height: 1679 },
              specs: { exclusive: '124.8692', supply: '155.8720', contract: '239.4820' },
            },
          ],
        },
        {
          area: '166㎡P',
          types: [
            {
              letter: '',
              countText: '1BL 3세대 · 2BL 2세대 (총 5세대, 펜트하우스)',
              image: { src: '/apt/osan-heritage-xi-x/unit-166p.jpg', alt: '오산헤리티지자이 166㎡P 타입 평면도', width: 1100, height: 1612 },
              specs: { exclusive: '166.2309', supply: '210.1771', contract: '321.4820' },
            },
          ],
        },
      ],
    },

    // 출처: 공식 사이트(xi.co.kr/osxi, cmsMenuSeq=29672/29673) CLUB XIAN·CLUB CLOUD 원본 캡처(2026-09-14).
    // 요청 반영 — 5장을 전부 이어붙여 스크롤이 너무 길어지는 대신, CLUB XIAN(1BL/2BL/특화 커뮤니티)·
    // CLUB CLOUD(1BL/2BL) 두 그룹으로 나누고 각각 탭 버튼으로 전환해서 보여줌
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      plainImageGroups: [
        {
          title: 'CLUB XIAN',
          tabs: [
            {
              label: '1BL',
              image: {
                src: '/apt/osan-heritage-xi-x/club-xian-1bl.jpg',
                alt: '오산헤리티지자이 1BL CLUB XIAN(B1F·1F) 시설 안내 — 골프연습장·피트니스·카페테리아·사우나·티하우스 등',
                width: 1100,
                height: 3451,
              },
            },
            {
              label: '2BL',
              image: {
                src: '/apt/osan-heritage-xi-x/club-xian-2bl.jpg',
                alt: '오산헤리티지자이 2BL CLUB XIAN(B1F·1F) 시설 안내',
                width: 1100,
                height: 3373,
              },
            },
            {
              label: '특화 커뮤니티',
              image: {
                src: '/apt/osan-heritage-xi-x/club-xian-special.jpg',
                alt: '오산헤리티지자이 CLUB XIAN 특화 커뮤니티 시설 안내',
                width: 1100,
                height: 2848,
              },
            },
          ],
        },
        {
          title: 'CLUB CLOUD',
          tabs: [
            {
              label: '1BL',
              image: {
                src: '/apt/osan-heritage-xi-x/club-cloud-1bl.jpg',
                alt: '오산헤리티지자이 1BL CLUB CLOUD(26F) 시설 안내 — 스카이라운지·스카이그랜드홀·사운드챔버',
                width: 1100,
                height: 1929,
              },
            },
            {
              label: '2BL',
              image: {
                src: '/apt/osan-heritage-xi-x/club-cloud-2bl.jpg',
                alt: '오산헤리티지자이 2BL CLUB CLOUD(26F) 시설 안내',
                width: 1100,
                height: 1929,
              },
            },
          ],
        },
      ],
    },

    // 출처: 공식 사이트(xi.co.kr/osxi, cmsMenuSeq=29772 주말 경품 이벤트) 원본 캡처(2026-09-14) —
    // 진입 팝업 1번(popup-weekend-event.jpg) 클릭 시 이 섹션(#event)으로 스크롤 이동
    eventImage: {
      id: 'event',
      title: '주말 경품 이벤트',
      src: '/apt/osan-heritage-xi-x/event-weekend.jpg',
      alt: '오산헤리티지자이 행운의 주말 경품 EVENT — 추첨 일정 및 경품 내역',
      width: 1100,
      height: 2400,
      maxWidth: 900,
    },

    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VIP Reservation',
      titleLine1: '오산헤리티지자이',
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

    // 출처: 사용자 전달 원문 그대로(2026-09-14) — 운영사·시행사 정보는 대행사(온라인대행) 항목을
    // 별도로 두지 않고 '운영' 라벨로만 표기(사용자 확인).
    footer: {
      // 공식 사이트 자체는 푸터에 별도 로고 이미지 없이 텍스트만 표기하지만(원본 <p class="logo"></p> 비어있음),
      // 이 템플릿은 로고 자리를 항상 쓰므로 공용 BI 흰색 버전을 재사용
      logo: { src: '/apt/osan-heritage-xi-x/logo-white.svg', alt: '오산헤리티지자이', width: 76, height: 41 },
      // 요청 반영 — 로고 가운데 정렬
      logoAlign: 'center',
      highlightText: '분양문의 1666-1081',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '운영', value: '(주)세인디엔씨' },
        { label: '사업자등록번호', value: '824-88-01908' },
        { label: '시행', value: '(주)양산사지구에스피씨' },
        { label: '시행사 대표자', value: '신우철, 이담경' },
        { label: '시행사업자번호', value: '434-88-02873' },
        { label: '시공', value: 'GS건설(주)' },
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
      csPhone: '1666-1081',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 요청 반영 — 기존 진입 팝업 2장(주말 경품 이벤트/선착순 동호 지정 계약중) 삭제, 계약금 5%
    // 파격조건변경 팝업 1장으로 교체(사이트 내 주말 경품 이벤트 섹션(#event)은 그대로 유지, 팝업만 삭제).
    // 이미지 안에 그려진 "모델하우스 방문/예약" 버튼 클릭 시 관심고객등록 섹션(#vip-reservation)으로
    // 스크롤 이동 + 팝업 닫힘
    popup: {
      enabled: true,
      images: [
        {
          src: '/apt/osan-heritage-xi-x/popup1.png',
          alt: '오산헤리티지자이 계약금 5% 파격조건변경 — 선착순 동·호 지정 계약중',
          width: 1086,
          height: 1448,
          link: '#vip-reservation',
          linkLabel: '모델하우스 방문/예약',
        },
      ],
    },
  },
}

export default config
