import { NextResponse } from "next/server";
import sites from "./data/siteRegistry";

const subdomainToSlug = new Map(
  sites
    .filter((s) => s.subdomain)
    .map((s) => [new URL(`https://${s.subdomain}.addupapt.kr`).hostname, s.slug])
);

const BYPASS_PATHNAMES = new Set(["/favicon.ico", "/robots.txt", "/sitemap.xml"]);

function shouldBypass(pathname) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/apt/") ||
    BYPASS_PATHNAMES.has(pathname)
  );
}

export function middleware(request) {
  const slug = subdomainToSlug.get(request.nextUrl.hostname);
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
