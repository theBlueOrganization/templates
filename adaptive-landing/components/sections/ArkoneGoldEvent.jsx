import { cn } from '../../lib/utils'
import styles from './ArkoneGoldEvent.module.css'

// 청라 아크원 푸르지오 "사전 청약 이벤트 금1돈" 배너 — 요청 반영(2026-10-26), 히어로 바로 아래에 크게.
// event: { label, highlight, suffix, ctaLabel } (사이트 config), variant: 'band'(일반 화면, 가로 띠) | 'hero'(몰입형 첫 화면 안 카드)
// href(앵커 이동) 또는 onClick(다이얼로그 열기)이 있으면 배너 전체가 사전예약 버튼이 됨
export default function ArkoneGoldEvent({ event, variant = 'band', href, onClick }) {
  const body = (
    <span className={styles.inner}>
      <span className={styles.badge}>{event.label}</span>
      <span className={styles.copy}>
        <span className={styles.coin} aria-hidden="true">金</span>
        <span><strong className={styles.gold}>{event.highlight}</strong>{event.suffix}</span>
      </span>
      {event.ctaLabel && <span className={styles.cta}>{event.ctaLabel} →</span>}
    </span>
  )
  const className = cn(styles.event, variant === 'hero' && styles.inHero)

  if (href) return <a href={href} className={className}>{body}</a>
  if (onClick) return <button type="button" className={className} onClick={onClick}>{body}</button>
  return <div className={className}>{body}</div>
}
