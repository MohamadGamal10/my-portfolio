import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Trainings from "@/components/Trainings";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <Trainings />
      <Footer />
    </>
  );
}
