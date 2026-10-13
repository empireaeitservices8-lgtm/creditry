import React from "react";
import SectionHeading from "./SectionHeading";
import { Eye, Target, Landmark, Users, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F0] relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B2C_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-forest-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            SECTION HEADER: BUSINESS OBJECTIVE
            ======================================================== */}
        <SectionHeading title="BUSINESS OBJECTIVE" />

        {/* ========================================================
            OUR VISION & OUR MISSION
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* OUR VISION */}
          <div className="group relative rounded-3xl bg-white border border-beige shadow-card-luxury hover:shadow-card-hover hover:-translate-y-1 hover:border-gold-700/50 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-gold-100/60 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

            <div className="relative p-6 sm:p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-forest-800 flex items-center justify-center shadow-lg shadow-forest-800/20 group-hover:rotate-6 transition-transform duration-300">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-800 tracking-tight">
                    OUR VISION
                  </h2>
                  <div className="mt-2 w-12 h-[2px] bg-gold-700 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-charcoal-700 leading-relaxed text-left sm:text-justify">
                To emerge as a trusted and preferred financial solutions partner, recognized for professional excellence, transparency, accessibility, and customer-centric service.
              </p>
            </div>
          </div>

          {/* OUR MISSION */}
          <div className="group relative rounded-3xl bg-white border border-beige shadow-card-luxury hover:shadow-card-hover hover:-translate-y-1 hover:border-gold-700/50 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-forest-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

            <div className="relative p-6 sm:p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-800 flex items-center justify-center shadow-lg shadow-gold-700/25 group-hover:rotate-6 transition-transform duration-300">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-800 tracking-tight">
                    OUR MISSION
                  </h2>
                  <div className="mt-2 w-12 h-[2px] bg-gold-700 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-charcoal-700 leading-relaxed text-left sm:text-justify">
                Our mission is to make financial services simpler, smarter, and more accessible by offering customers a comprehensive range of solutions through a single trusted platform
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            20+ YEAR & CUSTOMER-CENTRIC APPROACH
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 mt-6 lg:mt-8 items-stretch">
          {/* 20+ Year — dark feature card */}
          <div className="md:col-span-2 group relative rounded-3xl bg-gradient-to-br from-forest-800 via-forest-850 to-forest-950 border border-gold-700/40 shadow-2xl overflow-hidden p-6 sm:p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-gold-400/40" />
            <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-gold-400/40" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-gold-400/30 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-gold-400" />
              </div>

              <div className="font-serif font-black leading-none bg-gradient-to-b from-gold-300 via-gold-500 to-gold-800 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl">
                20+ Year
              </div>
              <div className="mt-4 w-14 h-[2px] bg-gold-500/70 group-hover:w-24 transition-all duration-500" />
            </div>

            <p className="relative mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Our extensive institutional network enables us to provide customers with access to a broad range
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="md:col-span-3 group relative rounded-3xl bg-white border border-beige shadow-card-luxury hover:shadow-card-hover hover:-translate-y-1 hover:border-gold-700/50 transition-all duration-300 overflow-hidden p-6 sm:p-8 sm:p-10">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold-700 via-gold-500 to-forest-800" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF7F0] border border-gold-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-forest-800" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-800 tracking-tight">
                Customer-Centric Approach
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-charcoal-700 leading-relaxed text-left sm:text-justify">
              We believe that every customer has a unique financial requirement. Our approach is therefore focused on understanding individual needs and facilitating appropriate solutions rather than offering a one-size-fits-all product.
            </p>

            <div className="mt-6 pt-5 border-t border-beige flex flex-wrap gap-2 sm:gap-2.5">
              {["Individual Needs", "Appropriate Solutions", "Personal Guidance"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F0] border border-beige text-xs font-semibold text-forest-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-700" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            OUR VALUE PROPOSITION
            ======================================================== */}
        <div className="mt-12 sm:mt-16 rounded-[2rem] bg-forest-800 border border-gold-700/50 p-6 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ECCF76_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-700/15 blur-3xl pointer-events-none rounded-full" />

          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-gold-400/40 rounded-tl-lg" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-gold-400/40 rounded-tr-lg" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-gold-400/40 rounded-bl-lg" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-gold-400/40 rounded-br-lg" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-700/15 border border-gold-400/30 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gold-300 mb-6">
              OUR VALUE PROPOSITION
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.25]">
              Multiple Institutions. Multiple Products.{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                One Trusted Partner.
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3 my-6 sm:my-8 max-w-xs mx-auto">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/60" />
              <span className="w-2 h-2 rotate-45 bg-gold-500" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/60" />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Credtree eliminates the complexity of approaching multiple institutions for different financial requirements. Through our multi-institutional network and comprehensive product portfolio, customers can explore suitable options through a single point of contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
