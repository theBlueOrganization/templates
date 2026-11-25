// 이안 강서 — 서울특별시 강서구 공항동 18-26번지 일원, 장기일반민간임대아파트 총 214세대(예정), 전용 44A·59A·59C·84A.
// 지하 2층 ~ 지상 14층, 시행 ㈜예도산업개발 · 시공예정 대우산업개발 · 자금관리 ㈜무궁화신탁 · 임대보증금 보증 HUG.
// 출처: 2026-11-25 사용자 제공 「이안강서교육자료(2026.10).pdf」(사업개요·셀링포인트·입지·개발호재·장기일반민간임대 Q&A)
//   + Downloads\20250515_185554_63 홍보물 — 「0306 강서 전단 최종」(GRAND OPEN·Special Point 5·올세권 지역도·無조건 BENEFIT 8),
//   「0309 강서 3단」(로고·홍보관 약도), 「0318 강서 공급안내」(사업개요·타입 평면·동호수 배치도·커뮤니티), CG(석경·야경·주경·조감도·투시도),
//   항공광역도·단지배치도 합본, 견본주택 세대 사진(20250515_185554_55~68). 구성은 참고 사이트(centergallery.co.kr) 메뉴 순서를 따름.
//   교육자료의 내부용 시세 비교·납부일정 금액(공급안내와 계약금 분할이 다름)은 노출하지 않고 상담으로 안내.
// 대표번호 1866-2462(홍보관 현수막 번호), 상담 접수 알림 010-9082-8807 — 2026-11-25 사용자 전달값.
const config = {
  slug: 'iaan-gangseo',
  // 이안강서.addupapt.kr → /apt/iaan-gangseo (middleware.js)
  subdomain: '이안강서',
  projectName: '이안 강서',
  // 공식 사이트(이안강서.net) 표기 — 단지명 '이안강서(민간임대아파트)', 슬로건 '지금의 선택이 내일의 자산이 되는 곳'
  metaTitle: '이안강서(민간임대아파트)',
  shareTitle: '이안강서(민간임대아파트) - 지금의 선택이 내일의 자산이 되는 곳',
  telNumber: '1866-2462',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/iaan-gangseo/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01090828807'],
  sheetId: '',
  sheetTab: '이안강서',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

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
    // 공식 홈페이지형 일반 스크롤 화면(components/sections/SignatureLuxeOfficial, page.jsx의 sig.luxe 분기).
    // 이 값이 있으면 vipForm.privacyText · footer.companyLines/disclaimers/agencySlogan만 함께 쓰임
    luxe: {
      // 이안 브랜드 컬러(홍보물 기준) — 딥틸 #0f434f · 라임그린 #8ab243
      palette: {
        '--navy': '#0f434f',
        '--navy2': '#124d5a',
        '--steel': '#1d6170',
        '--sky': '#8ab243',
        '--skyLight': '#bcdb80',
        '--ice': '#eef5f0',
        '--mist': '#f6faf7',
        '--champ': '#a6c95f',
        '--deep': '#0a2f38',
        '--deep-a': '#165563',
        '--deep-b': '#0c3640',
        '--grad-a': '#23707e',
        '--grad-c': '#0f434f',
        '--deep-rgb': '10, 47, 56',
        '--navy-rgb': '15, 67, 79',
        '--steel-rgb': '29, 97, 112',
        '--steel2-rgb': '22, 85, 99',
        '--sky-rgb': '138, 178, 67',
        '--skyLight-rgb': '188, 219, 128',
        '--ink-rgb': '5, 26, 31',
        '--pale-rgb': '226, 238, 222',
        '--tint-a': '#eef5ef',
        '--tint-b': '#dfece2',
        '--tint-c': '#f8fbf8',
        '--tint-d': '#f3f6f3',
        '--tint-e': '#e9e9e9',
      },
      logo: {
        light: { src: '/apt/iaan-gangseo/logo-white.png', alt: '이안 강서', width: 665, height: 139 },
        dark: { src: '/apt/iaan-gangseo/logo-dark.png', alt: '이안 강서', width: 665, height: 139 },
      },
      nav: [
        { id: 'overview', label: '사업개요' },
        { id: 'location', label: '입지환경' },
        { id: 'lifestyle', label: '임대혜택' },
        { id: 'premium', label: '프리미엄' },
        { id: 'complex', label: '단지안내' },
        { id: 'unit', label: '세대안내' },
        { id: 'community', label: '커뮤니티' },
        { id: 'contact', label: '관심고객등록' },
      ],
      // 진입 팝업 — 전단 앞면(GRAND OPEN, 하단 정보띠만 잘라냄)
      popup: {
        delayMs: 1200,
        formAfterClose: false,
        closeIcon: true,
        image: {
          src: '/apt/iaan-gangseo/popup.webp',
          alt: 'GRAND OPEN 이안 강서 — 여의도 20분·강남 30분! 오늘의 속도가 내일의 자산이 되는 곳. Special Point 1 사통팔달 역세권, 2 마곡지구 퍼펙트 인프라, 3 김포공항 혁신지구, 4 방화·마곡 미래 비전, 5 안심할 수 있는 학세권·의료',
          width: 900,
          height: 1085,
        },
      },
      // 3단 리플렛 GRAND OPEN 면 카피
      hero: {
        bg: { src: '/apt/iaan-gangseo/hero.webp', alt: '이안 강서 석양 투시도' },
        bgMobile: { src: '/apt/iaan-gangseo/hero-m.webp', alt: '이안 강서 석양 투시도' },
        // 배경 자동 전환(5.5초) — 석양 투시도 → 파란 하늘 투시도(공급안내 표지 배경, 글자 없는 원본) → 야경 조감도. 모바일은 장면별 세로 이미지
        slides: [
          { src: '/apt/iaan-gangseo/hero.webp', srcMobile: '/apt/iaan-gangseo/hero-m-v2.webp', alt: '이안 강서 석양 투시도' },
          { src: '/apt/iaan-gangseo/hero-sky.webp', srcMobile: '/apt/iaan-gangseo/hero-sky-m-v2.webp', alt: '이안 강서 투시도' },
          { src: '/apt/iaan-gangseo/hero-2.webp', srcMobile: '/apt/iaan-gangseo/hero-2-m.webp', alt: '이안 강서 야경 조감도', mobileDim: 0.3 },
        ],
        slideMs: 5500,
        // 모바일 히어로 높이 = 화면 높이 - 하단 고정바(전화상담·방문예약)
        mobileFitBar: true,
        eyebrow: 'IAAN GANGSEO · 10 YEARS RENTAL',
        titleLight: '여의도 20분 · 강남 30분!',
        titleStrong: '지금의 선택이 내일의 자산이 되는 곳',
        name: '이안강서(민간임대아파트)',
        badge: '5·9호선 더블역세권 · 10년 장기 민간임대',
        ringText: 'IAAN GANGSEO · GRAND OPEN · ',
        circleInfo: ['총 214세대', '10년 임대'],
      },
      concept: {
        image: { src: '/apt/iaan-gangseo/logo-dark.png', alt: '이안 강서 iaan', width: 665, height: 139 },
        title: '김포공항 생활권에서 서울을 누리다',
        acronym: [['S', 'UBWAY 5·9'], ['M', 'AGOK LIFE'], ['R', 'ENTAL 10 YEARS']],
        desc: '5호선 송정역 · 9호선 공항시장역 도보권,\n마곡지구 생활권을 곁에 둔 강서 신주거타운.\n청약통장 없이 10년을 내 집처럼 살아보세요.',
      },
      // 공급안내 사업개요 + 교육자료 사업개요
      overview: {
        bg: { src: '/apt/iaan-gangseo/overview-bg.webp' },
        small: '마곡지구와 김포공항역 사이,\n강서 신주거타운의 완성',
        lead: '공항동 역세권\n장기일반민간임대아파트',
        word: 'IAAN',
        catch: '청약통장 · 주택 수 · 소득 조건 없이\n만 19세 이상이면 누구나',
        stats: [
          { label: '공급규모', value: '214', unit: '세대' },
          { label: '전용면적', value: '44~84', unit: '㎡' },
          { label: '건축규모', pre: '지상', value: '14', unit: '층' },
          { label: '임대기간', value: '10', unit: '년' },
        ],
        specs: [
          { label: '단지명', value: '이안 강서' },
          { label: '사업명', value: '공항동 역세권 민간임대주택아파트 개발사업' },
          { label: '대지위치', value: '서울특별시 강서구 공항동 18-26번지 일원' },
          { label: '건축규모', value: '지하 2층 ~ 지상 14층' },
          { label: '공급규모', value: '총 214세대(예정)\n44㎡A 22세대 · 59㎡A 101세대 · 59㎡C 53세대 · 84㎡A 38세대' },
          { label: '사업면적', value: '8,166.00㎡' },
          { label: '연면적', value: '29,885.21㎡' },
          { label: '주차대수', value: '278대 계획 (세대당 약 1.3대)' },
          { label: '공급방식', value: '장기일반민간임대 (10년 임대 후 분양전환)' },
          { label: '사업관계자', value: '시행 ㈜예도산업개발 · 시공예정 대우산업개발\n자금관리 ㈜무궁화신탁 · 임대보증금 보증 HUG' },
        ],
        notice: '※ 상기 사업개요의 수치는 소비자의 이해를 돕기 위한 것으로 인·허가 및 사업 진행 과정에서 변경될 수 있으니 계약 전 반드시 확인하시기 바랍니다.',
      },
      // 전단 '역세권부터 학세권까지 모두 갖춘 올세권 프리미엄!' + 4개 포인트
      location: {
        band: { src: '/apt/iaan-gangseo/location-band.webp' },
        bandTop: 'GONGHANG-DONG · GANGSEO · SEOUL',
        bandWord: 'ALL-IN-ONE',
        eyebrow: 'LOCATION',
        title: '역세권부터 학세권까지\n모두 갖춘 올세권 프리미엄',
        desc: '마곡지구와 김포공항역 사이,\n교통 · 교육 · 생활 · 미래가치를 모두 갖춘 자리',
        points: [
          { num: '01', category: 'TRAFFIC', title: '사통팔달 편리한 교통', desc: '5호선 송정역 · 9호선 공항시장역 더블역세권, 김포공항역(공항철도 · 서해선 · 김포골드라인) 1정거장. GTX-F(예정) 인접, 올림픽대로 · 공항대로까지 빠르게' },
          { num: '02', category: 'VISION', title: '방화 · 마곡지구의 미래가치', desc: '방화 뉴타운, 마곡 MICE 복합단지 조성 등 미래가치를 결정지을 방화 · 마곡지구 파급효과' },
          { num: '03', category: 'VALUE', title: '살기 좋은 핵심 입지', desc: '송정초 · 공항중 등 도보통학과 이대서울병원의 응급의료 접근성' },
          { num: '04', category: 'INFRA', title: '편리한 한걸음 인프라', desc: '김포공항 롯데몰, 이마트 트레이더스, NC백화점 등 다양한 생활편의시설을 갖춘 주거지역' },
        ],
        map: {
          src: '/apt/iaan-gangseo/location-map-v2.webp',
          alt: '이안 강서 지역도 — 5호선 송정역, 9호선 공항시장역, 김포공항역(공항철도·서해선·김포골드라인), 마곡나루역, 마곡지구, 방화지구, 롯데몰 김포공항점, 이마트 트레이더스. GTX-F 주요 노선 계획: 덕소·의정부·김포공항·수원·정자·교산',
          width: 1800,
          height: 1253,
        },
        note: '※ 지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 개발 및 교통계획(GTX-F 등)은 관계기관 사정에 따라 변경·취소될 수 있습니다. 학교 배정은 해당 교육청의 결정사항입니다.',
      },
      // 전단 '無조건 BENEFIT 8'
      lifestyle: {
        bg: { src: '/apt/iaan-gangseo/life-bg-v2.webp' },
        kicker: '장기일반민간임대주택 프리미엄',
        title: '無조건\nBENEFIT 8',
        visual: { src: '/apt/iaan-gangseo/life-visual.webp', alt: '이안 강서 견본주택 거실 · 주방', width: 900, height: 560 },
        eyebrow: 'RENTAL BENEFIT',
        items: [
          { num: '01', tag: 'NO SUBSCRIPTION', title: '청약제한 無', desc: '만 19세 이상이면 누구나, 청약통장 필요 없음' },
          { num: '02', tag: 'NO QUALIFICATION', title: '자격조건 無', desc: '주택 수, 소득 등 조건 없이' },
          { num: '03', tag: 'NO TAX', title: '세금부담 無', desc: '임대 기간 중 취득세 · 재산세 등 걱정 없이' },
          { num: '04', tag: '10 YEARS', title: '이사걱정 無', desc: '10년 동안 내 집처럼 거주' },
          { num: '05', tag: 'FREE TRANSFER', title: '전매제한 無', desc: '자유로운 양도 및 양수' },
          { num: '06', tag: 'LOW COST', title: '자금부담 無', desc: '최소 자금으로 내 집 마련' },
          { num: '07', tag: 'HUG GUARANTEE', title: '사고걱정 無', desc: '주택도시보증공사(HUG) 보증보험으로 임대보증금 안전' },
          { num: '08', tag: 'FIXED DEPOSIT', title: '전세상승 無', desc: '최초 전세가로 10년 동안' },
        ],
        note: '10년 임대 후 사업승인 시 확정된 분양가로 분양전환을 선택할 수 있습니다. 타입별 임대보증금 · 납부 일정은 상담 시 자세히 안내해 드립니다.',
      },
      // 리플렛 Special Point 5 + 장기일반민간임대
      premium: {
        headBg: { src: '/apt/iaan-gangseo/night.webp' },
        headTitle: 'IAAN GANGSEO\nPREMIUM',
        headSub: '오늘의 속도가 내일의 자산이 되는 여섯 가지 이유',
        introTitle: '여의도 20분 · 강남 30분,\n강서를 대표할 신주거타운의 마지막 퍼즐',
        introLines: ['역세권 · 직주근접 · 학세권 · 미래가치에 10년 장기임대의 안정까지 더했습니다.'],
        cards: [
          { num: '01', image: '/apt/iaan-gangseo/premium-01.webp', alt: '이안 강서 항공 광역도 — 공항시장역, 송정역, 송정초등학교, 공항중학교, 강서구청 신청사, 이대서울병원', en: 'SUBWAY', title: '사통팔달 역세권', desc: '송정역(5호선) · 공항시장역(9호선) 도보권 더블역세권, 펜타 역세권 김포공항역까지 1정거장' },
          { num: '02', image: '/apt/iaan-gangseo/premium-02-v2.webp', alt: '마곡지구 업무지구 고층 빌딩 이미지', en: 'MAGOK INFRA', title: '마곡지구 퍼펙트 인프라', desc: 'LG사이언스파크 등 기업체 약 200여 개가 모인 마곡지구 생활권, 직주근접 수요 풍부' },
          { num: '03', image: '/apt/iaan-gangseo/premium-03-v2.webp', alt: '김포공항 라운지와 이륙하는 항공기 이미지', en: 'AIRPORT VISION', title: '김포공항 혁신지구', desc: '김포공항 일대 도시재생혁신지구 지정, 모빌리티 첨단산업 · 국제비즈니스 거점 조성 계획' },
          { num: '04', image: '/apt/iaan-gangseo/premium-04.webp', alt: '이안 강서 야간 조감도', en: 'FUTURE VALUE', title: '방화 · 마곡 미래 비전', desc: '방화 재정비촉진구역 등 약 6천 세대 정비사업, 마곡지구와 연계된 신주거타운으로 탈바꿈' },
          { num: '05', image: '/apt/iaan-gangseo/premium-05-v2.webp', alt: '등교하는 아이들 이미지', en: 'EDUCATION · CARE', title: '안심할 수 있는 학세권 · 의료', desc: '송정초 · 공항중 도보통학, 반경 1km 내 공항고, 이대서울병원 응급의료 접근성' },
          { num: '06', image: '/apt/iaan-gangseo/premium-06.webp', alt: '이안 강서 견본주택 주방 · 식당', en: '10 YEARS RENTAL', title: '10년 살아보고 내 집으로', desc: '중 · 소형 남향 위주 설계, 10년 임대 후 확정 분양가로 분양전환 선택' },
        ],
        note: '※ 상기 이미지(이미지컷 포함)는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 개발계획은 관계기관 사정에 따라 변경될 수 있습니다.',
      },
      complex: {
        eyebrow: 'COMPLEX',
        title: '단지안내',
        desc: '총 214세대(예정) · 44㎡A / 59㎡A / 59㎡C / 84㎡A',
        tabs: [
          { label: '단지배치도', image: { src: '/apt/iaan-gangseo/complex-siteplan.webp', width: 2000, height: 1413, alt: '이안 강서 단지배치도' } },
          { label: '동호수 배치도', image: { src: '/apt/iaan-gangseo/complex-dongho.webp', width: 1400, height: 2078, alt: '이안 강서 동호수 배치도 — 101동 · 102동 · 103동 · 104동, 타입별 모집세대(44㎡A 22세대, 59㎡A 101세대, 59㎡C 53세대, 84㎡A 38세대, 계 214세대)' } },
          { label: '조감도', image: { src: '/apt/iaan-gangseo/complex-bird.webp', width: 2000, height: 1412, alt: '이안 강서 조감도 — 공항시장역 · 송정역 사이' } },
          { label: '항공광역도', image: { src: '/apt/iaan-gangseo/complex-aerial.webp', width: 2000, height: 1761, alt: '이안 강서 항공 광역도 — 여의도 20분 · 강남 30분, 공항시장역, 송정역, 마곡지구, 김포국제공항, 한강' } },
        ],
        note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 동 · 호 배치 및 세대수는 인 · 허가 과정에서 변경될 수 있습니다.',
      },
      unit: {
        eyebrow: 'UNIT PLAN',
        title: '세대안내',
        desc: '실속만점 특화설계\n중 · 소형 위주 판상형 구성',
        // 모바일 탭 4칸 한 줄(평형 4개)
        tabColumnsMobile: 4,
        tabs: [
          unitTab('44㎡A', '44a', 981, '22세대 · TRENDY MODERN', '전용 44.78㎡ · 공용 15.93㎡ · 공급 60.71㎡ · 계약 96.98㎡'),
          unitTab('59㎡A', '59a', 823, '101세대 · ROMANTIC MOMENT', '전용 59.98㎡ · 공용 21.77㎡ · 공급 81.74㎡ · 계약 130.32㎡'),
          unitTab('59㎡C', '59c', 719, '53세대 · EUROPEAN LUXURY', '전용 59.98㎡ · 공용 21.77㎡ · 공급 81.75㎡ · 계약 130.33㎡'),
          unitTab('84㎡A', '84a', 933, '38세대 · SHARE & BALANCE', '전용 84.96㎡ · 공용 29.80㎡ · 공급 114.76㎡ · 계약 183.57㎡'),
        ],
        // 견본주택 사진 — 탭 대신 평면 아래 별도 격자(사진 누르면 크게)
        gallery: {
          eyebrow: 'MODEL HOUSE',
          title: '견본주택',
          desc: '사진을 누르면 크게 볼 수 있습니다',
          images: Array.from({ length: 10 }, (_, i) => {
            const n = String(i + 1).padStart(2, '0')
            return { src: `/apt/iaan-gangseo/gallery-${n}-v2.webp`, width: 1440, height: 1081, alt: `이안 강서 견본주택 세대 내부 사진 ${n}` }
          }),
        },
        note: '※ 평면 및 견본주택 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 연출용 가구 · 소품 등은 제공 품목에 포함되지 않을 수 있습니다.',
      },
      // 공급안내 '스케일이 다른 커뮤니티 클래스가 다른 여가생활'
      community: {
        eyebrow: 'COMMUNITY',
        title: '스케일이 다른 커뮤니티,\n클래스가 다른 여가생활',
        desc: '알차게 구성된 커뮤니티시설이\n단지 내 여가생활의 차원이 다른 라이프를 제공합니다',
        items: [
          { name: '작은도서관', desc: '남녀노소 누구나 편안하게 독서를 하며 다양한 지식을 채우는 공간' },
          { name: '주민회의실', desc: '입주민 회의 및 소규모 모임 등 다양한 용도로 활용 가능한 공간' },
          { name: '어린이 실내놀이터', desc: '사계절 내내 안전한 놀이 환경을 제공하는 키즈 특화 공간' },
          { name: '피트니스 / GX룸', desc: '체력단련, 필라테스, 요가 등 입주민들의 건강한 여가생활을 위한 공간' },
          { name: '주민카페', desc: '편안하게 휴식하며 차 한 잔의 여유를 음미할 수 있는 공간' },
          { name: '다목적실', desc: '단지 내 세미나를 비롯해 다양한 용도로 활용 가능한 다목적 공간' },
        ],
        plan: {
          src: '/apt/iaan-gangseo/community-plan-v2.webp',
          alt: '이안 강서 커뮤니티 배치도 — 피트니스, GX룸, 작은도서관, 주민카페, 어린이 실내놀이터, 다목적실',
          width: 820,
          height: 1070,
        },
        note: '※ 커뮤니티 CG는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르며, 인 · 허가 과정에서 시설 구성 및 면적이 변경될 수 있습니다.',
      },
      contact: {
        bg: { src: '/apt/iaan-gangseo/night.webp' },
        sub: '홍보관 방문은 예약제로 운영됩니다.\n간단한 정보를 남겨주시면 임대 조건과 방문 일정을 가장 빠르게 안내해 드립니다.',
        places: [
          { label: '홍보관', addr: '서울특별시 강서구 마곡중앙로 55 퀸즈파크13, 309호' },
          { label: '사업지', addr: '서울특별시 강서구 공항동 18-26번지 일원' },
        ],
        hours: '10:00 ~ 18:00 (방문 전 예약 권장)',
        form: {
          title: '관심고객 등록',
          desc: '연락처를 남겨주시면 담당자가 확인 후 순차적으로 연락드립니다.',
          serviceOptions: ['홍보관 방문예약', '원하는 시간 전화상담'],
          ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
          submitLabel: '관심고객 등록하기',
        },
      },
    },

    vipForm: {
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 임대 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 홍보관 방문예약 접수 및 상담 일정 조율 - 임대 조건, 공급 일정, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 임차인 모집 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 홍보관 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '홍보관', value: '서울특별시 강서구 마곡중앙로 55 퀸즈파크13, 309호' },
        { label: '시행', value: '주식회사 예도산업개발' },
        { label: '시공예정', value: '대우산업개발' },
        { label: '자금관리', value: '주식회사 무궁화신탁' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사업은 「민간임대주택에 관한 특별법」에 따른 장기일반민간임대주택으로, 임대조건 · 분양전환 조건 등은 관련 법령 및 사업 진행에 따라 변경될 수 있으니 계약 전 반드시 확인하시기 바랍니다.',
        '※ 본 사이트에 사용된 CG 및 사진, 이미지, 일러스트 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다소 상이할 수 있습니다.',
        '※ 각종 개발계획, 교통시설 및 주변현황, 예정사항은 정부정책 및 관계기관의 사정, 사업주체의 진행 상황에 따라 변경 또는 취소될 수 있습니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 홍보관 관계자에게 문의하시기 바랍니다.',
      ],
    },
  },
}

// 세대안내 탭 한 칸 — 공급안내 PREMIUM UNIT 아이소메트릭 평면(1000폭)
function unitTab(label, file, height, where, area) {
  return {
    label,
    info: `${where}\n${area}`,
    image: { src: `/apt/iaan-gangseo/unit-${file}.webp`, alt: `${label} 타입(${where}) — ${area}`, width: 1000, height },
  }
}

export default config
