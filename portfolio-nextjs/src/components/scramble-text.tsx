"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#";

export function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | undefined>(undefined);
  const shouldReduceMotion = useReducedMotion();

  function handleMouseEnter() {
    if (shouldReduceMotion) return;
    let iteration = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const step = () => {
      setDisplay(
        text
          .split("")
          .map((char, index) =>
            index < iteration ? char : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          )
          .join("")
      );

      if (iteration < text.length) {
        iteration += 0.5;
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }

  return <span onMouseEnter={handleMouseEnter}>{display}</span>;
}
