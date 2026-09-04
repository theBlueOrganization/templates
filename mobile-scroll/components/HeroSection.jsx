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
  const [isDesktop, setIsDesktop] = useState(false);

  // 모바일 브라우저는 스크롤 중 주소창이 접히고 펴지며 100dvh(동적 뷰포트 높이)가 실시간으로
  // 바뀌는데, 이를 background-size: cover와 함께 쓰면 배경 이미지가 스크롤 중 커졌다 작아졌다
  // 하는 것처럼 보임(PC는 주소창 접힘이 없어 재현되지 않음). --vh를 최초 1회(+실제 기기 회전 시에만)
  // 측정해 고정값으로 박아두고 CSS에서 이 값을 쓰면, 스크롤 중 주소창 변화와 무관하게 높이가
  // 고정된다. resize 이벤트는 주소창 접힘에도 발생하므로 일부러 구독하지 않음(재현 방지).
  // useLayoutEffect: 첫 페인트 전에 실행 → 100vh 폴백에서 실측 높이로 넘어갈 때 순간적으로
  // 커지거나 작아지는 점프(초기 CLS) 방지
  useLayoutEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("orientationchange", setVh);
    return () => window.removeEventListener("orientationchange", setVh);
  }, []);

  // theme.hero.aspectRatio가 있는 현장만 대상 — PC(모바일 카드 폭 750px보다 넓은 화면)에서는
  // 100dvh 그대로 쓰면 창 높이가 이미지 비율보다 짧아 위쪽이 과하게 잘림. 750px 이하(모바일)는
  // 기존처럼 100dvh + cover 그대로 두고, 750px 초과(PC)일 때만 높이를 이미지 비율에 맞춤
  useLayoutEffect(() => {
    if (!theme?.hero?.aspectRatio) return;
    const mq = window.matchMedia("(min-width: 751px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [theme?.hero?.aspectRatio]);

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
  // 이미지 세로 길이가 섹션보다 길면 기본값(center bottom)은 위쪽(하늘 등)이 잘림 —
  // 상단이 잘리면 안 되는 현장은 theme.hero.imagePosition으로 "center top" 등으로 변경
  const heroImagePosition = th.hero?.imagePosition;
  // 이미지 비율(가로/세로)에 맞춰 PC(751px 이상)에서만 섹션 높이를 고정 — 모바일은 100dvh + cover 그대로 유지
  const heroAspectRatio = th.hero?.aspectRatio;
  // 인트로 텍스트 중앙 정렬 계산(--hero-half)도 섹션 높이 기준으로 같이 보정 —
  // 안 그러면 78vh처럼 줄어든 섹션에서 텍스트가 뷰포트 기준 50vh로 계산돼 중앙에서 벗어남
  const heroStyle = {
    ...(heroHeight ? { height: heroHeight, "--hero-half": `calc(${heroHeight} / 2)` } : {}),
    ...(heroAspectRatio && isDesktop ? { height: "auto", aspectRatio: heroAspectRatio } : {}),
    ...(heroImagePosition ? { "--hero-image-position": heroImagePosition } : {}),
  };

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

      {/* 이미지 전체에 깔리는 어두운 오버레이 — theme.hero.textOverlay 미설정 시 기존과 동일한 기본값 유지 */}
      <div
        className={`${styles.imageOverlay} ${settled ? styles.visible : ""}`}
        style={th.hero?.textOverlay ? { "--text-overlay": th.hero.textOverlay } : undefined}
      />

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
                    ? { color: th.eyebrowUrgent?.color, borderColor: th.eyebrowUrgent?.borderColor, fontSize: th.eyebrowUrgent?.fontSize ?? th.eyebrow?.fontSize }
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
                        <em key={j} className={styles.accent} style={{ "--accent-color": th.title?.accentColor }}>
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
          <p className={styles.subtitle} style={{ color: th.subtitle?.color, fontSize: th.subtitle?.fontSize }}>
            {effectiveSubtitle.split(/(\d[\d-]{5,}\d)/).map((part, i) =>
              /^\d[\d-]{5,}\d$/.test(part) ? (
                <em key={i} className={styles.subtitleAccent} style={{ color: th.subtitle?.accentColor }}>
                  {part}
                </em>
              ) : (
                part
              )
            )}
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
