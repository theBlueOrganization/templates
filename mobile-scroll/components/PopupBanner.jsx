"use client";

import { useEffect, useState } from "react";
import styles from "./PopupBanner.module.css";

export default function PopupBanner({ popup }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!popup?.enabled) return;

    const hero = document.getElementById("home");
    if (!hero) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wasVisible = true;
        } else if (wasVisible) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
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
        <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="팝업 닫기">
          ✕
        </button>
        <img
          src={popup.image.src}
          alt={popup.image.alt ?? ""}
          className={styles.img}
        />
      </div>
    </div>
  );
}
