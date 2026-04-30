"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, EASE, STAGGER } from "@/lib/motion-variants";
import {
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiSass,
  SiNextdotjs,
  SiVuetify,
} from "react-icons/si";
import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  VueJS: <SiVuedotjs />,
  NuxtJS: <SiNuxtdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  React: <SiReact />,
  Redux: <SiRedux />,
  Sass: <SiSass />,
  NextJS: <SiNextdotjs />,
  Vuetify: <SiVuetify />,
  Pinia: <SiVuedotjs />, // Fallback to Vue logo
};

/**
 * Experience Section — DESIGN.md compliant
 *
 * - White background
 * - Timeline layout: date column + content column
 * - Caption text for period, card title for role
 * - Notion Blue for company links
 * - Pill badges for tech stack with icons
 * - Whisper border dividers
 */
export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const experiences = [
    {
      period: "Jun 2025 — Present",
      role: "Frontend Developer",
      company: "Smart Digitech",
      description: [
        "Developed and maintained frontend web applications using Nuxt, VueJS, React, Redux, and Sass.",
        "Collaborated with designers to implement responsive and user-friendly interfaces.",
        "Optimized application performance and ensured cross-browser compatibility.",
        "Participated in code reviews and contributed to team knowledge sharing.",
      ],
      technologies: [
        "VueJS",
        "NuxtJS",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Redux",
        "Sass",
        "NextJS",
      ],
    },
    {
      period: "Nov 2024 — Jul 2025",
      role: "Frontend Developer",
      company: "PloggVN",
      description: [
        "Developed and optimized user interfaces for web applications, ensuring smooth user experiences and high performance.",
        "Designed and implemented interfaces with a focus on UI/UX and responsive design across multiple devices.",
        "Built features, fixed bugs, and conducted QA testing across Inservio and Synode projects.",
        "Integrated frontend with backend APIs, collaborating with backend developers for seamless data synchronization.",
      ],
      technologies: [
        "VueJS",
        "NuxtJS",
        "TypeScript",
        "Tailwind CSS",
        "Vuetify",
        "Pinia",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-white section-padding"
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
            style={{ marginBottom: "48px" }}
          >
            Experience
          </motion.h2>

          {/* Experience List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-4"
                style={{
                  gap: "24px",
                  paddingBottom: "40px",
                  marginBottom: "40px",
                  borderBottom:
                    index < experiences.length - 1
                      ? "1px solid rgba(0, 0, 0, 0.1)"
                      : "none",
                }}
              >
                {/* Left: Date */}
                <div className="md:col-span-1">
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.43,
                      color: "#a39e98",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Right: Content */}
                <div
                  className="md:col-span-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Role + Company */}
                  <div>
                    <h4
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: 1.27,
                        letterSpacing: "-0.25px",
                        color: "rgba(0, 0, 0, 0.95)",
                      }}
                    >
                      {exp.role}{" "}
                      <span style={{ color: "#a39e98", fontWeight: 400 }}>
                        @
                      </span>{" "}
                      <span
                        style={{
                          color: "#0075de",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = "underline";
                          e.currentTarget.style.textDecorationColor =
                            "rgba(0, 117, 222, 0.4)";
                          e.currentTarget.style.textUnderlineOffset = "4px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = "none";
                        }}
                      >
                        {exp.company}
                      </span>
                    </h4>
                  </div>

                  {/* Description */}
                  <motion.div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: STAGGER / 2,
                        },
                      },
                    }}
                  >
                    {exp.description.map((line, lineIndex) => (
                      <motion.p
                        key={lineIndex}
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "#615d59",
                        }}
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.4,
                              ease: EASE,
                            },
                          },
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </motion.div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap" style={{ gap: "6px" }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          backgroundColor: "#f2f9ff",
                          color: "#097fe8",
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: 1.33,
                          letterSpacing: "0.125px",
                          padding: "4px 8px",
                          borderRadius: "9999px",
                          cursor: "default",
                        }}
                        whileHover={
                          !shouldReduceMotion ? { scale: 1.08 } : {}
                        }
                        transition={{ duration: 0.15 }}
                      >
                        {techIcons[tech] && (
                          <span style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
                            {techIcons[tech]}
                          </span>
                        )}
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
