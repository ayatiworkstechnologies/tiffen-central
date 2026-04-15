"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiStar, FiCheckCircle, FiTruck, FiAward } from "react-icons/fi";
import Button from "../ui/Button";
import { DATA } from "@/content/data";
import OfferTexture from "../ui/OfferTexture";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    icon: <FiUsers className="h-7 w-7" />,
    title: "Corporate Events",
    description:
      "Breakfast and lunch spreads for meetings, launches, conferences, and team celebrations.",
  },
  {
    icon: <FiHeart className="h-7 w-7" />,
    title: "Weddings and Celebrations",
    description:
      "Traditional service with an extensive menu for guests who love classic flavors.",
  },
  {
    icon: <FiStar className="h-7 w-7" />,
    title: "Private Parties",
    description:
      "From intimate gatherings to large parties, we bring the Tiffen Central experience to you.",
  },
];

const features = [
  { icon: <FiCheckCircle />, label: "Fresh preparation" },
  { icon: <FiAward />, label: "Custom menu" },
  { icon: <FiTruck />, label: "On-time delivery" },
  { icon: <FiCheckCircle />, label: "Professional service" },
];

export default function CateringSectionNew() {
  const site = DATA.site;
  const catering = DATA.sections.catering;
  return (
    <section className="relative w-full overflow-hidden bg-background px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <OfferTexture className="opacity-[0.10]" />
      <div className="pointer-events-none absolute inset-0 tc-subtle-grid opacity-[0.22]" />

      <div className="pointer-events-none absolute left-[-160px] top-[-90px] h-[340px] w-[340px] rounded-full bg-accent/14 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-[170px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
        className="relative z-10 tc-container"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.42em] text-primary/60 sm:text-[11px]">
              {catering.eyebrow}
            </p>

            <h2 className="font-serif text-[30px] uppercase leading-[1.05] tracking-[0.04em] text-primary sm:text-[38px] md:text-[46px] lg:text-[52px]">
              {catering.titleLine1}
              <span className="block font-normal italic text-primary/75">
                {catering.titleLine2}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[14px] leading-7 text-foreground/70 sm:text-[15px] md:text-base">
              {catering.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {catering.cta?.label || "Enquire Now"}
              </Button>
              {site.contact.phone !== "[Phone to be updated]" ? (
                <a
                  href={`tel:${site.contact.phone}`}
                  className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/65 transition-colors hover:text-primary"
                >
                  {site.contact.phone}
                </a>
              ) : (
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/55">
                  Phone will be added
                </span>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 rounded-full border border-primary/10 bg-surface/70 px-4 py-2 text-primary/80 shadow-[0_14px_34px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                >
                  <span className="text-[14px]">{f.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(circle_at_30%_30%,rgba(243,178,26,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(0,79,52,0.14),transparent_55%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-surface/70 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.40),transparent_40%)]" />
              <div className="relative aspect-[16/10] w-full">
                <Image
                  unoptimized
                  src={site.images.cateringHero}
                  alt="Catering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardIn}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-surface/70 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/14" />
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="font-serif text-[20px] uppercase tracking-[0.04em] text-primary sm:text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-foreground/70 sm:text-[14px]">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
