"use client";
import Image from "next/image";

import React from "react";

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

function MenuList({ title, items }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <h3 className="font-serif text-[24px] uppercase leading-[0.95] tracking-[0.03em] text-white">
        {title}
      </h3>
      <div className="mt-4 h-px w-full bg-white/20" />
      <ul className="mt-4 space-y-1 text-[12px] leading-5 text-white/80 sm:text-[13px]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ImageCard({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${className}`}
    >
      <Image unoptimized width={800} height={800} 
        src={src}
        alt={alt}
        className="h-full w-full rounded-[14px] object-cover"
      />
    </div>
  );
}

export default function GlassMenuSection() {
  return (
    <section className="w-full bg-primary px-4 py-10 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-[24px] text-white sm:text-[28px] md:text-[32px]">
            Flavours of South India
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Column 1 */}
          <div className="space-y-5">
            <ImageCard
              src="/images/breakfast-plate.jpg"
              alt="Breakfast Specials"
              className="h-[210px]"
            />

            <MenuList title="Breakfast Specials" items={breakfastItems} />

            <ImageCard
              src="/images/dosa-varieties.jpg"
              alt="Dosa Varieties"
              className="h-[280px]"
            />

            <MenuList title="Dosa Varieties" items={dosaItems} />
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <ImageCard
              src="/images/rice-varieties.jpg"
              alt="Rice Varieties"
              className="h-[150px]"
            />

            <MenuList title="Rice Varieties" items={riceItems} />

            <ImageCard
              src="/images/snacks.jpg"
              alt="Snacks"
              className="h-[180px]"
            />

            <MenuList title="Snacks" items={snacksItems} />

            <ImageCard
              src="/images/sweets.jpg"
              alt="Sweets"
              className="h-[120px]"
            />

            <MenuList
              title="Sweets"
              items={[
                "Kesari",
                "Badam Halwa",
                "Tender Coconut Pudding",
                "Filter Coffee Cake",
              ]}
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-5">
            <ImageCard
              src="/images/hot-beverages.jpg"
              alt="Hot Beverages"
              className="h-[170px]"
            />

            <MenuList title="Hot Beverages" items={beveragesItems} />

            <ImageCard
              src="/images/cold-beverages.jpg"
              alt="Cold Beverages"
              className="h-[150px]"
            />

            <MenuList title="Cold Beverages" items={coldItems} />

            <div className="rounded-[18px] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <h3 className="text-[28px] lowercase tracking-wide text-white">
                amruthacafe
              </h3>
              <p className="mt-2 text-[12px] leading-5 text-white/80">
                South Indian Classics
                <br />
                Made Fresh Daily
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
