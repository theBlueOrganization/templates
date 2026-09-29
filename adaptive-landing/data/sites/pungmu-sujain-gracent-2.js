// 풍무역세권 수자인 그라센트 2차 — 김포 풍무역세권 도시개발사업 B1블럭(경기도 김포시 사우동 486-2번지 일원 도시개발구역).
// 시공 BS한양. 지하 2층~지상 28층, 7개동 총 639세대(84㎡ 509 / 105㎡ 130, 전 타입 4베이 판상형).
// 출처: 「풍무역세권수자인그라센트2차_PC상담북_최종」PDF(260402, 45p) — 풍무역세권(p2)·사업개요(p3)·광역/세부 위치도(p4~5)·
//   투시도/조감도(p6~7)·단지배치도(p8)·동호배치도(p9)·커뮤니티(p10~11)·주차설계(p12)·84/105 평면(p13~14)·
//   프리미엄 교육/교통/생활/의료(p16~21) 페이지를 pdftoppm으로 렌더링 후 크롭해 사용(public/apt/pungmu-sujain-gracent-2/).
//   PREMIUM 8 문구는 사용자 제공 이미지(2026-09-29) 원문 그대로. 헤더/푸터 로고는 SUJAIN 워드마크(logo-white.png).
// 대표번호 1811-4166, 상담 알림 문자 수신번호(adminPhones) 010-8874-8525 — 2026-09-29 사용자 전달값.
const config = {
  slug: 'pungmu-sujain-gracent-2',
  // 풍무수자인그라센트2차.addupapt.kr → /apt/pungmu-sujain-gracent-2 (middleware.js)
  subdomain: '풍무수자인그라센트2차',
  projectName: '풍무역세권 수자인 그라센트 2차',
  shortName: '수자인 그라센트 2차',
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/pungmu-sujain-gracent-2/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01088748525'],
  sheetId: '',
  sheetTab: '풍무수자인그라센트2차',
  showUtmInSms: true,

  // 상담북 메인 컬러(네이비 #0c3c6e + 청록 포인트) 기준
  colorTheme: {
    navy: '#0c3c6e',
    ink: '#0c2c4e',
    cream: '#f3efe6',
    gold: '#2b9aa3',
    visitBtnBg: '#5bc2c9',
    visitBtnColor: '#0c2c4e',
  },

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
      logo: { src: '/apt/pungmu-sujain-gracent-2/logo-white.png', alt: '수자인 SUJAIN', width: 265, height: 74 },
      logoSize: { base: 92, lg: 110, xl: 120 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '상담신청 및 방문예약'],
      quickCtaLabel: '방문예약',
      phone: '1811-4166',
    },

    popup: { enabled: false },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'SUJAIN GRACENT',
      phoneLabel: '분양문의',
      phone: '1811-4166',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '풍무역세권 수자인 그라센트 2차\n분양 상담을 도와드립니다.',
      address: '김포 풍무역세권 도시개발 사업지구 B1블럭',
      tagline: 'SUJAIN DUAL LIFE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '방문예약', targetId: 'vip-reservation' },
      ],
    },

    // 배경 3장 크로스페이드 — 투시도(p6) / 조감도(p7) / 사업개요 조감도(p3). 문구는 표지·사업개요·프리미엄 카피 발췌
    hero: {
      eyebrowDivider: true,
      titleLine1: '풍무역세권 수자인 그라센트 2차',
      titleWeight: 700,
      titleSize: { base: 25, md: 48, lg: 72 },
      eyebrowSize: { base: 15, lg: 21 },
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      slides: [
        {
          eyebrowLine1: '사우 생활, 교육부터 역까지 한걸음에',
          eyebrowLine2: '수자인 듀얼라이프의 완성.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-2/hero-1.webp', alt: '풍무역세권 수자인 그라센트 2차 투시도' },
        },
        {
          eyebrowLine1: 'B1·B2블럭 총 1,710세대',
          eyebrowLine2: '수자인 브랜드타운.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-2/hero-2.webp', alt: '풍무역세권 수자인 그라센트 2차 조감도' },
        },
        {
          eyebrowLine1: '84㎡~105㎡ 전 타입 4베이 판상형',
          eyebrowLine2: '중대형 평면 설계.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-2/hero-3.webp', alt: '풍무역세권 수자인 그라센트 2차 조감도' },
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '풍무역세권 수자인 그라센트 2차', textLight: ' 공식 안내센터입니다.' }],
        announceBg: '#0c3c6e',
        bubbleText: '방문예약하기',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 사업개요 — 상담북 p3
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/pungmu-sujain-gracent-2/overview-photo.webp', alt: '풍무역세권 수자인 그라센트 2차 조감도' },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '김포 풍무역세권 도시개발사업 B1블럭 공동주택 신축공사' },
        { label: '위치', value: '김포 풍무역세권 도시개발 사업지구 B1블럭' },
        { label: '건축규모', value: ['지하 2층, 지상 28층 / 7개동', '총 639세대(84㎡ 509세대 · 105㎡ 130세대)'] },
        { label: '대지면적', value: '35,672.40㎡(10,790.90평)' },
        { label: '연면적', value: '112,764.2580㎡(34,111.19평)' },
        { label: '건폐율/용적률', value: '15.98%(법정 60.00%) / 209.96%(법정 210.00%)' },
        { label: '주차대수', value: '총 946대(세대당 1.48대)' },
        { label: '구조', value: '전 타입 4베이 판상형' },
      ],
    },

    // 위치안내 — 세부 위치도(p5) + Life/Traffic/Education/Infra 문구
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '사우생활권과 풍무역세권의 ',
      eyebrowAccent: '더블 생활권',
      title: 'Dual Life Location',
      descTitle: '사우생활권과 풍무역세권을 동시에 누리는 핵심 입지.',
      descTitleAccent: ['사우생활권', '풍무역세권'],
      descBody1: '단지 바로 앞 사우초·사우고, 김포시 최대 규모 사우 학원가 도보권,',
      descBody1Accent: ['사우초·사우고', '사우 학원가'],
      descBody2: '김포골드라인 사우역·풍무역과 서울 5호선 연장(예타 통과)까지 가까이 누립니다.',
      mapImage: { src: '/apt/pungmu-sujain-gracent-2/location-map.webp', alt: '풍무역세권 수자인 그라센트 2차 세부 위치도' },
      features: [
        {
          titlePrefix: '우수한',
          titleStrong: '교육',
          titleSuffix: '으로',
          tag: 'Education',
          image: { src: '/apt/pungmu-sujain-gracent-2/feature-edu.webp', alt: '사우초·사우고 및 사우동 학원가 위치도' },
          descStrong: '사우초·사우고 인접 초품아급 안심 교육환경',
          descRest: ', 김포시 최대 규모 사우 학원가 도보권',
        },
        {
          titlePrefix: '편리한',
          titleStrong: '광역교통',
          titleSuffix: '으로',
          tag: 'Traffic',
          image: { src: '/apt/pungmu-sujain-gracent-2/feature-traffic.webp', alt: '사우역 → 서울 주요권역 지하철 노선도' },
          descStrong: '사우역 → 김포공항역 약 13분',
          descRest: ', 마곡 약 26분·여의도 약 41분, 서울 5호선 연장 예타 통과',
        },
        {
          titlePrefix: '더블',
          titleStrong: '생활권',
          titleSuffix: '으로',
          tag: 'Life',
          image: { src: '/apt/pungmu-sujain-gracent-2/feature-life.webp', alt: '차량 10분 생활권 지도' },
          descStrong: '트레이더스·홈플러스·CGV·김포시청',
          descRest: ' 등 차량 10분 생활권, 사우생활권과 풍무역세권 동시 이용',
        },
        {
          titlePrefix: '가까운',
          titleStrong: '의료',
          titleSuffix: '로',
          tag: 'Infra',
          image: { src: '/apt/pungmu-sujain-gracent-2/feature-medical.webp', alt: '인하대 김포메디컬캠퍼스 조감도' },
          descStrong: '인하대 김포메디컬캠퍼스(추진)',
          descRest: ', 2031년 500병상 종합병원 개원 목표로 풍무역세권 내 조성',
        },
      ],
      disclaimer:
        '※ 상기 지역도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있으며, 교통시설 및 주변 개발계획은 인·허가 및 정부시책에 따라 변경 및 취소될 수 있습니다.',
    },

    // 프리미엄 인트로 — 조감도(p7)
    premiumIntro: {
      eyebrow: 'SUJAIN DUAL LIFE',
      titleLine1: '사우 생활, 교육부터 역까지 한걸음에',
      titleLine2: '풍무역세권 수자인 그라센트 2차',
      descLine1: '지하 2층~지상 28층 7개동, 총 639세대 규모',
      descLine1Accent: ['639세대'],
      descLine2: 'B1블럭 639세대 / B2블럭 1,071세대, 총 1,710세대 수자인 브랜드타운이 완성됩니다.',
      bgImage: { src: '/apt/pungmu-sujain-gracent-2/premium-intro-bg.webp', alt: '풍무역세권 수자인 그라센트 2차 조감도' },
    },

    // 프리미엄 가치 — 사용자 제공 PREMIUM 8 이미지 원문 그대로
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM LIFE',
      titlePlain: '수자인 그라센트 2차 ',
      titleAccent: 'PREMIUM 8',
      // 사용자 제공 이미지와 같은 2열 배치
      columns: 2,
      cards: [
        { num: '01', title: ['풍무역세권', '최고의 교육환경'], desc: ['단지 앞 사우초, 사우고와', '한걸음에 누릴 사우동 학원가'] },
        { num: '02', title: ['골드라인', '역세권'], desc: ['김포골드라인 풍무역, 사우역', '서울까지 빠른 편리한 역세권'] },
        { num: '03', title: ['분양가 상한제', '적용 단지'], desc: ['합리적인 분양가로 만나는', '내 집 마련 절호의 기회'] },
        { num: '04', title: ['수자인 브랜드타운의', '완성'], desc: ['1차(1,071세대), 2차(639세대)로 완성되는', '풍무역세권 수자인 브랜드타운의 빛나는 가치'] },
        { num: '05', title: ['중대형 단지의', '가치'], desc: ['더 쾌적하고 여유롭게 누리는', '84㎡~105㎡ 중대형 평면 설계'] },
        { num: '06', title: ['풍무역세권의', '비전'], desc: ['미니신도시급 개발 사업으로', '더 크게 누릴 풍무역세권의 미래'] },
        { num: '07', title: ['바로 누릴', '풍부한 인프라'], desc: ['김포시청, 이마트 트레이더스 등', '사우동 X 풍무역 인프라'] },
        { num: '08', title: ['그리너리', '프리미엄'], desc: ['마을숲 공원, 어린이 공원(예정) 및', '단지 앞 산책로 등 자연 친화 힐링단지'] },
      ],
    },

    // 단지안내 — 상담북 단지설계·분양개요 페이지 원본 컷을 탭으로 (SignatureUnitPlanTabs, variant: 'imageTabs')
    complex: {
      id: 'complex',
      variant: 'imageTabs',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      subtitle: '지하 2층~지상 28층 7개동 총 639세대, 세대당 주차 1.48대의 쾌적한 단지를 만나보십시오.',
      tabColumns: 7,
      tabColumnsMobile: 4,
      tabs: [
        { label: '단지배치도', image: { src: '/apt/pungmu-sujain-gracent-2/complex-layout.webp', alt: '단지배치도(84㎡ 509세대 / 105㎡ 130세대)', width: 2558, height: 1236 }, zoomable: true },
        { label: '동호배치도', image: { src: '/apt/pungmu-sujain-gracent-2/complex-dongho.webp', alt: '동호배치도(101~107동)', width: 2454, height: 1244 }, zoomable: true },
        { label: '커뮤니티', image: { src: '/apt/pungmu-sujain-gracent-2/complex-community.webp', alt: '주민공동시설(지하 1층 단지 중심부) — 골프연습장·피트니스·G·X·탁구장·작은도서관·스터디카페·키즈라운지·사우나 등', width: 2454, height: 1220 }, zoomable: true },
        { label: '어린이집 등', image: { src: '/apt/pungmu-sujain-gracent-2/complex-facility.webp', alt: '어린이집·돌봄센터(104~105동 사이 1F), 경로당(106동 1F), 주민카페(선큰 서측 1F)', width: 2454, height: 1290 }, zoomable: true },
        { label: '주차설계', image: { src: '/apt/pungmu-sujain-gracent-2/complex-parking.webp', alt: '주차설계 — 총 946대, 세대당 1.48대', width: 1206, height: 1366 }, zoomable: true },
        { label: '광역위치도', image: { src: '/apt/pungmu-sujain-gracent-2/complex-wide.webp', alt: '광역 위치도', width: 2454, height: 1366 }, zoomable: true },
        { label: '풍무역세권', image: { src: '/apt/pungmu-sujain-gracent-2/complex-district.webp', alt: '김포 풍무역세권 도시개발구역 조감도 및 사업개요', width: 2454, height: 1174 }, zoomable: true },
      ],
    },

    // 세대안내 — 84/105 (전 타입 4베이 판상형), 평면은 상담북 확장형 평면(p13/14)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'SUJAIN GRACENT',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['사우 생활, 교육부터 역까지 한걸음에', '풍무역세권 수자인 그라센트 2차', '전 타입 4베이 판상형으로', '완성한 중대형 평면을 만나보십시오.'],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: '',
              countText: '총 639세대 중 509세대',
              image: { src: '/apt/pungmu-sujain-gracent-2/unit-84.webp', alt: '84㎡ 타입 확장형 평면도', width: 1188, height: 800 },
              specs: { exclusive: '84.9939', supply: '110.7946', contract: '168.8432' },
            },
          ],
        },
        {
          area: '105㎡',
          types: [
            {
              letter: '',
              countText: '총 639세대 중 130세대',
              image: { src: '/apt/pungmu-sujain-gracent-2/unit-105.webp', alt: '105㎡ 타입 확장형 평면도', width: 1188, height: 800 },
              specs: { exclusive: '105.2083', supply: '134.4757', contract: '206.3302' },
            },
          ],
        },
      ],
    },

    // 상담신청/방문예약 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '풍무역세권 수자인 그라센트 2차',
      titleLine2: '방문예약',
      desc: '간단한 정보를 남겨주시면 「풍무역세권 수자인 그라센트 2차」의 분양 일정과 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/pungmu-sujain-gracent-2/logo-white.png', alt: '수자인 SUJAIN', width: 265, height: 74 },
      logoAlign: 'center',
      logoWidth: 150,
      highlightText: '수자인 듀얼라이프의 완성,\n풍무역세권 수자인 그라센트 2차',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시공', value: '(주)BS한양' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 본 자료에 표현된 현황, 개발계획, 예정사항 등은 관계기관의 홈페이지 및 해당기관의 고시 등을 참조하여 작성된 것으로 사업계획 및 일정은 당사자와는 무관하며 사업주체 및 해당관청의 사정에 의해 지연, 변경 또는 취소될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1811-4166',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
