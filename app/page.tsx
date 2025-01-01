import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
