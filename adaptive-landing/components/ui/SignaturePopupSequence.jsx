'use client'

import { useState } from 'react'
import SignatureInterestPopup from './SignatureInterestPopup'
import SignaturePopupBanner from './SignaturePopupBanner'
import SignatureVisitPopupTiamo from './SignatureVisitPopupTiamo'

// 진입 팝업 순서 제어: 기본은 관심고객등록 팝업(popup.interest)이 있으면 그것부터 띄우고,
// 닫힌 뒤에야 기존 이미지 팝업(popup)을 띄운다. interest가 없는 현장은 기존 이미지
// 팝업이 원래 타이밍(popup 내부 2900ms 지연, popup.openDelayMs로 현장별 조정 가능)대로 바로 렌더되어 기존 동작과 동일하다.
// popup.order === 'imageFirst'인 현장(예: 선착순 분양오픈 안내를 먼저 보여줘야 하는 경우)은
// 반대로 이미지 팝업을 먼저 띄우고, 닫힌 뒤에 관심고객등록 팝업을 이어서 띄운다.
export default function SignaturePopupSequence({ popup, config }) {
  const imageFirst = popup?.order === 'imageFirst'
  const [firstClosed, setFirstClosed] = useState(imageFirst ? !popup?.enabled : !popup?.interest?.enabled)
  // 이미지 팝업 안 hotspot으로 섹션 이동(#앵커)한 경우 — 방문예약 폼 팝업이 그 섹션을 가리지 않게 생략
  const [navigated, setNavigated] = useState(false)

  if (imageFirst) {
    return (
      <>
        {popup?.enabled && !firstClosed && (
          <SignaturePopupBanner
            popup={popup}
            openDelayMs={popup.openDelayMs ?? 2900}
            onClose={(info) => {
              if (info?.navigated) setNavigated(true)
              setFirstClosed(true)
            }}
          />
        )}
        {popup?.interest?.enabled && firstClosed && (
          <SignatureInterestPopup interest={popup.interest} config={config} openDelayMs={400} />
        )}
        {/* popup.visitForm — 관심고객등록 대신 티아모 까사 몰입형과 같은 디자인의 방문예약 폼을 2번 팝업으로 */}
        {popup?.visitForm?.enabled && firstClosed && !navigated && (
          <SignatureVisitPopupTiamo visitForm={popup.visitForm} config={config} openDelayMs={400} />
        )}
      </>
    )
  }

  return (
    <>
      {popup?.interest?.enabled && !firstClosed && (
        <SignatureInterestPopup interest={popup.interest} config={config} onClose={() => setFirstClosed(true)} />
      )}
      {popup?.enabled && firstClosed && <SignaturePopupBanner popup={popup} openDelayMs={popup.interest?.enabled ? 400 : (popup.openDelayMs ?? 2900)} />}
    </>
  )
}
