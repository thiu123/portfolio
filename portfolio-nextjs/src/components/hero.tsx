"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { staggerContainer, EASE } from "@/lib/motion-variants";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const textReveal = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center border-b-technical"
      style={{ minHeight: "100dvh", paddingTop: "88px", paddingBottom: "56px" }}
    >
      <div className="container-content w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left: content */}
          <div className="flex flex-col gap-6">
            <motion.div variants={textReveal} className="flex items-center gap-6">
              <div className="tech-frame h-[128px] w-[128px] shrink-0 overflow-hidden sm:h-[192px] sm:w-[192px]">
                <Image
                  src="/avatar1.jpg"
                  alt="Bui Trung Hieu"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-xl font-semibold text-fg sm:text-2xl">Bui Trung Hieu</span>
                <span className="text-mono text-sm text-secondary">Ho Chi Minh City, Vietnam</span>
                <span className="text-mono-label text-accent inline-flex w-fit items-center gap-2">
                  [ AVAILABLE FOR WORK ]
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={textReveal} className="text-display-hero">
              Frontend developer
              <br />
              <span className="text-accent">who ships product.</span>
            </motion.h1>

            <motion.p
              variants={textReveal}
              className="text-body-large text-secondary max-w-[46ch]"
            >
              I build production-grade web applications with React, Vue, and
              Next.js. Clean code, exceptional interfaces, real results.
            </motion.p>

            <motion.div variants={textReveal} className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 border-technical px-6 py-3 text-sm font-semibold text-bg no-underline transition-colors"
                style={{ backgroundColor: "var(--color-accent)", borderColor: "var(--color-accent)" }}
              >
                View Work
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border-technical px-6 py-3 text-sm font-semibold no-underline text-fg transition-colors hover:border-[var(--color-accent)] hover:text-accent"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: 3D scene */}
          <motion.div
            variants={textReveal}
            className="tech-frame relative h-[320px] w-full border-technical bg-raised lg:h-[440px]"
          >
            <HeroCanvas />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — icon only, no label per anti-slop rules */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
