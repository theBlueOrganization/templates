"use client";

import { useEffect, useRef } from "react";
import styles from "./IntroBannerSection.module.css";

// sections[]의 type: "intro-banner" — 단지 전경 사진 위에 도입 문구를 얹는 풀폭 배너
// (adaptive-landing SignaturePremiumIntro의 introBox 변형 참고)
// bgImage: { src(모바일 세로 크롭), srcWide?(500px 이상 화면용 가로 원본 비율), alt, position? }, introLines: [가는 글씨 줄, 굵은 글씨 줄], title(밑줄 강조 타이틀), footnote(선택)
export default function IntroBannerSection({ id, bgImage, introLines = [], title, footnote }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [lead, strong] = introLines;

  return (
    <section id={id} className={bgImage?.srcWide ? `${styles.section} ${styles.hasWide}` : styles.section}>
      {bgImage && (
        <picture>
          {/* srcWide가 있으면 넓은 화면(500px 이상)에서는 가로 전체 사진 사용 — 세로 크롭본이 확대돼 보이는 것 방지 */}
          {bgImage.srcWide && <source media="(min-width: 500px)" srcSet={bgImage.srcWide} />}
          <img
            src={bgImage.src}
            alt={bgImage.alt ?? ""}
            className={styles.bgImage}
            style={bgImage.position ? { objectPosition: bgImage.position } : undefined}
            loading="lazy"
          />
        </picture>
      )}

      <div ref={contentRef} className={styles.content}>
        {(lead || strong) && (
          <div className={styles.introBox}>
            {lead && <p>{lead}</p>}
            {strong && <p><strong>{strong}</strong></p>}
          </div>
        )}
        <span className={styles.vLine} aria-hidden="true" />
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>

      {footnote && <p className={styles.footnote}>{footnote}</p>}

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollText}>SCROLL</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
