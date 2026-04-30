"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/cta";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          {/* White bg */}
          <Hero />
          {/* Warm white bg */}
          <About />
          {/* White bg */}
          <Projects />
          {/* Warm white bg */}
          <Skills />
          {/* White bg */}
          <Experience />
          {/* Warm white bg */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}
