import Image from "next/image"
export const RoofPanel = () => {

  interface RoofOption {
    heading: string
    para: string
    img: string
  }


  const roofOptions: RoofOption[] = [
    {
      "heading": "SS360 Standing Seam",
      "para": "Our SS360 standing‑seam roof is engineered with a network of sliding clips that accommodate thermal movement without stressing the panels. Each SS360 panel spans 24″ and features 3″‑tall trapezoidal ribs. Panels interlock using an electric seamer to roll the seams a full 360°, delivering an exceptionally tight seal that architects and specifiers favor for its superior weathertight performance.",
      "img": "/images/prodImages/roof1.jpg"
    },
    {
      "heading": "Loc Seam Vertical Rib Standing Seam",
      "para": "The Loc Seam vertical‑rib system from Kirby offers a refined aesthetic and is especially suited to high‑pitch roofs and architectural installations. Panels measure 16″ wide with a pronounced 2″ vertical seam that accentuates clean lines. Both the Loc Seam 90 and the Loc Seam 360 options are joined in the field by an electric seamer, with the 360 version providing a robust double‑lock seam encompassing a full 360°, ensuring exceptional durability and weathertight performance.",
      "img": "/images/prodImages/roof2.jpg"

    },
    {
      "heading": "R-Panel",
      "para": "A trusted standard for decades, the Kirby R‑Panel is prized for its ease of installation and reliable performance. The design incorporates 1¼″ ribs on 12″ centers, which produce an even shadow effect across the roof surface. Covering 36″ per panel and reinforced between each rib, R‑Panels combine visual appeal with superior rigidity.",
      "img": "/images/prodImages/roof3.jpg"

    },
    {
      "heading": "Translucent Roof Panels",
      "para": "Translucent roof panels are offered for both Kirby’s R‑Panel and SS360 standing seam roofing systems, with options available in insulated and non‑insulated formats to suit a variety of lighting and thermal performance needs. The R‑Panel translucent panels come in convenient lengths of 5′‑4″ and 10′‑8″, making them adaptable for different roof spans. SS360 translucent panels are available in a 10′‑6″ length and incorporate a patented bonding barrier made of high‑strength, 100% acrylic resin reinforced with fiberglass, ensuring enhanced durability and long‑term performance.",
      "img": "/images/prodImages/roof4.jpg"

    }
  ]


  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Steel Roof Panel Systems</h1>
      {roofOptions.map((option, index) => {
        const { heading, para, img } = option;
        return (
          <div key={index} className="my-4 flex items-start gap-4">
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
