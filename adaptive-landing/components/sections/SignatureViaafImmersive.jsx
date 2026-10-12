'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './SignatureTiamoImmersive.module.css'

// 영종국제도시 신일 비아프 크레스트 전용 풀페이지 몰입형 랜딩 — 요청 반영(2026-10-11): "까사 현장 템플릿이랑 비슷하게".
// 청라 더리브 티아모 까사(SignatureTiamoImmersive)의 패널 흐름(인트로 → 히어로 → 사업개요 → 방문예약 → 핵심가치 →
// 교통 → 입지 → 유니트 → 단지설계 → 프리미엄 5 → 가로 캐러셀 → 상담 → 푸터)·인터랙션·CSS 모듈을 그대로 쓰고
// 콘텐츠/이미지만 비아프 크레스트 것으로 교체했다. app/apt/[slug]/page.jsx에서 sig.viaafImmersive로 분기.
//
// 까사와 다른 점(콘텐츠가 달라서 생긴 차이만):
//   - 포인트 색: 루트에 --lime/--cta-gradient를 VIAAF 워드마크 웜그레이 톤으로 덮어씀(레이아웃·모션은 동일)
//   - 견본세대 인테리어 캐러셀 → 공식 사이트 입지 8가지(PANORAMA VIEW~NATURE) 세로 이미지컷 캐러셀
//   - 진입 안내 팝업 이미지가 없어(공식 팝업은 320px 저화질) 인트로가 끝나면 방문예약 다이얼로그를 띄움
//   - 푸터 시행/시공 로고 대신 텍스트(시행 한국토지신탁 · 시공 ㈜신일 — 공식 사이트 푸터 기준)
// 이미지: hr-hero-1/2·hero-m-1/2·envi-1~8은 공식 사이트(신일비아프크레스트.com) 원본(1920~2138px / 480x970),
//   premium-split·hero-2·hero-m-3·overview-photo·unit-*는 영업사원 교육자료 PDF(26.01.20) 크롭.
//   special-*는 공식 사이트 단지설계(plan.jpg), location-map은 공식 사이트 입지환경(environment_view.jpg 2773px) 원본.
// 문구 출처: 공식 사이트 메인(인천대교 건너, 첫 집을 만나다 / 입지 8가지 / 브랜드 소개 / 단지설계) + 교육자료 사업개요·프리미엄.

const ASSET = (name) => `/apt/yeongjong-shinil-viaaf-crest/${name}`

const NAV_ITEMS = [
  { id: 'traffic', label: '핵심가치', num: '01', code: 'VALUE' },
  { id: 'location', label: '입지환경', num: '02', code: 'LOCATION' },
  { id: 'brand', label: '사업개요', num: '03', code: 'OVERVIEW' },
  { id: 'premium', label: '프리미엄', num: '04', code: 'PREMIUM' },
  { id: 'unit', label: '유니트', num: '05', code: 'UNIT' },
  { id: 'community', label: '단지설계', num: '06', code: 'GARDEN' },
  { id: 'contact', label: '방문예약', num: '07', code: 'CONTACT' },
]

const PANEL_ORDER = [
  'hero', 'brand', 'visit', 'traffic', 'nature', 'skybridge', 'vision', 'network',
  'location', 'unit', 'community', 'premium', 'design', 'contact', 'footer',
]

const TONE = {
  brand: 'toneA', visit: 'toneB', traffic: 'toneC', nature: 'toneB', skybridge: 'toneC', vision: 'toneA',
  network: 'toneC', location: 'toneB', unit: 'toneA', community: 'toneC',
  premium: 'toneA', design: 'toneB', contact: 'toneA',
}

const MOTION = {
  hero: 'motionScale', brand: 'motionLeft', visit: 'motionClip', traffic: 'motionScale',
  nature: 'motionSoft', skybridge: 'motionClip', vision: 'motionLeft', network: 'motionClip', location: 'motionScale',
  unit: 'motionSoft', community: 'motionClip', premium: 'motionScale',
  design: 'motionSoft', contact: 'motionLeft', footer: 'motionSoft',
}

// 공식 사이트 메인 비주얼 2장 + 교육자료 p4 투시도. 모바일은 하늘이 넉넉한 세로컷(hero-1-m/2-m) + hero-m-3.
// title — 슬라이드마다 사진에 맞는 문구(2026-10-12 요청, PC·모바일 공통). 1·2는 공식 사이트 비주얼 문구 그대로,
//   3(노을 진 서해 조감도)은 공식 비주얼에 없는 컷이라 이 페이지의 '서해를 품은 총 960세대' 문구 사용
const HERO_SLIDES = [
  { img: 'hr-hero-1.webp', imgMobile: 'hero-1-m.webp', title: ['인천대교 건너,', '첫 집을 만나다.'], alt: '인천대교와 신일 비아프 크레스트 투시도' },
  { img: 'hr-hero-2.webp', imgMobile: 'hero-2-m.webp', title: ['영종이 기다려온', '압도적 새중심!'], alt: '서해바다와 인천대교를 품은 신일 비아프 크레스트 조감도' },
  { img: 'premium-split.webp', imgMobile: 'hero-m-3.webp', title: ['서해를 품은', '총 960세대'], alt: '서해를 품은 신일 비아프 크레스트 투시도·조감도' },
]

// 출처: 공식 사이트 입지 8가지(TRAFFIC·PANORAMA VIEW·EDUCATION·NEW CENTRAL·INNOVATION) + 교육자료 p26·p33~41
// 패널 id(traffic/nature/skybridge/vision)는 까사와 같은 PANEL_ORDER를 쓰기 위해 그대로 둠
const LANDMARKS = [
  {
    id: 'traffic', eyebrow: 'TRAFFIC', titleTop: '청라하늘대교 개통,', titleBottom: '서울이 가까워지다',
    desc: '영종대교·인천대교에 청라하늘대교까지, 서울 접근성을 높이는 광역 교통망.', img: 'hr-hero-1.webp', imgAlt: '인천대교와 신일 비아프 크레스트 투시도',
    points: [
      ['청라하늘대교 개통', '비아프 ↔ 청라 약 10분, 여의도 약 30분, 강남권 약 50분(차량 기준)'],
      ['인천대교 통행료 인하', '5,500원 → 2,000원(12월 18일부터 시행), 청라하늘대교 지역주민 통행료 무료'],
    ],
    objectPosition: '62% center',
  },
  {
    id: 'nature', eyebrow: 'PANORAMA VIEW', titleTop: '인천대교에서 송도까지,', titleBottom: '탁 트인 서해를 품다',
    desc: '씨사이드파크 뷰와 함께 누리는 특급 전망(일부 세대).', img: 'hr-hero-2.webp', imgAlt: '서해바다와 인천대교를 품은 조감도',
    points: [
      ['서해바다 오션뷰', '서해바다 직선거리 약 400m, 인천대교에서 송도까지 탁 트인 특급 전망(일부 세대)'],
      ['씨사이드파크 · 백운산', '바다와 맞닿은 씨사이드파크와 백운산의 자연을 가깝게 누릴 힐링 라이프'],
    ],
    objectPosition: '30% center',
  },
  {
    id: 'skybridge', eyebrow: 'EDUCATION · NEW CENTRAL', titleTop: '초등학교를 품고,', titleBottom: '행정타운의 중심에 서다',
    desc: '단지 바로 앞 초등학교(계획)부터 영종구청(계획)까지, 영종의 새 중심.', img: 'overview-photo.webp', imgAlt: '신일 비아프 크레스트 1·2단지 투시도',
    points: [
      ['영종 명문학군의 최중심', '초등학교(계획)를 품은 단지로 인천하늘고, 과학고, 국제고 등 명문학군 인접'],
      ['행정타운(계획)의 중심가치', '26년 7월 영종구 출범, 영종구청(계획)·경찰서(계획)·일반상업시설·터미널(계획) 인접'],
    ],
    objectPosition: '50% center',
  },
  {
    id: 'vision', eyebrow: 'INNOVATION', titleTop: '정교한 세련됨으로', titleBottom: '삶의 격을 높이다',
    desc: '총 960세대, 남향 위주 배치와 판상형 4BAY(일부 제외) 설계.', img: 'premium-split.webp', imgAlt: '신일 비아프 크레스트 투시도',
    points: [
      ['일상의 편의와 공간의 품격', '세대당 1.5대 주차, 남향 위주 배치, 약 95% 이상 판상형 설계'],
      ['안심·쾌적 특화설계', '층상배관, 층간소음저감(경량 1등급·중량 2등급), 준불연소재문, 확장형 주차 약 50%'],
    ],
    objectPosition: '75% center',
  },
]

// 출처: 교육자료 p25~27·p46~48 — 청라하늘대교·인천대교·영종대교, 공항철도, GTX-D·E(계획)·영종트램(계획)
const ROUTES = [
  { key: 'skybridge', color: '#d9534f', label: '청라하늘대교', desc: '청라 약 10분 · 여의도 약 30분' },
  { key: 'incheon', color: '#d98c4a', label: '인천대교', desc: '통행료 5,500원 → 2,000원 인하' },
  { key: 'yeongjong', color: '#e2c36a', label: '영종대교', desc: '인천국제공항고속도로 연결' },
  { key: 'airport', color: '#4f8fd6', label: '공항철도', desc: '운서역 이용' },
  { key: 'future', color: '#b07cd8', label: 'GTX-D·E · 트램', desc: '광역급행철도·영종트램(계획)' },
]

// 출처: 교육자료 p19~23 평면·면적(공급면적은 1단지~2단지 값), 세대수는 공식 사이트 평면 안내
const UNIT_TABS = [
  { key: '84A', label: 'FAMILY UNIT', name: '판상형 4BAY', desc: '전용 84.9770㎡ · 공급 110.6672~110.6706㎡', features: ['741세대', '11형 주방', '드레스룸·팬트리'], img: 'unit-84a.webp' },
  { key: '84B', label: 'FAMILY UNIT', name: '알파룸 특화', desc: '전용 84.9081㎡ · 공급 111.1213~111.1246㎡', features: ['40세대', '알파룸', '드레스룸'], img: 'unit-84b.webp' },
  { key: '84C', label: 'FAMILY UNIT', name: '판상형 설계', desc: '전용 84.8156㎡ · 공급 111.4767~111.4800㎡', features: ['74세대', '복도 팬트리', '드레스룸'], img: 'unit-84c.webp' },
  { key: '84D', label: 'FAMILY UNIT', name: '알파룸 특화', desc: '전용 84.6387㎡ · 공급 110.4859~110.4892㎡', features: ['40세대', '알파룸', '드레스룸'], img: 'unit-84d.webp' },
  { key: '114', label: 'PREMIUM UNIT', name: '대형 평면', desc: '전용 114.2778㎡ · 공급 148.1545㎡', features: ['65세대(2단지)', '11자형 주방', '건식세면대'], img: 'unit-114.webp' },
]

// 출처: 공식 사이트 단지설계(LIFE PLAN Garden) — 교육자료 p8 크롭(공식 사이트 원본보다 해상도가 높음)
const COMMUNITY_CARDS = [
  { img: 'special-gate.webp', alt: '1단지 문주 투시도', label: '1단지 문주' },
  { img: 'special-plaza.webp', alt: '2단지 중앙광장 투시도', label: '2단지 중앙광장' },
  { img: 'special-water1.webp', alt: '1단지 수경시설 투시도', label: '1단지 수경시설' },
]

// 출처: 교육자료 06 프리미엄 + 공식 사이트 입지 원문
const PREMIUM_SLIDES = [
  { num: '01', img: 'hr-hero-1.webp', alt: '인천대교와 단지 투시도', title: '청라하늘대교 광역 생활권', desc: '청라 약 10분, 여의도 약 30분, 강남권 약 50분 — 영종·청라·송도를 잇는 원스톱 생활권' },
  { num: '02', img: 'hr-hero-2.webp', alt: '서해바다 조감도', title: '서해바다 파노라마 뷰', desc: '씨사이드파크 뷰와 함께 인천대교에서 송도까지 탁 트인 특급 전망(일부 세대)' },
  { num: '03', img: 'overview-photo.webp', alt: '1·2단지 투시도', title: '초품아 명문학군', desc: '단지 바로 앞 초등학교(계획)부터 인천하늘고·과학고·국제고까지 영종 명문학군의 최중심' },
  { num: '04', img: 'hero-2.webp', alt: '영종국제도시 야경 조감도', title: '영종 미래가치의 중심', desc: '행정타운(계획), 항공일반산단·항공AI혁신허브(예정), 공항 5단계 확장 등 초대형 비전' },
  { num: '05', img: 'premium-split.webp', alt: '노을 진 서해와 단지 투시도', title: '총 960세대 VIAAF', desc: '세대당 1.5대 주차, 약 95% 이상 판상형, 층간소음저감·준불연문 등 특화설계' },
]

// 입지환경 지도 아래 유의사항 — 공식 사이트 입지환경(environment.html) page_info 원문(띄어쓰기 깨진 곳만 보정)
const LOCATION_NOTES = [
  '본 홈페이지에 표기된 지역명소와 생활인프라 및 각종 교통시설의 거리, 이동시간은 다음과 같습니다 (네이버지도 직선거리, 주행시간) 영종IC 1.2km 차량 4분, 운서초 954m 도보 14분, 씨사이드파크 615m 도보 9분, 롯데마트 3km 차량 10분, 메가박스 2.4km 차량 8분, 제3유보지 2.0km 차량 7분, 영종복합문화센터 1.1km 도보 15분, 백운산 1km 도보 15분, 영종대교 5.4km 차량 10분, 인천대교 900m 차량 2분, 인천하늘고 2.3km 차량 5분, 과학고 1.9km 차량 4분, 국제고 1.7km 차량 4분 행정타운, 청라하늘대교 등 계획은 인천국제공항 5단계(계획)(\'25.07.22일 경향신문 기사 기준) 제2공항철도(계획)(\'25.08.07일 헤럴드경제기사 기준) 행정타운(계획)(25.02.18일 인천광역시청 보도자료 기준) 청라하늘대교(26년1월 개통)(25.11.11일 인천광역시경제자유구역청 보도자료 기준) GTX D,E(계획)(24.01.25일 인천광역시청 보도자료 기준) 초등학교(계획)(인천광역시교육청-신설학교추진현황 기준, 주소:중구 운남동 1696-2) 영종구청(계획), 경찰서(계획)(25.03.05일 인천투데이 기사 기준) 바이오특화단지(계획)(25.11.10일 인천광역시 보도자료 기준)',
  '본 홈페이지에 사용한 CG, 일러스트 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작, 또는 표기된 것으로 실제와 차이가 있을 수 있습니다.',
]
// 출처: 공식 사이트 메인 입지 8가지(main-section-envi) 원문 줄바꿈 그대로 + 세로 이미지컷(envi-bg-01~08).
// 카드 위쪽 하늘 여백에 영문 세리프 타이틀 + 3줄 문구(공식 사이트 EDUCATION 카드 느낌, 2026-10-12 요청).
// VISION은 원문에 다른 카드 문구가 잘못 붙어 있어("…프리미엄인천대교에서 송도까지…") 앞 3줄만 사용
const DESIGN_ITEMS = [
  { img: 'envi-1.webp', title: 'PANORAMA VIEW', lines: ['씨사이드파크 뷰와 함께', '인천대교에서 송도까지', '탁 트인 특급전망(일부세대)'] },
  { img: 'envi-2.webp', title: 'VISION', lines: ['약 1.5km 거리 바이오특화단지(계획) 외', '인천국제공항 5단계 확장 및 제2공항철도(계획)로', '이어진 초대형 비전 프리미엄'] },
  { img: 'envi-3.webp', title: 'EDUCATION', lines: ['초등학교를 품은 단지로', '인천하늘고, 과학고, 국제고 등', '영종 명문학군의 최중심'] },
  { img: 'envi-4.webp', title: 'LIFE', lines: ['걸어서 누리는', '상업시설(계획) 및', '영종복합문화센터'] },
  { img: 'envi-5.webp', title: 'NEW CENTRAL', lines: ['영종구청(계획), 경찰서(계획),', '일반상업시설, 터미널(계획) 등', '기대되는 행정타운(계획)의 중심가치'] },
  { img: 'envi-6.webp', title: 'TRAFFIC', lines: ['영종대교와 인천대교 외', '청라하늘대교(26년 1월 개통)를 통해 기대되는', '서울접근성의 광역교통망'] },
  { img: 'envi-7.webp', title: 'INNOVATION', lines: ['세대당 1.5대 주차, 남향 위주 배치,', '판상형 4BAY(일부 제외)로', '일상의 편의와 공간의 품격을 동시에'] },
  { img: 'envi-8.webp', title: 'NATURE', lines: ['백운산과 씨사이드파크의', '자연을 가깝게 누릴', '힐링 라이프'] },
]

// 출처: 교육자료 p7 사업개요 + 공식 사이트 사업개요 표(단지별 대지면적·규모·공급예정 주택, 2026-10-12 반영 — 연면적·주차대수는 요청으로 뺌)
const BRAND_STATS = [
  { label: '총 세대수', value: '960세대', sub: '1단지 444세대 · 2단지 516세대' },
  { label: '규모', value: '최고 21층', sub: '1단지 지하2층~최고21층 5개동 · 2단지 지하2층~최고20층 6개동 및 부대복리시설' },
  { label: '대지면적', value: '1단지 27,771.1㎡', sub: '2단지 37,772.7㎡' },
  { label: '공급예정 주택', value: '84㎡ · 114㎡', sub: '1단지 84㎡형(4개 타입) · 2단지 84㎡형(4개 타입), 114㎡형(1개 타입)' },
]
const BRAND_WIDE = { label: '대지위치', value: '인천광역시 중구 운남동', sub: '1단지(A19BL) 1695-2번지 · 2단지(A20BL) 1696-1번지 일원' }
const BRAND_WORDS = [
  { letter: 'VIA', copy: ['행복을 찾아가는', '여정'] },
  { letter: 'AF', copy: ['Felicity · Fineness', '정교한 세련됨'] },
  { letter: '960', copy: ['영종국제도시', '대규모 단지'] },
]

const REQUEST_CHECKS = ['타입별 평면도', '분양가격', '계약조건', '분양일정']
const CONSULT_CHECKS = ['방문예약', '견본주택 위치 전송', '기타문의']

const PREMIUM_LAST = PREMIUM_SLIDES.length - 1
const TRANSITION_MS = 520

export default function SignatureViaafImmersive({ site }) {
  const sig = site.signature
  const telNumber = site.telNumber
  const utmSource = useUtmSource() ?? '직접유입'
  const resolvedAdminPhones = site.adminPhonesByUtm?.[utmSource] ?? site.adminPhones

  const [index, setIndex] = useState(0)
  const [introDone, setIntroDone] = useState(false)
  const [introReady, setIntroReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const [premiumIndex, setPremiumIndex] = useState(0)
  const [unitKey, setUnitKey] = useState(UNIT_TABS[0].key)
  const [zoomImage, setZoomImage] = useState(null)
  const [faqIndex, setFaqIndex] = useState(0)
  const [toast, setToast] = useState('')

  const viewportRef = useRef(null)
  const visitDialogRef = useRef(null)
  const zoomDialogRef = useRef(null)
  const infoDialogRef = useRef(null)
  const faqDialogRef = useRef(null)
  const openDialogCountRef = useRef(0)

  const transitioningRef = useRef(false)
  const wheelRef = useRef({ sum: 0, dir: 0, consumed: false, lastAt: 0 })
  const touchRef = useRef({ x: 0, y: 0, blocked: false })
  const idleTimerRef = useRef(null)

  const designTrackRef = useRef(null)
  const designViewportRef = useRef(null)
  const designStateRef = useRef({ x: 0, dragging: false, startX: 0, baseX: 0, lastT: 0, half: 0, raf: 0 })

  const activePanelId = PANEL_ORDER[index]

  // 풀페이지 락 — 이 페이지가 떠 있는 동안만 body 스크롤을 잠그고, 언마운트 시 원복
  useEffect(() => {
    document.documentElement.classList.add(styles.lockScroll)
    document.body.classList.add(styles.lockScroll)
    return () => {
      document.documentElement.classList.remove(styles.lockScroll)
      document.body.classList.remove(styles.lockScroll)
    }
  }, [])

  // 인트로 시퀀스 — 감속 모션 선호 시 즉시 건너뜀. 첫 페인트 다음 프레임에 .ready를 붙여 CSS 애니메이션을 시작하고 5.6초 뒤 종료
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntroDone(true)
      return
    }
    const raf = requestAnimationFrame(() => setIntroReady(true))
    const t = setTimeout(() => setIntroDone(true), 5600)
    return () => { cancelAnimationFrame(raf); clearTimeout(t) }
  }, [])

  // 히어로 CG 3장 크로스페이드(아크원의 히어로 영상 자리) — 히어로 패널이 보일 때만 돌림
  useEffect(() => {
    if (activePanelId !== 'hero') return
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [activePanelId])

  // 인트로가 끝나면(0.7초 후) 방문예약 다이얼로그를 띄움 — 안내 팝업 이미지가 없어 까사의 noticeOpen 팝업 대신
  useEffect(() => {
    if (!introDone) return
    const t = setTimeout(() => openDialog(visitDialogRef), 700)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introDone])

  const blockingOverlay = () => openDialogCountRef.current > 0

  const setPanels = (next) => {
    const clamped = Math.max(0, Math.min(PANEL_ORDER.length - 1, next))
    if (PANEL_ORDER[clamped] === 'premium' && PANEL_ORDER[index] !== 'premium') {
      setPremiumIndex(index > clamped ? PREMIUM_LAST : 0)
    }
    setIndex(clamped)
  }

  const lock = () => {
    transitioningRef.current = true
    setTimeout(() => {
      transitioningRef.current = false
      wheelRef.current.sum = 0
      wheelRef.current.dir = 0
    }, TRANSITION_MS + 90)
  }

  const move = (dir) => {
    if (transitioningRef.current || blockingOverlay() || !introDone) return false
    if (activePanelId === 'premium') {
      if (dir > 0 && premiumIndex < PREMIUM_LAST) { setPremiumIndex((p) => p + 1); lock(); return true }
      if (dir < 0 && premiumIndex > 0) { setPremiumIndex((p) => p - 1); lock(); return true }
    }
    const next = index + dir
    if (next < 0 || next >= PANEL_ORDER.length) return false
    lock()
    setPanels(next)
    return true
  }

  const navigateTo = (targetId) => {
    const target = PANEL_ORDER.indexOf(targetId)
    if (target < 0 || transitioningRef.current || target === index) return
    lock()
    setPanels(target)
  }

  // 휠/터치로 패널 전환 — 트랙패드 관성 스크롤을 걸러내기 위한 누적 임계값 방식
  useEffect(() => {
    const onWheel = (e) => {
      if (blockingOverlay() || !introDone) { e.preventDefault(); return }
      if (e.target.closest('dialog,.' + styles.mobileMenu + ',.' + styles.contactPanel + ',.' + styles.locationNotes)) return
      e.preventDefault()
      const w = wheelRef.current
      const now = performance.now()
      if (now - w.lastAt > 240) { w.sum = 0; w.dir = 0; w.consumed = false }
      w.lastAt = now
      clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => { w.sum = 0; w.dir = 0; w.consumed = false }, 260)
      if (transitioningRef.current || w.consumed) return
      const scaled = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1)
      const dir = Math.sign(scaled)
      if (!dir) return
      if (dir !== w.dir) { w.sum = 0; w.dir = dir }
      w.sum += Math.abs(scaled)
      const threshold = window.innerHeight * 0.15
      if (w.sum >= threshold) { w.consumed = true; w.sum = 0; move(dir) }
    }
    const onTouchStart = (e) => {
      touchRef.current.blocked = !!e.target.closest('dialog,.' + styles.mobileMenu + ',.' + styles.contactPanel + ',.' + styles.locationNotes)
      if (touchRef.current.blocked || e.touches.length !== 1) return
      touchRef.current.y = e.touches[0].clientY
      touchRef.current.x = e.touches[0].clientX
    }
    const onTouchMove = (e) => { if (!touchRef.current.blocked) e.preventDefault() }
    const onTouchEnd = (e) => {
      if (touchRef.current.blocked) { touchRef.current.blocked = false; return }
      if (blockingOverlay() || !introDone || transitioningRef.current || !e.changedTouches[0]) return
      const dy = touchRef.current.y - e.changedTouches[0].clientY
      const dx = touchRef.current.x - e.changedTouches[0].clientX
      const threshold = window.innerHeight * 0.15
      if (Math.abs(dy) < threshold || Math.abs(dy) < Math.abs(dx) * 1.2) return
      move(Math.sign(dy))
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, introDone, premiumIndex])

  // 인테리어 캐러셀 자동 스크롤 + 드래그(아크원 연혁 타임라인과 동일 로직)
  useEffect(() => {
    const track = designTrackRef.current
    const vp = designViewportRef.current
    if (!track || !vp) return
    const st = designStateRef.current
    const measure = () => { st.half = track.scrollWidth / 2 }
    measure()
    window.addEventListener('resize', measure)

    const loop = (t) => {
      if (activePanelId !== 'design' || document.visibilityState !== 'visible') { st.raf = 0; return }
      const dt = Math.min(32, t - st.lastT)
      st.lastT = t
      if (!st.dragging) {
        st.x -= dt * (window.innerWidth < 768 ? 0.038 : 0.032)
        if (-st.x >= st.half) st.x += st.half
      }
      track.style.transform = `translate3d(${st.x}px,0,0)`
      st.raf = requestAnimationFrame(loop)
    }
    const sync = () => {
      const should = activePanelId === 'design' && document.visibilityState === 'visible'
      if (should && !st.raf) { st.lastT = performance.now(); st.raf = requestAnimationFrame(loop) }
      else if (!should && st.raf) { cancelAnimationFrame(st.raf); st.raf = 0 }
    }
    sync()
    document.addEventListener('visibilitychange', sync)
    const onDown = (e) => { st.dragging = true; st.startX = e.clientX; st.baseX = st.x; vp.setPointerCapture(e.pointerId) }
    const onMove = (e) => { if (st.dragging) st.x = st.baseX + e.clientX - st.startX }
    const onUp = () => { st.dragging = false }
    vp.addEventListener('pointerdown', onDown)
    vp.addEventListener('pointermove', onMove)
    vp.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('resize', measure)
      document.removeEventListener('visibilitychange', sync)
      vp.removeEventListener('pointerdown', onDown)
      vp.removeEventListener('pointermove', onMove)
      vp.removeEventListener('pointerup', onUp)
      if (st.raf) cancelAnimationFrame(st.raf)
    }
  }, [activePanelId])

  const openDialog = (ref) => {
    setMenuOpen(false)
    openDialogCountRef.current += 1
    ref.current?.showModal()
  }
  const closeDialog = (ref) => {
    ref.current?.close()
    openDialogCountRef.current = Math.max(0, openDialogCountRef.current - 1)
  }

  const openZoom = (image) => {
    setZoomImage(image)
    openDialog(zoomDialogRef)
  }

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2200)
  }

  const submitLead = async (kind, form) => {
    const fd = new FormData(form)
    const name = fd.get('name')?.toString().trim() ?? ''
    const phone = ['phone1', 'phone2', 'phone3'].map((k) => fd.get(k)?.toString() ?? '').join('-')
    const privacyAgree = fd.get('privacy_agree') === 'on'
    if (!privacyAgree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.')
      return false
    }
    const checkboxLabels = kind === 'visit' ? CONSULT_CHECKS : REQUEST_CHECKS
    const serviceType = checkboxLabels.filter((label) => fd.get(label) === 'on').join(', ') || (kind === 'visit' ? '방문예약' : '자료요청')
    const payload = {
      name,
      phone,
      visit_date: fd.get('visit_date')?.toString() ?? '',
      visit_time: fd.get('visit_time')?.toString() ?? '',
      privacy_agree: privacyAgree,
      serviceType,
      projectName: site.projectName,
      adminPhones: resolvedAdminPhones,
      adminPhoneNames: site.adminPhoneNames,
      smsMediaLabel: site.smsMediaLabel,
      sheetId: site.sheetId,
      sheetTab: site.sheetTab,
      utmSource,
      showUtmInSms: site.showUtmInSms,
      slug: site.slug,
    }
    try {
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        showToast(`${kind === 'visit' ? '방문예약' : '자료요청'}이 접수되었습니다.`)
        form.reset()
        return true
      }
      alert(data.message ?? '오류가 발생했습니다. 다시 시도해주세요.')
    } catch {
      alert('전송에 실패했습니다. 네트워크 상태를 확인해 주세요.')
    }
    return false
  }

  const panelClass = (id) => {
    const pos = PANEL_ORDER.indexOf(id)
    return cn(
      styles.panel,
      id !== 'hero' && id !== 'footer' && styles[TONE[id]],
      styles[MOTION[id]],
      pos === index && styles.isActive,
      pos < index && styles.isBefore,
      pos > index && styles.isAfter,
    )
  }

  const unit = UNIT_TABS.find((u) => u.key === unitKey)
  const mapImage = { src: ASSET('location-map.webp'), alt: '신일 비아프 크레스트 광역 위치도 확대' }

  return (
    <div className={cn(styles.root, styles.themeIce)}>
      {!introDone && <IntroOverlay onSkip={() => setIntroDone(true)} ready={introReady} />}

      <header className={styles.siteHeader}>
        <div className={styles.headerLeft}>
          <button type="button" className={styles.headerLogo} style={LOGO_BOX} onClick={() => navigateTo('hero')} aria-label="맨 위로">
            <Image src={ASSET('logo-white.png')} alt="VIAAF 신일 비아프 크레스트" width={LOGO_BOX.width} height={LOGO_BOX.height} />
          </button>
        </div>
        <nav className={styles.headerMenu} aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} type="button" onClick={() => navigateTo(item.id)}>{item.label}</button>
          ))}
        </nav>
        <div className={styles.headerRight}>
          <a className={styles.headerPhone} href={`tel:${telNumber}`}>{telNumber}</a>
          <button type="button" className={styles.headerVisit} onClick={() => openDialog(visitDialogRef)}>방문예약 ↗</button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i />
          </button>
        </div>
      </header>

      <nav className={cn(styles.mobileMenu, menuOpen && styles.isOpen)} aria-label="모바일 메뉴">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} type="button" onClick={() => { navigateTo(item.id); setMenuOpen(false) }}>{item.label}</button>
        ))}
        <button type="button" onClick={() => openDialog(visitDialogRef)}>방문예약 신청</button>
      </nav>

      <main className={styles.viewport} ref={viewportRef}>
        {/* 히어로 */}
        <section className={cn(panelClass('hero'), styles.hero)} id="hero">
          {HERO_SLIDES.map((s, i) => (
            <picture key={s.img}>
              <source media="(max-width: 767px)" srcSet={ASSET(s.imgMobile)} />
              <img
                className={styles.heroVideo}
                src={ASSET(s.img)}
                alt={s.alt}
                style={{ opacity: i === heroIndex ? 1 : 0, transition: 'opacity 1.2s ease' }}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          ))}
          <div className={cn(styles.heroOne, styles.heroOneWord)} aria-hidden="true">VIAAF</div>
          <div className={styles.capBadge}><div><b>분양가 상한제<br />적용 단지</b></div></div>
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>영종국제도시 · 신일 비아프 크레스트</p>
              {/* 슬라이드별 문구를 한 칸에 겹쳐 두고 현재 슬라이드 것만 보이게(높이 고정, 레이아웃 흔들림 없음) */}
              <h1 className={cn(styles.sectionTitle, styles.heroTitleStack)}>
                {HERO_SLIDES.map((s, i) => (
                  <span key={s.img} className={cn(styles.heroTitleSlide, i === heroIndex && styles.isOn)} aria-hidden={i !== heroIndex}>
                    {s.title[0]}<br /><span className={styles.gradientText}>{s.title[1]}</span>
                  </span>
                ))}
              </h1>
              <p className={styles.sectionDesc}>YEONGJONG SHINIL VIAAF CREST</p>
            </header>
          </div>
          <div className={styles.scrollCue}><i /><span>SCROLL</span></div>
        </section>

        {/* 사업개요 */}
        <section className={panelClass('brand')} id="brand">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>사업개요</p>
              <h2 className={styles.sectionTitle}>영종이 기다려온{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>압도적 새중심</span></h2>
              <p className={styles.sectionDesc}>1단지(A19BL) 444세대 · 2단지(A20BL) 516세대,<br className={styles.titleBreak} /> 84㎡·114㎡ 총 960세대 대규모 단지.</p>
            </header>
            <div className={styles.brandLayout}>
              <dl className={styles.brandOverview}>
                {BRAND_STATS.map((s) => (
                  <div key={s.label}><dt>{s.label}</dt><dd>{s.value}<small>{s.sub}</small></dd></div>
                ))}
                <div className={styles.wide}><dt>{BRAND_WIDE.label}</dt><dd>{BRAND_WIDE.value}<small>{BRAND_WIDE.sub}</small></dd></div>
              </dl>
              <div className={styles.brandWords}>
                {BRAND_WORDS.map((w) => (
                  <article key={w.letter}><b>{w.letter}</b><span>{w.copy[0]}<br />{w.copy[1]}</span></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 방문예약 티저 */}
        <section className={panelClass('visit')} id="visit">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>방문예약</p>
              <h2 className={styles.sectionTitle}>기다림 없이{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>여유로운 상담</span></h2>
              <p className={styles.sectionDesc}>방문 희망일과 시간을 먼저 선택하면 전담 상담사가 일정 확인 후 안내드립니다.</p>
            </header>
            <div className={styles.visual}>
              <Image src={ASSET('premium-split.webp')} alt="신일 비아프 크레스트 투시도" fill sizes="100vw" style={{ objectPosition: '75% center' }} />
              <div className={styles.visitCard}>
                <h3>100% 담당제</h3>
                <p>예약하시면 담당자가 배정되어 즉시 연락드립니다.</p>
                <div className={styles.visitHours}>
                  <div><small>상담 가능시간</small><strong>10:00~18:00</strong></div>
                  <button type="button" onClick={() => openDialog(visitDialogRef)}>방문예약</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 핵심가치 4종 — 교통·수변·스카이브릿지·미래가치 */}
        {LANDMARKS.map((lm) => (
          <section key={lm.id} className={cn(panelClass(lm.id), styles.landmark)} id={lm.id}>
            <div className={styles.sectionShell}>
              <header className={styles.sectionHead}>
                <p className={styles.eyebrow}>{lm.eyebrow}</p>
                <h2 className={styles.sectionTitle}><span className={styles.gradientText}>{lm.titleTop}</span><br />{lm.titleBottom}</h2>
                <p className={styles.sectionDesc}>{lm.desc}</p>
              </header>
              <div className={styles.visual}>
                <Image src={ASSET(lm.img)} alt={lm.imgAlt} fill sizes="100vw" style={{ objectPosition: lm.objectPosition }} />
                <article className={styles.contentCard}>
                  <dl className={styles.points}>
                    {lm.points.map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
                  </dl>
                </article>
              </div>
            </div>
          </section>
        ))}

        {/* 교통망 */}
        <section className={panelClass('network')} id="network">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>쾌속 교통망</p>
              <h2 className={styles.sectionTitle}>서울로 이어지는{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 개의 축</span></h2>
              <p className={styles.sectionDesc}>청라하늘대교·인천대교·영종대교와 공항철도, GTX-D·E·영종트램(계획)까지.</p>
            </header>
            <div className={styles.networkList}>
              {ROUTES.map((r, i) => (
                <div key={r.key} className={styles.route} style={{ '--route': r.color, '--i': i }}>
                  <b>{r.label}</b><span>{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 입지환경 */}
        <section className={cn(panelClass('location'), styles.locationPanel)} id="location">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>입지환경</p>
              {/* 공식 사이트 입지환경(environment_01.png) 문구 그대로 — 윗줄 가는 회색, 아랫줄 굵은 네이비 */}
              <h2 className={cn(styles.sectionTitle, styles.locationTitle)}>
                <span className={styles.locationTitleLight}>송도와 청라를 잇는 인천 단 하나</span>
                새로운 영종의 프리미엄 앞권
              </h2>
            </header>
            <div className={cn(styles.visual, styles.locationMap)} role="button" tabIndex={0} onClick={() => openZoom(mapImage)} onKeyDown={(e) => e.key === 'Enter' && openZoom(mapImage)}>
              <Image src={ASSET('location-map.webp')} alt="신일 비아프 크레스트 광역 위치도" fill sizes="100vw" />
              <button type="button" className={styles.mapZoom} onClick={(e) => { e.stopPropagation(); openZoom(mapImage) }}>＋ 지도 확대</button>
            </div>
            <ul className={styles.locationNotes}>
              {LOCATION_NOTES.map((n) => <li key={n.slice(0, 24)}>{n}</li>)}
            </ul>
          </div>
        </section>

        {/* 유니트 */}
        <section className={panelClass('unit')} id="unit">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>주거공간</p>
              <h2 className={styles.sectionTitle}>84㎡부터 114㎡까지{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>5개의 타입</span></h2>
              <p className={styles.sectionDesc}>평면을 누르면 크게 볼 수 있습니다.</p>
            </header>
            <div className={styles.unitArea}>
              <div className={styles.unitTabs} role="tablist">
                {UNIT_TABS.map((u) => (
                  <button key={u.key} type="button" className={cn(styles.unitTab, u.key === unitKey && styles.isActive)} onClick={() => setUnitKey(u.key)}>{u.key}</button>
                ))}
              </div>
              <article className={styles.unitDisplay} data-watermark={unit.key}>
                <small>{unit.label}</small>
                <h3><span>{unit.key}</span> · <span>{unit.name}</span></h3>
                <p>{unit.desc}</p>
                <button
                  type="button"
                  className={styles.unitPlanImage}
                  onClick={() => openZoom({ src: ASSET(unit.img), alt: `${unit.key}㎡ 평면정보 확대` })}
                >
                  <Image src={ASSET(unit.img)} alt={`${unit.key}㎡ 평면정보`} fill sizes="(min-width: 1024px) 60vw, 80vw" />
                  <em>＋ 확대</em>
                </button>
                <div className={styles.unitFeatures}>{unit.features.map((f) => (<span key={f}>{f}</span>))}</div>
              </article>
            </div>
          </div>
        </section>

        {/* 커뮤니티 */}
        <section className={panelClass('community')} id="community">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>단지설계</p>
              <h2 className={styles.sectionTitle}>쾌적한 일상을{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>완성하는 단지</span></h2>
              <p className={styles.sectionDesc}>빛과 바람이 잘 드는 판상형 중심의 단지 구조에 문주·중앙광장·수경시설을 더했습니다.</p>
            </header>
            <div className={styles.communityGrid}>
              {COMMUNITY_CARDS.map((c) => (
                <div key={c.label} className={styles.communityCard}>
                  <Image src={ASSET(c.img)} alt={c.alt} fill sizes="100vw" />
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 프리미엄 */}
        <section className={cn(panelClass('premium'), styles.premiumPanel)} id="premium">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>프리미엄 01—05</p>
              <h2 className={styles.sectionTitle}>영종의 일상을 바꾸는{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 가지 가치</span></h2>
            </header>
            <div className={styles.premiumBrand}>
              <Image className={styles.premiumWord} src={ASSET('logo-white.png')} alt="VIAAF" width={308} height={59} />
            </div>
            <div className={styles.premiumStage}>
              {PREMIUM_SLIDES.map((s, i) => (
                <figure key={s.num} className={cn(styles.premiumSlide, i === premiumIndex && styles.isActive, i < premiumIndex && styles.isBefore)}>
                  <Image src={ASSET(s.img)} alt={s.alt} fill sizes="100vw" />
                  <figcaption>
                    <small>PREMIUM {s.num}</small>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </figcaption>
                </figure>
              ))}
              <div className={styles.premiumDots}>
                {PREMIUM_SLIDES.map((s, i) => (
                  <button key={s.num} type="button" aria-label={`프리미엄 ${i + 1}`} className={cn(i === premiumIndex && styles.isActive)} onClick={() => { setPremiumIndex(i); lock() }} />
                ))}
              </div>
              <span className={styles.premiumHint}>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </section>

        {/* 인테리어 캐러셀 — 아크원 historyCard 스타일 재사용 */}
        <section className={panelClass('design')} id="design">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>LOCATION VALUE</p>
              <h2 className={styles.sectionTitle}>신일 비아프 크레스트가{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>누리는 8가지</span></h2>
              <p className={styles.sectionDesc}>자동 이동·드래그·화살표로 살펴보세요.</p>
            </header>
            <div className={styles.historyViewport} ref={designViewportRef}>
              <div className={styles.historyTrack} ref={designTrackRef}>
                {[...DESIGN_ITEMS, ...DESIGN_ITEMS].map((h, i) => (
                  <article key={i} className={cn(styles.historyCard, styles.envCard)}>
                    <Image src={ASSET(h.img)} alt="" fill sizes="(min-width: 1024px) 420px, 60vw" />
                    <h3>{h.title}</h3>
                    <p>{h.lines.map((l, j) => <span key={j}>{l}</span>)}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.historyControls}>
              <span>LOCATION VALUE</span>
              <div>
                <button type="button" className={styles.circleButton} aria-label="이전 사진" onClick={() => { designStateRef.current.x += window.innerWidth < 768 ? 170 : 300 }}>←</button>
                <button type="button" className={styles.circleButton} aria-label="다음 사진" onClick={() => { designStateRef.current.x -= window.innerWidth < 768 ? 170 : 300 }}>→</button>
              </div>
            </div>
          </div>
        </section>

        {/* 상담과 예약 */}
        <section className={panelClass('contact')} id="contact">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>{site.projectName}</p>
              <h2 className={styles.sectionTitle}>관심 있는 정보를{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>상담받아보세요</span></h2>
              <p className={styles.sectionDesc}>방문 희망일을 남겨주시면 담당자가 확인 후 연락드립니다.</p>
            </header>
            <div className={cn(styles.contactLayout, styles.contactLayoutSingle)}>
              <div className={styles.contactPanel}>
                <LeadForm kind="visit" idPrefix="contactVisit" site={site} onSubmit={submitLead} />
              </div>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <section className={cn(panelClass('footer'), styles.footerPanel)} id="footer">
          <footer className={styles.siteFooter}>
            <div className={styles.footerLogos}>
              <Image src={ASSET('logo-white.png')} alt="VIAAF 신일 비아프 크레스트" width={154} height={30} />
            </div>
            <a className={styles.footerMainPhone} href={`tel:${telNumber}`}>
              <small>대표번호</small>{telNumber}
            </a>
            <div className={styles.footerParties}>
              {sig.footer.companyLines.map((l) => (
                <span key={l.label} className={cn(l.newLine && styles.footerLineBreak)}>{l.label} | {l.value}</span>
              ))}
            </div>
            <div className={styles.footerContact}>
              고객센터 운영시간 {sig.footer.csHours}
            </div>
            <p className={styles.footerLegal}>
              {sig.footer.disclaimers.join(' ')}
            </p>
            <p className={styles.footerCopy}>© 2026 YEONGJONG SHINIL VIAAF CREST. ALL RIGHTS RESERVED.</p>
            <div className={styles.footerLinks}>
              <button type="button" onClick={() => openDialog(infoDialogRef)}>분양 안내</button>
            </div>
          </footer>
        </section>
      </main>

      <PcFloat
        visible={index >= 1 && index < PANEL_ORDER.length - 1}
        onVisit={() => openDialog(visitDialogRef)}
        onFaq={() => openDialog(faqDialogRef)}
        onTop={() => navigateTo('hero')}
      />

      <nav className={cn(styles.mobileBar, styles.mobileBarTwo, index >= 1 && styles.isVisible)} aria-label="빠른 문의">
        <a href={`tel:${telNumber}`}>전화문의</a>
        <button type="button" onClick={() => openDialog(visitDialogRef)}>방문예약</button>
      </nav>
      <button
        type="button"
        className={cn(styles.mobileTop, index >= Math.ceil((PANEL_ORDER.length - 1) * 0.4) && styles.isVisible)}
        aria-label="맨 위로"
        onClick={() => navigateTo('hero')}
      >↑</button>

      {/* 다이얼로그 */}
      <dialog ref={visitDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(visitDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(visitDialogRef)}>×</button>
          <h2>방문예약</h2>
          <p>상담 가능시간 10:00~18:00 (담당자와 조율가능)</p>
          <LeadForm
            kind="visit" idPrefix="visitDialog" site={site} showTerms={false}
            onSubmit={async (kind, form) => { const ok = await submitLead(kind, form); if (ok) closeDialog(visitDialogRef); return ok }}
          />
        </div>
      </dialog>

      {/* 위치도·평면도 확대 — 아크원 지도 확대 다이얼로그(mapDialog) 그대로 */}
      <dialog ref={zoomDialogRef} className={cn(styles.dialog, styles.mapDialog)} onClick={(e) => e.target === e.currentTarget && closeDialog(zoomDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(zoomDialogRef)}>×</button>
          {zoomImage && <Image src={zoomImage.src} alt={zoomImage.alt} fill sizes="96vw" />}
        </div>
      </dialog>

      <dialog ref={infoDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(infoDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(infoDialogRef)}>×</button>
          <h2>분양 안내</h2>
          <div className={styles.sourceBody}>
            <h3>계약 전 반드시 현장에 확인해 주세요.</h3>
            <p>공급금액, 계약조건, 타입과 면적 등 확정 정보는 분양 상담 시 현장 관계자에게 확인해 주시기 바랍니다.</p>
          </div>
        </div>
      </dialog>

      <dialog ref={faqDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(faqDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(faqDialogRef)}>×</button>
          <h2>자주 묻는 질문</h2>
          <div className={styles.faqSelector}>
            {FAQ_ITEMS.map((f, i) => (
              <button key={f.q} type="button" className={cn(i === faqIndex && styles.isActive)} onClick={() => setFaqIndex(i)}>
                <span>{i + 1}.</span> {f.q}
              </button>
            ))}
          </div>
          <article className={styles.faqAnswer} aria-live="polite">
            <b>{FAQ_ITEMS[faqIndex].q}</b>
            <p>{FAQ_ITEMS[faqIndex].a}</p>
          </article>
        </div>
      </dialog>

      {toast && <div className={cn(styles.toast, styles.isVisible)} role="status" aria-live="polite">{toast}</div>}
    </div>
  )
}

// 출처: 교육자료 사업개요 + 공식 사이트 푸터
const FAQ_ITEMS = [
  { q: '총 몇 세대인가요?', a: '1단지(A19BL) 444세대, 2단지(A20BL) 516세대로 총 960세대입니다.' },
  { q: '어떤 타입이 있나요?', a: '84㎡A·B·C·D 4개 타입과 2단지 114㎡ 타입으로 구성됩니다.' },
  { q: '방문예약은 언제 가능한가요?', a: '상담 가능시간은 10:00~18:00이며, 방문예약 시 담당자가 배정되어 일정을 안내해 드립니다.' },
  { q: '규모는 어떻게 되나요?', a: '1단지 지하2층~지상21층 5개동, 2단지 지하2층~지상20층 6개동입니다.' },
  { q: '주차는 몇 대 가능한가요?', a: '세대당 1.5대 규모로 계획되어 있으며, 확장형 주차 비율은 약 50%입니다.' },
  { q: '시행·시공사는 어디인가요?', a: '시행 한국토지신탁, 시공 ㈜신일(VIAAF)입니다.' },
]

// 아크원과 동일 — 태블릿/PC 폭에서 화면 우측 중앙에 떠 있는 4버튼 세로 바
function PcFloat({ visible, onVisit, onFaq, onTop }) {
  return (
    <aside className={cn(styles.pcFloat, visible && styles.isVisible)}>
      <button type="button" onClick={onVisit}>방문예약</button>
      <button type="button" onClick={onFaq}>F&amp;A</button>
      <button type="button" onClick={onTop}>TOP ↑</button>
    </aside>
  )
}

const INTRO_SCENES = [
  { img: 'hr-hero-1.webp', label: '01 · BRIDGE', name: '인천대교 건너, 첫 집' },
  { img: 'hr-hero-2.webp', label: '02 · OCEAN VIEW', name: '서해를 품은 총 960세대' },
  { img: 'premium-split.webp', label: '03 · VIAAF', name: '정교한 세련됨으로 삶의 격을 높이다' },
]

// VIAAF 워드마크(308x59)는 까사 로고(204x24)보다 세로로 커서 헤더 로고 칸만 비율에 맞게 지정
const LOGO_BOX = { width: 136, height: 26 }

function IntroOverlay({ onSkip, ready }) {
  return (
    <div className={cn(styles.intro, ready && styles.ready)} aria-label="신일 비아프 크레스트를 소개하는 인트로">
      <section className={cn(styles.introStage, styles.introOne)} aria-hidden="true">
        <div className={styles.introScenes}>
          {INTRO_SCENES.map((s) => (
            <figure key={s.img} className={styles.introScene}>
              <Image src={ASSET(s.img)} alt={s.name} fill sizes="50vw" priority />
              <figcaption><small>{s.label}</small><strong>{s.name}</strong></figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.introCopy}>
          <span>YEONGJONG&apos;S FIRST HOME</span>
          <b>Life in<br />VIAAF.</b>
        </div>
      </section>
      <section className={cn(styles.introStage, styles.introTwo)} aria-hidden="true">
        <i className={cn(styles.introRing, styles.ringA)} />
        <i className={cn(styles.introRing, styles.ringB)} />
        <div className={styles.introBrand}>
          <Image className={styles.word} src={ASSET('logo-white.png')} alt="VIAAF 신일 비아프 크레스트" width={308} height={59} />
          <p>신일 비아프 크레스트 · 영종국제도시</p>
        </div>
      </section>
      <button type="button" className={styles.introSkip} onClick={onSkip}>건너뛰기</button>
    </div>
  )
}

// showTerms — 팝업(방문예약/자료요청 다이얼로그)에서는 "개인정보 처리방침 전문 보기"를 숨김(아크원과 동일)
function LeadForm({ kind, idPrefix, site, onSubmit, showTerms = true }) {
  const [submitting, setSubmitting] = useState(false)
  const checks = kind === 'visit' ? CONSULT_CHECKS : REQUEST_CHECKS
  const visitTimeOptions = site.visitTimeOptions
  const privacyText = site.signature.vipForm.privacyText

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await onSubmit(kind, e.currentTarget)
    setSubmitting(false)
  }

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit}>
      <div className={cn(styles.field, styles.full)}>
        <label htmlFor={`${idPrefix}-name`}>성함</label>
        <input id={`${idPrefix}-name`} className={styles.input} name="name" required placeholder="성함을 입력하세요" />
      </div>
      <div className={cn(styles.field, styles.full)}>
        <span id={`${idPrefix}-phone-label`}>연락처</span>
        <div className={styles.phoneGrid}>
          <input className={styles.input} name="phone1" defaultValue="010" readOnly aria-label="휴대전화 앞자리" />
          <input className={styles.input} name="phone2" required maxLength={4} inputMode="numeric" aria-label="휴대전화 중간자리" />
          <input className={styles.input} name="phone3" required maxLength={4} inputMode="numeric" aria-label="휴대전화 뒷자리" />
        </div>
      </div>
      {kind === 'visit' && (
        <>
          <div className={styles.field}>
            <label htmlFor={`${idPrefix}-date`}>방문희망일</label>
            <input id={`${idPrefix}-date`} className={styles.input} name="visit_date" type="date" />
          </div>
          <div className={styles.field}>
            <label htmlFor={`${idPrefix}-time`}>방문희망시간</label>
            <select id={`${idPrefix}-time`} className={styles.input} name="visit_time" defaultValue="">
              <option value="">선택하세요</option>
              {visitTimeOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
        </>
      )}
      <div className={cn(kind === 'visit' ? styles.consultGrid : styles.checkGrid, styles.full)}>
        <p className={styles.consultTitle}>{kind === 'visit' ? '상담 내용 (중복선택 가능)' : '요청 자료 (중복선택 가능)'}</p>
        {checks.map((label) => (
          <label key={label}><input type="checkbox" name={label} />{label}</label>
        ))}
      </div>
      {showTerms && (
        <details className={styles.terms}>
          <summary>개인정보 처리방침 전문 보기</summary>
          <div>{privacyText}</div>
        </details>
      )}
      <label className={styles.agree}>
        <input type="checkbox" name="privacy_agree" required />
        <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
      </label>
      <button type="submit" className={styles.submitButton} disabled={submitting}>
        {submitting ? '전송 중...' : kind === 'visit' ? '방문예약 등록' : '자료 신청하기'}
      </button>
    </form>
  )
}
