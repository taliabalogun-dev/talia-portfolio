import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { recordPageView } from "@/lib/analytics";

const VISITOR_COOKIE = "vid";
const OWNER_COOKIE = "owner_verified";
const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 400; // ~13 months

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();

  // The site owner's own browser, marked when she unlocks /admin/analytics.
  if (request.cookies.get(OWNER_COOKIE)) {
    return response;
  }

  let visitorId = request.cookies.get(VISITOR_COOKIE)?.value;
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    response.cookies.set(VISITOR_COOKIE, visitorId, {
      maxAge: VISITOR_COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });
  }

  event.waitUntil(recordPageView(request.nextUrl.pathname, visitorId));
  return response;
}

export const config = {
  matcher: [
    "/((?!api|admin|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|mp4|mp3|pdf|txt|xml|json|css|js|woff|woff2)$).*)",
  ],
};
