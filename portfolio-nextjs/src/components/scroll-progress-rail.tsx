"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ScrollProgressRail({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement | null>;
}) {
  const fillRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !targetRef.current || !fillRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [shouldReduceMotion, targetRef]);

  return (
    <div
      aria-hidden
      className="absolute left-0 top-0 hidden h-full w-px md:block"
      style={{ backgroundColor: "var(--color-border)" }}
    >
      <div
        ref={fillRef}
        className="h-full w-full"
        style={{ backgroundColor: "var(--color-accent)", transform: "scaleY(0)" }}
      />
    </div>
  );
}
