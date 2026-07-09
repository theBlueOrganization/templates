import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { splitHighlight } from '../../lib/utils'
import styles from './SignatureLocation.module.css'

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
        <h2 className={styles.title}>{location.title}</h2>
        <p className={styles.descTitle}>
          <Highlighted text={location.descTitle} accent={location.descTitleAccent} accentClassName={styles.descAccent} />
        </p>
        <p className={styles.descBody}>
          <Highlighted text={location.descBody1} accent={location.descBody1Accent} accentClassName={styles.descBodyAccent} />
          <br />
          {location.descBody2}
        </p>
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

      <Stagger className={styles.grid}>
        {location.features.map((f) => (
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
        ))}
      </Stagger>

      <p className={styles.disclaimer}>{location.disclaimer}</p>
    </section>
  )
}
