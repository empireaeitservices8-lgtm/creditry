import React from "react";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-ivory-light relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Direct Consultation"
          title="Let's Talk About Your Financial Needs"
          subtitle="Connect with Credtree Financial Services to explore loans, insurance, investments and wealth management services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Business Associate Card */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 block">
              Official Business Card
            </span>

            {/* Physical Business Card Mockup */}
            <div className="relative rounded-2xl bg-[#FFFDF9] border border-gold-600/40 shadow-card-luxury p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-card-hover group">
              {/* Signature Bottom-Right Dark Green Swoosh Wave with Double Gold Trim */}
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

                {/* Vertical Gold Divider with Diamond */}
                <div className="hidden sm:flex sm:col-span-1 justify-center items-center h-full min-h-[140px]">
                  <div className="relative flex flex-col items-center justify-center h-full">
                    <span className="w-[1px] h-14 bg-gradient-to-b from-transparent to-gold-600" />
                    <span className="w-2 h-2 rotate-45 bg-gold-600 my-1 shadow-sm shrink-0" />
                    <span className="w-[1px] h-14 bg-gradient-to-t from-transparent to-gold-600" />
                  </div>
                </div>

                {/* Right Half: Direct Contact Details */}
                <div className="sm:col-span-6 space-y-3 flex flex-col justify-center">
                  <div className="space-y-3 text-xs">
                    {/* Phone */}
                    <a
                      href={CONTACT_INFO.links.phoneCall}
                      className="flex items-center gap-2 text-charcoal-700 hover:text-forest-800 font-medium transition-colors group/link"
                      title="Call directly"
                    >
                      <div className="w-6 h-6 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 group-hover/link:bg-forest-900 transition-colors">
                        <Phone className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">{CONTACT_INFO.phoneFormatted}</span>
                    </a>

                    {/* Email with direct Gmail launch */}
                    <a
                      href={CONTACT_INFO.links.gmailCompose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-charcoal-700 hover:text-forest-800 font-medium transition-colors group/link"
                      title="Send email via Gmail to info@credtree.in"
                    >
                      <div className="w-6 h-6 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 group-hover/link:bg-forest-900 transition-colors">
                        <Mail className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">{CONTACT_INFO.email}</span>
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
                <a
                  href={CONTACT_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest-800 hover:text-gold-700 hidden sm:inline transition-colors"
                >
                  {CONTACT_INFO.websiteDisplay}
                </a>
              </div>
            </div>

            {/* Factual Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-gold-600/20 shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Direct Associate Contact</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gold-600/20 shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Official Kannur Presence</span>
              </div>
            </div>

            {/* Office Consultations Note */}
            <div className="p-5 rounded-xl bg-white border border-gold-600/20 text-xs text-charcoal-600 space-y-1.5 shadow-sm">
              <p className="font-semibold text-forest-900">Office Consultations:</p>
              <p className="leading-relaxed">
                Visits to our office at Kamath Building, SN Park, Kannur are welcomed. Prior appointment via phone, WhatsApp, or Gmail is recommended to ensure undivided consultation time.
              </p>
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
