import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from '../motion/Stagger'
import styles from './PointSection.module.css'

// 핵심 강점 카드 그리드 — 모바일 2열, 데스크톱(lg) 4열
export default function PointSection({ section, theme }) {
  const { id, title, subtitle, items } = section
  const th = theme ?? {}

  return (
    <section id={id} style={{ background: th.point?.background }} className={styles.section}>
      <SectionHeader title={title} subtitle={subtitle} theme={theme} />
      {/* Stagger: 화면에 보이는 시점에 카드들을 순서대로 하나씩 페이드인시킴 */}
      <Stagger className={styles.grid}>
        {items.map((item) => (
          // StaggerItem 각각이 카드 한 장. icon은 선택 항목이라 없으면 생략
          <StaggerItem
            key={item.title}
            className={styles.card}
            style={{ background: th.point?.cardBackground ?? '#f8fafc' }}
          >
            {item.icon && (
              <span className={styles.icon} style={{ color: th.point?.iconColor }}>
                {item.icon}
              </span>
            )}
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
