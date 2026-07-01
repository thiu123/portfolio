"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/thiu123", icon: <Github className="h-[18px] w-[18px]" />, label: "GitHub" },
  { href: "https://linkedin.com", icon: <Linkedin className="h-[18px] w-[18px]" />, label: "LinkedIn" },
  { href: "https://twitter.com", icon: <Twitter className="h-[18px] w-[18px]" />, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t-technical px-6 py-6">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-mono text-xs text-muted">
          {"©"} {new Date().getFullYear()} Bui Trung Hieu. Built with precision.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex text-secondary no-underline transition-colors hover:text-accent"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
