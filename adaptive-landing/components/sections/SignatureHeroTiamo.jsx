'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignatureHeroTiamo.module.css'

// 청라 더리브 티아모 까사(hero.variant === 'tiamo') — 참고 사이트 메인 첫 화면 재구성.
// 왼쪽: 투시도/조감도 슬라이드(크로스페이드, 왼쪽 세로 페이지 번호 01 ─ 03), 오른쪽: 흰 바탕 카피 블록
// (소제목 3줄 → 굵은 2단 타이틀 → 짧은 선 → 'NEW LUXURISM' 로고 이미지). 하단은 남색 물결 배경(hero.tiamo.bgImage).
// 흰 바탕 히어로라 헤더 투명 처리는 page.jsx에서 꺼둠(transparentOverHero)
const SLIDE_INTERVAL = 4000

const pad = (n) => String(n).padStart(2, '0')

export default function SignatureHeroTiamo({ hero }) {
  const { slides, tiamo } = hero
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[index]

  // 히어로 바로 다음 섹션으로 — 고정 헤더(모바일 64 / PC 96px) 높이만큼 덜 내려감
  const scrollToNext = (e) => {
    const next = e.currentTarget.closest('section')?.nextElementSibling
    if (!next) return
    const headerH = window.innerWidth >= 1024 ? 96 : 64
    window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.section} style={{ backgroundImage: `url(${tiamo.bgImage})` }}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.slides}>
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                className={styles.slide}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <Image
                  src={slide.bgImage.src}
                  alt={slide.bgImage.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className={`${styles.slideImage} ${slide.bgImageMobile ? styles.slideImageDesktop : ''}`}
                />
                {/* 모바일 전체화면용 세로 이미지(bgImageMobile)가 있으면 모바일에서만 그걸 보여줌 */}
                {slide.bgImageMobile && (
                  <Image
                    src={slide.bgImageMobile.src}
                    alt={slide.bgImageMobile.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={`${styles.slideImage} ${styles.slideImageMobile}`}
                  />
                )}
              </motion.div>
            </AnimatePresence>
            <span className={styles.mobileShade} aria-hidden="true" />
          </div>

          {slides.length > 1 && (
            <div className={styles.pager} aria-label="슬라이드 위치">
              <span>{pad(index + 1)}</span>
              <span className={styles.pagerLine}>
                <span className={styles.pagerFill} style={{ height: `${((index + 1) / slides.length) * 100}%` }} />
              </span>
              <span>{pad(slides.length)}</span>
            </div>
          )}
        </div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          <p className={styles.lead}>
            {tiamo.leadLines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
          {/* titleRows — 줄마다 [{ text, size: 'sm'|'lg', tone: 'gold'|'navy' }] 조각 배열 */}
          <h1 className={styles.title}>
            {tiamo.titleRows.map((row, i) => (
              <span key={i} className={styles.titleRow}>
                {row.map((part, j) => (
                  <span key={j} className={`${styles[part.size]} ${styles[part.tone]}`}>
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <span className={styles.line} />
          <Image
            src={tiamo.logo.src}
            alt={tiamo.logo.alt}
            width={tiamo.logo.width}
            height={tiamo.logo.height}
            className={styles.logo}
          />
          {tiamo.logoMobile && (
            <span className={styles.logoMobile}>
              <span className={styles.logoMobileEyebrow}>
                {tiamo.logoMobile.eyebrow} <strong>{tiamo.logoMobile.eyebrowStrong}</strong>
              </span>
              <Image
                src={tiamo.logoMobile.src}
                alt={tiamo.logoMobile.alt}
                width={tiamo.logoMobile.width}
                height={tiamo.logoMobile.height}
                className={styles.logoMobileImage}
              />
            </span>
          )}
        </motion.div>

        {/* 마우스 모양 스크롤 힌트 — 누르면 히어로 다음 섹션으로 이동 */}
        <motion.button
          type="button"
          className={styles.scrollMouse}
          onClick={scrollToNext}
          aria-label="아래로 스크롤"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className={styles.scrollMouseBody}>
            <span className={styles.scrollMouseWheel} />
          </span>
          <span className={styles.scrollMouseText}>SCROLL</span>
        </motion.button>
      </div>
    </section>
  )
}
