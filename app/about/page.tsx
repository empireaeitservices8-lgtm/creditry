import React from "react";
import About from "@/components/About";
import HowWeHelp from "@/components/HowWeHelp";
import WhyCredtree from "@/components/WhyCredtree";

export const metadata = {
  title: "About Us | Credtree Financial Services",
  description: "Learn about Credtree Financial Services, our business objectives, process, and why customers trust us.",
};

export default function AboutPage() {
  return (
    <div className="relative bg-ivory text-charcoal-900">
      <About />
      <HowWeHelp />
      <WhyCredtree />
    </div>
  );
}
