'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureSummary.module.css'

// 사업개요 — 오른쪽(데스크톱) 썸네일을 클릭하면 위쪽 대표 이미지가 바뀜
// summary.blocks가 있으면(예: 필지가 여러 블록으로 나뉜 현장) 블록 선택 버튼을 그려서
// 클릭한 블록의 specItems로 표를 바꿔치기함 — 없는 현장은 기존처럼 summary.specItems 그대로 사용
export default function SignatureSummary({ summary }) {
  const hasPhoto = !!summary.photo
  const gallery = hasPhoto ? [summary.photo, ...(summary.thumbs || [])] : []
  const [activeIndex, setActiveIndex] = useState(0)

  const hasBlocks = Array.isArray(summary.blocks) && summary.blocks.length > 0
  const defaultBlockIndex = hasBlocks ? Math.max(summary.blocks.findIndex((b) => b.default), 0) : 0
  const [activeBlock, setActiveBlock] = useState(defaultBlockIndex)
  const specItems = hasBlocks ? summary.blocks[activeBlock].specItems : summary.specItems

  return (
    <section id={summary.id} className={styles.section}>
      <Reveal className={styles.headingWrap}>
        <h2 className={styles.heading}>{summary.title}</h2>
        {summary.subtitle && <p className={styles.subtitle}>{summary.subtitle}</p>}
      </Reveal>

      {hasPhoto && (
        <Reveal delay={0.1} className={styles.photoRow}>
          <div className={styles.mainPhoto}>
            <Image
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              width={995}
              height={468}
              sizes="(min-width: 1024px) 995px, 100vw"
              className={styles.mainPhotoImg}
            />
          </div>
          {gallery.length > 1 && (
            <ul className={styles.thumbList}>
              {gallery.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    className={cn(styles.thumbBtn, i === activeIndex && styles.thumbBtnActive)}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`${img.alt} 대표 이미지로 보기`}
                  >
                    <Image src={img.src} alt={img.alt} width={192} height={87} sizes="30vw" className={styles.thumbImg} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      )}

      {summary.notice && <p className={styles.notice}>{summary.notice}</p>}

      <Reveal delay={0.15} className={styles.tableWrap}>
        <table className={styles.table}>
          <tbody>
            {specItems.map((item) => (
              <tr key={item.label}>
                <th scope="row">{item.label}</th>
                <td>
                  {Array.isArray(item.value)
                    ? item.value.map((line, i) => <span key={i}>{line}</span>)
                    : item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {hasBlocks && (
        <div className={styles.blockGrid}>
          {summary.blocks.map((block, i) => (
            <button
              key={block.label}
              type="button"
              className={cn(styles.blockBtn, i === activeBlock && styles.blockBtnActive)}
              onClick={() => setActiveBlock(i)}
            >
              {block.label}
            </button>
          ))}
        </div>
      )}

      {summary.disclaimers && (
        <ul className={styles.disclaimers}>
          {summary.disclaimers.map((line, i) => (
            <li key={i}>ⓘ {line}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
