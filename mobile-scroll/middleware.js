import { NextResponse } from "next/server";
import { getAllSitesForRouting } from "./data/siteRegistry";

// subdomain 라우팅용 전체 목록(mobile-scroll 현장 + adaptive-landing 포인터) —
// getAllSlugs()/getSiteBySlug()가 쓰는 기본 배열과 달리 adaptive-landing 포인터도 포함됨
const sites = getAllSitesForRouting();

// *.addupapt.kr 와일드카드 도메인은 이 프로젝트(theblue-apt)에만 연결되어 있음 —
// template: "adaptive-landing"으로 지정된 현장은 이 앱이 직접 렌더링하지 않고,
// 별도로 배포된 adaptive-landing 프로젝트로 요청을 그대로 프록시한다 (Next.js "Multi Zones" 패턴).
// 프록시 대상 origin은 환경변수로 관리 — 배포 URL이 바뀌어도 코드 수정 없이 대응 가능
const ADAPTIVE_LANDING_ORIGIN = process.env.ADAPTIVE_LANDING_ORIGIN ?? "https://adaptive-landing-ochre.vercel.app";
// adaptive-landing 쪽 next.config.mjs에 설정한 basePath와 반드시 일치해야 함 —
// 이 접두사 덕분에 adaptive-landing의 정적 자산(_next/static 등) 요청도 어떤 서브도메인으로
// 들어왔는지와 무관하게 경로만 보고 그대로 프록시할 수 있음
const ADAPTIVE_LANDING_BASE_PATH = "/apt2";

const subdomainToSite = new Map(
  sites
    .filter((s) => s.subdomain)
    .map((s) => [
      new URL(`https://${s.subdomain}.addupapt.kr`).hostname,
      { slug: s.slug, template: s.template ?? "mobile-scroll" },
    ])
);

function isStaticFile(pathname) {
  return /\.[^/]+$/.test(pathname); // 확장자 있는 정적 파일 경로 (favicon.ico, robots.txt, og 이미지, 폰트 등)
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get("host") ?? request.nextUrl.hostname;

  // adaptive-landing의 정적 자산 요청(/apt2/_next/... 등)은 어느 서브도메인으로 들어왔든
  // 전부 같은 빌드 결과물을 가리키므로, 호스트 매칭 없이 경로 접두사만으로 바로 프록시
  if (pathname === ADAPTIVE_LANDING_BASE_PATH || pathname.startsWith(`${ADAPTIVE_LANDING_BASE_PATH}/`)) {
    return NextResponse.rewrite(`${ADAPTIVE_LANDING_ORIGIN}${pathname}${search}`);
  }

  const site = subdomainToSite.get(hostname);
  if (!site) return NextResponse.next();

  if (site.template === "adaptive-landing") {
    // /api/, /_next/, 파비콘 등은 경로 그대로 프록시(이 프로젝트가 대신 처리해버리면
    // 엉뚱한 곳으로 데이터가 전송되거나 잘못된 정적 파일이 응답됨). 그 외(사실상 "/"만 해당,
    // 이 템플릿은 현장당 페이지가 하나뿐)는 그 현장의 랜딩페이지 경로로 치환
    const isPassthrough = pathname.startsWith("/_next/") || pathname.startsWith("/api/") || isStaticFile(pathname);
    const targetPath = isPassthrough ? pathname : `/apt/${site.slug}`;
    return NextResponse.rewrite(`${ADAPTIVE_LANDING_ORIGIN}${ADAPTIVE_LANDING_BASE_PATH}${targetPath}${search}`);
  }

  // 기존 mobile-scroll 현장 — 기존 로직 그대로
  if (pathname.startsWith("/_next/") || isStaticFile(pathname) || pathname.startsWith("/api/") || pathname.startsWith("/apt/")) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = `/apt/${site.slug}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
