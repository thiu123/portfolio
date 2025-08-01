"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./section-wrapper";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      id="home"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div
            className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/avatar.jpg"
              alt="Bui Trung Hieu"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4 text-muted-foreground"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bui Trung Hieu
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Frontend Developer
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            I create modern, responsive web applications using cutting-edge
            technologies. Passionate about clean code, user experience, and
            bringing ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {[
            {
              href: "https://github.com/thiu123",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/bui-hieu-b84b2b277/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "mailto:john@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          variants={itemVariants}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
