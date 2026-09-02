import Reveal from '../motion/Reveal'
import styles from './SignatureFaq.module.css'

// 자주 묻는 질문 — 네이티브 <details>/<summary> 아코디언(별도 JS 없이 접근성 확보)
export default function SignatureFaq({ faq }) {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{faq.eyebrow}</p>
        <h2 id="faq-title">
          {faq.titlePlain}
          <em>{faq.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{faq.desc}</p>
      </Reveal>

      <div className={styles.list}>
        {faq.items.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>
              <span>Q{String(i + 1).padStart(2, '0')}</span>
              {item.q}
              <b>+</b>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
