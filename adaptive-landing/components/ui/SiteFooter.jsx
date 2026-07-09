import styles from './SiteFooter.module.css'

// 하단 회사정보 + 법적 고지사항 (모든 현장 공통 문구, company/telNumber만 현장별로 바뀜)
export default function SiteFooter({ company, telNumber }) {
  return (
    <footer id="main-footer" className={styles.footer}>
      <div className={styles.inner}>
        <p>
          <span className={styles.fieldLabel}>담당자명</span>
          {company.name}
        </p>
        <p>
          <span className={styles.fieldLabel}>사업자 등록번호</span>
          {company.bizNumber}
        </p>
        <p>
          <span className={styles.fieldLabel}>이메일</span>
          {company.email}
        </p>
        <p>
          <span className={styles.fieldLabel}>대표 분양 상담 문의</span>
          {telNumber}
        </p>

        <div className={styles.legal}>
          <p>* 본 웹사이트에 사용된 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제 시공 시 차이가 있을 수 있습니다.</p>
          <p>* 본 웹사이트상의 개발 및 교통 계획 등에 대한 사항은 관계기관의 사정에 따라 변경될 수 있으며, 이는 당사와 무관함을 알려드립니다.</p>
          <p>* 본 웹사이트상의 내용은 시행사, 시공사 및 관계기관에 의해 변경될 수 있습니다.</p>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
