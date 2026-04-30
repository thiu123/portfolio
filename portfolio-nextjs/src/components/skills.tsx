"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, EASE } from "@/lib/motion-variants";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiVuetify,
  SiFramer,
  SiAntdesign,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

/**
 * Skills Section — DESIGN.md compliant
 *
 * - Warm white background
 * - Structured into 3 categories (from SKILL.md context)
 * - Each category in a card (white bg, whisper border, 12px radius)
 * - Skills as pill badges with icons
 * - Scannable for recruiters — not a logo marquee
 */

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks & Libraries",
    description: "Production-grade application frameworks I build with daily",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Pinia", icon: <SiVuedotjs /> }, // Fallback to Vue icon for Pinia if SiPinia is unavailable
    ],
  },
  {
    title: "Languages & Styling",
    description: "Core languages and CSS systems for modern interfaces",
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Tools & UI Systems",
    description: "Component libraries, design systems, and development tools",
    skills: [
      { name: "Shadcn/ui", icon: <SiReact /> }, // Fallback for Shadcn
      { name: "Ant Design", icon: <SiAntdesign /> },
      { name: "Vuetify", icon: <SiVuetify /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Responsive Design", icon: <MdDevices /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          <motion.div variants={fadeUp} style={{ marginBottom: "48px" }}>
            <h2 className="text-section-heading" style={{ marginBottom: "12px" }}>
              Skills & Technologies
            </h2>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "-0.125px",
                color: "#615d59",
                maxWidth: "560px",
              }}
            >
              The tools and technologies I use to build modern web applications
            </p>
          </motion.div>

          {/* Skill Categories Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "24px" }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  boxShadow: "var(--shadow-card)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
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
                {/* Category Title */}
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: 1.27,
                    letterSpacing: "-0.25px",
                    color: "rgba(0, 0, 0, 0.95)",
                    marginBottom: "8px",
                  }}
                >
                  {category.title}
                </h4>

                {/* Category Description */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    color: "#a39e98",
                    marginBottom: "20px",
                  }}
                >
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap" style={{ gap: "8px" }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
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
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        cursor: "default",
                        transition: "background-color 0.2s ease",
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e0f0ff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f2f9ff";
                      }}
                    >
                      <span style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
                        {skill.icon}
                      </span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
