import Reveal from '../motion/Reveal'
import styles from './SignaturePremiumDuo.module.css'

const ICONS = {
  'map-pin': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  'graduation-cap': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  ),
}

// 프리미엄 듀오(#premium) — 배경 이미지 위 아이콘+카피 카드 2장
export default function SignaturePremiumDuo({ premiumDuo }) {
  return (
    <section id={premiumDuo.id} className={styles.section}>
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{premiumDuo.eyebrow}</p>
        <h2>
          {premiumDuo.titlePlain}
          <br />
          <em>{premiumDuo.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{premiumDuo.desc}</p>
      </Reveal>

      <div className={styles.grid}>
        {premiumDuo.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1} className={styles.card} style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(4,18,25,.9)), url(${card.image.src})` }}>
            <div className={styles.cardInner}>
              {ICONS[card.icon]}
              <span>{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
