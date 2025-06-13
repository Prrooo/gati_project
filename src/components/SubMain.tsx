"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

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

export default function SubMain() {
  const horizRef = useRef<HTMLDivElement>(null);

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
          <p className="text-[2.5vw] leading-10">
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
        className="flex gap-[2vw] my-[5vw] mx-[10vw] justify-items-center overflow-x-hidden"
      >
        {photos.map((file) => (
          <div key={file.text} className="flex flex-col gap-[1vw] justify-items-center">
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
      <div >
        <p className="text-[3vw] mx-[10vw] mb-[2vw]">Our Culture</p>
        <p className="text-[1.5vw] opacity-65 leading-8 mx-[10vw]">Our vision is to be the highest-value provider of global construction services and technical expertise while we make a difference in the lives of people, customers, the community, and the environment.</p>
        <div>
            
        </div>
      </div>
    </div>
  );
}
