"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bgAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const dishes = [
  {
    id: 1,
    name: "Crispy Masala Dosa",
    desc: "Golden crispy dosa with potato masala and chutneys.",
    x: "18%",
    y: "70%",
    position: "left",
  },
  {
    id: 2,
    name: "Traditional Pongal",
    desc: "Soft, warm pongal topped with ghee and pepper seasoning.",
    x: "40%",
    y: "42%",
    position: "top",
  },
  {
    id: 3,
    name: "Medu Vada",
    desc: "Crisp medu vada served with chutney and sambar.",
    x: "58%",
    y: "50%",
    position: "top",
  },
  {
    id: 4,
    name: "Fresh Veg Uttapam",
    desc: "Soft uttapam topped with vegetables and spices.",
    x: "73%",
    y: "70%",
    position: "bottom",
  },
  {
    id: 5,
    name: "Zesty Lemon Rice",
    desc: "Tangy lemon rice with curry leaves and roasted peanuts.",
    x: "86%",
    y: "48%",
    position: "right",
  },
];

function getCardPosition(position) {
  switch (position) {
    case "left":
      return "right-6 top-1/2 -translate-y-1/2";
    case "right":
      return "left-6 top-1/2 -translate-y-1/2";
    case "bottom":
      return "left-1/2 top-6 -translate-x-1/2";
    case "top":
    default:
      return "bottom-6 left-1/2 -translate-x-1/2";
  }
}

export default function TiffenHeroHotspot() {
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDish((prev) => (prev + 1) % dishes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#e9e4dd]">
      <div className="relative mx-auto h-[260px] w-full max-w-[1400px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        {/* Background Image */}
        <Image
          unoptimized
          width={800}
          height={800}
          src="/round.png"
          alt="Tiffen Central Table Setup"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/12" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Heading */}
        <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 text-center sm:top-6 md:top-8">
          <h2 className="font-serif text-[14px] uppercase tracking-[0.16em] text-white sm:text-[18px] md:text-[22px]">
            Crafted to Satisfy
          </h2>
        </div>

        {/* Hotspots */}
        {dishes.map((dish, index) => {
          const isActive = activeDish === index;

          return (
            <div
              key={dish.id}
              className="absolute z-20"
              style={{ left: dish.x, top: dish.y }}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulse Ring */}
                <span
                  className={`absolute rounded-full border transition-all duration-500 ${
                    isActive
                      ? "h-10 w-10 border-white/60"
                      : "h-7 w-7 border-white/30"
                  }`}
                />

                <span
                  className={`absolute rounded-full transition-all duration-500 ${
                    isActive
                      ? "h-14 w-14 animate-ping bg-white/10"
                      : "h-8 w-8 bg-transparent"
                  }`}
                />

                {/* Dot */}
                <button
                  type="button"
                  onClick={() => setActiveDish(index)}
                  className={`relative z-10 flex items-center justify-center rounded-full border border-white/70 backdrop-blur-sm transition-all duration-300 ${
                    isActive
                      ? "h-5 w-5 bg-white shadow-[0_0_18px_rgba(255,255,255,0.7)]"
                      : "h-3.5 w-3.5 bg-white/80"
                  }`}
                  aria-label={dish.name}
                />

                {/* Separate detail card near the dot */}
                {isActive && (
                  <div
                    className={`absolute ${getCardPosition(
                      dish.position,
                    )} min-w-[160px] max-w-[220px] rounded-2xl border border-white/25 bg-white/10 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:min-w-[190px] sm:max-w-[240px]`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/80 sm:text-[9px]">
                        Dish Info
                      </p>

                      <h3 className="mt-1 font-serif text-[11px] uppercase leading-tight text-white sm:text-[13px] md:text-[14px]">
                        {dish.name}
                      </h3>

                      <div className="mt-2 h-px w-12 bg-white/30" />

                      <p className="mt-2 text-[9px] leading-4 text-white/75 sm:text-[10px] md:text-[11px]">
                        {dish.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
