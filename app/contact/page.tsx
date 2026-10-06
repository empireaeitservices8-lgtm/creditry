import React from "react";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Credtree Financial Services",
  description: "Get in touch with Credtree Financial Services in Kannur for personalized financial consultation.",
};

export default function ContactPage() {
  return (
    <div className="relative bg-ivory text-charcoal-900">
      <Contact />
    </div>
  );
}
