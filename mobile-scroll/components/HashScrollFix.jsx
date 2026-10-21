"use client";

import { useEffect } from "react";

// URL에 #섹션id가 붙어 들어온 경우(예: 관심고객 링크 ?utm_source=관심고객#contact-section),
// 브라우저가 처음 한 번 그 위치로 이동한 뒤 위쪽 이미지(loading="lazy" 포함)가 늦게 로드되면 섹션이 아래로 밀려남 —
// 진입 후 10초 동안 섹션 위치를 주기적으로 확인해 어긋나면 다시 맞춤. 사용자가 직접 스크롤하면 즉시 중단
export default function HashScrollFix() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    if (!document.getElementById(id)) return;

    const align = () => {
      // globals.css의 scroll-behavior: smooth 때문에 150ms마다 부드러운 스크롤을 새로 시작하면 계속 끊겨 멈춤 — 즉시 이동
      // 상담 섹션은 클라이언트에서 다시 렌더되며 DOM 요소가 교체될 수 있어(분리된 요소는 top 0) 매번 새로 조회
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top;
      if (Math.abs(top) > 2) window.scrollTo({ top: window.scrollY + top, behavior: "instant" });
    };
    align();
    const interval = setInterval(align, 150);

    const stop = () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("keydown", stop);
    };
    const timer = setTimeout(stop, 10000);
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("keydown", stop);

    return stop;
  }, []);

  return null;
}
