import Reveal from '../motion/Reveal'
import styles from './SignatureNotice.module.css'

// 입주자 모집공고 — 22BL/23BL 공식 PDF 원문 링크 카드 2개
export default function SignatureNotice({ notice }) {
  return (
    <section className={styles.section} aria-labelledby="notice-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{notice.eyebrow}</p>
        <h2 id="notice-title">
          {notice.titlePlain}
          <em>{notice.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{notice.desc}</p>
      </Reveal>

      <div className={styles.grid}>
        {notice.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <div>
              <strong>{link.title}</strong>
              <small>{link.sub}</small>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
