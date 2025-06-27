"use client"

import { useEffect, useState } from "react"

interface WelcomingSectionProps {
  scrollY: number
}

export default function WelcomingSection({ scrollY }: WelcomingSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const startScroll = window.innerHeight * 0.8
      const endScroll = window.innerHeight * 0.5
      const calculatedProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / endScroll))
      setProgress(calculatedProgress)
    }
  }, [scrollY])

  const transform = (1 - progress) * 100

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-20"
      style={{
        transform: `translateY(${transform}%)`,
        opacity: progress > 0 ? 1 : 0,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 transition-all duration-1000 ${
              progress > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A Welcoming Place for All
          </h2>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              progress > 0.5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We work hard to ensure that everyone feels physically and psychologically safe. To create a collaborative
            team and inclusive environment, our employees and trade partners participate in anti-racism,
            anti-discrimination, and anti-harassment training.
          </p>
        </div>
      </div>
    </section>
  )
}
