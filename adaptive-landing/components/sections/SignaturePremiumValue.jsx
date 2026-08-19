import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignaturePremiumValue.module.css'

// 카드에 icon 필드가 있을 때만 그리는 아웃라인 아이콘 세트 (없으면 기존 사이트처럼 아이콘 없이 렌더)
const ICONS = {
  train: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="8" width="18" height="24" rx="6" />
      <path d="M12 22h18" />
      <path d="M16 15h4M24 15h4" />
      <circle cx="17" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <path d="M16 32l-3 6M26 32l3 6" />
      <path d="M30 14h5l3 5v4h-8" />
    </svg>
  ),
  forest: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8l-9 15h5l-6 9h20l-6-9h5z" />
      <path d="M30 15l-6.5 11h4l-4.5 7h14l-4.5-7h4z" />
      <path d="M18 32v6M30 33v5" />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 20l14-9 14 9" />
      <path d="M12 19v15h24V19" />
      <path d="M20 34v-8h8v8" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <path d="M24 11V7M21 8h6" />
    </svg>
  ),
  money: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="15" width="34" height="18" rx="3" strokeDasharray="2 3" />
      <circle cx="24" cy="24" r="6" />
      <path d="M12 19v10M36 19v10" />
    </svg>
  ),
  tunnel: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 34V22a15 15 0 0 1 30 0v12" />
      <path d="M18 34V24a6 6 0 0 1 12 0v10" />
      <path d="M6 34h36" />
    </svg>
  ),
  city: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="20" width="10" height="14" />
      <rect x="20" y="12" width="12" height="22" />
      <rect x="34" y="22" width="7" height="12" />
      <path d="M6 34h37" />
      <path d="M23 17h2M23 22h2M23 27h2M11 24h3M11 29h3" />
    </svg>
  ),
}

// PREMIUM 6 — 프리미엄 가치 카드 6개 그리드 (모바일 1열 → 데스크톱 3열)
export default function SignaturePremiumValue({ premiumValue }) {
  return (
    <section id={premiumValue.id} className={styles.section}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>{premiumValue.eyebrow}</p>
        <h2 className={styles.title}>
          {premiumValue.titlePlain}
          <strong>{premiumValue.titleAccent}</strong>
        </h2>
        {premiumValue.subtitle && <p className={styles.subtitle}>{premiumValue.subtitle}</p>}
        {premiumValue.subtitleLight && <p className={styles.subtitleLight}>{premiumValue.subtitleLight}</p>}
      </Reveal>

      <Stagger className={styles.grid}>
        {premiumValue.cards.map((card) => {
          const icon = ICONS[card.icon]
          return (
            <StaggerItem key={card.num} className={`${styles.card} ${icon ? styles.cardBordered : ''}`}>
              {icon && <span className={styles.icon}>{icon}</span>}
              <span className={styles.num}>{card.num}</span>
              <h3 className={styles.cardTitle}>
                {card.title.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </h3>
              <p className={styles.cardDesc}>
                {card.desc.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </p>
            </StaggerItem>
          )
        })}
      </Stagger>
    </section>
  )
}
