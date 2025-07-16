"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react"; // Using Linkedin icon as an example
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Executive {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  fullBio?: string; // For detailed view
}

const executivesData: Executive[] = [
  {
    id: "1",
    name: "Mr. Sandeep Raj",
    title: "Founder & Director, Head of Design",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Mr.+Sandeep+Raj", // Replace with actual image path if available
    bio: `Mr. Sandeep Raj is the visionary Founder and Director of GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED. An esteemed alumnus of the Indian Institute of Technology (IIT) Roorkee, he holds a Master’s degree in Structural Engineering, a specialization that forms the backbone of the company’s core technical competencies.
  
  With a deep understanding of structural dynamics and cutting-edge engineering methodologies, Mr. Raj is widely regarded as the architect of the organization’s vision and technical philosophy. His academic pedigree, combined with extensive field experience, has enabled him to lead the company’s foray into complex commercial infrastructure projects, specializing in steel-framed buildings, industrial sheds, hangars, and turnkey structural solutions.
  
  As the Head of the Design Department, Mr. Raj takes an active and hands-on role in every project’s conceptualization, structural analysis, and design execution. His approach is rooted in precision, innovation, and efficiency—ensuring that every design not only meets industry standards but also addresses client-specific operational and aesthetic requirements.
  
  Beyond technical leadership, he plays a strategic role in driving the company’s growth, shaping its long-term goals, and building a reputation grounded in engineering excellence, integrity, and client satisfaction. His leadership has empowered the organization to consistently deliver cost-effective, durable, and scalable solutions to clients across various sectors in India.
  
  Under his direction, GATIH STRUCTIFORM ENGINEERS has become synonymous with reliability, structural innovation, and timely execution, reflecting his relentless pursuit of engineering perfection.`,
  },
  {
    id: "2",
    name: "Mrs. Jyoti Yadav",
    title: "Co-Founder & Director, Head of Marketing",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Jyoti+Yadav", // Replace with actual image path if available
    bio: `Mrs. Jyoti Yadav is the Co-Founder and Director of GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED. She currently leads the company’s Marketing Division with a strong focus on strategic branding, market outreach, and client engagement.
  
  With a keen understanding of industry trends and client behavior, she plays a vital role in shaping the company’s public presence and growth trajectory. Her leadership ensures that the brand resonates with current and potential clients, establishing a trusted reputation in the competitive commercial construction sector.
  
  Mrs. Yadav’s approach blends traditional relationship-building with modern marketing strategies, helping GATIH STRUCTIFORM expand its footprint across India. Her dedication and client-centric mindset have been instrumental in forging lasting partnerships and bringing new business opportunities to the firm.`,
  },
  {
    id: "3",
    name: "Mr. Pranav Saxena",
    title: "Director, Sales & Project Execution",
    imageUrl: "/placeholder.svg?width=200&height=250&text=Pranav+Saxena", // Replace with actual image path if available
    bio: `Mr. Pranav Saxena serves as the Director at GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED, overseeing the company’s Sales and Project Execution functions. 

Having recently joined the leadership team, Mr. Saxena brings a fresh perspective and energetic approach to managing client relationships and ensuring the seamless execution of ongoing projects. His role is pivotal in aligning sales objectives with project deliverables, making sure that client expectations are met with precision and professionalism.

He plays a hands-on role in coordinating between the design, fabrication, and site execution teams, enabling GATIH STRUCTIFORM to maintain its reputation for timely and quality-driven project delivery. With a strong operational focus and a result-oriented mindset, Mr. Saxena is steadily contributing to the company’s growth and client satisfaction across India.`,
  },
];

export default function CompanyProfilePage() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive>(
    executivesData[0]
  );

  const handleSelectExecutive = (executive: Executive) => {
    setSelectedExecutive(executive);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mt-40 mb-20 min-h-screen bg-white text-gray-800 py-8 px-4 md:px-8">
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
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">
                      {selectedExecutive.name}
                    </h1>
                    <p className="text-md font-semibold text-gray-700 mb-4">
                      {selectedExecutive.title}
                    </p>
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
                    ${
                      selectedExecutive.id === exec.id
                        ? "bg-gray-100 font-semibold"
                        : "bg-white"
                    }`}
                  >
                    <span className="text-sm md:text-base">{exec.name}</span>
                    <span className="text-xs md:text-sm text-gray-600">
                      {" "}
                      - {exec.title}
                    </span>
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
                <div className="mb-3">
                  <Image
                    src="/images/vp.jpg" // Replace with actual image
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
                  <span className="font-bold text-sky-600">GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED</span>{" "}
                  Holding Company celebrating{" "}
                  <span className="font-bold">
                    7<sup>th</sup>
                  </span>{" "}
                  anniversary.
                </p>
                {/* LinkedIn Follow - Basic representation */}
                <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded bg-gray-50 w-fit">
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#0077B5] hover:underline"
                    >
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
      <Footer />
    </div>
  );
}
