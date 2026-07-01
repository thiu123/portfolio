"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function CountUp({
  value,
  duration = 1.2,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(
    numeric === null || shouldReduceMotion ? value : `0${suffix}`
  );

  useEffect(() => {
    if (!inView || numeric === null || shouldReduceMotion) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setDisplay(`${Math.floor(progress * numeric)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, suffix, duration, shouldReduceMotion]);

  return <span ref={ref}>{display}</span>;
}
