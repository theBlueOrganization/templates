'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import styles from './SignatureLightbox.module.css'

// 커뮤니티 시설 이미지 확대 모달 — image가 null이 아닐 때만 렌더링됨
// (SignatureFacilityShowcase, SignatureFacilityHalfGallery 등 여러 섹션에서 재사용)
// tapZoom — 화면 폭에 맞춰 연 뒤 이미지를 한 번 더 누르면 2.5배로 키워 손가락/스크롤로 이동하며 보기(다시 누르면 원래대로).
//   글씨가 작은 완성 이미지(시스템·커뮤니티 안내 이미지 등)용 — 안 넘기면 기존과 동일
export default function SignatureLightbox({ image, onClose, tapZoom = false }) {
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!image) setZoomed(false)
  }, [image])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className={cn(styles.overlay, tapZoom && styles.overlayTapZoom)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={cn(styles.inner, tapZoom && styles.innerTapZoom, zoomed && styles.innerZoomed)}
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
              width={image.width || 1400}
              height={image.height || 933}
              sizes={tapZoom ? '250vw' : '90vw'}
              className={cn(styles.image, tapZoom && styles.imageTapZoom)}
              onClick={tapZoom ? () => setZoomed((z) => !z) : undefined}
            />
            {tapZoom && (
              <p className={styles.zoomHint}>{zoomed ? '이미지를 누르면 원래 크기로 돌아갑니다' : '이미지를 누르면 더 크게 볼 수 있습니다'}</p>
            )}
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
