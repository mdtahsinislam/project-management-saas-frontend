import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lightweight route protection using cookie/token presence.
// Full role checks also happen client-side + backend.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/owner") ||
    pathname.startsWith("/dashboard");

  if (!isProtected) return NextResponse.next();

  // Token is stored in localStorage (client). Middleware cannot read it.
  // We allow navigation and rely on client guards + API 401 handling.
  // Optional: set httpOnly cookie from login if you want strict middleware.
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/owner/:path*", "/dashboard/:path*"],
};
