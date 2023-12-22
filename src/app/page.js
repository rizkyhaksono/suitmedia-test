"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarComponent from "../../component/NavbarComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div>Home</div>
      <Link href={"ideas"}>
        <button className="bg-orange-400">Ideas</button>
      </Link>
    </>
  );
}
