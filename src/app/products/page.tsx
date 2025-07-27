"use client"

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Products() {

  const [currProduct, setCurrProduct] = useState<number>(0);
  const productsList: Array<String> = ["Steel Framing System", "Roof Panel System", "Wall Panel System", "Panel Colors", "Insulation System", "Skyling And Daylight", "Racking System", "Overhead Doors"];


  return (
    <div>
      <Navbar />
      <div className="mt-32 flex max-w-11/12  mx-auto gap-4">
        <div className="flex-none w-1/6">
          <ul className=" text-white font-bold bg-gray-700 rounded-2xl">
            {productsList.map((product, index) => (
              <li key={index} className={`border py-7 flex ${currProduct === index ? 'bg-gray-900' : ''}`} onClick={() => { setCurrProduct(index) }}>
                <button className="w-full  ">{product}</button>
                <span className="pr-4">ᐳ</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-300 flex-1">
          {currProduct == 0 && (<div>curr index 1 </div>)}
          {currProduct == 1 && (<div>curr index 2</div>)}
          {currProduct == 2 && (<div>curr index 3</div>)}
          {currProduct == 3 && (<div>curr index 4</div>)}
          {currProduct == 4 && (<div>curr index 5</div>)}
          {currProduct == 5 && (<div>curr index 6</div>)}
          {currProduct == 6 && (<div>curr index 7</div>)}
          {currProduct == 7 && (<div>curr index 8</div>)}
        </div>
      </div>
    </div >
  )
}
