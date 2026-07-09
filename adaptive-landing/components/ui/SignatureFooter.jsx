import Image from 'next/image'
import styles from './SignatureFooter.module.css'

// eupseong-prugio 전용 푸터 — 시행/시공/온라인대행 등 다중 회사정보 라인 + Family Site 셀렉트를 포함
export default function SignatureFooter({ footer, telNumber }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.gnbWrap}>
            <p className={styles.highlightText}>{footer.highlightText}</p>
            <a href={`tel:${telNumber}`} className={styles.callBtn} aria-label="전화상담">
              📞
            </a>
          </div>
          <div className={styles.topRight}>
            <p className={styles.slogan}>{footer.agencySlogan}</p>
            <label className={styles.familySelectWrap}>
              <select className={styles.familySelect} defaultValue="">
                <option value="" disabled>
                  Family Site
                </option>
                <option value="daewoo">(주)대우건설</option>
                <option value="thebluepartners">주식회사 더블루파트너스</option>
              </select>
            </label>
          </div>
        </div>

        <div className={styles.hr} />

        <div className={styles.bottomRow}>
          <div className={styles.logo}>
            <Image src={footer.logo.src} alt={footer.logo.alt} width={130} height={39} />
          </div>
          <div className={styles.vr} />
          <div className={styles.info}>
            <div className={styles.companyLines}>
              {footer.companyLines.map((line) => (
                <span key={line.label} className={styles.companyLine}>
                  <strong>{line.label}</strong> {line.value}
                </span>
              ))}
            </div>
            <div className={styles.disclaimers}>
              {footer.disclaimers.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className={styles.copyright}>
              COPYRIGHT ⓒ {new Date().getFullYear()} 업성 푸르지오 레이크시티│주식회사 더블루파트너스. ALL RIGHTS RESERVED.
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
