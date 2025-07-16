import Image from "next/image";
import { Quote, ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Main Content */}
      <div className="mt-40 mb-20 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative mb-8">
              <Image
                src="/images/slide1.jpg"
                alt="The GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Company facility showing industrial buildings and parking area"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Quote
                  className="text-gray-400 text-4xl flex-shrink-0 mt-2"
                  size={48}
                />
                <p className="text-lg leading-relaxed text-gray-800">
                  <strong>GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED</strong>{" "}
                  is a Delhi-based construction and engineering company
                  specializing in commercial infrastructure, custom steel
                  structures, and turn-key project management. Established in
                  2018, we have rapidly emerged as a trusted name in the
                  industry, delivering medium to large-scale sheds, hangars, and
                  steel-framed buildings across India.
                </p>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                After thirty years in business, our customers remain our first
                priority. Every building that we design, manufacture, and
                deliver for erection is created with the satisfaction of the
                future occupants and owners in mind.
              </p>

              <p>
                GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED is a Delhi-based
                construction and engineering company specializing in commercial
                infrastructure, custom steel structures, and turn-key project
                management. Established in 2018, we have rapidly emerged as a
                trusted name in the industry, delivering medium to large-scale
                sheds, hangars, and steel-framed buildings across India.
              </p>

              <p>
                Our core services encompass: Design & Construction of
                custom-built industrial and commercial sheds Structural
                Engineering Consulting for high-performance steel buildings
                Project Management with strict adherence to timelines and budget
                Wholesale Supply of pre-fabricated and fabricated steel
                structures Built on strong engineering foundations and deep
                industry insight, we focus on innovative, cost-effective, and
                timely delivery, making us the preferred choice for clients
                across multiple sectors. What sets us apart is our
                client-centric approach: we tailor each project to meet the
                precise operational, environmental, and economic demands of the
                customer. With in-house design, fabrication, and execution
                capabilities, we ensure quality control at every step—from
                concept to commissioning.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* PEB Awareness Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                PEB Awareness
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Each building constructs quickly, saves energy, is long-lasting
                and is environmentally friendly, with virtually no waste in the
                manufacturing process -- and materials are fully recyclable
              </p>

              {/* Nomenclature Section */}
              <div className="bg-black text-white px-3 py-2 text-sm font-semibold mb-4">
                NOMENCLATURE
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Virtual Building
                  <br />
                  Painter
                </h3>

                {/* 3D Building Model Placeholder */}
                <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <Image
                      src="/images/vp.jpg" // Replace with actual image
                      alt="Virtual Building Painter Advertisement"
                      width={300}
                      height={150}
                      className="w-full h-auto object-contain border border-gray-300"
                    />

                    <p className="text-gray-500 text-sm">
                      Interactive building visualization
                    </p>
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
                <span>GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED</span>
                <span className="text-gray-800">Holding Company</span>
                <button className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700 transition-colors duration-200">
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
