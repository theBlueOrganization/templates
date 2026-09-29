import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignaturePremiumSplit.module.css'
import { cn } from '../../lib/utils'

// 프리미엄 2단 구성(#premium-split) — 텍스트 컬럼(제목+본문+선택적 노선 배지)과 이미지 컬럼(1~2장)이
// split.reverse에 따라 좌우 순서를 바꿔가며 배치되고, 뒤로는 큰 고스트 타이포가 흐리게 깔림
// split.imageAspect(예: '720 / 426')를 주면 이미지 박스 비율을 기본 3:4 세로형 대신 그 비율로 표시
// split.style === 'feature' — 공식 사이트(cityociel9.com) 메인 feature 섹션처럼 영문 키워드(베이지) · 굵은 제목 ·
// 가는 설명 + 화면 끝까지 붙는 큰 이미지컷(52%), 뒤로는 라인 오브젝트(split.object)가 깔림. reverse로 좌우 교차
function FeatureSplit({ split }) {
  const img = split.images[0]
  return (
    <section className={cn(styles.feature, split.reverse && styles.featureReverse)}>
      {split.object && (
        <div className={cn(styles.featureObj, split.reverse ? styles.featureObjRight : styles.featureObjLeft)} aria-hidden="true">
          <Image src={split.object.src} alt="" width={split.object.width} height={split.object.height} />
        </div>
      )}
      <Reveal className={styles.featureText}>
        <p className={styles.featureKeyword}>{split.eyebrow}</p>
        <h2 className={styles.featureTitle}>{split.title}</h2>
        <div className={styles.featureDesc}>
          {split.descLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </Reveal>
      <div className={styles.featureImage}>
        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 52vw, 100vw" className={styles.featureImg} />
        <span className={styles.featureBadge}>이미지컷</span>
      </div>
    </section>
  )
}

export default function SignaturePremiumSplit({ split }) {
  if (split.style === 'feature') return <FeatureSplit split={split} />

  return (
    <section className={styles.section}>
      <div className={cn(styles.grid, split.reverse && styles.reverse)}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{split.eyebrow}</p>
          <h2 className={styles.title}>
            {Array.isArray(split.title)
              ? split.title.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))
              : split.title}
          </h2>
          <div className={styles.descList}>
            {split.descLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {split.badges && (
            <ul className={styles.badgeList}>
              {split.badges.map((b, i) => (
                <li key={i} className={styles.badgeRow}>
                  <span className={cn(styles.badgeLine, b.accent && styles.badgeLineAccent)}>{b.line}</span>
                  <span className={styles.badgeRoute}>{b.route}</span>
                  <span className={cn(styles.badgeTime, b.accent && styles.badgeTimeAccent)}>{b.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Reveal className={styles.imageCol}>
          {split.images.map((img, i) => (
            <div key={i} className={styles.imageBox} style={split.imageAspect ? { aspectRatio: split.imageAspect } : undefined}>
              <Image src={img.src} alt={img.alt} fill sizes={split.images.length === 1 ? '(min-width: 1024px) 50vw, 90vw' : '(min-width: 1024px) 25vw, 45vw'} className={styles.image} />
            </div>
          ))}
        </Reveal>
      </div>

      {split.ghostLine1 && (
        <p className={styles.ghost} aria-hidden="true">
          {split.ghostLine1}
          <br />
          {split.ghostLine2}
        </p>
      )}
    </section>
  )
}
