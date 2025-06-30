"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ServicesSection } from "@/components/ServicesSection";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "Modern Pre-Engineered Buildings",
    subtitle: "Innovative steel structures for industrial and commercial use",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "Fast Construction Solutions",
    subtitle: "Reduce construction time by up to 50% with our PEB systems",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "Cost-Effective Building Solutions",
    subtitle: "Maximize your investment with our efficient building systems",
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    title: "Sustainable Construction",
    subtitle: "Eco-friendly building solutions for a better tomorrow",
  },
]

const ClockIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const DollarIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const steps = [
  {
    step: "01",
    title: "Design & Engineering",
    description:
      "Our expert engineers create detailed designs based on your specific requirements and local building codes.",
  },
  {
    step: "02",
    title: "Manufacturing",
    description: "Components are precisely manufactured in our state-of-the-art facilities using high-quality steel.",
  },
  {
    step: "03",
    title: "Quality Control",
    description: "Every component undergoes rigorous quality checks to ensure structural integrity and durability.",
  },
  {
    step: "04",
    title: "Delivery & Installation",
    description: "Components are delivered to site and assembled by our certified installation teams.",
  },
]

const benefits = [
  {
    icon: ClockIcon,
    title: "Faster Construction",
    description: "Reduce construction time by 30-50% compared to conventional methods",
  },
  {
    icon: DollarIcon,
    title: "Cost Effective",
    description: "Lower material costs and reduced labor requirements",
  },
  {
    icon: ShieldIcon,
    title: "High Quality",
    description: "Superior structural integrity with consistent quality control",
  },
  {
    icon: CheckIcon,
    title: "Versatile Design",
    description: "Flexible designs adaptable to various architectural requirements",
  },
]

export default function Page() {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      <Navbar />
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center">
                  <div className="max-w-2xl text-white">
                    <h1 className="mb-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>
                    <p className="mb-8 text-lg sm:text-xl">{slide.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="max-w-1/3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                        Get Started
                      </button>
                      <button className="max-w-1/3 text-black bg-gray-300 px-6 py-3 rounded-md font-medium transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 p-2 rounded-full transition-colors"
          onClick={prevSlide}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 p-2 rounded-full transition-colors"
          onClick={nextSlide}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About Pre-Engineered Buildings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pre-Engineered Buildings (PEB) are steel structures that are engineered at a factory and assembled at site.
              These buildings are designed to be rigid frame structures consisting of rafters and columns.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What are Pre-Engineered Buildings?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pre-Engineered Buildings are metal building systems where the structural members are designed and
                  fabricated in a factory according to standard engineering practices. The building components are then
                  shipped to the construction site for assembly.
                </p>
                <p>
                  PEB technology offers significant advantages in terms of design flexibility, cost effectiveness,
                  quality, and speed of construction. These buildings are ideal for warehouses, factories, aircraft
                  hangars, sports complexes, and commercial buildings.
                </p>
                <p>
                  The structural system consists of built-up I-sections for rafters and columns, cold-formed Z and C
                  sections for purlins and girts, and a complete building envelope system.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 ">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <benefit.icon className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-900">Our Process</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <Footer />
    </div>
  )
}
