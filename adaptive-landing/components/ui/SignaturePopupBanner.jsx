'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SignaturePopupBanner.module.css'

// 원종역 월드메르디앙 포레 전용 진입 팝업 — 디자인 완성본 이미지(popup.image) 아래에
// 하단 "팝업닫기" 바만 코드로 얹음. 현장 데이터의 popup.enabled가 true일 때만 렌더링됨
// (app/apt/[slug]/page.jsx에서 조건부 렌더).
// popup.hideCloseBar: true인 현장은 이미지 자체에 닫기(X) 표시가 이미 그려져 있는 경우 —
// 하단 바를 렌더하지 않고, 이미지를 포함한 카드 전체를 탭하면 바로 닫히게 한다.
// popup.closeIcon: true면 하단 "팝업닫기" 바 대신 이미지 오른쪽 위에 X 버튼을 얹어 닫는다
// (이미지 자체 link·hotspots 동작은 그대로 유지 — 북오산자이 드포레 참고).
// popup.images(배열)가 있으면 popup.image 대신 그 순서대로 한 장씩 이어서 띄우고,
// 마지막 장을 닫으면 전체가 닫힌다(달서자이 제니크처럼 이벤트 안내 팝업 여러 장을
// 순차 노출해야 하는 현장용 — dalseo-xi-genic.js 참고).
// 개별 이미지에 link(예: tel:053-xxx-xxxx)를 지정하면 이미지 전체가 그 링크로 감싸져,
// 이미지 안에 그려진 "모델하우스 문의하기" 같은 CTA를 탭했을 때 바로 전화 연결되도록 한다
// (다음 장으로 넘기거나 닫는 동작과는 분리됨).
// 이미지 전체가 아니라 이미지 안에 그려진 버튼 위치만 눌리게 하려면 link 대신 hotspots
// 배열({ link, label, left, top, width, height } — 이미지 대비 % 값)을 지정한다. 해당 영역에만
// 투명 링크가 얹히고, 나머지 이미지 부분은 탭해도 아무 동작이 없다(포레나 인천학익 참고).
export default function SignaturePopupBanner({ popup, openDelayMs = 2900, onClose }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const images = popup.images ?? [popup.image]
  const current = images[index]

  useEffect(() => {
    if (!popup.enabled) return
    // 열리기 전 대기 시간 동안 팝업 이미지를 미리 받아둬, 열리는 순간 빈 카드 없이 바로 그려지게 함
    images.forEach((img) => {
      if (img?.src) new window.Image().src = img.src
    })
    const t = setTimeout(() => setOpen(true), openDelayMs)
    return () => clearTimeout(t)
  }, [popup.enabled, openDelayMs])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClose = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
      return
    }
    setOpen(false)
    onClose?.()
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
            key={index}
            className={styles.card}
            // popup.fitViewport — 세로로 긴 이미지가 짧은 화면에서 헤더에 가려지지 않도록, 카드 높이가
            // (화면 높이 − 150px)를 넘지 않게 이미지 비율로 카드 최대 폭을 줄임
            style={
              popup.fitViewport && current?.width && current?.height
                ? { '--fit-max-width': `calc((100dvh - 150px) * ${current.width / current.height})` }
                : undefined
            }
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={popup.hideCloseBar ? undefined : (e) => e.stopPropagation()}
          >
            <div
              className={styles.imageWrap}
              onClick={
                current.link
                  ? (e) => {
                      e.stopPropagation()
                      // #section 앵커 링크는(전화 링크와 달리) 클릭 즉시 팝업을 닫아 스크롤 이동한
                      // 섹션이 바로 보이게 함
                      if (current.link.startsWith('#')) handleClose()
                    }
                  : undefined
              }
            >
              {current.link ? (
                <a href={current.link} aria-label={current.linkLabel ?? '전화 문의'}>
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    sizes="(min-width: 768px) 430px, 90vw"
                    className={styles.image}
                    style={popup.hideCloseBar || popup.closeIcon ? { borderRadius: 8 } : undefined}
                  />
                </a>
              ) : current.hotspots ? (
                <>
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    sizes="(min-width: 768px) 430px, 90vw"
                    className={styles.image}
                    style={popup.hideCloseBar || popup.closeIcon ? { borderRadius: 8 } : undefined}
                  />
                  {current.hotspots.map((spot) => (
                    <a
                      key={spot.link}
                      href={spot.link}
                      aria-label={spot.label}
                      className={styles.hotspot}
                      style={{ left: `${spot.left}%`, top: `${spot.top}%`, width: `${spot.width}%`, height: `${spot.height}%` }}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (spot.link.startsWith('#')) handleClose()
                      }}
                    />
                  ))}
                </>
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="(min-width: 768px) 430px, 90vw"
                  className={styles.image}
                  style={popup.hideCloseBar || popup.closeIcon ? { borderRadius: 8 } : undefined}
                />
              )}
            </div>

            {popup.closeIcon && (
              <button type="button" onClick={handleClose} className={styles.closeIcon} aria-label="팝업 닫기">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" />
                </svg>
              </button>
            )}

            {!popup.hideCloseBar && !popup.closeIcon && (
              <button type="button" onClick={handleClose} className={styles.closeBtn}>
                {popup.closeLabel ?? '팝업닫기'} ✕
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
