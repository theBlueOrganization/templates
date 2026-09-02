import styles from './SignatureFooterGeomdan.module.css'

// 더샵 검단레이크파크 전용 슬림 푸터 — 참고 사이트는 계열사 사이트 셀렉트 없이
// 브랜드 워드마크 + 메타 리스트(시행/시공/분양안내/자료출처) + 홈페이지 운영·관리 대행사 정보
// (담당회사/사업자등록번호/이메일/전화번호) + 안내문/최종수정일/저작권만 있어 기존 공용
// SignatureFooter(계열사 드롭다운 포함)보다 훨씬 단순함 — 전용 컴포넌트로 분리.
// 저작권 라인은 다른 현장들(SignatureFooter.jsx)과 동일하게 "더블루파트너스"를 명시해서 매년 자동 갱신.
export default function SignatureFooterGeomdan({ footer, projectName }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          {footer.brandLine1} <span>{footer.brandLine2}</span>
        </div>
        <dl className={styles.meta}>
          {footer.metaLines.map((line) => (
            <div key={line.label}>
              <dt>{line.label}</dt>
              <dd>{line.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.operator}>
        <p className={styles.operatorTitle}>{footer.operator.title}</p>
        <dl className={styles.meta}>
          {footer.operator.lines.map((line) => (
            <div key={line.label}>
              <dt>{line.label}</dt>
              <dd>{line.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.bottom}>
        <p>{footer.bottomNote}</p>
        <p className={styles.updated}>
          최종 업데이트 <time>{footer.updatedDate}</time>
        </p>
      </div>

      <p className={styles.copy}>
        COPYRIGHT ⓒ {new Date().getFullYear()} {projectName}│주식회사 더블루파트너스. ALL RIGHTS RESERVED.
      </p>
    </footer>
  )
}
