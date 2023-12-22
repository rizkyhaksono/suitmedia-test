"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarComponent from "../components/NavbarComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Image src={"/hero.jpg"} width={100} height={100} alt="Hero" className="max-w-full mt-20" />
    </>
  );
}
