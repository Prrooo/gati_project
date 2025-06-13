import Image from "next/image"
import { Quote, ArrowUp } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar/>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative mb-8">
              <Image
                src="/images/Gatih-facility.png"
                alt="The Gatih Steel Company facility showing industrial buildings and parking area"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                The Gatih Steel Company
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="text-gray-400 text-4xl flex-shrink-0 mt-2" size={48} />
                <p className="text-lg leading-relaxed text-gray-800">
                  <strong>Gatih Steel Pre-Engineered Buildings Co. Ltd.</strong> was established in 1977 in Dammam,
                  Saudi Arabia, specialized in the design, manufacture and supply of pre-engineered steel buildings. At
                  Gatih Steel, we focus on meeting the needs of our worldwide customers for durable, affordable and
                  versatile steel structures.
                </p>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                After thirty years in business, our customers remain our first priority. Every building that we design,
                manufacture, and deliver for erection is created with the satisfaction of the future occupants and
                owners in mind.
              </p>

              <p>
                Gatih Steel Pre-Engineered Buildings Co. Ltd. is the oldest and largest of the Gatih Steel Holding
                companies. Our Dammam-based PEB factory - is the largest single PEB factory in the world. It has a
                monthly production capacity of 9,500 metric tons. We commissioned more pre-engineered buildings
                factories - in Egypt, India, UAE and Vietnam - expanding our total PEB production capacity to 30,000 MT
                per month.
              </p>

              <p>
                With a total production capacity of more than 6,000,000 m<sup>2</sup> per annum, Gatih Steel is
                considered the largest manufacturer of pre-engineered steel buildings in the world.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* PEB Awareness Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">PEB Awareness</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Each building constructs quickly, saves energy, is long-lasting and is environmentally friendly, with
                virtually no waste in the manufacturing process -- and materials are fully recyclable
              </p>

              {/* Nomenclature Section */}
              <div className="bg-black text-white px-3 py-2 text-sm font-semibold mb-4">NOMENCLATURE</div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Virtual Building
                  <br />
                  Painter
                </h3>

                {/* 3D Building Model Placeholder */}
                <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="w-32 h-24 bg-gray-300 rounded mb-4 mx-auto flex items-center justify-center">
                      <span className="text-gray-500 text-sm">3D Building Model</span>
                    </div>
                    <p className="text-gray-500 text-sm">Interactive building visualization</p>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                  Try Virtual Painter
                </button>
              </div>
            </div>

            {/* Holding Company Section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <span>Gatih Steel</span>
                <span className="text-gray-800">Holding Company</span>
                <button className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700 transition-colors duration-200">
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
