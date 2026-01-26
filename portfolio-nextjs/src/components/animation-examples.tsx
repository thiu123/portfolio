/**
 * Framer Motion Animation Examples
 * Copy-paste ready snippets for common animation patterns
 */

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { EASE } from "@/lib/motion-variants";

// ============================================
// 1. SCROLL-LINKED PARALLAX
// ============================================
export function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative z-10">Content</div>
    </div>
  );
}

// ============================================
// 2. NUMBER COUNTER ANIMATION
// ============================================
export function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration });
    return animation.stop;
  }, [value, count, duration]);

  return <motion.span>{rounded}</motion.span>;
}

// ============================================
// 3. MAGNETIC BUTTON
// ============================================
export function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

// ============================================
// 4. TEXT REVEAL (LETTER BY LETTER)
// ============================================
export function TextReveal({ text }: { text: string }) {
  const letters = text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: EASE,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl font-bold"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// ============================================
// 5. PROGRESS BAR
// ============================================
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// ============================================
// 6. REVEAL ON HOVER (IMAGE OVERLAY)
// ============================================
export function HoverRevealCard() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      whileHover="hover"
      initial="initial"
    >
      <img src="/project.jpg" alt="Project" className="w-full" />

      <motion.div
        className="absolute inset-0 bg-black/80 flex items-center justify-center"
        variants={{
          initial: { opacity: 0, scale: 1.2 },
          hover: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <motion.p
          className="text-white text-xl"
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
        >
          View Project
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// 7. STAGGERED LIST
// ============================================
export function StaggeredList({ items }: { items: string[] }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: EASE,
      },
    },
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          whileHover={{ x: 4 }}
          className="p-4 bg-gray-800 rounded"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

// ============================================
// 8. FLOATING ANIMATION (CONTINUOUS)
// ============================================
export function FloatingElement({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// 9. MODAL WITH BACKDROP
// ============================================
export function AnimatedModal({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{
          scale: isOpen ? 1 : 0.9,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20,
        }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ============================================
// 10. PULSE ANIMATION (ATTENTION GRABBER)
// ============================================
export function PulseButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      className="relative px-6 py-3 bg-blue-500 text-white rounded-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-blue-400"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{
          scale: [1, 1.3, 1.5],
          opacity: [0.6, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.button>
  );
}

// ============================================
// 11. CARD FLIP
// ============================================
export function FlipCard({
  front,
  back,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-64 h-96 cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">{front}</div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

// ============================================
// 12. WAVE TEXT ANIMATION
// ============================================
export function WaveText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <div className="flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
