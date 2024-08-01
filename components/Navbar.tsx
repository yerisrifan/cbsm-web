"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="flex px-2 md:px-16 items-center justify-between  py-4 text-sm bg-transparent text-white">
        <div className="flex  gap-4 items-center font-semibold ">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <div className="border-l-1  border-gray-400"></div>
          <div className="hidden md:flex gap-4 uppercase">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaTiktok />
          <FaTwitter />
        </div>
        <div className="text-white cursor-pointer">
          <FiMenu onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
      <div
        className={
          showMenu
            ? "flex flex-col gap-2 text-sm p-2 absolute text-white bg-stone-900/80 w-full text-right "
            : "hidden" + ""
        }
      >
        <Link onClick={() => setShowMenu(!setShowMenu)} href="/">
          Home
        </Link>
        <Link onClick={() => setShowMenu(!setShowMenu)} href="/about">
          About
        </Link>
        <Link onClick={() => setShowMenu(!setShowMenu)} href="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
