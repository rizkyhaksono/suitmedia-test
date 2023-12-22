"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarComponent() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollingUp(prevScrollY > currentScrollY);
      prevScrollY = currentScrollY;
    };

    const handleScrollEnd = () => {
      setShowHeader(true);
    };

    const handleScrollStart = () => {
      setShowHeader(false);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={"bg-primary fixed w-full z-20 top-0 left-0 border-b"}>
        <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
          <Link href={"/"}>
            <Image src={"/suitmedia-logo2.png"} width={80} height={80} alt="Suitmedia Logo" style={{ width: "auto", height: "auto" }} />
          </Link>
          <div className={"flex justify-stretch w-full md:block md:w-auto"}>
            <ul className="bg-primary flex font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
              <li>
                <Link href={"/work"}>
                  <p className={`block text-white hover:text-slate-300 rounded md:p-0`}>Work</p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className={`block text-white hover:text-slate-300 rounded md:p-0`}>About</p>
                </Link>
              </li>
              <li>
                <Link href={"/services"}>
                  <p className={`block text-white hover:text-slate-300 rounded md:p-0`}>Services</p>
                </Link>
              </li>
              <li>
                <Link href={"/ideas"}>
                  <p className={`block text-white hover:text-slate-300 rounded md:p-0`}>Ideas</p>
                </Link>
              </li>
              <li>
                <Link href={"/careers"}>
                  <p className={`block py-2 pl-3 pr-4 text-white hover:text-slate-300 rounded md:p-0`}>Careers</p>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <p className={`block py-2 pl-3 pr-4 text-white hover:text-slate-300 rounded md:p-0`}>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
