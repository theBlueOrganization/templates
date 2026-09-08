// 한양 아이클래스 양주(2차 분양팀용) — hanyang-iclass-yangju.js를 복제한 신규 분양팀 사이트.
// the-sharp-geomdan-lakepark-2/3/4가 같은 단지를 여러 분양팀용으로 복제하는 것과 같은 방식으로,
// subdomain에 구분용 접미사 'T'를 붙이고 대표번호만 이 팀 전용 번호(1666-0775)로 교체했다.
// 콘텐츠·이미지는 원본(hanyang-iclass-yangju)과 동일 — 공식 사이트
// (https://한양아이클래스양주.com/, https://xn--hj2bn3st4b1id900arsd6sw4mk.com/,
// https://한양-아이클래스-양주.kr/)에서 사업개요 스펙표·입지환경 카피·PREMIUM 4종 카드·
// 세대안내(59A/59B/75A/84A/84B) 스펙·커뮤니티 시설명과 이미지를 직접 스크래핑해 채웠다
// (2026-09-07, curl로 원본 HTML 확보 후 이미지 다운로드 → sharp로 조경/단지배치도/커뮤니티
// 평면도를 그리드 이미지에서 크롭).
//
// ⚠️ 공식 사이트 자체가 아직 공사중(premium.html/complex.html/community.html은 완성된 하위
// 페이지 대신 "coming soon" 성격의 단일 이미지만 올라와 있음)이라, 아래 항목은 실제 자산이
// 부족해 재구성/재사용한 것 — 향후 공식 사이트가 갱신되면 대조해서 교체할 것:
//   - complex.donghoChart: 실제 동·호수 배치도(동호수배치도.png)로 교체함
//   - club: 내부 교육자료 PDF(HYD한양 14P·15P)의 실제 커뮤니티 시설 8종 이미지로 교체하고
//     variant:'simple' 카드 그리드로 단순화함(기존 4장 재사용 구성 제거)
//   - summary.photo/thumbs: 같은 교육자료 PDF의 상품사진 5종(투시도 주경/조감도 주경/투시도
//     석경/조감도 야경/광역조감도)으로 교체
//   - premiumIntro.bgImage: 유저 제공 KakaoTalk 사진(단지 야경 조감도)으로 교체
//   - hero.titleLine1/2: 유저 요청 문구('양주파격조건 신규아파트' / '마지막 3억원대')로 교체
//   - colorTheme: 유저 요청 색상(--color-main1/2/3, --pc-header-color)을 역할별로 매핑해 추가
//   - unitPlan.groups[].types[].image: 공식 사이트는 타입별 이미지가 3장(확장기본형/유상옵션형/
//     최상층구조)이지만 SignatureUnitPlan 컴포넌트가 타입당 이미지 1장만 지원해 01번만 사용
//   - adminPhones: 이 팀 전용 알림 수신번호(010-5326-7859)로 교체함
const config = {
  slug: 'hanyang-iclass-yangju-2',
  // [subdomain].addupapt.kr → /apt/[slug]로 자동 라우팅 (middleware.js)
  // 원본 사이트(hanyang-iclass-yangju)가 '한양아이클래스양주'를 그대로 쓰므로,
  // 이 신규 분양팀 사이트는 접두사 'H'를 붙여 구분
  subdomain: 'H한양아이클래스양주',
  projectName: '한양 아이클래스 양주2',
  shortName: '한양 아이클래스 양주',
  telNumber: '1666-0775',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/hanyang-iclass-yangju-2/og.jpg',
  // 모든 상담신청 알림을 이 번호로 발송
  adminPhones: ['01053267859'],
  sheetId: '',
  sheetTab: '한양아이클래스양주2',
  showUtmInSms: true,
  // 상담 접수 알림을 문자 대신 카카오 알림톡으로 발송(실패 시 SMS로 자동 폴백). 솔라피 콘솔에
  // 등록된 공용 KAKAO_TEMPLATE_ID(.env.local)를 그대로 사용 — 이 현장 전용 템플릿이 따로
  // 있다면 kakaoTemplateId 필드를 추가해서 덮어쓸 것
  kakao: true,

  // 요청받은 컬러(--color-main1/2/3, --pc-header-color)를 역할별로 매핑함. cream은 입지환경 등
  // 여러 섹션의 "밝은 배경" 자리라 요청 색 중 밝은 색이 없어 원래 기본값(밝은 회백색)을 유지함.
  // gold도 같은 이유로 "밝은 배경 + 짙은 navy 텍스트" 대비가 필요한 자리(모바일 하단바 버튼,
  // 혜택 카드 hover 등)라 요청 색 대신 밝은 회색을 사용
  colorTheme: {
    navy: '#0e133b',
    ink: '#333',
    cream: '#f6f6f4',
    gold: '#e2e2e2',
  },

  // 유저가 공유한 히어로 캡처 이미지 서체(굵은 프리텐다드) 요청 반영 — --font-sans를 덮어써
  // 대부분의 컴포넌트(var(--font-sans) 참조)에 전체 적용됨
  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css',
  },

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
      // 공식 사이트(https://xn-----w18i287a79cfnfa479a68dfvzvwm.kr/)의 실제 로고 — 히어로 섹션
      // 위(투명 헤더)에서는 컬러 로고, 그 외 배경이 채워진 헤더에서는 흰색 로고를 사용
      logo: { src: '/apt/hanyang-iclass-yangju-2/logo-white.png', alt: '한양 아이클래스 양주', width: 210, height: 21 },
      logoWhite: { src: '/apt/hanyang-iclass-yangju-2/logo-color.png', alt: '한양 아이클래스 양주', width: 210, height: 21 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지설계', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1666-0775',
    },

    // PC(1024px 이상) 전용 우측 고정 퀵메뉴 — 접힌 상태의 세로 바(전화/관심고객/MENU)가 항상 떠
    // 있고, MENU를 누르면 QUICK MENU 패널이 열림
    quickMenu: {
      brand: '한양 아이클래스 양주',
      phoneLabel: '분양문의',
      phone: '1666-0775',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '한양 아이클래스 양주\n분양 상담을 도와드립니다.',
      address: '경기도 양주시 부흥로 2194-27',
      tagline: 'GTX-C(확정) 덕정역 첫 프리미엄 시범단지',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '입지환경', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지설계', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '상담신청 및 방문예약', targetId: 'vip-reservation' },
      ],
    },

    // 방문 고객 이벤트(신세계 백화점 상품권 증정) 안내 이미지 팝업(popup1.png)
    popup: {
      enabled: true,
      image: {
        src: '/apt/hanyang-iclass-yangju-2/popup1.png',
        alt: '한양 아이클래스 양주 방문 고객 이벤트 - 신세계 백화점 상품권 증정',
        width: 1052,
        height: 1495,
      },
    },

    // 출처: 공식 사이트 메인 히어로(eyebrow "GTX-C(확정) 덕정역" + 대형 타이틀 "첫 프리미엄
    // 시범단지" + 하단 브랜드 로고 락업) — 실제 영상 배경(hero-video.mp4)과 포스터 이미지 그대로 사용
    hero: {
      eyebrowLine1: 'GTX-C(확정) 덕정역',
      eyebrowLine2: '',
      titleLine1: '양주파격조건 신규아파트',
      titleLine2: '마지막 3억원대',
      descLine1: '여유로운 집의 가치에 더 넓은 생활반경을 더하다,',
      descLine1Accent: ['생활반경'],
      descLine2: '생활은 여유롭게,',
      descLine3: '서울은 더 가까이.',
      // 요청 반영 — 배경 사진 위 검은 그라디언트 오버레이 제거, 텍스트 그림자 제거 + 완전
      // 흰색 텍스트, 타이틀 크기 축소
      overlay: false,
      textColor: '#fff',
      titleSize: { base: 20, md: 40, lg: 60 },
      bgImage: { src: '/apt/hanyang-iclass-yangju-2/hero-bg.jpg', alt: '한양 아이클래스 양주 대표 조감도' },
      bgVideo: { src: '/apt/hanyang-iclass-yangju-2/hero-video.mp4' },
      brandLogo: { src: '/apt/hanyang-iclass-yangju-2/logo-white.png', alt: '한양 아이클래스 양주', width: 210, height: 21 },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '한양 아이클래스 양주', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '지금 상담하고 방문을 예약하세요',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 유저 제공 홍보 배너 이미지의 하단 4가지 ZERO 조건 배지 그대로 반영
    benefits: {
      id: 'benefits',
      eyebrow: 'SPECIAL CONDITIONS',
      titleSmall: '한양 아이클래스 양주만의',
      titleBold: '특별한 ',
      titleScript: '4가지 혜택',
      desc: '한양 아이클래스 양주만의 특별한 조건을 확인하세요.',
      bgImage: { src: '/apt/hanyang-iclass-yangju-2/hero-bg.jpg', alt: '한양 아이클래스 양주 대표 조감도' },
      items: [
        { num: '01', title: ['계약금', 'ZERO'], desc: '계약금 부담 없이 시작하는 내 집마련' },
        { num: '02', title: ['입주시까지', 'ZERO'], desc: '입주 전까지 추가 납부 부담 없이' },
        { num: '03', title: ['중도금이자', 'ZERO'], desc: '중도금 대출 이자까지 지원' },
        { num: '04', title: ['계약축하금', '1,000만원'], desc: '계약과 동시에 드리는 특별 혜택' },
      ],
    },

    // 출처: 공식 사이트 SUMMARY(사업개요) 표 + planning.html 그대로
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/hanyang-iclass-yangju-2/product-03-perspective-dusk.jpg',
        alt: '한양 아이클래스 양주 투시도(석경)',
      },
      thumbs: [
        { src: '/apt/hanyang-iclass-yangju-2/product-01-perspective-day.jpg', alt: '한양 아이클래스 양주 투시도(주경)' },
        { src: '/apt/hanyang-iclass-yangju-2/product-02-aerial-day.jpg', alt: '한양 아이클래스 양주 조감도(주경)' },
        { src: '/apt/hanyang-iclass-yangju-2/product-04-aerial-night.jpg', alt: '한양 아이클래스 양주 조감도(야경)' },
        { src: '/apt/hanyang-iclass-yangju-2/product-05-wide-aerial.jpg', alt: '한양 아이클래스 양주 광역조감도' },
      ],
      notice: '본 사이트의 개발계획, 교통계획과 외관 이미지는 소비자의 이해를 돕기 위한 것으로 관계기관의 계획 변경 등에 따라 달라질 수 있습니다.',
      specItems: [
        { label: '위치', value: '경기도 양주시 은현면 용암리 784-8번지 일대' },
        { label: '규모', value: ['지하 2층 ~ 지상 27층 / 총 7개동', '644세대'] },
        { label: '대지면적', value: '35,646.00㎡ (10,782.92평)' },
        { label: '연면적', value: '90,825.87㎡ (27,474.82평)' },
        { label: '건폐율', value: '17.35%' },
        { label: '커뮤니티', value: ['피트니스 센터, 시니어센터,', '어린이집, 북카페&작은도서관'] },
        { label: '주차대수', value: '총 823대 (공동주택 815대, 근린생활시설 8대)' },
      ],
    },

    // 출처: 공식 사이트 sec03(광역 교통과 생활환경) 4개 항목 그대로 — 별도 사진 없이 numCard로 구성
    location: {
      id: 'location',
      navLabel: '입지환경',
      eyebrowPlain: '여유로운 집의 가치에 ',
      eyebrowAccent: '더 넓은 생활반경을 더하다',
      title: 'GTX-C 덕정역(확정)으로 이어지는 생활반경',
      descTitle: '덕정역을 따라 넓어지는 양주의 새로운 생활 리듬.',
      descTitleAccent: ['덕정역'],
      descBody1: '집은 조용하게, 이동은 경쾌하게.',
      descBody2: '멀게 느껴졌던 생활권을 더 편하게 연결하는 집.',
      mapImage: { src: '/apt/hanyang-iclass-yangju-2/location-map.jpg', alt: '한양 아이클래스 양주 광역 교통망 지도' },
      subhead: { eyebrow: 'LOCATION', title: '더 넓어진 생활반경 4가지' },
      features: [
        {
          num: '01',
          category: '더 빠른 쾌속생활',
          title: 'GTX-C(확정) 덕정역',
          desc: '수도권 제2순환 고속도로 북양주IC, 서울-양주 고속도로(계획)까지 이어지는 쾌속 교통망',
        },
        {
          num: '02',
          category: '가깝게 누리는 생활',
          title: '이마트·복합쇼핑몰 근접',
          desc: '단지 인근 이마트·복합쇼핑몰·관공서 등 생활 인프라 근접, LF스퀘어·이마트 셔틀 예정',
        },
        {
          num: '03',
          category: '직주근접 인프라',
          title: '업무권 인접 산업단지',
          desc: '서울우유·검준·은남·도하 일반산업단지 등 업무권 인접, 은남산업단지 개발환경 연계',
        },
        {
          num: '04',
          category: '교육·자연환경',
          title: '예원예술대학교·서정대학교',
          desc: '은현초 스쿨버스 운영 확정, 쾌적한 녹지 환경 연계',
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    // 출처: 공식 사이트 sec05(PREMIUM) 커버 카피, 배경은 실제 단지 야경 조감도로 교체
    premiumIntro: {
      eyebrow: 'PREMIUM',
      titleLine1: '오직 당신만을 위한',
      titleLine2: '특별한 프리미엄',
      descLine1: '가장 빛나는 삶의 품격을 선사합니다.',
      descLine1Accent: ['품격'],
      descLine2: '기대를 넘어서는 특별한 시작',
      bgImage: {
        src: '/apt/hanyang-iclass-yangju-2/KakaoTalk_20260907_083149237.jpg',
        alt: '한양 아이클래스 양주 단지 야경 조감도',
      },
    },

    // 출처: 유저 제공 이미지(PREMIUM 1~6 아이콘 카드 6종) — the-sharp-geomdan-lakepark-3/4와 동일한
    // SignaturePremiumValue 아이콘 카드 컨벤션(num/icon/title/desc, 이미지 없음)으로 반영
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '한양 아이클래스 양주 ',
      titleAccent: 'PREMIUM 6',
      cards: [
        {
          num: '01',
          icon: 'train',
          title: ['단지 인근', 'GTX-C(예정) 덕정역'],
          desc: ['강남 20분대! 서울을 빠르게 잇는 쾌속교통'],
        },
        {
          num: '02',
          icon: 'car',
          title: ['기대되는', '대형 교통 호재'],
          desc: ['수도권 제2순환고속도로, 서울~양주고속도로(계획) 등'],
        },
        {
          num: '03',
          icon: 'forest',
          title: ['도심 속', '청정 자연환경'],
          desc: ['단지 내 소공원(예정), 도락산, 불곡산 등'],
        },
        {
          num: '04',
          icon: 'tower',
          title: ['여유로운', '직주근접 단지'],
          desc: ['검준 일반산업단지, 은남 일반산업단지 등'],
        },
        {
          num: '05',
          icon: 'cart',
          title: ['가깝게 누리는', '양주 생활인프라'],
          desc: ['단지 인근 이마트, LF스퀘어몰, 관공서 등'],
        },
        {
          num: '06',
          icon: 'unitPlan',
          title: ['선호도 높은', '중소형 타입구성'],
          desc: ['실수요자 관심 높은 59㎡~84㎡ 타입 구성'],
        },
      ],
    },

    // 출처: complex.html 단지배치도(101~107동, 타입별 세대수 범례) + 실제 동·호수 배치도
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '도시와 자연, 문화가 하나된',
      titleLine2: '단지설계',
      desc: '커뮤니티와 생활 지원 시스템까지 더한 주거 프리미엄',
      siteMap: {
        image: {
          src: '/apt/hanyang-iclass-yangju-2/complex-sitemap.jpg',
          alt: '한양 아이클래스 양주 단지 배치도 및 타입별 세대수(59A 367세대·59B 52세대·75A 130세대·84A 70세대·84B 25세대, 총 644세대)',
          width: 1260,
          height: 745,
        },
      },
      donghoChart: {
        image: {
          src: '/apt/hanyang-iclass-yangju-2/동호수배치도.png',
          alt: '한양 아이클래스 양주 동·호수 배치도(101동~107동, 층별 호수 및 타입 안내)',
          width: 1146,
          height: 639,
        },
      },
    },

    // 출처: unit.html 5개 타입(59A/59B/75A/84A/84B) 전용·공용·공급·기타공용·계약면적 및 세대수 그대로
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'HANYANG I-CLASS YANGJU',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['양주의 새로운 생활 리듬을 선도하는', '한양 아이클래스 양주', '5가지 타입, 다양한 라이프스타일에 맞춘', '실속있는 평면을 만나보십시오.'],
      groups: [
        {
          area: '59㎡',
          types: [
            {
              letter: 'A',
              countText: '총 644세대 중 367세대',
              image: { src: '/apt/hanyang-iclass-yangju-2/unit-59a.png', alt: '59㎡A 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '59.9973', common: '21.1360', supply: '81.1333', otherCommon: '45.4619', contract: '126.5952' },
            },
            {
              letter: 'B',
              countText: '총 644세대 중 52세대',
              image: { src: '/apt/hanyang-iclass-yangju-2/unit-59b.png', alt: '59㎡B 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '59.9957', common: '21.7398', supply: '81.7355', otherCommon: '45.4607', contract: '127.1962' },
            },
          ],
        },
        {
          area: '75㎡',
          types: [
            {
              letter: 'A',
              countText: '총 644세대 중 130세대',
              image: { src: '/apt/hanyang-iclass-yangju-2/unit-75a.png', alt: '75㎡A 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '75.9281', common: '23.1372', supply: '99.0653', otherCommon: '57.5332', contract: '156.5985' },
            },
          ],
        },
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '총 644세대 중 70세대',
              image: { src: '/apt/hanyang-iclass-yangju-2/unit-84a.png', alt: '84㎡A 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '84.6964', common: '27.4228', supply: '112.1192', otherCommon: '64.1773', contract: '176.2965' },
            },
            {
              letter: 'B',
              countText: '총 644세대 중 25세대',
              image: { src: '/apt/hanyang-iclass-yangju-2/unit-84b.png', alt: '84㎡B 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '84.9963', common: '26.9855', supply: '111.9818', otherCommon: '64.4046', contract: '176.3864' },
            },
          ],
        },
      ],
    },

    // 출처: 교육자료 PDF(HYD한양 14P·15P) 커뮤니티 시설 8종 실제 렌더링 이미지 그대로 —
    // 기존엔 공식 자산이 4장뿐이라 억지로 나눠 재사용했던 걸 걷어내고, variant:'simple' 카드
    // 그리드 하나로 깔끔하게 정리함(아이콘은 8종 전부 매칭되는 종류가 없어 hideIcon으로 생략)
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      hideIcon: true,
      intro: {
        watermark: 'Community',
        titleLine1: '일상에 여유와 활력을 더해',
        titleLine2: '다채로운 매력의 커뮤니티',
        desc: '최고의 편안함을 만들어 낼 정교하고 섬세한 라이프',
      },
      // 원본 이미지 상단의 타이틀 텍스트, 하단의 시설 사진 4장(북카페&작은도서관/피트니스/
      // 어린이집/시니어센터 — 아래 facilities 그리드와 중복)은 크롭해서 제거하고 평면도만 남김
      topImage: {
        src: '/apt/hanyang-iclass-yangju-2/community.jpg',
        alt: '한양 아이클래스 양주 커뮤니티동 B1F·피트니스 B2F 평면도',
        width: 1300,
        height: 760,
      },
      facilities: [
        {
          key: 'playground',
          labelEn: 'PLAYGROUND',
          title: '놀이터',
          desc: '아이들의 웃음이 가득한 실외 놀이 공간',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-playground.jpg', alt: '놀이터', width: 1491, height: 903 },
        },
        {
          key: 'library',
          labelEn: 'SMALL LIBRARY',
          title: '작은도서관',
          desc: '책과 여유를 함께 나누는 작은도서관',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-library.jpg', alt: '작은도서관', width: 1491, height: 903 },
        },
        {
          key: 'daycare',
          labelEn: 'DAYCARE CENTER',
          title: '어린이집',
          desc: '안심하고 맡길 수 있는 단지 내 어린이집',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-daycare2.jpg', alt: '어린이집', width: 1491, height: 903 },
        },
        {
          key: 'momstation',
          labelEn: "MOM'S STATION",
          title: '맘스테이션',
          desc: '아이 등하원을 더 편리하게, 맘스테이션',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-momstation.jpg', alt: '맘스테이션', width: 1491, height: 903 },
        },
        {
          key: 'fitness',
          labelEn: 'FITNESS CENTER',
          title: '휘트니스',
          desc: '최신 운동 기구를 갖춘 피트니스 센터',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-fitness2.jpg', alt: '휘트니스', width: 1491, height: 903 },
        },
        {
          key: 'outdoorFitness',
          labelEn: 'OUTDOOR FITNESS',
          title: '주민운동시설',
          desc: '단지 내에서 편하게 즐기는 실외 운동시설',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-outdoor-fitness.jpg', alt: '주민운동시설', width: 1491, height: 903 },
        },
        {
          key: 'senior',
          labelEn: 'SENIOR CENTER',
          title: '시니어센터',
          desc: '어르신들의 여가와 교류를 위한 시니어센터',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-senior2.jpg', alt: '시니어센터', width: 1491, height: 903 },
        },
        {
          key: 'neighborhood',
          labelEn: 'COMMUNITY FACILITY',
          title: '근린생활시설',
          desc: '생활 편의를 더하는 근린생활시설',
          image: { src: '/apt/hanyang-iclass-yangju-2/facility-neighborhood.jpg', alt: '근린생활시설', width: 1491, height: 903 },
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '한양 아이클래스 양주',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 확인 후 신속하게 안내해 드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/hanyang-iclass-yangju-2/logo-white.png', alt: '한양 아이클래스 양주' },
      highlightText: 'GTX-C(확정) 덕정역 첫 프리미엄 시범단지',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '현장위치', value: '경기도 양주시 은현면 용암리 784-8번지 일대' },
        { label: '시행', value: '양주용암3지구 지역주택조합' },
        { label: '시공', value: '한양산업개발(주)' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 CG, 일러스트, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 상이할 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1666-0775',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
