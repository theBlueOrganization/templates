'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './SignatureArkoneImmersive.module.css'

// 청라 아크원 푸르지오 전용 풀페이지 몰입형 랜딩 — 참고 시안(cheongna-arkone-prugio-v2-2-mobile-first-standalone.html)의
// 디자인·인터랙션·이미지를 그대로 이식한 이 현장 전용 컴포넌트. 다른 현장의 Signature* 섹션 조합과
// 완전히 다른 구조(풀페이지 스크롤 스냅 + 인트로 시퀀스)라 app/apt/[slug]/page.jsx에서
// sig.arkoneImmersive 플래그로 전용 렌더 트리 분기(the-sharp-geomdan-lakepark의 headerGeomdan과 동일한 방식).
//
// 참고 시안에서 아래 4가지는 실제 고객을 속이는 조작된 신뢰지표라 의도적으로 제외함:
//   - 무작위로 숫자가 바뀌는 가짜 "현재 접속자 112명" 라이브 카운터
//   - "OOO님 방금 방문예약" 식 무작위 가짜 활동 알림
//   - 실제 상담 없이 폼만 접수되는 "AI 분양비서" 다이얼로그
//   - SEO 조작용 가짜 FAQ 150개 자동생성 + 검색어 200개 스터핑
// 그 외 콘텐츠(둘러보기 브랜드 필름 중복 영상 제외)는 시안 그대로 반영.

const ASSET = (name) => `/apt/cheongna-arkone-prugio/v2/${name}`

const NAV_ITEMS = [
  { id: 'starfield', label: '핵심가치', num: '01', code: 'VALUE' },
  { id: 'location', label: '입지환경', num: '02', code: 'LOCATION' },
  { id: 'brand', label: '사업개요', num: '03', code: 'OVERVIEW' },
  { id: 'premium', label: '프리미엄', num: '04', code: 'PREMIUM' },
  { id: 'unit', label: '유니트', num: '05', code: 'UNIT' },
  { id: 'community', label: '커뮤니티', num: '06', code: 'COMMUNITY' },
  { id: 'contact', label: '방문예약', num: '07', code: 'CONTACT' },
]

const PANEL_ORDER = [
  'hero', 'brand', 'visit', 'starfield', 'hospital', 'hana', 'network',
  'location', 'unit', 'plan', 'community', 'premium', 'history', 'contact', 'footer',
]

const TONE = {
  brand: 'toneA', visit: 'toneB', starfield: 'toneC', hospital: 'toneB', hana: 'toneA',
  network: 'toneC', location: 'toneB', unit: 'toneA', plan: 'toneB', community: 'toneC',
  premium: 'toneA', history: 'toneB', contact: 'toneA',
}

// 참고 시안 그대로 — 패널마다 진입(is-active) 시 sectionHead가 다른 방식으로 나타남
// (좌측 슬라이드/스케일/클립리빌/소프트블러). 스크롤로 패널을 오갈 때마다 매번 다시 재생됨
const MOTION = {
  hero: 'motionScale', brand: 'motionLeft', visit: 'motionClip', starfield: 'motionScale',
  hospital: 'motionSoft', hana: 'motionLeft', network: 'motionClip', location: 'motionScale',
  unit: 'motionSoft', plan: 'motionLeft', community: 'motionClip', premium: 'motionScale',
  history: 'motionSoft', contact: 'motionLeft', footer: 'motionSoft',
}

const LANDMARKS = [
  {
    id: 'starfield', eyebrow: '청라의 여가 중심', titleTop: '스타필드 청라', titleBottom: '바로 앞의 일상',
    desc: '돔구장과 350여 개 브랜드가 결합된 복합 문화·쇼핑 공간.', img: 'starfield.webp', imgAlt: '스타필드 청라 조감도',
    cardTitle: '문화·쇼핑·스포츠의 중심', cardDesc: '2027년 말 준공, 2028년 개장을 목표로 추진 중입니다.',
    stats: [['2.3만', '돔 좌석 계획'], ['350+', '브랜드 계획']], source: 'starfield', objectPosition: 'center',
  },
  {
    id: 'hospital', eyebrow: '청라 의료복합타운', titleTop: '서울아산청라병원', titleBottom: '미래 의료의 중심',
    desc: '800병상 규모 종합병원을 포함한 의료복합타운이 조성 중입니다.', img: 'hospital.webp', imgAlt: '서울아산청라병원 조감도',
    cardTitle: '청라가 기다려온 의료 인프라', cardDesc: '2029년 하반기 준공을 목표로 추진되고 있습니다.',
    stats: [['800', '계획 병상'], ['2029', '하반기 준공 목표']], source: 'hospital', objectPosition: '30% center',
  },
  {
    id: 'hana', eyebrow: '청라 금융 시대', titleTop: '하나금융그룹 본사', titleBottom: '청라로의 이동',
    desc: '그룹 헤드쿼터 준공과 관계사 순차 이전이 청라의 업무 중심성을 높입니다.', img: 'hana.webp', imgAlt: '하나금융그룹 청라 그룹 헤드쿼터',
    cardTitle: '청라 금융 업무의 중심', cardDesc: '2026년 5월 준공, 9월부터 10개 관계사가 순차 이전할 예정입니다.',
    stats: [['2,200', '순차 이전 예정'], ['4,000', '클러스터 기대 규모']], source: 'hana', objectPosition: 'center',
  },
]

const ROUTES = [
  { key: 'rail9', color: '#c7a86e', label: '9호선', desc: '공항철도 직결 사업 추진' },
  { key: 'rail2', color: '#39bfc7', label: '2호선', desc: '청라 연장 국가계획 반영 건의' },
  { key: 'raild', color: '#78c7ff', label: 'GTX-D', desc: 'Y자 노선 추진·검토' },
  { key: 'raile', color: '#c28cff', label: 'GTX-E', desc: '인천공항–청라–서울 축 계획' },
  { key: 'rail3', color: '#77d084', label: '인천 3호선', desc: '제2차 도시철도망 구축계획 승인' },
]

// 출처: 공식 발표·공공자료 원문(2026년 확인) — 링크를 누르면 실제 발표 기관 페이지로 이동
const SOURCES = {
  starfield: {
    title: '스타필드 청라 추진 현황', date: '신세계프라퍼티 발표 · 2026-05-21',
    body: '약 2.3만석 규모 돔과 350여 개 브랜드를 포함하는 스타필드 청라를 2027년 말 준공, 2028년 개장 목표로 제시했습니다. 목표 일정은 사업 여건에 따라 변경될 수 있습니다.',
    links: [['신세계프라퍼티 뉴스룸', 'https://www.shinsegaeproperty.com/en/propertysad/news/detail.do?idx=270']],
  },
  hospital: {
    title: '서울아산청라병원 공공자료', date: 'IFEZ 현장점검 · 2026-06-10',
    body: '청라의료복합타운은 800병상 규모 종합병원을 포함해 조성 중이며 2029년 하반기 준공 목표가 안내됐습니다.',
    links: [['IFEZ 추진 현황', 'https://www.ifez.go.kr/main/pst/view.do?pst_id=noti04&pst_sn=669463'], ['인천광역시 사업 안내', 'https://www.incheon.go.kr/IC010205/view?repSeq=DOM_0000000013835243']],
  },
  hana: {
    title: '하나금융그룹 그룹 헤드쿼터', date: 'IFEZ 보도자료 · 2026-05-26',
    body: '그룹 HQ는 2026년 5월 21일 준공됐으며 9월부터 연말까지 10개 관계사 약 2,200명이 순차 이전할 예정입니다.',
    links: [['IFEZ 보도자료', 'https://www.ifez.go.kr/main/pst/view.do?pst_id=noti03&pst_sn=669389']],
  },
  rail9: {
    title: '서울지하철 9호선·공항철도 직결', date: '국토교통부·서울시·인천시 공개자료 기준',
    body: '서울지하철 9호선과 공항철도 직결운행은 수도권 서부의 환승 부담을 줄이기 위한 사업입니다. 차량 도입과 운영 분담 등 관계기관 협의 및 사업 절차에 따라 일정이 달라질 수 있습니다.',
    links: [['국토교통부', 'https://www.molit.go.kr/'], ['인천광역시', 'https://www.incheon.go.kr/']],
  },
  rail2: {
    title: '서울지하철 2호선 청라 연장', date: '인천광역시 공개자료 기준',
    body: '서울지하철 2호선 청라 연장은 국가철도망 구축계획 반영을 건의한 계획입니다. 확정 노선이나 개통 일정이 발표된 단계와 구분해 확인해야 합니다.',
    links: [['인천광역시', 'https://www.incheon.go.kr/'], ['국토교통부', 'https://www.molit.go.kr/']],
  },
  raild: {
    title: 'GTX-D 청라 교통축', date: '국토교통부 공개자료 기준',
    body: 'GTX-D는 수도권 서부의 광역급행철도 접근성을 높이는 노선으로 추진·검토되고 있습니다. 세부 정차역과 일정은 후속 계획과 고시를 확인해야 합니다.',
    links: [['국토교통부', 'https://www.molit.go.kr/']],
  },
  raile: {
    title: 'GTX-E 인천공항–청라–서울 축', date: '국토교통부 공개자료 기준',
    body: 'GTX-E는 인천공항에서 청라를 거쳐 서울로 이어지는 광역급행철도 구상입니다. 사업 단계와 세부 노선은 관계기관의 후속 계획을 확인해야 합니다.',
    links: [['국토교통부', 'https://www.molit.go.kr/']],
  },
  rail3: {
    title: '인천도시철도 3호선', date: '인천광역시 도시철도망 계획 기준',
    body: '인천도시철도 3호선은 제2차 인천 도시철도망 구축계획에 포함된 노선입니다. 실제 착공과 개통까지는 타당성 검토와 후속 행정절차가 필요합니다.',
    links: [['인천광역시', 'https://www.incheon.go.kr/']],
  },
}

const UNIT_TABS = [
  { key: '84A', label: 'FAMILY UNIT', name: '4Bay 중심 가족형', desc: '가족의 일상과 수납 효율을 고려한 균형 있는 공간.', features: ['와이드 거실', '팬트리', '드레스룸'] },
  { key: '84B', label: 'FAMILY UNIT', name: '코너 개방 가족형', desc: '채광과 동선을 섬세하게 나눈 가족 중심 공간.', features: ['2면 개방', '알파룸', '대면형 주방'] },
  { key: '103A', label: 'GRAND UNIT', name: '여유로운 대형 가족형', desc: '넉넉한 공용부와 독립적인 마스터존.', features: ['대형 거실', '복수 수납', '마스터존'] },
  { key: '105OT', label: 'MULTI UNIT', name: '멀티 발코니 라이프', desc: '일과 휴식의 경계를 유연하게 바꾸는 공간.', features: ['멀티 발코니', '홈오피스', '팬트리'] },
  { key: '121OT', label: 'SIGNATURE UNIT', name: '시그니처 코너형', desc: '개방감과 프라이버시를 동시에 고려한 공간.', features: ['코너 조망', '독립 주방', '대형 수납'] },
  { key: '136OT', label: 'PENTHOUSE UNIT', name: '파노라마 스페셜형', desc: '청라의 스카이라인을 누리는 특별한 라이프.', features: ['파노라마 뷰', '라운지 거실', '프라이빗 존'] },
]

const COMMUNITY_CARDS = [
  { img: 'community-lounge.webp', alt: '라이프 라운지 이미지컷', label: '라이프 라운지' },
  { img: 'community-wellness.webp', alt: '웰니스 공간 이미지컷', label: '웰니스 공간' },
  { img: 'community-skyview.webp', alt: '스카이 뷰 이미지컷', label: '스카이 뷰' },
]

const PREMIUM_SLIDES = [
  { num: '01', img: 'premium-01.webp', alt: '저녁 도시 전경 이미지컷', title: '총 2,911가구 푸르지오 브랜드타운', desc: '최고 49층 총 2,911가구로 완성되는 청라의 대규모 브랜드타운' },
  { num: '02', img: 'location-cta.webp', alt: '국제업무단지 이미지컷', title: '국제업무단지의 센트럴 라이프', desc: '청라의 중심으로 완성되는 국제업무단지의 특별한 주거 가치' },
  { num: '03', img: 'plan-oceanview.webp', alt: '오션 시티뷰 이미지컷', title: '오션·시티뷰 조망 특화', desc: '오션·시티뷰를 동시에 누리는 2면 또는 3면 개방구조(일부 세대)' },
  { num: '04', img: 'community-wellness.webp', alt: '프리미엄 실내 이미지컷', title: '높은 희소가치와 합리적 분양가', desc: '2017년 이후 10년만의 분양가 상한제 공급 아파트' },
  { num: '05', img: 'community-lounge.webp', alt: '멀티 라이프 이미지컷', title: '멀티 라이프 플랫폼', desc: '팬트리 2개소 이상, 다양한 공간 활용의 멀티 발코니(OT)' },
]

const HISTORY = [
  { img: 'hana.webp', time: '2012', title: '하나금융타운의 시작', desc: '금융타운 조성을 위한 협약으로 청라의 금융축이 시작됐습니다.' },
  { img: 'hana.webp', time: '2017', title: '통합데이터센터 준공', desc: '하나드림타운 1단계가 안착하며 금융 인프라의 기반을 열었습니다.' },
  { img: 'hana.webp', time: '2018', title: '글로벌캠퍼스 완성', desc: '인재와 금융의 흐름이 청라로 이어졌습니다.' },
  { img: 'hana.webp', time: '2026.05', title: '그룹 헤드쿼터 준공', desc: '하나금융그룹 HQ가 준공되고 순차 이전을 준비합니다.' },
  { img: 'starfield.webp', time: '2027 목표', title: '스타필드 청라 준공', desc: '멀티스타디움과 쇼핑·문화가 결합된 공간의 준공 목표입니다.' },
  { img: 'starfield.webp', time: '2028 목표', title: '스타필드 청라 개장', desc: '2.3만석 돔과 350여 개 브랜드를 계획합니다.' },
  { img: 'hospital.webp', time: '2029 하반기', title: '서울아산청라병원', desc: '800병상 종합병원을 품은 의료복합타운 준공 목표입니다.' },
]

const BRAND_STATS = [
  { label: '아파트', value: '868세대', sub: '전용 84㎡ · 103㎡' },
  { label: '오피스텔', value: '987실', sub: '전용 105㎡ · 121㎡ · 136㎡' },
  { label: '대지면적', value: '35,306.00㎡', sub: '10,680.07평' },
  { label: '주차대수', value: '총 3,124대', sub: 'APT 1,389 · OT 1,695 · 상업 40' },
]
const BRAND_WIDE = { label: '연면적', value: 'APT 173,952.7508㎡ · OT 245,645.4826㎡', sub: '상업시설 4,959.8424㎡' }
const BRAND_WORDS = [
  { letter: 'A', copy: ['흔들리지 않는', 'ABSOLUTE'] },
  { letter: 'R', copy: ['시선을 사로잡는', 'REMARKABLE'] },
  { letter: 'ONE', copy: ['청라를 대표할', 'ONLY ONE'] },
]

const REQUEST_CHECKS = ['타입별 평면도', '공급금액', '계약조건', '공급일정']
const CONSULT_CHECKS = ['방문예약', '모델하우스 위치 전송', '자료요청', '기타문의']

const TRANSITION_MS = 520

export default function SignatureArkoneImmersive({ site }) {
  const sig = site.signature
  const telNumber = site.telNumber
  const utmSource = useUtmSource() ?? '직접유입'
  const resolvedAdminPhones = site.adminPhonesByUtm?.[utmSource] ?? site.adminPhones

  const [index, setIndex] = useState(0)
  const [introDone, setIntroDone] = useState(false)
  const [introReady, setIntroReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [premiumIndex, setPremiumIndex] = useState(0)
  const [unitKey, setUnitKey] = useState(UNIT_TABS[0].key)
  const [contactTab, setContactTab] = useState('visit')
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [sourceInfo, setSourceInfo] = useState(null)
  const [faqIndex, setFaqIndex] = useState(0)
  const [toast, setToast] = useState('')

  const viewportRef = useRef(null)
  const visitDialogRef = useRef(null)
  const requestDialogRef = useRef(null)
  const sourceDialogRef = useRef(null)
  const mapDialogRef = useRef(null)
  const infoDialogRef = useRef(null)
  const faqDialogRef = useRef(null)
  const openDialogCountRef = useRef(0)

  const transitioningRef = useRef(false)
  const wheelRef = useRef({ sum: 0, dir: 0, consumed: false, lastAt: 0 })
  const touchRef = useRef({ x: 0, y: 0, blocked: false })
  const idleTimerRef = useRef(null)

  const historyTrackRef = useRef(null)
  const historyViewportRef = useRef(null)
  const historyStateRef = useRef({ x: 0, dragging: false, startX: 0, baseX: 0, lastT: 0, half: 0, raf: 0 })

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

  // 인트로 시퀀스 — 감속 모션 선호 시 즉시 건너뜀. 그 외엔 참고 시안과 동일하게
  // 첫 페인트 다음 프레임에 .ready를 붙여 CSS 애니메이션을 시작하고, 5.6초 뒤 종료
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntroDone(true)
      return
    }
    const raf = requestAnimationFrame(() => setIntroReady(true))
    const t = setTimeout(() => setIntroDone(true), 5600)
    return () => { cancelAnimationFrame(raf); clearTimeout(t) }
  }, [])

  // 인트로가 끝나면 안내 팝업을 띄우고, 닫으면 이어서 방문예약 다이얼로그를 띄움
  // (요청 반영 — 별도 디자인의 "관심고객등록" 팝업 대신, 이미 있는 방문예약 다이얼로그를 그대로 재사용).
  // 세션 내 재노출 억제 없이 매번(새로고침해도) 노출
  useEffect(() => {
    if (!introDone) return
    const t = setTimeout(() => setNoticeOpen(true), 700)
    return () => clearTimeout(t)
  }, [introDone])

  const closeNotice = () => {
    setNoticeOpen(false)
    setTimeout(() => openDialog(visitDialogRef), 300)
  }

  const blockingOverlay = () => noticeOpen || openDialogCountRef.current > 0

  const setPanels = (next) => {
    const clamped = Math.max(0, Math.min(PANEL_ORDER.length - 1, next))
    if (PANEL_ORDER[clamped] === 'premium' && PANEL_ORDER[index] !== 'premium') {
      setPremiumIndex(index > clamped ? 4 : 0)
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
      if (dir > 0 && premiumIndex < 4) { setPremiumIndex((p) => p + 1); lock(); return true }
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

  // 히스토리 타임라인 자동 스크롤 + 드래그
  useEffect(() => {
    const track = historyTrackRef.current
    const vp = historyViewportRef.current
    if (!track || !vp) return
    const st = historyStateRef.current
    const measure = () => { st.half = track.scrollWidth / 2 }
    measure()
    window.addEventListener('resize', measure)

    const loop = (t) => {
      if (activePanelId !== 'history' || document.visibilityState !== 'visible') { st.raf = 0; return }
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
      const should = activePanelId === 'history' && document.visibilityState === 'visible'
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

  // 패널 진입 시 그 안의 video만 재생, 나머지는 정지
  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    vp.querySelectorAll('video').forEach((v) => {
      if (v.closest(`.${styles.isActive}`)) v.play().catch(() => {})
      else v.pause()
    })
  }, [index])

  const openDialog = (ref) => {
    setMenuOpen(false)
    openDialogCountRef.current += 1
    ref.current?.showModal()
  }
  const closeDialog = (ref) => {
    ref.current?.close()
    openDialogCountRef.current = Math.max(0, openDialogCountRef.current - 1)
  }

  const openSource = (key) => {
    setSourceInfo(SOURCES[key])
    openDialog(sourceDialogRef)
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

  return (
    <div className={styles.root}>
      {!introDone && <IntroOverlay onSkip={() => setIntroDone(true)} ready={introReady} />}

      <header className={styles.siteHeader}>
        <div className={styles.headerLeft}>
          <button type="button" className={styles.headerLogo} onClick={() => navigateTo('hero')} aria-label="맨 위로">
            <Image src="/apt/cheongna-arkone-prugio/logo-white.svg" alt="PRUGIO" width={105} height={17} />
          </button>
          <strong className={styles.headerProject}>청라 아크원</strong>
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
          <video className={styles.heroVideo} src={ASSET('hero-video.mp4')} autoPlay muted loop playsInline preload="metadata" />
          <div className={styles.heroOne} aria-hidden="true">ONE</div>
          <div className={styles.capBadge}><div><small>10년만의 공급</small><b>분양가 상한제<br />적용단지</b></div></div>
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>ABSOLUTE · REMARKABLE · ONE</p>
              <h1 className={styles.sectionTitle}>청라의 정점을<br /><span className={styles.gradientText}>빛내는 단 하나</span></h1>
              <p className={styles.sectionDesc}>CHEONGNA ARK-ONE PRUGIO</p>
            </header>
          </div>
          <div className={styles.scrollCue}><i /><span>SCROLL</span></div>
        </section>

        {/* 아크원 이야기 */}
        <section className={panelClass('brand')} id="brand">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>아크원 이야기</p>
              <h2 className={styles.sectionTitle}>청라에 세워질<br className={styles.titleBreak} /><span className={styles.gradientText}>하나의 기준</span></h2>
              <p className={styles.sectionDesc}>ARK-ONE은 청라의 절대적 기준이 될 단 하나의 주거명작을 상징합니다.</p>
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
              <h2 className={styles.sectionTitle}>기다림 없이<br className={styles.titleBreak} /><span className={styles.gradientText}>여유로운 상담</span></h2>
              <p className={styles.sectionDesc}>방문 희망일과 시간을 먼저 선택하면 전담 상담사가 일정 확인 후 안내드립니다.</p>
            </header>
            <div className={styles.visual}>
              <Image src={ASSET('visit-photo.webp')} alt="청라 아크원 푸르지오 이미지컷" fill sizes="100vw" />
              <div className={styles.visitCard}>
                <h3>100% 담당제</h3>
                <p>예약하시면 담당자가 배정되어 즉시 연락드립니다.</p>
                <div className={styles.visitHours}>
                  <div><small>모델하우스 관람가능시간</small><strong>10:00~18:00</strong></div>
                  <button type="button" onClick={() => openDialog(visitDialogRef)}>방문예약</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 랜드마크 3종 */}
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
                  <h3>{lm.cardTitle}</h3>
                  <p>{lm.cardDesc}</p>
                  <div className={styles.stats}>
                    {lm.stats.map(([v, l]) => (<div key={l}><strong>{v}</strong><span>{l}</span></div>))}
                  </div>
                  <button type="button" className={styles.sourceButton} onClick={() => openSource(lm.source)}>공공자료 요약 및 출처</button>
                </article>
              </div>
            </div>
          </section>
        ))}

        {/* 미래 교통 계획 */}
        <section className={panelClass('network')} id="network">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>미래 교통 계획</p>
              <h2 className={styles.sectionTitle}>서울을 향한<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 개의 축</span></h2>
              <p className={styles.sectionDesc}>확정 노선과 건의·검토 단계 계획을 구분해 공공자료 기준으로 정리했습니다.</p>
            </header>
            <div className={styles.networkList}>
              {ROUTES.map((r, i) => (
                <button key={r.key} type="button" className={styles.route} style={{ '--route': r.color, '--i': i }} onClick={() => openSource(r.key)}>
                  <b>{r.label}</b><span>{r.desc} · 자료 보기</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 입지환경 */}
        <section className={cn(panelClass('location'), styles.locationPanel)} id="location">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>입지환경</p>
              <h2 className={styles.sectionTitle}>청라의 변화가<br className={styles.titleBreak} /><span className={styles.gradientText}>한곳에 모이다</span></h2>
              <p className={styles.sectionDesc}>문화·의료·금융·교통이 연결되는 청라국제업무단지의 중심.</p>
            </header>
            <div className={styles.visual} role="button" tabIndex={0} onClick={() => openDialog(mapDialogRef)} onKeyDown={(e) => e.key === 'Enter' && openDialog(mapDialogRef)}>
              <Image src="/apt/cheongna-arkone-prugio/location-map.webp" alt="청라 아크원 푸르지오 위치 안내도" fill sizes="100vw" />
              <button type="button" className={styles.mapZoom} onClick={(e) => { e.stopPropagation(); openDialog(mapDialogRef) }}>＋ 지도 확대</button>
            </div>
            {/* 요청 반영 — 지도 이미지 하단에 겹쳐 놓으면 지도 자체의 지명 라벨과 겹쳐 보여서
                이미지 밖 별도 목록으로 분리 */}
            <div className={styles.mapPins}>
              <span>스타필드 청라</span><span>서울아산청라병원</span><span>하나드림타운</span><span>광역 교통망</span>
            </div>
          </div>
        </section>

        {/* 유니트 */}
        <section className={panelClass('unit')} id="unit">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>주거공간</p>
              <h2 className={styles.sectionTitle}>다양한 생활을 담는<br className={styles.titleBreak} /><span className={styles.gradientText}>유연한 공간</span></h2>
              <p className={styles.sectionDesc}>다양한 라이프스타일을 상상하는 유니트 프리뷰입니다.</p>
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
                <div className={styles.unitFeatures}>{unit.features.map((f) => (<span key={f}>{f}</span>))}</div>
              </article>
            </div>
          </div>
        </section>

        {/* 단지배치 */}
        <section className={panelClass('plan')} id="plan">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>단지배치</p>
              <h2 className={styles.sectionTitle}>도시와 바다를 향한<br className={styles.titleBreak} /><span className={styles.gradientText}>열린 배치</span></h2>
              <p className={styles.sectionDesc}>최고 49층 스카이라인과 일부 2·3면 개방구조가 만드는 오션·시티뷰.</p>
            </header>
            <div className={styles.visual}>
              <Image src={ASSET('plan-oceanview.webp')} alt="오션 시티뷰 이미지컷" fill sizes="100vw" />
              <div className={styles.planPoints}><span>최고 49층</span><span>오션·시티뷰</span><span>일부 2·3면 개방</span></div>
            </div>
          </div>
        </section>

        {/* 커뮤니티와 조경 */}
        <section className={panelClass('community')} id="community">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>커뮤니티와 조경</p>
              <h2 className={styles.sectionTitle}>일상의 여백을<br className={styles.titleBreak} /><span className={styles.gradientText}>더 풍요롭게</span></h2>
              <p className={styles.sectionDesc}>휴식·건강·교류를 하나의 흐름으로 연결하는 커뮤니티와 조경 콘셉트.</p>
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
              <h2 className={styles.sectionTitle}>청라 생활을 넓히는<br className={styles.titleBreak} /><span className={styles.gradientText}>다섯 가지 가치</span></h2>
            </header>
            <div className={styles.premiumBrand}>
              <Image className={styles.premiumSymbol} src={ASSET('prugio-symbol.svg')} alt="푸르지오 심볼" width={38} height={38} />
              <Image className={styles.premiumWord} src="/apt/cheongna-arkone-prugio/logo-white.svg" alt="PRUGIO" width={104} height={17} />
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

        {/* 청라의 연혁 */}
        <section className={panelClass('history')} id="history">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>청라의 연혁</p>
              <h2 className={styles.sectionTitle}>시간이 증명한<br className={styles.titleBreak} /><span className={styles.gradientText}>청라의 미래가치</span></h2>
              <p className={styles.sectionDesc}>자동 이동·드래그·화살표로 살펴보는 청라의 변화.</p>
            </header>
            <div className={styles.historyViewport} ref={historyViewportRef}>
              <div className={styles.historyTrack} ref={historyTrackRef}>
                {[...HISTORY, ...HISTORY].map((h, i) => (
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
              <span>CHEONGNA TIMELINE</span>
              <div>
                <button type="button" className={styles.circleButton} aria-label="이전 연혁" onClick={() => { historyStateRef.current.x += window.innerWidth < 768 ? 170 : 300 }}>←</button>
                <button type="button" className={styles.circleButton} aria-label="다음 연혁" onClick={() => { historyStateRef.current.x -= window.innerWidth < 768 ? 170 : 300 }}>→</button>
              </div>
            </div>
          </div>
        </section>

        {/* 상담과 예약 */}
        <section className={panelClass('contact')} id="contact">
          <div className={styles.sectionShell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>{site.projectName}</p>
              <h2 className={styles.sectionTitle}>관심 있는 정보를<br className={styles.titleBreak} /><span className={styles.gradientText}>상담받아보세요</span></h2>
              <p className={styles.sectionDesc}>상담 유형을 선택하면 입력 화면이 즉시 전환됩니다.</p>
            </header>
            <div className={styles.contactLayout}>
              <div className={styles.contactTabs}>
                <button type="button" className={cn(contactTab === 'visit' && styles.isActive)} onClick={() => setContactTab('visit')}>방문예약</button>
                <button type="button" className={cn(contactTab === 'request' && styles.isActive)} onClick={() => setContactTab('request')}>자료요청</button>
              </div>
              <div className={styles.contactPanel}>
                {contactTab === 'visit' ? (
                  <LeadForm
                    kind="visit" idPrefix="contactVisit" site={site}
                    onSubmit={submitLead}
                  />
                ) : (
                  <LeadForm
                    kind="request" idPrefix="contactRequest" site={site}
                    onSubmit={submitLead}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <section className={cn(panelClass('footer'), styles.footerPanel)} id="footer">
          <footer className={styles.siteFooter}>
            <div className={styles.footerLogos}>
              <Image src="/apt/cheongna-arkone-prugio/logo-white.svg" alt="PRUGIO" width={108} height={18} />
              <Image src="/apt/cheongna-arkone-prugio/logo-daewoo.svg" alt="대우건설" width={84} height={20} />
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
              신규 유니트·단지·커뮤니티 콘텐츠는 시안이며, 확정 정보는 모집공고를 확인해야 합니다.{' '}
              {sig.footer.disclaimers.join(' ')}
            </p>
            <p className={styles.footerCopy}>© 2026 {site.projectName.toUpperCase().replace(/\s+/g, ' ')}. ALL RIGHTS RESERVED.</p>
            <div className={styles.footerLinks}>
              <button type="button" onClick={() => openDialog(infoDialogRef)}>모집공고 안내</button>
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
          <p>모델하우스 관람가능시간 10:00~18:00 (담당자와 조율가능)</p>
          <LeadForm
            kind="visit" idPrefix="visitDialog" site={site}
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
            kind="request" idPrefix="requestDialog" site={site}
            onSubmit={async (kind, form) => { const ok = await submitLead(kind, form); if (ok) closeDialog(requestDialogRef); return ok }}
          />
        </div>
      </dialog>

      <dialog ref={sourceDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(sourceDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(sourceDialogRef)}>×</button>
          <h2>공공자료 요약 및 출처</h2>
          {sourceInfo && (
            <>
              <p className={styles.sourceMeta}>{sourceInfo.title} · {sourceInfo.date}</p>
              <div className={styles.sourceBody}>{sourceInfo.body}</div>
              <div className={styles.sourceLinks}>
                {sourceInfo.links.map(([label, href]) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
                ))}
              </div>
            </>
          )}
        </div>
      </dialog>

      <dialog ref={mapDialogRef} className={cn(styles.dialog, styles.mapDialog)} onClick={(e) => e.target === e.currentTarget && closeDialog(mapDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(mapDialogRef)}>×</button>
          <Image src="/apt/cheongna-arkone-prugio/location-map.webp" alt="청라 아크원 푸르지오 위치 안내도 확대" fill sizes="96vw" />
        </div>
      </dialog>

      <dialog ref={infoDialogRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && closeDialog(infoDialogRef)}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => closeDialog(infoDialogRef)}>×</button>
          <h2>모집공고 안내</h2>
          <div className={styles.sourceBody}>
            <h3>모집공고가 최우선 기준입니다.</h3>
            <p>청약자격, 공급금액, 일정, 계약조건, 타입과 면적 등 확정 정보는 모집공고를 확인해 주세요.</p>
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
          <div className={styles.popupShell}>
            <article className={styles.noticeCard}>
              <button type="button" className={styles.noticeX} aria-label="닫기" onClick={closeNotice}>×</button>
              <div className={styles.noticeImageWrap}>
                <Image src={ASSET('notice-popup.webp')} alt="" fill sizes="440px" />
              </div>
              <h3>{site.projectName}</h3>
              <p>관심고객등록 시 분양 일정과 주요 소식을 가장 먼저 안내해 드립니다.</p>
              <div className={styles.noticeActions}>
                <button type="button" className={styles.close} onClick={closeNotice}>닫기</button>
              </div>
            </article>
          </div>
        </div>
      )}

      {toast && <div className={cn(styles.toast, styles.isVisible)} role="status" aria-live="polite">{toast}</div>}
    </div>
  )
}

// 참고 시안의 .pc-float 그대로 — 태블릿/PC 폭에서 화면 우측 중앙에 떠 있는 4버튼 세로 바
// (방문예약/자료요청/F&A/TOP). 방문예약 버튼만 라임 그라데이션 CTA로 강조.
const FAQ_ITEMS = [
  { q: '분양가 상한제가 적용되나요?', a: '2017년 이후 10년만에 분양가 상한제가 적용되는 아파트입니다. 정확한 공급금액은 모집공고 확정 후 안내됩니다.' },
  { q: '방문예약은 언제 가능한가요?', a: '모델하우스 관람가능시간은 10:00~18:00이며, 방문예약 시 담당자가 배정되어 일정을 안내해 드립니다.' },
  { q: '총 세대수는 몇 세대인가요?', a: '아파트 868세대(전용 84·103㎡), 오피스텔 987실(전용 105·121·136㎡)로 구성됩니다.' },
  { q: '주차는 몇 대 가능한가요?', a: '총 3,124대(APT 1,389대·OT 1,695대·상업 40대) 규모로 계획되어 있습니다.' },
  { q: '시행·시공사는 어디인가요?', a: '시행 (주)청라스마트시티, 시공 (주)대우건설(푸르지오)입니다.' },
  { q: '확정되지 않은 정보는 어떻게 확인하나요?', a: '개발계획·일정 등은 관계기관 발표에 따라 변경될 수 있어, 확정 정보는 모집공고를 최우선 기준으로 확인해야 합니다.' },
]

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
  { img: 'starfield.webp', label: '01 · CULTURE', name: '스타필드 청라 · 돔구장' },
  { img: 'hospital.webp', label: '02 · MEDICAL', name: '서울아산청라병원 · 의료복합타운' },
  { img: 'hana.webp', label: '03 · BUSINESS', name: '하나금융그룹 · 청라 본사' },
]

function IntroOverlay({ onSkip, ready }) {
  return (
    <div className={cn(styles.intro, ready && styles.ready)} aria-label="청라의 핵심 인프라와 푸르지오를 소개하는 인트로">
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
          <span>CHEONGNA&apos;S NEW AXIS</span>
          <b>Life meets<br />the One.</b>
        </div>
      </section>
      <section className={cn(styles.introStage, styles.introTwo)} aria-hidden="true">
        <i className={cn(styles.introRing, styles.ringA)} />
        <i className={cn(styles.introRing, styles.ringB)} />
        <div className={styles.introBrand}>
          <Image className={styles.mark} src={ASSET('prugio-symbol.svg')} alt="" width={190} height={190} />
          <Image className={styles.word} src="/apt/cheongna-arkone-prugio/logo-white.svg" alt="PRUGIO" width={290} height={47} />
          <p>ABSOLUTE · REMARKABLE · ONE</p>
        </div>
      </section>
      <button type="button" className={styles.introSkip} onClick={onSkip}>건너뛰기</button>
    </div>
  )
}

function LeadForm({ kind, idPrefix, site, onSubmit }) {
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
          <input className={styles.input} defaultValue="010" readOnly aria-label="휴대전화 앞자리" />
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
      <details className={styles.terms}>
        <summary>개인정보 처리방침 전문 보기</summary>
        <div>{privacyText}</div>
      </details>
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
