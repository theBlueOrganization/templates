// 덕소역 더블뷰 한강(덕소역 벽산블루밍 더블뷰 한강) — 경기 남양주시 와부읍 덕소리 560-25번지 일원에
// 공급되는 10년 장기일반 민간임대아파트. 공식 홈페이지(https://deokso.co.kr/)와 마케팅 마이크로사이트
// (http://www.27.eyearshow.co.kr/a1, /a4)는 접속이 막혀있어(403/SSL 오류) 직접 스크래핑하지 못했고,
// 아래 수치·문구는 전부 뉴스 기사(한국경제·이넷뉴스·hbnpress·finomy·geconomy 등) 검색 결과를 통해
// 확보한 공개 정보를 재구성한 것이다. structure는 example-apt.js와 동일한 표준 12필드 Signature
// 스택(the-sharp-geomdan-lakepark-2.js와 같은 방식)을 사용한다.
//
// ⚠️ 실제 납품 전 반드시 확인/교체가 필요한 항목:
//   - 이미지 전부: 실제 파일이 없어 example-apt.js와 동일하게 placeholder 경로만 채워둠.
//     public/apt/deokso-doubleview-hangang/ 에 실제 조감도·평면도·배치도 이미지를 추가해야 함.
//   - 시행/시공사명: 기사에 명시되어 있지 않아 미확인 상태로 남겨둠.
//   - 세대수/규모: 기사마다 수치가 다름 — 현재 지하2층~지상28층 2개동 162세대로 사업 진행 중이며,
//     도시계획시설 변경 인가 시 지하2층~지상45층으로 확대되어 최종 278세대(74A 166·74B 37·59A 57·
//     59B 18)로 계획하는 것으로 보인다. 계약 전 반드시 공식 자료로 재확인 필요.
//   - 전화번호(1800-7076)는 마케팅 마이크로사이트(27.eyearshow.co.kr) 검색 스니펫에서 확인된 번호로,
//     공식 대표번호인지 별도 확인 후 사용 권장.
const config = {
  slug: 'deokso-doubleview-hangang',
  subdomain: '덕소역더블뷰한강',
  projectName: '덕소역 더블뷰 한강',
  shortName: '덕소역 더블뷰 한강',
  telNumber: '1800-7076',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/deokso-doubleview-hangang/og.jpg',
  adminPhones: ['01094216962'],
  sheetId: '',
  sheetTab: '덕소역더블뷰한강',
  showUtmInSms: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  colorTheme: {
    navy: '#0f3a5f',
    ink: '#0a253f',
    cream: '#eef5fa',
    gold: '#5b9bd5',
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
      logo: { src: '/apt/deokso-doubleview-hangang/logo-white.svg', alt: '덕소역 더블뷰 한강', width: 150, height: 32 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1800-7076',
    },

    hero: {
      eyebrowLine1: '청약통장 없이 만 19세 이상 누구나',
      eyebrowLine2: '10년간 세금 걱정 없이 누리는 한강뷰',
      titleLine1: '덕소역 더블뷰 한강,',
      titleLine2: '거실에서 펼쳐지는 파노라마 한강조망',
      descLine1: '1차 계약금 500만원, 총 계약금 3,500만원',
      descLine1Accent: ['500만원', '3,500만원'],
      descLine2: '입주 때까지 추가 자금 부담 없이 한강 조망권을 확보하세요',
      descLine3: '경의중앙선·KTX 덕소역 도보 5분, GTX-E·F 예정 쿼드러플 역세권',
      bgImage: { src: '/apt/deokso-doubleview-hangang/hero-bg.jpg', alt: '덕소역 더블뷰 한강 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '덕소역 더블뷰 한강', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '방문예약 후 상담만 해도 사은품 제공',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 한국경제(2026.07.09)·이넷뉴스·hbnpress 기사 종합. 대지위치/지번·대지면적·건폐율·용적률은
    // finomy·이넷뉴스 기사에서 확인된 수치, 세대수는 현재 진행 단계(162세대) 기준.
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '경기 남양주 와부읍, 10년 장기일반 민간임대',
      subtitle: '한강을 마주한 입지에 들어서는 덕소역 더블뷰 한강',
      photo: { src: '/apt/deokso-doubleview-hangang/overview-photo.jpg', alt: '덕소역 더블뷰 한강 조감도' },
      thumbs: [
        { src: '/apt/deokso-doubleview-hangang/thumb-hangang-view.jpg', alt: '한강 조망 전경' },
        { src: '/apt/deokso-doubleview-hangang/thumb-community.jpg', alt: '커뮤니티 시설' },
        { src: '/apt/deokso-doubleview-hangang/thumb-station.jpg', alt: '덕소역 주변 전경' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업위치', value: '경기도 남양주시 와부읍 덕소리 560-25번지 일원' },
        { label: '지역지구', value: '제3종 일반주거지역' },
        { label: '대지면적', value: '7,118.10㎡(2,153.23평)' },
        { label: '건축면적', value: '1,480.00㎡(447.70평)' },
        { label: '건폐율 / 용적률', value: '20.79% / 223.27%' },
        {
          label: '규모',
          value: ['지하 2층 ~ 지상 최고 28층, 2개동, 총 162세대', '(도시계획시설 변경 인가 시 최고 45층, 총 235세대 규모로 확대 예정)'],
        },
        { label: '주택형', value: '전용 59㎡, 74㎡ 중소형 평형' },
        { label: '공급방식', value: '10년 장기일반 민간임대주택 (임대의무기간 종료 후 분양전환 선택 가능)' },
      ],
    },

    // 출처: hbnpress·geconomy·finomy 기사 종합 — 교통(덕소역·GTX·광역도로), 교육(농어촌특별전형),
    // 생활 인프라(대형쇼핑·의료시설) 문구를 4개 카드로 재구성.
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '한강이 마주하는 자리, ',
      eyebrowAccent: '덕소역 역세권',
      title: '한강과 역세권을 동시에 품다',
      descTitle: '거실에서 펼쳐지는 파노라마 한강조망과 쿼드러플 역세권',
      descTitleAccent: ['파노라마 한강조망', '쿼드러플 역세권'],
      descBody1: '경의중앙선·KTX가 정차하는 덕소역 도보 5분, GTX-E·F 노선(예정)까지 더해지는 교통망,',
      descBody1Accent: ['덕소역 도보 5분', 'GTX-E·F 노선'],
      descBody2: '덕소역 더블뷰 한강이 남양주 와부읍의 새로운 기준을 완성합니다.',
      mapImage: { src: '/apt/deokso-doubleview-hangang/location-map.jpg', alt: '덕소역 더블뷰 한강 주변 인프라 안내도' },
      features: [
        {
          titlePrefix: '',
          titleStrong: '한강뷰 프리미엄',
          titleSuffix: '',
          tag: 'RIVER VIEW',
          image: { src: '/apt/deokso-doubleview-hangang/feature-hangang-view.jpg', alt: '한강 — 파노라마 한강조망' },
          descStrong: '',
          descRest: '한강과 맞닿은 입지, 거실에서 사계절 파노라마 한강조망을 누리는 4Bay 판상형 구조',
        },
        {
          titlePrefix: '',
          titleStrong: '쿼드러플 역세권',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/deokso-doubleview-hangang/feature-traffic.jpg', alt: '교통 — 덕소역 쿼드러플 역세권' },
          descStrong: '',
          descRest: '경의중앙선·KTX 덕소역 도보 5분, GTX-E·F 노선(예정)으로 완성되는 광역교통망',
        },
        {
          titlePrefix: '',
          titleStrong: '안심 교육환경',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/deokso-doubleview-hangang/feature-education.jpg', alt: '교육 — 덕소·와부 학군' },
          descStrong: '',
          descRest: '덕소초·와부초·예봉초·와부중·와부고·덕소고 학군, 와부읍 소재로 농어촌 특별전형 지원 가능',
        },
        {
          titlePrefix: '',
          titleStrong: '생활·의료 인프라',
          titleSuffix: '',
          tag: 'INFRA',
          image: { src: '/apt/deokso-doubleview-hangang/feature-infra.jpg', alt: '생활 — 쇼핑·의료 인프라' },
          descStrong: '',
          descRest: '롯데마트·현대프리미엄아울렛·스타필드 하남·신세계백화점·이케아 강동 및 한양대구리병원 등 의료시설 인접',
        },
      ],
      disclaimer:
        '※ 상기 내용과 이미지는 공개 보도자료를 기준으로 구성했습니다. GTX-E·F, 6호선·9호선 연장 등은 계획 단계이며 사업 내용과 일정은 변경될 수 있습니다.',
    },

    premiumIntro: {
      eyebrow: 'DOUBLE VIEW HANGANG',
      titleLine1: '청약통장 없이 만나는',
      titleLine2: '한강뷰 프리미엄 임대주택',
      descLine1: '만 19세 이상이면 주택 소유 여부·소득과 관계없이 신청 가능',
      descLine1Accent: ['청약통장 불필요'],
      descLine2: '10년간 취득세·재산세·종합부동산세 부담 없이 누리는 한강조망 라이프',
      bgImage: { src: '/apt/deokso-doubleview-hangang/premium-intro-bg.jpg', alt: '덕소역 더블뷰 한강 단지 전경' },
    },

    // 출처: 뉴스 기사 종합 — 임대조건·한강뷰·역세권·교육·커뮤니티 특징을 6개 카드로 재구성.
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM 6',
      titlePlain: '덕소역 더블뷰 한강이 더 특별한 ',
      titleAccent: '여섯 가지 이유',
      subtitle: '한강뷰부터 역세권, 세금 혜택, 교육, 커뮤니티까지',
      subtitleLight: '와부읍의 중심에서 누리는 가치를 한눈에 확인해보세요.',
      cards: [
        {
          num: 'PREMIUM 01',
          title: ['거실에서 누리는', '파노라마 한강조망'],
          desc: ['한강과 맞닿은 입지, 4Bay 판상형 구조로 채광·통풍까지 극대화'],
          image: { src: '/apt/deokso-doubleview-hangang/feature-hangang-view.jpg', alt: '파노라마 한강조망' },
        },
        {
          num: 'PREMIUM 02',
          title: ['청약통장 없이', '누구나 신청'],
          desc: ['만 19세 이상, 주택 소유 여부·소득 무관하게 신청 가능한 장기일반민간임대'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-no-jucheong.jpg', alt: '청약통장 없이 누구나 신청' },
        },
        {
          num: 'PREMIUM 03',
          title: ['10년간', '세금 부담 ZERO'],
          desc: ['거주 기간 중 취득세·재산세·종합부동산세 등 주택 관련 세금 없음'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-tax-free.jpg', alt: '10년간 세금 부담 ZERO' },
        },
        {
          num: 'PREMIUM 04',
          title: ['덕소역', '쿼드러플 역세권'],
          desc: ['경의중앙선·KTX 도보 5분, GTX-E·F 노선(예정)까지 이어지는 교통망'],
          image: { src: '/apt/deokso-doubleview-hangang/feature-traffic.jpg', alt: '덕소역 쿼드러플 역세권' },
        },
        {
          num: 'PREMIUM 05',
          title: ['농어촌특별전형', '입시 혜택'],
          desc: ['와부읍 소재지 특성상 대학 입시 농어촌 특별전형 지원 가능'],
          image: { src: '/apt/deokso-doubleview-hangang/feature-education.jpg', alt: '농어촌특별전형 입시 혜택' },
        },
        {
          num: 'PREMIUM 06',
          title: ['입주민 라운지 등', '올인원 커뮤니티'],
          desc: ['피트니스·사우나·스크린골프·돌봄센터까지 누리는 다채로운 커뮤니티'],
          image: { src: '/apt/deokso-doubleview-hangang/premium-intro-bg.jpg', alt: '올인원 커뮤니티' },
        },
      ],
    },

    // 참고: 상세 조경 자료(공식 홈페이지 접속 불가)를 확보하지 못해 한강조망 테마로 재구성한
    // 참고용 패널. 실제 조경 이미지·문구 확보 후 교체 필요.
    landscape: {
      panels: [
        {
          image: { src: '/apt/deokso-doubleview-hangang/landscape-1.jpg', alt: '한강변 산책로 조경' },
          badge: 'RIVERSIDE WALK',
          titlePlain: '한강을 걷는 ',
          titleAccent: '산책로 조경',
          desc: '단지 인근 한강공원 삼패지구와 이어지는 산책로에서 사계절 한강의 풍경을 가까이 누리실 수 있습니다.',
        },
        {
          image: { src: '/apt/deokso-doubleview-hangang/landscape-2.jpg', alt: '입주민 야외 라운지 조경' },
          badge: 'OUTDOOR LOUNGE',
          titlePlain: '여유로운 ',
          titleAccent: '야외 라운지',
          desc: '한강 조망을 바라보며 이웃과 담소를 나눌 수 있는 야외 라운지 공간에서 여유로운 일상을 즐기실 수 있습니다.',
        },
        {
          image: { src: '/apt/deokso-doubleview-hangang/landscape-3.jpg', alt: '단지 내 힐링 정원 조경' },
          badge: 'HEALING GARDEN',
          titlePlain: '가족과 함께하는 ',
          titleAccent: '힐링 정원',
          desc: '아이와 어른 모두가 안전하게 쉴 수 있는 정원 공간에서 일상 속 작은 힐링을 누리실 수 있습니다.',
        },
      ],
    },

    // 단지소개 — 실제 배치도/동호수표 이미지 미확보(공식 홈페이지 접속 불가). placeholder 경로만 지정.
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '2개동, 총 162세대',
      titleLine2: '한강을 마주한 컴팩트 단지',
      desc: '동 배치와 단지 내 주요 시설을 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/deokso-doubleview-hangang/complex-sitemap.jpg', alt: '덕소역 더블뷰 한강 단지 배치도', width: 1200, height: 800 },
      },
      donghoChart: {
        image: { src: '/apt/deokso-doubleview-hangang/complex-dongho-chart.jpg', alt: '덕소역 더블뷰 한강 동호수 배치표', width: 1200, height: 1600 },
      },
    },

    // 출처: hbnpress 기사(74A 166세대·74B 37세대·59A 57세대·59B 18세대). 전용면적 외 공급/계약면적
    // 등 세부 수치는 공식 공급자료 미확보로 비워둠(확인 후 추가 입력 필요).
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'DOUBLEVIEW HANGANG',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['한강을 품은 라이프스타일에 맞춘', '덕소역 더블뷰 한강', '전용 59㎡ 2개 타입, 74㎡ 2개 타입', '4가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 57세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-59a.jpg', alt: '덕소역 더블뷰 한강 59㎡A 타입 평면도' },
              specs: { exclusive: '59' },
            },
            {
              letter: 'B',
              countText: '총 18세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-59b.jpg', alt: '덕소역 더블뷰 한강 59㎡B 타입 평면도' },
              specs: { exclusive: '59' },
            },
          ],
        },
        {
          area: '74㎡',
          types: [
            {
              letter: 'A',
              countText: '총 166세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74a.jpg', alt: '덕소역 더블뷰 한강 74㎡A 타입 평면도' },
              specs: { exclusive: '74' },
            },
            {
              letter: 'B',
              countText: '총 37세대',
              image: { src: '/apt/deokso-doubleview-hangang/unit-74b.jpg', alt: '덕소역 더블뷰 한강 74㎡B 타입 평면도' },
              specs: { exclusive: '74' },
            },
          ],
        },
      ],
    },

    // 출처: hbnpress 기사 — 입주민 라운지, 게스트하우스, 북카페, 피트니스센터, 사우나, 스크린골프장,
    // 돌봄센터 등 커뮤니티 시설 언급을 표준 club 스택(intro/floorPlanB1/wellness/sportsHealth/
    // cafeLounge/eduKids)에 재배치. 실제 이미지·평면도 미확보로 placeholder.
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      intro: {
        eyebrow: 'COMMUNITY',
        titleLine1: '한강을 곁에 둔 일상 속',
        titleLine2: '다채로운 커뮤니티가 열리다',
        desc: '피트니스·사우나부터 스크린골프, 돌봄센터까지 단지 안에서 누리는 여유로운 하루',
      },
      floorPlanB1: {
        title: '',
        dragHint: '좌우로 밀어서 B1F 도면을 확인하세요',
        image: { src: '/apt/deokso-doubleview-hangang/floorplan-b1f.jpg', alt: 'B1F 커뮤니티 평면도' },
      },
      wellness: {
        badge: 'WELLNESS',
        titlePlain: '단지 안에서 누리는',
        titleAccent: '사우나 & 피트니스',
        desc: '운동 후 편안하게 몸을 녹일 수 있는 사우나 시설로 완벽한 힐링을 선사합니다.',
        dark: true,
        hero: {
          image: { src: '/apt/deokso-doubleview-hangang/facility-fitness-main.jpg', alt: '피트니스센터 전경' },
          title: '피트니스센터',
          desc: '다양한 유산소·웨이트 기구를 갖춘 피트니스센터에서 쾌적한 아침을 시작하세요.',
        },
        halves: [
          { image: { src: '/apt/deokso-doubleview-hangang/facility-sauna-1.jpg', alt: '사우나 시설 1' }, caption: '사우나' },
          { image: { src: '/apt/deokso-doubleview-hangang/facility-sauna-2.jpg', alt: '사우나 시설 2' }, caption: '사우나 라운지' },
        ],
      },
      sportsHealth: {
        badge: 'SPORTS',
        titlePlain: '취미와 활력을 더하는 ',
        titleAccent: '스포츠 공간',
        desc: '계절과 날씨에 구애받지 않고 즐기는 실내 스포츠 시설',
        showcases: [
          {
            side: 'left',
            tag: 'SCREEN GOLF',
            title: '스크린골프장',
            desc: '계절에 구애받지 않고 쾌적하게 필드의 실전 감각을 익힐 수 있는 입주민 전용 스크린골프장입니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/facility-golf-main.jpg', alt: '스크린골프장 전체 전경' }, caption: '스크린골프장' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/facility-golf-detail.jpg', alt: '스크린 타석 상세' }, caption: '스크린 타석 상세' },
          },
          {
            side: 'right',
            tag: 'GUEST HOUSE',
            title: '게스트하우스',
            desc: '방문하는 가족·지인을 위한 별도 숙박 공간으로, 손님맞이 부담 없이 여유로운 시간을 보낼 수 있습니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/facility-guesthouse-main.jpg', alt: '게스트하우스 전경' }, caption: '게스트하우스' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/facility-guesthouse-detail.jpg', alt: '게스트하우스 내부' }, caption: '게스트하우스 내부' },
          },
        ],
        floorPlanB2: {
          title: '커뮤니티시설 B2F',
          dragHint: '좌우로 밀어서 B2F 도면을 확인하세요',
          image: { src: '/apt/deokso-doubleview-hangang/floorplan-b2f.jpg', alt: 'B2F 커뮤니티시설 평면도' },
        },
      },
      cafeLounge: {
        badge: 'LOUNGE',
        titlePlain: '휴식과 교류의 ',
        titleAccent: '입주민 라운지 & 북카페',
        desc: ['이웃과 여유로운 담소를 나누며', '책 한 권의 여유를 즐기는 공간'],
        halves: [
          { image: { src: '/apt/deokso-doubleview-hangang/facility-lounge.jpg', alt: '입주민 라운지' }, caption: '입주민 라운지' },
          { image: { src: '/apt/deokso-doubleview-hangang/facility-bookcafe.jpg', alt: '북카페' }, caption: '북카페' },
        ],
      },
      eduKids: {
        badge: 'CARE CENTER',
        titlePlain: '아이를 안심하고 맡기는 ',
        titleAccent: '돌봄센터',
        desc: '맞벌이 가정도 안심할 수 있는 단지 내 돌봄 공간',
        showcases: [
          {
            side: 'left',
            tag: 'CARE CENTER',
            title: '돌봄센터',
            desc: '전문 인력이 상주하는 단지 내 돌봄센터에서 자녀를 안심하고 맡길 수 있는 프리미엄 육아 인프라를 제공합니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/facility-care-main.jpg', alt: '돌봄센터 전경' }, caption: '돌봄센터' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/facility-care-detail.jpg', alt: '돌봄센터 내부' }, caption: '돌봄센터 내부' },
          },
          {
            side: 'right',
            tag: 'BOOK CAFE',
            title: '북카페 스터디존',
            desc: '조용하고 아늑한 분위기 속에서 아이와 함께 책을 읽거나 학업에 집중할 수 있는 공간입니다.',
            main: { image: { src: '/apt/deokso-doubleview-hangang/facility-bookcafe-main.jpg', alt: '북카페 스터디존' }, caption: '북카페 스터디존' },
            sub: { image: { src: '/apt/deokso-doubleview-hangang/facility-bookcafe-detail.jpg', alt: '북카페 인테리어' }, caption: '북카페 인테리어' },
          },
        ],
      },
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '덕소역 더블뷰 한강',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 방문 상담은 10:00~18:00 1시간 단위로 예약할 수 있습니다.',
      serviceOptions: ['홍보관 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `본 임대주택사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 덕소역 더블뷰 한강 임대 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
3. 개인정보의 처리 및 보유 기간 : 덕소역 더블뷰 한강 임대 모집 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    // 시행/시공사명은 보도자료에 명시되어 있지 않아 미확인 상태로 표기. 확인 후 교체 필요.
    footer: {
      logo: { src: '/apt/deokso-doubleview-hangang/logo-white.svg', alt: '덕소역 더블뷰 한강', width: 160, height: 40 },
      highlightText: '1800-7076',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '확인 필요(시행사명 미확인)' },
        { label: '시공', value: '확인 필요(시공사명 미확인)' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 주택의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용 및 세대수·규모는 도시계획시설 변경 등 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1800-7076',
      csHours: 'AM 08:00 ~ PM 20:00',
    },
  },
}

export default config
