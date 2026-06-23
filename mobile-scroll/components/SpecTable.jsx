import styles from "./SpecTable.module.css";

/**
 * 사업개요 스펙 테이블 컴포넌트
 * items: [{ label: string, value: string | string[] }]
 */
export default function SpecTable({ title, items = [] }) {
  return (
    <div className={styles.wrap}>
      {title && <h3 className={styles.tableTitle}>{title}</h3>}
      <dl className={styles.table}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.row}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>
              {Array.isArray(item.value)
                ? item.value.map((v, i) => <span key={i}>{v}</span>)
                : item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
