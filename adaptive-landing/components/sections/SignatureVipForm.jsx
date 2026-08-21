'use client'

import { useRef, useState } from 'react'
import Reveal from '../motion/Reveal'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureVipForm.module.css'

const initialForm = {
  name: '',
  service: '',
  visit_date: '',
  visit_time: '',
  age: '',
  privacy_agree: false,
}

const PHONE_FIELDS = ['phone1', 'phone2', 'phone3']

// VIP 24시간 온라인예약센터 — 기존 ContactForm과 필드 구성이 달라(서비스 종류/연령대 라디오)
// 별도 컴포넌트로 만들고, /api/sms에 serviceType/ageRange 필드를 추가로 실어 보낸다.
export default function SignatureVipForm({ config }) {
  const { vipForm } = config.signature
  const { slug, projectName, visitTimeOptions, adminPhones, adminPhonesByUtm, sheetId, sheetTab, showUtmInSms } = config

  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  // 휴대폰번호 칸들은 의도적으로 비제어(uncontrolled) 입력으로 둠 — controlled로 만들면
  // 다른 필드(이름·서비스 등) 변경으로 리렌더링될 때마다 React가 DOM 값을 state 값(빈 문자열)으로
  // 되돌려버려서, 브라우저 자동완성으로 채워진 값이 제출 전에 지워지는 문제가 있었음.
  // PHONE_FIELDS 개수에 맞춰 ref를 자동 생성 — 칸 수가 바뀌어도 따로 손댈 곳이 없음.
  // useRef(...).current로 최초 렌더에만 생성하고, 각 항목은 안정적인 ref 객체라 리렌더링마다
  // ref 콜백이 새로 만들어져 불필요하게 반복 호출되는 일도 없음
  const phoneRefs = useRef(PHONE_FIELDS.map(() => ({ current: null }))).current
  // 방문 URL의 ?utm_source=카카오 같은 값 — 어디서 유입됐는지 기록 + adminPhonesByUtm 분기에 사용
  const utmSource = useUtmSource() ?? '직접유입'
  // adminPhonesByUtm에 등록된 utm_source로 들어온 경우에만 SMS 수신번호를 덮어씀
  const resolvedAdminPhones = adminPhonesByUtm?.[utmSource] ?? adminPhones

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy_agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }
    // 비제어 입력이라 state가 아니라 실제 입력창(DOM) 값을 직접 읽음
    const phone = phoneRefs.map((r) => r.current?.value ?? '').join('-')
    setSubmitting(true)
    try {
      const res = await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          visit_date: form.visit_date,
          visit_time: form.visit_time,
          privacy_agree: form.privacy_agree,
          serviceType: form.service,
          ageRange: form.age,
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
        alert('예약이 완료되었습니다. 확인 후 연락드리겠습니다.')
        setForm(initialForm)
        // 비제어 입력이라 state 초기화로는 안 지워지므로 DOM 값을 직접 비움
        phoneRefs.forEach((r) => { if (r.current) r.current.value = '' })
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
    <section id={vipForm.id} className={styles.section}>
      <Reveal className={styles.card}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.header}>
            <p className={styles.eyebrow}>{vipForm.eyebrow}</p>
            <h2 className={styles.title}>
              <span>{vipForm.titleLine1}</span>
              <strong>{vipForm.titleLine2}</strong>
            </h2>
            <p className={styles.desc}>{vipForm.desc}</p>
          </div>

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>개인정보 수집 동의</h3>
            <div className={styles.privacyBox}>
              <p>{vipForm.privacyText}</p>
            </div>
            <label className={styles.checkLabel}>
              <input type="checkbox" name="privacy_agree" checked={form.privacy_agree} onChange={handleChange} required />
              위 개인정보 수집 및 이용에 동의합니다. (필수)
            </label>
          </div>

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>고객 정보 입력</h3>

            <div className={styles.row}>
              <span className={styles.label}>이름</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="이름을 입력해주세요"
                className={styles.input}
              />
            </div>

            <div className={styles.row}>
              <span className={styles.label}>휴대폰</span>
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
            </div>

            <div className={styles.row}>
              <span className={styles.label}>원하시는 서비스</span>
              <div className={styles.radioWrap}>
                {vipForm.serviceOptions.map((opt) => (
                  <label key={opt} className={styles.radioLabel}>
                    <input type="radio" name="service" value={opt} checked={form.service === opt} onChange={handleChange} required />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.label}>원하시는 일시</span>
              <div className={styles.datetimeRow}>
                <input type="date" name="visit_date" value={form.visit_date} onChange={handleChange} className={styles.dateInput} />
                <select name="visit_time" value={form.visit_time} onChange={handleChange} className={styles.selectInput}>
                  <option value="">시간을 선택해주세요</option>
                  {visitTimeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.label}>연령대</span>
              <div className={styles.radioWrap}>
                {vipForm.ageOptions.map((opt) => (
                  <label key={opt} className={styles.radioLabel}>
                    <input type="radio" name="age" value={opt} checked={form.age === opt} onChange={handleChange} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button type="submit" disabled={submitting} className={styles.submitBtn}>
            {submitting ? '전송 중...' : '예약완료'}
          </button>
        </form>
      </Reveal>
    </section>
  )
}
