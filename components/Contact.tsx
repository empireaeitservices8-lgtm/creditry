import React from "react";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-beige to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Direct Consultation"
          title="Let's Talk About Your Financial Needs"
          subtitle="Connect with Credtree Financial Services to explore loans, insurance, investments and wealth management services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Business Associate Card */}
          <div className="lg:col-span-6 space-y-4">

            {/* Official Business Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-luxury border border-beige hover:border-gold-700 hover:shadow-card-hover transition-all duration-300 bg-white">
              <img
                src="/business-card.png"
                alt="Credtree Financial Services Official Business Card"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Factual Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-beige shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-800 shrink-0" />
                <span className="text-xs font-semibold text-forest-800">Direct Associate Contact</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-beige shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-800 shrink-0" />
                <span className="text-xs font-semibold text-forest-800">Official Kannur Presence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
