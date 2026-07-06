import { NextResponse } from "next/server";
import sites from "./data/siteRegistry";

const subdomainToSlug = new Map(
  sites
    .filter((s) => s.subdomain)
    .map((s) => [new URL(`https://${s.subdomain}.addupapt.kr`).hostname, s.slug])
);

function shouldBypass(pathname) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/apt/") ||
    /\.[^/]+$/.test(pathname) // 확장자 있는 정적 파일 경로 (favicon.ico, robots.txt, og 이미지, 폰트 등)
  );
}

export function middleware(request) {
  const hostname = request.headers.get("host") ?? request.nextUrl.hostname;
  const slug = subdomainToSlug.get(hostname);
  if (!slug) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (shouldBypass(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/apt/${slug}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
