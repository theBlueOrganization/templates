'use client'

import { useEffect, useState } from 'react'
import { cn, isMobileUserAgent } from '../../lib/utils'
import { useUtmSource } from '../../lib/useUtmSource'
import SignaturePhoneModal from './SignaturePhoneModal'
import styles from './SignatureMobileBottomBar.module.css'

// 모바일 전용(1024px 미만) 하단 고정 액션바 — 히어로(#hero) 구간을 지나야 나타나고,
// 그 뒤로는 스크롤 내내 화면 하단에 고정됨. PC에서 tel: 링크는 통화로 이어지지 않으므로,
// 데스크톱 브라우저로 좁은 화면을 보는 경우엔 클릭 시 번호 안내 팝업(SignaturePhoneModal)을 띄움.
export default function SignatureMobileBottomBar({ telNumber, telNumberByUtm, visitTargetId, callLabel, visitLabel }) {
  const [visible, setVisible] = useState(false)
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)
  const utmSource = useUtmSource()
  const resolvedTelNumber = telNumberByUtm?.[utmSource] ?? telNumber

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    const update = () => {
      if (!heroEl) return
      setVisible(heroEl.getBoundingClientRect().bottom <= 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleCallClick = (e) => {
    if (isMobileUserAgent()) return
    e.preventDefault()
    setPhoneModalOpen(true)
  }

  const scrollToVisit = () => {
    document.getElementById(visitTargetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={cn(styles.bar, visible && styles.visible)}>
        <a href={`tel:${resolvedTelNumber}`} className={styles.callBtn} onClick={handleCallClick}>
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19133 13.6894 7.46 12.5667C5.84922 11.5431 4.48356 10.1774 3.46 8.56667C2.33332 6.82747 1.63216 4.84733 1.41333 2.78667C1.39667 2.60231 1.41858 2.41651 1.47767 2.24108C1.53675 2.06566 1.63171 1.90446 1.75651 1.76775C1.88131 1.63104 2.0332 1.52181 2.20253 1.44701C2.37185 1.37222 2.55489 1.33351 2.74 1.33333H4.74C5.06354 1.33015 5.37719 1.44472 5.62251 1.65569C5.86782 1.86666 6.02805 2.15963 6.07333 2.48C6.15775 3.12004 6.3143 3.74848 6.54 4.35333C6.6297 4.59195 6.64911 4.85128 6.59594 5.10059C6.54277 5.3499 6.41924 5.57874 6.24 5.76L5.39333 6.60667C6.34237 8.2757 7.7243 9.65763 9.39333 10.6067L10.24 9.76C10.4213 9.58076 10.6501 9.45723 10.8994 9.40406C11.1487 9.35089 11.4081 9.3703 11.6467 9.46C12.2515 9.6857 12.88 9.84225 13.52 9.92667C13.8438 9.97235 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6667 11.28Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {callLabel}
        </a>
        <button type="button" className={styles.visitBtn} onClick={scrollToVisit}>
          <svg width="22" height="22" viewBox="0 0 15 14.0625" fill="none" aria-hidden="true">
            <path
              d="M12.1875 1.75781H11.6016V0.585938H10.4297V1.75781H4.57031V0.585938H3.39844V1.75781H2.8125C2.16797 1.75781 1.64062 2.28516 1.64062 2.92969V12.3047C1.64062 12.9492 2.16797 13.4766 2.8125 13.4766H12.1875C12.832 13.4766 13.3594 12.9492 13.3594 12.3047V2.92969C13.3594 2.28516 12.832 1.75781 12.1875 1.75781ZM12.1875 12.3047H2.8125V4.6875H12.1875V12.3047Z"
              fill="currentColor"
            />
          </svg>
          {visitLabel}
        </button>
      </div>

      <SignaturePhoneModal open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} telNumber={resolvedTelNumber} />
    </>
  )
}
