import Image from 'next/image'
import styles from './SignatureNewsImage.module.css'

// 프리미엄 인트로 섹션 바로 다음에 언론보도 등 캡처 이미지 한 장을 그대로 보여주는 단순 섹션
export default function SignatureNewsImage({ image }) {
  return (
    <section className={styles.section}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 760px, 100vw"
        className={styles.image}
      />
    </section>
  )
}
