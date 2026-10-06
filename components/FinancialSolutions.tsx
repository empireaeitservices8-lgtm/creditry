import React from "react";
import SectionHeading from "./SectionHeading";
import { BROADER_SERVICES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function FinancialSolutions() {
  return (
    <section id="solutions" className="py-20 sm:py-24 bg-ivory relative overflow-hidden">
      {/* Decorative hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Explore Our Financial Solutions"
          subtitle="A comprehensive spectrum of credit facilitation and wealth distribution services"
        />

        {/* 9 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BROADER_SERVICES.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-xl bg-white border border-gold-600/20 shadow-sm hover:border-gold-600/60 hover:shadow-card-luxury transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-end mb-3">
                  <span className="font-serif text-xs font-bold text-charcoal-400 group-hover:text-forest-800 transition-colors">
                    #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-forest-50 flex items-center justify-between">
                <a
                  href="/contact"
                  className="text-xs font-semibold text-forest-800 group-hover:text-gold-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Enquire Option</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="w-1.5 h-1.5 rotate-45 bg-gold-500/40 group-hover:bg-gold-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Informative Guidance Footer */}
        <div className="mt-10 p-6 rounded-xl bg-forest-50/70 border border-gold-600/20 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <span className="font-semibold text-forest-900">Personalized Solution Mapping: </span>
            Our Business Associate works closely with you to examine requirements across this full
            range of financial solutions, ensuring you receive clear guidance on institutional
            processes and documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
