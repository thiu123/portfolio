"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { CountUp } from "@/components/count-up";

const metrics = [
  { value: "2+", label: "Projects completed" },
  { value: "1", label: "Year of experience" },
  { value: "100%", label: "Frontend focused" },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-b-technical">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="text-mono-label mb-6 block">
            About
          </motion.span>

          <motion.div variants={fadeUp} className="max-w-[62ch] mb-16">
            <p className="text-body-large mb-4">
              I&apos;m a frontend developer who treats every interface as a
              product, not just a screen.
            </p>
            <p className="text-secondary mb-3">
              Started building for the web in college, where interactive UI
              became the thing I couldn&apos;t stop tinkering with. I work
              across the React and Vue ecosystems, building with Next.js,
              Nuxt, TypeScript, and modern CSS.
            </p>
            <p className="text-secondary">
              Great frontend work is invisible. Users should feel the quality
              without ever noticing the craft.
            </p>
          </motion.div>

          {/* Metric strip — no cards, vertical hairline dividers only */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3"
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`py-2 sm:py-0 sm:pl-8 ${
                  index > 0 ? "sm:border-l-technical" : ""
                }`}
              >
                <div className="text-display-hero" style={{ fontSize: "3rem" }}>
                  <CountUp value={metric.value} />
                </div>
                <p className="text-mono-label mt-2">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
