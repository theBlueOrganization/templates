import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './ArkoneOfficetelInfo.module.css'

// 청라 아크원 푸르지오 "오피스텔" 섹션 — 상담북 PDF 24p(세 가지 혜택)·26p(가격 판단 5가지 기준)를 이미지가 아닌 HTML로.
// 예: cheongna-arkone-prugio-3-2 (요청 반영 2026-11-24)
// info: {
//   id, eyebrow, title,
//   benefit: { titleLines: [검정, 파랑], image: { src, alt, caption }, stats: [{ value, label }], items: [{ tag, tone, title, desc }], chips, closing, note },
//   criteria: { titleLines, cards: [{ num, label, image, imageCaption, title, desc, highlight?, years?, deal?, foot, featured? }], closing, note },
// }
// 줄바꿈은 문자열 안 '\n'.
function Lines({ text }) {
  return text.split('\n').map((line, i) => (
    <span key={i} className={styles.line}>{line}</span>
  ))
}

function BlockTitle({ lines }) {
  return (
    <h3 className={styles.blockTitle}>
      <span>{lines[0]}</span>
      <span className={styles.accent}>{lines[1]}</span>
    </h3>
  )
}

function Benefit({ benefit }) {
  return (
    <div className={styles.block}>
      <Reveal>
        <BlockTitle lines={benefit.titleLines} />
      </Reveal>

      <div className={styles.benefitGrid}>
        <Reveal className={styles.benefitVisual}>
          <figure className={styles.photoCard}>
            <div className={styles.photo}>
              <Image src={benefit.image.src} alt={benefit.image.alt} fill sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
            {benefit.image.caption && <figcaption className={styles.photoCaption}>{benefit.image.caption}</figcaption>}
          </figure>
          <dl className={styles.stats}>
            {benefit.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statValue}>{s.value}</dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className={styles.benefitList}>
          {benefit.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className={cn(styles.benefitItem, styles[`tone_${item.tone}`])}>
              <p className={styles.benefitTag}>{item.tag}</p>
              <p className={styles.benefitTitle}>{item.title}</p>
              <p className={styles.benefitDesc}><Lines text={item.desc} /></p>
            </Reveal>
          ))}
          {benefit.chips?.length > 0 && (
            <ul className={styles.chips}>
              {benefit.chips.map((c) => <li key={c}>{c}</li>)}
            </ul>
          )}
        </div>
      </div>

      <Reveal className={styles.closing}>
        <p className={styles.closingText}>{benefit.closing}</p>
        {benefit.note && <p className={styles.note}>{benefit.note}</p>}
      </Reveal>
    </div>
  )
}

function CriteriaCard({ card }) {
  return (
    <article className={cn(styles.card, card.featured && styles.cardFeatured)}>
      <div className={styles.cardPhoto}>
        <Image src={card.image.src} alt={card.image.alt} fill sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 90vw" />
        {card.imageCaption && <span className={styles.cardPhotoCaption}>{card.imageCaption}</span>}
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardLabel}>{card.num} · {card.label}</p>
        <p className={styles.cardTitle}><Lines text={card.title} /></p>
        <p className={styles.cardDesc}><Lines text={card.desc} /></p>
        <div className={styles.cardDivider} />

        {card.years && (
          <ul className={styles.years}>
            {card.years.map((y) => (
              <li key={y.year}><strong>{y.year}</strong><span>{y.text}</span></li>
            ))}
          </ul>
        )}

        {card.deal && (
          <div className={styles.deal}>
            <p className={styles.dealLabel}>{card.deal.label}</p>
            <p className={styles.dealValue}>{card.deal.value}</p>
            <p className={styles.dealMeta}><Lines text={card.deal.meta} /></p>
            {card.deal.recent && (
              <p className={cn(styles.dealMeta, styles.dealRecent)}><Lines text={card.deal.recent} /></p>
            )}
          </div>
        )}

        {card.highlight && <p className={styles.cardHighlight}>{card.highlight}</p>}
        {card.foot && <p className={styles.cardFoot}><Lines text={card.foot} /></p>}
      </div>
    </article>
  )
}

function Criteria({ criteria }) {
  return (
    <div className={styles.block}>
      <Reveal>
        <BlockTitle lines={criteria.titleLines} />
      </Reveal>
      <div className={styles.cards}>
        {criteria.cards.map((card, i) => (
          <Reveal key={card.num} delay={i * 0.06} className={styles.cardWrap}>
            <CriteriaCard card={card} />
          </Reveal>
        ))}
      </div>
      <p className={styles.swipeHint} aria-hidden="true">옆으로 넘겨 보세요 →</p>
      <Reveal className={styles.closing}>
        <p className={styles.closingText}>{criteria.closing}</p>
        {criteria.note && <p className={styles.note}>{criteria.note}</p>}
      </Reveal>
    </div>
  )
}

export default function ArkoneOfficetelInfo({ info }) {
  return (
    <section id={info.id} className={styles.section}>
      <Reveal className={styles.head}>
        {info.eyebrow && <p className={styles.eyebrow}>{info.eyebrow}</p>}
        <h2 className={styles.title}>{info.title}</h2>
      </Reveal>
      <div className={styles.inner}>
        {info.benefit && <Benefit benefit={info.benefit} />}
        {info.criteria && <Criteria criteria={info.criteria} />}
      </div>
    </section>
  )
}
