"use client";

import { useEffect, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup, popupByUtm }) {
  // popup은 단일 객체(기존 방식) 또는 배열(순차 표시, 여러 개)을 모두 지원
  const popups = (Array.isArray(popup) ? popup : popup ? [popup] : []).filter((p) => p?.enabled);
  const images = popups.map((p) => p.image ?? null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  // overrideImage: undefined = 미적용, null = 명시적으로 숨김, 객체 = 교체 이미지
  const [overrideImage, setOverrideImage] = useState(undefined);
  const [overrideApplied, setOverrideApplied] = useState(false);

  useEffect(() => {
    if (popups.length === 0) return;
    // popupByUtm은 첫 번째 팝업에만 적용 (기존 단일 팝업 현장과 호환)
    // 값이 null이어도 "이 유입경로는 팝업 숨김"이라는 의도이므로 override 여부 자체를 별도로 추적
    if (popupByUtm) {
      const utm = new URLSearchParams(window.location.search).get("utm_source");
      if (utm && utm in popupByUtm) {
        setOverrideImage(popupByUtm[utm]);
        setOverrideApplied(true);
      }
    }
    // 히어로 settled 시점(2850ms) 직후 팝업 표시
    const t = setTimeout(() => setOpen(true), 2900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentImage = index === 0 && overrideApplied ? overrideImage : images[index];

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
      </div>
    </div>
  );
}
