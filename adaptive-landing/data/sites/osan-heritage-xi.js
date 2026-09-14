// 오산헤리티지자이 — 경기도 오산시 병점생활권 일원, GS건설 Xi 브랜드 아파트 개발사업. 총 1,783세대
// (1BL 1,069세대 | 2BL 714세대), 시공 GS건설(주), 시행 (주)양산사지구에스피씨.
// 공식 사이트(https://www.xi.co.kr/osXI, 2026-09-14 확인)에서 세대수·시공사·시행사·GTX-C·병점생활권·
// CLUB XIAN/CLUB CLOUD 명칭만 확인 가능했고, 나머지 상세 페이지(사업개요 스펙표, 프리미엄 카피, 단지
// 배치도, 평형정보, 커뮤니티 이미지 등)는 공식 사이트가 점검 중이라 스크래핑하지 못함.
//
// ⚠️ 게시 전 실제 데이터로 교체 필요:
//   - 대지위치(정확한 지번), 대지면적, 연면적, 평형 구성, 준공예정일 등 사업개요 스펙 전체(현재 placeholder)
//   - 프리미엄 가치 카드 6종 문구/이미지, 위치안내 4대 특장점 이미지, 입지 관련 세부 교통·학군 정보
//   - 단지 배치도·동호수 배치표·세대 평면도·커뮤니티(CLUB XIAN/CLUB CLOUD) 이미지 — public/apt/osan-heritage-xi/에 실제 파일 추가 필요
//   - 히어로/헤더/푸터 로고 이미지
// 아래 값은 모두 사용자(현장 담당자)가 직접 전달한 원문 그대로 반영:
//   대표 분양 상담 문의 1666-1081, 운영 (주)세인디엔씨(사업자등록번호 824-88-01908),
//   시행사 (주)양산사지구에스피씨(사업자등록번호 434-88-02873, 대표자 신우철·이담경)
const config = {
  slug: 'osan-heritage-xi',
  subdomain: '오산헤리티지자이',
  projectName: '오산헤리티지자이',
  shortName: '오산헤리티지자이',
  telNumber: '1666-1081',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/osan-heritage-xi/og.jpg',
  // 비워두면 .env.local의 ADMIN_PHONE으로 폴백 — 실제 상담 접수 담당자 번호로 채워 넣을 것
  adminPhones: [],
  sheetId: '',
  sheetTab: '오산헤리티지자이',
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
      logo: { src: '/apt/osan-heritage-xi/logo.svg', alt: '오산헤리티지자이', width: 210, height: 47 },
      gnb: ['사업개요', '위치안내', '프리미엄가치', '단지소개', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-1081',
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
      bgImage: { src: '/apt/osan-heritage-xi/hero-bg.jpg', alt: '오산헤리티지자이 대표 조감도' },
      bgImageMobile: { src: '/apt/osan-heritage-xi/hero-bg-mobile.jpg', alt: '오산헤리티지자이 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '오산헤리티지자이', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '예약 후 상담만 해도 방문사은품 제공',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '오산헤리티지자이',
      subtitle: '경기도 오산시 병점생활권 일원, 자이가 완성하는 대단지 헤리티지',
      photo: { src: '/apt/osan-heritage-xi/overview-photo.jpg', alt: '오산헤리티지자이 조감도' },
      thumbs: [
        { src: '/apt/osan-heritage-xi/overview-thumb-1.jpg', alt: '오산헤리티지자이 단지 전경' },
        { src: '/apt/osan-heritage-xi/overview-thumb-2.jpg', alt: '오산헤리티지자이 커뮤니티 시설' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 사전홍보용으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다(면적 및 세대수 등 포함).',
      specItems: [
        { label: '사업명', value: '오산헤리티지자이' },
        { label: '대지위치', value: '경기도 오산시 일원 (정확한 지번 확인 필요)' },
        { label: '공급규모', value: '총 1,783세대 (1BL 1,069세대 / 2BL 714세대)' },
        { label: '시공', value: 'GS건설(주)' },
        { label: '시행', value: '(주)양산사지구에스피씨' },
      ],
    },

    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '규제를 피한 ',
      eyebrowAccent: '병점생활권',
      title: 'GTX-C 따라 요동치는',
      descTitle: '수혜지, 오산의 새로운 헤리티지',
      descTitleAccent: ['GTX-C', '오산의 새로운 헤리티지'],
      mapImage: { src: '/apt/osan-heritage-xi/location-map.jpg', alt: '오산헤리티지자이 광역 위치 안내도' },
      features: [
        {
          titlePrefix: '',
          titleStrong: 'GTX-C 노선 수혜',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/osan-heritage-xi/feature-traffic.jpg', alt: 'GTX-C 노선 수혜' },
          descStrong: '',
          descRest: 'GTX-C 노선을 따라 요동치는 미래가치와 광역 교통망 확충 수혜',
        },
        {
          titlePrefix: '',
          titleStrong: '병점생활권 인프라',
          titleSuffix: '',
          tag: 'LIFE',
          image: { src: '/apt/osan-heritage-xi/feature-life.jpg', alt: '병점생활권 인프라' },
          descStrong: '',
          descRest: '규제를 피한 병점생활권에서 누리는 편리한 생활 인프라',
        },
        {
          titlePrefix: '',
          titleStrong: '대단지 커뮤니티',
          titleSuffix: '',
          tag: 'COMMUNITY',
          image: { src: '/apt/osan-heritage-xi/feature-community.jpg', alt: '대단지 커뮤니티' },
          descStrong: '',
          descRest: 'CLUB XIAN, CLUB CLOUD 등 자이가 선사하는 하이엔드 커뮤니티 시설',
        },
        {
          titlePrefix: '',
          titleStrong: '자이 브랜드 프리미엄',
          titleSuffix: '',
          tag: 'BRAND',
          image: { src: '/apt/osan-heritage-xi/feature-brand.jpg', alt: '자이 브랜드 프리미엄' },
          descStrong: '',
          descRest: 'GS건설이 시공하는 1,783세대 대단지, 검증된 자이 브랜드 가치',
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 현황 및 개발 계획은 관계 기관의 발표를 참조해 작성된 것으로 사업계획 및 일정은 당사와 무관하며 추후 변경될 수 있습니다.',
    },

    premiumIntro: {
      eyebrow: 'GTX-C PREMIUM',
      titleLine1: '오산을 압도하는',
      titleLine2: '오산헤리티지자이 대단지 프리미엄',
      descLine1: '총 1,783세대 규모의 압도적 브랜드 타운 프리미엄',
      descLine1Accent: ['1,783세대'],
      descLine2: 'GTX-C가 여는 미래가치와 병점생활권의 편리함을 동시에 누리는 새로운 헤리티지를 완성합니다.',
      bgImage: { src: '/apt/osan-heritage-xi/premium-intro-bg.jpg', alt: '오산헤리티지자이 프리미엄 전경' },
    },

    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '오산헤리티지자이 ',
      titleAccent: 'SIGNATURE',
      cards: [
        { num: '01', title: ['1,783세대', '압도적 스케일'], desc: ['1BL 1,069세대, 2BL 714세대의', '대단지 랜드마크'] },
        { num: '02', title: ['GTX-C', '미래가치'], desc: ['GTX-C 노선을 따라 요동치는', '광역 교통망 수혜지'] },
        { num: '03', title: ['규제를 피한', '병점생활권'], desc: ['부담 없이 누리는', '병점생활권 인프라'] },
        { num: '04', title: ['CLUB XIAN', 'CLUB CLOUD'], desc: ['자이가 선사하는', '하이엔드 커뮤니티 시설'] },
        { num: '05', title: ['GS건설', '시공 프리미엄'], desc: ['대구·전국에서 가치를 증명한', '자이 브랜드 프리미엄'] },
        { num: '06', title: ['다양한', '주택형 구성'], desc: ['선호도 높은 평면 위주의', '혁신 공간 설계'] },
      ],
    },

    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '1BL 1,069세대·2BL 714세대',
      titleLine2: '총 1,783세대, 오산의 새로운 랜드마크',
      desc: 'CLUB XIAN, CLUB CLOUD부터 동 배치와 세대 라인 구성까지 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/osan-heritage-xi/complex-sitemap.jpg', alt: '오산헤리티지자이 단지 배치도', width: 1318, height: 1732 },
      },
      donghoChart: {
        image: { src: '/apt/osan-heritage-xi/complex-dongho-chart.jpg', alt: '오산헤리티지자이 동호수 배치표', width: 1433, height: 1920 },
      },
    },

    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'OSAN HERITAGE XI',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['병점생활권 중심에서 시작하는', '오산헤리티지자이', '당신의 라이프스타일에 맞춘', '다양한 혁신 평면을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '평형 스펙 확인 필요',
              image: { src: '/apt/osan-heritage-xi/unit-59a.jpg', alt: '오산헤리티지자이 59㎡A 타입 평면도' },
              specs: { exclusive: '0.0000', common: '0.0000', supply: '0.0000', otherCommon: '0.0000', contract: '0.0000' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '평형 스펙 확인 필요',
              image: { src: '/apt/osan-heritage-xi/unit-84a.jpg', alt: '오산헤리티지자이 84㎡A 타입 평면도' },
              specs: { exclusive: '0.0000', common: '0.0000', supply: '0.0000', otherCommon: '0.0000', contract: '0.0000' },
            },
          ],
        },
      ],
    },

    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      plainImage: {
        src: '/apt/osan-heritage-xi/club-xian-cloud-full.jpg',
        alt: '오산헤리티지자이 CLUB XIAN · CLUB CLOUD 커뮤니티 시설 안내',
        width: 1100,
        height: 3267,
      },
    },

    vipForm: {
      id: 'vip-reservation',
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
      logo: { src: '/apt/osan-heritage-xi/footer-logo.png', alt: '오산헤리티지자이' },
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
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1666-1081',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
