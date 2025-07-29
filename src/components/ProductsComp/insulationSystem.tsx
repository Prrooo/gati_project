import Image from "next/image"

interface SteelOption {
  heading: string
  para: string
  img: string
}

export const InsulationSystem = () => {

  const steelOptions: SteelOption[] = [
    {
      "heading": "Silvercote Roof & Wall Insulation Systems ",
      "para": "Building Systems is proud to partner with Silvercote, a leading provider of innovative insulation solutions. As trusted industry experts, they understand the unique needs of our Builders and customers and provide optimal energy performance insulation solutions for metal buildings.",
      "img": "/images/career.jpg"
    },
    {
      "heading": "R-Boost Elevated Roof Insulation",
      "para": "R-Boost is an economical roof insulation solution that achieves the increased levels of thermal performance the latest codes demand.  R-Boost is a unique design that features a bridge between an initial and secondary layer of blanket insulation – doubling the insulation capacity.",
      "img": "/images/career.jpg"
    },
    {
      "heading": "Insulated Metal Panels",
      "para": "One of the most sophisticated building products on the market today, insulated wall and roof panels offer a clean, high-quality appearance that immediately adds value to any building. Designed with the latest scientific breakthroughs, they are lightweight, and durable while maintaining their ease of installation and visual appeal.",
      "img": "/images/career.jpg"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Roof and Wall Insulation Systems Increase the Efficiency and Sustainability of Your Metal Building </h1>
      <p className="py-6 opacity-70">Proper insulation plays a vital role in the overall comfort and safety of your metal building. Investing in a comprehensive insulation system is an excellent option if you’re looking to save money and improve the functionality of your metal building. At Kirby Building Systems our goal is to offer our Builders and customers a range of insulation solutions that maximize the thermal performance of your building.</p>

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

