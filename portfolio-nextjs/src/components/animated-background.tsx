"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 25; i++) {
        // Further reduced to 25 stars for optimal performance
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5, // 0.5 to 2px
          duration: Math.random() * 10 + 8, // Slower animation: 8-18 seconds
          delay: Math.random() * 10, // Longer delays
          opacity: Math.random() * 0.6 + 0.4, // Slightly brighter
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950">
      {/* Single optimized orb - removed complex multi-orb animations */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-3xl opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.1) 50%, transparent 70%)",
          top: "20%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Mixed starfield - some animated, some static for performance balance */}
      {stars.map((star, index) => {
        // Only animate every 3rd star, rest are static
        const shouldAnimate = index % 3 === 0;

        if (shouldAnimate) {
          return (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.5, star.opacity],
              }}
              transition={{
                duration: star.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          );
        }

        // Static stars for better performance
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.8, // Slightly dimmer for static stars
            }}
          />
        );
      })}
    </div>
  );
}
