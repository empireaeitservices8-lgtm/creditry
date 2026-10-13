import React from "react";
import Logo from "./Logo";
import { Mail, Globe, MapPin } from "lucide-react";
import {
  COMPANY_NAME,
  CONTACT_INFO,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-white relative overflow-hidden">
      {/* Top Tier: Brand Logo on warm cream band so the logo shows in its true colours */}
      <div className="bg-[#FAF7F0] border-t border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col items-center text-center space-y-2">
          <Logo variant="compact" theme="light" imageClassName="h-20 sm:h-28 md:h-36" />
          <p className="font-serif italic text-gold-700 text-xs sm:text-sm md:text-base font-semibold">
            Credible Finance , Confident Future.
          </p>
        </div>
      </div>

      {/* Decorative Gold Hairline with Central Diamond Ornament */}
      <div className="relative">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-700 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-gold-700 shadow-sm border border-forest-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 relative z-10">

        {/* Middle Tier: Official Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8 border-b border-forest-700/60 text-xs text-white/85 max-w-4xl mx-auto">
          
          {/* 1. Address */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center shrink-0 text-gold-400">
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
            <div className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center shrink-0 text-gold-400">
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
            </div>
          </div>

          {/* 4. Official Website */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center shrink-0 text-gold-400">
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
            </div>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="pt-6 flex items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/cred_tree/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-500 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/credtree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-500 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.threads.com/@cred_tree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-500 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61594738227701"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-500 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/145219288/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-lg bg-forest-900 border border-gold-700/40 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:border-gold-500 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Bottom Tier: Clean Copyright */}
        <div className="pt-6 text-center text-xs text-white/60">
          <p className="text-[11px] text-white/50">
            &copy; 2026 {COMPANY_NAME}. All rights reserved. &bull; Kannur, Kerala
          </p>
        </div>

      </div>
    </footer>
  );
}
