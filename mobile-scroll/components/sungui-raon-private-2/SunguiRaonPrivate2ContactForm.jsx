"use client";

import { useEffect, useState } from "react";
import SunguiRaonPrivate2FadeSection from "./SunguiRaonPrivate2FadeSection";
import VisitDateTimeModal, { formatDateKo } from "./VisitDateTimeModal";

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
            <VisitDateTimeModal
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
