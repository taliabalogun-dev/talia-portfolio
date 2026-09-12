import AnalyticsGate from "./AnalyticsGate";

export const metadata = {
  title: "Analytics",
  robots: { index: false, follow: false },
};

export default function AnalyticsPage() {
  return <AnalyticsGate />;
}
