import styles from "./ClientFooter.module.css";

export default function ClientFooter({ clientCompany, telNumber, theme }) {
  if (!clientCompany) return null;
  const { name, bizNumber, representative, address } = clientCompany;
  const th = theme ?? {};
  const leadStyle = { fontSize: th.ClientFooter_leadContact?.fontSize, color: th.ClientFooter_leadContact?.color };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <p
          className={styles.name}
          style={{ color: th.ClientFooter_name?.color, fontSize: th.ClientFooter_name?.fontSize }}
        >
          {name}
        </p>
        {/* 문의번호·사업자 등록번호 — 그리드로 라벨 폭을 고정해 값 시작 위치를 맞춤 */}
        {(telNumber || bizNumber) && (
          <div className={styles.leadRow}>
            {telNumber && (
              <>
                <span className={`${styles.leadContact} ${styles.leadKey}`} style={leadStyle}>대표 분양 상담 문의</span>
                <span className={styles.leadContact} style={leadStyle}>{telNumber}</span>
              </>
            )}
            {bizNumber && (
              <>
                <span className={`${styles.leadContact} ${styles.leadKey}`} style={leadStyle}>사업자 등록번호</span>
                <span className={styles.leadContact} style={leadStyle}>{bizNumber}</span>
              </>
            )}
          </div>
        )}
        {(representative || address) && (
          <div className={styles.info} style={{ color: th.ClientFooter_value?.color }}>
            {representative && <p><span className={styles.key} style={{ color: th.ClientFooter_key?.color }}>대표자</span>{representative}</p>}
            {address && <p><span className={styles.key} style={{ color: th.ClientFooter_key?.color }}>주소</span>{address}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
