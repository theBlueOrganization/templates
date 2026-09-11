import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import MobileBreakText from '../ui/MobileBreakText'
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
  pin: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6c-7.2 0-13 5.8-13 13 0 9.75 13 23 13 23s13-13.25 13-23c0-7.2-5.8-13-13-13z" />
      <circle cx="24" cy="19" r="4.5" />
    </svg>
  ),
  tower: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 40V22M24 40V8M35 40V16" />
      <path d="M8 40h32" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 27l3.5-9A4 4 0 0 1 15.2 15h17.6a4 4 0 0 1 3.7 2.5l3.5 9.5" />
      <rect x="6" y="27" width="36" height="9" rx="3" />
      <circle cx="15" cy="36" r="3" />
      <circle cx="33" cy="36" r="3" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 9h16v9a8 8 0 0 1-16 0V9z" />
      <path d="M16 12h-5a6 6 0 0 0 6 8" />
      <path d="M32 12h5a6 6 0 0 1-6 8" />
      <path d="M24 26v6" />
      <path d="M18 40h12" />
      <path d="M20 36h8v4h-8z" />
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
  cart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h5l4 20h20l4-14H13" />
      <circle cx="19" cy="38" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="33" cy="38" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  unitPlan: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="8" width="24" height="24" rx="2" />
      <path d="M19 8v24M7 20h24" />
      <circle cx="32" cy="32" r="7" />
      <path d="M37 37l5 5" />
    </svg>
  ),
}

// 번호+사진 카드 스타일(premiumValue.cardStyle === 'numbered') — 카드마다 "PREMIUM ── 01" 헤더 +
// 중앙 정렬 타이틀/설명 + 하단 사진, 좌측에 필기체 사이드 라벨을 두는 레이아웃. 기존 아이콘/사진
// 그리드 스타일과는 완전히 분리된 렌더 트리라 다른 현장에는 영향 없음.
function NumberedPremiumValue({ premiumValue }) {
  const { sideLabel } = premiumValue
  // sideLabel(High-end/Premium/8)을 고정 좌측 컬럼이 아니라, 카드 8개 한가운데(9개 그리드의 5번째,
  // 3열 기준 정중앙)에 끼워 넣는 카드 하나로 취급 — 3열일 때만 정확히 정중앙에 옴
  const items = sideLabel
    ? [...premiumValue.cards.slice(0, 4), { sideLabel: true, ...sideLabel }, ...premiumValue.cards.slice(4)]
    : premiumValue.cards

  return (
    <section id={premiumValue.id} className={styles.section}>
      <div className={styles.numberedLayout}>
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>{premiumValue.eyebrow}</p>
          <h2 className={styles.title}>
            <MobileBreakText text={premiumValue.titlePlain} breakClassName={styles.mobileBreak} />
            <strong>
              <MobileBreakText text={premiumValue.titleAccent} breakClassName={styles.mobileBreak} />
            </strong>
          </h2>
        </Reveal>

        <Stagger className={`${styles.grid} ${styles.gridNumbered}`}>
          {items.map((card, i) =>
            card.sideLabel ? (
              <StaggerItem key="side-label" className={styles.cardSideLabel}>
                <span className={styles.sideLabelScript}>
                  {card.scriptLine1}
                  <br />
                  {card.scriptLine2}
                </span>
                <span className={styles.sideLabelNumber}>{card.number}</span>
              </StaggerItem>
            ) : (
              <StaggerItem key={card.num ?? i} className={styles.cardNumbered}>
                <div className={styles.numberedText}>
                  <div className={styles.numberedHead}>
                    <span className={styles.numberedHeadLabel}>PREMIUM</span>
                    <span className={styles.numberedHeadLine} />
                    <span className={styles.numberedHeadNum}>{card.num}</span>
                  </div>
                  <h3 className={styles.numberedTitle}>
                    {card.title.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </h3>
                  <p className={styles.numberedDesc}>
                    {card.desc.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </p>
                </div>
                {card.image && (
                  <div className={styles.numberedImageBox}>
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className={styles.image}
                    />
                  </div>
                )}
              </StaggerItem>
            )
          )}
        </Stagger>
      </div>
    </section>
  )
}

// PREMIUM 6 — 프리미엄 가치 카드 6개 그리드 (모바일 1열 → 데스크톱 3열)
export default function SignaturePremiumValue({ premiumValue }) {
  if (premiumValue.cardStyle === 'numbered') return <NumberedPremiumValue premiumValue={premiumValue} />

  return (
    <section
      id={premiumValue.id}
      className={styles.section}
      style={premiumValue.imageAspectRatio ? { '--premium-image-ratio': premiumValue.imageAspectRatio } : undefined}
    >
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>{premiumValue.eyebrow}</p>
        <h2 className={styles.title}>
          <MobileBreakText text={premiumValue.titlePlain} breakClassName={styles.mobileBreak} />
          <strong>
            <MobileBreakText text={premiumValue.titleAccent} breakClassName={styles.mobileBreak} />
          </strong>
        </h2>
        {premiumValue.subtitle && <p className={styles.subtitle}>{premiumValue.subtitle}</p>}
        {premiumValue.subtitleLight && <p className={styles.subtitleLight}>{premiumValue.subtitleLight}</p>}
      </Reveal>

      <Stagger className={styles.grid}>
        {premiumValue.cards.map((card) => {
          const icon = ICONS[card.icon]
          return (
            <StaggerItem
              key={card.num}
              className={`${styles.card} ${icon ? styles.cardBordered : ''} ${card.image ? styles.cardPhoto : ''}`}
            >
              {card.image && (
                <div className={styles.imageBox}>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className={card.imageFit === 'contain' ? `${styles.image} ${styles.imageContain}` : styles.image}
                  />
                </div>
              )}
              <div className={card.image ? styles.body : undefined}>
                {icon ? (
                  <span className={card.image ? styles.iconBadge : styles.icon}>{icon}</span>
                ) : (
                  <span className={styles.num}>{card.num}</span>
                )}
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
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </section>
  )
}
