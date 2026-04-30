"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

/**
 * Contact Section — DESIGN.md compliant
 *
 * - Warm white background for visual rhythm
 * - Merged CTA + contact info
 * - Section heading at 48px centered
 * - Contact info row with clean icons
 * - Primary Blue CTA + Ghost button
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail style={{ width: "20px", height: "20px" }} />,
      label: "Email",
      value: "buitrunghieu.dev@gmail.com",
      href: "mailto:buitrunghieu.dev@gmail.com",
    },
    {
      icon: <Phone style={{ width: "20px", height: "20px" }} />,
      label: "Phone",
      value: "+84 971 450 800",
      href: "tel:+84971450800",
    },
    {
      icon: <MapPin style={{ width: "20px", height: "20px" }} />,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className=""
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div className="container-content" style={{ textAlign: "center" }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-section-heading"
            style={{ marginBottom: "16px" }}
          >
            Let&apos;s work together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "-0.125px",
              color: "#615d59",
              maxWidth: "560px",
              margin: "0 auto 48px",
            }}
          >
            I&apos;m currently looking for new opportunities. My inbox is always
            open — whether you have a question or just want to say hi.
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{
              gap: "16px",
              marginBottom: "48px",
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  padding: "24px 16px",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div style={{ color: "#0075de" }}>{info.icon}</div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: 1.33,
                    letterSpacing: "0.125px",
                    color: "#a39e98",
                    textTransform: "uppercase",
                  }}
                >
                  {info.label}
                </span>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="no-underline"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.43,
                      color: "rgba(0, 0, 0, 0.95)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0075de";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(0, 0, 0, 0.95)";
                    }}
                  >
                    {info.value}
                  </Link>
                ) : (
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.43,
                      color: "rgba(0, 0, 0, 0.95)",
                    }}
                  >
                    {info.value}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: "12px" }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="mailto:buitrunghieu.dev@gmail.com"
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
                  padding: "12px 28px",
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
                Say Hello
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </Link>
            </motion.div>

            {/* Ghost Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="https://github.com/thiu123"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "rgba(0, 0, 0, 0.95)",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.33,
                  padding: "12px 28px",
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
                View GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
