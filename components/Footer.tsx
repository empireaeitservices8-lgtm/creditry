import React from "react";
import Logo from "./Logo";
import { Mail, Globe, MapPin } from "lucide-react";
import {
  COMPANY_NAME,
  TAGLINE,
  CONTACT_INFO,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-ivory relative overflow-hidden">
      {/* Top Tier: Brand Logo on Ivory band so the logo shows in its true colours */}
      <div className="bg-ivory border-t border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center text-center space-y-2">
          <Logo variant="compact" theme="light" imageClassName="h-32 sm:h-40" />
          <p className="font-serif italic text-gold-800 text-sm sm:text-base font-medium">
            &ldquo;{TAGLINE}&rdquo;
          </p>
        </div>
      </div>

      {/* Decorative Gold Hairline with Central Diamond Ornament */}
      <div className="relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-gold-500 shadow-sm border border-forest-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 relative z-10">

        {/* Middle Tier: Official Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-b border-forest-800/80 text-xs text-ivory/85 max-w-4xl mx-auto">
          
          {/* 1. Address */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-600/30 flex items-center justify-center shrink-0 text-gold-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-0.5">
                Office Location
              </span>
              <p className="leading-snug">
                Ground Floor, Kamath Building,
                <br />
                SN Park, Kannur - 1
              </p>
            </div>
          </div>

          {/* 3. Official Email */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-600/30 flex items-center justify-center shrink-0 text-gold-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-0.5">
                Official Email
              </span>
              <a
                href={CONTACT_INFO.links.emailMailto}
                className="hover:text-gold-300 font-medium block transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <span className="text-[11px] text-ivory/60">Enquiries &amp; Consultations</span>
            </div>
          </div>

          {/* 4. Official Website */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-600/30 flex items-center justify-center shrink-0 text-gold-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-0.5">
                Web Presence
              </span>
              <a
                href={CONTACT_INFO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300 font-medium block transition-colors"
              >
                {CONTACT_INFO.websiteDisplay}
              </a>
              <span className="text-[11px] text-ivory/60">Kannur, Kerala</span>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Clean Copyright */}
        <div className="pt-6 text-center text-xs text-ivory/60">
          <p className="text-[11px] text-ivory/50">
            &copy; 2026 {COMPANY_NAME}. All rights reserved. &bull; Kannur, Kerala
          </p>
        </div>

      </div>
    </footer>
  );
}
