"use client";

import { useEffect, useState } from "react";

import WelcomingSection from "@/components/welcoming-section";
import CultureSection from "@/components/culture-section";
import BenefitsSection from "@/components/benefits-section";
import DiversitySection from "@/components/diversity-section";
import CareersSection from "@/components/careers-section";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="relative">
        {/* Set total height for scrolling */}
        <div style={{ height: "600vh" }}>
          <Hero scrollY={scrollY}/>
          <WelcomingSection scrollY={scrollY} />
          <CultureSection scrollY={scrollY} />
          <BenefitsSection scrollY={scrollY} />
          <DiversitySection scrollY={scrollY} />
          <CareersSection scrollY={scrollY} />
        </div>
      </div>
    </div>
  );
}
