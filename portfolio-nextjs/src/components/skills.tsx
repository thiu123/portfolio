"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { ScrambleText } from "@/components/scramble-text";
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

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Pinia", icon: <SiVuedotjs /> },
    ],
  },
  {
    title: "Languages & Styling",
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
    skills: [
      { name: "Shadcn/ui", icon: <SiReact /> },
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
    <section id="skills" className="section-padding border-b-technical">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-section-heading mb-3">Skills & technologies</h2>
            <p className="text-secondary text-body-large max-w-[46ch]">
              The tools I use to build modern web applications
            </p>
          </motion.div>

          <div className="flex flex-col">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 gap-4 py-6 md:grid-cols-4 md:gap-8 ${
                  index > 0 ? "border-t-technical" : ""
                }`}
              >
                <h4 className="text-mono-label md:col-span-1">{category.title}</h4>

                <div className="flex flex-wrap gap-2 md:col-span-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-mono inline-flex cursor-default items-center gap-2 border-technical px-3 py-1.5 text-xs transition-colors hover:border-[var(--color-accent)] hover:text-accent"
                    >
                      <span className="flex items-center text-sm">{skill.icon}</span>
                      <ScrambleText text={skill.name} />
                    </span>
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
