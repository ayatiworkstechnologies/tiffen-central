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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

export default function WelcomeSectionPremium() {
  const [openMenu, setOpenMenu] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 20%"],
  });

  // Image entrance from right to center
  const imageXRaw = useTransform(scrollYProgress, [0, 0.38], ["160%", "0%"]);
  const imageRotateRaw = useTransform(scrollYProgress, [0, 0.38], [22, 0]);
  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.38], [0.72, 1]);
  const imageOpacityRaw = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

  // Premium parallax after landing
  const imageYRaw = useTransform(scrollYProgress, [0.35, 1], [0, -40]);

  const imageX = useSpring(imageXRaw, {
    stiffness: 70,
    damping: 22,
    mass: 0.35,
  });
  const imageRotate = useSpring(imageRotateRaw, {
    stiffness: 70,
    damping: 22,
    mass: 0.35,
  });
  const imageScale = useSpring(imageScaleRaw, {
    stiffness: 70,
    damping: 22,
    mass: 0.35,
  });
  const imageY = useSpring(imageYRaw, {
    stiffness: 50,
    damping: 18,
    mass: 0.4,
  });

  // Left background pattern movement
  const patternY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const patternScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Ambient glow movement
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.25, 0.5, 0.3],
  );

  // Right content reveal
  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.12, 0.32], [60, 0]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-white"
      >
        <div className="grid w-full md:grid-cols-[55%_45%]">
          {/* LEFT PANEL */}
          <div className="relative z-10 flex min-h-[500px] items-center justify-center overflow-hidden bg-primary sm:min-h-[560px] md:min-h-[680px] lg:min-h-[760px]">
            {/* Soft Glow */}
            <motion.div
              style={{ y: glowY, opacity: glowOpacity }}
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/10 blur-3xl"
            />

            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.12))]" />

            {/* IMAGE */}
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                rotate: imageRotate,
                scale: imageScale,
                opacity: imageOpacityRaw,
              }}
              className="relative z-20 flex items-center justify-center px-6 py-10 sm:px-10 md:px-12"
            >
              <div className="relative">
                {/* Shadow plate */}
                <div className="absolute left-1/2 top-[82%] h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/30 blur-2xl" />

                <Image
                  unoptimized
                  width={700}
                  height={700}
                  src="/img-1.png"
                  alt="Tiffen Central Dish"
                  className="relative h-auto w-full max-w-[320px] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.45)] sm:max-w-[420px] md:max-w-[470px] lg:max-w-[560px]"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative z-30 flex items-center overflow-hidden bg-background px-8 py-16 sm:px-12 md:px-16 lg:px-20">
            {/* subtle background texture */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-primary)/0.03,transparent_35%,var(--color-primary)/0.04)]" />
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-primary/5 blur-3xl" />

            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="relative z-10 w-full"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.p
                  variants={fadeUp}
                  className="mb-4 text-[12px] font-bold uppercase tracking-[0.35em] text-primary/55"
                >
                  Signature Menu
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-[34px] uppercase leading-[1.05] tracking-[0.06em] text-primary sm:text-[42px] md:text-[46px] lg:text-[52px]"
                >
                  A Feast of
                  <br />
                  Flavours
                </motion.h2>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 h-[2px] w-20 bg-primary/20"
                />

                <motion.p
                  variants={fadeUp}
                  className="mt-8 max-w-lg text-[15px] leading-[1.9] text-gray-600 md:text-[16px]"
                >
                  Indulge in our freshly prepared tiffins and beloved café
                  classics, meticulously crafted to satisfy every craving. We
                  bring together premium ingredients, traditional spices, and
                  authentic South Indian culinary heritage for an unforgettable
                  dining experience.{" "}
                </motion.p>

                <div className="mt-10 flex items-center gap-6">
                  <Button variant="secondary" onClick={() => setOpenMenu(true)}>
                    View Menu
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
