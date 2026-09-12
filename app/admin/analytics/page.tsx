import AnalyticsGate from "./AnalyticsGate";
import { adminPasswordConfigured } from "@/lib/adminSession";

export const metadata = {
  title: "Analytics",
  robots: { index: false, follow: false },
};

// Must read ADMIN_PASSWORD at request time, not bake it into a static build.
export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return <AnalyticsGate passwordConfigured={adminPasswordConfigured} />;
}
