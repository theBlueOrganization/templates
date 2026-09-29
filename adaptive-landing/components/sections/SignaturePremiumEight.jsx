import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignaturePremiumEight.module.css'

// 카드 가운데 원형 배지에 들어가는 라인 아이콘 — card.icon 키로 선택
const ICONS = {
  price: (
    <>
      <path d="M8 30c4-1 7 0 10 2h7c2 0 2 3 0 3h-7" />
      <path d="M4 28l6-3c3-1 5 0 8 1l10-4c2-1 4 2 2 3l-13 7c-2 1-4 1-6 0L4 31" />
      <circle cx="21" cy="13" r="6" />
      <path d="M21 10v6M19 12h3.5a1 1 0 010 2H19.5a1 1 0 000 2H23" />
      <path d="M21 3v2M14 6l1.5 1.5M28 6l-1.5 1.5" />
    </>
  ),
  diamond: (
    <>
      <path d="M11 6h18l6 8-15 20L5 14z" />
      <path d="M5 14h30M15 6l-3 8 8 20 8-20-3-8M20 6l-8 8M20 6l8 8" />
    </>
  ),
  cluster: (
    <>
      <path d="M6 34h28" />
      <path d="M9 34V18h6v16M15 34V10h7v24M22 34V14h6v20M28 34V22h4v12" />
      <path d="M18 14h1M18 18h1M18 22h1M18 26h1M11 22h1M11 26h1M24 18h1M24 22h1M24 26h1" />
    </>
  ),
  city: (
    <>
      <path d="M5 34h30M8 34V20l6-4v18M14 34V9h8v25M22 34V15l8 3v16" />
      <path d="M17 13h2M17 17h2M17 21h2M17 25h2M25 21h2M25 25h2M10 24h2M10 28h2" />
      <path d="M4 30c5-3 10 2 16-1s11-2 16 1" />
    </>
  ),
  jobs: (
    <>
      <path d="M8 18l12-6 12 6-12 6z" />
      <path d="M8 18v10l12 6 12-6V18M20 24v10" />
      <circle cx="20" cy="9" r="4" />
      <path d="M20 13v-1" />
    </>
  ),
  school: (
    <>
      <path d="M6 34h28M8 34V18l12-7 12 7v16" />
      <path d="M17 34v-7h6v7M12 22h3v3h-3zM25 22h3v3h-3z" />
      <path d="M20 11V4l6 2-6 2" />
    </>
  ),
  train: (
    <>
      <rect x="11" y="5" width="18" height="24" rx="4" />
      <path d="M11 17h18M15 10h10" />
      <circle cx="15.5" cy="23" r="1.5" />
      <circle cx="24.5" cy="23" r="1.5" />
      <path d="M14 29l-4 6M26 29l4 6M12 33h16" />
    </>
  ),
  eco: (
    <>
      <path d="M14 34V22M26 34V20M6 34h28" />
      <path d="M14 22c-5 0-7-4-5-8 0-4 3-6 5-6s5 2 5 6c2 4 0 8-5 8z" />
      <path d="M26 20c-4 0-6-3-4-7 0-3 2-5 4-5s4 2 4 5c2 4 0 7-4 7z" />
    </>
  ),
}

// PREMIUM 8(카드형) — premiumValue.cardStyle === 'premium8'일 때 SignaturePremiumValue가 대신 렌더.
// 가운데 "OO만의 / PREMIUM 8" 타이틀(좌측 영문 eyebrow, 우측 손글씨 카피) 아래 사진 카드 그리드(PC 4열 / 모바일 2열).
// 카드: 사진 → 사진 아래 경계에 걸친 원형 아이콘(tone: accent 테라코타 / dark 차콜) → PREMIUM N → 설명 한 줄 → 강조 문구
// (예: 호반써밋 첨단3지구 — 사용자 제공 시안 이미지 기준)
export default function SignaturePremiumEight({ premiumValue }) {
  return (
    <section id={premiumValue.id} className={styles.section}>
      <Reveal className={styles.head}>
        {premiumValue.sideEyebrow && (
          <p className={styles.sideEyebrow}>
            {premiumValue.sideEyebrow.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        )}
        <div className={styles.titleRow}>
          <span className={styles.rule} aria-hidden />
          <h2 className={styles.title}>
            <span className={styles.titleLead}>{premiumValue.titleLead}</span>
            <span className={styles.titleMain}>
              {premiumValue.titleWord}
              <em>{premiumValue.titleNum}</em>
            </span>
          </h2>
          <span className={styles.rule} aria-hidden />
        </div>
        {premiumValue.script && <p className={styles.script}>{premiumValue.script}</p>}
      </Reveal>

      <Stagger className={styles.grid}>
        {premiumValue.cards.map((card, i) => (
          <StaggerItem key={card.num} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className={styles.img}
                style={card.image.position ? { objectPosition: card.image.position } : undefined}
              />
            </div>
            <span className={card.iconTone === 'dark' ? `${styles.icon} ${styles.iconDark}` : styles.icon}>
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {ICONS[card.icon]}
              </svg>
            </span>
            <div className={styles.body}>
              <p className={styles.num}>PREMIUM {i + 1}</p>
              <p className={styles.lead}>{card.lead}</p>
              <p className={card.strongTone === 'dark' ? `${styles.strong} ${styles.strongDark}` : styles.strong}>{card.strong}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
