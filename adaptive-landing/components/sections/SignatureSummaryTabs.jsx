'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureSummaryTabs.module.css'

// 사업개요(탭형) — 가운데 제목 + 세로 구분선 아래 블록 탭(가로 균등 분할)을 누르면
// 대표 사진·블록명·스펙 그리드(PC 3열 / 모바일 1열)가 함께 전환됨. summary.variant: 'tabs'일 때 사용
// (예: 호반써밋 첨단3지구 A7BL/A8BL — 공식 홈페이지 사업개요 페이지 구성)
export default function SignatureSummaryTabs({ summary }) {
  const [active, setActive] = useState(0)
  const block = summary.blocks[active]

  return (
    <section id={summary.id} className={styles.section}>
      <Reveal className={styles.head}>
        <h2 className={styles.title}>{summary.title}</h2>
        <span className={styles.line} aria-hidden />
      </Reveal>

      <div className={styles.inner}>
        <div className={styles.tabs} style={{ '--tab-count': summary.blocks.length }}>
          {summary.blocks.map((b, i) => (
            <button
              key={b.label}
              type="button"
              className={cn(styles.tab, i === active && styles.tabActive)}
              onClick={() => setActive(i)}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div key={block.label} className={styles.panel}>
          <div className={styles.photo} style={{ aspectRatio: `${block.photo.width} / ${block.photo.height}` }}>
            <Image src={block.photo.src} alt={block.photo.alt} fill sizes="(min-width: 1024px) 1080px, 100vw" className={styles.img} />
          </div>
          <p className={styles.blockName}>{block.label}</p>
          <ul className={styles.specs}>
            {block.specItems.map((item) => (
              <li key={item.label} className={styles.spec}>
                <p className={styles.specLabel}>{item.label}</p>
                <p className={styles.specValue}>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>

        {summary.notice && <p className={styles.notice}>{summary.notice}</p>}
      </div>
    </section>
  )
}
