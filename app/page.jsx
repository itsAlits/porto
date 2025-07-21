import Hero from "./Section/Hero";
import Education from "./Section/Education";
import Contact from "./Section/Contact";

export default function Home() {
  return (
    <div className="lg:snap-y px-0 lg:px-10 snap-align-none lg:snap-mandatory lg:h-screen h-auto pb-10 overflow-y-scroll scroll-smooth">
      <Hero />
      <Education />
      <Contact />
    </div>
  );
}
