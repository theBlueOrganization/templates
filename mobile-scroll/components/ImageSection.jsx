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
  tabs,         // 있으면 [{ label, images, specItems }] 탭 메뉴로 전환해서 보여줌 (없으면 기존과 동일하게 images/specItems 그대로 사용)
  gallery,      // 있으면 [{ src, alt, label? }] 2단 그리드 갤러리 노출 — 클릭하면 라이트박스로 크게 보임 (없으면 기존과 동일)
  theme,
  utmOnly,      // 있으면 이 utm_source 목록에 해당하는 방문자에게만 섹션 노출 (없으면 항상 노출, 기존 현장 영향 없음)
  utmExclude,   // 있으면 이 utm_source 목록에 해당하는 방문자에게만 섹션을 숨김 (그 외에는 기본 노출, 없으면 기존과 동일)
  showHeader = true, // false면 제목/부제/구분선 헤더 블록 자체를 렌더링하지 않음 (없으면 기존과 동일)
  sectionBg,    // 있으면 이 섹션 전체 배경색 적용 (없으면 기존 CSS 기본값 #ffffff 그대로)
}) {
  const th = theme ?? {};
  const hasTabs = tabs && tabs.length > 0;
  const [activeTab, setActiveTab] = useState(0);

  const activeImages    = hasTabs ? tabs[activeTab].images ?? [] : images;
  const activeSpecItems = hasTabs ? tabs[activeTab].specItems : specItems;

  const hasSpec   = activeSpecItems && activeSpecItems.length > 0;
  const hasImages = activeImages.length > 0;

  const [visible, setVisible] = useState(!utmOnly);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const hasGallery = gallery && gallery.length > 0;

  useEffect(() => {
    const utm = new URLSearchParams(window.location.search).get("utm_source");
    if (utmOnly) {
      setVisible(!!utm && utmOnly.includes(utm));
      return;
    }
    if (utmExclude) {
      setVisible(!(utm && utmExclude.includes(utm)));
    }
  }, [utmOnly, utmExclude]);

  if ((utmOnly || utmExclude) && !visible) return null;

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

      {hasTabs && (
        <FadeUp>
          <div className={styles.tabMenu}>
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                type="button"
                className={
                  idx === activeTab
                    ? `${styles.tabButton} ${styles.tabButtonActive}`
                    : styles.tabButton
                }
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeUp>
      )}

      {hasImages && type === "image-then-spec" && (
        <div className={styles.imageList}>
          {activeImages.map((img, idx) => (
            <FadeUp key={idx} delay={idx === 0 ? 100 : 0}>
              <div className={styles.imageWrap}>
                {img.tel ? (
                  <a href={`tel:${img.tel}`} aria-label={`전화 상담 ${img.tel}로 연결`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className={styles.image}
                    />
                  </a>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className={styles.image}
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {hasSpec && (
        <FadeUp delay={100}>
          <SpecTable items={activeSpecItems} />
        </FadeUp>
      )}

      {hasImages && type !== "image-then-spec" && (
        <div className={styles.imageList}>
          {activeImages.map((img, idx) => (
            <FadeUp key={idx} delay={idx === 0 ? 100 : 0}>
              <div className={styles.imageWrap}>
                {img.tel ? (
                  <a href={`tel:${img.tel}`} aria-label={`전화 상담 ${img.tel}로 연결`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className={styles.image}
                    />
                  </a>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className={styles.image}
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {hasGallery && (
        <FadeUp delay={100}>
          <div className={styles.galleryGrid}>
            {gallery.map((g, idx) => (
              <button
                key={idx}
                type="button"
                className={styles.galleryItem}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={g.src} alt={g.alt ?? ""} className={styles.galleryImg} />
                <span className={styles.galleryIcon} aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.625 3.125C8.732 3.125 3.125 8.732 3.125 15.625S8.732 28.125 15.625 28.125c3.283 0 6.27-1.268 8.504-3.338l8.809 8.809a1.563 1.563 0 0 0 2.21-2.21l-8.809-8.809a12.53 12.53 0 0 0 3.286-8.502C28.125 8.732 22.518 3.125 15.625 3.125zm0 3.125a9.375 9.375 0 1 1 0 18.75 9.375 9.375 0 0 1 0-18.75z" fill="#fff"/>
                  </svg>
                </span>
                {g.label && <span className={styles.galleryLabel}>{g.label}</span>}
              </button>
            ))}
          </div>
        </FadeUp>
      )}

      {hasGallery && lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="닫기"
          >
            ✕
          </button>
          {gallery.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
              }}
              aria-label="이전 이미지"
            >
              ‹
            </button>
          )}
          <img
            src={gallery[lightboxIndex].src}
            alt={gallery[lightboxIndex].alt ?? ""}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
          {gallery.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i + 1) % gallery.length);
              }}
              aria-label="다음 이미지"
            >
              ›
            </button>
          )}
        </div>
      )}

    </section>
  );
}