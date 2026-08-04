"use client";

import { useEffect, useState } from "react";

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
  id, image, title, targetText, targetHighlight,
  projectName, adminPhones, sheetId, sheetTab, slug, privacyText,
}) {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [agree, setAgree] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [utmSource, setUtmSource] = useState("미확인");

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
    const phone = `${phone1}-${phone2}-${phone3}`;
    setSubmitting(true);
    try {
      const res = await fetch("/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone,
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
        setName(""); setPhone1(""); setPhone2(""); setPhone3(""); setAgree(false);
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
          <div className="rsv-popup-brand">
            <span className="rsv-popup-shield" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" /></svg>
            </span>
            <span className="rsv-popup-brand-word">RAON PRIVATE</span>
          </div>
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
              type="tel" className="rsv-popup-tel-input" placeholder="010" inputMode="numeric"
              maxLength={3} minLength={3} value={phone1}
              onChange={(e) => setPhone1(e.target.value.replace(/[^0-9]/g, ""))} required
            />
            <input
              type="tel" className="rsv-popup-tel-input" placeholder="1234" inputMode="numeric"
              maxLength={4} minLength={3} value={phone2}
              onChange={(e) => setPhone2(e.target.value.replace(/[^0-9]/g, ""))} required
            />
            <input
              type="tel" className="rsv-popup-tel-input" placeholder="5678" inputMode="numeric"
              maxLength={4} minLength={4} value={phone3}
              onChange={(e) => setPhone3(e.target.value.replace(/[^0-9]/g, ""))} required
            />
          </div>

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
