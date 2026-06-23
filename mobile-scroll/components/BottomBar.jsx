"use client";

import { useState, useEffect } from "react";
import styles from "./BottomBar.module.css";

export default function BottomBar({ telNumber, theme }) {
  const th = theme ?? {};
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCall = () => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      window.location.href = `tel:${telNumber}`;
    } else {
      setModalOpen(true);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${styles.bar} ${visible ? styles.visible : ""}`}
        role="navigation"
        aria-label="빠른 실행 메뉴"
      >
        <button
          className={styles.btnCall}
          onClick={handleCall}
          style={{ background: th.BottomBar_callBtn?.background, color: th.BottomBar_callBtn?.color }}
        >
          📞 전화상담 연결
        </button>
        <button
          className={styles.btnReg}
          onClick={scrollToContact}
          style={{ background: th.BottomBar_regBtn?.background, color: th.BottomBar_regBtn?.color }}
        >
          ❤️ 관심고객 등록
        </button>
      </div>

      <div
        className={`${styles.overlay} ${modalOpen ? styles.active : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="전화 연결 안내"
        onClick={() => setModalOpen(false)}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <p className={styles.modalHeader}>📞 전화 연결 안내</p>
          <p className={styles.modalBody}>
            안내데스크 대표번호는 <br />
            <strong className={styles.telNum}>{telNumber}</strong> 입니다.
          </p>
          <p className={styles.modalSub}>
            모바일 기기로 접속하시면
            <br />
            바로 전화 연결이 가능합니다.
          </p>
          <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
            확인
          </button>
        </div>
      </div>
    </>
  );
}