'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { splitHighlight, isMobileUserAgent } from '../../lib/utils'
import { useUtmSource } from '../../lib/useUtmSource'
import SignaturePhoneModal from '../ui/SignaturePhoneModal'
import MobileBreakText from '../ui/MobileBreakText'
import styles from './SignatureHeroLegacy.module.css'

const EASE = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } }),
}

// 달서자이 제니크 전용 — 2026-09-11 두산위브더제니스 부천 리뉴얼(bffc0ce)로 공용
// SignatureHero.jsx에 우측 슬라이드 썸네일 내비게이션 등이 추가되기 이전 버전을 그대로 포크함.
// 현장 요청으로 달서자이 제니크는 그 리뉴얼 이전 히어로 구조(슬라이드 2장 이상이어도 우측엔
// 기존 "Discover" 스크롤 힌트만 노출)를 유지해야 해서, 공용 컴포넌트를 건드리지 않고 이 파일에
// 그 시점 버전을 고정해뒀다. 다른 현장에 영향 없이 이 파일만 수정하면 됨(dalseo-xi-genic,
// dalseo-xi-genic-2가 hero.variant: 'legacy'로 이 컴포넌트를 씀).
export default function SignatureHeroLegacy({ hero, telNumber, telNumberByUtm, visitTargetId }) {
  const descSegments = splitHighlight(hero.descLine1, hero.descLine1Accent)
  const mobileBar = hero.mobileBar
  const [announceIndex, setAnnounceIndex] = useState(0)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)
  // telNumberByUtm에 등록된 utm_source로 들어온 경우에만 노출 전화번호를 덮어씀 (SignatureHeader/SignatureFooter와 동일 규칙)
  const utmSource = useUtmSource()
  const resolvedTelNumber = telNumberByUtm?.[utmSource] ?? telNumber

  // slides — 배경 이미지가 여러 장이면 일정 간격으로 자동 전환되는 스와이퍼(공식 사이트 메인 슬라이드 참고).
  // 각 슬라이드 이미지 자체에 문구가 이미 포함돼 있어 hero.hideText와 함께 쓰는 걸 전제로 함.
  const slides = hero.slides
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (!slides || slides.length < 2) return
    const timer = setInterval(() => {
      setActiveSlide((i) => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [slides])

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

  // PC 브라우저로 좁은 화면을 보는 경우 tel: 링크가 통화로 안 이어지므로 번호 안내 팝업으로 대체
  const handleCallClick = (e) => {
    if (isMobileUserAgent()) return
    e.preventDefault()
    setPhoneModalOpen(true)
  }

  const heroStyle = {
    ...(hero.bgColor && { '--hero-bg': hero.bgColor }),
    ...(hero.textColor && { '--hero-title': hero.textColor, '--hero-desc': hero.textColor, '--hero-text-shadow': 'none' }),
    ...(hero.accentColor && { '--hero-accent': hero.accentColor }),
    ...(hero.fontFamily && { '--hero-font': hero.fontFamily }),
    ...(hero.imageAspectRatio && { '--hero-image-ratio': hero.imageAspectRatio }),
    ...(hero.descColorMobile && { '--hero-desc-mobile': hero.descColorMobile }),
    ...(hero.textColorMobile && { '--hero-title-mobile': hero.textColorMobile }),
    ...(hero.accentColorMobile && { '--hero-accent-mobile': hero.accentColorMobile }),
    ...(hero.eyebrowGap != null && { '--hero-eyebrow-gap': `${hero.eyebrowGap}px` }),
    ...(hero.eyebrowGapMobile != null && { '--hero-eyebrow-gap-mobile': `${hero.eyebrowGapMobile}px` }),
    ...(hero.titleGapMobile != null && { '--hero-title-gap-mobile': `${hero.titleGapMobile}px` }),
    ...(hero.descLineHeightMobile != null && { '--hero-desc-line-height-mobile': hero.descLineHeightMobile }),
    ...(hero.titleSize && {
      '--hero-title-size-base': `${hero.titleSize.base}px`,
      '--hero-title-size-md': `${hero.titleSize.md}px`,
      '--hero-title-size-lg': `${hero.titleSize.lg}px`,
    }),
  }

  const heroClassName = [
    styles.hero,
    slides && slides.length > 1 && styles.heroSlides,
    !(slides && slides.length > 1) && hero.imageAspectRatio && styles.heroTallImage,
    hero.contentTop && styles.heroContentTop,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="hero" className={heroClassName} style={Object.keys(heroStyle).length ? heroStyle : undefined}>
      <div className={styles.bg}>
        {slides && slides.length > 1 ? (
          <AnimatePresence>
            <motion.div
              key={activeSlide}
              className={styles.bgImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[activeSlide].bgImageMobile ? (
                <>
                  <Image
                    src={slides[activeSlide].bgImageMobile.src}
                    alt={slides[activeSlide].bgImageMobile.alt}
                    fill
                    priority={activeSlide === 0}
                    sizes="100vw"
                    className={`${styles.bgImage} ${styles.bgImageMobileOnly}`}
                  />
                  <Image
                    src={slides[activeSlide].bgImage.src}
                    alt={slides[activeSlide].bgImage.alt}
                    fill
                    priority={activeSlide === 0}
                    sizes="100vw"
                    className={`${styles.bgImage} ${styles.bgImageDesktopOnly}`}
                  />
                </>
              ) : (
                <Image
                  src={slides[activeSlide].bgImage.src}
                  alt={slides[activeSlide].bgImage.alt}
                  fill
                  priority={activeSlide === 0}
                  sizes="100vw"
                  className={styles.bgImage}
                />
              )}
            </motion.div>
          </AnimatePresence>
        ) : hero.bgVideo ? (
          hero.bgImageMobile ? (
            <>
              <Image
                src={hero.bgImageMobile.src}
                alt={hero.bgImageMobile.alt}
                fill
                priority
                sizes="100vw"
                className={`${styles.bgImage} ${styles.bgImageMobileOnly}`}
              />
              <video
                className={`${styles.bgImage} ${styles.bgImageDesktopOnly}`}
                src={hero.bgVideo.src}
                poster={hero.bgImage?.src}
                autoPlay
                muted
                loop
                playsInline
              />
            </>
          ) : (
            <video
              className={styles.bgImage}
              src={hero.bgVideo.src}
              poster={hero.bgImage?.src}
              autoPlay
              muted
              loop
              playsInline
            />
          )
        ) : hero.bgImageMobile ? (
          <>
            <Image
              src={hero.bgImageMobile.src}
              alt={hero.bgImageMobile.alt}
              fill
              priority
              sizes="100vw"
              className={`${styles.bgImage} ${styles.bgImageMobileOnly}`}
            />
            <Image
              src={hero.bgImage.src}
              alt={hero.bgImage.alt}
              fill
              priority
              sizes="100vw"
              className={`${styles.bgImage} ${styles.bgImageDesktopOnly}`}
            />
          </>
        ) : (
          <Image src={hero.bgImage.src} alt={hero.bgImage.alt} fill priority sizes="100vw" className={styles.bgImage} />
        )}
        {hero.overlay !== false && (
          <div
            className={
              hero.overlayMobileOnly
                ? `${styles.overlay} ${styles.overlayMobileOnly}`
                : hero.overlayDesktopOnly
                  ? `${styles.overlay} ${styles.overlayDesktopOnly}`
                  : styles.overlay
            }
          />
        )}
      </div>

      {!hero.hideText && (
        <div
          className={[
            styles.content,
            hero.hideTextMobile && styles.contentDesktopOnly,
            hero.hideTextDesktop && styles.contentMobileOnly,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <motion.p className={styles.eyebrow} custom={0.2} initial="hidden" animate="show" variants={lineVariants}>
            {hero.eyebrowLine1}
            <br className={hero.eyebrowOneLineMobile ? styles.eyebrowBreakHideMobile : undefined} />
            {hero.eyebrowOneLineMobile ? ' ' : null}
            <span className={styles.eyebrowAccent}>{hero.eyebrowLine2}</span>
          </motion.p>

          <motion.h1 className={styles.title} custom={0.4} initial="hidden" animate="show" variants={lineVariants}>
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            {hero.titleLine3 && (
              <>
                <br />
                {hero.titleLine3}
              </>
            )}
          </motion.h1>

          <motion.p className={styles.desc} custom={0.65} initial="hidden" animate="show" variants={lineVariants}>
            {descSegments.map((seg, i) =>
              seg.accent ? (
                <strong key={i} className={styles.descAccent}>
                  {seg.text}
                </strong>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
            {hero.descLine2 && (
              <>
                <br />
                <MobileBreakText text={hero.descLine2} breakClassName={styles.mobileBreak} />
              </>
            )}
            <br />
            <MobileBreakText text={hero.descLine3} breakClassName={styles.mobileBreak} />
          </motion.p>

          {hero.brandLogo && (
            <motion.div
              className={styles.brandLogo}
              custom={0.85}
              initial="hidden"
              animate="show"
              variants={lineVariants}
            >
              <Image
                src={hero.brandLogo.src}
                alt={hero.brandLogo.alt}
                width={hero.brandLogo.width}
                height={hero.brandLogo.height}
              />
            </motion.div>
          )}
        </div>
      )}

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <span className={styles.scrollText}>Discover</span>
        <span className={styles.scrollLine} />
      </motion.div>

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

          {mobileBar.bubbles ? (
            <div className={styles.bubbleRow}>
              {mobileBar.bubbles.map((b, i) =>
                b.action === 'call' ? (
                  <a
                    key={i}
                    href={`tel:${resolvedTelNumber}`}
                    onClick={handleCallClick}
                    className={styles.bubbleBtn}
                  >
                    <span className={styles.pulseDot} />
                    {b.label}
                  </a>
                ) : (
                  <button key={i} type="button" onClick={scrollToVisit} className={styles.bubbleBtn}>
                    <span className={styles.pulseDot} />
                    {b.label}
                  </button>
                )
              )}
            </div>
          ) : (
            mobileBar.bubbleText && (
              <button type="button" onClick={scrollToVisit} className={styles.promoBubble}>
                <span className={styles.pulseDot} />
                {mobileBar.bubbleText}
                <span className={styles.bubbleTail} />
              </button>
            )
          )}
        </motion.div>
      )}

      <SignaturePhoneModal open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} telNumber={resolvedTelNumber} />
    </section>
  )
}
