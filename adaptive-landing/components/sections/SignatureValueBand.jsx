import Reveal from '../motion/Reveal'
import styles from './SignatureValueBand.module.css'

// 분양가 상한제 적용단지 — 배경 이미지 좌측 + 카피/CTA 우측 풀블리드 밴드
export default function SignatureValueBand({ priceBand, telNumber }) {
  const digits = telNumber.replace(/[^0-9]/g, '')

  return (
    <section className={styles.section}>
      <picture>
        <source srcSet={priceBand.image.src} type="image/webp" />
        <img src={priceBand.image.srcJpg} alt={priceBand.image.alt} loading="lazy" decoding="async" />
      </picture>
      <Reveal className={styles.copy}>
        <p className={styles.eyebrow}>{priceBand.eyebrow}</p>
        <h2>{priceBand.title}</h2>
        <p className={styles.desc}>
          {priceBand.descLine1}
          <br />
          {priceBand.descLine2}
        </p>
        <a href={`tel:${digits}`}>
          {priceBand.ctaLabel}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </Reveal>
    </section>
  )
}
