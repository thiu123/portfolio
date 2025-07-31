import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

export default function Skills() {
  // Logo mapping for different skills with their brand colors
  const skillLogos: {
    [key: string]: { icon: React.ReactNode; color: string };
  } = {
    React: { icon: <SiReact className="w-4 h-4" />, color: "text-[#61DAFB]" },
    NextJS: {
      icon: <SiNextdotjs className="w-4 h-4" />,
      color: "text-black dark:text-white",
    },
    TypeScript: {
      icon: <SiTypescript className="w-4 h-4" />,
      color: "text-[#3178C6]",
    },
    JavaScript: {
      icon: <SiJavascript className="w-4 h-4" />,
      color: "text-[#F7DF1E]",
    },
    HTML5: { icon: <SiHtml5 className="w-4 h-4" />, color: "text-[#E34F26]" },
    CSS: { icon: <SiCss3 className="w-4 h-4" />, color: "text-[#1572B6]" },
    "Tailwind CSS": {
      icon: <SiTailwindcss className="w-4 h-4" />,
      color: "text-[#06B6D4]",
    },
    VueJS: {
      icon: <SiVuedotjs className="w-4 h-4" />,
      color: "text-[#4FC08D]",
    },
    NuxtJS: {
      icon: <SiNuxtdotjs className="w-4 h-4" />,
      color: "text-[#00DC82]",
    },
    "Node.js": {
      icon: <SiNodedotjs className="w-4 h-4" />,
      color: "text-[#339933]",
    },
    "Express.js": {
      icon: <SiExpress className="w-4 h-4" />,
      color: "text-black dark:text-white",
    },
    MongoDB: {
      icon: <SiMongodb className="w-4 h-4" />,
      color: "text-[#47A248]",
    },
    Git: { icon: <SiGit className="w-4 h-4" />, color: "text-[#F05032]" },
    Vercel: {
      icon: <SiVercel className="w-4 h-4" />,
      color: "text-black dark:text-white",
    },
    Netlify: {
      icon: <SiNetlify className="w-4 h-4" />,
      color: "text-[#00C7B7]",
    },
    Firebase: {
      icon: <SiFirebase className="w-4 h-4" />,
      color: "text-[#FFCA28]",
    },
    Vite: { icon: <SiVite className="w-4 h-4" />, color: "text-[#646CFF]" },
    Figma: { icon: <SiFigma className="w-4 h-4" />, color: "text-[#F24E1E]" },
    "Responsive Design": {
      icon: <MdDevices className="w-4 h-4" />,
      color: "text-[#6366F1]",
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "NextJS",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "Tailwind CSS",
        "VueJS",
        "NuxtJS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Vercel", "Netlify", "Firebase", "Vite"],
    },
    {
      title: "Design & Others",
      skills: ["Figma", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const skillData = skillLogos[skill];
                    return (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm flex items-center gap-1.5 px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors group"
                      >
                        <span
                          className={`${
                            skillData?.color || "text-current"
                          } group-hover:text-current transition-colors`}
                        >
                          {skillData?.icon}
                        </span>
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}