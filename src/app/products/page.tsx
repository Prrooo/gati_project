"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { InsulationSystem } from "@/components/ProductsComp/insulationSystem";
import { OverheadDoors } from "@/components/ProductsComp/overheadDoors";
import { PanelColor } from "@/components/ProductsComp/panelColor";
import { RackingSystem } from "@/components/ProductsComp/rackingSystem";
import { RoofPanel } from "@/components/ProductsComp/roofPanel";
import { Skyling } from "@/components/ProductsComp/skyling";
import { SteelFraming } from "@/components/ProductsComp/steelFraming";
import { WallPanel } from "@/components/ProductsComp/wallPanel";
import Image from "next/image";
import { useState } from "react";

export default function Products() {

  const [currProduct, setCurrProduct] = useState<number>(-1);
  const productsList: Array<string> = ["Steel Framing System", "Roof Panel System", "Wall Panel System", "Panel Colors", "Insulation System", "Skyling And Daylight", "Racking System", "Overhead Doors"];


  return (
    <div>
      <Navbar />
      <div className="mt-32 mb-20 flex max-w-9/12  mx-auto gap-6">
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
        <div className="flex-1">
          {currProduct === -1 && (
            <div>
              <h1 className="text-3xl font-bold py-7 pt-0 border-b-2 border-b-gray-900">Steel Building Product Systems</h1>
              <p className="py-6 opacity-70 "> At Gatih, we develop and deliver comprehensive structural solutions meticulously crafted to strike the perfect balance between high performance, cost-effectiveness, and enduring return on investment. Our commitment is to engineer and supply premium-grade steel architecture that is fully customized, optimizes energy consumption, and upholds stringent environmental standards for sustainable operation over its entire lifecycle.</p>
              <div className="flex w-full">
                <div className="w-4/6 flex flex-col gap-5">
                  <div className="relative h-64 " onClick={() => setCurrProduct(0)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Steel Framing System</p>
                    <Image src='/images/steelFraming.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-64" onClick={() => setCurrProduct(1)} >
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Roof Panel System</p>
                    <Image src='/images/roofPanel.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-64" onClick={() => setCurrProduct(2)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Wall Panel System</p>
                    <Image src='/images/wallPanel.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                </div>
                <div className="w-4/12 flex flex-col gap-5 pl-4">
                  <div className="relative h-40 " onClick={() => setCurrProduct(3)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Panel Colors</p>
                    <Image src='/images/panelColor.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-40" onClick={() => setCurrProduct(4)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Insulation System</p>
                    <Image src='/images/insulationSystem.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-40" onClick={() => setCurrProduct(5)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Skyling And Daylight</p>
                    <Image src='/images/skylight.jpeg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-40" onClick={() => setCurrProduct(6)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Racking System</p>
                    <Image src='/images/rackingSystem.jpg' className="object-cover object-center" alt="test" fill />
                  </div>
                  <div className="relative h-40" onClick={() => setCurrProduct(7)}>
                    <p className="absolute w-full bg-orange-400 text-center bottom-3 text-white z-10">Overhead Doors</p>
                    <Image src='/images/overheadDoors.jpeg' className="object-cover object-center" alt="test" fill />
                  </div>
                </div>
              </div>
            </div>)}
          {currProduct == 0 && (<SteelFraming />)}
          {currProduct == 1 && (<RoofPanel />)}
          {currProduct == 2 && (<WallPanel />)}
          {currProduct == 3 && (<PanelColor />)}
          {currProduct == 4 && (<InsulationSystem />)}
          {currProduct == 5 && (<Skyling />)}
          {currProduct == 6 && (<RackingSystem />)}
          {currProduct == 7 && (<OverheadDoors />)}
        </div>
      </div>
      <Footer />
    </div >
  )
}
