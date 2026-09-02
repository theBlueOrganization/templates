import styles from './SignatureHeaderGeomdan.module.css'

// 더샵 검단레이크파크 전용 헤더 — 참고 사이트(apt-all.app)는 헤더가 position:absolute로
// 히어로 위에만 겹쳐 보이고 스크롤하면 페이지와 함께 사라지는 구조라(고정/스크롤 상태 전환 없음)
// 별도 스크롤 리스너 없이 순수 서버 컴포넌트로 구현. 모바일(1024px 미만)에서는 참고 사이트와
// 동일하게 gnb 자체를 숨기고 워드마크·전화 버튼만 남긴다(햄버거 메뉴 없음).
export default function SignatureHeaderGeomdan({ header, telNumber }) {
  const digits = telNumber.replace(/[^0-9]/g, '')

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#top" aria-label={`${header.wordmarkLine1} ${header.wordmarkLine2} 홈`}>
        <span>{header.wordmarkLine1}</span>
        <strong>{header.wordmarkLine2}</strong>
      </a>
      <nav className={styles.nav} aria-label="주요 메뉴">
        {header.gnb.map((item) => (
          <a key={item.targetId} href={`#${item.targetId}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className={styles.call} href={`tel:${digits}`}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
        <span>{header.callLabel}</span>
      </a>
    </header>
  )
}
