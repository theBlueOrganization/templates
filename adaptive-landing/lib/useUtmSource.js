'use client'

import { useEffect, useState } from 'react'

// 방문 URL의 ?utm_source= 값을 읽어서 반환. useSearchParams 대신 window.location.search를
// 마운트 후에 읽는 방식이라 Suspense 경계 없이도 페이지가 정적 생성(SSG)된 채로 유지됨.
// telNumberByUtm/adminPhonesByUtm처럼 유입경로별로 값을 다르게 노출해야 하는 클라이언트
// 컴포넌트(TopNav, BottomBar, SiteFooter, ContactForm)에서 공통으로 사용.
export function useUtmSource() {
  const [utmSource, setUtmSource] = useState(null)

  useEffect(() => {
    setUtmSource(new URLSearchParams(window.location.search).get('utm_source'))
  }, [])

  return utmSource
}
