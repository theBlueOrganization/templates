import { Fragment } from 'react'
import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { cn, splitHighlight } from '../../lib/utils'
import MobileBreakText from '../ui/MobileBreakText'
import styles from './SignaturePremiumIntro.module.css'

// descLine1 안에서 "\n"은 PC·모바일 둘 다 항상 줄바꿈, "\r"은 모바일에서만 줄바꿈되도록 구분
function renderDescBreaks(text) {
  return text.split(/([\n\r])/).map((tok, i) => {
    if (tok === '\n') return <br key={i} />
    if (tok === '\r')
      return (
        <Fragment key={i}>
          {' '}
          <br className={styles.mobileBreak} />
        </Fragment>
      )
    return tok
  })
}

// 프리미엄 섹션 도입부 — 배경 고정(패럴랙스) 이미지 위에 큰 타이틀, 스크롤하면 아래 SIGNATURE 6 카드로 이어짐
export default function SignaturePremiumIntro({ premiumIntro }) {
  const descSegments = splitHighlight(premiumIntro.descLine1, premiumIntro.descLine1Accent)

  // plainImage — 공식 사이트 페이지를 그대로 캡처한 이미지 한 장만 넣고 싶을 때(별도 타이틀/설명 HTML
  // 오버레이 없이). 이미지 자체에 헤드라인 등이 이미 포함돼 있는 경우에 사용.
  if (premiumIntro.plainImage) {
    const img = premiumIntro.plainImage
    return (
      <section id={premiumIntro.id} className={styles.sectionPlain}>
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width || 1100}
          height={img.height || 1559}
          sizes="100vw"
          className={styles.plainImage}
        />
      </section>
    )
  }

  // split: true — 왼쪽 이미지컷 + 오른쪽 세로 카피(eyebrow · 부제 · 세로 라인 · 시 형태 문단).
  // paragraphs는 문단 배열, 각 문단은 줄 배열 — 줄 단위로 끊어 PC·모바일 모두 같은 줄바꿈 유지
  // split.reverse: true — PC에서 이미지를 오른쪽, 카피를 왼쪽으로(연속 split 섹션을 지그재그로 배치할 때)
  // paragraphs 항목은 줄 배열 대신 { head, lines }로도 줄 수 있음 — head는 문단 위 굵은 소제목
  if (premiumIntro.split) {
    return (
      <section id={premiumIntro.id} className={cn(styles.sectionSplit, premiumIntro.reverse && styles.sectionSplitReverse)}>
        <div className={styles.splitImageWrap}>
          <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="(min-width: 1024px) 64vw, 100vw" className={styles.bgImage} />
          {premiumIntro.imageBadge && <span className={styles.splitBadge}>{premiumIntro.imageBadge}</span>}
        </div>
        <Reveal className={styles.splitText}>
          {premiumIntro.eyebrow && <p className={styles.splitEyebrow}>{premiumIntro.eyebrow}</p>}
          {premiumIntro.titleLine1 && <h2 className={styles.splitTitle}>{premiumIntro.titleLine1}</h2>}
          <span className={styles.splitLine} />
          {premiumIntro.paragraphs?.map((para, i) => (
            <p key={i} className={styles.splitPara}>
              {!Array.isArray(para) && para.head && <strong className={styles.splitParaHead}>{para.head}</strong>}
              {(Array.isArray(para) ? para : para.lines).map((line, j) => (
                <Fragment key={j}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          ))}
        </Reveal>
      </section>
    )
  }

  // clean: true — 타이틀은 흰 배경 위에 깔끔하게, 배경 사진은 그 아래 별도 블록으로 분리하고
  // desc만 사진 위(하단 그라디언트)에 얹는 레이아웃. 없으면 기존처럼 사진 전체에 텍스트를 오버레이.
  if (premiumIntro.clean) {
    return (
      <section className={styles.sectionClean}>
        <div className={styles.cleanHead}>
          <p className={styles.eyebrow}>{premiumIntro.eyebrow}</p>
          <h2 className={styles.cleanTitle}>{premiumIntro.titleLine1}</h2>
          <p className={styles.cleanSubtitle}>{premiumIntro.titleLine2}</p>
        </div>
        <div className={styles.cleanImageWrap}>
          <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
          <div className={styles.cleanOverlay} />
          <div className={styles.cleanImageText}>
            <p>
              {descSegments.map((seg, i) =>
                seg.accent ? (
                  <strong key={i} className={styles.descAccent}>
                    {seg.text}
                  </strong>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
            <p>{premiumIntro.descLine2}</p>
          </div>
        </div>
      </section>
    )
  }

  const introStyle = {
    ...(premiumIntro.fontFamily && { '--intro-font': premiumIntro.fontFamily }),
    // contentOffsetY — 가운데 정렬된 문구 묶음을 위/아래로 살짝 옮길 때(음수면 위로, 예: '-6vh')
    ...(premiumIntro.contentOffsetY && { '--intro-content-offset': premiumIntro.contentOffsetY }),
    ...(premiumIntro.titleColor && {
      '--intro-color': premiumIntro.titleColor,
      '--intro-title-shadow': premiumIntro.titleShadow || '0 2px 16px rgba(0, 0, 0, 0.55)',
    }),
    ...(premiumIntro.eyebrowColor && {
      '--intro-eyebrow-color': premiumIntro.eyebrowColor,
      '--intro-eyebrow-shadow': premiumIntro.eyebrowShadow || 'none',
    }),
    ...(premiumIntro.descColor && {
      '--intro-desc-color': premiumIntro.descColor,
      '--intro-desc-shadow': premiumIntro.descShadow || '0 2px 12px rgba(0, 0, 0, 0.65)',
      '--intro-desc-accent-color': premiumIntro.descAccentColor || premiumIntro.descColor,
    }),
  }

  return (
    <section
      className={cn(styles.section, premiumIntro.align === 'left' && styles.sectionLeft)}
      style={Object.keys(introStyle).length ? introStyle : undefined}
    >
      <div className={styles.bg}>
        <Image src={premiumIntro.bgImage.src} alt={premiumIntro.bgImage.alt} fill sizes="100vw" className={styles.bgImage} />
        {premiumIntro.overlay !== false && <div className={styles.overlay} />}
      </div>

      {(premiumIntro.eyebrow || premiumIntro.introBox || premiumIntro.titleLine1 || premiumIntro.descLine1) && (
        <Reveal className={cn(styles.content, premiumIntro.align === 'left' && styles.contentLeft)}>
          {premiumIntro.introBox && (
            <div className={styles.introBox}>
              <p>{premiumIntro.introBox.line1}</p>
              <p>
                <strong>{premiumIntro.introBox.line2}</strong>
              </p>
            </div>
          )}
          <span className={styles.accentLine} />
          {premiumIntro.eyebrow && <p className={styles.eyebrow}>{premiumIntro.eyebrow}</p>}
          {premiumIntro.titleLine1 && (
            <h2 className={cn(styles.title, premiumIntro.titleUnderline && styles.titleUnderline)}>
              <span className={styles.titleLine1}>{renderDescBreaks(premiumIntro.titleLine1)}</span>
              {premiumIntro.titleLine2 && (
                <span className={styles.titleLine2}>
                  <MobileBreakText text={premiumIntro.titleLine2} />
                </span>
              )}
            </h2>
          )}
          {premiumIntro.descLine1 && (
            <p className={styles.desc}>
              {descSegments.map((seg, i) =>
                seg.accent ? (
                  <strong key={i} className={styles.descAccent}>
                    {renderDescBreaks(seg.text)}
                  </strong>
                ) : (
                  <span key={i}>{renderDescBreaks(seg.text)}</span>
                )
              )}
              <br />
              <MobileBreakText text={premiumIntro.descLine2} breakClassName={styles.mobileBreak} />
            </p>
          )}
        </Reveal>
      )}

      {premiumIntro.footnote && <p className={styles.footnote}>{premiumIntro.footnote}</p>}

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
