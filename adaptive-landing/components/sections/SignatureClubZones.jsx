import Image from 'next/image'
import Reveal from '../motion/Reveal'
import { cn } from '../../lib/utils'
import styles from './SignatureClubZones.module.css'

// facilities 안 항목에 title/desc 외에 label(동/층 표시)이 있으면 그 위에 작은 라벨을 하나 더 그려줌
// (11블록 EDU ZONE처럼 사진 하나에 서로 다른 동/층 시설 2개가 같이 묶이는 경우)
function FacilityList({ facilities }) {
  return (
    <ul className={styles.facilityList}>
      {facilities.map((f) => (
        <li key={f.title} className={styles.facilityItem}>
          {f.label && <span className={styles.facilitySubLabel}>{f.label}</span>}
          <strong className={styles.facilityTitle}>{f.title}</strong>
          {f.desc && <p className={styles.facilityDesc}>{f.desc}</p>}
        </li>
      ))}
    </ul>
  )
}

// image가 없으면(아직 파일을 안 받은 상태) 점선 테두리의 빈 틀만 그려서 어디에 무슨 이미지가
// 들어갈지 자리와 크기를 미리 잡아둠 — src만 채우면 그대로 실제 이미지로 바뀜
function ImageFrame({ image, alt, sizes, fit = 'cover' }) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn(styles.frameImage, fit === 'contain' && styles.frameImageContain)}
      />
    )
  }
  return (
    <div className={styles.framePlaceholder}>
      <span className={styles.framePlaceholderIcon} aria-hidden="true">
        🖼
      </span>
      <span className={styles.framePlaceholderLabel}>{alt}</span>
    </div>
  )
}

function Visual({ image, alt, caption, imageFit }) {
  return (
    <div className={styles.visual}>
      <div className={styles.visualImageBox}>
        <ImageFrame image={image} alt={alt || caption || '이미지'} sizes="(min-width: 1024px) 45vw, 100vw" fit={imageFit} />
      </div>
      {caption && <p className={styles.visualCaption}>{caption}</p>}
    </div>
  )
}

// label(동/층) + 시설 목록 + 이미지(도면 또는 사진) 하나를 좌우로 배치하는 기본 블록
// block.imageType이 'floorplan'이면 도면이 안 잘리도록 object-fit:contain으로 그림 (기본은 사진용 cover)
function SplitBlock({ block }) {
  return (
    <div className={styles.split}>
      <div className={styles.splitText}>
        {block.label && <p className={styles.rowLabel}>{block.label}</p>}
        <FacilityList facilities={block.facilities} />
      </div>
      <Visual image={block.image} caption={block.caption} imageFit={block.imageType === 'floorplan' ? 'contain' : 'cover'} />
    </div>
  )
}

// SplitBlock을 2개(또는 그 이상) 나란히 배치하는 블록 — 1BL/11BL CULTURE ZONE처럼 동별 카드가 나열될 때 씀
function PairBlock({ block }) {
  return (
    <div className={styles.pair}>
      {block.items.map((item) => (
        <div key={item.label} className={styles.pairItem}>
          {item.label && <p className={styles.rowLabel}>{item.label}</p>}
          <FacilityList facilities={item.facilities} />
          <Visual image={item.image} caption={item.caption} />
        </div>
      ))}
    </div>
  )
}

// 도면(또는 사진) 하나를 크게 중앙에 놓고, 배지 문구 + 시설 목록을 곁들이는 블록
// 3~6블록 CULTURE ZONE(Y자 도면+4개 시설), SPORTS ZONE(도면만, facilities 없음) 둘 다 이 블록으로 표현
function FeaturedBlock({ block }) {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredVisual}>
        <div className={styles.featuredImageBox}>
          <ImageFrame image={block.image} alt={block.caption || '평면도'} sizes="(min-width: 1024px) 700px, 100vw" fit="contain" />
        </div>
        {block.badge && <p className={styles.featuredBadge}>{block.badge}</p>}
        {block.caption && <p className={styles.visualCaption}>{block.caption}</p>}
      </div>
      {block.facilities?.length > 0 && (
        <div className={styles.featuredFacilities}>
          <FacilityList facilities={block.facilities} />
        </div>
      )}
    </div>
  )
}

// 사진 여러 장을 캡션과 함께 한 줄로 나열하는 블록 (텍스트 없이 사진만)
function PhotoStripBlock({ block }) {
  return (
    <div className={styles.photoStrip}>
      {block.photos.map((p) => (
        <div key={p.caption} className={styles.photoStripItem}>
          <div className={styles.photoStripImageBox}>
            <ImageFrame image={p.image} alt={p.caption} sizes="(min-width: 1024px) 33vw, 100vw" fit={p.imageType === 'floorplan' ? 'contain' : 'cover'} />
          </div>
          <p className={styles.visualCaption}>{p.caption}</p>
        </div>
      ))}
    </div>
  )
}

const BLOCK_COMPONENTS = {
  split: SplitBlock,
  pair: PairBlock,
  featured: FeaturedBlock,
  photoStrip: PhotoStripBlock,
}

// 커뮤니티 — 원본 자료 그대로 블록(1BL/3~6BL/11BL)별 CULTURE·SPORTS·EDU ZONE 구조로 재현
// 시설 사진/도면은 아직 파일이 없어 club.zones[].blocks[]의 image가 없으면 그 부분만 비워둔 채로 렌더링됨
// club.gallery가 있으면(단순 사진 나열만 필요한 현장) zones 구조 없이 사진 그리드만 보여줌
export default function SignatureClubZones({ club }) {
  return (
    <section id={club.id} className={styles.section}>
      <Reveal className={styles.introHead}>
        <p className={styles.introEyebrow}>{club.intro.eyebrow}</p>
        <h2 className={styles.introTitle}>
          <span>{club.intro.titleLine1}</span>
          <strong>{club.intro.titleLine2}</strong>
        </h2>
        <p className={styles.introDesc}>{club.intro.desc}</p>
      </Reveal>

      {/* 이미지 자체가 이미 완성된 섹션 캡처(존 배너+텍스트+사진)라 원본 비율 그대로 세로로 쌓음 */}
      {club.gallery && (
        <div className={styles.galleryStack}>
          {club.gallery.map((item, i) =>
            item.image ? (
              <Reveal key={item.image.src} delay={Math.min(0.05 * i, 0.3)} className={styles.galleryStackItem}>
                <Image
                  src={item.image.src}
                  alt={item.alt ?? `커뮤니티 ${i + 1}`}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 850px, 100vw"
                  className={styles.galleryStackImage}
                />
              </Reveal>
            ) : (
              <Reveal key={i} delay={Math.min(0.05 * i, 0.3)} className={cn(styles.galleryStackItem, styles.galleryStackPlaceholder)}>
                <span className={styles.framePlaceholderIcon} aria-hidden="true">
                  🖼
                </span>
                <span className={styles.framePlaceholderLabel}>{item.alt ?? `커뮤니티 ${i + 1}`}</span>
              </Reveal>
            )
          )}
        </div>
      )}

      {club.zones?.map((zone) => (
        <div key={zone.banner} className={styles.zone}>
          <Reveal className={styles.banner}>
            <span>{zone.banner}</span>
          </Reveal>
          <div className={styles.blocks}>
            {zone.blocks.map((block, i) => {
              const BlockComponent = BLOCK_COMPONENTS[block.type]
              return (
                <Reveal key={i} delay={0.05 * i}>
                  <BlockComponent block={block} />
                </Reveal>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
