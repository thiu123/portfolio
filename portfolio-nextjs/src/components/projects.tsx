"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, cardVariant, buttonPress, EASE } from "@/lib/motion-variants";
import { useState } from "react";

/**
 * Projects Section
 *
 * Features:
 * - Card lift with enhanced shadow on hover
 * - Image scale animation
 * - Overlay fade + slide on hover
 * - Icon hover animations
 * - Smooth entrance animations
 */
export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Food Recipes",
      description:
        "Build a recipe website that makes learning to cook easier. View all and detail food recipes, about us page. When you click on the checkbox in the ingredients section, all the checked ingredients will be crossed out.",
      image: "/recipes.jpg",
      technologies: ["HTML", "TailwindCSS", "VueJS", "NuxtJS"],
      liveUrl: "https://github.com/thiu123/food_recipes",
      githubUrl: "https://github.com/thiu123/food_recipes",
    },
    {
      title: "Pokemon Game",
      description:
        "Build a pokemon game site with a variety of options. Select the cards so that they are the same, if they are not the same, you need to select again.",
      image: "/pokemon-minimalism-pixel-art-wallpaper-preview.jpg",
      technologies: ["HTML", "CSS", "VueJS"],
      liveUrl: "https://preeminent-hotteok-a27fd7.netlify.app/",
      githubUrl: "https://github.com/thiu123/Pokemon_Game",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Selected Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-400 flex items-center gap-1 text-sm font-medium transition-colors"
              >
                View Archive
                <motion.div
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariant}
              transition={{ delay: index * 0.15, ease: EASE }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link href={project.liveUrl}>
                <motion.div
                  whileHover={
                    !shouldReduceMotion
                      ? {
                          y: -8,
                          transition: { duration: 0.4, ease: EASE },
                        }
                      : {}
                  }
                  className="h-full"
                >
                  <Card className="overflow-hidden bg-[#141414] border-white/10 hover:border-white/20 transition-colors h-full group">
                    {/* Project Image with hover scale */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.6, ease: EASE }}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Overlay that fades in on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.p
                          className="text-white text-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredCard === index ? 0 : 20,
                            opacity: hoveredCard === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: EASE }}
                        >
                          Click to view project
                        </motion.p>
                      </motion.div>
                    </div>

                    <CardHeader className="space-y-3">
                      {/* Tech Badges with stagger */}
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            variants={{
                              hidden: { scale: 0, opacity: 0 },
                              visible: { scale: 1, opacity: 1 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Title & Description */}
                      <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {project.description}
                      </CardDescription>

                      {/* Links with hover effects */}
                      <div className="flex gap-4 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={project.liveUrl}
                            className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={project.githubUrl}
                            className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
