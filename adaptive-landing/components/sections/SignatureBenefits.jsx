import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignatureBenefits.module.css'

// 히어로 다음 "특별한 4가지 혜택" — 어두운 배경 사진 위에 좌측 타이틀 + 우측 2x2 혜택 그리드
export default function SignatureBenefits({ benefits }) {
  return (
    <section id={benefits.id} className={styles.section}>
      <div className={styles.bg}>
        <Image src={benefits.bgImage.src} alt={benefits.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <Reveal className={styles.left}>
          <p className={styles.eyebrow}>{benefits.eyebrow}</p>
          <p className={styles.titleSmall}>{benefits.titleSmall}</p>
          <h2 className={styles.title}>
            <span>{benefits.titleBold}</span>
            <strong>{benefits.titleScript}</strong>
          </h2>
          <p className={styles.desc}>{benefits.desc}</p>
        </Reveal>

        <Stagger className={styles.grid}>
          {benefits.items.map((item) => (
            <StaggerItem key={item.num} className={styles.card}>
              <span className={styles.tag}>{item.tag}</span>
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.cardTitle}>
                {item.title.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
