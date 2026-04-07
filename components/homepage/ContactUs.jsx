"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f1ea] px-6 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
      {/* Decorative subtle texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="text-center">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[11px] uppercase tracking-[0.28em] text-primary/70 sm:text-sm"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[32px] uppercase tracking-[0.05em] text-primary sm:text-[40px] md:text-[50px]"
          >
            Contact Us
          </motion.h2>
          <motion.div variants={fadeUp} className="mx-auto mt-4 h-[1px] w-16 bg-[#8bb9a8]" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Details */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <h3 className="font-serif text-[24px] tracking-[0.02em] text-primary sm:text-[28px]">
              We would love to hear from you.
            </h3>
            <p className="mt-6 text-[14px] leading-7 text-[#6d6d6d] sm:text-[15px]">
              Whether you have a question about our menu, want to book a private
              event, or simply wish to share your dining experience, our team is
              ready to assist you.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white shadow-sm">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] tracking-wide text-primary">Location</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#6d6d6d]">
                    123 Culinary Avenue, Food District<br />
                    FC 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white shadow-sm">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] tracking-wide text-primary">Reservations</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#6d6d6d]">
                    +1 (555) 123-4567<br />
                    reservations@tiffencentral.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white shadow-sm">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] tracking-wide text-primary">General Enquiries</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#6d6d6d]">
                    hello@tiffencentral.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-4 z-0 rounded-[2rem] bg-white/40 blur-xl sm:-inset-6" />
            <div className="relative z-10 rounded-2xl border border-white/60 bg-white/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-10">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary/80">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="rounded-none border-b border-primary/20 bg-transparent py-2 text-[14px] text-primary transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary/80">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="rounded-none border-b border-primary/20 bg-transparent py-2 text-[14px] text-primary transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="rounded-none border-b border-primary/20 bg-transparent py-2 text-[14px] text-primary transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary/80">
                    Subject
                  </label>
                  <select className="rounded-none border-b border-primary/20 bg-transparent py-2 text-[14px] text-primary transition-colors focus:border-primary focus:outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Private Catering</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary/80">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="resize-none rounded-none border-b border-primary/20 bg-transparent py-2 text-[14px] text-primary transition-colors focus:border-primary focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-primary py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_8px_20px_rgba(3,40,24,0.15)] transition duration-300 hover:scale-[1.02] hover:bg-primary/95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
