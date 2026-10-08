import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignaturePremiumZigzag.module.css'

// 지그재그 프리미엄(premiumValue.cardStyle === 'zigzag') — 용인 고림 동문 디 이스트 공식 홈페이지 'THE EST PREMIUM 6'
// (about/premium.html) 디자인을 HTML로 재구성. 남색 배경에 2열 지그재그(오른쪽 열은 헤더 아래로 내려 시작),
// 항목마다 구분선 + 'PREMIUM 0N.' 라벨 + 색 제목(홀수 베이지·짝수 블루그레이) + 설명 + 원형 배경 흑백 컷 이미지.
// 모바일은 헤더 → 01~06 순서의 1열. 카드 이미지는 원 배경까지 포함한 크롭이라 섹션 배경색(colors.bg)과 같아야 자연스러움
export default function SignaturePremiumZigzag({ premiumValue }) {
  const { cards, colors = {} } = premiumValue
  const half = Math.ceil(cards.length / 2)
  const columns = [cards.slice(0, half), cards.slice(half)]
  const style = {
    ...(colors.bg && { '--zz-bg': colors.bg }),
    ...(colors.head && { '--zz-head': colors.head }),
    ...(colors.accentOdd && { '--zz-odd': colors.accentOdd }),
    ...(colors.accentEven && { '--zz-even': colors.accentEven }),
    ...(colors.line && { '--zz-line': colors.line }),
  }

  const renderCard = (card) => {
    const odd = Number(card.num) % 2 === 1
    return (
      <Reveal key={card.num} className={styles.item}>
        <div className={styles.text}>
          <p className={styles.label}>PREMIUM {card.num}.</p>
          <h3 className={`${styles.itemTitle} ${odd ? styles.odd : styles.even}`}>
            {Array.isArray(card.title) ? card.title.join(' ') : card.title}
          </h3>
          <p className={styles.desc}>
            {card.desc.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
        </div>
        <div className={styles.visual}>
          <Image src={card.image.src} alt={card.image.alt} width={card.image.width} height={card.image.height} sizes="(max-width: 767px) 40vw, 260px" />
        </div>
      </Reveal>
    )
  }

  return (
    <section id={premiumValue.id} className={styles.section} style={style}>
      <div className={styles.inner}>
        <div className={`${styles.column} ${styles.left}`}>{columns[0].map(renderCard)}</div>
        <div className={`${styles.column} ${styles.right}`}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.eyebrow}>{premiumValue.eyebrow}</span>
              <span className={styles.titleRow}>
                <strong>{premiumValue.titleAccent}</strong>
                <em>{premiumValue.titleNumber}</em>
              </span>
            </h2>
          </Reveal>
          {columns[1].map(renderCard)}
        </div>
        {/* 모바일 1열 — 01~06 순서대로 */}
        <div className={styles.mobileList}>{cards.map(renderCard)}</div>
      </div>
    </section>
  )
}
