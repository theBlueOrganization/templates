'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureSummary.module.css'

// 사업개요 — 오른쪽(데스크톱) 썸네일을 클릭하면 위쪽 대표 이미지가 바뀜
export default function SignatureSummary({ summary }) {
  const gallery = [summary.photo, ...summary.thumbs]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id={summary.id} className={styles.section}>
      <Reveal className={styles.headingWrap}>
        <h2 className={styles.heading}>{summary.title}</h2>
      </Reveal>

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
      </Reveal>

      <p className={styles.notice}>{summary.notice}</p>

      <Reveal delay={0.15} className={styles.tableWrap}>
        <table className={styles.table}>
          <tbody>
            {summary.specItems.map((item) => (
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
    </section>
  )
}
