'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import { isDirectLink } from '../../lib/directLink'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureLuxeOfficial.module.css'

// 공식 홈페이지형 일반 스크롤 화면 — 청라 아크원 푸르지오4(SignatureArkoneOfficial)의 구성
// (HERO → 브랜드 소개 → OVERVIEW → LOCATION → LIFESTYLE → PREMIUM → CONTACT)을 따르되, 문구·이미지·색은 전부
// site.signature.luxe 데이터에서 받는다(아크원 전용 컴포넌트는 하드코딩이라 재사용 불가).
// 아크원에 없는 단지안내·세대안내·커뮤니티 섹션을 더하고, 상담 폼은 기존 방문예약 폼과 같은 항목(관심서비스·연령대)으로 /api/sms 전송.
// 사용 현장: deokeun-dmc-eileens-garden-3 (2026-11-23 '청라아크원푸르지오4 구조 참고, 하늘색 위주로 고급스럽게')

// "\n" → <br />
function Lines({ text }) {
  const parts = String(text).split('\n')
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ))
}

function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll(`.${styles.reveal}`)
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add(styles.in)); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [rootRef])
}

// 원형 회전 문구 링(아크원 hero-circle-text.svg를 SVG textPath로 대체)
function RingText({ text, id }) {
  return (
    <svg className={styles.circleRing} viewBox="0 0 100 100" aria-hidden="true">
      <defs><path id={id} d="M50,50 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0" /></defs>
      <text fontSize="7.4" letterSpacing="2.2" fill="currentColor"><textPath href={`#${id}`}>{text}</textPath></text>
    </svg>
  )
}

const ZOOM_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
  </svg>
)

// 탭 + 이미지(누르면 확대) — 단지안내·세대안내 공용
// columns: PC 한 줄 칸 수, columnsMobile: 모바일 칸 수(탭이 3+1처럼 어색하게 줄바꿈되지 않게 균등 그리드)
function TabGallery({ tabs, onZoom, columns, columnsMobile }) {
  const [active, setActive] = useState(0)
  const [sub, setSub] = useState(0)
  const tab = tabs[active]
  const images = tab.images ?? [tab.image]
  const img = images[Math.min(sub, images.length - 1)]
  return (
    <div className={styles.gallery}>
      <div className={styles.tabs} style={{ '--tab-cols': columns ?? tabs.length, '--tab-cols-m': columnsMobile ?? Math.min(tabs.length, 4) }} role="tablist">
        {tabs.map((t, i) => (
          <button key={t.label} type="button" role="tab" aria-selected={i === active} className={cn(styles.tab, i === active && styles.tabOn)} onClick={() => { setActive(i); setSub(0) }}>
            {t.label}
          </button>
        ))}
      </div>
      {images.length > 1 && !tab.grid && (
        <div className={styles.subTabs}>
          {images.map((im, i) => (
            <button key={im.src} type="button" className={cn(styles.subTab, i === sub && styles.subTabOn)} onClick={() => setSub(i)}>{im.label}</button>
          ))}
        </div>
      )}
      {tab.info && <p className={styles.tabInfo}><Lines text={tab.info} /></p>}
      {/* tab.grid — 여러 장을 버튼 없이 한 화면에 격자로(각 사진 눌러 크게 보기) */}
      {tab.grid ? (
        <div className={styles.galleryGrid}>
          {images.map((im) => (
            <button key={im.src} type="button" className={styles.galleryGridItem} onClick={() => onZoom(im)} aria-label={`${im.alt} 크게 보기`}>
              <Image src={im.src} alt={im.alt} fill sizes="(max-width: 767px) 50vw, 360px" />
            </button>
          ))}
        </div>
      ) : (
        <button type="button" className={styles.galleryImg} onClick={() => onZoom(img)} aria-label={`${img.alt} 크게 보기`}>
          <Image key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 1023px) 100vw, 1100px" />
          <span className={styles.zoomIcon}>{ZOOM_ICON}</span>
        </button>
      )}
    </div>
  )
}

function VisitForm({ site, luxe, idPrefix, onSuccess }) {
  const utmSource = useUtmSource() ?? '직접유입'
  const form = luxe.contact.form
  const resolvedAdminPhones = site.adminPhonesByUtm?.[utmSource] ?? site.adminPhones
  const [submitting, setSubmitting] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const el = e.currentTarget
    const fd = new FormData(el)
    if (fd.get('privacy_agree') !== 'on') { alert('개인정보 수집 및 이용에 동의해 주세요.'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name')?.toString().trim() ?? '',
          phone: fd.get('phone')?.toString().replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{3,4})(\d{4})$/, '$1-$2-$3') ?? '',
          visit_date: fd.get('visit_date')?.toString() ?? '',
          visit_time: fd.get('visit_time')?.toString() ?? '',
          privacy_agree: true,
          serviceType: fd.get('service')?.toString() ?? '',
          ageRange: fd.get('age')?.toString() ?? '',
          projectName: site.projectName,
          adminPhones: resolvedAdminPhones,
          adminPhoneNames: site.adminPhoneNames,
          smsMediaLabel: site.smsMediaLabel,
          sheetId: site.sheetId,
          sheetTab: site.sheetTab,
          utmSource,
          showUtmInSms: site.showUtmInSms,
          slug: site.slug,
        }),
      })
      const data = await res.json()
      if (data.success) {
        el.reset()
        if (onSuccess) onSuccess()
        else alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.')
      } else {
        alert(data.message ?? '오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch {
      alert('전송에 실패했습니다. 네트워크 상태를 확인해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  const id = (n) => `${idPrefix}-${n}`
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formEyebrow}>VISIT RESERVATION</p>
      <h3 className={styles.formTitle}>{form.title}</h3>
      <p className={styles.formDesc}>{form.desc}</p>
      <div className={styles.fields}>
        <label className={styles.field} htmlFor={id('name')}>
          <span>성명</span>
          <input id={id('name')} name="name" required placeholder="이름을 입력해 주세요" autoComplete="name" />
        </label>
        <label className={styles.field} htmlFor={id('phone')}>
          <span>연락처</span>
          <input id={id('phone')} name="phone" required inputMode="numeric" placeholder="010-0000-0000" autoComplete="tel" pattern="[0-9\- ]{10,13}" />
        </label>
        <div className={cn(styles.field, styles.fieldFull)}>
          <span>관심서비스</span>
          <div className={styles.choices}>
            {form.serviceOptions.map((o, i) => (
              <label key={o} className={styles.choice}>
                <input type="radio" name="service" value={o} defaultChecked={i === 0} />
                <i>{o}</i>
              </label>
            ))}
          </div>
        </div>
        <label className={styles.field} htmlFor={id('date')}>
          <span>방문희망일</span>
          <input id={id('date')} name="visit_date" type="date" />
        </label>
        <label className={styles.field} htmlFor={id('time')}>
          <span>방문희망시간</span>
          <select id={id('time')} name="visit_time" defaultValue="">
            <option value="" disabled>시간 선택</option>
            {site.visitTimeOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </label>
        <label className={cn(styles.field, styles.fieldFull)} htmlFor={id('age')}>
          <span>연령대</span>
          <select id={id('age')} name="age" defaultValue="">
            <option value="" disabled>연령대 선택</option>
            {form.ageOptions.map((a) => (<option key={a} value={a}>{a}</option>))}
          </select>
        </label>
      </div>
      <div className={styles.agreeRow}>
        <label className={styles.agree}>
          <input type="checkbox" name="privacy_agree" />
          <span>개인정보 수집 및 이용에 동의합니다.</span>
        </label>
        <button type="button" className={styles.privacyBtn} onClick={() => setShowPrivacy((v) => !v)} aria-expanded={showPrivacy}>{showPrivacy ? '닫기' : '전문보기'}</button>
      </div>
      {showPrivacy && <div className={styles.privacy}>{site.privacyText}</div>}
      <button type="submit" className={styles.submit} disabled={submitting}>{submitting ? '접수 중…' : form.submitLabel}</button>
    </form>
  )
}

// holdForIntro — 인트로(SignatureArkoneIntro)가 앞에 뜰 때, 끝 신호(circleintro:end) 뒤에 진입 팝업을 연다
// 화면에 들어오면 재생, 벗어나면 일시정지 — 페이지 첫 로딩 때 영상을 받지 않도록 preload="none"
function LuxeVideo({ video }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.35 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <div className={styles.videoFrame}>
      <video ref={ref} src={video.src} poster={video.poster} muted loop playsInline preload="none" controls={!!video.controls} aria-label={video.alt} />
    </div>
  )
}

export default function SignatureLuxeOfficial({ site, holdForIntro = false }) {
  const luxe = site.luxe
  const footer = site.footer
  const utmSource = useUtmSource() ?? '직접유입'
  const telNumber = site.telNumberByUtm?.[utmSource] ?? site.telNumber
  const telHref = `tel:${telNumber.replace(/[^0-9]/g, '')}`

  const rootRef = useRef(null)
  const formDialogRef = useRef(null)
  const popupDialogRef = useRef(null)
  // popup.images(앞에서부터 순서대로) + popup.image(마지막) — '닫기'를 누르면 다음 이미지, 마지막에서 닫힘
  const popupImages = luxe.popup ? [...(luxe.popup.images || []), ...(luxe.popup.image ? [luxe.popup.image] : [])] : []
  const [popupIdx, setPopupIdx] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [zoom, setZoom] = useState(null)

  useReveal(rootRef)

  // luxe.hero.slides — 히어로 배경 자동 전환(크로스페이드 + 줌). [{ src, srcMobile, alt }], 간격 hero.slideMs(기본 5500ms)
  const heroSlides = luxe.hero.slides
  const [heroIdx, setHeroIdx] = useState(0)
  // 확대(줌)는 화면이 뜬 뒤 시작 — 첫 장면도 1.08배에서 천천히 줄어들게(투명도는 서버 렌더부터 바로 보임)
  const [heroMounted, setHeroMounted] = useState(false)
  useEffect(() => {
    const r = requestAnimationFrame(() => setHeroMounted(true))
    return () => cancelAnimationFrame(r)
  }, [])
  useEffect(() => {
    if (!heroSlides || heroSlides.length < 2) return
    // 장면이 바뀔 때마다(자동·점 클릭 모두) 타이머를 새로 걸어 진행 막대와 맞춤
    const t = setTimeout(() => setHeroIdx((i) => (i + 1) % heroSlides.length), luxe.hero.slideMs ?? 5500)
    return () => clearTimeout(t)
  }, [heroSlides, heroIdx, luxe.hero.slideMs])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 진입 팝업 — 홍보 이미지 → 닫으면 방문예약 폼(기존 사이트 popup.order 'imageFirst'와 같은 흐름)
  useEffect(() => {
    // 다이렉트 링크(#앵커로 진입, 예: 방문예약 #contact)면 진입 팝업을 띄우지 않음 — 다른 템플릿(SignaturePopupSequence)과 동일
    if (!luxe.popup || isDirectLink()) return
    let t
    const schedule = () => {
      t = setTimeout(() => { const d = popupDialogRef.current; if (d && !d.open) d.showModal() }, holdForIntro ? 500 : (luxe.popup.delayMs ?? 1000))
    }
    if (holdForIntro && !window.__circleIntroEnded) {
      window.addEventListener('circleintro:end', schedule, { once: true })
    } else {
      schedule()
    }
    return () => { clearTimeout(t); window.removeEventListener('circleintro:end', schedule) }
  }, [luxe.popup, holdForIntro])

  const openForm = () => {
    popupDialogRef.current?.close()
    const d = formDialogRef.current
    if (d && !d.open) d.showModal()
    setMenuOpen(false)
  }
  const closeForm = () => formDialogRef.current?.close()
  const closePopup = () => {
    if (!luxe.popup?.card && popupIdx < popupImages.length - 1) { setPopupIdx((i) => i + 1); return }
    popupDialogRef.current?.close(); if (luxe.popup?.formAfterClose) setTimeout(openForm, 250)
  }

  const go = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const { hero, concept, overview, location, lifestyle, premium, complex, unit, community, contact } = luxe
  const logo = luxe.logo

  return (
    // luxe.palette — 현장별 색 덮어쓰기({ '--navy': '#...', '--sky-rgb': 'r, g, b', ... }), 없으면 CSS 기본값(덕은 하늘색 톤)
    <div ref={rootRef} className={styles.page} style={luxe.palette}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Serif+KR:wght@400;500;600&display=swap" precedence="default" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" precedence="default" />

      {/* HEADER */}
      <header className={cn(styles.header, (scrolled || menuOpen) && styles.headerSolid)}>
        <div className={styles.headerInner}>
          <a href="#hero" onClick={go('hero')} className={styles.logo} aria-label={`${site.projectName} 처음으로`}>
            <Image className={styles.logoLight} src={logo.light.src} alt={logo.light.alt} width={logo.light.width} height={logo.light.height} priority />
            <Image className={styles.logoDark} src={logo.dark.src} alt="" width={logo.dark.width} height={logo.dark.height} aria-hidden="true" />
          </a>
          <nav className={styles.gnb} aria-label="주요 메뉴">
            {luxe.nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>))}
          </nav>
          <div className={styles.headerRight}>
            <button type="button" className={styles.registerPill} onClick={openForm}>방문예약 <span aria-hidden="true">›</span></button>
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
            {luxe.nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>))}
            <button type="button" onClick={openForm}>방문예약 신청</button>
          </nav>
        )}
      </header>

      <main>
        {/* 1. HERO */}
        {/* hero.mobileFitBar — 모바일에서 하단 고정바(60px)를 뺀 높이로(히어로 하단이 고정바에 가리지 않게) */}
        <section id="hero" className={cn(styles.hero, hero.mobileFitBar && styles.heroFitBar)}>
          {heroSlides ? (
            <>
              {heroSlides.map((s, i) => (
                <picture key={s.src} className={cn(styles.heroPic, styles.heroSlide, i === heroIdx && styles.heroSlideOn, i === heroIdx && heroMounted && styles.heroSlideZoom, s.mobileDim && styles.heroSlideDim)} style={s.mobileDim ? { '--slide-dim': s.mobileDim } : undefined} aria-hidden={i !== heroIdx}>
                  <source media="(max-width: 767px)" srcSet={s.srcMobile} />
                  <img className={styles.heroBg} src={s.src} alt={s.alt} fetchPriority={i === 0 ? 'high' : 'low'} decoding="async" />
                </picture>
              ))}
              <div className={styles.heroDots} role="tablist" aria-label="히어로 이미지 선택">
                {heroSlides.map((s, i) => (
                  <button key={s.src} type="button" role="tab" aria-selected={i === heroIdx} aria-label={`${i + 1}번째 이미지`} className={cn(styles.heroDot, i === heroIdx && styles.heroDotOn)} style={{ '--slide-ms': `${luxe.hero.slideMs ?? 5500}ms` }} onClick={() => setHeroIdx(i)}>
                    <i />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <picture className={styles.heroPic}>
              <source media="(max-width: 767px)" srcSet={hero.bgMobile.src} />
              <img className={styles.heroBg} src={hero.bg.src} alt={hero.bg.alt} fetchPriority="high" />
            </picture>
          )}
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>{hero.eyebrow}</p>
            {/* hero.titleScale — 사이트별 제목 배율 { mobile, desktop } (없으면 1배) */}
            <h1 className={styles.heroTitle} style={hero.titleScale ? { '--hero-title-m': hero.titleScale.mobile ?? 1, '--hero-title-d': hero.titleScale.desktop ?? hero.titleScale.mobile ?? 1 } : undefined}>
              <span>{hero.titleLight}</span>
              <strong>{hero.titleStrong}</strong>
            </h1>
            <p className={styles.heroName}>{hero.name}</p>
            <span className={styles.heroBadgeText}>{hero.badge}</span>
          </div>
          <div className={styles.heroCircles}>
            <span className={cn(styles.circle, styles.circleSky)}>
              <RingText id="luxeRingA" text={hero.ringText} />
              <span className={styles.circleCore}>{hero.circleInfo.map((l) => (<b key={l}>{l}</b>))}</span>
            </span>
            <button type="button" className={cn(styles.circle, styles.circleDeep)} onClick={openForm}>
              <RingText id="luxeRingB" text={hero.ringText} />
              <span className={styles.circleCore}><b>방문예약</b><small>RESERVATION</small></span>
            </button>
          </div>
          <a className={styles.scroll} href="#concept" onClick={go('concept')}><span>SCROLL</span><i aria-hidden="true" /></a>
        </section>

        {/* 브랜드 소개 */}
        <section id="concept" className={styles.concept}>
          <div className={cn(styles.conceptInner, styles.reveal)}>
            <div className={styles.conceptEmblem}>
              <Image src={concept.image.src} alt={concept.image.alt} width={concept.image.width} height={concept.image.height} sizes="(max-width: 1023px) 86vw, 520px" />
            </div>
            <div className={styles.conceptText}>
              <span className={styles.sparkle} aria-hidden="true">✦</span>
              <h2>{concept.title}</h2>
              <p className={styles.acronym}>
                {concept.acronym.map(([b, rest]) => (<span key={b + rest}><b>{b}</b>{rest}</span>))}
              </p>
              <p className={styles.conceptDesc}><Lines text={concept.desc} /></p>
            </div>
          </div>
        </section>

        {/* luxe.video — 브랜드 소개 다음 전체폭 영상(화면에 보일 때만 재생, 소리 없음) */}
        {luxe.video && (
          <section id="video" className={styles.videoSec}>
            <div className={cn(styles.videoHead, styles.reveal)}>
              {luxe.video.eyebrow && <p className={styles.eyebrowEn}>{luxe.video.eyebrow}</p>}
              {luxe.video.title && <h2><Lines text={luxe.video.title} /></h2>}
            </div>
            <LuxeVideo video={luxe.video} />
          </section>
        )}

        {/* 2. OVERVIEW */}
        <section id="overview" className={styles.overview}>
          <Image className={styles.bgCover} src={overview.bg.src} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.overviewInner}>
            <div className={cn(styles.overviewLeft, styles.reveal)}>
              <p className={styles.overviewSmall}><Lines text={overview.small} /></p>
              <p className={styles.overviewLead}><Lines text={overview.lead} /></p>
              <h2 className={styles.bigWord}>{overview.word}</h2>
            </div>
            <div className={cn(styles.overviewRight, styles.reveal)}>
              <p className={styles.overviewCatch}><Lines text={overview.catch} /></p>
              <dl className={styles.stats}>
                {overview.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.pre && <small>{s.pre}</small>}<strong>{s.value}</strong><em>{s.unit}</em></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className={cn(styles.specWrap, styles.reveal)}>
            <dl className={styles.spec}>
              {overview.specs.map((s) => (
                <div key={s.label}><dt>{s.label}</dt><dd><Lines text={s.value} /></dd></div>
              ))}
            </dl>
            <p className={styles.note}>{overview.notice}</p>
          </div>
        </section>

        {/* 3. LOCATION */}
        <section id="location" className={styles.location}>
          <div className={styles.wordBand}>
            <Image className={styles.bgCover} src={location.band.src} alt="" fill sizes="100vw" aria-hidden="true" />
            <p className={styles.bandTop} aria-hidden="true">{location.bandTop}</p>
            <p className={styles.bandWord} aria-hidden="true">{location.bandWord}</p>
          </div>
          <div className={styles.central}>
            <div className={cn(styles.centralText, styles.reveal)}>
              <p className={styles.eyebrowEn}>{location.eyebrow}</p>
              <h2><Lines text={location.title} /></h2>
              <p><Lines text={location.desc} /></p>
              <ol className={styles.points}>
                {location.points.map((p) => (
                  <li key={p.num}>
                    <span className={styles.pointNum}>{p.num}</span>
                    <div><em>{p.category}</em><strong>{p.title}</strong><small>{p.desc}</small></div>
                  </li>
                ))}
              </ol>
            </div>
            <div className={cn(styles.centralMap, styles.reveal)}>
              <button type="button" className={styles.mapBtn} onClick={() => setZoom(location.map)} aria-label="위치도 크게 보기">
                <Image src={location.map.src} alt={location.map.alt} width={location.map.width} height={location.map.height} sizes="(max-width: 1023px) 100vw, 55vw" />
                <span className={styles.zoomIcon}>{ZOOM_ICON}</span>
              </button>
              <p className={styles.smallNote}>{location.note}</p>
            </div>
          </div>
        </section>

        {/* 4. LIFESTYLE(분양 혜택) */}
        <section id="lifestyle" className={styles.lifestyle}>
          <div className={styles.lifeLeft}>
            <Image className={styles.bgCover} src={lifestyle.bg.src} alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" aria-hidden="true" />
            <div className={cn(styles.lifeLeftText, styles.reveal)}>
              <span className={styles.sparkle} aria-hidden="true">✦</span>
              <p>{lifestyle.kicker}</p>
              <h2><Lines text={lifestyle.title} /></h2>
            </div>
            <figure className={cn(styles.lifeVisual, styles.reveal)}>
              <Image src={lifestyle.visual.src} alt={lifestyle.visual.alt} width={lifestyle.visual.width} height={lifestyle.visual.height} sizes="(max-width: 1023px) 60vw, 300px" />
            </figure>
          </div>
          <div className={styles.lifeRight}>
            <p className={cn(styles.perfect, styles.reveal)}>{lifestyle.eyebrow}</p>
            <ul className={styles.lifeList}>
              {lifestyle.items.map((l) => (
                <li key={l.title} className={styles.reveal}>
                  <span className={styles.lifeNum}>{l.num}</span>
                  <div>
                    <em>{l.tag}</em>
                    <h3>{l.title}</h3>
                    <p>{l.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className={cn(styles.lifeNote, styles.reveal)}>{lifestyle.note}</p>
          </div>
        </section>

        {/* 5. PREMIUM */}
        <section id="premium" className={styles.premium}>
          <div className={styles.premiumHead}>
            <Image className={styles.bgCover} src={premium.headBg.src} alt="" fill sizes="100vw" aria-hidden="true" />
            <div className={cn(styles.premiumHeadText, styles.reveal)}>
              <span className={styles.sparkle} aria-hidden="true">✦</span>
              <h2><Lines text={premium.headTitle} /></h2>
              <p>{premium.headSub}</p>
            </div>
          </div>
          <div className={styles.premiumBody}>
            <div className={cn(styles.premiumIntro, styles.reveal)}>
              <h3><Lines text={premium.introTitle} /></h3>
              {premium.introLines.map((l) => (<p key={l}><Lines text={l} /></p>))}
            </div>
            <ul className={styles.premiumCards}>
              {premium.cards.map((p) => (
                <li key={p.num} className={styles.reveal}>
                  <div className={styles.premiumCardImg}>
                    <Image src={p.image} alt={p.alt} fill sizes="(max-width: 1023px) 92vw, 33vw" />
                    <span>PREMIUM {p.num}</span>
                  </div>
                  <em>{p.en}</em>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </li>
              ))}
            </ul>
            <p className={styles.aiNote}>{premium.note}</p>
          </div>
        </section>

        {/* 6. COMPLEX */}
        <section id="complex" className={styles.complex}>
          <div className={cn(styles.secHead, styles.reveal)}>
            <p className={styles.eyebrowEn}>{complex.eyebrow}</p>
            <h2>{complex.title}</h2>
            <p>{complex.desc}</p>
          </div>
          <div className={styles.reveal}><TabGallery tabs={complex.tabs} onZoom={setZoom} /></div>
          <p className={styles.noteDark}>{complex.note}</p>
        </section>

        {/* 7. UNIT */}
        <section id="unit" className={styles.unit}>
          <div className={cn(styles.secHead, styles.reveal)}>
            <p className={styles.eyebrowEn}>{unit.eyebrow}</p>
            <h2>{unit.title}</h2>
            <p><Lines text={unit.desc} /></p>
          </div>
          <div className={styles.reveal}><TabGallery tabs={unit.tabs} onZoom={setZoom} columns={unit.tabs.length} columnsMobile={unit.tabColumnsMobile ?? 3} /></div>
          <p className={styles.noteDark}>{unit.note}</p>
          {/* unit.gallery — 평면 탭 아래 별도 사진 격자(견본주택 등). { eyebrow, title, desc, images: [{ src, alt }] } */}
          {unit.gallery && (
            <div className={cn(styles.unitGallery, styles.reveal)}>
              {unit.gallery.eyebrow && <p className={styles.eyebrowEn}>{unit.gallery.eyebrow}</p>}
              {unit.gallery.title && <h3>{unit.gallery.title}</h3>}
              {unit.gallery.desc && <p className={styles.unitGalleryDesc}>{unit.gallery.desc}</p>}
              <div className={styles.galleryGrid}>
                {unit.gallery.images.map((im) => (
                  <button key={im.src} type="button" className={styles.galleryGridItem} onClick={() => setZoom(im)} aria-label={`${im.alt} 크게 보기`}>
                    <Image src={im.src} alt={im.alt} fill sizes="(max-width: 767px) 50vw, 240px" />
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* unit.video — 세대 내부 투어 영상(평면·3D 다음) */}
          {unit.video && (
            <div className={cn(styles.unitVideo, styles.reveal)}>
              {unit.video.eyebrow && <p className={styles.eyebrowEn}>{unit.video.eyebrow}</p>}
              {unit.video.title && <h3>{unit.video.title}</h3>}
              <LuxeVideo video={unit.video} />
              {unit.video.note && <p className={styles.noteDark}>{unit.video.note}</p>}
            </div>
          )}
        </section>

        {/* 8. COMMUNITY */}
        <section id="community" className={styles.community}>
          <div className={styles.communityInner}>
            <div className={cn(styles.communityText, styles.reveal)}>
              <p className={styles.eyebrowEn}>{community.eyebrow}</p>
              <h2><Lines text={community.title} /></h2>
              <p className={styles.communityDesc}><Lines text={community.desc} /></p>
              <ul className={styles.facilities}>
                {community.items.map((f, i) => (
                  <li key={f.name}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <strong>{f.name}</strong>
                    <p>{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn(styles.communityPlan, styles.reveal)}>
              <button type="button" className={styles.mapBtn} onClick={() => setZoom(community.plan)} aria-label="커뮤니티 배치도 크게 보기">
                <Image src={community.plan.src} alt={community.plan.alt} width={community.plan.width} height={community.plan.height} sizes="(max-width: 1023px) 100vw, 50vw" />
                <span className={styles.zoomIcon}>{ZOOM_ICON}</span>
              </button>
            </div>
          </div>
          <p className={styles.note}>{community.note}</p>
        </section>

        {/* 9. CONTACT */}
        <section id="contact" className={styles.contact}>
          <Image className={styles.bgCover} src={contact.bg.src} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.contactInner}>
            <h2 className={cn(styles.contactTitle, styles.reveal)}>CONTACT US</h2>
            <p className={cn(styles.contactSub, styles.reveal)}><Lines text={contact.sub} /></p>
            <div className={styles.contactGrid}>
              <div className={cn(styles.contactForm, styles.reveal)}>
                <VisitForm site={site} luxe={luxe} idPrefix="luxeContact" />
              </div>
              <div className={cn(styles.contactSide, styles.reveal)}>
                <ul className={styles.places}>
                  {contact.places.map((p) => (
                    <li key={p.label}><strong>{p.label}</strong><span>{p.addr}</span></li>
                  ))}
                  <li><strong>상담시간</strong><span>{contact.hours}</span></li>
                </ul>
                <a className={styles.contactTel} href={telHref}><small>대표문의</small>{telNumber}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Image className={styles.footerLogo} src={logo.dark.src} alt={logo.dark.alt} width={logo.dark.width} height={logo.dark.height} />
          <div className={styles.footerInfo}>
            <p className={styles.footerLines}>
              {footer.companyLines.flatMap((l) => [
                l.dividerBefore && <i key={`br-${l.label}`} className={styles.footerBreak} aria-hidden="true" />,
                <span key={l.label + l.value}>{l.label} : {l.value}</span>,
              ])}
            </p>
            <ul className={styles.footerDisc}>
              {footer.disclaimers.map((d) => (<li key={d}>{d}</li>))}
            </ul>
          </div>
          <div className={styles.footerRight}>
            <p>{footer.agencySlogan}</p>
            <a href={telHref} className={styles.footerTel}><small>문의</small>{telNumber.replace(/-/g, '.')}</a>
          </div>
        </div>
      </footer>

      <a className={cn(styles.top, scrolled && styles.topShow)} href="#hero" onClick={go('hero')}>TOP<i aria-hidden="true" /></a>

      <div className={styles.mBar}>
        <a href={telHref} className={styles.mBarTel}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" /></svg>
          전화상담
        </a>
        <button type="button" className={styles.mBarReg} onClick={openForm}>방문예약 신청 <span aria-hidden="true">→</span></button>
      </div>

      {luxe.popup && (
        <dialog ref={popupDialogRef} className={cn(styles.dialog, styles.popupDialog)} onClick={(e) => { if (e.target === popupDialogRef.current) closePopup() }}>
          <div className={styles.popupBody}>
            {/* popup.card — 이미지 대신 사진 배경 + 텍스트로 그리는 팝업(사이트 톤에 맞춤), 없으면 popup.image 그대로 */}
            {luxe.popup.card ? (
              <button type="button" className={styles.popupCard} onClick={openForm} aria-label="방문예약 신청하기">
                <Image className={styles.popupCardBg} src={luxe.popup.card.bg} alt="" fill sizes="(max-width: 600px) 92vw, 440px" aria-hidden="true" />
                <span className={styles.popupCardTop}>
                  <em>{luxe.popup.card.topLeft}</em>
                  <em>{luxe.popup.card.topRight}</em>
                </span>
                <span className={styles.popupCardCopy}>
                  <small>{luxe.popup.card.eyebrow}</small>
                  <span className={styles.popupCardLight}>{luxe.popup.card.titleLight}</span>
                  <strong><Lines text={luxe.popup.card.titleStrong} /></strong>
                  <Image className={styles.popupCardLogo} src={logo.light.src} alt={logo.light.alt} width={logo.light.width} height={logo.light.height} />
                </span>
                <span className={styles.popupCardBottom}>
                  <b>{luxe.popup.card.badge}</b>
                  <span className={styles.popupCardPoints}>
                    {luxe.popup.card.points.map(([t, d]) => (<span key={t}><i>{t}</i><small>{d}</small></span>))}
                  </span>
                  <span className={styles.popupCardFoot}><em>{luxe.popup.card.footLeft}</em><em>{luxe.popup.card.footRight}</em></span>
                </span>
              </button>
            ) : (
              <button type="button" className={styles.popupImgBtn} onClick={openForm} aria-label="방문예약 신청하기">
                <Image key={popupImages[popupIdx].src} src={popupImages[popupIdx].src} alt={popupImages[popupIdx].alt} width={popupImages[popupIdx].width} height={popupImages[popupIdx].height} sizes="(max-width: 600px) 92vw, 440px" />
              </button>
            )}
            {/* popup.closeIcon — 하단 '닫기' 대신 이미지 우측 상단 ✕ */}
            {luxe.popup.closeIcon && <button type="button" className={styles.popupCloseX} onClick={closePopup} aria-label="닫기">✕</button>}
            {/* images[].hideActions — 그 이미지에서는 하단 버튼 줄 숨김(✕로만 닫기) */}
            {!(luxe.popup.card ? false : popupImages[popupIdx]?.hideActions) && (
              <div className={cn(styles.popupActions, luxe.popup.closeIcon && styles.popupActionsSingle)}>
                {!luxe.popup.closeIcon && <button type="button" onClick={closePopup}>닫기</button>}
                <button type="button" onClick={openForm}>방문예약 신청</button>
              </div>
            )}
          </div>
        </dialog>
      )}

      <dialog ref={formDialogRef} className={styles.dialog} onClick={(e) => { if (e.target === formDialogRef.current) closeForm() }}>
        <div className={styles.dialogBody}>
          <button type="button" className={styles.dialogClose} onClick={closeForm} aria-label="닫기">✕</button>
          <VisitForm site={site} luxe={luxe} idPrefix="luxePopup" onSuccess={() => { closeForm(); alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.') }} />
        </div>
      </dialog>

      <SignatureLightbox image={zoom} onClose={() => setZoom(null)} tapZoom />
    </div>
  )
}
