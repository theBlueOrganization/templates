'use client'

import { useState } from 'react'
import SignatureInterestPopup from './SignatureInterestPopup'
import SignaturePopupBanner from './SignaturePopupBanner'

// 진입 팝업 순서 제어: 관심고객등록 팝업(popup.interest)이 있으면 그것부터 띄우고,
// 닫힌 뒤에야 기존 이미지 팝업(popup)을 띄운다. interest가 없는 현장은 기존 이미지
// 팝업이 원래 타이밍(popup 내부 2900ms 지연)대로 바로 렌더되어 기존 동작과 동일하다.
export default function SignaturePopupSequence({ popup, config }) {
  const [interestClosed, setInterestClosed] = useState(!popup?.interest?.enabled)

  return (
    <>
      {popup?.interest?.enabled && !interestClosed && (
        <SignatureInterestPopup interest={popup.interest} config={config} onClose={() => setInterestClosed(true)} />
      )}
      {popup?.enabled && interestClosed && <SignaturePopupBanner popup={popup} openDelayMs={popup.interest?.enabled ? 400 : 2900} />}
    </>
  )
}
