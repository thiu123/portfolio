"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion-variants";

/**
 * Navigation — DESIGN.md compliant
 *
 * - Clean horizontal nav on white background
 * - NotionInter 15px weight 600 for links
 * - Notion Blue pill CTA right-aligned
 * - Scrolled: white bg + whisper border bottom
 * - Mobile: hamburger collapse
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "#home",
        "#about",
        "#projects",
        "#skills",
        "#experience",
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
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      id="nav"
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container-content">
        <div className="flex justify-between items-center" style={{ height: "64px" }}>
          {/* Logo / Name */}
          <Link
            href="#home"
            className="no-underline"
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.95)",
              textDecoration: "none",
              lineHeight: 1.33,
            }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              style={{ textDecoration: "none" }}
            >
              Bui Trung Hieu
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: "32px" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative no-underline"
                style={{
                  fontSize: "15px",
                  fontWeight: activeSection === item.href ? 600 : 500,
                  color:
                    activeSection === item.href
                      ? "rgba(0, 0, 0, 0.95)"
                      : "#615d59",
                  textDecoration: "none",
                  lineHeight: 1.33,
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(0, 0, 0, 0.95)";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href) {
                    e.currentTarget.style.color = "#615d59";
                  }
                }}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#0075de",
                      borderRadius: "1px",
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#contact"
                className="no-underline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#0075de",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.33,
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "1px solid transparent",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#005bab";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0075de";
                }}
              >
                Resume
              </Link>
            </motion.div>
          </div>

          {/* Hamburger Menu */}
          <motion.button
            className="md:hidden relative flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.96 }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between" style={{ width: "22px", height: "16px" }}>
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  display: "block",
                  borderRadius: "1px",
                }}
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  display: "block",
                  borderRadius: "1px",
                }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  display: "block",
                  borderRadius: "1px",
                }}
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div
                style={{
                  paddingTop: "8px",
                  paddingBottom: "16px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="no-underline block"
                      style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#615d59",
                        padding: "10px 12px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        transition: "background-color 0.2s ease, color 0.2s ease",
                      }}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f6f5f4";
                        e.currentTarget.style.color = "rgba(0, 0, 0, 0.95)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#615d59";
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navItems.length * 0.05,
                    ease: EASE,
                  }}
                  style={{ padding: "8px 12px 0" }}
                >
                  <Link
                    href="#contact"
                    className="no-underline block text-center"
                    style={{
                      backgroundColor: "#0075de",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: 600,
                      padding: "10px 16px",
                      borderRadius: "4px",
                      textDecoration: "none",
                    }}
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
