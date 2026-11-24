'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureJeilOfficial.module.css'

// 제일풍경채 광주 포에듀 공식 홈페이지(jeil-foredu.co.kr) 메인 구성을 따른 일반 스크롤 화면.
//   메인 비주얼 → COMPLEX PLAN(단지설계) → PREMIUM 6 → 광주가 빠르게 변할지도(탄벌지구 도시개발사업) →
//   EXCLUSIVE OFFER → BRAND INFO → (공식 서브메뉴 내용) 단지·세대 안내 탭 → 오시는 길·방문예약 → 푸터.
//   공식 메인의 분양일정·GRAND OPEN 등 날짜성 내용은 2026-11-24 요청으로 제외.
// 콘텐츠는 site.signature.jeil 데이터에서 받고, 상담 폼은 다른 현장과 같은 /api/sms 전송.
// 사용 현장: jeil-gwangju-foredu (page.jsx의 sig.jeil 분기, 앞에 SignatureBandIntro)

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

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" /></svg>
)
const ZOOM_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
  </svg>
)

function VisitForm({ site, form, idPrefix, onSuccess }) {
  const utmSource = useUtmSource() ?? '직접유입'
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

// 단지·세대 안내 탭(누르면 확대)
function TabGallery({ tabs, onZoom }) {
  const [active, setActive] = useState(0)
  const img = tabs[active].image
  return (
    <div className={styles.gallery}>
      <div className={styles.tabs} role="tablist" style={{ '--tab-cols': tabs.length }}>
        {tabs.map((t, i) => (
          <button key={t.label} type="button" role="tab" aria-selected={i === active} className={cn(styles.tab, i === active && styles.tabOn)} onClick={() => setActive(i)}>
            {t.label}
          </button>
        ))}
      </div>
      {tabs[active].info && <p className={styles.tabInfo}><Lines text={tabs[active].info} /></p>}
      <button type="button" className={cn(styles.galleryImg, tabs[active].narrow && styles.galleryNarrow)} onClick={() => onZoom(img)} aria-label={`${img.alt} 크게 보기`}>
        <Image key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 1023px) 100vw, 1100px" />
        <span className={styles.zoomIcon}>{ZOOM_ICON}</span>
      </button>
    </div>
  )
}

// 원형 장식 — 바깥 금색 호(천천히 회전) + 회전 문구 링
function CircleDeco({ text, id }) {
  return (
    <>
      <svg className={styles.arc} viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9e2a4" stopOpacity="0" />
            <stop offset="1" stopColor="#e9e2a4" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48.5" fill="none" stroke={`url(#${id}-g)`} strokeWidth="0.9" strokeDasharray="110 195" strokeLinecap="round" />
      </svg>
      <svg className={styles.ring} viewBox="0 0 100 100" aria-hidden="true">
        <defs><path id={id} d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" /></defs>
        <text fontSize="6.6" fill="currentColor"><textPath href={`#${id}`} textLength="263.9" lengthAdjust="spacing">{text}</textPath></text>
      </svg>
    </>
  )
}

// holdForIntro — 인트로(SignatureBandIntro)가 앞에 뜰 때, 끝 신호(circleintro:end) 뒤에 진입 팝업을 연다
export default function SignatureJeilOfficial({ site, holdForIntro = false }) {
  const J = site.jeil
  const footer = site.footer
  const utmSource = useUtmSource() ?? '직접유입'
  const telNumber = site.telNumberByUtm?.[utmSource] ?? site.telNumber
  const telHref = `tel:${telNumber.replace(/[^0-9]/g, '')}`
  const telDots = telNumber.replace(/-/g, '.')

  const rootRef = useRef(null)
  const formDialogRef = useRef(null)
  const popupDialogRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [zoom, setZoom] = useState(null)
  const [popupIdx, setPopupIdx] = useState(0)
  const popupTrackRef = useRef(null)
  const POPUP_HIDE_KEY = `popupHide:${site.slug}`

  useReveal(rootRef)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!J.popup) return
    try { if (Number(localStorage.getItem(POPUP_HIDE_KEY)) > Date.now()) return } catch {}
    let t
    const schedule = () => {
      t = setTimeout(() => { const d = popupDialogRef.current; if (d && !d.open) d.showModal() }, holdForIntro ? 500 : (J.popup.delayMs ?? 1000))
    }
    if (holdForIntro && !window.__circleIntroEnded) window.addEventListener('circleintro:end', schedule, { once: true })
    else schedule()
    return () => { clearTimeout(t); window.removeEventListener('circleintro:end', schedule) }
  }, [J.popup, holdForIntro])

  const openForm = () => {
    popupDialogRef.current?.close()
    const d = formDialogRef.current
    if (d && !d.open) d.showModal()
    setMenuOpen(false)
  }
  const closeForm = () => formDialogRef.current?.close()
  const closePopup = () => popupDialogRef.current?.close()
  // '오늘 하루동안 보지 않기' — 이 브라우저에서만 24시간 숨김(저장 실패 시 그냥 닫기만)
  const closePopupToday = () => {
    try { localStorage.setItem(POPUP_HIDE_KEY, String(Date.now() + 24 * 60 * 60 * 1000)) } catch {}
    closePopup()
  }
  // 화살표로 넘길 때는 번호를 바로 바꾸고, 스크롤이 지나가는 동안의 중간 번호(4→1 때 3·2 깜빡임)는 무시.
  // 손가락으로 넘길 때는 스크롤이 멈춘 뒤에 번호를 맞춤
  const popupScrollTimer = useRef(null)
  const onPopupScroll = (e) => {
    const el = e.currentTarget
    clearTimeout(popupScrollTimer.current)
    popupScrollTimer.current = setTimeout(() => {
      setPopupIdx(Math.round(el.scrollLeft / el.clientWidth))
    }, 120)
  }
  const movePopup = (dir) => {
    const el = popupTrackRef.current
    if (!el) return
    const n = J.popup.images.length
    const next = (popupIdx + dir + n) % n
    setPopupIdx(next)
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
  }
  const go = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const { logo, brandLogo, hero, complexPlan: cp, premium, city, offer, brand, plans, contact } = J
  const solid = scrolled || menuOpen

  return (
    <div ref={rootRef} className={styles.page}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&family=Nanum+Myeongjo:wght@400;700&display=swap" precedence="default" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" precedence="default" />

      {/* HEADER — 히어로 위에서는 투명(흰 글씨), 스크롤하면 흰 배경(공식 홈페이지와 같은 구성: 로고 · 메뉴 · 전화번호 | 풍경채) */}
      <header className={cn(styles.header, solid && styles.headerSolid)}>
        <div className={styles.headerInner}>
          <a href="#hero" onClick={go('hero')} className={styles.logo} aria-label={`${site.projectName} 처음으로`}>
            <img className={styles.logoLight} src={logo.light.src} alt={logo.light.alt} width={logo.light.width} height={logo.light.height} />
            <img className={styles.logoDark} src={logo.dark.src} alt="" width={logo.dark.width} height={logo.dark.height} aria-hidden="true" />
          </a>
          <nav className={styles.gnb} aria-label="주요 메뉴">
            {J.nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>))}
          </nav>
          <div className={styles.headerRight}>
            <a className={styles.headerTel} href={telHref}>{PHONE_ICON}<b>{telDots}</b></a>
            <i className={styles.headerBar} aria-hidden="true" />
            <span className={styles.brandMark}>
              <img className={styles.logoLight} src={brandLogo.white} alt="풍경채" width={68} height={40} />
              <img className={styles.logoDark} src={brandLogo.color} alt="" width={68} height={40} aria-hidden="true" />
            </span>
            <a className={styles.mTel} href={telHref} aria-label={`전화 ${telNumber}`}>{PHONE_ICON}</a>
            <button type="button" className={cn(styles.burger, menuOpen && styles.burgerOpen)} onClick={() => setMenuOpen((v) => !v)} aria-label="전체 메뉴" aria-expanded={menuOpen}>
              <i /><i /><i />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className={styles.mMenu} aria-label="전체 메뉴">
            {J.nav.map((n) => (<a key={n.id} href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>))}
            <button type="button" onClick={openForm}>방문예약 신청</button>
          </nav>
        )}
      </header>

      <main>
        {/* 1. 메인 비주얼 */}
        <section id="hero" className={styles.hero}>
          <picture className={styles.heroPic}>
            <source media="(max-width: 1023px) and (orientation: portrait)" srcSet={hero.bgMobile} />
            <img src={hero.bg} alt={hero.alt} fetchPriority="high" />
          </picture>
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.heroLead}>{hero.lead}</p>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroName}><b>{hero.nameBold}</b> {hero.nameLight}</p>
            <p className={styles.heroBlock}>{hero.block}</p>
          </div>
          {/* 공식 홈페이지 메인 우측 원형 2개 — 위: 흰 원 '관심고객등록'(누르면 상담 폼), 아래: 오픈 날짜. 둘 다 PUNGKYEONGCHAE 회전 문구 + 금색 호 */}
          <div className={styles.heroCircles}>
            <button type="button" className={cn(styles.heroCircle, styles.heroCircleSolid)} onClick={openForm}>
              <CircleDeco id="jeilRingA" text={hero.ringText} />
              <span className={styles.heroCircleCore}>{hero.registerLabel}</span>
            </button>
            {hero.open && (
              <div className={styles.heroCircle}>
                <CircleDeco id="jeilRingB" text={hero.ringText} />
                <span className={styles.heroCircleCore}><b>{hero.open.date}</b><small>{hero.open.label}</small></span>
              </div>
            )}
          </div>
          <p className={styles.heroNote}>{hero.note}</p>
          <a className={styles.scrollCue} href="#complex-plan" onClick={go('complex-plan')}><span>SCROLL DOWN</span><i aria-hidden="true" /></a>
        </section>

        {/* 2. COMPLEX PLAN — 단지설계 */}
        <section id="complex-plan" className={styles.cp}>
          <div className={styles.cpAerial}>
            <Image src={cp.aerial.src} alt={cp.aerial.alt} fill sizes="(max-width: 1023px) 100vw, 34vw" />
            <div className={styles.cpVertical} aria-hidden="true">
              <span className={styles.cpVerticalKo}>{cp.verticalKo}</span>
              <span className={styles.cpVerticalEn}>{cp.verticalEn}</span>
            </div>
          </div>
          <div className={styles.cpBody}>
            <div className={cn(styles.cpHead, styles.reveal)}>
              <h2><b>{cp.titleBold}</b> {cp.titleLight}</h2>
              <p><Lines text={cp.desc} /></p>
            </div>
            <div className={styles.cpGrid}>
              {cp.items.map((it, i) => (
                <article key={it.name} className={cn(styles.cpItem, styles[`cpItem${i + 1}`], styles.reveal)}>
                  <div className={styles.cpImg}><Image src={it.img} alt={it.alt} width={it.width} height={it.height} sizes="(max-width: 1023px) 92vw, 30vw" /></div>
                  <small>{it.en}</small>
                  <h3>{it.name}</h3>
                  <p><Lines text={it.desc} /></p>
                </article>
              ))}
            </div>
            <p className={styles.note}>{cp.note}</p>
          </div>
        </section>

        {/* 3. PREMIUM 6 */}
        <section id="premium" className={styles.premium}>
          <Image className={styles.bgCover} src={premium.bg} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.inner}>
            <div className={cn(styles.premiumHead, styles.reveal)}>
              <p>{premium.kicker}</p>
              <h2>{premium.title}<img src={premium.numImg} alt="6" width={50} height={95} /></h2>
            </div>
            <ol className={styles.premiumList}>
              {premium.cards.map((c) => (
                <li key={c.num} className={styles.reveal}>
                  <div className={styles.premiumImg}><Image src={c.img} alt={c.alt} width={202} height={202} sizes="(max-width: 767px) 44vw, 202px" /></div>
                  <small>{c.small}</small>
                  <h3>{c.title}</h3>
                  <p><Lines text={c.desc} /></p>
                  <em>{c.num}</em>
                </li>
              ))}
            </ol>
            <p className={cn(styles.note, styles.noteLight)}>{premium.note}</p>
          </div>
        </section>

        {/* 4. 광주가 빠르게 변할지도 — 탄벌지구 도시개발사업 */}
        <section id="location" className={styles.city}>
          <div className={cn(styles.inner, styles.cityInner)}>
            <div className={styles.cityLeft}>
              <div className={styles.cityTop}>
                <div>
                  <h2 className={styles.reveal}><b>{city.titleBold1}</b>{city.titleLight}<br /><b>{city.titleBold2}</b></h2>
                  <i className={styles.cityRule} aria-hidden="true" />
                  <p className={cn(styles.citySub, styles.reveal)}>{city.sub}<br /><b>{city.subBold}</b></p>
                </div>
                <div className={cn(styles.cityWhat, styles.reveal)}>
                  <h3>{city.what.title}</h3>
                  {city.what.desc.split('\n\n').map((para) => (<p key={para}><Lines text={para} /></p>))}
                </div>
              </div>
              <ul className={styles.cityCards}>
                {city.cards.map((c) => (
                  <li key={c.title} className={styles.reveal}>
                    <Image src={c.img} alt={c.alt} width={260} height={109} sizes="(max-width: 767px) 92vw, 260px" />
                    <h3>{c.title}</h3>
                    <p><Lines text={c.desc} /></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cityRight}>
              <button type="button" className={cn(styles.cityMap, styles.reveal)} onClick={() => setZoom(city.map)} aria-label="탄벌지구 토지이용계획도 크게 보기">
                <Image src={city.map.src} alt={city.map.alt} width={city.map.width} height={city.map.height} sizes="(max-width: 1023px) 92vw, 520px" />
                <span className={styles.zoomIcon}>{ZOOM_ICON}</span>
              </button>
              <button type="button" className={styles.wideMapBtn} onClick={() => setZoom(city.wideMap)}>광역 위치도 크게 보기 <span aria-hidden="true">+</span></button>
            </div>
          </div>
          <div className={styles.inner}>
            <ul className={styles.cityNotes}>
              {city.notes.map((n) => (<li key={n}>{n}</li>))}
            </ul>
          </div>
        </section>

        {/* 5. EXCLUSIVE OFFER */}
        <section id="offer" className={styles.offer}>
          <Image className={styles.bgCover} src={offer.bg} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.inner}>
            <div className={cn(styles.offerHead, styles.reveal)}>
              <h2>{offer.title}</h2>
              <p>{offer.sub}</p>
            </div>
            <ul className={styles.offerList}>
              {offer.items.map((o) => (
                <li key={o.strong} className={styles.reveal}>
                  <img src={o.icon} alt="" width={56} height={56} aria-hidden="true" />
                  <span>{o.small}</span>
                  <strong>{o.strong}</strong>
                  {o.tiny && <small>{o.tiny}</small>}
                </li>
              ))}
            </ul>
            <p className={cn(styles.note, styles.noteLight, styles.center)}>{offer.note}</p>
          </div>
        </section>

        {/* 6. BRAND INFO */}
        <section id="brand" className={styles.brand}>
          <Image className={styles.bgCover} src={brand.bg} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.brandShade} aria-hidden="true" />
          <div className={cn(styles.inner, styles.brandInner)}>
            <div className={cn(styles.brandHead, styles.reveal)}>
              <h2>{brand.title}</h2>
              <p className={styles.brandLead}><Lines text={brand.lead} /></p>
              <p className={styles.brandSince}>{brand.since}</p>
              <p className={styles.brandSlogan}>{brand.slogan}</p>
              <p className={styles.brandDesc}>{brand.desc}</p>
            </div>
            <div className={cn(styles.brandPanel, styles.reveal)}>
              <ul className={styles.brandStats}>
                {brand.stats.map((s) => (
                  <li key={s.big + s.label}><b>{s.big}{s.unit && <small>{s.unit}</small>}</b><span>{s.top}</span><em>{s.label}</em></li>
                ))}
              </ul>
              <ul className={styles.brandPrizes}>
                {brand.prizes.map((p) => (<li key={p.src}><img src={p.src} alt={p.alt} width={p.width} height={p.height} /></li>))}
              </ul>
              <p className={styles.brandSource}>{brand.source}</p>
            </div>
          </div>
        </section>

        {/* 7. 단지·세대 안내(공식 서브메뉴 내용) */}
        <section id="plans" className={styles.plans}>
          <div className={styles.inner}>
            <div className={cn(styles.plansHead, styles.reveal)}>
              <p>{plans.eyebrow}</p>
              <h2>{plans.title}</h2>
              <span><Lines text={plans.desc} /></span>
            </div>
            <TabGallery tabs={plans.tabs} onZoom={setZoom} />
            <p className={styles.note}>{plans.note}</p>
          </div>
        </section>

        {/* 8. 오시는 길 · 방문예약 */}
        <section id="contact" className={styles.contact}>
          <Image className={styles.bgCover} src={contact.bg} alt="" fill sizes="100vw" aria-hidden="true" />
          <div className={styles.inner}>
            <div className={cn(styles.contactHead, styles.reveal)}>
              <p>CONTACT</p>
              <h2>{contact.title}</h2>
              <span><Lines text={contact.sub} /></span>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.reveal}>
                <VisitForm site={site} form={contact.form} idPrefix="jeilContact" />
              </div>
              <div className={cn(styles.contactSide, styles.reveal)}>
                <p className={styles.contactScale}>{contact.scale}</p>
                <ul className={styles.places}>
                  {contact.places.map((p) => (<li key={p.label}><strong>{p.label}</strong><span>{p.addr}</span></li>))}
                  <li><strong>상담시간</strong><span>{contact.hours}</span></li>
                </ul>
                <a className={styles.contactTel} href={telHref}>{PHONE_ICON}<b>{telDots}</b></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <img className={styles.footerLogo} src={brandLogo.footer} alt="풍경채" width={113} height={65} />
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
            <p className={styles.copy}>COPYRIGHT 2026 {site.projectName} | A5BL |. All Rights Reserved.</p>
          </div>
          <div className={styles.footerRight}>
            <p>{footer.agencySlogan}</p>
            <a href={telHref} className={styles.footerTel}><small>문의</small>{telDots}</a>
          </div>
        </div>
      </footer>

      <a className={cn(styles.top, scrolled && styles.topShow)} href="#hero" onClick={go('hero')} aria-label="맨 위로"><i aria-hidden="true" /></a>

      <div className={styles.mBar}>
        <a href={telHref} className={styles.mBarTel}>{PHONE_ICON}전화상담</a>
        <button type="button" className={styles.mBarReg} onClick={openForm}>방문예약 신청 <span aria-hidden="true">→</span></button>
      </div>

      {J.popup && (
        <dialog ref={popupDialogRef} className={cn(styles.dialog, styles.popupDialog)} onClick={(e) => { if (e.target === popupDialogRef.current) closePopup() }}>
          {/* 공식 홈페이지 팝업 디자인 — 위 '팝업닫기 X', 흰 테두리 이미지(PC 가로 나란히 / 모바일 넘겨 보기),
              아래 '오늘 하루동안 보지 않기' + 모바일 페이지 표시(‹ 1 | 4 ›). 이미지를 누르면 방문예약 폼 */}
          <div className={styles.popupBody} style={{ '--pop-n': J.popup.images.length }}>
            <button type="button" className={styles.popupCloseTop} onClick={closePopup}>팝업닫기 X</button>
            <div ref={popupTrackRef} className={styles.popupTrack} onScroll={onPopupScroll}>
              {J.popup.images.map((im) => (
                <button key={im.src} type="button" className={styles.popupImgBtn} onClick={openForm} aria-label={`${im.alt.split(' — ')[0]} · 방문예약 신청하기`}>
                  <Image src={im.src} alt={im.alt} width={im.width} height={im.height} sizes="(max-width: 1023px) 86vw, 330px" />
                </button>
              ))}
            </div>
            <div className={styles.popupBottom}>
              <label className={styles.popupToday}>
                <input type="checkbox" onChange={(e) => { if (e.target.checked) closePopupToday() }} />
                <span>오늘 하루동안 보지 않기</span>
              </label>
              {J.popup.images.length > 1 && (
                <div className={styles.popupPager}>
                  <button type="button" onClick={() => movePopup(-1)} aria-label="이전 팝업">‹</button>
                  <span><b>{popupIdx + 1}</b><i aria-hidden="true" />{J.popup.images.length}</span>
                  <button type="button" onClick={() => movePopup(1)} aria-label="다음 팝업">›</button>
                </div>
              )}
            </div>
          </div>
        </dialog>
      )}

      <dialog ref={formDialogRef} className={styles.dialog} onClick={(e) => { if (e.target === formDialogRef.current) closeForm() }}>
        <div className={styles.dialogBody}>
          <button type="button" className={styles.dialogClose} onClick={closeForm} aria-label="닫기">✕</button>
          <VisitForm site={site} form={contact.form} idPrefix="jeilPopup" onSuccess={() => { closeForm(); alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.') }} />
        </div>
      </dialog>

      <SignatureLightbox image={zoom} onClose={() => setZoom(null)} tapZoom />
    </div>
  )
}
