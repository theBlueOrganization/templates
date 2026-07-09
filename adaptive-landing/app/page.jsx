import Link from 'next/link'
import sites from '../data/siteRegistry'
import styles from './page.module.css'

export default function IndexPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>분양 현장 목록</h1>
      <p className={styles.subheading}>등록된 현장을 선택하세요.</p>
      <ul className={styles.list}>
        {sites.map((site) => (
          <li key={site.slug}>
            <Link href={`/apt/${site.slug}`} className={styles.card}>
              <span className={styles.projectName}>{site.projectName}</span>
              <span className={styles.slug}>/apt/{site.slug}</span>
              <span className={styles.tel}>{site.telNumber}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
