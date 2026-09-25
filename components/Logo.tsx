import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact" | "mark" | "stacked";
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  variant = "full",
  theme = "light",
  className = "",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";

  const markDimensions = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-28 h-28",
  }[size];

  // SVG Emblem reproducing the exact Credtree reference logo
  const Emblem = (
    <svg
      viewBox="0 0 200 200"
      className={`${markDimensions} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Credtree Financial Services Official Emblem"
    >
      <defs>
        {/* Metallic Gold Gradients matching reference */}
        <linearGradient id="credtreeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C88A00" />
          <stop offset="30%" stopColor="#F2C14E" />
          <stop offset="70%" stopColor="#D9A62A" />
          <stop offset="100%" stopColor="#B87900" />
        </linearGradient>

        <linearGradient id="credtreeGoldLight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B87900" />
          <stop offset="50%" stopColor="#F2C14E" />
          <stop offset="100%" stopColor="#C88A00" />
        </linearGradient>

        {/* Forest Green Gradients matching reference */}
        <linearGradient id="credtreeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B563F" />
          <stop offset="50%" stopColor="#075B42" />
          <stop offset="100%" stopColor="#003F2D" />
        </linearGradient>

        <linearGradient id="credtreeGreenDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#075B42" />
          <stop offset="100%" stopColor="#002D22" />
        </linearGradient>

        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#C88A00" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Outer Circular Gold Ring with Tapering Ends (as seen in reference) */}
      <path
        d="M 40 148 C 16 112 22 58 64 30 C 104 4 162 14 186 54 C 206 88 196 132 166 156"
        stroke="url(#credtreeGold)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner fine concentric gold curve */}
      <path
        d="M 48 140 C 28 110 34 66 68 42 C 102 20 150 28 172 62 C 188 90 180 126 156 146"
        stroke="url(#credtreeGold)"
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arched Dark Green Ground Base (as seen in reference) */}
      <path
        d="M 32 168 C 70 152 130 152 168 168 C 130 158 70 158 32 168 Z"
        fill="url(#credtreeGreenDark)"
      />

      {/* 3 Financial Bar Chart Columns (rising on the right) */}
      {/* Bar 1 (Shortest) */}
      <rect
        x="102"
        y="126"
        width="11"
        height="32"
        rx="2"
        fill="url(#credtreeGreenDark)"
        stroke="#0B563F"
        strokeWidth="0.5"
      />
      {/* Bar 2 (Medium) */}
      <rect
        x="117"
        y="108"
        width="11"
        height="50"
        rx="2"
        fill="url(#credtreeGreenDark)"
        stroke="#0B563F"
        strokeWidth="0.5"
      />
      {/* Bar 3 (Tallest) */}
      <rect
        x="132"
        y="88"
        width="12"
        height="70"
        rx="2"
        fill="url(#credtreeGreenDark)"
        stroke="#0B563F"
        strokeWidth="0.5"
      />

      {/* Stylized Tree Trunk & Branches */}
      <path
        d="M 78 160 C 86 140 88 114 96 90 C 88 98 78 106 66 108 C 76 102 84 94 88 84 C 94 92 102 96 114 94 C 104 90 98 84 96 74 C 98 84 104 90 110 92 C 102 110 98 136 86 160 Z"
        fill="url(#credtreeGreenDark)"
      />

      {/* Central Golden Core / Person Disc */}
      <circle
        cx="96"
        cy="76"
        r="5.5"
        fill="url(#credtreeGold)"
        filter="url(#logoGlow)"
      />

      {/* Foliage: 4 Dark Green Leaves (Left side) */}
      <path d="M 68 76 C 58 72 56 60 66 58 C 74 64 72 72 68 76 Z" fill="url(#credtreeGreen)" />
      <path d="M 58 92 C 48 88 48 78 56 76 C 64 80 62 88 58 92 Z" fill="url(#credtreeGreen)" />
      <path d="M 72 104 C 64 102 62 94 70 92 C 76 96 74 102 72 104 Z" fill="url(#credtreeGreen)" />
      <path d="M 82 62 C 76 54 82 46 90 48 C 92 56 86 60 82 62 Z" fill="url(#credtreeGreen)" />

      {/* Foliage: Golden Leaves (Right side & Top) */}
      {/* Top Center Gold Leaf */}
      <path d="M 102 44 C 98 34 108 30 112 36 C 114 44 106 46 102 44 Z" fill="url(#credtreeGold)" filter="url(#logoGlow)" />
      {/* Upper Right Gold Leaf */}
      <path d="M 124 58 C 118 50 126 44 132 48 C 134 56 128 60 124 58 Z" fill="url(#credtreeGold)" filter="url(#logoGlow)" />
      {/* Mid Right Gold Leaf */}
      <path d="M 112 70 C 106 64 114 56 120 60 C 122 66 116 70 112 70 Z" fill="url(#credtreeGold)" filter="url(#logoGlow)" />
      {/* Far Right Green Leaf */}
      <path d="M 128 72 C 124 64 132 58 138 62 C 140 70 134 74 128 72 Z" fill="url(#credtreeGreen)" />

      {/* Upward Curved Gold Growth Arrow (Passing over the bar chart) */}
      <g filter="url(#logoGlow)">
        <path
          d="M 88 160 C 104 146 126 122 152 74"
          stroke="url(#credtreeGold)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 140 76 L 154 70 L 158 86"
          stroke="url(#credtreeGold)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  if (variant === "mark") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {Emblem}
        <div className="mt-3">
          <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.14em]">
            <span className={isDark ? "text-ivory" : "text-forest-800"}>CRED</span>
            <span className="text-gold-600">TREE</span>
          </span>
          <div className="flex items-center justify-center gap-2 my-1">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold-600"></span>
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-charcoal-700">
              FINANCIAL SERVICES
            </span>
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold-600"></span>
          </div>
          <div className="flex items-center justify-center gap-1.5 my-1">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-600"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-600"></span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-600"></span>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-forest-800 font-medium">
            Where Credit Meets Growth &amp; Security
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-3.5 no-underline transition-opacity hover:opacity-95 ${className}`}
      aria-label="Credtree Financial Services - Home"
    >
      {Emblem}

      <div className="flex flex-col text-left">
        {/* Brand Name: CRED in Forest Green, TREE in Gold! */}
        <span
          className={`font-serif tracking-[0.14em] font-bold uppercase transition-colors leading-tight ${
            size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
          }`}
        >
          <span className={isDark ? "text-ivory" : "text-forest-800"}>CRED</span>
          <span className="text-gold-600">TREE</span>
        </span>

        {/* Decorative Gold Divider with Diamond */}
        <div className="flex items-center gap-1.5 my-0.5">
          <span className="h-[1px] w-5 bg-gradient-to-r from-gold-700 via-gold-400 to-transparent"></span>
          <span className="w-1 h-1 rotate-45 bg-gold-600"></span>
          <span className="h-[1px] flex-1 max-w-[36px] bg-gradient-to-l from-gold-700 via-gold-400 to-transparent"></span>
        </div>

        {/* Sub-Brand */}
        <span
          className={`font-sans tracking-[0.24em] uppercase font-bold text-[9px] leading-tight ${
            isDark ? "text-gold-400" : "text-charcoal-700"
          }`}
        >
          FINANCIAL SERVICES
        </span>
      </div>
    </Link>
  );
}
