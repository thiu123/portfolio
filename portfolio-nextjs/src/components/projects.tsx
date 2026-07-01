"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { TiltCard } from "@/components/tilt-card";
import { SiHtml5, SiTailwindcss, SiVuedotjs, SiNuxtdotjs, SiCss3 } from "react-icons/si";
import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 />,
  TailwindCSS: <SiTailwindcss />,
  VueJS: <SiVuedotjs />,
  NuxtJS: <SiNuxtdotjs />,
  CSS: <SiCss3 />,
};

const projects = [
  {
    title: "Food Recipes",
    description:
      "A recipe discovery platform that makes cooking accessible. Browse recipes, view detailed ingredients and instructions, with interactive checkbox tracking.",
    image: "/recipes.jpg",
    technologies: ["HTML", "TailwindCSS", "VueJS", "NuxtJS"],
    liveUrl: "https://github.com/thiu123/food_recipes",
    githubUrl: "https://github.com/thiu123/food_recipes",
  },
  {
    title: "Pokemon Game",
    description:
      "A card-matching memory game with Pokemon characters. Test your memory by finding matching pairs across an increasingly challenging grid.",
    image: "/pokemon-minimalism-pixel-art-wallpaper-preview.jpg",
    technologies: ["HTML", "CSS", "VueJS"],
    liveUrl: "https://preeminent-hotteok-a27fd7.netlify.app/",
    githubUrl: "https://github.com/thiu123/Pokemon_Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-b-technical">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
            <h2 className="text-section-heading">Selected projects</h2>
            <Link
              href="https://github.com/thiu123"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent no-underline hover:underline"
            >
              View all
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeUp} transition={{ delay: index * 0.15 }}>
                <TiltCard className="border-technical bg-raised flex h-full flex-col overflow-hidden">
                  <div className="relative h-[240px] overflow-hidden border-b-technical">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-mono inline-flex items-center gap-2 border-technical px-2.5 py-1 text-xs"
                        >
                          {techIcons[tech] && (
                            <span className="flex items-center text-sm">{techIcons[tech]}</span>
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-2xl font-bold">{project.title}</h4>
                    <p className="text-secondary flex-1">{project.description}</p>

                    <div className="flex items-center gap-4 pt-2 border-t-technical">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary no-underline transition-colors hover:text-accent"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary no-underline transition-colors hover:text-accent"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
