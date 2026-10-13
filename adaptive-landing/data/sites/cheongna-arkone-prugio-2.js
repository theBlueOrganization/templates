// 청라 아크원 푸르지오2 (청라아크원푸르지오2.addupapt.kr) — 원본(cheongna-arkone-prugio)을 복제한 2차 분양팀 사이트.
// 대표번호 1811-4166, 상담 알림 010-8874-8525. 카톡 공유 제목(metaTitle)은 원본과 같은 "청라 아크원 푸르지오".
// 콘텐츠·이미지·브랜드 컬러/폰트: 공식 사이트 arkone-prugio.com(2026-09-16). 배치도·동호수표·평면도는
// 미공개라 "공개 예정" 이미지 사용(공개되면 교체).
// 사업개요·입지환경·PREMIUM 7·APT 타입별 세대수·사업개요/프리미엄 이미지(premium-*.webp 등)는
// 중개업소 교육자료(청라아크원푸르지오_중개업소배포자료 260928.pdf) 기준.
// 요청 반영(2026-10-14) — 청라 더리브 티아모 까사(원본)처럼 풀페이지 몰입형으로: signature.arkoneImmersive=true →
// 원본과 같은 SignatureArkoneImmersive 화면을 쓰고, 사업개요·유니트·프리미엄·입지도·팝업 혜택만
// arkoneImmersiveContent로 교육자료 내용으로 바꿈. 아래 header/summary/premiumSplits 등 기존 필드는 이 화면에선
// 안 쓰이고(footer·vipForm.privacyText만 사용), arkoneImmersive를 지우면 기존 구성으로 바로 복귀.
const config = {
  slug: 'cheongna-arkone-prugio-2',
  subdomain: '청라아크원푸르지오2',
  projectName: '청라 아크원 푸르지오2',
  // 카톡 등 공유 제목 — projectName("...2", 문자 구분용)과 분리
  metaTitle: '청라 아크원 푸르지오',
  shortName: '청라 아크원 푸르지오',
  // 몰입형 화면의 팝업·상담 섹션·푸터에 보이는 현장명("2" 없이)
  displayName: '청라 아크원 푸르지오',
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/cheongna-arkone-prugio-2/og.jpg',
  colorTheme: {
    navy: '#004B45',
    ink: '#002521',
    cream: '#F3F0EC',
    gold: '#8B7F71',
  },
  webfont: {
    family: "'SUIT', 'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css',
  },
  adminPhones: ['01088748525'],
  sheetId: '',
  sheetTab: '청라아크원푸르지오2',
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
    arkoneImmersive: true,

    // SignatureArkoneImmersive 콘텐츠 덮어쓰기 — 여기 없는 패널(인트로·히어로 영상·스타필드/병원/하나금융·
    // 미래 교통·커뮤니티·연혁)은 원본 그대로. 이미지 파일명만 쓰면 원본 v2 폴더, /apt/...면 그 경로
    arkoneImmersiveContent: {
      brandStats: [
        { label: '아파트', value: '868세대', sub: '전용 84㎡ · 103㎡ (6개 타입)' },
        { label: '오피스텔', value: '987실', sub: '전용 105㎡ · 121㎡ · 136㎡' },
        { label: '대지면적', value: '35,306.00㎡', sub: '10,680.07평' },
        { label: '주차대수', value: 'APT 1,389대', sub: '세대당 1.60대' },
      ],
      brandWide: { label: '건축규모', value: '지하 5층~지상 49층 총 6개동 1,855가구', sub: '연면적 424,558.08㎡ · 건폐율 34.78% · 용적률 799.57% · 2031년 입주예정' },
      unitTabs: [
        { key: '84A', label: 'FAMILY UNIT · 248세대', name: '전용 84.94㎡', desc: '공급 122.21㎡(36.97평) · 전용 25.70평. 전체 세대의 13.4%를 차지하는 대표 타입.', features: ['248세대', '공급 36.97평', '84㎡ 대표 타입'] },
        { key: '84B', label: 'FAMILY UNIT · 124세대', name: '전용 84.92㎡', desc: '공급 121.66㎡(36.80평) · 전용 25.69평. 선호도 높은 전용 84㎡ 가족형.', features: ['124세대', '공급 36.80평', '전용 84㎡'] },
        { key: '84C', label: 'FAMILY UNIT · 124세대', name: '전용 84.86㎡', desc: '공급 120.29㎡(36.39평) · 전용 25.67평. 선호도 높은 전용 84㎡ 가족형.', features: ['124세대', '공급 36.39평', '전용 84㎡'] },
        { key: '84D', label: 'FAMILY UNIT · 124세대', name: '전용 84.95㎡', desc: '공급 121.91㎡(36.88평) · 전용 25.70평. 선호도 높은 전용 84㎡ 가족형.', features: ['124세대', '공급 36.88평', '전용 84㎡'] },
        { key: '103A', label: 'GRAND UNIT · 124세대', name: '전용 103.85㎡', desc: '공급 147.04㎡(44.48평) · 전용 31.42평. 여유로운 중대형 가족형.', features: ['124세대', '공급 44.48평', '전용 103㎡'] },
        { key: '103B', label: 'GRAND UNIT · 124세대', name: '전용 103.99㎡', desc: '공급 148.20㎡(44.83평) · 전용 31.46평. 여유로운 중대형 가족형.', features: ['124세대', '공급 44.83평', '전용 103㎡'] },
      ],
      plan: {
        desc: '지하 5층~지상 49층 총 6개동 1,855가구, 오션·시티뷰를 동시에 누리는 2면 or 3면 개방구조(일부 가구).',
        points: ['최고 49층', '오션·시티뷰', '세대당 주차 1.60대'],
      },
      // 공식 사이트 입지환경도 원본(2472x2700, 세로형) — 잘리지 않게 contain + 지도 바탕색
      locationMap: { src: '/apt/cheongna-arkone-prugio-2/hd-location-map.webp', fit: 'contain', bg: '#eef0ec' },
      mapPins: ['7호선 국제업무단지역(계획) 도보 7분', '스타필드&돔구장 차량 10분', '서울아산청라병원 1.5km', '초교 신설 도보 약 5분'],
      premium: { eyebrow: '프리미엄 01—07', titleTop: '청라를 대표할', titleAccent: '일곱 가지 가치' },
      // 01~06: 공식 사이트 PREMIUM 01~06 문구·이미지(arkone-prugio.com, 2026-10-14 확인) + 교육자료 수치, 07: 교육자료 "실수요 선호 평형"
      premiumSlides: [
        { num: '01', img: '/apt/cheongna-arkone-prugio-2/hd-premium-traffic.webp', alt: '교통 네트워크 이미지컷', title: '서울과 하나되는 교통 네트워크', desc: '7호선 국제업무단지역(예정) 도보 7분, 청라국제도시역, 경인고속국도 지하화(예정)로 서울을 더 빠르게' },
        { num: '02', img: '/apt/cheongna-arkone-prugio-2/hd-overview.webp', position: 'center 30%', alt: '청라 아크원 푸르지오 조감도', title: '청라국제업무단지 대표 브랜드타운', desc: '청라 피크원 푸르지오 포함 총 2,911가구, 청라국제업무단지를 대표하는 푸르지오 브랜드타운' },
        { num: '03', img: '/apt/cheongna-arkone-prugio-2/hd-premium-view.webp', alt: '오션뷰 거실 이미지컷', title: '오션뷰 & 시티뷰 조망 특화', desc: '오션·시티뷰를 동시에 누리는 2면 or 3면 개방구조(일부 가구)' },
        { num: '04', img: '/apt/cheongna-arkone-prugio-2/hd-premium-school.webp', alt: '학교 이미지컷', title: '단지 앞 안전한 통학길의 교육 프리미엄', desc: '도보 약 5분 초교 신설(예정), 중교 신설(계획), 도보거리 경연초·중교, 청라달튼외국인학교' },
        { num: '05', img: 'starfield.webp', alt: '스타필드 청라 조감도', title: '완벽해지는 청라의 트렌디한 생활특권', desc: "하나드림타운, 돔구장&스타필드 청라('28년 개장 예정), 서울아산청라병원('29년 예정), 코스트코 청라" },
        { num: '06', img: '/apt/cheongna-arkone-prugio-2/hd-premium-scarcity.webp', alt: '거실 이미지컷', title: '높은 희소가치와 합리적 분양가', desc: '청라가 기다려온 신규공급, 2017년 이후 10년 만의 분양가 상한제 공급 아파트(500세대 이상 대단지 기준)' },
        { num: '07', img: '/apt/cheongna-arkone-prugio-2/hd-premium-unit.webp', alt: '주방 이미지컷', title: '실수요 선호 평형 · 넉넉한 주차', desc: '선호도 높은 전용 84㎡·103㎡ 중대형 868세대, 세대당 주차 1.60대' },
      ],
      // 원본의 "고급 와인 증정" 혜택은 원본 분양팀 행사라 이 현장에선 표시하지 않음
      noticeBenefit: null,
    },

    header: {
      logo: { src: '/apt/cheongna-arkone-prugio-2/logo-white.svg', alt: '청라 아크원 푸르지오', width: 161, height: 26 },
      logoSize: { base: 96, lg: 130, xl: 150 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1811-4166',
    },

    quickMenu: {
      brand: '청라 아크원 푸르지오',
      phoneLabel: '분양문의',
      phone: '1811-4166',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '청라 아크원 푸르지오\n관심고객등록을 도와드립니다.',
      address: '인천광역시 서해구 청라동 86-1번지 일원',
      tagline: 'ABSOLUTE REMARKABLE ONE',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    hero: {
      overlay: false,
      align: 'left',
      contentTop: true,
      contentVariant: 'poster',
      textColor: '#FFFFFF',
      keepTextShadow: true,
      titleLine1: 'CHEONG NA',
      titleLine2: 'ARK-ONE',
      titleLine3: 'PRUGIO',
      subtitleKr: '청라 아크원 푸르지오',
      taglineLabel: '아크원(ARK-ONE)이란?',
      tagline: [
        { text: 'A', big: true },
        { text: 'bsolute ' },
        { text: 'R', big: true },
        { text: 'emar' },
        { text: 'K', big: true },
        { text: 'able ' },
        { text: 'O', big: true },
        { text: 'ne' },
      ],
      eyebrowLine1: '청라의 절대적 기준이 될',
      eyebrowLine2: '단 하나의 주거명작을 상징',
      bgImage: { src: '/apt/cheongna-arkone-prugio-2/hero-bg.webp', alt: '청라 아크원 푸르지오 대표 조감도 — ABSOLUTE REMARKABLE ONE' },
      bgImageMobile: { src: '/apt/cheongna-arkone-prugio-2/hero-bg-mobile.webp', alt: '청라 아크원 푸르지오 대표 조감도(모바일) — ABSOLUTE REMARKABLE ONE' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '청라 아크원 푸르지오', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '관심고객등록 시 분양소식을 가장 먼저 안내드립니다',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '청라 아크원 푸르지오',
      subtitle: '청라국제업무단지 안에서 선보이는 대규모 푸르지오 주거복합단지, 아파트 868세대 중심의 새로운 주거 랜드마크',
      photo: { src: '/apt/cheongna-arkone-prugio-2/overview-photo.webp', alt: '청라 아크원 푸르지오 투시도' },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 사전홍보용으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다.',
      specItems: [
        { label: '사업명', value: '청라 아크원 푸르지오' },
        { label: '대지위치', value: '인천광역시 서해구 청라동 86-1번지 (청라국제업무단지 M5BL)' },
        { label: '대지면적', value: '35,306.00㎡ (10,680.07평)' },
        { label: '건축면적', value: '12,278.44㎡ (3,714.23평)' },
        { label: '연면적', value: '424,558.08㎡ (128,418.82평)' },
        {
          label: '건축규모',
          value: [
            '총 6개동 1,855세대 (APT 868세대 / OT 987실)',
            'APT 3개동 지하 5층 ~ 지상 44층',
          ],
        },
        {
          label: 'APT 공급',
          value: [
            '84㎡ 620세대 (84A 248 · 84B 124 · 84C 124 · 84D 124)',
            '103㎡ 248세대 (103A 124 · 103B 124)',
          ],
        },
        { label: '건폐율 / 용적률', value: '34.78% / 799.57%' },
        { label: '주차대수', value: 'APT 1,389대 (세대당 1.60대)' },
        { label: '입주예정', value: '2031년 예정' },
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시공', value: '(주)대우건설' },
      ],
    },

    location: {
      id: 'location',
      navLabel: '입지환경',
      title: 'CENTRAL LOCATION PRUGIO',
      titleAlign: 'left',
      titleWeight: 700,
      mapImage: { src: '/apt/cheongna-arkone-prugio-2/location-map.webp', alt: '청라 아크원 푸르지오 입지환경도 — 청라국제업무단지 반경 1km 교육·교통·생활 인프라' },
      features: [
        {
          icon: 'diamond',
          badgeVariant: 'gold',
          title: '청라 3.0의 중심, 청라국제업무단지',
          desc: '국제업무단지 활성화로 자족도시 기능이 강화되는 청라, 국제업무단지 중심축에 위치한 M5BL — 개발호재와 생활 인프라가 집중되는 핵심 입지',
        },
        {
          icon: '교통',
          title: '서울 · 인천 쾌속 교통망',
          desc: "서울 7호선 연장('30년 1차 개통예정), GTX-D·E 더블 광역급행철도 계획('35년 계획), 인천3호선 계획, 청라하늘대교 개통, 경인·제2외곽순환고속도로",
        },
        {
          icon: '생활',
          badgeVariant: 'gold',
          title: '원스톱 생활 인프라',
          desc: "코스트코·스타필드&돔구장(예정) 차량 10분, 서울아산청라병원 반경 1.5km('29년 계획), 청라호수공원·해변공원 등 수변 녹지, B1BL 연계 단지 내 상업시설",
        },
        {
          icon: 'book',
          title: '도보통학 안심학군',
          desc: '사업지 인근 신설되는 초·중교까지 도보 5분거리(예정), 청라달튼외국인학교 반경 1.5km, B1BL 내 종로엠스쿨 학원 MOU 교육 콘텐츠 연계 기대',
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 현황 및 개발 계획은 관계 기관의 발표를 참조해 작성된 것으로 사업계획 및 일정은 당사와 무관하며 추후 변경될 수 있습니다.',
    },

    premiumIntro: {
      bgImage: { src: '/apt/cheongna-arkone-prugio-2/premium-intro-bg.webp', alt: '청라 아크원 푸르지오 프리미엄 전경' },
      titleLine1: '공간의 특별함도 자부심의 높이도',
      titleLine2: '정점을 넘어 완성된 라이프로\n청라 아크원 푸르지오',
      descLine1: '청라 푸르지오 이후 13년 만에, 청라 피크원 푸르지오와 함께 총 2,911가구',
      descLine1Accent: ['13년 만에', '2,911가구'],
      descLine2: '청라를 대표하는 푸르지오 대규모 브랜드타운을 완성합니다.',
    },

    // 짧은 인덱스(숫자+제목) — 상세는 아래 premiumSplits. 교육자료 "PREMIUM 7" 기준
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '청라 아크원 푸르지오 ',
      titleAccent: 'PREMIUM 7',
      cardTextAlign: 'center',
      cards: [
        { num: '01', title: ['푸르지오', '브랜드 타운'], desc: ['청라 피크원 푸르지오 포함', '총 2,911가구 대규모 타운'] },
        { num: '02', title: ['국제업무단지의', '미래가치'], desc: ['하나드림타운·인천로봇랜드 등', '자족도시로 완성되는 청라'] },
        { num: '03', title: ['청라와 서울을 잇는', '쾌속 광역교통망'], desc: ['7호선 국제업무단지역(예정)', '도보 7분 · GTX-D·E 계획'] },
        { num: '04', title: ['원스톱', '생활인프라'], desc: ['스타필드·코스트코·', '서울아산청라병원(예정) 등'] },
        { num: '05', title: ['단지 앞 안심', '교육환경'], desc: ['도보권 초·중교 신설 계획', '(초 예정 · 중 계획)'] },
        { num: '06', title: ['실수요', '선호 평형'], desc: ['전용 84㎡·103㎡', '세대당 주차 1.60대'] },
        { num: '07', title: ['에코힐링', '스포츠 라이프'], desc: ['해변·노을공원과 배드민턴·', '농구·테니스 등 여가 인프라'] },
      ],
    },

    // PREMIUM 01~07 텍스트+이미지 좌우 분할(짝수 reverse). 01~06 이미지는 교육자료 페이지를 잘라 만든 것 —
    // 글자가 들어간 이미지라 잘리지 않도록 imageAspect를 원본 비율로 지정
    premiumSplits: [
      {
        eyebrow: 'PREMIUM 01',
        title: ['총 2,911가구', '푸르지오 브랜드 타운'],
        descLines: [
          '청라 피크원 푸르지오 1,056실 + 청라 아크원 푸르지오 1,855가구,',
          '국제업무단지에 형성되는 총 2,911가구 푸르지오 브랜드 타운',
          '청라 푸르지오 이후 13년 만에 다시 선보이는 푸르지오 아파트',
        ],
        imageAspect: '1544 / 1445',
        images: [{ src: '/apt/cheongna-arkone-prugio-2/premium-brandtown.webp', alt: '청라 피크원 푸르지오와 청라 아크원 푸르지오 총 2,911가구 브랜드 타운 투시도' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 02',
        title: ['국제업무단지의', '미래가치'],
        descLines: [
          '금융·첨단산업·의료·쇼핑·스포츠·문화·관광을 아우르는 대규모 자족시설,',
          '하나드림타운·로봇랜드·청라의료복합타운·영상문화복합단지·ICON-CITY 등',
          '계획고용 약 6.3만 명의 직주근접 배후수요',
        ],
        imageAspect: '1395 / 1067',
        images: [{ src: '/apt/cheongna-arkone-prugio-2/premium-jobs.webp', alt: '청라 주요 자족시설 고용계획 — 계획고용 약 6.3만 명' }],
      },
      {
        eyebrow: 'PREMIUM 03',
        title: ['청라와 서울을 잇는', '쾌속 광역교통망'],
        descLines: [
          "서울 7호선 연장 국제업무단지역(계획) 도보 7분 — '30년 1차 개통예정",
          "GTX-D·E 더블 광역급행철도 계획('35년 계획), 인천3호선 계획",
          '경인·제2외곽순환고속도로, 청라하늘대교로 영종~청라 접근성 강화',
        ],
        imageAspect: '1657 / 1766',
        images: [{ src: '/apt/cheongna-arkone-prugio-2/premium-transit.webp', alt: '서울 7호선 연장 및 GTX-D·E 계획 노선도' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 04',
        title: ['원스톱', '생활인프라'],
        descLines: [
          "스타필드&돔구장('28년 예정)·코스트코 차량 10분 거리",
          "서울아산청라병원 반경 1.5km('29년 계획), 청라호수공원·해변공원",
          'B1BL과 연계되는 단지 내 상업시설로 생활편의성 강화',
        ],
        imageAspect: '785 / 499',
        images: [
          { src: '/apt/cheongna-arkone-prugio-2/premium-starfield.webp', alt: "스타필드&돔구장 — '28년 예정, 연간 약 2,500만 명 방문 기대" },
          { src: '/apt/cheongna-arkone-prugio-2/premium-medical.webp', alt: "청라의료복합타운 — '29년 예정 의료·연구 기능 결합" },
        ],
      },
      {
        eyebrow: 'PREMIUM 05',
        title: ['단지 앞 안심', '교육환경'],
        descLines: [
          '사업지 인근 신설되는 초·중교까지 도보 5분거리(초 예정 · 중 계획)',
          '청라달튼 외국인학교 반경 1.5km',
          'B1BL 내 종로엠스쿨 학원 MOU 교육 콘텐츠 연계 기대',
        ],
        imageAspect: '494 / 568',
        images: [{ src: '/apt/cheongna-arkone-prugio-2/premium-school.webp', alt: '사업지와 초·중교 신설 예정 부지 위치도' }],
      },
      {
        reverse: true,
        eyebrow: 'PREMIUM 06',
        title: ['실수요', '선호 평형'],
        descLines: [
          '선호도 높은 전용 84㎡·103㎡ 중대형 상품 구성, APT 총 868세대',
          '세대당 주차 1.60대 — 청라3동 `12년 이후 입주단지 중 최상위권',
        ],
        imageAspect: '1297 / 654',
        images: [{ src: '/apt/cheongna-arkone-prugio-2/premium-unit-table.webp', alt: '청라 아크원 푸르지오 APT 분양면적표 — 84A·84B·84C·84D·103A·103B' }],
      },
      {
        eyebrow: 'PREMIUM 07',
        title: ['에코힐링', '스포츠 라이프'],
        descLines: ['해변·노을공원과 배드민턴·농구·테니스 등', '집 앞에서 누리는 자연·여가·스포츠 인프라'],
        images: [
          { src: '/apt/cheongna-arkone-prugio-2/premium-photo-03.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 1' },
          { src: '/apt/cheongna-arkone-prugio-2/premium-photo-03b.webp', alt: '청라 아크원 푸르지오 오션뷰 이미지컷 2' },
        ],
      },
    ],

    // ⚠️ 배치도·동호수표 미공개 — "공개 예정" 플레이스홀더
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '총 6개동 1,855세대(APT 868 · OT 987실)',
      titleLine2: '청라국제업무단지의 새로운 주거 랜드마크',
      desc: '단지 배치와 동호수 구성은 공식 분양 일정에 맞춰 순차적으로 공개될 예정입니다.',
      siteMap: {
        image: { src: '/apt/cheongna-arkone-prugio-2/complex-sitemap.webp', alt: '청라 아크원 푸르지오 단지 배치도 — 공개 예정', width: 1200, height: 1200 },
      },
      donghoChart: {
        image: { src: '/apt/cheongna-arkone-prugio-2/complex-dongho-chart.webp', alt: '청라 아크원 푸르지오 동호수 배치표 — 공개 예정', width: 1200, height: 1500 },
      },
    },

    // ⚠️ 평면도 미공개 — "공개 예정" 플레이스홀더
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'CHEONGNA ARKONE PRUGIO',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['청라국제도시의 중심에서 시작하는', '청라 아크원 푸르지오', '당신의 라이프스타일에 맞춘', '다양한 평면을 만나보십시오.'],
      groups: [
        {
          area: 'APT 84㎡',
          types: [
            {
              letter: 'A',
              countText: '248세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-84.webp', alt: 'APT 84㎡ A타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '84.94', supply: '122.21' },
            },
            {
              letter: 'B',
              countText: '124세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-84.webp', alt: 'APT 84㎡ B타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '84.92', supply: '121.66' },
            },
            {
              letter: 'C',
              countText: '124세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-84.webp', alt: 'APT 84㎡ C타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '84.86', supply: '120.29' },
            },
            {
              letter: 'D',
              countText: '124세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-84.webp', alt: 'APT 84㎡ D타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '84.95', supply: '121.91' },
            },
          ],
        },
        {
          area: 'APT 103㎡',
          types: [
            {
              letter: 'A',
              countText: '124세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-103.webp', alt: 'APT 103㎡ A타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '103.85', supply: '147.04' },
            },
            {
              letter: 'B',
              countText: '124세대',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-apt-103.webp', alt: 'APT 103㎡ B타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '103.99', supply: '148.20' },
            },
          ],
        },
        {
          area: 'OT 105㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-ot-105.webp', alt: 'OT 105㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '105' },
            },
          ],
        },
        {
          area: 'OT 121㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-ot-121.webp', alt: 'OT 121㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '121' },
            },
          ],
        },
        {
          area: 'OT 136㎡',
          types: [
            {
              letter: '',
              countText: 'OT 총 987실(전용 105㎡·121㎡·136㎡) 중',
              image: { src: '/apt/cheongna-arkone-prugio-2/unit-ot-136.webp', alt: 'OT 136㎡ 타입 평면도 — 공개 예정', width: 900, height: 1300 },
              specs: { exclusive: '136' },
            },
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '청라 아크원 푸르지오',
      titleLine2: '관심고객 사전등록',
      desc: '간단한 정보를 입력해 주시면 청라 아크원 푸르지오의 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.',
      serviceOptions: ['관심고객 사전등록', '분양일정 문자 안내'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 관심고객 등록 접수 및 분양 일정 안내 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 관심고객 등록 및 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/cheongna-arkone-prugio-2/logo-white.svg', alt: '청라 아크원 푸르지오', width: 130, height: 21 },
      logoAlign: 'center',
      highlightText: '분양문의 1811-4166',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)청라스마트시티' },
        { label: '시행사업자번호', value: '866-88-02497' },
        { label: '시공', value: '(주)대우건설' },
        { label: '시공사업자번호', value: '104-81-58180' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1811-4166',
      csHours: 'AM 09:00 ~ PM 19:00',
    },

    popup: {
      interest: {
        enabled: true,
        variant: 'light',
        eyebrow: 'INTEREST',
        title: '관심고객등록',
        desc: '간단한 정보를 입력해 주시면\n청라 아크원 푸르지오의 분양 일정을 가장 먼저 안내해드립니다.',
        submitLabel: '관심고객 등록',
      },
    },
  },
}

export default config
