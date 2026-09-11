'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureTransitDetail.module.css'

// 입지환경(위치안내) 다음에 이어지는 광역교통망 상세 — 소사역 기준 노선별 소요시간 다이어그램
// 3장(서해선·GTX-B / 서해선·5호선 / 1호선·7호선) + 기차 일러스트를 왼쪽에, 확대 지역도 + 소사역
// 플로팅 탭을 오른쪽에 배치. 공식 홈페이지 레이아웃을 참고해 구성.
export default function SignatureTransitDetail({ transit }) {
  const [zoomImage, setZoomImage] = useState(null)

  return (
    <section id={transit.id} className={styles.section}>
      {transit.bgImage && (
        <div className={styles.bg}>
          <Image src={transit.bgImage.src} alt="" fill sizes="100vw" className={styles.bgImage} />
        </div>
      )}

      <div className={styles.inner}>
        <Reveal className={styles.left}>
          <p className={styles.title}>
            <span>{transit.titleLine1}</span>
            <span className={styles.titleLine} />
            <strong>{transit.titleLine2}</strong>
          </p>

          <div className={styles.lines}>
            {transit.lines.map((line, i) => (
              <Image
                key={i}
                src={line.src}
                alt={line.alt}
                width={line.width}
                height={line.height}
                sizes="(min-width: 1024px) 460px, 90vw"
                className={styles.lineImg}
              />
            ))}
          </div>

          {transit.trainImage && (
            <Image
              src={transit.trainImage.src}
              alt={transit.trainImage.alt}
              width={transit.trainImage.width}
              height={transit.trainImage.height}
              sizes="(min-width: 1024px) 460px, 90vw"
              className={styles.trainImg}
            />
          )}
        </Reveal>

        <Reveal delay={0.1} className={styles.right}>
          <button
            type="button"
            className={styles.mapTrigger}
            onClick={() => setZoomImage({ ...transit.mapImage, caption: transit.mapImage.alt })}
            aria-label={`${transit.mapImage.alt} 확대보기`}
          >
            <Image
              src={transit.mapImage.src}
              alt={transit.mapImage.alt}
              width={transit.mapImage.width}
              height={transit.mapImage.height}
              sizes="(min-width: 1024px) 800px, 100vw"
              className={styles.mapImg}
            />
            {transit.mapButtonLabel && (
              <span className={styles.mapBtn}>
                {transit.mapButtonLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            )}
          </button>

          {transit.stationTab && (
            <Image
              src={transit.stationTab.src}
              alt={transit.stationTab.alt}
              width={transit.stationTab.width}
              height={transit.stationTab.height}
              className={styles.stationTab}
            />
          )}
        </Reveal>
      </div>

      {transit.decorImage && (
        <Image
          src={transit.decorImage.src}
          alt=""
          width={transit.decorImage.width}
          height={transit.decorImage.height}
          className={styles.decorImage}
        />
      )}

      <SignatureLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  )
}
