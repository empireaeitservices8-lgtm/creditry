import React from "react";
import SectionHeading from "./SectionHeading";
import { 
  ShieldCheck, 
  Award,
  Landmark,
  Layers,
  UserCheck,
  Handshake
} from "lucide-react";

const WHY_CREDTREE_SIX_POINTS = [
  {
    title: "Experience.",
    description: "More than two decades of industry knowledge and financial expertise.",
    icon: Award,
  },
  {
    title: "Choice.",
    description: "Access to diverse products and solutions through multiple banks and NBFCs.",
    icon: Landmark,
  },
  {
    title: "Convenience.",
    description: "A comprehensive range of financial services available under one roof.",
    icon: Layers,
  },
  {
    title: "Professionalism.",
    description: "A structured and transparent approach to every customer engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Solutions.",
    description: "Financial solutions aligned with individual and business requirements.",
    icon: UserCheck,
  },
  {
    title: "Long-Term Relationships.",
    description: "We believe our relationship with a customer extends beyond a single transaction.",
    icon: Handshake,
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Decorative background growth lines */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-beige to-transparent hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Help"
          subtitle="A structured, transparent pathway designed around your requirements"
        />

        {/* ========================================================
            1. OUR COMMITMENT SECTION
            ======================================================== */}
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-5 sm:p-8 md:p-12 rounded-2xl bg-white border border-beige shadow-card-luxury overflow-hidden text-center">
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-forest-800" />

              {/* Heading */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 tracking-tight">
                OUR COMMITMENT
              </h3>

              {/* Gold Diamond Divider */}
              <div className="flex items-center justify-center gap-2.5 my-4 sm:my-5 max-w-[180px] mx-auto">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige to-gold-700" />
                <span className="w-1.5 h-1.5 rotate-45 bg-gold-700 shadow-sm" />
                <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige to-gold-700" />
              </div>

              {/* Exact content paragraphs */}
              <div className="max-w-3xl mx-auto text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal text-left sm:text-justify italic">
                <p className="![text-align-last:left]">
                  At Credtree Financial Services, we are committed to building lasting relationships through trust, transparency, professional service, and responsible financial facilitation. We continuously strive to stay aligned with the changing financial environment and evolving customer expectations, enabling our clients to make informed financial decisions with greater confidence and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. WHY CREDTREE? SECTION
            ======================================================== */}
        <div className="mt-12 sm:mt-20">
          {/* Main Title & Divider */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-white text-forest-800 border border-beige shadow-sm">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
              <span>Our Strategic Strengths</span>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-700" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 tracking-tight">
              WHY CREDTREE?
            </h3>

            <div className="flex items-center justify-center gap-2.5 my-4 sm:my-5 max-w-[200px] mx-auto">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige to-gold-700" />
              <span className="w-2 h-2 rotate-45 bg-gold-700 shadow-sm" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige to-gold-700" />
            </div>
          </div>

          {/* Six Points Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
            {WHY_CREDTREE_SIX_POINTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-5 sm:p-7 sm:p-8 rounded-2xl bg-white border border-beige shadow-card-luxury hover:border-gold-700 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-800 via-gold-700 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div>
                    {/* Small, dignified icon medallion */}
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7F0] border border-beige flex items-center justify-center text-forest-800 mb-4 sm:mb-5 relative group-hover:border-gold-700/60 transition-colors">
                      <IconComponent className="w-5 h-5 text-forest-800" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-700 border border-white" />
                    </div>

                    {/* Bold label as visual heading */}
                    <h4 className="font-serif text-lg sm:text-xl sm:text-2xl font-bold text-forest-800 mb-2 sm:mb-2.5 group-hover:text-gold-700 transition-colors tracking-tight">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
