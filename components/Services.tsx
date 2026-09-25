import React from "react";
import SectionHeading from "./SectionHeading";
import { PRIMARY_SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-ivory-light relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#075B42_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading styled exactly like the reference card back */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-forest-50 text-forest-800 border border-forest-100">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-600" />
            <span>Our Financial Services</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-600" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-forest-900">Simplifying Loans, </span>
            <span className="text-gold-700">Insurance &amp; Investments</span>
          </h2>

          {/* Gold Diamond Divider */}
          <div className="flex items-center justify-center gap-2.5 my-5 max-w-[220px] mx-auto">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-600/50 to-gold-700" />
            <span className="w-2 h-2 rotate-45 bg-gold-600 shadow-sm" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-600/50 to-gold-700" />
          </div>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            Direct facilitation for your personal, enterprise, and family financial goals
          </p>
        </div>

        {/* 4 Cards Grid - Reproducing the 4 Icon Styles from the Business Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* 1. HOME LOAN */}
          <div className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Reference-Accurate Home Loan Icon: Green House with Gold Roof & Chimney */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm group-hover:bg-forest-800 transition-colors">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Chimney */}
                    <rect x="42" y="16" width="6" height="12" fill="#C88A00" rx="1" />
                    {/* House Body */}
                    <rect x="16" y="28" width="32" height="26" fill="#003F2D" rx="2" />
                    {/* Roof */}
                    <polygon points="32,8 10,28 54,28" fill="#C88A00" stroke="#B87900" strokeWidth="1.5" />
                    {/* Window */}
                    <rect x="22" y="34" width="7" height="7" fill="#FFFFFF" rx="1" />
                    <line x1="25.5" y1="34" x2="25.5" y2="41" stroke="#003F2D" strokeWidth="1" />
                    <line x1="22" y1="37.5" x2="29" y2="37.5" stroke="#003F2D" strokeWidth="1" />
                    {/* Door */}
                    <rect x="35" y="36" width="8" height="18" fill="#FFFFFF" rx="1" />
                    <circle cx="37" cy="45" r="1" fill="#003F2D" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-bold text-gold-300 group-hover:text-gold-500 transition-colors">
                  01
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-gold-50 border border-gold-200">
                Secured Credit
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                HOME LOAN
              </h3>

              <p className="mt-3 text-sm text-charcoal-700 leading-relaxed font-normal">
                &ldquo;Financial assistance for your home ownership journey.&rdquo;
              </p>

              <p className="mt-2 text-xs text-charcoal-500 leading-relaxed italic border-t border-forest-50 pt-2">
                Residential purchases, plot loans &amp; home construction facilitation.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

          {/* 2. BUSINESS LOAN */}
          <div className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Reference-Accurate Business Loan Icon: Green Briefcase with Gold Latch & Handle */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm group-hover:bg-forest-800 transition-colors">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Handle */}
                    <path d="M24 18 C24 12 40 12 40 18" stroke="#C88A00" strokeWidth="3" strokeLinecap="round" />
                    {/* Briefcase Body */}
                    <rect x="12" y="18" width="40" height="32" rx="4" fill="#003F2D" />
                    {/* Front Flap Line */}
                    <path d="M12 28 L32 38 L52 28" stroke="#C88A00" strokeWidth="1.5" />
                    {/* Gold Center Clasp / Lock */}
                    <rect x="29" y="34" width="6" height="7" rx="1.5" fill="#F2C14E" stroke="#C88A00" strokeWidth="1" />
                    {/* Gold Bottom Corners */}
                    <path d="M12 44 L18 50 L12 50 Z" fill="#C88A00" />
                    <path d="M52 44 L46 50 L52 50 Z" fill="#C88A00" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-bold text-gold-300 group-hover:text-gold-500 transition-colors">
                  02
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-gold-50 border border-gold-200">
                Enterprise Growth
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                BUSINESS LOAN
              </h3>

              <p className="mt-3 text-sm text-charcoal-700 leading-relaxed font-normal">
                &ldquo;Financial solutions designed to support business needs and growth.&rdquo;
              </p>

              <p className="mt-2 text-xs text-charcoal-500 leading-relaxed italic border-t border-forest-50 pt-2">
                Working capital, trade finance &amp; enterprise expansion facilities.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

          {/* 3. INSURANCE */}
          <div className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Reference-Accurate Insurance Icon: Gold Shield with Green Family Silhouette inside */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm group-hover:bg-forest-800 transition-colors">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Metallic Gold Shield */}
                    <path
                      d="M32 8 C46 8 50 16 50 28 C50 42 32 54 32 54 C32 54 14 42 14 28 C14 16 18 8 32 8 Z"
                      fill="#C88A00"
                      stroke="#B87900"
                      strokeWidth="1.5"
                    />
                    {/* Inner Shield Inset */}
                    <path
                      d="M32 11 C43 11 46 18 46 28 C46 39 32 49 32 49 C32 49 18 39 18 28 C18 18 21 11 32 11 Z"
                      fill="#F2C14E"
                    />
                    {/* Family Silhouette (Father, Child, Mother) in Deep Forest Green */}
                    {/* Father (Left) */}
                    <circle cx="26" cy="22" r="2.5" fill="#003F2D" />
                    <path d="M22 36 V29 C22 26 30 26 30 29 V36 Z" fill="#003F2D" />
                    {/* Mother (Right) */}
                    <circle cx="38" cy="22" r="2.5" fill="#003F2D" />
                    <path d="M34 36 V29 C34 26 42 26 42 29 V36 Z" fill="#003F2D" />
                    {/* Child (Center) */}
                    <circle cx="32" cy="28" r="2" fill="#003F2D" />
                    <path d="M29 38 V33 C29 31 35 31 35 33 V38 Z" fill="#003F2D" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-bold text-gold-300 group-hover:text-gold-500 transition-colors">
                  03
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-gold-50 border border-gold-200">
                Risk Protection
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                INSURANCE
              </h3>

              <p className="mt-3 text-sm text-charcoal-700 leading-relaxed font-normal">
                &ldquo;Insurance solutions designed to help protect what matters.&rdquo;
              </p>

              <p className="mt-2 text-xs text-charcoal-500 leading-relaxed italic border-t border-forest-50 pt-2">
                Life, health, vehicle &amp; property protection portfolio distribution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

          {/* 4. WEALTH MANAGEMENT */}
          <div className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Reference-Accurate Wealth Management Icon: Dark Green Bars with Upward Gold Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm group-hover:bg-forest-800 transition-colors">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Baseline */}
                    <line x1="12" y1="50" x2="52" y2="50" stroke="#C88A00" strokeWidth="2" strokeLinecap="round" />
                    {/* Bar 1 */}
                    <rect x="16" y="42" width="6" height="8" rx="1" fill="#003F2D" />
                    {/* Bar 2 */}
                    <rect x="25" y="34" width="6" height="16" rx="1" fill="#003F2D" />
                    {/* Bar 3 */}
                    <rect x="34" y="26" width="6" height="24" rx="1" fill="#003F2D" />
                    {/* Bar 4 */}
                    <rect x="43" y="18" width="6" height="32" rx="1" fill="#003F2D" />
                    {/* Upward Gold Curved Growth Arrow */}
                    <path d="M14 44 C26 38 34 26 48 14" stroke="#F2C14E" strokeWidth="3" strokeLinecap="round" />
                    <path d="M38 14 L49 13 L47 24" stroke="#F2C14E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-bold text-gold-300 group-hover:text-gold-500 transition-colors">
                  04
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-gold-50 border border-gold-200">
                Long-Term Growth
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                WEALTH MANAGEMENT
              </h3>

              <p className="mt-3 text-sm text-charcoal-700 leading-relaxed font-normal">
                &ldquo;Investment and wealth management services focused on long-term financial planning.&rdquo;
              </p>

              <p className="mt-2 text-xs text-charcoal-500 leading-relaxed italic border-t border-forest-50 pt-2">
                Disciplined capital allocation &amp; goal-based advisory facilitation.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

        </div>

        {/* Factual Disclaimer Pill */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800/5 border border-forest-100 text-xs text-charcoal-600">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            <span>
              All services facilitated through official partner channels in strict accordance with documentation guidelines.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
