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

## 3. 컬러 — `.module.css`에 직접 기록 (theme 객체 없음)

adaptive-landing은 현장마다 Figma 디자인 자체가 다른 전제라, 여러 현장이 컴포넌트를 공유하며
색만 바꿔 쓰는 `theme` prop 방식을 쓰지 않습니다. Figma 컬러 스타일은 해당 `Signature*.module.css`
파일에 **그대로 하드코딩**합니다 (예: `SignatureHero.module.css`의 `color: #b39258;`).

- 새 현장의 Figma가 기존 색과 다르면 그 현장이 쓰는 `Signature*.module.css`를 직접 열어서 값을
  바꿉니다. 여러 현장이 같은 컴포넌트 코드를 그대로 재사용하지 않는다는 전제이므로, 바뀐 색이
  다른 현장에 영향을 주지 않는지 걱정할 필요가 없습니다.
- 정말 레이아웃까지 크게 달라 기존 `Signature*` 컴포넌트를 그대로 못 쓰면, 새 컴포넌트로
  분리합니다(4번 항목 참고). 기존 컴포넌트에 `if(slug === ...)` 같은 현장별 분기를 넣지 않습니다.

## 4. Figma 새 디자인이 들어왔을 때

새 현장 Figma는 매번 레이아웃이 다르다는 전제라, 고정된 섹션 타입 목록에 끼워 맞추지 않고
`Signature*` 컴포넌트를 그 현장에 맞게 직접 고치거나 새로 만듭니다.

1. 기존 `Signature*` 컴포넌트와 구조가 거의 같으면(카피/이미지/개수만 다름) — 해당 컴포넌트의
   `.jsx`/`.module.css`를 열어서 Figma 값에 맞게 수정합니다. `data/sites/[slug].js`의
   `signature.xxx` 필드 값만 바꿔서 해결되는 경우가 대부분입니다.
2. 완전히 새로운 레이아웃 섹션이 필요하면 `components/sections/`(또는 `ui/`)에 `Signature`
   접두어로 새 컴포넌트와 `.module.css`를 추가하고, `app/apt/[slug]/page.jsx`의 렌더 목록에
   끼워 넣습니다.
3. `data/sites/example-apt.js` 상단 주석의 "signature 필드 ↔ 컴포넌트" 표에도 추가한 필드를
   반영합니다 (새 현장을 만들 사람이 참고할 유일한 필드 문서이므로 빠뜨리지 않습니다).

여러 현장이 완전히 동일한 레이아웃을 그대로 재사용하는 경우가 아니라면, 미래의 다른 현장을
가정한 범용 옵션(예: `variant` prop)을 미리 만들어두지 않습니다 — 그 현장에 필요한 것만 만듭니다.

## 5. 반응형 레이아웃 규칙

- Figma Desktop 프레임이 2단 그리드면 768px(또는 해당 폭) 이상에서
  `grid-template-columns: repeat(2, 1fr)`을 주고, Mobile이 세로 스택이면 기본 상태는
  `display: grid`만 두고 컬럼을 지정하지 않아 순서대로 쌓이게 합니다.
- 이미지 좌/우 위치가 Figma에서 지정돼 있으면 `SignatureClub`의 `showcase.side` 필드처럼
  데이터로 표현하고, 그 값에 따라 조건부 CSS 클래스를 골라 적용합니다. 컴포넌트 코드에 순서를
  하드코딩하지 않습니다.
- 이미지 여러 장을 좌우로 넘기는 갤러리류는 Mobile에서 `overflow-x: auto` +
  `scroll-snap-type: x mandatory` 가로 스크롤, 1024px 이상에서 `display: grid`로 전환하는
  `SignatureFacilityHalfGallery` 패턴을 기본으로 따릅니다.
- 모바일 하단 고정 CTA가 필요하면 `SignatureHero`의 `mobileBar`처럼 히어로 컴포넌트 안에 포함시켜
  데스크톱(1024px 이상)에서는 `display: none`으로 숨기고, 데스크톱 CTA는 `SignatureHeader`의
  `quickCta`/전화번호 버튼이 대신하게 합니다.

## 6. 모션 (Figma Prototype/Interaction → Framer Motion)

- 스크롤 진입 시 fade+slide는 `components/motion/Reveal.jsx`를 재사용합니다 (delay/y 값만 조정).
- 카드형 리스트의 순차 등장은 `Stagger`/`StaggerItem`(`components/motion/Stagger.jsx`)을 재사용합니다.
- 기존 이징 값을 기본으로 유지합니다: 리빌류 `[0.22, 1, 0.36, 1]`, 커튼/슬라이드류
  `[0.76, 0, 0.24, 1]`. Figma에 명시된 이징이 있으면 그 값으로 교체합니다.
- 개별 섹션 컴포넌트 안에 새 모션 로직을 인라인으로 작성하지 않습니다. 재사용 가능한 패턴이면
  `components/motion/`에 컴포넌트를 추가하고, 그 섹션에만 필요한 1회성 모션이면 해당 섹션 파일
  안에서 `framer-motion`을 직접 써도 됩니다 (`SignatureHero.jsx`처럼).
- CSS `@keyframes`가 필요한 순수 CSS 애니메이션은 해당 컴포넌트의 `.module.css` 안에
  `@keyframes`를 정의해서 씁니다.

## 7. 에셋

- Figma에서 내보낸 이미지는 `.webp`로 변환 후 `public/apt/[slug]/`에 배치합니다.
- 파일명은 기존 컨벤션(`{그룹번호}-{순번}.webp`, 예: `2-1.webp`)을 유지합니다.
- 히어로/팝업처럼 above-the-fold 이미지에만 `priority`를 붙입니다.
