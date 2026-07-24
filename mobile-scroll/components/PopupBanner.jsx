"use client";

import { useEffect, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup, popupByUtm }) {
  // popup은 단일 객체(기존 방식) 또는 배열(순차 표시, 여러 개)을 모두 지원
  const basePopups = (Array.isArray(popup) ? popup : popup ? [popup] : []).filter((p) => p?.enabled);
  const baseImages = basePopups.map((p) => p.image ?? null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(baseImages);

  useEffect(() => {
    // popupByUtm에 등록된 utm_source로 들어온 경우에만 팝업 구성을 덮어씀
    // - 배열: 팝업 전체 순서를 교체 (예: 기본 팝업이 없는 현장이라도 특정 유입경로에만 팝업 노출 가능)
    // - 객체: 첫 번째 팝업 이미지만 교체, 나머지는 기존 순서 유지 (기존 단일 팝업 현장과 호환)
    // - null: 팝업 자체를 숨김
    // baseImages가 비어 있어도(기본 팝업 미설정) override는 항상 평가해야 함
    let resolvedImages = baseImages;
    if (popupByUtm) {
      const utm = new URLSearchParams(window.location.search).get("utm_source");
      if (utm && utm in popupByUtm) {
        const override = popupByUtm[utm];
        if (Array.isArray(override)) {
          resolvedImages = override;
        } else if (override === null) {
          resolvedImages = [];
        } else {
          resolvedImages = [override, ...baseImages.slice(1)];
        }
      }
    }
    setImages(resolvedImages);
    if (resolvedImages.length === 0) return;
    // 히어로 settled 시점(2850ms) 직후 팝업 표시
    const t = setTimeout(() => setOpen(true), 2900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentImage = images[index] ?? null;

  useEffect(() => {
    if (open && currentImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, currentImage]);

  if (!open || !currentImage) return null;

  const hasNext = index < images.length - 1;
  const handleClose = () => {
    if (hasNext) {
      setIndex((i) => i + 1);
    } else {
      setOpen(false);
    }
  };

  // 이미지 안에 그려진 버튼 위치(cta.rect, % 기준)를 클릭하면 남은 팝업은 건너뛰고
  // cta.target(예: "#contact-section")으로 바로 스크롤 이동
  const handleCtaClick = (e) => {
    e.stopPropagation();
    setOpen(false);
    const target = document.querySelector(currentImage.cta.target);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtnWrap}>
          {images.length > 1 && (
            <span className={styles.pageIndicator}>{index + 1}/{images.length}</span>
          )}
          <button className={styles.closeBtn} onClick={handleClose} aria-label="팝업 닫기">
            ✕
          </button>
        </div>
        <img
          src={currentImage.src}
          alt={currentImage.alt ?? ""}
          className={styles.img}
        />
        {currentImage.cta && (
          <button
            type="button"
            className={styles.ctaHotspot}
            style={{
              top:    currentImage.cta.rect.top,
              left:   currentImage.cta.rect.left,
              width:  currentImage.cta.rect.width,
              height: currentImage.cta.rect.height,
            }}
            onClick={handleCtaClick}
            aria-label="방문예약 상담 신청 섹션으로 이동"
          />
        )}
      </div>
    </div>
  );
}
