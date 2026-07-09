'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignatureLightbox.module.css'

// 커뮤니티 시설 이미지 확대 모달 — image가 null이 아닐 때만 렌더링됨
// (SignatureFacilityShowcase, SignatureFacilityHalfGallery 등 여러 섹션에서 재사용)
export default function SignatureLightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.inner}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} aria-label="확대 이미지 닫기" className={styles.closeBtn}>
              닫기 ✕
            </button>
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={933}
              sizes="90vw"
              className={styles.image}
            />
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
