'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureDevIssues.module.css'

const MAGNIFIER_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
  </svg>
)

// 주변 개발이슈(sig.devIssues) — 위치안내 바로 아래. 브리핑북 등 자료 캡처(images)를 위아래로 나열,
// 누르면 확대 모달(SignatureLightbox). 예: seocho-ph1603
export default function SignatureDevIssues({ devIssues }) {
  const [zoomImage, setZoomImage] = useState(null)

  return (
    <section id={devIssues.id} className={styles.section}>
      <Reveal className={styles.head}>
        {devIssues.eyebrow && <p className={styles.eyebrow}>{devIssues.eyebrow}</p>}
        <h2 className={styles.title}>
          {devIssues.titlePlain}
          <strong>{devIssues.titleAccent}</strong>
        </h2>
        {devIssues.desc && <p className={styles.desc}>{devIssues.desc}</p>}
      </Reveal>

      <div className={styles.inner}>
        {devIssues.images.map((image) => (
          <Reveal key={image.src} className={styles.item}>
            <button type="button" className={styles.zoomTrigger} onClick={() => setZoomImage(image)} aria-label={`${image.alt} 크게 보기`}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1100px) 1100px, 100vw" className={styles.image} />
              <span className={styles.zoomIcon}>{MAGNIFIER_ICON}</span>
            </button>
          </Reveal>
        ))}

        {devIssues.sourceNote && <p className={styles.note}>{devIssues.sourceNote}</p>}
      </div>

      <SignatureLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  )
}
