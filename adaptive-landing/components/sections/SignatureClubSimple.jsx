import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
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

export default function SignatureClubSimple({ club }) {
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

      <Stagger className={styles.grid}>
        {club.facilities.map((facility) => (
          <StaggerItem key={facility.key} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={facility.image.src}
                alt={facility.image.alt}
                width={facility.image.width}
                height={facility.image.height}
                sizes="(min-width: 1024px) 33vw, 90vw"
                className={styles.image}
              />
            </div>
            <div className={styles.labelRow}>
              <span className={styles.icon}>{ICONS[facility.icon]}</span>
              <span className={styles.labelEn}>{facility.labelEn}</span>
            </div>
            <h3 className={styles.cardTitle}>{facility.title}</h3>
            <p className={styles.cardDesc}>{facility.desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
