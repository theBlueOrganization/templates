'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './GallerySection.module.css'

// 이미지 갤러리 — 모바일은 가로 스크롤(스냅), md 이상은 그리드. 클릭하면 확대(라이트박스) 모달이 뜸
export default function GallerySection({ section, theme }) {
  const { id, title, subtitle, images } = section
  const th = theme ?? {}
  // null이면 라이트박스가 닫힌 상태, 숫자면 해당 인덱스 이미지를 확대해서 보여줌
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id={id} style={{ background: th.gallery?.background }} className={styles.section}>
      <SectionHeader title={title} subtitle={subtitle} theme={theme} />

      {/* 썸네일 목록 — snap-x: 모바일에서 스와이프하면 카드 단위로 딱 맞춰 멈춤 */}
      <Stagger className={styles.row}>
        {images.map((img, i) => (
          <StaggerItem key={img.src} className={styles.thumb}>
            {/* 클릭하면 이 이미지의 인덱스를 activeIndex에 저장 → 아래 라이트박스가 열림 */}
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className={styles.thumbButton}
              aria-label={`${img.alt} 확대보기`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                sizes="(min-width: 768px) 33vw, 78vw"
                className={styles.thumbImage}
              />
              {img.caption && <p className={styles.caption}>{img.caption}</p>}
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      {/* 라이트박스 — activeIndex가 null이 아닐 때만 렌더링, AnimatePresence가 등장/퇴장 애니메이션 처리 */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className={styles.lightboxInner}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="확대 이미지 닫기"
                className={styles.closeBtn}
              >
                닫기 ✕
              </button>
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={1200}
                height={900}
                sizes="90vw"
                className={styles.lightboxImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
