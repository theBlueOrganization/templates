'use client'

import { useState } from 'react'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './ArkoneApplyForm.module.css'

// 청라 아크원 푸르지오(원본·3) 관심고객등록 섹션/팝업 공용 "방문예약 신청" 폼 — 요청 반영(2026-10-23),
// 청약 일정에 맞춰 성명·연락처·청약자(본인/가족)·생년월일·방문희망일시·약관·동의 순서의 카드형 폼.
// 문구는 사이트 config.applyForm(title/desc/submitLabel)에서 받고, /api/sms에
// applicant/birth/marketing_agree를 추가로 실어 보낸다.
const APPLICANTS = [
  { value: '본인', label: '본인이 청약합니다' },
  { value: '가족(세대원)', label: '가족(세대원)이 청약합니다' },
]

// variant — 'section'(그림자 카드) | 'popup'(다이얼로그 안) | 'panel'(아크원 풀페이지 상담 패널 안:
// PC에서는 한 화면에 들어오도록 2열로 배치)
export default function ArkoneApplyForm({ config, idPrefix, variant = 'section', onSuccess }) {
  const { applyForm, slug, projectName, visitTimeOptions, adminPhones, adminPhonesByUtm, adminPhoneNames, smsMediaLabel, sheetId, sheetTab, showUtmInSms } = config
  const privacyText = config.signature.vipForm.privacyText
  const utmSource = useUtmSource() ?? '직접유입'
  const resolvedAdminPhones = adminPhonesByUtm?.[utmSource] ?? adminPhones
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const birth = fd.get('birth')?.toString().trim() ?? ''
    if (!/^\d{6}$/.test(birth)) {
      alert('생년월일을 6자리 숫자로 입력해 주세요. (예: 790514)')
      return
    }
    if (fd.get('privacy_agree') !== 'on') {
      alert('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name')?.toString().trim() ?? '',
          phone: ['phone1', 'phone2', 'phone3'].map((k) => fd.get(k)?.toString().trim() ?? '').join('-'),
          visit_date: fd.get('visit_date')?.toString() ?? '',
          visit_time: fd.get('visit_time')?.toString() ?? '',
          privacy_agree: true,
          serviceType: '방문예약',
          applicant: fd.get('applicant')?.toString() ?? '',
          birth,
          marketing_agree: fd.get('marketing_agree') === 'on',
          projectName,
          adminPhones: resolvedAdminPhones,
          adminPhoneNames,
          smsMediaLabel,
          sheetId,
          sheetTab,
          utmSource,
          showUtmInSms,
          slug,
        }),
      })
      const data = await res.json()
      if (data.success) {
        form.reset()
        if (onSuccess) onSuccess()
        else alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.')
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
    <div className={cn(styles.card, variant !== 'section' && styles.popup, variant === 'panel' && styles.panel)}>
      <h2 className={styles.title}>{applyForm.title}</h2>
      <i className={styles.bar} aria-hidden="true" />
      {applyForm.desc && <p className={styles.desc}>{applyForm.desc}</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={cn(styles.field, styles.fName)}>
          <label htmlFor={`${idPrefix}-name`} className={styles.label}>
            성명 <em>*</em> <small>(청약신청자와 동일)</small>
          </label>
          <input id={`${idPrefix}-name`} className={styles.input} name="name" required placeholder="성명" autoComplete="name" />
        </div>

        <div className={cn(styles.field, styles.fPhone)}>
          <span className={styles.label}>연락처 <em>*</em></span>
          <div className={styles.phoneRow}>
            <input className={styles.input} name="phone1" defaultValue="010" required maxLength={3} inputMode="numeric" aria-label="휴대전화 앞자리" />
            <input className={styles.input} name="phone2" required maxLength={4} inputMode="numeric" aria-label="휴대전화 중간자리" />
            <input className={styles.input} name="phone3" required maxLength={4} inputMode="numeric" aria-label="휴대전화 뒷자리" />
          </div>
        </div>

        <div className={cn(styles.field, styles.fApplicant)} role="radiogroup" aria-labelledby={`${idPrefix}-applicant`}>
          <span id={`${idPrefix}-applicant`} className={styles.label}>청약은 누가 하시나요? <em>*</em></span>
          {APPLICANTS.map((a, i) => (
            <label key={a.value} className={styles.choice}>
              <input type="radio" name="applicant" value={a.value} defaultChecked={i === 0} required />
              <span>{a.label}</span>
            </label>
          ))}
        </div>

        <div className={cn(styles.field, styles.fBirth)}>
          <label htmlFor={`${idPrefix}-birth`} className={styles.label}>
            생년월일 <em>*</em> <small>(청약신청자와 동일)</small>
          </label>
          <input id={`${idPrefix}-birth`} className={styles.input} name="birth" required maxLength={6} inputMode="numeric" placeholder="6자리 (예: 790514)" />
        </div>

        <div className={cn(styles.field, styles.fDate)}>
          <label htmlFor={`${idPrefix}-date`} className={styles.label}>방문희망일 <em>*</em></label>
          <input id={`${idPrefix}-date`} className={styles.input} name="visit_date" type="date" required />
        </div>

        <div className={cn(styles.field, styles.fTime)}>
          <label htmlFor={`${idPrefix}-time`} className={styles.label}>희망시간 <em>*</em></label>
          <select id={`${idPrefix}-time`} className={styles.input} name="visit_time" defaultValue="" required>
            <option value="" disabled>시간 선택</option>
            {visitTimeOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </div>

        <details className={styles.terms}>
          <summary>이용약관 전문 보기</summary>
          <div>{privacyText}</div>
        </details>

        <p className={styles.notice}>※ 한 세대에서 두 분 이상 청약하시면 각자 신청해 주세요.</p>

        <label className={styles.agree}>
          <input type="checkbox" name="privacy_agree" required />
          <span>개인정보 수집 및 이용에 동의합니다.</span>
        </label>
        <label className={cn(styles.agree, styles.agreeOptional)}>
          <input type="checkbox" name="marketing_agree" />
          <span>(선택) {config.company.name}의 전국 신규 분양정보를 정기적으로 받아보겠습니다.</span>
        </label>

        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? '전송 중...' : applyForm.submitLabel}
        </button>
      </form>
    </div>
  )
}

// 일반 스크롤 템플릿(cheongna-arkone-prugio-3)의 관심고객등록 섹션 자리 — SignatureVipForm 대신 렌더
export function ArkoneApplySection({ config }) {
  const { vipForm } = config.signature
  return (
    <section id={vipForm.id} className={styles.section}>
      <ArkoneApplyForm config={config} idPrefix="applySection" />
    </section>
  )
}
