import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-07XVVKRJY1" />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
