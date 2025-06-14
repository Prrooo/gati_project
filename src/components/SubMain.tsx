"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// ! leading fixx

//const photos = [
//  "sub1.jpg",
//  "sub2.jpg",
//  "sub3.jpg",
//  "sub4.jpg",
//  "sub5.jpg",
//  "sub6.jpg",
//];

const photos = [
  {
    path: "sub1.jpg",
    text: "Turner Construction Company to Build Soccer...",
    link: "",
  },
  {
    path: "sub2.jpg",
    text: "Turner Recognized as a Great Place to Work by...",
    link: "",
  },
  {
    path: "sub3.jpg",
    text: "Trinity Alliance selected as Construction...",
    link: "",
  },
  {
    path: "sub4.jpg",
    text: "Turner Named One of America’s Greatest...",
    link: "",
  },
  {
    path: "sub5.jpg",
    text: "Turner Reaches Milestone on Clemson University...",
    link: "",
  },
  {
    path: "sub6.jpg",
    text: "Turner Earns ISO 14001 Certification for...",
    link: "",
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
      "We are sustaining the right environment where people can be at their best, be authentic, and are treated with dignity and respect.  This includes working every day to eliminate hate and bias from our industry.",
    link: "#",
    image: "slide3.jpg",
  },
  {
    minHeading: "ENVI",
    heading: "Environmental Sustainability and Resiliency",
    content:
      "We conduct our business consiously and responsibly, creating a healthy, prosperous and sustainable future for people and the planet.",
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
  const [index, useIndex] = useState(0);

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

  return (
    <div className="flex flex-col overflow-y-auto">
      <aside className="flex justify-center gap-[4vw] mx-[10vw]">
        <Image
          src="/images/main1.jpg"
          alt="SubMain"
          width={300}
          height={300}
          className="object-contain rounded-2xl w-[50vw]"
        />
        <div className="flex flex-col gap-[1vw] justify-center">
          <p className="text-[1vw] text-blue-800">INDIA</p>
          <p className="text-[2.5vw] leading-[2.4vw]">
            Our Work In Your Local Community
          </p>
          <p className="text-[1.2vw]">
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
      <div className="my-[1vw]">
        <p className="text-[3vw] mx-[10vw] mb-[2vw]">Our Culture</p>
        <p className="text-[1.5vw] opacity-65 leading-[2vw] mx-[10vw]">
          Our vision is to be the highest-value provider of global construction
          services and technical expertise while we make a difference in the
          lives of people, customers, the community, and the environment.
        </p>
        <div className="flex justify-between mx-[10vw] my-[4vw] gap-[5vw] ">
          <div className="flex leading-[3vw] p-[3vw] bg-blue-800 text-white text-[1.5vw] rounded-2xl">
            <ul>
              <li>ESG</li>
              <li>Community</li>
              <li>DE$2</li>
              <li>Environmental</li>
              <li>Innovation</li>
              <li>Safety</li>
            </ul>
          </div>
          <div className="flex gap-[1vw]">
            <div className="flex mt-[3vw] flex-col gap-[1vw]">
              <p className="text-blue-800 font-bold text-[0.9vw]">{subSection[index].minHeading}</p>
              <p className="text-[2.3vw]">{subSection[index].heading}</p>
              <p>{subSection[index].content}</p>
              <Link href={subSection[index].link}>LEARN MORE</Link>
            </div>
            <Image
              src={`/images/${subSection[index].image}`}
              alt="photo"
              width={450}
              height={256}
              className=" rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
