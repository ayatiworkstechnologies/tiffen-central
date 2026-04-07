"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuModal from "./MenuModal";

export default function FeastOfFlavours() {
  const [openMenu, setOpenMenu] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 40%"],
  });

  // Left content animation
  const contentY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  // Right food image animation (comes in from left and settles)
  const foodX = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const foodY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const foodRotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const foodScale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const foodOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  // Decorative SVG animation behind image
  const svgY = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const svgX = useTransform(scrollYProgress, [0, 1], [130, 0]);
  const svgRotate = useTransform(scrollYProgress, [0, 1], [-140, 0]);
  const svgScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const svgOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 0.28]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-primary px-4 py-16 text-white sm:px-6 md:px-10 lg:px-12"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/logo-vector.svg')",
              backgroundRepeat: "repeat",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        {/* Soft glow */}
        <div className="absolute left-[-8%] top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute right-[-6%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* Left Side Content */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="max-w-2xl text-left"
          >
            <motion.p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/70 sm:text-sm">
              Signature Menu
            </motion.p>

            <motion.h2 className="font-serif text-[30px] uppercase tracking-[0.05em] sm:text-[38px] md:text-[46px] lg:text-[56px]">
              A Feast of
              <span className="block">Flavours</span>
            </motion.h2>

            <div className="mt-4 h-[1px] w-24 bg-white/70" />

            <motion.p className="mt-8 max-w-xl text-[13px] leading-7 text-white/90 sm:text-[14px] md:text-[15px]">
              From comforting tiffin specials to café-style favorites, our menu
              is crafted to satisfy every craving. We bring together fresh
              ingredients, rich flavors, and thoughtfully prepared dishes in
              every serving. Whether you are in the mood for a quick bite, a
              hearty meal, or a refreshing beverage, there is something for
              everyone.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpenMenu(true)}
                className="rounded-full bg-white px-8 py-3 text-sm font-medium tracking-[0.2em] text-primary shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-105"
              >
                Menu
              </button>

              <button className="rounded-full border border-white/25 bg-white/10 px-8 py-3 text-sm font-medium tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:bg-white/20">
                Explore
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side Visual Area */}
          <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[360px] md:min-h-[460px]">
            {/* Decorative rings */}
            <div className="absolute h-[240px] w-[240px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] md:h-[390px] md:w-[390px]" />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5 sm:h-[380px] sm:w-[380px] md:h-[470px] md:w-[470px]" />

            {/* Rotating bg svg */}
            <motion.div
              style={{
                y: svgY,
                x: svgX,
                rotate: svgRotate,
                scale: svgScale,
                opacity: svgOpacity,
              }}
              className="absolute z-10"
            >
              <Image
                unoptimized
                src="/bg-vector.svg"
                alt="Decorative Vector"
                width={520}
                height={520}
                className="h-[190px] w-[190px] object-contain sm:h-[250px] sm:w-[250px] md:h-[340px] md:w-[340px] lg:h-[430px] lg:w-[430px]"
              />
            </motion.div>

            {/* Main image coming from previous section feel */}
            <motion.div
              style={{
                x: foodX,
                y: foodY,
                rotate: foodRotate,
                scale: foodScale,
                opacity: foodOpacity,
              }}
              className="relative z-20 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-white/10 blur-[70px]" />

              <Image
                unoptimized
                src="/img-1.png"
                alt="Tiffen Central Food"
                width={900}
                height={900}
                className="relative z-20 h-auto w-full max-w-[260px] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.35)] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
              />
            </motion.div>

            {/* Small center logo */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-8 z-30"
            >
              <Image
                unoptimized
                src="/logo-vector.svg"
                alt="Inner Decorative Logo"
                width={160}
                height={160}
                className="h-[58px] w-[58px] object-contain opacity-90 sm:h-[72px] sm:w-[72px] md:h-[88px] md:w-[88px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
