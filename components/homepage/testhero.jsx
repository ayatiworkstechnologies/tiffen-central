"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import MenuModal from "./MenuModal";
import { DATA } from "@/content/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: "easeOut" },
});

export default function HeroSection() {
  const site = DATA.site;
  const hero = DATA.sections.hero;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden bg-primary">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={site.images.heroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        </div>

        {/* Brand pattern (subtle) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage: `url(${site.images.logoMark})`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "520px 520px",
          }}
        />

        {/* Watermark */}
        <motion.div
          {...fadeIn(0.2)}
          className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.06, 0.09, 0.06] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              unoptimized
              width={800}
              height={800}
              src={site.images.logoMark}
              alt=""
              aria-hidden="true"
              className="h-auto w-[280px] object-contain opacity-[0.08] brightness-0 invert sm:w-[360px] md:w-[480px] lg:w-[560px]"
            />
          </motion.div>
        </motion.div>

        {/* Decorative glow */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(243,178,26,0.14),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="tc-container text-center">
            <motion.p
              {...fadeUp(0.25)}
              className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.45em] text-white/70 sm:text-[11px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.45)}
              className="font-serif text-[48px] font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-[72px] md:text-[96px] lg:text-[120px]"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              {...fadeUp(0.65)}
              className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base md:text-lg md:leading-8"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.85)}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button variant="secondary" onClick={() => setOpenMenu(true)}>
                Explore Menu
              </Button>
              <Button
                variant="light"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Table
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(1.05)}
              className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            >
              {hero.badges.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 backdrop-blur-md sm:px-6"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/85 sm:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
