# theBlueOrganization/templates — 프로젝트 컨텍스트

이 레포는 분양(아파트 청약) 마케팅 랜딩페이지 템플릿 모노레포입니다.
현재 활성 템플릿: `mobile-scroll/` (Next.js App Router, 모바일 전용 스크롤형 랜딩페이지)

## 아키텍처 핵심

- **동적 라우팅**: `app/apt/[slug]/page.jsx` 하나가 모든 현장을 렌더링. 현장별 분기 없음.
- **데이터 = 코드 밖**: 현장 고유 정보는 전부 `data/sites/[slug].js` 설정 객체로 분리. 컴포넌트/페이지 코드는 절대 건드리지 않음.
- **레지스트리 패턴**: `data/siteRegistry.js`가 모든 현장을 import해서 배열로 관리 (`getSiteBySlug`, `getAllSlugs`).
- **공유 컴포넌트**: `components/` 아래 모든 현장이 공유 — TopNav, HeroSection, ImageSection, OfficeShell, PopupBanner, ContactForm, ClientFooter, BottomBar, SiteFooter.
- **테마 주입**: 색상/폰트 등 현장별 시각 커스터마이징은 `site.theme` 객체를 컴포넌트에 prop으로 전달하는 방식. 컴포넌트 자체 스타일 하드코딩 금지.
- **한글 서브도메인**: `middleware.js`가 `site.subdomain` (공백 없는 한글 문자열)이 있는 현장만 `[subdomain].addupapt.kr` → `/apt/[slug]`로 rewrite. 없으면 `/apt/[slug]` 경로로만 접근.

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
| `popupByUtm` | 특정 유입경로 방문자에게만 (배열의 첫 번째) 팝업 이미지를 다르게 표시 |
| `clientCompany` | `{ name, bizNumber, representative, address }` — 값이 있을 때만 `ClientFooter`가 `SiteFooter` 바로 위에 렌더링 (고객사/분양사 정보, 대행사 정보보다 강조된 톤). `theme.ClientFooter_name`/`_key`/`_value`로 색상 커스터마이징 가능 |

**`popup` 필드 형태**: 단일 객체 `{ enabled, image }` 또는 배열 `[{ enabled, image }, ...]` 둘 다 지원. 배열이면 팝업을 순차 표시 — 하나를 닫으면 다음 팝업이 이어서 뜨고(우측 상단에 "1/2" 표시), 마지막 팝업을 닫으면 완전히 사라짐.

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