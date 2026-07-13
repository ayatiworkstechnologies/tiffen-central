"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import Button from "../ui/Button";
import { DATA } from "@/content/data";
import OfferTexture from "../ui/OfferTexture";

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

const reviews = [
  {
    author: "Suresh Krishnan",
    rating: 5,
    text: "The Ghee Podi Masala Dosa was incredibly crisp and flavorful. Best filter coffee in town!",
    relativeTime: "2 days ago",
  },
  {
    author: "Meera Ramesh",
    rating: 5,
    text: "Softest idlis I have ever had. The sambar has the perfect authentic Chennai taste.",
    relativeTime: "1 week ago",
  },
  {
    author: "Vikram Ananth",
    rating: 5,
    text: "Amazing Benne Dosa! The quality of ghee and ingredients is top-notch. Highly recommended.",
    relativeTime: "3 days ago",
  },
  {
    author: "Priya Sundar",
    rating: 5,
    text: "Tried the Ghee Pongal and Medhu Vada. Absolutely delicious and freshly made.",
    relativeTime: "5 days ago",
  },
  {
    author: "Karthik S.",
    rating: 5,
    text: "Great service and clean, hygienic environment. A must-visit place for tiffin lovers.",
    relativeTime: "1 month ago",
  },
  {
    author: "Divya N.",
    rating: 5,
    text: "The Thattu Idly is a game changer! Super soft and goes so well with their podi.",
    relativeTime: "2 weeks ago",
  },
];

const inputClasses =
  "w-full rounded-[18px] border border-[#032818]/[0.12] bg-white/60 px-4 py-3 text-[14px] leading-[1.5] text-[#0f3d33] transition-all duration-300 placeholder:text-[#8a877f] focus:border-[#032818]/[0.24] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8bb9a8]/[0.10]";

export default function ContactUs() {
  const site = DATA.site;
  const contact = DATA.sections.contact;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // 1. Read query parameters
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get("subject");
      if (subjectParam) {
        const matchedOption = ["General Inquiry", "Table Reservation", "Private Catering", "Feedback"].find(
          (opt) => opt.toLowerCase().includes(subjectParam.toLowerCase()) || subjectParam.toLowerCase().includes(opt.toLowerCase())
        );
        if (matchedOption) {
          setFormData((prev) => ({ ...prev, subject: matchedOption }));
        }
      }
    }

    // 2. Custom window event listener
    const handleSetSubject = (e) => {
      const newSubject = e.detail?.subject;
      if (newSubject) {
        setFormData((prev) => ({ ...prev, subject: newSubject }));
      }
    };
    window.addEventListener("tiffen-set-contact-subject", handleSetSubject);
    return () => window.removeEventListener("tiffen-set-contact-subject", handleSetSubject);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const fullname = `${formData.firstName} ${formData.lastName}`.trim();
    const payload = {
      data: {
        fullname,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }
    };

    try {
      const apiKey = process.env.NEXT_PUBLIC_CONTACT_API_KEY || "3bc72efc00a99a7ad1d1e31225c6a3f833218dfb34d88cc6ecb4c2b9562ab0fd";
      const response = await fetch("https://api.ayatiworks.com/api/v1/public/ayatiwork/tiffen/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("API submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit form. Please try again.");
    }
  };
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-14 md:py-16 lg:py-20">
      <OfferTexture className="opacity-[0.09]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="tc-container relative z-10"
      >
        {/* Heading */}
        <div className="text-center">
          <motion.p
            variants={fadeUp}
            className="mb-2 text-[11px] uppercase tracking-[0.28em] text-primary/65 sm:text-xs"
          >
            {contact.eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[28px] uppercase tracking-[0.04em] text-primary sm:text-[34px] md:text-[42px]"
          >
            {contact.title}
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
                {contact.leftTitle}
              </h3>

              <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#6d6d6d] sm:text-[15px]">
                {contact.leftBody}
              </p>

              <div className="mt-8 space-y-4">
                <ContactItem
                  icon={<FiMapPin />}
                  title="Location"
                  content={
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tiffen+central,+Govindasamy+Nagar,+Perungudi,+Chennai,+Tamil+Nadu+600096"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-colors duration-300 hover:text-primary inline-block"
                    >
                      {site.contact.addressLines.map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                      {site.contact.cityRegion}
                    </a>
                  }
                />

                <ContactItem
                  icon={<FiPhone />}
                  title="Reservations"
                  content={
                    <div className="flex flex-col">
                      <a
                        href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                        className="hover:underline transition-colors duration-300 hover:text-primary"
                      >
                        {site.contact.phone}
                      </a>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="hover:underline transition-colors duration-300 hover:text-primary"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  }
                />

                <ContactItem
                  icon={<FiMail />}
                  title="General Enquiries"
                  content={
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="hover:underline transition-colors duration-300 hover:text-primary"
                    >
                      {site.contact.email}
                    </a>
                  }
                />
              </div>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/70 bg-white/75 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-7 md:p-8 lg:p-9">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_30%)]" />

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="First Name">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Enter first name"
                      required
                    />
                  </Field>

                  <Field label="Last Name">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Enter last name"
                      required
                    />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Enter email address"
                    required
                  />
                </Field>

                <Field label="Mobile Number">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    autoComplete="tel"
                    className={inputClasses}
                    placeholder="Enter mobile number"
                    pattern="^[0-9+()\\-\\s]{7,20}$"
                    required
                  />
                </Field>

                <Field label="Subject">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23004f34%22%3E%3Cpath%20d%3D%22M5.22%208.22a.75.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75.75%200%201%201%201.06%201.06l-4.25%204.25a.75.75%200%200%201-1.06%200L5.22%209.28a.75.75%200%200%201%200-1.06Z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_14px_center] bg-no-repeat`}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Table Reservation">Table Reservation</option>
                    <option value="Private Catering">Private Catering</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses} min-h-[110px] resize-none`}
                    placeholder="Write your message..."
                    required
                  />
                </Field>

                {status === "success" && (
                  <div className="rounded-[18px] bg-green-500/10 p-4 text-[13px] font-bold text-green-800 border border-green-500/20 text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-[18px] bg-red-500/10 p-4 text-[13px] font-bold text-red-800 border border-red-500/20 text-center">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  <span className="flex items-center justify-center gap-2.5">
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="text-[14px] transition-transform duration-500 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map & Reviews Panel */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: Map */}
          {site.contact.mapIframe && (
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-[24px] border border-primary/10 bg-white/60 p-2 shadow-[0_12px_28px_rgba(0,0,0,0.03)] backdrop-blur-sm h-[400px] lg:h-[480px]"
            >
              <iframe
                src={site.contact.mapIframe}
                className="h-full w-full rounded-[18px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Tiffen Central Location Map"
              />
            </motion.div>
          )}

          {/* Right: Google Reviews Auto-Scroll */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[24px] border border-primary/10 bg-white/60 p-6 shadow-[0_12px_28px_rgba(0,0,0,0.03)] backdrop-blur-sm h-[400px] lg:h-[480px] flex flex-col"
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-primary/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-serif text-[18px] font-semibold text-primary">Google Reviews</span>
                <span className="flex items-center text-[#ffc107] text-[14px]">
                  {"★".repeat(5)}
                </span>
              </div>
              <span className="text-[12px] text-primary/60 font-medium">4.8 / 5 Rating</span>
            </div>

            {/* Scroll Container */}
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <div className="absolute inset-x-0 top-0 flex flex-col gap-4 animate-[tc-vertical-scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
                {/* Double the list to make scrolling loop seamless */}
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={index}
                    className="rounded-[18px] border border-primary/5 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-semibold text-primary">{review.author}</span>
                      <span className="text-xs text-[#ffc107]">{"★".repeat(review.rating)}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#6d6d6d]">{review.text}</p>
                    <span className="mt-2 block text-[10px] text-primary/50">{review.relativeTime}</span>
                  </div>
                ))}
              </div>
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
