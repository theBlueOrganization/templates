import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignatureSellingStory.module.css'

// 핵심가치(#story) — 통계 3개 + 씬 3개(영상 1 + 이미지 2) + 전환 CTA 스트립
export default function SignatureSellingStory({ story }) {
  return (
    <section id={story.id} className={styles.section} aria-labelledby="story-title">
      <div className={styles.intro}>
        <Reveal className={styles.introHead}>
          <p className={styles.eyebrow}>{story.eyebrow}</p>
          <h2 id="story-title">
            {story.titleLine1}
            <br />
            {story.titleLine2}
            <br />
            <em>{story.titleAccent}</em>
          </h2>
          <p className={styles.desc}>{story.desc}</p>
        </Reveal>

        <Stagger className={styles.numbers}>
          {story.numbers.map((n) => (
            <StaggerItem key={n.label} className={styles.numberItem}>
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className={styles.scenes}>
        {story.scenes.map((scene) => (
          <article key={scene.title} className={scene.type === 'video' ? styles.sceneWide : styles.scene}>
            {scene.type === 'video' ? (
              <video className={styles.sceneMedia} autoPlay muted loop playsInline poster={scene.video.poster} aria-label={scene.ariaLabel}>
                <source src={scene.video.src} type="video/mp4" />
              </video>
            ) : (
              <Image src={scene.image.src} alt={scene.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={styles.sceneMedia} />
            )}
            <div className={styles.sceneCopy}>
              <span>{scene.tag}</span>
              <h3>{scene.title}</h3>
              <p>{scene.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.conversion}>
        <p>{story.conversion.eyebrow}</p>
        <h3>
          {story.conversion.titleLine1}
          <br />
          {story.conversion.titleLine2}
        </h3>
        <div>
          {story.conversion.links.map((link) => (
            <a key={link.targetId} href={`#${link.targetId}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
