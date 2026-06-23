"use client";

import { useEffect, useRef } from "react";
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
}) {
  const th = theme ?? {};
  const hasSpec   = specItems && specItems.length > 0;
  const hasImages = images.length > 0;

  return (
    <section id={id} className={styles.section}>

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