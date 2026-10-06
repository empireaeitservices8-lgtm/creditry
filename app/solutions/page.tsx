import React from "react";
import FinancialSolutions from "@/components/FinancialSolutions";

export const metadata = {
  title: "Solutions | Credtree Financial Services",
  description: "Browse our comprehensive spectrum of financial solutions and products.",
};

export default function SolutionsPage() {
  return (
    <div className="relative bg-ivory text-charcoal-900">
      <FinancialSolutions />
    </div>
  );
}
