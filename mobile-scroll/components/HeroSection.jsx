"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import HeroSectionType1 from "./HeroSectionType1";

// variant: "default" | "type1" | "type2" | "type3" …
// 추후 변형 추가 시 여기에 케이스 추가
export default function HeroSection({ image, eyebrow, eyebrowUrgent, brand, title, subtitle, bgColor, accentKeyword, theme, enableVariants, heroByUtm }) {
  const [variant,     setVariant]    = useState("default");
  const [ready,       setReady]      = useState(false);
  const [visible,    setVisible]    = useState(false);
  const [curtainOut, setCurtainOut] = useState(false);
  const [settled,    setSettled]    = useState(false);
  const [accentReady, setAccentReady] = useState(false);
  const [heroOverride, setHeroOverride] = useState(null);

  // data에서 enableVariants: true 로 opt-in한 경우에만 쿼리스트링 감지
  // useLayoutEffect: 페인트 전에 실행 → 타입 전환 시 플래시 없음
  // ?v=1 → type1, ?v=2 → type2 …
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (enableVariants) {
      const v = params.get("v");
      if (v === "1") setVariant("type1");
    }
    // heroByUtm에 등록된 utm_source로 들어온 경우에만 title/subtitle을 덮어씀
    if (heroByUtm) {
      const utm = params.get("utm_source");
      if (utm && heroByUtm[utm]) setHeroOverride(heroByUtm[utm]);
    }
    setReady(true);
  }, [enableVariants, heroByUtm]);

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

  // enableVariants 또는 heroByUtm 페이지에서 확정 전: 투명 placeholder로 SSR 플래시 차단
  if (!ready && (enableVariants || heroByUtm)) {
    return <section id="home" className={styles.hero} style={{ opacity: 0 }} />;
  }

  const isAccent = variant === "accent";

  const effectiveTitle         = heroOverride?.title         ?? title;
  const effectiveSubtitle      = heroOverride?.subtitle      ?? subtitle;
  const effectiveAccentKeyword = heroOverride?.accentKeyword ?? accentKeyword;

  // type1 별도 컴포넌트로 위임
  if (variant === "type1") {
    return <HeroSectionType1 image={image} eyebrow={eyebrow} eyebrowUrgent={eyebrowUrgent} brand={brand} title={effectiveTitle} subtitle={effectiveSubtitle} bgColor={bgColor} accentKeyword={effectiveAccentKeyword} theme={theme} />;
  }

  const showScrollHint = settled || accentReady;

  const titleLines = effectiveTitle?.split("\n") ?? [];
  const badges     = eyebrow?.split("｜").map((s) => s.trim()) ?? [];
  const keywords   = Array.isArray(effectiveAccentKeyword)
    ? effectiveAccentKeyword.filter(Boolean)
    : effectiveAccentKeyword ? [effectiveAccentKeyword] : [];
  const th         = theme ?? {};
  const curtainColor = th.hero?.curtainColor ?? "#0f172a";
  // 이미지 원본 비율이 화면 세로 비율보다 짧은 경우 cover로 채우면 좌우가 잘림 —
  // 브랜드 워드마크가 이미지 가장자리에 있는 현장은 theme.hero.imageFit으로 기존 "100% auto" 유지
  const heroImageFit = th.hero?.imageFit ?? "cover";
  // 가로로 넓은 이미지를 100vh 섹션에 cover로 채우면 좌우가 과하게 잘려 배경이 잘 안 보이는 현장은
  // theme.hero.height로 섹션 높이를 낮춰 크롭을 줄임 (미설정 시 기존 100dvh 유지)
  const heroHeight = th.hero?.height;
  // 인트로 텍스트 중앙 정렬 계산(--hero-half)도 섹션 높이 기준으로 같이 보정 —
  // 안 그러면 78vh처럼 줄어든 섹션에서 텍스트가 뷰포트 기준 50vh로 계산돼 중앙에서 벗어남
  const heroStyle = heroHeight
    ? { height: heroHeight, "--hero-half": `calc(${heroHeight} / 2)` }
    : undefined;

  return (
    <section id="home" className={styles.hero} style={heroStyle}>

      {/* 배경 이미지 */}
      <div
        className={`${styles.imageWrap} ${settled ? styles.visible : ""}`}
        style={{
          background: `url(${image?.src}) no-repeat, ${bgColor}`,
          backgroundSize: heroImageFit,
        }}
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
        {effectiveSubtitle && (
          <p className={styles.subtitle}>
            {effectiveSubtitle}
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
