"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function SouthIndianHeroPremium() {
  const containerRef = useRef(null);

  // 1. Capture the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Create a "Spring" version of scroll for buttery smooth movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  // --- TRANSFORMATION TIMELINE ---

  // PHASE 1: Center the table (Scroll 0% -> 25%)
  const tableX = useTransform(smoothProgress, [0, 0.25], ["0%", "-50%"]);
  const tableScale = useTransform(
    smoothProgress,
    [0, 0.25, 0.9],
    [0.8, 1.4, 1.1],
  );
  const tableRotate = useTransform(smoothProgress, [0, 1], [0, 90]);

  // PHASE 2: Sequential Zoom for each dish (Scroll 30% -> 90%)
  // Range: [Start Zooming, Peak Zoom, Return to Normal]
  const dosaScale = useTransform(
    smoothProgress,
    [0.25, 0.35, 0.45],
    [1, 2.6, 1],
  );
  const idliScale = useTransform(smoothProgress, [0.4, 0.5, 0.6], [1, 2.6, 1]);
  const vadaScale = useTransform(
    smoothProgress,
    [0.55, 0.65, 0.75],
    [1, 2.6, 1],
  );
  const pongalScale = useTransform(
    smoothProgress,
    [0.7, 0.8, 0.9],
    [1, 2.6, 1],
  );

  // Content Fading
  const textOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      {/* Sticky Container: Keeps everything in view while you scroll */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Aesthetic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#004f341a,transparent_50%)]" />

        <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center px-8 md:grid-cols-2">
          {/* Left Side: Hero Text */}
          <motion.div style={{ opacity: textOpacity }} className="z-0">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Traditional Taste
            </span>
            <h1 className="font-serif text-6xl leading-[1.1] font-bold text-primary lg:text-8xl">
              South <br />
              <span className="text-primary/80">Heaven.</span>
            </h1>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-primary/70">
              Scroll down to explore our signature dishes in detail. Watch the
              magic happen on your table.
            </p>
          </motion.div>

          {/* Right Side: The Moving Table */}
          <motion.div
            style={{ x: tableX, scale: tableScale, rotate: tableRotate }}
            className="relative flex items-center justify-center"
          >
            {/* The Table Surface */}
            <div className="relative flex h-[480px] w-[480px] items-center justify-center rounded-full bg-[radial-gradient(circle,#8b5a3c_0%,#5a341e_100%)] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] md:h-[600px] md:w-[600px]">
              {/* Table Detailing */}
              <div className="absolute inset-6 rounded-full border border-white/5" />
              <div className="absolute inset-0 rounded-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-7.png')] opacity-20" />

              {/* Central Banana Leaf Glow */}
              <div className="absolute h-[60%] w-[60%] rounded-full bg-[#4a752c] opacity-20 blur-3xl" />

              {/* --- DISH 1: DOSA --- */}
              <motion.div
                style={{ scale: dosaScale }}
                className="absolute left-[12%] top-[18%] z-30 flex flex-col items-center"
              >
                <div className="rounded-full bg-white p-3 shadow-2xl">
                  <Image
                    src="/auth-1.png"
                    alt="Dosa"
                    width={160}
                    height={160}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <motion.span
                  style={{ opacity: useTransform(dosaScale, [1, 2.4], [0, 1]) }}
                  className="mt-2 font-bold text-white drop-shadow-md"
                >
                  Masala Dosa
                </motion.span>
              </motion.div>

              {/* --- DISH 2: IDLI --- */}
              <motion.div
                style={{ scale: idliScale }}
                className="absolute right-[12%] top-[20%] z-30 flex flex-col items-center"
              >
                <div className="rounded-full bg-white p-3 shadow-2xl">
                  <Image
                    src="/auth-2.png"
                    alt="Idli"
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain"
                  />
                </div>
                <motion.span
                  style={{ opacity: useTransform(idliScale, [1, 2.4], [0, 1]) }}
                  className="mt-2 font-bold text-white drop-shadow-md"
                >
                  Soft Idli
                </motion.span>
              </motion.div>

              {/* --- DISH 3: VADA --- */}
              <motion.div
                style={{ scale: vadaScale }}
                className="absolute bottom-[18%] left-[18%] z-30 flex flex-col items-center"
              >
                <div className="rounded-full bg-white p-3 shadow-2xl">
                  <Image
                    src="/auth-3.png"
                    alt="Vada"
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain"
                  />
                </div>
                <motion.span
                  style={{ opacity: useTransform(vadaScale, [1, 2.4], [0, 1]) }}
                  className="mt-2 font-bold text-white drop-shadow-md"
                >
                  Medu Vada
                </motion.span>
              </motion.div>

              {/* --- DISH 4: PONGAL --- */}
              <motion.div
                style={{ scale: pongalScale }}
                className="absolute bottom-[15%] right-[18%] z-30 flex flex-col items-center"
              >
                <div className="rounded-full bg-white p-3 shadow-2xl">
                  <Image
                    src="/auth-4.png"
                    alt="Pongal"
                    width={130}
                    height={130}
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <motion.span
                  style={{
                    opacity: useTransform(pongalScale, [1, 2.4], [0, 1]),
                  }}
                  className="mt-2 font-bold text-white drop-shadow-md"
                >
                  Ven Pongal
                </motion.span>
              </motion.div>

              {/* Small Garnish Bowls */}
              <div className="absolute left-1/2 top-[8%] h-12 w-12 -translate-x-1/2 rounded-full border-2 border-white/20 bg-[#e8a33a]" />
              <div className="absolute right-[6%] top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-2 border-white/20 bg-[#d96b43]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
