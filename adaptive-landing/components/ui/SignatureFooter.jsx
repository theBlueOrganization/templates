'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { useUtmSource } from '../../lib/useUtmSource'
import { cn } from '../../lib/utils'
import styles from './SignatureFooter.module.css'

// 전 현장 공용 푸터 — 시행/시공/온라인대행 등 다중 회사정보 라인 포함
export default function SignatureFooter({ footer, telNumber, telNumberByUtm, projectName }) {
  // telNumberByUtm에 등록된 utm_source로 들어온 경우에만 노출 전화번호를 덮어씀 (SignatureHeader/SignatureHero와 동일 규칙)
  const utmSource = useUtmSource()
  const resolvedTelNumber = telNumberByUtm?.[utmSource] ?? telNumber

  return (
    // footer.bgColor가 있으면 기본 네이비 오버레이 없이 그 단색으로 배경을 칠함(없는 현장은 기존 그대로)
    <footer className={styles.footer} style={footer.bgColor ? { background: footer.bgColor } : undefined}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.gnbWrap}>
            <p className={styles.highlightText}>{footer.highlightText}</p>
            <a href={`tel:${resolvedTelNumber}`} className={styles.callBtn} aria-label="전화상담">
              📞
            </a>
          </div>
          <div className={styles.topRight}>
            <p className={styles.slogan}>{footer.agencySlogan}</p>
          </div>
        </div>

        <div className={styles.hr} />

        <div className={styles.bottomRow}>
          {/* footer.logoWidth(px) — 현장별 로고 표시 폭 (없으면 CSS 기본 110px) */}
          <div
            className={cn(
              styles.logo,
              footer.logoAlign === 'center' && styles.logoCentered,
              footer.logoAlignDesktop === 'center' && styles.logoCenteredDesktop,
            )}
            style={footer.logoWidth ? { '--footer-logo-w': `${footer.logoWidth}px` } : undefined}
          >
            <Image src={footer.logo.src} alt={footer.logo.alt} width={footer.logo.width || 130} height={footer.logo.height || 39} />
          </div>
          <div className={styles.vr} />
          <div className={styles.info}>
            <div className={styles.companyLines}>
              {/* line.dividerBefore — 그 항목 앞에 가로 구분선을 그어 위 그룹(시행/시공 등)과 나눔 (새 줄에서 시작) */}
              {footer.companyLines.map((line) => (
                <Fragment key={line.label}>
                  {line.dividerBefore && <span className={styles.companyDivider} aria-hidden="true" />}
                  <span className={cn(styles.companyLine, line.newLine && styles.companyLineBreak)}>
                    <strong>{line.label}</strong> {line.value}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className={styles.disclaimers}>
              {footer.disclaimers.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className={styles.copyright}>
              COPYRIGHT ⓒ {new Date().getFullYear()} {projectName}│주식회사 더블루파트너스. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className={styles.cs}>
            <p className={styles.csPhone}>{footer.csPhone}</p>
            <p className={styles.csHours}>{footer.csHours}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
