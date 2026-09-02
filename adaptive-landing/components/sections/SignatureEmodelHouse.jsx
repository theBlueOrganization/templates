'use client'

import { useState } from 'react'
import Reveal from '../motion/Reveal'
import SignatureLightbox from '../ui/SignatureLightbox'
import styles from './SignatureEmodelHouse.module.css'

// E-모델하우스(#emodelhouse) — 참고 사이트의 실제 VR 임베드 URL은 클라이언트 JS 전용이라
// 정적 HTML에는 없으므로, 클릭 시 해당 타입의 인테리어 이미지를 확대(라이트박스)해서 보여준다.
export default function SignatureEmodelHouse({ emodelhouse }) {
  const [activeTab, setActiveTab] = useState(0)
  const [openImage, setOpenImage] = useState(null)
  const tab = emodelhouse.tabs[activeTab]

  return (
    <section id={emodelhouse.id} className={styles.section} aria-labelledby="emodelhouse-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{emodelhouse.eyebrow}</p>
        <h2 id="emodelhouse-title">
          {emodelhouse.titlePlain}
          <br />
          <em>{emodelhouse.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{emodelhouse.desc}</p>
      </Reveal>

      <Reveal delay={0.05} className={styles.emodel}>
        <div className={styles.tabs} role="tablist" aria-label="VR 모델하우스 타입 선택">
          {emodelhouse.tabs.map((t, i) => (
            <button key={t.label} type="button" role="tab" aria-selected={i === activeTab} className={i === activeTab ? styles.tabActive : undefined} onClick={() => setActiveTab(i)}>
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.stage}>
          <button
            type="button"
            className={styles.launch}
            style={{ backgroundImage: `linear-gradient(rgba(6,20,29,.5),rgba(6,20,29,.78)), url(${tab.image.src})` }}
            onClick={() => setOpenImage(tab.image)}
          >
            <span className={styles.play}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </span>
            <strong>{tab.label} VR 모델하우스 실행</strong>
            <small>공식 홈페이지 VR 투어를 이 화면에서 볼 수 있습니다</small>
          </button>
        </div>

        <p className={styles.note}>{emodelhouse.note}</p>
      </Reveal>

      <SignatureLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  )
}
