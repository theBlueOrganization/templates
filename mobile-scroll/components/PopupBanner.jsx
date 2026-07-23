"use client";

import { useEffect, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup, popupByUtm }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(popup?.image ?? null);

  useEffect(() => {
    if (!popup?.enabled) return;
    // popupByUtm에 등록된 utm_source로 들어온 경우에만 팝업 이미지를 덮어씀 (null이면 팝업 자체를 숨김)
    if (popupByUtm) {
      const utm = new URLSearchParams(window.location.search).get("utm_source");
      if (utm && utm in popupByUtm) setImage(popupByUtm[utm]);
    }
    // 히어로 settled 시점(2850ms) 직후 팝업 표시
    const t = setTimeout(() => setOpen(true), 2900);
    return () => clearTimeout(t);
  }, [popup, popupByUtm]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !image) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtnWrap}>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="팝업 닫기">
            ✕
          </button>
        </div>
        <img
          src={image.src}
          alt={image.alt ?? ""}
          className={styles.img}
        />
      </div>
    </div>
  );
}
