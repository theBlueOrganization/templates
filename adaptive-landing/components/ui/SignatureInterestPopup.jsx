'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureInterestPopup.module.css'

const PHONE_FIELDS = ['phone1', 'phone2', 'phone3']

// 진입 시 가장 먼저 뜨는 "관심고객등록" 간이 신청 팝업 — 이름+연락처만 받아 /api/sms로 바로 전송.
// 닫히면(제출 완료 또는 X 클릭) 부모(SignaturePopupSequence)가 이어서 기존 이미지 팝업을 띄운다.
export default function SignatureInterestPopup({ interest, config, onClose }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const [visitTime, setVisitTime] = useState('')
  const [privacyAgree, setPrivacyAgree] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const phoneRefs = useRef(PHONE_FIELDS.map(() => ({ current: null }))).current
  const utmSource = useUtmSource() ?? '직접유입'
  const serviceOptions = config.signature?.vipForm?.serviceOptions ?? []

  useEffect(() => {
    if (!interest?.enabled) return
    const t = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(t)
  }, [interest?.enabled])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!privacyAgree) {
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
          name,
          phone,
          visit_date: visitDate,
          visit_time: visitTime,
          privacy_agree: privacyAgree,
          serviceType: service ? `${service} (관심고객등록)` : '관심고객등록',
          projectName: config.projectName,
          adminPhones: config.adminPhonesByUtm?.[utmSource] ?? config.adminPhones,
          sheetId: config.sheetId,
          sheetTab: config.sheetTab,
          utmSource,
          showUtmInSms: config.showUtmInSms,
          slug: config.slug,
        }),
      })
      const data = await res.json()
      if (data.success) {
        alert('관심고객 등록이 완료되었습니다. 확인 후 연락드리겠습니다.')
        setName('')
        setService('')
        setVisitDate('')
        setVisitTime('')
        setPrivacyAgree(false)
        phoneRefs.forEach((r) => { if (r.current) r.current.value = '' })
        handleClose()
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
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className={styles.card}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={handleClose} aria-label="팝업 닫기" className={styles.closeIcon}>
              ✕
            </button>

            <p className={styles.eyebrow}>{interest?.eyebrow ?? 'INTEREST'}</p>
            <h2 className={styles.title}>{interest?.title ?? '관심고객등록'}</h2>
            <p className={styles.desc}>{interest?.desc ?? '간단한 정보를 입력해 주시면\n분양 정보를 가장 먼저 안내해드립니다.'}</p>

            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <span className={styles.fieldLabel}>이름</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="이름을 입력해주세요"
                className={styles.input}
              />

              <span className={styles.fieldLabel}>휴대폰</span>
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

              {serviceOptions.length > 0 && (
                <>
                  <span className={styles.fieldLabel}>원하시는 서비스</span>
                  <div className={styles.radioWrap}>
                    {serviceOptions.map((opt) => (
                      <label key={opt} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name="service"
                          value={opt}
                          checked={service === opt}
                          onChange={(e) => setService(e.target.value)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </>
              )}

              <span className={styles.fieldLabel}>방문 희망일시</span>
              <div className={styles.datetimeRow}>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className={styles.dateInput}
                />
                <select value={visitTime} onChange={(e) => setVisitTime(e.target.value)} className={styles.selectInput}>
                  <option value="">희망시간</option>
                  {(config.visitTimeOptions ?? []).map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <label className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={privacyAgree}
                  onChange={(e) => setPrivacyAgree(e.target.checked)}
                  required
                />
                개인정보 수집 및 이용에 동의합니다. (필수)
              </label>

              <button type="submit" disabled={submitting} className={styles.submitBtn}>
                {submitting ? '전송 중...' : interest?.submitLabel ?? '관심고객 등록'}
              </button>
            </form>

            {interest?.giftText && (() => {
              const [heading, ...rest] = interest.giftText.split('\n')
              return (
                <div className={styles.giftWrap}>
                  <div className={styles.giftBox}>
                    <p className={styles.giftLine0}>{heading}</p>
                    {rest.map((line, i) => (
                      <p key={i} className={i === 0 ? styles.giftLine1 : styles.giftLine2}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
