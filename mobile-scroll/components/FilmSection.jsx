"use client";

import { useEffect, useRef } from "react";
import styles from "./FilmSection.module.css";

function FadeUp({ children, delay = 0 }) {
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
    <div
      ref={ref}
      className={styles.fadeUp}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// sections[]의 type: "film" — 어두운 배경의 "영상으로 먼저 만나는 OO" 섹션
// (adaptive-landing SignatureSellingStory 참고: 헤더 + 숫자 3개 + 유튜브 영상 카드 목록)
// titleLine1(흰색) + titleAccent(강조색) 두 줄 제목, desc, numbers[{ value, label }],
// scenes[{ youtubeId, tag?, title, desc? }] — 영상은 음소거 자동재생·반복(모바일 정책상 음소거 필수)
export default function FilmSection({ id, eyebrow, titleLine1, titleAccent, desc, numbers = [], scenes = [], sectionBg }) {
  return (
    <section id={id} className={styles.section} style={sectionBg ? { background: sectionBg } : undefined}>
      <FadeUp>
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>
            {titleLine1 && <span className={styles.titleLine}>{titleLine1}</span>}
            {titleAccent && <em className={styles.titleAccent}>{titleAccent}</em>}
          </h2>
          {desc && <p className={styles.desc}>{desc}</p>}
        </div>
      </FadeUp>

      {numbers.length > 0 && (
        <div className={styles.numbers}>
          {numbers.map((n, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className={styles.numberItem}>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {scenes.length > 0 && (
        <div className={styles.scenes}>
          {scenes.map((scene, i) => (
            <FadeUp key={scene.youtubeId ?? i}>
              <article className={styles.scene}>
                <div className={styles.media}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${scene.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${scene.youtubeId}&playsinline=1&rel=0`}
                    title={scene.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className={styles.copy}>
                  {scene.tag && <span className={styles.tag}>{scene.tag}</span>}
                  <h3 className={styles.sceneTitle}>{scene.title}</h3>
                  {scene.desc && <p className={styles.sceneDesc}>{scene.desc}</p>}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      )}
    </section>
  );
}
