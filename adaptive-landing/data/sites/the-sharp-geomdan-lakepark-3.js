// 더샵 검단레이크파크 — 요청 반영: 전달받은 8절전단 PDF(0515_검단더샵레이크파크_8절전단_최종.pdf)를
// 분석해 실제 문구·수치와 전체 색상 무드를 반영했습니다.
// 콘텐츠 출처: PDF 원문 — 2,857세대(59㎡ 1,337세대·84㎡ 1,520세대), 시공 포스코이앤씨, 6월 초
// 오픈예정, 견본주택 신검단중앙역 3·4번출구, 검단호수공원역(인천1호선)·완정역(인천2호선) 더블역
// 생활권, 분양가상한제, 생애최초·신혼부부 특별공급 100% 사은품, 4대 인프라 카피 등.
// 히어로·사업개요·프리미엄·위치·조경 이미지는 카카오톡으로 전달받은 실제 CG 원본(004 전체조감도A·
// 005 조감도_23BL·007 광역조감도·009 액티브라운지·010 가로수길·014 플라워필드, 7000px대 원본)을
// 리사이즈·webp 변환해 public/apt/the-sharp-geomdan-lakepark-3/에 넣었습니다. 단, 지도 인포그래픽
// (location.mapImage)·단지배치도·동호수배치표·평면도·로고는 원본 자료가 없어 여전히 placeholder.
//
// 추가로 더샵 검단레이크파크_3.5리플렛-시안.pdf(4p 리플렛)도 분석해 반영 — 대지위치·견본주택
// 주소는 "서구"가 맞음(앞서 "검단구"로 잘못 표기했던 부분 정정), premiumValue 6개 카드는 4p의
// "검단신도시 정점을 누릴 입지 첫번째 더샵" No.1~6 리스트 그대로, premiumSplits(Waterfront
// Premium)는 3p "송도 지나 청라 다음 검단" 비교 카피 그대로 반영.
//
// colorTheme은 PDF 전단의 무드(짙은 네이비 배경 + 선명한 스카이블루/시안 포인트, 흰 텍스트)를
// 반영했습니다. 기존 더샵검단레이크파크2(부드러운 파스텔 네이비·하늘색)보다 더 짙고 채도 높은
// 네이비+시안 조합으로 톤을 달리해 "다른 디자인 느낌" 요청도 함께 반영.
const config = {
  slug: 'the-sharp-geomdan-lakepark-3',
  // 검단레이크파크2가 접미사 'T'를 쓰는 것과 같은 방식으로 'p' 접미사로 구분
  subdomain: '더샵검단레이크파크p',
  // 요청 반영 — projectName(메타데이터·title)만 "3"을 유지, 홈페이지 화면 문구는 전부 "더샵 검단레이크파크"로 표기
  projectName: '더샵 검단레이크파크3',
  shortName: '더샵 검단레이크파크',
  // 요청 반영 — 카카오톡 등 공유 링크에는 "3"을 뺀 이름만 노출
  metaTitle: '더샵 검단레이크파크',
  // 요청 반영 — 현장 전용 상담 트래킹 번호(단지번호)
  telNumber: '1811-4166',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/the-sharp-geomdan-lakepark-3/og.jpg',
  // 요청 반영 — 상담 접수 알림을 받을 번호
  adminPhones: ['01044411561'],
  sheetId: '',
  sheetTab: '더샵검단레이크파크3',
  showUtmInSms: true,
  kakao: true,

  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 출처: PDF 전단 무드(짙은 네이비 배경 + 시안 포인트) — 기존 검단레이크파크2보다 더 짙고
  // 채도 높은 톤으로 차별화
  colorTheme: {
    navy: '#0a1a33',
    ink: '#050d1c',
    cream: '#eaf4fb',
    gold: '#29b6f6',
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
      logo: { src: '/apt/the-sharp-geomdan-lakepark-3/logo-white.svg', alt: '더샵 검단레이크파크', width: 130, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1811-4166',
    },

    // 요청 반영 — 더샵검단레이크파크(원본) 현장의 방문상담 예약 혜택 팝업을 동일하게 반영
    popupNotice: {
      enabled: true,
      eyebrow: 'EVENT',
      title: '방문상담 예약 혜택',
      benefits: [
        { label: '방문 고객', desc: '스타벅스 커피쿠폰', note: '(선착순 20명)' },
        { label: '계약 고객', desc: '신세계상품권 20만원', note: '(선착순 10명)' },
      ],
      target: '본 문자 수신 후 방문 예약 및 상담 완료 고객',
      period: '2026.9.17(목) ~ 소진 시까지',
      ctaLabel: '방문예약 신청하기',
    },

    // 출처: PDF 전단 메인 카피 "비교는 끝났다! 선택은 더샵!" 그대로 반영. bgImage는 요청 반영 —
    // 전달받은 실제 메인 비주얼(석양 조감도, 단지 경계 하이라이트)로 교체.
    // 요청 반영 — 어두운 스크림을 없애고(overlay:false) 문구 색은 검은색으로 통일
    hero: {
      // 요청 반영 — PC는 스크림 없이 유지, 모바일만 흰 문구 가독성을 위해 상단→중단 그라데이션 스크림 추가
      overlay: true,
      overlayMobileOnly: true,
      textColor: '#000000',
      accentColor: '#000000',
      // 요청 반영 — 모바일에서는 문구를 흰색으로(PC는 검은색 유지)
      textColorMobile: '#ffffff',
      descColorMobile: '#ffffff',
      fontFamily: 'var(--font-serif)',
      // 요청 반영 — 히어로 배경(세로로 긴 석양 조감도, 1600x2178)이 100svh로 크게 잘리지 않도록
      // 이 현장만 실제 이미지 비율만큼 섹션 높이를 늘림
      imageAspectRatio: '1600 / 2178',
      // 요청 반영 — 섹션 높이가 커진 만큼 문구가 화면 아래쪽에 치우치지 않도록 상단 배치
      contentTop: true,
      eyebrowLine1: '비교는 끝났다!',
      eyebrowLine2: '선택은 더샵!',
      // 요청 반영 — 모바일에서 서브타이틀/타이틀/내용 간격이 넓어 보여 축소, 서브타이틀은 모바일에서만 한 줄로
      eyebrowOneLineMobile: true,
      eyebrowGapMobile: 10,
      titleGapMobile: 8,
      descLineHeightMobile: 1.6,
      titleLine1: '더샵',
      titleLine2: '검단레이크파크',
      descLine1: '2,857세대 대단지 브랜드타운',
      descLine1Accent: ['2,857세대'],
      descLine2: '검단 유일의 1·2호선 더블역 생활권,',
      descLine3: '분양가상한제가 적용되는 합리적인 선택.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/hero-bg.webp', alt: '더샵 검단레이크파크 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '더샵 검단레이크파크', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '24시간 상담신청 및 방문예약',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: PDF 하단 4개 인프라 카드("다 갖춰진 정점의 생활인프라" 등) 그대로 반영
    benefits: {
      id: 'benefits',
      eyebrow: 'SPECIAL CONDITIONS',
      titleSmall: '더샵이 선택한 자리,',
      titleBold: '검단의 ',
      titleScript: '정점이 되다',
      desc: '더샵 검단레이크파크만의 특별한 조건을 확인하세요.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/wide-view.webp', alt: '더샵 검단레이크파크 단지 전경' },
      items: [
        { num: '01', tag: '생활인프라', title: ['다 갖춰진', '정점의 생활인프라'], desc: '대형녹지공원 U공원, 검단소방서·우체국·경찰서(예정), 검단구청 신·임시청사(예정)' },
        { num: '02', tag: '학세권', title: ['도보통학', '안심 학세권'], desc: '초등학교·중학교·유치원(예정), 완정역 학원가' },
        { num: '03', tag: '더블역', title: ['검단 유일의 1·2호선', '더블역 생활권'], desc: '검단호수공원역·완정역, 인천2호선연장(예정)·서울5호선연장(예정)·GTX-D(계획)' },
        { num: '04', tag: '분양가상한제', title: ['합리적인 선택', '분양가 상한제'], desc: '향후 미래 자산가치까지 기대되는 최적의 내 집마련 기회' },
      ],
    },

    // 출처: 요청 반영 — PC(1024px 이상) 전용 우측 고정 사이드메뉴바
    quickMenu: {
      brand: 'THE SHARP GEOMDAN LAKEPARK',
      phoneLabel: '분양문의',
      phone: '1811-4166',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '더샵 검단레이크파크\n분양 상담을 도와드립니다.',
      address: '인천광역시 서구 마전동 산175-7번지 일원',
      tagline: "GEOMDAN'S PEAK, THE SHARP",
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

    // 출처: PDF 하단 정보(2,857세대·59㎡ 1,337세대·84㎡ 1,520세대·6월 초 오픈예정·견본주택 위치)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '더샵 검단레이크파크',
      subtitle: '검단의 정점이 되는 더샵 브랜드타운',
      photo: { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-5.webp', alt: '23BL 메인 투시도' },
      thumbs: [
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-4.webp', alt: '22BL 메인 투시도' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-photo.webp', alt: '더샵 검단레이크파크 단지 조감도' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-1.webp', alt: '23BL 단지 조감도' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-2.webp', alt: '액티브라운지 조경 전경' },
        { src: '/apt/the-sharp-geomdan-lakepark-3/overview-thumb-3.webp', alt: '플라워필드 조경 전경' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 인·허가 과정 중 변경될 수 있습니다.',
      // 출처: 요청 반영 — 사업개요 상세 스펙(대지위치·사업규모·세대수·공급타입·면적·건폐율·용적률·
      // 주차대수·시행시공·분양방식·견본주택) 그대로 반영. 오픈예정·특별공급은 기존 전단 정보 유지.
      specItems: [
        { label: '대지위치', value: '인천광역시 서구 마전동 산175-7번지 일원(검단신도시)' },
        { label: '사업규모', value: ['22BL·23BL', '지하 3층~지상 29층, 26개동'] },
        { label: '세대수', value: ['22BL 1,454세대 · 23BL 1,403세대', '총 2,857세대'] },
        { label: '공급타입', value: '전용 59㎡ 2개 타입 · 전용 84㎡ 3개 타입(총 5개 타입)' },
        { label: '대지면적', value: ['22BL 63,675.00㎡', '23BL 61,410.00㎡'] },
        { label: '연면적', value: ['22BL 242,082.35㎡', '23BL 228,380.25㎡'] },
        { label: '건폐율', value: ['22BL 28.67%', '23BL 23.87%'] },
        { label: '용적률', value: '224.91%' },
        { label: '주차대수', value: ['22BL 2,376대(세대당 1.63대)', '23BL 2,151대(세대당 1.53대)'] },
        { label: '시행/시공', value: '한국자산신탁(주) / (주)포스코이앤씨(브랜드 · 더샵)' },
        { label: '분양방식', value: '분양가상한제 적용 단지' },
        { label: '견본주택', value: '인천광역시 서구 원당동 796-5' },
        { label: '오픈예정', value: '6월 오픈 예정' },
        { label: '특별공급', value: ['신혼부부 특별공급 651세대', '생애최초 특별공급 538세대'] },
      ],
    },

    // 출처: PDF 2p "더샵이 선택한 자리, 검단의 정점이 되다" 및 "한층 더 편리해진 in 서울" 지도 카피
    location: {
      id: 'location',
      navLabel: '위치안내',
      label: 'LOCATION',
      eyebrowPlain: '더샵이 선택한 자리, ',
      eyebrowAccent: '검단의 정점',
      title: '검단의 정점이 되다',
      // 요청 반영 — 다른 섹션 타이틀과 통일감 있게 산세리프로 변경(기본값은 Montserrat)
      titleFont: 'var(--font-sans)',
      // 요청 반영 — 기본 폰트웨이트(300)가 너무 얇아 보여서 두껍게
      titleWeight: 800,
      descTitle: '검단 유일의 1·2호선 더블역 생활권을 도보로 이용',
      descTitleAccent: ['1·2호선 더블역 생활권'],
      // 요청 반영 — "까지,"만 혼자 남는 어색한 줄바꿈 방지(모바일 전용, PC는 한 줄 그대로)
      descBody1: '인천2호선연장(예정)·서울5호선연장(예정)·\nGTX-D(계획)까지,',
      descBody1Accent: ['인천2호선연장', '서울5호선연장', 'GTX-D'],
      descBody2: '더샵 검단레이크파크가 검단의 새로운 기준을 완성합니다.',
      // 요청 반영 — 실제 위치 인포그래픽 지도 이미지로 교체
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-3/location1.v1.jpg', alt: '더샵 검단레이크파크 주변 인프라 안내도' },
      // 요청 반영 — 입지분석 4칸 카드 섹션 삭제(아래 infrastructure 섹션의 지도+3항목 리스트로 대체됨)
      features: [],
      disclaimer:
        '※ 상기 지역도는 실제와 다를 수 있으며, 지역도에 기재된 교통 및 각종 개발계획, 학군 배정 등은 사업주체나 해당기관의 사정에 따라 변경 또는 연기, 취소될 수 있으며 이는 시행사 및 시공사와 무관합니다.',
    },

    // 출처: 더샵검단레이크파크(site1) story 섹션 참고 — 요청 반영(입지분석 바로 아래 배치).
    // site1의 01 WATERFRONT 씬은 영상(mp4)인데 우리는 영상 자산이 없어 이미지로 대체
    story: {
      id: 'story',
      eyebrow: 'THE ONE DEFINING VALUE',
      titleLine1: '브랜드·규모·수변,',
      titleAccent: '더 특별한 주거의 기준',
      // 요청 반영 — 문구가 길어져 기본 폰트 크기(최대 74px)로는 줄이 꺾여서 각 줄이 한 줄에 들어가도록 축소
      titleSize: 'clamp(26px, 3.6vw, 46px)',
      // 요청 반영 — 폰트가 얇아 보여서 두껍게
      titleWeight: 800,
      desc: '검단 첫 번째 더샵이라는 상징성, 총 2,857세대의 대단지 규모, 나진포천과 중앙호수공원을 가까이 누리는 수변 입지가 하나의 브랜드타운으로 이어집니다.',
      numbers: [
        { value: 'FIRST', label: '검단 첫 번째 더샵' },
        { value: '2,857', label: '22BL·23BL 총 세대수' },
        { value: '26', label: '브랜드타운 전체 동수' },
      ],
      scenes: [
        {
          // 요청 반영 — 더샵검단레이크파크(site1) 공식 영상(sec01.mp4) 그대로 사용, 포스터는 로딩 전
          // 잠깐 보이는 대체 이미지라 site1의 저해상도 waterfront-detail.jpg 대신 우리 쪽 고화질
          // 게이트 사인 크롭(story-brand-sign.webp)으로 교체
          type: 'video',
          video: { src: '/apt/the-sharp-geomdan-lakepark-3/sec01.mp4', poster: '/apt/the-sharp-geomdan-lakepark-3/story-brand-sign.webp' },
          ariaLabel: '더샵 검단레이크파크 수변의 여유를 표현한 공식 영상',
          tag: '01 · WATERFRONT',
          title: '매일 가까이 누리는 수변의 여유',
          desc: '나진포천 수변공원과 중앙호수공원을 가까이 둔 워터프런트 라이프',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/overview-photo.webp', alt: '더샵 검단레이크파크 2,857세대 단지 조감도' },
          tag: '02 · BIG SCALE',
          title: '2,857세대가 만드는 하나의 도시',
          desc: '22BL과 23BL, 총 26개동으로 이어지는 빅스케일 브랜드타운',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark-3/landscape-1.webp', alt: '더샵 검단레이크파크 올인원 커뮤니티 이미지' },
          tag: '03 · ALL-IN-ONE',
          title: '단지 안에서 완성되는 하루',
          desc: '운동·휴식·교육을 연결한 블록별 올인원 커뮤니티',
        },
      ],
      // 요청 반영 — 하단 전환 CTA 스트립(방문예약/관심고객 등록 버튼) 삭제
    },

    // 출처: PDF 문구 "비교는 끝났다! 선택은 더샵!" / "검단 그 변화의 정점에서 만나는 더샵"
    premiumIntro: {
      eyebrow: 'GEOMDAN LAKEPARK',
      titleLine1: '비교는 끝났다!',
      titleLine2: '선택은 더샵!',
      descLine1: '검단 그 변화의 정점에서 만나는 더샵',
      descLine1Accent: ['더샵'],
      descLine2: '2,857세대 대단지 브랜드타운이 검단의 새로운 기준이 됩니다.',
      // 출처: 요청 반영 — 실제 단지 게이트(정문) CG로 교체
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-3/premium-intro-bg.jpg', alt: '더샵 검단레이크파크 정문 게이트 전경' },
    },

    // 출처: 3.5리플렛-시안 PDF 4p "검단신도시 정점을 누릴 입지 첫번째 더샵, 검단의 클래스를 높이다"
    // No.1~6 리스트 그대로 반영
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '더샵 검단레이크파크가 특별한 ',
      titleAccent: '여섯 가지 이유',
      cards: [
        { num: '01', icon: 'tower', title: ['검단 첫 번째', '더샵 브랜드타운'], desc: ['검단에 없던 빛나는 자부심을 선사하는 총 2,857세대 빅스케일 더샵 브랜드타운'] },
        { num: '02', icon: 'forest', title: ['수변', '프리미엄'], desc: ['나진포천 수변공원, 중앙호수공원(예정), 워라밸파크(예정)와 인접한 검단 최고의 주거환경'] },
        { num: '03', icon: 'train', title: ['더블역생활권', '(인천지하철 1·2호선)'], desc: ['완정역부터 검단호수공원역까지 인천 지하철 1·2호선을 모두 가깝게 누리는 특권'] },
        { num: '04', icon: 'tunnel', title: ['서울까지 빠르게', '통하는 교통망'], desc: ['인천2호선 연장(예정), 서울5호선 연장(예정), GTX-D노선(계획) 등 쾌속 교통'] },
        { num: '05', icon: 'school', title: ['단지 앞', '유치원·초·중교(예정)'], desc: ['걸어서 누리는 안심학세권, 가까이 누리는 완정역학원가 등'] },
        { num: '06', icon: 'money', title: ['분양가', '상한제'], desc: ['합리적인 분양가로 향후 미래가치까지 기대되는 최적의 내 집마련 기회'] },
      ],
    },

    // 출처: 3.5리플렛-시안 PDF 3p "송도 지나 청라 다음 검단, 호수공원은 신도시 프리미엄의 지름길" /
    // "이제는 검단의 차례" / "나진포천 수변공원, 중앙호수공원 선(先)자리, 신도시의 정점은 언제나
    // 물(水)입니다" / "출·퇴근 시간의 여유를 넘어 두 개의 수변공원까지 더한 삶의 여유" 그대로 반영
    premiumSplits: [
      {
        eyebrow: 'Waterfront Premium',
        title: ['송도 지나 청라 다음 검단,', '이제는 검단의 차례'],
        descLines: [
          '호수공원은 신도시 프리미엄의 지름길',
          '나진포천 수변공원, 중앙호수공원 선(先)자리',
          '신도시의 정점은 언제나 물(水)입니다.',
          '출·퇴근 시간의 여유를 넘어 두 개의 수변공원까지 더한 삶의 여유',
        ],
        images: [{ src: '/apt/the-sharp-geomdan-lakepark-3/waterfront-premium.jpg', alt: '더샵 검단레이크파크 나진포천·중앙호수공원 수변 산책로 조감도' }],
        ghostLine1: 'Waterfront',
        ghostLine2: 'Premium',
      },
    ],

    // 출처: 더샵검단레이크파크(site1) infrastructure 섹션 그대로 반영 — 요청 반영(Waterfront Premium
    // 다음 섹션으로 배치). 공식 입지 안내도 이미지도 site1과 동일 원본 사용.
    infrastructure: {
      id: 'infrastructure',
      eyebrow: 'TRAFFIC & LOCATION',
      titlePlain: '서울로 통하는 교통,',
      titleAccent: '가까이 누리는 생활',
      desc: '공식 홈페이지가 안내하는 철도 계획과 공원·문화·행정 인프라를 예정·계획 상태까지 구분해 확인하세요.',
      // 요청 반영 — 공급받은 위치도 이미지로 교체, 클릭하면 돋보기 아이콘으로 확대해서 볼 수 있음
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-3/location1.v1.jpg', alt: '더샵 검단레이크파크 교통망과 주변 생활 인프라 공식 입지 안내도' },
      mapCaption: '공식 입지 안내도 · 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
      items: [
        { num: '01', category: '교통', title: '더블역 생활권', desc: '검단 유일의 지하철 1·2호선 더블역 생활권으로 소개되며, 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획으로 안내됩니다.' },
        { num: '02', category: '공원·문화', title: '완성되어 가는 생활환경', desc: '대형 녹지공원 U공원과 워라밸파크(예정), 박물관·도서관(예정) 등 휴식과 문화 인프라를 가까이 누리는 입지입니다.' },
        { num: '03', category: '행정·생활', title: '검단의 중심 인프라', desc: '검단구청 신청사(예정), 검단경찰서(예정), 검단소방서·우체국 등 생활에 필요한 공공 인프라가 주변에 자리합니다.' },
      ],
      sourceNote: '※ 상기 내용과 이미지는 공식 홈페이지의 교통 프리미엄·입지환경 자료를 기준으로 구성했습니다. 인천2호선 및 서울5호선 연장은 예정, GTX-D 노선은 계획 단계이며 사업 내용과 일정은 변경될 수 있습니다.',
    },

    // 출처: 요청 반영 — 더샵검단레이크파크(site1) landscapeGeomdan 섹션 그대로 반영, TRAFFIC & LOCATION
    // 다음 섹션으로 배치. 히어로·4카드 이미지 전부 site1의 실제 조경 CG 원본 사용.
    landscapeGeomdan: {
      id: 'landscape',
      eyebrow: 'LANDSCAPE',
      titlePlain: '검단의 자연과 어우러지는',
      titleAccent: '네이처 가든',
      desc: '22BL·23BL 지상에 조성되는 더샵 조경입니다. 잔디광장과 감성 정원, 놀이터, 사계절 테마 가로수길이 이어집니다.',
      heroImage: { src: '/apt/the-sharp-geomdan-lakepark-3/landscape-hero.webp', alt: '더샵 검단레이크파크 네이처 가든 조경 조감도' },
      heroCaption: '더샵 조경 · Nature Garden 조감 CG',
      // 요청 반영 — 캡션 배경을 아래 카드들과 같은 흰색으로
      heroCaptionBg: '#ffffff',
      heroCaptionColor: '#0b1822',
      cards: [
        { image: { src: '/apt/the-sharp-geomdan-lakepark-3/garden-lawn.webp', alt: '더샵 검단레이크파크 잔디광장 · 네이처테라스' }, title: '잔디광장 · 네이처테라스', desc: '입주민의 휴식과 소통을 담은 탁 트인 초록 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-3/garden-flower.webp', alt: '더샵 검단레이크파크 푸른꽃 정원 · 블루엣가든' }, title: '푸른꽃 정원 · 블루엣가든', desc: '푸른 색감의 청량감이 꽃피는 더샵 감성 정원' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-3/garden-playground.webp', alt: '더샵 검단레이크파크 어린이 놀이터' }, title: '어린이 놀이터', desc: '아이들의 하루가 더 특별해지는 놀이 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-3/garden-street.webp', alt: '더샵 검단레이크파크 테마 가로수길' }, title: '테마 가로수길', desc: '왕벚·이팝·느티·단풍나무길로 봄꽃·여름녹음·가을단풍 등 사계절의 변화를 누리는 산책로' },
      ],
      sourceNote: '※ 상기 조경 이미지는 소비자의 이해를 돕기 위해 제작된 CG로 실제와 차이가 있을 수 있으며, 수목의 종류·규격·위치와 시설물은 인·허가 및 시공 과정에서 변경될 수 있습니다. 자세한 사항은 입주자 모집공고와 견본주택에서 확인하시기 바랍니다.',
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2와 같은 단지(22BL·23BL)의 실제 단지배치도·동호수배치도
    // 원본을 그대로 사용. donghoChart는 탭 전환 없이 22BL·23BL을 항상 나란히 보여줌(columns).
    complex: {
      id: 'complex',
      // 출처: 더샵검단레이크파크(site1) siteplan 섹션 타이틀 그대로 반영
      eyebrow: 'COMPLEX & UNIT LAYOUT',
      titleLine1: '한눈에 보는',
      titleLine2: '단지배치도와 동호수',
      desc: '워커블 커뮤니티 조경이 이어지는 단지 배치와 22BL·23BL 동호수 배치도를 확인하세요.',
      siteMap: {
        image: { src: '/apt/the-sharp-geomdan-lakepark-3/complex-sitemap.jpg', alt: '더샵 검단레이크파크 단지 배치도', width: 1200, height: 494 },
      },
      donghoChart: {
        columns: [
          { label: '22BL', sub: '1,454세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-3/dongho-22bl.jpg', alt: '더샵 검단레이크파크 22BL 동호수 배치도', width: 1150, height: 3181 } },
          { label: '23BL', sub: '1,403세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-3/dongho-23bl.jpg', alt: '더샵 검단레이크파크 23BL 동호수 배치도', width: 1150, height: 3109 } },
        ],
      },
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2 현장 참고. 같은 단지(22BL·23BL)의 실제 입주자모집공고
    // 기준 5개 타입(59㎡ A·B, 84㎡ A·B·C) 전용/공급/계약면적 그대로 반영, 평면도 이미지도 동일 원본 사용.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'GEOMDAN LAKEPARK',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['라이프스타일에 맞춘', '더샵 검단레이크파크', '전용 59㎡ 2개 타입, 84㎡ 3개 타입', '5가지 주거 타입을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 707세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-59a.jpg', alt: '더샵 검단레이크파크 59㎡A 타입 평면도' },
              specs: { exclusive: '59.9497', supply: '80.7560', contract: '137.3788' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 630세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-59b.jpg', alt: '더샵 검단레이크파크 59㎡B 타입 평면도' },
              specs: { exclusive: '59.8301', supply: '81.0950', contract: '137.6048' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '22BL·23BL 총 869세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84a.jpg', alt: '더샵 검단레이크파크 84㎡A 타입 평면도' },
              specs: { exclusive: '84.5181', supply: '111.7074', contract: '191.5353' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 336세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84b.jpg', alt: '더샵 검단레이크파크 84㎡B 타입 평면도' },
              specs: { exclusive: '84.0342', supply: '112.2416', contract: '191.6124' },
            },
            {
              letter: 'C',
              countText: '22BL·23BL 총 315세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-3/unit-84c.jpg', alt: '더샵 검단레이크파크 84㎡C 타입 평면도' },
              specs: { exclusive: '84.1796', supply: '111.1017', contract: '190.6097' },
            },
          ],
        },
      ],
    },

    // 출처: 더샵검단레이크파크(site1) smarthome 섹션 그대로 반영 — 포스코이앤씨 AiQ TECH 기반 스마트홈
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
      sourceNote: '※ AiQ 특화 시스템 중 일부 품목은 유상옵션이며, 스마트폰 공동현관 문 열림·주차위치 확인 서비스는 전용 앱 설치와 블루투스·위치정보 사용 동의가 필요합니다. 적용 품목과 사양은 견본주택에서 확인하시기 바랍니다.',
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2와 같은 단지의 실제 블록별(22BL/23BL) 커뮤니티 시설
    // 배치도 CG를 그대로 사용. SignatureCommunityGeomdan(더샵검단레이크파크2와 동일 컴포넌트) 재사용.
    communityBlocks: {
      id: 'community',
      // 요청 반영 — 히어로와 통일감 있게 세리프 폰트로 변경
      headingFont: 'var(--font-serif)',
      eyebrow: 'COMMUNITY GUIDE',
      titlePlain: '블록별 커뮤니티',
      titleAccent: '한눈에 보기',
      desc: '운동과 휴식, 교육과 교류까지 단지 안에서 이어지는\n더샵만의 다채로운 커뮤니티 시설을 확인해보세요.',
      imageOnly: true,
      blocks: [
        {
          label: '22BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-3/community-detail-1.jpg', alt: '더샵 검단레이크파크 22BL 커뮤니티 시설 배치도(6203·6204·6206동)' },
        },
        {
          label: '23BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-3/community-detail-2.jpg', alt: '더샵 검단레이크파크 23BL 커뮤니티 시설 배치도(6303~4동)' },
        },
      ],
      note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 CG 및 계획도입니다. 커뮤니티 시설의 명칭, 위치, 규모와 운영 방식은 인허가 및 실제 시공 과정에서 변경될 수 있으므로 계약 전 공식 공급자료를 확인하시기 바랍니다.',
    },

    // 출처: 더샵검단레이크파크(site1) FAQ 섹션 참고해 재구성 (요청 반영 — E-모델하우스/VR 관련 문항은 제외)
    faq: {
      eyebrow: 'QUESTIONS & ANSWERS',
      titlePlain: '자주 묻는 ',
      titleAccent: '질문',
      desc: '더샵 검단레이크파크의 위치, 규모, 모집공고와 고객 등록 방법을 한눈에 확인하세요.',
      items: [
        { q: '더샵 검단레이크파크는 어디에 있나요?', a: '더샵 검단레이크파크 현장은 인천광역시 서구 마전동 산175-7번지 일원(검단신도시)입니다. 견본주택은 인천광역시 서구 원당동 796-5에 있습니다.' },
        { q: '총 세대수와 단지 규모는 어떻게 되나요?', a: '총 2,857세대입니다. 22BL 1,454세대와 23BL 1,403세대로 구성되며, 지하 3층부터 지상 29층까지 26개동으로 계획되어 있습니다.' },
        { q: '시행사와 시공사는 어디인가요?', a: '시행은 한국자산신탁㈜, 시공은 ㈜포스코이앤씨입니다. 아파트 브랜드 "더샵(THE SHARP)"은 포스코이앤씨의 주거 브랜드입니다.' },
        { q: '분양하는 평형과 타입은 무엇인가요?', a: '전용면적 기준 59㎡와 84㎡, 총 5개 타입입니다. 전용 59㎡는 59㎡A(707세대)·59㎡B(630세대), 전용 84㎡는 84㎡A(869세대)·84㎡B(336세대)·84㎡C(315세대)로 나뉩니다.' },
        { q: '단지배치도와 동호수배치도는 어디에서 볼 수 있나요?', a: 'COMPLEX & UNIT LAYOUT 섹션에서 단지배치도와 22BL·23BL 동호수배치도를 확인할 수 있습니다. 동·호수와 향 등 세부 사항은 입주자 모집공고 전문에서 확인해야 합니다.' },
        { q: '주차 공간은 얼마나 마련되나요?', a: '공식 사업개요 기준 22BL은 2,376대(세대당 1.63대), 23BL은 2,151대(세대당 1.53대)입니다.' },
        { q: '분양가상한제 적용 단지라는 것은 무슨 의미인가요?', a: '분양가상한제는 택지비와 건축비 등을 기준으로 분양가의 상한을 정하는 제도입니다. 더샵 검단레이크파크는 분양가상한제 적용 단지로 안내되며, 실제 공급금액과 조건은 입주자 모집공고 원문에서 확인해야 합니다.' },
        { q: '"검단 첫 더샵"이라는 표현은 무슨 뜻인가요?', a: '검단 지역에 처음 공급되는 더샵 브랜드 아파트라는 뜻입니다. 총 2,857세대 규모로 검단의 새로운 브랜드타운을 완성합니다.' },
        { q: '교통 여건은 어떻게 되나요?', a: '지하철 1·2호선 더블역 생활권이 핵심입니다. 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획 단계로 안내되며, 예정·계획 사업의 내용과 일정은 관계기관 계획에 따라 변경될 수 있습니다.' },
        { q: '주변 자연환경의 특징은 무엇인가요?', a: '나진포천 수변공원과 중앙호수공원을 가까이 둔 수변 입지가 핵심입니다. 만수산 등 주변 자연환경도 함께 누릴 수 있습니다.' },
        { q: '교육환경은 어떻게 되나요?', a: '단지 앞 유치원·초등학교·중학교 예정 부지와 완정역 학원가 인접성이 주요 교육환경입니다. 학교 설립 일정은 관계기관 계획에 따라 달라질 수 있습니다.' },
        { q: '커뮤니티에는 어떤 시설이 계획되어 있나요?', a: '22BL·23BL에 피트니스, GX룸, 필라테스, 사우나, 실내골프연습장·스크린골프룸·퍼팅그린, 실내체육관, 게스트하우스, 다이닝·카페 라운지, 헬스케어 라운지, 키즈존, 패밀리 라이브러리, 프라이빗스터디, 에듀&비즈니스 라운지 등이 계획되어 있습니다. 블록별 위치와 구성은 홈페이지의 공식 커뮤니티 배치도에서 확인할 수 있습니다.' },
        { q: '지금도 상담이나 방문이 가능한가요?', a: '가능합니다. 이 페이지 하단의 방문예약에서 희망 날짜·시간을 신청하거나 관심고객 등록을 남기면 담당자가 입력하신 연락처로 안내해 드립니다. 상담 대표번호는 1811-4166이며 방문 상담은 10:00~18:00에 1시간 단위로 예약할 수 있습니다.' },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      // 요청 반영 — 틀 배경색을 기본(바깥 남색·카드 반투명 흰색)에서 반대로(바깥 크림·카드 남색)
      bgColor: 'var(--cream, #f3f1ec)',
      cardBg: '#0a1a33',
      eyebrow: 'VIP Reservation',
      titleLine1: '더샵 검단레이크파크',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 생애최초·신혼부부 특별공급 청약자 모두에게 100% 사은품을 증정합니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사(이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 더샵 검단레이크파크 분양 관련 정보 제공, 방문예약 접수 및 상담 진행, 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시
3. 개인정보의 처리 및 보유 기간 : 더샵 검단레이크파크 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 방문예약 및 상담 접수가 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
    },

    footer: {
      logo: { src: '/apt/the-sharp-geomdan-lakepark-3/logo-white.svg', alt: '더샵 검단레이크파크' },
      highlightText: '1811-4166',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '한국자산신탁(주)' },
        { label: '시공', value: '(주)포스코이앤씨' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
        '※ 본 홈페이지의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있습니다.',
        '※ 세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
      ],
      csPhone: '1811-4166',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
