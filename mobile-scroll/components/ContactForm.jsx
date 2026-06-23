"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ config }) {
  const { projectName, visitTimeOptions, privacyText, adminPhones, sheetId, sheetTab, theme } = config;
  const th = theme ?? {};
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
      .then((d) => setInquiryCount(d.count + 20))
      .catch(() => setInquiryCount(20));
  }, [sheetTab, sheetId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const [form, setForm] = useState({
    name: "", phone1: "", phone2: "", phone3: "",
    visit_date: "", visit_time: "", gift_check: false, privacy_agree: false,
  });

  const [utmSource, setUtmSource] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") ?? "직접유입");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다.");
        setInquiryCount((prev) => (prev ?? 20) + 1);
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
    <section id="contact-section" className={styles.section} style={{ background: th.contactSection?.background }} ref={sectionRef}>
      <form
        className={`${styles.box} ${visible ? styles.visible : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className={styles.heading}>상담신청 및 방문예약</h2>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="name">1. 성명 <span className={styles.required}>*</span></label>
          <input className={styles.input} id="name" name="name" type="text" value={form.name} onChange={handleChange} minLength={2} maxLength={10} required placeholder="홍길동" />
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
          <label className={styles.label} htmlFor="visit_date">3. 방문예약일자</label>
          <input className={styles.input} id="visit_date" name="visit_date" type="date" value={form.visit_date} onChange={handleChange} />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="visit_time">4. 방문예약시간</label>
          <select className={styles.input} id="visit_time" name="visit_time" value={form.visit_time} onChange={handleChange}>
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
            disabled={submitting}
            style={{
              background: th.ContactForm_submitBtn?.background,
              color:      th.ContactForm_submitBtn?.color,
              fontSize:   th.ContactForm_submitBtn?.fontSize,
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