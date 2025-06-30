import Image from "next/image"
import { Award, CalendarDays, Building } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface AwardItemProps {
  title: string
  organization: string
  year: string
  description: string
  imageUrl?: string
  category?: string
}

function AwardCard({ title, organization, year, description, imageUrl, category }: AwardItemProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-blue-600 mb-2">
          <Award className="w-5 h-5 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {category && (
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
            {category}
          </span>
        )}
        <div className="text-sm text-gray-600 space-y-1 mb-3">
          <div className="flex items-center">
            <Building className="w-4 h-4 mr-2 text-gray-500" />
            <span>{organization}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
            <span>{year}</span>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function AwardsPage() {
  const awardsData: AwardItemProps[] = [
    {
      title: "Excellence in Steel Construction",
      organization: "National Steel Institute",
      year: "2024",
      description: "Recognized for outstanding innovation and quality in large-scale steel construction projects.",
      imageUrl: "/placeholder.svg?width=400&height=200&text=Award+Image+1",
      category: "Construction Quality",
    },
    {
      title: "Sustainable Manufacturing Award",
      organization: "Green Building Council",
      year: "2023",
      description:
        "Awarded for implementing eco-friendly practices and reducing carbon footprint in manufacturing processes.",
      imageUrl: "/placeholder.svg?width=400&height=200&text=Award+Image+2",
      category: "Sustainability",
    },
    {
      title: "Best Industrial Design",
      organization: "International Design Forum",
      year: "2023",
      description: "Acknowledged for superior design and engineering in pre-engineered building solutions.",
      imageUrl: "/placeholder.svg?width=400&height=200&text=Award+Image+3",
      category: "Design Innovation",
    },
    {
      title: "Safety Excellence Award",
      organization: "Occupational Safety & Health Association",
      year: "2022",
      description: "For maintaining an impeccable safety record and promoting a culture of safety in the workplace.",
      category: "Workplace Safety",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-white text-gray-800 font-sans min-h-screen">
        <header className="bg-gray-900 text-white py-40 sm:py-40 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h1 className="text-3xl sm:text-4xl font-bold">Awards and Recognitions</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-300">
              Celebrating our commitment to excellence, innovation, and quality in the steel industry.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awardsData.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
          {awardsData.length === 0 && (
            <div className="text-center py-12">
              <Award className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">No Awards to Display Yet</h2>
              <p className="text-gray-500 mt-2">Please check back later for updates on our achievements.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}
