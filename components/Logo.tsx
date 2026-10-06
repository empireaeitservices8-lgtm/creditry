import React from "react";
import Link from "next/link";

import CredtreeBrandText from "./CredtreeBrandText";

export type LogoSize = "sm" | "md" | "lg" | "xl" | "2xl" | "header";

interface LogoProps {
  variant?: "full" | "compact" | "mark" | "stacked" | "wordmark";
  theme?: "light" | "dark";
  className?: string;
  imageClassName?: string;
  size?: LogoSize;
}

/**
 * Hidden SVG filter that removes the PNG's baked-in white background so the
 * logo can sit directly on dark surfaces.
 * - Alpha: near-white pixels become fully transparent.
 * - Color: dark-green artwork (low red) is lifted to ivory, while gold
 *   artwork (high red) stays gold, keeping contrast on forest-green.
 */
const DARK_KNOCKOUT_FILTER_ID = "credtree-logo-dark-knockout";

function DarkKnockoutFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <filter id={DARK_KNOCKOUT_FILTER_ID} colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="-0.17 0 0 0 0.98
                  -0.42 0 0 0 0.95
                  -1.00 0 0 0 0.88
                  -2 -2 -2 0 5.4"
        />
      </filter>
    </svg>
  );
}

export default function Logo({
  variant = "full",
  theme = "light",
  className = "",
  imageClassName = "",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";

  // Height sizing for the logo image
  const sizeClasses = {
    sm: "h-10 sm:h-11",
    md: "h-14 sm:h-16 lg:h-[66px]",
    lg: "h-20 sm:h-24 lg:h-28",
    xl: "h-24 sm:h-32",
    "2xl": "h-28 sm:h-36 lg:h-40",
    header: "h-20 sm:h-28 lg:h-32",
  }[size];

  // Circular mark sizing for the badge
  const markClasses: Record<LogoSize, string> = {
    sm: "w-11 h-11 p-1",
    md: "w-14 h-14 p-1.5",
    lg: "w-20 h-20 p-2",
    xl: "w-28 h-28 sm:w-32 sm:h-32 p-3",
    "2xl": "w-32 h-32 sm:w-36 sm:h-36 p-3.5",
    header: "w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 p-2.5",
  };

  // For wordmark variant (the CREDTREE FINANCIAL SERVICES typography as pure text)
  if (variant === "wordmark") {
    const brandSize =
      size === "header" || size === "2xl" || size === "xl"
        ? "lg"
        : size === "lg"
        ? "md"
        : "sm";

    return (
      <Link
        href="/#home"
        className={`group inline-flex items-center no-underline transition-all duration-200 hover:opacity-95 ${className}`}
        aria-label="Credtree Financial Services - Home"
      >
        <CredtreeBrandText size={brandSize} />
      </Link>
    );
  }

  // For mark-only variant (e.g. Brand Statement or Icon displays)
  if (variant === "mark") {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full bg-white shadow-xl border-2 border-gold-500/60 overflow-hidden ${markClasses[size]} ${className}`}
      >
        <img
          src="/credtree-logo.png"
          alt="Credtree Financial Services Emblem"
          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>
    );
  }

  // For stacked variant
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {isDark && <DarkKnockoutFilter />}
        <div
          className={`transition-transform duration-300 hover:scale-105 ${
            isDark ? "bg-transparent" : "bg-transparent mix-blend-multiply"
          }`}
        >
          <img
            src="/credtree-logo.png"
            alt="Credtree Financial Services Logo"
            className={`${sizeClasses} w-auto object-contain`}
            style={isDark ? { filter: `url(#${DARK_KNOCKOUT_FILTER_ID})` } : undefined}
            loading="eager"
          />
        </div>
        <p className="font-serif italic text-xs sm:text-sm text-forest-800 font-medium mt-2">
          Where Credit Meets Growth &amp; Security
        </p>
      </div>
    );
  }

  // Default / Compact / Full variant (used in Header Navbar, Contact Card, Footer)
  return (
    <Link
      href="/#home"
      className={`group inline-flex items-center no-underline transition-all duration-200 hover:opacity-95 ${className}`}
      aria-label="Credtree Financial Services - Home"
    >
      {isDark && <DarkKnockoutFilter />}
      <div
        className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark ? "bg-transparent" : "mix-blend-multiply"
        }`}
      >
        <img
          src="/credtree-logo.png"
          alt="Credtree Financial Services"
          className={`${imageClassName || sizeClasses} w-auto object-contain ${
            isDark ? "" : "filter drop-shadow-sm"
          }`}
          style={isDark ? { filter: `url(#${DARK_KNOCKOUT_FILTER_ID})` } : undefined}
          loading="eager"
        />
      </div>
    </Link>
  );
}
