"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const photos = [
  {
    path: "sub1.jpg",
    text: "GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Construction Company to Build Soccer...",
    link: "#",
  },
  {
    path: "sub2.jpg",
    text: "GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Recognized as a Great Place to Work by...",
    link: "#",
  },
  {
    path: "sub3.jpg",
    text: "Trinity Alliance selected as Construction...",
    link: "#",
  },
  {
    path: "sub4.jpg",
    text: "GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Named One of America’s Greatest...",
    link: "#",
  },
  {
    path: "sub5.jpg",
    text: "GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Reaches Milestone on Clemson University...",
    link: "#",
  },
  {
    path: "sub6.jpg",
    text: "GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Earns ISO 14001 Certification for...",
    link: "#",
  },
];

const subSection = [
  {
    minHeading: "ENV, SOCIAL, AND GOVT STRATEGY",
    heading: "Building Today to Transform Tomorrow",
    content:
      "We support a healthy and more equitable future for our people, our business, and our planet through our ESG strategy.",
    link: "#",
    image: "slide1.jpg",
  },
  {
    minHeading: "COMMUNITY",
    heading: "Community & Citizenship",
    content:
      "We make a difference in the community through our relationships, our partnerships, and our investments.",
    link: "#",
    image: "slide2.jpg",
  },
  {
    minHeading: "DE$2",
    heading: "Diversity, Equity, and Inclusion",
    content:
      "We are sustaining the right environment where people can be at their best, be authentic, and are treated with dignity and respect. This includes working every day to eliminate hate and bias from our industry.",
    link: "#",
    image: "slide3.jpg",
  },
  {
    minHeading: "ENVI",
    heading: "Environmental Sustainability and Resiliency",
    content:
      "We conduct our business consciously and responsibly, creating a healthy, prosperous and sustainable future for people and the planet.",
    link: "#",
    image: "slide4.jpg",
  },
  {
    minHeading: "INNOVATION",
    heading: "Innovation",
    content:
      "We are pioneering advancements that will reinvent how we work, improve people's lives, and shape the future of the industry.",
    link: "#",
    image: "slide5.jpg",
  },
  {
    minHeading: "SAFETY",
    heading: "Safety and Wellness",
    content:
      "We promote an injury-free environment and the safest workplace possible for our employees, trade partners, clients, and project consultants.",
    link: "#",
    image: "slide6.jpg",
  },
];

export default function SubMain() {
  const horizRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const el = horizRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const { scrollWidth, clientWidth, scrollLeft } = el;
      const maxScrollLeft = scrollWidth - clientWidth;
      const delta = e.deltaY;
      if (
        (delta > 0 && scrollLeft < maxScrollLeft) ||
        (delta < 0 && scrollLeft > 0)
      ) {
        el.scrollLeft += delta;
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subSection.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + subSection.length) % subSection.length);
  };
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % subSection.length);
  };

  return (
    <div className="flex flex-col">
      <div className="text-center mb-16 sm:mb-20">
        <div className="mt-30 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          OUR COMMITMENT
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Building a Better Future
          <span className="block text-blue-600">Through Excellence</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Our comprehensive approach to steel building construction encompasses environmental responsibility,
          community engagement, and innovative solutions that shape tomorrow's infrastructure.
        </p>
      </div>
      <aside className="container max-w-5/6 mt-30 mx-auto flex flex-col md:flex-row items-center gap-6 ">
        <div className="w-full md:w-1/2 relative sm:h-96 h-48  rounded-2xl overflow-hidden">
          <Image
            src="/images/main1.jpg"
            alt="SubMain"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-blue-800 text-sm sm:text-base md:text-lg">INDIA</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Our Work In Your Local Community
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Together we can grow communities, strengthen economies, and improve
            lives.
          </p>
        </div>
      </aside>

      <div className="relative md:py-44 py-9">
        {/* Left/Right buttons only on small screens */}
        <button
          onClick={() =>
            horizRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
          }
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Scroll Left"
        >
          ‹
        </button>
        <button
          onClick={() =>
            horizRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
          }
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Scroll Right"
        >
          ›
        </button>

        {/* Scroll container */}
        <div
          ref={horizRef}
          className="
          flex gap-4
          max-w-5/6 
          mx-auto
          overflow-x-hidden snap-x snap-mandatory
          md:snap-none md:justify-center
         "
        >
          {photos.map((file) => (
            <div
              key={file.text}
              className="
              relative 
              snap-start flex-shrink-0
              w-64             
              sm:w-56          
              md:w-[20vw]     
              flex flex-col gap-2
              "
            >
              <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${file.path}`}
                  alt={file.text}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
              <p className="text-center text-sm mb-9  md:text-base">{file.text}</p>
              <div className="absolute w-full bottom-0 text-center">
                <Link href="#" className="flex justify-center text-xs opacity-60 hover:opacity-100">
                  READ MORE ➜
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      <section className="container max-w-5/6 mx-auto mb-20">
        <p className="text-2xl sm:text-3xl  md:text-4xl font-semibold mb-4">
          Our Culture
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          Our vision is to be the highest-value provider of global construction
          services and technical expertise while we make a difference in the
          lives of people, customers, the community, and the environment.
        </p>

        <div className="mb-6">
          <ul className="flex flex-wrap gap-3 text-sm sm:text-base">
            {[
              "ESG",
              "Community",
              "DE$2",
              "Environmental",
              "Innovation",
              "Safety",
            ].map((item) => (
              <li
                key={item}
                className="px-3 py-1 bg-blue-800 text-white rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-blue-800 font-bold text-sm sm:text-base">
              {subSection[index].minHeading}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {subSection[index].heading}
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              {subSection[index].content}
            </p>
            <Link
              href={subSection[index].link || "#"}
              className="inline-block mt-2 text-blue-600 text-base sm:text-lg"
            >
              LEARN MORE ➜
            </Link>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handlePrev}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                aria-label="Previous"
              >
                ‹ Prev
              </button>
              <button
                onClick={handleNext}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                aria-label="Next"
              >
                Next ›
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={`/images/${subSection[index].image}`}
              alt={subSection[index].heading}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
