import AboutSection from './AboutSection'
import PointSection from './PointSection'
import GallerySection from './GallerySection'
import LocationSection from './LocationSection'
import ImageBlockSection from './ImageBlockSection'

// 현장 데이터(sections 배열)의 각 항목을 type 값에 맞는 컴포넌트로 연결해주는 교환기 역할
// 새 섹션 종류를 추가하려면: 1) 컴포넌트 작성 2) 여기 분기 추가
export default function SectionRenderer({ section, theme }) {
  switch (section.type) {
    case 'about':
      return <AboutSection section={section} theme={theme} />
    case 'point':
      return <PointSection section={section} theme={theme} />
    case 'gallery':
      return <GallerySection section={section} theme={theme} />
    case 'location':
      return <LocationSection section={section} theme={theme} />
    // image / image-then-spec / spec-then-image / spec-only
    default:
      return <ImageBlockSection section={section} theme={theme} />
  }
}
