import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact" | "mark" | "stacked";
  theme?: "light" | "dark";
  className?: string;
  imageClassName?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "header";
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
  const markClasses = {
    sm: "w-11 h-11 p-1",
    md: "w-14 h-14 p-1.5",
    lg: "w-20 h-20 p-2",
    xl: "w-28 h-28 sm:w-32 sm:h-32 p-3",
  }[size];

  // For mark-only variant (e.g. Brand Statement or Icon displays)
  if (variant === "mark") {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full bg-white shadow-xl border-2 border-gold-500/60 overflow-hidden ${markClasses} ${className}`}
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
        <div
          className={`rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
            isDark
              ? "bg-white p-3 shadow-2xl border border-gold-500/50"
              : "bg-transparent mix-blend-multiply"
          }`}
        >
          <img
            src="/credtree-logo.png"
            alt="Credtree Financial Services Logo"
            className={`${sizeClasses} w-auto object-contain`}
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
      <div
        className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark
            ? "bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 rounded-xl shadow-lg border border-gold-500/40"
            : "mix-blend-multiply"
        }`}
      >
        <img
          src="/credtree-logo.png"
          alt="Credtree Financial Services"
          className={`${imageClassName || sizeClasses} w-auto object-contain filter drop-shadow-sm`}
          loading="eager"
        />
      </div>
    </Link>
  );
}
