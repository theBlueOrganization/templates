// 풍무역세권 수자인 그라센트 1차 — 경기도 김포시 사우동 173-1번지 일원(풍무역세권 도시개발사업 B2블럭).
// 시공 BS한양. 지하 2층~지상 29층, 10개동 공동주택 1,071세대(59A 261 / 59B 60 / 84 750, 전세대 4Bay 판상형).
// 출처: 「풍무역세권 수자인 그라센트 상담북(안)_최종본_ver3」PDF(251105, 82p) — 사업개요(p3)·세부입지(p5)·
//   투시도/조감도(p10~12)·단지배치도(p13)·동호수배치도(p15~16)·커뮤니티(p17)·승강기/주차(p19)·단지외부(p20~22)·
//   59A/59B/84 평면(p23/28/33)·프리미엄 8종(p73) 페이지를 pdftoppm으로 렌더링 후 크롭해 사용(public/apt/pungmu-sujain-gracent-1/).
//   헤더/푸터 로고는 표지(p1)의 SUJAIN 워드마크를 투명 배경 흰색으로 추출(logo-white.png).
// 대표번호 1811-4166, 상담 알림 문자 수신번호(adminPhones) 010-8874-8525 — 2026-09-29 사용자 전달값.
const config = {
  slug: 'pungmu-sujain-gracent-1',
  // 풍무수자인그라센트1차.addupapt.kr → /apt/pungmu-sujain-gracent-1 (middleware.js)
  subdomain: '풍무수자인그라센트1차',
  projectName: '풍무역세권 수자인 그라센트 1차',
  shortName: '수자인 그라센트 1차',
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/pungmu-sujain-gracent-1/og.jpg',
  // 상담신청 알림 문자 수신번호
  adminPhones: ['01088748525'],
  sheetId: '',
  sheetTab: '풍무수자인그라센트1차',
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
      logo: { src: '/apt/pungmu-sujain-gracent-1/logo-white.png', alt: '수자인 SUJAIN', width: 265, height: 74 },
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
      deskText: '풍무역세권 수자인 그라센트 1차\n분양 상담을 도와드립니다.',
      address: '경기도 김포시 사우동 173-1번지 일원',
      tagline: 'SUJAIN DUAL LIFE PREMIUM',
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

    // 배경 3장 크로스페이드 — 표지 투시도(p1) / 투시도(p10) / 조감도(p11). 문구는 표지·프리미엄(p73) 카피 발췌
    hero: {
      eyebrowDivider: true,
      titleLine1: '풍무역세권 수자인 그라센트 1차',
      titleWeight: 700,
      titleSize: { base: 25, md: 48, lg: 72 },
      eyebrowSize: { base: 15, lg: 21 },
      textColor: '#ffffff',
      keepTextShadow: true,
      overlay: false,
      contentTop: true,
      slides: [
        {
          eyebrowLine1: '김포의 중심에서 만나는',
          eyebrowLine2: '듀얼 라이프 프리미엄.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-1/hero-1.webp', alt: '풍무역세권 수자인 그라센트 1차 투시도' },
        },
        {
          eyebrowLine1: '풍무역 & 사우역 도보거리',
          eyebrowLine2: '더블 역세권.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-1/hero-2.webp', alt: '풍무역세권 수자인 그라센트 1차 투시도' },
        },
        {
          eyebrowLine1: '분양가 상한제 적용',
          eyebrowLine2: '합리적인 분양가.',
          bgImage: { src: '/apt/pungmu-sujain-gracent-1/hero-3.webp', alt: '풍무역세권 수자인 그라센트 1차 조감도' },
        },
      ],
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '풍무역세권 수자인 그라센트 1차', textLight: ' 공식 안내센터입니다.' }],
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
      photo: { src: '/apt/pungmu-sujain-gracent-1/overview-photo.webp', alt: '풍무역세권 수자인 그라센트 1차 조감도' },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '김포 풍무역세권 도시개발사업 B2블럭 공동주택 신축공사' },
        { label: '대지위치', value: '경기도 김포시 사우동 173-1번지 일원(풍무역세권 도시개발사업 B2블럭)' },
        { label: '용도지역', value: '제2종일반주거지역, 지구단위계획구역, 고도지구' },
        { label: '건축규모', value: ['지하 2층 ~ 지상 29층, 10개동', '공동주택 1,071세대(근린생활시설 8개 호실)'] },
        { label: '대지면적', value: '53,863.0000㎡(16,293.56평)' },
        { label: '조경면적', value: '16,158.90㎡(4,888.07평) / 41.84%' },
        { label: '건폐율/용적률', value: '13.68% / 209.93%' },
        { label: '주차대수', value: ['1,580대(세대당 1.47대)', '근린생활시설 6대 / 합계 1,586대'] },
      ],
    },

    // 위치안내 — 세부입지 현황(p5)
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '풍무역세권과 사우생활권의 ',
      eyebrowAccent: '핵심입지',
      title: 'Dual Life Location',
      descTitle: '풍무역세권과 완성된 사우생활권을 동시에 누리는 핵심 입지.',
      descTitleAccent: ['풍무역세권', '사우생활권'],
      descBody1: '김포골드라인 풍무역·사우역 도보 이용, 사우초 도보 약 6분, 사우동 학원가 도보 약 13분,',
      descBody1Accent: ['풍무역·사우역', '사우초'],
      descBody2: '김포시청·김포종합운동장·김포아트홀 등 반경 1km 생활 인프라를 가까이 누립니다.',
      mapImage: { src: '/apt/pungmu-sujain-gracent-1/location-map.webp', alt: '풍무역세권 수자인 그라센트 1차 세부입지 현황' },
      features: [
        {
          titlePrefix: '빠른',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Speed UP',
          image: { src: '/apt/pungmu-sujain-gracent-1/feature-traffic.webp', alt: '더블 역세권' },
          descStrong: '풍무역·사우역 도보거리',
          descRest: ', 김포공항역 환승 및 김포한강로·올림픽대로로 서울 접근 용이',
        },
        {
          titlePrefix: '안심',
          titleStrong: '학세권',
          titleSuffix: '으로',
          tag: 'Safe UP',
          image: { src: '/apt/pungmu-sujain-gracent-1/feature-school.webp', alt: '안심도보 학세권' },
          descStrong: '사우초·사우고 도보 통학',
          descRest: ', 도시개발사업 내 유치원·초·중학교 예정',
        },
        {
          titlePrefix: '우수한',
          titleStrong: '교육',
          titleSuffix: '으로',
          tag: 'Smart UP',
          image: { src: '/apt/pungmu-sujain-gracent-1/feature-edu.webp', alt: '우수한 교육 환경' },
          descStrong: '김포 최대 규모 사우동 학원가',
          descRest: ' 도보권, 학세권부터 학원가까지 교육 최적화 입지',
        },
        {
          titlePrefix: '놀라운',
          titleStrong: '미래가치',
          titleSuffix: '로',
          tag: 'Class UP',
          image: { src: '/apt/pungmu-sujain-gracent-1/feature-future.webp', alt: '미니신도시급 개발사업' },
          descStrong: '약 6,600가구 미니신도시급 개발',
          descRest: ', 인하대 김포 메디컬캠퍼스 조성·5호선 연장·GTX-D 호재',
        },
      ],
      disclaimer:
        '※ 상기 지도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있으며, 개발계획은 관계기관 사정에 따라 변경될 수 있습니다.',
    },

    // 프리미엄 인트로 — 야간 조감도(p12)
    premiumIntro: {
      eyebrow: 'SUJAIN DUAL LIFE',
      titleLine1: '김포의 중심에서 만나는',
      titleLine2: '풍무역세권 수자인 그라센트 1차',
      descLine1: '지하 2층~지상 29층 10개동, 총 1,071세대 규모',
      descLine1Accent: ['1,071세대'],
      descLine2: '풍무역세권 도시개발사업과 완성된 사우생활권을 함께 누리는 수자인 듀얼 라이프가 시작됩니다.',
      bgImage: { src: '/apt/pungmu-sujain-gracent-1/premium-intro-bg.webp', alt: '풍무역세권 수자인 그라센트 1차 야간 조감도' },
    },

    // 프리미엄 가치 — 상담북 p73 8종 카피
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '수자인 그라센트 ',
      titleAccent: 'PREMIUM 8',
      cards: [
        { num: '01', title: ['더블 역세권', '프리미엄'], desc: ['도보거리 풍무역 & 사우역,', '마곡·여의도 등 서울 주요권역 접근'] },
        { num: '02', title: ['안심도보', '학세권'], desc: ['반경 600m 내 초·고교 위치,', '사업지구 내 유치원·초·중학교 예정'] },
        { num: '03', title: ['우수한', '교육 환경'], desc: ['김포 최대규모 사우동 학원가', '도보권 교육 최적화 입지'] },
        { num: '04', title: ['미니신도시급', '개발사업'], desc: ['도시개발사업 내 약 6,600가구 공급,', '인하대 김포 메디컬캠퍼스 조성'] },
        { num: '05', title: ['분양가 상한제', '적용'], desc: ['분양가 상한제의 합리적 가격,', '계약금 정액제(1차 1천만원)'] },
        { num: '06', title: ['전세대 4Bay', '판상형 설계'], desc: ['희소성 높은 59㎡부터 여유로운 84㎡까지,', '전세대 남향위주 배치'] },
        { num: '07', title: ['다 갖춘', '생활 인프라'], desc: ['풍무역, 이마트 트레이더스, 홈플러스,', '메디컬캠퍼스(예정), 선수공원 등'] },
        { num: '08', title: ['김포의 대표', '수자인 브랜드'], desc: ['\'주거혁신\' 부문 최우수상 수상,', '대한경제 건설대상 브랜드 대상 수상'] },
      ],
    },

    // 단지안내 — 상담북 단지계획 페이지 원본 컷을 탭으로 (SignatureUnitPlanTabs, variant: 'imageTabs')
    complex: {
      id: 'complex',
      variant: 'imageTabs',
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      subtitle: '지하 2층~지상 29층 10개동 총 1,071세대, 조경면적 41.84%의 쾌적한 단지를 만나보십시오.',
      tabColumns: 7,
      tabColumnsMobile: 4,
      tabs: [
        { label: '단지배치도', image: { src: '/apt/pungmu-sujain-gracent-1/complex-layout.webp', alt: '단지배치도 및 타입별 세대수(총 1,071세대)', width: 1803, height: 1116 }, zoomable: true },
        { label: '동호배치도Ⅰ', image: { src: '/apt/pungmu-sujain-gracent-1/complex-dongho-1.webp', alt: '동호수배치도(201~205동)', width: 1803, height: 1201 }, zoomable: true },
        { label: '동호배치도Ⅱ', image: { src: '/apt/pungmu-sujain-gracent-1/complex-dongho-2.webp', alt: '동호수배치도(206~210동)', width: 1803, height: 1201 }, zoomable: true },
        { label: '커뮤니티', image: { src: '/apt/pungmu-sujain-gracent-1/complex-community.webp', alt: '커뮤니티시설(B1F 라운지·피트니스·실내골프연습장·작은도서관·스터디카페 / B2F 다목적체육관·탁구장)', width: 1778, height: 1082 }, zoomable: true },
        { label: '승강기·주차', image: { src: '/apt/pungmu-sujain-gracent-1/complex-elevator.webp', alt: '동별 엘리베이터 설치대수 및 주차대수 현황', width: 1803, height: 1201 }, zoomable: true },
        { label: '문주', image: { src: '/apt/pungmu-sujain-gracent-1/complex-gate.webp', alt: '단지 문주 투시도', width: 1803, height: 1031 } },
        { label: '조경', image: { src: '/apt/pungmu-sujain-gracent-1/complex-landscape-1.webp', alt: '단지 조경 투시도', width: 1803, height: 1031 } },
      ],
    },

    // 세대안내 — 59A/59B/84 (전세대 4Bay 판상형), 평면은 상담북 확장형 평면(p23/28/33)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'SUJAIN GRACENT',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['김포의 중심에서 누리는', '풍무역세권 수자인 그라센트 1차', '전세대 4Bay 판상형으로', '완성한 평면을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 1,071세대 중 261세대',
              image: { src: '/apt/pungmu-sujain-gracent-1/unit-59a.webp', alt: '59㎡ A 타입 확장형 평면도', width: 924, height: 661 },
              specs: { exclusive: '59.9941', supply: '85.8022', contract: '130.3350' },
            },
            {
              letter: 'B',
              countText: '총 1,071세대 중 60세대',
              image: { src: '/apt/pungmu-sujain-gracent-1/unit-59b.webp', alt: '59㎡ B 타입 확장형 평면도', width: 924, height: 661 },
              specs: { exclusive: '59.9976', supply: '85.5000', contract: '130.0352' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: '',
              countText: '총 1,071세대 중 750세대',
              image: { src: '/apt/pungmu-sujain-gracent-1/unit-84.webp', alt: '84㎡ 타입 확장형 평면도', width: 924, height: 661 },
              specs: { exclusive: '84.9939', supply: '112.2346', contract: '175.3243' },
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
      titleLine1: '풍무역세권 수자인 그라센트 1차',
      titleLine2: '방문예약',
      desc: '간단한 정보를 남겨주시면 「풍무역세권 수자인 그라센트 1차」의 분양 일정과 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/pungmu-sujain-gracent-1/logo-white.png', alt: '수자인 SUJAIN', width: 265, height: 74 },
      logoAlign: 'center',
      logoWidth: 150,
      highlightText: '김포의 중심에서 만나는,\n풍무역세권 수자인 그라센트 1차',
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
