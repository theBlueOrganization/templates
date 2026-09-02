import { Stagger, StaggerItem } from '../motion/Stagger'
import Reveal from '../motion/Reveal'
import styles from './SignatureSmartHome.module.css'

const ICONS = {
  'shield-check': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  smartphone: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  wind: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  ),
}

// AiQ 스마트홈(#smarthome) — 아이콘 3종 그리드
export default function SignatureSmartHome({ smarthome }) {
  return (
    <section id={smarthome.id} className={styles.section} aria-labelledby="smarthome-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{smarthome.eyebrow}</p>
        <h2 id="smarthome-title">
          {smarthome.titlePlain}
          <br />
          <em>{smarthome.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{smarthome.desc}</p>
      </Reveal>

      <Stagger className={styles.grid}>
        {smarthome.items.map((item) => (
          <StaggerItem key={item.title} className={styles.card}>
            {ICONS[item.icon]}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <p className={styles.sourceNote}>{smarthome.sourceNote}</p>
    </section>
  )
}
