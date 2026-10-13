import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { 
  Home, 
  Building2, 
  Wallet, 
  Briefcase, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "homeloan",
    title: "HOMELOAN",
    icon: Home,
  },
  {
    id: "loan-against-property",
    title: "LOAN AGAINST PROPERTY",
    icon: Building2,
  },
  {
    id: "personal-loan",
    title: "PERSONAL LOAN",
    icon: Wallet,
  },
  {
    id: "business-loan",
    title: "BUSINESS LOAN",
    icon: Briefcase,
  },
  {
    id: "credit-cards",
    title: "CREDIT CARDS",
    icon: CreditCard,
  },
  {
    id: "insurance",
    title: "INSURANCE",
    icon: ShieldCheck,
  },
  {
    id: "wealth-investment-management",
    title: "WEALTH / INVESTMENT MANAGEMENT",
    icon: TrendingUp,
  },
];

export default function HomeSolutionsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FINANCIAL SOLUTIONS"
          title="Explore Our Financial Solutions Spectrum"
          className="!max-w-5xl"
          titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] whitespace-normal md:whitespace-nowrap"
        />

        {/* All 7 Solutions Cards: Accurate Logo + Name Only */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href="/solutions"
                className="w-[calc(50%-6px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-[280px] p-4 sm:p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Accurate Logo Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF7F0] border border-beige flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:border-gold-700/40 transition-all">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-forest-800 group-hover:text-gold-700 transition-colors" />
                </div>

                {/* Solution Name */}
                <h3 className="font-serif text-xs sm:text-sm sm:text-base font-bold text-forest-800 tracking-tight leading-snug group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* CTA Button Under The Cards */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-forest-800 text-white font-semibold text-sm shadow-md hover:bg-forest-900 border border-gold-700/40 transition-all duration-200 group"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
