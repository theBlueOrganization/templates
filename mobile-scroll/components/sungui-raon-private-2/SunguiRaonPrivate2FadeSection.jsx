"use client";

import { useEffect, useRef, useState } from "react";

// section-inner(fade-up 대상) div만 반환 — 바깥 <section> 태그는 호출하는 쪽에서 감싼다
// (contact 섹션처럼 이미 자체 <section>이 있는 경우와 중첩되지 않도록)
export default function SunguiRaonPrivate2FadeSection({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section-inner fade-up${visible ? " visible" : ""}`}>
      {children}
    </div>
  );
}
