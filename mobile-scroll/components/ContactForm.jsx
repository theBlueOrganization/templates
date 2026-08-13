"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ config, instanceId }) {
  const { projectName, visitTimeOptions, privacyText, adminPhones, sheetId, sheetTab, theme, kakao, slug, officeLabel, disabled, inquiryCountOffset } = config;
  // 실제 상담 건수에 더해 표시할 심리적 안전 수치 — 미설정 시 기존 +20 그대로 유지
  const countOffset = inquiryCountOffset ?? 20;
  const th = theme ?? {};
  // instanceId가 있으면(한 페이지에 폼이 2개 이상일 때) id 충돌을 피하기 위해 접미사를 붙임
  const sectionId = instanceId ? `contact-section-${instanceId}` : "contact-section";
  const fieldId = (base) => (instanceId ? `${base}-${instanceId}` : base);
  const [inquiryCount, setInquiryCount] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams({ sheetTab });
    if (sheetId) params.set("sheetId", sheetId);
    fetch(`/api/count?${params}`)
      .then((r) => r.json())
      .then((d) => setInquiryCount(d.count + countOffset))
      .catch(() => setInquiryCount(countOffset));
  }, [sheetTab, sheetId, countOffset]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const [form, setForm] = useState({
    name: "", phone1: "", phone2: "", phone3: "",
    visit_date: "", visit_time: "", gift_check: false, privacy_agree: false,
  });

  const [utmSource, setUtmSource] = useState("미확인");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") ?? "미확인");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return;
    if (!form.privacy_agree) { alert("개인정보 수집·이용에 동의해 주세요."); return; }
    const phone = `${form.phone1}-${form.phone2}-${form.phone3}`;
    setSubmitting(true);
    try {
      const res = await fetch("/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, phone,
          visit_date: form.visit_date, visit_time: form.visit_time,
          gift_check: form.gift_check, privacy_agree: form.privacy_agree,
          projectName,
          adminPhones,
          sheetId,
          sheetTab,
          utmSource,
          showUtmInSms: config.showUtmInSms,
          slug: slug ?? null,
          officeLabel: officeLabel ?? "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        // 분석 이벤트 실패가 실제 제출 성공 처리에 영향을 주지 않도록 별도로 격리
        // 이벤트명은 GA4 예약어(자동 수집되는 form_submit)와 겹치지 않도록 form_submit_consulting 사용
        try {
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "form_submit_consulting", {
              event_category: "consultation",
              event_label: projectName,
              utm_source: utmSource,
              // 쿼리스트링/해시는 제외(순수 경로만) — utm_source는 위에서 별도 파라미터로 이미 전송하므로
              // 중복도 없고, 앞으로 URL 쿼리에 민감한 값이 추가되더라도 GA로 새어나가지 않음
              page_location: window.location.origin + window.location.pathname,
            });
          }
        } catch {
          // GA 이벤트 실패는 무시 — 상담 신청 자체는 이미 정상 처리됨
        }
        alert("상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다.");
        setInquiryCount((prev) => (prev ?? countOffset) + 1);
        setForm({ name: "", phone1: "", phone2: "", phone3: "", visit_date: "", visit_time: "", gift_check: false, privacy_agree: false });
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
    <section id={sectionId} className={styles.section} style={{ background: th.contactSection?.background }} ref={sectionRef}>
      <form
        className={`${styles.box} ${visible ? styles.visible : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className={styles.heading}>상담신청 및 방문예약</h2>

        <div className={styles.group}>
          <label className={styles.label} htmlFor={fieldId("name")}>1. 성명 <span className={styles.required}>*</span></label>
          <input className={styles.input} id={fieldId("name")} name="name" type="text" value={form.name} onChange={handleChange} minLength={2} maxLength={10} required placeholder="홍길동" />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>2. 연락처 <span className={styles.required}>*</span></label>
          <div className={styles.telBox}>
            <input className={styles.telInput} name="phone1" type="tel" inputMode="numeric" maxLength={3} minLength={3} value={form.phone1} onChange={handleChange} required placeholder="010" />
            <span className={styles.hyphen}>-</span>
            <input className={styles.telInput} name="phone2" type="tel" inputMode="numeric" maxLength={4} minLength={3} value={form.phone2} onChange={handleChange} required placeholder="1234" />
            <span className={styles.hyphen}>-</span>
            <input className={styles.telInput} name="phone3" type="tel" inputMode="numeric" maxLength={4} minLength={4} value={form.phone3} onChange={handleChange} required placeholder="5678" />
          </div>
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor={fieldId("visit_date")}>3. 방문예약일자</label>
          <input className={styles.input} id={fieldId("visit_date")} name="visit_date" type="date" value={form.visit_date} onChange={handleChange} />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor={fieldId("visit_time")}>4. 방문예약시간</label>
          <select className={styles.input} id={fieldId("visit_time")} name="visit_time" value={form.visit_time} onChange={handleChange}>
            <option value="">-방문시간선택-</option>
            {visitTimeOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </div>

        <label className={styles.checkLabel}>
          <input className={styles.checkbox} type="checkbox" name="gift_check" checked={form.gift_check} onChange={handleChange} />
          사은품 증정 고객 등록하기
        </label>

        <div className={styles.privacySection}>
          <p className={styles.privacyTitle}>개인정보 수집·이용 및 처리 위탁에 관한 동의 (필수)</p>
          <textarea className={styles.privacyText} readOnly aria-label="개인정보 수집·이용 동의 내용" value={privacyText} />
        </div>

        <label className={styles.checkLabel}>
          <input className={styles.checkbox} type="checkbox" name="privacy_agree" checked={form.privacy_agree} onChange={handleChange} required />
          개인정보 수집·이용에 동의합니다
        </label>

        <div className={styles.submitWrap}>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={submitting || disabled}
            style={{
              background: th.ContactForm_submitBtn?.background,
              color:      th.ContactForm_submitBtn?.color,
              fontSize:   th.ContactForm_submitBtn?.fontSize,
              // 미설정 시 기존 CSS 기본값(파란색 그림자) 그대로 유지, 다른 현장 영향 없음
              ...(th.ContactForm_submitBtn?.shadowColor
                ? { boxShadow: `0 4px 14px ${th.ContactForm_submitBtn.shadowColor}` }
                : {}),
            }}
          >
            {submitting ? "전송 중..." : "지금 신청하고 혜택 받기"}
          </button>
          <div className={styles.badge}>
            <span className={styles.badgeText}>
              🔥 오늘까지 <strong>{inquiryCount !== null ? inquiryCount : "..."}</strong>명이 문의했습니다
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}