"use client";

import React from "react";
import { motion } from "framer-motion";
import OfferTexture from "../ui/OfferTexture";

export default function LogoStrip() {
  const trendingFoods = [
    "Classic Masala Dosa",
    "Steamed Soft Idli",
    "Crispy Medu Vada",
    "Ghee Ven Pongal",
    "Filter Kaapi",
    "Mysore Masala",
    "Onion Rava Dosa",
    "Podi Idli",
  ];

  // Create enough copies for a smooth infinite scroll.
  const marqueeItems = [
    ...trendingFoods,
    ...trendingFoods,
    ...trendingFoods,
    ...trendingFoods,
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden border-y border-primary/10 bg-background/40 py-4 backdrop-blur-sm"
    >
      <OfferTexture className="opacity-[0.06]" />
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/70 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/70 to-transparent sm:w-24" />

      <div className="flex w-max animate-[tc-marquee_42s_linear_infinite] items-center gap-10 md:gap-14">
        {marqueeItems.map((food, index) => (
          <div key={index} className="flex items-center gap-10 md:gap-14">
            <span className="whitespace-nowrap font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {food}
            </span>
            <span aria-hidden="true" className="text-primary/25 text-xs">
              *
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
