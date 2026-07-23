# 분양 랜딩페이지 멀티 현장 템플릿 (Next.js App Router)

> **현장 추가 = 파일 1개 + 이미지 추가 + git push** 로 끝나는 구조입니다.
> 필드/아키텍처 상세 레퍼런스는 [`CLAUDE.md`](./CLAUDE.md) 참고.

---

## 프로젝트 구조

```text
├── app/
│   ├── api/sms/route.js           ← Solapi 문자·카카오 알림톡 발송 + 구글시트 저장
│   ├── api/count/route.js         ← 상담 신청 카운터 (구글시트 행 수 조회)
│   ├── apt/[slug]/page.jsx        ← ⭐ 동적 라우트 (현장 페이지)
│   ├── page.jsx                   ← 현장 목록 인덱스
│   ├── globals.css
│   └── layout.jsx
│
├── middleware.js                  ← 한글 서브도메인([subdomain].addupapt.kr) → /apt/[slug] rewrite
│
├── components/                    ← 모든 현장이 공유하는 UI 컴포넌트
│   ├── TopNav
│   ├── HeroSection / HeroSectionType1
│   ├── ImageSection               ← 재사용 가능한 제목+이미지(+스펙표) 섹션
│   ├── SpecTable
│   ├── OfficeShell                ← 오피스/UTM별 전화번호 분기 + 상담 폼·푸터·하단바 조립
│   ├── ContactForm                ← 상담 폼
│   ├── PopupBanner
│   ├── ClientFooter                ← 고객사(분양사) 정보 — clientCompany 있을 때만 렌더링
│   ├── SiteFooter                  ← 대행사(더블루파트너스) 정보
│   └── BottomBar                   ← 하단 고정 버튼 + 전화 모달
│
├── data/
│   ├── siteRegistry.js            ← ⭐ 현장 등록부 (import 목록 관리)
│   └── sites/
│       ├── hillstate-siheung-theclass.js
│       ├── gyeongsan-hobansummit-1.js   ← 오피스 2개(다중 창구) 예시
│       ├── sungui-raon-private-skyve.js ← UTM별 오버라이드 필드 예시
│       └── ... (현재 9개 현장)
│
└── public/
    └── apt/
        └── [slug]/                ← 현장별 이미지 (1.webp, 1-1.webp, 4.webp 등)
```

---

## 새 현장 추가 — 3단계

### 1단계 — 현장 데이터 파일 생성

기존 파일을 복사해서 내용만 교체합니다.

```bash
cp data/sites/hillstate-siheung-theclass.js data/sites/새현장-슬러그.js
```

`slug`, `projectName`, `telNumber`, 이미지 경로 등 수정. 전체 필드 목록과 선택 필드(오피스 다중화, UTM 오버라이드, 고객사 푸터 등)는 [`CLAUDE.md`](./CLAUDE.md) 참고.

> `/add-site [슬러그] [현장명]` 슬래시 커맨드로 `site-adder` 서브에이전트를 호출하면 이 과정을 대화형으로 진행할 수 있습니다.

### 2단계 — 레지스트리에 등록

`data/siteRegistry.js` 에 2줄 추가:

```js
import 새현장 from "./sites/새현장-슬러그.js";  // ← import 추가

const sites = [
  ...기존 현장들,
  새현장,  // ← 배열에 추가
];
```

### 3단계 — 이미지 추가 + 배포

```bash
# public/apt/새현장-슬러그/ 폴더에 이미지 넣기 (가로 1200px webp)
git add .
git commit -m "feat: 새현장 랜딩페이지 추가"
git push  # Vercel 자동 배포
```

**완료!** `/apt/새현장-슬러그` URL로 바로 접근 가능합니다. `subdomain` 필드를 넣으면 한글 서브도메인(`[subdomain].addupapt.kr`)으로도 접근 가능합니다.

---

## URL 구조

| 경로 | 설명 |
|---|---|
| `/` | 현장 목록 인덱스 |
| `/apt/[slug]` | 현장 랜딩페이지 (전체 목록은 `data/siteRegistry.js` 참고) |
| `[subdomain].addupapt.kr` | 한글 서브도메인 접근 (site에 `subdomain` 필드가 있는 현장만) |

---

## 상담 접수 데이터 흐름

`ContactForm` 제출 → `POST /api/sms` →
1. `adminPhones`로 SMS 발송 (`kakao`/`kakaoByUtm` 설정 시 카카오 알림톡 우선, 실패하면 SMS로 폴백)
2. 구글시트에 행 추가 (탭이 없으면 자동 생성)

시트에 저장되는 값 없이도 새로 상담이 들어오면 자동으로 반영됩니다. 스프레드시트에 바인딩된 Apps Script(`마스터DB 관리 > 전체 탭 데이터 통합하기`)가 모든 현장 탭을 "통합DB" 탭 하나로 모읍니다.

---

## 환경변수 설정

`.env.local.example` → `.env.local` 복사 후 값 입력:

```env
# 솔라피 SMS API (https://console.solapi.com)
SOLAPI_API_KEY=
SOLAPI_API_SECRET=
SOLAPI_SENDER=          # 발신번호, 솔라피 콘솔에 사전 등록 필수 (IP 제한 옵션은 꺼둘 것 — 서버리스는 고정 IP가 아님)

# 기본 관리자 수신번호 (현장 파일에 adminPhones 없을 때 폴백)
ADMIN_PHONE=
# ADMIN_PHONE2=

# 카카오 알림톡 (솔라피 콘솔 → 카카오 알림톡 → 채널 관리)
KAKAO_SENDER_KEY=
KAKAO_TEMPLATE_ID=

# Google Sheets API (서비스 계정)
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=
# GOOGLE_SHEET_DEFAULT_TAB=상담신청
```

> 현장별로 다른 수신번호가 필요하면 `data/sites/[slug].js`에 `adminPhones` 배열을 채우면 됩니다 (여러 오피스가 필요하면 `offices` 배열 사용 — `CLAUDE.md` 참고).

---

## 개발 실행

```bash
npm install
npm run dev
```
