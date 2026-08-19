import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { splitHighlight } from '../../lib/utils'
import styles from './SignaturePremiumIntro.module.css'

// 프리미엄 섹션 도입부 — 배경 고정(패럴랙스) 이미지 위에 큰 타이틀, 스크롤하면 아래 SIGNATURE 6 카드로 이어짐
export default function SignaturePremiumIntro({ premiumIntro }) {
  const descSegments = splitHighlight(premiumIntro.descLine1, premiumIntro.descLine1Accent)

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
        <div className={styles.overlay} />
      </div>

      <Reveal className={styles.content}>
        <span className={styles.accentLine} />
        <p className={styles.eyebrow}>{premiumIntro.eyebrow}</p>
        <h2 className={styles.title}>
          <span className={styles.titleLine1}>{premiumIntro.titleLine1}</span>
          <span className={styles.titleLine2}>{premiumIntro.titleLine2}</span>
        </h2>
        <p className={styles.desc}>
          {descSegments.map((seg, i) =>
            seg.accent ? (
              <strong key={i} className={styles.descAccent}>
                {seg.text}
              </strong>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
          <br />
          {premiumIntro.descLine2}
        </p>
      </Reveal>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
