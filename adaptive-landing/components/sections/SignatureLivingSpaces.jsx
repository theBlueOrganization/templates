import Image from 'next/image'
import { Stagger, StaggerItem } from '../motion/Stagger'
import Reveal from '../motion/Reveal'
import styles from './SignatureLivingSpaces.module.css'

// 생활공간(#spaces) — 인테리어 이미지 2장 그리드
export default function SignatureLivingSpaces({ spaces }) {
  return (
    <section id={spaces.id} className={styles.section}>
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{spaces.eyebrow}</p>
        <h2>
          {spaces.titlePlain}
          <br />
          <em>{spaces.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{spaces.desc}</p>
      </Reveal>

      <Stagger className={styles.grid}>
        {spaces.cards.map((card) => (
          <StaggerItem key={card.tag} className={styles.card}>
            <Image src={card.image.src} alt={card.image.alt} width={800} height={500} sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className={styles.cardCopy}>
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <p className={styles.disclaimer}>{spaces.disclaimer}</p>
    </section>
  )
}
