import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
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
        "NuxtJS"
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Vercel", "Netlify", "Firebase", "Vite"],
    },
    {
      title: "Design & Others",
      skills: [
        "Figma",
        "Responsive Design",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
