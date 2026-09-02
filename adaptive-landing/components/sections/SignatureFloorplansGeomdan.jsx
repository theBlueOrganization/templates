import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureFloorplansGeomdan.module.css'

// 평형안내(#floorplans) — 5개 타입 앵커 요약 + 타입별 스택 카드(키맵+평면도+블록별 세대/면적)
export default function SignatureFloorplansGeomdan({ floorplans }) {
  return (
    <section id={floorplans.id} className={styles.section} aria-labelledby="floorplans-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{floorplans.eyebrow}</p>
        <h2 id="floorplans-title">
          {floorplans.titlePlain}
          <br />
          <em>{floorplans.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{floorplans.desc}</p>
      </Reveal>

      <div className={styles.summary}>
        {floorplans.summary.map((item) => (
          <a key={item.targetId} href={`#${item.targetId}`}>
            <strong>{item.label}</strong>
            <span>{item.countText}</span>
          </a>
        ))}
      </div>

      <div className={styles.list}>
        {floorplans.cards.map((card, i) => (
          <Reveal key={card.id} delay={Math.min(i * 0.06, 0.24)} className={styles.card} id={card.id}>
            <div className={styles.head}>
              <div>
                <p>THE SHARP UNIT PLAN</p>
                <h3>
                  {card.typeLabel} <span>TYPE</span>
                </h3>
                <strong>{card.totalCountText}</strong>
              </div>
              <Image src={card.keymap.src} alt={card.keymap.alt} width={260} height={200} sizes="150px" />
            </div>

            <div className={styles.planImage}>
              <Image src={card.plan.src} alt={card.plan.alt} width={1100} height={620} sizes="(min-width: 1024px) 620px, 90vw" />
            </div>

            <div className={styles.blockInfo}>
              {card.blocks.map((block) => (
                <div key={block.label}>
                  <strong>{block.label}</strong>
                  <span>{block.countText}</span>
                  <dl>
                    <div>
                      <dt>전용면적</dt>
                      <dd>{block.exclusive}</dd>
                    </div>
                    <div>
                      <dt>공급면적</dt>
                      <dd>{block.supply}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <p className={styles.note}>{floorplans.note}</p>
    </section>
  )
}
