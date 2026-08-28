# theBlueOrganization/templates — 프로젝트 컨텍스트

이 레포는 분양(아파트 청약) 마케팅 랜딩페이지 템플릿 모노레포입니다.
현재 활성 템플릿: `mobile-scroll/` (Next.js App Router, 모바일 전용 스크롤형 랜딩페이지)

## 아키텍처 핵심

- **동적 라우팅**: `app/apt/[slug]/page.jsx` 하나가 모든 현장을 렌더링. 현장별 분기 없음.
- **데이터 = 코드 밖**: 현장 고유 정보는 전부 `data/sites/[slug].js` 설정 객체로 분리. 컴포넌트/페이지 코드는 절대 건드리지 않음.
- **레지스트리 패턴**: `data/siteRegistry.js`가 모든 현장을 import해서 배열로 관리 (`getSiteBySlug`, `getAllSlugs`).
- **공유 컴포넌트**: `components/` 아래 모든 현장이 공유 — TopNav, HeroSection, ImageSection, VideoSection, OfficeShell, PopupBanner, ContactForm, ClientFooter, BottomBar, SiteFooter.
- **섹션 타입**: `sections[]`의 각 항목은 `type`에 따라 `page.jsx`가 다른 컴포넌트로 렌더링 — `"image"`/`"image-then-spec"`(기본, 미지정 시 `"image"`)은 `ImageSection`, `"video"`는 `VideoSection`(`youtubeId` 또는 `src`+`poster`, 유튜브면 `youtubeId` 우선, 둘 다 없으면 섹션 자체가 렌더링되지 않음). navLabel/extraContactFormAfterSectionId 등 `sections[]` 공통 동작은 타입과 무관하게 동일하게 적용됨.
- **테마 주입**: 색상/폰트 등 현장별 시각 커스터마이징은 `site.theme` 객체를 컴포넌트에 prop으로 전달하는 방식. 컴포넌트 자체 스타일 하드코딩 금지.
- **한글 서브도메인**: `middleware.js`가 `site.subdomain` (공백 없는 한글 문자열)이 있는 현장만 `[subdomain].addupapt.kr` → `/apt/[slug]`로 rewrite. 없으면 `/apt/[slug]` 경로로만 접근.
- **Multi-Zone(adaptive-landing 연동)**: `*.addupapt.kr` 와일드카드 도메인은 이 프로젝트(theblue-apt)에만 연결되어 있어서, 다른 템플릿(`adaptive-landing`, 별도 Vercel 프로젝트)으로 보여줄 현장도 이 프로젝트의 `middleware.js`가 게이트웨이 역할을 함. 방법: (1) `adaptive-landing/data/sites/[slug].js`에 현장 등록(그 프로젝트 방식대로), (2) **이 프로젝트의 `siteRegistry.js`에도** 같은 slug로 최소 정보(`slug`, `subdomain`, `template: "adaptive-landing"`)만 담은 항목을 추가 — 이 프로젝트가 실제로 렌더링하진 않고 라우팅 정보로만 사용됨. `middleware.js`가 `template`값을 보고 `adaptive-landing` 배포(`ADAPTIVE_LANDING_ORIGIN` 환경변수)로 요청을 프록시함(정적 자산은 `/apt2` basePath 접두사로 구분). `adaptive-landing` 프로젝트 쪽은 `next.config.mjs`에 `basePath: '/apt2'`가 설정되어 있어야 함.

## 새 현장 추가 시 (반복 작업 — 판단 불필요, 패턴 고정)

1. `data/sites/[slug].js` 생성 (기존 파일 복사 후 필드만 교체)
2. `data/siteRegistry.js`에 import + `sites` 배열 추가 (2줄)
3. `public/apt/[slug]/` 폴더에 이미지 추가
4. git push → Vercel 자동 배포

**이미지 규칙**:
- 실제 서비스에 쓰이는 이미지 에셋은 **가로 1200px** (webp)
- 목업(디자인 검토용) 캔버스는 **750px**
- 네이밍: `1.webp`(히어로), `1-1/1-2`(섹션1 서브), `2-1/2-2`, `3-1/3-2`(섹션별 서브), `4.webp`(팝업) — 섹션 순서에 맞춰 숫자 부여
- 폰트 사이즈는 **320px(최소 뷰포트) 기준으로 역산**하는 게 원칙. 이미지에 텍스트가 베이크되어 있으면 뷰포트 가변폭에서 깨지지 않는지 확인.

**기본 필드** (`data/sites/[slug].js`): `slug`, `projectName`, `shortName`, `telNumber`, `adminPhones`, `ogImage`, `sheetId`, `sheetTab`, `popup`, `company`, `visitTimeOptions`, `hero`, `sections`, `theme`, `privacyText`

**선택 필드** (필요한 현장만):
| 필드 | 용도 |
|---|---|
| `subdomain` | 한글 서브도메인 (`[subdomain].addupapt.kr`) |
| `favicon` | 브라우저 탭 파비콘 경로 |
| `offices[]` | 오피스(창구) 여러 개 지원 — `?office=id`로 `telNumber`/`adminPhones` 분기. `id`+`telNumber`가 상담 접수 시 구글시트 마지막 컬럼(접수 오피스)에 자동 기록됨 |
| `telNumberByUtm` / `adminPhonesByUtm` | `?utm_source=`별로 화면 노출 번호·SMS 수신번호를 다르게 (오피스와 별개 메커니즘) |
| `showUtmInSms`, `utmSources[]` | 상담 폼에 유입경로 드롭다운 노출 + 관리자 알림 문자에 유입매체 포함 |
| `smsProjectNameByUtm` | 특정 유입경로 상담 시 알림 문자의 현장명 뒤에 접미사 추가 |
| `kakao`, `kakaoTemplateId` | 카카오 알림톡 사용 여부 + 템플릿ID (미사용 시 SMS로 자동 폴백) |
| `kakaoByUtm` | 특정 유입경로만 카카오 알림톡으로 발송 (나머지는 SMS) |
| `heroByUtm` | 특정 유입경로 방문자에게만 히어로 타이틀/서브타이틀 등을 다르게 표시 |
| `hero.enableVariants` | `?v=1` 쿼리스트링으로 히어로 타입(레이아웃 변형) 전환 허용 |
| `popupByUtm` | 특정 유입경로 방문자에게만 팝업 구성을 다르게 표시. 값이 이미지 객체면 첫 번째 팝업만 교체(나머지 순서 유지), 배열이면 그 유입경로만 팝업 전체를 다른 개수·순서로 교체(예: 특정 유입경로에만 팝업 2개), `null`이면 해당 유입경로는 팝업을 완전히 숨김. 값이 없는(=키가 없는) 유입경로는 기본 `popup` 그대로 노출 |
| `clientCompany` | `{ name, bizNumber, representative, address }` — 값이 있을 때만 `ClientFooter`가 `SiteFooter` 바로 위에 렌더링 (고객사/분양사 정보, 대행사 정보보다 강조된 톤). 분양대행사 하나만 표기하면 객체 하나, 분양대행사+시행사처럼 두 곳 이상을 함께 표기해야 하면 배열로 지정(`[{...}, {roleLabel: "시행사", ...}]`) — 배열의 첫 번째 항목에만 대표 전화번호(telNumber)와 강조 톤이 적용되고, 두 번째부터는 구분선과 함께 기본 톤으로 표시되며 `roleLabel`이 있으면 상호명 앞에 붙어서 노출됨. 폰트사이즈/컬러는 `ClientFooter.module.css`에 반응형 공통값(clamp)으로 이미 설정되어 있어 대부분 현장은 그대로 사용하면 됨 — 고객사 요청이 있을 때만 `theme.ClientFooter_name`(상호명, color+fontSize)/`theme.ClientFooter_leadContact`(전화번호·사업자번호, color+fontSize)/`theme.ClientFooter_key`·`_value`(대표자·주소, color만)로 개별 오버라이드. 회사가 여러 곳(배열)일 때 이 theme 값들도 배열로 지정하면 `clientCompany` 배열과 같은 인덱스끼리 매칭되어 회사별로 다르게 커스터마이징 가능(객체 하나만 주면 전체 공통 적용) |
| `extraContactFormByUtm` | `{ [utm_source]: true }` — 등록된 유입경로 방문자에게만 히어로 섹션과 첫 번째 섹션 사이에 상담신청 폼을 하나 더 노출 (기존 하단 상담신청 섹션은 그대로 유지되어 총 2개가 됨). 등록되지 않은 유입경로는 기존처럼 하단 폼 1개만 노출 |
| `theme.ImageSection_background` / `theme.ImageSection_dark` | 콘텐츠 섹션(사업개요·입지환경 등) 전체 배경색을 현장 공통으로 지정. `_dark: true`면 제목/부제/탭/스펙표 텍스트·테두리가 밝은 톤으로 자동 전환됨(어두운 배경용). 특정 섹션만 예외로 다른 배경을 쓰려면 그 섹션 객체에 `sectionBg` 필드 추가(`ImageSection_background`보다 우선) |

**`popup` 필드 형태**: 단일 객체 `{ enabled, image }` 또는 배열 `[{ enabled, image }, ...]` 둘 다 지원. 배열이면 팝업을 순차 표시 — 하나를 닫으면 다음 팝업이 이어서 뜨고(우측 상단에 "1/2" 표시), 마지막 팝업을 닫으면 완전히 사라짐. `image.cta`(이미지 위에 보이지 않는 핫스폿 버튼, `rect`% 좌표 필요)와 별개로, `image.actionButton: { label, target, background?, color? }`을 추가하면 이미지 바로 아래(항상 보이는 영역, 이미지 자체 스크롤박스 밖)에 CTA 버튼이 노출됨 — 클릭 시 남은 팝업은 모두 건너뛰고 `target`(예: `"#contact-section"`) 섹션으로 스크롤 이동. `cta`와 마찬가지로 반드시 `image` 객체 안에 넣어야 함(팝업 항목의 형제 필드로 두면 무시됨).

**상담 접수 데이터 흐름**: `ContactForm` 제출 → `/api/sms` → ① `adminPhones`로 SMS(또는 카카오) 발송 ② 구글시트에 행 추가. 시트 컬럼 순서: `신청시간, 현장명, 이름, 연락처, 방문예약일, 방문예약시간, 사은품등록, 개인정보동의, 유입매체, 접수오피스`(10번째, `offices` 없는 현장은 빈 값). 전체 현장 시트를 한 곳에 모으는 "통합DB" 탭은 스프레드시트에 바인딩된 Apps Script(`mergeAllSheets`, 확장 프로그램 > Apps Script)가 담당 — 시트 컬럼 개수를 바꾸면 이 스크립트의 하드코딩된 컬럼 수(A~J = 10)도 같이 맞춰야 함.

## 새 필드/기능을 추가할 때 (템플릿 진화 작업 — 판단 필요, 신중히)

- 기존 현장들에 영향 없는지 항상 확인 (`data/sites/*.js` 전체 grep해서 해당 필드 optional 처리했는지 체크)
- 공유 컴포넌트(`SiteFooter` 등)에 새 필드를 참조하는 코드를 추가하면, 그 필드가 없는 기존 현장 전부에서 빈 값으로 나타난다는 점을 반드시 감안 — 필요하면 전체 현장 파일에 일괄 반영
- Hero 타입 변형은 query-string 라우팅 방식 유지
- 컴포넌트 수정 시 반드시 최소 1개 이상의 기존 현장으로 렌더 확인

## Git 컨벤션

- **브랜치명**: `format/initials/date-time/project-name`
  (예: `feat/eunji/20260701-1400/gyeongsan-hobansummit-1`)
- 커밋 메시지 타입: `feat`, `fix`, `style`, `docs`, `refactor`, `chore` (CONTRIBUTING.md 참조)
- PR 제목: `[템플릿명] 작업 내용 요약`
- merge는 경력자 담당

## 하지 말아야 할 것

- `app/apt/[slug]/page.jsx`에 현장별 조건 분기(`if slug === ...`) 추가 금지 — 반드시 데이터 파일로 분리
- 컴포넌트에 특정 현장 이름/색상 하드코딩 금지
- 이미지 폭 1200px 외 임의 사이즈로 업로드 금지 (레이아웃 깨짐)