'use client'

import { useEffect, useState } from 'react'
import Reveal from '../motion/Reveal'
import styles from './ContactForm.module.css'

// 상담신청 폼 — 여기서 입력받은 값이 /api/sms(문자 발송 + 시트 저장)로 전송됨

const initialForm = {
  name: '',
  phone1: '',
  phone2: '',
  phone3: '',
  visit_date: '',
  visit_time: '',
  gift_check: false,
  privacy_agree: false,
}

export default function ContactForm({ config }) {
  const { projectName, visitTimeOptions, privacyText, adminPhones, sheetId, sheetTab, theme } =
    config
  const th = theme ?? {}

  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  // "오늘까지 OO명이 문의했습니다" 배지에 쓰는 값. null이면 아직 로딩 전
  const [inquiryCount, setInquiryCount] = useState(null)
  const [utmSource, setUtmSource] = useState('직접유입')

  // 방문 URL의 ?utm_source=카카오 같은 값을 읽어서 어디서 유입됐는지 기록
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUtmSource(params.get('utm_source') ?? '직접유입')
  }, [])

  // 페이지 진입 시 /api/count를 호출해서 지금까지 몇 명이 신청했는지 조회 (+20은 심리적 안전 수치)
  useEffect(() => {
    const params = new URLSearchParams({ sheetTab })
    if (sheetId) params.set('sheetId', sheetId)
    fetch(`/api/count?${params}`)
      .then((r) => r.json())
      .then((d) => setInquiryCount(d.count + 20))
      .catch(() => setInquiryCount(20))
  }, [sheetTab, sheetId])

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const checked = e.target.checked
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy_agree) {
      alert('개인정보 수집·이용에 동의해 주세요.')
      return
    }
    // phone1/2/3 세 칸을 010-1234-5678 형태 한 문자열로 합침
    const phone = `${form.phone1}-${form.phone2}-${form.phone3}`
    setSubmitting(true)
    try {
      // 서버(/api/sms)가 이 값들로 관리자에게 SMS 발송 + 구글시트 저장을 동시에 처리함
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          visit_date: form.visit_date,
          visit_time: form.visit_time,
          gift_check: form.gift_check,
          privacy_agree: form.privacy_agree,
          projectName,
          adminPhones,
          sheetId,
          sheetTab,
          utmSource,
          showUtmInSms: config.showUtmInSms,
        }),
      })
      const data = await res.json()
      if (data.success) {
        alert('상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다.')
        setInquiryCount((prev) => (prev ?? 20) + 1)
        setForm(initialForm)
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
    <section
      id="contact-section"
      className={styles.section}
      style={{ background: th.contactSection?.background }}
    >
      <Reveal className={styles.formWrap}>
        <form onSubmit={handleSubmit} noValidate>
          <h2 className={styles.heading}>상담신청 및 방문예약</h2>

          {/* 성명 + 연락처 — 모바일은 세로로, md 이상은 좌우 2열로 배치 */}
          <div className={styles.row}>
            {/* 성명 */}
            <div>
              <label className={styles.label} htmlFor="name">
                1. 성명 <span className={styles.required}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                minLength={2}
                maxLength={10}
                required
                placeholder="홍길동"
                className={styles.input}
              />
            </div>

            {/* 연락처 — 010 / 1234 / 5678 세 칸으로 나눠서 입력받음 */}
            <div>
              <label className={styles.label}>
                2. 연락처 <span className={styles.required}>*</span>
              </label>
              <div className={styles.phoneRow}>
                {['phone1', 'phone2', 'phone3'].map((field, i) => (
                  <input
                    key={field}
                    name={field}
                    type="tel"
                    inputMode="numeric"
                    maxLength={i === 0 ? 3 : 4}
                    minLength={i === 0 ? 3 : i === 1 ? 3 : 4}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder={i === 0 ? '010' : i === 1 ? '1234' : '5678'}
                    className={styles.phoneInput}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 방문예약일자 + 방문예약시간 — 마찬가지로 md 이상에서 2열 */}
          <div className={styles.row}>
            {/* 방문예약일자 */}
            <div>
              <label className={styles.label} htmlFor="visit_date">
                3. 방문예약일자
              </label>
              <input
                id="visit_date"
                name="visit_date"
                type="date"
                value={form.visit_date}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            {/* 방문예약시간 — 옵션 목록은 현장 데이터의 visitTimeOptions에서 가져옴 */}
            <div>
              <label className={styles.label} htmlFor="visit_time">
                4. 방문예약시간
              </label>
              <select
                id="visit_time"
                name="visit_time"
                value={form.visit_time}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">-방문시간선택-</option>
                {visitTimeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 사은품 체크 */}
          <label className={styles.giftLabel}>
            <input
              type="checkbox"
              name="gift_check"
              checked={form.gift_check}
              onChange={handleChange}
              className={styles.checkbox}
            />
            사은품 증정 고객 등록하기
          </label>

          {/* 개인정보 동의 — 텍스트는 현장 데이터의 privacyText 그대로 표시 (읽기 전용) */}
          <div className={styles.privacyWrap}>
            <p className={styles.privacyHeading}>
              개인정보 수집·이용 및 처리 위탁에 관한 동의 (필수)
            </p>
            <textarea
              readOnly
              aria-label="개인정보 수집·이용 동의 내용"
              value={privacyText}
              className={styles.privacyText}
            />
          </div>

          <label className={styles.agreeLabel}>
            <input
              type="checkbox"
              name="privacy_agree"
              checked={form.privacy_agree}
              onChange={handleChange}
              required
              className={styles.checkbox}
            />
            개인정보 수집·이용에 동의합니다
          </label>

          {/* 제출 버튼 — 전송 중에는 비활성화되고 문구가 "전송 중..."으로 바뀜 */}
          <button
            type="submit"
            disabled={submitting}
            className={styles.submitBtn}
            style={{
              background: th.ContactForm_submitBtn?.background ?? '#1d4ed8',
              color: th.ContactForm_submitBtn?.color ?? '#ffffff',
              fontSize: th.ContactForm_submitBtn?.fontSize,
            }}
          >
            {submitting ? '전송 중...' : '지금 신청하고 혜택 받기'}
          </button>

          {inquiryCount !== null && (
            <p className={styles.inquiryCount}>
              🔥 오늘까지 <strong className={styles.inquiryStrong}>{inquiryCount}</strong>명이 문의했습니다
            </p>
          )}
        </form>
      </Reveal>
    </section>
  )
}
