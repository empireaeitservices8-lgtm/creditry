"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ChevronUp } from "lucide-react";
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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/95 text-forest-900 border border-gold-600/40 shadow-card-luxury hover:bg-gold-50 transition-all active:scale-95 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 text-gold-700 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Floating Action Pill */}
      <div className="pointer-events-auto flex items-center p-1.5 rounded-full bg-forest-900/95 backdrop-blur-md border border-gold-500/50 shadow-gold-subtle hover:shadow-gold-hover transition-all">
        {/* WhatsApp Button */}
        <a
          href={CONTACT_INFO.links.whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-700 hover:bg-green-600 text-white text-xs font-semibold tracking-wide transition-colors"
          aria-label="Chat with Credtree on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={CONTACT_INFO.links.phoneCall}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full text-gold-400 hover:text-white text-xs font-semibold tracking-wide transition-colors"
          aria-label="Call Credtree Financial Services"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span className="hidden sm:inline">97784 84739</span>
        </a>
      </div>
    </div>
  );
}
