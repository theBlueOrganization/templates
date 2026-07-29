"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup, popupByUtm }) {
  // popup은 단일 객체(기존 방식) 또는 배열(순차 표시, 여러 개)을 모두 지원
  const basePopups = (Array.isArray(popup) ? popup : popup ? [popup] : []).filter((p) => p?.enabled);
  const baseImages = basePopups.map((p) => p.image ?? null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(baseImages);
  const scrollYRef = useRef(0);
  // CTA로 닫힌 경우, 잠금 해제 직후 이동할 대상(잠금 해제 전 스크롤은 씹힘) — 일반 닫기는 null 유지
  const pendingScrollTargetRef = useRef(null);

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

  // overflow: hidden만으로는 iOS Safari/카카오톡 인앱 브라우저에서 배경이 그대로 스크롤되는
  // 경우가 있어, body를 현재 스크롤 위치에서 position: fixed로 고정하고 닫힐 때 복원함.
  // currentImage가 아닌 open에만 반응 — 순차 팝업(다음 페이지) 넘김 중에는 잠금을 유지·유지된 채로 둠
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    scrollYRef.current = scrollY;
    const prevStyle = {
      position: document.body.style.position,
      top:      document.body.style.top,
      left:     document.body.style.left,
      right:    document.body.style.right,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = prevStyle.position;
      document.body.style.top = prevStyle.top;
      document.body.style.left = prevStyle.left;
      document.body.style.right = prevStyle.right;
      document.body.style.overflow = prevStyle.overflow;

      const ctaTarget = pendingScrollTargetRef.current;
      pendingScrollTargetRef.current = null;
      if (ctaTarget) {
        // 잠금이 풀리기 전엔 scrollIntoView가 무시되므로, 스타일 복원 다음 프레임에 이동
        requestAnimationFrame(() => ctaTarget.scrollIntoView({ behavior: "smooth" }));
      } else {
        window.scrollTo(0, scrollYRef.current);
      }
    };
  }, [open]);

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
  // target/rect가 둘 다 있을 때만 유효한 설정으로 취급 (부분 설정은 무시)
  const cta = currentImage.cta?.target && currentImage.cta?.rect ? currentImage.cta : null;
  const handleCtaClick = (e) => {
    if (!cta) return;
    e.stopPropagation();
    // 잠금이 아직 걸린 상태라 지금 scrollIntoView를 호출해도 씹힘 — 잠금 해제 시점에 이동하도록 예약
    pendingScrollTargetRef.current = document.querySelector(cta.target);
    setOpen(false);
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
        {cta && (
          <button
            type="button"
            className={styles.ctaHotspot}
            style={{
              top:    cta.rect.top,
              left:   cta.rect.left,
              width:  cta.rect.width,
              height: cta.rect.height,
            }}
            onClick={handleCtaClick}
            aria-label="방문예약 상담 신청 섹션으로 이동"
          />
        )}
      </div>
    </div>
  );
}
