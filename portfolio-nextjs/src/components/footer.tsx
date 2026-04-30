"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

/**
 * Footer — DESIGN.md compliant
 *
 * - White background, whisper border top
 * - Copyright in caption style (#a39e98)
 * - Social links: near-black → Notion Blue on hover
 */
export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/thiu123",
      icon: <Github style={{ width: "18px", height: "18px" }} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin style={{ width: "18px", height: "18px" }} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter style={{ width: "18px", height: "18px" }} />,
      label: "Twitter",
    },
  ];

  return (
    <footer
      className="section-white"
      style={{
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        padding: "24px 1.5rem",
      }}
    >
      <div className="container-content flex flex-col sm:flex-row items-center justify-between" style={{ gap: "16px" }}>
        {/* Copyright */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.43,
            color: "#a39e98",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Bui Trung Hieu. Built with precision.
        </p>

        {/* Social Links */}
        <div className="flex items-center" style={{ gap: "20px" }}>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              aria-label={link.label}
              style={{
                color: "#615d59",
                textDecoration: "none",
                transition: "color 0.2s ease",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0075de";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#615d59";
              }}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
