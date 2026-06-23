# 분양 랜딩페이지 멀티 현장 템플릿 (Next.js App Router)

> **현장 추가 = 파일 1개 + 이미지 추가 + git push** 로 끝나는 구조입니다.

---

## 프로젝트 구조

```
├── app/
│   ├── api/sms/route.js           ← Solapi 문자 발송 API (현장별 수신번호 지원)
│   ├── apt/[slug]/page.jsx        ← ⭐ 동적 라우트 (현장 페이지)
│   ├── page.jsx                   ← 현장 목록 인덱스
│   ├── globals.css
│   └── layout.jsx
│
├── components/                    ← 모든 현장이 공유하는 UI 컴포넌트
│   ├── TopNav
│   ├── HeroSection
│   ├── ImageSection               ← 재사용 가능한 제목+이미지 섹션
│   ├── ContactForm                ← 상담 폼
│   ├── BottomBar                  ← 하단 고정 버튼 + 전화 모달
│   └── SiteFooter
│
├── data/
│   ├── siteRegistry.js            ← ⭐ 현장 등록부 (import 목록 관리)
│   └── sites/
│       ├── sujainroicent-inha.js      ← 현장 1
│       ├── raemian-suwon.js       ← 현장 2
│       └── hillstate-incheon.js   ← 현장 3
│
└── public/
    └── apt/
        ├── sujainroicent-inha/        ← 현장 1 이미지
        ├── raemian-suwon/         ← 현장 2 이미지
        └── hillstate-incheon/     ← 현장 3 이미지
```

---

## 새 현장 추가 — 3단계

### 1단계 — 현장 데이터 파일 생성

기존 파일을 복사해서 내용만 교체합니다.

```bash
cp data/sites/sujainroicent-inha.js data/sites/새현장-슬러그.js
```

`slug`, `projectName`, `telNumber`, 이미지 경로 등 수정.

### 2단계 — 레지스트리에 등록

`data/siteRegistry.js` 에 2줄 추가:

```js
import 새현장 from "./sites/새현장-슬러그.js";  // ← import 추가

const sites = [
  doosanCheonan,
  raemianSuwon,
  hillstateIncheon,
  새현장,  // ← 배열에 추가
];
```

### 3단계 — 이미지 추가 + 배포

```bash
# public/apt/새현장-슬러그/ 폴더에 이미지 넣기
git add .
git commit -m "feat: 새현장 랜딩페이지 추가"
git push  # Vercel 자동 배포
```

**완료!** `/apt/새현장-슬러그` URL로 바로 접근 가능합니다.

---

## URL 구조

| 경로                         | 설명                    |
|------------------------------|-------------------------|
| `/`                          | 현장 목록 인덱스        |
| `/apt/sujainroicent-inha `        | 인하대역 수자인 로이센트 |
| `/apt/raemian-suwon`         | 래미안 수원 랜딩페이지   |
| `/apt/hillstate-incheon`     | 힐스테이트 인천 랜딩페이지 |

---

## 환경변수 설정

`.env.local.example` → `.env.local` 복사 후 값 입력:

```env
SOLAPI_API_KEY=발급받은_API_키
SOLAPI_API_SECRET=발급받은_API_시크릿
SOLAPI_SENDER=등록된_발신번호
ADMIN_PHONE=기본_관리자_수신번호
```

> 현장별로 다른 수신번호가 필요하면 `sites/[slug].js` 에 `adminPhone` 필드를 추가하고,
> `ContactForm`에서 body에 포함시켜 전송하면 됩니다.

---

## 개발 실행

```bash
npm install
npm run dev
```
