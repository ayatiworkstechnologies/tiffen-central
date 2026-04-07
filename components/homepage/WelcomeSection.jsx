"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const scaleImage = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="grid w-full overflow-hidden md:grid-cols-2">
        {/* Left Image Panel */}
        <motion.div 
          className="relative flex min-h-[320px] items-center justify-center bg-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Pattern Background */}
          <motion.div variants={scaleImage} className="absolute inset-0 opacity-15">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "url('/logo-vector.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "60px 60px",
              }}
            />
          </motion.div>

          {/* Main Food Image */}
          <motion.div variants={scaleImage} className="relative z-10 flex items-center justify-center px-6 py-8">
            <Image
              unoptimized
              width={800}
              height={800}
              src="/img-1.png"
              alt="Tiffen Central Food"
              className="h-auto w-full max-w-[360px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right Content Panel */}
        <div className="flex items-center bg-[#f8f8f6] px-6 py-10 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-[28px] uppercase tracking-[0.06em] text-primary sm:text-[32px] md:text-[36px]">
              Welcome to Tiffen Central
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-sm leading-6 text-[#6d6d6d] sm:text-[15px]">
              Tiffen Central is a warm and welcoming space where café comfort
              meets restaurant-style dining. We serve freshly prepared tiffin,
              flavorful refreshments, beverages, and tasty bites for every mood.
              Whether you are stopping by for breakfast, coffee, lunch, or
              dinner, every visit feels special. Our inviting ambiance, quality
              ingredients, and satisfying menu make us perfect for friends and
              families alike. At Tiffen Central, great food and good moments
              always come together.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 h-[1px] w-20 bg-[#8bb9a8]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
