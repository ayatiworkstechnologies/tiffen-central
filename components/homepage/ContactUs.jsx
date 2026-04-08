"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const inputClasses =
  "w-full rounded-2xl border border-[#032818]/[0.12] bg-white/50 px-4 py-[14px] text-[14px] leading-[1.5] text-[#0f3d33] transition-all duration-300 placeholder:text-[#8a877f] focus:border-[#032818]/[0.28] focus:bg-white/90 focus:outline-none focus:ring-4 focus:ring-[#8bb9a8]/[0.12]";

export default function ContactUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f1ea] px-6 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Soft ambient glow */}
      <div className="absolute left-[-100px] top-[10%] h-[220px] w-[220px] rounded-full bg-white/60 blur-[110px]" />
      <div className="absolute bottom-[-40px] right-[-80px] h-[260px] w-[260px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Decorative layer */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_35%,rgba(0,0,0,0.02))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Heading */}
        <div className="text-center">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[11px] uppercase tracking-[0.32em] text-primary/65 sm:text-sm"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[32px] uppercase tracking-[0.05em] text-primary sm:text-[40px] md:text-[50px]"
          >
            Contact Us
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 h-[1px] w-16 bg-[#8bb9a8]"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left panel */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[28px] border border-[#e3ddd2] bg-white/55 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.035)] backdrop-blur-sm sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_40%)]" />

            <div className="relative z-10">
              <h3 className="font-serif text-[24px] tracking-[0.02em] text-primary sm:text-[30px]">
                We would love to hear from you.
              </h3>

              <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#6d6d6d] sm:text-[15px]">
                Whether you have a question about our menu, want to book a
                private event, or simply wish to share your dining experience,
                our team is ready to assist you.
              </p>

              <div className="mt-12 space-y-6">
                <ContactItem
                  icon={<FiMapPin />}
                  title="Location"
                  content={
                    <>
                      123 Culinary Avenue, Food District
                      <br />
                      FC 90210
                    </>
                  }
                />

                <ContactItem
                  icon={<FiPhone />}
                  title="Reservations"
                  content={
                    <>
                      +1 (555) 123-4567
                      <br />
                      reservations@tiffencentral.com
                    </>
                  }
                />

                <ContactItem
                  icon={<FiMail />}
                  title="General Enquiries"
                  content={<>hello@tiffencentral.com</>}
                />
              </div>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-4 z-0 rounded-[2rem] bg-white/35 blur-2xl sm:-inset-6" />

            <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_50px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent_28%)]" />

              <form className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="First Name">
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Enter first name"
                    />
                  </Field>

                  <Field label="Last Name">
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Enter last name"
                    />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input
                    type="email"
                    className={inputClasses}
                    placeholder="Enter email address"
                  />
                </Field>

                <Field label="Subject">
                  <select
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%230f3d33%22%3E%3Cpath%20d%3D%22M5.22%208.22a.75.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75.75%200%201%201%201.06%201.06l-4.25%204.25a.75.75%200%200%201-1.06%200L5.22%209.28a.75.75%200%200%201%200-1.06Z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_16px_center] bg-no-repeat`}
                  >
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Private Catering</option>
                    <option>Feedback</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    rows={5}
                    className={`${inputClasses} min-h-[120px] resize-none`}
                    placeholder="Write your message..."
                  />
                </Field>

                <button
                  type="button"
                  className="group mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-[16px] bg-primary px-8 py-[18px] text-[12px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_12px_28px_rgba(3,40,24,0.16)] transition-all duration-500 hover:-translate-y-[2px] hover:bg-[#05281c] hover:shadow-[0_16px_34px_rgba(3,40,24,0.22)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message{" "}
                    <FiSend className="text-[15px] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="group flex items-start gap-5 rounded-[24px] border border-[#e3ddd2]/60 bg-white/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#8bb9a8]/50 hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(3,40,24,0.06)] sm:p-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] border border-primary/10 bg-[#f5f1ea] text-[22px] text-primary shadow-[0_8px_16px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      <div className="pt-2">
        <h4 className="font-serif text-[17px] tracking-[0.03em] text-primary">
          {title}
        </h4>
        <p className="mt-2 text-[13px] leading-relaxed text-[#6d6d6d] sm:text-[14px]">
          {content}
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary/80">
        {label}
      </label>
      {children}
    </div>
  );
}
