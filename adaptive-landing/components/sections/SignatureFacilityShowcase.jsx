import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureFacilityShowcase.module.css'

// 메인 이미지 + 겹쳐진 서브 이미지 + 텍스트 블록 조합 (골프연습장/피트니스/도서관/키즈존에서 재사용)
// side: 'left'면 이미지가 왼쪽·텍스트가 오른쪽, 'right'면 반대로 배치
export default function SignatureFacilityShowcase({ showcase, onZoom }) {
  const isRight = showcase.side === 'right'

  return (
    <Reveal className={cn(styles.wrap, isRight && styles.wrapReverse)}>
      <div className={styles.visual}>
        <button
          type="button"
          className={styles.mainTrigger}
          onClick={() => onZoom({ ...showcase.main.image, caption: showcase.main.caption })}
          aria-label={`${showcase.main.caption} 확대보기`}
        >
          <Image src={showcase.main.image.src} alt={showcase.main.image.alt} fill sizes="(min-width: 1024px) 630px, 90vw" className={styles.mainImage} />
          <span className={styles.mainGradient} />
          <span className={styles.mainCaption}>{showcase.main.caption}</span>
        </button>

        <button
          type="button"
          className={cn(styles.subTrigger, isRight ? styles.subTriggerRight : styles.subTriggerLeft)}
          onClick={() => onZoom({ ...showcase.sub.image, caption: showcase.sub.caption })}
          aria-label={`${showcase.sub.caption} 확대보기`}
        >
          <Image src={showcase.sub.image.src} alt={showcase.sub.image.alt} fill sizes="(min-width: 1024px) 392px, 60vw" className={styles.subImage} />
          <span className={styles.subGradient} />
          <span className={styles.subCaption}>{showcase.sub.caption}</span>
        </button>
      </div>

      <div className={styles.text}>
        <span className={styles.tag}>{showcase.tag}</span>
        <h3 className={styles.title}>{showcase.title}</h3>
        <p className={styles.desc}>{showcase.desc}</p>
      </div>
    </Reveal>
  )
}
