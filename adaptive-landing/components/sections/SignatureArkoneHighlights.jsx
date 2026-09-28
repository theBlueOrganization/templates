'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import { useUtmSource } from '../../lib/useUtmSource'
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
    if (done) return
    document.documentElement.classList.add(styles.lockScroll)
    document.body.classList.add(styles.lockScroll)
    return () => {
      document.documentElement.classList.remove(styles.lockScroll)
      document.body.classList.remove(styles.lockScroll)
    }
  }, [done])

  if (done) return null

  return (
    <div className={cn(styles.intro, ready && styles.ready)} aria-label={intro.ariaLabel}>
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
          <Image className={styles.mark} src={intro.symbol} alt="" width={190} height={190} />
          <Image className={styles.word} src={intro.wordmark} alt="PRUGIO" width={290} height={47} />
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

// 청라 핵심 3종 — 섹션마다 사진이 전체 배경(원본 landmark 패널)
export function SignatureArkoneLandmarks({ landmarks }) {
  const dlg = useSourceDialog()
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
// 방문예약 폼은 원본 LeadForm(kind='visit')과 같은 필드·같은 /api/sms 전송 방식
const CONSULT_CHECKS = ['방문예약', '모델하우스 위치 전송', '자료요청', '기타문의']

export function SignatureArkonePopups({ popups, config }) {
  const utmSource = useUtmSource() ?? '직접유입'
  const resolvedAdminPhones = config.adminPhonesByUtm?.[utmSource] ?? config.adminPhones
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState('')
  const visitRef = useRef(null)
  const { notice, visit } = popups

  useEffect(() => {
    const t = setTimeout(() => setNoticeOpen(true), notice.openDelayMs ?? 700)
    return () => clearTimeout(t)
  }, [notice.openDelayMs])

  const closeNotice = () => {
    setNoticeOpen(false)
    setTimeout(() => visitRef.current?.showModal(), 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const privacyAgree = fd.get('privacy_agree') === 'on'
    if (!privacyAgree) { alert('개인정보 수집 및 이용에 동의해 주세요.'); return }
    setSubmitting(true)
    const payload = {
      name: fd.get('name')?.toString().trim() ?? '',
      phone: ['phone1', 'phone2', 'phone3'].map((k) => fd.get(k)?.toString() ?? '').join('-'),
      visit_date: fd.get('visit_date')?.toString() ?? '',
      visit_time: fd.get('visit_time')?.toString() ?? '',
      privacy_agree: privacyAgree,
      serviceType: CONSULT_CHECKS.filter((label) => fd.get(label) === 'on').join(', ') || '방문예약',
      projectName: config.projectName,
      adminPhones: resolvedAdminPhones,
      adminPhoneNames: config.adminPhoneNames,
      smsMediaLabel: config.smsMediaLabel,
      sheetId: config.sheetId,
      sheetTab: config.sheetTab,
      utmSource,
      showUtmInSms: config.showUtmInSms,
      slug: config.slug,
    }
    try {
      const res = await fetch('/api/sms', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (data.success) {
        form.reset()
        visitRef.current?.close()
        setToast('방문예약이 접수되었습니다.')
        setTimeout(() => setToast(''), 2200)
      } else {
        alert(data.message ?? '오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch {
      alert('전송에 실패했습니다. 네트워크 상태를 확인해 주세요.')
    }
    setSubmitting(false)
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

      <dialog ref={visitRef} className={styles.dialog} onClick={(e) => e.target === e.currentTarget && visitRef.current?.close()}>
        <div className={styles.modal}>
          <button type="button" className={styles.modalClose} aria-label="닫기" onClick={() => visitRef.current?.close()}>×</button>
          <h2>{visit.title}</h2>
          <p className={styles.modalDesc}>{visit.desc}</p>
          <form className={styles.leadForm} onSubmit={handleSubmit}>
            <div className={cn(styles.field, styles.full)}>
              <label htmlFor="arkoneVisit-name">성함</label>
              <input id="arkoneVisit-name" className={styles.input} name="name" required placeholder="성함을 입력하세요" />
            </div>
            <div className={cn(styles.field, styles.full)}>
              <span>연락처</span>
              <div className={styles.phoneGrid}>
                <input className={styles.input} name="phone1" defaultValue="010" readOnly aria-label="휴대전화 앞자리" />
                <input className={styles.input} name="phone2" required maxLength={4} inputMode="numeric" aria-label="휴대전화 중간자리" />
                <input className={styles.input} name="phone3" required maxLength={4} inputMode="numeric" aria-label="휴대전화 뒷자리" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="arkoneVisit-date">방문희망일</label>
              <input id="arkoneVisit-date" className={styles.input} name="visit_date" type="date" />
            </div>
            <div className={styles.field}>
              <label htmlFor="arkoneVisit-time">방문희망시간</label>
              <select id="arkoneVisit-time" className={styles.input} name="visit_time" defaultValue="">
                <option value="">선택하세요</option>
                {config.visitTimeOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
            <div className={cn(styles.consultGrid, styles.full)}>
              <p className={styles.consultTitle}>상담 내용 (중복선택 가능)</p>
              {CONSULT_CHECKS.map((label) => (
                <label key={label}><input type="checkbox" name={label} />{label}</label>
              ))}
            </div>
            <label className={styles.agree}>
              <input type="checkbox" name="privacy_agree" required />
              <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
            </label>
            <button type="submit" className={styles.submitButton} disabled={submitting}>
              {submitting ? '전송 중...' : '방문예약 등록'}
            </button>
          </form>
        </div>
      </dialog>

      {toast && <div className={styles.toast} role="status" aria-live="polite">{toast}</div>}
    </>
  )
}
