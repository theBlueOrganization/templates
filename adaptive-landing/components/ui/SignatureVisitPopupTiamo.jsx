'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUtmSource } from '../../lib/useUtmSource'
import styles from './SignatureVisitPopupTiamo.module.css'

// 진입 팝업 2번 "방문예약" 폼(popup.visitForm) — 청라 더리브 티아모 까사(몰입형, SignatureTiamoImmersive)의
// 방문예약 다이얼로그와 같은 디자인·항목(성함 / 010-연락처 / 방문희망일·시간 / 상담 내용 체크 / 동의 / 골드 버튼).
// 같은 현장의 섹션형 2번 사이트(cheongna-theliv-tiamo-casa-2)에서 이미지 팝업 다음에 이어 띄움
const DEFAULT_CHECKS = ['방문예약', '홍보관 위치 전송', '자료요청', '기타문의']

export default function SignatureVisitPopupTiamo({ visitForm, config, openDelayMs = 400, onClose }) {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const utmSource = useUtmSource() ?? '직접유입'
  const checks = visitForm.checks ?? DEFAULT_CHECKS

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), openDelayMs)
    return () => clearTimeout(t)
  }, [openDelayMs])

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
    const form = e.currentTarget
    const fd = new FormData(form)
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
          phone: ['phone1', 'phone2', 'phone3'].map((k) => fd.get(k)?.toString() ?? '').join('-'),
          visit_date: fd.get('visit_date')?.toString() ?? '',
          visit_time: fd.get('visit_time')?.toString() ?? '',
          privacy_agree: true,
          serviceType: checks.filter((label) => fd.get(label) === 'on').join(', ') || '방문예약',
          projectName: config.projectName,
          adminPhones: config.adminPhonesByUtm?.[utmSource] ?? config.adminPhones,
          adminPhoneNames: config.adminPhoneNames,
          smsMediaLabel: config.smsMediaLabel,
          sheetId: config.sheetId,
          sheetTab: config.sheetTab,
          utmSource,
          showUtmInSms: config.showUtmInSms,
          slug: config.slug,
        }),
      })
      const data = await res.json()
      if (data.success) {
        alert('방문예약이 접수되었습니다. 확인 후 연락드리겠습니다.')
        form.reset()
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
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="visit-popup-title"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} aria-label="닫기" onClick={handleClose}>×</button>
            <h2 id="visit-popup-title">{visitForm.title ?? '방문예약'}</h2>
            <p className={styles.sub}>{visitForm.desc ?? '상담 가능시간 10:00~18:00 (담당자와 조율가능)'}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="visitPopup-name">성함</label>
                <input id="visitPopup-name" className={styles.input} name="name" required placeholder="성함을 입력하세요" />
              </div>
              <div className={`${styles.field} ${styles.full}`}>
                <span>연락처</span>
                <div className={styles.phoneGrid}>
                  <input className={styles.input} name="phone1" defaultValue="010" readOnly aria-label="휴대전화 앞자리" />
                  <input className={styles.input} name="phone2" required maxLength={4} inputMode="numeric" aria-label="휴대전화 중간자리" />
                  <input className={styles.input} name="phone3" required maxLength={4} inputMode="numeric" aria-label="휴대전화 뒷자리" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="visitPopup-date">방문희망일</label>
                <input id="visitPopup-date" className={styles.input} name="visit_date" type="date" />
              </div>
              <div className={styles.field}>
                <label htmlFor="visitPopup-time">방문희망시간</label>
                <select id="visitPopup-time" className={styles.input} name="visit_time" defaultValue="">
                  <option value="">선택하세요</option>
                  {(config.visitTimeOptions ?? []).map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className={`${styles.consultGrid} ${styles.full}`}>
                <p className={styles.consultTitle}>상담 내용 (중복선택 가능)</p>
                {checks.map((label) => (
                  <label key={label}><input type="checkbox" name={label} />{label}</label>
                ))}
              </div>
              <label className={styles.agree}>
                <input type="checkbox" name="privacy_agree" required />
                <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
              </label>
              <button type="submit" className={styles.submit} disabled={submitting}>
                {submitting ? '전송 중...' : visitForm.submitLabel ?? '방문예약 등록'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
