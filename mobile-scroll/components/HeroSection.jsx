"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection({ image, eyebrow, eyebrowUrgent, brand, title, subtitle, bgColor, accentKeyword, theme }) {
  const [visible,    setVisible]    = useState(false);
  const [curtainOut, setCurtainOut] = useState(false);
  const [settled,    setSettled]    = useState(false);

  useEffect(() => {
    // Phase 2: 80ms 후 텍스트 리빌 시작
    const t1 = setTimeout(() => setVisible(true), 80);

    // Phase 3: 리빌 끝난 뒤 커튼+텍스트 동시 슬라이드업 (1.1s)
    const t2 = setTimeout(() => setCurtainOut(true), 1700);

    // Phase 4: 슬라이드 애니메이션(1.1s) 끝난 후 최종 고정
    const t3 = setTimeout(() => setSettled(true), 2850);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const titleLines = title?.split("\n") ?? [];
  const badges     = eyebrow?.split("｜").map((s) => s.trim()) ?? [];
  const keywords   = Array.isArray(accentKeyword)
    ? accentKeyword.filter(Boolean)
    : accentKeyword ? [accentKeyword] : [];
  const th         = theme ?? {};
  const curtainColor = th.hero?.curtainColor ?? "#0f172a";

  return (
    <section id="home" className={styles.hero}>

      {/* 배경 이미지 — 커튼이 걷힌 후 페이드인 */}
      <div
        className={`${styles.imageWrap} ${settled ? styles.visible : ""}`}
        style={{ background: `url(${image?.src}) no-repeat, ${bgColor}` }}
      />

      {/* 커튼 — 지정색으로 전체를 덮고 있다가 위로 슬라이드아웃 */}
      <div
        className={`${styles.curtain} ${curtainOut ? styles.active : ""}`}
        style={{ background: curtainColor }}
      />

      {/* 텍스트 — 커튼 위에서 리빌 후 커튼과 함께 위로 이동 */}
      <div
        className={[
          styles.textBlock,
          visible    ? styles.visible    : "",
          curtainOut ? styles.curtainOut : "",
          settled    ? styles.settled    : "",
        ].join(" ")}
      >
        {badges.length > 0 && (
          <div className={styles.badgeRow}>
            {badges.map((b, i) => {
              const isUrgent = i < (eyebrowUrgent ?? 0);
              return (
                <span
                  key={i}
                  className={`${styles.badge} ${isUrgent ? styles.urgent : ""}`}
                  style={isUrgent
                    ? { color: th.eyebrowUrgent?.color, borderColor: th.eyebrowUrgent?.borderColor }
                    : { color: th.eyebrow?.color, borderColor: th.eyebrow?.borderColor, fontSize: th.eyebrow?.fontSize }
                  }
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
                        <em key={j} className={styles.accent} style={{ color: th.title?.accentColor }}>
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
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
      </div>

      {/* 스크롤 힌트 — 모든 모션 끝난 후 등장 */}
      <div className={`${styles.scrollHint} ${settled ? styles.visible : ""}`}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.arrow} />
      </div>

    </section>
  );
}
