"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

interface CareersSectionProps {
  scrollY: number
}

export default function CareersSection({ scrollY }: CareersSectionProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const startScroll = window.innerHeight * 4.8
    const endScroll = window.innerHeight * 0.5
    const calculatedProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / endScroll))

    setProgress(calculatedProgress)
  }, [scrollY])

  const transform = (1 - progress) * 100

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-orange-50 z-60"
      style={{
        transform: `translateY(${transform}%)`,
        opacity: progress > 0 ? 1 : 0,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-1000 ${progress > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Ready to Join Our Team?
        </h2>

        <p
          className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${progress > 0.4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Discover opportunities to build your career with one of the nations leading construction companies.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${progress > 0.6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 flex items-center gap-2 group">
            View Open Positions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-colors duration-300">
            Learn About Internships
          </button>
        </div>
      </div>
    </section>
  )
}
