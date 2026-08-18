import styles from "./ClientFooter.module.css";

export default function ClientFooter({ clientCompany, telNumber, theme }) {
  if (!clientCompany) return null;
  // 분양대행사 하나만 표기하는 현장은 객체 하나, 분양대행사+시행사처럼 두 곳 이상을 나란히 표기해야 하는
  // 현장은 배열로 지정 — 배열의 첫 번째 항목에만 대표 전화번호(telNumber)가 함께 표시됨
  const companies = Array.isArray(clientCompany) ? clientCompany : [clientCompany];
  if (companies.length === 0) return null;

  const th = theme ?? {};
  // theme.ClientFooter_* 값은 객체(모든 회사에 동일 적용) 또는 배열(clientCompany 배열과 같은 순서로 회사별 개별 지정) 둘 다 지원
  const themeFor = (entry, i) => (Array.isArray(entry) ? entry[i] : entry) ?? {};

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {companies.map(({ roleLabel, name, bizNumber, representative, address }, i) => {
          const isPrimary = i === 0;
          const showTel = isPrimary && telNumber;
          // roleLabel(예: "시행사")이 있으면 상호명을 헤딩이 아니라 grid 안 라벨/값 한 행으로 표시
          // — 사업자 등록번호·대표자 등 다른 항목들과 같은 column-gap으로 간격이 맞춰짐
          const nameInGrid = Boolean(roleLabel);
          const hasAnyRow = showTel || (nameInGrid && name) || bizNumber || representative || address;

          // 전화번호·사업자번호는 SiteFooter보다 강조된 톤 유지, 대표자·주소는 기본 톤 (첫 번째 회사에만 적용)
          const nameTh = themeFor(th.ClientFooter_name, i);
          const leadTh = themeFor(th.ClientFooter_leadContact, i);
          const keyTh = themeFor(th.ClientFooter_key, i);
          const valueTh = themeFor(th.ClientFooter_value, i);
          const nameStyle = { color: nameTh.color, fontSize: nameTh.fontSize };
          const leadStyle = { color: leadTh.color, fontSize: leadTh.fontSize };
          const keyStyle = { color: keyTh.color, fontSize: keyTh.fontSize };
          const valueStyle = { color: valueTh.color, fontSize: valueTh.fontSize };

          return (
            <div key={i} className={isPrimary ? undefined : styles.block}>
              {name && !nameInGrid && (
                <p className={styles.name} style={nameStyle}>
                  {name}
                </p>
              )}
              {/* 전화번호·사업자번호·대표자·주소를 하나의 그리드로 통일 — 값 시작 위치가 전부 같은 열에 맞춰짐 */}
              {hasAnyRow && (
                <div className={styles.grid}>
                  {nameInGrid && name && (
                    <>
                      <span className={styles.key} style={keyStyle}>{roleLabel}</span>
                      <span className={styles.value} style={valueStyle}>{name}</span>
                    </>
                  )}
                  {showTel && (
                    <>
                      <span className={`${styles.key} ${styles.leadRow}`} style={leadStyle}>대표 분양 상담 문의</span>
                      <span className={`${styles.value} ${styles.leadRow}`} style={leadStyle}>{telNumber}</span>
                    </>
                  )}
                  {bizNumber && (
                    <>
                      <span className={`${styles.key} ${isPrimary ? styles.leadRow : ""}`} style={isPrimary ? leadStyle : keyStyle}>사업자 등록번호</span>
                      <span className={`${styles.value} ${isPrimary ? styles.leadRow : ""}`} style={isPrimary ? leadStyle : valueStyle}>{bizNumber}</span>
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
          );
        })}
      </div>
    </div>
  );
}