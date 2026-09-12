import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { recordPageView } from "@/lib/analytics";

export function proxy(request: NextRequest, event: NextFetchEvent) {
  event.waitUntil(recordPageView(request.nextUrl.pathname));
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|admin|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|mp4|mp3|pdf|txt|xml|json|css|js|woff|woff2)$).*)",
  ],
};
