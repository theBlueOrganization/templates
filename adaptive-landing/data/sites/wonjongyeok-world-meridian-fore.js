// signature 필드 ↔ 컴포넌트:
//   header → SignatureHeader, hero → SignatureHeroMinimal(이 현장 전용), summary → SignatureSummary,
//   location → SignatureLocation, premiumIntro → SignaturePremiumIntro, premiumValue → SignaturePremiumValue,
//   landscape → SignatureLandscape, complex → SignatureComplex, unitPlan → SignatureUnitPlan,
//   club → SignatureClub, vipForm → SignatureVipForm, footer → SignatureFooter
const config = {
  slug: 'wonjongyeok-world-meridian-fore',
  subdomain: '원종역월드메르디앙포레',
  projectName: '원종역 월드메르디앙 포레',
  shortName: '원종역 월드메르디앙 포레',
  telNumber: '1877-3569',
  ogImage: 'https://addupapt.kr/apt/wonjongyeok-world-meridian-fore/og.jpg',
  adminPhones: ['01029183185'],
  sheetId: '',
  sheetTab: '원종역월드메르디앙포레',
  showUtmInSms: true,
  kakao: true,

  // 원종역 전용 컬러 팔레트 — Signature* 공용 컴포넌트(eupseong-prugio와 공유)의 CSS에
  // var(--navy, 기존값) 형태로 대체 지정되어 있어, 이 값이 있는 현장(원종역)에서만
  // 적용되고 eupseong-prugio는 기존 하드코딩 색을 그대로 씀 (app/apt/[slug]/page.jsx 참고)
  colorTheme: {
    navy: '#263241',
    ink: '#1f2c35',
    cream: '#f3f1ec',
    gold: '#e0cd9c',
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
      logo: { src: '/apt/wonjongyeok-world-meridian-fore/logo.webp', alt: '원종역 월드메르디앙 포레', width: 300, height: 141 },
      // 로고에 2줄 워드마크(영문+국문)가 함께 있어 기본 CSS 크기보다 살짝 작게 조정
      logoSize: { base: 100, lg: 150, xl: 170 },
      gnb: ['사업안내', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1877-3569',
    },

    // 진입 팝업 배너 — SignaturePopupBanner 전용, 페이지 진입 약 3초 뒤 노출됨
    // image는 디자인 완성본을 그대로 씀 (리본 장식·하단 "팝업닫기" 바는 컴포넌트가 이미지 위에 덧그림)
    popup: {
      enabled: true,
      image: { src: '/apt/wonjongyeok-world-meridian-fore/popup.webp', alt: '원종역 월드메르디앙 포레 특별혜택 안내', width: 688, height: 1025 },
      closeLabel: '팝업닫기',
    },

    // PC(1024px 이상)에서만 노출되는 우측 고정 퀵메뉴 — SignatureQuickMenu 전용
    quickMenu: {
      brand: 'WORLD MERIDIAN FORET',
      phoneLabel: '분양문의',
      phone: '1877-3569',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '원종역 월드메르디앙 포레\n분양 상담을 도와드립니다.',
      address: '현장 및 구경하는 집 원종동 288',
      tagline: 'YOUR NEW STANDARD OF LIVING\nBEGINS IN WONJONG',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'PREMIUM', sub: '프리미엄 6', targetId: 'premium-value' },
        { num: '04', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '05', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '06', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // SignatureHeroMinimal 전용 — 배경 사진 위에 크림 톤 스크림을 얹은 플랫 히어로
    hero: {
      variant: 'minimal',
      eyebrowLine1: '서울을 가깝게, 신도시 프리미엄을 더 가깝게.',
      titleLine1: '월드메르디앙 포레',
      descLine1: '부천 원종 · 서해선 원종역 초역세권 · 즉시입주',
      bgImage: { src: '/apt/wonjongyeok-world-meridian-fore/main.webp', alt: '원종역 월드메르디앙 포레 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '원종역 월드메르디앙 포레', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '문의하기',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    benefits: {
      id: 'benefits',
      eyebrow: 'WORLD MERIDIAN SPECIAL BENEFITS',
      titleSmall: '월드메르디앙만의',
      titleBold: '특별한',
      titleScript: '4가지 혜택',
      desc: '최신 제공 자료에 기재된 주요 혜택을 확인하세요.',
      bgImage: { src: '/apt/wonjongyeok-world-meridian-fore/main.webp', alt: '원종역 월드메르디앙 포레 특별 혜택' },
      items: [
        { num: '01', tag: 'CONTRACT', title: ['계약금 5%로', '입주까지'], desc: '약 2천만원 내외' },
        { num: '02', tag: 'MOVE-IN', title: ['즉시입주 가능한', '신축아파트'], desc: '새로운 일상을 바로 시작하세요.' },
        { num: '03', tag: '14 OPTIONS', title: ['14가지 고급 유상옵션', '무상제공'], desc: '한시적 제공 혜택' },
        { num: '04', tag: 'SMART PRICE', title: ['4년 전 수준의', '합리적인 분양가'], desc: '부담은 낮추고 가치는 높였습니다.' },
      ],
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/wonjongyeok-world-meridian-fore/main.webp', alt: '원종역 월드메르디앙 포레 조감도' },
      thumbs: [
        { src: '/apt/wonjongyeok-world-meridian-fore/sub_image.webp', alt: '단지 전경 야간 투시도' },
        { src: '/apt/wonjongyeok-world-meridian-fore/overview-thumb-3.jpg', alt: '단지 내 프리미엄 인테리어' },
        { src: '/apt/wonjongyeok-world-meridian-fore/overview-thumb-4.jpg', alt: '커뮤니티 시설 썸네일' },
        
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '위치', value: '영동주택가로정비사업(경기도 부천시 원종동 288 외 21필지)' },
        { label: '지역,지구', value: '제2종일반주거지역, 수평표면구역' },
        { label: '규모', value: '지하 1층 ~ 지상 10층 2개동 / 164세대' },
        { label: '대지면적', value: '5,051.10㎡ (1,527.95평)' },
        {
          label: '연면적',
          value: ['전체 16,994.29㎡ (5,140.77평)', '지상 12,620.86㎡ (3,817.81평)', '지하 4,373.43㎡ (1,321.96평)'],
        },
        { label: '용적률 / 건폐율', value: '249.86% / 43.92%' },
        { label: '주차대수', value: '167대' },
      ],
    },

    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '원종의 중심, ',
      eyebrowAccent: '일상의 모든 길이 닿는 곳',
      title: '공원과 지하철의 가치를 더한\n원종의 새로운 생활 중심',
      descTitle: '서해선 원종역을 중심으로 교통과 생활, 자연과 교육이 가까이 이어지는 입지 프리미엄을 확인하세요.',
      descTitleAccent: [],
      mapImage: { src: '/apt/wonjongyeok-world-meridian-fore/location-map.webp', alt: '원종역 월드메르디앙 포레 위치 안내도' },
      subhead: {
        eyebrow: '생활의 중심을 가까이',
        title: '교통과 자연, 교육과 생활이\n하나로 이어집니다.',
      },
      features: [
        {
          num: '01',
          category: '교통',
          title: '더블역세권 미래가치',
          desc: '서해선 원종역과 대장홍대선 원종역 착공으로 더 편리해질 광역 교통망을 누립니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/directions-traffic-v1-1920.webp', alt: '더블역세권 미래가치', position: 'right center' },
        },
        {
          num: '02',
          category: '자연',
          title: '도심 속 힐링 숲세권',
          desc: '은데미공원과 고강선사유적공원 등 가까운 녹지에서 일상의 여유를 만납니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/garden-walk-1920.webp', alt: '도심 속 힐링 숲세권', position: 'center 55%' },
        },
        {
          num: '03',
          category: '교육',
          title: '도보 통학 학세권',
          desc: '오정초와 수주초·중·고를 도보로 통학할 수 있는 교육 환경을 갖췄습니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-03-education-v1.webp', alt: '도보 통학 학세권', position: 'right center' },
        },
        {
          num: '04',
          category: '생활',
          title: '서울생활권 인프라',
          desc: '김포공항, 마곡, 강서, 양천을 차량 10분대로 연결하는 생활권을 누립니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/location-park-evening-v1-1920.webp', alt: '서울생활권 인프라', position: 'right center' },
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    premiumIntro: {
      eyebrow: 'NATURAL NOBILITY',
      titleLine1: '원종역을 압도하는', // TODO
      titleLine2: '원종역 월드메르디앙 포레',
      descLine1: '총 164세대 규모의 압도적 브랜드 타운 프리미엄',
      descLine1Accent: ['164세대'],
      descLine2: '자연의 평온함과 도심의 활기를 동시에 누리는\n새로운 주거 중심을 완성합니다.',
      bgImage: { src: '/apt/wonjongyeok-world-meridian-fore/sub_image.webp', alt: '원종역 월드메르디앙 포레 프리미엄 전경' },
    },

    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: '원종역 월드메르디앙 포레',
      titlePlain: 'Premium ',
      titleAccent: '6',
      subtitle: '공원에 지하철의 가치를 더한 6가지 프리미엄',
      subtitleLight: '교통과 자연, 교육과 생활 인프라까지',
      cards: [
        {
          num: '01',
          icon: 'train',
          title: ['더블역세권 프리미엄'],
          desc: ['서해선 원종역과 대장홍대선 원종역', '착공으로 누리는 더블 프리미엄'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-01-double-station-v1.webp', alt: '더블역세권 프리미엄' },
        },
        {
          num: '02',
          icon: 'forest',
          title: ['숲세권 프리미엄'],
          desc: ['은데미공원과 고강선사유적공원 등', '일상 가까이에서 누리는 힐링 숲세권'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-02-forest-v1.webp', alt: '숲세권 프리미엄' },
        },
        {
          num: '03',
          icon: 'school',
          title: ['학세권 프리미엄'],
          desc: ['오정초와 수주초·중·고를', '도보로 통학할 수 있는 안심 학세권'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-03-education-v1.webp', alt: '학세권 프리미엄' },
        },
        {
          num: '04',
          icon: 'money',
          title: ['합리적인 분양가'],
          desc: ['14가지 무상 풀옵션을 포함한', '4년 전 수준의 합리적인 분양가'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-04-price-options-v1.webp', alt: '합리적인 분양가' },
        },
        {
          num: '05',
          icon: 'tunnel',
          title: ['경인고속도로 지하화'],
          desc: ['경인고속도로 지하화와 지상 녹지공간', '정비로 기대되는 미래 프리미엄'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-05-expressway-green-v1.webp', alt: '경인고속도로 지하화' },
        },
        {
          num: '06',
          icon: 'city',
          title: ['서울생활권 인프라'],
          desc: ['김포공항, 마곡, 강서, 양천을', '차량 10분대로 연결하는 서울생활권'],
          image: { src: '/apt/wonjongyeok-world-meridian-fore/premium-06-seoul-life-v1.webp', alt: '서울생활권 인프라' },
        },
      ],
    },

    complex: {
      id: 'complex',
      siteMap: {
        eyebrow: '일상을 위한 세심한 단지 설계',
        titleLine1: '머무는 시간까지 생각한',
        titleLine2: '단지의 균형',
        desc: '보행과 차량, 휴식과 일상을 세심하게 나눈 단지 계획입니다.',
        image: { src: '/apt/wonjongyeok-world-meridian-fore/complex-sitemap.png', alt: '원종역 월드메르디앙 포레 단지 배치도 및 타입별 세대수', width: 1318, height: 1732 },
      },
      donghoChart: {
        eyebrow: '동별 구성을 한눈에 보는 배치 안내',
        titleLine1: '101동과 102동,',
        titleLine2: '타입별 배치를 한눈에',
        desc: '각 동의 타입별 위치와 호수를 보기 쉽게 확인할 수 있습니다.',
        image: { src: '/apt/wonjongyeok-world-meridian-fore/complex-dongho-chart.png', alt: '원종역 월드메르디앙 포레 동호수 배치표', width: 1433, height: 1920 },
      },
    },

    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'WORLD MERIDIAN FORE',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['원종역의 주거문화를 선도하는', '원종역 월드메르디앙 포레', '당신의 라이프스타일에 맞춘', '다양한 혁신 평면을 만나보십시오.'],
      groups: [
        {
          area: '52㎡',
          types: [
            {
              letter: 'A',
              countText: '총 164세대 중 44세대',
              image: { src: '/apt/wonjongyeok-world-meridian-fore/52.webp', alt: '52㎡ A 타입 평면도' },
              specs: { exclusive: '52.4300', common: '19.3600', supply: '71.7900', otherCommon: '26.1900', contract: '97.9800' },
            },
          ],
        },
        {
          area: '54㎡',
          types: [
            {
              letter: 'A',
              countText: '총 164세대 중 40세대',
              image: { src: '/apt/wonjongyeok-world-meridian-fore/54A.webp', alt: '54㎡ A 타입 평면도' },
              specs: { exclusive: '54.6900', common: '19.5400', supply: '74.2300', otherCommon: '27.3300', contract: '101.5600' },
            },
            {
              letter: 'B',
              countText: '총 164세대 중 40세대',
              image: { src: '/apt/wonjongyeok-world-meridian-fore/54B.webp', alt: '54㎡ B 타입 평면도' },
              specs: { exclusive: '54.7600', common: '19.5300', supply: '74.2900', otherCommon: '27.3700', contract: '101.6600' },
            },
          ],
        },
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 164세대 중 40세대',
              image: { src: '/apt/wonjongyeok-world-meridian-fore/59.webp', alt: '59㎡ A 타입 평면도' },
              specs: { exclusive: '59.9800', common: '21.4300', supply: '81.4100', otherCommon: '29.9800', contract: '111.3900' },
            },
          ],
        },
      ],
    },

    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      intro: {
        watermark: 'Community',
        titleLine1: '일상에 품격을 더하는',
        titleLine2: '프리미엄 커뮤니티',
        desc: '입주민의 건강과 휴식, 배움과 소통을 위한 세 가지 커뮤니티 공간',
      },
      facilities: [
        {
          key: 'fitness',
          icon: 'fitness',
          labelEn: 'FITNESS CENTER',
          title: '피트니스센터',
          desc: '다양한 운동기구와 쾌적한 환경으로 건강한 라이프스타일을 지원하는 공간입니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/brochure-community-fitness.webp', alt: '피트니스센터', width: 1655, height: 1381 },
        },
        {
          key: 'library',
          icon: 'library',
          labelEn: 'SMALL LIBRARY',
          title: '작은도서관',
          desc: '독서와 학습, 휴식을 위한 조용하고 쾌적한 문화공간입니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/brochure-community-library.webp', alt: '작은도서관', width: 1540, height: 1400 },
        },
        {
          key: 'lounge',
          icon: 'lounge',
          labelEn: 'SENIOR LOUNGE',
          title: '경로당',
          desc: '어르신들이 편안하게 휴식하고 소통할 수 있도록 마련된 커뮤니티 공간입니다.',
          image: { src: '/apt/wonjongyeok-world-meridian-fore/brochure-community-senior.webp', alt: '경로당', width: 1285, height: 1400 },
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '원종역 월드메르디앙 포레',
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
      logo: { src: '/apt/wonjongyeok-world-meridian-fore/logo.webp', alt: '원종역 월드메르디앙 포레' },
      highlightText: '청약통장없이 로열동호수 선점!',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)시행사명' }, // TODO
        { label: '시공', value: '(주)월드건설 / 대표자명 / 000-00-00000' }, // TODO
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1877-3569',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
