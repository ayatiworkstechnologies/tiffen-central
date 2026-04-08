"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function HeroZoomPoster() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.25,
  });

  // Intro text fades out smoothly
  const titleOpacity = useTransform(smoothProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.2], [1, 0.92]);
  const titleY = useTransform(smoothProgress, [0, 0.2], [0, -40]);

  // Poster zoom
  const posterScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [1, 1.4, 3.2, 5],
  );

  const posterOpacity = useTransform(
    smoothProgress,
    [0, 0.65, 0.82, 0.92],
    [0.75, 1, 1, 0],
  );

  // Background subtle motion
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.12]);
  const videoBlur = useTransform(
    smoothProgress,
    [0, 0.5, 0.85],
    ["0px", "4px", "10px"],
  );

  const videoBrightness = useTransform(
    smoothProgress,
    [0, 0.6, 1],
    [1, 0.85, 0.7],
  );

  // Final text reveal
  const finalTextOpacity = useTransform(
    smoothProgress,
    [0.78, 0.88, 1],
    [0, 0.6, 1],
  );

  const finalTextY = useTransform(smoothProgress, [0.78, 1], [80, 0]);

  const finalTextScale = useTransform(smoothProgress, [0.78, 1], [0.96, 1]);

  return (
    <section ref={heroRef} className="relative h-[320vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Background Video */}
        <motion.div
          style={{
            scale: videoScale,
            filter: useTransform(
              [videoBlur, videoBrightness],
              ([blur, brightness]) => `blur(${blur}) brightness(${brightness})`,
            ),
          }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* Layer 2: Zooming Poster */}
        <motion.div
          style={{
            scale: posterScale,
            opacity: posterOpacity,
          }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="relative h-full w-full">
            <Image
              src="/hero.svg"
              alt="Poster Overlay"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Layer 3: First Content */}
        <div className="relative z-30 flex h-full w-full items-center justify-center px-6">
          <motion.div
            style={{
              opacity: titleOpacity,
              scale: titleScale,
              y: titleY,
            }}
            className="text-center"
          >
            <p className="mb-6 text-xs font-primary uppercase tracking-[0.4em] text-blue-400">
              The Future of Motion
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              Tiffen<span className="text-primary/70">Central</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/60">
              A high-fidelity transition from video background to immersive
              poster scales. Purely driven by scroll.
            </p>
          </motion.div>
        </div>

        {/* Layer 4: Final Text Reveal */}
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6">
          <motion.div
            style={{
              opacity: finalTextOpacity,
              y: finalTextY,
              scale: finalTextScale,
            }}
            className="max-w-4xl text-center"
          >
            <p className="mb-4 text-xs font-primary uppercase tracking-[0.45em] text-white/50">
              Scroll Experience
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
              Crafted for a
              <span className="block text-primary/80">
                full immersive reveal
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              As the poster finishes its cinematic zoom, the final content fades
              in smoothly and remains fully visible at the end of the scroll.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
