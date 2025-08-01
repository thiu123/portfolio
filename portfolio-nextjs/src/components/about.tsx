import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import SectionWrapper from "./section-wrapper";

export default function About() {
  return (
    <SectionWrapper className="pb-20 pt-10 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate web developer who enjoys creating digital solutions
            that truly make a difference. I love turning complex problems into
            simple, intuitive, and beautiful interfaces—especially with
            frontend, where design and user interaction come together. I’m
            driven by clean code, user experience, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              Started my journey in web development during college, where I
              discovered my passion for creating interactive and user-friendly
              applications. Since then, I've worked with various technologies
              and frameworks to build scalable solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in continuous learning and staying up-to-date with the
              latest industry trends. When I'm not coding, you can find me
              contributing to open-source projects or exploring new
              technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  6 months +
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold">Clean Code</h4>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and well-documented code that
                  follows best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold">UI/UX Focus</h4>
                </div>
                <p className="text-muted-foreground">
                  Creating intuitive and visually appealing interfaces that
                  provide excellent user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold">Performance</h4>
                </div>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and search
                  engine visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
