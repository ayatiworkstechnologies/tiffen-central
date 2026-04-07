"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-white shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-center">
          <Link href="/" className="inline-flex items-center justify-center">
            <Image unoptimized width={800} height={800} 
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
