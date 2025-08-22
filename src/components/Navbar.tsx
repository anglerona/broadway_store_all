"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#06398A]">
          <Link href="/#home" className="hover:underline">
            <Image
              src="/logo.svg"
              alt="Broadway Store-All Logo"
              width={250}
              height={250}
            />
          </Link>
        </div>

        {/* Desktop Center Links */}
        <div className="hidden md:flex gap-6 mx-auto">
          <Link href="/#features" className="text-[#06398A] hover:underline">
            Facility features
          </Link>
          <Link href="/#unit-size" className="text-[#06398A] hover:underline">
            Unit size
          </Link>
          <Link href="/#contact" className="text-[#06398A] hover:underline">
            Contact
          </Link>
          <Link href="/available-units" className="text-[#06398A] hover:underline">
            Available Units
          </Link>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-6">
          <Link href="#signup" className="text-[#06398A] hover:underline">
            Sign up
          </Link>
          <Link href="#login" className="text-[#06398A] hover:underline">
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#06398A] text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-8 py-4 flex flex-col gap-4">
          <Link
            href="/#features"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Facility features
          </Link>
          <Link
            href="/#unit-size"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Unit size
          </Link>
          <Link
            href="/#contact"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/available-units"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Available Units
          </Link>
          <Link
            href="#signup"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
          <Link
            href="#login"
            className="text-[#06398A] hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
