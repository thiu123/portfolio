"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Cursor Glow Hook
 *
 * Creates a smooth cursor-following glow effect
 * Lightweight and GPU-friendly
 *
 * Usage:
 * import { useCursorGlow } from "@/hooks/use-cursor-glow";
 *
 * const { cursorXSpring, cursorYSpring } = useCursorGlow();
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

  return {
    cursorXSpring,
    cursorYSpring,
    shouldReduceMotion,
  };
}

export default useCursorGlow;
