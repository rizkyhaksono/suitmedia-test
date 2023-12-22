import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <>
      <footer className="bg-primary">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"https://suitmedia.com/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src={"/suitmedia-logo2.png"} alt="Footer Logo" width={30} height={30} target="_blank" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Suitmedia</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <Link href={"/work"} className="hover:underline me-4 md:me-6">
                  Work
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/ideas"} className="hover:underline me-4 md:me-6">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href={"/careers"} className="hover:underline me-4 md:me-6">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="https://github.com/rizkyhaksono" className="hover:underline">
              Rizky Haksono™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
