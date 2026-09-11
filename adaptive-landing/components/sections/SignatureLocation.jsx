'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { splitHighlight } from '../../lib/utils'
import MobileBreakText from '../ui/MobileBreakText'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureLocation.module.css'

const MAGNIFIER_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

// 지도 위를 드래그(모바일)/마우스오버(PC)하면 그 지점을 확대해서 보여주는 돋보기 렌즈
const LENS_SIZE = 132
const LENS_ZOOM = 2.4

function useMagnifierLens() {
  const wrapRef = useRef(null)
  const [lens, setLens] = useState(null)

  const showLensAt = (clientX, clientY) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    const y = Math.min(Math.max(clientY - rect.top, 0), rect.height)
    setLens({
      left: x - LENS_SIZE / 2,
      top: y - LENS_SIZE / 2,
      backgroundSize: `${rect.width * LENS_ZOOM}px ${rect.height * LENS_ZOOM}px`,
      backgroundPosition: `${-(x * LENS_ZOOM - LENS_SIZE / 2)}px ${-(y * LENS_ZOOM - LENS_SIZE / 2)}px`,
    })
  }

  const hideLens = () => setLens(null)

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'touch') return
    e.currentTarget.setPointerCapture(e.pointerId)
    showLensAt(e.clientX, e.clientY)
  }

  const handlePointerMove = (e) => {
    if (e.pointerType === 'mouse') {
      showLensAt(e.clientX, e.clientY)
    } else if (e.pointerType === 'touch' && lens) {
      showLensAt(e.clientX, e.clientY)
    }
  }

  return {
    wrapRef,
    lens,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: hideLens,
      onPointerCancel: hideLens,
      onPointerLeave: hideLens,
    },
  }
}

// f.category와 매칭되는 원형 배지 아이콘 (교통/자연/교육/생활) — 해당 카테고리가 없으면 그냥 비워둠
const CATEGORY_ICONS = {
  교통: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="8" width="18" height="24" rx="6" />
      <path d="M12 22h18" />
      <circle cx="17" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <path d="M16 32l-3 6M26 32l3 6" />
    </svg>
  ),
  자연: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40V22" />
      <path d="M24 22c0-8-6-14-13-14 0 8 5 14 13 14z" />
      <path d="M24 28c0-6 5-11 11-11 0 6-4 11-11 11z" />
    </svg>
  ),
  교육: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 20l14-9 14 9" />
      <path d="M12 19v15h24V19" />
      <path d="M20 34v-8h8v8" />
    </svg>
  ),
  생활: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h20v9a10 10 0 0 1-10 10 10 10 0 0 1-10-10z" />
      <path d="M32 22h3a4 4 0 0 1 0 8h-3" />
      <path d="M17 20v-4M22 20v-4M27 20v-4" />
    </svg>
  ),
}

function Highlighted({ text, accent, className, accentClassName }) {
  return splitHighlight(text, accent).map((seg, i) =>
    seg.accent ? (
      <strong key={i} className={accentClassName}>
        <MobileBreakText text={seg.text} breakClassName={styles.mobileBreak} />
      </strong>
    ) : (
      <span key={i} className={className}>
        <MobileBreakText text={seg.text} breakClassName={styles.mobileBreak} />
      </span>
    )
  )
}

// 위치 안내 — 지도 이미지 + 4가지 입지 강점 카드
export default function SignatureLocation({ location }) {
  const [zoomOpen, setZoomOpen] = useState(false)
  const { wrapRef, lens, handlers } = useMagnifierLens()

  return (
    <section
      id={location.id}
      className={styles.section}
      style={{
        ...(location.bgColor && { '--location-bg': location.bgColor }),
        ...(location.titleFont && { '--location-title-font': location.titleFont }),
        ...(location.titleWeight && { '--location-title-weight': location.titleWeight }),
      }}
    >
      <Reveal className={styles.header}>
        {location.label && <p className={styles.label}>{location.label}</p>}
        <p className={styles.eyebrow}>
          {location.eyebrowPlain}
          <strong>{location.eyebrowAccent}</strong>
        </p>
        <h2 className={location.subhead ? styles.titleBold : styles.title}>
          <MobileBreakText text={location.title} />
        </h2>
        <p className={location.subhead ? styles.descTitleLight : styles.descTitle}>
          <Highlighted text={location.descTitle} accent={location.descTitleAccent} accentClassName={styles.descAccent} />
        </p>
        {location.descBody1 && (
          <p className={styles.descBody}>
            <Highlighted text={location.descBody1} accent={location.descBody1Accent} accentClassName={styles.descBodyAccent} />
            {location.descBody2 && (
              <>
                <br />
                <MobileBreakText text={location.descBody2} breakClassName={styles.mobileBreak} />
              </>
            )}
          </p>
        )}
      </Reveal>

      <Reveal delay={0.1} className={styles.mapWrap}>
        <div ref={wrapRef} className={styles.mapZoomTrigger} {...handlers}>
          <Image
            src={location.mapImage.src}
            alt={location.mapImage.alt}
            width={1900}
            height={1327}
            sizes="100vw"
            className={styles.mapImage}
            draggable={false}
          />
          {lens && (
            <span
              className={styles.mapLens}
              style={{
                left: lens.left,
                top: lens.top,
                backgroundImage: `url(${location.mapImage.src})`,
                backgroundSize: lens.backgroundSize,
                backgroundPosition: lens.backgroundPosition,
              }}
            />
          )}
          <button
            type="button"
            className={styles.mapZoomIcon}
            onClick={() => setZoomOpen(true)}
            aria-label="위치 안내도 확대보기"
          >
            {MAGNIFIER_ICON}
          </button>
        </div>
      </Reveal>

      {location.subhead && (
        <Reveal delay={0.12} className={styles.subhead}>
          <p className={styles.subheadEyebrow}>{location.subhead.eyebrow}</p>
          <h3 className={styles.subheadTitle}>{location.subhead.title}</h3>
        </Reveal>
      )}

      <Stagger
        className={`${styles.grid} ${location.features[0]?.image ? styles.gridPhoto : location.features[0]?.num ? styles.gridNum : ''}`}
      >
        {location.features.map((f) =>
          f.num && f.image ? (
            <StaggerItem key={f.num} className={styles.photoCard}>
              <div className={styles.photoCardImageBox}>
                <Image
                  src={f.image.src}
                  alt={f.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={styles.photoCardImg}
                  style={f.image.position ? { '--photo-position': f.image.position } : undefined}
                />
              </div>
              <div className={styles.photoCardContent}>
                {f.eyebrowPlain ? (
                  <p className={styles.photoCardEyebrow}>
                    {f.eyebrowPlain}
                    <strong className={styles.photoCardEyebrowAccent}>{f.eyebrowAccent}</strong>
                  </p>
                ) : (
                  <>
                    {!location.hideFeatureIcon && CATEGORY_ICONS[f.category] && (
                      <span className={styles.photoCardIcon}>{CATEGORY_ICONS[f.category]}</span>
                    )}
                    <p className={styles.photoCardCategory}>{f.category}</p>
                  </>
                )}
                <h3 className={f.eyebrowPlain ? styles.photoCardTitleXl : styles.photoCardTitle}>{f.title}</h3>
                <p className={styles.photoCardDesc}>{f.desc}</p>
              </div>
            </StaggerItem>
          ) : f.num ? (
            <StaggerItem key={f.num} className={styles.numCard}>
              <span className={styles.numCardNum}>{f.num}</span>
              <p className={styles.numCardCategory}>{f.category}</p>
              <h3 className={styles.numCardTitle}>{f.title}</h3>
              <p className={styles.numCardDesc}>{f.desc}</p>
            </StaggerItem>
          ) : (
            <StaggerItem key={f.titleStrong} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {f.titlePrefix}
                <strong>{f.titleStrong}</strong>
                {f.titleSuffix}
                <span className={styles.cardTag}>{f.tag}</span>
              </h3>
              <div className={styles.cardImgWrap}>
                <Image src={f.image.src} alt={f.image.alt} width={550} height={231} sizes="(min-width: 1024px) 50vw, 100vw" className={styles.cardImg} />
              </div>
              <p className={styles.cardDesc}>
                <strong>{f.descStrong}</strong>
                {f.descRest}
              </p>
            </StaggerItem>
          )
        )}
      </Stagger>

      <p className={styles.disclaimer}>{location.disclaimer}</p>

      <SignatureLightbox image={zoomOpen ? location.mapImage : null} onClose={() => setZoomOpen(false)} />
    </section>
  )
}
