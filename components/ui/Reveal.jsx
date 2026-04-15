"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.22,
  y = 18,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

