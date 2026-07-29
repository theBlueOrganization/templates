import styles from "./ClientFooter.module.css";

export default function ClientFooter({ clientCompany, telNumber, theme }) {
  if (!clientCompany) return null;
  const { name, bizNumber, representative, address } = clientCompany;
  const th = theme ?? {};

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <p
          className={styles.name}
          style={{ color: th.ClientFooter_name?.color, fontSize: th.ClientFooter_name?.fontSize }}
        >
          {name}
        </p>
        {telNumber && (
          <p className={styles.leadContact}>
            <span className={styles.leadKey}>대표 분양 상담 문의</span>{telNumber}
          </p>
        )}
        <div className={styles.info} style={{ color: th.ClientFooter_value?.color }}>
          {bizNumber && <p><span className={styles.key} style={{ color: th.ClientFooter_key?.color }}>사업자 등록번호</span>{bizNumber}</p>}
          {representative && <p><span className={styles.key} style={{ color: th.ClientFooter_key?.color }}>대표자</span>{representative}</p>}
          {address && <p><span className={styles.key} style={{ color: th.ClientFooter_key?.color }}>주소</span>{address}</p>}
        </div>
      </div>
    </div>
  );
}
