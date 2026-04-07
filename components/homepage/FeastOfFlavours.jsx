"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
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

export default function FeastOfFlavours() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenMenu(false);
    };

    if (openMenu) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [openMenu]);

  return (
    <>
      {/* Main CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative overflow-hidden bg-primary px-4 py-16 text-white sm:px-6 md:px-10 lg:px-12"
      >
        <div className="mx-auto flex min-h-[310px] max-w-6xl flex-col items-center justify-center text-center">
          <motion.h2 variants={fadeUp} className="font-serif text-[28px] uppercase tracking-[0.06em] sm:text-[34px] md:text-[40px]">
            A Feast of Flavours
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-3 h-[1px] w-20 bg-white/70" />

          <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-[13px] leading-6 text-white/90 sm:text-[14px] md:text-[15px]">
            From comforting tiffin specials to café-style favorites, our menu is
            crafted to satisfy every craving. We bring together fresh
            ingredients, rich flavors, and thoughtfully prepared dishes in every
            serving. Whether you are in the mood for a quick bite, a hearty
            meal, or a refreshing beverage, there is something for everyone.
            Each item is made to offer the perfect balance of taste, quality,
            and satisfaction. At Tiffen Central, every dish on the menu is
            served with warmth, flavor, and a touch of delight.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenMenu(true)}
            className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-medium tracking-[0.2em] text-primary shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-white/90"
          >
            Menu
          </motion.button>
        </div>

        <div className="absolute bottom-2 left-0 w-full overflow-hidden">
          <motion.div variants={staggerContainer} className="flex items-center justify-center gap-2 px-2 sm:gap-3">
            {[...Array(18)].map((_, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Image
                  unoptimized
                  width={100}
                  height={100}
                  src="/logo-vector.svg"
                  alt="Flower Logo"
                  className="h-10 w-10 object-contain opacity-90 sm:h-11 sm:w-11 md:h-12 md:w-12"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Modal */}
      <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/70 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setOpenMenu(false)}
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
              {/* Close */}
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-xl text-white transition hover:bg-white/10"
                aria-label="Close menu"
              >
                ×
              </button>

              {/* Heading */}
              <div className="mb-8 text-center">
                <h2 className="font-serif text-[22px] font-semibold text-white sm:text-[26px]">
                  Flavours of South India
                </h2>
              </div>

              {/* Editorial menu layout */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr]">
                {/* Column 1 */}
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

                {/* Column 2 */}
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

                {/* Column 3 */}
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
    </>
  );
}
