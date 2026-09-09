import { Fragment } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import MobileBreakText from '../ui/MobileBreakText'
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
              <Image src={block.planImage.src} alt={block.planImage.alt} width={900} height={700} sizes={community.imageOnly ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 55vw, 100vw'} />
            </figure>
          </Reveal>
        ))}
      </div>

      <p className={styles.note}>{community.note}</p>
    </section>
  )
}
