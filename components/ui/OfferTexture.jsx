"use client";

import React from "react";

export default function OfferTexture({ tone = "light", className = "" }) {
  const base =
    "pointer-events-none absolute inset-0 bg-[url('/offer.svg')] bg-cover bg-center bg-no-repeat";

  const toneClass =
    tone === "dark"
      ? "opacity-[0.08] mix-blend-soft-light"
      : "opacity-[0.11] mix-blend-multiply";

  return <div aria-hidden="true" className={`${base} ${toneClass} ${className}`} />;
}

