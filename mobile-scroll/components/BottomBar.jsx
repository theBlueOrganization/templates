"use client";

import { useState, useEffect } from "react";
import styles from "./BottomBar.module.css";

// theme.BottomBar_lineIcons: true — 이모지(📞/❤️) 대신 버튼 글자색(currentColor)을 따르는 선 아이콘 사용
// (현장 색상 통일 시 이모지의 분홍/빨강을 피하기 위함, 미설정 시 기존 이모지 그대로)
const PhoneIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const HeartIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

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
          {th.BottomBar_lineIcons && <PhoneIcon />}
          {th.BottomBar_callBtn?.label ?? (th.BottomBar_lineIcons ? "전화상담 연결" : "📞 전화상담 연결")}
        </button>
        <button
          className={styles.btnReg}
          onClick={scrollToContact}
          style={{ background: th.BottomBar_regBtn?.background, color: th.BottomBar_regBtn?.color }}
        >
          {th.BottomBar_lineIcons && <HeartIcon />}
          {th.BottomBar_regBtn?.label ?? (th.BottomBar_lineIcons ? "관심고객 등록" : "❤️ 관심고객 등록")}
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