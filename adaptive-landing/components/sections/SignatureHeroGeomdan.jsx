import styles from './SignatureHeroGeomdan.module.css'

// 히어로 — 데스크톱은 webp(폴백 jpg), 모바일은 별도로 크롭된 -m.webp를 <picture>로 분기.
// 참고 사이트는 <video>가 아니라 정적 이미지(hero-video/hero-still 클래스)에 느린 줌 애니메이션을
// CSS로 입힌 것뿐이라(실제 video 태그 아님) 동일하게 <img>+CSS 애니메이션으로 재현한다.
export default function SignatureHeroGeomdan({ hero }) {
  return (
    <section id={hero.id} className={styles.hero}>
      <picture>
        <source media="(max-width: 767px)" srcSet={hero.bgImageMobile.src} type="image/webp" />
        <source srcSet={hero.bgImageDesktop.src} type="image/webp" />
        <img className={styles.bg} src={hero.bgImageDesktop.srcJpg} alt={hero.bgAlt} fetchPriority="high" decoding="async" />
      </picture>
      <div className={styles.shade} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1>
          {hero.titleLine1}
          <br />
          <span className={styles.titleLine2}>
            <em>{hero.titleAccent}</em>
            {hero.titleSuffix}
          </span>
        </h1>
      </div>
      <div className={styles.seal} aria-label="민간분양 · 분양가상한제 적용단지">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="geomdan-hero-seal-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
          </defs>
          <text>
            <textPath href="#geomdan-hero-seal-path" startOffset="0">
              {hero.sealText}
            </textPath>
          </text>
        </svg>
        <span className={styles.sealCore}>
          <strong>{hero.sealCoreStrong}</strong>
          {hero.sealCoreRest}
        </span>
      </div>
      <div className={styles.note}>{hero.note}</div>
    </section>
  )
}
