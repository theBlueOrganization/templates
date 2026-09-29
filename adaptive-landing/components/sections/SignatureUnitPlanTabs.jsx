'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureUnitPlanTabs.module.css'

// 탭 그리드 + 선택한 탭의 완성 이미지 1장 — 세대안내(unitPlan.variant === 'imageTabs')와 단지안내(complex.variant ===
// 'imageTabs')에서 공용. 시티오씨엘 9단지처럼 면적표·평면·배치도 등이 한 장에 합쳐진 완성 이미지를 그대로 보여줄 때 사용.
// tabColumns / tabColumnsMobile로 한 줄 탭 개수, tab.zoomable이면 이미지를 누를 때 원본을 새 창으로 열어 크게 보기.
// tabLayout: 'side'면 PC(1024px 이상)에서 탭을 왼쪽 세로 목록(스크롤 시 고정)으로, 이미지는 오른쪽에 배치 — 모바일은 그대로 가로 탭
// zoomLightbox: true면 모든 탭 이미지 오른쪽 위에 돋보기 버튼 — 누르면 같은 화면에서 확대 모달(SignatureLightbox)로 보기
const MAGNIFIER_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
  </svg>
)

function PanelImage({ image }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(min-width: 1100px) 1100px, 100vw"
      className={styles.image}
    />
  )
}

export default function SignatureUnitPlanTabs({ unitPlan }) {
  const cols = unitPlan.tabColumns ?? 5
  const [index, setIndex] = useState(0)
  const [zoomOpen, setZoomOpen] = useState(false)
  const tab = unitPlan.tabs[index]

  return (
    <section
      id={unitPlan.id}
      className={styles.section}
      style={{
        '--tab-cols': cols,
        '--tab-cols-mobile': unitPlan.tabColumnsMobile ?? cols,
        // headGap — 타이틀 블록과 탭/이미지 사이 여백(px) 현장별 조정. [모바일, PC]
        ...(unitPlan.headGap && { '--head-gap-m': `${unitPlan.headGap[0]}px`, '--head-gap': `${unitPlan.headGap[1]}px` }),
      }}
    >
      <Reveal className={styles.head}>
        {unitPlan.eyebrow && <p className={styles.eyebrow}>{unitPlan.eyebrow}</p>}
        <h2 className={styles.title}>
          {unitPlan.titlePlain}
          <strong>{unitPlan.titleAccent}</strong>
        </h2>
        {unitPlan.subtitle && <p className={styles.subtitle}>{unitPlan.subtitle}</p>}
      </Reveal>

      {/* tabStyle: 'circle' — 탭을 원형 썸네일(tab.thumb) + 라벨로, 가운데 정렬 */}
      <div className={cn(styles.inner, unitPlan.tabLayout === 'side' && styles.side, unitPlan.tabStyle === 'circle' && styles.circle)}>
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
                {unitPlan.tabStyle === 'circle' && t.thumb && (
                  <span className={styles.circleThumb}>
                    <Image src={t.thumb} alt="" fill sizes="120px" className={styles.circleImg} />
                  </span>
                )}
                <span className={styles.tabLabel}>{t.label}</span>
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
            {unitPlan.zoomLightbox ? (
              <button type="button" className={styles.zoomTrigger} onClick={() => setZoomOpen(true)} aria-label={`${tab.label} 크게 보기`}>
                <PanelImage image={tab.image} />
                <span className={styles.zoomIcon}>{MAGNIFIER_ICON}</span>
              </button>
            ) : tab.zoomable ? (
              <a href={tab.image.src} target="_blank" rel="noopener noreferrer" className={styles.zoomLink}>
                <PanelImage image={tab.image} />
                <span className={styles.zoomHint}>이미지를 누르면 크게 볼 수 있습니다</span>
              </a>
            ) : (
              <PanelImage image={tab.image} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {unitPlan.zoomLightbox && <SignatureLightbox image={zoomOpen ? tab.image : null} onClose={() => setZoomOpen(false)} />}
    </section>
  )
}
