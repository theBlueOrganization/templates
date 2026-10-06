'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureLocationVision.module.css'

// 위치안내(비전형) — location.variant === 'vision'일 때 SignatureLocation 대신 렌더
// 1) LOCATION 제목 + 세로선 + 카피(명조, 포인트 컬러 구간) + 현장위치도(클릭 시 확대) + 하단 캡션
// 2) 비전 블록: 왼쪽 세로 이미지(visual) / 오른쪽 2×2 문구(label → 명조 포인트 헤드라인 → 본문) + 하단 가로 이미지
// (예: 호반써밋 첨단3지구 — 공식 홈페이지 location.php + 메인 'Hoban Summit Vision' 섹션 구성)
// 선택 필드: captionTitle(캡션 아래 명조 헤드라인), panorama(가로 파노라마 이미지컷), gallery(비전 블록 아래 이미지컷 행),
//           disclaimer를 배열로 주면 ※ 목록으로 렌더
export default function SignatureLocationVision({ location }) {
  const [zoom, setZoom] = useState(null)
  const { vision } = location

  return (
    <section id={location.id} className={styles.section}>
      <div className={styles.top}>
        <Reveal className={styles.head}>
          <p className={styles.label}>{location.title}</p>
          <span className={styles.line} aria-hidden />
          <p className={styles.eyebrow}>{location.eyebrow}</p>
          <h2 className={styles.headline}>
            {location.headlinePlain}
            <span>{location.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <button type="button" className={styles.map} onClick={() => setZoom(location.mapImage)} aria-label="현장위치도 크게 보기">
            <Image
              src={location.mapImage.src}
              alt={location.mapImage.alt}
              width={location.mapImage.width}
              height={location.mapImage.height}
              sizes="(min-width: 1024px) 1200px, 100vw"
              className={styles.mapImg}
            />
            <span className={styles.zoomBadge}>+ 크게보기</span>
          </button>
          {/* captionTitle이 있으면 캡션+헤드라인을 지도와 띄운 별도 블록으로(위아래 여백 넉넉히) */}
          {location.captionTitle ? (
            <div className={styles.captionBlock}>
              {location.caption && <p className={styles.caption}>{location.caption}</p>}
              <h3 className={styles.captionTitle}>{location.captionTitle}</h3>
            </div>
          ) : (
            location.caption && <p className={styles.caption}>{location.caption}</p>
          )}
        </Reveal>
      </div>

      {location.panorama && (
        <Reveal className={styles.panorama}>
          <Image
            src={location.panorama.src}
            alt={location.panorama.alt}
            width={location.panorama.width}
            height={location.panorama.height}
            sizes="100vw"
            className={styles.panoramaImg}
          />
        </Reveal>
      )}

      <div className={styles.vision} style={vision.bgImage ? { backgroundImage: `url(${vision.bgImage})` } : undefined}>
        {/* vision.visualFlushTop — PC에서 왼쪽 이미지를 블록 위쪽 여백(70px) 없이 맨 위에 붙임(오른쪽 문구 위치는 그대로) */}
        <div className={[styles.visual, vision.visualFlushTop && styles.visualFlushTop].filter(Boolean).join(' ')}>
          <Image src={vision.visual.src} alt={vision.visual.alt} fill sizes="(min-width: 1024px) 38vw, 100vw" className={styles.cover} />
        </div>

        <div className={styles.right}>
          <Stagger className={styles.grid}>
            {vision.items.map((item) => (
              <StaggerItem key={item.label} className={styles.item}>
                <p className={styles.itemLabel}>{item.label}</p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
          {vision.bottomImage && (
            <Reveal className={styles.bottom}>
              <Image src={vision.bottomImage.src} alt={vision.bottomImage.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className={styles.cover} />
            </Reveal>
          )}
        </div>
      </div>

      {location.gallery && (
        // location.galleryMobileOnly — PC(1024px 이상)에서는 이미지컷 행 숨김
        <Reveal className={[styles.gallery, location.galleryMobileOnly && styles.galleryMobileOnly].filter(Boolean).join(' ')}>
          {location.gallery.map((img) => (
            <div key={img.src} className={styles.galleryItem} style={{ flexGrow: img.width, aspectRatio: `${img.width} / ${img.height}` }}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 70vw, 100vw" className={styles.cover} />
            </div>
          ))}
        </Reveal>
      )}

      {Array.isArray(location.disclaimer) ? (
        <ul className={styles.disclaimerList}>
          {location.disclaimer.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : (
        location.disclaimer && <p className={styles.disclaimer}>{location.disclaimer}</p>
      )}

      <SignatureLightbox image={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
