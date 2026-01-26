"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion-variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * Animation direction
   */
  direction?: "up" | "down" | "left" | "right";
  /**
   * Only trigger animation once when entering viewport
   */
  once?: boolean;
}

/**
 * Reveal Component
 *
 * Reusable scroll-triggered animation wrapper
 * Respects user's motion preferences automatically
 *
 * Usage:
 * <Reveal>
 *   <h2>Content to animate</h2>
 * </Reveal>
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Disable animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Direction-based variants
  const directionVariants = {
    up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  };

  const variant = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={variant}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
