import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroVisual from "./HeroVisual";
import CredtreeBrandText from "./CredtreeBrandText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-white/50 to-[#FAF7F0] pt-6 sm:pt-12 lg:pt-16 pb-10 sm:pb-16"
    >
      {/* Background Architectural Grid & Subtle Radial Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B2C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gold-400/10 via-forest-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-forest-800/5 via-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 text-left space-y-5 lg:pr-6">
            {/* Brand Identity as Pure Crisp Typography */}
            <div className="pt-0">
              <CredtreeBrandText size="lg" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 tracking-tight leading-[1.15]">
              Where Credit Meets{" "}
              <span className="relative inline-block text-forest-800">
                Growth &amp; Security
                {/* Subtle gold artistic underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-gold-700"
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

            {/* Comprehensive Company Overview Copy */}
            <div className="space-y-3.5 max-w-2xl text-justify">
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal text-left ![text-align:left]">
                Simplifying loans insurance and Investments...One-Stop Solution for All Your Financial Needs
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal text-justify ![text-align:justify] ![text-align-last:left]">
                Credtree Financial Services is a comprehensive financial solutions firm with over 20 years of expertise in the finance industry, serving as a trusted channel partner for multiple leading banks and Non-Banking Financial Companies (NBFCs).
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal text-justify ![text-align:justify] ![text-align-last:left] [text-wrap:pretty]">
                Built on extensive industry experience, strong institutional relationships, and a customer-first approach. Credtree brings a wide spectrum of financial products and services together under one roof. Our objective is to simplify the financial journey of in&shy;di&shy;vid&shy;u&shy;als, pro&shy;fes&shy;sion&shy;als, entre&shy;preneurs, and businesses by connecting them with suitable financial solutions based on their specific requirements.
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal text-justify ![text-align:justify] ![text-align-last:left]">
                From loans and insurance to credit cards, mutual funds and other financial solutions, we provide access to a diverse portfolio through our network of reputed financial institutions and product providers.
              </p>
            </div>

            {/* Pillar Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 max-w-xl">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/50 transition-all duration-300 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-800 shrink-0 group-hover:text-gold-700 transition-colors" />
                <span className="text-xs sm:text-base font-bold text-forest-800 tracking-tight sm:tracking-wide">Expertise</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/50 transition-all duration-300 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-800 shrink-0 group-hover:text-gold-700 transition-colors" />
                <span className="text-xs sm:text-base font-bold text-forest-800 tracking-tight sm:tracking-wide">Flexible</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/50 transition-all duration-300 group">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-800 shrink-0 group-hover:text-gold-700 transition-colors" />
                <span className="text-xs sm:text-base font-bold text-forest-800 tracking-tight sm:tracking-wide">Transparent</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Primary Action Button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-forest-800 text-white text-base font-semibold tracking-wide shadow-card-luxury hover:bg-forest-900 hover:border-gold-700 hover:shadow-gold-subtle border border-gold-700/40 transition-all duration-200 group active:scale-[0.99]"
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
