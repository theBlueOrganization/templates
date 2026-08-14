import styles from "./ClientFooter.module.css";

export default function ClientFooter({ clientCompany, telNumber, theme }) {
  if (!clientCompany) return null;
  const { name, bizNumber, representative, address } = clientCompany;
  const th = theme ?? {};
  // 전화번호·사업자번호는 SiteFooter보다 강조된 톤 유지, 대표자·주소는 기본 톤
  const leadStyle = { color: th.ClientFooter_leadContact?.color, fontSize: th.ClientFooter_leadContact?.fontSize };
  const keyStyle = { color: th.ClientFooter_key?.color };
  const valueStyle = { color: th.ClientFooter_value?.color };

  const hasAnyRow = telNumber || bizNumber || representative || address;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {name && (
          <p
            className={styles.name}
            style={{ color: th.ClientFooter_name?.color, fontSize: th.ClientFooter_name?.fontSize }}
          >
            {name}
          </p>
        )}
        {/* 전화번호·사업자번호·대표자·주소를 하나의 그리드로 통일 — 값 시작 위치가 전부 같은 열에 맞춰짐 */}
        {hasAnyRow && (
          <div className={styles.grid}>
            {telNumber && (
              <>
                <span className={`${styles.key} ${styles.leadRow}`} style={leadStyle}>대표 분양 상담 문의</span>
                <span className={`${styles.value} ${styles.leadRow}`} style={leadStyle}>{telNumber}</span>
              </>
            )}
            {bizNumber && (
              <>
                <span className={`${styles.key} ${styles.leadRow}`} style={leadStyle}>사업자 등록번호</span>
                <span className={`${styles.value} ${styles.leadRow}`} style={leadStyle}>{bizNumber}</span>
              </>
            )}
            {representative && (
              <>
                <span className={styles.key} style={keyStyle}>대표자</span>
                <span className={styles.value} style={valueStyle}>{representative}</span>
              </>
            )}
            {address && (
              <>
                <span className={styles.key} style={keyStyle}>주소</span>
                <span className={styles.value} style={valueStyle}>{address}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}