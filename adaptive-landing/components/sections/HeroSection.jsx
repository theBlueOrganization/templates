'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

// 커튼이 걷히기 시작하는 시점(초)
const CURTAIN_DELAY = 1.7
// 커튼이 다 걷히는 데 걸리는 시간(초)
const CURTAIN_DURATION = 1.1
// 커튼이 완전히 사라지고 배경 이미지가 보이는 시점(초) = 위 두 값의 합
const SETTLED_DELAY = CURTAIN_DELAY + CURTAIN_DURATION

// 텍스트 블록(배지·브랜드·타이틀·서브타이틀)을 감싸는 컨테이너
// staggerChildren: 자식 요소들을 0.15초 간격으로 하나씩 순서대로 등장시킴
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.08 } },
}

// 배지/브랜드/타이틀 한 줄/서브타이틀 각각에 적용되는 등장 애니메이션 (아래→위로 페이드인)
const textLine = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection({ hero, theme }) {
  // eyebrow: "즉시입주｜최대1억" 처럼 ｜로 구분된 문자열 → 배지 여러 개로 분리
  const badges = hero.eyebrow?.split('｜').map((s) => s.trim()) ?? []
  // title 안에서 색을 다르게 강조할 단어 목록 (문자열 또는 배열 모두 허용)
  const keywords = Array.isArray(hero.accentKeyword)
    ? hero.accentKeyword.filter(Boolean)
    : hero.accentKeyword
      ? [hero.accentKeyword]
      : []
  // title은 \n으로 줄바꿈 → 줄 단위 배열로 분리해서 한 줄씩 애니메이션
  const titleLines = hero.title.split('\n')
  const th = theme ?? {}

  return (
    <section id="home" className={styles.hero}>
      {/* 배경 이미지 — 커튼이 걷힌 후(SETTLED_DELAY 시점) 서서히 나타남 */}
      <motion.div
        className={styles.layer}
        style={{ background: hero.bgColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: SETTLED_DELAY }}
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>

      {/* 커튼 — 화면을 덮고 있다가 위로 슬라이드되며 사라짐 (배경 이미지를 가리는 역할) */}
      <motion.div
        className={styles.layer}
        style={{ background: th.hero?.curtainColor ?? '#0f172a' }}
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: CURTAIN_DURATION, delay: CURTAIN_DELAY, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* 텍스트 블록 — 배지 → 브랜드 → 타이틀 줄들 → 서브타이틀 순서로 하나씩 페이드인 */}
      {/* 모바일: 화면 하단 22% 위치 / md 이상: 화면 세로 중앙(bottom-1/2 + translate-y-1/2 조합) */}
      <motion.div
        className={styles.textBlock}
        initial="hidden"
        animate="show"
        variants={textContainer}
      >
        {badges.length > 0 && (
          <motion.div variants={textLine} className={styles.badges}>
            {badges.map((badge, i) => {
              // eyebrowUrgent 개수만큼 앞에서부터 "긴급" 스타일(빨간색 계열)로 표시
              const isUrgent = i < (hero.eyebrowUrgent ?? 0)
              return (
                <span
                  key={i}
                  className={styles.badge}
                  style={
                    isUrgent
                      ? {
                          color: th.eyebrowUrgent?.color,
                          borderColor: th.eyebrowUrgent?.borderColor,
                        }
                      : {
                          color: th.eyebrow?.color,
                          borderColor: th.eyebrow?.borderColor,
                          fontSize: th.eyebrow?.fontSize,
                        }
                  }
                >
                  {badge}
                </span>
              )
            })}
          </motion.div>
        )}

        {hero.brand && (
          <motion.p
            variants={textLine}
            className={styles.brand}
            style={{ color: th.brand?.color, fontSize: th.brand?.fontSize }}
          >
            {hero.brand}
          </motion.p>
        )}

        <h1
          className={styles.title}
          style={{ color: th.title?.color, fontSize: th.title?.fontSize }}
        >
          {titleLines.map((line, i) => (
            <motion.span key={i} variants={textLine} className={styles.titleLine}>
              {keywords.length > 0
                // 줄 안에 accentKeyword 단어가 있으면 그 부분만 accentColor로 강조
                ? line
                    .split(
                      new RegExp(
                        `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`
                      )
                    )
                    .map((part, j) =>
                      keywords.includes(part) ? (
                        <em key={j} className={styles.accent} style={{ color: th.title?.accentColor }}>
                          {part}
                        </em>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )
                : line}
            </motion.span>
          ))}
        </h1>

        {hero.subtitle && (
          <motion.p
            variants={textLine}
            className={styles.subtitle}
            style={{ color: th.subtitle?.color, fontSize: th.subtitle?.fontSize }}
          >
            {hero.subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* 스크롤 힌트 — 모든 등장 애니메이션이 끝난 뒤(SETTLED_DELAY + 0.3초) 페이드인 */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: SETTLED_DELAY + 0.3 }}
      >
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollBar} />
      </motion.div>
    </section>
  )
}
