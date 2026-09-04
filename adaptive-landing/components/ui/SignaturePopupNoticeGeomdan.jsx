'use client'

import { Fragment, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignaturePopupNoticeGeomdan.module.css'

// 더샵 검단레이크파크 전용 진입 팝업 — 디자인 이미지 없이 텍스트(혜택/대상/기간)로 구성된
// 공지 팝업. signature.popupNotice.enabled가 true일 때만 렌더링됨(app/apt/[slug]/page.jsx에서 조건부 렌더).
export default function SignaturePopupNoticeGeomdan({ popup, visitTargetId, openDelayMs = 2900 }) {
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

  const handleCta = () => {
    setOpen(false)
    document.getElementById(visitTargetId)?.scrollIntoView({ behavior: 'smooth' })
  }

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
            <button type="button" onClick={() => setOpen(false)} className={styles.closeX} aria-label="팝업 닫기">
              ✕
            </button>

            {popup.eyebrow && <p className={styles.eyebrow}>{popup.eyebrow}</p>}
            {popup.title && <h2 className={styles.title}>{popup.title}</h2>}

            <div className={styles.benefitList}>
              {popup.benefits.map((b) => (
                <Fragment key={b.label}>
                  <div className={styles.benefitLabel}>{b.label}</div>
                  <div className={styles.benefitDesc}>
                    {b.desc}
                    {b.note && (
                      <>
                        <br />
                        <span className={styles.benefitNote}>{b.note}</span>
                      </>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>

            <dl className={styles.infoList}>
              <div className={styles.infoRow}>
                <dt>대상</dt>
                <dd>{popup.target}</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>기간</dt>
                <dd>{popup.period}</dd>
              </div>
            </dl>

            <button type="button" onClick={handleCta} className={styles.ctaBtn}>
              {popup.ctaLabel ?? '방문예약 신청하기'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
