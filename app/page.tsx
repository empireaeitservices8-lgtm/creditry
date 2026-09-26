import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FinancialSolutions from "@/components/FinancialSolutions";
import HowWeHelp from "@/components/HowWeHelp";
import WhyCredtree from "@/components/WhyCredtree";
import BrandStatement from "@/components/BrandStatement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-ivory text-charcoal-900">
      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Credtree */}
        <About />

        {/* 4. Core Services */}
        <Services />

        {/* 5. Broader Financial Solutions */}
        <FinancialSolutions />

        {/* 6. How We Help */}
        <HowWeHelp />

        {/* 7. Why Credtree */}
        <WhyCredtree />

        {/* 8. Brand Statement */}
        <BrandStatement />

        {/* 9. Contact & Enquiry */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
