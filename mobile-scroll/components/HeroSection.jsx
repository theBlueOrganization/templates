"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import HeroSectionType1 from "./HeroSectionType1";

// variant: "default" | "type1" | "type2" | "type3" …
// 추후 변형 추가 시 여기에 케이스 추가
export default function HeroSection({ image, eyebrow, eyebrowUrgent, brand, title, subtitle, bgColor, accentKeyword, theme, enableVariants }) {
  const [variant,     setVariant]    = useState("default");
  const [ready,       setReady]      = useState(false);
  const [visible,    setVisible]    = useState(false);
  const [curtainOut, setCurtainOut] = useState(false);
  const [settled,    setSettled]    = useState(false);
  const [accentReady, setAccentReady] = useState(false);

  // data에서 enableVariants: true 로 opt-in한 경우에만 쿼리스트링 감지
  // useLayoutEffect: 페인트 전에 실행 → 타입 전환 시 플래시 없음
  // ?v=1 → type1, ?v=2 → type2 …
  useLayoutEffect(() => {
    if (enableVariants) {
      const v = new URLSearchParams(window.location.search).get("v");
      if (v === "1") setVariant("type1");
    }
    setReady(true);
  }, [enableVariants]);

  // default 변형: 기존 3단계 커튼 애니메이션
  useEffect(() => {
    if (variant !== "default") return;
    const t1 = setTimeout(() => setVisible(true),    80);
    const t2 = setTimeout(() => setCurtainOut(true), 1700);
    const t3 = setTimeout(() => setSettled(true),    2850);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [variant]);

  // accent 변형: 타이틀 드롭 후 스크롤 힌트 노출
  useEffect(() => {
    if (variant !== "accent") return;
    const t = setTimeout(() => setAccentReady(true), 900);
    return () => clearTimeout(t);
  }, [variant]);

  // ── 모든 hook 이후 ──

  // enableVariants 페이지에서 variant 확정 전: 투명 placeholder로 SSR 커튼 플래시 차단
  if (!ready && enableVariants) {
    return <section id="home" className={styles.hero} style={{ opacity: 0 }} />;
  }

  const isAccent = variant === "accent";

  // type1 별도 컴포넌트로 위임
  if (variant === "type1") {
    return <HeroSectionType1 image={image} eyebrow={eyebrow} eyebrowUrgent={eyebrowUrgent} brand={brand} title={title} subtitle={subtitle} bgColor={bgColor} accentKeyword={accentKeyword} theme={theme} />;
  }

  const showScrollHint = settled || accentReady;

  const titleLines = title?.split("\n") ?? [];
  const badges     = eyebrow?.split("｜").map((s) => s.trim()) ?? [];
  const keywords   = Array.isArray(accentKeyword)
    ? accentKeyword.filter(Boolean)
    : accentKeyword ? [accentKeyword] : [];
  const th         = theme ?? {};
  const curtainColor = th.hero?.curtainColor ?? "#0f172a";

  return (
    <section id="home" className={styles.hero}>

      {/* 배경 이미지 */}
      <div
        className={`${styles.imageWrap} ${settled ? styles.visible : ""}`}
        style={{ background: `url(${image?.src}) no-repeat, ${bgColor}` }}
      />

      {/* 커튼 — accent 변형에선 렌더하지 않음 */}
      {!isAccent && (
        <div
          className={`${styles.curtain} ${curtainOut ? styles.active : ""}`}
          style={{ background: curtainColor }}
        />
      )}

      {/* 텍스트 */}
      <div
        className={[
          styles.textBlock,
          isAccent                      ? styles.accentMode  : "",
          !isAccent && visible          ? styles.visible     : "",
          !isAccent && curtainOut       ? styles.curtainOut  : "",
          !isAccent && settled          ? styles.settled     : "",
        ].filter(Boolean).join(" ")}
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

      {/* 스크롤 힌트 */}
      <div className={`${styles.scrollHint} ${showScrollHint ? styles.visible : ""}`}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.arrow} />
      </div>

    </section>
  );
}
