// 달서자이 제니크 — 대구광역시 달서구 본리동 661-9번지 일원, GS건설 Xi 브랜드 아파트(360세대)·오피스텔(78실)
// 개발사업. 시행 (주)제이비스 / 시공 GS건설(주). 공식 사이트(https://www.xi.co.kr/DS, cmsMenuSeq 기반
// 서브페이지 29619~29726)에서 사업개요 스펙표·입지환경 지도·프리미엄 6대 가치·단지설계·단지배치도·
// 동호수배치표·CLUB XIAN 시설·세대안내(84A/84B) 평면·분양일정 이미지를 직접 스크래핑해 채웠다
// (2026-09-04, curl로 원본 HTML 확보 후 이미지 URL 추출 → 다운로드 → sharp로 그리드 이미지 크롭).
// 온라인 분양대행 정식 계약 현장(더블루파트너스 확인) — 공식 사이트에 "유사 홈페이지 주의" 팝업이
// 있으므로 향후 문구·이미지 변경 시 반드시 공식 사이트 최신본과 대조할 것.
//
// ⚠️ 확인 필요 항목(2차 소스만 존재, 공식 사이트에서 직접 확인 못함 — 게재 시 재검증 권장):
//   지하 층수(5층 vs 6층 소스 불일치, 본 파일엔 미기재), 신탁사명, 설계사명, 정확한 분양가,
//   84A/84B 동·라인 최종 확정(동호수배치표 기준으로는 101·102동 각 4,3,2,1라인=A,B,B,A로 반영함).
//   총세대수(438)·시행/시공사·대지위치·연면적·공급규모·84A/84B 면적스펙·분양일정(8/6~9/9)·
//   분양문의(1833-2330)는 공식 사이트에서 직접 확인된 값.
const config = {
  slug: 'dalseo-xi-genic',
  subdomain: '달서자이제니크',
  projectName: '달서자이 제니크',
  shortName: '달서자이 제니크',
  telNumber: '1833-2330',
  ogImage: 'https://adaptive-landing-ochre.vercel.app/apt/dalseo-xi-genic/og.jpg',
  adminPhones: ['01094216962'],
  sheetId: '',
  sheetTab: '달서자이제니크',
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
      logo: { src: '/apt/dalseo-xi-genic/logo.svg', alt: '달서자이 제니크', width: 210, height: 36 },
      gnb: ['사업개요', '위치안내', '프리미엄가치', '단지소개', '세대안내', '커뮤니티', '상담신청 및 방문예약'],
      quickCtaLabel: '관심고객등록',
      phone: '1833-2330',
    },

    // 출처: 공식 사이트 프리미엄 페이지("본리네거리 중심 입지", "최고 49층 탁 트인 조망") +
    // 사업개요("총 438세대") + 캘린더 팝업("8/7(금) GRAND OPEN") 원문 조합.
    hero: {
      eyebrowLine1: '대구 프리미엄을 이끄는 자이',
      eyebrowLine2: '본리네거리 중심, 대구 달서의 새로운 랜드마크',
      titleLine1: '달서자이 제니크',
      titleLine2: '최고 49층, 총 438세대',
      descLine1: '본리네거리 중심입지에서 펼쳐지는 도심을 압도하는 탁 트인 조망',
      descLine1Accent: ['본리네거리 중심입지'],
      descLine2: '남대구IC·중부내륙고속도로 지선과 가까운 직주근접 쾌속교통,',
      descLine3: '달서구 최초 IB 월드스쿨 인증 덕인초 도보통학까지',
      bgImage: { src: '/apt/dalseo-xi-genic/hero-bg.jpg', alt: '달서자이 제니크 대표 조감도' },
      mobileBar: {
        announcements: [{ badge: '안내', textStrong: '달서자이 제니크', textLight: ' 공식 안내센터입니다.' }],
        bubbleText: '예약 후 상담만 해도 특별혜택 안내',
        callLabel: '전화상담',
        visitLabel: '방문예약',
      },
    },

    // 출처: 공식 사이트 사업개요(cmsMenuSeq=29619) 스펙표 원문 + 캘린더 팝업(분양일정) 원문.
    summary: {
      id: 'overview',
      navLabel: 'overview',
      title: '달서자이 제니크',
      subtitle: '대구광역시 달서구 본리동, 본리네거리 중심의 자이 브랜드타운',
      photo: { src: '/apt/dalseo-xi-genic/overview-photo.jpg', alt: '달서자이 제니크 조감도' },
      thumbs: [
        { src: '/apt/dalseo-xi-genic/overview-thumb-1.jpg', alt: '단지 내 포켓쉼터' },
        { src: '/apt/dalseo-xi-genic/overview-thumb-2.jpg', alt: '단지 내 휴게정원' },
        { src: '/apt/dalseo-xi-genic/overview-thumb-3.jpg', alt: 'CLUB XIAN 티하우스' },
      ],
      notice: '※ 본 페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 사전홍보용으로 인·허가 과정 등에 따라 변경될 수 있고 실제와 다를 수 있습니다(면적 및 세대수 등 포함).',
      specItems: [
        { label: '사업명', value: '달서자이 제니크' },
        { label: '대지위치', value: '대구광역시 달서구 본리동 661-9번지 일원' },
        { label: '연면적', value: '81,648.1065㎡' },
        { label: '주택형', value: '아파트 전용 84㎡A·B / 오피스텔 전용 84㎡OT' },
        { label: '공급규모', value: '총 438세대 (아파트 360세대 / 오피스텔 78실)' },
        { label: '분양물 용도', value: ['공동주택 및 부대복리시설', '오피스텔 및 부대복리시설 / 근린생활시설'] },
        { label: '규모', value: ['아파트 101·102동 — 지상 최고 49층', '오피스텔 103동 — 지상 최고 29층'] },
        { label: '시행', value: '(주)제이비스' },
        { label: '시공', value: 'GS건설(주)' },
        {
          label: '분양일정',
          value: ['입주자모집공고 8/6(목)', '특별공급 8/18(화) · 일반공급 1순위 8/19(수) · 2순위 8/20(목)', '당첨자발표 8/26(수) · 정당계약 9/7(월)~9/9(수)'],
        },
      ],
    },

    // 출처: 공식 사이트 입지환경(cmsMenuSeq=29620) 헤드라인("기대되는 변화의 중심, 달서에 새로운
    // 자부심을 세우다!") + 위치도 원문 그대로. features는 프리미엄 페이지 6대 가치 중 입지 관련 4개.
    location: {
      id: 'location',
      navLabel: '위치안내',
      eyebrowPlain: '대구 프리미엄을 이끄는 ',
      eyebrowAccent: '자이',
      title: '기대되는 변화의 중심',
      descTitle: '달서에 새로운 자부심을 세우다!',
      descTitleAccent: ['새로운 자부심'],
      descBody1: '본리네거리 중심입지, 남대구IC·중부내륙고속도로 지선까지 인접한 직주근접 쾌속교통,',
      descBody1Accent: ['본리네거리 중심입지', '직주근접 쾌속교통'],
      descBody2: '달서구 최초 IB 월드스쿨 인증 덕인초 도보통학권까지 한자리에 품었습니다.',
      mapImage: { src: '/apt/dalseo-xi-genic/location-map.jpg', alt: '달서자이 제니크 광역 위치 안내도' },
      features: [
        {
          titlePrefix: '',
          titleStrong: '본리네거리 중심 입지',
          titleSuffix: '',
          tag: 'CENTER',
          image: { src: '/apt/dalseo-xi-genic/feature-location.jpg', alt: '본리네거리 중심 입지' },
          descStrong: '',
          descRest: '본리네거리의 편의시설과 죽전네거리를 가깝게 누리는 중심 생활권',
        },
        {
          titlePrefix: '',
          titleStrong: '직주근접 쾌속교통',
          titleSuffix: '',
          tag: 'TRAFFIC',
          image: { src: '/apt/dalseo-xi-genic/feature-traffic.jpg', alt: '직주근접 쾌속교통' },
          descStrong: '',
          descRest: '대구 최대 성서산업단지로의 빠른 출퇴근, 달구벌대로·와룡로·남대구IC 인접',
        },
        {
          titlePrefix: '',
          titleStrong: '안심 학세권',
          titleSuffix: '',
          tag: 'EDUCATION',
          image: { src: '/apt/dalseo-xi-genic/feature-education.jpg', alt: '안심 학세권' },
          descStrong: '',
          descRest: '달서구 최초 IB 월드스쿨 인증받은 덕인초를 걸어서 누리는 안심 등굣길',
        },
        {
          titlePrefix: '',
          titleStrong: '눈부신 미래가치',
          titleSuffix: '',
          tag: 'FUTURE',
          image: { src: '/apt/dalseo-xi-genic/feature-future.jpg', alt: '눈부신 미래가치' },
          descStrong: '',
          descRest: "대구광역시청 신청사('30년 예정), 서대구역 복합환승센터(예정) 개발로 더 기대되는 비전",
        },
      ],
      disclaimer:
        '※ 본 홈페이지의 위치도는 네이버 지도를 참조하여 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다. 현황 및 개발 계획은 관계 기관의 발표를 참조해 작성된 것으로 사업계획 및 일정은 당사와 무관하며 추후 변경될 수 있습니다.',
    },

    // 출처: 공식 사이트 단지설계(cmsMenuSeq=29695) 헤드라인·부제 원문 그대로.
    premiumIntro: {
      eyebrow: 'THE HIGHEST PREMIUM',
      titleLine1: '높이를 넘어,',
      titleLine2: '프리미엄의 정점에 오르다',
      descLine1: '리듬감 있는 주동 패턴과 쾌적한 경관 설계로 완성한',
      descLine1Accent: ['최고 49층 랜드마크'],
      descLine2: '도시를 새롭게 대표할 달서자이 제니크의 스카이라인',
      bgImage: { src: '/apt/dalseo-xi-genic/premium-intro-bg.jpg', alt: '달서자이 제니크 랜드마크 조감도' },
    },

    // 출처: 공식 사이트 프리미엄(cmsMenuSeq=29622) 6대 가치 카드 원문 그대로(제목·설명 인용).
    premiumValue: {
      id: 'premium-value',
      navLabel: '프리미엄가치',
      eyebrow: 'PREMIUM',
      titlePlain: '달서자이 제니크 ',
      titleAccent: 'SIGNATURE 6',
      cards: [
        {
          num: '01',
          title: ['본리네거리', '중심 입지'],
          desc: ['본리네거리의 편의시설과', '죽전네거리를 가깝게 누리는 중심 생활권'],
          image: { src: '/apt/dalseo-xi-genic/premium-01.jpg', alt: '본리네거리 중심 입지' },
        },
        {
          num: '02',
          title: ['최고 49층', '탁 트인 조망'],
          desc: ['도심을 한눈에 내려다보는 탁 트인 조망', '시선을 압도하는 스카이라인'],
          image: { src: '/apt/dalseo-xi-genic/premium-02.jpg', alt: '최고 49층 탁 트인 조망' },
        },
        {
          num: '03',
          title: ['직주근접', '쾌속교통'],
          desc: ['대구 최대 성서산업단지로의 빠른 출퇴근', '달구벌대로, 와룡로, 남대구IC 인접'],
          image: { src: '/apt/dalseo-xi-genic/premium-03.jpg', alt: '직주근접 쾌속교통' },
        },
        {
          num: '04',
          title: ['안심', '학세권'],
          desc: ['달서구 최초 IB 월드스쿨 인증받은 덕인초를', '걸어서 누리는 안심 등굣길'],
          image: { src: '/apt/dalseo-xi-genic/premium-04.jpg', alt: '안심 학세권' },
        },
        {
          num: '05',
          title: ['눈부신', '미래가치'],
          desc: ["대구광역시청 신청사('30년 예정)", '서대구역 복합환승센터(예정) 개발로 더 기대되는 비전'],
          image: { src: '/apt/dalseo-xi-genic/premium-05.jpg', alt: '눈부신 미래가치' },
        },
        {
          num: '06',
          title: ['자이', '브랜드 프리미엄'],
          desc: ['대구에서 그 가치를 증명한 자이 브랜드', '달서에서도 새롭게 이어갈 프리미엄'],
          image: { src: '/apt/dalseo-xi-genic/premium-06.jpg', alt: '자이 브랜드 프리미엄' },
        },
      ],
    },

    // 출처: 공식 사이트 단지설계 페이지 하단 "포켓쉼터"·"휴게정원" 소개 문구 원문 그대로.
    landscape: {
      panels: [
        {
          image: { src: '/apt/dalseo-xi-genic/landscape-1.jpg', alt: '단지 내 포켓쉼터' },
          badge: 'POCKET SHELTER',
          titlePlain: '자연의 풍경 속 ',
          titleAccent: '포켓쉼터',
          desc: '자연의 풍경 속에서 여유로운 시간을 누리는 휴식공간, 포켓쉼터에서 잠시 쉬어가실 수 있습니다.',
        },
        {
          image: { src: '/apt/dalseo-xi-genic/landscape-2.jpg', alt: '단지 내 휴게정원' },
          badge: 'REST GARDEN',
          titlePlain: '계절을 느끼는 ',
          titleAccent: '휴게정원',
          desc: '계절의 변화를 느끼며 산책로를 즐기는 힐링공간, 휴게정원이 일상 속 여유를 선사합니다.',
        },
      ],
    },

    // 출처: 공식 사이트 단지 배치도(29707)·동호수 배치도(29708) 원문 — 101·102동(84A·84B, 각 180세대),
    // 103동(오피스텔 84OT, 78실), 아파트 지상 최고 49층·오피스텔 최고 29층 그대로 반영.
    complex: {
      id: 'complex',
      eyebrow: 'COMPLEX PLAN',
      titleLine1: '101동·102동·103동, 총 438세대',
      titleLine2: '리듬감 있는 스카이라인의 랜드마크 단지',
      desc: 'CLUB XIAN, 포켓쉼터부터 스쿨버스존까지 — 동 배치와 세대 라인 구성을 한눈에 확인해보세요.',
      siteMap: {
        image: { src: '/apt/dalseo-xi-genic/complex-sitemap.jpg', alt: '달서자이 제니크 단지 배치도', width: 1100, height: 506 },
      },
      donghoChart: {
        image: { src: '/apt/dalseo-xi-genic/complex-dongho-chart.jpg', alt: '달서자이 제니크 101동·102동·103동 동호수 배치표', width: 1100, height: 1031 },
      },
    },

    // 출처: 공식 사이트 평형정보(cmsMenuSeq=29710) 84A·84B 평면 스펙표 원문(전용/공급/계약면적 그대로).
    // common(주거공용) = 공급-전용, otherCommon(기타공용) = 계약-공급으로 산출.
    unitPlan: {
      id: 'unit-plan',
      navLabel: '세대안내',
      watermark: 'DALSEO XI GENIC',
      titlePlain: 'UNIT ',
      titleAccent: 'PLAN',
      subtitleLines: ['본리네거리 중심에서 시작하는', '달서자이 제니크', '전 세대 확장기본형으로 설계한', '전용 84㎡ 단일 평형대를 만나보십시오.'],
      groups: [
        {
          area: '84㎡',
          types: [
            {
              letter: 'A',
              countText: '180세대 (확장기본형)',
              image: { src: '/apt/dalseo-xi-genic/unit-84a.jpg', alt: '달서자이 제니크 84㎡A 타입 평면도' },
              specs: { exclusive: '84.7506', common: '31.5968', supply: '116.3474', otherCommon: '62.6699', contract: '179.0173' },
            },
            {
              letter: 'B',
              countText: '180세대 (확장기본형)',
              image: { src: '/apt/dalseo-xi-genic/unit-84b.jpg', alt: '달서자이 제니크 84㎡B 타입 평면도' },
              specs: { exclusive: '84.8664', common: '32.1234', supply: '116.9898', otherCommon: '62.7555', contract: '179.7453' },
            },
          ],
        },
      ],
    },

    // 출처: 공식 사이트 CLUB XIAN 페이지(cmsMenuSeq=29709) 3F·B1F 시설 구성·이미지 원문 그대로.
    // 시설 규모가 단출해(3F 2실 + B1F 3실) 풀 규모 클럽하우스용 SignatureClub 대신
    // SignatureClubSimple(아이콘+이미지 카드 그리드) 사용.
    club: {
      id: 'community',
      navLabel: '커뮤니티',
      variant: 'simple',
      intro: {
        watermark: 'CLUB XIAN',
        titleLine1: '단지 안에서 누리는',
        titleLine2: '프리미엄 라운지, CLUB XIAN',
        desc: '작은도서관·티하우스부터 피트니스 클럽·스크린골프까지, 3F와 B1F에 알차게 채운 입주민 전용 커뮤니티입니다.',
      },
      facilities: [
        {
          key: 'golf',
          image: { src: '/apt/dalseo-xi-genic/club-golf.jpg', alt: '스크린 골프연습장', width: 450, height: 300 },
          icon: 'fitness',
          labelEn: 'GOLF PRACTICE · B1F',
          title: '스크린 골프연습장',
          desc: '계절에 구애받지 않고 실전 감각을 익힐 수 있는 입주민 전용 스크린 골프연습장입니다.',
        },
        {
          key: 'fitness',
          image: { src: '/apt/dalseo-xi-genic/club-fitness.jpg', alt: '피트니스 클럽', width: 530, height: 172 },
          icon: 'fitness',
          labelEn: 'FITNESS CLUB · B1F',
          title: '피트니스 클럽',
          desc: '최신 유산소·웨이트 기구를 갖춘 피트니스 클럽에서 건강한 일상을 이어가실 수 있습니다.',
        },
        {
          key: 'gx',
          image: { src: '/apt/dalseo-xi-genic/club-gx.jpg', alt: 'G.X룸', width: 530, height: 300 },
          icon: 'fitness',
          labelEn: 'G.X ROOM · B1F',
          title: 'G.X룸',
          desc: '요가, 필라테스 등 다양한 그룹 액티비티를 즐길 수 있는 다목적 G.X룸입니다.',
        },
        {
          key: 'library',
          image: { src: '/apt/dalseo-xi-genic/club-library.jpg', alt: '작은도서관', width: 640, height: 330 },
          icon: 'library',
          labelEn: 'LIBRARY · 3F',
          title: '작은도서관',
          desc: '조용하고 아늑한 분위기 속에서 독서와 학업에 온전히 집중할 수 있는 작은도서관입니다.',
        },
        {
          key: 'teahouse',
          image: { src: '/apt/dalseo-xi-genic/club-teahouse.jpg', alt: '티하우스', width: 750, height: 390 },
          icon: 'lounge',
          labelEn: 'TEA HOUSE · 3F',
          title: '티하우스',
          desc: '이웃과 여유로운 담소를 나누며 차 한 잔의 여유를 즐길 수 있는 티하우스입니다.',
        },
      ],
    },

    vipForm: {
      id: 'vip-reservation',
      eyebrow: 'VIP Reservation',
      titleLine1: '달서자이 제니크',
      titleLine2: '24시간 상담신청 및 방문예약',
      desc: '간단한 정보를 입력하여 주시면 담당자가 입력하신 연락처로 방문·상담 일정을 안내해 드립니다. 견본주택은 대구광역시 달서구 두류동 135-4에 위치해 있습니다.',
      serviceOptions: ['견본주택 방문예약', '원하는시간 전화예약'],
      ageOptions: ['20대 이하', '30대', '40대', '50대', '60대 이상'],
      privacyText: `[개인정보 수집 및 이용에 관한 안내] 주식회사 더블루파트너스는 귀하의 개인정보를 소중하게 생각하며, 『개인정보보호법』 등 관련 법규를 철저히 준수하고 있습니다. 당사는 분양 정보 제공 및 방문 예약 서비스의 원활한 이행을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.

1. 수집하는 개인정보의 항목 (필수) - 성명, 휴대전화번호, 관심 서비스, 방문/상담 희망일시, 연령대
2. 개인정보의 수집 및 이용 목적 - 견본주택 방문예약 접수 및 상담 일정 조율 - 분양 일정, 청약 안내, 이벤트 등 분양 관련 마케팅 및 광고 정보 제공 - 고객 문의에 대한 정확한 확인 및 응대
3. 개인정보의 보유 및 이용 기간 - 귀하의 개인정보는 수집 및 이용 목적이 달성된 후, 또는 당해 분양 사업 완료 후 6개월 이내에 지체 없이 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 당사는 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다. 또한 정보주체의 파기요청이 있을 시 즉각 파기 처리됩니다.
4. 동의 거부권 및 미동의 시 불이익 - 귀하는 위와 같은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 단, 필수 항목 수집에 동의하지 않으실 경우, 견본주택 방문 예약 및 원활한 상담, 분양 정보 수신 등의 서비스 제공이 제한될 수 있습니다.`,
    },

    footer: {
      logo: { src: '/apt/dalseo-xi-genic/logo.svg', alt: '달서자이 제니크' },
      highlightText: '분양문의 1833-2330',
      agencySlogan: '분양완판 전문가 그룹, (주) 더블루파트너스',
      companyLines: [
        { label: '시행', value: '(주)제이비스' },
        { label: '시공', value: 'GS건설(주)' },
        { label: '온라인대행', value: '주식회사 더블루파트너스' },
        { label: '사업자등록번호', value: '789-81-03093' },
        { label: '이메일', value: 'addup@addup.kr' },
      ],
      disclaimers: [
        '※ 본 사이트에 사용된 이미지들은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.',
        '※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.',
        '※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 견본주택 관계자에게 문의하시기 바랍니다.',
      ],
      csPhone: '1833-2330',
      csHours: 'AM 09:00 ~ PM 19:00',
    },
  },
}

export default config
