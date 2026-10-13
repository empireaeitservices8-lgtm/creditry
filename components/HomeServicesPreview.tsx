import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

const PREVIEW_SERVICES = [
  {
    id: "home-loan",
    title: "HOME LOAN",
    image: "/images/home-loan.png",
  },
  {
    id: "loan-against-property",
    title: "LOAN AGAINST PROPERTY",
    image: "/images/loan-against-property.png",
  },
  {
    id: "insurance",
    title: "INSURANCE",
    image: "/images/general-insurance.png",
  },
  {
    id: "business-loan",
    title: "BUSINESS LOAN",
    image: "/images/business-loan.png",
  },
  {
    id: "wealth-management",
    title: "WEALTH MANAGEMENT",
    image: "/images/wealth-management.png",
  },
];

export default function HomeServicesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-beige">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B2C_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="OUR FINANCIAL SERVICES"
          title="Simplifying Loans, Insurance & Investments"
          className="!max-w-5xl"
          titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] whitespace-normal md:whitespace-nowrap"
        />

        {/* Minimal Cards Grid: Only Image & Name */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6 mt-8 sm:mt-10">
          {PREVIEW_SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href="/services"
              className="group p-3.5 sm:p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/60 hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-full h-28 sm:h-36 rounded-xl bg-[#FAF7F0] border border-beige p-2 sm:p-2.5 flex items-center justify-center overflow-hidden mb-3 sm:mb-4 group-hover:border-gold-700/60 transition-colors">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Service Name */}
              <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-forest-800 tracking-tight leading-snug group-hover:text-gold-700 transition-colors">
                {srv.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA Button Under These Cards */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-forest-800 text-white font-semibold text-sm shadow-md hover:bg-forest-900 border border-gold-700/40 transition-all duration-200 group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
