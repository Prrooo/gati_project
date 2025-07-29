import Image from "next/image"
export const PanelColor = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Steel Building Colors</h1>
      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2"> Vibrant Roof and Wall Palettes</h2>
          <p className="mb-4 opacity-70">Our interactive color‐picker lets you effortlessly preview different color schemes to achieve the ideal aesthetic for your custom steel building. Just click through the tabs at the top to explore options for your roof, walls, trim, and wainscot (wainscot finishes are non‑standard). Please note that actual colors may differ slightly due to monitor display variations.</p>
          <p className="opacity-70">Give your steel structure a fresh look with an array of roof and wall colors—from classic neutrals to bold tones. Our high‑performance coatings resist fading and chalking, so your building stays true to its original hue year after year.</p>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/prodImages/panel1.jpg' alt="ig" width={300} height={200} />
        </div>
      </div>


      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2"> Accent Trim and Door Highlights</h2>
          <p className="mb-4 opacity-70">Small details make a big impact. Choose contrasting trim and door colors to accentuate architectural lines, draw the eye, and reinforce your brand identity without repainting the entire building.
            By selecting metallic or matte finishes, you can create subtle or bold visual cues that guide visitors to entry points. Seasonal accents—like festive reds or cool blues—also let you refresh your building’s look throughout the year.</p>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/prodImages/panel2.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>

      <div className="flex gap-4 my-8">
        <div className="basis-4/5">
          <h2 className="text-xl text-orange-500 mb-2">Wainscot and Lower‑Wall Options</h2>
          <ul className="opacity-70 list-disc list-inside ps-4">
            <li>Adds depth and visual interest by breaking up large metal surfaces</li>
            <li>Shields lower walls from scuffs, dirt, and daily wear</li>
            <li>Creates a clean two‑tone aesthetic for a polished look</li>
            <li>Offered in corrugated, ribbed, or smooth profiles to suit your style</li>
            <li>Can either blend seamlessly with siding or serve as a standout design feature</li>
            <li>Coated with the same durable finishes as your roof and walls for minimal maintenance</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <Image className="rounded-2xl" src='/images/prodImages/panel3.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>


    </div>
  )
}
