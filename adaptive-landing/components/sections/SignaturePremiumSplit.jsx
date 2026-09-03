import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignaturePremiumSplit.module.css'
import { cn } from '../../lib/utils'

// 프리미엄 2단 구성(#premium-split) — 텍스트 컬럼(제목+본문+선택적 노선 배지)과 이미지 컬럼(1~2장)이
// split.reverse에 따라 좌우 순서를 바꿔가며 배치되고, 뒤로는 큰 고스트 타이포가 흐리게 깔림
export default function SignaturePremiumSplit({ split }) {
  return (
    <section className={styles.section}>
      <div className={cn(styles.grid, split.reverse && styles.reverse)}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{split.eyebrow}</p>
          <h2 className={styles.title}>
            {Array.isArray(split.title)
              ? split.title.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))
              : split.title}
          </h2>
          <div className={styles.descList}>
            {split.descLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {split.badges && (
            <ul className={styles.badgeList}>
              {split.badges.map((b, i) => (
                <li key={i} className={styles.badgeRow}>
                  <span className={cn(styles.badgeLine, b.accent && styles.badgeLineAccent)}>{b.line}</span>
                  <span className={styles.badgeRoute}>{b.route}</span>
                  <span className={cn(styles.badgeTime, b.accent && styles.badgeTimeAccent)}>{b.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Reveal className={styles.imageCol}>
          {split.images.map((img, i) => (
            <div key={i} className={styles.imageBox}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 25vw, 45vw" className={styles.image} />
            </div>
          ))}
        </Reveal>
      </div>

      {split.ghostLine1 && (
        <p className={styles.ghost} aria-hidden="true">
          {split.ghostLine1}
          <br />
          {split.ghostLine2}
        </p>
      )}
    </section>
  )
}
