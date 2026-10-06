import React from "react";
import Services from "@/components/Services";

export const metadata = {
  title: "Services | Credtree Financial Services",
  description: "Explore our financial services: Home Loans, Business Loans, Insurance, and Wealth Management.",
};

export default function ServicesPage() {
  return (
    <div className="relative bg-ivory text-charcoal-900">
      <Services />
    </div>
  );
}
