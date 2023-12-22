/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="relative mx-auto max-w-full">
        <img src="/hero.jpg" alt="Hero" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome To Our Home Page</h1>
          <p className="text-lg">Created by Muhammad Rizky Haksono™</p>
          <Link href={"/ideas"}>
            <button className="bg-primary py-2 px-4 mt-4 rounded-lg text-sm hover:bg-orange-600 transform hover:translate-y-[-2px] transition duration-300 ease-in-out">Get Started</button>
          </Link>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
