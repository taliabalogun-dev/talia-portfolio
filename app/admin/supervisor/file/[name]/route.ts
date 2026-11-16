import type { NextRequest } from "next/server";
import { isSupervisor, readDeliverable } from "@/lib/supervisorSession";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, ctx: RouteContext<"/admin/supervisor/file/[name]">) {
  if (!(await isSupervisor())) return new Response("Not signed in", { status: 401 });
  const { name } = await ctx.params;
  const body = await readDeliverable(decodeURIComponent(name));
  if (!body) return new Response("Not found", { status: 404 });
  const download = request.nextUrl.searchParams.has("download");
  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${decodeURIComponent(name).replace(/"/g, "")}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
