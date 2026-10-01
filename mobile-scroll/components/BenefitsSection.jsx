"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BenefitsSection.module.css";

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

// 히어로 바로 다음에 노출되는 "N가지 특성화" 세로 리스트 — site.benefits가 있는 현장만 렌더링
// item.label은 \n으로 두 줄 표기 (예: "씨티뷰\n전주역 복합도시")
// variant: "condition" — 더샵 송도그란테르 "특별한 4가지 조건" 스타일(제목 둘째 줄 가는 대형 글씨, 세리프 번호,
// 화면 가운데에 온 항목 카드가 강조색으로 채워짐). 미설정 시 기존과 동일
export default function BenefitsSection({ benefits, theme }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const isCondition = benefits?.variant === "condition";

  // condition 변형: 모바일엔 hover가 없으므로 스크롤로 화면 세로 중앙 띠에 들어온 항목을 활성화
  useEffect(() => {
    if (!isCondition) return;
    const items = sectionRef.current?.querySelectorAll("[data-benefit-index]");
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.benefitIndex));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isCondition]);

  if (!benefits) return null;
  const { eyebrow, brand, title, desc, items = [], bgImage } = benefits;
  const th = theme?.BenefitsSection ?? {};
  const titleLines = title?.split("\n") ?? [];

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className={isCondition ? `${styles.section} ${styles.condition}` : styles.section}
      style={{
        background: bgImage ? undefined : th.background ?? "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        ...(th.activeBackground ? { "--active-bg": th.activeBackground } : {}),
        ...(th.activeTextColor ? { "--active-text": th.activeTextColor } : {}),
      }}
    >
      {bgImage && (
        <div className={styles.bgWrap}>
          <img src={bgImage.src} alt={bgImage.alt ?? ""} className={styles.bgImage} />
          <div className={styles.bgOverlay} style={{ background: th.overlay }} />
        </div>
      )}

      <div className={styles.content}>
        <FadeUp>
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow} style={{ color: th.eyebrowColor }}>{eyebrow}</p>}
            {brand && <p className={styles.brand} style={{ color: th.brandColor }}>{brand}</p>}
            <h2 className={styles.title} style={{ color: th.titleColor }}>
              {titleLines.map((line, i) => (
                <span key={i} className={styles.titleLine}>{line}</span>
              ))}
            </h2>
            {desc && <p className={styles.desc} style={{ color: th.descColor }}>{desc}</p>}
          </div>
        </FadeUp>

        <div className={styles.list}>
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                data-benefit-index={i}
                className={i === activeIndex ? `${styles.item} ${styles.active}` : styles.item}
                style={{ borderColor: th.dividerColor }}
              >
                <div className={styles.itemTop}>
                  <span className={styles.num} style={{ color: th.numColor }}>{item.num}</span>
                  <span className={styles.noTag} style={{ color: th.noTagColor }}>NO.{i + 1}</span>
                </div>
                <p className={styles.label} style={{ color: th.labelColor }}>
                  {item.label.split("\n").map((line, j) => (
                    <span key={j} className={styles.labelLine}>{line}</span>
                  ))}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
