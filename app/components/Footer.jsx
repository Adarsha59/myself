"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function AbnormalFooter() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-md bg-white/10 rounded-2xl p-10 border border-white/20 shadow-xl z-10 relative"
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
          Get in Touch
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {[
            { icon: FaTwitter, color: "text-sky-400" },
            { icon: FaGithub, color: "text-white" },
            { icon: FaLinkedin, color: "text-blue-500" },
          ].map(({ icon: Icon, color }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className={`transition transform duration-300 ${color} text-3xl hover:drop-shadow-glow`}
              href="#"
              target="_blank"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Footer Info Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-gray-300 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <p>Design</p>
            <p>Development</p>
            <p>Marketing</p>
          </div>
        </div>

        {/* Bottom */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Made with <FaHeart className="inline text-red-400 animate-pulse" /> by{" "}
          <span className="font-bold text-white">Adarsha Paudyal</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </motion.div>
    </div>
  );
}
