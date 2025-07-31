import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/avatar.jpg"
              alt="Bui Trung Hieu"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bui Trung Hieu
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Frontend Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create modern, responsive web applications using cutting-edge
            technologies. Passionate about clean code, user experience, and
            bringing ideas to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg">
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:john@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
