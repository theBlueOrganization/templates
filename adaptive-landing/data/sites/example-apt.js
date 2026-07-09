// ────────────────────────────────────────────────────────────
// 새 현장을 추가할 때는 이 파일을 복사해서 값만 바꾸면 됩니다.
//   1) 이 파일을 data/sites/새현장-슬러그.js로 복사
//   2) 아래 값들을 새 현장 정보로 수정
//   3) data/siteRegistry.js에 import + sites 배열 등록
//   4) public/apt/새현장-슬러그/ 폴더에 이미지 넣기
//
// sections 배열에 넣을 수 있는 항목 5종류 (type 필드로 구분):
//   'about'    → 텍스트 + 이미지 2단 소개
//   'point'    → 핵심 강점 카드 그리드
//   'gallery'  → 이미지 여러 장 (클릭하면 확대)
//   'location' → 지도 + 주소 + 교통정보
//   'image' | 'image-then-spec' | 'spec-then-image' | 'spec-only' → 범용 이미지/스펙표 블록
// ────────────────────────────────────────────────────────────
const config = {
  // URL이 됨: /apt/example-apt
  slug: 'example-apt',
  projectName: '예시 아파트',
  shortName: '예시 아파트',
  telNumber: '02-000-0000',
  // 카카오톡/문자로 링크 공유했을 때 보이는 썸네일 이미지 (1200x630px 절대 URL)
  ogImage: 'https://example.vercel.app/apt/example-apt/og.webp',
  // 상담신청이 들어오면 SMS를 받을 번호들
  adminPhones: ['01000000000'],
  // 비워두면 .env.local의 GOOGLE_SHEET_ID를 사용
  sheetId: '',
  // 이 현장 상담 데이터가 저장될 구글시트의 탭(시트) 이름 — 시트에 미리 만들어둬야 함
  sheetTab: '예시아파트',
  showUtmInSms: true,

  // 회사 정보 (보통 현장마다 똑같음, 대행사 정보)
  company: {
    name: '주식회사 더블루파트너스',
    bizNumber: '789-81-03093',
    email: 'addup@addup.kr',
  },

  // 상담신청 폼의 "방문예약시간" select 옵션 목록
  visitTimeOptions: [
    '10시 이전',
    '10:00 ~ 11:00',
    '11:00 ~ 12:00',
    '12:00 ~ 13:00',
    '13:00 ~ 14:00',
    '14:00 ~ 15:00',
    '15:00 ~ 16:00',
    '16:00 ~ 17:00',
    '17:00 ~ 18:00',
  ],

  // ── 첫 화면(히어로) ──────────────────────────────────────
  hero: {
    eyebrow: '즉시입주가능｜최대1억지원', // ｜로 구분하면 배지가 2개로 나뉨
    eyebrowUrgent: 1, // 앞의 1개("즉시입주가능")만 강조(빨간) 스타일
    brand: '예시 아파트 브랜드명',
    title: '첫 번째 줄\n두 번째 줄\n세 번째 줄', // \n = 줄바꿈
    subtitle: '서브타이틀 텍스트',
    bgColor: 'linear-gradient(to right, #1e3a5f, #1d4ed8)', // 이미지 로딩 전 배경
    accentKeyword: '첫 번째 줄', // title 중 이 문구만 강조색으로 표시
    image: {
      src: '/apt/example-apt/1.webp',
      alt: '예시 아파트 대표 이미지',
      width: 800,
      height: 1200,
    },
  },

  // ── 본문 섹션들 — 이 순서 그대로 페이지에 나타남 ─────────────
  sections: [
    {
      // type: 'image-then-spec' → 이미지 먼저, 그 아래 스펙표
      id: 'overview',
      type: 'image-then-spec',
      navLabel: '사업개요', // 값이 있으면 TopNav 메뉴에 자동으로 표시됨
      title: '사업개요',
      subtitle: '입지·규모·특화설계를 한눈에',
      images: [{ src: '/apt/example-apt/1-1.webp', alt: '사업개요' }],
      specItems: [
        { label: '사업명', value: '예시 공동주택 신축공사' },
        { label: '대지위치', value: '서울특별시 예시구 예시동 000번지 일원' },
        // 값이 여러 줄이면 배열로
        { label: '세대수', value: ['총 500세대', '일반분양 400세대, 임대 100세대'] },
        { label: '건축규모', value: '지하 3층, 지상 29층 4개동' },
        { label: '주차대수', value: '600대' },
      ],
    },
    {
      // type: 'about' → 텍스트 + 이미지 2단 소개
      id: 'about',
      type: 'about',
      navLabel: '브랜드소개',
      eyebrow: 'ABOUT',
      title: '한 층 더 높은 삶의 기준',
      body: '예시 아파트는 프리미엄 커뮤니티 시설과 특화 설계로\n일상의 품격을 완성합니다.\n입주민만을 위한 차별화된 라이프스타일을 제안합니다.',
      image: { src: '/apt/example-apt/2-1.webp', alt: '브랜드소개' },
      imagePosition: 'right', // 데스크톱에서 이미지를 오른쪽에 배치
    },
    {
      // type: 'point' → 핵심 강점 카드 그리드
      id: 'point',
      type: 'point',
      navLabel: '핵심포인트',
      title: '4가지 핵심 포인트',
      subtitle: '선택해야 할 이유',
      items: [
        { icon: '🚇', title: '더블역세권', description: '도보 5분 지하철 2개 노선' },
        { icon: '🏫', title: '학세권', description: '초·중·고 도보 통학' },
        { icon: '🌳', title: '공원 인접', description: '단지 앞 근린공원' },
        { icon: '🛍️', title: '생활인프라', description: '대형마트·병원 도보권' },
      ],
    },
    {
      // type: 'gallery' → 이미지 여러 장, 클릭하면 확대됨
      id: 'gallery',
      type: 'gallery',
      navLabel: '갤러리',
      title: '평면 & 조감도',
      subtitle: '이미지를 눌러 확대해보세요',
      images: [
        { src: '/apt/example-apt/3-1.webp', alt: '평면안내 84A 타입', caption: '84A 타입' },
        { src: '/apt/example-apt/3-2.webp', alt: '평면안내 84B 타입', caption: '84B 타입' },
        { src: '/apt/example-apt/3-3.webp', alt: '단지 조감도', caption: '단지 조감도' },
      ],
    },
    {
      // type: 'location' → 지도 + 주소 + 교통정보
      id: 'location',
      type: 'location',
      navLabel: '위치안내',
      title: '입지환경',
      subtitle: '생활이 편리한 핵심 입지',
      address: '서울특별시 예시구 예시동 000번지 일원',
      mapImage: { src: '/apt/example-apt/4-1.webp', alt: '위치 안내도' },
      transport: [
        { label: '지하철', value: '2호선·5호선 예시역 도보 5분' },
        { label: '버스', value: '간선 3개 노선, 마을버스 2개 노선' },
        { label: '자가용', value: '올림픽대로 진입 3분' },
      ],
    },
  ],

  // 진입 팝업 배너 — enabled를 false로 바꾸면 팝업이 아예 안 뜸
  popup: {
    enabled: true,
    image: { src: '/apt/example-apt/popup.webp', alt: '특별 혜택 안내' },
  },

  // ── 현장별 색상/폰트 커스터마이징 (없으면 컴포넌트 기본값 사용) ──
  theme: {
    hero: {
      curtainColor: '#1e293b',
    },
    eyebrow: {
      color: '#7ec8e3',
      borderColor: 'rgba(126,200,227,0.45)',
      fontSize: '0.875rem',
    },
    eyebrowUrgent: {
      color: '#ff6b6b',
      borderColor: 'rgba(255,107,107,0.5)',
    },
    brand: {
      color: '#ffffff',
      fontSize: '0.875rem',
    },
    title: {
      color: '#ffffff',
      fontSize: 'clamp(2rem, 8vw, 3.5rem)',
      accentColor: '#f5c445',
    },
    subtitle: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: '0.9rem',
    },
    section: {
      dividerBackground: 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
      dividerWidth: '40px',
      dividerHeight: '3px',
    },
    point: {
      cardBackground: '#f8fafc',
      iconColor: '#1d4ed8',
    },
    location: {
      accentColor: '#1d4ed8',
    },
    contactSection: {
      background: '#1e293b',
    },
    ContactForm_submitBtn: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: '#ffffff',
      fontSize: '1.1rem',
    },
    BottomBar_callBtn: {
      background: '#e2e8f0',
      color: '#1e293b',
    },
    BottomBar_regBtn: {
      background: '#1e3a5f',
      color: '#ffffff',
    },
  },

  // 상담신청 폼 하단, 개인정보 동의 textarea에 그대로 표시되는 문구
  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 예시 아파트 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대, 이벤트 응모 처리
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 예시 아파트 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
}

export default config
