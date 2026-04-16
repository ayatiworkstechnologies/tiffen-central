"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiStar, FiClock, FiCheckCircle, FiTruck, FiAward } from "react-icons/fi";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    icon: <FiUsers className="h-7 w-7" />,
    title: "Corporate Events",
    description:
      "Impress your team and clients with our curated South Indian breakfast and lunch spreads, perfect for meetings, conferences, and office celebrations.",
  },
  {
    icon: <FiHeart className="h-7 w-7" />,
    title: "Weddings & Celebrations",
    description:
      "Make your special day truly memorable with our grand catering service featuring traditional banana-leaf setups and an extensive menu of authentic dishes.",
  },
  {
    icon: <FiStar className="h-7 w-7" />,
    title: "Private Parties",
    description:
      "From intimate gatherings to lavish parties, we bring the warmth and flavor of Tiffen Central right to your doorstep with personalized menus.",
  },
];

const features = [
  { icon: <FiCheckCircle />, label: "Fresh Preparation" },
  { icon: <FiAward />, label: "Customizable Menu" },
  { icon: <FiTruck />, label: "On-Time Delivery" },
  { icon: <FiClock />, label: "Professional Service" },
];

export default function CateringSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute left-[-160px] top-[-60px] h-[300px] w-[300px] rounded-full bg-emerald-200/8 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-120px] h-[350px] w-[350px] rounded-full bg-white/5 blur-[140px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
        className="tc-container relative z-10"
      >
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/45 sm:text-[11px]"
          >
            Catering Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[30px] uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-[38px] md:text-[46px] lg:text-[54px]"
          >
            Bringing the Feast
            <span className="block font-normal italic text-white/75">
              to Your Doorstep
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-white/55 sm:text-[15px] md:text-base"
          >
            Whether it&apos;s a corporate event, a grand wedding, or an intimate
            gathering, our catering team delivers the authentic Tiffen Central
            experience anywhere you need it.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        >
          <Image
            unoptimized
            width={1200}
            height={600}
            src="/catering-hero.png"
            alt="Premium South Indian catering by Tiffen Central"
            className="h-[220px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[420px]"
          />
        </motion.div>

        {/* Service Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] sm:p-8"
            >
              {/* Card glow on hover */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/0 blur-2xl transition-all duration-500 group-hover:bg-white/5" />

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="font-serif text-[20px] uppercase tracking-[0.04em] text-white sm:text-[22px]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/55 sm:text-[14px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Strip */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:mt-16 sm:gap-6"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <span className="text-[14px]">{feature.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]">
                {feature.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <Button
            variant="secondary"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enquire Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
