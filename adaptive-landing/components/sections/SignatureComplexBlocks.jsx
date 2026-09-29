'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureComplexBlocks.module.css'

// 단지안내(카테고리 × 블록) — complex.variant === 'blockTabs'일 때 렌더
// 상단 카테고리 탭(설계/커뮤니티/시스템/단지·동호수배치도) → 카테고리명 + 세로선 → 블록 버튼(A7BL/A8BL) → 이미지.
// 카테고리에 blocks가 1개뿐이면(예: 공통 시스템) 블록 버튼 없이 이미지만 보여줌. 이미지는 클릭 시 확대
// (예: 호반써밋 첨단3지구 — 공식 홈페이지 plan.php / community.php / system.php / block.php 구성)
export default function SignatureComplexBlocks({ complex }) {
  const [catIndex, setCatIndex] = useState(0)
  const [blockIndex, setBlockIndex] = useState(0)
  const [zoom, setZoom] = useState(null)

  const category = complex.categories[catIndex]
  const block = category.blocks[Math.min(blockIndex, category.blocks.length - 1)]

  const selectCategory = (i) => {
    setCatIndex(i)
    setBlockIndex(0)
  }

  return (
    <section id={complex.id} className={styles.section}>
      <div className={styles.catBar} style={{ '--cat-count': complex.categories.length }}>
        {complex.categories.map((c, i) => (
          <button
            key={c.label}
            type="button"
            className={cn(styles.catTab, i === catIndex && styles.catTabActive)}
            onClick={() => selectCategory(i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>{category.title ?? category.label}</h2>
          <span className={styles.line} aria-hidden />
        </Reveal>

        {category.blocks.length > 1 && (
          <div className={styles.blockTabs} style={{ '--tab-count': category.blocks.length }}>
            {category.blocks.map((b, i) => (
              <button
                key={b.label}
                type="button"
                className={cn(styles.blockTab, b === block && styles.blockTabActive)}
                onClick={() => setBlockIndex(i)}
              >
                {b.label}
              </button>
            ))}
          </div>
        )}

        <div key={`${catIndex}-${block.label}`} className={styles.panel}>
          <button type="button" className={styles.imageBtn} onClick={() => setZoom(block.image)} aria-label={`${block.image.alt} 크게 보기`}>
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={block.image.width}
              height={block.image.height}
              sizes="(min-width: 1024px) 1080px, 100vw"
              className={styles.image}
            />
          </button>
        </div>

        {complex.disclaimer && <p className={styles.disclaimer}>{complex.disclaimer}</p>}
      </div>

      <SignatureLightbox image={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
