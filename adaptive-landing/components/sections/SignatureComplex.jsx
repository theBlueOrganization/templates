import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureComplex.module.css'

function PanelHead({ eyebrow, titleLine1, titleLine2, desc, plainEyebrow, align }) {
  const alignClass = align === 'left' ? styles.headLeft : align === 'right' ? styles.headRight : ''
  return (
    <Reveal className={`${styles.head} ${alignClass}`}>
      <p className={plainEyebrow ? styles.eyebrowPlain : styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        <span>{titleLine1}</span>
        <strong>{titleLine2}</strong>
      </h2>
      <p className={styles.desc}>{desc}</p>
    </Reveal>
  )
}

// 단지소개 — 타입별 세대수를 포함한 단지 배치도, 동호수 배치표 이미지 2장을 순서대로 보여줌
// siteMap/donghoChart 각각에 titleLine1이 있으면 이미지마다 별도 타이틀을, 없으면 기존처럼 상단 공용 타이틀 하나를 보여줌
export default function SignatureComplex({ complex }) {
  const perImageTitle = Boolean(complex.siteMap.titleLine1)

  return (
    <section id={complex.id} className={styles.section}>
      {!perImageTitle && (
        <PanelHead eyebrow={complex.eyebrow} titleLine1={complex.titleLine1} titleLine2={complex.titleLine2} desc={complex.desc} />
      )}

      <div className={styles.gallery}>
        <div className={styles.panel}>
          {perImageTitle && (
            <PanelHead
              eyebrow={complex.siteMap.eyebrow}
              titleLine1={complex.siteMap.titleLine1}
              titleLine2={complex.siteMap.titleLine2}
              desc={complex.siteMap.desc}
              plainEyebrow
              align="left"
            />
          )}
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
        </div>

        <div className={styles.panel}>
          {perImageTitle && (
            <PanelHead
              eyebrow={complex.donghoChart.eyebrow}
              titleLine1={complex.donghoChart.titleLine1}
              titleLine2={complex.donghoChart.titleLine2}
              desc={complex.donghoChart.desc}
              plainEyebrow
              align="right"
            />
          )}
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
      </div>
    </section>
  )
}
