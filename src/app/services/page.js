/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function ServicePage() {
  return (
    <>
      <NavbarComponent />
      <div className="relative mx-auto max-w-full">
        <img src="https://suitmedia.static-assets.id/storage/files/600/5.jpg" alt="Hero" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-lg">Suitmedia combines Customer Experience, Data Analytics, and ROI oriented</p>
          <p className="text-lg">approaches to help our clients succesd through digital innovation.</p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
