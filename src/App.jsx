import About from "./components/About";
import Contect from "./components/Contect";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

export default function App() {
  return (
    <main className="overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative min-h-screen w-full bg-slate-950">
        <div className="flixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technology />
          <Experience />
          <Projects />
          <Contect />
        </div>
      </div>
    </main>
  );
}

<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>;
