'use client'

import { motion } from 'framer-motion'

// 카드 목록처럼 여러 개를 "순서대로 하나씩" 등장시킬 때 쓰는 컨테이너/아이템 쌍
// 사용법: <Stagger>로 감싸고 그 안의 각 항목을 <StaggerItem>으로 감싸면 됨 (PointSection, GallerySection 참고)

// 컨테이너 — 화면에 보이면 자식들을 0.12초 간격으로 순서대로 등장시킴
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

// 아이템 하나가 실제로 어떻게 등장하는지 (아래에서 페이드인)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Stagger({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }) {
  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
