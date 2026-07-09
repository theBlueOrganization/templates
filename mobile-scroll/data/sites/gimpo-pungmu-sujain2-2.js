/**
 * 현장 슬러그: gimpo-pungmu-sujain2-2
 * URL: /apt/gimpo-pungmu-sujain2-2
 *
 * gimpo-pungmu-sujain2 복제본 — 대표번호·수신번호만 다름
 */

const config = {
  slug:        "gimpo-pungmu-sujain2-2",
  projectName: "풍무역세권 수자인 그라센트 2차",
  shortName:   "풍무역세권 수자인 그라센트 2차",
  telNumber:   "1800-2261",
  ogImage:     "/apt/gimpo-pungmu-sujain2/link_share_img.png",
  adminPhones:  ["01071901052","01090447402"],
  sheetId:      "",
  sheetTab:     "풍무역세권수자인그라센트2차_2",

  company: {
    name:      "주식회사 더블루파트너스",
    bizNumber: "789-81-03093",
    email:     "addup@addup.kr",
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
    eyebrow:       "더블역세권",
    eyebrowUrgent: 1,
    brand:         "풍무역세권 수자인 그라센트 2차",
    title:         "사우역, 풍무역\n더블 역세권\n 수자인 듀얼라이프",
    subtitle:      "분양가 상한제 적용 단지",
    bgColor:       "linear-gradient(to right, #587b91, #8da4b0, #b4c2c3)",
    accentKeyword: "더블 역세권",
    image: {
      src:    "/apt/gimpo-pungmu-sujain2/1.webp",
      alt:    "풍무역세권 수자인 그라센트 2차 대표 이미지",
      width:  800,
      height: 500,
    },
  },

  sections: [
    {
      id:       "overview",
      type:     "image-then-spec",
      navLabel: "사업개요",
      title:    "사업개요",
      subtitle: "입지·규모·특화설계를 한눈에",
      images: [
        { src: "/apt/gimpo-pungmu-sujain2/1-1.webp", alt: "사업개요" },
      ],
      specItems: [
        { label: "사업명",   value: "김포 풍무역세권 도시개발사업 B1 블럭 공동주택 신축공사" },
        { label: "대지위치", value: "김포 풍무역세권 도시개발 사업지구 B1 블럭" },
        { label: "대지면적", value: "35,672.40m² (10,790.90평)" },
        { label: "건축면적", value: "5,452.0606m² (1,649.25평)" },
        { label: "연면적",   value: "112,764.2580m² (34,111.19평)" },
        { label: "건폐율",   value: "15.98% (법정 60.00%)" },
        { label: "용적률",   value: "209.96% (법정 210.00%)" },
        { label: "건축규모", value: "지하 2층, 지상 28층 / 7개동" },
        { label: "세대수",   value: ["총 639세대"] },
        { label: "주차대수", value: "총 946대 （세대당 1.48대" },
        { label: "전용면적", value: "84㎡, 105㎡" },
      ],
    },
    {
      id:       "location",
      type:     "image",
      navLabel: "입지환경",
      title:    "입지환경",
      subtitle: "생활이 편리한 핵심 입지",
      images: [
        { src: "/apt/gimpo-pungmu-sujain2/1-2.webp", alt: "입지환경" },
      ],
    },
    {
      id:       "complexenvironment",
      type:     "image",
      navLabel: "단지환경",
      title:    "단지환경",
      subtitle: "녹지가 완성하는 주거공간",
      images: [
        { src: "/apt/gimpo-pungmu-sujain2/2-2.webp", alt: "단지환경" },
      ],
    },
    {
      id:       "community",
      type:     "image",
      navLabel: "커뮤니티",
      title:    "커뮤니티",
      subtitle: "삶의 질을 높여주는 주거공간",
      images: [
        { src: "/apt/gimpo-pungmu-sujain2/2-1.webp", alt: "커뮤니티" },
      ],
    },
    {
      id:       "premium",
      type:     "image",
      title:    "프리미엄",
      subtitle: "특별함이 일상이 되는 공간",
      images: [
        { src: "/apt/gimpo-pungmu-sujain2/3.webp", alt: "프리미엄" },
      ],
    },
  ],

  theme: {
    // ── 히어로 커튼 색상 ──
    hero: {
      curtainColor: "#1e293b",
    },

    // 섹션 헤더 구분선
    ImageSection_divider: {
      background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
      width:      "40px",
      height:     "3px",
    },

    // 히어로 배지 (eyebrow)
    eyebrow: {
      color:       "#7ec8e3",
      borderColor: "rgba(126,200,227,0.45)",
      fontSize:    "1rem",
    },
    // 긴급 배지 (eyebrowUrgent)
    eyebrowUrgent: {
      color:       "#ff6b6b",
      borderColor: "rgba(255,107,107,0.5)",
    },

    // 히어로 브랜드명
    brand: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },
    // 히어로 메인 타이틀
    title: {
      color:       "#ffffff",
      fontSize:    "clamp(2.3rem,8vw,3rem)",
      accentColor: "#f5c445",
    },
    // 히어로 서브타이틀
    subtitle: {
      color:    "rgb(255, 255, 255)",
      fontSize: "1rem",
    },

    // 상담 신청 섹션 배경
    contactSection: {
      background: "#1e293b",
    },
    // 상담 신청 버튼
    ContactForm_submitBtn: {
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
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

1. 개인정보의 처리 목적 : 풍무역세권 수자인 그라센트 2차 분양 관련 정보 제공, 분양 상담 진행 및 고객 문의 응대
2. 처리하는 개인정보의 항목 : 성명, 휴대전화번호
3. 개인정보의 처리 및 보유 기간 : 풍무역세권 수자인 그라센트 2차 분양 완료 시까지
4. 동의 거부 권리 및 거부 시 불이익 : 동의를 거부할 경우 관심고객 등록이 불가합니다.
5. 개인정보 처리 위탁 : 홈페이지 운영·관리 대행사 주식회사 더블루파트너스 (addup@addup.kr)`,
};

export default config;
