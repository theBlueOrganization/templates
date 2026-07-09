import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureComplex.module.css'

// 단지소개 — 타입별 세대수를 포함한 단지 배치도, 동호수 배치표 이미지 2장을 순서대로 보여줌
export default function SignatureComplex({ complex }) {
  return (
    <section id={complex.id} className={styles.section}>
      <Reveal className={styles.head}>
        <p className={styles.eyebrow}>{complex.eyebrow}</p>
        <h2 className={styles.title}>
          <span>{complex.titleLine1}</span>
          <strong>{complex.titleLine2}</strong>
        </h2>
        <p className={styles.desc}>{complex.desc}</p>
      </Reveal>

      <div className={styles.gallery}>
        <Reveal delay={0.1} className={styles.imageBox}>
          <Image
            src={complex.siteMap.image.src}
            alt={complex.siteMap.image.alt}
            width={complex.siteMap.image.width}
            height={complex.siteMap.image.height}
            sizes="(min-width: 1024px) 1200px, calc(100vw - 40px)"
            className={styles.image}
          />
        </Reveal>
        <Reveal delay={0.15} className={styles.imageBox}>
          <Image
            src={complex.donghoChart.image.src}
            alt={complex.donghoChart.image.alt}
            width={complex.donghoChart.image.width}
            height={complex.donghoChart.image.height}
            sizes="(min-width: 1024px) 1200px, calc(100vw - 40px)"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  )
}
