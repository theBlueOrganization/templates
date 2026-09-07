'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignaturePopupBanner.module.css'

// 원종역 월드메르디앙 포레 전용 진입 팝업 — 디자인 완성본 이미지(popup.image) 아래에
// 하단 "팝업닫기" 바만 코드로 얹음. 현장 데이터의 popup.enabled가 true일 때만 렌더링됨
// (app/apt/[slug]/page.jsx에서 조건부 렌더).
// popup.hideCloseBar: true인 현장은 이미지 자체에 닫기(X) 표시가 이미 그려져 있는 경우 —
// 하단 바를 렌더하지 않고, 이미지를 포함한 카드 전체를 탭하면 바로 닫히게 한다.
// popup.images(배열)가 있으면 popup.image 대신 그 순서대로 한 장씩 이어서 띄우고,
// 마지막 장을 닫으면 전체가 닫힌다(달서자이 제니크처럼 이벤트 안내 팝업 여러 장을
// 순차 노출해야 하는 현장용 — dalseo-xi-genic.js 참고).
export default function SignaturePopupBanner({ popup, openDelayMs = 2900, onClose }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const images = popup.images ?? [popup.image]
  const current = images[index]

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

  const handleClose = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
      return
    }
    setOpen(false)
    onClose?.()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            key={index}
            className={styles.card}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={popup.hideCloseBar ? undefined : (e) => e.stopPropagation()}
          >
            <div className={styles.imageWrap}>
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(min-width: 768px) 430px, 90vw"
                className={styles.image}
                style={popup.hideCloseBar ? { borderRadius: 8 } : undefined}
              />
            </div>

            {!popup.hideCloseBar && (
              <button type="button" onClick={handleClose} className={styles.closeBtn}>
                {popup.closeLabel ?? '팝업닫기'} ✕
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
