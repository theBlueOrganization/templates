// 더샵 검단레이크파크4 — the-sharp-geomdan-lakepark-3을 복제한 뒤, 카카오톡으로 전달받은
// "0528 더샵검단_부동산브리핑북_최종확인용.pdf"(16p, 동일 현장 22BL·23BL 브리핑북)를 추가로
// 분석해 콘텐츠·이미지를 보강했습니다. 반영 내용:
// - 단지배치도(complex.siteMap)를 브리핑북 원본(동 배치·타입별 세대수 범례 포함)으로 교체하고,
//   84㎡B·84㎡C 세대수를 브리핑북 최종 수치(335/316세대, 기존 336/315는 오기)로 정정
// - 커뮤니티 배치도(communityBlocks)를 브리핑북의 실제 시설별 상세 평면(6203·6204동, 6303~4동)으로 교체
// - 조경(landscapeGeomdan) 히어로·4카드 이미지를 브리핑북의 22BL·23BL 네이처테라스·블루엣가든·
//   어린이놀이터 CG로 교체
// - Waterfront Premium(premiumSplits) 이미지를 브리핑북의 중앙호수공원 조감 CG로 교체하고,
//   실제 소요시간 배지(인천1호선 여의도역 30분대·서울역 40분대, 인천2호선 가산디지털단지역 50분대) 추가
// - infrastructure·smarthome·premiumIntro 설명에 브리핑북의 실제 소요시간·AiQ TECH 상세 기능·
//   브랜드 수상 이력 반영, FAQ에 특별공급 조건 완화(신혼부부 물량 확대, 다자녀 요건 완화,
//   혼인·출산특례 신설)와 청약통장 예치금 기준 문항 추가
const config = {
  slug: 'the-sharp-geomdan-lakepark-4',
  // 검단레이크파크3이 접미사 'p'를 쓰는 것과 같은 방식으로 'q' 접미사로 구분
  subdomain: '더샵검단레이크파크q',
  projectName: '더샵 검단레이크파크4',
  shortName: '더샵 검단레이크파크',
  // 요청 반영 — 카카오톡 등 공유 링크에는 "4"를 뺀 이름만 노출
  metaTitle: '검단레이크파크',
  // 요청 반영 — 현장 전용 상담 트래킹 번호(단지번호)
  telNumber: '1668-1888',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/the-sharp-geomdan-lakepark-4/main.jpg',
  // 요청 반영 — 상담 접수 알림을 받을 번호
  adminPhones: ['01029546182'],
  sheetId: '',
  sheetTab: '더샵검단레이크파크4',
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
      logo: { src: '/apt/the-sharp-geomdan-lakepark-4/logo-white.svg', alt: '더샵 검단레이크파크', width: 130, height: 28 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지안내', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1668-1888',
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
      contentTop: true,
      eyebrowLine1: '비교는 끝났다!',
      eyebrowLine2: '선택은 더샵!',
      // 요청 반영 — 검단레이크파크3 현장과 동일하게 모바일 서브타이틀/타이틀/내용 간격 축소, 서브타이틀은 모바일 한 줄로
      eyebrowOneLineMobile: true,
      eyebrowGapMobile: 10,
      titleGapMobile: 8,
      descLineHeightMobile: 1.6,
      titleLine1: '더샵',
      titleLine2: '검단레이크파크',
      descLine1: '2,857세대 대단지 브랜드타운, 6월 오픈 예정',
      descLine1Accent: ['2,857세대'],
      descLine2: '검단 유일의 1·2호선 더블역 생활권,',
      descLine3: '분양가상한제가 적용되는 합리적인 선택.',
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-4/hero-bg.webp', alt: '더샵 검단레이크파크 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '더샵 검단레이크파크', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '생애최초·신혼부부 특별공급 청약자 100% 사은품 증정',
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
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-4/wide-view.webp', alt: '더샵 검단레이크파크 단지 전경' },
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
      phone: '1668-1888',
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
      label: 'OVERVIEW',
      title: '더샵 검단레이크파크',
      subtitle: '2,857세대, 6월 오픈 예정 — 검단의 정점이 되는 더샵 브랜드타운',
      photo: { src: '/apt/the-sharp-geomdan-lakepark-4/overview-photo.webp', alt: '더샵 검단레이크파크 단지 조감도' },
      thumbs: [
        { src: '/apt/the-sharp-geomdan-lakepark-4/overview-thumb-1.webp', alt: '23BL 단지 조감도' },
        { src: '/apt/the-sharp-geomdan-lakepark-4/overview-thumb-2.webp', alt: '액티브라운지 조경 전경' },
        { src: '/apt/the-sharp-geomdan-lakepark-4/overview-thumb-3.webp', alt: '플라워필드 조경 전경' },
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
      descTitle: '검단 유일의 1·2호선 더블역 생활권을 도보로 이용',
      descTitleAccent: ['1·2호선 더블역 생활권'],
      descBody1: '인천2호선연장(예정)·서울5호선연장(예정)·GTX-D(계획)까지,',
      descBody1Accent: ['인천2호선연장', '서울5호선연장', 'GTX-D'],
      descBody2: '더샵 검단레이크파크가 검단의 새로운 기준을 완성합니다.',
      // 출처: 요청 반영 — 실제 위치 인포그래픽 지도 이미지로 교체
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-4/location-map.jpg', alt: '더샵 검단레이크파크 주변 인프라 안내도' },
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
          // 요청 반영 — 더샵검단레이크파크(site1) 공식 영상(sec01.mp4) 그대로 사용, 포스터는 로딩 전
          // 잠깐 보이는 대체 이미지라 site1의 저해상도 waterfront-detail.jpg 대신 우리 쪽 고화질
          // 게이트 사인 크롭(story-brand-sign.webp)으로 교체
          type: 'video',
          video: { src: '/apt/the-sharp-geomdan-lakepark-4/sec01.mp4', poster: '/apt/the-sharp-geomdan-lakepark-4/story-brand-sign.webp' },
          ariaLabel: '더샵 검단레이크파크 수변의 여유를 표현한 공식 영상',
          tag: '01 · WATERFRONT',
          title: '매일 가까이 누리는 수변의 여유',
          desc: '나진포천 수변공원과 중앙호수공원을 가까이 둔 워터프런트 라이프',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/overview-photo.webp', alt: '더샵 검단레이크파크 2,857세대 단지 조감도' },
          tag: '02 · BIG SCALE',
          title: '2,857세대가 만드는 하나의 도시',
          desc: '22BL과 23BL, 총 26개동으로 이어지는 빅스케일 브랜드타운',
        },
        {
          type: 'image',
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/landscape-1.webp', alt: '더샵 검단레이크파크 올인원 커뮤니티 이미지' },
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
      titleLine1: '더샵이 선택한 자리,',
      titleLine2: '검단의 정점이 되다.',
      descLine1: '검단 그 변화의 정점에서 만나는 더샵',
      descLine1Accent: ['더샵'],
      descLine2: '2025 브랜드 추천·브랜드 고객충성도 1위, 2,857세대 대단지 브랜드타운이 검단의 새로운 기준이 됩니다.',
      // 출처: 요청 반영 — 실제 단지 게이트(정문) CG로 교체
      bgImage: { src: '/apt/the-sharp-geomdan-lakepark-4/premium-intro-bg.jpg', alt: '더샵 검단레이크파크 정문 게이트 전경' },
    },

    // 출처: 3.5리플렛-시안 PDF 4p "검단신도시 정점을 누릴 입지 첫번째 더샵, 검단의 클래스를 높이다"
    // No.1~6 리스트 그대로 반영
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '더샵 검단레이크파크가 특별한 ',
      titleAccent: '프리미엄6',
      // 요청 반영 — 카드마다 어울리는 단지 이미지 추가(현장 내 기존 자산 재사용). 정확히 맞는
      // 실사 자산이 없는 03·04·05·06은 가장 가까운 주제의 기존 이미지로 대체
      cards: [
        {
          num: '01',
          icon: 'tower',
          title: ['검단 첫 번째', '더샵 브랜드타운'],
          desc: ['검단에 없던 빛나는 자부심을 선사하는 총 2,857세대 빅스케일 더샵 브랜드타운'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/overview-thumb-1.webp', alt: '더샵 검단레이크파크 단지 조감도' },
        },
        {
          num: '02',
          icon: 'forest',
          title: ['수변', '프리미엄'],
          desc: ['나진포천 수변공원, 중앙호수공원(예정), 워라밸파크(예정)와 인접한 검단 최고의 주거환경'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/waterfront-premium.jpg', alt: '더샵 검단레이크파크 인근 중앙호수공원 조감 CG' },
        },
        {
          num: '03',
          icon: 'train',
          title: ['더블역생활권', '(인천지하철 1·2호선)'],
          desc: ['완정역부터 검단호수공원역까지 인천 지하철 1·2호선을 모두 가깝게 누리는 특권'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/역세권.png', alt: '더블역생활권 프리미엄 이미지' },
        },
        {
          num: '04',
          icon: 'tunnel',
          title: ['서울까지 빠르게', '통하는 교통망'],
          desc: ['인천2호선 연장(예정), 서울5호선 연장(예정), GTX-D노선(계획) 등 쾌속 교통'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/교통.jpg', alt: '쾌속 교통망 프리미엄 이미지' },
        },
        {
          num: '05',
          icon: 'school',
          title: ['단지 앞', '유치원·초·중교(예정)'],
          desc: ['걸어서 누리는 안심학세권, 가까이 누리는 완정역학원가 등'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/garden-playground.webp', alt: '더샵 검단레이크파크 어린이 놀이터' },
        },
        {
          num: '06',
          icon: 'money',
          title: ['분양가', '상한제'],
          desc: ['합리적인 분양가로 향후 미래가치까지 기대되는 최적의 내 집마련 기회'],
          image: { src: '/apt/the-sharp-geomdan-lakepark-4/분양가상한.png', alt: '분양가상한제 프리미엄 이미지' },
        },
      ],
    },

    // 출처: 3.5리플렛-시안 PDF 3p "송도 지나 청라 다음 검단, 호수공원은 신도시 프리미엄의 지름길" /
    // "이제는 검단의 차례" / "나진포천 수변공원, 중앙호수공원 선(先)자리, 신도시의 정점은 언제나
    // 물(水)입니다" / "출·퇴근 시간의 여유를 넘어 두 개의 수변공원까지 더한 삶의 여유" 그대로 반영.
    // 요청 반영 — 부동산브리핑북 PDF 5p 중앙호수공원 조감 CG로 이미지 교체, 4p 지도의 실제
    // 지하철 소요시간(검단호수공원역→여의도역 30분대·서울역 40분대, 완정역→가산디지털단지역
    // 50분대)을 badges로 추가, 청라·동탄 호수공원 인근 시세 상승률 비교 데이터 한 줄 반영
    premiumSplits: [
      {
        eyebrow: 'Waterfront Premium',
        title: ['송도 지나 청라 다음 검단,', '호수공원은 신도시 프리미엄의 지름길'],
        descLines: [
          '나진포천 수변공원, 중앙호수공원 선(先)자리',
          '신도시의 정점은 언제나 물(水)입니다.',
          '출·퇴근 시간의 여유를 넘어 두 개의 수변공원까지 더한 삶의 여유',
          '청라·동탄 호수공원 인근 아파트는 입주 후 시세가 최대 147% 상승',
        ],
        images: [{ src: '/apt/the-sharp-geomdan-lakepark-4/waterfront-premium.jpg', alt: '더샵 검단레이크파크 인근 중앙호수공원 조감 CG' }],
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
      mapImage: { src: '/apt/the-sharp-geomdan-lakepark-4/official-location-map.webp', alt: '더샵 검단레이크파크 교통망과 주변 생활 인프라 공식 입지 안내도' },
      mapCaption: '공식 입지 안내도 · 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
      // 요청 반영 — Waterfront Premium 섹션에 있던 노선 소요시간 배지를 입지 안내도 이미지 아래로 이동
      badges: [
        { line: '인천1호선', route: '검단호수공원역 → 여의도역', time: '30분대' },
        { line: '인천1호선', route: '검단호수공원역 → 서울역', time: '40분대', accent: true },
        { line: '인천2호선', route: '완정역 → 가산디지털단지역', time: '50분대' },
      ],
      items: [
        { num: '01', category: '교통', title: '더블역 생활권', desc: '검단 유일의 지하철 1·2호선 더블역 생활권으로 소개되며, 인천1호선 검단호수공원역에서 여의도역까지 30분대·서울역까지 40분대, 인천2호선 완정역에서 가산디지털단지역까지 50분대로 안내됩니다. 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획입니다.' },
        { num: '02', category: '공원·문화', title: '완성되어 가는 생활환경', desc: '대형 녹지공원 U공원과 워라밸파크(예정), 박물관·도서관(예정) 등 휴식과 문화 인프라를 가까이 누리는 입지입니다.' },
        { num: '03', category: '행정·생활', title: '검단의 중심 인프라', desc: '검단구청 신청사(예정), 검단경찰서(예정), 검단소방서·우체국 등 생활에 필요한 공공 인프라가 주변에 자리합니다.' },
      ],
      sourceNote: '※ 상기 내용과 이미지는 공식 홈페이지의 교통 프리미엄·입지환경 자료를 기준으로 구성했습니다. 인천2호선 및 서울5호선 연장은 예정, GTX-D 노선은 계획 단계이며 사업 내용과 일정은 변경될 수 있습니다.',
    },

    // 출처: 요청 반영 — 부동산브리핑북 PDF 7p "더샵 조경 Nature Garden" 이미지로 히어로·4카드 전면 교체.
    // 히어로는 8p 하단 나진포천 수변 산책로 일러스트, 카드는 22BL·23BL 네이처테라스·블루엣가든·
    // 어린이놀이터 CG 원본 사용.
    landscapeGeomdan: {
      id: 'landscape',
      eyebrow: 'LANDSCAPE',
      titlePlain: '검단의 자연과\n어우러지는 품격 있는 정원',
      titleAccent: '더샵 조경 Nature Garden',
      desc: '22BL·23BL 지상에 조성되는 더샵 조경입니다. 나진포천 조망과 함께 네이처테라스, 블루엣가든, 어린이놀이터가 이어지는 올인원 커뮤니티입니다.',
      heroImage: { src: '/apt/the-sharp-geomdan-lakepark-4/landscape-hero.webp', alt: '더샵 검단레이크파크 네이처 가든 조경 조감도' },
      heroCaption: '더샵 조경 · Nature Garden',
      // 요청 반영 — 카드를 이미지 위 뱃지(22BL/23BL)+하단 캡션 오버레이 스타일로 변경
      overlayCards: true,
      cards: [
        { image: { src: '/apt/the-sharp-geomdan-lakepark-4/garden-lawn.webp', alt: '더샵 검단레이크파크 22BL 네이처테라스' }, badge: '22BL', keyword: '네이처테라스', desc: '자연과 이웃이 함께하는 소통의 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-4/garden-street.webp', alt: '더샵 검단레이크파크 23BL 네이처테라스' }, badge: '23BL', keyword: '네이처테라스', desc: '라이프스타일에 활기를 채우는 액티브 커뮤니티 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-4/garden-playground.webp', alt: '더샵 검단레이크파크 어린이 놀이터' }, keyword: '어린이 놀이터', desc: '아이들의 하루가 더 특별해지는 놀이 공간' },
        { image: { src: '/apt/the-sharp-geomdan-lakepark-4/garden-flower.webp', alt: '더샵 검단레이크파크 블루엣가든' }, keyword: '블루엣가든', desc: '일상에 향기를 더하는 아름다운 자연 쉼터' },
      ],
      sourceNote: '※ 상기 조경 이미지는 소비자의 이해를 돕기 위해 제작된 CG로 실제와 차이가 있을 수 있으며, 수목의 종류·규격·위치와 시설물은 인·허가 및 시공 과정에서 변경될 수 있습니다. 자세한 사항은 입주자 모집공고와 견본주택에서 확인하시기 바랍니다.',
    },

    // 출처: 요청 반영 — 단지배치도는 부동산브리핑북 PDF 6p 원본(6201~6313동 전체 배치, 타입별
    // 세대수 범례 포함)으로 교체. 동호수배치도는 기존 검단레이크파크2 원본 그대로 사용.
    // donghoChart는 탭 전환 없이 22BL·23BL을 항상 나란히 보여줌(columns).
    complex: {
      id: 'complex',
      // 출처: 더샵검단레이크파크(site1) siteplan 섹션 타이틀 그대로 반영
      eyebrow: 'COMPLEX & UNIT LAYOUT',
      titleLine1: '한눈에 보는',
      titleLine2: '단지배치도와 동호수',
      desc: '워커블 커뮤니티 조경이 이어지는 단지 배치와 22BL·23BL 동호수 배치도를 확인하세요.',
      siteMap: {
        image: { src: '/apt/the-sharp-geomdan-lakepark-4/complex-sitemap.jpg', alt: '더샵 검단레이크파크 단지 배치도(타입별 세대수: 59A 707·59B 630·84A 869·84B 335·84C 316)', width: 1800, height: 821 },
      },
      donghoChart: {
        columns: [
          { label: '22BL', sub: '1,454세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-4/dongho-22bl.jpg', alt: '더샵 검단레이크파크 22BL 동호수 배치도', width: 1150, height: 3181 } },
          { label: '23BL', sub: '1,403세대 동호수 배치도', image: { src: '/apt/the-sharp-geomdan-lakepark-4/dongho-23bl.jpg', alt: '더샵 검단레이크파크 23BL 동호수 배치도', width: 1150, height: 3109 } },
        ],
      },
    },

    // 출처: 요청 반영 — 더샵검단레이크파크2 현장 참고. 같은 단지(22BL·23BL)의 실제 입주자모집공고
    // 기준 5개 타입(59㎡ A·B, 84㎡ A·B·C) 전용/공급/계약면적 그대로 반영, 평면도 이미지도 동일 원본 사용.
    // 84㎡B·84㎡C 세대수는 부동산브리핑북 PDF 6p 단지배치도 범례 기준 335/316세대로 정정(총합 2,857 불변).
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
              image: { src: '/apt/the-sharp-geomdan-lakepark-4/unit-59a.jpg', alt: '더샵 검단레이크파크 59㎡A 타입 평면도' },
              specs: { exclusive: '59.9497', supply: '80.7560', contract: '137.3788' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 630세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-4/unit-59b.jpg', alt: '더샵 검단레이크파크 59㎡B 타입 평면도' },
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
              image: { src: '/apt/the-sharp-geomdan-lakepark-4/unit-84a.jpg', alt: '더샵 검단레이크파크 84㎡A 타입 평면도' },
              specs: { exclusive: '84.5181', supply: '111.7074', contract: '191.5353' },
            },
            {
              letter: 'B',
              countText: '22BL·23BL 총 335세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-4/unit-84b.jpg', alt: '더샵 검단레이크파크 84㎡B 타입 평면도' },
              specs: { exclusive: '84.0342', supply: '112.2416', contract: '191.6124' },
            },
            {
              letter: 'C',
              countText: '22BL·23BL 총 316세대',
              image: { src: '/apt/the-sharp-geomdan-lakepark-4/unit-84c.jpg', alt: '더샵 검단레이크파크 84㎡C 타입 평면도' },
              specs: { exclusive: '84.1796', supply: '111.1017', contract: '190.6097' },
            },
          ],
        },
      ],
    },

    // 출처: 더샵검단레이크파크(site1) smarthome 섹션 구조 그대로, 설명 문구는 부동산브리핑북
    // PDF 12~13p AiQ TECH 상세 기능(스마트 출입관리·특화지키미·감성조명 2.0 더샵 루미나 등)으로 보강
    smarthome: {
      id: 'smarthome',
      eyebrow: 'AIQ SMART HOME',
      titlePlain: '더샵 검단레이크파크만의',
      titleAccent: '최첨단 인공지능(AI) 기술',
      desc: '포스코이앤씨의 지능적인 감각(IQ)과 더샵의 헤아림 감성(EQ)이 더해진 AiQ TECH 기반 스마트홈 시스템입니다.',
      items: [
        { icon: 'shield-check', title: '더샵 특화지키미', desc: '초음파 센서 주차유도, 200만 화소 IP CCTV, 승강기 내 이상행동 AI 감지, 세대현관 앞 서성임 감지·통보까지 안심 보안 시스템' },
        { icon: 'smartphone', title: '더샵 홈제어', desc: '스마트폰 원패스 출입, 공동현관·엘리베이터 자동호출, 차량번호 인식 출입관리, 주차위치 확인, 삼성·LG 가전과 카카오 AI 연동 원격제어' },
        { icon: 'wind', title: '더샵 클린에어시스템 · 감성조명', desc: 'AiQ Home 앱으로 냉난방·환기를 원격 제어해 쾌적한 공기질을 유지하고, 일상·휴식·운동 모드별 색온도를 조절하는 감성조명 2.0 더샵 루미나까지 갖췄습니다' },
      ],
      sourceNote: '※ AiQ 특화 시스템 중 일부 품목은 유상옵션이며, 스마트폰 공동현관 문 열림·주차위치 확인 서비스는 전용 앱 설치와 블루투스·위치정보 사용 동의가 필요합니다. 적용 품목과 사양은 견본주택에서 확인하시기 바랍니다.',
    },

    // 출처: 요청 반영 — 더샵검단레이크파크3과 동일한 블록별(22BL/23BL) 커뮤니티 시설
    // 배치도 이미지로 교체. SignatureCommunityGeomdan 재사용.
    communityBlocks: {
      id: 'community',
      // 요청 반영 — 히어로와 통일감 있게 세리프 폰트로 변경
      headingFont: 'var(--font-serif)',
      eyebrow: 'COMMUNITY GUIDE',
      titlePlain: '나진포천 조망과 함께,',
      titleAccent: '일상의 모든 순간이 이어지는 올인원 커뮤니티',
      desc: '운동과 휴식, 교육과 교류까지 단지 안에서 이어지는\n더샵만의 다채로운 커뮤니티 시설을 확인해보세요.',
      imageOnly: true,
      blocks: [
        {
          label: '22BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-4/community-detail-1.jpg', alt: '더샵 검단레이크파크 22BL 커뮤니티 시설 배치도(6203·6204·6206동)' },
        },
        {
          label: '23BL',
          planImage: { src: '/apt/the-sharp-geomdan-lakepark-4/community-detail-2.jpg', alt: '더샵 검단레이크파크 23BL 커뮤니티 시설 배치도(6303~4동)' },
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
        { q: '분양하는 평형과 타입은 무엇인가요?', a: '전용면적 기준 59㎡와 84㎡, 총 5개 타입입니다. 전용 59㎡는 59㎡A(707세대)·59㎡B(630세대), 전용 84㎡는 84㎡A(869세대)·84㎡B(335세대)·84㎡C(316세대)로 나뉩니다.' },
        { q: '단지배치도와 동호수배치도는 어디에서 볼 수 있나요?', a: 'COMPLEX & UNIT LAYOUT 섹션에서 단지배치도와 22BL·23BL 동호수배치도를 확인할 수 있습니다. 동·호수와 향 등 세부 사항은 입주자 모집공고 전문에서 확인해야 합니다.' },
        { q: '주차 공간은 얼마나 마련되나요?', a: '공식 사업개요 기준 22BL은 2,376대(세대당 1.63대), 23BL은 2,151대(세대당 1.53대)입니다.' },
        { q: '분양가상한제 적용 단지라는 것은 무슨 의미인가요?', a: '분양가상한제는 택지비와 건축비 등을 기준으로 분양가의 상한을 정하는 제도입니다. 더샵 검단레이크파크는 분양가상한제 적용 단지로 안내되며, 실제 공급금액과 조건은 입주자 모집공고 원문에서 확인해야 합니다.' },
        { q: '"검단 첫 더샵"이라는 표현은 무슨 뜻인가요?', a: '검단 지역에 처음 공급되는 더샵 브랜드 아파트라는 뜻입니다. 총 2,857세대 규모로 검단의 새로운 브랜드타운을 완성합니다.' },
        { q: '교통 여건은 어떻게 되나요?', a: '지하철 1·2호선 더블역 생활권이 핵심입니다. 인천2호선 연장·서울5호선 연장은 예정, GTX-D 노선은 계획 단계로 안내되며, 예정·계획 사업의 내용과 일정은 관계기관 계획에 따라 변경될 수 있습니다.' },
        { q: '주변 자연환경의 특징은 무엇인가요?', a: '나진포천 수변공원과 중앙호수공원을 가까이 둔 수변 입지가 핵심입니다. 만수산 등 주변 자연환경도 함께 누릴 수 있습니다.' },
        { q: '교육환경은 어떻게 되나요?', a: '단지 앞 유치원·초등학교·중학교 예정 부지와 완정역 학원가 인접성이 주요 교육환경입니다. 학교 설립 일정은 관계기관 계획에 따라 달라질 수 있습니다.' },
        { q: '커뮤니티에는 어떤 시설이 계획되어 있나요?', a: '22BL·23BL에 피트니스, GX룸, 필라테스, 사우나, 실내골프연습장·스크린골프룸·퍼팅그린, 실내체육관, 게스트하우스, 다이닝·카페 라운지, 헬스케어 라운지, 키즈존, 패밀리 라이브러리, 프라이빗스터디, 에듀&비즈니스 라운지 등이 계획되어 있습니다. 블록별 위치와 구성은 홈페이지의 공식 커뮤니티 배치도에서 확인할 수 있습니다.' },
        { q: '지금도 상담이나 방문이 가능한가요?', a: '가능합니다. 이 페이지 하단의 방문예약에서 희망 날짜·시간을 신청하거나 관심고객 등록을 남기면 담당자가 입력하신 연락처로 안내해 드립니다. 상담 대표번호는 1668-1888이며 방문 상담은 10:00~18:00에 1시간 단위로 예약할 수 있습니다.' },
        { q: '특별공급 자격 조건이 완화됐다고 들었는데 어떻게 달라지나요?', a: '신혼부부 특별공급 공급물량이 기존 18%에서 23%로 확대되고(전용 85㎡ 이하), 무주택 요건도 모집공고일 기준 무주택 세대면 신청 가능하도록 완화되었습니다. 다자녀 특별공급은 기존 3자녀 이상에서 2자녀 이상으로, 신생아가 있는 가정의 우선공급 비율도 15%에서 25%로 확대되었습니다. 또한 혼인·출산으로 특별공급 당첨이력이 있어도 생애 1회 한해 추가로 신청할 수 있는 혼인특례·출산특례(2024년 6월 19일 이후 출생, 임신·입양 포함)가 신설되었습니다. 정확한 자격 요건은 입주자모집공고문을 통해 확인하시기 바랍니다.' },
        { q: '청약통장 가입기간이나 예치금 기준은 어떻게 되나요?', a: '전용 85㎡ 이하 기준 예치금은 인천광역시 250만원, 서울특별시 300만원, 경기도 200만원이며, 청약통장 가입기간 12개월 경과와 예치금을 모집공고 전일까지 충족해야 합니다. 1순위 청약 시 배우자의 청약통장 가입기간을 합산할 수 있고(최대 3점, 합산 시 17점 초과분은 인정되지 않음), 특별공급·1·2순위 모두 인천 50%·서울·경기 50%로 배정됩니다.' },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
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
      logo: { src: '/apt/the-sharp-geomdan-lakepark-4/logo-white.svg', alt: '더샵 검단레이크파크' },
      highlightText: '1668-1888',
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
      csPhone: '1668-1888',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
