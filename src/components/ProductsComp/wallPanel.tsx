import Image from "next/image"
export const WallPanel = () => {

  interface WallPanelOption {
    heading: string
    para: string
    img: string
  }


  const wallOptions: WallPanelOption[] = [
    {
      "heading": "R-Panel",
      "para": "R‑Panel wall panels offer a durable and visually appealing solution, well‑suited for a wide range of building types—including commercial, agricultural, and industrial facilities. With a net coverage width of 36″ per panel, the profile features a ribbed design that enhances strength and longevity, making it ideal for demanding exterior wall applications.",
      "img": "/images/prodImages/wall1.jpg"
    },
    {
      "heading": "A-Panel",
      "para": "A‑Panel is a semi‑concealed fastener wall panel designed with a sculpted valley between its major ribs, offering a clean and graceful architectural appearance. Each panel provides a 36″ net coverage with major ribs spaced 12″ apart, creating a consistent and attractive profile. Subtle minor striations not only enhance the panel’s visual appeal but also contribute to its overall strength. The A‑Panel is a versatile choice, well‑suited for fascias, accent walls, and decorative exterior applications.",
      "img": "/images/prodImages/wall2.jpg"

    },
    {
      "heading": "Reverse R-Panel",
      "para": "Reverse R‑Panel is a semi‑concealed fastener wall panel featuring inverted major ribs spaced at 12″ centers, with two minor ribs positioned between each set. Providing 36″ of net coverage, this panel delivers a clean, decorative shadow line that draws attention to the architectural elegance of the wall surface. Its rigid profile helps compress insulation effectively, preventing unsightly bulges at the girt line and maintaining a smooth, professional exterior appearance.",
      "img": "/images/prodImages/wall3.jpg"
    },
    {
      "heading": "Translucent Wall Panels",
      "para": " Translucent wall panels allow a great deal of light to transmit into your building, offering a source of natural illumination and energy savings. They are offered in R-Panel, Reverse R-Panel, and A-Panel profiles.",
      "img": "/images/prodImages/wall4.jpg"
    },
    {
      "heading": "Liner Panel",
      "para": "Many times liner panels are specified to protect and to finish the building interior. Our R-Panel is coated with a polyester paint system and is ideal for most liner conditions not exposed to weather.",
      "img": "/images/prodImages/wall5.jpg"
    },
    {
      "heading": "Insulated Metal Wall Panels",
      "para": "Cutting-edge energy efficiency with attractive styling. Insulated metal wall panels are one of the most sophisticated building products on the market today. They offer a clean, consistent, and high-quality appearance that will immediately add value to any building. Hidden fasteners give the panel an aesthetically appealing appearance.",
      "img": "/images/prodImages/wall6.jpg"
    }


  ]


  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Steel Roof Panel Systems</h1>
      {wallOptions.map((option, index) => {
        const { heading, para, img } = option;
        return (
          <div key={index} className="my-4 flex gap-4">
            {/* fixed‑size container */}
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
            <div className="flex-1 relative">
              <h3 className="text-lg font-semibold mb-2">{heading}</h3>
              <p className="opacity-70">{para}</p>

              <div className="absolute bottom-0 mt-auto w-full h-[1.5px] bg-black" />
            </div>
          </div>
        )
      })}

    </div>
  )
}

