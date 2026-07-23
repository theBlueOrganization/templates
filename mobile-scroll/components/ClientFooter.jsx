import styles from "./ClientFooter.module.css";

export default function ClientFooter({ clientCompany }) {
  if (!clientCompany) return null;
  const { name, bizNumber, representative, address } = clientCompany;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <div className={styles.info}>
          <p><span className={styles.key}>사업자 등록번호</span>{bizNumber}</p>
          <p><span className={styles.key}>대표자</span>{representative}</p>
          <p><span className={styles.key}>주소</span>{address}</p>
        </div>
      </div>
    </div>
  );
}
