// TODO: wonjongyeok-world-meridian-fore 틀을 복사한 스켈레톤입니다.
// 실제 자료(Figma/브로슈어/주소·전화번호·세대수·평면·이미지 등)를 받으면
// 아래 "TODO" 표시된 값과 이미지 경로를 전부 교체해야 합니다.
//
// signature 필드 ↔ 컴포넌트:
//   header → SignatureHeader, hero → SignatureHeroMinimal(이 현장 전용), summary → SignatureSummary,
//   location → SignatureLocation, premiumIntro → SignaturePremiumIntro, premiumValue → SignaturePremiumValue,
//   landscape → SignatureLandscape, complex → SignatureComplex, unitPlan → SignatureUnitPlan,
//   club → SignatureClub, vipForm → SignatureVipForm, footer → SignatureFooter
const config = {
  slug: 'the-sharp-songdo-grand-terre',
  subdomain: '더샵송도그란테르',
  projectName: '더샵 송도 그란테르',
  shortName: '더샵 송도 그란테르',
  telNumber: '1800-2261',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt2/apt/the-sharp-songdo-grand-terre/og.webp',
  adminPhones: ['01048086474', '01071901052', '01090447402'],
  sheetId: '',
  sheetTab: '더샵송도그란테르',
  showUtmInSms: true,
  kakao: true,

  // 네이비·블랙·화이트·하늘색 4색으로만 절제해서 사용 (요청 반영)
  colorTheme: {
    navy: '#001141',
    ink: '#000000',
    cream: '#ffffff',
    gold: '#c7d8e8', // 하늘색 — 기존 gold 역할(포인트 컬러) 자리에 적용
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
      // 헤더 배경이 짙은 네이비(var(--navy))라 흰색 반전 로고(logo-white.webp) 사용
      logo: { src: '/apt/the-sharp-songdo-grand-terre/logo-white.webp', alt: '더샵 송도 그란테르', width: 260, height: 33 },
      logoSize: { base: 100, lg: 150, xl: 170 },
      gnb: ['사업안내', '입지환경', '프리미엄', '단지안내', '세대안내', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1800-2261',
    },

    // 원종역과 동일한 구조 — popup.webp 파일만 올리면 바로 그 이미지로 나옴 (진입 약 3초 후 노출)
    // interest(관심고객등록 팝업)가 먼저 뜨고, 닫히면 이 이미지 팝업이 이어서 뜬다 (SignaturePopupSequence 참고)
    popup: {
      enabled: true,
      image: { src: '/apt/the-sharp-songdo-grand-terre/popup.webp', alt: '더샵 송도 그란테르 계약 이벤트 안내', width: 688, height: 911 },
      closeLabel: '팝업닫기',
      interest: {
        enabled: true,
        eyebrow: 'INTEREST',
        title: '관심고객등록',
        desc: '간단한 정보를 입력해 주시면\n분양 정보를 가장 먼저 안내해드립니다.',
        submitLabel: '관심고객 등록',
        giftText: '방문/계약고객\n신세계백화점 상품권 30만원 증정\n(선착순10명)',
      },
    },

    quickMenu: {
      brand: 'SONGDO GRAND TERRE', // TODO
      phoneLabel: '분양문의',
      phone: '1800-2261',
      favoriteLabel: '관심고객',
      menuLabel: 'MENU',
      ctaTargetId: 'vip-reservation',
      deskText: '더샵 송도 그란테르\n분양 상담을 도와드립니다.',
      address: 'TODO: 현장 및 견본주택 주소',
      tagline: 'THE ENDLESS SYMBOL', // 브랜드 슬로건 (endless-symbol-*.webp 참고)
      items: [
        { num: '01', label: 'MAIN', sub: '메인페이지', targetId: 'hero' },
        { num: '02', label: 'OVERVIEW', sub: '사업개요', targetId: 'overview' },
        { num: '03', label: 'PREMIUM', sub: '프리미엄', targetId: 'premium-value' },
        { num: '04', label: 'COMPLEX', sub: '단지안내', targetId: 'complex' },
        { num: '05', label: 'UNIT', sub: '세대안내', targetId: 'unit-plan' },
        { num: '06', label: 'CONTACT', sub: '관심고객등록', targetId: 'vip-reservation' },
      ],
    },

    hero: {
      variant: 'minimal',
      overlay: false, // 배경 조감도 사진이 잘 보이도록 짙은 네이비 스크림 제거
      eyebrowLine1: '기다려온 G5, 송도를 완성하다',
      eyebrowAccent: ['G5', '송도'],
      // "The Endless Symbol" 브랜드 스크립트 로고를 타이틀 자리에 이미지로 센터 배치
      titleImage: {
        src: '/apt/the-sharp-songdo-grand-terre/endless-symbol-dark.webp',
        alt: 'The Endless Symbol',
        width: 1188,
        height: 179,
      },
      // 모바일 전용 — 좁은 화면에서도 안 찌그러지게 2줄로 줄바꿈된 버전 (1024px부터는 위 titleImage로 전환)
      titleImageMobile: {
        src: '/apt/the-sharp-songdo-grand-terre/endless-symbol-dark-mobile.webp',
        alt: 'The Endless Symbol',
        width: 626,
        height: 279,
      },
      titleCaption: 'OF SONGDO',
      brandLine: '더샵 송도그란테르',
      bgImage: { src: '/apt/the-sharp-songdo-grand-terre/main.webp', alt: '더샵 송도 그란테르 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '더샵 송도 그란테르', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '1800-2261',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    benefits: {
      id: 'benefits',
      eyebrow: 'SPECIAL CONDITIONS',
      titleSmall: '더샵 송도그란테르',
      titleBold: '특별한 ',
      titleScript: '4가지 조건',
      desc: '더샵 송도그란테르만의 특별한 조건을 확인하세요.',
      bgImage: { src: '/apt/the-sharp-songdo-grand-terre/main.webp', alt: '더샵 송도 그란테르 특별 혜택' },
      items: [
        { num: '01', tag: 'NO.1', title: ['청약통장', '필요 없음'], desc: '' },
        { num: '02', tag: 'NO.2', title: ['거주지역', '제한 없음'], desc: '' },
        { num: '03', tag: 'NO.3', title: ['당첨자 관리·재당첨', '제한 없음'], desc: '' },
        { num: '04', tag: 'NO.4', title: ['선착순 희망 블록·타입·호실', '지정'], desc: '' },
      ],
    },

    // 출처: https://xn--2i0bq5hvjp1kpzchxro8a528e.kr/gran/index.html (더샵 송도그란테르 공식 사이트 사업개요)
    // G5-1~G5-6은 필지가 나뉜 블록 단위 — 버튼으로 블록을 고르면 그 블록의 specItems로 바뀜(기본 선택: G5-4)
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: 'SUMMARY',
      subtitle: '더샵 송도그란테르 사업개요',
      photo: { src: '/apt/the-sharp-songdo-grand-terre/sum_img.webp', alt: '더샵 송도 그란테르 조감도' },
      blocks: [
        {
          label: 'G5-1블록',
          photo: { src: '/apt/the-sharp-songdo-grand-terre/main.webp', alt: 'G5-1블록 조감도' },
          specItems: [
            { label: '사업부지면적', value: '46,268.30㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 31층' },
            { label: '건폐율/용적률', value: '37.98% / 307.39%' },
            { label: '세대수', value: '공동주택 853세대' },
          ],
        },
        {
          label: 'G5-11블록',
          photo: { src: '/apt/the-sharp-songdo-grand-terre/premium-01.webp', alt: 'G5-11블록 전경' },
          specItems: [
            { label: '사업부지면적', value: '20,242.20㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 20층' },
            { label: '건폐율/용적률', value: '38.04% / 255.25%' },
            { label: '세대수', value: '공동주택 318세대' },
          ],
        },
        {
          label: 'G5-3블록',
          photo: { src: '/apt/the-sharp-songdo-grand-terre/premium-02.webp', alt: 'G5-3블록 전경' },
          specItems: [
            { label: '사업부지면적', value: '5,789.80㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 41층' },
            { label: '건폐율/용적률', value: '21.37% / 297.52%' },
            { label: '세대수', value: '공동주택 85세대 / 오피스텔 24실' },
          ],
        },
        {
          label: 'G5-4블록',
          default: true,
          photo: { src: '/apt/the-sharp-songdo-grand-terre/premium-03.webp', alt: 'G5-4블록 전경' },
          specItems: [
            { label: '사업부지면적', value: '6,124.10㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 43층' },
            { label: '건폐율/용적률', value: '20.32% / 295.73%' },
            { label: '세대수', value: '공동주택 91세대 / 오피스텔 24실' },
          ],
        },
        {
          label: 'G5-5블록',
          photo: { src: '/apt/the-sharp-songdo-grand-terre/premium-04.webp', alt: 'G5-5블록 전경' },
          specItems: [
            { label: '사업부지면적', value: '6,320.40㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 45층' },
            { label: '건폐율/용적률', value: '19.67% / 299.98%' },
            { label: '세대수', value: '공동주택 97세대 / 오피스텔 24실' },
          ],
        },
        {
          label: 'G5-6블록',
          photo: { src: '/apt/the-sharp-songdo-grand-terre/sum_img.webp', alt: 'G5-6블록 조감도' },
          specItems: [
            { label: '사업부지면적', value: '6,493.80㎡' },
            { label: '규모', value: '지하 2층 ~ 지상 46층' },
            { label: '건폐율/용적률', value: '20.03% / 307.59%' },
            { label: '세대수', value: '공동주택 100세대 / 오피스텔 24실' },
          ],
        },
      ],
      disclaimers: [
        '홈페이지에 사용된 CG 및 일러스트, 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        '표기된 개발계획(예정)은 각 지방자치단체 및 언론보도자료를 인용한 것으로 국가 기관, 관할 지자체 및 기타 관계 기관의 사업추진 중 변경, 지연, 취소될 수 있습니다.',
        '내용은 인·허가 과정상 변경될 수 있으니 계약 시 주요내용을 반드시 확인하기 바랍니다.',
        '하자 등에 대한 사항은 공동주택관리법 등 관련 법령에 따라 적용됩니다.',
      ],
    },

    // 출처: location.jpg (위치안내 타이틀+지도 원본, location-map.webp는 타이틀 텍스트를 뺀 지도만 크롭한 버전)
    location: {
      id: 'location',
      navLabel: '위치안내',
      label: 'LOCATION',
      eyebrowPlain: '넘볼 수도, 넘어설 수도 없는 송도 프리미엄의 피날레',
      eyebrowAccent: '',
      title: '세상 모든 것을 누리게 될 라이프가 펼쳐지다',
      descTitle: '',
      descTitleAccent: [],
      mapImage: { src: '/apt/the-sharp-songdo-grand-terre/location-map-v2.webp', alt: '더샵 송도 그란테르 위치 안내도' },
      subhead: {
        eyebrow: '',
        title: '',
      },
      // 이미지는 새로 안 받고 기존에 올려둔 프리미엄 섹션용 사진 중 카테고리에 가까운 걸 재사용
      features: [
        {
          num: '01',
          category: '교통',
          eyebrowPlain: '막힘없이 이어지는',
          eyebrowAccent: '압도적',
          title: 'TRAFFIC',
          desc: '인천1호선 센트럴파크역과 GTX-B(예정)의 인천대입구역 등 출퇴근이 빨라지는 교통망',
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-01.webp', alt: '교통 — 인천1호선·GTX-B 교통망' },
        },
        {
          num: '02',
          category: '자연',
          eyebrowPlain: '그림처럼 그려지는',
          eyebrowAccent: '낭만적',
          title: 'NATURE',
          desc: '대규모 공원과 워터프론트에 둘러싸인 자연조망과 힐링 라이프',
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-02.webp', alt: '자연 — 대규모 공원과 워터프론트' },
        },
        {
          num: '03',
          category: '교육',
          eyebrowPlain: '걱정없이 자라나는',
          eyebrowAccent: '이상적',
          title: 'EDU',
          desc: '단지 앞 초교 부지와 예송초·중 및 학원가 인접 등으로 등굣길이 가까운 안심 학세권',
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-04.webp', alt: '교육 — 단지 앞 초교 부지' },
        },
        {
          num: '04',
          category: '생활',
          eyebrowPlain: '빈틈없이 누리는',
          eyebrowAccent: '환상적',
          title: 'LIFE',
          desc: '코스트코, 롯데마트, 현대프리미엄 아울렛 등 다채로운 생활이 가능한 송도의 핵심 입지',
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-03.webp', alt: '생활 — 코스트코·롯데마트·아울렛 등 생활 인프라' },
        },
      ],
      disclaimer:
        '※ 조경, 설계 사항 및 개발계획, 도로계획 등은 참고 사항으로 제작 과정 중 오류가 있을 수 있으며 사업 진행 및 시공 과정 중 변경 및 취소될 수 있습니다.',
    },

    premiumIntro: {
      // 배경이 너무 밝다는 피드백으로 스크림(그림자) 다시 켬 — overlay 필드 자체를 없애면 기본값(true)이라 렌더링됨
      eyebrow: 'SYMBOLIC PRIDE',
      titleLine1: '송도의 모든 가치를 소유할',
      titleLine2: '위대한 상징',
      descLine1: '최고 46층, 총 1,544세대 [아파트1544세대, 오피스텔96실] 스케일의 브랜드 단지로 송도 라이프를 더 크고 더 위대하게 이끌',
      descLine1Accent: ['46층', '1,544세대'],
      descLine2: '상징적인 가치를 지닌 압도적인 랜드마크',
      bgImage: { src: '/apt/the-sharp-songdo-grand-terre/sum_img.webp', alt: '더샵 송도 그란테르 조감도' },
    },

    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: '더샵 송도 그란테르',
      titlePlain: 'PREMIUM ',
      titleAccent: '5',
      cards: [
        {
          num: '01',
          title: ['가치있는', '주거 프리미엄'],
          desc: ['최고 46층, 총 1,544세대', '[아파트1544세대, 오피스텔96실]'],
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-01.webp', alt: '가치있는 주거 프리미엄' },
        },
        {
          num: '02',
          title: ['독보적인', '공원형 대단지'],
          desc: ['대규모 공원에서 누리는 에코라이프'],
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-02.webp', alt: '독보적인 공원형 대단지' },
        },
        {
          num: '03',
          title: ['상징적인', '워터프론트 생활권'],
          desc: ['호수 산책길에서 만끽하는 여유로움'],
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-03.webp', alt: '상징적인 워터프론트 생활권' },
        },
        {
          num: '04',
          title: ['핵심적인', '송도 중심 인프라'],
          desc: ['단지 내 초교(예정), 센트럴파크 등'],
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-04.webp', alt: '핵심적인 송도 중심 인프라' },
        },
        {
          num: '05',
          title: ['혁신적인', '외관과 인프라'],
          desc: ['2·3면 개방형 구조와 주변 인프라'],
          image: { src: '/apt/the-sharp-songdo-grand-terre/premium-05.webp', alt: '혁신적인 외관과 인프라' },
        },
      ],
    },

    complex: {
      id: 'complex',
      siteMap: {
        titleLine1: '단지배치도',
        titleLine2: '',
        desc: '',
        image: {
          src: '/apt/the-sharp-songdo-grand-terre/complex-sitemap.webp',
          alt: '더샵 송도 그란테르 단지 배치도 및 블록별 타입 세대수',
          width: 2400,
          height: 1712,
        },
      },
      // 블록별로 동호수 배치표 이미지이 따로 있어 탭 4개로 전환 (기본 선택: 1블록)
      donghoChart: {
        titleLine1: '동호수배치도',
        titleLine2: '',
        desc: '',
        tabs: [
          {
            label: '1블록',
            image: { src: '/apt/the-sharp-songdo-grand-terre/dongho-1block.webp', alt: '더샵 송도 그란테르 1블록(101~107동) 동호수 배치표', width: 1100, height: 2262 },
          },
          {
            label: '11블록',
            image: { src: '/apt/the-sharp-songdo-grand-terre/dongho-11block.webp', alt: '더샵 송도 그란테르 11블록(1101~1104동) 동호수 배치표', width: 1100, height: 1206 },
          },
          {
            label: '3~6블록',
            image: { src: '/apt/the-sharp-songdo-grand-terre/dongho-3-6block.webp', alt: '더샵 송도 그란테르 3~6블록(301·401·501·601동) 동호수 배치표', width: 1100, height: 1343 },
          },
          {
            label: '3~6블록(오피스텔)',
            image: { src: '/apt/the-sharp-songdo-grand-terre/dongho-3-6block-officetel.webp', alt: '더샵 송도 그란테르 3~6블록 오피스텔 동호수 배치표', width: 1100, height: 1330 },
          },
        ],
      },
    },

    // 출처: https://www.xn--2i0bq5hvjp1kpzchxro8a528e.kr/gran/unit.html (더샵 송도그란테르 공식 사이트 평면안내)
    // 면적대가 6개, 타입이 26개나 돼서 tabbedGroups:true로 2단 탭(면적대 → 타입) 구조를 씀
    // "102C,D,E"처럼 콤마로 묶인 타입은 원본 사이트에서도 여러 블록 값을 한 이미지 안에 같이 보여주는
    // 하나의 탭이라, specs는 그 중 첫 번째 블록(보통 3블록) 값을 대표로 넣고 countText에 전체를 적어둠
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'SONGDO GRAND TERRE',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      tabbedGroups: true,
      subtitleLines: ['총 1,544세대 대단지', '더샵 송도그란테르', '당신의 라이프스타일에 맞춘', '다양한 평면을 만나보십시오.'],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: '84A',
              countText: '1블록 · 총 46세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84a.webp', alt: '84A 타입 평면도', width: 1100, height: 565 },
              specs: { exclusive: '84.8600', supply: '113.7346', contract: '171.9550' },
            },
            {
              letter: '84B',
              countText: '1블록 · 총 133세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84b.webp', alt: '84B 타입 평면도', width: 1100, height: 565 },
              specs: { exclusive: '84.2800', supply: '113.8084', contract: '171.6309' },
            },
            {
              letter: '84C',
              countText: '1블록 · 총 133세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84c.webp', alt: '84C 타입 평면도', width: 1100, height: 565 },
              specs: { exclusive: '84.1200', supply: '114.0626', contract: '171.7753' },
            },
            {
              letter: '84H',
              countText: '11블록 · 총 34세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84h.webp', alt: '84H 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '84.8600', supply: '109.3535', contract: '175.6019' },
            },
            {
              letter: '84I',
              countText: '11블록 · 총 36세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84i.webp', alt: '84I 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '84.7800', supply: '110.0848', contract: '176.2706' },
            },
            {
              letter: '84J',
              countText: '11블록 · 총 36세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84j.webp', alt: '84J 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '84.5600', supply: '109.9432', contract: '175.9574' },
            },
            {
              letter: '84K',
              countText: '3~6블록 · 27·29·31·32세대(총 119세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84k.webp', alt: '84K 타입 평면도', width: 1100, height: 633 },
              specs: { exclusive: '84.2300', supply: '117.3654', contract: '186.2926' },
            },
          ],
        },
        {
          area: '100㎡~102㎡',
          types: [
            {
              letter: '100A',
              countText: '11블록 · 총 34세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-100a.webp', alt: '100A 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '100.9800', supply: '130.6944', contract: '209.5272' },
            },
            {
              letter: '100B',
              countText: '11블록 · 총 34세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-100b.webp', alt: '100B 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '100.5800', supply: '129.7106', contract: '208.2311' },
            },
            {
              letter: '100C',
              countText: '11블록 · 총 36세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-100c.webp', alt: '100C 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '100.9500', supply: '130.7974', contract: '209.6068' },
            },
            {
              letter: '102A',
              countText: '1블록 · 총 46세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-102a.webp', alt: '102A 타입 평면도', width: 1100, height: 565 },
              specs: { exclusive: '102.9300', supply: '138.3122', contract: '208.9300' },
            },
            {
              letter: '102B',
              countText: '1블록 · 총 46세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-102b.webp', alt: '102B 타입 평면도', width: 1100, height: 565 },
              specs: { exclusive: '102.5000', supply: '137.7590', contract: '208.0818' },
            },
            {
              letter: '102C,D,E',
              countText: '1블록 · C 83 · D 26 · E 24세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-102cde.webp', alt: '102C·D·E 타입 평면도', width: 1100, height: 1145 },
              specs: { exclusive: '102.4100', supply: '137.7532', contract: '208.0143' },
            },
          ],
        },
        {
          area: '118㎡~124㎡',
          types: [
            {
              letter: '118K',
              countText: '3~6블록 · 54·58·62·64세대(총 238세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-118k.webp', alt: '118K 타입 평면도', width: 1100, height: 633 },
              specs: { exclusive: '118.2300', supply: '164.5575', contract: '261.3077' },
            },
            {
              letter: '124A',
              countText: '1블록 · 총 46세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-124a.webp', alt: '124A 타입 평면도', width: 1100, height: 955 },
              specs: { exclusive: '124.5700', supply: '167.8226', contract: '253.2872' },
            },
            {
              letter: '124B,C,D',
              countText: '1블록 · B 83 · C 26 · D 24세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-124bcd.webp', alt: '124B·C·D 타입 평면도', width: 1100, height: 1678 },
              specs: { exclusive: '124.8100', supply: '167.7114', contract: '253.3406' },
            },
            {
              letter: '124H',
              countText: '11블록 · 총 34세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-124h.webp', alt: '124H 타입 평면도', width: 1100, height: 608 },
              specs: { exclusive: '124.7300', supply: '160.8749', contract: '258.2491' },
            },
            {
              letter: '124I',
              countText: '11블록 · 총 36세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-124i.webp', alt: '124I 타입 평면도', width: 1100, height: 603 },
              specs: { exclusive: '124.8300', supply: '160.8783', contract: '258.3305' },
            },
          ],
        },
        {
          area: '128㎡~129㎡',
          types: [
            {
              letter: '128A,B,C',
              countText: '1블록 · A 83 · B 26 · C 24세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-128abc.webp', alt: '128A·B·C 타입 평면도', width: 1100, height: 1223 },
              specs: { exclusive: '128.4500', supply: '172.5843', contract: '260.7112' },
            },
            {
              letter: '128H',
              countText: '11블록 · 총 36세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-128h.webp', alt: '128H 타입 평면도', width: 1100, height: 603 },
              specs: { exclusive: '128.1100', supply: '165.1576', contract: '265.1712' },
            },
            {
              letter: '129K',
              countText: '3~6블록 각 1세대(총 4세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-129k.webp', alt: '129K 타입 평면도', width: 1100, height: 1013 },
              specs: { exclusive: '129.4600', supply: '183.6940', contract: '289.6354' },
            },
          ],
        },
        {
          area: '188㎡',
          types: [
            {
              letter: '188K',
              countText: '3~6블록 각 2세대(총 8세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-188k.webp', alt: '188K 타입 평면도', width: 1100, height: 1013 },
              specs: { exclusive: '188.7900', supply: '265.8711', contract: '420.3637' },
            },
          ],
        },
        {
          // 오피스텔 스펙(전용/공급/계약면적)은 블록별로 조금씩 다름 — 3블록 값을 대표로 넣음(기존 84K 등과 동일 규칙)
          // 3블록/4블록/5블록/6블록 값: 84OA,OB(84.8400 · 126.7242/126.6208/126.6208/126.6208 · 175.0420/184.6584/184.6590/182.5372)
          //                            84OC,OD(84.6800 · 126.2481/126.1449/126.1449/126.1449 · 174.4750/184.0734/184.0743/181.9559)
          //                            84OE,OF(84.8900 · 128.1048/128.0015/128.0015/128.0015 · 176.4510/186.0732/186.0740/183.9505)
          //                            84OG,OH(84.8000 · 128.3178/128.2144/128.2144/128.2144 · 176.6130/186.2247/186.2256/184.1042)
          area: '84㎡(오피스텔)',
          types: [
            {
              letter: '84OA,OB',
              countText: '3~6블록 · A·B 각 2세대(블록당 4세대, 총 16세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84oab.webp', alt: '84OA·OB 오피스텔 타입 평면도', width: 1100, height: 567 },
              specs: { exclusive: '84.8400', supply: '126.7242', contract: '175.0420' },
            },
            {
              letter: '84OC,OD',
              countText: '3~6블록 · C·D 각 2세대(블록당 4세대, 총 16세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84ocd.webp', alt: '84OC·OD 오피스텔 타입 평면도', width: 1100, height: 567 },
              specs: { exclusive: '84.6800', supply: '126.2481', contract: '174.4750' },
            },
            {
              letter: '84OE,OF',
              countText: '3~6블록 · E·F 각 4세대(블록당 8세대, 총 32세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84oef.webp', alt: '84OE·OF 오피스텔 타입 평면도', width: 1100, height: 567 },
              specs: { exclusive: '84.8900', supply: '128.1048', contract: '176.4510' },
            },
            {
              letter: '84OG,OH',
              countText: '3~6블록 · G·H 각 4세대(블록당 8세대, 총 32세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-84ogh.webp', alt: '84OG·OH 오피스텔 타입 평면도', width: 1100, height: 567 },
              specs: { exclusive: '84.8000', supply: '128.3178', contract: '176.6130' },
            },
          ],
        },
        {
          area: '펜트',
          types: [
            {
              letter: '198PA',
              countText: '1블록 · 총 2세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-198pa.webp', alt: '198PA 펜트하우스 타입 평면도', width: 1100, height: 942 },
              specs: { exclusive: '198.7900', supply: '270.1614', contract: '406.5572' },
            },
            {
              letter: '198PB',
              countText: '1블록 · 총 2세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-198pb.webp', alt: '198PB 펜트하우스 타입 평면도', width: 1100, height: 942 },
              specs: { exclusive: '198.4000', supply: '267.7496', contract: '403.9013' },
            },
            {
              letter: '198PC',
              countText: '11블록 · 총 2세대',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-198pc.webp', alt: '198PC 펜트하우스 타입 평면도', width: 1100, height: 962 },
              specs: { exclusive: '198.8600', supply: '257.9288', contract: '413.1755' },
            },
            {
              letter: '198PK',
              countText: '3~6블록 각 1세대(총 4세대)',
              image: { src: '/apt/the-sharp-songdo-grand-terre/unit-198pk.webp', alt: '198PK 펜트하우스 타입 평면도', width: 1100, height: 1158 },
              specs: { exclusive: '198.2300', supply: '277.7031', contract: '439.9213' },
            },
          ],
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '더샵 송도 그란테르',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 자동으로 모델하우스 상세주소가 발송되며, 예약고객에게는 방문사은품이 증정 됩니다. 상품권은 소진 시 까지 제공되며, 예약없이 내방하신 고객께는 제공되지 않습니다.',
      serviceOptions: ['모델하우스 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 모델하우스 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 모델하우스 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      // footer_logo.png는 흰색 "THE SHARP" 심볼(투명 배경) — 짙은 배경에서만 보임, 변환본이 footer-logo.webp
      logo: { src: '/apt/the-sharp-songdo-grand-terre/footer-logo.webp', alt: '더샵 송도 그란테르' },
      highlightText: '1800-2261',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시공', value: '㈜포스코이앤씨' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1800-2261',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
