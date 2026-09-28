'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureUnitPlanTabs.module.css'

// 세대안내 — 타입 탭 그리드(한 줄 5개) + 선택한 타입의 평면 안내 이미지 1장(unitPlan.variant === 'imageTabs').
// 시티오씨엘 9단지처럼 면적표·동 위치 키맵·기본형/확장형 평면이 한 장에 합쳐진 완성 이미지를 그대로 보여줄 때 사용
export default function SignatureUnitPlanTabs({ unitPlan }) {
  const [index, setIndex] = useState(0)
  const tab = unitPlan.tabs[index]

  return (
    <section id={unitPlan.id} className={styles.section}>
      <Reveal className={styles.head}>
        <h2 className={styles.title}>
          {unitPlan.titlePlain}
          <strong>{unitPlan.titleAccent}</strong>
        </h2>
        {unitPlan.subtitle && <p className={styles.subtitle}>{unitPlan.subtitle}</p>}
      </Reveal>

      <div className={styles.inner}>
        <ul className={styles.tabs} role="tablist">
          {unitPlan.tabs.map((t, i) => (
            <li key={t.label}>
              <button
                type="button"
                role="tab"
                aria-selected={i === index}
                className={cn(styles.tab, i === index && styles.tabActive)}
                onClick={() => setIndex(i)}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.label}
            className={styles.panel}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={tab.image.src}
              alt={tab.image.alt}
              width={tab.image.width}
              height={tab.image.height}
              sizes="(min-width: 1100px) 1100px, 100vw"
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
