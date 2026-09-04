'use client'

import { useState } from 'react'
import SignatureInterestPopup from './SignatureInterestPopup'
import SignaturePopupBanner from './SignaturePopupBanner'

// 진입 팝업 순서 제어: 기본은 관심고객등록 팝업(popup.interest)이 있으면 그것부터 띄우고,
// 닫힌 뒤에야 기존 이미지 팝업(popup)을 띄운다. interest가 없는 현장은 기존 이미지
// 팝업이 원래 타이밍(popup 내부 2900ms 지연)대로 바로 렌더되어 기존 동작과 동일하다.
// popup.order === 'imageFirst'인 현장(예: 선착순 분양오픈 안내를 먼저 보여줘야 하는 경우)은
// 반대로 이미지 팝업을 먼저 띄우고, 닫힌 뒤에 관심고객등록 팝업을 이어서 띄운다.
export default function SignaturePopupSequence({ popup, config }) {
  const imageFirst = popup?.order === 'imageFirst'
  const [firstClosed, setFirstClosed] = useState(imageFirst ? !popup?.enabled : !popup?.interest?.enabled)

  if (imageFirst) {
    return (
      <>
        {popup?.enabled && !firstClosed && (
          <SignaturePopupBanner popup={popup} openDelayMs={2900} onClose={() => setFirstClosed(true)} />
        )}
        {popup?.interest?.enabled && firstClosed && (
          <SignatureInterestPopup interest={popup.interest} config={config} openDelayMs={400} />
        )}
      </>
    )
  }

  return (
    <>
      {popup?.interest?.enabled && !firstClosed && (
        <SignatureInterestPopup interest={popup.interest} config={config} onClose={() => setFirstClosed(true)} />
      )}
      {popup?.enabled && firstClosed && <SignaturePopupBanner popup={popup} openDelayMs={popup.interest?.enabled ? 400 : 2900} />}
    </>
  )
}
