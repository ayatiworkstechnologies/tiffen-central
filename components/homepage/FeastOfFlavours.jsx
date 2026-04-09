"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MenuModal from "./MenuModal";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
export default function FeastOfFlavours() {
  const [openMenu, setOpenMenu] = useState(false);
  const sectionRef = useRef(null);

  // Offset changed to "start end" to ensure animation triggers as soon as
  // the section enters the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // CONTENT ANIMATIONS
  const contentY = useTransform(smoothProgress, [0, 0.4], [100, 0]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  // FOOD IMAGE ANIMATIONS
  // Reduced the X translation to avoid the image disappearing off-screen on smaller widths
  const foodX = useTransform(smoothProgress, [0, 0.5], [-100, 0]);
  const foodY = useTransform(smoothProgress, [0, 0.5], [50, 0]);
  const foodRotate = useTransform(smoothProgress, [0, 0.5], [-20, 0]);
  const foodScale = useTransform(smoothProgress, [0, 0.5], [0.8, 1]);

  // BACKGROUND ELEMENTS
  const svgRotate = useTransform(smoothProgress, [0, 1], [0, 90]);
  const svgScale = useTransform(smoothProgress, [0, 0.5], [0.7, 1.1]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6 py-20 text-white"
      >
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute -right-10 bottom-0 h-[400px] w-[400px] rounded-full bg-black/20 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
          {/* TEXT CONTENT */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="flex flex-col items-start order-2 md:order-1"
          >
            <motion.span className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">
              Our Legacy
            </motion.span>

            <h2 className="font-serif text-5xl leading-[1.1] sm:text-5xl">
              Welcome to <br />
              <span className="italic font-normal text-white/80">
                Tiffen Central
              </span>
            </h2>

            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/60">
              Tiffen Central is a warm, vibrant space where café comfort
              seamlessly meets premium restaurant-style dining. We specialize in
              freshly prepared, authentic South Indian tiffins—from crispy,
              golden dosas and fluffy idlis to aromatic filter coffee and
              flavorful daily specials. Every dish is crafted from rich heritage
              recipes to satisfy your cravings.{" "}
            </p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-4"
            >
              <Button variant="secondary" onClick={() => setOpenMenu(true)}>
                Explore Our Authentic Menu
              </Button>
            </motion.div>
          </motion.div>

          {/* VISUALS */}
          <div className="relative flex items-center justify-center order-1 md:order-2 min-h-[400px]">
            {/* Spinning SVG */}
            <motion.div
              style={{ rotate: svgRotate, scale: svgScale }}
              className="absolute pointer-events-none opacity-10"
            >
              <Image
                src="/bg-vector.svg"
                alt=""
                width={600}
                height={600}
                className="w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
              />
            </motion.div>

            {/* Food Image */}
            <motion.div
              style={{
                x: foodX,
                y: foodY,
                rotate: foodRotate,
                scale: foodScale,
              }}
              className="relative z-20"
            >
              <div className="absolute inset-0 -z-10 bg-black/30 blur-[60px] rounded-full scale-90 translate-y-10" />
              <Image
                unoptimized
                src="/img-1.png"
                alt="Signature Dish"
                width={800}
                height={800}
                className="w-full max-w-[300px] md:max-w-[450px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
