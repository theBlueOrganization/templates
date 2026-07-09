# adaptive-landing — 반응형 분양 랜딩페이지 템플릿 (Next.js App Router)

> `templates-main/mobile-scroll`, `second_templates`와 달리 **모바일과 PC를 모두 대응하는 반응형** 템플릿입니다.
> 애니메이션은 IntersectionObserver 대신 **Framer Motion**(`whileInView`, `variants`, `AnimatePresence`)으로 관리합니다.
> 스택은 mobile-scroll처럼 **순수 JavaScript**입니다 (TypeScript 아님) — 현재 단계에서는 타입 유지보수 부담 없이 빠르게 반복 납품하는 게 우선이라 판단해 JS로 전환했습니다.
> 스타일은 **컴포넌트별 CSS Modules**(`ComponentName.module.css`)로 관리합니다 — Tailwind 유틸리티 클래스 대신, 각 컴포넌트 파일 옆의 CSS 파일을 열어서 직접 값을 고칠 수 있게 하기 위함입니다. 자세한 작성 규칙은 `DESIGN_SYSTEM.md` 0번 항목 참고.

---

## 기술 스택

- Next.js 15 (App Router, React 19)
- JavaScript (JSX, TypeScript 아님)
- CSS Modules (`*.module.css`)
- Framer Motion
- Solapi (SMS), Google Sheets API (상담 데이터 수집)

## 다른 템플릿과의 차이

| | mobile-scroll | second_templates | **adaptive-landing** |
|---|---|---|---|
| 언어 | JavaScript | TypeScript | **JavaScript** |
| 스타일 | CSS Modules | Tailwind v4 | **CSS Modules** |
| 레이아웃 | 모바일 전용 (600px 고정) | 모바일 전용 (390px 고정) | **모바일 + PC 반응형** |
| 애니메이션 | CSS keyframes + setTimeout | CSS keyframes + setTimeout | **Framer Motion** |
| 섹션 타입 | 범용 이미지/스펙 블록 1종 | 범용 이미지/스펙 블록 1종 | **About/Point/Gallery/Location + 범용 블록**, `type` 필드로 구분 |

---

## 프로젝트 구조

```
app/
├── apt/[slug]/page.jsx        ← 현장별 랜딩페이지 (SSG)
├── api/
│   ├── sms/route.js           ← SMS 발송 + Google Sheets 저장 (second_templates 검증 로직 그대로)
│   └── count/route.js         ← 상담 신청 건수 조회
├── globals.css
├── layout.jsx
└── page.jsx                   ← 현장 목록 인덱스 (관리용)

components/
├── motion/
│   ├── Reveal.jsx             ← whileInView fade+slide 공용 래퍼
│   └── Stagger.jsx            ← Stagger / StaggerItem — 카드 목록 순차 등장
├── sections/
│   ├── SectionRenderer.jsx    ← section.type → 컴포넌트 매핑
│   ├── SectionHeader.jsx      ← 구분선 + 제목 + 부제 (공용)
│   ├── HeroSection.jsx        ← 배지→브랜드→타이틀 순차 리빌 + 커튼 애니메이션
│   ├── AboutSection.jsx       ← 텍스트 + 이미지 2단 (모바일 스택 / PC 그리드)
│   ├── PointSection.jsx       ← 핵심 강점 카드 그리드
│   ├── GallerySection.jsx     ← 이미지 갤러리 + 클릭 확대(라이트박스)
│   ├── LocationSection.jsx    ← 지도 이미지 + 주소 + 교통정보
│   ├── ImageBlockSection.jsx  ← 범용 이미지/스펙 테이블 블록 (image / image-then-spec / spec-then-image / spec-only)
│   └── ContactForm.jsx        ← "use client", 상담신청 폼
└── ui/
    ├── TopNav.jsx             ← "use client", 모바일 가로스크롤 메뉴 / PC 고정 메뉴
    ├── BottomBar.jsx          ← "use client", 모바일·태블릿 전용(lg:hidden) 하단 CTA
    ├── PopupBanner.jsx        ← "use client"
    └── SiteFooter.jsx

data/
├── siteRegistry.js            ← 전체 현장 등록부
└── sites/example-apt.js       ← 현장별 설정 데이터 예시 (5개 섹션 타입 모두 사용, 필드별 주석 포함)

lib/
└── utils.js                   ← cn()

public/apt/[slug]/             ← 현장별 이미지 (.webp 권장)
```

---

## 섹션을 독립 컴포넌트로 관리하는 구조

`data/sites/[slug].js`의 `sections` 배열에 아래 다섯 가지 타입 중 하나를 순서대로 나열하면 `SectionRenderer`가 알맞은 컴포넌트로 렌더링합니다. 새 섹션이 필요하면 `components/sections/`에 컴포넌트를 만들고 `SectionRenderer.jsx`에 분기 한 줄만 추가하면 됩니다.

| `type` | 컴포넌트 | 용도 |
|---|---|---|
| `about` | `AboutSection` | 브랜드/컨셉 소개 (텍스트 + 이미지 2단) |
| `point` | `PointSection` | 핵심 강점 카드 그리드 (3~6개) |
| `gallery` | `GallerySection` | 평면도·조감도 등 이미지 갤러리 + 라이트박스 |
| `location` | `LocationSection` | 위치·교통 안내 |
| `image` / `image-then-spec` / `spec-then-image` / `spec-only` | `ImageBlockSection` | 사업개요 등 범용 이미지/스펙 테이블 블록 |

`navLabel`이 있는 섹션만 `TopNav`에 자동 등록됩니다.

각 현장 데이터가 어떤 필드를 받는지는 별도 타입 파일 없이 `data/sites/example-apt.js`에 필드별 주석으로 적어뒀습니다 — 새 현장을 만들 때 이 파일을 복사해서 참고하세요.

## 반응형 규칙

모바일 기본 CSS를 작성한 뒤 `@media (min-width: 768px)`·`@media (min-width: 1024px)` 순서로
데스크톱 스타일을 덮어씁니다 (이 순서를 바꾸지 않음). 각 컴포넌트의 `.module.css` 안에 그대로
작성되어 있으니 값만 열어서 고치면 됩니다.

- 컨테이너: `max-width: 430px; margin: 0 auto;` → 768px에서 `max-width: 768px` → 1024px에서 `max-width: 1200px`
- `BottomBar`는 `@media (min-width: 1024px) { display: none; }` — 데스크톱에서는 `TopNav`의 전화번호 버튼이 그 역할을 대신합니다.
- `Gallery`는 모바일에서 가로 스크롤 스냅, 1024px 이상에서 그리드로 전환됩니다.

## Framer Motion 적용 지점

- `Reveal` / `Stagger`·`StaggerItem`: 기존 IntersectionObserver 패턴을 대체하는 공용 스크롤 리빌 컴포넌트
- `HeroSection`: `variants` + `staggerChildren`으로 배지 → 브랜드 → 타이틀 순차 등장, 커튼 슬라이드업
- `TopNav`: `useScroll` + `useTransform`으로 스크롤에 따른 배경/그림자 전환
- `BottomBar`, `PopupBanner`, `GallerySection` 라이트박스: `AnimatePresence`로 mount/unmount 애니메이션

---

## 새 현장 추가 절차

1. `data/sites/example-apt.js`를 복사해서 `data/sites/[slug].js` 생성 (파일 안 주석 참고)
2. `data/siteRegistry.js`에 import 후 `sites` 배열에 추가
3. `public/apt/[slug]/` 폴더에 이미지 추가 (.webp 권장)
4. `git push` → Vercel 자동 배포

---

## 환경변수 (`.env.local`)

`.env.local.example`을 복사해서 값을 채웁니다.

```bash
SOLAPI_API_KEY=
SOLAPI_API_SECRET=
SOLAPI_SENDER=
ADMIN_PHONE=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=
```

## 개발 실행

```bash
npm install
npm run dev
```

`/apt/example-apt`에서 예시 데이터를 확인할 수 있습니다.

> 예시 현장(`example-apt`)의 이미지 경로는 실제 파일 없이 placeholder로 작성되어 있습니다.
> 실 서비스 전에 `public/apt/example-apt/`에 실제 `.webp` 이미지를 추가해야 합니다.
