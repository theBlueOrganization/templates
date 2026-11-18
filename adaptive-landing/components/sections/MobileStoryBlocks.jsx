import Image from 'next/image'
import styles from './MobileStoryBlocks.module.css'

// 모바일 전용 '문구 + 사진 조각' 구성 — 글씨가 든 긴 완성 이미지가 폰 폭에서 안 읽힐 때, 같은 문구를 텍스트로 + 사진은 크롭 이미지로.
// blocks: [{ eyebrow?, titleLines?, descLines?, bullets?, grid?, photos?: [{ src, alt, width, height, caption? }] }]
// 단지안내(SignatureComplexBlocks)의 block.mobileStory에서 사용. 예: seocho-ph1603 부티크 가든·웰빙 커뮤니티
export default function MobileStoryBlocks({ blocks, className }) {
  return (
    <div className={className ? `${styles.wrap} ${className}` : styles.wrap}>
      {blocks.map((block, bi) => (
        <div key={bi} className={styles.block}>
          {block.eyebrow && <p className={styles.eyebrow}>{block.eyebrow}</p>}
          {block.titleLines && (
            <h3 className={styles.title}>
              {block.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
          )}
          {block.descLines && (
            <p className={styles.desc}>
              {block.descLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          )}
          {block.bullets && (
            <ul className={styles.bullets}>
              {block.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          {block.photos && (
            <div className={block.grid ? styles.grid : styles.photos}>
              {block.photos.map((photo) => (
                <figure key={photo.src} className={styles.photo}>
                  <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="100vw" />
                  {photo.caption && <figcaption>{photo.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
