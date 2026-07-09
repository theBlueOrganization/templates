'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './BottomBar.module.css'

// 하단 고정 바 (전화상담 / 빠른상담신청) — 모바일·태블릿 전용, 데스크톱(lg 이상)에서는 숨김
// 데스크톱에서는 TopNav의 전화번호 버튼이 같은 역할을 하기 때문
export default function BottomBar({ telNumber, theme }) {
  const [visible, setVisible] = useState(false)
  const th = theme ?? {}

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById('contact-section')
      // 상담신청 폼이 이미 화면에 보이면 굳이 바를 안 띄움 (중복 CTA 방지)
      const pastContact = contact ? contact.getBoundingClientRect().top < window.innerHeight : false
      // 화면 높이의 절반 이상 스크롤했고, 상담폼이 아직 안 보일 때만 노출
      setVisible(window.scrollY > window.innerHeight * 0.5 && !pastContact)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // AnimatePresence: visible이 false가 되어 사라질 때도 슬라이드다운 애니메이션이 재생됨
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={`tel:${telNumber}`}
            className={styles.btn}
            style={{
              background: th.BottomBar_callBtn?.background ?? '#e2e8f0',
              color: th.BottomBar_callBtn?.color ?? '#1e293b',
            }}
          >
            전화 상담
          </a>
          <button
            onClick={scrollToForm}
            className={styles.btn}
            style={{
              background: th.BottomBar_regBtn?.background ?? '#1e3a5f',
              color: th.BottomBar_regBtn?.color ?? '#ffffff',
            }}
          >
            빠른 상담 신청
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
