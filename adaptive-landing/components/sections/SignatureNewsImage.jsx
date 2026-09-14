import Image from 'next/image'
import styles from './SignatureNewsImage.module.css'

// 프리미엄 인트로 섹션 바로 다음에 언론보도 등 캡처 이미지 한 장을 그대로 보여주는 단순 섹션
export default function SignatureNewsImage({ image, id, maxWidth, title }) {
  return (
    <section id={id} className={styles.section} style={maxWidth ? { '--news-image-max': `${maxWidth}px` } : undefined}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={maxWidth ? `(min-width: 1024px) ${maxWidth}px, 100vw` : '(min-width: 1024px) 760px, 100vw'}
        className={styles.image}
      />
    </section>
  )
}
