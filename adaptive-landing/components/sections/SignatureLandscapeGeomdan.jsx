import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignatureLandscapeGeomdan.module.css'

// 조경(#landscape) — 히어로 조감 이미지 1장 + 4카드 그리드
// (기존 SignatureLandscape는 3패널 좌우분할 구조라 이 참고 사이트의 "히어로+4카드" 형태와
// 맞지 않아 새로 구성)
export default function SignatureLandscapeGeomdan({ landscape }) {
  return (
    <section id={landscape.id} className={styles.section} aria-labelledby="landscape-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{landscape.eyebrow}</p>
        <h2 id="landscape-title">
          {landscape.titlePlain}
          <br />
          <em>{landscape.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{landscape.desc}</p>
      </Reveal>

      <Reveal delay={0.05} className={styles.heroFigure}>
        <Image src={landscape.heroImage.src} alt={landscape.heroImage.alt} width={1600} height={800} sizes="(min-width: 1024px) 1180px, 100vw" />
        <figcaption>{landscape.heroCaption}</figcaption>
      </Reveal>

      <Stagger className={styles.grid}>
        {landscape.cards.map((card) => (
          <StaggerItem key={card.title} className={styles.card}>
            <Image src={card.image.src} alt={card.image.alt} width={800} height={500} sizes="(min-width: 1024px) 25vw, 50vw" />
            <div>
              <span>{card.title}</span>
              <p>{card.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <p className={styles.sourceNote}>{landscape.sourceNote}</p>
    </section>
  )
}
