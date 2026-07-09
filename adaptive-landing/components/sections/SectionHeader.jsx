import Reveal from '../motion/Reveal'
import styles from './SectionHeader.module.css'

// 모든 섹션 상단에 공통으로 쓰는 "구분선 + 제목 + 부제목" 블록
export default function SectionHeader({ title, subtitle, theme }) {
  const th = theme ?? {}
  return (
    <Reveal className={styles.header}>
      {/* 짧은 컬러 바 (구분선). 색상/크기는 theme.section에서 현장별로 바꿀 수 있음 */}
      <div
        className={styles.divider}
        style={{
          background: th.section?.dividerBackground ?? 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
          width: th.section?.dividerWidth ?? '40px',
          height: th.section?.dividerHeight ?? '3px',
        }}
      />
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  )
}
