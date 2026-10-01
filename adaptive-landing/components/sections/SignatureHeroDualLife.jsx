'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './SignatureHeroDualLife.module.css'

const EASE = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay) => ({ opacity: 1, y: 0, transition: { duration: 1.2, delay, ease: EASE } }),
}

// 배경 이미지 + 블럭 태그를 한 무대(stage)에 같이 올림. stage는 background cover(center bottom)와 똑같이
// 늘어나므로 태그 좌표(x/y %)를 이미지 기준으로 주면 화면 비율이 바뀌어도 늘 같은 건물을 가리킴
function Stage({ image, tags, mobile }) {
  return (
    <div
      className={cn(styles.stage, mobile ? styles.stageMobile : styles.stageDesktop)}
      style={{ '--stage-ratio': image.width / image.height }}
    >
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className={styles.stageImage} />
      {tags?.map((tag, i) => {
        const pos = mobile ? tag.mobile : tag.desktop
        return (
          <motion.div
            key={i}
            className={cn(styles.tag, tag.tone === 'gray' && styles.tagGray, tag.side === 'right' && styles.tagRight)}
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, ...(pos.stem && { '--tag-stem': `${pos.stem}px` }) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 + i * 0.2 }}
          >
            <span className={styles.tagDot} />
            <span className={styles.tagStem} />
            <span className={styles.tagElbow} />
            <span className={styles.tagLabel}>{tag.label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

// 풍무역세권 수자인 그라센트 2차 전용 — 공식 홈페이지(sujain-pm2.co.kr) 메인 비주얼 구성 이식.
// 노을 단지 전경 위에 네이비 명조 카피("사우 생활… — 수자인 듀얼라이프의 완성")와 장식 원,
// 1차/2차 블럭을 가리키는 지시선 태그. 모바일 하단 액션바는 SignatureHeroMinimal과 동일
export default function SignatureHeroDualLife({ hero, telNumber, telNumberByUtm, visitTargetId }) {
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
      <Stage image={hero.bgImageMobile} tags={hero.tags} mobile />
      <Stage image={hero.bgImage} tags={hero.tags} />

      <div className={styles.content}>
        <motion.p className={styles.eyebrow} custom={0.3} initial="hidden" animate="show" variants={lineVariants}>
          {hero.eyebrow}
        </motion.p>

        <motion.span
          className={styles.rule}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        />

        <motion.h1 className={styles.title} custom={0.6} initial="hidden" animate="show" variants={lineVariants}>
          {hero.titleLines.map((line, i) => (
            <span key={i} className={cn(styles.titleLine, line.indent && styles.titleLineIndent)}>
              {line.parts.map((part, j) => (
                <span key={j} className={cn(part.strong && styles.titleStrong, part.small && styles.titleSmall)}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
          {hero.decoRing && <img src={hero.decoRing} alt="" className={styles.decoRing} />}
          {hero.decoHatch && <img src={hero.decoHatch} alt="" className={styles.decoHatch} />}
        </motion.h1>
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
