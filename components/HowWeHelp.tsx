import React from "react";
import SectionHeading from "./SectionHeading";
import { HOW_WE_HELP_STEPS } from "@/lib/constants";
import { Sparkles, Compass, ShieldCheck, Sprout } from "lucide-react";

export default function HowWeHelp() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <Sparkles className="w-5 h-5" />;
      case 2:
        return <ShieldCheck className="w-5 h-5" />;
      case 3:
        return <Sprout className="w-5 h-5" />;
      default:
        return <Sprout className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory-light relative overflow-hidden">
      {/* Decorative background growth lines */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold-600/20 to-transparent hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Help"
          subtitle="A structured, transparent pathway designed around your requirements"
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_WE_HELP_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col p-7 rounded-xl bg-white border border-gold-600/30 shadow-card-luxury group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step Number with Tree Growth Node */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <span className="w-12 h-12 rounded-full bg-forest-800 text-gold-400 font-serif font-bold text-lg flex items-center justify-center border border-gold-500/40 shadow-sm group-hover:bg-gold-700 group-hover:text-ivory transition-colors">
                    {step.step}
                  </span>
                  {/* Subtle root anchor dot */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-600" />
                </div>

                <div className="p-2 rounded-lg bg-forest-50 text-forest-800 group-hover:bg-forest-100 transition-colors">
                  {getStepIcon(index)}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-forest-900 group-hover:text-forest-800 transition-colors tracking-tight">
                {step.title}
              </h3>

              {/* Exact Description from Prompt */}
              <p className="mt-3 text-sm text-forest-800 font-medium leading-snug">
                &ldquo;{step.description}&rdquo;
              </p>

              {/* Factual Contextual Detail */}
              <p className="mt-2 text-xs text-charcoal-600 leading-relaxed font-normal">
                {step.detail}
              </p>

              {/* Tree Canopy Branch Motif on Hover */}
              <div className="mt-6 pt-4 border-t border-gold-600/10 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-700">
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
                <span>Stage {index + 1} Progression</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Process Note */}
        <div className="mt-12 p-4 rounded-xl bg-forest-50/80 border border-forest-100 text-center max-w-2xl mx-auto">
          <p className="text-xs text-charcoal-600 leading-relaxed">
            * Process descriptions outline our procedural consultation methodology and do not
            constitute approval guarantees or predetermined financial outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
