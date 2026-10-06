import React from "react";
import { PRIMARY_SERVICES, CONTACT_INFO } from "@/lib/constants";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";

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
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
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
              <a href="/contact" className="inline-flex items-center gap-1.5">
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
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
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
              <a href="/contact" className="inline-flex items-center gap-1.5">
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
              {/* Insurance Icon: Green Shield with Gold Rim & Checkmark */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    {/* Protective Shield: green body with gold rim */}
                    <path
                      d="M32 6 L52 13 V29 C52 43 43 52 32 58 C21 52 12 43 12 29 V13 Z"
                      fill="#003F2D"
                      stroke="#C88A00"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    {/* Inner gold hairline */}
                    <path
                      d="M32 12 L47 17.5 V29 C47 40 40 47 32 52 C24 47 17 40 17 29 V17.5 Z"
                      stroke="#F2C14E"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    {/* Gold Checkmark */}
                    <path
                      d="M23 31 L29.5 37.5 L42 24"
                      stroke="#F2C14E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                Life, health, motor &amp; property protection portfolio distribution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#insurance-solutions" className="inline-flex items-center gap-1.5">
                <span>Explore Solutions Suite</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

          {/* 4. WEALTH MANAGEMENT */}
          <div className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                    <line x1="12" y1="50" x2="52" y2="50" stroke="#C88A00" strokeWidth="2" strokeLinecap="round" />
                    <rect x="16" y="42" width="6" height="8" rx="1" fill="#003F2D" />
                    <rect x="25" y="34" width="6" height="16" rx="1" fill="#003F2D" />
                    <rect x="34" y="26" width="6" height="24" rx="1" fill="#003F2D" />
                    <rect x="43" y="18" width="6" height="32" rx="1" fill="#003F2D" />
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
              <a href="/contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* DEDICATED HIGHLIGHT: ALL INSURANCE SOLUTIONS UNDER ONE ROOF */}
        {/* ======================================================== */}
        <div id="insurance-solutions" className="mt-24 pt-16 border-t border-gold-600/25 scroll-mt-24">
          
          {/* Section Header with exact requested class and wording */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Heading class 'all-insurance-solutions-in-one-roof' as requested */}
            <h3 className="all-insurance-solutions-in-one-roof font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900">
              <span>All Class of Insurance Solutions </span>
              <span className="text-gold-700">Under One Roof</span>
            </h3>

            {/* Gold Diamond Divider */}
            <div className="flex items-center justify-center gap-2.5 my-5 max-w-[220px] mx-auto">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-600/50 to-gold-700" />
              <span className="w-2 h-2 rotate-45 bg-gold-600 shadow-sm" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-600/50 to-gold-700" />
            </div>
          </div>

          {/* 4 Cards Grid - Health Insurance, Motor Insurance, Home Loans, Property All Risk */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* 1. HEALTH INSURANCE */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Custom Dual-Tone Health Insurance SVG */}
                  <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      {/* Gold Outer Shield */}
                      <path
                        d="M32 6 C46 6 51 14 51 26 C51 42 32 55 32 55 C32 55 13 42 13 26 C13 14 18 6 32 6 Z"
                        fill="#C88A00"
                        stroke="#B87900"
                        strokeWidth="1.5"
                      />
                      {/* Gold Inner Shield */}
                      <path
                        d="M32 9 C43 9 47 16 47 26 C47 39 32 50 32 50 C32 50 17 39 17 26 C17 16 21 9 32 9 Z"
                        fill="#F2C14E"
                      />
                      {/* Forest Green Medical Cross */}
                      <rect x="27" y="18" width="10" height="24" rx="2" fill="#003F2D" />
                      <rect x="20" y="25" width="24" height="10" rx="2" fill="#003F2D" />
                      {/* Heartbeat pulse accent in Gold */}
                      <path d="M22 30 H26 L28.5 25 L33.5 35 L36 30 H42" stroke="#F2C14E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-forest-700 mb-1">
                  Family &amp; Medical Protection
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                  HEALTH INSURANCE
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  Comprehensive hospitalization coverage safeguarding your family against escalating medical costs with leading cashless hospital networks.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-forest-50 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Cashless Hospitalization Network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Individual &amp; Family Floater Plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Critical Illness &amp; Day-Care Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Tax Savings under Section 80D</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Health Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
              </div>
            </div>

            {/* 2. MOTOR INSURANCE */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Matching Luxury Dual-Tone Motor Insurance Shield SVG */}
                  <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      {/* Gold Outer Shield matching Health Insurance */}
                      <path
                        d="M32 6 C46 6 51 14 51 26 C51 42 32 55 32 55 C32 55 13 42 13 26 C13 14 18 6 32 6 Z"
                        fill="#C88A00"
                        stroke="#B87900"
                        strokeWidth="1.5"
                      />
                      {/* Gold Inner Shield */}
                      <path
                        d="M32 9 C43 9 47 16 47 26 C47 39 32 50 32 50 C32 50 17 39 17 26 C17 16 21 9 32 9 Z"
                        fill="#F2C14E"
                      />
                      {/* Forest Green Vehicle Roof & Pillars */}
                      <path
                        d="M23.5 28 L26.5 20.5 C27.5 19 29 18 32 18 C35 18 36.5 19 37.5 20.5 L40.5 28 Z"
                        fill="#003F2D"
                      />
                      {/* Windshield Reflection */}
                      <path
                        d="M26.5 27 L28.5 21.5 C29.2 20.5 30.5 20 32 20 C33.5 20 34.8 20.5 35.5 21.5 L37.5 27 Z"
                        fill="#F2C14E"
                      />
                      {/* Vehicle Body in Deep Forest Green */}
                      <path
                        d="M19 30 C19 28.5 20.5 27.5 22.5 27.5 H41.5 C43.5 27.5 45 28.5 45 30 L45.5 38 C45.5 39.5 44 41 42 41 H22 C20 41 18.5 39.5 18.5 38 Z"
                        fill="#003F2D"
                      />
                      {/* Dual Metallic Headlights */}
                      <rect x="21" y="31.5" width="4.5" height="3" rx="1.5" fill="#F2C14E" />
                      <rect x="38.5" y="31.5" width="4.5" height="3" rx="1.5" fill="#F2C14E" />
                      {/* Front Chrome Grille */}
                      <rect x="28" y="32" width="8" height="6" rx="1" fill="#003F2D" stroke="#F2C14E" strokeWidth="1.2" />
                      <line x1="29.5" y1="35" x2="34.5" y2="35" stroke="#F2C14E" strokeWidth="1" />
                      {/* Tires */}
                      <rect x="20.5" y="40" width="4" height="4.5" rx="1.5" fill="#003F2D" />
                      <rect x="39.5" y="40" width="4" height="4.5" rx="1.5" fill="#003F2D" />
                      {/* Safety Star Accent */}
                      <path
                        d="M32 11 L33 13.5 H35.5 L33.5 15 L34.5 17.5 L32 16 L29.5 17.5 L30.5 15 L28.5 13.5 H31 Z"
                        fill="#003F2D"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-forest-700 mb-1">
                  Vehicle &amp; Liability Cover
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                  MOTOR INSURANCE
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  All-inclusive vehicular security for private cars, two-wheelers, and commercial fleets against accidental damages, theft, and third-party liabilities.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-forest-50 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Zero Depreciation (Bumper-to-Bumper)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>24x7 Roadside Assistance &amp; Towing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Own Damage &amp; Third-Party Protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Hassle-Free Cashless Network Garages</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Motor Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
              </div>
            </div>

            {/* 3. HOME LOANS & MORTGAGE PROTECTION */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Custom Dual-Tone Home Loans & Protection SVG */}
                  <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      {/* Chimney */}
                      <rect x="42" y="16" width="6" height="12" fill="#C88A00" rx="1" />
                      {/* House Body in Deep Forest Green */}
                      <rect x="14" y="28" width="36" height="26" fill="#003F2D" rx="2" />
                      {/* Roof in Gold */}
                      <polygon points="32,8 8,28 56,28" fill="#C88A00" stroke="#B87900" strokeWidth="1.5" />
                      {/* Window */}
                      <rect x="20" y="34" width="8" height="8" fill="#FFFFFF" rx="1" />
                      <line x1="24" y1="34" x2="24" y2="42" stroke="#003F2D" strokeWidth="1" />
                      <line x1="20" y1="38" x2="28" y2="38" stroke="#003F2D" strokeWidth="1" />
                      {/* Protective Shield at Doorway */}
                      <path d="M38 34 C44 34 46 37 46 42 C46 48 38 52 38 52 C38 52 30 48 30 42 C30 37 32 34 38 34 Z" fill="#C88A00" />
                      <path d="M38 36 C42 36 44 38.5 44 42 C44 46.5 38 49.5 38 49.5 C38 49.5 32 46.5 32 42 C32 38.5 34 36 38 36 Z" fill="#F2C14E" />
                      <circle cx="38" cy="41" r="1.5" fill="#003F2D" />
                      <path d="M37 42.5 L39 42.5 L38.5 45.5 H37.5 Z" fill="#003F2D" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-forest-700 mb-1">
                  Property &amp; Credit Shield
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                  HOME LOANS &amp; PROTECTION
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  End-to-end home loan facilitation coupled with mortgage repayment protection and structural coverage to safeguard your family and real estate investment.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-forest-50 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Competitive Home Loan Facilitation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Mortgage Repayment Liability Shield</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Building Structure &amp; Contents Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Natural Calamity &amp; Fire Protection</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Home Loan / Cover</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
              </div>
            </div>

            {/* 4. PROPERTY ALL RISK (PAR) */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Custom Dual-Tone Property All Risk (PAR) SVG */}
                  <div className="w-16 h-16 rounded-xl bg-forest-50 border border-gold-500/40 p-2.5 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      {/* Baseline */}
                      <line x1="8" y1="54" x2="56" y2="54" stroke="#C88A00" strokeWidth="2" strokeLinecap="round" />
                      {/* Industrial Complex in Deep Forest Green */}
                      <rect x="12" y="24" width="22" height="30" fill="#003F2D" rx="2" />
                      <polygon points="12,24 18,18 24,24 30,18 34,24" fill="#C88A00" />
                      {/* Windows */}
                      <rect x="16" y="28" width="4" height="4" fill="#F2C14E" rx="0.5" />
                      <rect x="24" y="28" width="4" height="4" fill="#F2C14E" rx="0.5" />
                      <rect x="16" y="36" width="4" height="4" fill="#F2C14E" rx="0.5" />
                      <rect x="24" y="36" width="4" height="4" fill="#F2C14E" rx="0.5" />
                      <rect x="18" y="44" width="8" height="10" fill="#FBF7F0" rx="1" />
                      {/* High-Rise Commercial Tower */}
                      <rect x="34" y="16" width="18" height="38" fill="#075B42" rx="2" />
                      <rect x="38" y="20" width="3" height="3" fill="#F2C14E" rx="0.5" />
                      <rect x="44" y="20" width="3" height="3" fill="#F2C14E" rx="0.5" />
                      <rect x="38" y="26" width="3" height="3" fill="#F2C14E" rx="0.5" />
                      <rect x="44" y="26" width="3" height="3" fill="#F2C14E" rx="0.5" />
                      {/* PAR Gold Shield */}
                      <path d="M42 30 C50 30 52 35 52 41 C52 48 42 53 42 53 C42 53 32 48 32 41 C32 35 34 30 42 30 Z" fill="#C88A00" stroke="#B87900" strokeWidth="1" />
                      <path d="M42 32 C48 32 50 36 50 41 C50 46.5 42 50.5 42 50.5 C42 50.5 34 46.5 34 41 C34 36 36 32 42 32 Z" fill="#F2C14E" />
                      <path d="M38 41 L41 44 L46 37" stroke="#003F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-forest-700 mb-1">
                  Enterprise &amp; Asset Shield
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                  PROPERTY ALL RISK (PAR)
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  Comprehensive Property All Risk (PAR) insurance safeguarding commercial complexes, warehouses, factories, machinery, and inventory against operational perils.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-forest-50 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Accidental Physical Loss &amp; Damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Plant, Machinery &amp; Inventory Shield</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Fire, Explosion &amp; Allied Perils Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Business Interruption &amp; Profit Protection</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-600/15 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Property All Risk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
              </div>
            </div>

          </div>

          {/* Authoritative Consultation Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white border border-gold-500/40 shadow-card-luxury relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/50 flex items-center justify-center shrink-0 text-gold-400 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Looking for the Right Insurance Policy at the Best Premium?
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 mt-1 max-w-2xl leading-relaxed">
                  Credtree connects you with leading institutional insurance providers in India. Our Business Associate assists with policy comparison, coverage mapping, seamless documentation, and claims support.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto relative z-10 shrink-0">
              <a
                href="/contact"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-forest-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-hover hover:scale-[1.02] transition-all text-center"
              >
                Request Insurance Quote
              </a>
              <a
                href={CONTACT_INFO.links.whatsappChat}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-gold-400" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

