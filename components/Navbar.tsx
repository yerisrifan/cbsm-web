import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="flex px-16 items-center justify-between  py-4 text-sm bg-transparent text-white">
        <div className="flex  gap-4 items-center font-semibold ">
          <div>
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
          </div>
          <div className="border-l-1  border-gray-400"></div>
          <div>
            <ul className="flex gap-4 uppercase">
              <Link href="/">Home</Link>

              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaTiktok />
          <FaTwitter />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
