'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import ArkoneApplyForm from './ArkoneApplyForm'
import styles from './SignatureArkoneHighlights.module.css'

// 청라 아크원 푸르지오 원본(cheongna-arkone-prugio, SignatureArkoneImmersive)의 인트로·히어로·
// 청라 핵심 3종(스타필드/서울아산청라병원/하나금융)·미래 교통 계획 섹션을, 풀페이지 스냅 없이
// 일반 스크롤 템플릿(SignatureHeader + 기존 섹션들) 안에 끼워 넣을 수 있도록 떼어낸 버전.
// 디자인·문구는 원본 그대로이고, 콘텐츠는 전부 사이트 config(signature.arkoneIntro/hero/
// arkoneLandmarks/arkoneNetwork)에서 받는다. 풀페이지 패널 전환 대신 화면에 들어올 때(IntersectionObserver)
// 헤드라인 등장 모션을 한 번 재생.

function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, inView])
  return inView
}

// 인트로 — 원본 IntroOverlay와 동일한 타이밍(1단계 3분할 이미지 4s → 2단계 브랜드 임팩트, 5.6s 종료).
// 인트로가 떠 있는 동안만 페이지 스크롤을 잠근다
export function SignatureArkoneIntro({ intro }) {
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(true); return }
    const raf = requestAnimationFrame(() => setReady(true))
    const t = setTimeout(() => setDone(true), 5600)
    return () => { cancelAnimationFrame(raf); clearTimeout(t) }
  }, [])

  useEffect(() => {
    if (done) {
      // 일반 히어로(SignatureHero holdForIntro)가 인트로 동안 멈춰둔 슬라이드 자동 전환을 이때부터 시작하도록
      // SignatureCircleIntro와 같은 신호를 보냄
      window.__circleIntroEnded = true
      window.dispatchEvent(new Event('circleintro:end'))
      return
    }
    document.documentElement.classList.add(styles.lockScroll)
    document.body.classList.add(styles.lockScroll)
    return () => {
      document.documentElement.classList.remove(styles.lockScroll)
      document.body.classList.remove(styles.lockScroll)
    }
  }, [done])

  if (done) return null

  // intro.theme — 현장 브랜드 색으로 바꿀 때만 지정(없으면 원본 아크원 그린). 예: 오산헤리티지자이 xi-3는 티아모 까사 네이비/골드
  const t = intro.theme
  const themeStyle = t && {
    ...(t.base && { '--intro-base': t.base }),
    ...(t.stageOne && { '--intro-one-bg': t.stageOne }),
    ...(t.stageTwo && { '--intro-two-bg': t.stageTwo }),
    ...(t.ring && { '--intro-ring': t.ring }),
    ...(t.accent && { '--intro-accent': t.accent }),
    ...(t.sub && { '--intro-sub': t.sub }),
  }

  return (
    <div className={cn(styles.intro, ready && styles.ready)} style={themeStyle || undefined} aria-label={intro.ariaLabel}>
      <section className={cn(styles.introStage, styles.introOne)} aria-hidden="true">
        <div className={styles.introScenes}>
          {intro.scenes.map((s) => (
            <figure key={s.img} className={styles.introScene}>
              <Image src={s.img} alt={s.name} fill sizes="50vw" priority />
              <figcaption><small>{s.label}</small><strong>{s.name}</strong></figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.introCopy}>
          <span>{intro.copySmall}</span>
          <b>{intro.copyLine1}<br />{intro.copyLine2}</b>
        </div>
      </section>
      <section className={cn(styles.introStage, styles.introTwo)} aria-hidden="true">
        <i className={cn(styles.introRing, styles.ringA)} />
        <i className={cn(styles.introRing, styles.ringB)} />
        <div className={styles.introBrand}>
          {intro.symbol && <Image className={styles.mark} src={intro.symbol} alt="" width={190} height={190} />}
          {intro.wordmark && <Image className={styles.word} src={intro.wordmark} alt={intro.wordmarkAlt ?? 'PRUGIO'} width={290} height={47} />}
          {intro.brandName && <strong className={styles.wordText}>{intro.brandName}</strong>}
          <p>{intro.tagline}</p>
        </div>
      </section>
      <button type="button" className={styles.introSkip} onClick={() => setDone(true)}>건너뛰기</button>
    </div>
  )
}

// 히어로 — 원본 히어로 패널(배경 영상 + ONE 아웃라인 + 분양가상한제 배지 + 하단 헤드라인) 그대로
export function SignatureHeroArkone({ hero }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <section id="hero" ref={ref} className={cn(styles.hero, inView && styles.isVisible)}>
      <video className={styles.heroVideo} src={hero.video} poster={hero.poster} autoPlay muted loop playsInline preload="metadata" />
      <div className={styles.heroOne} aria-hidden="true">ONE</div>
      {hero.badge && (
        <div className={styles.capBadge}><div><small>{hero.badge.small}</small><b>{hero.badge.line1}<br />{hero.badge.line2}</b></div></div>
      )}
      <div className={styles.shell}>
        <header className={cn(styles.sectionHead, styles.motionScale)}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.sectionTitle}>{hero.titleLine1}<br /><span className={styles.gradientText}>{hero.titleAccent}</span></h1>
          <p className={styles.sectionDesc}>{hero.desc}</p>
        </header>
      </div>
      <div className={styles.scrollCue}><i /><span>SCROLL</span></div>
    </section>
  )
}

function SourceDialog({ dialogRef, source, onClose }) {
  return (
    <dialog ref={dialogRef} className={styles.dialog} onClose={onClose} onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
      <div className={styles.modal}>
        <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => dialogRef.current?.close()}>×</button>
        <h2>공공자료 요약 및 출처</h2>
        {source && (
          <>
            <p className={styles.sourceMeta}>{source.title} · {source.date}</p>
            <div className={styles.sourceBody}>{source.body}</div>
            <div className={styles.sourceLinks}>
              {source.links.map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
              ))}
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}

function useSourceDialog() {
  const dialogRef = useRef(null)
  const [source, setSource] = useState(null)
  const open = (s) => { setSource(s); dialogRef.current?.showModal() }
  return { dialogRef, source, open, clear: () => setSource(null) }
}

const LANDMARK_MOTIONS = ['motionScale', 'motionSoft', 'motionLeft']

function Landmark({ item, index, onSource }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <section id={item.id} ref={ref} className={cn(styles.landmark, inView && styles.isVisible)}>
      <div className={styles.landmarkVisual}>
        <Image src={item.img} alt={item.imgAlt} fill sizes="100vw" style={{ objectPosition: item.objectPosition }} />
      </div>
      <div className={cn(styles.shell, styles.landmarkShell)}>
        <header className={cn(styles.sectionHead, styles[LANDMARK_MOTIONS[index % LANDMARK_MOTIONS.length]])}>
          <p className={styles.eyebrow}>{item.eyebrow}</p>
          <h2 className={styles.sectionTitle}><span className={styles.gradientText}>{item.titleTop}</span><br />{item.titleBottom}</h2>
          <p className={styles.sectionDesc}>{item.desc}</p>
        </header>
        <article className={styles.contentCard}>
          <h3>{item.cardTitle}</h3>
          <p>{item.cardDesc}</p>
          <div className={styles.stats}>
            {item.stats.map(([v, l]) => (<div key={l}><strong>{v}</strong><span>{l}</span></div>))}
          </div>
          {item.source && (
            <button type="button" className={styles.sourceButton} onClick={() => onSource(item.source)}>공공자료 요약 및 출처</button>
          )}
        </article>
      </div>
    </section>
  )
}

// landmarks.layout === 'cards' — 3종을 인트로 1단계(초록 배경 위 사진 카드 + 라벨·이름)처럼 한 섹션에 모아 보여줌
// (모바일 세로 3단, PC 가로 3열). 라벨·이름은 각 item의 sceneLabel/sceneName. 예: cheongna-arkone-prugio-3
function LandmarkCards({ items }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <section id={items[0].id} ref={ref} className={cn(styles.landmarkCards, inView && styles.isVisible)}>
      <div className={styles.landmarkCardList}>
        {items.map((item) => (
          <figure key={item.id} className={styles.introScene}>
            <Image src={item.img} alt={item.imgAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" style={{ objectPosition: item.objectPosition }} />
            <figcaption><small>{item.sceneLabel}</small><strong>{item.sceneName}</strong></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

// 청라 핵심 3종 — 섹션마다 사진이 전체 배경(원본 landmark 패널)
export function SignatureArkoneLandmarks({ landmarks }) {
  const dlg = useSourceDialog()
  if (landmarks.layout === 'cards') return <LandmarkCards items={landmarks.items} />
  return (
    <>
      {landmarks.items.map((item, i) => (
        <Landmark key={item.id} item={item} index={i} onSource={dlg.open} />
      ))}
      <SourceDialog dialogRef={dlg.dialogRef} source={dlg.source} onClose={dlg.clear} />
    </>
  )
}

// 미래 교통 계획 — 노선 5개, 누르면 공공자료 요약/출처 다이얼로그
export function SignatureArkoneNetwork({ network }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const dlg = useSourceDialog()
  return (
    <section id={network.id} ref={ref} className={cn(styles.network, inView && styles.isVisible)}>
      <div className={styles.shell}>
        <header className={cn(styles.sectionHead, styles.motionClip)}>
          <p className={styles.eyebrow}>{network.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{network.titleLine1}<br className={styles.titleBreak} /><span className={styles.gradientText}>{network.titleAccent}</span></h2>
          <p className={styles.sectionDesc}>{network.desc}</p>
        </header>
        <div className={styles.networkList}>
          {network.routes.map((r, i) => (
            <button key={r.label} type="button" className={styles.route} style={{ '--route': r.color, '--i': i }} onClick={() => dlg.open(r.source)}>
              <b>{r.label}</b><span>{r.desc} · 자료 보기</span>
            </button>
          ))}
        </div>
        {network.disclaimer && <p className={styles.disclaimer}>{network.disclaimer}</p>}
      </div>
      <SourceDialog dialogRef={dlg.dialogRef} source={dlg.source} onClose={dlg.clear} />
    </section>
  )
}

// 진입 팝업 — 원본과 동일한 흐름: 안내 팝업(이미지+현장명+안내문+닫기) → 닫으면 이어서 방문예약 다이얼로그.
// 방문예약 폼은 config.applyForm이 있으면 원본과 같은 카드형 "방문예약 신청" 폼(ArkoneApplyForm)
export function SignatureArkonePopups({ popups, config }) {
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [toast, setToast] = useState('')
  const visitRef = useRef(null)
  const { notice } = popups

  useEffect(() => {
    const t = setTimeout(() => setNoticeOpen(true), notice.openDelayMs ?? 700)
    return () => clearTimeout(t)
  }, [notice.openDelayMs])

  const closeNotice = () => {
    setNoticeOpen(false)
    setTimeout(() => visitRef.current?.showModal(), 300)
  }

  const handleSuccess = () => {
    visitRef.current?.close()
    setToast('방문예약이 접수되었습니다.')
    setTimeout(() => setToast(''), 2200)
  }

  return (
    <>
      {noticeOpen && (
        <div className={styles.popupOverlay} role="dialog" aria-modal="true" aria-label="주요 안내">
          <article className={styles.noticeCard}>
            <button type="button" className={styles.noticeX} aria-label="닫기" onClick={closeNotice}>×</button>
            <div className={styles.noticeImageWrap}>
              <Image src={notice.image} alt="" fill sizes="440px" />
            </div>
            <h3>{notice.title}</h3>
            <p>{notice.desc}</p>
            {notice.benefit && (
              <div className={styles.noticeBenefit}>
                <b>[{notice.benefit.label}]</b>
                <span>{notice.benefit.text}</span>
              </div>
            )}
          </article>
        </div>
      )}

      <dialog ref={visitRef} className={cn(styles.dialog, styles.applyDialog)} onClick={(e) => e.target === e.currentTarget && visitRef.current?.close()}>
        <div className={cn(styles.modal, styles.applyModal)}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => visitRef.current?.close()}>×</button>
          <ArkoneApplyForm config={config} idPrefix="arkoneVisit" variant="popup" onSuccess={handleSuccess} />
        </div>
      </dialog>

      {toast && <div className={styles.toast} role="status" aria-live="polite">{toast}</div>}
    </>
  )
}
