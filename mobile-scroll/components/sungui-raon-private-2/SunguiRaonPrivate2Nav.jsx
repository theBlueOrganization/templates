"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "입지환경", target: "location" },
  { label: "단지안내", target: "site_plan" },
  { label: "평형안내", target: "floor_plan" },
];

export default function SunguiRaonPrivate2Nav({ logo }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴 열림/닫힘과 상관없이 배경 스크롤을 막지 않는다 — 이전엔 열릴 때 overflow:hidden을
  // 걸었는데, 그때 스크롤바가 사라졌다 나타났다 하며 폭이 미세하게 바뀌는 게 오히려 문제였다.
  // 드롭다운 메뉴 하나 때문에 배경 스크롤을 잠글 필요는 없어 아예 잠그지 않는다.

  const goTo = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`landing-nav${scrolled ? " scrolled" : ""}`} id="landing-nav">
      <div className="nav-inner">
        <button type="button" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          {logo && <img src={logo.src} alt={logo.alt ?? ""} width={logo.width} height={logo.height} />}
        </button>

        <button type="button" className="nav-toggle" aria-label="메뉴" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <a onClick={() => goTo(item.target)} style={{ cursor: "pointer" }}>{item.label}</a>
            </li>
          ))}
          <li>
            <a className="nav-cta" onClick={() => goTo("contact")} style={{ cursor: "pointer" }}>상담신청</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
