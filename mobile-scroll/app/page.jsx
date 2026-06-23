import Link from "next/link";
import sites from "../data/siteRegistry";
import styles from "./page.module.css";

/**
 * 루트 인덱스 페이지 — 등록된 모든 현장 목록
 * 실제 서비스에서는 비공개 처리하거나 관리자 전용으로 변경 가능
 */
export default function IndexPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>분양 현장 목록</h1>
      <p className={styles.desc}>등록된 현장을 선택하세요.</p>

      <ul className={styles.list}>
        {sites.map((site) => (
          <li key={site.slug}>
            <Link href={`/apt/${site.slug}`} className={styles.card}>
              <span className={styles.name}>{site.projectName}</span>
              <span className={styles.tel}>{site.telNumber}</span>
              <span className={styles.slug}>/apt/{site.slug} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
