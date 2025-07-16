"use client"

import { useEffect, useState } from "react"
import { Users, Heart, Award } from "lucide-react"

interface CultureSectionProps {
  scrollY: number
}

export default function CultureSection({ scrollY }: CultureSectionProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const startScroll = window.innerHeight * 1.8
    const endScroll = window.innerHeight * 0.5
    const calculatedProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / endScroll))

    setProgress(calculatedProgress)
  }, [scrollY])

  const transform = (1 - progress) * 100

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective achievement.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
  ]

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-50 z-30"
      style={{
        transform: `translateY(${transform}%)`,
        opacity: progress > 0 ? 1 : 0,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-1000 ${progress > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Our Culture & Values
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${progress > 0.4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            At GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED, our culture is built on shared values that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${progress > 0.5 + index * 0.1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
