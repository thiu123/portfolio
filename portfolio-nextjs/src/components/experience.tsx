"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { EASE, STAGGER } from "@/lib/motion-variants";

/**
 * Experience Section
 *
 * Features:
 * - Smooth scroll-triggered animations
 * - Staggered badge reveals
 * - Hover effects on badges
 * - Line-by-line description fade-in
 */
export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const experiences = [
    {
      period: "JUNE 2025 — PRESENT",
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
      period: "NOV 2024 — JUL 2025",
      role: "Frontend Developer",
      company: "PloggVN",
      description: [
        "As a Frontend Developer at PloggVN, I am responsible for developing and optimizing user interfaces for web applications, ensuring smooth user experiences and high performance. Key responsibilities include:",
        "Inservio Project:",
        "• Designing and implementing user interfaces with a focus on UI/UX.",
        "• Ensuring responsive design for compatibility across multiple devices.",
        "• Adding new features based on product requirements.",
        "• Fixing bugs and optimizing performance.",
        "• Conducting quality assurance (QA) testing to ensure stability.",
        "Synode Project:",
        "• Developing and optimizing the frontend interface.",
        "• Fixing bugs and improving performance.",
        "• Performing QA testing to maintain product consistency.",
        "• Integrating the frontend with the backend, collaborating with backend developers for seamless data synchronization.",
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Professional Experience
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: EASE,
              }}
              className="grid md:grid-cols-4 gap-6 pb-12 border-b border-white/10 last:border-0 group"
            >
              {/* Left: Date */}
              <motion.div
                className="md:col-span-1"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-500 font-medium group-hover:text-gray-400 transition-colors">
                  {exp.period}
                </p>
              </motion.div>

              {/* Right: Content */}
              <div className="md:col-span-3 space-y-4">
                <div className="space-y-3">
                  <motion.h3
                    className="text-xl font-semibold mb-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.role}{" "}
                    <span className="inline-flex items-center gap-2">
                      <span className="text-blue-500">@</span>
                      <span className="text-blue-500 hover:underline decoration-blue-500/50 underline-offset-4 transition-all">
                        {exp.company}
                      </span>
                    </span>
                  </motion.h3>

                  {/* Description lines with stagger */}
                  <motion.div
                    className="text-gray-400 leading-relaxed space-y-2"
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
                        className={line.startsWith("•") ? "ml-4" : ""}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
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
                </div>

                {/* Tech Stack with stagger */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: STAGGER / 2,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.3,
                            ease: EASE,
                          },
                        },
                      }}
                    >
                      <motion.div
                        whileHover={
                          !shouldReduceMotion
                            ? {
                                scale: 1.1,
                                y: -2,
                              }
                            : {}
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
