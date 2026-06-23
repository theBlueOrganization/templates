"use client";

import { useState, useEffect } from "react";
import styles from "./TopNav.module.css";

export default function TopNav({ navItems }) {
  const [visible, setVisible] = useState(false);
  const [activeTarget, setActiveTarget] = useState(navItems[0]?.target ?? "");

  // 스크롤 50px 초과 시 네비게이션 노출
  useEffect(() => {
    let isNavVisible = false; // 현재 상태를 메모리에 기록

    const onScroll = () => {
      const shouldShow = window.scrollY > 50;
      // 상태가 실제로 바뀔 때만 단 한 번 리액트 State를 변경합니다.
      if (shouldShow !== isNavVisible) {
        isNavVisible = shouldShow;
        setVisible(shouldShow);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver 로 현재 섹션 추적
  useEffect(() => {
    const targets = navItems.map((n) => document.getElementById(n.target)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTarget(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -75% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => targets.forEach((el) => observer.unobserve(el));
  }, [navItems]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${visible ? styles.show : ""}`} aria-label="페이지 내 탐색">
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.target}>
            <button
              className={`${styles.link} ${activeTarget === item.target ? styles.active : ""}`}
              onClick={() => scrollTo(item.target)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
