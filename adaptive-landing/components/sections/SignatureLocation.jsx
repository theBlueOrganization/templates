import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { splitHighlight } from '../../lib/utils'
import styles from './SignatureLocation.module.css'

// f.category와 매칭되는 원형 배지 아이콘 (교통/자연/교육/생활) — 해당 카테고리가 없으면 그냥 비워둠
const CATEGORY_ICONS = {
  교통: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="8" width="18" height="24" rx="6" />
      <path d="M12 22h18" />
      <circle cx="17" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <path d="M16 32l-3 6M26 32l3 6" />
    </svg>
  ),
  자연: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40V22" />
      <path d="M24 22c0-8-6-14-13-14 0 8 5 14 13 14z" />
      <path d="M24 28c0-6 5-11 11-11 0 6-4 11-11 11z" />
    </svg>
  ),
  교육: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 20l14-9 14 9" />
      <path d="M12 19v15h24V19" />
      <path d="M20 34v-8h8v8" />
    </svg>
  ),
  생활: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h20v9a10 10 0 0 1-10 10 10 10 0 0 1-10-10z" />
      <path d="M32 22h3a4 4 0 0 1 0 8h-3" />
      <path d="M17 20v-4M22 20v-4M27 20v-4" />
    </svg>
  ),
}

function Highlighted({ text, accent, className, accentClassName }) {
  return splitHighlight(text, accent).map((seg, i) =>
    seg.accent ? (
      <strong key={i} className={accentClassName}>
        {seg.text}
      </strong>
    ) : (
      <span key={i} className={className}>
        {seg.text}
      </span>
    )
  )
}

// 위치 안내 — 지도 이미지 + 4가지 입지 강점 카드
export default function SignatureLocation({ location }) {
  return (
    <section id={location.id} className={styles.section}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>
          {location.eyebrowPlain}
          <strong>{location.eyebrowAccent}</strong>
        </p>
        <h2 className={location.subhead ? styles.titleBold : styles.title}>{location.title}</h2>
        <p className={location.subhead ? styles.descTitleLight : styles.descTitle}>
          <Highlighted text={location.descTitle} accent={location.descTitleAccent} accentClassName={styles.descAccent} />
        </p>
        {location.descBody1 && (
          <p className={styles.descBody}>
            <Highlighted text={location.descBody1} accent={location.descBody1Accent} accentClassName={styles.descBodyAccent} />
            {location.descBody2 && (
              <>
                <br />
                {location.descBody2}
              </>
            )}
          </p>
        )}
      </Reveal>

      <Reveal delay={0.1} className={styles.mapWrap}>
        <Image
          src={location.mapImage.src}
          alt={location.mapImage.alt}
          width={1900}
          height={1327}
          sizes="100vw"
          className={styles.mapImage}
        />
      </Reveal>

      {location.subhead && (
        <Reveal delay={0.12} className={styles.subhead}>
          <p className={styles.subheadEyebrow}>{location.subhead.eyebrow}</p>
          <h3 className={styles.subheadTitle}>{location.subhead.title}</h3>
        </Reveal>
      )}

      <Stagger className={`${styles.grid} ${location.subhead ? (location.features[0]?.image ? styles.gridPhoto : styles.gridNum) : ''}`}>
        {location.features.map((f) =>
          f.num && f.image ? (
            <StaggerItem key={f.num} className={styles.photoCard}>
              <div className={styles.photoCardImageBox}>
                <Image
                  src={f.image.src}
                  alt={f.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={styles.photoCardImg}
                  style={f.image.position ? { '--photo-position': f.image.position } : undefined}
                />
              </div>
              <div className={styles.photoCardContent}>
                {CATEGORY_ICONS[f.category] && <span className={styles.photoCardIcon}>{CATEGORY_ICONS[f.category]}</span>}
                <p className={styles.photoCardCategory}>{f.category}</p>
                <h3 className={styles.photoCardTitle}>{f.title}</h3>
                <p className={styles.photoCardDesc}>{f.desc}</p>
              </div>
            </StaggerItem>
          ) : f.num ? (
            <StaggerItem key={f.num} className={styles.numCard}>
              <span className={styles.numCardNum}>{f.num}</span>
              <p className={styles.numCardCategory}>{f.category}</p>
              <h3 className={styles.numCardTitle}>{f.title}</h3>
              <p className={styles.numCardDesc}>{f.desc}</p>
            </StaggerItem>
          ) : (
            <StaggerItem key={f.titleStrong} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {f.titlePrefix}
                <strong>{f.titleStrong}</strong>
                {f.titleSuffix}
                <span className={styles.cardTag}>{f.tag}</span>
              </h3>
              <div className={styles.cardImgWrap}>
                <Image src={f.image.src} alt={f.image.alt} width={550} height={231} sizes="(min-width: 1024px) 50vw, 100vw" className={styles.cardImg} />
              </div>
              <p className={styles.cardDesc}>
                <strong>{f.descStrong}</strong>
                {f.descRest}
              </p>
            </StaggerItem>
          )
        )}
      </Stagger>

      <p className={styles.disclaimer}>{location.disclaimer}</p>
    </section>
  )
}
