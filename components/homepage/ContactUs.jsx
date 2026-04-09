"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const inputClasses =
  "w-full rounded-[18px] border border-[#032818]/[0.12] bg-white/60 px-4 py-3 text-[14px] leading-[1.5] text-[#0f3d33] transition-all duration-300 placeholder:text-[#8a877f] focus:border-[#032818]/[0.24] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8bb9a8]/[0.10]";

export default function ContactUs() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-5 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
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
            className="mb-2 text-[11px] uppercase tracking-[0.28em] text-primary/65 sm:text-xs"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[28px] uppercase tracking-[0.04em] text-primary sm:text-[34px] md:text-[42px]"
          >
            Contact Us
          </motion.h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:mt-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8">
          {/* Left panel */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[24px] border border-primary/10 bg-white/60 p-6 shadow-[0_12px_28px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-7 md:p-8 lg:p-9"
          >
            <div className="relative z-10 h-full">
              <h3 className="font-serif text-[22px] leading-[1.2] tracking-[0.01em] text-primary sm:text-[26px]">
                We would love to hear from you.
              </h3>

              <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#6d6d6d] sm:text-[15px]">
                Whether you have a question about our menu, want to book a
                private event, or simply wish to share your dining experience,
                our team is ready to assist you.
              </p>

              <div className="mt-8 space-y-4">
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
            <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/70 bg-white/75 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-7 md:p-8 lg:p-9">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_30%)]" />

              <form className="relative z-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23004f34%22%3E%3Cpath%20d%3D%22M5.22%208.22a.75.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75.75%200%201%201%201.06%201.06l-4.25%204.25a.75.75%200%200%201-1.06%200L5.22%209.28a.75.75%200%200%201%200-1.06Z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_14px_center] bg-no-repeat`}
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
                    className={`${inputClasses} min-h-[110px] resize-none`}
                    placeholder="Write your message..."
                  />
                </Field>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  <span className="flex items-center gap-2.5">
                    Send Message
                    <FiSend className="text-[14px] transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Button>
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
    <div className="group flex items-start gap-4 rounded-[20px] border border-primary/5 bg-white/70 p-4 transition-all duration-500 hover:border-primary/20 hover:bg-white/85 hover:shadow-[0_12px_24px_rgba(3,40,24,0.04)] sm:p-5">
      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-primary/10 bg-background text-[20px] text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      <div>
        <h4 className="font-serif text-[16px] tracking-[0.02em] text-primary">
          {title}
        </h4>
        <p className="mt-1.5 text-[13px] leading-6 text-[#6d6d6d] sm:text-[14px]">
          {content}
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary/80">
        {label}
      </label>
      {children}
    </div>
  );
}
