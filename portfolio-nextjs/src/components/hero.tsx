"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { staggerContainer, EASE } from "@/lib/motion-variants";

/**
 * Hero Section — DESIGN.md compliant
 *
 * - White background, centered single-column
 * - 64px display heading with -2.125px letter-spacing
 * - 20px body-large subtitle in warm gray
 * - Primary Blue CTA + Ghost button
 * - Clean avatar with whisper border
 * - One meaningful entrance: staggered text reveal
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const textReveal = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: EASE,
      },
    },
  };

  return (
    <section
      id="home"
      className="section-white"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
      }}
    >
      <div className="container-content" style={{ width: "100%" }}>
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ gap: "32px" }}
        >
          {/* Avatar */}
          <motion.div variants={textReveal}>
            <motion.div
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/avatar.jpg"
                alt="Bui Trung Hieu"
                fill
                className="object-cover"
                priority
                sizes="160px"
              />
            </motion.div>
          </motion.div>

          {/* Pill Badge — Available */}
          <motion.div variants={textReveal}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#f2f9ff",
                color: "#097fe8",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: 1.33,
                letterSpacing: "0.125px",
                padding: "4px 12px",
                borderRadius: "9999px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#1aae39",
                  display: "inline-block",
                }}
              />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={textReveal}
            style={{ maxWidth: "720px" }}
          >
            <h1
              className="text-display-hero"
              style={{ marginBottom: "16px" }}
            >
              Frontend Developer
              <br />
              <span style={{ color: "#0075de" }}>who ships product.</span>
            </h1>
            <p
              className="text-body-large"
              style={{
                color: "#615d59",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              I build modern, production-grade web applications with React, Vue,
              and Next.js. Clean code, exceptional interfaces, real results.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textReveal}
            className="flex flex-col sm:flex-row items-center"
            style={{ gap: "12px" }}
          >
            {/* Primary Blue CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#projects"
                className="no-underline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#0075de",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.33,
                  padding: "10px 24px",
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
                View My Work
                <ArrowDown style={{ width: "16px", height: "16px" }} />
              </Link>
            </motion.div>

            {/* Ghost Button */}
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
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "rgba(0, 0, 0, 0.95)",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.33,
                  padding: "10px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
                }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: EASE }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            style={{ width: "18px", height: "18px", color: "#a39e98" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
