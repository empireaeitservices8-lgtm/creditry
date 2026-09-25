import React from "react";
import Logo from "./Logo";
import GoldDivider from "./GoldDivider";
import { TAGLINE } from "@/lib/constants";

export default function BrandStatement() {
  return (
    <section className="relative py-24 sm:py-32 bg-forest-900 text-ivory overflow-hidden">
      {/* Background Architectural Glows & Watermarks */}
      <div className="absolute inset-0 bg-[radial-gradient(#C88A00_1px,transparent_1px)] [background-size:36px_36px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-forest-700/40 via-forest-800/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Leaf & Tree Silhouette in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-[600px] h-[600px]" fill="none">
          <circle cx="250" cy="250" r="220" stroke="#F2C14E" strokeWidth="2" strokeDasharray="12 6" />
          <path d="M250 120V380M180 200L250 150L320 200M150 270L250 210L350 270" stroke="#F2C14E" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Emblem in Dark Mode */}
        <div className="flex justify-center mb-8">
          <Logo variant="mark" theme="dark" size="xl" />
        </div>

        {/* Eyebrow with gold diamond */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-forest-800 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-[0.25em] uppercase">
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
          <span>Credtree Brand Philosophy</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight leading-[1.15] max-w-4xl mx-auto">
          &ldquo;{TAGLINE}&rdquo;
        </h2>

        {/* Gold Diamond Divider */}
        <div className="my-8">
          <GoldDivider theme="dark" width="lg" />
        </div>

        {/* Supporting Headline: Exactly styled as in reference flyer */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold">
          <span className="text-ivory">Simplifying Loans, </span>
          <span className="text-gold-400 italic">Insurance &amp; Investments</span>
        </p>

        {/* Editorial Subtext */}
        <p className="mt-6 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Rooted in Kannur, we facilitate structured credit avenues, multi-class insurance
          distribution, and disciplined wealth planning—guided by integrity, clarity, and
          individual attention to your aspirations.
        </p>
      </div>
    </section>
  );
}
