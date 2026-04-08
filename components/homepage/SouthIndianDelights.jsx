"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

const flowerRow = [...Array(8)];

export default function SouthIndianDelights() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-10 md:px-8 lg:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          unoptimized
          src="/offer.svg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 z-[5] bg-[#f5f1ea]/80" />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-[6] opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Right Side Off-Screen Rotating SVG */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="pointer-events-none absolute right-[-160px] top-1/2 z-[15] -translate-y-1/2 opacity-40 sm:right-[-130px] md:right-[-170px] lg:right-[-260px]"
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
        className="relative z-20 mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h2 className="font-serif text-[24px] uppercase tracking-[0.06em] text-primary sm:text-[28px] md:text-[32px]">
            Authentic South Indian Delights
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-6 text-[#7a7a7a] sm:text-xs">
            Experience the rich, aromatic tradition of our South Indian favorites.
            Every dish is crafted with love, using heirloom recipes and premium
            ingredients to deliver extraordinary flavor in every single bite.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.div
              variants={zoomIn}
              className="bg-white/70 p-3 backdrop-blur-[2px]"
            >
              <Image
                unoptimized
                width={800}
                height={800}
                src="/auth-1.png"
                alt="Idli Delight"
                className="h-[210px] w-full object-cover"
              />

              <h3 className="mt-4 font-serif text-[20px] uppercase leading-[1.05] text-primary">
                Idli Delight
              </h3>
              <p className="mt-2 text-[12px] leading-5 text-[#6f6f6f]">
                Soft, freshly steamed, wholesome, and perfectly comforting for any time of day.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-[1.1fr_0.9fr] gap-4"
            >
              <div className="bg-white/70 p-3 backdrop-blur-[2px]">
                <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                  Medu Vada
                  <br />
                  Crunch
                </h3>
                <p className="mt-3 text-[12px] leading-5 text-[#6f6f6f]">
                  Crisp, golden on the outside, and incredibly soft inside. A savory delight.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/70 p-2 backdrop-blur-[2px]">
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/auth-6.png"
                    alt="Medu Vada"
                    className="h-[110px] w-full object-cover"
                  />
                </div>
                <div className="bg-white/70 p-2 backdrop-blur-[2px]">
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/auth-7.png"
                    alt="Medu Vada Plate"
                    className="h-[110px] w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.div variants={fadeUp} className="p-3 bg-white/80">
              <div className="p-3">
                <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                  Crispy Masala Dosa
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#6f6f6f]">
                  Golden, wafer-thin crepe filled with our signature aromatic potato masala.
                </p>
              </div>

              <Image
                unoptimized
                width={800}
                height={800}
                src="/auth-2.png"
                alt="Masala Dosa"
                className="h-[280px] w-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/80 p-3">
              <div className="p-3">
                <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                  Fresh Veg Uttapam
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#6f6f6f]">
                  Thick, flavorful, and beautifully studded with fresh vegetables and roasted spices.
                </p>
              </div>

              <Image
                unoptimized
                width={800}
                height={800}
                src="/auth-8.png"
                alt="Veg Uttapam"
                className="h-[220px] w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="grid bg-white/80 grid-cols-1 gap-4">
              <motion.div
                variants={zoomIn}
                className="bg-white/70 p-3 backdrop-blur-[2px]"
              >
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  src="/auth-3.png"
                  alt="Traditional Pongal"
                  className="h-[140px] w-full object-cover"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={zoomIn}
                  className="bg-white/70 p-2 backdrop-blur-[2px]"
                >
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/auth-4.png"
                    alt="Pongal Bowl"
                    className="h-[90px] w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={zoomIn}
                  className="bg-white/70 p-2 backdrop-blur-[2px]"
                >
                  <Image
                    unoptimized
                    width={800}
                    height={800}
                    src="/auth-5.png"
                    alt="Pongal Dish"
                    className="h-[90px] w-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-3">
                <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                  Traditional Pongal
                  <br />
                  Bowl
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#6f6f6f]">
                  Warm, creamy, peppery, comforting, classic, rich.
                </p>
              </div>
            </div>

            <motion.div variants={fadeUp} className="bg-white/80 p-3">
              <div className="p-3">
                <h3 className="font-serif text-[20px] uppercase leading-[1.05] text-primary">
                  Zesty Lemon Rice
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#6f6f6f]">
                  Tangy, vibrant, fragrant, light, homely, refreshing.
                </p>
              </div>

              <Image
                unoptimized
                width={800}
                height={800}
                src="/auth-9.png"
                alt="Lemon Rice"
                className="h-[180px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
