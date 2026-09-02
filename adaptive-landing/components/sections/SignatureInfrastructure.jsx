import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureInfrastructure.module.css'

// 교통·입지(#infrastructure) — 공식 입지 안내도 + 번호가 매겨진 3항목 리스트
export default function SignatureInfrastructure({ infrastructure }) {
  return (
    <section id={infrastructure.id} className={styles.section} aria-labelledby="infrastructure-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{infrastructure.eyebrow}</p>
        <h2 id="infrastructure-title">
          {infrastructure.titlePlain}
          <br />
          <em>{infrastructure.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{infrastructure.desc}</p>
      </Reveal>

      <div className={styles.layout}>
        <Reveal delay={0.05} className={styles.mapFigure}>
          <Image src={infrastructure.mapImage.src} alt={infrastructure.mapImage.alt} width={1200} height={827} sizes="(min-width: 1024px) 60vw, 100vw" />
          <figcaption>{infrastructure.mapCaption}</figcaption>
        </Reveal>

        <Reveal delay={0.1} className={styles.list}>
          {infrastructure.items.map((item) => (
            <article key={item.num}>
              <span>
                {item.num} · {item.category}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </Reveal>
      </div>

      <p className={styles.sourceNote}>{infrastructure.sourceNote}</p>
    </section>
  )
}
