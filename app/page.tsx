import React from "react";
import Hero from "@/components/Hero";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomeSolutionsPreview from "@/components/HomeSolutionsPreview";

export default function HomePage() {
  return (
    <div className="relative bg-ivory text-charcoal-900">
      {/* Home Page Content */}
      <Hero />
      <HomeAboutPreview />
      <HomeServicesPreview />
      <HomeSolutionsPreview />
    </div>
  );
}
