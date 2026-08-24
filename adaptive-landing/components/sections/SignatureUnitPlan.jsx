'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureUnitPlan.module.css'

const SPEC_LABELS = [
  { key: 'exclusive', label: '주거전용면적' },
  { key: 'common', label: '주거공용면적' },
  { key: 'supply', label: '공급면적' },
  { key: 'otherCommon', label: '기타공용면적' },
]

// 세대안내(UNIT PLAN) — 면적/타입 탭을 클릭하면 오른쪽 평면도 이미지와 왼쪽 스펙표가 함께 전환됨
export default function SignatureUnitPlan({ unitPlan }) {
  const [groupIndex, setGroupIndex] = useState(0)
  const [typeIndex, setTypeIndex] = useState(0)

  const group = unitPlan.groups[groupIndex]
  const type = group.types[typeIndex]
  const activeKey = `${group.area}-${type.letter}`

  const selectTab = (gi, ti) => {
    setGroupIndex(gi)
    setTypeIndex(ti)
  }

  return (
    <section id={unitPlan.id} className={styles.section}>
      <div className={styles.watermark} aria-hidden="true">
        {unitPlan.watermark}
      </div>

      <div className={styles.container}>
        <Reveal className={styles.leftPanel}>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>
              {unitPlan.titlePlain}
              <strong>{unitPlan.titleAccent}</strong>
            </h2>
            <p className={styles.subtitle}>
              {unitPlan.subtitleLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
          </div>

          {unitPlan.tabbedGroups ? (
            // 면적대(그룹)가 많은 현장용 — 위에서 면적대를 먼저 고르면 그 그룹의 타입 칩만 아래에 나타남
            <>
              <div className={styles.groupTabRow}>
                {unitPlan.groups.map((g, gi) => (
                  <button
                    key={g.area}
                    type="button"
                    className={cn(styles.groupTab, gi === groupIndex && styles.groupTabActive)}
                    onClick={() => selectTab(gi, 0)}
                    aria-pressed={gi === groupIndex}
                  >
                    {g.area}
                  </button>
                ))}
              </div>
              <div className={styles.chipWrap}>
                {group.types.map((t, ti) => (
                  <button
                    key={t.letter}
                    type="button"
                    className={cn(styles.chip, ti === typeIndex && styles.chipActive)}
                    onClick={() => selectTab(groupIndex, ti)}
                    aria-pressed={ti === typeIndex}
                  >
                    {t.letter}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.tabsLayout}>
              {unitPlan.groups.map((g, gi) => (
                <div key={g.area} className={styles.tabGroup}>
                  <span className={styles.groupLabel}>{g.area}</span>
                  <div className={styles.chipWrap}>
                    {g.types.map((t, ti) => (
                      <button
                        key={t.letter}
                        type="button"
                        className={cn(styles.chip, gi === groupIndex && ti === typeIndex && styles.chipActive)}
                        onClick={() => selectTab(gi, ti)}
                        aria-pressed={gi === groupIndex && ti === typeIndex}
                      >
                        {t.letter}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={styles.dataContainer}>
            {SPEC_LABELS.filter(({ key }) => type.specs[key] !== undefined).map(({ key, label }) => (
              <div key={key} className={styles.specRow}>
                <span className={styles.specLabel}>{label}</span>
                <strong className={styles.specValue}>
                  {type.specs[key]} <em>㎡</em>
                </strong>
              </div>
            ))}
            {type.specs.contract !== undefined && (
              <div className={cn(styles.specRow, styles.specRowContract)}>
                <span className={styles.specLabel}>계약면적</span>
                <strong className={styles.specValueContract}>
                  {type.specs.contract} <em>㎡</em>
                </strong>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className={styles.rightPanel}>
          <div className={styles.circleStage}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                className={styles.visual}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.planImageWrap}>
                  <Image
                    src={type.image.src}
                    alt={type.image.alt}
                    width={type.image.width || 508}
                    height={type.image.height || 373}
                    sizes="(min-width: 1024px) 508px, 80vw"
                    className={styles.planImage}
                  />
                </div>
                <div className={styles.typeTitle}>
                  <h3>
                    {group.area} {type.letter}
                  </h3>
                  <p>{type.countText}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
