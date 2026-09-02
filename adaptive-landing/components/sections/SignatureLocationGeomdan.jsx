import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureLocationGeomdan.module.css'

// 오시는 길(#location) — 지도 이미지 + 현장/견본주택 주소 + 외부 지도앱 링크 2개
export default function SignatureLocationGeomdan({ location }) {
  return (
    <section id={location.id} className={styles.section}>
      <div className={styles.map}>
        <Image src={location.mapImage.src} alt={location.mapImage.alt} width={900} height={900} sizes="(min-width: 1024px) 55vw, 100vw" />
      </div>
      <Reveal className={styles.info}>
        <p className={styles.eyebrow}>{location.eyebrow}</p>
        <h2>{location.title}</h2>

        <div className={styles.row}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>
            <span>{location.site.label}</span>
            <strong>{location.site.value}</strong>
          </p>
        </div>

        <div className={styles.row}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 12h4" />
            <path d="M10 8h4" />
            <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          </svg>
          <p>
            <span>{location.model.label}</span>
            <strong>{location.model.value}</strong>
          </p>
        </div>

        <div className={styles.mapLinks}>
          {location.mapLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={link.label === '네이버지도' ? styles.naver : styles.kakao}>
              {link.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
