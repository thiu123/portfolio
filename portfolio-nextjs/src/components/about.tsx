"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import { fadeUp, staggerContainer, EASE } from "@/lib/motion-variants";

/**
 * About Section — DESIGN.md compliant
 *
 * - Warm white (#f6f5f4) background for visual rhythm
 * - Concise narrative with product mindset
 * - 3 Metric Cards per DESIGN.md component spec
 * - Section heading at 48px weight 700
 */
export default function About() {
  const metrics = [
    {
      value: "2+",
      label: "Projects Completed",
      icon: <Code style={{ width: "20px", height: "20px", color: "#0075de" }} />,
    },
    {
      value: "1year+",
      label: "Professional Experience",
      icon: <Zap style={{ width: "20px", height: "20px", color: "#2a9d99" }} />,
    },
    {
      value: "100%",
      label: "Frontend Focused",
      icon: <Palette style={{ width: "20px", height: "20px", color: "#dd5b00" }} />,
    },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-section-heading"
            style={{ marginBottom: "24px" }}
          >
            About Me
          </motion.h2>

          {/* Narrative */}
          <motion.div
            variants={fadeUp}
            style={{ maxWidth: "720px", marginBottom: "48px" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "-0.125px",
                color: "#615d59",
                marginBottom: "16px",
              }}
            >
              I&apos;m a passionate frontend developer who treats every interface
              as a product — not just a screen.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#615d59",
                marginBottom: "12px",
              }}
            >
              Started my journey in web development during college, where I
              discovered my passion for creating interactive and user-friendly
              applications. I work across the React and Vue ecosystems — building
              with Next.js, Nuxt, TypeScript, and modern CSS to create interfaces
              that are both beautiful and performant.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#615d59",
              }}
            >
              I believe great frontend work is invisible — users should feel the
              quality without ever noticing the craft. Every component I build
              follows this philosophy: clean, scalable, and deliberately designed.
            </p>
          </motion.div>

          {/* Metric Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: "24px" }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  boxShadow: "var(--shadow-card)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "default",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: EASE },
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "var(--shadow-card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "var(--shadow-card)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  {metric.icon}
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "rgba(0, 0, 0, 0.95)",
                      letterSpacing: "-1px",
                    }}
                  >
                    {metric.value}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#615d59",
                    marginTop: "4px",
                  }}
                >
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
