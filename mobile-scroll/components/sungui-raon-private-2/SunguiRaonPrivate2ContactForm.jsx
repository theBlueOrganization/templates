"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SunguiRaonPrivate2FadeSection from "./SunguiRaonPrivate2FadeSection";

const MORNING_TIMES = ["10:00", "10:30", "11:00", "11:30"];
const AFTERNOON_TIMES = ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00"];
const WEEKDAY_KO = ["일", "월", "화", "수", "목", "금", "토"];

const pad2 = (n) => String(n).padStart(2, "0");
const toISO = (y, m, d) => `${y}-${pad2(m)}-${pad2(d)}`;
const daysInMonth = (y, m) => new Date(y, m, 0).getDate();

// "2026-08-15" → "2026년 8월 15일(토)" — 원본과 달리 브라우저 기본 date input이 그대로
// 노출하던 ISO 형식을 한국어 날짜 표기로 바꿔 보여준다
function formatDateKo(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const weekday = WEEKDAY_KO[new Date(y, m - 1, d).getDay()];
  return `${y}년 ${m}월 ${d}일(${weekday})`;
}

// 이전 달/다음 달의 넘치는 날짜(회색, 클릭 불가)까지 포함해 7의 배수로 맞춘 달력 셀 배열 생성
function buildCalendarCells(year, month) {
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const total = daysInMonth(year, month);
  const prevTotal = daysInMonth(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1);

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: prevTotal - firstWeekday + 1 + i, current: false });
  }
  for (let d = 1; d <= total; d++) {
    cells.push({ day: d, current: true });
  }
  let next = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ day: next++, current: false });
  }
  return cells;
}

// 네이티브 <input type="date">는 브라우저/OS에 따라 표기 형식이 제각각이라(영문 mm/dd/yyyy 등),
// flatpickr류 달력 그리드를 직접 구현해 항상 동일한 한국어 달력 UI로 고정한다.
function VisitCalendar({ value, onChange }) {
  const today = new Date();
  const todayY = today.getFullYear();
  const todayM = today.getMonth() + 1;
  const todayD = today.getDate();

  const [vy, vm, vd] = (value || "").split("-").map(Number);
  const [viewYear, setViewYear] = useState(vy || todayY);
  const [viewMonth, setViewMonth] = useState(vm || todayM);

  const isPast = (y, m, d) => y < todayY || (y === todayY && m < todayM) || (y === todayY && m === todayM && d < todayD);

  const goPrevMonth = () => {
    if (viewMonth === 1) { setViewYear(viewYear - 1); setViewMonth(12); } else { setViewMonth(viewMonth - 1); }
  };
  const goNextMonth = () => {
    if (viewMonth === 12) { setViewYear(viewYear + 1); setViewMonth(1); } else { setViewMonth(viewMonth + 1); }
  };

  // 월 선택은 1~12월 전부 열어두고, 실제로 지난 날짜만 개별 날짜 칸에서 선택 못 하게 막는다
  // (지난달로 이동해서 둘러보는 것 자체는 막지 않고, 지난 날짜 클릭만 방지)
  const monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  const cells = buildCalendarCells(viewYear, viewMonth);

  return (
    <div className="visit-calendar">
      <div className="visit-calendar__header">
        <button type="button" className="visit-calendar__nav" onClick={goPrevMonth} aria-label="이전 달">‹</button>
        <select
          className="visit-calendar__month-select"
          value={viewMonth}
          onChange={(e) => setViewMonth(Number(e.target.value))}
        >
          {monthOptions.map((m) => <option key={m} value={m}>{m}월</option>)}
        </select>
        <span className="visit-calendar__year">{viewYear}</span>
        <button type="button" className="visit-calendar__nav" onClick={goNextMonth} aria-label="다음 달">›</button>
      </div>

      <div className="visit-calendar__weekdays">
        {WEEKDAY_KO.map((w) => <span key={w}>{w}</span>)}
      </div>

      <div className="visit-calendar__days">
        {cells.map((cell, idx) => {
          if (!cell.current) {
            return <span key={idx} className="visit-calendar__day is-adjacent">{cell.day}</span>;
          }
          const disabled = isPast(viewYear, viewMonth, cell.day);
          const selected = vy === viewYear && vm === viewMonth && vd === cell.day;
          return (
            <button
              key={idx}
              type="button"
              className={`visit-calendar__day${disabled ? " is-disabled" : ""}${selected ? " is-selected" : ""}`}
              disabled={disabled}
              onClick={() => onChange(toISO(viewYear, viewMonth, cell.day))}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function VisitModal({ initialDate, initialTime, onConfirm, onClose }) {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  // .fade-up(부모 섹션의 스크롤 등장 애니메이션)에 걸린 transform 때문에 이 모달이 그 섹션의
  // 좌표계 안에 갇혀 배경이 화면 전체가 아니라 섹션 영역만 어두워지는 문제가 있었다.
  // document.body로 포털링해 진짜 뷰포트 기준 전체화면 배경이 되도록 한다.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const modal = (
    <div className="visit-modal is-open">
      <div className="visit-modal__overlay" onClick={onClose} />
      <div className="visit-modal__panel" role="dialog" aria-label="날짜/시간 선택">
        <header className="visit-modal__header">
          <h3>날짜/시간 선택</h3>
          <button type="button" className="visit-modal__close" onClick={onClose} aria-label="닫기">×</button>
        </header>
        <div className="visit-modal__body">
          <VisitCalendar value={date} onChange={setDate} />
          {date && <p className="visit-date-preview">{formatDateKo(date)}</p>}
          <section className="visit-time-section">
            <h4 className="visit-time-title">오전</h4>
            <div className="visit-time-grid">
              {MORNING_TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`visit-time-btn${time === `오전 ${t}` ? " is-selected" : ""}`}
                  onClick={() => setTime(`오전 ${t}`)}
                >
                  {t}
                </button>
              ))}
            </div>
            <h4 className="visit-time-title">오후</h4>
            <div className="visit-time-grid">
              {AFTERNOON_TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`visit-time-btn${time === `오후 ${t}` ? " is-selected" : ""}`}
                  onClick={() => setTime(`오후 ${t}`)}
                >
                  {t}
                </button>
              ))}
            </div>
          </section>
        </div>
        <footer className="visit-modal__footer">
          <button type="button" className="visit-modal__confirm" onClick={() => onConfirm({ date, time })}>확인</button>
          <button type="button" className="visit-modal__cancel" onClick={onClose}>취소</button>
        </footer>
      </div>
    </div>
  );

  if (!mounted) return null;
  // .sr2 래퍼 자체로 포털링 — document.body로 바로 보내면 ".sr2 .visit-modal" 스코프 CSS가
  // 안 먹으므로, transform이 없는 .sr2 최상위(자식 .fade-up만 transform이 걸려 있음)를 타깃으로 삼는다
  const portalTarget = document.querySelector(".sr2") ?? document.body;
  return createPortal(modal, portalTarget);
}

export default function SunguiRaonPrivate2ContactForm({ projectName, adminPhones, sheetId, sheetTab, slug, privacyText }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(null);
  const [utmSource, setUtmSource] = useState("미확인");

  useEffect(() => {
    const params = new URLSearchParams({ sheetTab });
    if (sheetId) params.set("sheetId", sheetId);
    fetch(`/api/count?${params}`)
      .then((r) => r.json())
      .then((d) => setInquiryCount(d.count + 20))
      .catch(() => setInquiryCount(20));
  }, [sheetTab, sheetId]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") ?? "미확인");
  }, []);

  const visitLabel = visitDate ? `${formatDateKo(visitDate)}${visitTime ? ` · ${visitTime}` : ""}` : "날짜/시간 선택";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAgree) { alert("개인정보 수집·이용에 동의해 주세요."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone,
          visit_date: visitDate, visit_time: visitTime,
          privacy_agree: privacyAgree,
          projectName,
          adminPhones,
          sheetId,
          sheetTab,
          utmSource,
          slug,
          officeLabel: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다.");
        setInquiryCount((prev) => (prev ?? 20) + 1);
        setName(""); setPhone(""); setVisitDate(""); setVisitTime(""); setPrivacyAgree(false);
      } else {
        alert(data.message ?? "오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch {
      alert("전송에 실패했습니다. 네트워크 상태를 확인해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="landing-section landing-section--contact" id="contact" data-theme="gray">
      <SunguiRaonPrivate2FadeSection>
        <div className="section-header">
          <span className="section-en">CONTACT</span>
          <h2 className="section-title">상담신청</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input type="text" placeholder="이름 *" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="연락처 * (예: 01012345678)"
              required
              inputMode="numeric"
              maxLength={11}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
            />
          </div>

          <div className="visit-datetime-group">
            <label className="visit-datetime-label">방문예정일 (선택)</label>
            <button type="button" className="visit-date-trigger" onClick={() => setPickerOpen(true)}>
              {visitLabel}
            </button>
          </div>

          {pickerOpen && (
            <VisitModal
              initialDate={visitDate}
              initialTime={visitTime}
              onConfirm={({ date, time }) => { setVisitDate(date); setVisitTime(time); setPickerOpen(false); }}
              onClose={() => setPickerOpen(false)}
            />
          )}

          <div className="form-group form-check">
            <div className="privacy-row">
              <label className="check-label">
                <input type="checkbox" checked={privacyAgree} onChange={(e) => setPrivacyAgree(e.target.checked)} />
                <span>개인정보 수집·이용에 동의합니다.</span>
              </label>
              <button
                type="button"
                className={`privacy-toggle${privacyOpen ? " is-open" : ""}`}
                aria-expanded={privacyOpen}
                onClick={() => setPrivacyOpen((o) => !o)}
              >
                {privacyOpen ? "닫기" : "내용보기"}
              </button>
            </div>
            {privacyOpen && (
              <div className="privacy-detail">
                {privacyText.split("\n").map((line, i) => (
                  <p key={i}>{line || " "}</p>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className="form-submit" disabled={submitting}>
            {submitting ? "접수 중..." : "상담 신청하기"}
          </button>

          <div className="contact-inquiry-badge">
            🔥 오늘까지 <strong>{inquiryCount !== null ? inquiryCount : "..."}</strong>명이 문의했습니다
          </div>
        </form>
      </SunguiRaonPrivate2FadeSection>
    </section>
  );
}
