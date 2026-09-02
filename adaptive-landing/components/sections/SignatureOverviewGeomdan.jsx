import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureOverviewGeomdan.module.css'

// 사업개요 — 조감도 카드 + 세로 라벨/값 팩트 리스트
export default function SignatureOverviewGeomdan({ overview }) {
  return (
    <section id={overview.id} className={styles.section}>
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{overview.eyebrow}</p>
        <h2>
          {overview.titlePlain}
          <br />
          <em>{overview.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{overview.desc}</p>
      </Reveal>

      <div className={styles.grid}>
        <Reveal delay={0.05} className={styles.aerialCard}>
          <Image src={overview.aerialImage.src} alt={overview.aerialImage.alt} width={800} height={600} sizes="(min-width: 1024px) 45vw, 100vw" />
          <span>{overview.aerialBadge}</span>
        </Reveal>

        <Reveal delay={0.1} className={styles.factList}>
          {overview.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
