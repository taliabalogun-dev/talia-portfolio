import type { Metadata } from "next";
import { Anton, Caveat, Jost, Plus_Jakarta_Sans } from "next/font/google";
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

const handFont = Caveat({
  variable: "--font-caveat",
  weight: ["600", "700"],
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
      className={`${displayFont.variable} ${sansFont.variable} ${handFont.variable} ${cocurateFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
