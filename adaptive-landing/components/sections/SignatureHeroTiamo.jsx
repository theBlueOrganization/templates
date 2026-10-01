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
                  className={styles.slideImage}
                />
              </motion.div>
            </AnimatePresence>
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
        </motion.div>
      </div>
    </section>
  )
}
