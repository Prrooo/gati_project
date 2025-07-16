"use client"
import Link from 'next/link';
import { useState, useRef } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredSection, setHoveredSection] = useState(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const handleMouseEnter = (section: any) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredSection(section)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSection(null)
    }, 150)
  }

  const projectsDropdown = [
    { name: "Recent Projects", description: "Our latest completed steel buildings", icon: "🆕" },
    { name: "Case Studies", description: "Detailed project breakdowns and results", icon: "📊" },
    { name: "Before & After", description: "Transformation stories of our builds", icon: "🔄" },
    { name: "Client Testimonials", description: "What our customers say about us", icon: "⭐" },
  ]

  const MediaCentre = [
    { name: "Get Free Quote", description: "Request a detailed project estimate", icon: "💰", href: "newsletters" },
    { name: "Schedule Consultation", description: "Book a meeting with our experts", icon: "📅", href: "awards" },
  ]

  const aboutDropdown = [
    { name: "Overview", description: "25+ years of steel building excellence", icon: "📖", href: "about" },
    { name: "Our Team", description: "Meet our experienced professionals", icon: "👥", href: "executiveprofile" },
    { name: "Vison & Mission", description: "Industry standards and qualifications", icon: "🏆", href: "VisionMission" },
    { name: "Careers", description: "Join our growing team", icon: "💼", href: "career" },
  ]

  return (
    <header className={`absolute top-0 left-0 right-0 z-50  bg-gray-900 text-white  "
      } `}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded bg-blue-600 px-9 py-1 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-xl">Gatih</span>
            </div>
            <span className="text-white font-bold text-sm sm:text-xl">Steel Buildings</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium py-2">
              Home
            </Link>
            <Link href="/pre_eng" className="text-white hover:text-blue-400 transition-colors font-medium py-2">
              Services
            </Link>
            <div className="relative" onMouseEnter={() => handleMouseEnter("projects")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#projects"
                className="text-white hover:text-blue-400 transition-colors font-medium flex items-center py-2"
              >
                Projects
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: hoveredSection === "projects" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {hoveredSection === "projects" && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 p-6 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    {projectsDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.name.toLowerCase().replace(/\s+/g, "-")} `}
                        className="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group hover:shadow-md"
                      >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-semibold text-blue-900 group-hover:text-blue-700 text-lg">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#about"
                className="text-white hover:text-blue-400 transition-colors font-medium flex items-center py-2"
              >
                About
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: hoveredSection === "about" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {hoveredSection === "about" && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 p-6 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    {aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group hover:shadow-md"
                      >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-semibold text-blue-900 group-hover:text-blue-700 text-lg">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("media")} onMouseLeave={handleMouseLeave}>
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-colors font-medium flex items-center py-2"
              >
                Media Center
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: hoveredSection === "contact" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {hoveredSection === "media" && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 p-6 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    {MediaCentre.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group hover:shadow-md"
                      >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-semibold text-blue-900 group-hover:text-blue-700 text-lg">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Info & CTA - Hidden on mobile, shown on desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-medium">234-123-4567</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm rounded-lg mt-2 p-4 mx-2 sm:mx-0">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="/pre_eng" className="text-white hover:text-blue-400 transition-colors font-medium py-2">
                Services
              </Link>

              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-white font-medium py-2">Projects</div>
                <div className="space-y-2 ml-2">
                  {projectsDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={`#${item.name.toLowerCase().replace(/\s+/g, "-")} `}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile About Section */}
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-white font-medium py-2">About</div>
                <div className="space-y-2 ml-2">
                  {aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Section */}
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-white font-medium py-2">Media Center</div>
                <div className="space-y-2 ml-2">
                  {MediaCentre.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-white mb-3">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header >
  )
}

