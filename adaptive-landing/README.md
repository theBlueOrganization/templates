# adaptive-landing — 반응형 분양 랜딩페이지 템플릿 (Next.js App Router)

부동산 분양 홍보용 랜딩페이지를 현장(아파트 단지)별로 반복 납품하기 위한 템플릿입니다.
모바일과 PC를 모두 지원하는 반응형 레이아웃이며, 하나의 코드베이스에서 `data/sites/[slug].js`
파일만 바꿔가며 여러 현장을 운영합니다.

- **프레임워크**: Next.js 15 (App Router, React 19)
- **언어**: JavaScript (JSX, TypeScript 아님)
- **스타일**: 컴포넌트별 CSS Modules (`ComponentName.module.css`) — Tailwind 미사용. 각 컴포넌트
  파일 옆의 CSS 파일을 열어서 값을 직접 고칩니다. 자세한 작성 규칙은 `DESIGN_SYSTEM.md` 참고.
- **애니메이션**: Framer Motion (`whileInView`, `variants`, `AnimatePresence`)
- **연동**: Solapi(SMS), Google Sheets API(상담 데이터 저장)

---

## 기술 스택

- Next.js 15 (App Router, React 19)
- JavaScript (JSX, TypeScript 아님)
- CSS Modules (`*.module.css`)
- Framer Motion
- Solapi (SMS), Google Sheets API (상담 데이터 수집)

---

## 이 템플릿의 구조 — "Signature" 컴포넌트 스택

새 현장마다 Figma 디자인이 완전히 다르기 때문에, 정해진 섹션 타입을 조합하는 방식이 아니라
**전용 컴포넌트 세트(이름이 모두 `Signature`로 시작) 하나**를 씁니다. 헤더 → 히어로 →
사업개요 → 위치안내 → 프리미엄 → 조경 → 단지소개 → 세대안내 → 커뮤니티 → 상담신청폼 → 푸터
순서로 고정돼 있고, 각 섹션에 들어갈 텍스트·이미지·데이터를 현장 파일에서 채워 넣습니다.

`data/sites/[slug].js`의 `signature` 객체 아래 각 필드가 그대로 하나의 컴포넌트에 대응합니다.
필드는 빠짐없이 채워야 합니다(컴포넌트가 값이 없다는 걸 가정하고 짜여 있지 않습니다).

| `signature.` 필드 | 담당 컴포넌트 | 내용 |
|---|---|---|
| `header` | `components/ui/SignatureHeader` | 상단 고정 헤더 (로고, 메뉴, 전화번호) |
| `hero` | `components/sections/SignatureHero` | 첫 화면 히어로 |
| `summary` | `components/sections/SignatureSummary` | 사업개요 |
| `location` | `components/sections/SignatureLocation` | 위치안내 |
| `premiumIntro` | `components/sections/SignaturePremiumIntro` | 프리미엄 전환 섹션 |
| `premiumValue` | `components/sections/SignaturePremiumValue` | 핵심 가치 카드 6종 |
| `landscape` | `components/sections/SignatureLandscape` | 조경안내 |
| `complex` | `components/sections/SignatureComplex` | 단지소개(배치도·동호수표) |
| `unitPlan` | `components/sections/SignatureUnitPlan` | 세대안내(탭형 평면도) |
| `club` | `components/sections/SignatureClub` | 커뮤니티 시설 안내 |
| `vipForm` | `components/sections/SignatureVipForm` | 상담신청 폼 |
| `footer` | `components/ui/SignatureFooter` | 하단 회사정보 |

`header.gnb` 배열의 순서는 위 표의 섹션 순서(각 섹션의 `id`)와 1:1로 매칭되어, 메뉴를
누르면 해당 섹션으로 스크롤 이동합니다.

각 필드가 정확히 어떤 값을 받는지는 `data/sites/example-apt.js`에 필드별 주석으로 문서화돼
있습니다 — 새 현장을 만들 때 이 파일을 복사해서 값만 바꾸면 됩니다.

Figma 디자인이 기존 현장과 크게 다르면:
1. 비슷한 구조면 해당 `Signature*.jsx`/`.module.css`를 그 현장에 맞게 직접 수정합니다.
2. 완전히 새로운 레이아웃 섹션이 필요하면 `components/sections/`(또는 `ui/`)에 `Signature`
   접두어로 새 컴포넌트를 추가하고 `app/apt/[slug]/page.jsx`의 렌더 목록에 끼워 넣습니다.

---

## 프로젝트 구조

```
app/
├── apt/[slug]/page.jsx        ← 현장별 랜딩페이지 (SSG)
├── api/
│   ├── sms/route.js           ← SMS 발송 + Google Sheets 저장
│   └── count/route.js         ← 상담 신청 건수 조회
├── globals.css
├── layout.jsx
└── page.jsx                   ← 현장 목록 인덱스 (관리용)

components/
├── motion/
│   ├── Reveal.jsx             ← whileInView fade+slide 공용 래퍼
│   └── Stagger.jsx            ← Stagger / StaggerItem — 카드 목록 순차 등장
├── sections/
│   ├── SignatureHero.jsx          ← 히어로 — 배지→타이틀→설명 순차 리빌, 모바일 하단 액션바
│   ├── SignatureSummary.jsx       ← 사업개요 (조감도+썸네일+스펙표)
│   ├── SignatureLocation.jsx      ← 위치안내 (지도+features 카드 4개)
│   ├── SignaturePremiumIntro.jsx  ← 프리미엄 전환 섹션 (배경 이미지+카피)
│   ├── SignaturePremiumValue.jsx  ← 핵심 가치 카드 6종 그리드
│   ├── SignatureLandscape.jsx     ← 조경안내 패널
│   ├── SignatureComplex.jsx       ← 단지소개 (배치도+동호수표)
│   ├── SignatureUnitPlan.jsx      ← 세대안내 (탭형 평면도+스펙)
│   ├── SignatureClub.jsx          ← 커뮤니티 (intro/wellness/sportsHealth/cafeLounge/eduKids)
│   ├── SignatureClubSectionHeader.jsx / SignatureFacilityHalfGallery.jsx / SignatureFacilityShowcase.jsx / SignatureFloorPlanViewer.jsx ← SignatureClub 하위 컴포넌트
│   └── SignatureVipForm.jsx       ← "use client", 상담신청 폼
└── ui/
    ├── SignatureHeader.jsx    ← "use client", PC 고정 헤더 (히어로 구간 투명→스크롤 시 배경)
    ├── SignatureFooter.jsx    ← "use client", 회사정보 + Family Site 셀렉트
    ├── SignatureLightbox.jsx  ← 이미지 확대 라이트박스 (SignatureClub 공용)
    └── PopupBanner.jsx        ← "use client" (현재 페이지에서 미사용, 필요시 재연결)

data/
├── siteRegistry.js            ← 전체 현장 등록부
└── sites/example-apt.js       ← 현장별 설정 데이터 예시 (signature 전체 필드, 필드별 주석 포함)

lib/
├── utils.js                   ← cn(), splitHighlight()
└── useUtmSource.js            ← ?utm_source= 값을 읽는 공용 훅

public/apt/[slug]/             ← 현장별 이미지 (.webp 권장)
```

---

## 상담 신청 흐름 (SMS + Google Sheets)

`SignatureVipForm`에서 상담 신청을 제출하면 `POST /api/sms`가 호출되어:

1. `adminPhones`로 등록된 관리자 번호들에 Solapi로 SMS 발송
2. Google Sheets에 상담 내용 한 줄 추가 (해당 탭이 없으면 자동 생성)

두 작업은 병렬로 처리되며, 시트 저장이 실패해도 SMS 발송 성공 여부와는 무관하게 응답합니다.

## 유입경로(UTM) 오버라이드

방문 URL에 `?utm_source=값`이 붙어 있으면 그 값을 어디서 유입됐는지 기록하는 용도로 씁니다.

- `telNumberByUtm`: `utm_source` 값별로 화면에 노출하는 전화번호를 다르게 (`SignatureHeader`/`SignatureHero`/`SignatureFooter`에 공통 적용)
- `adminPhonesByUtm`: `utm_source` 값별로 SMS를 받을 관리자 번호를 다르게 (`SignatureVipForm` → `/api/sms`)
- `showUtmInSms`: 관리자에게 보내는 알림 문자에 "유입매체: OO" 줄을 추가할지 여부
- 위 두 오버라이드 필드는 선택 사항이며, 없으면 기본 `telNumber`/`adminPhones`를 그대로 씁니다
- `?utm_source=` 값은 `lib/useUtmSource.js`가 컴포넌트가 마운트된 뒤 `window.location.search`를
  읽어서 가져옵니다. `useSearchParams`를 쓰면 Suspense 경계가 필요해지고 페이지가 정적
  생성(SSG)에서 제외되므로, 이 방식으로 우회합니다.

## 반응형 규칙

모바일 기본 CSS를 작성한 뒤 `@media (min-width: 768px)`·`@media (min-width: 1024px)` 순서로
데스크톱 스타일을 덮어씁니다 (이 순서를 바꾸지 않음). 각 컴포넌트의 `.module.css` 안에 그대로
작성되어 있으니 값만 열어서 고치면 됩니다.

- 컨테이너: `max-width: 430px; margin: 0 auto;` → 768px에서 `max-width: 768px` → 1024px에서 `max-width: 1200px`
- `SignatureHeader`는 PC(1024px 이상)에서 히어로 구간만 투명 배경이고, 그 아래로 스크롤하면 배경이 채워집니다

## Framer Motion 적용 지점

- `Reveal` / `Stagger`·`StaggerItem`(`components/motion/`): 스크롤 진입 시 등장 애니메이션을 위한 공용 컴포넌트
- `SignatureHero`: `variants`로 배지 → 타이틀 → 설명 순차 등장
- `SignatureClub`의 라이트박스(`SignatureLightbox`): `AnimatePresence`로 mount/unmount 애니메이션

---

## 새 현장 추가 절차

1. `data/sites/example-apt.js`를 복사해서 `data/sites/[slug].js` 생성 (파일 안 주석 참고, `signature` 하위 필드를 새 Figma 디자인 값으로 교체)
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
> 실 서비스 전에 `public/apt/example-apt/`에 실제 이미지를 추가해야 합니다.
