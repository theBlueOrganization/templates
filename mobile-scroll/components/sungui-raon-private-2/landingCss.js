// 원본(diling.kr/su-raon) 페이지의 실제 CSS(landing.css, nav_style="white", contact data-theme="gray")를
// 이 현장 색상(--btn-color 초록)에 맞춰 옮겨온 것. 모든 규칙을 .sr2 로 스코프해 다른 현장에 영향 없음.
// 원본에서 쓰지 않는 프리미엄/통계배너/갤러리/비디오 블록 등은 제외.
const landingCss = `
/* 다른 모든 현장은 app/globals.css의 body { max-width:750px } 로 모바일 캔버스 폭을 고정한다.
   이 현장만 PC에서도 실제 데스크톱 폭(1200px 컨테이너)이 보이도록, 이 페이지가 렌더링된
   경우에만(body:has(.sr2)) 그 전역 모바일 폭 제한을 해제한다. 다른 현장의 body 규칙은
   globals.css 그대로이며 이 선택자는 .sr2가 없는 페이지에는 전혀 매치되지 않는다. */
body:has(.sr2) {
  max-width: none;
  box-shadow: none;
  padding-bottom: 0;
  background-color: #ffffff;
}
/* 햄버거 메뉴 열림 시 스크롤바 폭 보정은 SunguiRaonPrivate2Nav.jsx에서 실측한 값으로
   body에 padding-right를 직접 주는 방식으로 처리한다(이 CSS만으로는 body의 실제
   스크롤 컨테이너 여부가 브라우저마다 달라 확실히 보정되지 않아 JS 방식으로 교체). */

/* html의 전역 배경(#e8edf2, 다른 현장의 모바일 캔버스 바깥 여백용 옅은 하늘색)이
   스크롤 바운스 시 살짝 비쳐 보이는 문제 — 이 페이지만 흰색으로 덮는다 */
html:has(.sr2) {
  background-color: #ffffff;
}

.sr2 { font-family: 'Noto Sans KR', sans-serif; color: #333; line-height: 1.7; overflow-x: hidden; }
.sr2 * { box-sizing: border-box; }
.sr2 .hidden { display: none !important; }

.sr2 {
  --btn-color: #89bc54;
  --btn-text-color: #ffffff;
  --title-color: #1a1a2e;
  --dark: #1a1a2e;
  --dark2: #16213e;
  --logo-height-pc: 50px;
  --logo-height-mobile: 40px;
  --header-height: 80px;
}
@media (max-width: 768px) {
  .sr2 { --header-height: 64px; }
}

/* ===== NAV (style-white) ===== */
.sr2 .landing-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow .3s ease;
}
.sr2 .nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}
.sr2 .nav-logo { display: inline-flex; align-items: center; }
.sr2 .nav-logo img {
  height: var(--logo-height-pc);
  display: block;
}
.sr2 .nav-links {
  list-style: none;
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 0; padding: 0;
}
.sr2 .nav-links a {
  position: relative;
  font-size: 17px;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 999px;
  background: transparent;
  transition: background .22s ease, color .22s ease;
  letter-spacing: -.2px;
  white-space: nowrap;
}
.sr2 .nav-links a:hover { background: rgba(0, 0, 0, 0.05); }
.sr2 .nav-cta {
  background: var(--btn-color) !important;
  color: var(--btn-text-color) !important;
  padding: 10px 24px !important;
  border-radius: 999px;
  font-size: 15px !important;
  font-weight: 700 !important;
  letter-spacing: -.2px;
  box-shadow: none !important;
  transition: transform .22s ease, filter .22s ease !important;
}
.sr2 .nav-cta:hover { transform: translateY(-2px); filter: brightness(1.08); }

.sr2 .nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  flex-direction: column;
  gap: 5px;
}
.sr2 .nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #333;
  border-radius: 2px;
}

/* ===== HERO ===== */
.sr2 .landing-hero {
  margin-top: var(--header-height);
  height: calc(100vh - var(--header-height));
  min-height: calc(600px - var(--header-height));
  background-image: var(--hero-bg-pc);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #12203a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
@media (max-width: 768px) {
  .sr2 .landing-hero.hero--has-mobile { background-image: var(--hero-bg-mobile); }
}
.sr2 .hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgba(255,255,255,.75);
  z-index: 3;
}
.sr2 .hero-scroll span { font-size: 10px; letter-spacing: 3px; display: block; margin-bottom: 8px; }
.sr2 .scroll-arrow {
  width: 20px; height: 20px;
  border-right: 2px solid rgba(255,255,255,.6);
  border-bottom: 2px solid rgba(255,255,255,.6);
  transform: rotate(45deg);
  margin: 0 auto;
  animation: sr2BounceDown 2s infinite;
}
@keyframes sr2BounceDown {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: .5; }
  50% { transform: rotate(45deg) translateY(8px); opacity: 1; }
}

/* ===== SECTIONS ===== */
.sr2 .landing-section { padding: 60px 24px; position: relative; overflow: hidden; }
.sr2 .section-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; text-align: center; }

.sr2 .section-header { margin-bottom: 56px; }
.sr2 .section-en {
  display: flex; align-items: center; justify-content: center; gap: 16px;
  font-size: 14px; letter-spacing: 6px; color: var(--btn-color); font-weight: 600;
  margin-bottom: 12px; text-transform: uppercase;
}
.sr2 .section-en::before, .sr2 .section-en::after { content: ''; width: 40px; height: 1px; background: var(--btn-color); opacity: .5; }
.sr2 .section-title {
  font-size: 48px; font-weight: 900; letter-spacing: -1.5px;
  display: inline-block; position: relative; color: var(--title-color);
}
.sr2 .section-title::after {
  content: ''; display: block; width: 60px; height: 4px;
  background: var(--btn-color); margin: 16px auto 0; border-radius: 2px;
}

.sr2 .img-frame { position: relative; display: block; width: 100%; }
.sr2 .section-img { width: 100%; max-width: 100%; display: block; transition: transform .4s ease; }
.sr2 .section-img:hover { transform: scale(1.01); }

.sr2 .section-list { display: flex; flex-direction: column; gap: 30px; text-align: left; }
.sr2 .section-list__subtitle {
  position: relative; display: inline-flex; align-items: center;
  margin: 0 0 18px; padding: 0 0 0 14px; color: var(--dark);
  font-size: clamp(18px, 1.5vw, 24px); font-weight: 700; line-height: 1.25;
  border-left: 4px solid #000;
}
.sr2 .section-list__item img { width: 100%; display: block; }

/* ===== FLOOR TABS ===== */
.sr2 .floor-tabs {
  display: flex; justify-content: stretch; gap: 0; margin-bottom: 36px; flex-wrap: nowrap;
  width: min(100%, 1640px); background: #f4f4f4; border-radius: 18px; overflow: hidden;
}
.sr2 .floor-tab {
  flex: 1 1 0; min-width: 0; min-height: 40px; padding: 5px 10px; border: 0;
  border-right: 1px solid #e8e8e8; background: transparent; cursor: pointer;
  font-size: clamp(14px, 1.25vw, 18px); font-weight: 500; transition: all .25s; color: #9da3af;
}
.sr2 .floor-tab:last-child { border-right: 0; }
.sr2 .floor-tab:hover { color: #5f6672; background: rgba(0, 0, 0, .02); }
.sr2 .floor-tab.active { background: var(--btn-color); color: var(--btn-text-color); }
.sr2 .floor-images { text-align: center; position: relative; margin-top: 28px; }
.sr2 .floor-image { display: block; width: 100%; max-width: 100%; }
.sr2 .floor-image img { width: 100%; display: block; }

/* ===== CONTACT (gray theme) ===== */
.sr2 #contact { background: #f5f5f5; position: relative; overflow: hidden; }
.sr2 #contact .section-title { color: #333; }
.sr2 .contact-desc { text-align: center; color: #666; font-size: 14px; margin-bottom: 32px; line-height: 1.6; }
.sr2 .contact-form {
  max-width: 520px; margin: 0 auto; padding: 48px 36px 40px;
  background: rgba(255,255,255,.85); border: 1px solid rgba(0,0,0,.06);
  border-radius: 20px; position: relative; z-index: 1;
}
.sr2 .form-group { margin-bottom: 18px; }
.sr2 .form-group input[type="text"],
.sr2 .form-group input[type="tel"],
.sr2 .form-group input[type="date"],
.sr2 .visit-date-trigger {
  width: 100%; padding: 16px 20px; border: 1px solid #e0e0e0; border-radius: 10px;
  background: #ffffff; color: #333; font-size: 15px; font-family: inherit;
  transition: border-color .2s, box-shadow .2s; text-align: left; cursor: pointer;
}
.sr2 .form-group input::placeholder { color: #999; }
.sr2 .form-group input:focus, .sr2 .visit-date-trigger:focus {
  outline: none; border-color: var(--btn-color); box-shadow: 0 0 0 3px rgba(137,188,84,.18);
}
.sr2 .visit-datetime-group { margin-bottom: 18px; text-align: left; }
.sr2 .visit-datetime-label { display: block; font-size: 13px; margin-bottom: 8px; color: #888; font-weight: 400; }

/* 방문 날짜/시간 모달 — 뒤에 어두운 배경이 보이는 팝업형 카드로 표시 */
.sr2 .visit-modal { position: fixed; inset: 0; z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 20px; }
.sr2 .visit-modal__overlay { position: fixed; inset: 0; background: rgba(0,0,0,.55); }
.sr2 .visit-modal__panel {
  position: relative; z-index: 2; width: 100%; max-width: 480px; background: #fff; border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0,0,0,.4); overflow-y: auto; max-height: 88vh; color: #333;
}
.sr2 .visit-modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 28px; border-bottom: 1px solid #eee;
}
.sr2 .visit-modal__header h3 { margin: 0; font-size: 18px; font-weight: 600; }
.sr2 .visit-modal__close { background: none; border: none; font-size: 28px; line-height: 1; color: #888; cursor: pointer; }
.sr2 .visit-modal__body { padding: 20px 28px; }
/* 달력 그리드 */
.sr2 .visit-calendar { margin-bottom: 8px; }
.sr2 .visit-calendar__header {
  display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 12px;
}
.sr2 .visit-calendar__nav {
  width: 32px; height: 32px; border: none; background: none; font-size: 18px; color: #555;
  cursor: pointer; border-radius: 50%; transition: background-color .15s;
}
.sr2 .visit-calendar__nav:hover:not(:disabled) { background: #f2f2f2; }
.sr2 .visit-calendar__nav:disabled { color: #ccc; cursor: not-allowed; }
.sr2 .visit-calendar__month-select {
  border: 1px solid #e5e5e5; border-radius: 6px; padding: 4px 10px; font-size: 15px;
  font-weight: 600; color: #1a1a2e; background: #fff; cursor: pointer;
}
.sr2 .visit-calendar__year { font-size: 15px; font-weight: 600; color: #1a1a2e; }
.sr2 .visit-calendar__weekdays, .sr2 .visit-calendar__days {
  display: grid; grid-template-columns: repeat(7, 1fr);
}
.sr2 .visit-calendar__weekdays span {
  text-align: center; font-size: 13px; color: #999; font-weight: 600; padding-bottom: 8px;
}
.sr2 .visit-calendar__day {
  display: flex; align-items: center; justify-content: center;
  height: 40px; border: none; background: none; border-radius: 50%;
  font-size: 14px; color: #333; cursor: pointer; transition: background-color .15s, color .15s;
}
.sr2 .visit-calendar__day:hover:not(:disabled):not(.is-selected) { background: #f2f2f2; }
.sr2 .visit-calendar__day.is-adjacent { color: #ccc; cursor: default; }
.sr2 .visit-calendar__day.is-disabled { color: #ccc; cursor: not-allowed; }
.sr2 .visit-calendar__day.is-selected { background: var(--btn-color); color: var(--btn-text-color); font-weight: 700; }
.sr2 .visit-date-preview { margin: 4px 0 18px; font-size: 14px; color: var(--btn-color); font-weight: 600; text-align: center; }
.sr2 .visit-time-section { margin-top: 8px; }
.sr2 .visit-time-title { margin: 12px 0 8px; font-size: 14px; color: #666; font-weight: 500; }
.sr2 .visit-time-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.sr2 .visit-time-btn {
  padding: 10px 6px; background: #fafafa; border: 1px solid #eee; border-radius: 8px;
  font-size: 13px; color: #444; cursor: pointer; transition: all .15s;
}
.sr2 .visit-time-btn:hover { border-color: var(--btn-color); color: var(--btn-color); }
.sr2 .visit-time-btn.is-selected { background: var(--btn-color); color: var(--btn-text-color); border-color: var(--btn-color); }
.sr2 .visit-modal__footer { display: flex; gap: 12px; padding: 18px 28px; border-top: 1px solid #eee; }
.sr2 .visit-modal__confirm, .sr2 .visit-modal__cancel {
  flex: 1; padding: 14px; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; border: none;
}
.sr2 .visit-modal__confirm { background: var(--btn-color); color: var(--btn-text-color); }
.sr2 .visit-modal__cancel { background: #f5f5f5; color: #555; }
@media (max-width: 768px) {
  .sr2 .visit-time-grid { grid-template-columns: repeat(3, 1fr); }
}

.sr2 .form-check { margin-top: 24px; margin-bottom: 4px; }
.sr2 .privacy-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.sr2 .check-label { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #555; cursor: pointer; }
.sr2 .check-label input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--btn-color); cursor: pointer; flex-shrink: 0; }
.sr2 .privacy-toggle {
  background: none; border: 1px solid #bbb; color: #777; font-size: 12px; cursor: pointer;
  padding: 4px 12px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; transition: all .2s;
}
.sr2 .privacy-toggle:hover { border-color: #888; color: #333; }
.sr2 .privacy-toggle.is-open { background: var(--btn-color) !important; border-color: var(--btn-color) !important; color: var(--btn-text-color) !important; }
.sr2 .privacy-detail {
  margin-top: 12px; padding: 16px 20px; background: rgba(0,0,0,.04); border: 1px solid rgba(0,0,0,.08);
  border-radius: 10px; font-size: 13px; color: #555; line-height: 1.9; text-align: left;
}
.sr2 .form-submit {
  width: 100%; padding: 18px; background: var(--btn-color); color: var(--btn-text-color);
  border: none; border-radius: 10px; font-size: 17px; font-weight: 700; cursor: pointer;
  transition: transform .2s, filter .2s; margin-top: 20px;
}
.sr2 .form-submit:hover { transform: translateY(-1px); filter: brightness(0.95); }
.sr2 .form-submit:disabled { background: #999; cursor: not-allowed; transform: none; }
.sr2 .contact-inquiry-badge {
  margin-top: 14px; text-align: center; font-size: 14px; font-weight: 600; color: #4a7a2a;
  background: #e6f4d7; border: 1px solid #cde8ae; border-radius: 999px; padding: 10px 16px;
}
.sr2 .contact-inquiry-badge strong { color: #3d6621; }

@media (max-width: 768px) {
  .sr2 .nav-toggle { display: flex; }
  .sr2 .nav-logo img { height: var(--logo-height-mobile); }
  .sr2 .nav-links {
    display: none; position: absolute; top: var(--header-height); left: 0; right: 0;
    background: #ffffff; flex-direction: column; padding: 20px; gap: 0;
    box-shadow: 0 12px 32px rgba(0,0,0,.12); border-radius: 0 0 18px 18px;
  }
  .sr2 .nav-links.open { display: flex; }
  .sr2 .nav-links a { color: #1a1a2e !important; padding: 12px 0; display: block; }
  .sr2 .nav-links a.nav-cta { color: var(--btn-text-color) !important; text-align: center; margin-top: 8px; border-radius: 999px; }

  .sr2 .landing-section { padding: 40px 16px; }
  .sr2 .section-inner .img-frame,
  .sr2 .section-inner .floor-images,
  .sr2 .section-inner .section-list__item img {
    margin-left: -32px; margin-right: -32px;
    width: calc(100% + 64px); max-width: calc(100% + 64px);
  }
  .sr2 .section-title { font-size: 32px; }
  .sr2 .section-header { margin-bottom: 36px; }
  .sr2 .section-en { font-size: 12px; letter-spacing: 4px; }
  .sr2 .section-en::before, .sr2 .section-en::after { width: 24px; }

  .sr2 .floor-tabs { border-radius: 14px; margin-bottom: 24px; }
  .sr2 .floor-tab { min-height: 28px; padding: 2px 5px; font-size: 11px; line-height: 1.2; }

  .sr2 .contact-form { padding: 32px 20px 28px; }
  .sr2 .contact-desc { font-size: 13px; margin-bottom: 24px; }
  .sr2 .privacy-row { flex-wrap: nowrap; gap: 6px; }
  .sr2 .check-label { font-size: 12.5px; flex: 1 1 auto; min-width: 0; line-height: 1.3; gap: 6px; }
  .sr2 .check-label span { white-space: normal; overflow-wrap: break-word; }
  .sr2 .privacy-toggle { padding: 4px 8px; font-size: 11px; border-radius: 14px; }
}

/* ===== FADE UP ===== */
.sr2 .fade-up { opacity: 0; transform: translateY(40px); transition: opacity .7s ease-out, transform .7s ease-out; }
.sr2 .fade-up.visible { opacity: 1; transform: translateY(0); }

/* ===== FOOTER (자체 회사 정보로 교체) ===== */
.sr2 .landing-footer {
  text-align: center; padding: 0;
  background: #2A3746;
  color: rgba(255,255,255,.85);
}
.sr2 .footer-accent-line { height: 2px; background: linear-gradient(90deg, transparent 0%, var(--btn-color) 50%, transparent 100%); }
.sr2 .footer-inner { padding: 40px 24px 28px; }
.sr2 .footer-brand { font-size: 15px; font-weight: 800; color: inherit; opacity: .85; letter-spacing: 2px; margin-bottom: 10px; }
.sr2 .footer-info { font-size: 13px; color: inherit; opacity: .55; margin-bottom: 8px; line-height: 1.8; }
.sr2 .footer-lead-contact { font-size: 22px; font-weight: 700; opacity: .95; }
.sr2 .footer-copy { font-size: 12px; opacity: .45; }
@media (max-width: 768px) { .sr2 .landing-footer { padding-bottom: 76px; } }

/* ===== CTA FLOATING ===== */
.sr2 .cta-floating { position: fixed; z-index: 1500; }
@media (min-width: 769px) {
  .sr2 .cta-floating { right: 24px; bottom: 30px; display: flex; flex-direction: column; gap: 14px; }
  .sr2 .cta-floating__btn {
    width: 82px; height: 82px; border-radius: 50%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 5px; text-decoration: none; font-weight: 800;
    font-size: 14px; line-height: 1.25; text-align: center; box-shadow: 0 8px 28px rgba(0,0,0,.25);
    transition: transform .2s, box-shadow .2s; background: var(--btn-color); color: var(--btn-text-color); border: none; cursor: pointer;
  }
  .sr2 .cta-floating__icon svg { width: 18px; height: 18px; display: block; stroke-width: 2.2; }
  .sr2 .cta-floating__btn:hover { transform: translateY(-3px) scale(1.06); box-shadow: 0 12px 32px rgba(0,0,0,.35); filter: brightness(0.95); }
}
@media (max-width: 768px) {
  .sr2 .cta-floating { left: 0; right: 0; bottom: 0; display: flex; box-shadow: 0 -6px 18px rgba(0,0,0,.22); }
  .sr2 .cta-floating__btn {
    flex: 1; padding: 8px 6px; min-height: 60px; display: flex; flex-direction: row; align-items: center;
    justify-content: center; gap: 8px; text-decoration: none; font-weight: 700; font-size: 16px; line-height: 1.1;
    border: none; background: var(--btn-color); color: var(--btn-text-color); cursor: pointer;
  }
  .sr2 .cta-floating__icon svg { width: 20px; height: 20px; display: block; stroke-width: 2.4; }
}

/* ===== 방문예약 사은품 팝업 ===== */
.sr2 .rsv-popup-overlay {
  position: fixed; z-index: 2500; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.6); animation: sr2PopupFadeIn .3s; padding: 1rem;
}
.sr2 .rsv-popup-card {
  position: relative; width: 100%; max-width: 420px; max-height: 92vh; overflow-y: auto;
  background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,.4);
}
.sr2 .rsv-popup-header {
  background: linear-gradient(160deg, #16283f 0%, #0f1c2e 100%);
  padding: 12px 24px 10px; text-align: center; color: #fff;
}
.sr2 .rsv-popup-brand {
  display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 4px; opacity: .85;
}
.sr2 .rsv-popup-shield { width: 14px; height: 14px; color: var(--btn-color); }
.sr2 .rsv-popup-shield svg { width: 100%; height: 100%; }
.sr2 .rsv-popup-brand-word { font-size: 10px; letter-spacing: 2px; font-weight: 600; }
.sr2 .rsv-popup-title { margin: 0; font-size: 21px; font-weight: 800; letter-spacing: -0.02em; }
/* 이미지를 자르지 않고 원본 비율 그대로 카드 폭에 맞춰 전체가 보이게 표시 */
.sr2 .rsv-popup-image-wrap { line-height: 0; background: #0f1c2e; }
.sr2 .rsv-popup-image-wrap img { width: 100%; height: auto; display: block; }
.sr2 .rsv-popup-target {
  display: flex; align-items: center; gap: 8px; padding: 14px 16px; background: #fff;
  border-bottom: 1px solid #f0f0f0; color: #444;
}
.sr2 .rsv-popup-target-tag {
  flex-shrink: 0; background: var(--btn-color); color: var(--btn-text-color);
  font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px;
}
/* 한 줄 고정 — 좁은 화면에서도 줄바꿈 없이 폰트 크기를 자동으로 줄여서 맞춘다 */
.sr2 .rsv-popup-target-text {
  flex: 1; min-width: 0; white-space: nowrap;
  font-size: clamp(10px, 3.2vw, 13px); letter-spacing: -0.2px;
}
.sr2 .rsv-popup-target-text em { font-style: normal; color: #d9455f; font-weight: 700; }
.sr2 .rsv-popup-form { padding: 20px 24px 12px; }
.sr2 .rsv-popup-label { display: block; font-size: 15px; font-weight: 700; color: #222; margin: 14px 0 8px; }
.sr2 .rsv-popup-label:first-child { margin-top: 0; }
.sr2 .rsv-popup-input {
  width: 100%; padding: 14px 16px; border: 1px solid #e2e2e2; border-radius: 8px;
  background: #f7f7f7; font-size: 15px; font-family: inherit;
}
.sr2 .rsv-popup-input:focus { outline: none; border-color: var(--btn-color); background: #fff; }
.sr2 .rsv-popup-date-trigger { text-align: left; color: #222; cursor: pointer; }
.sr2 .rsv-popup-tel-row { display: flex; gap: 8px; }
.sr2 .rsv-popup-tel-input {
  flex: 1; min-width: 0; width: 0; padding: 14px 8px; border: 1px solid #e2e2e2; border-radius: 8px;
  background: #f7f7f7; font-size: 15px; font-family: inherit; text-align: center;
}
.sr2 .rsv-popup-tel-input:focus { outline: none; border-color: var(--btn-color); background: #fff; }
.sr2 .rsv-popup-privacy-row {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  margin-top: 18px; padding-top: 14px; border-top: 1px solid #eee;
}
.sr2 .rsv-popup-check { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #444; cursor: pointer; }
.sr2 .rsv-popup-check input { width: 18px; height: 18px; accent-color: var(--btn-color); cursor: pointer; }
.sr2 .rsv-popup-privacy-view {
  flex-shrink: 0; background: #222; color: #fff; border: none; border-radius: 6px;
  font-size: 12px; font-weight: 600; padding: 6px 12px; cursor: pointer;
}
.sr2 .rsv-popup-privacy-detail {
  margin-top: 10px; padding: 14px 16px; background: #f7f7f7; border-radius: 8px;
  font-size: 12px; color: #666; line-height: 1.8; text-align: left; max-height: 160px; overflow-y: auto;
}
.sr2 .rsv-popup-submit {
  width: 100%; margin: 16px 0; padding: 16px; border: none; border-radius: 8px;
  background: var(--btn-color); color: var(--btn-text-color); font-size: 17px; font-weight: 800; cursor: pointer;
  transition: filter .15s;
}
.sr2 .rsv-popup-submit:hover:not(:disabled) { filter: brightness(0.95); }
.sr2 .rsv-popup-submit:disabled { background: #aaa; cursor: not-allowed; }
.sr2 .rsv-popup-close-bar {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 12px 20px; background: #8b93a1; color: #fff;
}
.sr2 .rsv-popup-hide-today { display: flex; align-items: center; gap: 6px; font-size: 12px; cursor: pointer; }
.sr2 .rsv-popup-hide-today input { width: 14px; height: 14px; cursor: pointer; }
.sr2 .rsv-popup-close-bar button {
  margin-left: auto; background: none; border: none; color: #fff; font-size: 14px; font-weight: 600; cursor: pointer;
}
@keyframes sr2PopupFadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

export default landingCss;
