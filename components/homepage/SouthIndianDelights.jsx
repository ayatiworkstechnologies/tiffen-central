"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import OfferTexture from "../ui/OfferTexture";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function SouthIndianDelights() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      <OfferTexture className="opacity-[0.08]" />
      {/* Subtle overlay */}
      <div className="absolute inset-0 z-[5] bg-background/95" />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-[6] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Right Side Off-Screen Rotating SVG */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="pointer-events-none absolute right-[-160px] top-1/2 z-[15] -translate-y-1/2 opacity-30 sm:right-[-130px] md:right-[-170px] lg:right-[-260px]"
      >
        <Image
          unoptimized
          src="/bg-vector.svg"
          alt="Decorative Background Vector"
          width={700}
          height={700}
          className="h-[270px] w-[270px] object-contain sm:h-[370px] sm:w-[370px] md:h-[420px] md:w-[420px] lg:h-[600px] lg:w-[600px]"
        />
      </motion.div>

      <motion.div
        className="tc-container relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <h2 className="font-serif text-[28px] uppercase tracking-[0.06em] text-primary sm:text-[32px] md:text-[38px] lg:text-[46px]">
            Authentic South Indian Delights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-primary/75 sm:text-base">
            Experience the rich, aromatic tradition of our South Indian
            favorites. Every dish is crafted with love, using heirloom recipes
            and premium ingredients to deliver extraordinary flavor in every
            single bite.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.div
              variants={zoomIn}
              className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/assets/Idly Set.webp"
                  alt="Idli Delight"
                  className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-4 font-serif text-[21px] uppercase leading-[1.05] text-primary">
                Idli Delight
              </h3>
              <p className="mt-2 text-[13px] leading-5 text-primary/70">
                Soft, freshly steamed, wholesome, and perfectly comforting for
                any time of day.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
                {/* Left Content */}
                <div className="rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                    Medu Vada
                    <br />
                    Crunch
                  </h3>
                  <p className="mt-3 text-[12px] leading-5 text-primary/70">
                    Crisp, golden on the outside, and incredibly soft inside. A
                    savory delight.
                  </p>
                </div>

                {/* Right Image */}
                <div className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/assets/Medhu Vada.webp"
                    alt="Medu Vada"
                    className="h-[110px] w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
                {/* Left Image */}
                <div className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/assets/Vada Chutney.webp"
                    alt="Medu Vada Plate"
                    className="h-[110px] w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                    Crisp &<br />
                    Flavorful
                  </h3>
                  <p className="mt-3 text-[12px] leading-5 text-primary/70">
                    Deeply satisfying texture with rich aroma and traditional
                    taste in every bite.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
              <div className="pb-3">
                <h3 className="font-serif text-[21px] uppercase leading-[1.05] text-primary">
                  Crispy Masala Dosa
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-primary/70">
                  Golden, wafer-thin crepe filled with our signature aromatic
                  potato masala.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl">
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/assets/masala dosa.webp"
                  alt="Masala Dosa"
                  className="h-[230px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
              <div className="pb-3">
                <h3 className="font-serif text-[21px] uppercase leading-[1.05] text-primary">
                  Fresh Veg Uttapam
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-primary/70">
                  Thick, flavorful, and beautifully studded with fresh
                  vegetables and roasted spices.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl">
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/assets/mini.webp"
                  alt="Veg Uttapam"
                  className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="grid overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white grid-cols-1 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <motion.div
                variants={zoomIn}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/assets/Ghee Mini Sambar Idly.webp"
                  alt="Traditional Pongal"
                  className="h-[160px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <motion.div
                  variants={zoomIn}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/assets/poori.webp"
                    alt="Pongal Bowl"
                    className="h-[120px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  variants={zoomIn}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/assets/chapthi.webp"
                    alt="Pongal Dish"
                    className="h-[120px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-[21px] uppercase leading-[1.05] text-primary">
                  Traditional Pongal Bowl
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-primary/70">
                  Warm, creamy, peppery, comforting, classic, rich.
                </p>
              </div>
            </div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#ebd9c8] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
              <div className="pb-3">
                <h3 className="font-serif text-[21px] uppercase leading-[1.05] text-primary">
                  Filter Coffee
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-primary/70">
                  Aromatic, strong, perfectly frothed, freshly brewed, comforting, traditional.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl">
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/assets/Coffee.webp"
                  alt="Filter Coffee"
                  className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
