"use client";

import React from "react";
import { motion } from "framer-motion";

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

  // Create enough copies for a smooth infinite scroll
  const marqueeItems = [...trendingFoods, ...trendingFoods, ...trendingFoods, ...trendingFoods];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full overflow-hidden border-y border-primary/10 bg-background py-4"
    >
      <div className="flex w-max animate-marquee items-center gap-8 md:gap-12">
        {marqueeItems.map((food, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12">
            <span className="whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {food}
            </span>
            <span className="text-primary/30 text-xs">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}
