// 다이렉트 링크 판별 — 주소에 #앵커(예: #vip-reservation)를 붙여 특정 섹션으로 바로 들어온 경우.
// 이때는 전체화면 인트로(SignatureCircleIntro)와 진입 팝업(SignaturePopupSequence)을 띄우지 않고 해당 섹션을 바로 보여줌.
// SSR 단계의 인트로 오버레이 깜빡임은 app/layout.jsx의 인라인 스크립트가 <html>에 붙이는 'direct-link' 클래스로 CSS에서 숨김.
export const DIRECT_LINK_CLASS = 'direct-link'

export function isDirectLink() {
  if (typeof window === 'undefined') return false
  const id = decodeURIComponent(window.location.hash.slice(1))
  return !!id && !!document.getElementById(id)
}

export function scrollToHashTarget() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  const el = id && document.getElementById(id)
  if (el) el.scrollIntoView()
}
