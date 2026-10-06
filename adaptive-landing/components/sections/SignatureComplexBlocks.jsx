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
    // complex.compactTop — 위 섹션과의 여백(섹션 타이틀 위쪽)을 좁게
    <section id={complex.id} className={complex.compactTop ? `${styles.section} ${styles.sectionCompact}` : styles.section}>
      {/* 섹션 타이틀(선택) — eyebrow(COMPLEX) + titlePlain(얇게) + titleAccent(굵게) */}
      {(complex.titlePlain || complex.titleAccent) && (
        <Reveal className={styles.sectionHead}>
          {complex.eyebrow && <p className={styles.eyebrow}>{complex.eyebrow}</p>}
          <h2 className={styles.sectionTitle}>
            {complex.titlePlain}
            <strong>{complex.titleAccent}</strong>
          </h2>
        </Reveal>
      )}

      {/* tabStyle: 'circle' — 카테고리 탭을 원형 썸네일(category.thumb) + 라벨로, 가운데 정렬 */}
      {complex.tabStyle === 'circle' ? (
        <div className={styles.circleTabs}>
          {complex.categories.map((c, i) => (
            <button
              key={c.label}
              type="button"
              className={cn(styles.circleTab, i === catIndex && styles.circleTabActive)}
              onClick={() => selectCategory(i)}
            >
              <span className={styles.circleThumb}>
                {c.thumb && <Image src={c.thumb} alt="" fill sizes="120px" className={styles.circleImg} />}
              </span>
              <span className={styles.circleLabel}>{c.label}</span>
            </button>
          ))}
        </div>
      ) : (
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
      )}

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
          {/* block.imageMobile — 모바일(767px 이하) 전용 세로형 이미지(공식 홈페이지 모바일 버전). 확대 보기도 화면에 맞는 쪽으로 */}
          <button
            type="button"
            className={styles.imageBtn}
            onClick={() =>
              setZoom(
                block.imageMobile && window.matchMedia('(max-width: 767px)').matches ? block.imageMobile : block.image
              )
            }
            aria-label={`${block.image.alt} 크게 보기`}
          >
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={block.image.width}
              height={block.image.height}
              sizes="(min-width: 1024px) 1080px, 100vw"
              className={block.imageMobile ? `${styles.image} ${styles.imageDesktopOnly}` : styles.image}
            />
            {block.imageMobile && (
              <Image
                src={block.imageMobile.src}
                alt={block.imageMobile.alt}
                width={block.imageMobile.width}
                height={block.imageMobile.height}
                sizes="100vw"
                className={`${styles.image} ${styles.imageMobileOnly}`}
              />
            )}
          </button>
        </div>

        {complex.disclaimer && <p className={styles.disclaimer}>{complex.disclaimer}</p>}
      </div>

      <SignatureLightbox image={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
