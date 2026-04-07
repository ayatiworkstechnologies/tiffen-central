"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export default function WelcomeSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 45%"],
  });

  // Main food image animation: comes from right to left and settles
  //   const imageX = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  //   const imageRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  // Pattern slight motion
  const patternY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Content subtle reveal
  const contentY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="grid w-full overflow-hidden md:grid-cols-[58%_42%]">
        {/* Left Image Panel */}
        <div className="relative flex min-h-[380px] items-center justify-center bg-primary sm:min-h-[460px] md:min-h-[560px] lg:min-h-[640px]">
          {/* Pattern Background */}
          <motion.div
            style={{ y: patternY }}
            className="absolute inset-0 opacity-[0.05]"
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "url('/logo-vector.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "72px 72px",
              }}
            />
          </motion.div>

          {/* Premium light overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/10" />
          <div className="absolute left-[-10%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute right-[-5%] top-[25%] h-[180px] w-[180px] rounded-full bg-white/8 blur-[90px]" />

          {/* Main Food Image */}
          <motion.div
            style={{
              x: imageX,
              y: imageY,
              scale: imageScale,
              rotate: imageRotate,
              opacity: imageOpacity,
            }}
            className="relative z-10 flex items-center justify-center px-6 py-10 sm:px-8 md:px-10"
          >
            <Image
              unoptimized
              width={1000}
              height={1000}
              src="/img-1.png"
              alt="Tiffen Central Food"
              className="h-auto w-full max-w-[420px] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.32)] sm:max-w-[470px] md:max-w-[520px] lg:max-w-[580px]"
            />
          </motion.div>
        </div>

        {/* Right Content Panel */}
        <div className="flex items-center bg-[#f8f8f6] px-6 py-12 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-[11px] uppercase tracking-[0.28em] text-primary/70 sm:text-sm"
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[28px] uppercase tracking-[0.06em] text-primary sm:text-[32px] md:text-[36px] lg:text-[40px]"
            >
              Welcome to Tiffen Central
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm leading-7 text-[#6d6d6d] sm:text-[15px] md:text-[15.5px]"
            >
              Tiffen Central is a warm and welcoming space where café comfort
              meets restaurant-style dining. We serve freshly prepared tiffin,
              flavorful refreshments, beverages, and tasty bites for every mood.
              Whether you are stopping by for breakfast, coffee, lunch, or
              dinner, every visit feels special. Our inviting ambiance, quality
              ingredients, and satisfying menu make us perfect for friends and
              families alike. At Tiffen Central, great food and good moments
              always come together.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 h-[1px] w-20 bg-[#8bb9a8]"
            />

            <motion.div variants={fadeUp} className="mt-8">
              <button className="rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-105 hover:bg-primary/90">
                Explore More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
