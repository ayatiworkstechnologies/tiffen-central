"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";

export default function LogoStrip() {
  const logos = Array(20).fill("/vector-logo.svg");

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full overflow-hidden bg-white py-3"
    >
      <div className="flex w-max animate-marquee items-center gap-3">
        {[...logos, ...logos].map((logo, index) => (
          <Image unoptimized width={800} height={800} 
            key={index}
            src={logo}
            alt="Flower Logo"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}
