"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { EASE } from "@/lib/motion-variants";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["#home", ...navItems.map((item) => item.href)];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveSection(`#${topMost.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container-content">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="text-mono text-sm font-semibold no-underline">
            Bui Trung Hieu
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-mono relative py-1 text-sm no-underline transition-colors ${
                  activeSection === item.href ? "text-fg" : "text-secondary hover:text-fg"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: "var(--color-accent)" }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="text-mono inline-flex items-center border-technical px-4 py-2 text-sm font-semibold no-underline transition-colors hover:border-[var(--color-accent)] hover:text-accent"
            >
              Resume
            </Link>
          </div>

          <button
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex h-4 w-[22px] flex-col justify-between">
              <motion.span
                className="block h-[2px] w-full"
                style={{ backgroundColor: "var(--color-fg)" }}
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="block h-[2px] w-full"
                style={{ backgroundColor: "var(--color-fg)" }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] w-full"
                style={{ backgroundColor: "var(--color-fg)" }}
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="border-t-technical pb-4 pt-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      className="text-mono block px-3 py-2.5 text-sm text-secondary no-underline transition-colors hover:text-fg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05, ease: EASE }}
                  className="px-3 pt-2"
                >
                  <Link
                    href="#contact"
                    className="text-mono block border-technical px-4 py-2.5 text-center text-sm font-semibold no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
