import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./section-wrapper";

export default function Projects() {
  const projects = [
    {
      title: "Food Recipes",
      description:
        "Build a recipe website that makes learning to cook easier. View all and detail food recipes, about us page. When you click on the checkbox in the ingredients section, all the checked ingredients will be crossed out.",
      image: "/recipes.jpg",
      technologies: ["HTML", "TailwindCSS", "VueJS", "NuxtJS"],
      liveUrl: "https://github.com/thiu123/food_recipes",
      githubUrl: "https://github.com/thiu123/food_recipes",
      duration: "Oct 2024 - Oct 2024",
      type: "Personal self-study project",
    },
    {
      title: "Pokemon Game",
      description:
        "Build a pokemon game site with a variety of options. Select the cards so that they are the same, if they are not the same, you need to select again.",
      image: "/pokemon-minimalism-pixel-art-wallpaper-preview.jpg",
      technologies: ["HTML", "CSS", "VueJS"],
      liveUrl: "https://preeminent-hotteok-a27fd7.netlify.app/",
      githubUrl: "https://github.com/thiu123/Pokemon_Game",
      duration: "Aug 2024 - Sep 2024",
      type: "Personal self-study project",
    },
  ];

  return (
    <SectionWrapper className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.duration && (
                  <div className="text-sm text-muted-foreground mb-2">
                    📅 {project.duration}
                  </div>
                )}
                {project.type && (
                  <div className="text-sm text-muted-foreground mb-2">
                    🏷️ {project.type}
                  </div>
                )}
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
