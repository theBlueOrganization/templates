'use client'

import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import styles from './SignatureHeroViaaf.module.css'

// hero.variant === 'viaaf' — 영종 신일 비아프 크레스트 몰입형 첫 화면(SignatureViaafImmersive 히어로)을 일반 Signature 페이지용으로 옮긴 것.
// 전체화면 사진 크로스페이드(5초) + 어두운 그라데이션, 우상단 외곽선 워터마크 단어(hero.viaaf.watermark),
// 원형 배지(hero.viaaf.badge), 좌하단 eyebrow → 슬라이드별 2줄 타이틀(2번째 줄 그라데이션) → 영문 한 줄, 하단 SCROLL.
// 슬라이드 문구는 한 칸(grid)에 겹쳐 두어 가장 긴 문구 높이로 고정 — 슬라이드가 바뀌어도 레이아웃이 흔들리지 않음.
// 모바일(767px 이하)은 slide.bgImageMobile(세로컷)을 씀. 예: 양산자이 파크팰리체
const SLIDE_INTERVAL = 5000

export default function SignatureHeroViaaf({ hero }) {
  const { slides, viaaf } = hero
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [slides.length])

  // 히어로 바로 다음 섹션으로 — 고정 헤더(모바일 64 / PC 96px) 높이만큼 덜 내려감
  const scrollToNext = (e) => {
    const next = e.currentTarget.closest('section')?.nextElementSibling
    if (!next) return
    const headerH = window.innerWidth >= 1024 ? 96 : 64
    window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {slides.map((s, i) => (
        <picture key={s.bgImage.src}>
          {s.bgImageMobile && <source media="(max-width: 767px)" srcSet={s.bgImageMobile.src} />}
          <img
            className={cn(styles.bg, i === index && styles.bgOn)}
            src={s.bgImage.src}
            alt={s.bgImage.alt}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </picture>
      ))}
      <span className={styles.shade} aria-hidden="true" />

      {viaaf.watermark && <div className={styles.watermark} aria-hidden="true">{viaaf.watermark}</div>}
      {viaaf.badge && (
        <div className={styles.badge}>
          <b>
            {viaaf.badge.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </b>
        </div>
      )}

      <div className={styles.shell}>
        <div className={styles.head}>
          {viaaf.eyebrow && <p className={styles.eyebrow}>{viaaf.eyebrow}</p>}
          <h1 className={styles.titleStack}>
            {slides.map((s, i) => (
              <span key={s.bgImage.src} className={cn(styles.titleSlide, i === index && styles.isOn)} aria-hidden={i !== index}>
                {s.title[0]}
                <br />
                <span className={styles.gradientText}>{s.title[1]}</span>
              </span>
            ))}
          </h1>
          {viaaf.desc && <p className={styles.desc}>{viaaf.desc}</p>}
        </div>
      </div>

      <button type="button" className={styles.scrollCue} onClick={scrollToNext} aria-label="아래로 스크롤">
        <i />
        <span>SCROLL</span>
      </button>
    </section>
  )
}
