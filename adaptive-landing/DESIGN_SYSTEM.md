# Figma → 코드 변환 규칙 (adaptive-landing)

Figma MCP로 디자인을 받아 구현할 때 이 템플릿에서 지켜야 하는 규칙입니다.
이 템플릿은 Tailwind가 아니라 **컴포넌트별 CSS Modules**(`ComponentName.module.css`)로 스타일을
관리합니다. CLAUDE.md의 "Figma 구현 원칙"(pixel-perfect, 모바일 퍼스트 순서)은 그대로 적용되지만,
표현 방법은 Tailwind 클래스가 아니라 **모바일 기본 → `@media (min-width: ...)`로 확장**하는
일반 CSS로 작성합니다. 여기서는 이 템플릿에만 있는 반응형 브레이크포인트·섹션 타입·테마·모션
규칙을 정의합니다.

---

## 0. CSS Modules 작성 규칙

- 컴포넌트 파일(`ComponentName.jsx`)과 같은 폴더에 `ComponentName.module.css`를 만들고
  `import styles from './ComponentName.module.css'` 후 `className={styles.foo}`로 사용합니다.
- 클래스명은 camelCase (`.thumbButton`, `.itemTitle`)로 통일합니다.
- 여러 컴포넌트가 똑같은 값을 반복해도 공용 CSS 파일로 추상화하지 않습니다. 각 컴포넌트의
  스타일을 그 파일 안에서 완결시켜야 나중에 그 컴포넌트만 열어서 바로 수정할 수 있습니다
  (숫자가 겹치는 건 괜찮습니다 — 예: 430/768/1200 컨테이너 값은 여러 파일에 그대로 반복됩니다).
- 조건부 클래스가 필요하면 `lib/utils.js`의 `cn()`(clsx 래퍼)으로 여러 module 클래스를 합칩니다.
  예: `cn(styles.navItem, active ? styles.navItemActive : styles.navItemScrolled)`
- 브라우저 기본 스타일 리셋은 `app/globals.css`에 전역으로 이미 정의돼 있습니다
  (`button`, `input`, `ul`, `table` 등). 새 태그를 쓸 때 이상하게 보이면 리셋이 빠진 건 아닌지
  먼저 `globals.css`를 확인합니다.

## 1. 브레이크포인트 ↔ Figma 프레임 대응

| Figma 프레임 | 뷰포트 기준 | 미디어 쿼리 | 공용 컨테이너 |
|---|---|---|---|
| Mobile | 375~430px | (기본, 미디어 쿼리 없음) | `max-width: 430px` |
| Tablet | 768px | `@media (min-width: 768px)` | `max-width: 768px` |
| Desktop | 1200~1440px | `@media (min-width: 1024px)` | `max-width: 1200px` |

- 컨테이너 값(430/768/1200px)은 전역 상수처럼 취급합니다. Figma 값이 다르면 이 표 자체를 수정하고,
  섹션마다 임의로 다른 max-width를 주지 않습니다.
- Figma에 Tablet 프레임이 없으면 Mobile 값을 768px 구간에도 그대로 유지하고 1024px 이상에서만
  Desktop 값으로 바꿉니다. Mobile→Desktop 사이 값을 임의로 보간하지 않습니다.
- CSS는 항상 **(기본 모바일 규칙) → `@media (min-width: 768px)` → `@media (min-width: 1024px)`**
  순서로 작성합니다 (나중 규칙이 우선 적용되도록, CLAUDE.md의 모바일 퍼스트 규칙과 동일한 취지).

```css
/* 올바름 */
.title {
  font-size: 20px;
}

@media (min-width: 768px) {
  .title {
    font-size: 24px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 30px;
  }
}
```

## 2. 타이포그래피 / 스페이싱

- Figma 텍스트 스타일의 font-size·line-height·letter-spacing을 그대로 px/em 값으로 옮깁니다.
  Tailwind 스케일에 맞출 필요가 없으니 Figma 수치를 반올림하지 말고 그대로 씁니다.
- 폰트는 `app/layout.jsx`에 등록된 3종(`--font-sans` Noto Sans KR, `--font-serif` Noto Serif KR,
  `--font-display` Bebas Neue) 중 매칭시키고, 새 폰트가 필요하면 같은 방식(`next/font/google`)으로
  추가한 뒤 `app/globals.css`의 `:root`에 CSS 변수를 등록합니다.
- 간격(margin/padding/gap)도 Figma 수치를 그대로 px로 씁니다.

## 3. 컬러 — 하드코딩 금지, theme 객체로

Figma 컬러 스타일을 `.module.css`에 직접 박아넣지 않습니다. 현장마다 색이 바뀌므로 항상 `theme`
prop(각 현장 데이터의 `theme` 객체)을 통해 받아 **인라인 `style={{ color: ... }}`로 적용**하고,
실제 값은 `data/sites/[slug].js`의 `theme` 객체에 기록합니다. CSS Module 파일에는 테마와 무관한
고정 색(예: 본문 회색 `#4b5563`, 구분선 `#e5e7eb` 같은 중립색)만 적어둡니다.

기존 필드로 커버되지 않는 색상이 Figma에 있으면:
1. 해당 컴포넌트에서 `theme?.about?.titleColor` 형태로 새 키를 참조하도록 코드 추가 (JSX의 `style` 속성)
2. `example-apt.js`의 `theme` 객체에 그 키의 기본값 예시 추가
3. `example-apt.js` 상단 주석에 새 키가 뭘 하는지 한 줄 추가

`.module.css` 파일 안에 현장마다 바뀌어야 하는 색을 새로 하드코딩하지 않습니다 (fallback `??`
기본값을 JSX의 인라인 style에 넣는 것은 허용).

## 4. Figma 섹션 → 섹션 타입 매핑

Figma 프레임/레이어 이름과 구성으로 아래처럼 판단합니다. 현장 데이터의 각 섹션 객체는 `type` 필드로
어떤 컴포넌트를 쓸지 정합니다.

| Figma 구성 | `type` 값 | 컴포넌트 |
|---|---|---|
| 텍스트 + 이미지 2단 (브랜드/컨셉 소개) | `about` | `AboutSection` |
| 아이콘+제목+설명 카드 3~6개 반복 그리드 | `point` | `PointSection` |
| 이미지 여러 장 나열 (평면도·조감도 등) | `gallery` | `GallerySection` |
| 지도 + 주소 + 교통정보 | `location` | `LocationSection` |
| 그 외 이미지/스펙표 조합 (사업개요 등) | `image` / `image-then-spec` / `spec-then-image` / `spec-only` | `ImageBlockSection` |

이 5종에 안 맞는 완전히 새로운 레이아웃이면:
1. `components/sections/`에 새 컴포넌트와 `.module.css` 작성
2. `SectionRenderer.jsx`에 분기 한 줄 추가
3. `data/sites/example-apt.js` 상단 주석의 타입 목록에도 추가

기존 타입에 억지로 끼워 맞추지 않습니다 (예: 지도가 없는데 `location`을 쓰지 않기).

## 5. 반응형 레이아웃 규칙

- Figma Desktop 프레임이 2단 그리드면 768px(또는 해당 폭) 이상에서
  `grid-template-columns: repeat(2, 1fr)`을 주고, Mobile이 세로 스택이면 기본 상태는
  `display: grid`만 두고 컬럼을 지정하지 않아 순서대로 쌓이게 합니다.
- 이미지 좌/우 위치가 Figma에서 지정돼 있으면 `AboutSection`의 `imagePosition` 필드처럼 데이터로
  표현하고, `order` 값을 담은 CSS 클래스(`.order1` / `.order2`)를 조건부로 골라 적용합니다.
  컴포넌트 코드에 순서를 하드코딩하지 않습니다.
- 갤러리류(이미지 여러 장)는 Mobile은 `overflow-x: auto` + `scroll-snap-type: x mandatory` 가로
  스크롤, 1024px 이상에서 `display: grid`로 전환하는 기존 `GallerySection` 패턴을 기본으로
  따릅니다.
- `BottomBar`는 `@media (min-width: 1024px) { display: none; }`이 기본입니다. Desktop 프레임에
  별도 CTA 바가 있으면 `TopNav`나 새 Desktop 전용 컴포넌트로 옮기고, `BottomBar`를 데스크톱에서
  강제로 보이게 하지 않습니다.

## 6. 모션 (Figma Prototype/Interaction → Framer Motion)

- 스크롤 진입 시 fade+slide는 `components/motion/Reveal.jsx`를 재사용합니다 (delay/y 값만 조정).
- 카드형 리스트의 순차 등장은 `Stagger`/`StaggerItem`(`components/motion/Stagger.jsx`)을 재사용합니다.
- 기존 이징 값을 기본으로 유지합니다: 리빌류 `[0.22, 1, 0.36, 1]`, 커튼/슬라이드류
  `[0.76, 0, 0.24, 1]`. Figma에 명시된 이징이 있으면 그 값으로 교체합니다.
- 개별 섹션 컴포넌트 안에 새 모션 로직을 인라인으로 작성하지 않습니다. 재사용 가능한 패턴이면
  `components/motion/`에 컴포넌트를 추가하고, 그 섹션에만 필요한 1회성 모션이면 해당 섹션 파일
  안에서 `framer-motion`을 직접 써도 됩니다 (`HeroSection.jsx`, `GallerySection.jsx`처럼).
- CSS `@keyframes`가 필요한 순수 CSS 애니메이션(예: `HeroSection`의 스크롤 힌트 바운스)은 해당
  컴포넌트의 `.module.css` 안에 `@keyframes`를 정의해서 씁니다.

## 7. 에셋

- Figma에서 내보낸 이미지는 `.webp`로 변환 후 `public/apt/[slug]/`에 배치합니다.
- 파일명은 기존 컨벤션(`{그룹번호}-{순번}.webp`, 예: `2-1.webp`)을 유지합니다.
- 히어로/팝업처럼 above-the-fold 이미지에만 `priority`를 붙입니다.
