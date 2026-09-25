import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/15 via-forest-700/10 to-transparent blur-3xl -z-10" />

      {/* Decorative Outer Concentric Rings */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-gold-600/25 hero-ring-pulse" />
      <div className="absolute inset-6 sm:inset-10 rounded-full border border-dashed border-gold-600/35" />

      {/* Center SVG Master Composition - Exact Replication of Reference Logo */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[440px] drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Credtree Official Brand Emblem"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="hvGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C88A00" />
            <stop offset="30%" stopColor="#F2C14E" />
            <stop offset="70%" stopColor="#D9A62A" />
            <stop offset="100%" stopColor="#B87900" />
          </linearGradient>

          <linearGradient id="hvGreenDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B563F" />
            <stop offset="100%" stopColor="#002D22" />
          </linearGradient>

          <linearGradient id="hvGreenLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14946F" />
            <stop offset="100%" stopColor="#075B42" />
          </linearGradient>

          <filter id="hvGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C88A00" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Backdrop Circular Disc */}
        <circle cx="200" cy="200" r="176" fill="#FFFDF9" stroke="url(#hvGold)" strokeWidth="3" />
        <circle cx="200" cy="200" r="164" stroke="url(#hvGold)" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="6 3" />

        {/* Outer Circular Gold Ring with Tapering Ends */}
        <path
          d="M 80 296 C 32 224 44 116 128 60 C 208 8 324 28 372 108 C 412 176 392 264 332 312"
          stroke="url(#hvGold)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
          filter="url(#hvGlow)"
        />

        {/* Arched Dark Green Ground Base */}
        <path
          d="M 64 336 C 140 304 260 304 336 336 C 260 316 140 316 64 336 Z"
          fill="url(#hvGreenDark)"
        />

        {/* 3 Rising Financial Bar Chart Columns */}
        <g className="hero-chart-bars">
          {/* Bar 1 (Shortest) */}
          <rect
            className="hero-bar-1"
            x="204"
            y="252"
            width="22"
            height="64"
            rx="3"
            fill="url(#hvGreenDark)"
            stroke="#0B563F"
            strokeWidth="1"
          />
          {/* Bar 2 (Medium) */}
          <rect
            className="hero-bar-2"
            x="234"
            y="216"
            width="22"
            height="100"
            rx="3"
            fill="url(#hvGreenDark)"
            stroke="#0B563F"
            strokeWidth="1"
          />
          {/* Bar 3 (Tallest) */}
          <rect
            className="hero-bar-3"
            x="264"
            y="176"
            width="24"
            height="140"
            rx="3"
            fill="url(#hvGreenDark)"
            stroke="#0B563F"
            strokeWidth="1"
          />
        </g>

        {/* Stylized Tree Trunk & Limbs */}
        <g className="hero-tree-trunk">
          <path
            d="M 156 320 C 172 280 176 228 192 180 C 176 196 156 212 132 216 C 152 204 168 188 176 168 C 188 184 204 192 228 188 C 208 180 196 168 192 148 C 196 168 208 180 220 184 C 204 220 196 272 172 320 Z"
            fill="url(#hvGreenDark)"
          />
        </g>

        {/* Central Golden Core / Person Disc */}
        <circle
          cx="192"
          cy="152"
          r="11"
          fill="url(#hvGold)"
          filter="url(#hvGlow)"
        />

        {/* Tree Canopy: Dual-Tone Leaves */}
        <g className="hero-leaves">
          {/* 4 Green Leaves Left */}
          <path d="M 136 152 C 116 144 112 120 132 116 C 148 128 144 144 136 152 Z" fill="url(#hvGreenLeaf)" />
          <path d="M 116 184 C 96 176 96 156 112 152 C 128 160 124 176 116 184 Z" fill="url(#hvGreenLeaf)" />
          <path d="M 144 208 C 128 204 124 188 140 184 C 152 192 148 204 144 208 Z" fill="url(#hvGreenLeaf)" />
          <path d="M 164 124 C 152 108 164 92 180 96 C 184 112 172 120 164 124 Z" fill="url(#hvGreenLeaf)" />

          {/* Golden Leaves Right & Top */}
          <path d="M 204 88 C 196 68 216 60 224 72 C 228 88 212 92 204 88 Z" fill="url(#hvGold)" filter="url(#hvGlow)" />
          <path d="M 248 116 C 236 100 252 88 264 96 C 268 112 256 120 248 116 Z" fill="url(#hvGold)" filter="url(#hvGlow)" />
          <path d="M 224 140 C 212 128 228 112 240 120 C 244 132 232 140 224 140 Z" fill="url(#hvGold)" filter="url(#hvGlow)" />
          <path d="M 256 144 C 248 128 264 116 276 124 C 280 140 268 148 256 144 Z" fill="url(#hvGreenLeaf)" />
        </g>

        {/* Dynamic Upward Gold Growth Arrow */}
        <g className="hero-gold-arrow" filter="url(#hvGlow)">
          <path
            d="M 176 320 C 208 292 252 244 304 148"
            stroke="url(#hvGold)"
            strokeWidth="9"
            strokeLinecap="round"
            className="hero-arrow-path"
          />
          <path
            d="M 280 152 L 308 140 L 316 172"
            stroke="url(#hvGold)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
