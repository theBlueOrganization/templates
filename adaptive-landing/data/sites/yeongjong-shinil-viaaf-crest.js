// 영종국제도시 신일 비아프(VIAAF) 크레스트 — 인천 중구 운남동 1695-2번지(1단지 A19BL) · 1696-1번지(2단지 A20BL) 일원.
// 1단지 지하 2층~지상 21층 5개동 444세대(84A 368 / 84B 20 / 84C 36 / 84D 20),
// 2단지 지하 2층~지상 20층 6개동 516세대(84A 373 / 84B 20 / 84C 38 / 84D 20 / 114 65), 총 960세대, 세대당 주차 1.5대.
// 출처: 「영종신일 영업사원 교육자료(26.01.20)」PDF(52p) — 조감도·투시도(p2~5)·사업개요(p7)·배치도/조경(p8)·동호배치도(p9~10)·
//   커뮤니티(p11)·스마트 시스템(p12)·특화 시스템(p14~17)·평면(p19~23)·광역 위치도(p25)·입지(p26~28)·초품아(p35)·조망(p37)·
//   공세권(p39)·행정타운(p40)·항공AI혁신허브(p43)·트램(p47)·무상제공품목(p49) 페이지를 pdf-to-img(scale 3)로 렌더링 후 크롭해
//   webp 변환(public/apt/yeongjong-shinil-viaaf-crest/). 로고는 p8 VIAAF 워드마크를 흰색·남색 투명 PNG로 추출.
//   분양대금·유상옵션 납부계좌(p51~52)는 공개 페이지에 싣지 않음.
// 2026-10-11 공식 사이트(https://신일비아프크레스트.com/) 이미지로 교체 + 티아모 까사와 같은 풀페이지 몰입형(viaafImmersive)으로 전환 —
//   메인 비주얼(visual-bg-new-01/02 → hr-hero-1/2, 모바일 세로 크롭 hero-m-1/2), 입지 8가지 이미지컷(envi-bg-01~08 → envi-1~8).
//   시행 한국토지신탁 / 시공 ㈜신일은 공식 사이트 푸터 기준. 평면·단지설계 컷은 공식 사이트 원본(417px 등)보다 교육자료 크롭이 고화질이라 유지.
// 대표번호 1660-4579, 상담 접수 알림 010-3053-4088 — 2026-10-11 사용자 전달값.
const config = {
  slug: 'yeongjong-shinil-viaaf-crest',
  // 영종신일비아프크레스트.addupapt.kr → /apt/yeongjong-shinil-viaaf-crest (middleware.js)
  subdomain: '영종신일비아프크레스트',
  projectName: '영종국제도시 신일 비아프 크레스트',
  shortName: '신일 비아프 크레스트',
  telNumber: '1660-4579',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/yeongjong-shinil-viaaf-crest/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01030534088'],
  sheetId: '',
  sheetTab: '영종신일비아프크레스트',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 교육자료 톤 — 딥 네이비(#0d1240) + VIAAF 워드마크 웜그레이(#9c8f78)
  colorTheme: {
    navy: '#0d1240',
    ink: '#0d1240',
    cream: '#f4f3f0',
    gold: '#9c8f78',
    visitBtnBg: '#0d1240',
    visitBtnColor: '#ffffff',
  },

  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    serifFamily: "'Nanum Myeongjo', var(--font-noto-serif-kr, 'Noto Serif KR'), serif",
    cssUrl:
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  },
  extraFontLinks: [
    'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap',
  ],

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
    // 요청 반영(2026-10-11) — "까사 현장 템플릿이랑 비슷하게": true면 SignatureViaafImmersive(티아모 까사 풀페이지
    // 몰입형 구조 그대로, 콘텐츠·이미지만 비아프 — 공식 사이트 신일비아프크레스트.com + 교육자료) 전용 렌더.
    // 이 화면은 아래 footer.companyLines·disclaimers·csHours와 vipForm.privacyText만 쓰고, 나머지 signature 필드는
    // false로 되돌리면 기존 섹션형 구성으로 바로 복귀하도록 남겨둠
    viaafImmersive: true,

    header: {
      logo: {
        src: '/apt/yeongjong-shinil-viaaf-crest/logo-white.png',
        alt: 'VIAAF 신일 비아프 크레스트',
        width: 308,
        height: 59,
      },
      logoSize: { base: 92, lg: 108, xl: 116 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1660-4579',
      // 히어로(밝은 하늘 투시도) 위 투명 구간에서는 남색 메뉴·전화번호 + 남색 로고
      transparentDark: true,
      logoDark: {
        src: '/apt/yeongjong-shinil-viaaf-crest/logo-color.png',
        alt: 'VIAAF 신일 비아프 크레스트',
        width: 308,
        height: 59,
      },
    },

    // 진입 시 관심고객 팝업 — 이미지 팝업 없이 방문예약 폼만
    popup: {
      enabled: false,
      visitForm: {
        enabled: true,
        // 인트로가 끝난 뒤(0.7초 후) 띄움
        afterIntro: true,
        accentColor: '#0d1240',
        title: '관심고객등록',
        desc: '상담 가능시간 10:00~18:00 (담당자와 조율가능)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약', '자료요청', '기타문의'],
        submitLabel: '관심고객 등록',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'VIAAF',
      phoneLabel: '분양문의',
      phone: '1660-4579',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      menuBg: '#0d1240',
      ctaTargetId: 'vip-reservation',
      deskText: '신일 비아프 크레스트\n분양 상담을 도와드립니다.',
      address: '인천 중구 운남동 1695-2번지 일원',
      tagline: '인천대교 건너, 첫 집을 만나다',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 인트로 — 청라 더리브 티아모 까사와 같은 연출(1단계 3분할 이미지+영문 카피 4s → 2단계 링 펄스+브랜드 임팩트, 5.6s 종료). 2026-10-11 사용자 요청
    //   브랜드 단계는 현장명 텍스트로 표시. 색은 현장 딥 네이비/웜그레이
    arkoneIntro: {
      ariaLabel: '신일 비아프 크레스트를 소개하는 인트로',
      scenes: [
        { img: '/apt/yeongjong-shinil-viaaf-crest/hero-1.webp', label: '01 · LANDMARK', name: '인천대교 건너, 첫 집' },
        { img: '/apt/yeongjong-shinil-viaaf-crest/hero-2.webp', label: '02 · OCEAN VIEW', name: '서해바다를 품은 총 960세대' },
        { img: '/apt/yeongjong-shinil-viaaf-crest/special-plaza.webp', label: '03 · PARK', name: '초품아 · 씨사이드파크 공세권' },
      ],
      copySmall: "YEONGJONG'S FIRST HOME",
      copyLine1: 'Life in',
      copyLine2: 'VIAAF.',
      brandName: '신일 비아프 크레스트',
      tagline: 'VIAAF · CREST',
      theme: {
        base: '#0d1240',
        stageOne: 'radial-gradient(circle at 50% 35%, #2a3170 0, #0d1240 48%, #060823 100%)',
        stageTwo: 'radial-gradient(circle at center, #1f2660, #0d1240 42%, #070926 100%)',
        ring: 'rgba(196, 184, 160, 0.45)',
        accent: '#c4b8a0',
        sub: '#dfe2ee',
      },
    },

    // 히어로 — 교육자료 표지 카피('인천대교 건너, 첫 집을 만나다.') + 투시도(p5)·야경 조감도(p3) 2장 슬라이드
    //   모바일 배경은 같은 이미지에서 단지 부분만 세로 크롭(hero-N-m.webp)
    hero: {
      eyebrowDivider: false,
      titleLine1: '신일 비아프 크레스트',
      titleWeight: 700,
      titleSize: { base: 28, md: 48, lg: 72 },
      eyebrowSize: { base: 15, lg: 21 },
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      mobileScrollMouse: true,
      desktopCopy: {
        mobile: true,
        center: true,
        tight: true,
        eyebrow: '영종국제도시 · 총 960세대',
        title: '인천대교 건너, 첫 집을 만나다',
        accent: '신일 비아프 크레스트',
        accentColor: '#0d1240',
        bold: true,
        halo: true,
        logo: {
          src: '/apt/yeongjong-shinil-viaaf-crest/logo-color.png',
          alt: 'VIAAF',
        },
      },
      slides: [
        {
          eyebrowLine1: '인천대교 건너, 첫 집을 만나다',
          eyebrowLine2: '영종국제도시 총 960세대 대단지',
          bgImage: {
            src: '/apt/yeongjong-shinil-viaaf-crest/hero-1.webp',
            alt: '신일 비아프 크레스트 투시도',
          },
          bgImageMobile: {
            src: '/apt/yeongjong-shinil-viaaf-crest/hero-1-m.webp',
            alt: '신일 비아프 크레스트 투시도',
          },
        },
        {
          eyebrowLine1: '서해바다와 인천대교를 품은',
          eyebrowLine2: '1단지 444세대 · 2단지 516세대',
          bgImage: {
            src: '/apt/yeongjong-shinil-viaaf-crest/hero-2.webp',
            alt: '신일 비아프 크레스트 조감도',
          },
          bgImageMobile: {
            src: '/apt/yeongjong-shinil-viaaf-crest/hero-2-m.webp',
            alt: '신일 비아프 크레스트 조감도',
          },
        },
      ],
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '신일 비아프 크레스트', textLight: ' 공식 안내센터입니다.' },
        ],
        announceBg: '#0d1240',
        bubbleText: '관심고객등록',
        dotColor: '#9c8f78',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    // 사업개요 — 교육자료 p7 표(1단지/2단지) + 투시도
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/yeongjong-shinil-viaaf-crest/overview-photo.webp',
        alt: '신일 비아프 크레스트 투시도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '영종국제도시 신일 비아프 크레스트' },
        { label: '대지위치', value: ['1단지(A19BL) 인천 중구 운남동 1695-2번지 일원', '2단지(A20BL) 인천 중구 운남동 1696-1번지 일원'] },
        { label: '건축규모', value: ['1단지 지하 2층~지상 21층 5개동 444세대', '2단지 지하 2층~지상 20층 6개동 516세대'] },
        { label: '총 세대수', value: '960세대' },
        { label: '공급타입', value: ['1단지 84㎡(A·B·C·D)', '2단지 84㎡(A·B·C·D), 114㎡'] },
        { label: '대지면적', value: ['1단지 27,771.1㎡', '2단지 37,772.7㎡'] },
        { label: '건폐율/용적률', value: ['1단지 18.89% / 179.99%', '2단지 16.90% / 159.99%'] },
        { label: '주차대수', value: '세대당 1.5대' },
      ],
    },

    // 위치안내 — 광역 위치도(p25) + 입지 항목(p26~28, p39)
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '청라하늘대교와 함께 넓어지는 ',
      eyebrowAccent: '생활권',
      title: 'Premium Location',
      descTitle: '영종의 완성형 입지, 신일 비아프 크레스트',
      descTitleAccent: ['신일 비아프 크레스트'],
      descBody1: '청라·송도에서 여의도·강남권까지 이어지는 광역 생활권과',
      descBody1Accent: ['광역 생활권'],
      descBody2: '서해바다·씨사이드파크의 자연을 함께 누립니다.',
      mapImage: {
        src: '/apt/yeongjong-shinil-viaaf-crest/location-map.webp',
        alt: '신일 비아프 크레스트 광역 위치도',
        width: 2000,
        height: 1312,
      },
      features: [
        {
          titlePrefix: '청라하늘대교로 여는',
          titleStrong: '교통',
          titleSuffix: '',
          tag: 'Traffic',
          image: {
            src: '/apt/yeongjong-shinil-viaaf-crest/feature-traffic.webp',
            alt: '청라하늘대교 개통 광역 교통망',
          },
          descStrong: '청라 약 10분, 여의도 약 30분',
          descRest: ', 강남권 약 50분(차량 기준). 인천대교 통행료 인하',
        },
        {
          titlePrefix: '운남동 중심의',
          titleStrong: '생활권',
          titleSuffix: '',
          tag: 'Life',
          image: {
            src: '/apt/yeongjong-shinil-viaaf-crest/premium-demand.webp',
            alt: '영종도 운남동 생활권',
          },
          descStrong: '공항신도시·운서동·중산동',
          descRest: '을 잇는 영종도 신흥 주거지, 운남동 생활권',
        },
        {
          titlePrefix: '모두 갖춘',
          titleStrong: '완성형 입지',
          titleSuffix: '',
          tag: 'Infra',
          image: {
            src: '/apt/yeongjong-shinil-viaaf-crest/premium-location.webp',
            alt: '단지 주변 입지 환경',
          },
          descStrong: '영종구청(계획)·우체국·복합터미널용지',
          descRest: ', 하늘대로로 청라하늘대교까지 약 5분',
        },
        {
          titlePrefix: '바다와 공원이 가까운',
          titleStrong: '자연',
          titleSuffix: '',
          tag: 'Nature',
          image: {
            src: '/apt/yeongjong-shinil-viaaf-crest/feature-park.webp',
            alt: '씨사이드파크',
          },
          descStrong: '서해바다 직선거리 약 400m',
          descRest: ', 씨사이드파크·백운산 힐링 라이프',
        },
      ],
      disclaimer:
        '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
    },

    // 프리미엄 인트로 — 왼쪽 투시도(p4) + 오른쪽 카피
    premiumIntro: {
      split: true,
      eyebrow: 'VIAAF',
      titleLine1: '정교한 세련됨으로 삶의 격을 높이다',
      paragraphs: [
        ['1단지 444세대 · 2단지 516세대', '84㎡·114㎡ 타입 구성', '총 960세대 대규모 단지'],
        ['약 95% 이상 판상형 설계와', '세대당 1.5대 주차로', '쾌적하고 여유로운 라이프가 시작됩니다'],
      ],
      imageBadge: '투시도',
      bgImage: {
        src: '/apt/yeongjong-shinil-viaaf-crest/premium-split.webp',
        alt: '신일 비아프 크레스트 투시도',
      },
    },

    // 프리미엄 가치 — 교육자료 06 프리미엄(p26~47) + 특화 시스템(p14~17) 요약
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM LIFE',
      titlePlain: '신일 비아프 크레스트 ',
      titleAccent: 'PREMIUM 8',
      accentColor: '#9c8f78',
      columns: 2,
      mobileColumns: 2,
      cards: [
        {
          num: '01',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/premium-bridge.webp', alt: '청라하늘대교' },
          title: ['청라하늘대교 개통', '광역 생활권'],
          desc: ['청라 약 10분, 여의도 약 30분,', '강남권 약 50분'],
        },
        {
          num: '02',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/feature-education.webp', alt: '단지와 초등학교(계획) 위치' },
          title: ['단지 바로 앞', '초품아 학세권'],
          desc: ['초등학교(계획)부터', '인천하늘고·과학고·국제고까지'],
        },
        {
          num: '03',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/feature-ocean.webp', alt: '서해바다 오션뷰 조망' },
          title: ['서해바다', '오션뷰 조망'],
          desc: ['서해바다 직선거리 약 400m,', '인천대교 조망(일부 세대)'],
        },
        {
          num: '04',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/feature-park.webp', alt: '씨사이드파크' },
          title: ['씨사이드파크', '공세권'],
          desc: ['바다와 맞닿은 씨사이드파크,', '백운산 힐링 라이프'],
        },
        {
          num: '05',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/premium-admin.webp', alt: '영종구청(계획)·우체국·복합터미널용지 위치' },
          title: ['영종구 출범', '행정타운(계획)'],
          desc: ["'26년 7월 영종구 출범,", '영종구청·경찰서(계획) 인접'],
        },
        {
          num: '06',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/premium-aihub.webp', alt: '인천공항 항공 AI 혁신허브 조감도' },
          title: ['항공산업', '일자리 수혜'],
          desc: ['항공일반산단·항공AI혁신허브,', '국제공항복합도시(예정)'],
        },
        {
          num: '07',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/premium-tram.webp', alt: '영종 트램 1단계 노선도' },
          title: ['미래가치를 더할', '교통 호재'],
          desc: ['GTX-D·E, 영종트램,', '제2공항철도(계획)'],
        },
        {
          num: '08',
          image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-gate.webp', alt: '1단지 문주 투시도' },
          title: ['안심·쾌적', '특화설계'],
          desc: ['층상배관·층간소음저감·준불연문,', '확장형 주차 약 50%'],
        },
      ],
    },

    // 단지안내 — 교육자료 배치도/조경(p7~8)·동호배치도(p9~10)·커뮤니티(p11)·스마트(p12)·특화 시스템(p14~17, p49)
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        {
          label: '단지배치도',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-siteplan.webp',
          title: '단지배치도',
          blocks: [
            { label: '배치도', image: { src: '/apt/yeongjong-shinil-viaaf-crest/complex-siteplan.webp', alt: '1단지(A19BL)·2단지(A20BL) 단지 배치도 및 동간거리', width: 1092, height: 1503 } },
            { label: '조감도', image: { src: '/apt/yeongjong-shinil-viaaf-crest/overview-aerial.webp', alt: '1단지·2단지 조감도, 초등학교(계획)·복합터미널용지 위치', width: 1112, height: 1309 } },
          ],
        },
        {
          label: '조경특화',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-special.webp',
          title: '조경특화',
          blocks: [
            { label: '1단지 문주', image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-gate.webp', alt: '1단지 문주 투시도', width: 661, height: 471 } },
            { label: '1단지 티하우스', image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-teahouse.webp', alt: '1단지 티하우스 투시도', width: 661, height: 471 } },
            { label: '2단지 중앙광장', image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-plaza.webp', alt: '2단지 중앙광장 투시도', width: 661, height: 471 } },
            { label: '1단지 수경시설', image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-water1.webp', alt: '1단지 수경시설 투시도', width: 661, height: 469 } },
            { label: '2단지 수경시설', image: { src: '/apt/yeongjong-shinil-viaaf-crest/special-water2.webp', alt: '2단지 수경시설 투시도', width: 661, height: 469 } },
          ],
        },
        {
          label: '동호배치도',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-dong.webp',
          title: '동호배치도',
          blocks: [
            { label: '1단지', image: { src: '/apt/yeongjong-shinil-viaaf-crest/complex-dong1.webp', alt: '1단지 동호배치도(361~365동)', width: 2000, height: 1254 } },
            { label: '2단지', image: { src: '/apt/yeongjong-shinil-viaaf-crest/complex-dong2.webp', alt: '2단지 동호배치도(351~356동)', width: 2000, height: 1254 } },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-community.webp',
          title: '커뮤니티',
          blocks: [
            { label: 'VIAAF', image: { src: '/apt/yeongjong-shinil-viaaf-crest/complex-community.webp', alt: '커뮤니티 — 스크린골프·골프연습장·피트니스·G.X·키즈카페·작은도서관·독서실·라운지', width: 2000, height: 1270 } },
          ],
        },
        {
          label: '스마트시스템',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-smart.webp',
          title: '스마트시스템',
          blocks: [
            { label: 'VIAAF', image: { src: '/apt/yeongjong-shinil-viaaf-crest/complex-smart.webp', alt: 'AI CCTV 보안·전기자동차 화재대응·홈닉·자동개폐 연동구조', width: 2000, height: 1270 } },
          ],
        },
        {
          label: '특화시스템',
          thumb: '/apt/yeongjong-shinil-viaaf-crest/complex-thumb-system.webp',
          title: '특화시스템',
          blocks: [
            { label: '층상배관', image: { src: '/apt/yeongjong-shinil-viaaf-crest/system-bath.webp', alt: '층상배관(벽부형)·욕실 PU 벽판넬', width: 2000, height: 1254 } },
            { label: '층간소음저감', image: { src: '/apt/yeongjong-shinil-viaaf-crest/system-floor.webp', alt: '층간소음저감시스템(경량 1등급·중량 2등급)', width: 2000, height: 1254 } },
            { label: '준불연소재문', image: { src: '/apt/yeongjong-shinil-viaaf-crest/system-door.webp', alt: '준불연소재문', width: 2000, height: 1254 } },
            { label: '확장형 주차', image: { src: '/apt/yeongjong-shinil-viaaf-crest/system-parking.webp', alt: '확장형 주차 약 50%', width: 2000, height: 1254 } },
            { label: '무상제공품목', image: { src: '/apt/yeongjong-shinil-viaaf-crest/system-items.webp', alt: '기본 및 발코니확장 무상제공 품목', width: 2000, height: 1112 } },
          ],
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 84㎡A·B·C·D / 114㎡. 평면·면적은 교육자료 p19~23(공급면적은 1단지~2단지 값)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'VIAAF',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: [
        '약 95% 이상 판상형 설계와',
        '드레스룸·팬트리 등',
        '넉넉한 수납공간을 갖춘',
        '신일 비아프 크레스트',
      ],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '741세대',
              image: { src: '/apt/yeongjong-shinil-viaaf-crest/unit-84a.webp', alt: '84㎡A 타입 평면도', width: 1200, height: 823 },
              specs: { exclusive: '84.9770', supply: '110.6672~110.6706' },
            },
            {
              letter: 'B',
              countText: '40세대',
              image: { src: '/apt/yeongjong-shinil-viaaf-crest/unit-84b.webp', alt: '84㎡B 타입 평면도', width: 1000, height: 1000 },
              specs: { exclusive: '84.9081', supply: '111.1213~111.1246' },
            },
            {
              letter: 'C',
              countText: '74세대',
              image: { src: '/apt/yeongjong-shinil-viaaf-crest/unit-84c.webp', alt: '84㎡C 타입 평면도', width: 1100, height: 910 },
              specs: { exclusive: '84.8156', supply: '111.4767~111.4800' },
            },
            {
              letter: 'D',
              countText: '40세대',
              image: { src: '/apt/yeongjong-shinil-viaaf-crest/unit-84d.webp', alt: '84㎡D 타입 평면도', width: 1200, height: 706 },
              specs: { exclusive: '84.6387', supply: '110.4859~110.4892' },
            },
          ],
        },
        {
          area: '114㎡',
          types: [
            {
              letter: '',
              countText: '65세대',
              image: { src: '/apt/yeongjong-shinil-viaaf-crest/unit-114.webp', alt: '114㎡ 타입 평면도', width: 1200, height: 703 },
              specs: { exclusive: '114.2778', supply: '148.1545' },
            },
          ],
        },
      ],
    },

    // 관심고객등록 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterHero: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '신일 비아프 크레스트',
      titleLine2: '관심고객등록',
      desc: '간단한 정보를 남겨주시면 「신일 비아프 크레스트」의 분양 정보와 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/yeongjong-shinil-viaaf-crest/logo-white.png',
        alt: 'VIAAF 신일 비아프 크레스트',
        width: 308,
        height: 59,
      },
      logoAlign: 'center',
      logoWidth: 150,
      highlightText: '인천대교 건너,\n첫 집을 만나다\n영종국제도시 신일 비아프 크레스트',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      // 시행/시공 — 공식 사이트(신일비아프크레스트.com) 푸터 기준
      companyLines: [
        { label: '시행', value: '한국토지신탁' },
        { label: '시공', value: '㈜신일' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', newLine: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 자료에 표현된 현황, 개발계획, 예정사항 등은 관계기관의 홈페이지 및 해당기관의 고시 등을 참조하여 작성된 것으로 사업계획 및 일정은 당사자와는 무관하며 사업주체 및 해당관청의 사정에 의해 지연, 변경 또는 취소될 수 있습니다.',
        '※ 84㎡형, 114㎡형은 이해를 돕기 위한 호칭이며, 정확한 전용면적 및 공급면적 등은 모집공고와 분양홍보관에서 확인하시기 바랍니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1660-4579',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
