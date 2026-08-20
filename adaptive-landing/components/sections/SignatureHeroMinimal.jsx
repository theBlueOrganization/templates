'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureHeroMinimal.module.css'

const EASE = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } }),
}

// 원종역 월드메르디앙 포레 전용 — 배경 사진 위에 크림 톤 스크림을 얹어 텍스트 위주 레이아웃을 유지하는 히어로
// 전화상담/방문예약 버튼은 SignatureMobileBottomBar로 분리돼 히어로를 지난 뒤에도 화면에 고정됨
export default function SignatureHeroMinimal({ hero, telNumber, telNumberByUtm }) {
  const mobileBar = hero.mobileBar
  const [announceIndex, setAnnounceIndex] = useState(0)
  const utmSource = useUtmSource()
  const resolvedTelNumber = telNumberByUtm?.[utmSource] ?? telNumber

  useEffect(() => {
    if (!mobileBar || mobileBar.announcements.length < 2) return
    const timer = setInterval(() => {
      setAnnounceIndex((i) => (i + 1) % mobileBar.announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [mobileBar])

  return (
    <section id="hero" className={styles.hero}>
      {hero.bgImage && (
        <div className={styles.bg}>
          <Image src={hero.bgImage.src} alt={hero.bgImage.alt} fill priority sizes="100vw" className={styles.bgImage} />
          <div className={styles.overlay} />
        </div>
      )}

      <div className={styles.content}>
        <motion.p className={styles.eyebrow} custom={0.1} initial="hidden" animate="show" variants={lineVariants}>
          {hero.eyebrowLine1}
        </motion.p>

        <motion.h1 className={styles.title} custom={0.25} initial="hidden" animate="show" variants={lineVariants}>
          {hero.titleLine1}
        </motion.h1>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        />

        <motion.div className={styles.descBadges} custom={0.6} initial="hidden" animate="show" variants={lineVariants}>
          {hero.descLine1.split(' · ').map((part, i) => (
            <span key={i} className={styles.descBadge}>
              {part}
            </span>
          ))}
        </motion.div>
      </div>

      {mobileBar && (
        <motion.div
          className={styles.mobileBar}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className={styles.announceBar}>
            <div className={styles.announceTrack} style={{ transform: `translateY(-${announceIndex * 100}%)` }}>
              {mobileBar.announcements.map((a, i) => (
                <div key={i} className={styles.announceItem}>
                  <span className={styles.announceBadge}>{a.badge}</span>
                  <p className={styles.announceText}>
                    <span className={styles.announceStrong}>{a.textStrong}</span>
                    <span className={styles.announceLight}>{a.textLight}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {mobileBar.bubbleText && (
            <a href={`tel:${resolvedTelNumber}`} className={styles.promoBubble}>
              <span className={styles.pulseDot} />
              {mobileBar.bubbleText}
              <span className={styles.bubbleTail} />
            </a>
          )}
        </motion.div>
      )}
    </section>
  )
}
