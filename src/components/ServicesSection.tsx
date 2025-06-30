const WarehouseIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-4" />
  </svg>
)

const FactoryIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V6a2 2 0 00-2-2H4a2 2 0 00-2 2z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18Z" />
    <path d="M6 12H4a2 2 0 00-2 2v8h20v-8a2 2 0 00-2-2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
)

const ZapIcon = () => (
  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

const services = [
  {
    icon: WarehouseIcon,
    title: "Industrial Warehouses",
    description: "Large span warehouses and distribution centers with optimal storage solutions.",
    features: ["Clear span up to 60m", "High bay storage", "Loading dock integration", "Climate control ready"],
    image: "/images/sub1.jpg",
  },
  {
    icon: FactoryIcon,
    title: "Manufacturing Facilities",
    description: "Custom-designed manufacturing plants with specialized requirements.",
    features: ["Heavy crane support", "Specialized ventilation", "Utility integration", "Expansion capability"],
    image: "/images/sub2.jpg",
  },
  {
    icon: BuildingIcon,
    title: "Commercial Buildings",
    description: "Modern commercial spaces including offices, retail, and mixed-use developments.",
    features: ["Architectural flexibility", "Energy efficient", "Modern aesthetics", "Multi-story capability"],
    image: "/images/sub3.jpg",
  },
  {
    icon: ZapIcon,
    title: "Specialized Structures",
    description: "Custom solutions for unique requirements including aircraft hangars and sports facilities.",
    features: ["Large clear spans", "Specialized doors", "Custom engineering", "Unique geometries"],
    image: "/images/sub4.jpg",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive pre-engineered building solutions for various industries and applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

