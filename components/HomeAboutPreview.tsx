import React from "react";
import SectionHeading from "./SectionHeading";
import { Award, Landmark, ShieldCheck } from "lucide-react";

export default function HomeAboutPreview() {
  const cards = [
    {
      icon: Award,
      title: "20+ Years of Industry Expertise",
      description:
        "Deep understanding of the evolving financial landscape, customer requirements, lending practices, and financial products.",
    },
    {
      icon: Landmark,
      title: "Multiple Banks & NBFCs",
      description:
        "Our extensive institutional network enables us to provide customers with access to a broad range of financial products and solutions.",
    },
    {
      icon: ShieldCheck,
      title: "One Trusted Partner",
      description:
        "Eliminating the complexity of approaching multiple institutions. We focus on understanding individual needs and facilitating appropriate solutions.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-beige">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-forest-50/40 via-gold-50/20 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ABOUT CREDTREE"
          title="Rooted in Experience. Driven by Trust."
        />

        {/* 3 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl bg-white border border-beige shadow-card-luxury hover:border-gold-700/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Subtle Metallic Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800" />

                <div>
                  {/* Luxury Dual-Layer Icon Badge */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF7F0] via-white to-[#FAF7F0] border border-gold-700/30 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-gold-700/60 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7 text-gold-700 group-hover:text-gold-800 transition-colors" />
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-800 mb-3 tracking-tight group-hover:text-forest-900 transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Expanding Gold Divider */}
                  <div className="w-10 h-[2px] bg-gradient-to-r from-gold-700 to-transparent mb-4 group-hover:w-20 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal text-justify">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
