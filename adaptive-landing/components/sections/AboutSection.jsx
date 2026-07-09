import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './AboutSection.module.css'

// 브랜드/컨셉 소개 섹션 — 텍스트 + 이미지를 2단으로 배치 (모바일은 세로로 쌓임)
export default function AboutSection({ section, theme }) {
  const { id, eyebrow, title, body, image, imagePosition = 'right' } = section
  const th = theme ?? {}
  const textOrder = imagePosition === 'left' ? styles.order2 : styles.order1
  const imageOrder = imagePosition === 'left' ? styles.order1 : styles.order2

  return (
    <section id={id} style={{ background: th.about?.background }} className={styles.section}>
      <div className={styles.grid}>
        {/* 텍스트 블록 — imagePosition이 'left'면 데스크톱에서 오른쪽 컬럼으로 이동 */}
        <Reveal className={textOrder}>
          {eyebrow && (
            <p className={styles.eyebrow} style={{ color: th.about?.eyebrowColor ?? '#1d4ed8' }}>
              {eyebrow}
            </p>
          )}
          <h2 className={styles.title}>{title}</h2>
          {/* whitespace-pre-line: body의 \n 줄바꿈을 그대로 렌더링 */}
          <p className={styles.body}>{body}</p>
        </Reveal>
        {/* 이미지 블록 — 텍스트보다 0.15초 늦게 등장 (delay) */}
        <Reveal delay={0.15} className={imageOrder}>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            sizes="(min-width: 768px) 50vw, 100vw"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  )
}
