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
  headerPaddingTop, // 있으면 이 섹션만 theme.ImageSection_spacing.headerPaddingTop 대신 이 값을 사용
}) {
  const th = theme ?? {};
  const hasTabs = tabs && tabs.length > 0;
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  // 탭 전환 시 이전 탭의 서브탭 선택이 남아있지 않도록 초기화
  useEffect(() => {
    setActiveSubTab(0);
  }, [activeTab]);

  const currentTab = hasTabs ? tabs[activeTab] : null;
  // 탭 안에 다시 탭이 있는 경우 (예: 차수 탭 안에 타입별 탭) — 없으면 기존과 동일하게 동작
  const subTabs    = currentTab?.subTabs;
  const hasSubTabs = subTabs && subTabs.length > 0;

  const activeImages    = hasSubTabs
    ? subTabs[activeSubTab].images ?? []
    : hasTabs
    ? currentTab.images ?? []
    : images;
  const activeSpecItems = hasTabs ? currentTab.specItems : specItems;

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

  // 섹션 사이 여백(헤더 위/아래, 섹션 하단)을 현장별로 좁히고 싶을 때 사용 —
  // 미설정 시 기존 기본값(60px/64px/36px) 그대로 유지, 다른 현장 영향 없음
  const spacing = th.ImageSection_spacing;
  // 섹션 자체의 headerPaddingTop이 있으면 테마 공통값보다 우선
  const effectiveHeaderPaddingTop = headerPaddingTop ?? spacing?.headerPaddingTop;
  const spacingStyle = {
    ...(spacing?.sectionPaddingBottom ? { "--section-padding-bottom": spacing.sectionPaddingBottom } : {}),
    ...(effectiveHeaderPaddingTop     ? { "--header-padding-top":     effectiveHeaderPaddingTop }     : {}),
    ...(spacing?.headerPaddingBottom  ? { "--header-padding-bottom":  spacing.headerPaddingBottom }   : {}),
  };

  // 탭/서브탭 활성 버튼 색상 — 미설정 시 기존 CSS 기본값(파란색) 그대로 유지, 다른 현장 영향 없음
  const tabActive = th.ImageSection_tabActive;
  const tabActiveStyle = tabActive
    ? { background: tabActive.background, borderColor: tabActive.borderColor, color: tabActive.color }
    : undefined;
  // 서브탭 활성 색상 — 별도 지정 없으면 탭 활성 색상과 동일하게 유지
  const subTabActive = th.ImageSection_subTabActive ?? tabActive;
  const subTabActiveStyle = subTabActive
    ? { background: subTabActive.background, borderColor: subTabActive.borderColor, color: subTabActive.color }
    : undefined;

  return (
    <section
      id={id}
      className={styles.section}
      style={{ ...(sectionBg ? { background: sectionBg } : {}), ...spacingStyle }}
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
                style={idx === activeTab ? tabActiveStyle : undefined}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeUp>
      )}

      {hasSubTabs && (
        <FadeUp>
          <div className={styles.subTabMenu}>
            {subTabs.map((subTab, idx) => (
              <button
                key={idx}
                type="button"
                className={
                  idx === activeSubTab
                    ? `${styles.subTabButton} ${styles.subTabButtonActive}`
                    : styles.subTabButton
                }
                style={idx === activeSubTab ? subTabActiveStyle : undefined}
                onClick={() => setActiveSubTab(idx)}
              >
                {subTab.label}
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