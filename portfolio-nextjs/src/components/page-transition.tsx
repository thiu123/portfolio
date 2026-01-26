"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pageTransition } from "@/lib/motion-variants";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Page Transition Wrapper
 *
 * Wraps page content to provide smooth transitions between routes
 * Uses AnimatePresence with mode="wait" for clean transitions
 *
 * Add this to your root layout or individual pages
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
