import Image from 'next/image'
import SectionHeader from './SectionHeader'
import Reveal from '../motion/Reveal'
import styles from './LocationSection.module.css'

// 위치 안내 섹션 — 지도 이미지 + 주소 + 교통정보 리스트. 모바일은 세로, md 이상은 좌우 2단
export default function LocationSection({ section, theme }) {
  const { id, title, subtitle, address, mapImage, transport } = section
  const th = theme ?? {}

  return (
    <section id={id} style={{ background: th.location?.background }} className={styles.section}>
      <SectionHeader title={title} subtitle={subtitle} theme={theme} />
      <div className={styles.grid}>
        {/* 지도 이미지 — 지금은 정적 이미지, 추후 카카오맵 등 실제 지도 API로 교체 가능 */}
        <Reveal>
          <Image
            src={mapImage.src}
            alt={mapImage.alt}
            width={800}
            height={600}
            sizes="(min-width: 768px) 50vw, 100vw"
            className={styles.mapImage}
          />
        </Reveal>
        {/* 주소 + 교통정보 목록 (지하철/버스/자가용 등, label-value 쌍) */}
        <Reveal delay={0.15}>
          <p className={styles.address} style={{ color: th.location?.accentColor }}>
            {address}
          </p>
          <ul className={styles.transportList}>
            {transport.map((t) => (
              <li key={t.label} className={styles.transportItem}>
                <span className={styles.transportLabel}>{t.label}</span>
                <span>{t.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
