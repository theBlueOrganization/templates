import Image from 'next/image'
import Reveal from '../motion/Reveal'
import styles from './SignatureLandscape.module.css'

// 단지 조경안내 — 은은하게 톤다운된(50% 불투명) 조경 이미지 3장 위에 각 패널별 캡션을 겹쳐 보여줌
export default function SignatureLandscape({ landscape }) {
  return (
    <section className={styles.section}>
      {landscape.panels.map((panel, i) => (
        <div key={panel.image.src} className={styles.panel}>
          <Image src={panel.image.src} alt={panel.image.alt} fill sizes="(min-width: 768px) 34vw, 100vw" className={styles.panelImage} />
          <Reveal delay={i * 0.1} className={styles.caption}>
            <span className={styles.badge}>{panel.badge}</span>
            <h3 className={styles.title}>
              {panel.titlePlain}
              <strong>{panel.titleAccent}</strong>
            </h3>
            <p className={styles.desc}>{panel.desc}</p>
          </Reveal>
        </div>
      ))}
    </section>
  )
}
