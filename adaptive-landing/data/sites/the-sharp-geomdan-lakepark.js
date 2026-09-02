// 더샵 검단레이크파크 — https://apt-all.app/ 를 구조/카피/데이터 그대로 재현한 현장.
// 이 현장은 기존 12섹션 고정 흐름(header~footer)과 완전히 다른 20개 섹션 구성이라
// signature 하위 필드가 example-apt.js 표에 없는 새 이름들로 구성되어 있음(아래 컴포넌트 매핑 참고).
// 새 필드 ↔ 컴포넌트 매핑(= example-apt.js 표에 반영된 내용과 동일):
//   headerGeomdan     → components/ui/SignatureHeaderGeomdan
//   heroGeomdan       → components/sections/SignatureHeroGeomdan
//   visitReservation  → components/sections/SignatureVisitReservation ("use client")
//   overviewGeomdan   → components/sections/SignatureOverviewGeomdan
//   story             → components/sections/SignatureSellingStory
//   premiumDuo        → components/sections/SignaturePremiumDuo
//   infrastructure    → components/sections/SignatureInfrastructure
//   priceBand         → components/sections/SignatureValueBand
//   spaces            → components/sections/SignatureLivingSpaces
//   smarthome         → components/sections/SignatureSmartHome
//   floorplans        → components/sections/SignatureFloorplansGeomdan
//   siteplan          → components/sections/SignatureSiteplanGeomdan ("use client", SignatureLightbox 재사용)
//   emodelhouse       → components/sections/SignatureEmodelHouse ("use client", SignatureLightbox 재사용)
//   landscapeGeomdan  → components/sections/SignatureLandscapeGeomdan
//   community         → components/sections/SignatureCommunityGeomdan
//   notice            → components/sections/SignatureNotice
//   faq               → components/sections/SignatureFaq
//   locationGeomdan   → components/sections/SignatureLocationGeomdan
//   finalInterest     → components/sections/SignatureFinalInterest ("use client")
//   footerGeomdan     → components/ui/SignatureFooterGeomdan
// hero.mobileBar는 기존 공용 SignatureMobileBottomBar를 그대로 재사용(방문예약/전화 두 버튼 구조가 동일).
const config = {
  slug: 'the-sharp-geomdan-lakepark',
  subdomain: '더샵검단레이크파크',
  projectName: '더샵 검단레이크파크',
  shortName: '더샵 검단레이크파크',
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt2/apt/the-sharp-geomdan-lakepark/og.png',
  // TODO: 실제 상담 접수 담당자 번호로 교체 (지금은 발송 실패를 막기 위한 임시 자리표시자)
  adminPhones: ['01000000000'],
  sheetId: '',
  sheetTab: '더샵검단레이크파크',
  showUtmInSms: true,
  kakao: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 방문예약 폼의 "방문 희망시간" select — 참고 사이트는 10:00~18:00 1시간 단위
  visitTimeOptions: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],

  signature: {
    headerGeomdan: {
      wordmarkLine1: 'THE SHARP',
      wordmarkLine2: '검단레이크파크',
      gnb: [
        { label: '핵심가치', targetId: 'story' },
        { label: '교통·입지', targetId: 'infrastructure' },
        { label: '평형안내', targetId: 'floorplans' },
        { label: 'E-모델하우스', targetId: 'emodelhouse' },
        { label: '커뮤니티', targetId: 'community' },
        { label: '오시는 길', targetId: 'location' },
      ],
      callLabel: '1811-4166',
    },

    heroGeomdan: {
      id: 'top',
      eyebrow: "GEOMDAN'S FIRST THE SHARP",
      titleLine1: '검단 첫 더샵,',
      titleAccent: '2,857세대',
      titleSuffix: ' 수변 브랜드타운',
      bgImageDesktop: { src: '/apt/the-sharp-geomdan-lakepark/media/brand-town.webp', srcJpg: '/apt/the-sharp-geomdan-lakepark/media/brand-town.jpg' },
      bgImageMobile: { src: '/apt/the-sharp-geomdan-lakepark/media/brand-town-m.webp' },
      bgAlt: '더샵 검단레이크파크 브랜드타운 단지 이미지',
      sealText: 'THE SHARP · GEOMDAN LAKEPARK · GRAND OPEN · ',
      sealCoreStrong: '민간분양',
      sealCoreRest: '분양가상한제 적용단지',
      note: '※ 일부 이미지와 영상은 AI 제작 자료이며 실제와 다를 수 있습니다.',
      mobileBar: {
        callLabel: '1811-4166',
        visitLabel: '방문예약',
      },
    },

    visitReservation: {
      id: 'visit-reservation',
      eyebrow: 'VISIT RESERVATION',
      titlePlain: '더샵을 만나는',
      titleAccent: '특별한 시간',
      leadLines: ['원하는 날짜와 시간을 선택해 방문을 신청하세요.', '담당자가 입력하신 연락처로 예약 일정을 확인해 드립니다.'],
      panelLabel: 'THE SHARP GEOMDAN LAKEPARK',
      panelTitle: '상담신청 및 방문예약',
      panelDesc: '원하는 날짜와 시간을 선택해 주세요.',
      privacySummary: '개인정보 수집·이용 및 처리 위탁에 관한 동의 (더보기)',
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 더샵 검단레이크파크 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 방문 희망일시
3. 개인정보의 처리 및 보유 기간 : 더샵 검단레이크파크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
      consentLabel: '개인정보 수집 및 이용에 동의합니다.',
      submitLabel: '신청하기',
    },

    overviewGeomdan: {
      id: 'overview',
      eyebrow: 'PROJECT SUMMARY',
      titlePlain: '두 개 블록으로 완성되는',
      titleAccent: '하나의 브랜드타운',
      desc: '22BL 1,454세대와 23BL 1,403세대. 더샵 검단레이크파크의 위치·규모·주차 정보를 정확한 숫자로 확인하세요.',
      aerialImage: { src: '/apt/the-sharp-geomdan-lakepark/media/complex-aerial.jpg', alt: '더샵 검단레이크파크 22BL·23BL 단지 조감도' },
      aerialBadge: '22BL · 23BL',
      facts: [
        { label: '대지위치', value: '인천광역시 검단구 마전동 산175-7번지 일원 (검단신도시)' },
        { label: '사업규모', value: '22BL·23BL / 지하 3층~지상 29층 / 26개동' },
        { label: '세대수', value: '22BL 1,454세대 · 23BL 1,403세대 / 총 2,857세대' },
        { label: '공급 타입', value: '전용 59㎡ 2개 타입 · 전용 84㎡ 3개 타입 (총 5개 타입)' },
        { label: '대지면적', value: '22BL 63,675.00㎡ · 23BL 61,410.00㎡' },
        { label: '연면적', value: '22BL 242,082.35㎡ · 23BL 228,380.25㎡' },
        { label: '건폐율', value: '22BL 28.67% · 23BL 23.87%' },
        { label: '용적률', value: '224.91%' },
        { label: '주차대수', value: '22BL 2,376대 (세대당 1.63대) · 23BL 2,151대 (세대당 1.53대)' },
        { label: '시행 / 시공', value: '한국자산신탁㈜ / ㈜포스코이앤씨 (브랜드 · 더샵)' },
        { label: '분양 방식', value: '분양가상한제 적용 단지' },
        { label: '견본주택', value: '인천광역시 검단구 원당동 796-5' },
      ],
    },

    story: {
      id: 'story',
      eyebrow: 'THE ONE DEFINING VALUE',
      titleLine1: '브랜드',
      titleLine2: '·규모·수변,',
      titleAccent: '세 가지 가치가 한곳에',
      desc: '검단 첫 번째 더샵이라는 상징성, 총 2,857세대의 대단지 규모, 나진포천과 중앙호수공원을 가까이 누리는 수변 입지가 하나의 브랜드타운으로 이어집니다.',
      numbers: [
        { value: 'FIRST', label: '검단 첫 번째 더샵' },
        { value: '2,857', label: '22BL·23BL 총 세대수' },
        { value: '26', label: '브랜드타운 전체 동수' },
      ],
      scenes: [
        {
          type: 'video',
          video: { src: '/apt/the-sharp-geomdan-lakepark/media/sec01.mp4', poster: '/apt/the-sharp-geomdan-lakepark/media/waterfront-detail.jpg' },
          ariaLabel: '더샵 검단레이크파크 수변의 여유를 표현한 공식 영상',
          tag: '01 · WATERFRONT',
          title: '매일 가까이 누리는 수변의 여유',
          desc: '나진포천 수변공원과 중앙호수공원을 가까이 둔 워터프런트 라이프',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark/media/complex-aerial.jpg', alt: '더샵 검단레이크파크 2,857세대 단지 조감도' },
          tag: '02 · BIG SCALE',
          title: '2,857세대가 만드는 하나의 도시',
          desc: '22BL과 23BL, 총 26개동으로 이어지는 빅스케일 브랜드타운',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark/media/community.jpg', alt: '더샵 검단레이크파크 올인원 커뮤니티 이미지' },
          tag: '03 · ALL-IN-ONE',
          title: '단지 안에서 완성되는 하루',
          desc: '운동·휴식·교육을 연결한 블록별 올인원 커뮤니티',
        },
      ],
      conversion: {
        eyebrow: '브랜드·규모·수변, 세 가지 가치가 만나는 단 하나의 자리',
        titleLine1: '더샵 검단레이크파크를',
        titleLine2: '직접 확인해 보세요',
        links: [
          { label: '방문예약', targetId: 'visit-reservation' },
          { label: '관심고객 등록', targetId: 'final-interest' },
        ],
      },
    },

    premiumDuo: {
      id: 'premium',
      eyebrow: 'PREMIUM LOCATION',
      titlePlain: '교통과 교육으로 완성한',
      titleAccent: '두 가지 입지 프리미엄',
      desc: '광역 교통망의 기대 가치와 단지 앞 교육환경을 핵심만 나누어 확인하세요.',
      cards: [
        {
          icon: 'map-pin',
          image: { src: '/apt/the-sharp-geomdan-lakepark/media/nature.jpg', alt: '교통 프리미엄 — 더블역 생활권' },
          kicker: 'TRAFFIC PREMIUM',
          title: '더블역 생활권',
          desc: '지하철 1·2호선 생활권과 인천2호선·서울5호선 연장 예정, GTX-D노선 계획으로 기대되는 광역 교통망',
        },
        {
          icon: 'graduation-cap',
          image: { src: '/apt/the-sharp-geomdan-lakepark/media/education.jpg', alt: '교육환경 — 도보통학 안심학세권' },
          kicker: 'SAFE SCHOOL ZONE',
          title: '도보통학 안심학세권',
          desc: '단지 앞 유치원·초·중교 예정 및 완정역 학원가 인접',
        },
      ],
    },

    infrastructure: {
      id: 'infrastructure',
      eyebrow: 'TRAFFIC & LOCATION',
      titlePlain: '서울로 통하는 교통,',
      titleAccent: '가까이 누리는 생활',
      desc: '공식 홈페이지가 안내하는 철도 계획과 공원·문화·행정 인프라를 예정·계획 상태까지 구분해 확인하세요.',
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark/media/official-location-map.jpg', alt: '더샵 검단레이크파크 교통망과 주변 생활 인프라 공식 입지 안내도' },
      mapCaption: '공식 입지 안내도 · 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
      items: [
        { num: '01', category: '교통', title: '더블역 생활권', desc: '검단 유일의 지하철 1·2호선 더블역 생활권으로 소개되며, 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획으로 안내됩니다.' },
        { num: '02', category: '공원·문화', title: '완성되어 가는 생활환경', desc: '대형 녹지공원 U공원과 워라밸파크(예정), 박물관·도서관(예정) 등 휴식과 문화 인프라를 가까이 누리는 입지입니다.' },
        { num: '03', category: '행정·생활', title: '검단의 중심 인프라', desc: '검단구청 신청사(예정), 검단경찰서(예정), 검단소방서·우체국 등 생활에 필요한 공공 인프라가 주변에 자리합니다.' },
      ],
      sourceNote: '※ 상기 내용과 이미지는 공식 홈페이지의 교통 프리미엄·입지환경 자료를 기준으로 구성했습니다. 인천2호선 및 서울5호선 연장은 예정, GTX-D 노선은 계획 단계이며 사업 내용과 일정은 변경될 수 있습니다.',
    },

    priceBand: {
      image: { src: '/apt/the-sharp-geomdan-lakepark/media/value.webp', srcJpg: '/apt/the-sharp-geomdan-lakepark/media/value.jpg', alt: '더샵 검단레이크파크 조경 및 단지 이미지' },
      eyebrow: 'PRICE CEILING SYSTEM',
      title: '분양가 상한제 적용단지',
      descLine1: '합리적인 가격으로 만나는 검단의 미래가치.',
      descLine2: '검단신도시 핵심 인프라와 더샵 브랜드타운의 프리미엄을 누릴 기회입니다.',
      ctaLabel: '상담 문의',
    },

    spaces: {
      id: 'spaces',
      eyebrow: 'LIVING SPACES',
      titlePlain: '생활의 품격을 높이는',
      titleAccent: '새로운 주거공간',
      desc: '라이프스타일에 맞춘 공간 특화와 수납 강화, 고급 마감재로 완성한 공간을 만나보세요.',
      cards: [
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/interior-59b.jpg', alt: '더샵 검단레이크파크 59B 견본주택 거실 인테리어' }, tag: '59B', title: '59B 견본주택 촬영 인테리어' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/interior-84a.jpg', alt: '더샵 검단레이크파크 84A 견본주택 거실 인테리어' }, tag: '84A', title: '84A 견본주택 촬영 인테리어' },
      ],
      disclaimer: '※ 상기 이미지는 견본주택 유니트를 촬영한 것으로 연출을 위한 가구와 집기류가 포함되어 있습니다. 계약 시 실제 제공 품목과 마감재를 반드시 확인하시기 바랍니다.',
    },

    smarthome: {
      id: 'smarthome',
      eyebrow: 'AIQ SMART HOME',
      titlePlain: '안전에서 안심까지,',
      titleAccent: '더샵의 스마트홈',
      desc: '포스코이앤씨 AiQ TECH를 기반으로 안전·편의·공기질을 관리하는 스마트홈 시스템입니다.',
      items: [
        { icon: 'shield-check', title: '더샵 특화지키미', desc: '안심존·스쿨존 모니터링, 화재·SOS 알림, 차량연동 보안, 엘리베이터·카메라 이상 AI 감지' },
        { icon: 'smartphone', title: '더샵 홈제어', desc: '스마트폰 공동현관 문 열림, 주차위치 확인 서비스' },
        { icon: 'wind', title: '더샵 클린에어시스템', desc: '세대 공기질을 관리해 건강한 실내 환경을 유지' },
      ],
      sourceNote: '※ AiQ 특화 시스템 중 일부 품목은 유상옵션이며, 스마트폰 공동현관 문 열림·주차위치 확인 서비스는 전용 앱 설치와 블루투스·위치정보 사용 동의가 필요합니다. 적용 품목과 사양은 견본주택에서 확인하시기 바랍니다. 자료 출처 · 공식 홈페이지.',
    },

    floorplans: {
      id: 'floorplans',
      eyebrow: 'UNIT PLAN',
      titlePlain: '라이프스타일에 맞춘',
      titleAccent: '5가지 주거 타입',
      desc: '전용 59㎡ 2개 타입과 전용 84㎡ 3개 타입으로 구성됩니다. 블록별 세대수와 확장형 평면도를 함께 확인하세요.',
      summary: [
        { targetId: 'type-59a', label: '59㎡A', countText: '총 707세대' },
        { targetId: 'type-59b', label: '59㎡B', countText: '총 630세대' },
        { targetId: 'type-84a', label: '84㎡A', countText: '총 869세대' },
        { targetId: 'type-84b', label: '84㎡B', countText: '총 336세대' },
        { targetId: 'type-84c', label: '84㎡C', countText: '총 315세대' },
      ],
      cards: [
        {
          id: 'type-59a',
          typeLabel: '59㎡A',
          totalCountText: '총 707세대',
          keymap: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/59a-keymap.png', alt: '더샵 검단레이크파크 59㎡A 타입 동별 배치 KEY MAP' },
          plan: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/59a-plan.jpg', alt: '더샵 검단레이크파크 59㎡A 확장형 평면도' },
          blocks: [
            { label: '22BL', countText: '354세대', exclusive: '59.9497㎡', supply: '80.7560㎡' },
            { label: '23BL', countText: '353세대', exclusive: '59.9497㎡', supply: '80.7322㎡' },
          ],
        },
        {
          id: 'type-59b',
          typeLabel: '59㎡B',
          totalCountText: '총 630세대',
          keymap: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/59b-keymap.png', alt: '더샵 검단레이크파크 59㎡B 타입 동별 배치 KEY MAP' },
          plan: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/59b-plan.jpg', alt: '더샵 검단레이크파크 59㎡B 확장형 평면도' },
          blocks: [
            { label: '22BL', countText: '326세대', exclusive: '59.8301㎡', supply: '81.0950㎡' },
            { label: '23BL', countText: '304세대', exclusive: '59.8301㎡', supply: '81.0713㎡' },
          ],
        },
        {
          id: 'type-84a',
          typeLabel: '84㎡A',
          totalCountText: '총 869세대',
          keymap: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84a-keymap.png', alt: '더샵 검단레이크파크 84㎡A 타입 동별 배치 KEY MAP' },
          plan: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84a-plan.jpg', alt: '더샵 검단레이크파크 84㎡A 확장형 평면도' },
          blocks: [
            { label: '22BL', countText: '441세대', exclusive: '84.5181㎡', supply: '111.7074㎡' },
            { label: '23BL', countText: '428세대', exclusive: '84.5181㎡', supply: '111.6738㎡' },
          ],
        },
        {
          id: 'type-84b',
          typeLabel: '84㎡B',
          totalCountText: '총 336세대',
          keymap: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84b-keymap.png', alt: '더샵 검단레이크파크 84㎡B 타입 동별 배치 KEY MAP' },
          plan: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84b-plan.jpg', alt: '더샵 검단레이크파크 84㎡B 확장형 평면도' },
          blocks: [
            { label: '22BL', countText: '177세대', exclusive: '84.0342㎡', supply: '112.2416㎡' },
            { label: '23BL', countText: '159세대', exclusive: '84.0342㎡', supply: '112.2083㎡' },
          ],
        },
        {
          id: 'type-84c',
          typeLabel: '84㎡C',
          totalCountText: '총 315세대',
          keymap: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84c-keymap.png', alt: '더샵 검단레이크파크 84㎡C 타입 동별 배치 KEY MAP' },
          plan: { src: '/apt/the-sharp-geomdan-lakepark/floorplans/84c-plan.jpg', alt: '더샵 검단레이크파크 84㎡C 확장형 평면도' },
          blocks: [
            { label: '22BL', countText: '156세대', exclusive: '84.1796㎡', supply: '111.1017㎡' },
            { label: '23BL', countText: '159세대', exclusive: '84.1796㎡', supply: '111.0682㎡' },
          ],
        },
      ],
      note: '※ 상기 평면도는 소비자의 이해를 돕기 위한 확장형 이미지로 실제 시공 시 차이가 있을 수 있습니다. 면적은 공부정리 과정에서 증감될 수 있으므로 계약 전 입주자 모집공고와 견본주택에서 반드시 확인하시기 바랍니다.',
    },

    siteplan: {
      id: 'siteplan',
      eyebrow: 'COMPLEX & UNIT LAYOUT',
      titlePlain: '한눈에 보는',
      titleAccent: '단지배치도와 동호수',
      desc: '워커블 커뮤니티 조경이 이어지는 단지 배치와 22BL·23BL 동호수 배치도를 확인하세요.',
      mainImage: { src: '/apt/the-sharp-geomdan-lakepark/media/site-plan.jpg', alt: '더샵 검단레이크파크 단지배치도' },
      mainLabel: '단지배치도',
      donghoCards: [
        { label: '22BL', image: { src: '/apt/the-sharp-geomdan-lakepark/media/dongho-22bl.jpg', alt: '더샵 검단레이크파크 22BL 동호수배치도' } },
        { label: '23BL', image: { src: '/apt/the-sharp-geomdan-lakepark/media/dongho-23bl.jpg', alt: '더샵 검단레이크파크 23BL 동호수배치도' } },
      ],
      note: '※ 단지배치도 등 이미지는 소비자의 이해를 돕기 위해 제작된 CG로 실제와 차이가 있을 수 있으며, 단지 외부의 계획사항은 향후 관계기관의 인·허가에 따라 변경·지연·취소될 수 있습니다. 동·호수, 향, 세대 위치 등 자세한 사항은 입주자 모집공고 전문과 견본주택에서 반드시 확인하시기 바랍니다. 자료 출처 · 공식 홈페이지.',
    },

    emodelhouse: {
      id: 'emodelhouse',
      eyebrow: 'E-MODEL HOUSE',
      titlePlain: '직접 걷는 것처럼,',
      titleAccent: 'VR 모델하우스',
      desc: '전용 59㎡B와 84㎡A 유니트를 VR로 둘러보세요. 공식 홈페이지의 VR 투어를 그대로 연결했습니다.',
      tabs: [
        { label: '전용 59㎡B', image: { src: '/apt/the-sharp-geomdan-lakepark/media/interior-59b.jpg', alt: '더샵 검단레이크파크 59B 견본주택 인테리어' } },
        { label: '전용 84㎡A', image: { src: '/apt/the-sharp-geomdan-lakepark/media/interior-84a.jpg', alt: '더샵 검단레이크파크 84A 견본주택 인테리어' } },
      ],
      note: '※ VR은 견본주택 유니트를 촬영한 것으로 연출용 가구·집기가 포함되어 있으며, 마감재의 치수와 색상은 일부 변경될 수 있습니다. 계약 전 견본주택과 입주자 모집공고에서 반드시 확인하시기 바랍니다. VR 자료 출처 · 공식 홈페이지.',
    },

    landscapeGeomdan: {
      id: 'landscape',
      eyebrow: 'LANDSCAPE',
      titlePlain: '검단의 자연과 어우러지는',
      titleAccent: '네이처 가든',
      desc: '22BL·23BL 지상에 조성되는 더샵 조경입니다. 잔디광장과 감성 정원, 놀이터, 사계절 테마 가로수길이 이어집니다.',
      heroImage: { src: '/apt/the-sharp-geomdan-lakepark/media/nature-garden.jpg', alt: '더샵 검단레이크파크 네이처 가든 조경 조감도' },
      heroCaption: '더샵 조경 · Nature Garden 조감 CG',
      cards: [
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/garden-lawn.jpg', alt: '더샵 검단레이크파크 잔디광장 · 네이처테라스' }, title: '잔디광장 · 네이처테라스', desc: '입주민의 휴식과 소통을 담은 탁 트인 초록 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/garden-flower.jpg', alt: '더샵 검단레이크파크 푸른꽃 정원 · 블루엣가든' }, title: '푸른꽃 정원 · 블루엣가든', desc: '푸른 색감의 청량감이 꽃피는 더샵 감성 정원' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/garden-playground.jpg', alt: '더샵 검단레이크파크 어린이 놀이터' }, title: '어린이 놀이터', desc: '아이들의 하루가 더 특별해지는 놀이 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark/media/garden-street.jpg', alt: '더샵 검단레이크파크 테마 가로수길' }, title: '테마 가로수길', desc: '왕벚·이팝·느티·단풍나무길로 봄꽃·여름녹음·가을단풍 등 사계절의 변화를 누리는 산책로' },
      ],
      sourceNote: '※ 상기 조경 이미지는 소비자의 이해를 돕기 위해 제작된 CG로 실제와 차이가 있을 수 있으며, 수목의 종류·규격·위치와 시설물은 인·허가 및 시공 과정에서 변경될 수 있습니다. 자세한 사항은 입주자 모집공고와 견본주택에서 확인하시기 바랍니다. 자료 출처 · 공식 홈페이지.',
    },

    community: {
      id: 'community',
      eyebrow: 'ALL-IN-ONE COMMUNITY',
      titlePlain: '나진포천 조망과 함께,',
      titleAccent: '일상을 잇는 커뮤니티',
      desc: '운동·휴식·교육을 단지 안에서 누릴 수 있도록 계획된 22BL·23BL 커뮤니티를 공식 배치도로 확인하세요.',
      blocks: [
        {
          label: '22BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark/media/community-22bl.jpg', alt: '더샵 검단레이크파크 22BL 커뮤니티 공식 시설 배치도' },
          groups: [
            { name: 'SPORTS', text: '피트니스 · GX룸 · 필라테스 · 사우나 · 실내골프연습장 · 스크린골프룸 · 퍼팅그린 · 약 122평 실내체육관' },
            { name: 'LIFESTYLE', text: '게스트하우스 · 다이닝라운지 · 그린카페 라운지 · 헬스케어 라운지' },
            { name: 'EDUCATION', text: '프라이빗스터디 · 에듀&비즈니스 라운지 · 키즈존 · 패밀리 라이브러리' },
          ],
        },
        {
          label: '23BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark/media/community-23bl.jpg', alt: '더샵 검단레이크파크 23BL 커뮤니티 공식 시설 배치도' },
          groups: [
            { name: 'SPORTS', text: '피트니스 · GX룸 · 필라테스 · 사우나 · 실내골프연습장 · 스크린골프룸 · 퍼팅그린 · 약 123평 실내체육관' },
            { name: 'LIFESTYLE', text: '게스트하우스 · 다이닝라운지 · 그린카페 라운지 · 헬스케어 라운지 · 미팅룸' },
            { name: 'EDUCATION', text: '프라이빗스터디 · 에듀&비즈니스 라운지 · 키즈존 · 패밀리 라이브러리' },
          ],
        },
      ],
      note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 CG 및 계획도입니다. 커뮤니티 시설의 명칭, 위치, 규모와 운영 방식은 인허가 및 실제 시공 과정에서 변경될 수 있으므로 계약 전 공식 공급자료를 확인하시기 바랍니다.',
    },

    notice: {
      eyebrow: 'OFFICIAL DOCUMENTS',
      titlePlain: '입주자 ',
      titleAccent: '모집공고',
      desc: '블록별 공식 입주자 모집공고를 확인하세요. 청약과 계약 전 공급금액, 자격, 일정 및 유의사항을 반드시 원문에서 확인해야 합니다.',
      links: [
        {
          label: '22BL',
          href: 'https://xn--c79an5jhjs4nmongpjhypa161d.kr/resources/pdf/%EC%B5%9C%EC%A2%85%20(22BL)%EC%9E%85%EC%A3%BC%EC%9E%90%EB%AA%A8%EC%A7%91%EA%B3%B5%EA%B3%A0_%EB%8D%94%EC%83%B5%20%EA%B2%80%EB%8B%A8%EB%A0%88%EC%9D%B4%ED%81%AC%ED%8C%8C%ED%81%AC.pdf',
          title: '입주자 모집공고',
          sub: '공식 PDF 원문 보기',
        },
        {
          label: '23BL',
          href: 'https://xn--c79an5jhjs4nmongpjhypa161d.kr/resources/pdf/[%EC%A0%84%EB%AC%B8]%20%EB%8D%94%EC%83%B5%20%EA%B2%80%EB%8B%A8%EB%A0%88%EC%9D%B4%ED%81%AC%ED%8C%8C%ED%81%AC_23BL%20%EB%AA%A8%EC%A7%91%EA%B3%B5%EA%B3%A0%20v3.pdf',
          title: '입주자 모집공고',
          sub: '공식 PDF 원문 보기',
        },
      ],
    },

    faq: {
      eyebrow: 'QUESTIONS & ANSWERS',
      titlePlain: '자주 묻는 ',
      titleAccent: '질문',
      desc: '더샵 검단레이크파크의 위치, 규모, 모집공고와 고객 등록 방법을 한눈에 확인하세요.',
      items: [
        { q: '더샵 검단레이크파크는 어디에 있나요?', a: '더샵 검단레이크파크 현장은 인천광역시 검단구 마전동 산175-7번지 일원(검단신도시)입니다. 견본주택은 인천광역시 검단구 원당동 796-5에 있습니다.' },
        { q: '총 세대수와 단지 규모는 어떻게 되나요?', a: '총 2,857세대입니다. 22BL 1,454세대와 23BL 1,403세대로 구성되며, 지하 3층부터 지상 29층까지 26개동으로 계획되어 있습니다.' },
        { q: '더샵 검단레이크파크의 시행사와 시공사는 어디인가요?', a: '시행은 한국자산신탁㈜, 시공은 ㈜포스코이앤씨입니다. 아파트 브랜드 "더샵(THE SHARP)"은 포스코이앤씨의 주거 브랜드입니다.' },
        { q: '분양하는 평형과 타입은 무엇인가요?', a: '전용면적 기준 59㎡와 84㎡, 총 5개 타입입니다. 전용 59㎡는 59㎡A(707세대)·59㎡B(630세대), 전용 84㎡는 84㎡A(869세대)·84㎡B(336세대)·84㎡C(315세대)로 나뉘며, 타입별 확장형 평면도와 블록별 세대수를 홈페이지 UNIT PLAN 섹션에서 확인할 수 있습니다.' },
        { q: '전용 84㎡ 타입은 어떻게 구분되나요?', a: '전용 84㎡는 84㎡A·84㎡B·84㎡C 세 가지 타입으로 나뉘며 세대수는 각각 869세대, 336세대, 315세대입니다. 타입별 평면 구성과 공급면적은 홈페이지의 확장형 평면도에서 확인할 수 있습니다.' },
        { q: 'E-모델하우스(VR)는 어디에서 볼 수 있나요?', a: 'E-MODEL HOUSE 섹션에서 전용 59㎡B와 84㎡A 유니트를 VR로 둘러볼 수 있습니다. 공식 홈페이지의 VR 투어를 그대로 연결한 것으로, 연출용 가구·집기가 포함되어 있어 계약 전 견본주택에서 실제 마감재를 확인해야 합니다.' },
        { q: '단지배치도와 동호수배치도는 어디에서 볼 수 있나요?', a: 'COMPLEX & UNIT LAYOUT 섹션에서 단지배치도와 22BL·23BL 동호수배치도를 확인할 수 있습니다. 공식 홈페이지의 배치도 이미지를 연결한 것으로, 동·호수와 향 등 세부 사항은 입주자 모집공고 전문에서 확인해야 합니다.' },
        { q: '주차 공간은 얼마나 마련되나요?', a: '공식 사업개요 기준 22BL은 2,376대(세대당 1.63대), 23BL은 2,151대(세대당 1.53대)입니다.' },
        { q: '분양가상한제 적용 단지라는 것은 무슨 의미인가요?', a: '분양가상한제는 택지비와 건축비 등을 기준으로 분양가의 상한을 정하는 제도입니다. 더샵 검단레이크파크는 분양가상한제 적용 단지로 공식 안내되며, 실제 공급금액과 조건은 입주자 모집공고 원문에서 확인해야 합니다.' },
        { q: '"검단 첫 더샵"이라는 표현은 무슨 뜻인가요?', a: '공식 홈페이지가 이 단지를 검단 지역에 처음 공급되는 더샵 브랜드 아파트로 소개하는 표현입니다(GEOMDAN’S FIRST THE SHARP).' },
        { q: '교통 여건은 어떻게 안내되어 있나요?', a: '공식 홈페이지는 지하철 1·2호선 더블역 생활권을 핵심으로 안내하며, 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획 단계로 소개합니다. 예정·계획 사업의 내용과 일정은 관계기관 계획에 따라 변경될 수 있습니다.' },
        { q: '주변 자연환경의 특징은 무엇인가요?', a: '나진포천 수변공원과 중앙호수공원을 가까이 둔 수변 입지가 핵심입니다. 공식 안내 자료는 만수산 등 주변 자연환경도 입지 특징으로 소개합니다.' },
        { q: '교육환경은 어떻게 안내되어 있나요?', a: '공식 안내 자료에 따르면 단지 앞 유치원·초등학교·중학교 예정 부지와 완정역 학원가 인접성이 주요 교육환경으로 소개됩니다. 학교 설립 일정은 관계기관 계획에 따라 달라질 수 있습니다.' },
        { q: '커뮤니티에는 어떤 시설이 계획되어 있나요?', a: '22BL·23BL에 피트니스, GX룸, 필라테스, 사우나, 실내골프연습장·스크린골프룸·퍼팅그린, 실내체육관, 게스트하우스, 다이닝·카페 라운지, 헬스케어 라운지, 키즈존, 패밀리 라이브러리, 프라이빗스터디, 에듀&비즈니스 라운지 등이 계획되어 있습니다. 블록별 위치와 구성은 홈페이지의 공식 커뮤니티 배치도에서 확인할 수 있습니다.' },
        { q: 'AiQ 스마트홈 시스템은 무엇인가요?', a: '포스코이앤씨의 AiQ TECH를 기반으로 한 스마트홈 시스템입니다. 안심존·스쿨존 모니터링과 화재·SOS 알림 등 "더샵 특화지키미", 스마트폰 공동현관 문 열림·주차위치 확인 "더샵 홈제어", 세대 공기질을 관리하는 "더샵 클린에어시스템"으로 구성되며, 일부 품목은 유상옵션입니다.' },
        { q: '조경(네이처 가든)은 어떻게 계획되어 있나요?', a: '더샵 네이처 가든을 주제로 잔디광장(네이처테라스), 푸른꽃 정원(블루엣가든), 어린이 놀이터, 왕벚·이팝·느티·단풍나무길로 이어지는 사계절 테마 가로수길 등이 22BL·23BL 지상에 계획되어 있습니다. 수목의 종류·규격·위치는 인·허가와 시공 과정에서 변경될 수 있습니다.' },
        { q: '입주자 모집공고는 어디에서 확인할 수 있나요?', a: '이 페이지의 모집공고 섹션에서 22BL과 23BL의 공식 입주자 모집공고 PDF 원문을 각각 확인할 수 있습니다. 청약 자격, 공급금액, 일정 등은 계약 전 반드시 최신 공식 문서에서 확인하세요.' },
        { q: '지금도 상담이나 방문이 가능한가요?', a: '가능합니다. 이 페이지 하단의 방문예약에서 희망 날짜·시간을 신청하거나 관심고객 등록을 남기면 담당자가 입력하신 연락처로 안내해 드립니다. 상담 대표번호는 1811-4166이며 방문 상담은 10:00~18:00에 1시간 단위로 예약할 수 있습니다.' },
        { q: '방문예약과 관심고객 등록은 어떻게 하나요?', a: '방문예약은 이름·연락처·희망 날짜·희망 시간을 입력하고 개인정보 수집·이용에 동의하면 신청됩니다. 관심고객 등록은 이름과 연락처만 입력하면 됩니다. 두 가지 모두 페이지 하단 버튼에서 진행할 수 있습니다.' },
      ],
    },

    locationGeomdan: {
      id: 'location',
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark/media/location-map.jpg', alt: '더샵 검단레이크파크 현장과 견본주택 위치 안내 지도' },
      eyebrow: 'LOCATION',
      title: '더샵이 선택한 자리',
      site: { label: '현장', value: '인천광역시 검단구 마전동 산175-7번지 일원' },
      model: { label: '견본주택', value: '인천광역시 검단구 원당동 796-5' },
      mapLinks: [
        { label: '네이버지도', href: 'https://naver.me/F5sCqFrg' },
        { label: '카카오맵', href: 'https://kko.to/7HRoGtoroM' },
      ],
    },

    finalInterest: {
      id: 'final-interest',
      eyebrow: 'CUSTOMER REGISTRATION',
      titlePlain: '검단의 새로운 기준을',
      titleAccent: '가장 먼저 만나보세요',
      desc: '더샵 검단레이크파크의 새로운 소식과 분양 정보를 빠르게 안내해 드립니다.',
      facts: ['검단 첫 더샵', '총 2,857세대', '수변 브랜드타운'],
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark/media/brand-town.jpg', alt: '더샵 검단레이크파크 브랜드타운' },
      panelLabel: 'THE SHARP GEOMDAN LAKEPARK',
      panelTitle: '상담신청 및 방문예약',
      panelDesc: '원하는 날짜와 시간을 선택해 주세요.',
      privacySummary: '개인정보 수집·이용 및 처리 위탁에 관한 동의 (더보기)',
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 더샵 검단레이크파크 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 방문 희망일시
3. 개인정보의 처리 및 보유 기간 : 더샵 검단레이크파크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
      consentLabel: '개인정보 수집 및 이용에 동의합니다.',
      submitLabel: '신청하기',
    },

    footerGeomdan: {
      brandLine1: 'THE SHARP',
      brandLine2: '검단레이크파크',
      metaLines: [
        { label: '시행', value: '한국자산신탁(주)' },
        { label: '시공', value: '(주)포스코이앤씨' },
        { label: '분양안내', value: '1811-4166' },
        { label: '자료 출처', value: '공식 홈페이지' },
      ],
      operator: {
        title: '홈페이지 운영·관리 대행사',
        lines: [
          { label: '담당회사', value: '주식회사 더블루파트너스' },
          { label: '사업자 등록번호', value: '789-81-03093' },
          { label: '이메일', value: 'addup@addup.kr' },
          { label: '전화번호', value: '1666-1755' },
        ],
      },
      bottomNote: '예정·계획 사업은 관계기관 계획에 따라 변경될 수 있으며, 정확한 계약 조건과 최신 일정은 입주자 모집공고 원문을 확인해 주세요.',
    },
  },
}

export default config
