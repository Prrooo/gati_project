import Image from "next/image"
export const PanelColor = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Overhead Doors for Your Commercial and Industrial Building</h1>
      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2">Maximize Your Building’s Overhead Space</h2>
          <p className="mb-4 opacity-70">Mezzanines help you capitalize on unused overhead space, delivering extra floor area without the expense of enlarging your building’s footprint.</p>
          <p className="opacity-70">Kirby delivers some of the steel‑building industry’s most space‑efficient mezzanines, fully custom‑engineered to your exact requirements. Our cost‑effective, innovative mezzanine systems include every steel and structural component you need for a seamless installation.</p>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/career.jpg' alt="ig" width={300} height={200} />
        </div>
      </div>


      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2"> Custom Designed Mezzanines</h2>
          <p className="mb-4 opacity-70">Mezzanines offer the most cost‑effective way to expand your usable floor area, whether you need extra storage, a break room, office or meeting space, or a second‐level athletic area. Custom‑engineered to support your building’s load requirements, these platforms typically attach to an existing wall and can span part or all of your metal building’s floor footprint.</p>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/career.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>

      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2">Advantages for Metal Building Mezzanines </h2>
          <ul className="opacity-70 list-disc list-inside ps-4">
            <li>Gain extra usable area without expanding your building’s footprint</li>
            <li>Crafted from eco‑friendly, recycled steel</li>
            <li>Offers spacious, unobstructed dimensions</li>
            <li>Constructed from non‑combustible steel for enhanced safety</li>
            <li>More cost‑effective than adding ground‑level square footage</li>
            <li>Keeps your ground floor layout largely open and flexible</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/career.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>


    </div>
  )
}
