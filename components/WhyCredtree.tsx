import React from "react";
import SectionHeading from "./SectionHeading";
import { WHY_CREDTREE_POINTS } from "@/lib/constants";
import { Layers, UserCheck, TrendingUp, ShieldCheck, Check } from "lucide-react";

export default function WhyCredtree() {
  const getPointIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-gold-500" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-gold-500" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-gold-500" />;
      case "Shield":
        return <ShieldCheck className="w-6 h-6 text-gold-500" />;
      default:
        return <Layers className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="why-credtree" className="py-20 sm:py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Why Credtree?"
          subtitle="Grounded in institutional diligence, direct accountability, and long-term financial thinking"
        />

        {/* 4 Factual Positioning Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_CREDTREE_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="p-8 rounded-2xl bg-white border border-gold-600/25 shadow-card-luxury hover:border-gold-600/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center border border-gold-500/30">
                    {getPointIcon(point.icon)}
                  </div>
                  <span className="font-serif text-xs font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 uppercase tracking-wider">
                    Core Pillar
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 tracking-tight">
                  {point.title}
                </h3>

                <p className="mt-3 text-base text-charcoal-700 leading-relaxed">
                  &ldquo;{point.description}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-50 flex items-center gap-2 text-xs text-forest-800 font-medium">
                <Check className="w-4 h-4 text-gold-600 shrink-0" />
                <span>
                  {index === 0 && "Facilitation across credit, risk coverage, and capital planning."}
                  {index === 1 && "Dedicated guidance and consultation for your financial enquiries."}
                  {index === 2 && "Structured roadmaps tailored around financial milestones."}
                  {index === 3 && "Integrated protection solutions designed to mitigate vulnerabilities."}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
