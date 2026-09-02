'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureSiteplanGeomdan.module.css'

// 단지배치도(#siteplan) — 메인 배치도(새 탭으로 원본 열기) + 22BL/23BL 동호수배치도
// "펼쳐보기" 버튼(스크롤 가능한 라이트박스로 확인, 기존 SignatureLightbox 재사용)
export default function SignatureSiteplanGeomdan({ siteplan }) {
  const [openImage, setOpenImage] = useState(null)

  return (
    <section id={siteplan.id} className={styles.section}>
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{siteplan.eyebrow}</p>
        <h2>
          {siteplan.titlePlain}
          <br />
          <em>{siteplan.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{siteplan.desc}</p>
      </Reveal>

      <Reveal delay={0.05} className={styles.mainFigure}>
        <Image src={siteplan.mainImage.src} alt={siteplan.mainImage.alt} width={1200} height={900} sizes="(min-width: 1024px) 1180px, 100vw" />
        <figcaption>
          <span>{siteplan.mainLabel}</span>
          <a href={siteplan.mainImage.src} target="_blank" rel="noreferrer">
            크게보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </figcaption>
      </Reveal>

      <div className={styles.donghoGrid}>
        {siteplan.donghoCards.map((card, i) => (
          <Reveal key={card.label} delay={0.1 + i * 0.05} className={styles.donghoCard}>
            <figcaption>
              <span>{card.label}</span> 동호수배치도
              <a href={card.image.src} target="_blank" rel="noreferrer">
                크게보기
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </figcaption>
            <button type="button" className={styles.reveal} onClick={() => setOpenImage(card.image)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h6v6" />
                <path d="m21 3-7 7" />
                <path d="m3 21 7-7" />
                <path d="M9 21H3v-6" />
              </svg>
              <span>{card.label} 동호수배치도 열기</span>
              <small>스크롤하며 층별 배치를 확인할 수 있습니다</small>
            </button>
          </Reveal>
        ))}
      </div>

      <p className={styles.note}>{siteplan.note}</p>

      <SignatureLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  )
}
