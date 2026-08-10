import Hero from "../../components/sections/Hero";
import Problem from "../../components/sections/Problem";
import Services from "../../components/sections/Services";
import Contact from "../../components/sections/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <Contact />
      {/* Footer section coming next */}
    </main>
  );
}
