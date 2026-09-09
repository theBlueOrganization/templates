'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import MobileBreakText from '../ui/MobileBreakText'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureCommunityGeomdan.module.css'

// titlePlain/titleAccent 안의 "\n" 지점마다 항상(반응형 구분 없이) 줄바꿈되는 <br/>을 끼워 넣는다
function renderTitleBreaks(text) {
  const parts = text.split('\n')
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ))
}

// 커뮤니티(#community) — 22BL/23BL 블록별로 SPORTS/LIFESTYLE/EDUCATION 시설군 + 배치도
export default function SignatureCommunityGeomdan({ community }) {
  const [openImage, setOpenImage] = useState(null)

  return (
    <section id={community.id} className={styles.section} aria-labelledby="community-title">
      <Reveal
        className={styles.heading}
        style={community.headingFont ? { '--community-heading-font': community.headingFont } : undefined}
      >
        <p className={styles.eyebrow}>{community.eyebrow}</p>
        <h2 id="community-title">
          {renderTitleBreaks(community.titlePlain)}
          <br />
          <em>{renderTitleBreaks(community.titleAccent)}</em>
        </h2>
        <p className={styles.desc}>
          <MobileBreakText text={community.desc} breakClassName={styles.mobileBreak} />
        </p>
      </Reveal>

      <div className={styles.list}>
        {community.blocks.map((block, i) => (
          <Reveal key={block.label} delay={i * 0.08} className={community.imageOnly ? styles.cardImageOnly : styles.card}>
            {!community.imageOnly && (
              <div className={styles.copy}>
                <span>{block.label}</span>
                <h3>{block.label} 커뮤니티</h3>
                {block.groups.map((group) => (
                  <div key={group.name} className={styles.group}>
                    <strong>{group.name}</strong>
                    <p>{group.text}</p>
                  </div>
                ))}
              </div>
            )}
            <figure className={styles.plan}>
              <button
                type="button"
                className={styles.planZoomBtn}
                onClick={() => setOpenImage(block.planImage)}
                aria-label={`${block.planImage.alt} 확대 보기`}
              >
                <Image src={block.planImage.src} alt={block.planImage.alt} width={900} height={700} sizes={community.imageOnly ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 55vw, 100vw'} />
                <span className={styles.planZoomIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
              </button>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className={styles.note}>{community.note}</p>

      <SignatureLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  )
}
