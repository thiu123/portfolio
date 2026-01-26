"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import {
  buttonPress,
  mobileMenuVariant,
  mobileMenuItemVariant,
  EASE,
} from "@/lib/motion-variants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = [
        "#home",
        "#projects",
        "#experience",
        "#stack",
        "#contact",
      ];
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 text-lg font-semibold group"
          >
            {/* <motion.div
              className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Code2 className="w-5 h-5 text-white" />
            </motion.div> */}
            <motion.span
              className="group-hover:text-blue-500 transition-colors"
              whileHover={{ x: 2 }}
            >
              Bui Trung Hieu
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-gray-300 hover:text-white transition-colors py-1"
              >
                {item.label}
                {/* Animated underline */}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="activeNav"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white relative overflow-hidden group"
              >
                <Link href="#contact">
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Resume</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.96 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariant}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0B0B0B] border-t border-white/10">
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={mobileMenuItemVariant}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="px-3 pt-2"
                  variants={mobileMenuItemVariant}
                >
                  <Button
                    asChild
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Resume
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
