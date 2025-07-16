"use client"

import { useEffect, useState } from "react"

interface DiversitySectionProps {
  scrollY: number
}

export default function DiversitySection({ scrollY }: DiversitySectionProps) {
  const [progress, setProgress] = useState(0)


  useEffect(() => {

    const startScroll = window.innerHeight * 3.8
    const endScroll = window.innerHeight * 0.5
    const calculatedProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / endScroll))

    setProgress(calculatedProgress)
  }, [scrollY])


  const transform = (1 - progress) * 100

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-900 text-white z-50"
      style={{
        transform: `translateY(${transform}%)`,
        opacity: progress > 0 ? 1 : 0,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-light mb-8 md:mb-12 transition-all duration-1000 ${progress > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Diversity & Inclusion
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-300 leading-relaxed mb-8 transition-all duration-1000 delay-300 ${progress > 0.4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We are committed to building a diverse workforce that reflects the communities we serve. Our inclusive
            culture celebrates different perspectives, backgrounds, and experiences that make us stronger together.
          </p>

          <div
            className={`grid md:grid-cols-3 gap-8 mt-12 transition-all duration-1000 delay-500 ${progress > 0.6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">40%</div>
              <p className="text-gray-300">Diverse workforce</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">25%</div>
              <p className="text-gray-300">Women in leadership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100+</div>
              <p className="text-gray-300">Employee resource groups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
