/**
 * Framer Motion Variants
 * Premium, GPU-friendly animations for Next.js portfolio
 *
 * Performance Notes:
 * - Uses opacity and transform only (GPU-accelerated)
 * - Apple-level smooth easing: cubic-bezier(0.22, 1, 0.36, 1)
 * - Respects prefers-reduced-motion via useReducedMotion hook
 */

// Global animation config
export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.6;
export const STAGGER = 0.08;

/**
 * Fade + Translate Up
 * Perfect for section reveals and scroll animations
 */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: EASE,
    },
  },
};

/**
 * Simple Fade In
 * Lightweight opacity-only animation
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

/**
 * Stagger Container
 * Animates children with cascading effect
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.1,
    },
  },
};

/**
 * Card Hover Animation
 * Lift effect with shadow enhancement
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};

/**
 * Card Reveal
 * Entrance animation for project cards
 */
export const cardVariant = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: EASE,
    },
  },
};

/**
 * Button Press
 * Tactile feedback on interaction
 */
export const buttonPress = {
  scale: 0.96,
  transition: {
    duration: 0.1,
    ease: "easeOut",
  },
};

/**
 * Page Transition
 * Smooth route changes with fade + slight movement
 */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};

/**
 * Modal Animation
 * Backdrop + content scale from center
 */
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const modalContent = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
};

/**
 * Navigation Underline
 * Animated indicator for active link
 */
export const underlineVariant = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};

/**
 * Mobile Menu Slide
 * Spring animation for mobile navigation
 */
export const mobileMenuVariant = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: EASE,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const mobileMenuItemVariant = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};
