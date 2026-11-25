// 덕은 DMC 에일린의 뜰 한강(3차) — 경기도 고양시 덕양구 덕은동(고양덕은 도시개발사업지구 업무6,7BL) 복합시설 중 오피스텔 2개 동(301·302동), 총 168실(전용 84㎡ 6타입).
// 시공·시행 아이에스동서㈜. 준공 완료(2025년 12월 입주 시작) — 건설사 보유분 로열층 한정 특별 분양, 본사 직접 계약.
// 출처: 2026-11-22 사용자 제공(카카오톡 받은 파일) 「261117_덕은DMC_에일린의뜰한강_6P카탈로그.pdf」(카피·배치·타입·교통·개발·프리미엄7·분양혜택·계약절차)
//   + 「1118_한강dmc_a4전단」「1119_한강dmc_3단리플렛」「1119_한강dmc_지도전단」(위치도·커뮤니티·개발 지도)
//   + 「240611 상담북」(사업개요 수치·CG·한강 사진) + 「도우미교육자료(오피스텔만)」(타입 면적 확인용, 내부용 분석 문구는 사용 안 함).
// 이미지: 위 PDF를 렌더 후 크롭/webp 변환(public/apt/deokeun-dmc-eileens-garden-3/). 로고는 원본 파일이 없어 텍스트 워드마크로 제작. 2026-11-22 사용자 추가 사진 3장(야경 CG·단지배치도 원본·세로 석양 CG)으로 히어로·사업개요·OG·프리미엄06·단지배치도 교체.
//   전단의 견본주택 대표번호 자리는 비어 있어 번호는 사용자 전달값만 사용.
// 대표번호 1551-4727, 상담 접수 알림 010-6781-4727 — 2026-11-22 사용자 전달값.
const config = {
  slug: 'deokeun-dmc-eileens-garden-3',
  // 덕은dmc에일린의뜰3차.addupapt.kr → /apt/deokeun-dmc-eileens-garden-3 (middleware.js)
  subdomain: '덕은dmc에일린의뜰3차',
  projectName: '덕은 DMC 에일린의 뜰 3차',
  shortName: '덕은 DMC 에일린의 뜰 한강',
  telNumber: '1551-4727',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/deokeun-dmc-eileens-garden-3/og.jpg',
  // 상담신청 알림 수신번호
  adminPhones: ['01067814727'],
  sheetId: '',
  sheetTab: '덕은DMC에일린의뜰3차',
  showUtmInSms: true,
  // 상담 접수 알림을 카카오 알림톡으로 발송(실패 시 SMS 자동 폴백)
  kakao: true,

  // 2026-11-23 요청 '하늘색 위주로 고급스럽게' — 스틸 스카이블루 #2b6d9e · 딥네이비 #0e2a47 · 스카이블루 #5aa9dc. 섹션 배치는 pageThemes.css의 'eileen' 프리셋
  colorTheme: {
    navy: '#2b6d9e',
    ink: '#0e2a47',
    cream: '#eaf4fb',
    gold: '#5aa9dc',
    visitBtnBg: '#5aa9dc',
    visitBtnColor: '#ffffff',
  },
  pageTheme: 'eileen',

  webfont: {
    family: "'Pretendard', var(--font-noto-sans-kr, 'Noto Sans KR'), sans-serif",
    cssUrl:
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
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
    // 2026-11-23 요청 '청라아크원푸르지오4 구조를 참고해 고급지게, 하늘색 위주로' — 공식 홈페이지형 일반 스크롤 화면
    // (components/sections/SignatureLuxeOfficial, page.jsx의 sig.luxe 분기). 이 값이 있으면 아래 header/hero/summary 등
    // 기존 signature 필드는 화면에 쓰이지 않고 vipForm.privacyText·footer.companyLines/disclaimers/agencySlogan만 쓰임(되돌릴 땐 luxe만 지우면 됨).
    luxe: {
      logo: {
        light: { src: '/apt/deokeun-dmc-eileens-garden-3/logo-white.png', alt: '덕은 DMC 에일린의 뜰 한강', width: 808, height: 266 },
        dark: { src: '/apt/deokeun-dmc-eileens-garden-3/logo-dark.png', alt: '덕은 DMC 에일린의 뜰 한강', width: 808, height: 266 },
      },
      nav: [
        { id: 'overview', label: '사업개요' },
        { id: 'location', label: '입지환경' },
        { id: 'lifestyle', label: '분양혜택' },
        { id: 'premium', label: '프리미엄' },
        { id: 'complex', label: '단지안내' },
        { id: 'unit', label: '세대안내' },
        { id: 'community', label: '커뮤니티' },
        { id: 'contact', label: '방문예약' },
      ],
      popup: {
        delayMs: 1200,
        // 2026-11-23 '팝업 나타나는 순서가 이상' — 이미지 팝업을 닫으면 그냥 닫히고 폼이 이어서 뜨지 않게(방문예약 신청 버튼을 누를 때만 폼)
        formAfterClose: false,
        // 2026-11-23 '팝업이미지 꼭 핑크색이어야 할까' — 핑크 보정본(popup.webp) 대신 6P 카탈로그 1쪽 표지(하늘색 하늘) 원본 렌더(popup-catalog.webp)
        image: {
          src: '/apt/deokeun-dmc-eileens-garden-3/popup-catalog.webp',
          alt: '지금 바로 입주하는 한강 뷰 아파텔 — 전망도 가치도 눈부신 마지막 한강 프리미엄, 덕은 DMC 에일린의 뜰 한강. 건설사 보유 로열층 한정 특별 분양: 즉시 입주(준공 완료), 실물 세대 확인, 청약통장 無(만 19세 이상), 본사 직접 계약(아이에스동서). 6·7BL 아파텔 총 168실',
          width: 900,
          height: 1271,
        },
      },
      // 카탈로그 메인 카피
      hero: {
        bg: { src: '/apt/deokeun-dmc-eileens-garden-3/hero.webp', alt: '덕은 DMC 에일린의 뜰 한강 한강변 야경 투시도' },
        bgMobile: { src: '/apt/deokeun-dmc-eileens-garden-3/hero-m.webp', alt: '덕은 DMC 에일린의 뜰 한강 한강변 석양 투시도' },
        eyebrow: 'THE LAST HANGANG PREMIUM',
        titleLight: '전망도 가치도 눈부신',
        titleStrong: '마지막 한강 프리미엄',
        name: '덕은 DMC 에일린의 뜰 한강',
        badge: '건설사 보유 로열층 한정 특별 분양',
        ringText: "EILEEN'S GARDEN · HANGANG · VISIT · ",
        circleInfo: ['준공 완료', '즉시 입주'],
      },
      // A4 전단 메인 카피
      concept: {
        image: { src: '/apt/deokeun-dmc-eileens-garden-3/logo-dark.png', alt: "덕은 DMC 에일린의 뜰 한강 EILEEN'S GARDEN", width: 808, height: 266 },
        title: '에일린의 뜰 한강이 드리는 가치',
        acronym: [['T', 'HE LAST'], ['H', 'ANGANG'], ['P', 'REMIUM']],
        desc: '누군가는 한강을 바라보고,\n누군가는 한강을 소유합니다.\n거실 창 가득, 매일 만나는 한강 파노라마',
      },
      // 상담북 사업개요 + 카탈로그 단지 정보
      overview: {
        bg: { src: '/apt/deokeun-dmc-eileens-garden-3/overview-photo.webp' },
        small: '가양대교 북단 한강변,\n준공을 마치고 기다리는',
        lead: '지금 바로 입주하는\n한강 뷰 아파텔',
        word: 'HANGANG',
        catch: '서울과 한강 사이,\n매일 한강을 소유하는 자리',
        stats: [
          { label: '공급규모', value: '168', unit: '실' },
          { label: '전용면적', value: '84', unit: '㎡' },
          { label: '평면타입', value: '6', unit: '타입' },
          { label: '건축규모', pre: '최고', value: '25', unit: '층' },
        ],
        specs: [
          { label: '단지명', value: '덕은 DMC 에일린의 뜰 한강' },
          { label: '사업명', value: '고양 덕은지구 업무시설 6,7BL 복합시설' },
          { label: '대지위치', value: '경기도 고양시 덕양구 덕은동\n(고양덕은 도시개발사업지구 업무6,7BL)' },
          { label: '건축규모', value: '지하 4층 ~ 지상 25층' },
          { label: '공급규모', value: '아파텔 2개 동 총 168실\n(301동 96실 · 302동 72실)' },
          { label: '전용면적', value: '84㎡ 6타입 (84A·84B·84C·84D·84A-1·84B-1)' },
          { label: '주차대수', value: '215대' },
          { label: '시행·시공', value: '아이에스동서㈜ (본사 직접 계약)' },
        ],
        notice: '※ 상기 사업개요의 수치는 소비자의 이해를 돕기 위한 것으로 인·허가 및 현장 사정에 따라 변경될 수 있으니 계약 전 반드시 확인하시기 바랍니다.',
      },
      // A4 전단 위치도 + 카탈로그 교통·프리미엄 문구
      location: {
        band: { src: '/apt/deokeun-dmc-eileens-garden-3/premium-split.webp' },
        bandTop: 'SEOUL · HANGANG · DMC',
        bandWord: 'RIVERSIDE',
        eyebrow: 'HANGANG LOCATION',
        title: '상암 DMC와 맞닿은\n서울 생활권 한강변',
        desc: '가양대교 북단 한강변, 상암 DMC와 맞닿은\n덕은지구에서 누리는 서울 생활권',
        points: [
          { num: '01', category: '교통', title: '서울 업무지구로 출근하는 거리', desc: '차로 상암 5분 · 마곡 10분 · 여의도 15분, 강변북로·자유로 5분. 대장홍대선 덕은역 2031년 개통 예정' },
          { num: '02', category: '생활', title: '주소는 경기도, 지역번호 02', desc: '서울 광역중심 상암·수색과 맞닿은 사실상 서울 생활권' },
          { num: '03', category: '자연', title: '한강공원과 월드컵공원을 곁에', desc: '난지한강공원 약 77만㎡, 월드컵공원 약 350만㎡. 리버파크 브릿지로 한강공원까지 도보로' },
          { num: '04', category: '교육', title: '아이 손잡고 걷는 등굣길', desc: '덕은노을유치원 · 덕은한강초 · 덕은한강중, 유치원부터 중학교까지 동네 안에서' },
        ],
        map: {
          src: '/apt/deokeun-dmc-eileens-garden-3/location-map.webp',
          alt: '덕은 DMC 에일린의 뜰 한강 위치도 — 대장홍대선 덕은역(2031년 개통예정), 디지털미디어시티역, 가양역, 덕은한강육교 버스정류장, 난지한강공원, 월드컵공원. 자가 이용시 상암 5분, 마곡 10분, 여의도 15분',
          width: 1600,
          height: 980,
        },
        note: '※ 지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 개발 및 교통계획은 관계기관 사정에 따라 변경·취소될 수 있습니다. 학교 배정은 해당 교육청의 결정사항입니다.',
      },
      // 카탈로그 06쪽 분양 혜택
      lifestyle: {
        bg: { src: '/apt/deokeun-dmc-eileens-garden-3/intro-1.webp' },
        kicker: '건설사 보유 로열층 한정 특별 분양',
        title: '기다림 없이,\n오늘 보고 바로 삽니다',
        visual: { src: '/apt/deokeun-dmc-eileens-garden-3/intro-3.webp', alt: '덕은 DMC 에일린의 뜰 한강 주간 투시도', width: 900, height: 560 },
        eyebrow: 'SPECIAL OFFER',
        items: [
          { num: '01', tag: 'MOVE-IN', title: '즉시 입주', desc: '준공 완료 단지, 원하는 날 바로 입주' },
          { num: '02', tag: 'REAL VIEW', title: '실물 세대 관람', desc: '한강 조망·마감 확인 후 마음에 드는 호실 지정' },
          { num: '03', tag: 'NO SUBSCRIPTION', title: '청약 조건 無', desc: '만 19세 이상 누구나, 청약통장·거주지 무관' },
          { num: '04', tag: 'DIRECT CONTRACT', title: '본사 직접 계약', desc: '아이에스동서㈜ 직영, 위탁수수료 제로' },
        ],
        note: '사전 호실 지정금 입금 순으로 마감됩니다. 실물 호실을 직접 보고 계약하시도록 관람 예약을 권해 드려요.',
      },
      // 카탈로그 'PREMIUM 7 살수록 더 빛나는 일곱 가지 가치'를 6장으로
      premium: {
        headBg: { src: '/apt/deokeun-dmc-eileens-garden-3/premium-06.webp' },
        headTitle: "EILEEN'S GARDEN\nPREMIUM",
        headSub: '살수록 더 빛나는 여섯 가지 가치',
        introTitle: '한강을 품은 일상,\n그 이상의 프리미엄',
        introLines: ['6가지 84타입, 직접 보시고 마음에 드는 한강뷰를 고르세요.'],
        cards: [
          { num: '01', image: '/apt/deokeun-dmc-eileens-garden-3/premium-01.webp', alt: '덕은 DMC 에일린의 뜰 한강 앞 한강 전경', en: 'HANGANG VIEW', title: '한강 프리미엄', desc: '가양대교 북단 한강변, 타입별 한강 조망. 경기 한강벨트로 함께 꼽히는 덕은' },
          { num: '02', image: '/apt/deokeun-dmc-eileens-garden-3/premium-02.webp', alt: '덕은지구 및 상암·여의도 방면 조감도', en: 'BUSINESS ACCESS', title: '서울 업무지구로 출근하는 거리', desc: '차로 상암 5분 · 마곡 10분 · 여의도 15분, 가양대교 · 강변북로로 바로 연결' },
          { num: '03', image: '/apt/deokeun-dmc-eileens-garden-3/premium-03.webp', alt: '덕은DMC·상암DMC 개발 지도', en: 'FUTURE VALUE', title: '서울 광역중심 상암·수색 옆', desc: '2040 서울도시기본계획 7광역중심 중 상암·수색과 맞닿은 자리, 대장홍대선 덕은역(2031 개통 예정)' },
          { num: '04', image: '/apt/deokeun-dmc-eileens-garden-3/premium-04.webp', alt: '난지한강공원 및 한강 다목적운동장 전경', en: 'GREEN LIFE', title: '한강공원과 월드컵공원을 곁에', desc: '난지한강공원 약 77만㎡, 월드컵공원 약 350만㎡' },
          { num: '05', image: '/apt/deokeun-dmc-eileens-garden-3/premium-05.webp', alt: '덕은 DMC 에일린의 뜰 한강 야간 투시도', en: 'SEOUL LIFE', title: '경기도 주소, 지역번호 02', desc: '주소는 고양시, 전화는 서울 번호. 덕은노을유치원·덕은한강초·덕은한강중 도보 등굣길' },
          { num: '06', image: '/apt/deokeun-dmc-eileens-garden-3/premium-06.webp', alt: '덕은 DMC 에일린의 뜰 한강 야경 투시도', en: 'READY TO LIVE', title: '준공·입주 완료 & 본사 직계약', desc: '2025년 12월 입주 시작, 실물 확인 후 계약. 아이에스동서 본사 직접 계약' },
        ],
        note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
      },
      complex: {
        eyebrow: 'COMPLEX',
        title: '단지안내',
        desc: '6·7BL 아파텔 301동 · 302동, 총 168실',
        tabs: [
          { label: '단지배치도', image: { src: '/apt/deokeun-dmc-eileens-garden-3/complex-siteplan.webp', width: 2000, height: 1414, alt: '덕은 DMC 에일린의 뜰 한강 단지배치도 — 6·7BL 아파텔 301동·302동(총 168실), 지식산업센터 A·B동, 근린생활시설, 옥상정원·티하우스·바닥분수·잔디마당' } },
          {
            label: '동별 평면도',
            images: [
              { label: '301동', src: '/apt/deokeun-dmc-eileens-garden-3/complex-dong-301.webp', width: 1600, height: 835, alt: '301동 기준층 평면도 — 1호 84D, 2호 84B-1, 3호 84A-1, 4호 84B-1, 총 96실' },
              { label: '302동', src: '/apt/deokeun-dmc-eileens-garden-3/complex-dong-302.webp', width: 1600, height: 835, alt: '302동 기준층 평면도 — 1호 84B, 2호 84A, 3호 84C, 총 72실' },
            ],
          },
          { label: '조감도', image: { src: '/apt/deokeun-dmc-eileens-garden-3/complex-bird.webp', width: 1800, height: 797, alt: '덕은지구 조감도 — 덕은 DMC 에일린의 뜰 한강, 덕은역(예정), 가양대교, 월드컵경기장, 하늘공원, 노을공원, 난지한강공원, 여의도 업무지구' } },
          { label: '개발 지도', image: { src: '/apt/deokeun-dmc-eileens-garden-3/complex-dmcmap.webp', width: 2000, height: 1369, alt: '서울 도심이 더 가까운 덕은DMC — 덕은역(대장홍대선 2031년 하반기 개통 예정), 상암DMC, 국방대 이전부지, 리버파크브릿지, 주변 단지 및 신규 개발(상암 DMC 롯데몰, 수색비행장 비행안전구역 해제, 서울링)' } },
        ],
        note: '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 동·호 배치는 입주자모집공고(2024950033) 기준입니다.',
      },
      unit: {
        eyebrow: 'UNIT PLAN',
        title: '세대안내',
        desc: '같은 84㎡, 여섯 가지 구성\n301동 96실 · 302동 72실, 총 168실',
        tabs: [
          luxeUnit('84A', '84a', 906, '302동 24실 · 한강 조망', '전용 84.9426㎡ · 공급 113.5462㎡ · 계약 185.5073㎡'),
          luxeUnit('84B', '84b', 906, '302동 24실 · 한강 조망', '전용 84.9332㎡ · 공급 112.7427㎡ · 계약 184.6958㎡'),
          luxeUnit('84C', '84c', 908, '302동 24실 · 한강 조망', '전용 84.9322㎡ · 공급 112.9684㎡ · 계약 184.9206㎡'),
          luxeUnit('84D', '84d', 908, '301동 24실 · 한강 조망', '전용 84.9880㎡ · 공급 113.0514㎡ · 계약 185.0510㎡'),
          luxeUnit('84A-1', '84a-1', 910, '301동 24실 · 한강 조망', '전용 84.9426㎡ · 공급 113.5462㎡ · 계약 185.5073㎡'),
          luxeUnit('84B-1', '84b-1', 912, '301동 48실 · 일부 세대 한강 조망', '전용 84.9332㎡ · 공급 112.7427㎡ · 계약 184.6958㎡'),
        ],
        note: '※ 평면 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 실물 세대에서 확인하시기 바랍니다.',
      },
      // 지도전단 '일상을 채우는 6가지 커뮤니티' — 배치도는 같은 전단에서 평면만 크롭
      community: {
        eyebrow: 'COMMUNITY',
        title: '일상을 채우는\n6가지 커뮤니티',
        desc: '피트니스부터 회의실까지,\n단지 안에서 누리는 입주민 전용 라이프 공간',
        items: [
          { name: '피트니스', desc: '다양한 운동기구를 갖추어 누구나 체력을 키울 수 있는 공간' },
          { name: 'G.X룸', desc: '요가, 필라테스 등 그룹 운동으로 건강을 즐기는 힐링 공간' },
          { name: '휴게실', desc: '가벼운 담소와 여유로운 휴식이 함께하는 공간' },
          { name: '취미실', desc: '바쁜 일상에서 잠시 벗어나 활력을 더해주는 공간' },
          { name: '회의실', desc: '입주민회의, 소모임 등 함께 모여 소통하는 공간' },
          { name: '코인세탁실', desc: '이불, 겨울옷, 운동화 등 특별한 세탁이 가능한 런드리 공간' },
        ],
        plan: {
          src: '/apt/deokeun-dmc-eileens-garden-3/community-plan.webp',
          alt: '에일린의 뜰 한강 커뮤니티 배치도 — 피트니스, G.X룸, 휴게실, 취미실, 회의실, 코인세탁실, 탈의실',
          width: 820,
          height: 935,
        },
        note: '※ 본 CG는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르며, 인허가 과정 시 변경될 수 있습니다. 커뮤니티 시설은 입주자 대표회의 구성 후 입주민이 자체적으로 유지관리 및 운영합니다.',
      },
      contact: {
        bg: { src: '/apt/deokeun-dmc-eileens-garden-3/premium-05.webp' },
        sub: '모델하우스 관람은 방문예약제로 운영됩니다.\n간단한 정보를 남겨주시면 가장 빠르게 안내해 드립니다.',
        places: [
          { label: '현장', addr: '경기도 고양시 덕양구 으뜸로 50' },
          { label: '견본주택', addr: '경기도 고양시 덕양구 덕은동 700' },
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

    header: {
      logo: {
        src: '/apt/deokeun-dmc-eileens-garden-3/logo-white.png',
        alt: '덕은 DMC 에일린의 뜰 한강',
        width: 808,
        height: 266,
      },
      logoSize: { base: 104, lg: 124, xl: 132 },
      gnb: ['사업안내', '위치안내', '프리미엄', '단지안내', '세대안내', '커뮤니티', '방문예약상담'],
      quickCtaLabel: '방문예약상담',
      phone: '1551-4727',
      mobileQuick: { phoneDisplay: '1551.4727' },
      transparentDark: false,
      logoDark: {
        src: '/apt/deokeun-dmc-eileens-garden-3/logo-dark.png',
        alt: '덕은 DMC 에일린의 뜰 한강',
        width: 808,
        height: 266,
      },
    },

    // 진입 팝업 — 카탈로그 표지(전망도 가치도 눈부신 마지막 한강 프리미엄) 이미지 → 닫으면 방문예약 폼 팝업
    popup: {
      enabled: true,
      order: 'imageFirst',
      openDelayMs: 1200,
      fitViewport: true,
      closeIcon: true,
      images: [
        {
          src: '/apt/deokeun-dmc-eileens-garden-3/popup.webp',
          alt: '지금 바로 입주하는 한강 뷰 아파텔 — 전망도 가치도 눈부신 마지막 한강 프리미엄, 덕은 DMC 에일린의 뜰 한강. 건설사 보유 로열층 한정 특별 분양: 즉시 입주(준공 완료), 실물 세대 확인, 청약통장 無(만 19세 이상), 본사 직접 계약(아이에스동서). 6·7BL 아파텔 총 168실',
          width: 900,
          height: 1272,
        },
      ],
      visitForm: {
        enabled: true,
        accentColor: '#2b6d9e',
        title: '방문예약상담',
        desc: '모델하우스 관람은 예약제로 운영됩니다 (상담 10:00~18:00, 주말 동일)',
        checks: ['모델하우스 방문예약', '원하는시간 전화예약'],
        submitLabel: '방문예약상담 신청',
      },
    },

    // PC(1024px 이상) 전용 우측 고정 사이드 퀵메뉴
    quickMenu: {
      brand: "EILEEN'S GARDEN",
      phoneLabel: '대표문의',
      phone: '1551-4727',
      favoriteLabel: '방문예약',
      menuLabel: 'MENU',
      menuBg: '#0e2a47',
      ctaTargetId: 'vip-reservation',
      deskText: '덕은 DMC 에일린의 뜰 한강\n상담을 도와드립니다.',
      address: '경기도 고양시 덕양구 으뜸로 50',
      tagline: '한강 뷰 아파텔 · 즉시 입주',
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업안내', targetId: 'overview' },
        { num: '03', label: 'LOCATION', sub: '위치안내', targetId: 'location' },
        { num: '04', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '05', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '06', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '07', label: 'COMMUNITY', sub: '커뮤니티', targetId: 'community' },
        { num: '08', label: 'CONTACT', sub: '방문예약상담', targetId: 'vip-reservation' },
      ],
    },

    // 인트로(2026-11-22 요청 '3개로 된 걸로') — 3분할 이미지 → 브랜드 임팩트(SignatureArkoneIntro, 엘리프 검단 포레듀와 같은 형식).
    //   장면 이미지: 1 야경 CG(사용자 추가 1.jpg) · 2 상담북 한강 사진 · 3 석양 CG 확대(2026-11-25 사용자 추가 세로 원본 1.jpg → 태양·건물 중심 크롭 1350×840), 1·2는 900×560 크롭
    arkoneIntro: {
      // 2026-11-23 요청 — 3분할 이미지 단계 3초 연장(4s→7s), 뒤 로고 단계 2초(1.6s→2s)
      timing: { sceneSec: 7, brandSec: 2 },
      ariaLabel: '덕은 DMC 에일린의 뜰 한강을 소개하는 인트로',
      scenes: [
        { img: '/apt/deokeun-dmc-eileens-garden-3/intro-1.webp', label: '01 · HANGANG VIEW', name: '한강 뷰 아파텔 총 168실' },
        { img: '/apt/deokeun-dmc-eileens-garden-3/intro-2.webp', label: '02 · HANGANG PARK', name: '한강공원을 곁에 품은 자리' },
        { img: '/apt/deokeun-dmc-eileens-garden-3/intro-3-sunset.webp', label: '03 · READY TO LIVE', name: '준공 완료 · 즉시 입주' },
      ],
      copySmall: 'THE LAST HANGANG PREMIUM',
      copyLine1: 'Own the',
      copyLine2: 'Hangang.',
      brandName: '덕은 DMC 에일린의 뜰 한강',
      tagline: "EILEEN'S GARDEN · HANGANG",
      theme: {
        base: '#0e2a47',
        stageOne: 'radial-gradient(circle at 50% 35%, #357fb3 0, #0e2a47 48%, #081d33 100%)',
        stageTwo: 'radial-gradient(circle at center, #2b6d9e, #0e2a47 42%, #081d33 100%)',
        ring: 'rgba(90, 169, 220, 0.45)',
        accent: '#a9d8f5',
        sub: '#dbe9f4',
      },
    },

    // 히어로 — 2026-11-22 사용자 추가 사진: PC는 한강변 야경 CG(1.jpg 10417×8333 크롭), 모바일은 세로 석양 CG(3.jpg 5000×10000, 하늘 영역에 문구). 문구는 카탈로그 메인 카피
    hero: {
      hideText: true,
      mobileScrollMouse: true,
      mobileBgBottomInset: 36,
      overlayGradient: {
        mobile: 'linear-gradient(180deg, rgba(14, 42, 71, 0.62) 0%, rgba(14, 42, 71, 0.24) 36%, rgba(14, 42, 71, 0) 54%)',
        desktop: 'linear-gradient(180deg, rgba(14, 42, 71, 0.62) 0%, rgba(14, 42, 71, 0.26) 32%, rgba(14, 42, 71, 0) 55%)',
      },
      bgImage: {
        src: '/apt/deokeun-dmc-eileens-garden-3/hero.webp',
        alt: '덕은 DMC 에일린의 뜰 한강 한강변 야경 투시도',
      },
      bgImageMobile: {
        src: '/apt/deokeun-dmc-eileens-garden-3/hero-m.webp',
        alt: '덕은 DMC 에일린의 뜰 한강 한강변 석양 투시도',
      },
      estCopy: {
        color: '#ffffff',
        shadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
        brand: '지금 바로 입주하는 한강 뷰 아파텔',
        // 카탈로그 '전망도 가치도 눈부신 마지막 한강 프리미엄' — 한 줄로는 모바일 폭을 넘쳐 큰 글씨는 '마지막 한강 프리미엄'만
        lines: [{ light: '마지막 ', strong: '한강 프리미엄', dots: 0 }],
        name: '덕은 DMC 에일린의 뜰 한강',
        badge: '건설사 보유 로열층 한정 특별 분양',
        badgeBox: true,
        ctaBadge: {
          ringText: "EILEEN'S GARDEN · VISIT RESERVATION · ",
          label: ['방문예약', '상담'],
        },
      },
      mobileBar: {
        announcements: [
          { badge: '안내', textStrong: '덕은 DMC 에일린의 뜰 한강', textLight: ' 준공 완료 · 즉시 입주' },
          { badge: '혜택', textStrong: '청약통장 無 · 만 19세 이상', textLight: ' 누구나 계약 가능' },
          { badge: '특장점', textStrong: '실물 세대 확인 후', textLight: ' · 아이에스동서 본사 직접 계약' },
        ],
        announceBg: '#0e2a47',
        bubbleText: '방문예약상담',
        dotColor: '#5aa9dc',
        callLabel: '전화상담',
        visitLabel: '방문예약상담',
      },
    },

    // 분양 혜택 4가지 — 카탈로그 06쪽 '기다림 없이, 오늘 보고 바로 삽니다'
    benefits: {
      id: 'benefits',
      afterHero: true,
      hoverTextWhite: true,
      eyebrow: 'SPECIAL OFFER',
      titleSmall: '건설사 보유 로열층 한정 특별 분양',
      // 카탈로그 '기다림 없이, 오늘 보고 바로 삽니다' — 큰 글씨 줄이 단어 중간에서 끊기지 않게 둘로 나눔
      titleBold: '기다림 없이, 오늘 보고',
      titleScript: '바로 삽니다',
      desc: '사전 호실 지정금 입금 순으로 마감됩니다. 실물 호실을 직접 보고 계약하시도록 관람 예약을 권해 드려요.',
      bgImage: { src: '/apt/deokeun-dmc-eileens-garden-3/benefits-bg.webp', alt: '덕은 DMC 에일린의 뜰 한강 한강변 투시도' },
      items: [
        { num: '01', tag: 'MOVE-IN', title: ['즉시', '입주'], desc: '준공 완료 단지, 원하는 날 바로 입주' },
        { num: '02', tag: 'REAL VIEW', title: ['실물 세대', '관람'], desc: '한강 조망·마감 확인 후 마음에 드는 호실 지정' },
        { num: '03', tag: 'NO SUBSCRIPTION', title: ['청약 조건', '無'], desc: '만 19세 이상 누구나, 청약통장·거주지 무관' },
        { num: '04', tag: 'DIRECT CONTRACT', title: ['본사', '직접 계약'], desc: '아이에스동서㈜ 직영, 위탁수수료 제로' },
      ],
    },

    // 사업개요 — 상담북 사업개요 + 카탈로그 단지 정보
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'overview',
      photo: {
        src: '/apt/deokeun-dmc-eileens-garden-3/overview-photo.webp',
        alt: '덕은 DMC 에일린의 뜰 한강 한강변 투시도',
      },
      notice: '※ 상기 사업개요의 수치는 소비자의 이해를 돕기 위한 것으로 인·허가 및 현장 사정에 따라 변경될 수 있으니 계약 전 반드시 확인하시기 바랍니다.',
      specItems: [
        { label: '단지명', value: '덕은 DMC 에일린의 뜰 한강' },
        { label: '사업명', value: '고양 덕은지구 업무시설 6,7BL 복합시설' },
        { label: '대지위치', value: ['경기도 고양시 덕양구 덕은동', '(고양덕은 도시개발사업지구 업무6,7BL)'] },
        { label: '건축규모', value: '지하 4층 ~ 지상 25층' },
        { label: '공급규모', value: ['아파텔 2개 동 총 168실', '(301동 96실 · 302동 72실)', '지식산업센터 A·B동, 근린생활시설'] },
        { label: '전용면적', value: ['84㎡ 6타입', '(84A·84B·84C·84D·84A-1·84B-1)'] },
        { label: '연면적', value: '아파텔 31,081.8083㎡' },
        { label: '주차대수', value: '215대' },
        { label: '입주시점', value: '준공 완료 · 즉시 입주' },
        { label: '시행/시공', value: '아이에스동서㈜ (본사 직접 계약)' },
      ],
    },

    // 위치안내 — A4 전단 위치도 + 카탈로그 교통·프리미엄 문구
    location: {
      id: 'location',
      navLabel: '위치안내',
      variant: 'infrastructure',
      infrastructure: {
        eyebrow: 'HANGANG LOCATION',
        titlePlain: '서울과 한강 사이,',
        titleAccent: '매일 한강을 소유하는 자리',
        desc: '가양대교 북단 한강변, 상암 DMC와 맞닿은\n덕은지구에서 누리는 서울 생활권',
        mapImage: {
          src: '/apt/deokeun-dmc-eileens-garden-3/location-map.webp',
          alt: '덕은 DMC 에일린의 뜰 한강 위치도 — 대장홍대선 덕은역(2031년 개통예정), 디지털미디어시티역, 가양역, 덕은한강육교 버스정류장, 난지한강공원, 월드컵공원. 자가 이용시 상암 5분, 마곡 10분, 여의도 15분',
        },
        mapCaption: '지역도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있으며, 노선 및 시설의 예정·계획 표기는 관계기관 계획에 따라 변경될 수 있습니다.',
        items: [
          { num: '01', category: '교통', title: '서울 업무지구로 출근하는 거리', desc: '차로 상암 5분 · 마곡 10분 · 여의도 15분, 강변북로·자유로·서울문산고속도로 5분. 대장홍대선 덕은역 2031년 개통 예정' },
          { num: '02', category: '생활', title: '주소는 경기도, 지역번호 02', desc: '주소는 고양시, 전화는 서울과 동일한 02 번호. 서울 광역중심 상암·수색과 맞닿은 사실상 서울 생활권' },
          { num: '03', category: '자연', title: '한강공원과 월드컵공원을 곁에', desc: '약 77만㎡ 규모 난지한강공원, 약 350만㎡ 규모 월드컵공원. 리버파크 브릿지로 한강공원까지 도보로' },
          { num: '04', category: '교육', title: '아이 손잡고 걷는 등굣길', desc: '덕은노을유치원 · 덕은한강초 · 덕은한강중, 유치원부터 중학교까지 동네 안에서' },
        ],
        sourceNote: '※ 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 학교 배정 관련 사항은 해당 교육청의 결정사항으로 당사와 무관합니다.',
      },
    },

    // 프리미엄 인트로 — 왼쪽 한강 사진 + 오른쪽 카피(A4 전단 메인 카피)
    premiumIntro: {
      split: true,
      eyebrow: "EILEEN'S GARDEN",
      titleLine1: '누군가는 한강을 바라보고, 누군가는 한강을 소유합니다',
      paragraphs: [
        ['거실 창 가득,', '매일 만나는 한강 파노라마'],
        ['6가지 84타입, 직접 보시고', '마음에 드는 한강뷰를 고르세요'],
      ],
      bgImage: {
        src: '/apt/deokeun-dmc-eileens-garden-3/premium-split.webp',
        alt: '덕은 DMC 에일린의 뜰 한강 앞 한강 전경',
      },
    },

    // 프리미엄 — 카탈로그 'PREMIUM 7 살수록 더 빛나는 일곱 가지 가치'를 6장으로(cardStyle 'zigzag')
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      cardStyle: 'zigzag',
      eyebrow: "EILEEN'S GARDEN",
      titlePlain: '에일린의 뜰 한강 ',
      titleAccent: 'PREMIUM',
      titleNumber: '6',
      colors: {
        bg: 'linear-gradient(135deg, #357fb3 0%, #2b6d9e 55%, #1f5682 100%)',
        head: '#d6edfb',
        accentOdd: '#d6edfb',
        accentEven: '#a9d8f5',
        line: 'rgba(255, 255, 255, 0.2)',
      },
      cards: [
        premium('01', '덕은 DMC 에일린의 뜰 한강 앞 한강 전경', 'Hangang View ·\n한강 프리미엄', ['가양대교 북단 한강변, 타입별 한강 조망,', '경기 한강벨트로 함께 꼽히는 덕은']),
        premium('02', '덕은지구 및 상암·여의도 방면 조감도', 'Business Access ·\n서울 업무지구로 출근하는 거리', ['차로 상암 5분 · 마곡 10분 · 여의도 15분,', '가양대교 · 강변북로로 바로 연결']),
        premium('03', '덕은DMC·상암DMC 개발 지도', 'Future Value ·\n서울 광역중심 상암·수색 옆', ['2040 서울도시기본계획 7광역중심 중', '상암·수색과 맞닿은 자리, 대장홍대선 덕은역(2031 개통 예정)']),
        premium('04', '난지한강공원 및 한강 다목적운동장 전경', 'Green Life ·\n한강공원과 월드컵공원을 곁에', ['난지한강공원 약 77만㎡,', '월드컵공원 약 350만㎡']),
        premium('05', '덕은 DMC 에일린의 뜰 한강 야간 투시도', 'Seoul Life ·\n경기도 주소, 지역번호 02', ['주소는 고양시, 전화는 서울 번호,', '덕은노을유치원·덕은한강초·덕은한강중 도보 등굣길']),
        premium('06', '덕은 DMC 에일린의 뜰 한강 야경 투시도', 'Ready to Live ·\n준공·입주 완료 & 본사 직계약', ['2025년 12월 입주 시작, 실물 확인 후 계약,', '아이에스동서 본사 직접 계약']),
      ],
    },

    // 단지안내 — 리플렛 단지배치도, 카탈로그 동별 기준층 평면도, 지도전단 커뮤니티·개발 지도, 상담북 조감도
    complex: {
      id: 'complex',
      variant: 'blockTabs',
      tabStyle: 'circle',
      compactTop: true,
      eyebrow: 'COMPLEX',
      titlePlain: '단지',
      titleAccent: '안내',
      categories: [
        complexTab('단지배치도', 'siteplan', [
          ['complex-siteplan', 2000, 1414, '덕은 DMC 에일린의 뜰 한강 단지배치도 — 6·7BL 아파텔 301동·302동(총 168실), 지식산업센터 A·B동, 근린생활시설, 옥상정원·티하우스·바닥분수·잔디마당', '단지배치도'],
        ]),
        complexTab('동별 평면도', 'dong', [
          ['complex-dong-301', 1600, 835, '301동 기준층 평면도 — 1호 84D, 2호 84B-1, 3호 84A-1, 4호 84B-1, 총 96실', '301동'],
          ['complex-dong-302', 1600, 835, '302동 기준층 평면도 — 1호 84B, 2호 84A, 3호 84C, 총 72실', '302동'],
        ]),
        complexTab('조감도', 'bird', [
          ['complex-bird', 1800, 797, '덕은지구 조감도 — 덕은 DMC 에일린의 뜰 한강, 덕은역(예정), 가양대교, 월드컵경기장, 하늘공원, 노을공원, 난지한강공원, 여의도 업무지구', '조감도'],
        ]),
        complexTab('개발 지도', 'dmcmap', [
          ['complex-dmcmap', 2000, 1369, '서울 도심이 더 가까운 덕은DMC — 덕은역(대장홍대선 2031년 하반기 개통 예정), 상암DMC, 국방대 이전부지, 리버파크브릿지, 주변 단지 및 신규 개발(상암 DMC 롯데몰, 수색비행장 비행안전구역 해제, 서울링)', '개발 지도'],
        ]),
      ],
      disclaimer:
        '※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 동·호 배치는 입주자모집공고(2024950033) 기준입니다.',
    },

    // 세대안내 — 카탈로그 타입 안내(같은 84㎡, 여섯 가지 구성)
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      variant: 'imageTabs',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitle: '같은 84㎡, 여섯 가지 구성\n301동 96실 · 302동 72실, 총 168실',
      tabColumns: 6,
      tabColumnsMobile: 3,
      zoomLightbox: true,
      tabs: [
        unit('84A', '84a', 906, '84A 타입(302동 24실, 한강 조망) — 전용 84.9426㎡, 공급 113.5462㎡, 계약 185.5073㎡'),
        unit('84B', '84b', 906, '84B 타입(302동 24실, 한강 조망) — 전용 84.9332㎡, 공급 112.7427㎡, 계약 184.6958㎡'),
        unit('84C', '84c', 908, '84C 타입(302동 24실, 한강 조망) — 전용 84.9322㎡, 공급 112.9684㎡, 계약 184.9206㎡'),
        unit('84D', '84d', 908, '84D 타입(301동 24실, 한강 조망) — 전용 84.9880㎡, 공급 113.0514㎡, 계약 185.0510㎡'),
        unit('84A-1', '84a-1', 910, '84A-1 타입(301동 24실, 한강 조망) — 전용 84.9426㎡, 공급 113.5462㎡, 계약 185.5073㎡'),
        unit('84B-1', '84b-1', 912, '84B-1 타입(301동 48실, 일부 세대 한강 조망) — 전용 84.9332㎡, 공급 112.7427㎡, 계약 184.6958㎡'),
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VISIT RESERVATION',
      titleLine1: '덕은 DMC 에일린의 뜰 한강',
      titleLine2: '방문예약상담',
      desc: '모델하우스 관람은 방문예약제로 운영됩니다.\n간단한 정보를 남겨주시면 방문 예약과 상담 일정을 가장 빠르게 안내해 드립니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 현장 방문예약 접수 및 상담 일정 조율 - 분양 일정, 이벤트 등 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 현장 방문 예약 및 원활한 상담, 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: {
        src: '/apt/deokeun-dmc-eileens-garden-3/logo-white.png',
        alt: '덕은 DMC 에일린의 뜰 한강',
        width: 808,
        height: 266,
      },
      logoAlign: 'center',
      logoWidth: 170,
      highlightText: '전망도 가치도 눈부신\n마지막 한강 프리미엄',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '현장', value: '경기도 고양시 덕양구 으뜸로 50' },
        { label: '견본주택', value: '경기도 고양시 덕양구 덕은동 700' },
        { label: '시행·시공', value: '아이에스동서 주식회사' },
        { label: '광고 운영·관리 대행사', value: '더블루파트너스', dividerBefore: true },
        { label: '전화번호', value: '1666-1755' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 CG 및 사진, 이미지, 일러스트 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다소 상이할 수 있습니다.',
        '※ 각종 개발계획, 교통시설 및 주변현황, 예정사항은 정부정책 및 관계기관의 사정, 사업주체의 진행 상황에 따라 변경 또는 취소될 수 있습니다.',
        '※ 한강 조망은 동·호수 및 층에 따라 다르며, 분양조건은 현장 사정에 따라 변경될 수 있으니 계약 전 반드시 현장에서 확인하시기 바랍니다.',
        '※ 제작, 편집 과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 현장 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1551-4727',
      csHours: 'AM 10:00 ~ PM 18:00',
    },
  },
}

// luxe 세대안내 탭 한 칸 — 카탈로그 타입 안내 아이소메트릭 평면(1000폭)
function luxeUnit(label, file, height, where, area) {
  return {
    label,
    info: `${where}\n${area}`,
    image: { src: `/apt/deokeun-dmc-eileens-garden-3/unit-${file}.webp`, alt: `${label} 타입(${where}) — ${area}`, width: 1000, height },
  }
}

// 프리미엄 카드 한 장 — PC 1280×720 / 모바일 860×600(자료 CG·사진 크롭)
function premium(num, imgAlt, title, desc) {
  return {
    num,
    image: { src: `/apt/deokeun-dmc-eileens-garden-3/premium-${num}.webp`, alt: imgAlt, width: 640, height: 360 },
    imageMobile: { src: `/apt/deokeun-dmc-eileens-garden-3/premium-${num}-m.webp`, alt: imgAlt, width: 430, height: 300 },
    title,
    desc,
  }
}

// 단지안내 탭 한 칸(이미지 여러 장이면 블록 버튼 생김) — [파일명, 폭, 높이, alt, 블록 버튼 이름]
function complexTab(label, thumb, images) {
  return {
    label,
    thumb: `/apt/deokeun-dmc-eileens-garden-3/complex-thumb-${thumb}.webp`,
    title: label,
    blocks: images.map(([file, width, height, alt, blockLabel]) => ({
      label: blockLabel ?? "EILEEN'S GARDEN",
      image: { src: `/apt/deokeun-dmc-eileens-garden-3/${file}.webp`, alt, width, height },
    })),
  }
}

// 세대안내 타입 한 칸 — 카탈로그 타입 안내 아이소메트릭 평면(1000폭)
function unit(label, file, height, alt) {
  return { label, image: { src: `/apt/deokeun-dmc-eileens-garden-3/unit-${file}.webp`, alt, width: 1000, height } }
}

export default config
