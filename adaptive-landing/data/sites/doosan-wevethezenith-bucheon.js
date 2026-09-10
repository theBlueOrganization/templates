// 두산위브더제니스 부천 — 공식 홈페이지(소사본1-1구역 재개발정비사업)를 참고해 제작.
// 사업개요 스펙·단지배치도 세대수 범례·평형별 면적표는 공식 홈페이지 사업개요/단지배치도/평면안내
// 페이지에 표기된 수치를 그대로 반영했습니다. 청약 일정(8/14 GRAND OPEN ~ 9/8~10 정당계약)은
// 이미 진행된 일정이라 별도 캘린더 섹션 없이 FAQ에서 미계약/예비입주자 문의 안내로 대체했습니다.
const config = {
  slug: 'doosan-wevethezenith-bucheon',
  subdomain: '두산위브더제니스부천',
  projectName: '두산위브더제니스 부천',
  shortName: '두산위브더제니스',
  telNumber: '032-327-2008',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/doosan-wevethezenith-bucheon/main.jpg',
  adminPhones: ['01071901052'],
  sheetId: '',
  sheetTab: '두산위브더제니스부천',
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
      logo: { src: '/apt/doosan-wevethezenith-bucheon/logo-white.svg', alt: '두산위브더제니스 부천', width: 260, height: 34 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '032-327-2008',
    },

    hero: {
      eyebrowLine1: '49층 높이의 자부심부터 총 2,008세대 대단지의 가치,',
      eyebrowLine2: '두산건설과 쌍용건설이 선보이는 하이엔드 라이프',
      titleLine1: '두산위브더제니스',
      titleLine2: '부천',
      descLine1: '서울보다 서울을 더 가깝게 한 정거장',
      descLine1Accent: ['서울보다 서울을 더 가깝게'],
      descLine2: '소사역 더블 역세권과 GTX-B(예정)까지,',
      descLine3: '최고 49층 스카이라인 랜드마크가 완성됩니다.',
      bgImage: { src: '/apt/doosan-wevethezenith-bucheon/hero-bg.jpg', alt: '두산위브더제니스 부천 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '두산위브더제니스 부천', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '지금 상담 신청하고 특별 혜택을 확인하세요',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 공식 홈페이지 사업개요 페이지(overview.jpg) 표기 수치 그대로 반영
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '두산위브더제니스 부천',
      subtitle: '소사본1-1구역 재개발정비사업 · 최고 49층 하이엔드 브랜드타운',
      photo: { src: '/apt/doosan-wevethezenith-bucheon/overview-photo.jpg', alt: '두산위브더제니스 부천 단지 조감도' },
      thumbs: [
        { src: '/apt/doosan-wevethezenith-bucheon/thumb-gate.jpg', alt: '두산위브더제니스 부천 문주 전경' },
        { src: '/apt/doosan-wevethezenith-bucheon/thumb-plaza.jpg', alt: '두산위브더제니스 부천 공개공지 전경' },
        { src: '/apt/doosan-wevethezenith-bucheon/thumb-playground.jpg', alt: '두산위브더제니스 부천 어린이놀이터 전경' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: "소사본1-1구역 재개발정비사업 '두산위브더제니스 부천'" },
        { label: '대지위치', value: '경기도 부천시 소사구 소사본동 88-39번지 일대' },
        { label: '건축규모', value: ['지하 8층 ~ 최고 지상 49층, 7개동(101~107동)', '공동주택 및 업무시설(오피스텔), 판매시설, 부대복리시설'] },
        { label: '세대수', value: ['총 2,008세대(아파트 1,728세대 · 오피스텔 280실)', '일반분양 1,419세대(아파트 1,158세대 · 오피스텔 261실)'] },
        { label: '주택형', value: '39㎡(OA) · 45㎡(OA) · 59㎡ · 74㎡ · 84㎡' },
        { label: '부대시설', value: ['주민회의실, 키즈스테이션/주민카페, 주민운동시설', '어린이집, 작은도서관, 경로당, 어린이놀이터, 돌봄센터 등'] },
        { label: '시행', value: '소사본1의1구역 재개발정비사업조합' },
        { label: '시공', value: '두산건설(주) · 쌍용건설(주)' },
        { label: '견본주택', value: '부천시 원미구 상동 529-3번지' },
      ],
    },

    // 출처: 공식 홈페이지 입지환경 페이지 취지 + 뉴스 보도(교통·상권·의료 상세)를 종합해 구성
    location: {
      id: 'location',
      navLabel: '위치안내',
      label: 'LOCATION',
      eyebrowPlain: '서울보다 서울이 더 가까운',
      eyebrowAccent: ' 더블 역세권',
      title: '부천의 내일을 더 앞서 누리다',
      descTitle: '소사역 더블 역세권과 GTX-B(예정)로 완성되는 광역 교통망',
      descTitleAccent: ['소사역 더블 역세권', 'GTX-B(예정)'],
      descBody1: '1호선으로 신도림 약 18분·용산 30분대, 서해선으로 김포공항역 약 12분,',
      descBody1Accent: ['신도림 약 18분', '용산 30분대', '김포공항역 약 12분'],
      descBody2: '김포공항역에서 5·9호선 및 공항철도 환승까지 더해진 광역 이동 네트워크를 갖췄습니다.',
      mapImage: { src: '/apt/doosan-wevethezenith-bucheon/location-map.jpg', alt: '두산위브더제니스 부천 주변 교통망 및 생활 인프라 안내도' },
      features: [
        {
          num: '01',
          category: '교통',
          title: '더블 역세권 & GTX-B',
          desc: '수도권 1호선·서해선 소사역을 도보로 이용하고, 부천종합운동장역 GTX-B(예정)·소사역 KTX-이음(추진) 등 광역 교통 호재를 갖췄습니다.',
        },
        {
          num: '02',
          category: '생활',
          title: '이미 다 갖춰진 상권',
          desc: '소사역 상권, 부천자유시장, 이마트 부천점을 가깝게 이용하고 스타필드시티 부천·롯데백화점·현대백화점은 차량 10분대입니다.',
        },
        {
          num: '03',
          category: '의료',
          title: '가까운 의료 인프라',
          desc: '부천세종병원, 가톨릭대학교 부천성모병원 등 대형 의료시설을 가까이 두어 안심할 수 있습니다.',
        },
        {
          num: '04',
          category: '교육',
          title: '도보 통학 교육환경',
          desc: '부원초 도보 통학과 서울신학대학교, 인근 다수의 중·고교로 안정적인 교육환경을 갖췄습니다.',
        },
      ],
      disclaimer:
        '※ 상기 지역도는 실제와 다를 수 있으며, 지역도에 기재된 교통 및 각종 개발계획, 학군 배정 등은 사업주체나 해당기관의 사정에 따라 변경 또는 연기, 취소될 수 있으며 이는 시행사 및 시공사와 무관합니다.',
    },

    // 출처: 공식 홈페이지 메인 인트로 카피("두산건설과 쌍용건설이 선보이는...") 및 브랜드 철학 문구 참고
    premiumIntro: {
      eyebrow: 'DOOSAN WE’VE THE ZENITH',
      titleLine1: '서울보다 서울을 더 가깝게',
      titleLine2: '한 정거장, 두산위브더제니스 부천',
      descLine1: '두산건설과 쌍용건설이 선보이는 부천 단 하나의 하이엔드 라이프',
      descLine1Accent: ['두산건설과 쌍용건설'],
      descLine2: '최고 49층, 총 2,008세대 대단지가 완성하는 부천의 새로운 랜드마크를 만나보세요.',
      bgImage: { src: '/apt/doosan-wevethezenith-bucheon/premium-intro-bg.jpg', alt: '두산위브더제니스 부천 프리미엄 전경' },
    },

    // 출처: 공식 홈페이지 프리미엄 페이지 8개 항목(Traffic/Vision/View/Life/Space/Design/Premium ECO/Brand)
    // 카피 그대로 반영, 이미지는 같은 페이지의 "이미지컷"(참고용 스톡 이미지)을 항목별로 크롭해 사용
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '두산위브더제니스 부천이 특별한 ',
      titleAccent: '프리미엄 8',
      cardStyle: 'numbered',
      sideLabel: { scriptLine1: 'High-end', scriptLine2: 'Premium', number: '8' },
      cards: [
        {
          num: '01',
          title: ['서울을 더 가깝게', '누리는 특권'],
          desc: ['소사역 더블 역세권과 GTX-B(예정)로', '서울·수도권 어디든 빠르게 이동'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-traffic.jpg', alt: '소사역 더블 역세권 GTX-B 프리미엄 이미지' },
        },
        {
          num: '02',
          title: ['변화하는 부천의', '새로운 중심'],
          desc: ['소사역 일대 정비사업(예정)의', '프리미엄을 이끌 특급 개발비전'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-vision.jpg', alt: '소사역 일대 개발비전 이미지' },
        },
        {
          num: '03',
          title: ['49층 초고층', '랜드마크 대단지'],
          desc: ['최고 49층, 성주산 조망(일부세대) 및', '총 2,008세대 대규모 스케일'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-sky.jpg', alt: '49층 초고층 랜드마크 대단지 이미지' },
        },
        {
          num: '04',
          title: ['이미 다 갖춰진', '중심 인프라'],
          desc: ['주변 대형 상업시설과 편의·의료', '인프라까지 다 갖춘 주거환경'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-life.jpg', alt: '이미 다 갖춰진 중심 인프라 이미지' },
        },
        {
          num: '05',
          title: ['프리미엄 높은', '중소형 타입'],
          desc: ['4Bay(일부세대), 이면개방(일부세대),', '드레스룸 등 트렌디한 설계반영'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-space.jpg', alt: '프리미엄 높은 중소형 타입 이미지' },
        },
        {
          num: '06',
          title: ['차별화된', '단지특화 설계'],
          desc: ['남다른 미학의 하이엔드', '외관 특화 디자인 및 다채로운 커뮤니티 적용'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-design.jpg', alt: '차별화된 단지특화 설계 이미지' },
        },
        {
          num: '07',
          title: ['도심 속', '숲세권 주거타운'],
          desc: ['인근 다수의 공원과 성주산 등', '도심 속에서 누리는 에코 라이프'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-eco.jpg', alt: '도심 속 숲세권 주거타운 이미지' },
        },
        {
          num: '08',
          title: ['역사적인', '합작 프로젝트'],
          desc: ['대한민국을 대표하는 두산건설과', '쌍용건설이 함께 짓는 주거 명작'],
          image: { src: '/apt/doosan-wevethezenith-bucheon/premium-brand.jpg', alt: '두산건설 쌍용건설 합작 프로젝트 이미지' },
        },
      ],
    },

    // 출처: 공식 홈페이지 단지배치도 페이지(place.jpg) — 101~107동 배치, 문주·공개공지·어린이놀이터,
    // 타입별 세대수 범례(59A 321·59B 170·74A 156·74B 160·84A 105·84B 246세대, 39OA 136·45OA 125실) 원본 그대로 사용
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '고품격 디자인에 편리함까지 설계하는',
      titleLine2: '랜드마크 대단지의 남다른 품격',
      desc: '건축미학이 돋보이는 외관 디자인은 기본, 디테일 하나까지 고려한 격이 다른 단지설계로 삶의 수준을 높입니다.',
      singleImage: {
        src: '/apt/doosan-wevethezenith-bucheon/complex-sitemap.jpg',
        alt: '두산위브더제니스 부천 단지배치도(101~107동) 및 타입별 세대수, 문주·공개공지·어린이놀이터',
        width: 1200,
        height: 2006,
      },
    },

    // 출처: 공식 홈페이지 평면안내 페이지 8개 타입 전용/주거공용/공급/기타공용/계약면적 수치 그대로 반영
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'THE ZENITH',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['서울보다 서울을 더 가깝게 누리는', '두산위브더제니스 부천', '오피스텔 39·45㎡, 아파트 59·74·84㎡', '8가지 주거 타입을 만나보십시오.'],
      tabbedGroups: true,
      groups: [
        {
          area: '39㎡',
          types: [
            {
              letter: 'OA',
              countText: '총 140세대 중 일반분양 136실',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-39oa.png', alt: '두산위브더제니스 부천 39㎡OA 타입 평면도', width: 464, height: 525 },
              specs: { exclusive: '39.9300', common: '25.6971', supply: '65.6271', otherCommon: '61.1634', contract: '126.7905' },
            },
          ],
        },
        {
          area: '45㎡',
          types: [
            {
              letter: 'OA',
              countText: '총 140세대 중 일반분양 125실',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-45oa.png', alt: '두산위브더제니스 부천 45㎡OA 타입 평면도', width: 476, height: 574 },
              specs: { exclusive: '45.9600', common: '29.0562', supply: '75.0162', otherCommon: '70.4000', contract: '145.4162' },
            },
          ],
        },
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 348세대 중 일반분양 321세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-59a.png', alt: '두산위브더제니스 부천 59㎡A 타입 평면도', width: 475, height: 407 },
              specs: { exclusive: '59.9400', common: '27.5508', supply: '87.4908', otherCommon: '62.3617', contract: '149.8525' },
            },
            {
              letter: 'B',
              countText: '총 180세대 중 일반분양 170세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-59b.png', alt: '두산위브더제니스 부천 59㎡B 타입 평면도', width: 443, height: 403 },
              specs: { exclusive: '59.9800', common: '26.2836', supply: '86.2636', otherCommon: '62.4033', contract: '148.6669' },
            },
          ],
        },
        {
          area: '74㎡',
          types: [
            {
              letter: 'A',
              countText: '총 180세대 중 일반분양 156세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-74a.png', alt: '두산위브더제니스 부천 74㎡A 타입 평면도', width: 448, height: 438 },
              specs: { exclusive: '74.9500', common: '34.7715', supply: '109.7215', otherCommon: '77.9782', contract: '187.6997' },
            },
            {
              letter: 'B',
              countText: '총 180세대 중 일반분양 160세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-74b.png', alt: '두산위브더제니스 부천 74㎡B 타입 평면도', width: 493, height: 418 },
              specs: { exclusive: '74.9900', common: '33.6743', supply: '108.6643', otherCommon: '78.0198', contract: '186.6841' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '총 348세대 중 일반분양 105세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-84a.png', alt: '두산위브더제니스 부천 84㎡A 타입 평면도', width: 495, height: 399 },
              specs: { exclusive: '84.9500', common: '38.7698', supply: '123.7198', otherCommon: '88.3822', contract: '212.1020' },
            },
            {
              letter: 'B',
              countText: '총 348세대 중 일반분양 246세대',
              image: { src: '/apt/doosan-wevethezenith-bucheon/unit-84b.png', alt: '두산위브더제니스 부천 84㎡B 타입 평면도', width: 558, height: 432 },
              specs: { exclusive: '84.9400', common: '37.0667', supply: '122.0067', otherCommon: '88.3717', contract: '210.3784' },
            },
          ],
        },
      ],
    },

    // 출처: 공식 홈페이지 커뮤니티 페이지(PUBLIC & CULTURE AREA / ACTIVITY AREA) 6개 시설 그대로 반영
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      intro: {
        watermark: 'COMMUNITY',
        eyebrow: 'COMMUNITY',
        titleLine1: '일상의 여유와 여가의 품격까지 생각한',
        titleLine2: '남다른 커뮤니티 라이프를 선사하다',
        desc: '건강, 취미 등 입주민의 라이프 스타일을 위한 공간부터 아이들을 위한 공간까지 마련된 멀티 커뮤니티가 기다리고 있습니다.',
      },
      topImage: {
        src: '/apt/doosan-wevethezenith-bucheon/community-sheet.jpg',
        alt: '두산위브더제니스 부천 커뮤니티 시설 배치도(주민카페·독서실·작은도서관·GX룸·피트니스·골프연습장)',
        width: 1200,
        height: 3149,
      },
      facilities: [
        {
          key: 'cafe',
          icon: 'lounge',
          labelEn: 'CAFE LOUNGE',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-cafe.jpg', alt: '두산위브더제니스 부천 주민카페' },
          title: '주민카페',
          desc: '이웃과 소통하며 편안한 휴식과 티타임을 즐기는 커뮤니티 라운지입니다.',
        },
        {
          key: 'study',
          icon: 'library',
          labelEn: 'STUDY ROOM',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-study.jpg', alt: '두산위브더제니스 부천 독서실' },
          title: '독서실',
          desc: '집중력 높은 안락한 분위기 속에서 공부에 몰입할 수 있는 공간입니다.',
        },
        {
          key: 'library',
          icon: 'library',
          labelEn: 'LIBRARY',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-library.jpg', alt: '두산위브더제니스 부천 작은 도서관' },
          title: '작은 도서관',
          desc: '책과 함께 여유를 누리며 품격 있는 휴식을 더하는 문화공간입니다.',
        },
        {
          key: 'gx',
          icon: 'fitness',
          labelEn: 'GX ROOM',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-gx.jpg', alt: '두산위브더제니스 부천 GX룸' },
          title: 'GX룸',
          desc: '요가, 스트레칭 등 맨몸 운동을 할 수 있게 마련된 프라이빗한 공간입니다.',
        },
        {
          key: 'fitness',
          icon: 'fitness',
          labelEn: 'FITNESS',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-fitness.jpg', alt: '두산위브더제니스 부천 피트니스' },
          title: '피트니스',
          desc: '일상의 활력 증진과 건강관리를 돕는 다양한 운동기구가 마련된 공간입니다.',
        },
        {
          key: 'golf',
          icon: 'fitness',
          labelEn: 'GOLF PRACTICE',
          image: { src: '/apt/doosan-wevethezenith-bucheon/community-golf.jpg', alt: '두산위브더제니스 부천 골프연습장' },
          title: '골프연습장',
          desc: '쾌적한 실내에서 스윙 연습과 필드 감각을 키울 수 있는 연습공간입니다.',
        },
      ],
    },

    faq: {
      eyebrow: 'QUESTIONS & ANSWERS',
      titlePlain: '자주 묻는 ',
      titleAccent: '질문',
      desc: '두산위브더제니스 부천의 위치, 규모, 평형과 상담 방법을 한눈에 확인하세요.',
      items: [
        {
          q: '두산위브더제니스 부천은 어디에 있나요?',
          a: '경기도 부천시 소사구 소사본동 88-39번지 일대(소사본1-1구역 재개발정비사업)이며, 견본주택은 부천시 원미구 상동 529-3번지에 있습니다.',
        },
        {
          q: '총 세대수와 단지 규모는 어떻게 되나요?',
          a: '총 2,008세대(아파트 1,728세대, 오피스텔 280실) 규모이며, 이 중 1,419세대(아파트 1,158세대, 오피스텔 261실)가 일반분양됩니다. 지하 8층부터 최고 지상 49층, 7개동(101~107동)으로 계획되어 있습니다.',
        },
        {
          q: '시행사와 시공사는 어디인가요?',
          a: '시행은 소사본1의1구역 재개발정비사업조합, 시공은 두산건설(주)·쌍용건설(주) 컨소시엄입니다.',
        },
        {
          q: '분양하는 타입은 무엇인가요?',
          a: '오피스텔 39㎡(OA)·45㎡(OA)와 아파트 59㎡A·B, 74㎡A·B, 84㎡A·B까지 총 8개 타입입니다. 자세한 면적과 세대수는 세대안내(UNIT PLAN) 섹션에서 확인할 수 있습니다.',
        },
        {
          q: '교통 여건은 어떻게 되나요?',
          a: '수도권 1호선·서해선 소사역을 도보로 이용하는 더블 역세권이며, 부천종합운동장역 GTX-B(예정)와 소사역 KTX-이음(추진) 등 광역 교통 호재가 있습니다. 1호선으로 신도림 약 18분·용산 30분대, 서해선으로 김포공항역 약 12분이며, 김포공항역에서 5·9호선 및 공항철도로 환승할 수 있습니다.',
        },
        {
          q: '지금도 상담이나 청약 문의가 가능한가요?',
          a: '특별공급·1순위·2순위 청약과 당첨자 서류접수, 정당계약 일정은 이미 진행되었습니다. 미계약 세대나 예비입주자 관련 문의, 추가 안내가 필요하시면 이 페이지 하단 상담신청에 연락처를 남겨주세요. 담당자가 순차적으로 안내해 드립니다.',
        },
        {
          q: '커뮤니티 시설에는 어떤 것이 있나요?',
          a: '주민카페, 독서실, 작은도서관, GX룸, 피트니스, 골프연습장 등이 계획되어 있으며, 이 외에도 주민회의실, 키즈스테이션, 어린이집, 경로당, 돌봄센터 등 부대복리시설이 마련됩니다.',
        },
        {
          q: '주변 생활 인프라는 어떤가요?',
          a: '소사역 상권, 부천자유시장, 이마트 부천점을 가깝게 이용할 수 있고 스타필드시티 부천, 롯데백화점·현대백화점 중동점은 차량 10분대입니다. 부천세종병원, 가톨릭대학교 부천성모병원 등 의료 인프라도 가깝습니다.',
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '두산위브더제니스 부천',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 상담 및 안내를 도와드립니다. 미계약 세대·예비입주자 관련 문의도 편하게 남겨주세요.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 두산위브더제니스 부천 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
3. 개인정보의 처리 및 보유 기간 : 두산위브더제니스 부천 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    footer: {
      logo: { src: '/apt/doosan-wevethezenith-bucheon/logo-white.svg', alt: '두산위브더제니스 부천' },
      highlightText: '032-327-2008',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '소사본1의1구역 재개발정비사업조합' },
        { label: '시공', value: '두산건설(주) · 쌍용건설(주)' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 홈페이지에 사용된 CG, 이미지, 일러스트, 내용, 문구 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 세부 설계내용은 시공 시 인허가 과정에서 변동될 수 있으니, 계약 전 반드시 분양관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '032-327-2008',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    // 출처: 요청 반영 — PC(1024px 이상) 전용 우측 고정 서브메뉴바(퀵메뉴)
    quickMenu: {
      brand: "DOOSAN WE'VE THE ZENITH BUCHEON",
      phoneLabel: '분양문의',
      phone: '032-327-2008',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '두산위브더제니스 부천\n분양 상담을 도와드립니다.',
      address: '경기도 부천시 소사구 소사본동 88-39번지 일대',
      tagline: "SEOUL'S NEXT DOOR, THE ZENITH",
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },
  },
}

export default config
