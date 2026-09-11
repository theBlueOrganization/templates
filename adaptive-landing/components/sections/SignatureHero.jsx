'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn, splitHighlight, isMobileUserAgent } from '../../lib/utils'
import { useUtmSource } from '../../lib/useUtmSource'
import SignaturePhoneModal from '../ui/SignaturePhoneModal'
import MobileBreakText from '../ui/MobileBreakText'
import styles from './SignatureHero.module.css'

const EASE = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } }),
}

// eupseong-prugio 첫 화면 히어로 — 로드 즉시 순차적으로 텍스트가 아래→위로 떠오르며 나타남
export default function SignatureHero({ hero, telNumber, telNumberByUtm, visitTargetId }) {
  const descSegments = hero.descLine1 ? splitHighlight(hero.descLine1, hero.descLine1Accent) : []
  const titleSegments = hero.titleAccent ? splitHighlight(hero.titleLine1, hero.titleAccent) : null
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
  const slideTimerRef = useRef(null)
  // slides[i].eyebrowLine1/2가 있으면 슬라이드마다 문구를 바꾸고, 없으면 기존처럼 hero.eyebrowLine1/2 고정
  const activeEyebrowLine1 = slides?.[activeSlide]?.eyebrowLine1 ?? hero.eyebrowLine1
  const activeEyebrowLine2 = slides?.[activeSlide]?.eyebrowLine2 ?? hero.eyebrowLine2

  const restartSlideTimer = () => {
    clearInterval(slideTimerRef.current)
    if (!slides || slides.length < 2) return
    slideTimerRef.current = setInterval(() => {
      setActiveSlide((i) => (i + 1) % slides.length)
    }, 3500)
  }

  useEffect(() => {
    restartSlideTimer()
    return () => clearInterval(slideTimerRef.current)
  }, [slides])

  // 화살표/썸네일로 수동 이동하면 자동 전환 타이머를 리셋해서, 고른 직후 바로 다음 슬라이드로
  // 넘어가버리는 어색함을 방지
  const goToSlide = (i) => {
    setActiveSlide(i)
    restartSlideTimer()
  }
  const prevSlide = () => goToSlide((activeSlide - 1 + slides.length) % slides.length)
  const nextSlide = () => goToSlide((activeSlide + 1) % slides.length)

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

  // slides[i].eyebrowColorMobile — 특정 슬라이드(예: 야경)에서만 모바일 문구 색을 다르게(가독성 확보)
  const activeEyebrowColorMobile = slides?.[activeSlide]?.eyebrowColorMobile
  // slides[i].titleImageMobile — 특정 슬라이드에서만 모바일 타이틀 이미지를 다른 색상 버전으로 교체
  const activeTitleImageMobile = slides?.[activeSlide]?.titleImageMobile

  const heroStyle = {
    ...(hero.bgColor && { '--hero-bg': hero.bgColor }),
    ...(activeEyebrowColorMobile && { '--hero-eyebrow-mobile-active': activeEyebrowColorMobile }),
    ...(hero.textColor && {
      '--hero-title': hero.textColor,
      '--hero-desc': hero.textColor,
      ...(!hero.keepTextShadow && { '--hero-text-shadow': 'none' }),
    }),
    ...(hero.accentColor && { '--hero-accent': hero.accentColor }),
    ...(hero.titleAccentColor && { '--hero-title-accent': hero.titleAccentColor }),
    ...(hero.titleColor && { '--hero-title-only': hero.titleColor }),
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

  // heroSlides(이미지 비율만큼만 높이 차지)는 슬라이드 이미지 자체에 문구가 박혀있는(hideText) 현장
  // 전용 — 문구를 별도로 얹는 현장(예: GTX 프리미엄 히어로)은 슬라이드가 있어도 100svh 풀스크린 유지
  const heroClassName = [
    styles.hero,
    slides && slides.length > 1 && hero.hideText && styles.heroSlides,
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
        {hero.badge && (
          <div className={styles.badge}>
            <span className={styles.badgeLine1}>{hero.badge.line1}</span>
            <span className={styles.badgeLine2}>{hero.badge.line2}</span>
          </div>
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
          {hero.eyebrowDivider ? (
            <motion.p className={styles.eyebrowDividerRow} custom={0.2} initial="hidden" animate="show" variants={lineVariants}>
              <span className={styles.eyebrowDividerText}>{activeEyebrowLine1}</span>
              <span className={styles.eyebrowDividerLine} />
              <span className={styles.eyebrowAccent}>{activeEyebrowLine2}</span>
            </motion.p>
          ) : (
            <motion.p className={styles.eyebrow} custom={0.2} initial="hidden" animate="show" variants={lineVariants}>
              {activeEyebrowLine1}
              <br className={hero.eyebrowOneLineMobile ? styles.eyebrowBreakHideMobile : undefined} />
              {hero.eyebrowOneLineMobile ? ' ' : null}
              <span className={styles.eyebrowAccent}>{activeEyebrowLine2}</span>
            </motion.p>
          )}

          {hero.titleImage ? (
            <motion.div className={styles.titleImageWrap} custom={0.4} initial="hidden" animate="show" variants={lineVariants}>
              {activeTitleImageMobile ? (
                <>
                  <Image
                    src={activeTitleImageMobile.src}
                    alt={hero.titleImage.alt}
                    width={hero.titleImage.width}
                    height={hero.titleImage.height}
                    className={`${styles.titleImage} ${styles.titleImageMobileOnly}`}
                  />
                  <Image
                    src={hero.titleImage.src}
                    alt={hero.titleImage.alt}
                    width={hero.titleImage.width}
                    height={hero.titleImage.height}
                    className={`${styles.titleImage} ${styles.titleImageDesktopOnly}`}
                  />
                </>
              ) : (
                <Image
                  src={hero.titleImage.src}
                  alt={hero.titleImage.alt}
                  width={hero.titleImage.width}
                  height={hero.titleImage.height}
                  className={styles.titleImage}
                />
              )}
            </motion.div>
          ) : (
            <motion.h1 className={styles.title} custom={0.4} initial="hidden" animate="show" variants={lineVariants}>
              {titleSegments
                ? titleSegments.map((seg, i) =>
                    seg.accent ? (
                      <span key={i} className={styles.titleAccent}>
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )
                : hero.titleLine1}
              {hero.titleLine2 && (
                <>
                  <br />
                  {hero.titleLine2}
                </>
              )}
              {hero.titleLine3 && (
                <>
                  <br />
                  {hero.titleLine3}
                </>
              )}
            </motion.h1>
          )}

          {hero.descLine1 && (
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
              {hero.descLine3 && (
                <>
                  <br />
                  <MobileBreakText text={hero.descLine3} breakClassName={styles.mobileBreak} />
                </>
              )}
            </motion.p>
          )}

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

      {slides && slides.length > 1 && (
        <motion.div
          className={styles.slideNav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button type="button" className={styles.slideArrow} onClick={prevSlide} aria-label="이전 배경 이미지">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
              <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <ul className={styles.slideThumbs}>
            {slides.map((slide, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={cn(styles.slideThumbBtn, i === activeSlide && styles.slideThumbBtnActive)}
                  onClick={() => goToSlide(i)}
                  aria-label={`${i + 1}번째 배경 이미지로 보기`}
                >
                  <Image src={slide.bgImage.src} alt="" fill sizes="120px" className={styles.slideThumbImg} />
                </button>
              </li>
            ))}
          </ul>

          <button type="button" className={styles.slideArrow} onClick={nextSlide} aria-label="다음 배경 이미지">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
              <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      )}

      {!(slides && slides.length > 1) && (
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <span className={styles.scrollText}>Discover</span>
          <span className={styles.scrollLine} />
        </motion.div>
      )}

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

      <SignaturePhoneModal open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} telNumber={resolvedTelNumber} />
    </section>
  )
}
