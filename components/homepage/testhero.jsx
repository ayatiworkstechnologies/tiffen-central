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
    stiffness: 34,
    damping: 22,
    mass: 0.85,
    restDelta: 0.001,
  });

  // ---------------------------
  // intro text
  // ---------------------------
  const introOpacity = useTransform(smooth, [0, 0.1, 0.18], [1, 1, 0]);
  const introScale = useTransform(smooth, [0, 0.18], [1, 0.96]);
  const introY = useTransform(smooth, [0, 0.18], [0, -24]);
  const introBlur = useTransform(smooth, [0.1, 0.18], [0, 8]);

  // ---------------------------
  // tiny dot to rectangle to full screen
  // ---------------------------
  const revealOpacity = useTransform(smooth, [0.04, 0.08], [0, 1]);

  const revealWidth = useTransform(
    smooth,
    [0.06, 0.16, 0.34, 0.56],
    ["14px", "120px", "520px", "100vw"],
  );

  const revealHeight = useTransform(
    smooth,
    [0.06, 0.16, 0.34, 0.56],
    ["14px", "52px", "180px", "100vh"],
  );

  const revealRadius = useTransform(
    smooth,
    [0.06, 0.16, 0.34, 0.56],
    ["999px", "999px", "28px", "0px"],
  );

  // ---------------------------
  // background fade
  // ---------------------------
  const bgOpacity = useTransform(smooth, [0, 0.42], [1, 0]);
  const bgScale = useTransform(smooth, [0, 0.56], [1, 1.02]);

  // ---------------------------
  // video motion
  // ---------------------------
  const videoScale = useTransform(smooth, [0.24, 0.7, 1], [1, 1.03, 1.08]);
  const videoBrightness = useTransform(smooth, [0.22, 0.75, 1], [1, 0.9, 0.82]);
  const videoOverlayOpacity = useTransform(
    smooth,
    [0.3, 0.58, 1],
    [0.08, 0.2, 0.38],
  );

  // ---------------------------
  // final text after full screen
  // ---------------------------
  const finalTextOpacity = useTransform(
    smooth,
    [0.62, 0.76, 0.9],
    [0, 0.72, 1],
  );
  const finalTextY = useTransform(smooth, [0.62, 0.9], [80, 0]);
  const finalTextScale = useTransform(smooth, [0.62, 0.9], [0.97, 1]);

  const subTextOpacity = useTransform(smooth, [0.72, 0.86, 0.96], [0, 0.7, 1]);
  const subTextY = useTransform(smooth, [0.72, 0.96], [34, 0]);

  return (
    <section ref={sectionRef} className="relative h-[420vh] bg-[#b87455]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* background */}
        <motion.div
          style={{ opacity: bgOpacity, scale: bgScale }}
          className="absolute inset-0 bg-[#b87455]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)]" />
        </motion.div>

        {/* intro text */}
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

        {/* single shape expand */}
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

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_55%,rgba(0,0,0,0.28)_100%)]" />
          </motion.div>
        </div>

        {/* final content */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-6">
          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              style={{
                opacity: finalTextOpacity,
                y: finalTextY,
                scale: finalTextScale,
              }}
              className="mb-4 text-[11px] uppercase tracking-[0.42em] text-white/70 sm:text-xs"
            >
              Authentic South Indian Experience
            </motion.p>

            <motion.h2
              style={{
                opacity: finalTextOpacity,
                y: finalTextY,
                scale: finalTextScale,
              }}
              className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[108px]"
            >
              Taste that
              <span className="block text-[#ffd3b8]">stays with you</span>
            </motion.h2>

            <motion.p
              style={{
                opacity: subTextOpacity,
                y: subTextY,
              }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg"
            >
              Freshly prepared tiffin, timeless flavors, and a warm dining
              experience crafted for every food lover.
            </motion.p>

            <motion.div
              style={{
                opacity: subTextOpacity,
                y: subTextY,
              }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#8f5a41] transition duration-300 hover:scale-105">
                Explore Menu
              </button>
              <button className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">
                Book Table
              </button>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
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
