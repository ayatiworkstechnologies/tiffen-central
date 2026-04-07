"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const breakfastItems = [
  "Idli (2)",
  "Vada",
  "Sambar Combo",
  "Ghee Idli",
  "Pongal",
  "Poori",
];

const dosaItems = [
  "Plain Dosa",
  "Masala Dosa",
  "Ghee Roast Dosa",
  "Onion Dosa",
  "Podi Masala",
  "Rava Roast",
  "Onion Uthappam",
  "Rava Uthappam",
  "Butter Masala",
];

const riceItems = [
  "Sambar Rice",
  "Curd Rice",
  "Puliogare",
  "Lemon Rice",
  "Tomato Rice",
];

const snacksItems = [
  "Bonda",
  "Bajji",
  "Samosa",
  "Cutlet",
  "Popcorn Foods",
  "Cookies",
];

const beveragesItems = [
  "Filter Coffee",
  "Black Coffee",
  "Tea",
  "Boost",
  "Horlicks",
  "Lemon Tea",
  "Badam Milk",
  "Milk",
];

const coldItems = [
  "Fresh Juices",
  "Milkshakes",
  "Lassi",
  "Falooda",
  "Cold Coffee",
  "Oreo Milkshake",
];

const sweetsItems = [
  "Kesari",
  "Badam Halwa",
  "Tender Coconut Pudding",
  "Filter Coffee Cake",
];

function MenuBlock({ title, items, className = "" }) {
  return (
    <div className={`border border-white/20 bg-transparent p-3 ${className}`}>
      <h3 className="font-serif text-[26px] uppercase leading-[0.95] tracking-[0.02em] text-white">
        {title}
      </h3>

      <div className="mt-3 h-px w-full bg-white/25" />

      <ul className="mt-4 space-y-1 text-[11px] leading-[1.45] text-white/80 sm:text-[12px]">
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
      className={`overflow-hidden border border-white/20 bg-transparent p-1.5 ${className}`}
    >
      <Image
        unoptimized
        width={800}
        height={800}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
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
          className="fixed inset-0 z-[999] bg-black/70 px-4 py-6 backdrop-blur-[2px]"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={scaleIn}
              className="relative max-h-[92vh] w-full max-w-[980px] overflow-y-auto bg-primary px-5 py-6 sm:px-7 sm:py-8 md:px-10 md:py-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-xl text-white transition hover:bg-white/10"
                aria-label="Close menu"
              >
                ×
              </button>

              <div className="mb-8 text-center">
                <h2 className="font-serif text-[22px] font-semibold text-white sm:text-[26px]">
                  Flavours of South India
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr]">
                <div className="space-y-4">
                  <MenuImage
                    src="/menu-2.png"
                    alt="Breakfast Specials"
                    className="h-[145px]"
                  />
                  <MenuBlock
                    title="Breakfast Specials"
                    items={breakfastItems}
                  />
                  <MenuImage
                    src="/menu-1.png"
                    alt="Dosa Varieties"
                    className="h-[255px]"
                  />
                  <MenuBlock title="Dosa Varieties" items={dosaItems} />
                </div>

                <div className="space-y-4">
                  <MenuImage
                    src="/menu-7.png"
                    alt="Rice Varieties"
                    className="h-[110px]"
                  />
                  <MenuBlock title="Rice Varieties" items={riceItems} />
                  <MenuImage
                    src="/menu-6.png"
                    alt="Snacks"
                    className="h-[120px]"
                  />
                  <MenuBlock title="Snacks" items={snacksItems} />
                  <MenuImage
                    src="/menu-5.png"
                    alt="Sweets"
                    className="h-[100px]"
                  />
                  <MenuBlock title="Sweets" items={sweetsItems} />
                </div>

                <div className="space-y-4">
                  <MenuImage
                    src="/menu-4.png"
                    alt="Hot Beverages"
                    className="h-[145px]"
                  />
                  <MenuBlock title="Hot Beverages" items={beveragesItems} />
                  <MenuImage
                    src="/menu-3.png"
                    alt="Cold Beverages"
                    className="h-[100px]"
                  />
                  <MenuBlock title="Cold Beverages" items={coldItems} />

                  <div className="border border-white/20 px-4 py-6 text-center">
                    <h3 className="text-[32px] lowercase tracking-wide text-white">
                      amruthacafe
                    </h3>
                    <p className="mt-2 text-[11px] leading-5 text-white/80">
                      South Indian Classics
                      <br />
                      Made Fresh Daily
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
