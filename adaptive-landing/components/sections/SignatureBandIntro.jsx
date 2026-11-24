'use client'

import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { isDirectLink, scrollToHashTarget } from '../../lib/directLink'
import styles from './SignatureBandIntro.module.css'

// 띠(band) 인트로 — 제일풍경채 광주 포에듀 공식 홈페이지(jeil-foredu.co.kr) 인트로 흐름을 따른 전체화면 인트로.
//   연회색 배경 → 위에서 세로선이 내려옴 → 가운데 작은 사진이 가로 띠로 펼쳐짐 + 위에 영문 타이틀 한 글자씩 →
//   띠 안 사진 3장 교차 + 아래 로고·하단 안내문 → 띠가 전체 화면으로 커지며 컬러 투시도(원본은 영상) →
//   흰색 붓글씨 타이틀이 왼쪽부터 써짐 → 페이드아웃 후 본문.
// 사용: page.jsx luxe 분기의 sig.bandIntro. 끝나면 SignatureArkoneIntro와 같은 'circleintro:end' 신호를 보내
// 진입 팝업(SignatureLuxeOfficial holdForIntro)이 그 뒤에 열린다. 다이렉트 링크(#앵커)·모션 줄이기 설정이면 생략.

// 단계별 시작 시각(ms)
const T = { line: 80, band: 500, title: 900, wide: 1400, logo: 2600, full: 8000, script: 9000, leave: 11600, done: 12600 }

export default function SignatureBandIntro({ intro }) {
  const [phase, setPhase] = useState([])
  const [slide, setSlide] = useState(0)
  const [done, setDone] = useState(false)
  const slideMs = intro.slideMs ?? 2200

  useEffect(() => {
    if (isDirectLink() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(true); return }
    const timers = Object.entries(T).map(([key, ms]) =>
      setTimeout(() => (key === 'done' ? setDone(true) : setPhase((p) => [...p, key])), ms),
    )
    // 띠 안 사진 교차(띠가 펼쳐진 뒤부터 전체화면 전환 전까지)
    intro.images.slice(1).forEach((_, i) => timers.push(setTimeout(() => setSlide(i + 1), T.wide + 1200 + slideMs * i)))
    return () => timers.forEach(clearTimeout)
  }, [intro.images, slideMs])

  useEffect(() => {
    if (done) {
      window.__circleIntroEnded = true
      window.dispatchEvent(new Event('circleintro:end'))
      if (isDirectLink()) requestAnimationFrame(scrollToHashTarget)
      return
    }
    document.documentElement.classList.add(styles.lockScroll)
    document.body.classList.add(styles.lockScroll)
    return () => {
      document.documentElement.classList.remove(styles.lockScroll)
      document.body.classList.remove(styles.lockScroll)
    }
  }, [done])

  if (done) return null
  const on = (k) => phase.includes(k) && styles[`is_${k}`]

  return (
    <div
      className={cn(styles.intro, on('line'), on('band'), on('title'), on('wide'), on('logo'), on('full'), on('script'), on('leave'))}
      style={intro.bg ? { '--band-bg': intro.bg, '--band-ink': intro.ink } : undefined}
      aria-label={intro.ariaLabel}
    >
      <i className={styles.line} aria-hidden="true" />

      <div className={styles.center}>
        <h2 className={styles.title} aria-label={intro.title}>
          {[...intro.title].map((ch, i) => (
            <span key={i} style={{ '--i': i }} aria-hidden="true">{ch === ' ' ? ' ' : ch}</span>
          ))}
        </h2>
        <div className={styles.logo}>
          <img src={intro.logo.src} alt={intro.logo.alt} width={intro.logo.width} height={intro.logo.height} />
        </div>
      </div>

      {/* 띠 — 전체화면 단계에서 화면 가득 커짐 */}
      <div className={styles.band} aria-hidden="true">
        {intro.images.map((src, i) => (
          <img key={src} className={cn(styles.bandImg, i === slide && styles.bandImgOn)} src={src} alt="" />
        ))}
        <picture className={styles.finale}>
          {intro.finale.bgMobile && <source media="(max-width: 1023px) and (orientation: portrait)" srcSet={intro.finale.bgMobile} />}
          <img src={intro.finale.bg} alt="" />
        </picture>
        <div className={styles.finaleShade} />
        <img
          className={styles.script}
          src={intro.finale.script.src}
          alt={intro.finale.script.alt}
          width={intro.finale.script.width}
          height={intro.finale.script.height}
        />
      </div>

      {intro.note && <p className={styles.note}>{intro.note}</p>}

      <button type="button" className={styles.skip} onClick={() => setDone(true)}>
        <span>skip</span>
      </button>
    </div>
  )
}
