'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './SignatureTiamoImmersive.module.css'

// 청라 더리브 티아모 까사 전용 풀페이지 몰입형 랜딩 — 요청 반영(2026-10-01): 청라 아크원 푸르지오
// (청라아크원푸르지오.addupapt.kr, SignatureArkoneImmersive)와 "똑같은 구조"로 만들어 달라는 요청이라,
// 그 컴포넌트의 패널 흐름(인트로 → 히어로 → 사업개요 → 방문예약 → 핵심가치 → 교통 → 입지 → 유니트 →
// 커뮤니티 → 프리미엄 5 → 가로 캐러셀 → 상담 → 푸터)·인터랙션·CSS를 그대로 복제하고
// 콘텐츠/이미지만 티아모 까사 것으로 교체했다. app/apt/[slug]/page.jsx에서 sig.tiamoImmersive로 분기.
//
// 아크원과 다른 점(콘텐츠가 달라서 생긴 차이만):
//   - 히어로: 아크원은 영상, 티아모 까사는 홍보 영상 원본이 없어 메인 비주얼 CG 3장 크로스페이드
//   - 핵심가치: 아크원은 3종(스타필드·병원·하나금융), 티아모 까사는 교통·수변·스카이브릿지·미래가치 4종.
//     아크원의 단지배치 패널은 스카이브릿지 섹션과 겹쳐서 뺐다
//   - 핵심가치/교통: 아크원의 "공공자료 요약 및 출처" 버튼은 기관 발표 링크가 있어야 해서, 그런 출처가 없는
//     이 현장은 버튼 없이 참고 사이트(청라더리브티아모까사.com) 입지환경 원문만 사용
//   - 청라의 연혁 캐러셀 → 견본세대 인테리어 실사 캐러셀(이 현장은 연혁 자료가 없음)
//   - 유니트: 원본 평면 이미지가 있어 카드 안에 넣고 누르면 확대
//   - 안내 팝업의 와인 증정 혜택은 아크원 현장 행사라 제외
// 이미지(요청 반영 2026-10-01 — 저화질 전부 교체): hr-*.webp는 공식 사이트 livtiamocasa.com 원본(2650~3282px)을
// 2560px로 변환한 것(-mobile은 세로 크롭), int-*.webp는 청라더리브티아모까사.com 인테리어(견본세대) 실사 원본.
// 고해상도 원본이 없는 컷(피트니스·G/X 이미지컷, 시크릿정원·커낼스트리트·아케이드)은 흐리게 쓰지 않고 뺐다.

const ASSET = (name) => `/apt/cheongna-theliv-tiamo-casa/${name}`

const NAV_ITEMS = [
  { id: 'traffic', label: '핵심가치', num: '01', code: 'VALUE' },
  { id: 'location', label: '입지환경', num: '02', code: 'LOCATION' },
  { id: 'brand', label: '사업개요', num: '03', code: 'OVERVIEW' },
  { id: 'premium', label: '프리미엄', num: '04', code: 'PREMIUM' },
  { id: 'unit', label: '유니트', num: '05', code: 'UNIT' },
  { id: 'community', label: '커뮤니티', num: '06', code: 'COMMUNITY' },
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

// 아크원과 동일 — 패널마다 진입(is-active) 시 sectionHead가 다른 방식으로 나타남
const MOTION = {
  hero: 'motionScale', brand: 'motionLeft', visit: 'motionClip', traffic: 'motionScale',
  nature: 'motionSoft', skybridge: 'motionClip', vision: 'motionLeft', network: 'motionClip', location: 'motionScale',
  unit: 'motionSoft', community: 'motionClip', premium: 'motionScale',
  design: 'motionSoft', contact: 'motionLeft', footer: 'motionSoft',
}

// 요청 반영(2026-10-02) — 모바일 히어로 배경을 새 세로 이미지(hero-m-1~3, 1080x1350 — 까사2와 동일)로 교체
const HERO_SLIDES = [
  { img: 'hr-canal-aerial.webp', imgMobile: 'hero-m-1.webp', alt: '청라 더리브 티아모 까사 조감도 — 커낼웨이 수변' },
  { img: 'hr-tower-night.webp', imgMobile: 'hero-m-2.webp', alt: '청라 더리브 티아모 까사 야경 투시도 — 스카이브릿지' },
  { img: 'hr-wide-aerial.webp', imgMobile: 'hero-m-3.webp', alt: '청라 더리브 티아모 까사 광역 조감도' },
]

// 출처: 참고 사이트 메인 PERFECT TRIPLE 01~03 원문(요청 반영 2026-10-01 — 교통·수변·스카이브릿지·미래가치 4개로).
// 아크원 카드의 큰 숫자 통계(stats)는 "7호선/하나금융"처럼 글자 수치에선 카드 밖으로 넘쳐서, 원문처럼
// 소제목 + 설명(points)으로 바꿨다
const LANDMARKS = [
  {
    id: 'traffic', eyebrow: 'CENTRAL TRAFFIC', titleTop: '7호선 초역세권,', titleBottom: '서울을 빠르게 잇다',
    desc: '바로 앞 7호선 커낼웨이역(예정), 청라를 빠르게 잇는 쾌속교통망.', img: 'hr-welcome-terrace.webp', imgAlt: '7호선 커낼웨이역(예정) 출입구와 웰컴테라스 투시도',
    points: [['7호선 초역세권 프리미엄', '바로 앞, 7호선 커낼웨이역(예정) 및 서울 지하철 2호선 연장(예정), 청라IC, BRT, GRT 등 쾌속교통망']],
    objectPosition: '70% center',
  },
  {
    id: 'nature', eyebrow: 'CENTRAL NATURE', titleTop: '늘 푸른 공원과 호수,', titleBottom: '일상에 여유를 더하다',
    desc: '청라호수공원과 바로 앞 커낼웨이, 생활 인프라까지 한걸음에.', img: 'hr-canal-aerial.webp', imgAlt: '커낼웨이 수변을 따라 선 청라 더리브 티아모 까사 조감도',
    points: [
      ['커낼웨이 수변 조망', '청라호수공원, 커낼웨이 등 쾌적한 자연을 더 가까이 누리는 에코 라이프의 완성'],
      ['한걸음에 누리는 생활 인프라', '홈플러스, 이마트, 롯데마트, 스타필드 청라(예정), 코스트코(예정) 등 다채로운 생활 환경'],
    ],
    objectPosition: '25% center',
  },
  {
    id: 'skybridge', eyebrow: 'SKY BRIDGE', titleTop: '청라의 드높은 하늘,', titleBottom: '당신의 특권이 되다',
    desc: '3개동을 하나로 잇는 20층 스카이브릿지, 최고 46층 청라의 랜드마크.', img: 'hr-skybridge-exterior.webp', imgAlt: '3개동을 잇는 20층 스카이브릿지 투시도',
    points: [
      ['청라의 자부심, 스카이브릿지', '단지의 품격을 높여주는 스카이브릿지로 3개동이 연결된 유니크한 외관 설계'],
      ['최고 46층 랜드마크 가치', '최상층 펜트하우스부터 46층 초고층 설계로 청라를 대표할 랜드마크 특권'],
    ],
    objectPosition: '60% center',
  },
  {
    id: 'vision', eyebrow: 'CENTRAL VISION', titleTop: '청라의 빛나는', titleBottom: '미래가치의 중심',
    desc: '청라의 미래를 바꿀 개발 호재가 모이는 곳.', img: 'hr-wide-aerial.webp', imgAlt: '청라 더리브 티아모 까사 광역 조감도',
    points: [['청라의 끝없는 미래가치', '하나금융·드림타운(예정), 의료복합타운 아산병원(예정) 등 눈부신 미래가치의 최중심']],
    objectPosition: '72% center',
  },
]

// 출처: 참고 사이트 입지환경·프리미엄03 원문(7호선 커낼웨이역(예정), 서울 2호선 연장(예정), 청라IC, BRT, GRT)
const ROUTES = [
  { key: 'rail7', color: '#747f00', label: '7호선', desc: '커낼웨이역(예정) 바로 앞' },
  { key: 'rail2', color: '#39b54a', label: '2호선', desc: '서울 지하철 청라 연장(예정)' },
  { key: 'ic', color: '#78a7ff', label: '청라IC', desc: '광역 도로망 진입' },
  { key: 'brt', color: '#d98c4a', label: 'BRT', desc: '간선급행버스 교통망' },
  { key: 'grt', color: '#b07cd8', label: 'GRT', desc: '청라 순환 대중교통망' },
]

// 출처: 참고 사이트 평면정보 4개 타입 원본(면적·실수는 평면 이미지에 표기된 값)
const UNIT_TABS = [
  { key: '76', label: 'SMART UNIT', name: '실속형 주거공간', desc: '전용 76.6326㎡ · 공급 107.9174㎡ · 계약 150.4997㎡', features: ['208실', 'Dada 주방가구', '가전 무상옵션'], img: 'unit-76.webp' },
  { key: '84A', label: 'FAMILY UNIT', name: '가족형 주거공간', desc: '전용 84.9878㎡ · 공급 119.3696㎡ · 계약 166.5946㎡', features: ['208실', 'Dada 주방가구', '가전 무상옵션'], img: 'unit-84a.webp' },
  { key: '84B', label: 'FAMILY UNIT', name: '가족형 주거공간', desc: '전용 84.9843㎡ · 공급 119.6914㎡ · 계약 166.9145㎡', features: ['104실', 'Dada 주방가구', '가전 무상옵션'], img: 'unit-84b.webp' },
  { key: '211', label: 'PENTHOUSE UNIT', name: '최상층 펜트하우스', desc: '전용 211.6980㎡ · 공급 296.7958㎡ · 계약 414.4300㎡', features: ['3실', '최상층', '파노라마 조망'], img: 'unit-211.webp' },
]

// 출처: 참고 사이트 커뮤니티·단지설계 원문 — 피트니스/G/X룸은 고해상도 사진이 없어 아크원과 같은
// "커뮤니티와 조경" 구성(스카이브릿지·휴게정원·웰컴테라스)으로
const COMMUNITY_CARDS = [
  { img: 'hr-skybridge-lounge.webp', alt: '20층 스카이브릿지 내부 투시도', label: '스카이브릿지 (20F)' },
  { img: 'hr-rest-garden.webp', alt: '2층 휴게정원 투시도', label: '휴게정원 (2F)' },
  { img: 'hr-welcome-terrace.webp', alt: '1층 웰컴테라스 투시도', label: '웰컴테라스 (1F)' },
]

// 출처: 참고 사이트 PREMIUM 8 중 5개 원문
const PREMIUM_SLIDES = [
  { num: '01', img: 'hr-skybridge-exterior.webp', alt: '3개동을 잇는 스카이브릿지 투시도', title: '청라의 자부심 스카이브릿지', desc: '단지의 품격을 높여주는 스카이브릿지로 3개 동이 연결되는 유니크한 외관설계' },
  { num: '02', img: 'hr-tower-night.webp', alt: '최고 46층 야경 투시도', title: '최고 46층 랜드마크 가치', desc: '최상층 펜트하우스부터 46층 초고층 설계로 청라를 대표할 랜드마크' },
  { num: '03', img: 'hr-welcome-terrace.webp', alt: '7호선 커낼웨이역(예정) 출입구 투시도', title: '7호선 커낼웨이역 초역세권', desc: '바로 앞 7호선 커낼웨이역(예정) 및 서울 지하철 2호선 연장(예정), 청라IC, BRT, GRT 등 쾌속 교통망' },
  { num: '04', img: 'hr-canal-aerial.webp', alt: '커낼웨이 수변 조감도', title: '커낼웨이 수변조망', desc: '청라호수공원, 커낼웨이 등 쾌적한 자연을 더 가까이 누리는 에코라이프의 완성' },
  { num: '05', img: 'int-kitchen.webp', alt: '견본세대 Dada 주방 실사', title: '하이엔드 주방가구 Dada 인테리어', desc: '세계최고의 주방가구 몰테니앤씨그룹의 브랜드 Dada 전 세대 적용 (※ 펜트타입(211㎡) 3세대 제외)' },
]

// 출처: 참고 사이트 인테리어(견본세대) 실사 원본 — 아크원의 "청라의 연혁" 가로 캐러셀 자리
const DESIGN_ITEMS = [
  { img: 'int-kitchen.webp', time: 'KITCHEN', title: 'Dada 주방', desc: '세계최고의 주방가구 몰테니앤씨그룹의 브랜드 Dada 적용' },
  { img: 'int-dining.webp', time: 'DINING', title: '다이닝', desc: '주방과 이어지는 넉넉한 다이닝 공간' },
  { img: 'int-living.webp', time: 'LIVING', title: '거실', desc: '채광과 개방감을 살린 거실' },
  { img: 'int-bedroom.webp', time: 'BEDROOM', title: '침실', desc: '휴식에 집중한 침실' },
  { img: 'int-room.webp', time: 'ROOM', title: '자녀방', desc: '라이프스타일에 맞춰 꾸미는 방' },
  { img: 'int-bath.webp', time: 'BATH', title: '욕실', desc: '호텔식 감성의 욕실' },
  { img: 'int-dress.webp', time: 'DRESS', title: '드레스룸', desc: '수납을 고려한 드레스룸' },
  { img: 'int-storage.webp', time: 'STORAGE', title: '수납', desc: '현관·다용도 수납 공간' },
]

// 출처: 참고 사이트 사업개요 원문
const BRAND_STATS = [
  { label: '오피스텔', value: '523실', sub: '76 · 84A · 84B · 211(펜트)' },
  { label: '규모', value: '최고 46층', sub: '지하3층~지상46층 3개동' },
  { label: '대지면적', value: '10,685.00㎡', sub: '건축면적 5,844.5888㎡' },
  { label: '주차대수', value: '총 652대', sub: '건폐율 54.70% · 용적률 599.99%' },
]
const BRAND_WIDE = { label: '연면적', value: '91,210.6607㎡', sub: '인천광역시 서구 청라동 일반 157-11' }
const BRAND_WORDS = [
  { letter: 'SKY', copy: ['3개동을 잇는', 'SKY BRIDGE'] },
  { letter: '46F', copy: ['청라를 대표할', 'LANDMARK'] },
  { letter: 'Dada', copy: ['하이엔드 주방가구', 'MOLTENI & C'] },
]

const REQUEST_CHECKS = ['타입별 평면도', '공급금액', '계약조건', '공급일정']
const CONSULT_CHECKS = ['방문예약', '홍보관 위치 전송', '자료요청', '기타문의']

const PREMIUM_LAST = PREMIUM_SLIDES.length - 1
const TRANSITION_MS = 520

export default function SignatureTiamoImmersive({ site }) {
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
  const [contactTab, setContactTab] = useState('visit')
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [zoomImage, setZoomImage] = useState(null)
  const [faqIndex, setFaqIndex] = useState(0)
  const [toast, setToast] = useState('')

  const viewportRef = useRef(null)
  const visitDialogRef = useRef(null)
  const requestDialogRef = useRef(null)
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

  // 인트로가 끝나면 안내 팝업을 띄우고, 닫으면 이어서 방문예약 다이얼로그를 띄움(아크원과 동일)
  useEffect(() => {
    if (!introDone) return
    const t = setTimeout(() => setNoticeOpen(true), 700)
    return () => clearTimeout(t)
  }, [introDone])

  const closeNotice = () => {
    setNoticeOpen(false)
    setTimeout(() => openDialog(visitDialogRef), 300)
  }

  // 요청 반영(2026-10-06) — 팝업 이미지 안 '문의하기' 버튼: 방문예약 다이얼로그 대신 상담·예약 패널(방문예약 탭)로 이동
  const goContactFromNotice = () => {
    setNoticeOpen(false)
    setContactTab('visit')
    navigateTo('contact')
  }

  const blockingOverlay = () => noticeOpen || openDialogCountRef.current > 0

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
      if (e.target.closest('dialog,.' + styles.mobileMenu + ',.' + styles.contactPanel)) return
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
      touchRef.current.blocked = !!e.target.closest('dialog,.' + styles.mobileMenu + ',.' + styles.contactPanel)
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
  }, [index, introDone, noticeOpen, premiumIndex])

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
  const mapImage = { src: ASSET('location-map.webp'), alt: '청라 더리브 티아모 까사 광역 위치도 확대' }

  return (
    <div className={styles.root}>
      {!introDone && <IntroOverlay onSkip={() => setIntroDone(true)} ready={introReady} />}

      <header className={styles.siteHeader}>
        <div className={styles.headerLeft}>
          <button type="button" className={styles.headerLogo} onClick={() => navigateTo('hero')} aria-label="맨 위로">
            <Image src={ASSET('logo-white.png')} alt="청라 더리브 티아모 까사" width={204} height={24} />
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
          <div className={styles.heroOne} aria-hidden="true">46</div>
          <div className={styles.capBadge}><div><small>최고 46층</small><b>청라의<br />랜드마크</b></div></div>
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>NEW LUXURISM · 새로운 청라, 그 중심에</p>
              <h1 className={styles.sectionTitle}>가장 이상적인<br /><span className={styles.gradientText}>일상의 시작</span></h1>
              <p className={styles.sectionDesc}>CHEONGNA THE LIV TIAMO CASA</p>
            </header>
          </div>
          <div className={styles.scrollCue}><i /><span>SCROLL</span></div>
        </section>

        {/* 사업개요 */}
        <section className={panelClass('brand')} id="brand">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>사업개요</p>
              <h2 className={styles.sectionTitle}>청라에 세워질{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>새로운 기준</span></h2>
              <p className={styles.sectionDesc}>더 완벽한 생활의 중심, 가장 새로운 청라의 시작 — 최고 46층 3개동 오피스텔 523실.</p>
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
              <Image src={ASSET('hr-tower-night.webp')} alt="청라 더리브 티아모 까사 야경 투시도" fill sizes="100vw" />
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
              <h2 className={styles.sectionTitle}>청라를 잇는{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 개의 축</span></h2>
              <p className={styles.sectionDesc}>7호선 커낼웨이역(예정)부터 BRT·GRT까지, 청라의 교통망을 가까이 누립니다.</p>
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
              <h2 className={styles.sectionTitle}>청라의 중심이{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>한곳에 모이다</span></h2>
              <p className={styles.sectionDesc}>교통·생활·자연·미래가치가 연결되는 커낼웨이 수변의 중심.</p>
            </header>
            <div className={styles.visual} role="button" tabIndex={0} onClick={() => openZoom(mapImage)} onKeyDown={(e) => e.key === 'Enter' && openZoom(mapImage)}>
              <Image src={ASSET('location-map.webp')} alt="청라 더리브 티아모 까사 광역 위치도" fill sizes="100vw" />
              <button type="button" className={styles.mapZoom} onClick={(e) => { e.stopPropagation(); openZoom(mapImage) }}>＋ 지도 확대</button>
            </div>
            <div className={styles.mapPins}>
              <span>7호선 커낼웨이역(예정)</span><span>청라호수공원</span><span>커낼웨이</span><span>스타필드 청라(예정)</span>
            </div>
          </div>
        </section>

        {/* 유니트 */}
        <section className={panelClass('unit')} id="unit">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>주거공간</p>
              <h2 className={styles.sectionTitle}>76㎡부터 펜트하우스까지{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>4개의 타입</span></h2>
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
              <p className={styles.eyebrow}>커뮤니티와 조경</p>
              <h2 className={styles.sectionTitle}>일상의 여백을{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>더 풍요롭게</span></h2>
              <p className={styles.sectionDesc}>청라의 하늘을 잇는 스카이브릿지와 입주민 전용 정원, 웰컴테라스까지.</p>
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
              <h2 className={styles.sectionTitle}>청라의 일상을 바꾸는{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 가지 가치</span></h2>
            </header>
            <div className={styles.premiumBrand}>
              <Image className={styles.premiumWord} src={ASSET('logo-white.png')} alt="청라 더리브 티아모 까사" width={204} height={24} />
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
              <p className={styles.eyebrow}>INTERIOR</p>
              <h2 className={styles.sectionTitle}>견본세대로 보는{' '}<br className={styles.titleBreak} /><span className={styles.gradientText}>실내 공간</span></h2>
              <p className={styles.sectionDesc}>견본세대 실사 사진입니다. 자동 이동·드래그·화살표로 살펴보세요.</p>
            </header>
            <div className={styles.historyViewport} ref={designViewportRef}>
              <div className={styles.historyTrack} ref={designTrackRef}>
                {[...DESIGN_ITEMS, ...DESIGN_ITEMS].map((h, i) => (
                  <article key={i} className={styles.historyCard}>
                    <Image src={ASSET(h.img)} alt="" fill sizes="60vw" />
                    <time>{h.time}</time>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.historyControls}>
              <span>INTERIOR</span>
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
              <p className={styles.sectionDesc}>상담 유형을 선택하면 입력 화면이 즉시 전환됩니다.</p>
            </header>
            <div className={styles.contactLayout}>
              <div className={styles.contactTabs}>
                <button type="button" className={cn(contactTab === 'visit' && styles.isActive)} onClick={() => setContactTab('visit')}>방문예약</button>
                <button type="button" className={cn(contactTab === 'request' && styles.isActive)} onClick={() => setContactTab('request')}>자료요청</button>
              </div>
              <div className={styles.contactPanel}>
                {contactTab === 'visit' ? (
                  <LeadForm kind="visit" idPrefix="contactVisit" site={site} onSubmit={submitLead} />
                ) : (
                  <LeadForm kind="request" idPrefix="contactRequest" site={site} onSubmit={submitLead} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <section className={cn(panelClass('footer'), styles.footerPanel)} id="footer">
          <footer className={styles.siteFooter}>
            <div className={styles.footerLogos}>
              <Image src={ASSET('logo-white.png')} alt="청라 더리브 티아모 까사" width={204} height={24} />
            </div>
            <div className={styles.footerLogos} style={{ marginTop: 14 }}>
              <Image src={ASSET('logo-cheongnaplus.png')} alt="시행위탁 청라플러스" width={94} height={36} />
              <Image src={ASSET('logo-sgc.png')} alt="시공 SGC E&C" width={115} height={29} />
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
            <p className={styles.footerCopy}>© 2026 CHEONGNA THE LIV TIAMO CASA. ALL RIGHTS RESERVED.</p>
            <div className={styles.footerLinks}>
              <button type="button" onClick={() => openDialog(infoDialogRef)}>분양 안내</button>
            </div>
          </footer>
        </section>
      </main>

      <PcFloat
        visible={index >= 1 && index < PANEL_ORDER.length - 1}
        onVisit={() => openDialog(visitDialogRef)}
        onRequest={() => openDialog(requestDialogRef)}
        onFaq={() => openDialog(faqDialogRef)}
        onTop={() => navigateTo('hero')}
      />

      <nav className={cn(styles.mobileBar, index >= 1 && styles.isVisible)} aria-label="빠른 문의">
        <a href={`tel:${telNumber}`}>전화문의</a>
        <button type="button" onClick={() => openDialog(requestDialogRef)}>자료요청</button>
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

      <dialog ref={requestDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(requestDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(requestDialogRef)}>×</button>
          <h2>자료요청</h2>
          <p>원하시는 자료를 선택하시면 담당자가 확인 후 보내드립니다.</p>
          <LeadForm
            kind="request" idPrefix="requestDialog" site={site} showTerms={false}
            onSubmit={async (kind, form) => { const ok = await submitLead(kind, form); if (ok) closeDialog(requestDialogRef); return ok }}
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

      {noticeOpen && (
        <div className={cn(styles.popupOverlay, styles.isOpen)} role="dialog" aria-modal="true" aria-label="주요 안내">
          {/* 요청 반영(2026-10-02) — 기존 안내 카드 대신 완성본 이미지 한 장. 이미지 우상단에 X가
              그려져 있어 이미지 아무 곳을 눌러도 닫힘(닫으면 방문예약 다이얼로그).
              요청 반영(2026-10-06) — 이미지를 popup0.webp로 교체하고, 이미지 안 '문의하기' 버튼 위치에만
              투명 버튼(noticeHotspot)을 얹어 누르면 상담·예약 패널로 이동 */}
          <div className={cn(styles.popupShell, styles.popupShellImage)}>
            <button type="button" className={styles.noticeImageBtn} onClick={closeNotice} aria-label="팝업 닫기">
              <Image
                src={ASSET('popup0.webp')}
                alt="청라를 완성하는 BIG3 — 스타필드, 서울청라아산병원, 하나금융그룹 하나드림타운. 아파트를 담은 대단지 오피스텔, 주거형 523실 이상 대단지. 5억~6억대로 청라 중심에 입주"
                width={1159}
                height={1358}
                sizes="420px"
                priority
              />
            </button>
            <button type="button" className={styles.noticeHotspot} onClick={goContactFromNotice} aria-label="문의하기 — 방문예약으로 이동" />
          </div>
        </div>
      )}

      {toast && <div className={cn(styles.toast, styles.isVisible)} role="status" aria-live="polite">{toast}</div>}
    </div>
  )
}

// 출처: 참고 사이트 사업개요·프리미엄·푸터 원문
const FAQ_ITEMS = [
  { q: '총 몇 실인가요?', a: '오피스텔 총 523실(76 208실 / 84A 208실 / 84B 104실 / 211 펜트하우스 3실)로 구성됩니다.' },
  { q: '방문예약은 언제 가능한가요?', a: '상담 가능시간은 10:00~18:00이며, 방문예약 시 담당자가 배정되어 일정을 안내해 드립니다.' },
  { q: '규모는 어떻게 되나요?', a: '지하3층~지상46층 3개동이며, 20층 스카이브릿지로 3개동이 연결됩니다.' },
  { q: '주차는 몇 대 가능한가요?', a: '총 652대 규모로 계획되어 있습니다.' },
  { q: '시행·시공사는 어디인가요?', a: '시행위탁 청라플러스, 시공 SGC E&C(더리브)입니다.' },
  { q: '주방가구는 어떤 브랜드인가요?', a: '몰테니앤씨그룹의 하이엔드 주방가구 브랜드 Dada가 전 세대 적용됩니다(※ 펜트타입(211㎡) 3세대 제외).' },
]

// 아크원과 동일 — 태블릿/PC 폭에서 화면 우측 중앙에 떠 있는 4버튼 세로 바
function PcFloat({ visible, onVisit, onRequest, onFaq, onTop }) {
  return (
    <aside className={cn(styles.pcFloat, visible && styles.isVisible)}>
      <button type="button" onClick={onVisit}>방문예약</button>
      <button type="button" onClick={onRequest}>자료요청</button>
      <button type="button" onClick={onFaq}>F&amp;A</button>
      <button type="button" onClick={onTop}>TOP ↑</button>
    </aside>
  )
}

const INTRO_SCENES = [
  { img: 'hr-canal-aerial.webp', label: '01 · CANALWAY', name: '커낼웨이 수변 프리미엄' },
  { img: 'hr-skybridge-exterior.webp', label: '02 · SKY BRIDGE', name: '3개동을 잇는 스카이브릿지' },
  { img: 'hr-tower-night.webp', label: '03 · LANDMARK', name: '최고 46층 청라의 랜드마크' },
]

function IntroOverlay({ onSkip, ready }) {
  return (
    <div className={cn(styles.intro, ready && styles.ready)} aria-label="청라 더리브 티아모 까사를 소개하는 인트로">
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
          <span>CHEONGNA&apos;S NEW CENTER</span>
          <b>New<br />Luxurism.</b>
        </div>
      </section>
      <section className={cn(styles.introStage, styles.introTwo)} aria-hidden="true">
        <i className={cn(styles.introRing, styles.ringA)} />
        <i className={cn(styles.introRing, styles.ringB)} />
        <div className={styles.introBrand}>
          <Image className={styles.word} src={ASSET('logo-white.png')} alt="청라 더리브 티아모 까사" width={204} height={24} />
          <p>NEW LUXURISM · THE LIV</p>
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
