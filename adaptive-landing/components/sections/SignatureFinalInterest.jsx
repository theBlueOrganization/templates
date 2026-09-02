'use client'

import { useRef, useState } from 'react'
import Reveal from '../motion/Reveal'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureFinalInterest.module.css'

const initialForm = { name: '', visitDate: '', visitTime: '', consent: false }
const PHONE_FIELDS = ['phone1', 'phone2', 'phone3']

// 상담신청 및 방문예약(#final-interest) — SignatureVisitReservation과 동일한 필드 구성
// (이름/연락처 3칸/방문 희망일/방문 희망시간/개인정보 동의)으로 통일한 폼. 페이지 하단에서
// 다시 한번 상담·방문 신청을 받는 두 번째 전환 지점이라 섹션 자체는 유지하되, 폼은
// 위쪽 방문예약 폼과 완전히 동일한 스키마로 /api/sms에 전송해 구글시트 컬럼이 어긋나지 않게 한다.
export default function SignatureFinalInterest({ finalInterest, config }) {
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
          serviceType: '상담신청 및 방문예약',
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
        alert('신청이 완료되었습니다. 담당자가 연락드리겠습니다.')
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
    <section id={finalInterest.id} className={styles.section} aria-labelledby="final-interest-title" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,21,33,.88), rgba(4,21,33,.66)), url(${finalInterest.bgImage.src})` }}>
      <Reveal className={styles.copy}>
        <p className={styles.eyebrow}>{finalInterest.eyebrow}</p>
        <h2 id="final-interest-title">
          {finalInterest.titlePlain}
          <br />
          <em>{finalInterest.titleAccent}</em>
        </h2>
        <p className={styles.desc}>{finalInterest.desc}</p>
        <div className={styles.facts}>
          {finalInterest.facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className={styles.panel}>
        <p className={styles.panelLabel}>{finalInterest.panelLabel}</p>
        <h3>{finalInterest.panelTitle}</h3>
        <span>{finalInterest.panelDesc}</span>

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
              <summary>{finalInterest.privacySummary}</summary>
              <p>{finalInterest.privacyText}</p>
            </details>
            <label>
              <input type="checkbox" name="consent" required checked={form.consent} onChange={handleChange} />
              <span>
                {finalInterest.consentLabel} <b>(필수)</b>
              </span>
            </label>
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? '전송 중...' : finalInterest.submitLabel}
          </button>
        </form>
      </Reveal>
    </section>
  )
}
