'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUtmSource } from '../../lib/useUtmSource'
import SignaturePhoneModal from './SignaturePhoneModal'
import styles from './SignatureQuickMenu.module.css'

// PC(1024px 이상) 전용 우측 고정 퀵메뉴 — wonjongyeok-world-meridian-fore 전용.
// 접힌 상태의 세로 바(전화/관심고객/MENU)는 항상 떠 있고, MENU를 누르면 QUICK MENU 패널이 열림.
// quickMenu.items[].targetId로 페이지 섹션 id에 스크롤 이동시킴 (SignatureHeader의 gnb와 동일한 방식).
export default function SignatureQuickMenu({ quickMenu, telNumberByUtm }) {
  const [open, setOpen] = useState(false)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)
  const utmSource = useUtmSource()
  const phone = telNumberByUtm?.[utmSource] ?? quickMenu.phone

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <button type="button" className={styles.barCall} onClick={() => setPhoneModalOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19133 13.6894 7.46 12.5667C5.84922 11.5431 4.48356 10.1774 3.46 8.56667C2.33332 6.82747 1.63216 4.84733 1.41333 2.78667C1.39667 2.60231 1.41858 2.41651 1.47767 2.24108C1.53675 2.06566 1.63171 1.90446 1.75651 1.76775C1.88131 1.63104 2.0332 1.52181 2.20253 1.44701C2.37185 1.37222 2.55489 1.33351 2.74 1.33333H4.74C5.06354 1.33015 5.37719 1.44472 5.62251 1.65569C5.86782 1.86666 6.02805 2.15963 6.07333 2.48C6.15775 3.12004 6.3143 3.74848 6.54 4.35333C6.6297 4.59195 6.64911 4.85128 6.59594 5.10059C6.54277 5.3499 6.41924 5.57874 6.24 5.76L5.39333 6.60667C6.34237 8.2757 7.7243 9.65763 9.39333 10.6067L10.24 9.76C10.4213 9.58076 10.6501 9.45723 10.8994 9.40406C11.1487 9.35089 11.4081 9.3703 11.6467 9.46C12.2515 9.6857 12.88 9.84225 13.52 9.92667C13.8438 9.97235 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6667 11.28Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{quickMenu.phoneLabel}</span>
        </button>
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

      <SignaturePhoneModal open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} telNumber={phone} />
    </div>
  )
}
