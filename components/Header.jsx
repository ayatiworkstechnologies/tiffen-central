"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { DATA } from "@/content/data";

export default function Header() {
  const site = DATA.site;
  const header = DATA.header;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const isHomePage = pathname === "/";
  const useTransparentHeader = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "feast",
      "delights",
      "catering",
      "signature",
      "contact",
    ];

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      {
        threshold: [0.12, 0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const navLinks = header.drawerLinks;
  const desktopLinks = header.desktopLinks;

  const socialLinks = [
    { label: "Instagram", href: site.socials.instagram, Icon: FiInstagram },
    { label: "Facebook", href: site.socials.facebook, Icon: FiFacebook },
    { label: "X", href: site.socials.x, Icon: RiTwitterXLine },
  ];

  /* Animation variants */
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
      {/* Header bar */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          useTransparentHeader
            ? "bg-transparent"
            : "border-b border-primary/10 bg-white shadow-[0_2px_28px_rgba(0,0,0,0.07)] backdrop-blur-2xl"
        }`}
      >
        <div className="tc-container">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16 sm:h-[68px]" : "h-20 sm:h-24"
            }`}
          >
            {/* Left — Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {desktopLinks.slice(0, 3).map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setActiveHash(link.href)}
                    className={`rounded-full px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                      useTransparentHeader
                        ? isActive
                          ? "bg-white/16 text-white ring-1 ring-white/20"
                          : "text-white/78 hover:bg-white/12 hover:text-white"
                        : isActive
                          ? "bg-primary/8 text-primary ring-1 ring-primary/10"
                          : "text-primary/72 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            {/* Left spacer on mobile */}
            <div className="w-10 shrink-0 lg:hidden" />

            {/* Centre — Logo */}
            <Link
              href="/"
              className="relative inline-flex items-center justify-center"
            >
              <Image
                unoptimized
                width={800}
                height={800}
                src={site.images.logo}
                alt={site.brand.name}
                className={`h-auto w-auto object-contain transition-all duration-500 ${
                  useTransparentHeader
                    ? "max-h-14 sm:max-h-[72px] brightness-0 invert"
                    : "max-h-10 sm:max-h-12"
                }`}
              />
            </Link>

            {/* Right — Desktop Navigation + Hamburger */}
            <div className="flex items-center gap-1">
              <nav className="hidden lg:flex items-center gap-1">
                {desktopLinks.slice(3).map((link) => {
                  const isActive = activeHash === link.href;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setActiveHash(link.href)}
                      className={`rounded-full px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                        useTransparentHeader
                          ? isActive
                            ? "bg-white/16 text-white ring-1 ring-white/20"
                            : "text-white/78 hover:bg-white/12 hover:text-white"
                          : isActive
                            ? "bg-primary/8 text-primary ring-1 ring-primary/10"
                            : "text-primary/72 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </nav>

              {/* Hamburger toggle */}
              <button
                aria-label="Open navigation"
                onClick={() => setIsOpen(true)}
                className={`group relative flex h-10 w-10 shrink-0 flex-col items-end justify-center gap-[5px] rounded-full p-1.5 transition-all duration-300 md:h-11 md:w-11 lg:hidden ${
                  useTransparentHeader ? "hover:bg-white/10" : "hover:bg-primary/5"
                }`}
              >
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 7, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  className={`block h-[1.5px] w-full origin-center rounded-full transition-all ${
                    useTransparentHeader ? "bg-white" : "bg-primary"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-[1.5px] w-[70%] origin-center rounded-full ${
                    useTransparentHeader ? "bg-white/80" : "bg-primary/80"
                  }`}
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -7, width: "100%" }
                      : { rotate: 0, y: 0, width: "50%" }
                  }
                  className={`block h-[1.5px] w-[50%] origin-center rounded-full transition-all group-hover:w-full ${
                    useTransparentHeader ? "bg-white/60" : "bg-primary/60"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation overlay */}
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
                  src={site.images.logo}
                  alt={site.brand.name}
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
                  {navLinks.map((link, i) => {
                    const isActive = activeHash === link.href;
                    return (
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
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => {
                            setActiveHash(link.href);
                            setIsOpen(false);
                          }}
                          className={`group flex items-center gap-4 rounded-xl px-3 py-3 transition-all duration-300 ${
                            isActive ? "bg-white/8" : "hover:bg-white/5"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-7 w-1.5 rounded-full ${
                              isActive ? "bg-accent/80" : "bg-white/0"
                            }`}
                          />

                          <span className="text-[11px] tabular-nums tracking-wider text-white/20 transition-colors group-hover:text-white/40">
                            0{i + 1}
                          </span>

                          <span className="font-serif text-xl tracking-wide text-white transition-all group-hover:translate-x-1 sm:text-2xl">
                            {link.title}
                          </span>

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
                    );
                  })}
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
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, Icon }) => {
                    const isReady = Boolean(href);
                    return (
                      <a
                        key={label}
                        href={isReady ? href : "#"}
                        target={isReady ? "_blank" : undefined}
                        rel={isReady ? "noopener noreferrer" : undefined}
                        aria-label={label}
                        aria-disabled={isReady ? undefined : true}
                        onClick={(e) => {
                          if (!isReady) e.preventDefault();
                        }}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                          isReady
                            ? "border-white/10 bg-white/5 text-white/70 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:text-white"
                            : "cursor-not-allowed border-white/8 bg-white/[0.03] text-white/25"
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
