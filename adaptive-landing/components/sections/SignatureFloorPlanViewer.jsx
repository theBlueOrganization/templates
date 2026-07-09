'use client'

import Image from 'next/image'
import { useRef } from 'react'
import styles from './SignatureFloorPlanViewer.module.css'

// 좌우로 드래그해서 보는 평면도 뷰어 — 터치는 네이티브 스크롤, 데스크톱 마우스는 포인터 드래그로 스크롤
export default function SignatureFloorPlanViewer({ title, dragHint, image }) {
  const scrollRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0 })

  const onPointerDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft }
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    const el = scrollRef.current
    if (!el || !drag.current.active) return
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }

  const onPointerUp = () => {
    drag.current.active = false
  }

  return (
    <div className={styles.box}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.hintRow}>
        <span className={styles.hint}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 9L4 12L8 15M16 9L20 12L16 15M4 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {dragHint}
        </span>
      </div>
      <div
        ref={scrollRef}
        className={styles.scrollArea}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className={styles.imageInner}>
          <Image src={image.src} alt={image.alt} width={1500} height={900} sizes="1200px" className={styles.image} draggable={false} />
        </div>
      </div>
    </div>
  )
}
