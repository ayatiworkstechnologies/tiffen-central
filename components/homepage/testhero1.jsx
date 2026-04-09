"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 24,
    mass: 0.9,
    restDelta: 0.001,
  });

  // ---------------------------
  // Intro title
  // ---------------------------
  const introOpacity = useTransform(smooth, [0, 0.08, 0.16], [1, 1, 0]);
  const introScale = useTransform(smooth, [0, 0.16], [1, 0.96]);
  const introY = useTransform(smooth, [0, 0.16], [0, -20]);
  const introBlur = useTransform(smooth, [0.08, 0.16], [0, 8]);

  // ---------------------------
  // Dot -> Rectangle -> Fullscreen
  // ---------------------------
  const revealOpacity = useTransform(smooth, [0.03, 0.06], [0, 1]);

  const revealWidth = useTransform(
    smooth,
    [0.05, 0.14, 0.3, 0.5],
    ["12px", "130px", "560px", "100vw"],
  );

  const revealHeight = useTransform(
    smooth,
    [0.05, 0.14, 0.3, 0.5],
    ["12px", "58px", "220px", "100vh"],
  );

  const revealRadius = useTransform(
    smooth,
    [0.05, 0.14, 0.3, 0.5],
    ["999px", "999px", "26px", "0px"],
  );

  // ---------------------------
  // Background fade
  // ---------------------------
  const bgOpacity = useTransform(smooth, [0, 0.38], [1, 0]);
  const bgScale = useTransform(smooth, [0, 0.5], [1, 1.03]);

  // ---------------------------
  // Video motion
  // ---------------------------
  const videoScale = useTransform(smooth, [0.18, 0.7, 1], [1, 1.04, 1.1]);
  const videoBrightness = useTransform(smooth, [0.2, 0.8, 1], [1, 0.92, 0.82]);
  const videoOverlayOpacity = useTransform(
    smooth,
    [0.28, 0.55, 1],
    [0.06, 0.2, 0.42],
  );

  // ---------------------------
  // Hero main content
  // ---------------------------
  const badgeOpacity = useTransform(smooth, [0.56, 0.64, 0.72], [0, 0.7, 1]);
  const badgeY = useTransform(smooth, [0.56, 0.72], [40, 0]);

  const titleOpacity = useTransform(smooth, [0.6, 0.72, 0.82], [0, 0.75, 1]);
  const titleY = useTransform(smooth, [0.6, 0.82], [80, 0]);
  const titleScale = useTransform(smooth, [0.6, 0.82], [0.97, 1]);

  const descOpacity = useTransform(smooth, [0.68, 0.8, 0.9], [0, 0.7, 1]);
  const descY = useTransform(smooth, [0.68, 0.9], [40, 0]);

  const ctaOpacity = useTransform(smooth, [0.74, 0.84, 0.94], [0, 0.7, 1]);
  const ctaY = useTransform(smooth, [0.74, 0.94], [28, 0]);

  // ---------------------------
  // Data cards
  // ---------------------------
  const cardsOpacity = useTransform(smooth, [0.8, 0.9, 1], [0, 0.75, 1]);
  const cardsY = useTransform(smooth, [0.8, 1], [50, 0]);

  return (
    <section ref={sectionRef} className="relative h-[520vh] bg-[#b87455]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Warm background */}
        <motion.div
          style={{ opacity: bgOpacity, scale: bgScale }}
          className="absolute inset-0 bg-[#b87455]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)]" />
        </motion.div>

        {/* Intro title */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <motion.div
            style={{
              opacity: introOpacity,
              scale: introScale,
              y: introY,
              filter: useTransform(introBlur, (v) => `blur(${v}px)`),
            }}
            className="text-center"
          >
            <h1 className="text-[40px] font-medium tracking-[-0.05em] text-white sm:text-[62px] md:text-[90px] lg:text-[118px]">
              Tiffen Center
            </h1>
          </motion.div>
        </div>

        {/* Dot to full screen reveal */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <motion.div
            style={{
              width: revealWidth,
              height: revealHeight,
              borderRadius: revealRadius,
              opacity: revealOpacity,
            }}
            className="relative overflow-hidden bg-black shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
          >
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              style={{
                scale: videoScale,
                filter: useTransform(
                  videoBrightness,
                  (v) => `brightness(${v})`,
                ),
              }}
              className="h-full w-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </motion.video>

            <motion.div
              style={{ opacity: videoOverlayOpacity }}
              className="absolute inset-0 bg-black"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.34)_100%)]" />
          </motion.div>
        </div>

        {/* Main hero content */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-6">
          <div className="mx-auto max-w-7xl text-center">
            <motion.p
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="mb-4 text-[11px] uppercase tracking-[0.42em] text-white/70 sm:text-xs"
            >
              Traditional Taste · Modern Experience
            </motion.p>

            <motion.h2
              style={{
                opacity: titleOpacity,
                y: titleY,
                scale: titleScale,
              }}
              className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[104px]"
            >
              Freshly made
              <span className="block text-[#ffd3b8]">every single day</span>
            </motion.h2>

            <motion.p
              style={{ opacity: descOpacity, y: descY }}
              className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80 sm:text-base md:text-lg"
            >
              From crisp dosas and soft idlis to hearty meals and filter coffee,
              Tiffen Center brings together comfort, quality, and authentic
              South Indian flavor in one warm dining experience.
            </motion.p>

            <motion.div
              style={{ opacity: ctaOpacity, y: ctaY }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#8f5a41] transition duration-300 hover:scale-105">
                Explore Menu
              </button>
              <button className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">
                Book Table
              </button>
            </motion.div>

            {/* Data cards */}
            <motion.div
              style={{ opacity: cardsOpacity, y: cardsY }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">25+</p>
                <p className="mt-2 text-sm text-white/70">
                  Signature Tiffin Varieties
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="mt-2 text-sm text-white/70">
                  Freshly Prepared Daily
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">Warm</p>
                <p className="mt-2 text-sm text-white/70">
                  Family-Friendly Ambience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">Fast</p>
                <p className="mt-2 text-sm text-white/70">
                  Quick Service, Real Flavor
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
              Scroll
            </span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
