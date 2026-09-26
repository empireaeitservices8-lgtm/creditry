import React from "react";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { Phone, MessageSquare, Mail, MapPin, Globe } from "lucide-react";
import { CONTACT_INFO, CONTACT_PERSON, COMPANY_NAME } from "@/lib/constants";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Official Contact Card & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Executive Associate Profile Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gold-600/30 shadow-card-luxury">
              {/* Header Profile */}
              <div className="flex items-center gap-4 pb-6 border-b border-gold-600/20">
                <div className="w-14 h-14 rounded-full bg-forest-800 text-gold-400 font-serif font-bold text-xl flex items-center justify-center border-2 border-gold-500/50 shadow-sm shrink-0">
                  BG
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                    {CONTACT_PERSON.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-800 uppercase tracking-widest mt-0.5">
                    {CONTACT_PERSON.designation}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    {COMPANY_NAME}
                  </p>
                </div>
              </div>

              {/* Verified Contact Details List */}
              <div className="pt-6 space-y-4">
                {/* Official Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                    <Phone className="w-4 h-4 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Official Phone
                    </span>
                    <a
                      href={CONTACT_INFO.links.phoneCall}
                      className="text-sm sm:text-base font-bold text-forest-900 hover:text-gold-700 transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Official WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                    <MessageSquare className="w-4 h-4 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Official WhatsApp
                    </span>
                    <a
                      href={CONTACT_INFO.links.whatsappChat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-forest-900 hover:text-gold-700 transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                    <Mail className="w-4 h-4 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Official Email
                    </span>
                    <a
                      href={CONTACT_INFO.links.emailMailto}
                      className="text-sm sm:text-base font-bold text-forest-900 hover:text-gold-700 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Official Website */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                    <Globe className="w-4 h-4 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Official Website
                    </span>
                    <a
                      href={CONTACT_INFO.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-forest-900 hover:text-gold-700 transition-colors"
                    >
                      {CONTACT_INFO.websiteDisplay}
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                    <MapPin className="w-4 h-4 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Office Address
                    </span>
                    <p className="text-sm font-semibold text-forest-900 leading-snug">
                      {CONTACT_INFO.address.line1}
                    </p>
                    <p className="text-sm font-semibold text-forest-900 leading-snug">
                      {CONTACT_INFO.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Meeting Note */}
            <div className="p-5 rounded-xl bg-white border border-gold-600/20 text-xs text-charcoal-600 space-y-1">
              <p className="font-semibold text-forest-900">Office Consultations:</p>
              <p>
                Visits to our office at Kamath Building, SN Park, Kannur are welcomed. Prior
                appointment via phone or WhatsApp is recommended to ensure undivided consultation time.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
