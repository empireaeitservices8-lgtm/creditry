import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import GoldDivider from "./GoldDivider";
import { 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  CreditCard, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Home, 
  Briefcase, 
  Building2,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-b from-ivory via-[#F4EDE0]/50 to-ivory relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-gold-400/10 via-forest-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />
      
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="Financial Solutions Built Around Your Goals"
        />

        {/* ========================================================
            SHOWCASE CENTERPIECE: OFFICIAL BUSINESS OBJECTIVE PLAQUE
            ======================================================== */}
        <div className="relative max-w-5xl mx-auto mb-16 sm:mb-20">
          {/* Ambient outer halo */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-gold-600/40 via-gold-400/50 to-gold-700/40 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

          {/* Master Plaque Card */}
          <div className="relative rounded-[2.25rem] bg-gradient-to-br from-[#00382B] via-[#002D22] to-[#011F18] border-2 border-gold-500/50 shadow-[0_25px_60px_-15px_rgba(0,45,34,0.45),0_0_35px_-10px_rgba(200,138,0,0.3)] p-8 sm:p-12 md:p-14 overflow-hidden text-center text-ivory">
            
            {/* Ornate Gold Corner Filigree Accents */}
            {/* Top-Left */}
            <div className="absolute top-4 left-4 w-12 h-12 pointer-events-none opacity-80">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-gold-400">
                <path d="M4 20 V6 C4 4.89543 4.89543 4 6 4 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 14 V8 H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </div>
            {/* Top-Right */}
            <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none opacity-80">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-gold-400">
                <path d="M44 20 V6 C44 4.89543 43.1046 4 42 4 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 14 V8 H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="44" cy="4" r="2" fill="currentColor" />
              </svg>
            </div>
            {/* Bottom-Left */}
            <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none opacity-80">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-gold-400">
                <path d="M4 28 V42 C4 43.1046 4.89543 44 6 44 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 34 V40 H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </div>
            {/* Bottom-Right */}
            <div className="absolute bottom-4 right-4 w-12 h-12 pointer-events-none opacity-80">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-gold-400">
                <path d="M44 28 V42 C44 43.1046 43.1046 44 42 44 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 34 V40 H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="44" cy="4" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Giant Background Watermark Quotation Mark */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold-400/[0.04] font-serif text-[180px] sm:text-[240px] select-none pointer-events-none leading-none">
              &ldquo;
            </div>

            {/* Top Emblem & Header */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-600/30 via-gold-500/20 to-gold-600/30 border border-gold-400/50 shadow-inner">
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-gold-300">
                  Official Business Objective
                </span>
                <Sparkles className="w-4 h-4 text-gold-300" />
              </div>
            </div>

            {/* Verbatim Business Objective Quote */}
            <div className="relative z-10 my-6 sm:my-8 px-2 sm:px-8">
              <blockquote className="font-serif italic text-lg sm:text-2xl md:text-[27px] text-[#FFFDF9] font-normal leading-relaxed sm:leading-[1.6] tracking-wide text-center drop-shadow-sm">
                &ldquo;To facilitate secured and unsecured loans including home loans, personal loans,
                car loans, loans against property and business loans, and to distribute financial
                products such as credit cards, all class of insurance products, investment and
                wealth management services.&rdquo;
              </blockquote>
            </div>

            {/* Delicate Golden Divider with Central Diamond */}
            <div className="relative z-10 my-6 sm:my-8">
              <GoldDivider theme="dark" width="md" />
            </div>

            {/* 6 Interactive Golden Mandate Scope Pills */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <Home className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Home Loans</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <Briefcase className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Business Loans</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Loans Against Property</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>All Classes of Insurance</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <CreditCard className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Credit Cards Distribution</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-gold-400/30 text-gold-200 text-xs sm:text-[13px] font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Wealth Management</span>
              </div>
            </div>


          </div>
        </div>

        {/* ========================================================
            3 STRATEGIC PILLARS: HOW WE DELIVER ON OUR OBJECTIVE
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          
          {/* Pillar 1: Lending Facilitation */}
          <div className="group relative p-8 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-gold-500/30 flex items-center justify-center text-forest-800 mb-6 group-hover:bg-forest-800 group-hover:text-gold-400 transition-colors shadow-xs">
                <Layers className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 mb-2.5">
                Credit &amp; Loan Facilitation
              </h4>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
                Structured loan options tailored to your eligibility. We connect you with top banking institutions with transparent comparisons and dedicated sanction support.
              </p>

              <ul className="space-y-2.5 border-t border-forest-50 pt-5 text-xs text-charcoal-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Home Loans for Purchase &amp; Construction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Business Loans &amp; Expansion Capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Loans Against Property (LAP) &amp; Personal Loans</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between">
              <a
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Request Loan Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Pillar 2: Insurance & Cards */}
          <div className="group relative p-8 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-gold-500/30 flex items-center justify-center text-forest-800 mb-6 group-hover:bg-forest-800 group-hover:text-gold-400 transition-colors shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 mb-2.5">
                Insurance &amp; Financial Products
              </h4>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
                Multi-class risk protection and liquidity tools ensuring complete financial security for your family, healthcare, and enterprise assets.
              </p>

              <ul className="space-y-2.5 border-t border-forest-50 pt-5 text-xs text-charcoal-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>All Classes of Health, Life &amp; Asset Insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Premium Credit Card Distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Tailored Coverage Built Around Your Needs</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between">
              <a
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Protection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Pillar 3: Wealth Management */}
          <div className="group relative p-8 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-gold-500/30 flex items-center justify-center text-forest-800 mb-6 group-hover:bg-forest-800 group-hover:text-gold-400 transition-colors shadow-xs">
                <TrendingUp className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 mb-2.5">
                Wealth &amp; Investments
              </h4>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
                Disciplined wealth advisory services focused on structured portfolio planning and long-term financial milestones with disciplined risk management.
              </p>

              <ul className="space-y-2.5 border-t border-forest-50 pt-5 text-xs text-charcoal-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Strategic Investment &amp; Wealth Advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Long-Term Capital Preservation &amp; Growth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Transparent, Objective-Driven Planning</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between">
              <a
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Plan Your Wealth</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            AUTHORITATIVE REASSURANCE BANNER
            ======================================================== */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/40 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-serif text-base sm:text-lg font-bold text-forest-900">
                Transparent Facilitation with Authorized Excellence
              </h5>
              <p className="text-xs text-charcoal-600 leading-relaxed mt-0.5 max-w-3xl">
                Credtree Financial Services functions strictly as an authorized associate, ensuring every loan, insurance distribution, and investment request is managed with total clarity, documentation diligence, and institutional compliance.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-forest-800 text-ivory text-xs font-bold uppercase tracking-wider hover:bg-forest-900 transition-colors shadow-sm"
          >
            Direct Associate Contact
          </a>
        </div>

      </div>
    </section>
  );
}
