import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignaturePremiumValue.module.css'

// SIGNATURE 6 — 프리미엄 가치 카드 6개 그리드 (모바일 1열 → 데스크톱 3열)
export default function SignaturePremiumValue({ premiumValue }) {
  return (
    <section id={premiumValue.id} className={styles.section}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>{premiumValue.eyebrow}</p>
        <h2 className={styles.title}>
          {premiumValue.titlePlain}
          <strong>{premiumValue.titleAccent}</strong>
        </h2>
      </Reveal>

      <Stagger className={styles.grid}>
        {premiumValue.cards.map((card) => (
          <StaggerItem key={card.num} className={styles.card}>
            <span className={styles.num}>{card.num}</span>
            <h3 className={styles.cardTitle}>
              {card.title.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h3>
            <p className={styles.cardDesc}>
              {card.desc.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
