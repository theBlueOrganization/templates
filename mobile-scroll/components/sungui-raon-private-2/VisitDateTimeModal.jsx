"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// 상담신청 폼과 방문예약 팝업이 공유하는 날짜/시간 선택 모달.
// 네이티브 <input type="date">는 브라우저/OS에 따라 표기 형식이 제각각이라(영문 mm/dd/yyyy 등),
// flatpickr류 달력 그리드를 직접 구현해 항상 동일한 한국어 달력 UI로 고정한다.

const MORNING_TIMES = ["10:00", "10:30", "11:00", "11:30"];
const AFTERNOON_TIMES = ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00"];
const WEEKDAY_KO = ["일", "월", "화", "수", "목", "금", "토"];

const pad2 = (n) => String(n).padStart(2, "0");
const toISO = (y, m, d) => `${y}-${pad2(m)}-${pad2(d)}`;
const daysInMonth = (y, m) => new Date(y, m, 0).getDate();

// "2026-08-15" → "2026년 8월 15일(토)" — 원본과 달리 브라우저 기본 date input이 그대로
// 노출하던 ISO 형식을 한국어 날짜 표기로 바꿔 보여준다
export function formatDateKo(iso) {
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

export default function VisitDateTimeModal({ initialDate, initialTime, onConfirm, onClose }) {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  // .fade-up(부모 섹션의 스크롤 등장 애니메이션)에 걸린 transform 때문에 이 모달이 그 섹션의
  // 좌표계 안에 갇혀 배경이 화면 전체가 아니라 섹션 영역만 어두워지는 문제가 있었다.
  // document.body가 아니라 .sr2 최상위로 포털링해 진짜 뷰포트 기준 전체화면 배경이 되도록 한다.
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
  const portalTarget = document.querySelector(".sr2") ?? document.body;
  return createPortal(modal, portalTarget);
}
