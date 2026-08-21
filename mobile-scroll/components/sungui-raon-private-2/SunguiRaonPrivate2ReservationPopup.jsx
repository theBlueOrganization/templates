"use client";

import { useEffect, useRef, useState } from "react";
import VisitDateTimeModal, { formatDateKo } from "./VisitDateTimeModal";

const PHONE_FIELDS = ["phone1", "phone2", "phone3"];

// 숫자 이외 문자 제거 — 입력할 때마다 정리하되 state를 거치지 않고 DOM 값을 직접 수정
// (state를 거치면 controlled input이 되어 자동완성 값이 리렌더링 때 지워지는 문제가 재발함)
function sanitizeDigits(e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
}

// "오늘 하루 안보기" 체크 시 localStorage에 자정까지의 만료 시각을 저장해 숨김
function isHiddenToday(id) {
  try {
    const until = localStorage.getItem(`sr2_popup_hide:${id}`);
    return until ? Date.now() < Number(until) : false;
  } catch {
    return false;
  }
}

function hideUntilTomorrow(id) {
  try {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    localStorage.setItem(`sr2_popup_hide:${id}`, String(midnight.getTime()));
  } catch {
    /* localStorage 접근 불가 시 조용히 무시 */
  }
}

// 방문예약 사은품 증정 팝업 — 이미지 배너 + 대상 안내 + 이름/연락처 미니 폼을 한 번에 보여주고,
// 제출 시 하단 상담신청 폼과 동일하게 /api/sms로 발송한다(솔라피 SMS/구글시트/카카오 연동 공유).
export default function SunguiRaonPrivate2ReservationPopup({
  id, image, logo, title, targetText, targetHighlight,
  projectName, adminPhones, sheetId, sheetTab, slug, privacyText,
}) {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);
  const [name, setName] = useState("");
  // 연락처 3칸은 의도적으로 비제어(uncontrolled) 입력 — controlled로 두면 이름 등 다른 필드
  // 입력으로 리렌더링될 때마다 React가 DOM 값을 state 값(빈 문자열)으로 되돌려버려서,
  // 브라우저 자동완성으로 채워진 값이 제출 전에 지워지는 문제가 있었음
  const phoneRefs = useRef(PHONE_FIELDS.map(() => ({ current: null }))).current;
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [utmSource, setUtmSource] = useState("미확인");

  const visitLabel = visitDate ? `${formatDateKo(visitDate)}${visitTime ? ` · ${visitTime}` : ""}` : "날짜/시간 선택";

  useEffect(() => {
    if (!isHiddenToday(id)) setOpen(true);
  }, [id]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") ?? "미확인");
  }, []);

  const handleClose = () => {
    if (hideToday) hideUntilTomorrow(id);
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) { alert("개인정보 수집·이용에 동의해 주세요."); return; }
    // 비제어 입력이라 state가 아니라 실제 입력창(DOM) 값을 직접 읽음
    const phone = phoneRefs.map((r) => r.current?.value ?? "").join("-");
    setSubmitting(true);
    try {
      const res = await fetch("/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone,
          visit_date: visitDate, visit_time: visitTime,
          privacy_agree: agree,
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
        alert("방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.");
        setName(""); setVisitDate(""); setVisitTime(""); setAgree(false);
        // 비제어 입력이라 state 초기화로는 안 지워지므로 DOM 값을 직접 비움
        phoneRefs.forEach((r) => { if (r.current) r.current.value = ""; });
        handleClose();
      } else {
        alert(data.message ?? "오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch {
      alert("전송에 실패했습니다. 네트워크 상태를 확인해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="rsv-popup-overlay" onClick={handleClose}>
      <div className="rsv-popup-card" onClick={(e) => e.stopPropagation()}>
        <div className="rsv-popup-header">
          {logo && (
            <div className="rsv-popup-brand">
              <img src={logo.src} alt={logo.alt ?? ""} width={logo.width} height={logo.height} className="rsv-popup-logo" />
            </div>
          )}
          <h3 className="rsv-popup-title">{title}</h3>
        </div>

        <div className="rsv-popup-image-wrap">
          <img src={image.src} alt={image.alt ?? ""} width={image.width} height={image.height} />
        </div>

        <div className="rsv-popup-target">
          <span className="rsv-popup-target-tag">대상</span>
          <span className="rsv-popup-target-text">
            {targetText} <em>{targetHighlight}</em>
          </span>
        </div>

        <form className="rsv-popup-form" onSubmit={handleSubmit}>
          <label className="rsv-popup-label">* 성 함</label>
          <input
            type="text" className="rsv-popup-input" placeholder="홍길동"
            value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={10}
          />

          <label className="rsv-popup-label">* 연락처</label>
          <div className="rsv-popup-tel-row">
            <input
              ref={phoneRefs[0]}
              type="tel" className="rsv-popup-tel-input" inputMode="numeric" autoComplete="off"
              maxLength={3} minLength={3} onChange={sanitizeDigits} required
            />
            <input
              ref={phoneRefs[1]}
              type="tel" className="rsv-popup-tel-input" inputMode="numeric" autoComplete="off"
              maxLength={4} minLength={3} onChange={sanitizeDigits} required
            />
            <input
              ref={phoneRefs[2]}
              type="tel" className="rsv-popup-tel-input" inputMode="numeric" autoComplete="off"
              maxLength={4} minLength={4} onChange={sanitizeDigits} required
            />
          </div>

          <label className="rsv-popup-label">방문예정일 (선택)</label>
          <button type="button" className="rsv-popup-input rsv-popup-date-trigger" onClick={() => setPickerOpen(true)}>
            {visitLabel}
          </button>

          {pickerOpen && (
            <VisitDateTimeModal
              initialDate={visitDate}
              initialTime={visitTime}
              onConfirm={({ date, time }) => { setVisitDate(date); setVisitTime(time); setPickerOpen(false); }}
              onClose={() => setPickerOpen(false)}
            />
          )}

          <div className="rsv-popup-privacy-row">
            <label className="rsv-popup-check">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
              개인정보 수집 및 이용 동의
            </label>
            <button
              type="button"
              className="rsv-popup-privacy-view"
              onClick={() => setPrivacyOpen((o) => !o)}
              aria-expanded={privacyOpen}
            >
              {privacyOpen ? "닫기" : "보기"}
            </button>
          </div>
          {privacyOpen && (
            <div className="rsv-popup-privacy-detail">
              {privacyText.split("\n").map((line, i) => (
                <p key={i}>{line || " "}</p>
              ))}
            </div>
          )}

          <button type="submit" className="rsv-popup-submit" disabled={submitting}>
            {submitting ? "등록 중..." : "방문예약 등록하기"}
          </button>
        </form>

        <div className="rsv-popup-close-bar">
          <label className="rsv-popup-hide-today">
            <input type="checkbox" checked={hideToday} onChange={(e) => setHideToday(e.target.checked)} />
            오늘 하루 안보기
          </label>
          <button type="button" onClick={handleClose}>팝업닫기 ✕</button>
        </div>
      </div>
    </div>
  );
}
