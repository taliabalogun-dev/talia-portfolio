import Nav from "@/components/Nav";
import AboutBanner from "@/components/AboutBanner";
import Projects from "@/components/Projects";
import SkillsExperience from "@/components/SkillsExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <AboutBanner />
        <Projects />
        <SkillsExperience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
