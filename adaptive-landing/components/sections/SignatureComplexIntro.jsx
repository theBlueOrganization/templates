import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureComplexIntro.module.css'

// 단지구성 — 단지소개(SignatureComplex) 바로 앞에 오는 선택 섹션(signature.complexIntro가 있을 때만).
// 좌측 영문 라벨(PREMIUM / ARCHITECTURE) + 우측 타이틀·설명 헤더, 조감도(대) → 문주(대) → 조경 사진 2장
// (캡션) → 특화 포인트 목록(2열) 순서로 쌓음. 포레나 인천학익 원본 단지구성 이미지 구성을 그대로 재현
export default function SignatureComplexIntro({ complexIntro }) {
  return (
    <section id={complexIntro.id} className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p className={styles.label}>
            <span className={styles.labelThin}>{complexIntro.labelTop}</span>
            <strong className={styles.labelBold}>{complexIntro.labelBottom}</strong>
          </p>
          <div className={styles.headText}>
            <h2 className={styles.title}>
              <span>{complexIntro.titleLine1}</span>
              <strong>{complexIntro.titleLine2}</strong>
            </h2>
            <p className={styles.desc}>{complexIntro.desc}</p>
          </div>
        </Reveal>

        {complexIntro.mainImages.map((img, i) => (
          <Reveal key={img.src} delay={0.05 * i} className={styles.mainImage}>
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 1024px) 1000px, 100vw" />
          </Reveal>
        ))}

        <div className={styles.photoRow}>
          {complexIntro.photos.map((p, i) => (
            <Reveal key={p.image.src} delay={0.08 * i} className={styles.photo}>
              <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="(min-width: 768px) 500px, 100vw" />
              <span className={styles.photoCaption}>{p.caption}</span>
            </Reveal>
          ))}
        </div>

        <ul className={styles.points}>
          {complexIntro.points.map((pt) => (
            <li key={pt.title} className={styles.point}>
              <strong className={styles.pointTitle}>
                {pt.title}
                {pt.titleSub && <small>{pt.titleSub}</small>}
              </strong>
              <p className={styles.pointDesc}>{pt.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
