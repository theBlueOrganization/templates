'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './SignatureVideoSection.module.css'

// 히어로 바로 다음에 오는 전체화면(100vh) 영상 섹션 — 페이지 로드와 함께 바로 재생되는 게 아니라
// 스크롤로 화면에 들어오는 순간 재생되고, 벗어나면 멈추는 방식(IntersectionObserver)으로 트리거됨.
// 모바일 브라우저(특히 Android Chrome)는 muted 영상이라도 사용자 제스처 없이 호출된 play()를
// 종종 거부하는데, 이 경우 화면이 그냥 정지된 포스터로 멈춰버려 "안 되는 것처럼" 보인다.
// 그래서 play()가 실패하면 조용히 무시하지 않고 탭해서 재생할 수 있는 버튼을 띄워준다.
export default function SignatureVideoSection({ video }) {
  const videoRef = useRef(null)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    el.playsInline = true

    const tryPlay = () => {
      const playPromise = el.play()
      if (playPromise?.catch) {
        playPromise.then(() => setNeedsTap(false)).catch(() => setNeedsTap(true))
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay()
        } else {
          el.pause()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleTap = () => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    el.play()
      .then(() => setNeedsTap(false))
      .catch(() => setNeedsTap(true))
  }

  return (
    <section className={styles.section}>
      <video
        ref={videoRef}
        className={styles.video}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        webkit-playsinline="true"
      />
      {needsTap && (
        <button type="button" className={styles.tapButton} onClick={handleTap} aria-label="영상 재생">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
      {(video.titleLine1 || video.desc) && (
        <div className={styles.overlay}>
          {video.titleLine1 && (
            <h2 className={styles.title}>
              {video.titleLine1}
              {video.titleLine2 && (
                <>
                  <br />
                  {video.titleLine2}
                </>
              )}
            </h2>
          )}
          {video.desc && <p className={styles.desc}>{video.desc}</p>}
        </div>
      )}
    </section>
  )
}
