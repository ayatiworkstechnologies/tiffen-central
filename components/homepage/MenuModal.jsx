"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DATA } from "@/content/data";
import styles from "./MenuModal.module.css";

const categoryIcons = {
  dosa: <path d="M4 17.5h16L13.8 6.7a2.1 2.1 0 0 0-3.6 0L4 17.5Zm-1 2h18" />,
  butter: <><path d="m5 12 7-4 7 4-7 4-7-4Z" /><path d="M5 12v5l7 4 7-4v-5M12 16v5" /></>,
  combos: <><path d="M3.5 15.5h17M5 15.5a7 7 0 0 1 14 0" /><path d="M9 8.5V6m3 1.5V5m3 3.5V6" /></>,
  breakfast: <><path d="M3.5 15h17a8.5 8.5 0 0 1-17 0Z" /><path d="M8 10.5c-1-1.2.2-2 .2-3.2m4 3.2c-1-1.2.2-2 .2-3.2m4 3.2c-1-1.2.2-2 .2-3.2" /></>,
  vada: <><circle cx="12" cy="13" r="7" /><circle cx="12" cy="13" r="2.3" /><path d="M9 4.5 10 2m4 2.5L15 2" /></>,
  idly: <><path d="M4 16c0-3 2.1-5 4.5-5s4.5 2 4.5 5H4Z" /><path d="M11 16c0-3 2.1-5 4.5-5s4.5 2 4.5 5h-9ZM7.5 10c.4-2.4 2.2-4 4.5-4s4.1 1.6 4.5 4" /></>,
  sweet: <><path d="M4 12h16a8 8 0 0 1-16 0Z" /><path d="M7 9c1.4-2.2 3-3.2 5-3.2S15.6 6.8 17 9M12 5V2.5" /></>,
  beverages: <><path d="M5 7h12v8a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V7Z" /><path d="M17 9h1.5a3 3 0 0 1 0 6H17M8 4V2m4 2V2" /></>,
};

function CategoryIcon({ code }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {categoryIcons[code]}
    </svg>
  );
}

function Leaf() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16.8 2.8C10.4 3.6 5.1 6.6 4 12.5c-.3 1.7.8 3.1 2.4 3.1 5.9-.1 9-5.6 10.4-12.8Z" />
      <path d="M4.1 17.4c2.1-4.1 5.2-7.2 9.3-9.5" fill="none" />
    </svg>
  );
}

function MenuPanel({ category, compact = false }) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={`${styles.panel} ${compact ? styles.compactPanel : ""}`}
      style={{ "--category": category.themeColor }}
    >
      <svg className={styles.panelBorder} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M3.2 0H96.8C96.8 1.8 98.2 3.2 100 3.2V96.8C98.2 96.8 96.8 98.2 96.8 100H3.2C3.2 98.2 1.8 96.8 0 96.8V3.2C1.8 3.2 3.2 1.8 3.2 0Z" />
      </svg>
      <div className={styles.panelHeading}>
        <span className={styles.iconDisc}><CategoryIcon code={category.iconCode} /></span>
        <h2>{category.title}</h2>
      </div>
      <div className={styles.dots} />

      <ul className={styles.items}>
        {category.items.map((item) => (
          <li key={item}><Leaf /><span>{item}</span></li>
        ))}
      </ul>

      {category.image && (
        <div className={styles.foodImage}>
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(max-width: 720px) 45vw, 300px"
            className={styles.foodPhoto}
          />
        </div>
      )}
    </motion.section>
  );
}

export default function MenuModal({ open, onClose }) {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const categories = DATA.menu.categories;

  const filters = [
    { id: "all", label: "All Items" },
    { id: "dosa", label: "Dosas" },
    { id: "combos", label: "Combos" },
    { id: "idly", label: "Idly" },
    { id: "vada", label: "Vada" },
    { id: "sweet", label: "Sweets & Tea" },
  ];

  const filteredCategories = categories.filter((cat) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "dosa") return cat.iconCode === "dosa" || cat.iconCode === "butter";
    if (activeFilter === "combos") return cat.iconCode === "combos" || cat.iconCode === "breakfast";
    if (activeFilter === "idly") return cat.iconCode === "idly";
    if (activeFilter === "vada") return cat.iconCode === "vada";
    if (activeFilter === "sweet") return cat.iconCode === "sweet" || cat.iconCode === "beverages";
    return true;
  });

  const mainCategories = filteredCategories.slice(0, 6);
  const bottomCategories = filteredCategories.slice(6);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            className={styles.sheet}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Tiffen Central menu"
          >
            <div className={styles.innerBorder} aria-hidden="true" />
            <button className={styles.close} onClick={onClose} aria-label="Close menu">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>

            <header className={styles.header}>
              <div className={`${styles.heroDish} ${styles.heroDishLeft}`}>
                <Image src="/assets/dosa.webp" alt="Crisp dosa with chutneys" fill sizes="240px" className={styles.heroPhoto} priority />
              </div>
              <div className={`${styles.heroDish} ${styles.heroDishRight}`}>
                <Image src="/assets/Idly Set.webp" alt="Traditional South Indian breakfast" fill sizes="240px" className={styles.heroPhoto} priority />
              </div>

              <div className={styles.cloche} aria-hidden="true">
                <span />
                <svg viewBox="0 0 100 45"><path d="M18 35h64M25 31c2-18 48-18 50 0M50 11V5M43 7l-3-5m17 5 3-5" /></svg>
              </div>
              <div className={styles.brandLogo}>
                <Image
                  src={DATA.site.images.logo}
                  alt={DATA.site.brand.name}
                  width={396}
                  height={140}
                  className={styles.brandLogoImage}
                  priority
                />
              </div>
              <div className={styles.ribbon}>Authentic South Indian Food</div>
              <p className={styles.tagline}><span>Fresh</span><i>•</i><span>Hot</span><i>•</i><span>Traditional</span></p>
              <div className={styles.flourish} aria-hidden="true"><span />❦<span /></div>

              <div className={styles.freshBadge} aria-label="Fresh ingredients everyday">
                <span>Fresh</span><strong>Ingredients</strong><small>Everyday</small>
              </div>
            </header>

            {/* Quick Filter Navigation Pills */}
            <nav className={styles.filterBar} aria-label="Menu category filters">
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`${styles.filterPill} ${activeFilter === f.id ? styles.filterPillActive : ""}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </nav>

            <main className={styles.menuGrid}>
              <AnimatePresence mode="popLayout">
                {mainCategories.map((category) => (
                  <MenuPanel key={category.title} category={category} />
                ))}
              </AnimatePresence>
            </main>

            {bottomCategories.length > 0 && (
              <div className={styles.bottomGrid}>
                <AnimatePresence mode="popLayout">
                  {bottomCategories.map((category) => (
                    <MenuPanel key={category.title} category={category} compact />
                  ))}
                </AnimatePresence>
              </div>
            )}

            <footer className={styles.footer}>
              <span className={styles.thanks}>⟶ &nbsp; Thank You! Visit Again &nbsp; ⟵</span>
              <span className={styles.veg}><i><b /></i> Pure Veg</span>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
