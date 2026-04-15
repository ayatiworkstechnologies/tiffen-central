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

export default function FeastOfFlavours() {
  const site = DATA.site;
  const about = DATA.sections.about;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6 py-20 text-white">
        <OfferTexture tone="dark" />
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -left-28 top-[-40px] h-[520px] w-[520px] rounded-full bg-white/6 blur-[110px]" />
          <div className="absolute -right-24 bottom-[-80px] h-[520px] w-[520px] rounded-full bg-black/25 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.10] tc-subtle-grid" />
        </div>

        <div className="relative z-10 tc-container grid w-full items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <Reveal className="order-2 flex flex-col items-start md:order-1">
            <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.45em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {about.chip}
            </span>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              {about.titleLine1}
              <br />
              <span className="font-normal italic text-white/85">
                {about.titleLine2}
              </span>
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
              {about.body}
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button variant="secondary" onClick={() => setOpenMenu(true)}>
                {about.ctas[0]?.label || "View Menu"}
              </Button>
              <Button
                variant="light"
                onClick={() => {
                  document
                    .getElementById("delights")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {about.ctas[1]?.label || "Explore Delights"}
              </Button>
            </motion.div>
          </Reveal>

          {/* Visual */}
          <Reveal
            className="relative order-1 flex min-h-[400px] items-center justify-center md:order-2"
            delay={0.05}
          >
            <div className="absolute pointer-events-none opacity-10">
              <Image
                src="/bg-vector.svg"
                alt=""
                width={600}
                height={600}
                className="h-[360px] w-[360px] md:h-[520px] md:w-[520px]"
              />
            </div>

            <div className="relative z-20">
              <div className="absolute inset-0 -z-10 translate-y-10 scale-95 rounded-full bg-black/30 blur-[60px]" />
              <Image
                unoptimized
                src={site.images.welcomeDish}
                alt="Signature Dish"
                width={800}
                height={800}
                className="w-full max-w-[320px] object-contain drop-shadow-2xl md:max-w-[480px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
