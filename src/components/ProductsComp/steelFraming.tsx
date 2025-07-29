import Image from "next/image"

interface SteelOption {
  heading: string
  para: string
  img: string
}

export const SteelFraming = () => {

  const steelOptions: SteelOption[] = [
    {
      "heading": "Gable Clear Span Rigid Frame",
      "para": "When large open spaces are necessary, the gable clear span frame type is typically the economical choice. This tapered member frame can be designed in symmetrical or asymmetrical configurations. It is compatible with both cold-form purlins and open web joists, including our ClearBay option.",
      "img": "/images/career.jpg"
    },
    {
      "heading": "Gable Modular Rigid Frame",
      "para": "The interior columns provide multiple spans on wider buildings. This economical frame type is common in building widths from 80′ to more than 300′ where multiple spans are suitable.  The modular frame is compatible with both cold-form purlins and open web joists.",
      "img": "/images/career.jpg"
    },
    {
      "heading": "Single Slope Rigid Frame",
      "para": "Available in clear span or modular, the single slope framing system is a flexible design solution that offers a sloping roof in one plane. This is an excellent option when drainage restrictions are an issue. Parapet conditions & facades are often used to give the appearance that all walls are the same height.  A very economical solution, single slopes are often used to expand a building in the event it was not designed to carry a lean-to load.",
      "img": "/images/career.jpg"
    },
    {
      "heading": "Lean-to",
      "para": "A lean-to steel frame offers a sloping roof in one plane. It is joined to, and supported by a main building frame. Parapet conditions & facades can be used to give the appearance that all walls are the same height. An economical option when adding space to an existing structure, a lean-to must be supported on the high side by an adjoining building column.",
      "img": "/images/career.jpg"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Steel Building Framing Systems</h1>
      <p className="py-6 opacity-70">From our Gatih headquarters, seasoned engineers employ the latest Building Information Modeling (BIM) 3D technology to generate a tailor‑made, virtual facsimile of your project. This comprehensive digital prototype allows us to accurately render every structural element—foundations, framing, supports, and connections—during design, so you benefit from enhanced clarity, fewer revisions, and a more reliable construction schedule.</p>
      <h1 className="text-3xl font-bold py-7 pt-0 text-orange-400 ">Primary Steel Framing Options</h1>
      <p className="pb-6 opacity-70">We’ll custom‑craft your steel building to align perfectly with your dimensional specifications and performance criteria. From wide, uninterrupted clear spans to adaptable modular framing systems, our solutions span virtually any length, width, or height you envision. The result is a truly flexible design that adapts to both current operational needs and future growth opportunities.</p>

      {steelOptions.map((option, index) => {
        const { heading, para, img } = option;
        return (
          <div key={index} className="my-4 flex items-start gap-4">
            <div className="w-64 h-48  overflow-hidden ">
              <Image
                src={img}
                alt={heading}
                layout="responsive"
                width={400}
                height={300}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{heading}</h3>
              <p className="opacity-70">{para}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
