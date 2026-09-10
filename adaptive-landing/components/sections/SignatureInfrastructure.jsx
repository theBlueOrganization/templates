'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureInfrastructure.module.css'

const MAGNIFIER_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const TRAIN_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="18" r="1.4" fill="currentColor" />
    <circle cx="15" cy="18" r="1.4" fill="currentColor" />
    <path d="M7 17l-2 3M17 17l2 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const CLOCK_ICON = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// 교통·입지(#infrastructure) — 공식 입지 안내도 + 번호가 매겨진 3항목 리스트
export default function SignatureInfrastructure({ infrastructure }) {
  const [zoomOpen, setZoomOpen] = useState(false)

  return (
    <section id={infrastructure.id} className={styles.section} aria-labelledby="infrastructure-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{infrastructure.eyebrow}</p>
        <h2 id="infrastructure-title">
          {infrastructure.titlePlain}
          <br />
          <em>{infrastructure.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{infrastructure.desc}</p>
      </Reveal>

      <div className={styles.layout}>
        <Reveal delay={0.05} className={styles.mapFigure}>
          <button
            type="button"
            className={styles.mapZoomTrigger}
            onClick={() => setZoomOpen(true)}
            aria-label="공식 입지 안내도 확대보기"
          >
            <Image src={infrastructure.mapImage.src} alt={infrastructure.mapImage.alt} width={1200} height={827} sizes="(min-width: 1024px) 60vw, 100vw" />
            <span className={styles.mapZoomIcon}>{MAGNIFIER_ICON}</span>
          </button>
          <figcaption>{infrastructure.mapCaption}</figcaption>

          {infrastructure.badges && (
            <ul className={styles.badgeList}>
              {infrastructure.badges.map((b, i) => (
                <li key={i} className={styles.badgeRow}>
                  <span className={b.line.includes('2호선') ? `${styles.badgeIcon} ${styles.badgeIconLine2}` : styles.badgeIcon}>{TRAIN_ICON}</span>
                  <span className={styles.badgeLine}>{b.line}</span>
                  <span className={styles.badgeDivider} aria-hidden="true" />
                  <span className={styles.badgeRoute}>{b.route}</span>
                  <span className={b.accent ? `${styles.badgeTime} ${styles.badgeTimeAccent}` : styles.badgeTime}>
                    {b.time}
                    <span className={styles.badgeTimeMark}>{CLOCK_ICON}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal delay={0.1} className={styles.list}>
          {infrastructure.items.map((item) => (
            <article key={item.num}>
              <span>
                {item.num} · {item.category}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </Reveal>
      </div>

      <p className={styles.sourceNote}>{infrastructure.sourceNote}</p>

      <SignatureLightbox
        image={zoomOpen ? { ...infrastructure.mapImage, caption: infrastructure.mapCaption } : null}
        onClose={() => setZoomOpen(false)}
      />
    </section>
  )
}
