"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="relative w-full overflow-hidden bg-primary text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/logo-vector.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Soft glows */}
      <div className="absolute left-[-5%] top-[10%] h-[200px] w-[200px] rounded-full bg-white/5 blur-[100px]" />
      <div className="absolute right-[-5%] top-[60%] h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:px-12 lg:px-16"
      >
        {/* Top Huge Type */}
        <motion.div variants={fadeUp} className="relative z-10 mb-16 flex flex-col items-center border-b border-white/10 pb-16 text-center">
          <Image unoptimized width={100} height={100} src="/logo-vector.svg" alt="Tiffen Central Logo" className="mb-8 h-[80px] w-[80px] opacity-90 sm:h-[100px] sm:w-[100px]" />
          <h2 className="font-serif text-[44px] uppercase leading-none tracking-widest text-white sm:text-[56px] md:text-[68px] lg:text-[88px]">
            TIFFEN CENTRAL
          </h2>
        </motion.div>

        {/* Links & Info Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-8 lg:gap-12">
          
          {/* Column 1: About */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-white">Visit Us</h3>
            <p className="text-[13px] leading-relaxed text-white/70">
              123 Culinary Avenue,<br />
              Food District, FC 90210
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
              hello@tiffencentral.com<br />
              +1 (555) 123-4567
            </p>
          </motion.div>

          {/* Column 2: Hours */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-white">Hours</h3>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>8:00 AM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Fri - Sat</span> <span>8:00 AM - 11:30 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>9:00 AM - 9:00 PM</span></li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-white">Explore</h3>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li><Link href="/" className="transition hover:text-white">Our Menu</Link></li>
              <li><Link href="/" className="transition hover:text-white">Reservations</Link></li>
              <li><Link href="/" className="transition hover:text-white">Private Events</Link></li>
              <li><Link href="/" className="transition hover:text-white">Gift Cards</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h3 className="mb-6 font-serif text-[18px] uppercase tracking-widest text-white">Newsletter</h3>
            <p className="mb-5 text-[13px] leading-relaxed text-white/70">
              Join us to get exclusive news and dining event invites directly to your inbox.
            </p>
            <form className="flex transition-colors focus-within:border-white border-b border-white/30 pb-3">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent text-[11px] uppercase tracking-wider text-white placeholder-white/40 focus:outline-none"
              />
              <button type="button" className="text-[18px] text-white transition hover:-translate-y-1">→</button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeUp} className="relative z-10 mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-10 sm:flex-row">
          <p className="text-[11px] uppercase tracking-wider text-white/50">
            © {new Date().getFullYear()} Tiffen Central. All Rights Reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="/" className="text-[11px] uppercase tracking-wider text-white/50 transition hover:text-white">Instagram</Link>
            <Link href="/" className="text-[11px] uppercase tracking-wider text-white/50 transition hover:text-white">Facebook</Link>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
