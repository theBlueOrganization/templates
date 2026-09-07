// 한양 아이클래스 양주 — 경기도 양주시 은현면 용암리 784-8번지 일원, 한양산업개발(주) 시공
// (시행 양주용암3지구 지역주택조합) 지하 2층~지상 27층 7개동 644세대. 공식 사이트
// (https://한양아이클래스양주.com/, https://xn--hj2bn3st4b1id900arsd6sw4mk.com/)에서 사업개요
// 스펙표·입지환경 카피·PREMIUM 4종 카드·세대안내(59A/59B/75A/84A/84B) 스펙·커뮤니티 시설명과
// 이미지를 직접 스크래핑해 채웠다(2026-09-07, curl로 원본 HTML 확보 후 이미지 다운로드 → sharp로
// 조경/단지배치도/커뮤니티 평면도를 그리드 이미지에서 크롭).
//
// ⚠️ 공식 사이트 자체가 아직 공사중(premium.html/complex.html/community.html은 완성된 하위
// 페이지 대신 "coming soon" 성격의 단일 이미지만 올라와 있음)이라, 아래 항목은 실제 자산이
// 부족해 재구성/재사용한 것 — 향후 공식 사이트가 갱신되면 대조해서 교체할 것:
//   - complex.donghoChart: 별도의 동호수 배치표가 없어 단지배치도(complex-sitemap.jpg)에서
//     107동 라인 확대컷(complex-dongho-chart.jpg)으로 대체
//   - club: 공식 자산이 북카페&작은도서관/피트니스센터/어린이집/시니어센터 4장 + 평면도 2장뿐이라
//     사우나·골프연습장 등 원래 템플릿 문구 대신 실제 4개 시설명으로 재구성했고, 사진 4장을
//     wellness/sportsHealth/cafeLounge/eduKids 슬롯에 나눠 재사용함(동일 사진 caption만 다르게)
//   - unitPlan.groups[].types[].image: 공식 사이트는 타입별 이미지가 3장(확장기본형/유상옵션형/
//     최상층구조)이지만 SignatureUnitPlan 컴포넌트가 타입당 이미지 1장만 지원해 01번만 사용
const config = {
  slug: 'hanyang-iclass-yangju',
  // [subdomain].addupapt.kr → /apt/[slug]로 자동 라우팅 (middleware.js)
  subdomain: '한양아이클래스양주',
  projectName: '한양 아이클래스 양주',
  shortName: '한양 아이클래스 양주',
  telNumber: '1670-5311',
  // 카카오톡 채널 문의로 들어온 방문자에게는 대표번호 대신 카톡문의 전용번호를 노출
  // (SignatureHeader/SignatureHero/SignatureFooter 전화번호 공통 적용)
  telNumberByUtm: { 카카오: '010-8472-3570' },
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/hanyang-iclass-yangju/og.jpg',
  adminPhones: ['01094216962'],
  sheetId: '',
  sheetTab: '한양아이클래스양주',
  showUtmInSms: true,

  // 공식 사이트는 모노톤(회색·검정·흰색) 기조지만, gold는 여러 컴포넌트에서
  // "밝은 배경 + 짙은 navy 텍스트" 대비 용도로 쓰이므로(예: 모바일 하단바 방문예약 버튼)
  // navy와 같은 색을 쓰면 글자가 안 보이게 됨 — 톤은 유지하되 확실히 밝은 색으로 분리
  colorTheme: {
    navy: '#302b42',
    ink: '#1a1a1a',
    cream: '#f6f6f4',
    gold: '#c9a876',
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
      logo: { src: '/apt/hanyang-iclass-yangju/logo.svg', alt: '한양 아이클래스 양주', width: 210, height: 20 },
      gnb: ['사업개요', '입지환경', '프리미엄', '단지설계', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1670-5311',
    },

    // PC(1024px 이상) 전용 우측 고정 퀵메뉴 — 접힌 상태의 세로 바(전화/관심고객/MENU)가 항상 떠
    // 있고, MENU를 누르면 QUICK MENU 패널이 열림
    quickMenu: {
      brand: '한양 아이클래스 양주',
      phoneLabel: '분양문의',
      phone: '1670-5311',
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

    // 출처: 공식 사이트 메인 히어로(eyebrow "GTX-C(확정) 덕정역" + 대형 타이틀 "첫 프리미엄
    // 시범단지" + 하단 브랜드 로고 락업) — 실제 영상 배경(hero-video.mp4)과 포스터 이미지 그대로 사용
    hero: {
      eyebrowLine1: 'GTX-C(확정) 덕정역',
      eyebrowLine2: '',
      titleLine1: '첫 프리미엄',
      titleLine2: '시범단지',
      descLine1: '여유로운 집의 가치에 더 넓은 생활반경을 더하다,',
      descLine1Accent: ['생활반경'],
      descLine2: '생활은 여유롭게,',
      descLine3: '서울은 더 가까이.',
      bgImage: { src: '/apt/hanyang-iclass-yangju/hero-bg.jpg', alt: '한양 아이클래스 양주 대표 조감도' },
      bgVideo: { src: '/apt/hanyang-iclass-yangju/hero-video.mp4' },
      brandLogo: { src: '/apt/hanyang-iclass-yangju/logo.svg', alt: '한양 아이클래스 양주', width: 210, height: 20 },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '한양 아이클래스 양주', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '지금 상담하고 방문을 예약하세요',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 공식 사이트 SUMMARY(사업개요) 표 + planning.html 그대로
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: { src: '/apt/hanyang-iclass-yangju/overview-photo.png', alt: '한양 아이클래스 양주 단지 조감도' },
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
      mapImage: { src: '/apt/hanyang-iclass-yangju/location-map.jpg', alt: '한양 아이클래스 양주 광역 교통망 지도' },
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

    // 출처: 공식 사이트 sec05(PREMIUM) 커버 카피
    premiumIntro: {
      eyebrow: 'PREMIUM',
      titleLine1: '오직 당신만을 위한',
      titleLine2: '특별한 프리미엄',
      descLine1: '가장 빛나는 삶의 품격을 선사합니다.',
      descLine1Accent: ['품격'],
      descLine2: '기대를 넘어서는 특별한 시작',
      bgImage: { src: '/apt/hanyang-iclass-yangju/premium-intro-bg.jpg', alt: '한양 아이클래스 양주 프리미엄 전경' },
    },

    // 출처: 공식 사이트 sec05 PREMIUM 01~04 카드 그대로(이미지 포함)
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄',
      eyebrow: 'PREMIUM VALUE',
      titlePlain: '한양 아이클래스 양주 ',
      titleAccent: 'PREMIUM 4',
      cards: [
        {
          num: '01',
          title: ['편리한', '교통중심지'],
          desc: ['덕정역, LF스퀘어, 이마트까지', '편리한 이동 최적의 입지'],
          image: { src: '/apt/hanyang-iclass-yangju/premium-01.jpg', alt: '덕정역 내부' },
        },
        {
          num: '02',
          title: ['빛나는', '미래가치의 중심'],
          desc: ['자연과 생활, 건강과 안심까지', '한양 아이클래스 양주 프리미엄 라이프'],
          image: { src: '/apt/hanyang-iclass-yangju/premium-02.jpg', alt: '도심 고속도로 전경' },
        },
        {
          num: '03',
          title: ['일상이 여유로운', '문화생활'],
          desc: ['전체 동 필로티 구조 바람길을 고려한 단지 설계', '여유로운 동간 거리, 단지 안팎으로 이어지는 녹지환경'],
          image: { src: '/apt/hanyang-iclass-yangju/premium-03.jpg', alt: '도심 속 공원 산책로' },
        },
        {
          num: '04',
          title: ['원스톱으로 누리는', '편리한 생활'],
          desc: ['입주민 전용 셔틀버스 2대 운영 예정', '덕정역 GTX-C, LF스퀘어, 이마트 연결 노선 예정'],
          image: { src: '/apt/hanyang-iclass-yangju/premium-04.jpg', alt: '입주민 전용 셔틀버스' },
        },
      ],
    },

    // 출처: complex.html(단지설계) 첨부 이미지 속 조경 특화 4종(리프레쉬가든/플라워가든/키즈놀이터/생태연못) 크롭
    landscape: {
      panels: [
        {
          image: { src: '/apt/hanyang-iclass-yangju/landscape-1.jpg', alt: '단지 조경 - 리프레쉬 가든' },
          badge: 'REFRESH GARDEN',
          titlePlain: '역동적인 ',
          titleAccent: '리프레쉬 가든',
          desc: '하루의 긴장을 내려놓는 초록의 쉼터. 가벼운 산책으로 일상을 회복하는 리프레쉬 가든',
        },
        {
          image: { src: '/apt/hanyang-iclass-yangju/landscape-2.jpg', alt: '단지 조경 - 플라워 가든' },
          badge: 'FLOWER GARDEN',
          titlePlain: '계절이 물드는 ',
          titleAccent: '플라워 가든',
          desc: '계절의 색으로 가족의 하루를 물들이는 정원. 꽃이 피어나는 길마다 일상도 더 환해집니다.',
        },
        {
          image: { src: '/apt/hanyang-iclass-yangju/landscape-3.jpg', alt: '단지 조경 - 키즈 놀이터' },
          badge: 'KIDS PLAYGROUND',
          titlePlain: '웃음이 머무는 ',
          titleAccent: '키즈 놀이터',
          desc: '아이의 삶이 즐거워지는 가장 가까운 공간. 웃음이 머무는 곳, 부모의 마음까지 여유로워집니다.',
        },
        {
          image: { src: '/apt/hanyang-iclass-yangju/landscape-4.jpg', alt: '단지 조경 - 생태 연못' },
          badge: 'ECO POND',
          titlePlain: '도심 속 맑은 ',
          titleAccent: '생태 연못',
          desc: '도심 속 가장 가까운 맑은 힐링. 일상의 여유와 회복을 누리세요.',
        },
      ],
    },

    // 출처: complex.html 단지배치도(101~107동, 타입별 세대수 범례) — 동호수배치표는 별도 자산이 없어
    // 같은 배치도의 107동 라인 확대컷으로 대체(상단 ⚠️ 참고)
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX',
      titleLine1: '도시와 자연, 문화가 하나된',
      titleLine2: '단지설계',
      desc: '커뮤니티와 생활 지원 시스템까지 더한 주거 프리미엄',
      siteMap: {
        image: {
          src: '/apt/hanyang-iclass-yangju/complex-sitemap.jpg',
          alt: '한양 아이클래스 양주 단지 배치도 및 타입별 세대수(59A 367세대·59B 52세대·75A 130세대·84A 70세대·84B 25세대, 총 644세대)',
          width: 1260,
          height: 745,
        },
      },
      donghoChart: {
        image: {
          src: '/apt/hanyang-iclass-yangju/complex-dongho-chart.jpg',
          alt: '107동 라인별 타입 배치 확대',
          width: 700,
          height: 460,
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
              image: { src: '/apt/hanyang-iclass-yangju/unit-59a.png', alt: '59㎡A 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '59.9973', common: '21.1360', supply: '81.1333', otherCommon: '45.4619', contract: '126.5952' },
            },
            {
              letter: 'B',
              countText: '총 644세대 중 52세대',
              image: { src: '/apt/hanyang-iclass-yangju/unit-59b.png', alt: '59㎡B 확장 기본형 평면도', width: 1300, height: 919 },
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
              image: { src: '/apt/hanyang-iclass-yangju/unit-75a.png', alt: '75㎡A 확장 기본형 평면도', width: 1300, height: 919 },
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
              image: { src: '/apt/hanyang-iclass-yangju/unit-84a.png', alt: '84㎡A 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '84.6964', common: '27.4228', supply: '112.1192', otherCommon: '64.1773', contract: '176.2965' },
            },
            {
              letter: 'B',
              countText: '총 644세대 중 25세대',
              image: { src: '/apt/hanyang-iclass-yangju/unit-84b.png', alt: '84㎡B 확장 기본형 평면도', width: 1300, height: 919 },
              specs: { exclusive: '84.9963', common: '26.9855', supply: '111.9818', otherCommon: '64.4046', contract: '176.3864' },
            },
          ],
        },
      ],
    },

    // 출처: community.html 커뮤니티 시설 4종(북카페&작은도서관/피트니스센터/어린이집/시니어센터) +
    // 평면도 2장(B1F 북카페동, 피트니스 B2F). 시설 사진이 4장뿐이라 wellness/sportsHealth/
    // cafeLounge/eduKids 네 슬롯에 나눠 재사용(상단 ⚠️ 참고, caption으로 구분)
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      intro: {
        eyebrow: 'COMMUNITY',
        titleLine1: '일상에 여유와 활력을 더해',
        titleLine2: '다채로운 매력의 커뮤니티',
        desc: '최고의 편안함을 만들어 낼 정교하고 섬세한 라이프',
      },
      floorPlanB1: {
        title: '커뮤니티동 B1F',
        dragHint: '좌우로 밀어서 B1F 도면을 확인하세요',
        image: { src: '/apt/hanyang-iclass-yangju/floorplan-b1f.jpg', alt: '커뮤니티동 B1F 평면도 - 북카페&작은도서관' },
      },
      wellness: {
        badge: 'BOOK CAFE & LIBRARY',
        titlePlain: '독서와 담소가 머무는 ',
        titleAccent: '북카페 & 작은도서관',
        desc: '독서와 학습을 즐길 수 있는 쾌적한 문화 공간',
        dark: true,
        hero: {
          image: { src: '/apt/hanyang-iclass-yangju/facility-bookcafe.jpg', alt: '북카페&작은도서관 내부' },
          title: '북카페 & 작은도서관',
          desc: '독서와 학습을 즐길 수 있는 쾌적한 문화 공간',
        },
        halves: [
          { image: { src: '/apt/hanyang-iclass-yangju/facility-fitness.jpg', alt: '피트니스 센터' }, caption: '피트니스 센터' },
          { image: { src: '/apt/hanyang-iclass-yangju/facility-daycare.jpg', alt: '어린이집' }, caption: '어린이집' },
        ],
      },
      sportsHealth: {
        badge: 'FITNESS & SENIOR CARE',
        titlePlain: '건강한 일상을 채우는 ',
        titleAccent: '피트니스 & 시니어센터',
        desc: '최신 운동 기구를 갖춘 피트니스 센터와 어르신들의 여가와 교류를 위한 시니어센터',
        showcases: [
          {
            side: 'left',
            tag: 'FITNESS CENTER',
            title: '피트니스 센터',
            desc: '건강한 일상을 위한 최신 운동 공간',
            main: { image: { src: '/apt/hanyang-iclass-yangju/facility-fitness.jpg', alt: '피트니스 센터 전체 전경' }, caption: '피트니스 센터' },
            sub: { image: { src: '/apt/hanyang-iclass-yangju/facility-fitness.jpg', alt: '피트니스 센터 운동 기구' }, caption: '최신 운동 기구' },
          },
          {
            side: 'right',
            tag: 'SENIOR CENTER',
            title: '시니어 센터',
            desc: '어르신들의 여가와 교류를 위한 편안한 휴식 공간',
            main: { image: { src: '/apt/hanyang-iclass-yangju/facility-senior.jpg', alt: '시니어 센터 외부 전경' }, caption: '시니어 센터' },
            sub: { image: { src: '/apt/hanyang-iclass-yangju/facility-senior.jpg', alt: '시니어 센터 외부' }, caption: '편안한 휴식 공간' },
          },
        ],
        floorPlanB2: {
          title: '피트니스 센터 B2F',
          dragHint: '좌우로 밀어서 B2F 도면을 확인하세요',
          image: { src: '/apt/hanyang-iclass-yangju/floorplan-b2f.jpg', alt: '피트니스 센터 B2F 평면도' },
        },
      },
      cafeLounge: {
        badge: 'READING LOUNGE',
        titlePlain: '이웃과 함께하는 ',
        titleAccent: '북카페 라운지',
        desc: ['독서와 학습을 즐길 수 있는', '쾌적한 문화 공간'],
        halves: [
          { image: { src: '/apt/hanyang-iclass-yangju/facility-bookcafe.jpg', alt: '북카페 열람존' }, caption: '북카페 열람존' },
          { image: { src: '/apt/hanyang-iclass-yangju/facility-bookcafe.jpg', alt: '작은도서관' }, caption: '작은도서관' },
        ],
      },
      eduKids: {
        badge: 'EDU & KIDS ZONE',
        titlePlain: '아이들의 하루가 안심되는 ',
        titleAccent: '에듀 & 키즈 공간',
        desc: '작은도서관과 어린이집, 배우고 뛰노는 두 공간',
        showcases: [
          {
            side: 'left',
            tag: 'LIBRARY',
            title: '작은도서관',
            desc: '조용하고 아늑한 분위기 속에서 독서의 즐거움을 누리는 공간',
            main: { image: { src: '/apt/hanyang-iclass-yangju/facility-bookcafe.jpg', alt: '작은도서관 학습 컷' }, caption: '작은도서관' },
            sub: { image: { src: '/apt/hanyang-iclass-yangju/facility-bookcafe.jpg', alt: '작은도서관 인테리어' }, caption: '북카페 인테리어' },
          },
          {
            side: 'right',
            tag: 'KIDS PLAY',
            title: '어린이집',
            desc: '안심하고 맡길 수 있는 단지 내 보육 공간',
            main: { image: { src: '/apt/hanyang-iclass-yangju/facility-daycare.jpg', alt: '어린이집 외부 전경' }, caption: '어린이집' },
            sub: { image: { src: '/apt/hanyang-iclass-yangju/facility-daycare.jpg', alt: '어린이집 보행로' }, caption: '단지 내 보육 공간' },
          },
        ],
      },
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
      logo: { src: '/apt/hanyang-iclass-yangju/footer-logo.svg', alt: '한양 아이클래스 양주' },
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
      csPhone: '1670-5311',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
