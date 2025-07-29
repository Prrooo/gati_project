import Image from "next/image"

interface SteelOption {
  heading: string
  para: string
  img: string
}

export const Skyling = () => {

  const steelOptions: SteelOption[] = [
    {
      "heading": "Curb Mounted Prismatic Skylights",
      "para": "Perfect for new construction or retrofit applications with any Kirby roof, this patented dome skylight is designed with a double glazed acrylic over acrylic lens. The highest UV resistant materials ensures maximum light transmission with better quality light and energy savings – greatly reducing electric lighting use.",
      "img": "/images/prodImages/sky1.jpg"
    },
    {
      "heading": "Prismatic Skylight Roof Curb System",
      "para": "A successful roof curb system is one of the key barriers against the elements for any building. It is essential that every component is of the highest quality and able to withstand severe weather conditions. Although choosing a roof curb specially designed for a specific metal roof profile is critical, it is only part of a successful roof curb system.",
      "img": "/images/prodImages/sky2.jpg"
    },
    {
      "heading": "Skylights with LED Lighting & Controls",
      "para": "Designed for complete illumination strategies, our skylights integrate prismatic natural light diffusers, energy‑saving LED luminaires, and sophisticated control technologies to curtail your power bills. The synergy of prismatic skylights with efficient LED lighting and smart controls can lower your yearly electric lighting demand by as much as 40–60%.",
      "img": "/images/prodImages/sky3.jpg"
    },
    {
      "heading": "Smoke & Heat Vent Skylights",
      "para": "Smoke-and-heat vent skylights function as emergency rooftop vents, most often found in warehouses, manufacturing plants, and large retail centers. When fire is detected, these units spring open to vent smoke, superheated air, and harmful gases—fully adhering to the stipulations of Building Code Section 910.",
      "img": "/images/prodImages/sky4.jpg"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Prismatic Skylights: Maximize Light Transmission. Save Energy.</h1>
      <h2 className="opacity-70 text-2xl py-4">Prismatic skylights: increasing energy savings by reducing your need for electric light</h2>
      <div className="flex gap-8">
        <p className="basis-4/5 opacity-70">Our prismatic skylights channel softened daylight into your building, so you can lower or eliminate artificial lighting for part of the day. The prisms break sunlight into fine light shafts that spread across the ceiling plane, bathing work areas in uniform, glare‑free illumination. Properly integrated, this approach cuts electric lighting consumption during daylight hours—delivering energy savings and cost reductions without compromising thermal comfort.</p>
        <div className="basis-1/5">
          <Image src='/images/prodImages/sky0.jpg' alt="ig" height={200} width={300} className="rounded-2xl" />
        </div>
      </div>
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


