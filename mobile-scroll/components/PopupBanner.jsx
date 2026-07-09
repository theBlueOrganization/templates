"use client";

import { useEffect, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!popup?.enabled) return;
    // 히어로 settled 시점(2850ms) 직후 팝업 표시
    const t = setTimeout(() => setOpen(true), 2900);
    return () => clearTimeout(t);
  }, [popup]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !popup?.image) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtnWrap}>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="팝업 닫기">
            ✕
          </button>
        </div>
        <img
          src={popup.image.src}
          alt={popup.image.alt ?? ""}
          className={styles.img}
        />
      </div>
    </div>
  );
}
