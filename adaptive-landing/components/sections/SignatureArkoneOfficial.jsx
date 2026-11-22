'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import ArkoneApplyForm from './ArkoneApplyForm'
import styles from './SignatureArkoneOfficial.module.css'

// 청라 아크원 푸르지오 공식 홈페이지(arkone-prugio.com, 2026-11-22 확인) 메인을 따라 만든 일반 스크롤 화면.
// 공식 메인의 섹션 순서(HERO → 아크원이란 → OVERVIEW → LOCATION → LIFESTYLE → PREMIUM → BRAND → CONTACT → 푸터)와
// 이미지·문구·브랜드 컬러(token.css)·폰트(SUIT / Eulyoo1945 / Aboreto)를 그대로 쓰고,
// 공식의 인트로 애니메이션·fullpage 스크롤·홍보영상(유튜브 목록) 섹션은 뺌.
// 관심고객등록은 외부 링크 대신 우리 방문예약 폼(ArkoneApplyForm)으로 접수(문자·시트 연동).
// 사용 현장: cheongna-arkone-prugio-4 (signature.arkoneOfficial: true)

const A = (name) => `/apt/cheongna-arkone-prugio-4/${name}`

const NAV = [
  { id: 'overview', label: '사업개요' },
  { id: 'location', label: '입지환경' },
  { id: 'lifestyle', label: '라이프스타일' },
  { id: 'premium', label: '프리미엄' },
  { id: 'brand', label: '브랜드' },
  { id: 'contact', label: '오시는길' },
]

const STATS = [
  { label: '건축면적', pre: '약', value: '12,278', unit: '㎡' },
  { label: '연면적', pre: '약', value: '424,558', unit: '㎡' },
  { label: '주차대수', value: '3,124', unit: '대' },
  { label: '세대수', value: '1,855', unit: '세대' },
]

// 공식 메인 LIFESTYLE 6개 항목 원문
const LIFESTYLE = [
  { title: '서울과 하나되는 교통 네트워크', desc: ['강남, 강북을 잇는 국제업무단지역(예정), 청라국제도시역', '경인고속국도 지하화(예정)로 서울을 더 빠르게!'] },
  { title: '청라국제업무단지 대표 브랜드타운', desc: ['청라의 새로운 주거중심, 청라국제업무단지를 대표하는', '푸르지오 브랜드타운의 완성'] },
  { title: '오션·시티뷰 조망 특화', desc: ['오션·시티뷰를 동시에 누리는', 'LDK 3면 개방(일부 가구) or 거실 2면 개방(일부 가구)'] },
  { title: '단지 앞 안전한 통학길의 교육 프리미엄', desc: ['도보 약 5분 초교 신설(예정), 중교 신설(계획)', '도보거리 경연초·중교, 청라달튼외국인학교'] },
  { title: '완벽해지는 청라의 트렌디한 생활특권', desc: ["하나드림타운, 돔구장 & 스타필드 청라('28년 개장 예정)", "서울아산청라병원('29년 예정), 코스트코 청라", "영상문화복합단지('31년 계획), 인천로봇랜드(예정) 등"] },
  { title: '높은 희소가치와 합리적 분양가', desc: ['청라가 기다려온 신규공급', '2017년 이후 약 10년 만의 분양가 상한제 공급 아파트'], note: '※ 500세대 이상 대단지 기준' },
]

const ROUTES = [
  { src: 'lifestyle-route-img-1.webp', alt: '청라국제도시역 — 공항철도·9호선 직결(계획) — 마곡나루역, 서울 최대 R&D 마곡업무지구를 한 번에' },
  { src: 'lifestyle-route-img-2.webp', alt: '국제업무단지역 — 7호선 청라연장선(예정) — 강남구청역, 강남권역도 환승 없이 한 번에' },
  { src: 'lifestyle-route-img-3.webp', alt: '남청라IC — 경인고속국도 지하화(예정) & 신월여의지하도로 — 여의도, 여의도를 더 빠르게' },
]

const PREMIUM = [
  { src: 'premium-visual-img-01.webp', title: '오션·시티뷰를 품은 거실', desc: '탁 트인 개방감 위로 펼쳐지는 청라의 풍경' },
  { src: 'premium-visual-img-02.webp', title: '머무는 순간이 특별한 침실', desc: '하루의 끝을 편안하게 감싸는 프라이빗 공간' },
  { src: 'premium-visual-img-03.webp', title: '빛과 바람이 머무는 라이프', desc: '정상을 넘어, 새로운 라이프스타일의 기준' },
]

const BRAND = [
  { src: 'brand-img-01.webp', title: '가장 나에 가까운 본연의 모습', desc: '지친 하루를 마치고 가장 나에게 가까운 본연의 모습으로 돌아와 누리는 세련된 편안함.' },
  { src: 'brand-img-02.webp', title: '가장 편안한 상태로 살아가길', desc: '공기, 소리, 빛, 삶의 모든 순간이 가장 자연스러운 상태로 머무는 곳.' },
  { src: 'brand-img-03.webp', title: '나를 닮은 우리 집', desc: '보이지 않는 곳 디테일까지 당신을 위해 설계된 공간, 그 이상의 감동.' },
]

const PLACES = [
  { label: '견본주택', addr: '인천광역시 서해구 청라동 87-1번지', naver: 'https://naver.me/xjYQRQX3', kakao: 'https://kko.to/ECKFY834xe' },
  { label: '현장', addr: '인천광역시 서해구 청라동 86-1번지', naver: 'https://naver.me/Ge7JVSTn', kakao: 'https://kko.to/v0EVmGNQ0l' },
]

// 스크롤 진입 시 .in 클래스를 붙여 페이드업(공식 사이트의 GSAP 등장 모션을 가볍게 대체)
function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll(`.${styles.reveal}`)
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add(styles.in)); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target) } })
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [rootRef])
}

export default function SignatureArkoneOfficial({ site }) {
  const content = site.signature.arkoneOfficialContent ?? {}
  const utmSource = useUtmSource() ?? '직접유입'
  const telNumber = site.telNumberByUtm?.[utmSource] ?? site.telNumber
  const telHref = `tel:${telNumber.replace(/[^0-9]/g, '')}`
  const footer = site.signature.footer

  const rootRef = useRef(null)
  const dialogRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroBadge = content.heroBadge ?? '분양가 상한제 적용단지'

  useReveal(rootRef)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 진입 팝업 — 인트로 없이 첫 화면이 뜬 뒤 방문예약 신청 폼(다른 아크원 현장과 같은 흐름)
  useEffect(() => {
    if (content.entryPopup === false) return
    const t = setTimeout(() => openForm(), 900)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openForm = () => {
    const d = dialogRef.current
    if (d && !d.open) d.showModal()
    setMenuOpen(false)
  }
  const closeForm = () => dialogRef.current?.close()

  const go = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={rootRef} className={styles.page}>
      {/* 공식 폰트 — 영문 Aboreto(Google Fonts), 국문 세리프 Eulyoo1945(module.css @font-face), 본문 SUIT */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" precedence="default" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" precedence="default" />

      {/* HEADER */}
      <header className={cn(styles.header, (scrolled || menuOpen) && styles.headerSolid)}>
        <div className={styles.headerInner}>
          <a href="#hero" onClick={go('hero')} className={styles.logo} aria-label="청라 아크원 푸르지오 처음으로">
            <Image src={A('logotype.svg')} alt="PRUGIO" width={128} height={21} priority />
          </a>
          <nav className={styles.gnb} aria-label="주요 메뉴">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>
            ))}
          </nav>
          <div className={styles.headerRight}>
            <button type="button" className={styles.registerPill} onClick={openForm}>관심고객등록 <span aria-hidden="true">›</span></button>
            <a className={styles.headerTel} href={telHref}>{telNumber.replace(/-/g, '.')}</a>
            <a className={styles.mTel} href={telHref} aria-label={`전화 ${telNumber}`}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" /></svg>
            </a>
            <button type="button" className={cn(styles.burger, menuOpen && styles.burgerOpen)} onClick={() => setMenuOpen((v) => !v)} aria-label="전체 메뉴" aria-expanded={menuOpen}>
              <i /><i /><i />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className={styles.mMenu} aria-label="전체 메뉴">
            {NAV.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>))}
            <button type="button" onClick={openForm}>관심고객등록</button>
          </nav>
        )}
      </header>

      <main>
        {/* 1. HERO */}
        <section id="hero" className={styles.hero}>
          <Image className={styles.heroBg} src={A('hero-bg.webp')} alt="청라 아크원 푸르지오 조감도 — 구름 위로 솟은 스카이라인" fill priority sizes="100vw" />
          <div className={styles.heroCopy}>
            <Image className={styles.heroStar} src={A('intro-ico-star.svg')} alt="" width={30} height={34} aria-hidden="true" />
            <h1 className={styles.heroTitle}>
              <span>청라의 정점을 빛내는</span>
              <strong>푸르지오의 완성</strong>
            </h1>
            <p className={styles.heroName}>청라 아크원 푸르지오</p>
            <span className={styles.heroBadgeText}>{heroBadge}</span>
          </div>
          <div className={styles.heroCircles}>
            <span className={cn(styles.circle, styles.circleBrown)}>
              <Image className={styles.circleRing} src={A('hero-circle-text.svg')} alt="" width={132} height={132} aria-hidden="true" />
              <Image src={A('hero-circle-01.svg')} alt="분양가 상한제 APT" width={128} height={128} />
            </span>
            <button type="button" className={cn(styles.circle, styles.circleGreen)} onClick={openForm}>
              <Image className={styles.circleRing} src={A('hero-circle-text.svg')} alt="" width={132} height={132} aria-hidden="true" />
              <Image src={A('hero-circle-register.svg')} alt="관심고객등록 REGISTER" width={128} height={128} />
            </button>
          </div>
          <a className={styles.scroll} href="#concept" onClick={go('concept')}><span>SCROLL</span><i aria-hidden="true" /></a>
        </section>

        {/* 아크원(ARK-ONE)이란? */}
        <section id="concept" className={styles.concept}>
          <div className={cn(styles.conceptInner, styles.reveal)}>
            <Image className={styles.conceptEmblem} src={A('hero-brand-img.webp')} alt="CHEONG NA ARK-ONE PRUGIO 엠블럼" width={1428} height={1500} sizes="(max-width: 1023px) 70vw, 420px" />
            <div className={styles.conceptText}>
              <Image src={A('ico-star.svg')} alt="" width={40} height={40} aria-hidden="true" />
              <h2>아크원(ARK-ONE)이란?</h2>
              <p className={styles.acronym}>
                <span><b>A</b>BSOLUTE</span>
                <span><b>R</b>EMAR<b>K</b>ABLE</span>
                <span><b>ONE</b></span>
              </p>
              <p className={styles.conceptDesc}>청라의 절대적 기준이 될<br />단 하나의 주거명작을 상징</p>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW */}
        <section id="overview" className={styles.overview}>
          <Image className={styles.bgCover} src={A('overview-bg.webp')} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.overviewInner}>
            <div className={cn(styles.overviewLeft, styles.reveal)}>
              <p className={styles.overviewSmall}>청라 10년의 기다림,<br />그 모든 프리미엄을 담은</p>
              <p className={styles.overviewLead}>단 하나의 절대적 명작</p>
              <h2 className={styles.arkWord}>ARK-ONE</h2>
            </div>
            <div className={cn(styles.overviewRight, styles.reveal)}>
              <p className={styles.overviewCatch}>청라를 드높이는<br />프리미엄 랜드마크</p>
              <Image className={styles.overviewLogo} src={A('overview-logo.svg')} alt="PRUGIO" width={160} height={26} />
              <dl className={styles.stats}>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.pre && <small>{s.pre}</small>}<strong>{s.value}</strong><em>{s.unit}</em></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 3. LOCATION */}
        <section id="location" className={styles.location}>
          <div className={styles.arkSplit}>
            <div className={styles.arkSplitDark}>
              <Image className={styles.sphere} src={A('location-img.webp')} alt="" width={1920} height={1920} sizes="(max-width: 1023px) 100vw, 50vw" aria-hidden="true" />
            </div>
            <div className={styles.arkSplitGray} />
            <p className={styles.arkSplitWord} aria-hidden="true"><span className={styles.wordLight}>ARK</span><span className={styles.wordDash}>-</span><span className={styles.wordDark}>ONE</span></p>
            <p className={styles.absolute} aria-hidden="true">ABSOLUTE&nbsp;&nbsp;&nbsp;&nbsp;REMARKABLE</p>
          </div>
          <div className={styles.central}>
            <div className={cn(styles.centralText, styles.reveal)}>
              <h2>CENTRAL LOCATION</h2>
              <p>청라가 기다려온 프리미엄의 완성,<br />그 모든 가치가 모이는 자리</p>
            </div>
            <div className={cn(styles.centralMap, styles.reveal)}>
              <Image src={A('location-map.webp')} alt="청라국제도시 내 청라 아크원 푸르지오 위치" width={1920} height={1960} sizes="(max-width: 1023px) 100vw, 55vw" />
              <span className={styles.mapBubble}>청라 아크원 푸르지오</span>
            </div>
          </div>
          <div className={styles.routes}>
            <div className={cn(styles.routesInner, styles.reveal)}>
              <p className={styles.eyebrowEn}>CENTRAL LOCATION</p>
              <h3>더 가까워지는 서울!</h3>
              <ul>
                {ROUTES.map((r) => (
                  <li key={r.src}><Image src={A(r.src)} alt={r.alt} width={960} height={246} sizes="(max-width: 1023px) 92vw, 760px" /></li>
                ))}
              </ul>
              <p className={styles.smallNote}>※ 교통 계획은 관계기관 발표 자료 기준으로 향후 변경될 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* 4. LIFESTYLE */}
        <section id="lifestyle" className={styles.lifestyle}>
          <div className={styles.lifeLeft}>
            <Image className={styles.bgCover} src={A('premium-img-left-01.webp')} alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" aria-hidden="true" />
            <div className={cn(styles.lifeLeftText, styles.reveal)}>
              <Image src={A('lifestyle-ico-star.svg')} alt="" width={30} height={34} aria-hidden="true" />
              <p>공간의 특별함도 자부심의 높이도</p>
              <h2>정점을 넘어<br />완성된 라이프로</h2>
            </div>
            <figure className={cn(styles.lifeVisual, styles.reveal)}>
              <Image src={A('lifestyle-visual-img-1.webp')} alt="넓은 창과 소파가 있는 여유로운 거실" width={968} height={1200} sizes="(max-width: 1023px) 60vw, 300px" />
              <figcaption>이미지컷</figcaption>
            </figure>
          </div>
          <div className={styles.lifeRight}>
            <p className={cn(styles.perfect, styles.reveal)}>PERFECT LIFESTYLE</p>
            <ul className={styles.lifeList}>
              {LIFESTYLE.map((l) => (
                <li key={l.title} className={styles.reveal}>
                  <h3>{l.title}</h3>
                  <p>{l.desc.map((d, i) => (<span key={i}>{d}</span>))}</p>
                  {l.note && <small>{l.note}</small>}
                </li>
              ))}
            </ul>
            <div className={cn(styles.lifeThumbs, styles.reveal)}>
              <figure><Image src={A('lifestyle-visual-img-2.webp')} alt="도시와 어우러진 아파트 단지 이미지" width={296} height={600} sizes="160px" /><figcaption>이미지컷</figcaption></figure>
              <figure><Image src={A('lifestyle-visual-img-3.webp')} alt="지하철 교통 네트워크 이미지" width={294} height={600} sizes="160px" /><figcaption>이미지컷</figcaption></figure>
            </div>
          </div>
        </section>

        {/* 5. PREMIUM */}
        <section id="premium" className={styles.premium}>
          <div className={styles.premiumHead}>
            <Image className={styles.bgCover} src={A('premium-right-img-01.webp')} alt="" fill sizes="100vw" aria-hidden="true" />
            <div className={cn(styles.premiumHeadText, styles.reveal)}>
              <Image src={A('overview-ico-star.svg')} alt="" width={28} height={28} aria-hidden="true" />
              <h2>ARK-ONE<br />PREMIUM</h2>
            </div>
          </div>
          <div className={styles.premiumBody}>
            <Image className={styles.bgCover} src={A('premium-bg.webp')} alt="" fill sizes="100vw" aria-hidden="true" />
            <div className={cn(styles.premiumIntro, styles.reveal)}>
              <h3>완벽한<br />라이프 스타일</h3>
              <p>공간의 특별함<br />자부심의 가치</p>
              <p>정상을 넘어,<br />새로운 라이프스타일의 기준</p>
            </div>
            <div className={styles.premiumGrid}>
              <figure className={cn(styles.premiumMain, styles.reveal)}>
                <Image src={A('premium-img-left-03.webp')} alt="따뜻한 빛이 드는 주거 공간 이미지" width={1920} height={1960} sizes="(max-width: 1023px) 92vw, 420px" />
                <figcaption>이 이미지는 AI로 제작된 것으로서 실제와 다릅니다.</figcaption>
              </figure>
              <div className={styles.premiumSmall}>
                <figure className={styles.reveal}><Image src={A('lifestyle-visual-img-2.webp')} alt="국제업무단지 이미지" width={296} height={600} sizes="200px" /></figure>
                <figure className={styles.reveal}><Image src={A('premium-poster-03.webp')} alt="와인 잔을 든 여유로운 순간" width={472} height={680} sizes="200px" /><figcaption>이미지컷</figcaption></figure>
              </div>
            </div>
            <ul className={styles.premiumCards}>
              {PREMIUM.map((p) => (
                <li key={p.src} className={styles.reveal}>
                  <div className={styles.premiumCardImg}><Image src={A(p.src)} alt={p.title} fill sizes="(max-width: 1023px) 92vw, 33vw" /></div>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </li>
              ))}
            </ul>
            <p className={styles.aiNote}>· 이 이미지는 AI로 제작된 것으로서 실제와 다릅니다.</p>
          </div>
        </section>

        {/* 6. BRAND */}
        <section id="brand" className={styles.brand}>
          <div className={styles.brandTop}>
            <Image className={styles.bgCover} src={A('brand-bg-03.webp')} alt="" fill sizes="100vw" aria-hidden="true" />
            <div className={cn(styles.brandTopText, styles.reveal)}>
              <Image src={A('brand-logo.svg')} alt="" width={30} height={35} aria-hidden="true" />
              <p className={styles.brandPrugio}>PRUGIO</p>
              <h2>THE NATURAL NOBILITY</h2>
              <p className={styles.brandKr}>본연이 지니는 고귀함</p>
              <p className={styles.brandSmall}>견고한 기본에 더해진 세련된 편안함, 내 삶의 본연을 집에서 찾다</p>
            </div>
            <div className={styles.arc} aria-hidden="true">
              <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax meet">
                <defs><path id="arkArcPath" d="M 120 420 A 380 380 0 0 1 880 420" /></defs>
                <path d="M 0 420 A 500 400 0 0 1 1000 420 Z" fill="#06525a" />
                <text fill="#fff" fontSize="64" letterSpacing="10" fontFamily="Aboreto, serif">
                  <textPath href="#arkArcPath" startOffset="50%" textAnchor="middle">THE NATURAL NOBILITY</textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className={styles.brandStory}>
            <div className={cn(styles.brandStoryHead, styles.reveal)}>
              <p className={styles.eyebrowEn}>BRAND STORY</p>
              <h3>공간을 넘어 삶의 깊이를 담습니다</h3>
              <p>보이지 않는 곳 디테일까지 당신을 위해 설계된 곳,<br />공간, 그 이상의 감동이 시작되는 푸르지오를 만나보세요</p>
            </div>
            <ul className={styles.brandCards}>
              {BRAND.map((b) => (
                <li key={b.src} className={styles.reveal}>
                  <Image src={A(b.src)} alt={b.title} width={560} height={560} sizes="(max-width: 1023px) 70vw, 300px" />
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </li>
              ))}
            </ul>
            <div className={cn(styles.brandClosing, styles.reveal)}>
              <p>사람과 자연이 함께하는 프리미엄 주거문화 공간</p>
              <Image src={A('brand-img-logo.webp')} alt="PRUGIO" width={2041} height={323} sizes="(max-width: 1023px) 70vw, 520px" />
            </div>
          </div>
        </section>

        {/* 7. CONTACT — 관심고객등록(방문예약) 폼 + 오시는길 */}
        <section id="contact" className={styles.contact}>
          <Image className={styles.bgCover} src={A('contact-bg.webp')} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.contactInner}>
            <h2 className={cn(styles.contactTitle, styles.reveal)}>CONTACT US</h2>
            <div className={styles.contactGrid}>
              <div className={cn(styles.contactForm, styles.reveal)}>
                <ArkoneApplyForm config={site} idPrefix="officialContact" />
              </div>
              <div className={cn(styles.contactSide, styles.reveal)}>
                <Image className={styles.contactMap} src={A('contact-map-01.webp')} alt="청라 아크원 푸르지오 현장과 견본주택 약도" width={970} height={680} sizes="(max-width: 1023px) 92vw, 480px" />
                <ul className={styles.places}>
                  {PLACES.map((p) => (
                    <li key={p.label}>
                      <div><strong>{p.label}</strong><span>{p.addr}</span></div>
                      <div className={styles.placeLinks}>
                        <a href={p.naver} target="_blank" rel="noopener noreferrer" aria-label={`${p.label} 네이버 지도`} className={styles.naver}><Image src={A('ico-naver.svg')} alt="" width={12} height={12} /></a>
                        <a href={p.kakao} target="_blank" rel="noopener noreferrer" aria-label={`${p.label} 카카오맵`} className={styles.kakao}><Image src={A('ico-kko-map.svg')} alt="" width={11} height={15} /></a>
                      </div>
                    </li>
                  ))}
                </ul>
                <a className={styles.contactTel} href={telHref}><small>분양문의</small>{telNumber}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Image className={styles.footerLogo} src={A('logotype.svg')} alt="PRUGIO" width={128} height={21} />
          <div className={styles.footerInfo}>
            <p className={styles.footerLines}>
              {footer.companyLines.flatMap((l) => [
                l.newLine && <i key={`br-${l.label}`} className={styles.footerBreak} aria-hidden="true" />,
                <span key={l.label + l.value}>{l.label} : {l.value}</span>,
              ])}
            </p>
            <ul className={styles.footerDisc}>
              {footer.disclaimers.map((d) => (<li key={d}>{d}</li>))}
              <li>※ 본 홈페이지에 사용된 일부 이미지는 AI로 제작되었습니다.</li>
            </ul>
          </div>
          <div className={styles.footerRight}>
            <p>시행 | ㈜청라스마트시티</p>
            <p>시공 | <Image src={A('logo-daewoo.svg')} alt="대우건설" width={66} height={16} /></p>
            <a href={telHref} className={styles.footerTel}><small>문의</small>{telNumber.replace(/-/g, '.')}</a>
          </div>
        </div>
      </footer>

      <a className={cn(styles.top, scrolled && styles.topShow)} href="#hero" onClick={go('hero')}>TOP<i aria-hidden="true" /></a>

      {/* 모바일 하단 고정바 — 공식 모바일의 "관심고객등록" 하단 버튼 + 전화 */}
      <div className={styles.mBar}>
        <a href={telHref} className={styles.mBarTel}>전화상담</a>
        <button type="button" className={styles.mBarReg} onClick={openForm}>관심고객등록 <span aria-hidden="true">→</span></button>
      </div>

      <dialog ref={dialogRef} className={styles.dialog} onClick={(e) => { if (e.target === dialogRef.current) closeForm() }}>
        <div className={styles.dialogBody}>
          <button type="button" className={styles.dialogClose} onClick={closeForm} aria-label="닫기">팝업닫기 ✕</button>
          <ArkoneApplyForm config={site} idPrefix="officialPopup" variant="popup" onSuccess={() => { closeForm(); alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.') }} />
        </div>
      </dialog>
    </div>
  )
}
