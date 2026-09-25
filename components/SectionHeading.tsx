import React from "react";
import GoldDivider from "./GoldDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  theme = "light",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      } ${className}`}
    >
      {/* Eyebrow with gold diamond */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase ${
            isDark
              ? "bg-forest-800/80 text-gold-400 border border-gold-600/30"
              : "bg-forest-50 text-forest-800 border border-forest-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-600" />
          <span>{eyebrow}</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-600" />
        </div>
      )}

      {/* Main Headline */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] ${
          isDark ? "text-ivory" : "text-forest-900"
        }`}
      >
        {title}
      </h2>

      {/* Gold Decorative Divider */}
      <div className={`my-4 ${isCenter ? "mx-auto" : "mr-auto"}`}>
        <GoldDivider theme={theme} width="sm" className={isCenter ? "mx-auto" : "!mx-0"} />
      </div>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            isDark ? "text-ivory/80" : "text-charcoal-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
