import { clsx } from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

// tel: 링크가 실제로 전화 연결로 이어지는 기기(모바일)인지 판별.
// PC 브라우저에서는 tel: 클릭 시 아무 일도 안 일어나므로, 대신 번호 안내 팝업을 띄우는 데 사용.
export function isMobileUserAgent() {
  if (typeof navigator === 'undefined') return false
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 문장 중 accents에 담긴 부분 문자열만 따로 떼어내 { text, accent } 조각 배열로 반환.
// eupseong-prugio 같은 현장에서 "총 6,723세대" 같은 특정 구절만 강조색으로 표시할 때 씀.
export function splitHighlight(text, accents = []) {
  if (!accents.length) return [{ text, accent: false }]

  const pattern = accents
    .filter(Boolean)
    .map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  if (!pattern) return [{ text, accent: false }]

  return text
    .split(new RegExp(`(${pattern})`, 'g'))
    .filter((part) => part !== '')
    .map((part) => ({ text: part, accent: accents.includes(part) }))
}
