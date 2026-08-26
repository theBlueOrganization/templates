/**
 * 현장 슬러그: jeonju-artiem-laterrace
 * URL: /apt/jeonju-artiem-laterrace
 *
 * TODO: 사업개요 스펙 데이터만 확정된 스켈레톤입니다.
 * 히어로/입지환경/프리미엄/단지설계/커뮤니티/평면도 등 나머지 이미지·문구·색상은
 * 실제 데이터(Figma, 이미지 에셋)가 오면 채워 넣어야 합니다.
 * 이미지는 public/apt/jeonju-artiem-laterrace/ 폴더에 아직 없으므로 반드시 추가해야 합니다.
 */

const config = {
  slug:        "jeonju-artiem-laterrace",
  subdomain:   "아르티엠라테라스",
  projectName: "전주아르티엠라테라스",
  shortName:   "전주 아르티엠 라테라스",
  telNumber:   "063-226-7000",
  ogImage:     "/apt/jeonju-artiem-laterrace/share_img.webp", // TODO: 실제 OG 이미지로 교체
  adminPhones:  ["01027085600"],
  sheetId:      "",
  sheetTab:     "전주아르티엠라테라스",
  kakao:        true, // 카카오 알림톡 발송 — 템플릿ID 미설정 시 SMS로 자동 폴백

  popup: {
    enabled: true,
    image: {
      src: "/apt/jeonju-artiem-laterrace/popup.webp",
      alt: "전주 아르티엠 라테라스 팝업",
    },
  },

  clientCompany: {
    name:      "리더스 공인중개사사무소",
    bizNumber: "884-41-00191",
    manager:   "이도경",
    email:     "true-dream@naver.com",
    leadLabel: "분양 상담 문의", // 기본값 "대표 분양 상담 문의" 대신 이 현장 전용 라벨
  },

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
    phone:     "1666-1755",
  },

  visitTimeOptions: [
    "10시 이전",
    "10:00 ~ 11:00",
    "11:00 ~ 12:00",
    "12:00 ~ 13:00",
    "13:00 ~ 14:00",
    "14:00 ~ 15:00",
    "15:00 ~ 16:00",
    "16:00 ~ 17:00",
    "17:00 ~ 18:00",
  ],

  hero: {
    eyebrow:       "특별공급｜선착순",
    eyebrowUrgent: 1,
    brand:         "전주 아르티엠 라 테라스",
    title:    "전주 아르티엠 라 테라스\n전주역 개발 최대 수혜지\n프라이빗 테라스와 스카이뷰까지",
    subtitle: "[선착순] 사전 청약 접수 시작",
    bgColor:  "#1e293b", // TODO: 히어로 이미지 스포이드로 추출한 배경색으로 교체
    image: {
      src:    "/apt/jeonju-artiem-laterrace/main.webp",
      alt:    "전주 아르티엠 라테라스 대표 이미지",
      width:  1125,
      height: 1923,
    },
  },

  // 히어로 바로 다음에 노출되는 4가지 특성화 세로 리스트 — 이 현장 전용(benefits 필드가 없으면 렌더링되지 않음)
  benefits: {
    eyebrow: "SPECIAL 4",
    brand:   "전주 아르티엠 라 테라스",
    title:   "특별한\n4가지 특성화",
    desc:    "전주 아르티엠 라 테라스만의 특별한 조건을 확인하세요.",
    bgImage: {
      src: "/apt/jeonju-artiem-laterrace/main.webp",
      alt: "전주 아르티엠 라테라스 대표 이미지",
    },
    items: [
      { num: "01", label: "씨티뷰\n전주역 복합도시" },
      { num: "02", label: "파크뷰\n도당산, 인후공원" },
      { num: "03", label: "내집안에\n넓은 테라스" },
      { num: "04", label: "스카이 브릿지\n피트니스" },
    ],
  },

  sections: [
    // 사업개요 — 이미지에서 확인된 스펙 데이터만 반영
    {
      id:       "overview",
      type:     "spec-only",
      navLabel: "사업개요",
      title:    "사업개요",
      specItems: [
        { label: "사업명",   value: "전주시 우아동3가 752-41번지 일원 주상복합 신축공사" },
        { label: "사업위치", value: "전북특별자치도 전주시 덕진구 우아동3가 752-41번지 일원" },
        { label: "건축면적", value: "5,267.4309㎡" },
        { label: "대지면적", value: "11,308.60㎡" },
        { label: "건축규모", value: "아파트(1층~4층, 5층~29층), 상가(지상2,28층)" },
        { label: "세대수",   value: "84㎡ A·B·C·D 타입 300세대" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      images: [
        { src: "/apt/jeonju-artiem-laterrace/2-1.webp", alt: "전주 아르티엠 라테라스 입지환경" },
      ],
    },
    {
      id:       "complex",
      type:     "image",
      navLabel: "단지안내",
      title:    "단지안내",
      images: [
        { src: "/apt/jeonju-artiem-laterrace/2-2.webp", alt: "전주 아르티엠 라테라스 단지안내" },
      ],
    },
    // TODO: 프리미엄/단지설계/커뮤니티/평면도 등 나머지 섹션은
    // 이미지·문구 데이터 확정 후 추가
  ],

  theme: {
    // ── 브랜드 컬러 ── 남색·하늘색 위주 팔레트
    // 다크: #1e293b(슬레이트 네이비) / 포인트: #1e3a5f(네이비)~#7ec8e3(하늘색)
    hero: {
      curtainColor: "#1e293b",
      imageFit:     "100% auto", // cover로 크롭하면 건물이 과하게 확대돼 보여, 원본 비율 그대로(가로 100%) 유지
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #1e3a5f, #7ec8e3)",
      width:      "40px",
      height:     "3px",
    },

    // 상단 고정 네비게이션 활성 메뉴
    TopNav_active: {
      color:       "#1e3a5f",
      borderColor: "#1e3a5f",
    },

    // 히어로 배지(eyebrow) — 남색
    eyebrow: {
      color:       "#1e3a5f",
      borderColor: "rgba(30, 58, 95, 0.5)",
    },

    // 히어로 메인 타이틀
    title: {
      color:    "#ffffff",
      fontSize: "clamp(1.8rem, 7vw, 2.8rem)",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgba(255,255,255,0.75)",
      fontSize: "1rem",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#1e293b",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "#1e3a5f",
      color:      "#ffffff",
      fontSize:   "1.15rem",
    },

    // 하단 고정 버튼바
    BottomBar_callBtn: {
      background: "#e2e8f0",
      color:      "#1e293b",
    },
    BottomBar_regBtn: {
      background: "#1e3a5f",
      color:      "#ffffff",
    },
  },

  privacyText: `본 분양사업과 관련된 상담을 수행하는 상담사 (이하 "개인정보처리자")는 아래와 같이 귀하의 개인정보를 수집, 이용하고자 합니다.
수집된 개인정보는 명시된 목적 외의 용도로 이용되지 않으며, 「개인정보 보호법」 등 관계 법령을 준수하여 안전하게 처리됩니다.

1. 개인정보의 처리 목적 : 전주 아르티엠 라테라스 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 전주 아르티엠 라테라스 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
