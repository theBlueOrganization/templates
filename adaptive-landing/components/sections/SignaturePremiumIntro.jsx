import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { splitHighlight } from '../../lib/utils'
import MobileBreakText from '../ui/MobileBreakText'
import styles from './SignaturePremiumIntro.module.css'

// 프리미엄 섹션 도입부 — 배경 고정(패럴랙스) 이미지 위에 큰 타이틀, 스크롤하면 아래 SIGNATURE 6 카드로 이어짐
export default function SignaturePremiumIntro({ premiumIntro }) {
  const descSegments = splitHighlight(premiumIntro.descLine1, premiumIntro.descLine1Accent)

  // plainImage — 공식 사이트 페이지를 그대로 캡처한 이미지 한 장만 넣고 싶을 때(별도 타이틀/설명 HTML
  // 오버레이 없이). 이미지 자체에 헤드라인 등이 이미 포함돼 있는 경우에 사용.
  if (premiumIntro.plainImage) {
    const img = premiumIntro.plainImage
    return (
      <section id={premiumIntro.id} className={styles.sectionPlain}>
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width || 1100}
          height={img.height || 1559}
          sizes="100vw"
          className={styles.plainImage}
        />
      </section>
    )
  }

  // clean: true — 타이틀은 흰 배경 위에 깔끔하게, 배경 사진은 그 아래 별도 블록으로 분리하고
  // desc만 사진 위(하단 그라디언트)에 얹는 레이아웃. 없으면 기존처럼 사진 전체에 텍스트를 오버레이.
  if (premiumIntro.clean) {
    return (
      <section className={styles.sectionClean}>
        <div className={styles.cleanHead}>
          <p className={styles.eyebrow}>{premiumIntro.eyebrow}</p>
          <h2 className={styles.cleanTitle}>{premiumIntro.titleLine1}</h2>
          <p className={styles.cleanSubtitle}>{premiumIntro.titleLine2}</p>
        </div>
        <div className={styles.cleanImageWrap}>
          <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
          <div className={styles.cleanOverlay} />
          <div className={styles.cleanImageText}>
            <p>
              {descSegments.map((seg, i) =>
                seg.accent ? (
                  <strong key={i} className={styles.descAccent}>
                    {seg.text}
                  </strong>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
            <p>{premiumIntro.descLine2}</p>
          </div>
        </div>
      </section>
    )
  }

  const introStyle = {
    ...(premiumIntro.fontFamily && { '--intro-font': premiumIntro.fontFamily }),
    ...(premiumIntro.titleColor && { '--intro-color': premiumIntro.titleColor }),
  }

  return (
    <section className={styles.section} style={Object.keys(introStyle).length ? introStyle : undefined}>
      <div className={styles.bg}>
        <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
        {premiumIntro.overlay !== false && <div className={styles.overlay} />}
      </div>

      <Reveal className={styles.content}>
        <span className={styles.accentLine} />
        <p className={styles.eyebrow}>{premiumIntro.eyebrow}</p>
        <h2 className={styles.title}>
          <span className={styles.titleLine1}>{premiumIntro.titleLine1}</span>
          <span className={styles.titleLine2}>{premiumIntro.titleLine2}</span>
        </h2>
        <p className={styles.desc}>
          {descSegments.map((seg, i) =>
            seg.accent ? (
              <strong key={i} className={styles.descAccent}>
                <MobileBreakText text={seg.text} breakClassName={styles.mobileBreak} />
              </strong>
            ) : (
              <span key={i}>
                <MobileBreakText text={seg.text} breakClassName={styles.mobileBreak} />
              </span>
            )
          )}
          <br />
          <MobileBreakText text={premiumIntro.descLine2} breakClassName={styles.mobileBreak} />
        </p>
      </Reveal>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
