"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-card-luxury border-b border-gold-600/20 py-3"
            : "bg-ivory border-b border-gold-700/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Logo size="md" variant="compact" />
            </div>

            {/* Desktop Navigation Links aligned to right */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 ml-auto" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium tracking-wide text-forest-900 transition-colors duration-200 hover:text-gold-700 rounded-md relative group"
                >
                  <span>{link.label}</span>
                  {/* Subtle gold line indicator on hover */}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-gold-600 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-md text-forest-900 hover:text-gold-700 hover:bg-forest-50 transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-out Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-forest-900/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-ivory shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gold-600/20">
                <Logo size="sm" variant="compact" />
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full text-forest-900 hover:bg-forest-50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-3 py-3 text-base font-medium text-forest-900 rounded-md hover:bg-forest-50 hover:text-gold-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rotate-45 bg-gold-600/60" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Note */}
            <div className="pt-6 border-t border-gold-600/20 text-center">
              <p className="text-[11px] text-charcoal-500">
                {CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
