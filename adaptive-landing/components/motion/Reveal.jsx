'use client'

import { motion } from 'framer-motion'

// 스크롤하다가 화면에 들어오면 아래에서 위로 페이드인하는 공용 래퍼
// (기존 IntersectionObserver 방식 대신 framer-motion의 whileInView 사용)
export default function Reveal({ children, className, delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: true → 한 번 나타난 뒤로는 다시 사라졌다 나타나도 애니메이션 재실행 안 함
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
