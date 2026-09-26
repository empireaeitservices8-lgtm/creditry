import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-ivory via-ivory-light to-ivory py-16 sm:py-20 lg:py-24"
    >
      {/* Background Architectural Grid & Subtle Radial Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#C88A00_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gold-400/10 via-forest-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-forest-800/5 via-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 text-left space-y-6 lg:pr-6">
            {/* Brand Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-800/10 border border-gold-600/30 text-forest-800 text-xs font-semibold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-600" />
              <span>Credtree Financial Services</span>
              <span className="text-gold-700">&bull;</span>
              <span>Kannur</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest-900 tracking-tight leading-[1.12]">
              Where Credit Meets{" "}
              <span className="relative inline-block text-forest-800">
                Growth &amp; Security
                {/* Subtle gold artistic underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-gold-500"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 9C60 3 180 3 299 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-gold-800 font-medium leading-snug">
              Smart financial solutions for loans, insurance, investments and wealth management.
            </p>

            {/* Additional Factual Narrative Copy */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal max-w-2xl">
              Helping individuals and businesses explore financial solutions with clarity,
              confidence and care. Based at Kamath Building, SN Park, Kannur, we facilitate
              credit avenues and financial protection tailored to your long-term roadmap.
            </p>

            {/* Pillar Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-forest-50/80 border border-forest-100">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Clarity</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-forest-50/80 border border-forest-100">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Confidence</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-forest-50/80 border border-forest-100">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Care</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Primary Action Button */}
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-forest-800 text-ivory text-base font-semibold tracking-wide shadow-card-luxury hover:bg-forest-900 hover:shadow-gold-hover border border-gold-600/40 transition-all duration-200 group active:scale-[0.99]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-gold-400 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent Bespoke Hero Visual Composition */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
