import Image from 'next/image'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './SignatureFacilityHalfGallery.module.css'

// 절반씩 나란히 보여주는 시설 이미지 2장 (사우나+유아풀, 브런치카페+1층카페테리아 등)
// 클릭하면 onZoom(image)이 호출되어 상위 컴포넌트의 공용 라이트박스가 열림
export default function SignatureFacilityHalfGallery({ halves, onZoom }) {
  return (
    <Stagger className={styles.grid}>
      {halves.map((item) => (
        <StaggerItem key={item.image.src} className={styles.item}>
          <button
            type="button"
            className={styles.trigger}
            onClick={() => onZoom({ ...item.image, caption: item.caption })}
            aria-label={`${item.caption} 확대보기`}
          >
            <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className={styles.image} />
            <span className={styles.gradient} />
            <span className={styles.caption}>{item.caption}</span>
          </button>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
