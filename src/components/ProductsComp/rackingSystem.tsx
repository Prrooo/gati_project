import Image from "next/image"

export const RackingSystem = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Racking Systems for Your Metal Building</h1>
      <h2 className="opacity-70 text-xl py-4">By offering racking solutions for warehouse, distribution centers, cold storage, and more we are able to help every one of our partners achieve the goals of your operation</h2>
      <div className="flex gap-4">
        <div className="basis-3/5">
          <h2 className="text-xl text-orange-500 mb-2">Cost-Effective Racking Systems Tailored to the Needs of Your Operation</h2>
          <p className="mb-4 opacity-70">Nucor Warehouse Systems delivers end‑to‑end project solutions, guiding you from initial concept through final installation. Our team of specialists custom‑engineers each system to meet your facility’s precise requirements, then sources and installs all components with meticulous attention to detail. At every milestone, we uphold the exceptional service and craftsmanship our clients expect—and truly deserve.</p>
          <p className="opacity-70">Our portfolio includes a wide array of storage products engineered to address the varied demands of modern warehouses. By collaborating closely with you, our specialists identify your priorities and propose the optimal configuration—delivering a solution that maximizes space utilization while keeping costs under control.</p>
        </div>
        <div className="basis-2/5">
          <Image className="rounded-2xl" src='/images/prodImages/rack1.jpg' alt="ig" width={400} height={300} />
        </div>
      </div>
      <h1 className="text-xl text-orange-500 mb-2">Racking Systems and Platforms for Any Size Building</h1>
      <p className="mb-4 opacity-70">Our partners at Nucor Warehouse Systems work with businesses of all sizes— from massive distribution centers for some of the leading supply chain contributors in the country to more conservative, local operations. We offer one of the most diverse product lines in the country through our offerings in the structural, roll form, tubular and cantilever product lines. Offering access to solutions from the largest pallet rack manufacturer in the world, our team can meet the needs of your operation. Whether it’s new construction or retrofit, we’re ready to get started on your next project. Download the Warehouse Racking Solutions brochure or submit a form to contact our team to learn more.</p>
      <div className="flex gap-4">
        <Image src='/images/prodImages/rack2.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/rack3.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/rack4.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
        <Image src='/images/prodImages/rack5.jpg' width={300} height={200} alt="ig" className="rounded-2xl" />
      </div>
    </div>
  )
} 
