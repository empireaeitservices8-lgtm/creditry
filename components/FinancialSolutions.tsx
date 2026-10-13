import React from "react";
import SectionHeading from "./SectionHeading";
import { BROADER_SERVICES } from "@/lib/constants";
import { 
  Home, 
  Building2, 
  Wallet, 
  Briefcase, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function FinancialSolutions() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-6 h-6" />;
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      case "Wallet":
        return <Wallet className="w-6 h-6" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="solutions" className="py-10 sm:py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-forest-50/40 via-gold-50/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-beige to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Explore Our Financial Solutions"
          subtitle="A comprehensive spectrum of credit facilitation and wealth distribution services"
        />

        {/* 7 Solutions Grid in Specified Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {BROADER_SERVICES.map((item, index) => {
            const isFlagship = index === 6; // WEALTH/ INVESTMENT MANAGEMENT as master highlight

            if (isFlagship) {
              return (
                <div
                  key={item.id}
                  className="md:col-span-2 lg:col-span-3 rounded-2xl sm:rounded-3xl bg-forest-800 border-2 border-gold-700/60 shadow-card-luxury p-5 sm:p-8 md:p-12 text-white relative overflow-hidden group hover:border-gold-700 transition-all duration-300"
                >
                  {/* Ambient inner glow */}
                  <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-700/10 blur-3xl pointer-events-none rounded-full" />

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 border border-gold-700/40 p-3.5 flex items-center justify-center text-gold-400 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {getServiceIcon(item.icon)}
                      </div>

                      <div>
                        {item.category ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-700/20 border border-gold-700/40 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                            <span>{item.category}</span>
                          </div>
                        ) : null}

                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-2xl text-justify">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gold-700 hover:bg-gold-600 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      <span>Enquire Option</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="group relative p-5 sm:p-7 md:p-8 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Icon Medallion */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-forest-800 border border-gold-700/40 p-2.5 sm:p-3 flex items-center justify-center text-gold-400 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {getServiceIcon(item.icon)}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F0] border border-beige text-[10px] font-bold uppercase tracking-[0.2em] text-gold-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-700" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-forest-800 group-hover:text-gold-700 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <div className="w-10 h-[1.5px] bg-gold-700/40 my-3" />

                  {/* Detail */}
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal text-justify">
                    {item.detail}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-beige flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-700 transition-colors">
                  <a href="/contact" className="inline-flex items-center gap-1.5">
                    <span>Enquire Option</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-700 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Guidance Footer */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-2xl bg-white border border-beige shadow-card-luxury text-justify max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-beige flex items-center justify-center text-forest-800 shrink-0">
            <Sparkles className="w-6 h-6 text-gold-700" />
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed text-justify">
            <span className="font-semibold text-forest-800">Personalized Solution Mapping: </span>
            Our Business Associate works closely with you to examine requirements across this full range of financial solutions, ensuring you receive clear guidance on institutional processes and documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
