'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { cn } from '../../lib/utils'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureClubSimple.module.css'

// 커뮤니티 시설이 2~3개로 단출한 현장용 — 아이콘+이미지 카드 그리드로만 구성 (풀 규모 클럽하우스용 SignatureClub과 별도)
const ICONS = {
  fitness: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 24h4M38 24h4" />
      <path d="M10 18v12M38 18v12" />
      <path d="M14 24h20" />
      <path d="M14 20v8M34 20v8" />
    </svg>
  ),
  library: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10h11v28H10z" />
      <path d="M27 10h11v28H27z" />
      <path d="M15 17h1M15 23h1M32 17h1M32 23h1" />
    </svg>
  ),
  lounge: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 34v-9a10 10 0 0 1 20 0v9" />
      <path d="M10 34h28" />
      <path d="M17 15a10 10 0 0 1 14 0" />
      <path d="M14.5 11.5a14 14 0 0 1 19 0" />
    </svg>
  ),
}

// plainImageGroups 그룹 하나(예: CLUB XIAN)를 담당 — 1BL/2BL/특화 커뮤니티처럼 이미지가
// 여러 장 있을 때 전부 세로로 이어붙이는 대신 탭 버튼으로 하나씩만 보여줌
function PlainImageGroup({ group }) {
  const [activeTab, setActiveTab] = useState(0)
  const tab = group.tabs[activeTab]

  return (
    <div className={styles.plainGroup}>
      {group.title && <h3 className={styles.plainGroupTitle}>{group.title}</h3>}
      <div className={styles.tabRow}>
        {group.tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={cn(styles.tabBtn, i === activeTab && styles.tabBtnActive)}
            onClick={() => setActiveTab(i)}
            aria-pressed={i === activeTab}
          >
            {t.label}
          </button>
        ))}
      </div>
      <Image
        src={tab.image.src}
        alt={tab.image.alt}
        width={tab.image.width || 1100}
        height={tab.image.height || 3267}
        sizes="100vw"
        className={styles.plainImage}
      />
    </div>
  )
}

export default function SignatureClubSimple({ club }) {
  const [zoomImage, setZoomImage] = useState(null)

  // plainImageGroups — CLUB XIAN·CLUB CLOUD처럼 여러 그룹이 각각 1BL/2BL(/특화 커뮤니티) 이미지를
  // 따로 갖고 있어, 전부 이어붙이는 대신 그룹마다 탭 버튼으로 하나씩 전환해서 보여주고 싶을 때 사용
  if (club.plainImageGroups) {
    return (
      <section id={club.id} className={styles.sectionPlain}>
        {club.plainImageGroups.map((group) => (
          <PlainImageGroup key={group.title ?? group.tabs[0].label} group={group} />
        ))}
      </section>
    )
  }

  // plainImage — 공식 사이트 CLUB XIAN 페이지를 그대로 캡처한 이미지 한 장만 넣고 싶을 때
  // (평면도·시설 사진·라벨이 이미 이미지 안에 포함돼 있어 별도 카드 그리드 재구성 없이 사용)
  // plainImages — 위 캡처가 여러 장(예: CLUB XIAN·CLUB CLOUD 각각 별도 페이지)일 때 순서대로 세로로 이어붙임
  if (club.plainImage || club.plainImages) {
    const images = club.plainImages || [club.plainImage]
    return (
      <section id={club.id} className={styles.sectionPlain}>
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width || 1100}
            height={img.height || 3267}
            sizes="100vw"
            className={styles.plainImage}
          />
        ))}
      </section>
    )
  }

  return (
    <section id={club.id} className={styles.section}>
      <div className={styles.watermark} aria-hidden="true">
        {club.intro.watermark}
      </div>

      <Reveal className={styles.header}>
        <h2 className={styles.title}>
          <span>{club.intro.titleLine1}</span>
          <strong>{club.intro.titleLine2}</strong>
        </h2>
        <p className={styles.desc}>{club.intro.desc}</p>
      </Reveal>

      {club.topImage && (
        <button
          type="button"
          className={styles.topImageTrigger}
          onClick={() => setZoomImage({ ...club.topImage, caption: club.topImage.alt })}
          aria-label={`${club.topImage.alt} 확대보기`}
        >
          <Image
            src={club.topImage.src}
            alt={club.topImage.alt}
            width={club.topImage.width}
            height={club.topImage.height}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className={styles.topImage}
          />
        </button>
      )}

      <Stagger className={styles.grid}>
        {club.facilities.map((facility) => (
          <StaggerItem key={facility.key} className={cn(styles.card, club.cardDivider && styles.cardCentered)}>
            <button
              type="button"
              className={styles.imageWrap}
              onClick={() => setZoomImage({ ...facility.image, caption: facility.title })}
              aria-label={`${facility.title} 확대보기`}
            >
              <Image
                src={facility.image.src}
                alt={facility.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 90vw"
                className={styles.image}
              />
            </button>
            {!club.hideLabelRow && (
              <div className={styles.labelRow}>
                {!club.hideIcon && <span className={styles.icon}>{ICONS[facility.icon]}</span>}
                <span className={styles.labelEn}>{facility.labelEn}</span>
              </div>
            )}
            <h3 className={cn(styles.cardTitle, club.cardDivider && styles.cardTitleDivider)}>{facility.title}</h3>
            <p className={styles.cardDesc}>{facility.desc}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <SignatureLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  )
}
