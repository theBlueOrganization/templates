"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSectionType1.module.css";

export default function HeroSectionType1({ image, eyebrow, eyebrowUrgent, brand, title, subtitle, bgColor, accentKeyword, theme }) {
  const [visible,    setVisible]    = useState(false);
  const [curtainOut, setCurtainOut] = useState(false);
  const [settled,    setSettled]    = useState(false);
  const titleLines = title?.split("\n") ?? [];
  const badges     = eyebrow?.split("｜").map((s) => s.trim()).filter(Boolean) ?? [];
  const keywords   = Array.isArray(accentKeyword)
    ? accentKeyword.filter(Boolean)
    : accentKeyword ? [accentKeyword] : [];
  const th = theme ?? {};

  // 기본 히어로(HeroSection)와 동일한 3단계 커튼 인트로 연출(같은 타이밍값 사용)
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true),    80);
    const t2 = setTimeout(() => setCurtainOut(true), 1700);
    const t3 = setTimeout(() => setSettled(true),    2850);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section id="home" className={styles.hero}>

      {/* 배경 이미지 */}
      <div
        className={styles.imageWrap}
        style={{ background: `url(${image?.src}) no-repeat, ${bgColor}` }}
      />

      {/* 이미지 전체에 깔리는 어두운 오버레이 — theme.hero.textOverlay 미설정 시 기본 HeroSection과 동일한 기본값 유지 */}
      <div
        className={`${styles.imageOverlay} ${settled ? styles.visible : ""}`}
        style={th.hero?.textOverlay ? { "--text-overlay": th.hero.textOverlay } : undefined}
      />

      {/* 커튼 — 기본 히어로와 동일한 인트로 연출 */}
      <div
        className={`${styles.curtain} ${curtainOut ? styles.active : ""}`}
        style={{ background: th.hero?.curtainColor ?? "#0f172a" }}
      />

      {/* 텍스트 블록 — 기본 히어로와 동일하게 중앙에서 최종 위치로 커튼과 함께 이동 */}
      <div
        className={[
          styles.textBlock,
          visible    ? styles.visible    : "",
          curtainOut ? styles.curtainOut : "",
          settled    ? styles.settled    : "",
        ].filter(Boolean).join(" ")}
      >

        {badges.length > 0 && (
          <div className={styles.badgeRow}>
            {badges.map((b, i) => {
              const isUrgent = i < (eyebrowUrgent ?? 0);
              return (
                <span
                  key={i}
                  className={styles.badge}
                  style={isUrgent
                    ? { color: th.eyebrowUrgent?.color, borderColor: th.eyebrowUrgent?.borderColor }
                    : { color: th.eyebrow?.color, borderColor: th.eyebrow?.borderColor, fontSize: th.eyebrow?.fontSize }}
                >
                  {b}
                </span>
              );
            })}
          </div>
        )}

        {brand && (
          <p className={styles.brand} style={{ color: th.brand?.color, fontSize: th.brand?.fontSize }}>
            {brand}
          </p>
        )}

        <h1 className={styles.title} style={{ color: th.title?.color, fontSize: th.title?.fontSize }}>
          {titleLines.map((line, i) => (
            <span key={i} className={styles.titleLine}>
              <span className={styles.titleInner}>
                {keywords.length > 0 ? (
                  line
                    .split(new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`))
                    .map((part, j) =>
                      keywords.includes(part) ? (
                        <em key={j} className={styles.accent} style={{ '--accent-color': th.title?.accentColor }}>
                          {part}
                        </em>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        {subtitle && (
          <p className={styles.subtitle} style={{ color: th.subtitle?.color, fontSize: th.subtitle?.fontSize }}>{subtitle}</p>
        )}

      </div>

      {/* 스크롤 힌트 — 모든 모션 종료 후 등장 */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.arrow} />
      </div>

    </section>
  );
}
