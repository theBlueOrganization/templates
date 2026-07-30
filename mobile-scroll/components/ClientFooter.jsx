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
        {/* 문의번호·사업자 등록번호는 나란히 배치 — 화면이 좁으면 자동으로 줄바꿈 */}
        {(telNumber || bizNumber) && (
          <div className={styles.leadRow}>
            {telNumber && (
              <p className={styles.leadContact} style={leadStyle}>
                <span className={styles.leadKey}>대표 분양 상담 문의</span>{telNumber}
              </p>
            )}
            {bizNumber && (
              <p className={styles.leadContact} style={leadStyle}>
                <span className={styles.leadKey}>사업자 등록번호</span>{bizNumber}
              </p>
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
