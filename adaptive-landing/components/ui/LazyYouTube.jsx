'use client'

import { useEffect, useRef, useState } from 'react'

// 유튜브 iframe을 화면 근처(rootMargin)에 올 때만 붙이는 지연 로딩 래퍼.
// iframe을 처음부터 렌더링하면 섹션까지 스크롤하지 않아도 영상마다 플레이어 스크립트(1MB+)와
// 자동재생 스트리밍이 페이지 진입과 동시에 시작돼 첫 화면 로딩이 크게 느려짐(영상 3개인
// 오산헤리티지자이에서 체감) — 그 전까지는 유튜브 썸네일 이미지만 보여줌
export default function LazyYouTube({ youtubeId, title, className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (visible) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&playsinline=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media"
      />
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={className}
      src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
      alt={title}
      loading="lazy"
      decoding="async"
    />
  )
}
