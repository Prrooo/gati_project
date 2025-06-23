"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const photos = [
  {
    path: "sub1.jpg",
    text: "Turner Construction Company to Build Soccer...",
    link: "#",
  },
  {
    path: "sub2.jpg",
    text: "Turner Recognized as a Great Place to Work by...",
    link: "#",
  },
  {
    path: "sub3.jpg",
    text: "Trinity Alliance selected as Construction...",
    link: "#",
  },
  {
    path: "sub4.jpg",
    text: "Turner Named One of America’s Greatest...",
    link: "#",
  },
  {
    path: "sub5.jpg",
    text: "Turner Reaches Milestone on Clemson University...",
    link: "#",
  },
  {
    path: "sub6.jpg",
    text: "Turner Earns ISO 14001 Certification for...",
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
      <aside className="container mx-auto flex flex-col md:flex-row items-center gap-6 px-4 py-8">
        <div className="w-full md:w-1/2 relative h-48 md:h-64 lg:h-80">
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

      <div
        ref={horizRef}
        className="flex gap-[2vw] my-[7vw] mx-[10vw] justify-items-center overflow-x-hidden"
      >
        {photos.map((file) => (
          <div
            key={file.text}
            className="flex flex-col gap-[1vw] justify-items-center"
          >
            <div className="w-[20vw] ">
              <Image
                src={`/images/${file.path}`}
                alt="photo"
                width={256}
                height={256}
                className="w-full h-full rounded-2xl object-cover transform transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
            <div>
              <p>{file.text}</p>
            </div>
            <Link href={file.link} className=" opacity-60">
              READ MORE ➜
            </Link>
          </div>
        ))}
      </div>

      <section className="container mx-auto px-4 py-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
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
