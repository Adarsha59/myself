import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full fixed top-12 flex justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-10 py-4 flex gap-10 text-white text-sm md:text-base font-medium">
        <Link
          href="#home"
          className="transition-all duration-300 hover:text-purple-400"
        >
          About
        </Link>
        <Link
          href="#about"
          className="transition-all duration-300 hover:text-purple-400"
        >
          Resume
        </Link>
        <Link
          href="#services"
          className="transition-all duration-300 hover:text-purple-400"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="transition-all duration-300 hover:text-purple-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
