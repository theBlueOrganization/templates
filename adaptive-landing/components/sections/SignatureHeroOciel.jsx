'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'
import styles from './SignatureHeroOciel.module.css'

// 시티오씨엘 9단지(city-ociel-9) 전용 인트로 히어로(hero.variant === 'ociel') — 공식 사이트(cityociel9.com)
// 메인 인트로를 참고해 재구성: 검은 화면에서 원 2개가 그려지고 → 로고가 뜬 뒤 → 원 안에 배경이 차오르고 →
// 원이 화면 전체로 열리면서 → 메인 슬라이드(PC/모바일 전용 컷 + 슬로건) 3장이 이어서 재생됨.
// 인트로가 끝나기 전(INTRO_MS)까지는 헤더를 숨기고, 클릭(PC 커서 SKIP)/모바일 SKIP 버튼/스크롤로 즉시 건너뜀.
const INTRO_MS = 6000
const HEADER_SHOW_MS = 7500
const SLIDE_MS = 5000

export default function SignatureHeroOciel({ hero }) {
  const [open, setOpen] = useState(false)
  const [skipped, setSkipped] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  const [active, setActive] = useState(0)
  const [cursor, setCursor] = useState(null)
  // 인트로 종료(헤더 노출) 여부 — true가 되면 SKIP UI를 내리고 이후 클릭은 무시
  const [ended, setEnded] = useState(false)
  const doneRef = useRef(false)

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    setSkipped(true)
    setIntroDone(true)
    setEnded(true)
    delete document.body.dataset.ocielIntro
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.dataset.ocielIntro = 'on'
    if (reduce) {
      finish()
      return
    }
    const raf = requestAnimationFrame(() => setOpen(true))
    const introTimer = setTimeout(() => setIntroDone(true), INTRO_MS)
    const headerTimer = setTimeout(() => {
      doneRef.current = true
      setEnded(true)
      delete document.body.dataset.ocielIntro
    }, HEADER_SHOW_MS)
    // 인트로 도중 스크롤을 시도하면 기다리게 하지 않고 바로 최종 화면으로
    const onScrollIntent = () => finish()
    window.addEventListener('wheel', onScrollIntent, { passive: true })
    window.addEventListener('touchmove', onScrollIntent, { passive: true })
    window.addEventListener('keydown', onScrollIntent)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(introTimer)
      clearTimeout(headerTimer)
      window.removeEventListener('wheel', onScrollIntent)
      window.removeEventListener('touchmove', onScrollIntent)
      window.removeEventListener('keydown', onScrollIntent)
      delete document.body.dataset.ocielIntro
    }
  }, [finish])

  // 인트로가 끝난 뒤부터 슬라이드 자동 전환
  useEffect(() => {
    if (!introDone) return
    const t = setInterval(() => setActive((i) => (i + 1) % hero.slides.length), SLIDE_MS)
    return () => clearInterval(t)
  }, [introDone, hero.slides.length])

  const playing = !ended

  return (
    <section
      id="hero"
      className={cn(styles.section, open && styles.open, skipped && styles.skip, ended && styles.ended)}
      onClick={() => playing && finish()}
      onMouseMove={(e) => playing && setCursor({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setCursor(null)}
    >
      {/* 흰색 슬로건 이미지와 같은 문구를 검색엔진·스크린리더용으로 */}
      <h1 className={styles.srOnly}>{hero.srTitle}</h1>

      <ul className={styles.slider}>
        {hero.slides.map((slide, i) => (
          <li key={i} className={cn(styles.slide, i === active && introDone && styles.slideActive)} aria-hidden={i !== active}>
            <div className={styles.slideBg}>
              <Image src={slide.bgImage.src} alt={slide.bgImage.alt} fill priority={i === 0} sizes="100vw" className={cn(styles.bgImg, styles.pcOnly)} />
              <Image src={slide.bgImageMobile.src} alt={slide.bgImageMobile.alt} fill priority={i === 0} sizes="100vw" className={cn(styles.bgImg, styles.mobileOnly)} />
            </div>
            <div className={cn(styles.slogan, slide.sloganCenter && styles.sloganCenter)}>
              <Image src={slide.slogan.src} alt={slide.slogan.alt} width={slide.slogan.width} height={slide.slogan.height} className={styles.pcOnly} />
              <Image src={slide.sloganMobile.src} alt={slide.sloganMobile.alt} width={slide.sloganMobile.width} height={slide.sloganMobile.height} className={styles.mobileOnly} />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.mainbg} />

      <div className={styles.cirWrap} aria-hidden="true">
        {['cirA', 'cirB'].map((c) => (
          <div key={c} className={cn(styles.cir, styles[c])}>
            <svg viewBox="-1 -1 502 502" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="250" fill="none" stroke="#fff" strokeWidth="1.4" />
            </svg>
          </div>
        ))}
      </div>

      <div className={styles.logo}>
        <Image src={hero.introLogo.src} alt={hero.introLogo.alt} width={hero.introLogo.width} height={hero.introLogo.height} priority />
      </div>

      <div className={styles.clip} aria-hidden="true">
        <span style={{ backgroundImage: `url(${hero.clipBg})` }} />
      </div>

      {hero.badge && (
        <div className={styles.badge} aria-hidden="true">
          <div className={styles.badgeRing}>
            <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
              <path id="ocielBadgeCircle" d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
              <text>
                <textPath href="#ocielBadgeCircle" startOffset="0%">
                  {hero.badge.ringText}
                </textPath>
              </text>
            </svg>
          </div>
          <span className={styles.badgeText}>
            {hero.badge.lines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </span>
        </div>
      )}

      <div className={styles.scr} aria-hidden="true">
        <span />
      </div>

      {playing && (
        <>
          <div
            className={cn(styles.skipCursor, cursor && styles.skipCursorOn)}
            style={cursor ? { left: cursor.x, top: cursor.y } : undefined}
            aria-hidden="true"
          >
            SKIP
          </div>
          <button
            type="button"
            className={styles.skipBtn}
            onClick={(e) => {
              e.stopPropagation()
              finish()
            }}
          >
            SKIP
          </button>
        </>
      )}

      {/* 인트로 재생 중에는 고정 헤더·PC 퀵메뉴를 숨겼다가 끝나면 페이드인 (공용 컴포넌트는 건드리지 않음).
          모바일은 헤더 높이만큼 히어로 위 여백이 있어, 숨긴 동안 그 자리가 흰색으로 비치지 않게 배경도 검정으로 */}
      <style>{`
        header, [class*="QuickMenu"] { transition: opacity 0.6s ease; }
        body[data-ociel-intro='on'] header,
        body[data-ociel-intro='on'] [class*="QuickMenu"] { opacity: 0; pointer-events: none; }
        body[data-ociel-intro='on'] { background: #000; }
      `}</style>
    </section>
  )
}
