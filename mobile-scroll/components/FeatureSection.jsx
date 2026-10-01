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

// layout: "premium" 카드의 원형 배지 라인 아이콘 — item.icon 키로 선택
// (adaptive-landing SignaturePremiumEight 아이콘과 동일 + road)
const ICONS = {
  diamond: (
    <>
      <path d="M11 6h18l6 8-15 20L5 14z" />
      <path d="M5 14h30M15 6l-3 8 8 20 8-20-3-8M20 6l-8 8M20 6l8 8" />
    </>
  ),
  city: (
    <>
      <path d="M5 34h30M8 34V20l6-4v18M14 34V9h8v25M22 34V15l8 3v16" />
      <path d="M17 13h2M17 17h2M17 21h2M17 25h2M25 21h2M25 25h2M10 24h2M10 28h2" />
    </>
  ),
  school: (
    <>
      <path d="M6 34h28M8 34V18l12-7 12 7v16" />
      <path d="M17 34v-7h6v7M12 22h3v3h-3zM25 22h3v3h-3z" />
      <path d="M20 11V4l6 2-6 2" />
    </>
  ),
  train: (
    <>
      <rect x="11" y="5" width="18" height="24" rx="4" />
      <path d="M11 17h18M15 10h10" />
      <circle cx="15.5" cy="23" r="1.5" />
      <circle cx="24.5" cy="23" r="1.5" />
      <path d="M14 29l-4 6M26 29l4 6M12 33h16" />
    </>
  ),
  eco: (
    <>
      <path d="M14 34V22M26 34V20M6 34h28" />
      <path d="M14 22c-5 0-7-4-5-8 0-4 3-6 5-6s5 2 5 6c2 4 0 8-5 8z" />
      <path d="M26 20c-4 0-6-3-4-7 0-3 2-5 4-5s4 2 4 5c2 4 0 7-4 7z" />
    </>
  ),
  road: (
    <>
      <path d="M13 35L17 5M27 35L23 5" />
      <path d="M20 8v4M20 16v4M20 24v5" />
      <path d="M6 35h28" />
    </>
  ),
};

// layout: "premium" — 호반써밋 첨단3지구 "PREMIUM 8" 카드형 (가운데 "OO만의 / PREMIUM N" 타이틀 + 2열 사진 카드,
// 사진 아래 경계에 걸친 원형 아이콘 → PREMIUM N → lead 한 줄 → strong 강조 문구)
// item: { image, icon, iconTone?: "dark", lead, strong, strongTone?: "dark" }
// 색상은 theme.FeatureSection.premiumAccent(기본 테라코타) / premiumDark(기본 차콜)
function PremiumLayout({ id, titleLead, titleWord = "PREMIUM", titleNum, items, note, sectionBg, th }) {
  return (
    <section
      id={id}
      className={styles.premiumSection}
      style={{
        ...(sectionBg ? { background: sectionBg } : {}),
        ...(th.premiumAccent ? { "--p-accent": th.premiumAccent } : {}),
        ...(th.premiumDark ? { "--p-dark": th.premiumDark } : {}),
      }}
    >
      <FadeUp>
        <h2 className={styles.premiumTitle}>
          {titleLead && <span className={styles.premiumLead}>{titleLead}</span>}
          <span className={styles.premiumMain}>
            {titleWord}
            <em>{titleNum ?? items.length}</em>
          </span>
        </h2>
      </FadeUp>

      <div className={styles.premiumGrid}>
        {items.map((item, i) => (
          <FadeUp key={i} delay={(i % 2) * 80}>
            <article className={styles.premiumCard}>
              <div className={styles.premiumPhoto}>
                <img
                  src={item.image?.src}
                  alt={item.image?.alt ?? ""}
                  className={styles.premiumImg}
                  style={item.image?.position ? { objectPosition: item.image.position } : undefined}
                  loading="lazy"
                />
              </div>
              <span className={item.iconTone === "dark" ? `${styles.premiumIcon} ${styles.premiumIconDark}` : styles.premiumIcon}>
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[item.icon] ?? ICONS.diamond}
                </svg>
              </span>
              <div className={styles.premiumBody}>
                <p className={styles.premiumNum}>PREMIUM {i + 1}</p>
                {item.lead && <p className={styles.premiumItemLead}>{item.lead}</p>}
                <p className={item.strongTone === "dark" ? `${styles.premiumStrong} ${styles.premiumStrongDark}` : styles.premiumStrong}>
                  {item.strong}
                </p>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>

      {note && <p className={styles.note}>{note}</p>}
    </section>
  );
}

// title 안의 titleStrong 부분만 굵게 (예: "더 커질 병점역 미래가치" + "미래가치")
function renderTitleStrong(title, strong) {
  if (!strong || !title?.includes(strong)) return title;
  const idx = title.indexOf(strong);
  return (
    <>
      {title.slice(0, idx)}
      <strong>{strong}</strong>
      {title.slice(idx + strong.length)}
    </>
  );
}

// sections[]의 type: "features" — 통이미지 대신 실사 사진 + HTML 텍스트 카드로 구성하는 섹션
// layout: "list"(기본, 사진 크게 세로 나열) | "grid"(2열 카드)
//         | "simple"(카드 테두리 없이 "제목(titleStrong만 굵게) + 영문 tag" → 사진 → 회색 설명, 오산헤리티지자이x 입지 항목 스타일)
// leadImage: 카드 목록 위에 크게 보여줄 대표 이미지(위치도 등, 선택)
// items: [{ image: { src, alt }, tag?, title, desc? }] — title/desc는 \n으로 줄바꿈
// dark: true면 어두운 배경 + 밝은 텍스트 (sectionBg로 배경색 직접 지정 가능)
// headerAlign: "center"면 eyebrow/제목/부제를 가운데 정렬 (미설정 시 좌측 정렬)
// 강조색은 섹션 accent > theme.FeatureSection.accent > 기본 파란색
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
  accent,
  titleLead,
  titleWord,
  titleNum,
  theme,
}) {
  const th = theme?.FeatureSection ?? {};
  const isGrid = layout === "grid";

  if (layout === "premium") {
    return <PremiumLayout id={id} titleLead={titleLead} titleWord={titleWord} titleNum={titleNum} items={items} note={note} sectionBg={sectionBg} th={th} />;
  }

  return (
    <section
      id={id}
      className={`${styles.section} ${dark ? styles.dark : ""}`}
      style={{
        ...(sectionBg ? { background: sectionBg } : {}),
        ...((accent ?? th.accent) ? { "--accent": accent ?? th.accent } : {}),
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

      {layout === "simple" ? (
        <div className={styles.simpleList}>
          {items.map((item, i) => (
            <FadeUp key={i}>
              <article className={styles.simpleItem}>
                <h3 className={styles.simpleTitle}>
                  <span>{renderTitleStrong(item.title, item.titleStrong)}</span>
                  {item.tag && <span className={styles.simpleTag}>{item.tag}</span>}
                </h3>
                <div className={styles.simpleImageWrap}>
                  <img src={item.image?.src} alt={item.image?.alt ?? ""} className={styles.image} loading="lazy" />
                </div>
                {item.desc && <p className={styles.simpleDesc}>{item.desc}</p>}
              </article>
            </FadeUp>
          ))}
        </div>
      ) : (
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
      )}

      {note && <p className={styles.note}>{note}</p>}
    </section>
  );
}
