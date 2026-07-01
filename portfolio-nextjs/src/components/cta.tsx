"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer, STAGGER } from "@/lib/motion-variants";

const contactInfo = [
  { label: "Email", value: "buitrunghieu.dev@gmail.com", href: "mailto:buitrunghieu.dev@gmail.com" },
  { label: "Phone", value: "+84 971 450 800", href: "tel:+84971450800" },
  { label: "Location", value: "Ho Chi Minh City, Vietnam", href: null },
];

const headline = "Let's work together.";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-b-technical">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div>
            <motion.h2
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: STAGGER / 4 } },
              }}
              className="text-section-heading mb-4 flex flex-wrap"
              aria-label={headline}
            >
              {headline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  aria-hidden
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-secondary text-body-large max-w-[42ch]">
              I&apos;m currently looking for new opportunities. My inbox is
              always open for a question or a good project.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="mailto:buitrunghieu.dev@gmail.com"
                className="inline-flex items-center gap-2 border-technical px-6 py-3 text-sm font-semibold text-bg no-underline transition-colors"
                style={{ backgroundColor: "var(--color-accent)", borderColor: "var(--color-accent)" }}
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/thiu123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-technical px-6 py-3 text-sm font-semibold no-underline transition-colors hover:border-[var(--color-accent)] hover:text-accent"
              >
                View GitHub
              </Link>
            </motion.div>
          </div>

          {/* Contact block — terminal style, one bordered panel, no repeated cards */}
          <motion.div variants={fadeUp} className="border-technical bg-raised p-6">
            <p className="text-mono-label mb-4">Contact info</p>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-col gap-1 border-b-technical pb-4 last:border-b-0 last:pb-0">
                  <span className="text-mono text-xs text-muted uppercase">{info.label}</span>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-mono text-sm no-underline transition-colors hover:text-accent"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <span className="text-mono text-sm">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
