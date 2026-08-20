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
// 전화상담/방문예약 버튼은 히어로 안에도 그대로 있고(기존과 동일), 히어로를 벗어나는 순간부터는
// SignatureMobileBottomBar가 화면 하단에 고정된 채로 이어받아 계속 보여줌
export default function SignatureHeroMinimal({ hero, telNumber, telNumberByUtm, visitTargetId }) {
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

  const scrollToVisit = () => {
    document.getElementById(visitTargetId)?.scrollIntoView({ behavior: 'smooth' })
  }

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

          <div className={styles.actionButtons}>
            <a href={`tel:${resolvedTelNumber}`} className={styles.callBtn}>
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19133 13.6894 7.46 12.5667C5.84922 11.5431 4.48356 10.1774 3.46 8.56667C2.33332 6.82747 1.63216 4.84733 1.41333 2.78667C1.39667 2.60231 1.41858 2.41651 1.47767 2.24108C1.53675 2.06566 1.63171 1.90446 1.75651 1.76775C1.88131 1.63104 2.0332 1.52181 2.20253 1.44701C2.37185 1.37222 2.55489 1.33351 2.74 1.33333H4.74C5.06354 1.33015 5.37719 1.44472 5.62251 1.65569C5.86782 1.86666 6.02805 2.15963 6.07333 2.48C6.15775 3.12004 6.3143 3.74848 6.54 4.35333C6.6297 4.59195 6.64911 4.85128 6.59594 5.10059C6.54277 5.3499 6.41924 5.57874 6.24 5.76L5.39333 6.60667C6.34237 8.2757 7.7243 9.65763 9.39333 10.6067L10.24 9.76C10.4213 9.58076 10.6501 9.45723 10.8994 9.40406C11.1487 9.35089 11.4081 9.3703 11.6467 9.46C12.2515 9.6857 12.88 9.84225 13.52 9.92667C13.8438 9.97235 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6667 11.28Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {mobileBar.callLabel}
            </a>
            <button type="button" className={styles.visitBtn} onClick={scrollToVisit}>
              <svg width="22" height="22" viewBox="0 0 15 14.0625" fill="none" aria-hidden="true">
                <path
                  d="M12.1875 1.75781H11.6016V0.585938H10.4297V1.75781H4.57031V0.585938H3.39844V1.75781H2.8125C2.16797 1.75781 1.64062 2.28516 1.64062 2.92969V12.3047C1.64062 12.9492 2.16797 13.4766 2.8125 13.4766H12.1875C12.832 13.4766 13.3594 12.9492 13.3594 12.3047V2.92969C13.3594 2.28516 12.832 1.75781 12.1875 1.75781ZM12.1875 12.3047H2.8125V4.6875H12.1875V12.3047Z"
                  fill="currentColor"
                />
              </svg>
              {mobileBar.visitLabel}
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
