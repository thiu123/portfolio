"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, EASE, STAGGER } from "@/lib/motion-variants";
import { ScrollProgressRail } from "@/components/scroll-progress-rail";
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
  Pinia: <SiVuedotjs />,
};

const experiences = [
  {
    period: "Jun 2025 - Present",
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
    period: "Nov 2024 - Jul 2025",
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

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="section-padding border-b-technical">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="text-mono-label mb-10 block">
            Experience
          </motion.span>

          <div ref={listRef} className="relative pl-0 md:pl-8">
            <ScrollProgressRail targetRef={listRef} />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                className={`grid grid-cols-1 gap-6 pb-10 mb-10 md:grid-cols-4 ${
                  index < experiences.length - 1 ? "border-b-technical" : ""
                }`}
              >
                <div className="md:col-span-1">
                  <p className="text-mono text-sm text-muted whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>

                <div className="flex flex-col gap-4 md:col-span-3">
                  <h4 className="text-2xl font-bold">
                    {exp.role}{" "}
                    <span className="text-muted font-normal">@</span>{" "}
                    <span className="text-accent">{exp.company}</span>
                  </h4>

                  <motion.div
                    className="flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: STAGGER / 2 } },
                    }}
                  >
                    {exp.description.map((line, lineIndex) => (
                      <motion.p
                        key={lineIndex}
                        className="text-secondary"
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.4, ease: EASE },
                          },
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </motion.div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-mono inline-flex items-center gap-2 border-technical px-2.5 py-1 text-xs"
                        whileHover={!shouldReduceMotion ? { borderColor: "var(--color-accent)" } : {}}
                        transition={{ duration: 0.15 }}
                      >
                        {techIcons[tech] && (
                          <span className="flex items-center text-sm">
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
