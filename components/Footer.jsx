"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#032818] text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 md:px-12 lg:px-16"
      >
        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Column 1: Visit Us + Logo */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <Image
              unoptimized
              width={120}
              height={120}
              src="/logo.png"
              alt="Tiffen Central Logo"
              className="mb-8 h-[82px] w-[82px] opacity-95 transition-transform duration-700 hover:scale-105 sm:h-[95px] sm:w-[95px]"
            />

            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-[#8bb9a8]">
              Visit Us
            </h3>

            <p className="text-[13px] leading-relaxed text-white/70 transition-colors hover:text-white">
              123 Culinary Avenue,
              <br />
              Food District, FC 90210
            </p>

            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
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

          {/* Column 2: Hours */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-[#8bb9a8]">
              Hours
            </h3>
            <ul className="space-y-4 text-[13px] text-white/70">
              <li className="flex justify-between border-b border-white/5 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Mon - Thu</span> <span>8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Fri - Sat</span> <span>8:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 transition-colors hover:border-white/20 hover:text-white">
                <span>Sunday</span> <span>9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-[#8bb9a8]">
              Explore
            </h3>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li>
                <Link
                  href="/"
                  className="inline-flex transform transition-all hover:translate-x-1 hover:text-white"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transform transition-all hover:translate-x-1 hover:text-white"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transform transition-all hover:translate-x-1 hover:text-white"
                >
                  Private Events
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex transform transition-all hover:translate-x-1 hover:text-white"
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
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row md:gap-0"
        >
          <p className="text-center text-[11px] uppercase tracking-wider text-white/40 md:text-left">
            © {new Date().getFullYear()} Tiffen Central. All Rights Reserved.
          </p>

          <div className="flex flex-col items-center justify-center gap-2 text-center text-[11px] uppercase tracking-wider text-white/40 md:flex-row md:text-left">
            <span>Designed & Developed by</span>
            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex items-center justify-center rounded border border-white/10 bg-white/5 px-2 py-1 shadow-sm transition-colors group-hover:bg-white/10">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#8bb9a8]">
                  AYATI
                </span>
                <span className="font-sans text-[10px] font-light tracking-[0.2em] text-white">
                  WORKS
                </span>
              </div>
            </Link>
          </div>

          <div className="flex gap-6">
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-transform hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiInstagram />
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-transform hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiFacebook />
            </Link>
            <Link
              href="/"
              className="text-[16px] text-white/40 transition-transform hover:-translate-y-1 hover:text-[#8bb9a8]"
            >
              <FiTwitter />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
