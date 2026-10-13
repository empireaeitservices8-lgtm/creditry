"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white text-forest-800 border border-beige shadow-card-luxury hover:border-gold-700 hover:text-gold-700 transition-all active:scale-95 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 text-gold-700 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Floating Action Container */}
      <div className="pointer-events-auto flex items-center">
        {/* Real Official WhatsApp Floating Widget */}
        <a
          href={CONTACT_INFO.links.whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] flex items-center justify-center shadow-lg shadow-emerald-950/20 ring-4 ring-white/90 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat with Credtree on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Subtle Attention Ping Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {/* Real WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 32 32"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 drop-shadow-xs"
            aria-hidden="true"
          >
            <path d="M16.004 3C9.374 3 3.99 8.383 3.99 15.012c0 2.12.554 4.19 1.607 6.015L3.89 27.5l6.63-1.674a11.96 11.96 0 0 0 5.48 1.33h.005c6.628 0 12.012-5.383 12.012-12.012C28.016 8.383 22.632 3 16.004 3Zm0 21.97h-.004a9.95 9.95 0 0 1-5.07-1.39l-.364-.216-3.935.993 1.05-3.836-.237-.394a9.93 9.93 0 0 1-1.523-5.115c0-5.5 4.477-9.977 9.987-9.977 2.666 0 5.17 1.04 7.054 2.925a9.91 9.91 0 0 1 2.92 7.06c-.003 5.5-4.48 9.95-9.878 9.95Zm5.474-7.455c-.3-.15-1.774-.875-2.05-.975-.274-.1-.474-.15-.674.15-.2.3-.774.975-.95 1.175-.174.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.487-.89-.794-1.492-1.775-1.667-2.075-.174-.3-.018-.462.132-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.243-.584-.49-.505-.674-.514l-.574-.01c-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5 0 1.474 1.075 2.9 1.225 3.1.15.2 2.116 3.232 5.126 4.532.716.31 1.275.494 1.71.633.719.228 1.373.196 1.89.119.577-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35Z" />
          </svg>

          {/* Hover Tooltip / Floating Label */}
          <span className="hidden lg:group-hover:flex absolute right-full mr-3 items-center px-3 py-1.5 rounded-lg bg-forest-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-md border border-gold-700/40 pointer-events-none transition-all">
            Chat on WhatsApp
            <span className="w-2 h-2 rounded-full bg-[#25D366] ml-2 animate-pulse" />
          </span>
        </a>
      </div>
    </div>
  );
}
