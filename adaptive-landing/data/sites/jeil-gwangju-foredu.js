// 제일풍경채 광주 포에듀 — 경기도 광주시 탄벌동 203-4번지 일원(탄벌A지구 A5블럭), 6개동 지하 2층~지상 29층, 총 572세대(84㎡A 419 · 84㎡B 153).
// 시행 ㈜브랜드뉴탄벌, 시공 제일건설㈜. 분양가 상한제 적용 단지.
// 출처: 2026-11-24 공식 홈페이지 https://jeil-foredu.co.kr/ (메인·사업개요·입지환경·프리미엄·단지배치도·동호수·커뮤니티·BIG3 무상특화·주택형 안내)
// 이미지: 같은 홈페이지 이미지를 webp 변환/크롭(public/apt/jeil-gwangju-foredu/).
// 구성(2026-11-24 요청 '인트로·구조·내용구성 모두 링크와 비슷하게, 분양일정 이런건 다 빼고'):
//   공식 인트로를 따른 띠 인트로(signature.bandIntro → SignatureBandIntro) +
//   공식 메인 구성을 따른 전용 화면(signature.jeil → SignatureJeilOfficial). 분양일정·GRAND OPEN 등 날짜성 내용은 제외.
// 대표번호 1811-3053, 상담 접수 알림 010-4325-5674 — 2026-11-24 사용자 전달값(홈페이지 번호 1533-7767은 사용 안 함).
const IMG = '/apt/jeil-gwangju-foredu'

const config = {
  slug: 'jeil-gwangju-foredu',
  // 제일풍경채광주포에듀.addupapt.kr → /apt/jeil-gwangju-foredu (middleware.js)
  subdomain: '제일풍경채광주포에듀',
  projectName: '제일풍경채 광주 포에듀',
  shortName: '제일풍경채 광주 포에듀',
  telNumber: '1811-3053',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/jeil-gwangju-foredu/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01043255674'],
  sheetId: '',
  sheetTab: '제일풍경채광주포에듀',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'contact@addup.kr',
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
    // 공식 홈페이지 메인 구성을 따른 전용 화면(components/sections/SignatureJeilOfficial, page.jsx의 sig.jeil 분기).
    //   메인 비주얼 → COMPLEX PLAN → PREMIUM 6 → 광주가 빠르게 변할지도 → EXCLUSIVE OFFER → BRAND INFO →
    //   단지·세대 안내(공식 서브메뉴 내용) → 오시는 길·방문예약.
    //   이 값이 있으면 vipForm.privacyText · footer.companyLines/disclaimers/agencySlogan만 함께 쓰임
    jeil: {
      logo: {
        light: { src: `${IMG}/intro-logo-white.png`, alt: '제일풍경채 광주 포에듀 A5BL', width: 388, height: 32 },
        dark: { src: `${IMG}/intro-logo.png`, alt: '제일풍경채 광주 포에듀 A5BL', width: 388, height: 32 },
      },
      brandLogo: { white: `${IMG}/brand-logo-white.png`, color: `${IMG}/brand-logo.png`, footer: `${IMG}/brand-logo-footer.png` },
      nav: [
        { id: 'complex-plan', label: '단지설계' },
        { id: 'premium', label: '프리미엄' },
        { id: 'location', label: '입지환경' },
        { id: 'offer', label: '분양조건' },
        { id: 'brand', label: '브랜드' },
        { id: 'plans', label: '단지·세대안내' },
        { id: 'contact', label: '방문예약' },
      ],
      // 진입 팝업 — 공식 홈페이지 팝업처럼 여러 장(PC 가로 나란히, 모바일 넘겨 보기). 2026-11-24 '청약내용이 전혀 없어졌는데' 요청으로
      //   청약·계약 이벤트(pop1116) · BIG3 무상특화(pop1028) · 특별한 분양조건(pop1105c_1113) · 청약 체크리스트(pop1105d).
      //   공식 팝업 중 이동통신설비 협의결과서(pop1119)·유사 홈페이지 주의(pop1111)는 이 페이지와 맞지 않아 제외
      popup: {
        delayMs: 1200,
        images: [
          { src: `${IMG}/popup.webp`, width: 350, height: 600, alt: '청약·계약 이벤트 — 청약하면 상품권이 팡! 계약하면 이자가 뚝! 청약 이벤트: 신세계 상품권 5만원 지급(특별공급·1순위 청약고객, 참여기간 11월 16일~17일, 지급기간 11월 28일~30일, 신분증 지참). 계약 이벤트: 청약 후 계약 시 600만원 지원(청약신청 이후 정당계약자, 예비당첨자 포함 · 중도금 이자후불제 대출이자 일부지원)' },
          { src: `${IMG}/popup-big3.webp`, width: 350, height: 600, alt: 'BIG3 무상 특화 — 풍경채 입주민만을 위한 종로엠스쿨 교육특권, 코알라케어 돌봄특권, 경기광주역 셔틀버스 생활특권(각 2년 무상)' },
          { src: `${IMG}/popup-offer.webp`, width: 350, height: 600, alt: '특별한 분양조건 — 1차 계약금 500만원(계약금 5%), 중도금 이자 후불제 대출이자 일부지원, 6개월 후 전매가능(당첨자 발표일로부터), 수도권 비규제지역 수혜단지' },
          { src: `${IMG}/popup-checklist.webp`, width: 350, height: 600, alt: '청약 체크리스트 — 만 19세 이상 수도권 거주자 가능(경기도 광주시 거주자 우선공급), 다주택자도 청약 가능(세대주·세대원 모두), 청약통장 가입 12개월 이상(지역별/면적별 예치금액 충족 시), 재당첨 제한·거주의무 없음(수도권 비규제지역)' },
        ],
      },
      hero: {
        bg: `${IMG}/hero.webp`,
        bgMobile: `${IMG}/hero-m.webp`,
        alt: '제일풍경채 광주 포에듀 주간 투시도',
        lead: '학교와 공원, 행정타운, 광주의 모든 생활 인프라를 바로!',
        title: '광주의 변화 제일의 기회',
        nameBold: '제일풍경채 광주',
        nameLight: '포에듀',
        block: '| A5BL |',
        // 우측 원형 2개 — 2026-11-24 요청(공식 홈페이지 캡처) '관심고객등록' 흰 원 + '11.13 GRAND OPEN'
        ringText: 'PUNGKYEONGCHAE · PUNGKYEONGCHAE · ',
        registerLabel: '관심고객등록',
        open: { date: '11.13', label: 'GRAND OPEN' },
        note: 'ⓘ 홈페이지에 사용된 이미지, CG 등은 소비자의 이해를 돕기 위해 제작된 것으로, AI 기술을 활용하여 제작된 이미지가 포함되어 있으며 실제와 다를 수 있습니다.',
      },
      complexPlan: {
        aerial: { src: `${IMG}/complex-aerial.webp`, alt: '제일풍경채 광주 포에듀 단지 조감 투시도' },
        verticalEn: 'COMPLEX PLAN',
        verticalKo: '제일풍경채 광주 포에듀 단지설계',
        titleBold: '자연을 품은 설계,',
        titleLight: '일상이 풍경이 되다',
        desc: '계절마다 새로운 아름다움을 선사하는 정원과 가족의 행복을 채워주는 다채로운 공간.\n자연과 사람이 어우러진 특별한 일상이 시작됩니다.',
        items: [
          { img: `${IMG}/complex-01.webp`, width: 430, height: 269, alt: '커뮤니티 마당 조경 투시도', en: 'COMMUNITY PLAZA', name: '커뮤니티 마당', desc: '푸른 자연 속에서 산책과 휴식,\n이웃과의 소통이 어우러지는 특별한 일상의 중심 공간.' },
          { img: `${IMG}/complex-03.webp`, width: 308, height: 192, alt: '어린이놀이터 조경 투시도', en: 'KIDS PLAYGROUND', name: '어린이놀이터', desc: '다채로운 놀이시설과 자연이 어우러져\n아이들의 상상력과 즐거운 하루를 채워주는 공간.' },
          { img: `${IMG}/complex-02.webp`, width: 222, height: 229, alt: '유아놀이터 조경 투시도', en: 'LITTLE GARDEN', name: '유아놀이터', desc: '어린 자녀들이 즐겁게 뛰어놀고\n가족이 함께 소중한 추억을 쌓아가는 따뜻한 놀이공간.' },
        ],
        note: 'ⓘ 홈페이지에 사용된 이미지, CG 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
      },
      premium: {
        bg: `${IMG}/premium-bg.webp`,
        kicker: '제일로 더 기대되는',
        title: 'PREMIUM',
        numImg: `${IMG}/premium6.png`,
        cards: [
          { num: '01', img: `${IMG}/pre-01.webp`, alt: '도시 전경 이미지', small: '광주를 더 새롭게', title: '탄벌 새도시', desc: '탄벌 1~6·A·B지구 조성 예정 및 계획으로 변화하는 탄벌 새도시의 가치' },
          { num: '02', img: `${IMG}/pre-02.webp`, alt: '도로 교통 이미지', small: '성남을 더 빠르게', title: '쾌속 교통망', desc: '회안대로, 성남이천로 및 이배재로를 통해 바로 누리는 성남 직주근접 라이프' },
          { num: '03', img: `${IMG}/pre-03.webp`, alt: '등교하는 아이들 이미지', small: '학교는 더 가깝게', title: '안심 통학권', desc: '도보 통학 가능한 탄벌초와 탄벌중 인접 및 광주시립중앙도서관 등 이용 편리' },
          { num: '04', img: `${IMG}/pre-04.webp`, alt: '공원과 산 전경 이미지', small: '자연은 더 쾌적하게', title: '힐링 라이프', desc: '물놀이장을 갖춘 단지 앞 탄벌쌈지공원과 광주중앙공원 등 인접' },
          { num: '05', img: `${IMG}/pre-05.webp`, alt: '상업 거리 이미지', small: '생활은 더 다채롭게', title: '멀티 인프라', desc: '반경 1.5㎞ 내 광주시청, 문화예술의전당, 광주시 탄벌체육관, 송정지구 상업시설 등' },
          { num: '06', img: `${IMG}/pre-06.webp`, alt: '넓은 거실 이미지', small: '공간은 더 넓게', title: '혁신 평면설계', desc: '남향 위주 단지 배치, 4Bay 판상형 설계 및 팬트리 등 수납공간 극대화' },
        ],
        note: 'ⓘ 홈페이지에 사용된 이미지, CG 등은 소비자의 이해를 돕기 위해 제작된 것으로, AI 기술을 활용하여 제작된 이미지가 포함되어 있으며 실제와 다를 수 있습니다.',
      },
      city: {
        titleBold1: '광주',
        titleLight: '가 빠르게',
        titleBold2: '변할지도',
        sub: '축구장 120여 개 규모,',
        subBold: '탄벌지구 도시개발사업',
        what: {
          title: '탄벌지구 도시개발사업이란?',
          desc: '‘탄벌지구’는 체계적인 지구단위계획을 통해 정비 및 기능을 재정립하고, \n개선효과를 기대할 수 있도록 계획된 도시입니다.\n\n이를 통해 인간과 자연이 공존하는 자연친화적인 환경을 만들고, \n지속적인 도시개발 및 도시관리가 가능하도록 조성될 예정입니다.',
        },
        cards: [
          { img: `${IMG}/city-01.webp`, alt: '대규모 주거타운 이미지', title: '스케일이 다른 변화', desc: '탄벌지구 내 공동주택용지에 약 5천 세대의 규모의 대규모 주거타운 조성 예정' },
          { img: `${IMG}/city-02.webp`, alt: '도로 교통 이미지', title: '성남 직주근접 라이프', desc: '이배재로로 성남까지 차량 10분대. 성남일반산업단지를 빠르게 잇는 직주근접 새도시의 편리함' },
          { img: `${IMG}/city-03.webp`, alt: '공원 녹지 이미지', title: '친환경 주거환경', desc: '풍부한 공원 및 녹지와 근린생활시설용지 계획으로 쾌적하고 여유로운 주거환경' },
        ],
        map: { src: `${IMG}/city-map.webp`, alt: '탄벌지구 토지이용계획도 — 제일풍경채 광주 포에듀(A5), 탄벌A·B지구(예정), 탄벌1~6지구, 이배재로, 회안대로, 탄벌초, 탄벌중, 중앙공원, 성남하이테크밸리·하남·용인 방면', width: 780, height: 1000 },
        wideMap: { src: `${IMG}/location-map.webp`, alt: '제일풍경채 광주 포에듀 광역 위치도 — 경기광주역(경강선), 수서~광주 복선전철(31년 예정), GTX-D(추진), 이배재로, 회안대로, 성남·판교 방면, 견본주택(송정지구)', width: 1600, height: 1048 },
        notes: [
          'ⓘ 본 토지이용계획도는 각 지구별 고시문 및 경기도 광주시청 홈페이지(www.gjcity.go.kr) 등을 참고하여 제작된 것으로 추후 관계기관의 사정에 따라 변경, 지연, 취소될 수 있으며 이는 당사와 무관함을 알려드립니다.',
          '• 탄벌지구(계획) : 경기도청 보도자료(2026.08.25), 경기도 고시 제2026-210호(2026.08.25) • 탄벌1지구 : 광주시 고시 제2025-525호(2025.12.26) • 탄벌2지구(예정) : 광주시 고시 제2022-253호(2022.05.19) • 탄벌3지구(예정) : 광주시 고시 제2023-516호(2023.07.28) • 탄벌4지구 : 광주시 고시 제2025-278호(2025.07.08)',
          '• 탄벌5·6지구 : 광주시 고시 제2011-158호(2011.06.22) • 탄벌A지구(예정) : 광주시 고시 제2025-143호(2025.04.02) • 탄벌B지구(예정) : 광주시 고시 제2025-207호(2025.05.14) • 수서~광주 복선전철(예정) : 국토교통부 고시 제2026-196호(2026.04.17) • 월곶~판교 복선 전철(예정) : 국토교통부 고시 제2026-350호(2026.07.07)',
          '• GTX-D(추진) : 국토교통부 보도자료「교통 분야 3대 혁신 전략」출퇴근 30분 시대, 교통격차 해소에 134조원 투입(2024.01.25)',
        ],
      },
      offer: {
        bg: `${IMG}/offer-bg.webp`,
        title: 'EXCLUSIVE OFFER',
        sub: '제일풍경채 광주 포에듀만의 특별한 분양조건',
        items: [
          { icon: `${IMG}/offer-icon-01.png`, small: '1차 계약금', strong: '500만원', tiny: '(계약금 5%)' },
          { icon: `${IMG}/offer-icon-02.png`, small: '중도금 이자 후불제', strong: '대출이자 일부 지원' },
          { icon: `${IMG}/offer-icon-03.png`, small: '6개월 후', strong: '전매가능', tiny: '(당첨자 발표일로부터)' },
          { icon: `${IMG}/offer-icon-04.png`, small: '수도권 비규제지역', strong: '수혜단지' },
        ],
        note: 'ⓘ 홈페이지에 사용된 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
      },
      brand: {
        bg: `${IMG}/brand-bg.webp`,
        title: 'BRAND INFO',
        lead: '풍경채가 경기 광주에서\n주거의 새로운 기준을 세웁니다.',
        since: 'SINCE 1978',
        slogan: '신뢰가 쌓이는 집, 제일풍경채',
        desc: '제일건설은 앞선 주거가치와 트렌디한 삶의 문화를 선보입니다.',
        stats: [
          { big: 'AAA', top: '2020년~2025년', label: '6년 연속 최고신용등급' },
          { big: '17', unit: '위', top: '2026년 건설업체', label: '시공능력평가' },
          { big: '1', unit: '위', top: '2017년, 2023년, 2025년', label: '시공능력평가 조경부문' },
        ],
        prizes: [
          { src: `${IMG}/prize-01.png`, alt: '제일건설 수상 내역 1', width: 138, height: 49 },
          { src: `${IMG}/prize-02.png`, alt: '제일건설 수상 내역 2', width: 118, height: 49 },
          { src: `${IMG}/prize-03.png`, alt: '제일건설 수상 내역 3', width: 167, height: 49 },
          { src: `${IMG}/prize-04.png`, alt: '매일경제 살기좋은 아파트', width: 220, height: 34 },
          { src: `${IMG}/prize-05.png`, alt: '제일건설 수상 내역 5', width: 123, height: 36 },
        ],
        source: 'ⓘ 출처 : 주택도시보증공사(2026년 4월 기준) / 국토교통부(2017년, 2023년, 2025년, 2026년 시공능력평가)',
      },
      // 공식 서브메뉴(단지안내·세대안내) 내용
      plans: {
        eyebrow: 'COMPLEX & UNIT',
        title: '단지·세대 안내',
        desc: '101동 ~ 106동 · 6개동 총 572세대\n84㎡A 419세대 · 84㎡B 153세대',
        tabs: [
          { label: '단지 배치도', image: { src: `${IMG}/complex-siteplan.webp`, width: 1100, height: 817, alt: '제일풍경채 광주 포에듀 단지배치도 — 101~106동, 84㎡A 419세대·84㎡B 153세대, 커뮤니티마당, 어린이놀이터1·2, 유아놀이터, 주민운동시설, 주민공동시설(B1F), 어린이집, 경로당, 데일리가든, 숲속산책길, 주출입구·부출입구' } },
          { label: '동호수 배치도', image: { src: `${IMG}/complex-dongho.webp`, width: 1100, height: 522, alt: '제일풍경채 광주 포에듀 동호수 배치도 — 101동~106동 층별 호수와 84A·84B 타입 배치' } },
          { label: '커뮤니티', narrow: true, image: { src: `${IMG}/community-plan.webp`, width: 1100, height: 1703, alt: '제일풍경채 광주 포에듀 커뮤니티 — EDU ZONE(B1F): 작은도서관, 스터디라운지, 1인독서실, 독서실(남·여), 특화존, SUNKEN / HEALTHY ZONE(B1F): 실내골프연습장, 라운지, G.X룸, 샤워실(남·여), 피트니스센터' } },
          { label: 'BIG3 무상특화', narrow: true, image: { src: `${IMG}/complex-big3.webp`, width: 1100, height: 3281, alt: '풍경채 입주민만을 위한 BIG3 무상 특화 — 종로엠스쿨 교육특권 2년 무상(초·중등 영어·수학), 코알라케어 돌봄특권 2년 무상, 경기광주역 셔틀버스 2년 무상(약 10분 소요)' } },
          { label: '84㎡A', narrow: true, info: '419세대\n전용 84.9904㎡ · 공급 111.9429㎡ · 계약 174.1495㎡', image: { src: `${IMG}/unit-84a.webp`, width: 1100, height: 2291, alt: '84㎡A 타입(419세대) — 전용 84.9904㎡, 공급 111.9429㎡, 계약 174.1495㎡, 확장옵션형·확장기본형 평면도 및 추가 선택품목' } },
          { label: '84㎡B', narrow: true, info: '153세대\n전용 84.9732㎡ · 공급 113.0540㎡ · 계약 175.2481㎡', image: { src: `${IMG}/unit-84b.webp`, width: 1100, height: 2161, alt: '84㎡B 타입(153세대) — 전용 84.9732㎡, 공급 113.0540㎡, 계약 175.2481㎡, 확장옵션형·확장기본형 평면도 및 추가 선택품목' } },
        ],
        note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 동·호수표 및 평면도는 제작 과정상 오류가 있을 수 있으니 반드시 견본주택에서 확인하시기 바랍니다. BIG3 무상특화 서비스는 2년간 제공될 예정이며 사업주체의 사정에 따라 변경될 수 있습니다.',
      },
      contact: {
        bg: `${IMG}/contact-bg.webp`,
        title: '제일풍경채 광주 포에듀 오시는 길',
        sub: '모델하우스 관람은 방문예약제로 운영됩니다.\n간단한 정보를 남겨주시면 가장 빠르게 안내해 드립니다.',
        scale: '84㎡A·B 총 572세대',
        places: [
          { label: '견본주택', addr: '경기도 광주시 송정동 678-2' },
          { label: '사업지', addr: '경기도 광주시 탄벌동 203-4번지 일원' },
        ],
        hours: '10:00 ~ 18:00 (주말 동일)',
        form: {
          title: '방문예약상담',
          desc: '방문 희망일과 시간을 남겨주시면 확인 후 연락드립니다.',
          serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
          ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
          submitLabel: '방문예약상담 신청',
        },
      },
    },

    // 인트로 — 공식 홈페이지 인트로를 따름(SignatureBandIntro, page.jsx의 sig.jeil 분기에서 먼저 렌더).
    //   연회색 배경 + 세로선 → 가운데 띠로 펼쳐지는 사진(홈페이지 intro_img 3장 교차) + 'MultiFull Change!' + 로고 →
    //   띠가 전체 화면으로 커지며 컬러 주간 투시도(원본은 영상) 위에 흰 붓글씨(int_tit.png)
    bandIntro: {
      ariaLabel: '제일풍경채 광주 포에듀를 소개하는 인트로',
      title: 'MultiFull Change!',
      images: [`${IMG}/intro-1.webp`, `${IMG}/intro-2.webp`, `${IMG}/intro-3.webp`],
      logo: { src: `${IMG}/intro-logo.png`, alt: '제일풍경채 광주 포에듀 A5BL', width: 388, height: 32 },
      note: 'ⓘ 홈페이지에 사용된 이미지, CG 등은 소비자의 이해를 돕기 위해 제작된 것으로, AI 기술을 활용하여 제작된 이미지가 포함되어 있으며 실제와 다를 수 있습니다.',
      finale: {
        bg: `${IMG}/hero.webp`,
        bgMobile: `${IMG}/hero-m.webp`,
        script: { src: `${IMG}/intro-script.png`, alt: 'MultiFull Change', width: 1204, height: 381 },
      },
    },

    vipForm: {
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 현장 방문예약 접수 및 상담 일정 조율 - 분양 일정, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 현장 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '사업지', value: '경기도 광주시 탄벌동 203-4번지 일원' },
        { label: '견본주택', value: '경기도 광주시 송정동 678-2' },
        { label: '시행', value: '㈜브랜드뉴탄벌' },
        { label: '시공', value: '제일건설㈜' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'contact@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지, CG 등은 소비자의 이해를 돕기 위해 제작된 것으로, AI 기술을 활용하여 제작된 이미지가 포함되어 있으며 실제와 다를 수 있습니다.',
        '※ 본 사이트의 내용은 사업주체 및 관계기관의 사정에 따라 변경될 수 있으며, 인·허가 과정이나 실제 시공 시 현장 여건 등에 따라 변경될 수 있으므로 자세한 사항은 입주자모집공고 및 견본주택에서 확인하시기 바랍니다.',
        '※ 표기된 개발계획 및 예정사항 등은 추후 관계기관, 지자체의 사정에 따라 변경, 지연, 취소될 수 있습니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 현장 관계자에게 문의하시기 바랍니다.',
      ],
    },
  },
}

export default config
