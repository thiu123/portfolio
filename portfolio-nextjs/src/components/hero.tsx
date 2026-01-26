"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  buttonPress,
  EASE,
} from "@/lib/motion-variants";
import { useEffect } from "react";

/**
 * Hero Section
 *
 * Premium animations:
 * - Line-by-line text reveal with stagger
 * - Button hover with lift + glow effect
 * - Animated gradient background using motion values
 * - Respects reduced motion preferences
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animated gradient background
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);

  const gradientTransform = useTransform(
    [gradientX, gradientY],
    ([x, y]) => `translate(${x}px, ${y}px)`,
  );

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Smooth gradient animation loop
    const animation = animate(gradientX, [0, 100, 0], {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    });

    const animation2 = animate(gradientY, [0, 50, 0], {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    });

    return () => {
      animation.stop();
      animation2.stop();
    };
  }, [gradientX, gradientY, shouldReduceMotion]);

  // Text split variants for line-by-line reveal
  const textLineVariant = {
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
        duration: 0.7,
        ease: EASE,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
          style={{ transform: gradientTransform }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            {/* <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-xs font-medium border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="inline-block"
                  >
                    <Sparkles className="w-3 h-3 mr-2 inline" />
                  </motion.div>
                  AVAILABLE FOR NEW OPPORTUNITIES
                </Badge>
              </motion.div>
            </motion.div> */}

            {/* Heading */}
            <div className="space-y-4">
              <motion.h1
                variants={textLineVariant}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Hi, I'm <br />
                <span className="text-blue-500">Bui Trung Hieu</span>
              </motion.h1>

              <motion.h2
                variants={textLineVariant}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
              >
                Frontend <span className="text-blue-500">Developer</span>
              </motion.h2>

              <motion.p
                variants={textLineVariant}
                className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                I create modern, responsive web applications using cutting-edge
                technologies. Passionate about clean code, user experience, and
                bringing ideas to life.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 relative overflow-hidden group w-full sm:w-auto"
                >
                  <Link href="#projects">
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20 blur-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      View My Work
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowDown className="ml-2 h-4 w-4" />
                      </motion.div>
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/10 hover:bg-white/5 hover:border-white/20 px-8 transition-colors w-full sm:w-auto"
                >
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Bui Trung Hieu"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: EASE }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
