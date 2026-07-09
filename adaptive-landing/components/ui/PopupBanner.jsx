'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './PopupBanner.module.css'

// 진입 팝업 배너 — 현장 데이터의 popup.enabled가 true일 때만 렌더링됨 (app/apt/[slug]/page.jsx에서 조건부 렌더)
export default function PopupBanner({ popup }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!popup.enabled) return
    // 히어로 애니메이션이 다 끝나는 시점(2850ms) 바로 뒤에 팝업을 띄움
    const t = setTimeout(() => setOpen(true), 2900)
    return () => clearTimeout(t)
  }, [popup.enabled])

  // 팝업이 열려있는 동안은 뒤 배경 스크롤을 막음
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!popup.image) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)} // 배경 클릭 시 닫힘
        >
          <motion.div
            className={styles.inner}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()} // 이미지 클릭은 배경 클릭으로 전파되지 않게 막음
          >
            <button onClick={() => setOpen(false)} aria-label="팝업 닫기" className={styles.closeBtn}>
              닫기 ✕
            </button>
            <Image
              src={popup.image.src}
              alt={popup.image.alt ?? ''}
              width={320}
              height={400}
              sizes="320px"
              className={styles.image}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
