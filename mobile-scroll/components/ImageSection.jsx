"use client";

import { useEffect, useRef, useState } from "react";
import SpecTable from "./SpecTable";
import styles from "./ImageSection.module.css";

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

export default function ImageSection({
  id,
  type = "image",
  title,
  subtitle,
  specItems,
  images = [],
  theme,
  utmOnly,      // 있으면 이 utm_source 목록에 해당하는 방문자에게만 섹션 노출 (없으면 항상 노출, 기존 현장 영향 없음)
  showHeader = true, // false면 제목/부제/구분선 헤더 블록 자체를 렌더링하지 않음 (없으면 기존과 동일)
  sectionBg,    // 있으면 이 섹션 전체 배경색 적용 (없으면 기존 CSS 기본값 #ffffff 그대로)
}) {
  const th = theme ?? {};
  const hasSpec   = specItems && specItems.length > 0;
  const hasImages = images.length > 0;

  const [visible, setVisible] = useState(!utmOnly);

  useEffect(() => {
    if (!utmOnly) return;
    const utm = new URLSearchParams(window.location.search).get("utm_source");
    setVisible(!!utm && utmOnly.includes(utm));
  }, [utmOnly]);

  if (utmOnly && !visible) return null;

  return (
    <section
      id={id}
      className={styles.section}
      style={sectionBg ? { background: sectionBg } : undefined}
    >

      {showHeader && (
        <FadeUp>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div
              className={styles.divider}
              style={{
                background: th.ImageSection_divider?.background,
                width:      th.ImageSection_divider?.width,
                height:     th.ImageSection_divider?.height,
              }}
            />
          </div>
        </FadeUp>
      )}

      {hasImages && type === "image-then-spec" && (
        <div className={styles.imageList}>
          {images.map((img, idx) => (
            <FadeUp key={idx} delay={idx === 0 ? 100 : 0}>
              <div className={styles.imageWrap}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {hasSpec && (
        <FadeUp delay={100}>
          <SpecTable items={specItems} />
        </FadeUp>
      )}

      {hasImages && type !== "image-then-spec" && (
        <div className={styles.imageList}>
          {images.map((img, idx) => (
            <FadeUp key={idx} delay={idx === 0 ? 100 : 0}>
              <div className={styles.imageWrap}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      )}

    </section>
  );
}