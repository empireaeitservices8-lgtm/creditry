import React from "react";
import GoldDivider from "./GoldDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  theme = "light",
  align = "center",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-8 sm:mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      } ${className}`}
    >
      {/* Eyebrow with gold diamond */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 mb-2.5 sm:mb-3.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase ${
            isDark
              ? "bg-forest-900 text-gold-400 border border-gold-700/40"
              : "bg-white text-forest-800 border border-beige shadow-sm"
          }`}
        >
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
          <span>{eyebrow}</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
        </div>
      )}

      {/* Main Headline */}
      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] ${
          isDark ? "text-white" : "text-forest-800"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {/* Gold Decorative Divider */}
      <div className={`my-3 sm:my-4 ${isCenter ? "mx-auto" : "mr-auto"}`}>
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
