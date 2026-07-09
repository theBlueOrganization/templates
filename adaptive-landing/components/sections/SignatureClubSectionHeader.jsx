import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureClubSectionHeader.module.css'

// 커뮤니티 하위 섹션(사우나·스포츠·카페·에듀존) 공통 헤더 — 뱃지 + 제목 + 설명
export default function SignatureClubSectionHeader({ badge, titlePlain, titleAccent, desc, dark, badgeStyle = 'solid' }) {
  const descLines = Array.isArray(desc) ? desc : [desc]

  return (
    <Reveal className={cn(styles.head, dark && styles.dark)}>
      <span className={cn(styles.badge, badgeStyle === 'outline' && styles.badgeOutline)}>{badge}</span>
      <h2 className={styles.title}>
        {titlePlain}
        <strong>{titleAccent}</strong>
      </h2>
      <p className={styles.desc}>
        {descLines.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>
    </Reveal>
  )
}
