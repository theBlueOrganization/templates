'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureComplex.module.css'

function PanelHead({ eyebrow, titleLine1, titleLine2, desc, plainEyebrow, align }) {
  const alignClass = align === 'left' ? styles.headLeft : align === 'right' ? styles.headRight : ''
  return (
    <Reveal className={`${styles.head} ${alignClass}`}>
      <p className={plainEyebrow ? styles.eyebrowPlain : styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        <span>{titleLine1}</span>
        <strong>{titleLine2}</strong>
      </h2>
      <p className={styles.desc}>{desc}</p>
    </Reveal>
  )
}

// donghoChart.columns가 있으면(블록 2~3개를 탭 없이 한 번에 나란히 비교해서 보여주고 싶은 현장) 각
// 블록을 항상 동시에 보여줌 — 블록이 많아서(4개 이상) 한 화면에 다 못 넣는 현장은 기존처럼
// donghoChart.tabs로 블록 선택 버튼을 그려서 고른 블록의 이미지만 바꿔치기함
function DonghoChart({ donghoChart }) {
  const hasColumns = Array.isArray(donghoChart.columns) && donghoChart.columns.length > 0
  const hasTabs = !hasColumns && Array.isArray(donghoChart.tabs) && donghoChart.tabs.length > 0
  const [activeTab, setActiveTab] = useState(0)
  const image = hasTabs ? donghoChart.tabs[activeTab].image : donghoChart.image

  if (hasColumns) {
    return (
      <div className={styles.columnRow}>
        {donghoChart.columns.map((col) => (
          <div key={col.label} className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.columnBadge}>{col.label}</span>
              <span className={styles.columnLabel}>{col.sub}</span>
            </div>
            <Reveal delay={0.15} className={styles.imageBox}>
              <Image
                src={col.image.src}
                alt={col.image.alt}
                width={col.image.width}
                height={col.image.height}
                sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
                className={styles.image}
              />
            </Reveal>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {hasTabs && (
        <div className={styles.tabRow}>
          {donghoChart.tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              className={cn(styles.tabBtn, i === activeTab && styles.tabBtnActive)}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <Reveal delay={0.15} className={styles.imageBox}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 1200px, calc(100vw - 40px)"
          className={styles.image}
        />
      </Reveal>
    </>
  )
}

// 단지소개 — 타입별 세대수를 포함한 단지 배치도, 동호수 배치표 이미지 2장을 순서대로 보여줌
// siteMap/donghoChart 각각에 titleLine1이 있으면 이미지마다 별도 타이틀을, 없으면 기존처럼 상단 공용 타이틀 하나를 보여줌
export default function SignatureComplex({ complex }) {
  const perImageTitle = Boolean(complex.siteMap.titleLine1)

  return (
    <section id={complex.id} className={styles.section}>
      {!perImageTitle && (
        <PanelHead eyebrow={complex.eyebrow} titleLine1={complex.titleLine1} titleLine2={complex.titleLine2} desc={complex.desc} />
      )}

      <div className={styles.gallery}>
        <div className={styles.panel}>
          {perImageTitle && (
            <PanelHead
              eyebrow={complex.siteMap.eyebrow}
              titleLine1={complex.siteMap.titleLine1}
              titleLine2={complex.siteMap.titleLine2}
              desc={complex.siteMap.desc}
              plainEyebrow
              align="left"
            />
          )}
          <Reveal delay={0.1} className={styles.imageBox}>
            <Image
              src={complex.siteMap.image.src}
              alt={complex.siteMap.image.alt}
              width={complex.siteMap.image.width}
              height={complex.siteMap.image.height}
              sizes="(min-width: 1024px) 1200px, calc(100vw - 40px)"
              className={styles.image}
            />
          </Reveal>
        </div>

        <div className={styles.panel}>
          {perImageTitle && (
            <PanelHead
              eyebrow={complex.donghoChart.eyebrow}
              titleLine1={complex.donghoChart.titleLine1}
              titleLine2={complex.donghoChart.titleLine2}
              desc={complex.donghoChart.desc}
              plainEyebrow
              align="right"
            />
          )}
          <DonghoChart donghoChart={complex.donghoChart} />
        </div>
      </div>
    </section>
  )
}
