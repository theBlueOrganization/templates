'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import SignatureClubSectionHeader from './SignatureClubSectionHeader'
import SignatureFacilityHalfGallery from './SignatureFacilityHalfGallery'
import SignatureFacilityShowcase from './SignatureFacilityShowcase'
import SignatureFloorPlanViewer from './SignatureFloorPlanViewer'
import styles from './SignatureClub.module.css'

// 커뮤니티 전체 — 도입부(B1F 평면도) → 사우나·수영장 → 스포츠존(B2F 평면도) → 카페 → 에듀·키즈존
// 하위 시설 이미지를 클릭하면 이 컴포넌트가 들고 있는 라이트박스 하나로 모아서 확대해 보여준다.
export default function SignatureClub({ club }) {
  const [zoomImage, setZoomImage] = useState(null)

  return (
    <section id={club.id} className={styles.wrapper}>
      {/* 도입부 + B1F 커뮤니티 평면도 */}
      <div className={styles.intro}>
        <Reveal className={styles.introHead}>
          <p className={styles.introEyebrow}>{club.intro.eyebrow}</p>
          <h2 className={styles.introTitle}>
            <span>{club.intro.titleLine1}</span>
            <strong>{club.intro.titleLine2}</strong>
          </h2>
          <p className={styles.introDesc}>{club.intro.desc}</p>
        </Reveal>
        <div className={styles.floorPlanBox}>
          <SignatureFloorPlanViewer dragHint={club.floorPlanB1.dragHint} image={club.floorPlanB1.image} />
        </div>
      </div>

      {/* 사우나 & 실내수영장 */}
      <div className={styles.wellness}>
        <SignatureClubSectionHeader
          badge={club.wellness.badge}
          badgeStyle="outline"
          dark
          titlePlain={club.wellness.titlePlain}
          titleAccent={club.wellness.titleAccent}
          desc={club.wellness.desc}
        />
        <Reveal className={styles.wellnessHeroWrap}>
          <button
            type="button"
            className={styles.wellnessHeroTrigger}
            onClick={() => setZoomImage({ ...club.wellness.hero.image, caption: club.wellness.hero.title })}
            aria-label={`${club.wellness.hero.title} 확대보기`}
          >
            <Image src={club.wellness.hero.image.src} alt={club.wellness.hero.image.alt} fill sizes="(min-width: 1024px) 1408px, 92vw" className={styles.wellnessHeroImage} />
            <span className={styles.wellnessHeroCap}>
              <strong>{club.wellness.hero.title}</strong>
              <span>{club.wellness.hero.desc}</span>
            </span>
          </button>
        </Reveal>
        <SignatureFacilityHalfGallery halves={club.wellness.halves} onZoom={setZoomImage} />
      </div>

      {/* 스포츠 & 헬스 (골프 / 피트니스) + B2F 평면도 */}
      <div className={styles.sportsHealth}>
        <SignatureClubSectionHeader
          badge={club.sportsHealth.badge}
          titlePlain={club.sportsHealth.titlePlain}
          titleAccent={club.sportsHealth.titleAccent}
          desc={club.sportsHealth.desc}
        />
        {club.sportsHealth.showcases.map((showcase) => (
          <SignatureFacilityShowcase key={showcase.tag} showcase={showcase} onZoom={setZoomImage} />
        ))}
        <div className={styles.floorPlanBox}>
          <SignatureFloorPlanViewer
            title={club.sportsHealth.floorPlanB2.title}
            dragHint={club.sportsHealth.floorPlanB2.dragHint}
            image={club.sportsHealth.floorPlanB2.image}
          />
        </div>
      </div>

      {/* 카페 & 라운지 */}
      <div className={styles.cafeLounge}>
        <SignatureClubSectionHeader
          badge={club.cafeLounge.badge}
          titlePlain={club.cafeLounge.titlePlain}
          titleAccent={club.cafeLounge.titleAccent}
          desc={club.cafeLounge.desc}
        />
        <SignatureFacilityHalfGallery halves={club.cafeLounge.halves} onZoom={setZoomImage} />
      </div>

      {/* 에듀 & 키즈존 (도서관 / 실내놀이터) */}
      <div className={styles.eduKids}>
        <SignatureClubSectionHeader
          badge={club.eduKids.badge}
          titlePlain={club.eduKids.titlePlain}
          titleAccent={club.eduKids.titleAccent}
          desc={club.eduKids.desc}
        />
        {club.eduKids.showcases.map((showcase) => (
          <SignatureFacilityShowcase key={showcase.tag} showcase={showcase} onZoom={setZoomImage} />
        ))}
      </div>

      <SignatureLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  )
}
