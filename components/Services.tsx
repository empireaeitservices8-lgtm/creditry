import React from "react";
import { PRIMARY_SERVICES, CONTACT_INFO } from "@/lib/constants";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight,
  Award,
  Landmark,
  Layers,
  Sparkles,
  Home,
  Briefcase,
  Building2,
  Car,
  CreditCard,
  TrendingUp
} from "lucide-react";

const PORTFOLIO_PRODUCTS = [
  { label: "Home & Property Loans", icon: Home },
  { label: "Personal & Business Loans", icon: Briefcase },
  { label: "MSME & Commercial Finance", icon: Building2 },
  { label: "Loan Against Property", icon: Landmark },
  { label: "Vehicle & Other Secured Financing", icon: Car },
  { label: "Insurance Solutions", icon: ShieldCheck },
  { label: "Credit Cards", icon: CreditCard },
  { label: "Mutual Funds & Investment Solutions", icon: TrendingUp },
  { label: "Other Customized Financial Solutions", icon: Sparkles },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B2C_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-white text-forest-800 border border-beige shadow-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            <span>Our Financial Services</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-forest-800">Simplifying Loans, </span>
            <span className="text-gold-700">Insurance &amp; Investments</span>
          </h2>

          {/* Gold Diamond Divider */}
          <div className="flex items-center justify-center gap-2.5 my-4 sm:my-5 max-w-[220px] mx-auto">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige to-gold-700" />
            <span className="w-2 h-2 rotate-45 bg-gold-700 shadow-sm" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige to-gold-700" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-charcoal-700 leading-relaxed font-normal max-w-3xl mx-auto">
            Quick and easy solutions for loans, insurance, investment and credit cards of multiple banks and NBFC&apos;s. One stop solutions for all your financial needs.
          </p>
        </div>

        {/* ========================================================
            OUR CORE STRENGTH SECTION
            ======================================================== */}
        <div className="mt-8 sm:mt-10 mb-16 sm:mb-20 max-w-6xl mx-auto">
          {/* Main Title & Divider */}
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 tracking-tight">
              OUR CORE STRENGTH
            </h3>
            <div className="flex items-center justify-center gap-2.5 mt-3.5 max-w-[180px] mx-auto">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige to-gold-700" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige to-gold-700" />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Top 2 Symmetric Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* 1. 20+ Years of Industry Expertise */}
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-white border border-beige shadow-card-luxury flex flex-col justify-between relative overflow-hidden group hover:border-gold-700/70 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-transparent" />
                <div>
                  {/* Elegant Icon Medallion: Deep green icon with subtle gold detail */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-beige flex items-center justify-center relative mb-5 shadow-xs group-hover:border-gold-700/50 transition-colors">
                    <Award className="w-6 h-6 text-forest-800" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-700 border-2 border-white" />
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-800 mb-3 tracking-tight group-hover:text-forest-900 transition-colors">
                    20+ Years of Industry Expertise
                  </h4>
                  <div className="w-12 h-[1.5px] bg-gold-700/50 mb-4" />
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    Our experience gives us a strong understanding of the evolving financial landscape, customer requirements, lending practices, and financial products.
                  </p>
                </div>
              </div>

              {/* 2. Multiple Banks & NBFCs */}
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-white border border-beige shadow-card-luxury flex flex-col justify-between relative overflow-hidden group hover:border-gold-700/70 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-transparent" />
                <div>
                  {/* Elegant Icon Medallion: Deep green icon with subtle gold detail */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-beige flex items-center justify-center relative mb-5 shadow-xs group-hover:border-gold-700/50 transition-colors">
                    <Landmark className="w-6 h-6 text-forest-800" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-700 border-2 border-white" />
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-800 mb-3 tracking-tight group-hover:text-forest-900 transition-colors">
                    Multiple Banks &amp; NBFCs
                  </h4>
                  <div className="w-12 h-[1.5px] bg-gold-700/50 mb-4" />
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    Our extensive institutional network enables us to provide customers with access to a broad range of financial products and solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width: Comprehensive Financial Portfolio */}
            <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-beige shadow-card-luxury relative overflow-hidden group hover:border-gold-700/70 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-2.5 tracking-tight">
                  Comprehensive Financial Portfolio
                </h4>
                <div className="w-16 h-[1.5px] bg-gold-700/50 mb-3.5" />
                <p className="text-sm sm:text-base md:text-lg text-charcoal-700 leading-relaxed font-normal mb-6 sm:mb-8">
                  We bring multiple financial solutions together under one roof, including:
                </p>

                {/* 9 Requirements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {PORTFOLIO_PRODUCTS.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group/item flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#FAF7F0] border border-beige hover:border-gold-700/70 hover:bg-white hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-gold-700/30 flex items-center justify-center text-gold-700 shrink-0 group-hover/item:border-gold-700 group-hover/item:bg-gold-700 group-hover/item:text-white transition-all duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm sm:text-[15px] font-semibold text-forest-800 leading-snug tracking-tight">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading for 5 Primary Widgets */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-800 tracking-tight">
            Our Primary Service Solutions
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Explore our curated financial avenues and request direct institutional guidance.
          </p>
        </div>

        {/* 5 Cards Grid with User Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
          
          {/* 1. HOME LOAN */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Home Loan Image Container */}
              <div className="w-full h-36 sm:h-40 rounded-xl bg-[#FAF7F0] border border-beige p-2.5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-gold-700/60 transition-colors">
                <img
                  src="/images/home-loan.png"
                  alt="Home Loan"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-[#FAF7F0] border border-beige">
                Trusted Home Finance
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                HOME LOAN
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                Purchase of land, purchase of house, purchase of land + house, Home improvement / Renovation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="/contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>
          </div>

          {/* 2. LOAN AGAINST PROPERTY */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Loan Against Property Image Container */}
              <div className="w-full h-36 sm:h-40 rounded-xl bg-[#FAF7F0] border border-beige p-2.5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-gold-700/60 transition-colors">
                <img
                  src="/images/loan-against-property.png"
                  alt="Loan Against Property"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-[#FAF7F0] border border-beige">
                Asset Monetization
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                LOAN AGAINST PROPERTY
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                Pledging commercial, residential, or industrial property for substantial fundraising and liquidity.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="/contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>
          </div>

          {/* 3. GENERAL INSURANCE */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* General Insurance Image Container */}
              <div className="w-full h-36 sm:h-40 rounded-xl bg-[#FAF7F0] border border-beige p-2.5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-gold-700/60 transition-colors">
                <img
                  src="/images/general-insurance.png"
                  alt="General Insurance"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-[#FAF7F0] border border-beige">
                Multi-Risk Shield
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                GENERAL INSURANCE
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                All classes of health, motor, property, and asset insurance protecting your family and enterprises.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="#insurance-solutions" className="inline-flex items-center gap-1.5">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>
          </div>

          {/* 4. BUSINESS LOAN */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Business Loan Image Container */}
              <div className="w-full h-36 sm:h-40 rounded-xl bg-[#FAF7F0] border border-beige p-2.5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-gold-700/60 transition-colors">
                <img
                  src="/images/business-loan.png"
                  alt="Business Loan"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-[#FAF7F0] border border-beige">
                Enterprise Growth
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                BUSINESS LOAN
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                Working capital, commercial credit, MSME and expansion funding designed for enterprise scaling.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="/contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>
          </div>

          {/* 5. WEALTH MANAGEMENT */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* Wealth Management Image Container */}
              <div className="w-full h-36 sm:h-40 rounded-xl bg-[#FAF7F0] border border-beige p-2.5 flex items-center justify-center overflow-hidden mb-5 group-hover:border-gold-700/60 transition-colors">
                <img
                  src="/images/wealth-management.png"
                  alt="Wealth Management"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 mb-3 rounded text-[11px] font-semibold tracking-wider uppercase text-gold-800 bg-[#FAF7F0] border border-beige">
                Long-Term Growth
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                WEALTH MANAGEMENT
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                Disciplined wealth advisory, mutual funds, and portfolio planning focused on milestones.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
              <a href="/contact" className="inline-flex items-center gap-1.5">
                <span>Request Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* DEDICATED HIGHLIGHT: ALL INSURANCE SOLUTIONS UNDER ONE ROOF */}
        {/* ======================================================== */}
        <div id="insurance-solutions" className="mt-24 pt-16 border-t border-beige scroll-mt-24">
          
          {/* Section Header with exact requested class and wording */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Heading class 'all-insurance-solutions-in-one-roof' as requested */}
            <h3 className="all-insurance-solutions-in-one-roof font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-800">
              <span>All Class of Insurance Solutions </span>
              <span className="text-gold-700">Under One Roof</span>
            </h3>

            {/* Gold Diamond Divider */}
            <div className="flex items-center justify-center gap-2.5 my-5 max-w-[220px] mx-auto">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige to-gold-700" />
              <span className="w-2 h-2 rotate-45 bg-gold-700 shadow-sm" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige to-gold-700" />
            </div>
          </div>

          {/* 3 Cards Grid - Health Insurance, Motor Insurance, Property Insurance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. HEALTH INSURANCE */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Luxury Unified Health Insurance Badge Widget */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FAF7F0] via-white to-[#F5EEDB] border border-gold-700/30 p-2 sm:p-2.5 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-gold-700/70 group-hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 64 64" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(6,67,51,0.18)]" fill="none">
                      <defs>
                        <linearGradient id="healthGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F3D88C" />
                          <stop offset="50%" stopColor="#C89B2C" />
                          <stop offset="100%" stopColor="#99731B" />
                        </linearGradient>
                        <linearGradient id="healthGradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0B5341" />
                          <stop offset="100%" stopColor="#064333" />
                        </linearGradient>
                      </defs>
                      {/* Master Matching Luxury Shield Silhouette */}
                      <path
                        d="M32 4.5 C47.5 4.5 53.5 12.5 53.5 27 C53.5 42.5 32 57.5 32 57.5 C32 57.5 10.5 42.5 10.5 27 C10.5 12.5 16.5 4.5 32 4.5 Z"
                        fill="url(#healthGradGreen)"
                        stroke="url(#healthGradGold)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      {/* Inner Gold Contour Inset */}
                      <path
                        d="M32 7.5 C44.5 7.5 49.5 14.5 49.5 27 C49.5 39.5 32 52.5 32 52.5 C32 52.5 14.5 39.5 14.5 27 C14.5 14.5 19.5 7.5 32 7.5 Z"
                        fill="none"
                        stroke="#ECCF76"
                        strokeWidth="0.8"
                        strokeOpacity="0.4"
                      />
                      {/* Crown Diamond Accent */}
                      <path d="M32 9.5 L33.5 11 L32 12.5 L30.5 11 Z" fill="#ECCF76" />
                      {/* Medical Cross in Radiant Gold */}
                      <rect x="28.5" y="16.5" width="7" height="21" rx="1.5" fill="#ECCF76" />
                      <rect x="21.5" y="23.5" width="21" height="7" rx="1.5" fill="#ECCF76" />
                      {/* Heartbeat Pulse Line in Pure White */}
                      <path
                        d="M17 27 H23.5 L26 20.5 L30 33.5 L33.5 24 L36 29 L39 27 H47"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Protective Baseline Arc */}
                      <path
                        d="M23 43 C28 46 36 46 41 43"
                        stroke="#ECCF76"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-800 mb-1">
                  Family &amp; Medical Protection
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                  HEALTH INSURANCE
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  Comprehensive hospitalization coverage safeguarding your family against escalating medical costs with leading cashless hospital networks.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-beige pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Cashless Hospitalization Network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Individual &amp; Family Floater Plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Critical Illness &amp; Day-Care Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Tax Savings under Section 80D</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Health Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
              </div>
            </div>

            {/* 2. MOTOR INSURANCE */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Luxury Unified Motor Insurance Badge Widget */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FAF7F0] via-white to-[#F5EEDB] border border-gold-700/30 p-2 sm:p-2.5 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-gold-700/70 group-hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 64 64" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(6,67,51,0.18)]" fill="none">
                      <defs>
                        <linearGradient id="motorGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F3D88C" />
                          <stop offset="50%" stopColor="#C89B2C" />
                          <stop offset="100%" stopColor="#99731B" />
                        </linearGradient>
                        <linearGradient id="motorGradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0B5341" />
                          <stop offset="100%" stopColor="#064333" />
                        </linearGradient>
                      </defs>
                      {/* Master Matching Luxury Shield Silhouette */}
                      <path
                        d="M32 4.5 C47.5 4.5 53.5 12.5 53.5 27 C53.5 42.5 32 57.5 32 57.5 C32 57.5 10.5 42.5 10.5 27 C10.5 12.5 16.5 4.5 32 4.5 Z"
                        fill="url(#motorGradGreen)"
                        stroke="url(#motorGradGold)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      {/* Inner Gold Contour Inset */}
                      <path
                        d="M32 7.5 C44.5 7.5 49.5 14.5 49.5 27 C49.5 39.5 32 52.5 32 52.5 C32 52.5 14.5 39.5 14.5 27 C14.5 14.5 19.5 7.5 32 7.5 Z"
                        fill="none"
                        stroke="#ECCF76"
                        strokeWidth="0.8"
                        strokeOpacity="0.4"
                      />
                      {/* Crown Diamond Accent */}
                      <path d="M32 9.5 L33.5 11 L32 12.5 L30.5 11 Z" fill="#ECCF76" />
                      {/* Luxury Vehicle Cabin Roof & Windshield */}
                      <path
                        d="M25 21 C26.5 17.5 28.5 16.5 32 16.5 C35.5 16.5 37.5 17.5 39 21 L42.5 26.5 H21.5 Z"
                        fill="#ECCF76"
                      />
                      {/* Windshield Glass Inset */}
                      <path
                        d="M26 21.5 L27.5 18.5 C28.5 17.5 30 17 32 17 C34 17 35.5 17.5 36.5 18.5 L38 21.5 Z"
                        fill="#064333"
                      />
                      {/* Vehicle Body in Polished Gold */}
                      <path
                        d="M19 27 C19 25.5 21 25 23 25 H41 C43 25 45 25.5 45 27 L45.5 34 C45.5 35.5 44 36.5 42 36.5 H22 C20 36.5 18.5 35.5 18.5 34 Z"
                        fill="#ECCF76"
                      />
                      {/* Dual Bright Headlights in White */}
                      <rect x="20.5" y="28" width="4.5" height="2.5" rx="1" fill="#FFFFFF" />
                      <rect x="39" y="28" width="4.5" height="2.5" rx="1" fill="#FFFFFF" />
                      {/* Chrome Center Grille */}
                      <rect x="27.5" y="28" width="9" height="5" rx="1" fill="#064333" stroke="#ECCF76" strokeWidth="0.8" />
                      <line x1="29" y1="30.5" x2="35" y2="30.5" stroke="#ECCF76" strokeWidth="0.8" />
                      {/* Lower Bumper Accent */}
                      <rect x="22" y="34.5" width="20" height="2" rx="0.8" fill="#C89B2C" />
                      {/* Road Ground Wheels */}
                      <rect x="20" y="36.5" width="3.5" height="3" rx="1" fill="#FFFFFF" fillOpacity="0.85" />
                      <rect x="40.5" y="36.5" width="3.5" height="3" rx="1" fill="#FFFFFF" fillOpacity="0.85" />
                      {/* Road Guidance Horizon Line */}
                      <line x1="16" y1="41" x2="48" y2="41" stroke="#ECCF76" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-800 mb-1">
                  Vehicle &amp; Liability Cover
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                  MOTOR INSURANCE
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  All-inclusive vehicular security for private cars, two-wheelers, and commercial fleets against accidental damages, theft, and third-party liabilities.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-beige pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Zero Depreciation (Bumper-to-Bumper)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>24x7 Roadside Assistance &amp; Towing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Own Damage &amp; Third-Party Protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Hassle-Free Cashless Network Garages</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Motor Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
              </div>
            </div>

            {/* 3. PROPERTY INSURANCE (PAR) */}
            <div className="group relative flex flex-col justify-between p-7 rounded-xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="mb-5">
                  {/* Luxury Unified Property All Risk Badge Widget */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FAF7F0] via-white to-[#F5EEDB] border border-gold-700/30 p-2 sm:p-2.5 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-gold-700/70 group-hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 64 64" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(6,67,51,0.18)]" fill="none">
                      <defs>
                        <linearGradient id="propertyGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F3D88C" />
                          <stop offset="50%" stopColor="#C89B2C" />
                          <stop offset="100%" stopColor="#99731B" />
                        </linearGradient>
                        <linearGradient id="propertyGradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0B5341" />
                          <stop offset="100%" stopColor="#064333" />
                        </linearGradient>
                      </defs>
                      {/* Master Matching Luxury Shield Silhouette */}
                      <path
                        d="M32 4.5 C47.5 4.5 53.5 12.5 53.5 27 C53.5 42.5 32 57.5 32 57.5 C32 57.5 10.5 42.5 10.5 27 C10.5 12.5 16.5 4.5 32 4.5 Z"
                        fill="url(#propertyGradGreen)"
                        stroke="url(#propertyGradGold)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      {/* Inner Gold Contour Inset */}
                      <path
                        d="M32 7.5 C44.5 7.5 49.5 14.5 49.5 27 C49.5 39.5 32 52.5 32 52.5 C32 52.5 14.5 39.5 14.5 27 C14.5 14.5 19.5 7.5 32 7.5 Z"
                        fill="none"
                        stroke="#ECCF76"
                        strokeWidth="0.8"
                        strokeOpacity="0.4"
                      />
                      {/* Crown Diamond Accent */}
                      <path d="M32 9.5 L33.5 11 L32 12.5 L30.5 11 Z" fill="#ECCF76" />
                      
                      {/* Commercial High-Rise Enterprise Tower (Right) */}
                      <rect x="33" y="16" width="12" height="24" rx="1" fill="#ECCF76" />
                      {/* Tower Spire */}
                      <line x1="39" y1="13" x2="39" y2="16" stroke="#ECCF76" strokeWidth="1.2" strokeLinecap="round" />
                      {/* Windows Grid on Tower */}
                      <rect x="35.5" y="19" width="2.5" height="2" rx="0.4" fill="#064333" />
                      <rect x="39.5" y="19" width="2.5" height="2" rx="0.4" fill="#064333" />
                      <rect x="35.5" y="23" width="2.5" height="2" rx="0.4" fill="#064333" />
                      <rect x="39.5" y="23" width="2.5" height="2" rx="0.4" fill="#064333" />
                      <rect x="35.5" y="27" width="2.5" height="2" rx="0.4" fill="#064333" />
                      <rect x="39.5" y="27" width="2.5" height="2" rx="0.4" fill="#064333" />

                      {/* Residential Real Estate House (Left) */}
                      <rect x="18" y="26" width="15" height="14" rx="1" fill="#ECCF76" />
                      <polygon points="25.5,18 16,26.5 35,26.5" fill="#C89B2C" stroke="#ECCF76" strokeWidth="0.8" />
                      <rect x="29" y="19.5" width="2.5" height="4" fill="#C89B2C" />
                      {/* House Door & Window */}
                      <rect x="23.5" y="33" width="4" height="7" rx="0.6" fill="#064333" />
                      <rect x="19.5" y="28" width="3.5" height="3" rx="0.5" fill="#064333" />

                      {/* Ground Foundation Line */}
                      <line x1="16" y1="41" x2="48" y2="41" stroke="#ECCF76" strokeWidth="1" strokeLinecap="round" />

                      {/* Floating Verified Protection Checkmark Medallion */}
                      <circle cx="32" cy="45" r="4.5" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1" />
                      <path d="M30 45 L31.5 46.5 L34 43.5" stroke="#064333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-800 mb-1">
                  Enterprise &amp; Asset Shield
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors">
                  PROPERTY ALL RISK (PAR)
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  Comprehensive Property All Risk (PAR) insurance safeguarding commercial complexes, warehouses, factories, machinery, and inventory against operational perils.
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-charcoal-700 border-t border-beige pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Accidental Physical Loss &amp; Damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Plant, Machinery &amp; Inventory Shield</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Fire, Explosion &amp; Allied Perils Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Business Interruption &amp; Profit Protection</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                <a href="/contact" className="inline-flex items-center gap-1.5">
                  <span>Enquire Property All Risk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
              </div>
            </div>

          </div>

          {/* Authoritative Consultation Banner */}
          <div className="mt-12 p-5 sm:p-8 rounded-2xl bg-forest-800 text-white border border-gold-700/50 shadow-card-luxury relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold-700/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-start sm:items-center gap-4 relative z-10 w-full lg:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-gold-700/40 flex items-center justify-center shrink-0 text-gold-400 shadow-sm">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white leading-snug">
                  Looking for the Right Insurance Policy at the Best Premium?
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-2xl leading-relaxed">
                  Credtree connects you with leading institutional insurance providers in India. Our Business Associate assists with policy comparison, coverage mapping, seamless documentation, and claims support.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
              <a
                href="/contact"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gold-700 hover:bg-gold-600 text-forest-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-hover hover:scale-[1.02] transition-all text-center"
              >
                Request Insurance Quote
              </a>
              <a
                href={CONTACT_INFO.links.whatsappChat}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-white inline-flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all shrink-0"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden="true">
                  <path d="M16.004 3C9.374 3 3.99 8.383 3.99 15.012c0 2.12.554 4.19 1.607 6.015L3.89 27.5l6.63-1.674a11.96 11.96 0 0 0 5.48 1.33h.005c6.628 0 12.012-5.383 12.012-12.012C28.016 8.383 22.632 3 16.004 3Zm0 21.97h-.004a9.95 9.95 0 0 1-5.07-1.39l-.364-.216-3.935.993 1.05-3.836-.237-.394a9.93 9.93 0 0 1-1.523-5.115c0-5.5 4.477-9.977 9.987-9.977 2.666 0 5.17 1.04 7.054 2.925a9.91 9.91 0 0 1 2.92 7.06c-.003 5.5-4.48 9.95-9.878 9.95Zm5.474-7.455c-.3-.15-1.774-.875-2.05-.975-.274-.1-.474-.15-.674.15-.2.3-.774.975-.95 1.175-.174.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.487-.89-.794-1.492-1.775-1.667-2.075-.174-.3-.018-.462.132-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.243-.584-.49-.505-.674-.514l-.574-.01c-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5 0 1.474 1.075 2.9 1.225 3.1.15.2 2.116 3.232 5.126 4.532.716.31 1.275.494 1.71.633.719.228 1.373.196 1.89.119.577-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

