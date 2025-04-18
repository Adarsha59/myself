"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Logo & Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">myself</h2>
          <p className="text-sm text-gray-300 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6 text-white text-sm font-medium">
          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>
          <a href="/login" className="hover:text-blue-400 transition">
            Login
          </a>
          <a href="/signup" className="hover:text-blue-400 transition">
            Signup
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
