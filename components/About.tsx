import React from "react";
import SectionHeading from "./SectionHeading";
import GoldDivider from "./GoldDivider";
import Logo from "./Logo";
import { Shield, Layers, Phone, Mail, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { CONTACT_PERSON, CONTACT_INFO } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-ivory relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="About Our Facilitation"
          title="Financial Solutions Built Around Your Goals"
          subtitle="Where Credit Meets Growth & Security"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Reproduction of the Official Business Card */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 block">
                Official Business Associate Card
              </span>

              {/* Physical Business Card Mockup */}
              <div className="relative rounded-2xl bg-[#FFFDF9] border border-gold-600/40 shadow-card-luxury p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-card-hover group">
                
                {/* Signature Bottom-Right Dark Green Swoosh Wave with Double Gold Trim (as seen on the business card) */}
                <div className="absolute -bottom-8 -right-8 w-48 sm:w-56 h-48 sm:h-56 pointer-events-none overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                    {/* Dark Green Curved Wave */}
                    <path
                      d="M 50 200 C 60 140 120 100 200 80 L 200 200 Z"
                      fill="#002D22"
                    />
                    {/* Metallic Gold Border Curve */}
                    <path
                      d="M 48 200 C 58 138 118 98 200 78"
                      stroke="#C88A00"
                      strokeWidth="5"
                    />
                    <path
                      d="M 52 200 C 62 144 122 104 200 84"
                      stroke="#F2C14E"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Half: Logo & Tagline */}
                  <div className="sm:col-span-5 flex flex-col items-start justify-center">
                    <Logo variant="compact" size="md" />
                    <p className="font-serif italic text-[11px] text-forest-800 font-semibold mt-3 leading-snug">
                      Where Credit Meets Growth &amp; Security
                    </p>
                  </div>

                  {/* Vertical Gold Divider with Diamond (as on reference card) */}
                  <div className="hidden sm:flex sm:col-span-1 justify-center items-center h-full min-h-[140px]">
                    <div className="relative flex flex-col items-center justify-center h-full">
                      <span className="w-[1px] h-14 bg-gradient-to-b from-transparent to-gold-600" />
                      <span className="w-2 h-2 rotate-45 bg-gold-600 my-1 shadow-sm shrink-0" />
                      <span className="w-[1px] h-14 bg-gradient-to-t from-transparent to-gold-600" />
                    </div>
                  </div>

                  {/* Right Half: Associate Details */}
                  <div className="sm:col-span-6 space-y-2.5">
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-forest-900 leading-tight">
                        {CONTACT_PERSON.name}
                      </h4>
                      <p className="text-xs font-semibold text-gold-800 uppercase tracking-wider mt-0.5">
                        {CONTACT_PERSON.designation}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 text-xs">
                      {/* Phone */}
                      <a
                        href={CONTACT_INFO.links.phoneCall}
                        className="flex items-center gap-2 text-charcoal-700 hover:text-forest-800 font-medium transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
                          <Phone className="w-3 h-3" />
                        </div>
                        <span>{CONTACT_INFO.phoneFormatted}</span>
                      </a>

                      {/* Email */}
                      <a
                        href={CONTACT_INFO.links.emailMailto}
                        className="flex items-center gap-2 text-charcoal-700 hover:text-forest-800 font-medium transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
                          <Mail className="w-3 h-3" />
                        </div>
                        <span>{CONTACT_INFO.email}</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Office Location Strip */}
                <div className="relative z-10 mt-5 pt-3 border-t border-gold-600/15 flex items-center justify-between text-[11px] text-charcoal-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span>Ground Floor, Kamath Building, SN Park, Kannur - 1</span>
                  </div>
                  <span className="font-semibold text-forest-800 hidden sm:inline">www.credtree.in</span>
                </div>

              </div>

              {/* Factual Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-gold-600/20 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span className="text-xs font-semibold text-forest-900">Direct Associate Contact</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-gold-600/20 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span className="text-xs font-semibold text-forest-900">Official Kannur Presence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Website Copy Founded on Business Objective */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 leading-tight">
                Dedicated Financial Facilitation with Integrity and Precision
              </h3>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At <strong>Credtree Financial Services</strong>, we act as a trusted bridge
                between your financial goals and the broader ecosystem of financial institutions.
                Our operational mandate is built directly on the official business objective:
              </p>

              {/* Exact Business Objective Quote Card */}
              <div className="p-5 rounded-xl bg-white border-l-4 border-gold-600 shadow-sm space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-800">
                  Business Objective
                </p>
                <p className="text-sm text-forest-900 italic font-medium leading-relaxed">
                  &ldquo;To facilitate secured and unsecured loans including home loans, personal loans,
                  car loans, loans against property and business loans, and to distribute financial
                  products such as credit cards, all class of insurance products, investment and
                  wealth management services.&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Whether you are seeking secured borrowing for home ownership, commercial lines to
                support enterprise scaling, multi-class risk protection, or long-term wealth
                planning, Credtree provides disciplined personal attention at every stage.
              </p>
            </div>

            {/* Scope Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white border border-gold-600/20 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Layers className="w-4 h-4 text-forest-800" />
                  <h4 className="font-serif font-bold text-sm text-forest-900">
                    Credit Facilitation
                  </h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Home Loans, Personal Loans, Car Loans, Business Loans, and Loans Against Property.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-600/20 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Shield className="w-4 h-4 text-forest-800" />
                  <h4 className="font-serif font-bold text-sm text-forest-900">
                    Protection &amp; Wealth
                  </h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Multi-class insurance distribution, credit cards, and wealth management services.
                </p>
              </div>
            </div>

            {/* Transparent Note */}
            <div className="p-4 rounded-xl bg-forest-50 border border-forest-100 text-xs text-charcoal-700 leading-relaxed">
              <span className="font-semibold text-forest-900">Transparent Facilitation: </span>
              Credtree Financial Services functions as an authorized associate and distributor, ensuring
              client options are evaluated with balanced clarity, documentation diligence, and respect
              for institutional criteria.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
