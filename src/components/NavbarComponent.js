"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarComponent = () => {
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

      if (scrollingUp && !showHeader) {
        setShowHeader(true);
        setTimeout(() => {
          setDropdownOpen(false);
        }, 200);
      } else if (!scrollingUp && showHeader) {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp, showHeader]);

  const isLinkActive = (href) => router.pathname === href;

  return (
    <nav className={`bg-primary fixed w-full z-20 top-0 left-0 ${!showHeader ? "opacity-70" : ""}`}>
      <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
        <Link href={"/"}>
          <Image src={"/suitmedia-logo2.png"} width={80} height={80} alt="Suitmedia Logo" style={{ width: "auto", height: "auto" }} priority={true} />
        </Link>
        <div className={"flex justify-stretch w-full md:block md:w-auto"}>
          <ul className="bg-primary flex font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }) => {
  const router = useRouter();
  const isCurrent = router.pathname === href;

  return (
    <li>
      <Link href={href}>
        <p className={`block text-white hover:text-slate-300 rounded ${isCurrent ? "text-slate-300 border-b-2 border-slate-300" : ""}`}>{label}</p>
      </Link>
      {isCurrent && <div className="w-full h-[4px] mt-3 bg-white rounded-full"></div>}
    </li>
  );
};

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ideas", label: "Ideas" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default NavbarComponent;
