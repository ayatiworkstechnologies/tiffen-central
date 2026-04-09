"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dishes = [
  {
    id: 1,
    name: "Cone Dosa",
    desc: "Tall crisp cone dosa served with chutneys and sambar.",
    x: "24%",
    y: "64%",
    position: "left",
  },
  {
    id: 2,
    name: "Traditional Pongal",
    desc: "Soft pongal with ghee, pepper, and a comforting homestyle finish.",
    x: "38%",
    y: "48%",
    position: "top",
  },
  {
    id: 3,
    name: "Medu Vada",
    desc: "Golden medu vada with crisp texture and classic South Indian flavor.",
    x: "60%",
    y: "51%",
    position: "top",
  },
  {
    id: 4,
    name: "Zesty Lemon Rice",
    desc: "Tangy lemon rice with curry leaves, mustard, and roasted seasoning.",
    x: "78%",
    y: "52%",
    position: "right",
  },
  {
    id: 5,
    name: "Idli Platter",
    desc: "Soft steamed idlis served with chutneys and hot sambar.",
    x: "47%",
    y: "71%",
    position: "bottom",
  },
  {
    id: 6,
    name: "Fresh Veg Uttapam",
    desc: "Soft uttapam layered with vegetables and gentle aromatic spices.",
    x: "66%",
    y: "73%",
    position: "bottom",
  },
];

function getCardPosition(position) {
  switch (position) {
    case "left":
      return "right-7 top-1/2 -translate-y-1/2";
    case "right":
      return "left-7 top-1/2 -translate-y-1/2";
    case "bottom":
      return "left-1/2 top-7 -translate-x-1/2";
    case "top":
    default:
      return "bottom-7 left-1/2 -translate-x-1/2";
  }
}

function getLinePosition(position) {
  switch (position) {
    case "left":
      return "right-3 top-1/2 h-[1px] w-8 -translate-y-1/2 bg-white/40";
    case "right":
      return "left-3 top-1/2 h-[1px] w-8 -translate-y-1/2 bg-white/40";
    case "bottom":
      return "left-1/2 top-3 h-8 w-[1px] -translate-x-1/2 bg-white/40";
    case "top":
    default:
      return "bottom-3 left-1/2 h-8 w-[1px] -translate-x-1/2 bg-white/40";
  }
}

export default function TiffenHeroHotspot() {
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDish((prev) => (prev + 1) % dishes.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative mx-auto h-[320px] w-full max-w-[1920px] sm:h-[420px] md:h-[520px] lg:h-[640px] xl:h-[760px]">
        {/* Background image */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            unoptimized
            src="/round.png"
            alt="Tiffen Central table with dishes"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_48%)]" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-5 z-30 -translate-x-1/2 text-center sm:top-7 md:top-8"
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-white/70 sm:text-[11px]">
            Signature Experience
          </p>
          <h2 className="font-serif text-[18px] uppercase tracking-[0.18em] text-white sm:text-[22px] md:text-[26px] lg:text-[32px]">
            Crafted to Satisfy
          </h2>
        </motion.div>

        {/* Hotspots */}
        {dishes.map((dish, index) => {
          const isActive = activeDish === index;

          return (
            <motion.div
              key={dish.id}
              className="absolute z-30"
              style={{ left: dish.x, top: dish.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Ambient glow */}
                <motion.span
                  animate={
                    isActive
                      ? { scale: [1, 1.45, 1], opacity: [0.18, 0.4, 0.18] }
                      : { scale: 1, opacity: 0.12 }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-16 w-16 rounded-full bg-white/10 blur-md"
                />

                {/* Ring */}
                <motion.span
                  animate={
                    isActive
                      ? { scale: [1, 1.18, 1], opacity: [0.45, 1, 0.45] }
                      : { scale: 1, opacity: 0.35 }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute rounded-full border ${
                    isActive
                      ? "h-10 w-10 border-white/70"
                      : "h-7 w-7 border-white/35"
                  }`}
                />

                {/* Dot */}
                <motion.button
                  type="button"
                  onClick={() => setActiveDish(index)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative z-20 flex items-center justify-center rounded-full border border-white/70 backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "h-5 w-5 bg-white shadow-[0_0_22px_rgba(255,255,255,0.8)]"
                      : "h-3.5 w-3.5 bg-white/85"
                  }`}
                  aria-label={dish.name}
                >
                  {isActive && (
                    <span className="absolute h-2 w-2 rounded-full bg-[#0f6b4f]" />
                  )}
                </motion.button>

                {/* Connector line */}
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute ${getLinePosition(dish.position)}`}
                  />
                )}

                {/* Detail card */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={dish.id}
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className={`absolute ${getCardPosition(
                        dish.position,
                      )} min-w-[170px] max-w-[230px] rounded-2xl border border-white/20 bg-white/10 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:min-w-[200px] sm:max-w-[250px]`}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute -top-8 right-0 h-16 w-16 rounded-full bg-white/10 blur-2xl" />

                      <div className="relative z-10">
                        <p className="text-[8px] uppercase tracking-[0.24em] text-white/75 sm:text-[9px]">
                          Dish Info
                        </p>

                        <h3 className="mt-1 font-serif text-[12px] uppercase leading-tight text-white sm:text-[14px] md:text-[15px]">
                          {dish.name}
                        </h3>

                        <div className="mt-2 h-px w-12 bg-white/35" />

                        <p className="mt-2 text-[10px] leading-4 text-white/80 sm:text-[11px]">
                          {dish.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </section>
  );
}
