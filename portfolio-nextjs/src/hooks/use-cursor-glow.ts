"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion, useReducedMotion } from "framer-motion";

/**
 * Cursor Glow Hook
 * 
 * Creates a smooth cursor-following glow effect
 * Lightweight and GPU-friendly
 * 
 * Usage:
 * const CursorGlow = useCursorGlow();
 * return (
 *   <div className="relative">
 *     {CursorGlow}
 *     <YourContent />
 *   </div>
 * );
 */
export function useCursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px at ${cursorXSpring as any}px ${cursorYSpring as any}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
      }}
    />
  );
}

export default useCursorGlow;
