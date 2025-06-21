"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin } from "lucide-react" // Using Linkedin icon as an example

interface Executive {
  id: string
  name: string
  title: string
  imageUrl: string
  bio: string
  fullBio?: string // For detailed view
}

const executivesData: Executive[] = [
  {
    id: "1",
    name: "Nawaf Mohammed Al Zamil",
    title: "President, Zamil Steel Holding",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Nawaf+M.+Al+Zamil", // Replace with actual image
    bio: "Nawaf Al Zamil was appointed President of Zamil Steel Holding in December 2021. Previously he was serving as Executive Vice President of Zamil Steel Holding and, as General Manager of Towers & Galvanizing division of Zamil Steel. Since July 2004 he was serving as General Manager of Zamil Glass Industries (ZGI). Prior to joining ZGI, he was Deputy General Manager for International Sales of the Pre-Engineered Buildings Business Unit in Zamil Steel in January 2003.\n\nHe joined Zamil Steel in 1996 as a Purchasing Coordinator and in addition to this role was also promoted to Transport Manager in 1997, where he oversaw the import and export of the company’s raw materials and finished products. In 2000, he was promoted to the position of Purchasing Manager and was also the Purchasing Manager of Zamil Steel Egypt as well as Zamil Steel Vietnam.\n\nHe holds a Business Administration (BA) degree from Clark University, Massachusetts, USA, and an Executive MBA from King Fahd University of Petroleum and Minerals (KFUPM).",
  },
  {
    id: "2",
    name: "Krishnakanth Kodukula",
    title: "Vice President, Zamil Steel Holding",
    imageUrl: "/placeholder.svg?width=200&height=250&text=K.+Kodukula", // Replace with actual image
    bio: "Brief bio for Krishnakanth Kodukula...",
    fullBio:
      "Full bio for Krishnakanth Kodukula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Orwah Samara",
    title: "General Manager, Zamil Steel Structures, Saudi Arabia",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Orwah+Samara", // Replace with actual image
    bio: "Brief bio for Orwah Samara...",
    fullBio:
      "Full bio for Orwah Samara. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "4",
    name: "Bashar Al-Hanbali",
    title: "General Manager, Zamil Process Equipment & ZIMIPCO",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Bashar+Al-Hanbali", // Replace with actual image
    bio: "Brief bio for Bashar Al-Hanbali...",
    fullBio:
      "Full bio for Bashar Al-Hanbali. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "5",
    name: "Khaled Saad",
    title: "General Manager, Zamil Steel Buildings Co. Egypt (S.A.E.)",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Khaled+Saad", // Replace with actual image
    bio: "Brief bio for Khaled Saad...",
    fullBio:
      "Full bio for Khaled Saad. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

export default function CompanyProfilePage() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive>(executivesData[0])

  const handleSelectExecutive = (executive: Executive) => {
    setSelectedExecutive(executive)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Selected Executive Profile */}
            <div className="mb-8 p-4 border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                  <Image
                    src={selectedExecutive.imageUrl || "/placeholder.svg"}
                    alt={`Photo of ${selectedExecutive.name}`}
                    width={200}
                    height={250}
                    className="object-cover w-full md:w-[200px] h-auto md:h-[250px] border border-gray-300"
                  />
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{selectedExecutive.name}</h1>
                  <p className="text-md font-semibold text-gray-700 mb-4">{selectedExecutive.title}</p>
                  <div className="text-sm leading-relaxed space-y-3 whitespace-pre-line">
                    {selectedExecutive.fullBio || selectedExecutive.bio}
                  </div>
                </div>
              </div>
            </div>

            {/* List of Other Executives */}
            <div className="space-y-px">
              {executivesData.map((exec) => (
                <button
                  key={exec.id}
                  onClick={() => handleSelectExecutive(exec)}
                  className={`w-full text-left p-3 border border-gray-200 hover:bg-gray-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500
                    ${selectedExecutive.id === exec.id ? "bg-gray-100 font-semibold" : "bg-white"}`}
                >
                  <span className="text-sm md:text-base">{exec.name}</span>
                  <span className="text-xs md:text-sm text-gray-600"> - {exec.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="p-4 border border-gray-200">
              <div className="mb-3">
                <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-2 py-1 uppercase tracking-wider">
                  Nomenclature
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">Virtual Building Painter</h2>
              <div className="mb-3">
                <Image
                  src="/placeholder.svg?width=300&height=150&text=Virtual+Painter+Ad" // Replace with actual image
                  alt="Virtual Building Painter Advertisement"
                  width={300}
                  height={150}
                  className="w-full h-auto object-contain border border-gray-300"
                />
              </div>
              <a
                href="#" // Replace with actual link
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline"
              >
                Try Virtual Painter
              </a>
            </div>

            <div className="p-4 border border-gray-200">
              <p className="text-sm mb-3">
                <span className="font-bold text-sky-600">Zamil Steel</span> Holding Company celebrating{" "}
                <span className="font-bold">
                  48<sup>th</sup>
                </span>{" "}
                anniversary.
              </p>
              {/* LinkedIn Follow - Basic representation */}
              <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded bg-gray-50 w-fit">
                <Linkedin className="w-6 h-6 text-[#0077B5]" />
                <div>
                  <a href="#" className="text-sm font-semibold text-[#0077B5] hover:underline">
                    Follow
                  </a>
                  <p className="text-xs text-gray-500">89,736 followers</p>
                </div>
              </div>
              {/* Note: For an actual LinkedIn follow button, you'd typically use their official script/widget.
                   This is a visual approximation. */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
