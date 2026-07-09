import Image from 'next/image'
import SectionHeader from './SectionHeader'
import Reveal from '../motion/Reveal'
import styles from './ImageBlockSection.module.css'

// 범용 섹션 — About/Point/Gallery/Location 중 어디에도 안 맞는 "이미지 + 스펙표" 조합용
// (예: 사업개요, 평면안내처럼 이미지와 표만 있으면 되는 섹션)

// label-value 표. value가 배열이면 한 줄씩 나눠서 표시
function SpecTable({ items }) {
  return (
    <table className={styles.table}>
      <tbody>
        {items.map((item) => (
          <tr key={item.label} className={styles.row}>
            <th className={styles.label}>{item.label}</th>
            <td className={styles.value}>
              {Array.isArray(item.value) ? (
                item.value.map((v, i) => (
                  <span key={i} className={styles.valueLine}>
                    {v}
                  </span>
                ))
              ) : (
                item.value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// 이미지들을 세로로 나열 (md 이상에서는 2열 그리드)
function ImageGroup({ images }) {
  return (
    <div className={styles.imageGroup}>
      {images.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={800}
          height={600}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={styles.image}
        />
      ))}
    </div>
  )
}

export default function ImageBlockSection({ section, theme }) {
  const { id, type, title, subtitle, images = [], specItems = [] } = section

  return (
    <section id={id}>
      <SectionHeader title={title} subtitle={subtitle} theme={theme} />
      <Reveal>
        {/* type 값에 따라 이미지/표를 어떤 순서로 보여줄지만 다름 */}
        {type === 'image' && <ImageGroup images={images} />}
        {type === 'image-then-spec' && (
          <>
            <ImageGroup images={images} />
            <SpecTable items={specItems} />
          </>
        )}
        {type === 'spec-then-image' && (
          <>
            <SpecTable items={specItems} />
            <ImageGroup images={images} />
          </>
        )}
        {type === 'spec-only' && <SpecTable items={specItems} />}
      </Reveal>
    </section>
  )
}
