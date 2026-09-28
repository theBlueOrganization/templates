import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureClubFloors.module.css'

// 층별 커뮤니티 — club.variant === 'floors' 전용 (포레나 인천학익 원본 커뮤니티 이미지 구성 재현).
// 상단: 좌측 영문 라벨(PREMIUM / COMMUNITY) + 타이틀·설명 + 우측 동 위치 키맵.
// 본문: 층 패널(panels[])마다 배지(B1/1F) + 시설 카드(items[]) 1~2개. 카드는 아이소메트릭 평면도 +
// 시설명(색상) + 설명 + 번호 범례(평면도 안 번호 마커와 1:1)로 구성, item.color로 시설별 강조색 지정
function FacilityText({ item, badge }) {
  return (
    <div className={cn(styles.text, item.align === 'right' && styles.textRight)}>
      {badge && (
        <span className={styles.badge} style={{ background: badge.color }}>
          {badge.label}
        </span>
      )}
      <h3 className={styles.itemTitle} style={{ color: item.color }}>
        {item.title}
      </h3>
      <p className={styles.itemDesc}>{item.desc}</p>
      <ol className={cn(styles.legend, item.legendColumns > 1 && styles.legendGrid)} style={{ '--legend-cols': item.legendColumns ?? 1 }}>
        {item.legend.map((label, i) => (
          <li key={label} className={styles.legendItem}>
            <span className={styles.legendNum} style={{ background: item.color }}>
              {i + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function SignatureClubFloors({ club }) {
  return (
    <section id={club.id} className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <p className={styles.label}>
            <span className={styles.labelThin}>{club.intro.labelTop}</span>
            <strong className={styles.labelBold}>{club.intro.labelBottom}</strong>
          </p>
          <div className={styles.headText}>
            <h2 className={styles.title}>
              <span>{club.intro.titleLine1}</span>
              <strong>{club.intro.titleLine2}</strong>
            </h2>
            <p className={styles.desc}>{club.intro.desc}</p>
          </div>
          {club.intro.keymap && (
            <div className={styles.keymap}>
              <Image
                src={club.intro.keymap.src}
                alt={club.intro.keymap.alt}
                width={club.intro.keymap.width}
                height={club.intro.keymap.height}
                sizes="235px"
              />
            </div>
          )}
        </Reveal>

        {club.panels.map((panel, pi) => (
          <Reveal key={pi} className={cn(styles.panel, panel.items.length > 1 && styles.panelPair)}>
            {panel.items.map((item, i) => (
              <div key={item.title} className={cn(styles.item, item.align === 'right' && styles.itemReverse)}>
                <div className={styles.visual}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 1024px) 600px, 100vw"
                  />
                </div>
                {/* 패널 배지(B1/1F)는 패널당 한 번만 — 첫 번째 카드에만 붙임 */}
                <FacilityText item={item} badge={i === 0 ? panel.badge : null} />
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
