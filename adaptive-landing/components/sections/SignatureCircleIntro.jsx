'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import styles from './SignatureCircleIntro.module.css'

// 원형 인트로 오버레이(sig.circleIntro) — 시티오씨엘 9단지(SignatureHeroOciel) 인트로 연출을 일반 히어로(SignatureHero)
// 현장에서도 쓸 수 있게 분리한 전체화면 오버레이. 검은 화면에서 원 2개가 그려지고 → 로고가 뜬 뒤 → 원 안에 배경이
// 차오르고 → 원이 화면 전체로 열리면서 → 오버레이가 사라지며 아래의 기존 히어로가 드러남.
// bgImage/bgImageMobile은 히어로 첫 슬라이드와 같은 이미지를 넣어야 열린 뒤 히어로로 자연스럽게 이어짐.
// SKIP 버튼/화면 클릭/스크롤 시도 시 바로 닫힘, 동작 줄이기(prefers-reduced-motion) 설정이면 아예 재생하지 않음.
// (예: 호반써밋 첨단3지구)
const INTRO_MS = 6000
const FADE_MS = 600

// 인트로가 닫히는 순간을 히어로(SignatureHero holdForIntro)에 알림 — 히어로는 그때부터 첫 슬라이드로 자동 전환 시작.
// 히어로가 리스너를 걸기 전에 끝났을 수도 있어 window 플래그도 같이 남김
export const CIRCLE_INTRO_END_EVENT = 'circleintro:end'
function notifyEnd() {
  window.__circleIntroEnded = true
  window.dispatchEvent(new Event(CIRCLE_INTRO_END_EVENT))
}

export default function SignatureCircleIntro({ intro }) {
  const [open, setOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  const close = useCallback(() => setLeaving(true), [])

  useEffect(() => {
    window.__circleIntroEnded = false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      notifyEnd()
      return
    }
    const raf = requestAnimationFrame(() => setOpen(true))
    const t = setTimeout(close, INTRO_MS)
    // 인트로 도중 스크롤을 시도하면 기다리게 하지 않고 바로 닫음
    window.addEventListener('wheel', close, { passive: true })
    window.addEventListener('touchmove', close, { passive: true })
    window.addEventListener('keydown', close)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
      window.removeEventListener('wheel', close)
      window.removeEventListener('touchmove', close)
      window.removeEventListener('keydown', close)
    }
  }, [close])

  // 페이드아웃이 끝나면 오버레이 제거
  useEffect(() => {
    if (!leaving) return
    notifyEnd()
    const t = setTimeout(() => setDone(true), FADE_MS)
    return () => clearTimeout(t)
  }, [leaving])

  // 재생 중에는 뒤 페이지가 스크롤되지 않게
  useEffect(() => {
    if (done) return
    document.documentElement.classList.add(styles.lockScroll)
    document.body.classList.add(styles.lockScroll)
    return () => {
      document.documentElement.classList.remove(styles.lockScroll)
      document.body.classList.remove(styles.lockScroll)
    }
  }, [done])

  if (done) return null

  return (
    <div className={cn(styles.intro, open && styles.open, leaving && styles.leaving)} onClick={close} aria-hidden="true">
      <div className={styles.cirWrap}>
        {['cirA', 'cirB'].map((c) => (
          <div key={c} className={cn(styles.cir, styles[c])}>
            <svg viewBox="-1 -1 502 502" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="250" fill="none" stroke="#fff" strokeWidth="1.4" />
            </svg>
          </div>
        ))}
      </div>

      <div className={styles.clip}>
        <div className={styles.clipBg}>
          <Image src={intro.bgImage} alt="" fill priority sizes="100vw" className={cn(styles.clipImg, intro.bgImageMobile && styles.pcOnly)} />
          {intro.bgImageMobile && (
            <Image src={intro.bgImageMobile} alt="" fill priority sizes="100vw" className={cn(styles.clipImg, styles.mobileOnly)} />
          )}
        </div>
      </div>

      <div className={styles.logo}>
        <Image src={intro.logo.src} alt={intro.logo.alt} width={intro.logo.width} height={intro.logo.height} priority />
      </div>

      <button
        type="button"
        className={styles.skipBtn}
        onClick={(e) => {
          e.stopPropagation()
          close()
        }}
      >
        SKIP
      </button>
    </div>
  )
}
