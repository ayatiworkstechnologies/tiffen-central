"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuModal from "./MenuModal";
import Button from "../ui/Button";
import { DATA } from "@/content/data";
import Reveal from "../ui/Reveal";
import OfferTexture from "../ui/OfferTexture";

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
  const site = DATA.site;
  const feast = DATA.sections.feast;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-background">
        <OfferTexture />
        <div className="grid w-full md:grid-cols-[55%_45%]">
          {/* Left panel */}
          <div className="relative z-10 flex min-h-[500px] items-center justify-center overflow-hidden bg-primary sm:min-h-[560px] md:min-h-[680px] lg:min-h-[760px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.14))]" />

            <Reveal className="relative z-20 flex items-center justify-center px-6 py-10 sm:px-10 md:px-12">
              <div className="relative">
                <div className="absolute left-1/2 top-[82%] h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/30 blur-2xl" />

                <Image
                  unoptimized
                  width={700}
                  height={700}
                  src={site.images.welcomeDish}
                  alt="Tiffen Central Dish"
                  className="relative h-auto w-full max-w-[320px] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.45)] sm:max-w-[420px] md:max-w-[470px] lg:max-w-[560px]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right panel */}
          <div className="relative z-30 flex items-center overflow-hidden bg-background px-8 py-16 sm:px-12 md:px-16 lg:px-20">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-primary)/0.04,transparent_35%,var(--color-accent)/0.08)]" />
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-primary/5 blur-3xl" />

            <Reveal className="relative z-10 w-full" delay={0.05}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.p
                  variants={fadeUp}
                  className="mb-4 text-[12px] font-bold uppercase tracking-[0.35em] text-primary/60"
                >
                  {feast.eyebrow}
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-[34px] uppercase leading-[1.05] tracking-[0.06em] text-primary sm:text-[42px] md:text-[46px] lg:text-[52px]"
                >
                  {feast.titleLine1}
                  <br />
                  {feast.titleLine2}
                </motion.h2>

                <motion.div variants={fadeUp} className="mt-7 h-[2px] w-20 bg-accent/40" />

                <motion.p
                  variants={fadeUp}
                  className="mt-8 max-w-lg text-[15px] leading-[1.9] text-foreground/70 md:text-[16px]"
                >
                  {feast.body}
                </motion.p>

                <div className="mt-10 flex items-center gap-6">
                  <Button variant="primary" onClick={() => setOpenMenu(true)}>
                    {feast.cta?.label || "View Menu"}
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
