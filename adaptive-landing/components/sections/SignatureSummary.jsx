'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import MobileBreakText from '../ui/MobileBreakText'
import styles from './SignatureSummary.module.css'

// 사업개요 — 오른쪽(데스크톱) 썸네일을 클릭하면 위쪽 대표 이미지가 바뀜
// summary.blocks가 있으면(예: 필지가 여러 블록으로 나뉜 현장) 블록 선택 버튼을 그려서
// 클릭한 블록의 specItems로 표를 바꿔치기함 — 없는 현장은 기존처럼 summary.specItems 그대로 사용
export default function SignatureSummary({ summary }) {
  const hasBlocks = Array.isArray(summary.blocks) && summary.blocks.length > 0
  const defaultBlockIndex = hasBlocks ? Math.max(summary.blocks.findIndex((b) => b.default), 0) : 0
  const [activeBlock, setActiveBlock] = useState(defaultBlockIndex)
  const specItems = hasBlocks ? summary.blocks[activeBlock].specItems : summary.specItems

  // 블록마다 자기 사진(block.photo)이 있으면 그걸 쓰고, 없으면 현장 공용 summary.photo로 대체 —
  // 탭을 눌렀을 때 표만 바뀌는 게 아니라 사진도 같이 바뀌어야 어느 탭이 선택됐는지 바로 보임
  const blockPhoto = hasBlocks ? summary.blocks[activeBlock].photo : null
  const activePhoto = blockPhoto || summary.photo
  const hasPhoto = !!activePhoto
  // 블록형 현장은 블록마다 다른 사진 1장만 보여주므로 썸네일 목록이 의미 없음 — 기존 방식(썸네일로 대표사진 전환)은 블록이 없을 때만 사용
  const gallery = hasBlocks ? (hasPhoto ? [activePhoto] : []) : hasPhoto ? [summary.photo, ...(summary.thumbs || [])] : []
  const [activeIndex, setActiveIndex] = useState(0)
  const displayedImage = hasBlocks ? activePhoto : gallery[activeIndex]

  const blockNav = hasBlocks && (
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
  )

  return (
    <section id={summary.id} className={styles.section}>
      <Reveal className={styles.headingWrap}>
        <h2 className={styles.heading}>
          <MobileBreakText text={summary.title} breakClassName={styles.mobileBreak} />
        </h2>
        {summary.subtitle && <p className={styles.subtitle}>{summary.subtitle}</p>}
      </Reveal>

      {/* 블록형 현장은 PC에서 왼쪽 세로 탭 + 오른쪽 사진/표 2단 레이아웃으로 배치 (모바일은 기존처럼 세로로 쌓임) */}
      <div className={cn(styles.body, hasBlocks && styles.bodyWithBlocks)}>
        {hasBlocks && <div className={styles.blockNavCol}>{blockNav}</div>}

        <div className={styles.mainCol}>
          {hasPhoto && (
            <Reveal delay={0.1} className={styles.photoRow}>
              <div className={styles.mainPhoto}>
                <Image
                  src={displayedImage.src}
                  alt={displayedImage.alt}
                  width={995}
                  height={468}
                  sizes="(min-width: 1024px) 995px, 100vw"
                  className={styles.mainPhotoImg}
                />
              </div>
              {!hasBlocks && gallery.length > 1 && (
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
        </div>
      </div>

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
