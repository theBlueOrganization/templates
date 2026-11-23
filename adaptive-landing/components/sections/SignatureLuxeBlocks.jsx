'use client'

import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import styles from './SignatureLuxeOfficial.module.css'

// 공식 홈페이지형 화면(SignatureLuxeOfficial, 덕은 DMC 에일린의 뜰 3차)의 사업개요(OVERVIEW)·프리미엄(PREMIUM) 섹션만
// 기존 섹션형 페이지에 끼워 넣을 수 있게 떼어 낸 컴포넌트. 마크업·CSS는 SignatureLuxeOfficial과 같은 것을 그대로 씀.
//   - summary.variant 'luxe' → <LuxeOverview>, premiumValue.variant 'luxe' → <LuxePremium> (app/apt/[slug]/page.jsx)
//   - theme: { navy, steel, sky, skyLight, ice } — 현장 색으로 덮어쓸 CSS 변수(없으면 덕은 하늘색 기본값)
// 사용 현장: yangsan-xi-park-paliche-2 (2026-11-23 '덕은 DMC 현장과 같은 구조 — overview, 프리미엄 부분')

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

function themeVars(theme) {
  if (!theme) return undefined
  const map = { navy: '--navy', navy2: '--navy2', steel: '--steel', sky: '--sky', skyLight: '--skyLight', ice: '--ice' }
  return Object.fromEntries(Object.entries(theme).filter(([k]) => map[k]).map(([k, v]) => [map[k], v]))
}

function LuxeShell({ theme, children }) {
  const rootRef = useRef(null)
  useReveal(rootRef)
  return (
    <div ref={rootRef} className={styles.page} style={themeVars(theme)}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Serif+KR:wght@400;500;600&display=swap" precedence="default" />
      {children}
    </div>
  )
}

export function LuxeOverview({ overview }) {
  return (
    <LuxeShell theme={overview.theme}>
      <section id={overview.id ?? 'overview'} className={styles.overview}>
        <Image className={styles.bgCover} src={overview.bg.src} alt="" fill sizes="100vw" aria-hidden="true" />
        <div className={styles.overviewInner}>
          <div className={cn(styles.overviewLeft, styles.reveal)}>
            <p className={styles.overviewSmall}><Lines text={overview.small} /></p>
            <p className={styles.overviewLead}>{overview.lead}</p>
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
          {overview.notice && <p className={styles.note}>{overview.notice}</p>}
        </div>
      </section>
    </LuxeShell>
  )
}

export function LuxePremium({ premium }) {
  return (
    <LuxeShell theme={premium.theme}>
      <section id={premium.id ?? 'premium'} className={styles.premium}>
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
          {premium.note && <p className={styles.aiNote}>{premium.note}</p>}
        </div>
      </section>
    </LuxeShell>
  )
}
