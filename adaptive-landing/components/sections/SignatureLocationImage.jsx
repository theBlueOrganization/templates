'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureLocationImage.module.css'

// location.variant 'image' — 위치안내 자리를 참고 사이트 입지환경 이미지 한 장으로.
// PC(768px 이상)는 완성 이미지(location.image) 그대로, 모바일은 같은 내용을 실제 텍스트 + 이미지 조각(location.mobile)으로
// 다시 짜서 보여줌 — 1200px 이미지를 폰 폭으로 줄이면 문구가 읽히지 않아서(2026-11-17 사용자 요청, 예: seocho-ph1603).
// location.mobile이 없으면 모바일도 완성 이미지 그대로.
export default function SignatureLocationImage({ location }) {
  const [zoomOpen, setZoomOpen] = useState(false)
  const m = location.mobile

  return (
    <section id={location.id} className={styles.section}>
      <div className={m ? styles.fullImageDesktopOnly : styles.fullImage} style={{ '--loc-max': `${location.maxWidth ?? 1200}px` }}>
        <Image
          src={location.image.src}
          alt={location.image.alt}
          width={location.image.width}
          height={location.image.height}
          sizes={`(min-width: 1024px) ${location.maxWidth ?? 1200}px, 100vw`}
          className={styles.image}
        />
      </div>

      {m && (
        <div className={styles.mobile}>
          <Reveal className={styles.head}>
            <p className={styles.eyebrow}>{m.eyebrow}</p>
            <h2 className={styles.title}>
              {m.titleLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h2>
            <p className={styles.subtitle}>{m.subtitle}</p>
            <p className={styles.desc}>
              {m.descLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.05} className={styles.map}>
            <button type="button" className={styles.mapBtn} onClick={() => setZoomOpen(true)} aria-label="입지 조감도 확대보기">
              <Image src={m.map.src} alt={m.map.alt} width={m.map.width} height={m.map.height} sizes="100vw" />
              <span className={styles.zoomHint}>터치하여 확대</span>
            </button>
          </Reveal>

          <Reveal delay={0.05} className={styles.points}>
            <h3 className={styles.pointsTitle}>
              {m.pointsTitleLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h3>
            <ul className={styles.pointList}>
              {m.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className={styles.photos}>
            {m.photos.map((ph, i) => (
              <figure key={ph.src} className={i === 0 ? styles.photoWide : styles.photo}>
                <Image src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} sizes={i === 0 ? '100vw' : '50vw'} />
                <figcaption>{ph.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      )}

      {m && (
        <SignatureLightbox image={zoomOpen ? { ...m.map, caption: m.mapCaption } : null} onClose={() => setZoomOpen(false)} tapZoom />
      )}
    </section>
  )
}
