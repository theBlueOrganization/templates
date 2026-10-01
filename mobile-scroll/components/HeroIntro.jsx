"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroIntro.module.css";

// hero.intro가 있는 현장만 — 시티오씨엘 9단지(adaptive-landing SignatureHeroOciel) 인트로의 모바일 구조를 재구성.
// 검은 화면에 원 2개가 그려짐 → 로고(+문구) 페이드인 → 원 안에 배경 사진이 차오름 → 원이 화면 전체로 열림 →
// 오버레이가 사라지며 히어로 본편 애니메이션 시작(onDone). SKIP 버튼·스크롤·터치·키 입력으로 즉시 건너뜀.
// intro: { logo?: { src, alt, width, height }, title?: string, clipBg: string }
const INTRO_MS = 6000;
const FADE_MS = 700;

export default function HeroIntro({ intro, onDone }) {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
    onDone?.();
    setTimeout(() => setGone(true), FADE_MS);
  }, [onDone]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    const raf = requestAnimationFrame(() => setOpen(true));
    const timer = setTimeout(finish, INTRO_MS);
    // 인트로 도중 스크롤/터치를 시도하면 기다리게 하지 않고 바로 본편으로
    window.addEventListener("wheel", finish, { passive: true });
    window.addEventListener("touchmove", finish, { passive: true });
    window.addEventListener("keydown", finish);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("wheel", finish);
      window.removeEventListener("touchmove", finish);
      window.removeEventListener("keydown", finish);
    };
  }, [finish]);

  if (gone) return null;

  return (
    <div
      className={[styles.intro, open && styles.open, leaving && styles.leaving].filter(Boolean).join(" ")}
      onClick={finish}
      aria-hidden="true"
    >
      <div className={styles.cirWrap}>
        {[styles.cirA, styles.cirB].map((c) => (
          <div key={c} className={`${styles.cir} ${c}`}>
            <svg viewBox="-1 -1 502 502" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="250" fill="none" stroke="#fff" strokeWidth="1.4" />
            </svg>
          </div>
        ))}
      </div>

      <div className={styles.clip}>
        <span style={{ backgroundImage: `url(${intro.clipBg})` }} />
      </div>

      <div className={styles.logo}>
        {intro.logo && (
          <img src={intro.logo.src} alt={intro.logo.alt ?? ""} width={intro.logo.width} height={intro.logo.height} className={styles.logoImg} />
        )}
        {intro.title && <p className={styles.logoTitle}>{intro.title}</p>}
      </div>

      <button
        type="button"
        className={styles.skipBtn}
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
      >
        SKIP
      </button>
    </div>
  );
}
