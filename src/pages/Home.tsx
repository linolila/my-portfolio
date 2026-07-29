import About from "../components/section/About";
import Contact from "../components/section/Contact";
import Experience from "../components/section/Experiance";
import HeroSection from "../components/section/HeroSection";
import Projects from "../components/section/Projects";
import Skills from "../components/section/Skill";


export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}