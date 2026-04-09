"use client";

import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary: "bg-primary text-white shadow-[0_12px_30px_rgba(0,79,52,0.15)] hover:shadow-[0_20px_40px_rgba(0,79,52,0.25)]",
  secondary: "bg-white text-primary shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]",
  outline: "border-[1.5px] border-primary/20 text-primary hover:border-primary/60 hover:bg-primary/5",
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
      whileHover={{ y: -3, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center overflow-hidden
        rounded-full px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em]
        transition-all duration-500 ease-[0.22,1,0.36,1] focus:outline-none
        ${variants[variant] || variants.primary}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Premium background shine/fill effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-white/10"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Subtle bottom highlight */}
      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
    </motion.button>
  );
}
