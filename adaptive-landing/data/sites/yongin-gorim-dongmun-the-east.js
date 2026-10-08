// 용인 고림 동문 디 이스트(THE EST) — 용인시 처인구 고림동 620번지 일원. 시행 ㈜블루엘, 시공 동문건설(주).
// 지하 2층~지상 23층 6개동(101~106동), 59㎡·75㎡A·75㎡B·84㎡A·84㎡B 총 350세대(74 / 129 / 41 / 70 / 36).
// 출처: 공식 홈페이지(https://www.yongin-dmapt.co.kr/) — 사업개요(about_img 조감도 + 표), 프리미엄(THE EST PREMIUM 6),
//   입지환경(environment_img1 광역 위치도 / environment_img2 4가지 입지 문구·이미지컷), 설계특화(design-img1),
//   커뮤니티(community-img1), 단지배치도·동호배치도(danji-img1), 평면정보(59~84b_img1 면적표 / img2에서 확장기본형 평면만 크롭)
//   이미지를 받아 크롭/webp 변환(public/apt/yongin-gorim-dongmun-the-east/). 로고는 메인 logo_w(흰색)·logo_c(남색) 원본.
//   반도체 클러스터 카드 이미지는 광역 위치도에서 삼성·SK하이닉스 부분만 크롭(feature-semicon.webp).
// 2026-10-08 사용자 제공 고화질 원본으로 교체 — 항공조감도(hero-1·og), 투시도(hero-2·premium-split), 전체조감도(overview·PREMIUM 06),
//   배치도(complex-siteplan), 특화 4종 주출입구·어린이놀이터·주민공동시설·근린생활시설(special-*, 생활·자연 카드). 원본 jpg는 커밋하지 않음.
// 대표번호 1599-4229, 상담 접수 알림 010-3957-2256(이윤정 팀장) — 2026-10-08 사용자 전달값.
const config = {
  slug: 'yongin-gorim-dongmun-the-east',
  // 용인고림동문디이스트.addupapt.kr → /apt/yongin-gorim-dongmun-the-east (middleware.js)
  subdomain: '용인고림동문디이스트',
  projectName: '용인 고림 동문 디 이스트',
  shortName: '용인 고림 동문 디 이스트',
  telNumber: '1599-4229',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/yongin-gorim-dongmun-the-east/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01039572256'],
  // 문자 본문에 담당자명 표기용
  adminPhoneNames: {
    '01039572256': '이윤정',
  },
  sheetId: '',
  sheetTab: '용인고림동문디이스트',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 공식 홈페이지 톤 — 남색(#2b3153) + 브라운 베이지(#9e8368) + 아이보리
  colorTheme: {
    navy: '#2b3153',
    ink: '#2b3153',
    cream: '#f5f2ee',
    gold: '#9e8368',
    visitBtnBg: '#9e8368',
    visitBtnColor: '#ffffff',
  },

  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    serifFamily: "'Nanum Myeongjo', var(--font-noto-serif-kr, 'Noto Serif KR'), serif",
    cssUrl:
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  },
  extraFontLinks: [
    'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap',
  ],

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
      logo: {
        src: '/apt/yongin-gorim-dongmun-the-east/logo-white.png',
        alt: 'THE EST 용인 고림 | 동문 디 이스트',
        width: 137,
        height: 49,
      },
      logoSize: { base: 96, lg: 112, xl: 120 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '관심고객등록'],
      quickCtaLabel: '관심고객등록',
      phone: '1599-4229',
      // 히어로(밝은 하늘 투시도) 위 투명 구간에서는 공식 홈페이지처럼 남색 메뉴·전화번호 + 남색 로고
      transparentDark: true,
      logoDark: {
        src: '/apt/yongin-gorim-dongmun-the-east/logo-color.png',
        alt: 'THE EST 용인 고림 | 동문 디 이스트',
        width: 137,
        height: 49,
      },
    },

    // 진입 시 관심고객 팝업 — 이미지 팝업 없이 방문예약 폼만(파주 호반써밋 이스트파크 초기 구성과 동일)
    popup: {
      enabled: false,
      visitForm: {
        enabled: true,
        // 티아모 까사처럼 인트로가 끝난 뒤(0.7초 후) 띄움
        afterIntro: true,
        accentColor: '#2b3153',
        title: '관심고객등록',
        desc: '상담 가능시간 10:00~18:00 (담당자와 조율가능)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약', '자료요청', '기타문의'],
        submitLabel: '관심고객 등록',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: 'THE EST',
      phoneLabel: '분양문의',
      phone: '1599-4229',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      menuBg: '#2b3153',
      ctaTargetId: 'vip-reservation',
      deskText: '용인 고림 동문 디 이스트\n분양 상담을 도와드립니다.',
      address: '용인시 처인구 고림동 620번지 일원',
      tagline: '용인 고림의 완성된 자리를 바로 누리다',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    // 인트로 — 청라 더리브 티아모 까사와 같은 연출(1단계 3분할 이미지+영문 카피 4s → 2단계 링 펄스+브랜드 임팩트, 5.6s 종료). 2026-10-08 사용자 요청
    //   로고 원본이 137px라 확대하면 흐려서 브랜드 단계는 현장명 텍스트로 표시. 색은 현장 남색/베이지
    arkoneIntro: {
      ariaLabel: '용인 고림 동문 디 이스트를 소개하는 인트로',
      scenes: [
        { img: '/apt/yongin-gorim-dongmun-the-east/hero-1.webp', label: '01 · VISION', name: '반도체 클러스터 직주근접' },
        { img: '/apt/yongin-gorim-dongmun-the-east/hero-2.webp', label: '02 · LANDMARK', name: '지상 23층 6개동 총 350세대' },
        { img: '/apt/yongin-gorim-dongmun-the-east/special-playground.webp', label: '03 · PARK', name: '지상에 차 없는 공원형 단지' },
      ],
      copySmall: "YONGIN GORIM'S NEW PLACE",
      copyLine1: 'Life in',
      copyLine2: 'Motion.',
      brandName: '용인 고림 동문 디 이스트',
      tagline: 'THE EST · DONGMUN',
      theme: {
        base: '#2b3153',
        stageOne: 'radial-gradient(circle at 50% 35%, #46507f 0, #2b3153 48%, #161a30 100%)',
        stageTwo: 'radial-gradient(circle at center, #3c4570, #2b3153 42%, #171b33 100%)',
        ring: 'rgba(196, 168, 138, 0.45)',
        accent: '#c4a88a',
        sub: '#dfe2ee',
      },
    },

    // 히어로 — 공식 홈페이지(https://www.yongin-dmapt.co.kr/) 메인과 같은 방식(2026-10-08 사용자 요청):
    //   메인 영상 한 번 재생(introVideo, 인트로가 끝난 뒤 시작) → 끝나면 영상이 사라지며 정지 화면(투시도) + 문구(estCopy)
    //   + PC 우상단 회전 '관심고객 등록' 배지가 나타나고, 헤더가 남색 글씨로 바뀜(header.transparentDark).
    //   영상: 공식 메인 영상(PC vis_mov 1920x1080 17.6s / 모바일 m_vis_mov 466x720 30s)을 ffmpeg로 재압축(3.3MB / 1.2MB, 무음).
    //   정지 화면: 사용자 제공 고화질 투시도 원본(@투시도.jpg). 공식 캡처보다 하늘이 좁아 문구가 건물에 겹쳐서 원본 맨 위
    //   하늘 띠를 늘려 위로 이어 붙임(hero-sky.webp 2400x1768 / 모바일 hero-sky-m.webp 103동 중심 세로 크롭). PC는 세로 45% 기준 배치
    hero: {
      hideText: true,
      overlay: false,
      mobileScrollMouse: true,
      introVideo: {
        src: '/apt/yongin-gorim-dongmun-the-east/hero-video.mp4',
        srcMobile: '/apt/yongin-gorim-dongmun-the-east/hero-video-m.mp4',
        poster: '/apt/yongin-gorim-dongmun-the-east/hero-video-poster.webp',
        posterMobile: '/apt/yongin-gorim-dongmun-the-east/hero-video-poster-m.webp',
      },
      bgImage: {
        src: '/apt/yongin-gorim-dongmun-the-east/hero-sky.webp',
        alt: '용인 고림 동문 디 이스트 투시도',
      },
      // PC 배경 세로 기준 45% — 와이드 화면(예: 1889x890)에서 아래 기준이면 건물이 문구 뒤로 올라와 겹쳐서 아래로 내림(2026-10-08 사용자 요청)
      bgPositionY: '45%',
      bgImageMobile: {
        src: '/apt/yongin-gorim-dongmun-the-east/hero-sky-m.webp',
        alt: '용인 고림 동문 디 이스트 투시도',
      },
      estCopy: {
        color: '#2b3153',
        brand: '용인 고림 | 동문 디 이스트',
        lines: [
          { light: '초중고 ', strong: '안심교육이 곁에!', dots: 4 },
          { light: '반도체 ', strong: '프리미엄은 바로!', dots: 4 },
        ],
        badge: 'GRAND OPEN',
        ctaBadge: {
          ringText: 'THE EST · CUSTOMERS INTEREST · ',
          label: ['관심고객', '등록'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '용인 고림 동문 디 이스트', textLight: ' 공식 안내센터입니다.' },
        ],
        announceBg: '#2b3153',
        bubbleText: '관심고객등록',
        dotColor: '#9e8368',
        callLabel: '전화상담',
        visitLabel: '관심고객등록',
      },
    },

    // 사업개요 — 공식 홈페이지 사업개요(about.html) 표 + 조감도
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/yongin-gorim-dongmun-the-east/overview-photo.webp',
        alt: '용인 고림 동문 디 이스트 전체조감도',
      },
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      specItems: [
        { label: '사업명', value: '용인 고림 동문 디 이스트' },
        { label: '대지위치', value: '경기도 용인시 처인구 고림동 620번지 일원' },
        { label: '건축규모', value: ['지하 2층, 지상 23층 / 6개동', '총 350세대'] },
        { label: '대지면적', value: '18,881.0000㎡' },
        { label: '연면적', value: '59,779.9404㎡' },
        { label: '건축면적', value: '4,154.7730㎡' },
        { label: '건폐율/용적률', value: '22.01% / 199.40%' },
        { label: '시행/시공', value: '㈜블루엘 / 동문건설(주)' },
      ],
    },

    // 위치안내 — 입지환경(environment.html) 광역 위치도 + 4가지 입지 항목
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '누릴 수록 가치가 돋보이는 ',
      eyebrowAccent: '생활특권',
      title: 'Premium Location',
      descTitle: '생활특권의 새로운 기준이 되다, 용인 고림 동문 디 이스트',
      descTitleAccent: ['용인 고림 동문 디 이스트'],
      descBody1: '12년 원스톱 명문학군과 반도체 클러스터, 쾌속교통망까지',
      descBody1Accent: ['반도체 클러스터'],
      descBody2: '올세권 라이프에서 미래비전까지 한 발 앞선 라이프를 누립니다.',
      mapImage: {
        src: '/apt/yongin-gorim-dongmun-the-east/location-map.webp',
        alt: '용인 고림 동문 디 이스트 광역 위치도',
        width: 2000,
        height: 1611,
      },
      features: [
        {
          titlePrefix: '12년 원스톱',
          titleStrong: '교육',
          titleSuffix: '으로',
          tag: 'Education',
          image: {
            src: '/apt/yongin-gorim-dongmun-the-east/feature-education.webp',
            alt: '등교하는 아이들 이미지컷',
          },
          descStrong: '유치원(예정), 고진초·중, 고림고',
          descRest: ' 등 도보 학세권과 준비된 교육 인프라',
        },
        {
          titlePrefix: '반도체 클러스터',
          titleStrong: '수혜',
          titleSuffix: '로',
          tag: 'Vision',
          image: {
            src: '/apt/yongin-gorim-dongmun-the-east/feature-semicon.webp',
            alt: '삼성 용인 첨단시스템 반도체 국가산단·SK하이닉스 용인 반도체 클러스터 위치도',
          },
          descStrong: '삼성전자(기흥·화성), SK하이닉스(원삼)',
          descRest: '로의 우수한 직주근접',
        },
        {
          titlePrefix: '막힘 없는',
          titleStrong: '교통',
          titleSuffix: '으로',
          tag: 'Traffic',
          image: {
            src: '/apt/yongin-gorim-dongmun-the-east/feature-traffic.webp',
            alt: '도로 이미지컷',
          },
          descStrong: '에버라인 고진역, 용인IC, 국도 42·45호선',
          descRest: ' 인접으로 강남권·수도권 이동 편리',
        },
        {
          titlePrefix: '잘 갖춰진',
          titleStrong: '생활',
          titleSuffix: '로',
          tag: 'Life',
          image: {
            src: '/apt/yongin-gorim-dongmun-the-east/feature-life.webp',
            alt: '근린생활시설 특화 투시도',
          },
          descStrong: '이마트, 하나로마트, 병원',
          descRest: ' 등 준비된 중심 인프라와 경안천·문화공원(예정) 힐링 라이프',
        },
      ],
      disclaimer:
        '※ 지역도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가 있습니다. 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
    },

    // 프리미엄 인트로 — 왼쪽 투시도 + 오른쪽 세로 카피
    premiumIntro: {
      split: true,
      eyebrow: 'THE EST',
      titleLine1: '삶을 움직이는 집, THE EST',
      paragraphs: [
        ['용인 고림의 완성된 자리', '지하 2층~지상 23층 6개동', '총 350세대'],
        ['남향 위주 배치와 4BAY 맞통풍 설계,', '지상에 차 없는 공원형 단지로', '쾌적하고 여유로운 라이프가 시작됩니다'],
      ],
      imageBadge: '투시도',
      bgImage: {
        src: '/apt/yongin-gorim-dongmun-the-east/premium-split.webp',
        alt: '용인 고림 동문 디 이스트 투시도',
      },
    },

    // 프리미엄 가치 — 공식 홈페이지 'THE EST PREMIUM 6'(about/premium.html) 디자인 그대로(cardStyle 'zigzag'). 2026-10-08 사용자 요청
    //   카드 이미지(premium6-0N)는 공식 premium_img.jpg에서 원 배경째 크롭 — 배경 남색(#2b3153)이 섹션 배경과 같음
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: 'THE EST',
      titlePlain: '용인 고림 동문 디 이스트 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: '#2b3153',
        head: '#849db3',
        accentOdd: '#b49c92',
        accentEven: '#9fb4c5',
        line: '#4e5776',
      },
      cards: [
        {
          num: '01',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-01.webp', alt: '등교하는 아이들', width: 500, height: 400 },
          title: '12년 원스톱 명문교육',
          desc: ['단지 앞 고진초·중, 고림고 등', '우수한 교육여건 조성'],
        },
        {
          num: '02',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-02.webp', alt: '반도체 칩', width: 500, height: 400 },
          title: '반도체 클러스터 수혜',
          desc: ['삼성전자, SK하이닉스의', 'K-반도체 클러스터 직주근접'],
        },
        {
          num: '03',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-03.webp', alt: '자동차', width: 640, height: 370 },
          title: '막힘 없는 쾌속교통망',
          desc: ['용인경전철(에버라인) 고진역,', '용인IC 10분내 위치'],
        },
        {
          num: '04',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-04.webp', alt: '쇼핑백을 든 가족', width: 524, height: 456 },
          title: '잘 갖춰진 생활인프라',
          desc: ['대형마트, 처인구청(예정),', '중심상업지구 등 인접'],
        },
        {
          num: '05',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-05.webp', alt: '나뭇잎', width: 500, height: 420 },
          title: '쉼이 있는 힐링라이프',
          desc: ['도심 속 여유를 선사하는', '경안천과 단지 앞 문화공원(예정)'],
        },
        {
          num: '06',
          image: { src: '/apt/yongin-gorim-dongmun-the-east/premium6-06.webp', alt: '전구', width: 372, height: 456 },
          title: '비규제지역 프리미엄',
          desc: ['10.15 부동산규제 미지정 지역으로', '프리미엄 상승 기대'],
        },
      ],
    },

    // 단지안내 — 공식 홈페이지 단지정보(설계특화/커뮤니티/단지·동호배치도) 원본 이미지를 원형 썸네일 탭으로
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        {
          label: '단지특화',
          thumb: '/apt/yongin-gorim-dongmun-the-east/complex-thumb-special.webp',
          title: '단지특화',
          blocks: [
            { label: '주출입구', image: { src: '/apt/yongin-gorim-dongmun-the-east/special-gate.webp', alt: '주출입구 특화 투시도', width: 1800, height: 1056 } },
            { label: '어린이놀이터', image: { src: '/apt/yongin-gorim-dongmun-the-east/special-playground.webp', alt: '어린이놀이터 특화 투시도', width: 1800, height: 1080 } },
            { label: '주민공동시설', image: { src: '/apt/yongin-gorim-dongmun-the-east/special-community.webp', alt: '주민공동시설 특화 투시도', width: 1800, height: 1080 } },
            { label: '근린생활시설', image: { src: '/apt/yongin-gorim-dongmun-the-east/special-retail.webp', alt: '근린생활시설 특화 투시도', width: 1800, height: 1065 } },
          ],
        },
        {
          label: '배치도',
          thumb: '/apt/yongin-gorim-dongmun-the-east/complex-thumb-siteplan.webp',
          title: '배치도',
          blocks: [
            { label: 'THE EST', image: { src: '/apt/yongin-gorim-dongmun-the-east/complex-siteplan.webp', alt: '용인 고림 동문 디 이스트 단지 배치도', width: 2000, height: 1582 } },
          ],
        },
        {
          label: '설계특화',
          thumb: '/apt/yongin-gorim-dongmun-the-east/complex-thumb-design.webp',
          blocks: [
            {
              label: 'THE EST',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/complex-design.webp',
                alt: '디테일이 다른 단지설계 — 투시도·근린생활시설·주출입구, 쾌적한 단지설계·아이맞춤 단지설계·자연특화 테마조경·단지 중앙 개방감 확보',
                width: 1300,
                height: 3023,
              },
            },
          ],
        },
        {
          label: '커뮤니티',
          thumb: '/apt/yongin-gorim-dongmun-the-east/complex-thumb-community.webp',
          blocks: [
            {
              label: 'THE EST',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/complex-community.webp',
                alt: '커뮤니티 — 1F 피트니스센터·골프연습장·샤워실, 2F 주민회의실·카페테리아·키즈카페',
                width: 1300,
                height: 3206,
              },
            },
          ],
        },
        {
          label: '단지·동호배치도',
          thumb: '/apt/yongin-gorim-dongmun-the-east/complex-thumb-dong.webp',
          title: '단지·동호배치도',
          blocks: [
            {
              label: 'THE EST',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/complex-dong.webp',
                alt: '단지배치도 및 동호배치도(101~106동, 59 74세대 / 75A 129세대 / 75B 41세대 / 84A 70세대 / 84B 36세대)',
                width: 1300,
                height: 1758,
              },
            },
          ],
        },
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 과정 및 실제 시공 시 변경될 수 있습니다.',
    },

    // 세대안내 — 59㎡ / 75㎡A·B / 84㎡A·B. 평면은 공식 홈페이지 평면정보의 확장기본형, 면적은 같은 페이지 면적표 기준
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'THE EST',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: [
        '남향 위주 배치와',
        '4BAY 맞통풍 설계로',
        '채광과 통풍을 높인',
        '삶을 움직이는 집, THE EST',
      ],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: '',
              countText: '74세대',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/unit-59.webp',
                alt: '59㎡ 타입 평면도(확장기본형)',
                width: 1000,
                height: 680,
              },
              specs: {
                exclusive: '59.9010',
                common: '23.0287',
                supply: '82.9297',
                otherCommon: '53.3079',
                contract: '136.2376',
              },
            },
          ],
        },
        {
          area: '75㎡',
          types: [
            {
              letter: 'A',
              countText: '129세대',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/unit-75a.webp',
                alt: '75㎡A 타입 평면도(확장기본형)',
                width: 1000,
                height: 680,
              },
              specs: {
                exclusive: '75.7753',
                common: '29.6446',
                supply: '105.4199',
                otherCommon: '67.4349',
                contract: '172.8548',
              },
            },
            {
              letter: 'B',
              countText: '41세대',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/unit-75b.webp',
                alt: '75㎡B 타입 평면도(확장기본형)',
                width: 740,
                height: 950,
              },
              specs: {
                exclusive: '75.7218',
                common: '28.4081',
                supply: '104.1299',
                otherCommon: '67.3873',
                contract: '171.5172',
              },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '70세대',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/unit-84a.webp',
                alt: '84㎡A 타입 평면도(확장기본형)',
                width: 1000,
                height: 680,
              },
              specs: {
                exclusive: '84.7910',
                common: '28.2142',
                supply: '113.0052',
                otherCommon: '75.4583',
                contract: '188.4635',
              },
            },
            {
              letter: 'B',
              countText: '36세대',
              image: {
                src: '/apt/yongin-gorim-dongmun-the-east/unit-84b.webp',
                alt: '84㎡B 타입 평면도(확장기본형)',
                width: 780,
                height: 1020,
              },
              specs: {
                exclusive: '84.7677',
                common: '27.7848',
                supply: '112.5525',
                otherCommon: '75.4375',
                contract: '187.9900',
              },
            },
          ],
        },
      ],
    },

    // 관심고객등록 폼 — 히어로 다음 + 페이지 맨 아래 두 번 렌더링
    vipForm: {
      id: 'vip-reservation',
      showAfterVideo: true,
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '용인 고림 동문 디 이스트',
      titleLine2: '관심고객등록',
      desc: '간단한 정보를 남겨주시면 「용인 고림 동문 디 이스트」의 분양 정보와 상세 안내를 가장 빠르게 전해드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/yongin-gorim-dongmun-the-east/logo-white.png',
        alt: 'THE EST 용인 고림 | 동문 디 이스트',
        width: 137,
        height: 49,
      },
      logoAlign: 'center',
      logoWidth: 137,
      // '자리' 앞에서 줄바꿈 — 모바일에서 '누리다'만 따로 떨어지던 것(2026-10-08 사용자 요청)
      highlightText: '용인 고림의 완성된\n자리를 바로 누리다\n용인 고림 동문 디 이스트',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '㈜블루엘' },
        { label: '시공', value: '동문건설(주)' },
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
      csPhone: '1599-4229',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
