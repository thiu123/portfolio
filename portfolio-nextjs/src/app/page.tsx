"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <CTA />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}
