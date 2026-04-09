"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#032818] text-white">
      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* soft glow */}
      <div className="absolute left-[-120px] top-[-60px] h-[220px] w-[220px] rounded-full bg-[#8bb9a8]/10 blur-[110px]" />
      <div className="absolute bottom-[-100px] right-[-80px] h-[260px] w-[260px] rounded-full bg-white/5 blur-[120px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 md:px-12 lg:px-16"
      >
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[0.9fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
          {/* Logo */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start justify-start"
          >
            <Link href="/" className="inline-block">
              <Image
                unoptimized
                width={180}
                height={80}
                src="/logo.png"
                alt="Tiffen Central Logo"
                className="h-auto w-[120px] brightness-0 invert transition-transform duration-700 hover:scale-105 sm:w-[140px]"
              />
            </Link>

            <p className="mt-5 max-w-[220px] text-[12px] leading-6 text-white/55">
              A warm dining destination serving comforting tiffin favourites and
              café-style delights with timeless flavour.
            </p>
          </motion.div>

          {/* Visit Us */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-[#8bb9a8]">
              Visit Us
            </h3>

            <p className="text-[13px] leading-7 text-white/70 transition-colors hover:text-white">
              123 Culinary Avenue,
              <br />
              Food District, FC 90210
            </p>

            <p className="mt-4 text-[13px] leading-7 text-white/70">
              <a
                href="mailto:hello@tiffencentral.com"
                className="transition-colors hover:text-white"
              >
                hello@tiffencentral.com
              </a>
              <br />
              <a
                href="tel:+15551234567"
                className="transition-colors hover:text-white"
              >
                +1 (555) 123-4567
              </a>
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-[#8bb9a8]">
              Hours
            </h3>

            <ul className="space-y-4 text-[13px] text-white/70">
              <li className="flex items-center justify-between border-b border-white/8 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Mon - Thu</span>
                <span>8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/8 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Fri - Sat</span>
                <span>8:00 AM - 11:30 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/8 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Sunday</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Explore */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-[#8bb9a8]">
              Explore
            </h3>

            <ul className="space-y-3 text-[13px] text-white/70">
              <li>
                <Link
                  href="/"
                  className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Private Events
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row"
        >
          <div className="flex gap-5">
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiInstagram />
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiFacebook />
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiTwitter />
            </Link>
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-white/40">
            © {new Date().getFullYear()} Tiffen Central. All Rights Reserved.
          </p>

          <div className="flex flex-col items-center justify-center gap-2 text-center text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex-row">
            <span>Designed & Developed by</span>
            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex items-center justify-center rounded border border-white/10 bg-white/5 px-2 py-1 transition-colors group-hover:bg-white/10">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8bb9a8]">
                  AYATI
                </span>
                <span className="font-sans text-[10px] font-light tracking-[0.2em] text-white">
                  WORKS
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
