import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { COOKIE_NAME } from "./utils/constants";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has(COOKIE_NAME);
  const isAuthPage = request.nextUrl.pathname === "/sign-in";

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/sandbox", request.url));
  }

  if (isAuthenticated && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/sandbox", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/sign-in"],
};
