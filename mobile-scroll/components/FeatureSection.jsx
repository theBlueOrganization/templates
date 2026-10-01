"use client";

import { useEffect, useRef } from "react";
import styles from "./FeatureSection.module.css";

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

const lines = (text) => text?.split("\n").map((line, i) => <span key={i} className={styles.line}>{line}</span>);

// sections[]의 type: "features" — 통이미지 대신 실사 사진 + HTML 텍스트 카드로 구성하는 섹션
// layout: "list"(기본, 사진 크게 세로 나열) | "grid"(2열 카드)
// leadImage: 카드 목록 위에 크게 보여줄 대표 이미지(위치도 등, 선택)
// items: [{ image: { src, alt }, tag?, title, desc? }] — title/desc는 \n으로 줄바꿈
// dark: true면 어두운 배경 + 밝은 텍스트 (sectionBg로 배경색 직접 지정 가능)
// headerAlign: "center"면 eyebrow/제목/부제를 가운데 정렬 (미설정 시 좌측 정렬)
// 강조색은 theme.FeatureSection.accent (미설정 시 기본 파란색)
export default function FeatureSection({
  id,
  eyebrow,
  title,
  subtitle,
  headerAlign,
  leadImage,
  layout = "list",
  items = [],
  note,
  dark = false,
  sectionBg,
  theme,
}) {
  const th = theme?.FeatureSection ?? {};
  const isGrid = layout === "grid";

  return (
    <section
      id={id}
      className={`${styles.section} ${dark ? styles.dark : ""}`}
      style={{
        ...(sectionBg ? { background: sectionBg } : {}),
        ...(th.accent ? { "--accent": th.accent } : {}),
      }}
    >
      <FadeUp>
        <div className={styles.header} style={headerAlign === "center" ? { textAlign: "center" } : undefined}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{lines(title)}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </FadeUp>

      {leadImage && (
        <FadeUp delay={100}>
          <div className={styles.leadWrap}>
            <img src={leadImage.src} alt={leadImage.alt ?? ""} className={styles.leadImage} loading="lazy" />
          </div>
        </FadeUp>
      )}

      <div className={isGrid ? styles.grid : styles.list}>
        {items.map((item, i) => (
          <FadeUp key={i} delay={isGrid ? (i % 2) * 80 : 0}>
            <article className={isGrid ? styles.gridCard : styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image?.src} alt={item.image?.alt ?? ""} className={styles.image} loading="lazy" />
                {item.tag && <span className={styles.tag}>{item.tag}</span>}
              </div>
              <div className={styles.body}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.cardTitle}>{lines(item.title)}</h3>
                {item.desc && <p className={styles.desc}>{lines(item.desc)}</p>}
              </div>
            </article>
          </FadeUp>
        ))}
      </div>

      {note && <p className={styles.note}>{note}</p>}
    </section>
  );
}
