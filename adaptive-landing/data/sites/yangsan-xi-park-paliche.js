// 양산자이 파크팰리체 — 경남 양산시 평산동 47-1번지 일대(웅상센트럴파크 앞). 제2종 일반주거지역.
// 지하 2층~지상 18~29층 6개동(101~106동), 84㎡A·84㎡B·84㎡C·120㎡·168㎡P 총 842세대(334 / 174 / 160 / 171 / 3), 2028년 7월 입주 예정.
// 출처: 「양산자이 파크팰리체 0729(네트워크 영업 교육자료)」PDF(63p) — 사업개요(p2)·공급개요(p3)·투시도(p4)·조감도(p5)·
//   단지배치도(p6)·클럽자이안(p7)·조경(p8)·동호배치도(p9)·광역/세부입지(p10~11)·항공사진(p12~13)·광역철도(p16)·주진불빛공원(p17)·
//   BIG 프리미엄 5(p18)·커뮤니티(p21~22)·스마트 시스템(p23)·평면(p27·29·31·33·35)의 원본 이미지를 pdfimages로 추출해
//   크롭/webp 변환(public/apt/yangsan-xi-park-paliche/). 배치도·동호배치도는 페이지를 250dpi로 렌더링해 크롭.
// 2026-10-13 고화질 교체(사용자 요청): 공식 홈페이지(https://hangbogchurch.kr/) 원본 이미지로 메인 투시도(hero-1·og)·광역 위치도·
//   입지 이미지컷 4종(feature-*)·광역철도 노선도·주진불빛공원·단지배치도·동호배치도·커뮤니티 B1/B2·스마트 시스템·평면(확장형) 교체.
//   메인 투시도 옥탑 Xi 로고는 지우고, 브랜드소개·잔여세대 팝업(Xi 로고)·Xi 로고 합성 항공컷은 사용하지 않음.
// 2026-10-13 사용자 요청: 모든 광고에서 자이(Xi) 로고를 빼고 '양산자이 파크팰리체' 글씨만 사용 —
//   로고 이미지는 글씨만 렌더링한 PNG(logo-white/logo-color), 투시도 2장의 옥탑 Xi 로고와 클럽 'CLUB XIAN' 사인은 주변 벽면으로 덮어 지움.
//   Xi 로고가 크게 들어간 항공 합성컷(p14~15)·브랜드 소개(p1)·Xi 프리미엄 비교(p19)·분양가표는 사용하지 않음.
// 대표번호 1533-5514, 상담 접수 알림 010-8894-8829 — 2026-10-13 사용자 전달값.
const config = {
  slug: 'yangsan-xi-park-paliche',
  // 양산자이파크팰리체.addupapt.kr → /apt/yangsan-xi-park-paliche (middleware.js)
  subdomain: '양산자이파크팰리체',
  projectName: '양산자이 파크팰리체',
  shortName: '양산자이 파크팰리체',
  telNumber: '1533-5514',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/yangsan-xi-park-paliche/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01088948829'],
  sheetId: '',
  sheetTab: '양산자이파크팰리체',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 2026-10-14 사용자 요청: 영종 신일 비아프 크레스트(몰입형 아이스 테마)와 같은 색 디자인 —
  //   잉크 네이비(#0b1340) + 아이스 블루 포인트(#2b6a9c·#8fc3e8) + 아이스 그라데이션 배경(pageTheme 'ice', app/apt/[slug]/pageThemes.css)
  colorTheme: {
    navy: '#0b1340',
    ink: '#0b1340',
    cream: '#eaf2f8',
    gold: '#2b6a9c',
    // 방문예약 버튼(헤더·퀵메뉴·폼·모바일 하단바) — 영종 신일처럼 아이스 블루 그라데이션 + 네이비 글씨
    visitBtnBg: 'linear-gradient(90deg, #dcecf8, #8dbfe4)',
    visitBtnColor: '#0b1340',
  },
  pageTheme: 'ice',

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
    header: {
      // 자이 로고 없이 '양산자이 파크팰리체' 글씨만 렌더링한 PNG
      logo: {
        src: '/apt/yangsan-xi-park-paliche/logo-white.png',
        alt: '양산자이 파크팰리체',
        width: 1161,
        height: 128,
      },
      logoSize: { base: 150, lg: 180, xl: 196 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '방문예약신청'],
      quickCtaLabel: '방문예약신청',
      phone: '1533-5514',
    },

    // 진입 팝업(2026-10-14 사용자 요청) — 1번: 조건변경 이벤트 이미지(popup1.webp, 인트로 끝나고 0.7초 뒤) →
    //   닫으면 2번: 방문예약신청 폼. 이미지 우상단에 X가 그려져 있어 하단 '팝업닫기' 바 없이 이미지를 누르면 닫힘
    popup: {
      enabled: true,
      order: 'imageFirst',
      afterIntro: true,
      openDelayMs: 700,
      hideCloseBar: true,
      fitViewport: true,
      images: [
        {
          src: '/apt/yangsan-xi-park-paliche/popup1.webp',
          alt: '조건변경 이벤트 — 계약금 1,000만원(입주시까지), 중도금 60% 전액 무이자, 비규제지역, 84㎡ 계약축하금 최대 1,500만원·120㎡ 최대 2,200만원. 방문상담 이벤트 모나리자 천연펄프 화장지 12롤 증정',
          width: 1024,
          height: 1536,
        },
      ],
      visitForm: {
        enabled: true,
        accentColor: '#0b1340',
        title: '방문예약신청',
        desc: '상담 가능시간 10:00~18:00 (담당자와 조율가능)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약', '자료요청', '기타문의'],
        submitLabel: '방문예약 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: '양산자이 파크팰리체',
      phoneLabel: '분양문의',
      phone: '1533-5514',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      // 퀵메뉴 3버튼 색 구분(영종 신일 톤): 분양문의 네이비 · 방문예약 아이스 블루 그라데이션(visitBtnBg) · MENU 딥 네이비
      menuBg: '#0c1e44',
      menuColor: '#ffffff',
      ctaTargetId: 'vip-reservation',
      deskText: '양산자이 파크팰리체\n분양 상담을 도와드립니다.',
      address: '경남 양산시 평산동 47-1번지 일대',
      tagline: '도시를 품은 자리, 첫 번째 자이에서 누리다',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '방문예약신청', targetId: 'vip-reservation' },
      ],
    },

    // 인트로 — 청라 더리브 티아모 까사와 같은 연출(1단계 3분할 이미지+영문 카피 → 2단계 링 펄스+현장명 텍스트)
    arkoneIntro: {
      ariaLabel: '양산자이 파크팰리체를 소개하는 인트로',
      scenes: [
        { img: '/apt/yangsan-xi-park-paliche/hero-1.webp', label: '01 · LANDMARK', name: '양산의 첫 번째 브랜드 대단지' },
        { img: '/apt/yangsan-xi-park-paliche/overview-aerial.webp', label: '02 · SCALE', name: '지상 최고 29층 6개동 총 842세대' },
        { img: '/apt/yangsan-xi-park-paliche/landscape-1.webp', label: '03 · PARK', name: '웅상센트럴파크를 앞마당처럼' },
      ],
      copySmall: "YANGSAN'S FIRST LANDMARK",
      copyLine1: 'Timeless',
      copyLine2: 'Prestige.',
      brandName: '양산자이 파크팰리체',
      tagline: 'PARK · PALACE · RICHE',
      theme: {
        base: '#0b1340',
        stageOne: 'radial-gradient(circle at 50% 35%, #3d6f95 0, #0b1340 50%, #050824 100%)',
        stageTwo: 'radial-gradient(circle at center, #2f5a82, #0b1340 44%, #050824 100%)',
        ring: 'rgba(163, 196, 219, 0.5)',
        accent: '#a3c4db',
        sub: '#e8f0f5',
      },
    },

    // 히어로 — 영종 신일 비아프 크레스트 첫 화면과 같은 디자인(variant 'viaaf', 2026-10-13 사용자 요청, 모바일 포함):
    //   전체화면 사진 크로스페이드(5초) + 우상단 외곽선 워터마크 + 원형 배지 + 좌하단 슬라이드별 2줄 타이틀(2번째 줄 아이스 블루 그라데이션).
    //   사진은 공식 홈페이지 메인 투시도(주간)·교육자료 야경 투시도(p4)·조감도(p5) — 투시도 옥탑 Xi 로고는 지운 이미지.
    //   모바일은 같은 이미지에서 단지가 화면 가운데 오도록 세로 크롭(hero-N-m.webp, 2026-10-14 재크롭). 원형 배지(중도금 전액 무이자)는 2026-10-14 사용자 요청으로 삭제
    hero: {
      variant: 'viaaf',
      viaaf: {
        eyebrow: '양산 평산동 · 양산자이 파크팰리체',
        desc: 'TIMELESS PRESTIGE · PARK PALICHE',
        watermark: 'PARK',
      },
      slides: [
        {
          title: ['스케일이 다른 공원', '클래스가 다른 자이'],
          bgImage: {
            src: '/apt/yangsan-xi-park-paliche/hero-1.webp',
            alt: '양산자이 파크팰리체 투시도',
          },
          bgImageMobile: {
            src: '/apt/yangsan-xi-park-paliche/hero-1-m.webp',
            alt: '양산자이 파크팰리체 투시도',
          },
        },
        {
          title: ['도시를 품은 자리', '첫번째 자이에서 누리다'],
          bgImage: {
            src: '/apt/yangsan-xi-park-paliche/hero-2.webp',
            alt: '양산자이 파크팰리체 야경 투시도',
          },
          bgImageMobile: {
            src: '/apt/yangsan-xi-park-paliche/hero-2-m.webp',
            alt: '양산자이 파크팰리체 야경 투시도',
          },
        },
        {
          title: ['총 842세대', '브랜드 대단지'],
          bgImage: {
            src: '/apt/yangsan-xi-park-paliche/hero-3.webp',
            alt: '양산자이 파크팰리체 조감도',
          },
          bgImageMobile: {
            src: '/apt/yangsan-xi-park-paliche/hero-3-m.webp',
            alt: '양산자이 파크팰리체 조감도',
          },
        },
      ],
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '양산자이 파크팰리체', textLight: ' 공식 안내센터입니다.' },
        ],
        announceBg: '#0b1340',
        bubbleText: '방문예약신청',
        dotColor: '#2b6a9c',
        callLabel: '전화상담',
        visitLabel: '방문예약신청',
      },
    },

    // 사업개요 — 교육자료 p2 표 + 주간 투시도(p4, 옥탑 Xi 로고 지움)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/yangsan-xi-park-paliche/overview-photo.webp',
        alt: '양산자이 파크팰리체 투시도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '양산자이 파크팰리체' },
        { label: '대지위치', value: '경상남도 양산시 평산동 47-1번지 일대' },
        { label: '지역지구', value: '제2종 일반주거지역' },
        { label: '건축규모', value: ['지하 2층~지상 18~29층, 6개동', '총 842세대'] },
        { label: '대지면적', value: '43,516㎡(13,164평)' },
        { label: '건축/연면적', value: ['5,894㎡(1,783평) /', '99,198㎡(30,007평)'] },
        { label: '건폐율/용적률', value: '13.77% / 231.77%' },
        { label: '주차대수', value: '1,173대(세대당 1.39대)' },
        { label: '입주예정', value: '2028년 7월 예정' },
      ],
    },

    // 위치안내 — 공식 홈페이지 입지환경(광역 위치도 + 교통·자연·생활·교육 인프라 이미지컷)
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '부울경 메가시티의 중심, ',
      eyebrowAccent: '양산',
      title: 'Premium Location',
      descTitle: '양산의 첫 번째 자부심, 양산자이 파크팰리체',
      descTitleAccent: ['양산자이 파크팰리체'],
      descBody1: '교통 + 교육 + 생활편의시설을 모두 갖춘 최고의 정주여건,',
      descBody1Accent: ['최고의 정주여건'],
      descBody2: '웅상센트럴파크를 앞마당처럼 누리는 특별한 라이프가 시작됩니다.',
      mapImage: {
        src: '/apt/yangsan-xi-park-paliche/location-map.webp',
        alt: '양산자이 파크팰리체 광역 위치도',
        width: 2000,
        height: 1425,
      },
      features: [
        {
          titlePrefix: '어디든 빠르게',
          titleStrong: '교통',
          titleSuffix: '',
          tag: 'Traffic',
          image: {
            src: '/apt/yangsan-xi-park-paliche/location-traffic.webp',
            alt: '고속도로 항공 이미지컷',
          },
          descStrong: '웅상대로·7번 국도, 부울경 광역철도(계획)',
          descRest: '로 부산 노포~양산 웅상 약 10분대 이동(계획)',
        },
        {
          titlePrefix: '편리한 모든 것',
          titleStrong: '생활',
          titleSuffix: '',
          tag: 'Life',
          image: {
            src: '/apt/yangsan-xi-park-paliche/location-life.webp',
            alt: '장바구니 이미지컷',
          },
          descStrong: '이마트 트레이더스·일반상업지역',
          descRest: ', 웅상문화체육센터·웅상도서관 등 가깝고 편리한 생활인프라',
        },
        {
          titlePrefix: '한 걸음 가깝게',
          titleStrong: '교육',
          titleSuffix: '',
          tag: 'Education',
          image: {
            src: '/apt/yangsan-xi-park-paliche/location-education.webp',
            alt: '공부하는 학생 이미지컷',
          },
          descStrong: '단지 바로 앞 평산초등학교',
          descRest: ' 도보 거리, 웅상도서관·3D과학체험관 등 교육시설',
        },
        {
          titlePrefix: '365일 쾌적한',
          titleStrong: '공원',
          titleSuffix: '',
          tag: 'Park',
          image: {
            src: '/apt/yangsan-xi-park-paliche/location-park.webp',
            alt: '햇살 드는 공원 숲 이미지컷',
          },
          descStrong: '약 10만㎡ 규모 웅상센트럴파크',
          descRest: '(실내체육관 포함)를 앞마당처럼, 주진불빛공원(계획)',
        },
      ],
      disclaimer:
        '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
    },

    // 프리미엄 인트로 — 왼쪽 조경 투시도(p8) + 오른쪽 카피
    premiumIntro: {
      split: true,
      eyebrow: 'Timeless prestige',
      eyebrowColor: '#2b6a9c',
      titleLine1: '공세권의 특권을 누리는\n프리미엄 주거공간',
      paragraphs: [
        ['Park(공원) + Palace(궁전, 대저택)', '+ Riche(부유한)', '총 842세대 브랜드 대단지'],
        ['남동·남서향 배치와 전용 84㎡ 위주,', '지역 내 희소성 높은 중대형 구성으로', '여유로운 라이프가 시작됩니다'],
      ],
      imageBadge: '조경 투시도',
      bgImage: {
        src: '/apt/yangsan-xi-park-paliche/premium-split.webp',
        alt: '양산자이 파크팰리체 조경 투시도',
      },
    },

    // 프리미엄 인트로 바로 다음 split 섹션 2개(2026-10-14 사용자 요청 — 현장 핵심 포인트) — 브랜드 대단지·교통 / 커뮤니티·조경
    premiumIntroExtras: [
      {
        split: true,
        reverse: true,
        eyebrow: 'Brand Landmark',
        eyebrowColor: '#2b6a9c',
        titleLine1: '양산 첫 번째 자이,\n842세대 브랜드 대단지',
        paragraphs: [
          { head: 'GS건설 자이 브랜드 프리미엄', lines: ['지하 2층~지상 최고 29층', '6개동 총 842세대,', '84㎡부터 168㎡P까지', '다양한 평형 구성'] },
          { head: '부울경 메가시티 교통 중심', lines: ['웅상대로·7번 국도와', '부울경 광역철도(계획)로', '부산·울산 생활권을 더 가깝게'] },
        ],
        imageBadge: '조감도',
        bgImage: { src: '/apt/yangsan-xi-park-paliche/overview-aerial.webp', alt: '양산자이 파크팰리체 조감도' },
      },
      {
        split: true,
        eyebrow: 'Club Xian',
        eyebrowColor: '#2b6a9c',
        titleLine1: '단지 안에서 누리는\n품격 있는 일상',
        paragraphs: [
          { head: '지하 1·2층 프리미엄 커뮤니티', lines: ['골프연습장(GDR 8타석)·스크린골프', '피트니스·사우나', '작은도서관(교보문고 북 큐레이션)', '독서실·북카페'] },
          { head: '공원 같은 단지 조경', lines: ['중앙 잔디마당·산책로', '테마정원·수경공간으로', '집 앞에서 즐기는 힐링 라이프'] },
        ],
        imageBadge: '커뮤니티 광장 투시도',
        bgImage: { src: '/apt/yangsan-xi-park-paliche/landscape-club.webp', alt: '양산자이 파크팰리체 커뮤니티 앞 광장 투시도' },
      },
    ],

    // 프리미엄 가치 — 2026-10-14 사용자 요청으로 PREMIUM 5로 교체: 문구는 사용자 제공, 사진은 https://megacitymh.co.kr/ 프리미엄 섹션 원본(1300×800)
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM LIFE',
      titlePlain: '양산자이 파크팰리체 ',
      titleAccent: 'PREMIUM 5',
      accentColor: '#2b6a9c',
      columns: 5,
      cards: [
        {
          num: '01',
          image: { src: '/apt/yangsan-xi-park-paliche/premium5-traffic.webp', alt: '도심 도로 야경 이미지컷' },
          title: ['한발빠른 교통망'],
          desc: ['웅상대로와 7번 국도로 부산 및 울산 이동이 편리하며, 1028호 국도(계획) 등 편리한 광역 교통망을 갖추고 있습니다.'],
        },
        {
          num: '02',
          image: { src: '/apt/yangsan-xi-park-paliche/premium5-eco.webp', alt: '공원 잔디밭을 뛰노는 아이들 이미지컷' },
          title: ['친환경 에코특권'],
          desc: ['단지 바로 옆 웅상센트럴파크 조성으로 365일 쾌적함이 돋보이는 친환경 공원 라이프를 누릴 수 있습니다.'],
        },
        {
          num: '03',
          image: { src: '/apt/yangsan-xi-park-paliche/premium5-infra.webp', alt: '마트 쇼핑카트 이미지컷' },
          title: ['풍요로운 인프라'],
          desc: ['이마트 트레이더스, 웅상문화체육센터, 동부행정타운(계획), 양산 웅상출장소, 일반상업지역 내 시설 등을 편리하게 이용할 수 있습니다.'],
        },
        {
          num: '04',
          image: { src: '/apt/yangsan-xi-park-paliche/premium5-education.webp', alt: '교실에서 손 드는 학생 이미지컷' },
          title: ['가까운 교육시설'],
          desc: ['단지 앞 평산초등학교가 도보 거리에 있어 안심하고 통학할 수 있으며, 웅상도서관 등 가깝고 우수한 교육 환경을 제공합니다.'],
        },
        {
          num: '05',
          image: { src: '/apt/yangsan-xi-park-paliche/premium5-work.webp', alt: '출근하는 직장인 이미지컷' },
          title: ['직주근접 라이프'],
          desc: ['소주공업지구, 서창일반산단, 덕계일반산단 등 인근 13개 산단(조성 계획 포함)을 품은 직주근접 프리미엄을 갖추고 있습니다.'],
        },
      ],
    },

    // 단지안내 — 공식 홈페이지 단지배치도·동호배치도·커뮤니티·시스템 + 교육자료 조감도(p2)·조경(p7~8)
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
          thumb: '/apt/yangsan-xi-park-paliche/complex-thumb-siteplan.webp',
          title: '단지배치도',
          blocks: [
            { label: '배치도', image: { src: '/apt/yangsan-xi-park-paliche/complex-siteplan.webp', alt: '단지 배치도(101~106동, 84A 334세대 / 84B 174세대 / 84C 160세대 / 120 171세대 / 168P 3세대)', width: 2000, height: 1338 } },
            { label: '조감도', image: { src: '/apt/yangsan-xi-park-paliche/overview-aerial.webp', alt: '양산자이 파크팰리체 조감도', width: 1207, height: 1018 } },
          ],
        },
        {
          label: '조경',
          thumb: '/apt/yangsan-xi-park-paliche/complex-thumb-landscape.webp',
          title: '조경',
          blocks: [
            { label: '중앙 잔디마당', image: { src: '/apt/yangsan-xi-park-paliche/landscape-1.webp', alt: '중앙 잔디마당 조경 투시도', width: 889, height: 629 } },
            { label: '산책로', image: { src: '/apt/yangsan-xi-park-paliche/landscape-2.webp', alt: '산책로 조경 투시도', width: 1068, height: 631 } },
            { label: '테마정원', image: { src: '/apt/yangsan-xi-park-paliche/landscape-3.webp', alt: '테마정원 조경 투시도', width: 1068, height: 593 } },
            { label: '수경공간', image: { src: '/apt/yangsan-xi-park-paliche/landscape-4.webp', alt: '수경공간 야간 조경 투시도', width: 889, height: 593 } },
            { label: '커뮤니티 광장', image: { src: '/apt/yangsan-xi-park-paliche/landscape-club.webp', alt: '커뮤니티 앞 광장 투시도', width: 1600, height: 1082 } },
          ],
        },
        {
          label: '동호배치도',
          thumb: '/apt/yangsan-xi-park-paliche/complex-thumb-dong.webp',
          title: '동호배치도',
          blocks: [
            { label: '101~106동', image: { src: '/apt/yangsan-xi-park-paliche/complex-dong.webp', alt: '동호배치도(101~106동, 총 842세대)', width: 2000, height: 2533 } },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/yangsan-xi-park-paliche/complex-thumb-community.webp',
          title: '커뮤니티',
          blocks: [
            // 2026-10-14 사용자 요청: 지하 1층·지하 2층 탭만 — 공식 홈페이지 커뮤니티 원본(2000×6295)을 층별로 나눠
            //   평면도·시설 설명·하단 사진(사우나·피트니스·골프연습장 / 작은도서관·클럽 광장)까지 자르지 않고 통째로 사용
            { label: '지하 1층', image: { src: '/apt/yangsan-xi-park-paliche/community-b1.webp', alt: '지하 1층 커뮤니티 — 골프연습장·스크린골프·사우나·피트니스클럽·G.X룸', width: 2000, height: 2569 } },
            { label: '지하 2층', image: { src: '/apt/yangsan-xi-park-paliche/community-b2.webp', alt: '지하 2층 커뮤니티 — 작은도서관·북카페·독서실·다목적실·주민회의실', width: 2000, height: 2568 } },
          ],
        },
        {
          label: '스마트시스템',
          thumb: '/apt/yangsan-xi-park-paliche/complex-thumb-smart.webp',
          title: '스마트시스템',
          blocks: [
            // 2026-10-14 사용자 요청: 공식 홈페이지 시스템 페이지(/sub/sub02_05.php)의 탭 3개 원본 이미지를 자르지 않고 그대로
            { label: '스마트 & 안전', image: { src: '/apt/yangsan-xi-park-paliche/system-smart-safety.webp', alt: '스마트 & 안전 시스템 — 자이 스마트홈 IoT·CCTV·엘리베이터 방범 핸드레일·적외선감지기·차량번호인식 주차관제·안전사고 조기경보·방범형 도어폰·지하주차장 비상콜', width: 2000, height: 5745 } },
            { label: '에너지 시스템', image: { src: '/apt/yangsan-xi-park-paliche/system-energy.webp', alt: '에너지 시스템 — 스마트 원격 검침·실별 온도 조절기·세대 비례 제어·고효율 LED·일괄소등 스위치·전력회생형 엘리베이터·지하주차장 LED 디밍', width: 2000, height: 4336 } },
            { label: '편의 시스템', image: { src: '/apt/yangsan-xi-park-paliche/system-convenience.webp', alt: '편의 시스템 — 자이 패스·차세대 실내 환기·전자책도서관·주차유도·전기차 충전기·엘리베이터 홀 에어컨·태양광 발전·무인택배', width: 2000, height: 4447 } },
          ],
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 84㎡A·B·C / 120㎡ / 168㎡P. 평면은 공식 홈페이지 세대안내의 확장형(별도계약), 면적은 교육자료 p3
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'PARK PALICHE',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: [
        '전용 84㎡ 위주의',
        '트렌디한 평면설계와',
        '지역 내 희소성 높은 중대형',
        '양산자이 파크팰리체',
      ],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '334세대',
              image: { src: '/apt/yangsan-xi-park-paliche/unit-84a.webp', alt: '84㎡A 타입 평면도', width: 1297, height: 873 },
              specs: { exclusive: '84.9604', supply: '107.4518' },
            },
            {
              letter: 'B',
              countText: '174세대',
              image: { src: '/apt/yangsan-xi-park-paliche/unit-84b.webp', alt: '84㎡B 타입 평면도', width: 1344, height: 1026 },
              specs: { exclusive: '84.9794', supply: '107.9915' },
            },
            {
              letter: 'C',
              countText: '160세대',
              image: { src: '/apt/yangsan-xi-park-paliche/unit-84c.webp', alt: '84㎡C 타입 평면도', width: 1402, height: 918 },
              specs: { exclusive: '84.9816', supply: '107.8450' },
            },
          ],
        },
        {
          area: '120㎡',
          types: [
            {
              letter: '',
              countText: '171세대',
              image: { src: '/apt/yangsan-xi-park-paliche/unit-120.webp', alt: '120㎡ 타입 평면도', width: 1665, height: 937 },
              specs: { exclusive: '120.9561', supply: '151.9365' },
            },
          ],
        },
        {
          area: '168㎡',
          types: [
            {
              letter: 'P',
              countText: '3세대',
              image: { src: '/apt/yangsan-xi-park-paliche/unit-168p.webp', alt: '168㎡P(펜트하우스) 타입 평면도', width: 1825, height: 1004 },
              specs: { exclusive: '168.9129', supply: '215.2025' },
            },
          ],
        },
      ],
    },

    // 방문예약신청 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterHero: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '양산자이 파크팰리체',
      titleLine2: '방문예약신청',
      desc: '간단한 정보를 남겨주시면 「양산자이 파크팰리체」의 분양 정보와 상세 안내를 가장 빠르게 전해드립니다.',
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
        src: '/apt/yangsan-xi-park-paliche/logo-white.png',
        alt: '양산자이 파크팰리체',
        width: 1161,
        height: 128,
      },
      logoAlign: 'center',
      logoWidth: 200,
      highlightText: '도시를 품은 자리,\n첫 번째 자이에서 누리다\n양산자이 파크팰리체',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '광고 운영·관리 대행사', value: '더블루파트너스' },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 자료에 표현된 현황, 개발계획, 예정사항 등은 관계기관의 홈페이지 및 해당기관의 고시 등을 참조하여 작성된 것으로 사업계획 및 일정은 당사자와는 무관하며 사업주체 및 해당관청의 사정에 의해 지연, 변경 또는 취소될 수 있습니다.',
        '※ 84㎡형, 120㎡형, 168㎡형은 이해를 돕기 위한 호칭이며, 정확한 전용면적 및 공급면적 등은 모집공고와 견본주택에서 확인하시기 바랍니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1533-5514',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
