"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoSection.module.css";

function FadeUp({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.fadeUp}>
      {children}
    </div>
  );
}

export default function VideoSection({
  id,
  title,
  subtitle,
  youtubeId,    // 유튜브 영상 ID (예: youtu.be/XXXXX 의 XXXXX) — 있으면 유튜브 임베드로 표시, src보다 우선
  src,          // 자체 호스팅 영상 파일 경로 (예: /apt/[slug]/video.mp4) — youtubeId 없을 때만 사용
  poster,       // src 영상의 재생 전 썸네일 이미지 (선택)
  orientation = "horizontal", // "horizontal"(기본, 16:9 가로형) | "vertical"(9:16 세로형) — 영상 실제 비율에 맞게 지정
  showHeader = true,
  sectionBg,    // 있으면 이 섹션 배경색 적용 (없으면 theme.ImageSection_background, 그것도 없으면 기존 CSS 기본값 #ffffff)
  theme,
}) {
  // 자체 호스팅 영상(src)만 해당 — 네이티브 컨트롤바의 작은 재생 버튼 대신 화면 중앙에 큰 재생 버튼을
  // 띄워서 클릭 한 번으로 재생되게 함(세로 영상일 때 특히 컨트롤바가 아래로 밀려 찾기 불편했음)
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // youtubeId/src가 둘 다 없으면(TODO 상태) 빈 영상 영역이 보이지 않도록 섹션 자체를 렌더링하지 않음
  // (위의 useRef/useState보다 뒤에 둬야 Hook 호출 순서가 항상 동일하게 유지됨)
  if (!youtubeId && !src) return null;

  const th = theme ?? {};
  // ImageSection과 같은 theme 키(ImageSection_background/_dark)를 그대로 재사용 —
  // 콘텐츠 섹션들과 같은 배경 톤을 유지해야 자연스러움 (영상 섹션 전용 키를 따로 두지 않음)
  const sectionBackground = sectionBg ?? th.ImageSection_background;
  const dark = Boolean(th.ImageSection_dark);
  const darkCx = (base) => (dark ? `${base} ${styles.dark}` : base);

  return (
    <section
      id={id}
      className={styles.section}
      style={sectionBackground ? { background: sectionBackground } : undefined}
    >
      {showHeader && (title || subtitle) && (
        <FadeUp>
          <div className={styles.header}>
            {title && <h2 className={darkCx(styles.title)}>{title}</h2>}
            {subtitle && <p className={darkCx(styles.subtitle)}>{subtitle}</p>}
          </div>
        </FadeUp>
      )}

      <FadeUp>
        <div className={`${styles.videoWrap} ${orientation === "vertical" ? styles.vertical : styles.horizontal}`}>
          {youtubeId ? (
            <iframe
              className={styles.video}
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={title ?? "홍보 영상"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className={styles.videoBox}>
              <video
                ref={videoRef}
                className={styles.video}
                src={src}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  type="button"
                  className={styles.playButton}
                  onClick={() => videoRef.current?.play()}
                  aria-label="영상 재생"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}
