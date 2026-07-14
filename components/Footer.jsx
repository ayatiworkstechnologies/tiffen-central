"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { DATA } from "@/content/data";
import MenuModal from "./homepage/MenuModal";

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
  const site = DATA.site;
  const footer = DATA.footer;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpenMenu(true);
    window.addEventListener("tiffen-open-menu", handleOpen);
    return () => window.removeEventListener("tiffen-open-menu", handleOpen);
  }, []);
  const socials = [
    { label: "Instagram", href: site.socials.instagram, Icon: FiInstagram },
    // { label: "Facebook", href: site.socials.facebook, Icon: FiFacebook },
    // { label: "X", href: site.socials.x, Icon: RiTwitterXLine },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-[0.06] tc-subtle-grid" />

      <div className="absolute left-[-140px] top-[-80px] h-[260px] w-[260px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-white/5 blur-[140px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
        className="relative z-10 tc-container py-12"
      >
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[0.9fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
          <motion.div variants={fadeUp} className="flex flex-col items-start">
            <Link href="/" className="inline-block">
              <Image
                unoptimized
                width={180}
                height={80}
                src={site.images.logo}
                alt={`${site.brand.name} Logo`}
                className="h-auto w-[120px] brightness-0 invert transition-transform duration-700 hover:scale-105 sm:w-[140px]"
              />
            </Link>

            <p className="mt-5 max-w-[260px] text-[12px] leading-6 text-white/60">
              {site.brand.tagline}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-accent">
              Visit Us
            </h3>

            <p className="text-[13px] leading-7 text-white/70 transition-colors hover:text-white">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tiffen+central,+Govindasamy+Nagar,+Perungudi,+Chennai,+Tamil+Nadu+600096"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {site.contact.addressLines.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                {site.contact.cityRegion}
              </a>
            </p>

            <p className="mt-4 text-[13px] leading-7 text-white/70">
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-white hover:underline"
              >
                {site.contact.email}
              </a>
              <br />
              <a
                href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-white hover:underline"
              >
                {site.contact.phone}
              </a>
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-accent">
              Hours
            </h3>

            <ul className="space-y-4 text-[13px] text-white/70">
              {site.hours.map((h) => (
                <li
                  key={h.label}
                  className="flex items-center justify-between border-b border-white/10 pb-2 transition-colors hover:border-white/25 hover:text-white"
                >
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-serif text-[18px] uppercase tracking-[0.18em] text-accent">
              Explore
            </h3>

            <ul className="space-y-3 text-[13px] text-white/70">
              {footer.exploreLinks.map((l) => {
                const isMenuLink = l.title === "Our Menu";
                return (
                  <li key={l.title}>
                    {isMenuLink ? (
                      <button
                        onClick={() => window.dispatchEvent(new Event("tiffen-open-menu"))}
                        className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white cursor-pointer text-left bg-transparent border-0 p-0 text-white/70 font-sans font-medium"
                      >
                        {l.title}
                      </button>
                    ) : (
                      <Link
                        href={l.href}
                        className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-white"
                      >
                        {l.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row"
        >
          <div className="flex gap-5">
            {socials.map(({ label, href, Icon }) => {
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
                  className={`text-[16px] transition-all duration-300 ${isReady
                    ? "text-white/45 hover:-translate-y-1 hover:text-accent"
                    : "text-white/25 cursor-not-allowed"
                    }`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-white/45">
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </p>

          <div className="flex flex-col items-center justify-center gap-2 text-center text-[11px] uppercase tracking-[0.18em] text-white/45 md:flex-row">
            <span>Designed and developed by</span>
            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-85 inline-flex"
            >
              <Image
                src="/ayati-logo-web-no-bg.png"
                alt="Ayati Works"
                width={150}
                height={40}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />
    </footer>
  );
}
