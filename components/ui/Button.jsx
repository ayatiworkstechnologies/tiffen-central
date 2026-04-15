"use client";

import React from "react";
import { motion } from "framer-motion";

// Fill color per variant (the liquid that rises)
const fillColors = {
  primary: "bg-white",
  secondary: "bg-primary",
  outline: "bg-primary",
  light: "bg-white",
  ghost: "bg-primary",
};

// Text color after fill (inverted)
const fillTextColors = {
  primary: "group-hover:text-primary",
  secondary: "group-hover:text-white",
  outline: "group-hover:text-white",
  light: "group-hover:text-primary",
  ghost: "group-hover:text-white",
};

// Base appearance per variant
const baseStyles = {
  primary:
    "bg-primary text-white shadow-[0_14px_34px_rgba(0,79,52,0.18)] hover:shadow-[0_22px_46px_rgba(0,79,52,0.28)]",
  secondary:
    "bg-surface text-primary shadow-[0_14px_34px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_46px_rgba(0,0,0,0.12)]",
  outline: "border-[1.5px] border-primary/25 text-primary hover:border-primary/70",
  light: "border-[1.5px] border-white/30 text-white hover:border-white/60",
  ghost: "text-primary/70 hover:text-primary hover:bg-primary/5",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        y: -3,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center overflow-hidden
        rounded-full px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em]
        transition-all duration-500 focus:outline-none
        ${baseStyles[variant] || baseStyles.primary}
        ${className}
      `}
      {...props}
    >
      <span
        className={`relative z-10 transition-colors duration-500 ${
          fillTextColors[variant] || fillTextColors.primary
        }`}
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className={`
          absolute inset-0 z-0
          translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-y-0
          ${fillColors[variant] || fillColors.primary}
        `}
      />
    </motion.button>
  );
}
