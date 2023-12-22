/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function CareerPage() {
  return (
    <>
      <NavbarComponent />
      <div className="relative mx-auto max-w-full">
        <img src="https://suitmedia.static-assets.id/storage/files/2003/suitmedia-careers-bg.jpeg" alt="Hero" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Career</h1>
          <p className="text-lg">We Never Tire of</p>
          <p className="text-lg">The Mantra Quality Over Quantity</p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
