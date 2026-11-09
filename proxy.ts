import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Gates /admin/* behind HTTP Basic Auth. Credentials live in the
// ADMIN_CREDENTIALS env var as a comma-separated "user:pass" list, e.g.
// "adi:somePassword,bar:anotherPassword" — one entry per person who
// should have access. Set it in Vercel (Production + Preview); without
// it, /admin routes 404 instead of silently opening up.
export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const credentialsEnv = process.env.ADMIN_CREDENTIALS;
  if (!credentialsEnv) {
    return new Response("Not Found", { status: 404 });
  }

  const validPairs = credentialsEnv
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
    if (validPairs.includes(decoded)) {
      return NextResponse.next();
    }
  }

  return new Response("אימות נדרש", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="FITMATCH AI Admin"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
