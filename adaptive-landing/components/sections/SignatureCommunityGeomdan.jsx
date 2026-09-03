import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureCommunityGeomdan.module.css'

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
          {community.titlePlain}
          <br />
          <em>{community.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{community.desc}</p>
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
