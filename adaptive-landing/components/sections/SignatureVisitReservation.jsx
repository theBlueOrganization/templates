'use client'

import { useRef, useState } from 'react'
import Reveal from '../motion/Reveal'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureVisitReservation.module.css'

const initialForm = { name: '', visitDate: '', visitTime: '', consent: false }
const PHONE_FIELDS = ['phone1', 'phone2', 'phone3']

// 방문예약 폼 — 참고 사이트(#visit-reservation)와 동일하게 이름/연락처/방문희망일/방문희망시간
// 4개 필드 + 개인정보 동의만 받는다. 제출 시 기존 /api/sms 계약(SignatureVipForm과 동일한
// payload 형태)에 맞춰 visitDate→visit_date, visitTime→visit_time으로 매핑해서 보낸다.
// 연락처 입력칸은 다른 현장 폼(SignatureVipForm/SignatureInterestPopup)과 동일하게
// 010/0000/0000 3칸 분리 + 비제어(ref) 입력으로 통일 — 구글시트에 같은 형태로 값이 들어가야 함.
export default function SignatureVisitReservation({ visitReservation, config }) {
  const { slug, projectName, visitTimeOptions, adminPhones, adminPhonesByUtm, sheetId, sheetTab, showUtmInSms } = config
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const todayStr = new Date().toISOString().slice(0, 10)
  const utmSource = useUtmSource() ?? '직접유입'
  const resolvedAdminPhones = adminPhonesByUtm?.[utmSource] ?? adminPhones
  const phoneRefs = useRef(PHONE_FIELDS.map(() => ({ current: null }))).current

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.consent) {
      alert('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }
    const phone = phoneRefs.map((r) => r.current?.value ?? '').join('-')
    setSubmitting(true)
    try {
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          visit_date: form.visitDate,
          visit_time: form.visitTime,
          privacy_agree: form.consent,
          serviceType: '방문예약',
          projectName,
          adminPhones: resolvedAdminPhones,
          sheetId,
          sheetTab,
          utmSource,
          showUtmInSms,
          slug,
        }),
      })
      const data = await res.json()
      if (data.success) {
        alert('방문예약 신청이 완료되었습니다. 담당자가 연락드리겠습니다.')
        setForm(initialForm)
        phoneRefs.forEach((r) => {
          if (r.current) r.current.value = ''
        })
      } else {
        alert(data.message ?? '오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch {
      alert('전송에 실패했습니다. 네트워크 상태를 확인해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id={visitReservation.id} className={styles.section} aria-labelledby="visit-reservation-title">
      <Reveal className={styles.heading}>
        <p className={styles.eyebrow}>{visitReservation.eyebrow}</p>
        <h2 id="visit-reservation-title">
          {visitReservation.titlePlain}
          <br />
          <em>{visitReservation.titleAccent}</em>
        </h2>
        <p className={styles.lead}>
          {visitReservation.leadLines.map((line) => (
            <span key={line}>
              <span className={styles.leadMark} aria-hidden="true">
                ✦
              </span>{' '}
              {line}
              <br />
            </span>
          ))}
        </p>
      </Reveal>

      <Reveal delay={0.1} className={styles.panel}>
        <p className={styles.panelLabel}>{visitReservation.panelLabel}</p>
        <h3 className={styles.panelTitle}>{visitReservation.panelTitle}</h3>
        <span className={styles.panelDesc}>{visitReservation.panelDesc}</span>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fields}>
            <label>
              <span>
                이름 <b>*</b>
              </span>
              <input type="text" name="name" required minLength={2} maxLength={30} autoComplete="name" placeholder="이름을 입력해 주세요" value={form.name} onChange={handleChange} />
            </label>
            <label>
              <span>
                연락처 <b>*</b>
              </span>
              <div className={styles.phoneRow}>
                {PHONE_FIELDS.map((field, i) => (
                  <input
                    key={field}
                    ref={phoneRefs[i]}
                    name={field}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={i === 0 ? 3 : 4}
                    required
                    className={styles.phoneInput}
                  />
                ))}
              </div>
            </label>
            <label>
              <span>
                방문 희망일 <b>*</b>
              </span>
              <div className={styles.dateWrap}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v3" />
                  <path d="M16 2v3" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
                <input type="date" name="visitDate" min={todayStr} required value={form.visitDate} onChange={handleChange} />
              </div>
            </label>
            <label>
              <span>
                방문 희망시간 <b>*</b>
              </span>
              <select name="visitTime" required value={form.visitTime} onChange={handleChange}>
                <option value="" disabled>
                  시간을 선택해 주세요
                </option>
                {visitTimeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={styles.privacy}>
            <details className={styles.privacyDetail}>
              <summary>{visitReservation.privacySummary}</summary>
              <p>{visitReservation.privacyText}</p>
            </details>
            <label>
              <input type="checkbox" name="consent" required checked={form.consent} onChange={handleChange} />
              <span>
                {visitReservation.consentLabel} <b>(필수)</b>
              </span>
            </label>
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? '전송 중...' : visitReservation.submitLabel}
          </button>
        </form>
      </Reveal>
    </section>
  )
}
