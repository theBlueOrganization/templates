'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureQuickMenu.module.css'

// PC(1024px 이상) 전용 우측 고정 퀵메뉴 — wonjongyeok-world-meridian-fore 전용.
// 접힌 상태의 세로 바(전화/관심고객/MENU)는 항상 떠 있고, MENU를 누르면 QUICK MENU 패널이 열림.
// quickMenu.items[].targetId로 페이지 섹션 id에 스크롤 이동시킴 (SignatureHeader의 gnb와 동일한 방식).
export default function SignatureQuickMenu({ quickMenu, telNumberByUtm }) {
  const [open, setOpen] = useState(false)
  const utmSource = useUtmSource()
  const phone = telNumberByUtm?.[utmSource] ?? quickMenu.phone

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <a href={`tel:${phone}`} className={styles.barCall}>
          <span className={styles.barCallLabel}>{quickMenu.phoneLabel}</span>
          <span className={styles.barCallNumber}>{phone}</span>
          <span className={styles.barCallTag}>CALL</span>
        </a>
        <button type="button" className={styles.barFavorite} onClick={() => scrollTo(quickMenu.ctaTargetId)}>
          <span className={styles.barFavoriteIcon}>+</span>
          <span>{quickMenu.favoriteLabel}</span>
        </button>
        <button type="button" className={styles.barMenu} onClick={() => setOpen(true)} aria-expanded={open}>
          <span className={styles.barMenuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{quickMenu.menuLabel}</span>
        </button>
      </div>

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
              className={styles.panel}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.panelBrand}>{quickMenu.brand}</p>
                  <h2 className={styles.panelTitle}>QUICK MENU</h2>
                </div>
                <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="퀵메뉴 닫기">
                  ✕
                </button>
              </div>

              <div className={styles.panelBody}>
                <div className={styles.desk}>
                  <p className={styles.deskLabel}>RESERVATION DESK</p>
                  <p className={styles.deskText}>{quickMenu.deskText}</p>
                  <a href={`tel:${phone}`} className={styles.deskPhone}>
                    {phone}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <p className={styles.deskAddress}>{quickMenu.address}</p>
                </div>

                <div className={styles.grid}>
                  {quickMenu.items.map((item) => (
                    <button
                      key={item.num}
                      type="button"
                      className={styles.gridItem}
                      onClick={() => scrollTo(item.targetId)}
                    >
                      <span className={styles.gridNum}>{item.num}</span>
                      <span className={styles.gridLabel}>{item.label}</span>
                      <span className={styles.gridSub}>{item.sub}</span>
                    </button>
                  ))}
                </div>

                <p className={styles.tagline}>{quickMenu.tagline}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
