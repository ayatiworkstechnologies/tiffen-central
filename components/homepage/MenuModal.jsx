"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/content/data";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const columnGroups = [
  DATA.menu.categories.slice(0, 2),
  DATA.menu.categories.slice(2, 5),
  DATA.menu.categories.slice(5),
];

function MenuBlock({ title, items, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm ${className}`}
    >
      <h3 className="relative z-10 font-serif text-[24px] uppercase leading-[0.95] tracking-[0.02em] text-white">
        {title}
      </h3>

      <div className="relative z-10 mt-3 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <ul className="relative z-10 mt-4 space-y-1.5 text-[12px] leading-[1.45] text-white/80 sm:text-[13px]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MenuImage({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-sm backdrop-blur-sm ${className}`}
    >
      <Image
        unoptimized
        width={800}
        height={800}
        src={src}
        alt={alt}
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
  );
}

export default function MenuModal({ open, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/40 px-4 py-6 backdrop-blur-md"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={scaleIn}
              className="relative max-h-[92vh] w-full max-w-[980px] overflow-y-auto rounded-3xl border border-white/10 bg-[#032818]/70 px-5 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:px-7 sm:py-8 md:px-10 md:py-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)]" />

              <button
                onClick={onClose}
                className="group absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-500 hover:rotate-90 hover:border-white/30 hover:bg-white/10 active:scale-90 sm:right-8 sm:top-8"
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
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

              <div className="mb-8 text-center">
                <h2 className="font-serif text-[22px] font-semibold text-white sm:text-[26px]">
                  {DATA.menu.modalTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr]">
                {columnGroups.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="flex h-full flex-col justify-between gap-4"
                  >
                    {group.map((category) => (
                      <div key={category.title} className="flex flex-col gap-4">
                        <MenuImage
                          src={category.image}
                          alt={category.imageAlt}
                          className={category.imageClassName || ""}
                        />
                        <MenuBlock title={category.title} items={category.items} />
                      </div>
                    ))}

                    {groupIndex === 2 && (
                      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-10 text-center shadow-sm backdrop-blur-sm">
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
                        <Image
                          unoptimized
                          width={400}
                          height={400}
                          src={DATA.site.images.logo}
                          alt={`${DATA.site.brand.name} Logo`}
                          className="relative z-10 h-auto w-full max-w-[180px] object-contain opacity-100 brightness-0 invert filter"
                        />
                        <p className="relative z-10 mt-5 text-[12px] uppercase leading-snug tracking-widest text-white/80">
                          South Indian Classics
                          <br />
                          Made Fresh Daily
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
