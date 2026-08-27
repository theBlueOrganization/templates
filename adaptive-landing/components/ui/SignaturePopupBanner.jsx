'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignaturePopupBanner.module.css'

// 원종역 월드메르디앙 포레 전용 진입 팝업 — 디자인 완성본 이미지(popup.image) 아래에
// 하단 "팝업닫기" 바만 코드로 얹음. 현장 데이터의 popup.enabled가 true일 때만 렌더링됨
// (app/apt/[slug]/page.jsx에서 조건부 렌더).
export default function SignaturePopupBanner({ popup, openDelayMs = 2900 }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!popup.enabled) return
    const t = setTimeout(() => setOpen(true), openDelayMs)
    return () => clearTimeout(t)
  }, [popup.enabled, openDelayMs])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className={styles.card}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.imageWrap}>
              <Image
                src={popup.image.src}
                alt={popup.image.alt}
                width={popup.image.width}
                height={popup.image.height}
                sizes="(min-width: 768px) 430px, 90vw"
                className={styles.image}
              />
            </div>

            <button type="button" onClick={() => setOpen(false)} className={styles.closeBtn}>
              {popup.closeLabel ?? '팝업닫기'} ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
