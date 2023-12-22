/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <NavbarComponent />
      <div className="relative mx-auto max-w-full">
        <img src="https://suitmedia.static-assets.id/storage/files/2007/suitmedia-about-bg.jpeg" alt="Hero" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4 hover:text-primary transition duration-300 ease-in-out">About Us</h1>
          <div className="hover:text-primary transition duration-300 ease-in-out">
            <p className="text-lg ">Suitmedia has become our second home</p>
            <p className="text-lg">where technology & creativity fused into digital chemistry</p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
