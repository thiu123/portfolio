import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import SectionWrapper from "./section-wrapper";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "PloggVN",
      duration: "Nov 2024 - Jul 2025",
      location: "Ho Chi Minh City, Vietnam",
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
    {
      title: "Frontend Developer",
      company: "Smart Digitech",
      duration: "June 2025 - Present",
      location: "Ho Chi Minh City, Vietnam",
      description: [
        "Developed and maintained frontend web applications using React, Redux, and Sass.",
        "Collaborated with designers to implement responsive and user-friendly interfaces.",
        "Optimized application performance and ensured cross-browser compatibility.",
        "Participated in code reviews and contributed to team knowledge sharing.",
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
    <SectionWrapper>
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the roles I've held in web
              development.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-semibold">
                      {exp.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {exp.company}
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    {exp.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className={
                          point.startsWith("•") ? "list-none" : "list-disc"
                        }
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
