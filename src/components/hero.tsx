"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const maxTransform = window.innerHeight;
    const clampedTransform = Math.max(-scrollY * 0.5, -maxTransform);
    setTransform(clampedTransform);
  }, [scrollY, mounted]);

  if (!mounted) return null;

  const fadeOutOpacity = Math.max(1 - scrollY * 0.003, 0);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10"
      style={{ transform: `translateY(${transform}px)` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/career.jpg"
          alt="Career Background"
          fill // makes the image cover the entire parent
          className="object-cover object-center"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
          priority // optional: for faster loading
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p
          className={`text-sm md:text-base font-medium tracking-widest uppercase mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ opacity: fadeOutOpacity }}
        >
          Life at Gatih
        </p>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ opacity: fadeOutOpacity }}
        >
          We Do{" "}
          <span className="italic font-normal text-orange-400">Great</span>
          <br />
          Things Together
        </h1>
      </div>
    </div>
  );
}
