import type { Metadata } from "next";
import { Anton, Jost, Plus_Jakarta_Sans } from "next/font/google";
import ClickFx from "@/components/ClickFx";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const displayFont = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

/** Co Curate's own brand font, used only for callouts referencing the Co Curate platform (e.g. the contractor-role banner). */
const cocurateFont = Jost({
  variable: "--font-jost",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${cocurateFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <ClickFx />
      </body>
    </html>
  );
}
