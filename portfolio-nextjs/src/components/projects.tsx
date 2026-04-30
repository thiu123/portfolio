"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, EASE } from "@/lib/motion-variants";
import { SiHtml5, SiTailwindcss, SiVuedotjs, SiNuxtdotjs, SiCss3 } from "react-icons/si";
import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 />,
  TailwindCSS: <SiTailwindcss />,
  VueJS: <SiVuedotjs />,
  NuxtJS: <SiNuxtdotjs />,
  CSS: <SiCss3 />,
};

/**
 * Projects Section — DESIGN.md compliant
 *
 * - White background
 * - Feature Cards with Illustrations per DESIGN.md
 * - 12px radius, whisper border, multi-layer card shadow
 * - Pill badges for tech stack with icons
 * - Hover: shadow intensification + card lift
 */
export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      title: "Food Recipes",
      description:
        "A recipe discovery platform that makes cooking accessible. Browse recipes, view detailed ingredients and instructions, with interactive checkbox tracking for ingredients.",
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

  return (
    <section
      id="projects"
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
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between"
            style={{ marginBottom: "48px" }}
          >
            <h2 className="text-section-heading">Selected Projects</h2>
            <Link
              href="https://github.com/thiu123"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hidden sm:inline-flex items-center"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0075de",
                textDecoration: "none",
                gap: "4px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              View All →
            </Link>
          </motion.div>

          {/* Projects Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "24px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-card)",
                    transition: "box-shadow 0.4s ease, transform 0.4s ease",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  whileHover={
                    !shouldReduceMotion
                      ? {
                          y: -6,
                          transition: { duration: 0.4, ease: EASE },
                        }
                      : {}
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "var(--shadow-deep)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "var(--shadow-card)";
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "240px",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill 
                      className="object-cover"
                      style={{
                        transition: "transform 0.6s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.03)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    {/* Tech Badges */}
                    <div className="flex flex-wrap" style={{ gap: "6px" }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
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
                          }}
                        >
                          {techIcons[tech] && (
                            <span style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
                              {techIcons[tech]}
                            </span>
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h4
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: 1.27,
                        letterSpacing: "-0.25px",
                        color: "rgba(0, 0, 0, 0.95)",
                      }}
                    >
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#615d59",
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Links */}
                    <div
                      className="flex items-center"
                      style={{
                        gap: "16px",
                        paddingTop: "8px",
                        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline inline-flex items-center"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#615d59",
                          gap: "6px",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#0075de";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#615d59";
                        }}
                      >
                        <ExternalLink
                          style={{ width: "14px", height: "14px" }}
                        />
                        Live
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline inline-flex items-center"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#615d59",
                          gap: "6px",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#0075de";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#615d59";
                        }}
                      >
                        <Github style={{ width: "14px", height: "14px" }} />
                        Source
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
