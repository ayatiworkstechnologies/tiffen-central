"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroZoomPoster() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // 1. Text Animation: Fades out quickly to clear the stage for the zoom
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  // 2. Poster Zoom: Starts at full screen size, zooms in "into" the image
  const posterScale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [1, 1.5, 5], // Intense zoom for that "passing through" effect
  );

  const posterOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.95],
    [0.6, 1, 0],
  );

  // 3. Background Video: Subtle expansion
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"]);

  return (
    <section ref={heroRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Background Video */}
        <motion.div
          style={{ scale: videoScale, filter: `blur(${videoBlur})` }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover brightness-50"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Layer 3: The Full-Screen Zooming Poster */}
        <motion.div
          style={{
            scale: posterScale,
            opacity: posterOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative h-full w-full">
            <Image
              src="/hero.svg"
              alt="Poster Overlay"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Layer 4: Content Container */}
        <div className="relative z-30 flex h-full w-full flex-col items-center justify-center">
          <motion.div
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="text-center"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-blue-400">
              The Future of Motion
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              CINEMATIC<span className="text-white/30">SCROLL</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/60">
              A high-fidelity transition from video background to immersive
              poster scales. Purely driven by scroll.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
