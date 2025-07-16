"use client"

import { useEffect, useState } from "react"
import { Shield, GraduationCap, Calendar, DollarSign } from "lucide-react"

interface BenefitsSectionProps {
  scrollY: number
}

export default function BenefitsSection({ scrollY }: BenefitsSectionProps) {
  const [progress, setProgress] = useState(0)
  const mounted = false;

  useEffect(() => {
    if (!mounted) return

    const startScroll = window.innerHeight * 2.8
    const endScroll = window.innerHeight * 0.5
    const calculatedProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / endScroll))

    setProgress(calculatedProgress)
  }, [scrollY, mounted])

  if (!mounted) return null // prevent crash during SSR

  const transform = (1 - progress) * 100

  const benefits = [
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional development programs.",
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description: "Flexible schedules and generous paid time off to maintain healthy balance.",
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive compensation, retirement plans, and financial wellness programs.",
    },
  ]

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-40"
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
            Benefits That Matter
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${progress > 0.4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We invest in our people with comprehensive benefits and programs designed to support your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ${progress > 0.5 + index * 0.1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
