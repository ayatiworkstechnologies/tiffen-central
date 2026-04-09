"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header shrink
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Our Story", href: "#about" },
    { title: "Feast of Flavours", href: "#feast" },
    { title: "South Indian Delights", href: "#delights" },
    { title: "Signature Experience", href: "#signature" },
    { title: "Contact Us", href: "#contact" },
  ];

  /* ── Animation Variants ── */
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const linkVariant = {
    closed: { opacity: 0, x: 40 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.07,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const footerVariant = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* ═══════ HEADER BAR ═══════ */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-primary/5 bg-white/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16 sm:h-[72px]" : "h-20 sm:h-24"
            }`}
          >
            {/* Left — empty spacer to keep the logo centered */}
            <div className="w-10 shrink-0 md:w-16" />

            {/* Centre — Logo */}
            <Link
              href="/"
              className="relative inline-flex items-center justify-center"
            >
              <Image
                unoptimized
                width={800}
                height={800}
                src="/logo.png"
                alt="Tiffen Central"
                className={`h-auto w-auto object-contain transition-all duration-500 ${
                  scrolled
                    ? "max-h-10 sm:max-h-12"
                    : "max-h-14 sm:max-h-[72px]"
                }`}
              />
            </Link>

            {/* Right — Hamburger toggle */}
            <button
              aria-label="Open navigation"
              onClick={() => setIsOpen(true)}
              className="group relative flex h-10 w-10 shrink-0 flex-col items-end justify-center gap-[5px] rounded-full p-1.5 transition-all duration-300 hover:bg-primary/5 md:h-12 md:w-12"
            >
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 7, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                className="block h-[1.5px] w-full origin-center rounded-full bg-primary transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-[70%] origin-center rounded-full bg-primary/80"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -7, width: "100%" }
                    : { rotate: 0, y: 0, width: "50%" }
                }
                className="block h-[1.5px] w-[50%] origin-center rounded-full bg-primary/60 transition-all group-hover:w-full"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ═══════ NAVIGATION OVERLAY ═══════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Scrim */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.nav
              key="drawer"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed bottom-0 right-0 top-0 z-[210] flex w-full max-w-md flex-col overflow-y-auto bg-primary shadow-[-20px_0_60px_rgba(0,0,0,0.25)]"
            >
              {/* ── Drawer header row ── */}
              <div className="flex items-center justify-between px-8 pt-8 sm:px-10 sm:pt-10">
                {/* Small logo mark */}
                <Image
                  unoptimized
                  width={200}
                  height={200}
                  src="/logo.png"
                  alt="Tiffen Central"
                  className="h-8 w-auto object-contain brightness-0 invert sm:h-10"
                />

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-white/5 active:scale-90"
                >
                  <svg
                    className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* ── Navigation links ── */}
              <div className="flex flex-1 flex-col justify-center px-8 sm:px-10">
                <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.45em] text-white/25">
                  Navigation
                </p>

                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.title}
                      custom={i}
                      variants={linkVariant}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/5"
                      >
                        {/* Number accent */}
                        <span className="text-[11px] tabular-nums tracking-wider text-white/20 transition-colors group-hover:text-white/40">
                          0{i + 1}
                        </span>

                        {/* Title */}
                        <span className="font-serif text-xl tracking-wide text-white transition-all group-hover:translate-x-1 sm:text-2xl">
                          {link.title}
                        </span>

                        {/* Arrow */}
                        <svg
                          className="ml-auto h-4 w-4 text-white/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* ── Footer ── */}
              <motion.div
                variants={footerVariant}
                initial="closed"
                animate="open"
                exit="closed"
                className="border-t border-white/8 px-8 py-6 sm:px-10 sm:py-8"
              >
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.45em] text-white/25">
                  Follow Us
                </p>
                <div className="flex gap-5">
                  {["Instagram", "Facebook", "Twitter"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
