import Image from "next/image"

export const OverheadDoors = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Overhead Doors for Your Commercial and Industrial Building</h1>
      <h2 className="opacity-70 text-xl py-4"></h2>
      <div className="flex mb-4 gap-4">
        <div className="basis-3/5">
          <h2 className="text-xl text-orange-500 mb-2">Fully functional overhead doors that withstand the toughest industrial environments</h2>
          <p className="mb-4 opacity-70">C.H.I. Overhead Doors, our sister company, provides a wide range of commercial, agricultural, and industrial doors specifically engineered for high‑traffic environments. Designed for relentless daily use, these doors deliver the strength and longevity your facilities demand.</p>
          <p className="opacity-70">We’re thrilled to introduce our builders to the Overhead Doors commercial lineup and its nationwide installer network. Simply request a quote at gatih, and a local installer in your area will be in touch with a personalized estimate for your project.</p>
        </div>
        <div className="basis-2/5">
          <Image className="rounded-2xl" src='/images/prodImages/door1.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>
      <h1 className="text-xl text-orange-500 mb-4">Multiple overhead door options that will fit to your exact specifications</h1>
      <p className="mb-8 opacity-70">Our lineup spans from rugged, industrial panel‑constructed doors to high‑speed, springless impact‑resistant rubber models—all engineered with deep expertise, innovative design, and competitive value. Whether you need sectional, steel, thermally‑efficient insulated sandwich, rolling, or springless doors, we have the perfect solution for your facility. For more details or to connect with an authorized dealer in your area, visit our website.</p>
      <div className="flex gap-6 mt-6">
        <Image src='/images/prodImages/door2.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/door3.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/door4.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/door5.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
      </div>
    </div>
  )
}

