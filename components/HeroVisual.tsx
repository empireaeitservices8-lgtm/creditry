import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[480px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/25 via-forest-700/15 to-transparent blur-3xl -z-10" />

      {/* Decorative Outer Concentric Rings with Gold Pulsing Accent */}
      <div className="absolute inset-1 sm:inset-3 rounded-full border border-gold-600/35 hero-ring-pulse" />
      <div className="absolute inset-5 sm:inset-7 rounded-full border border-dashed border-gold-600/40" />

      {/* Main Luxury Circular Medallion housing Real Credtree Logo */}
      <div className="relative w-[86%] h-[86%] rounded-full bg-gradient-to-b from-white via-ivory-light to-white shadow-2xl border-2 border-gold-500/60 flex items-center justify-center p-6 sm:p-8 overflow-hidden group">
        {/* Subtle inner gold accent ring */}
        <div className="absolute inset-3 rounded-full border border-gold-500/25 pointer-events-none" />

        {/* Real Credtree Logo */}
        <img
          src="/credtree-logo.png"
          alt="Credtree Financial Services Official Logo"
          className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
        />
      </div>
    </div>
  );
}
