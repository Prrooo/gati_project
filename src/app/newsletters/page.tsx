import Image from "next/image"
import { Quote } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
    <div className="bg-white text-gray-800 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <header>
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">Zamil Steel Newsletter</h1>
          </header>
          <section className="flex items-start gap-4 mb-8">
            <Quote className="w-16 h-16 text-black shrink-0 -mt-2" fill="currentColor" />
            <p className="text-base text-gray-700">
              Discover our latest news and cutting-edge projects, products, certifications, awards, and participation in
              local, regional, and global events.
            </p>
          </section>
          <section className="flex flex-col items-center text-center">
            <div className="mb-4 shadow-lg border rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
              <Image
                src="/placeholder.svg?width=350&height=495"
                alt="Zamil Steel Newsletter Cover"
                width={350}
                height={495}
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-black text-sm mb-2">Issue 1 - 2025</p>
            <a href="#" className="text-blue-600 hover:underline mb-1 text-sm">
              View Flip Book
            </a>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Download (31.11 MB)
            </a>
          </section>
        </div>

        {/* Right Column */}
        <aside className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-black pb-2 border-b border-gray-300 mb-4">PEB Awareness</h2>
            <p className="text-sm text-gray-700 mb-6">
              A metal building system is a custom-engineered steel solution that optimizes and integrates steel framing,
              roofing and walls. It is the most popular low-rise commercial building solution in America
            </p>
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-2 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors"
            >
              NOMENCLATURE
            </a>
          </section>
          <section className="text-center">
            <h2 className="text-xl font-bold text-black pb-2 border-b border-gray-300 mb-6">
              Virtual Building Painter
            </h2>
            <div className="flex justify-center mb-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
              <Image
                src="/placeholder.svg?width=300&height=150"
                alt="Virtual Building Painter"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">
              Try Virtual Painter
            </a>
          </section>
        </aside>
      </div>
    </div>
</div>
  )
}
