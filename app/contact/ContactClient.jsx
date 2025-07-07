"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";

export default function ContactClient() {
  return (
    <div className="flex justify-center w-full p-8 md:p-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full text-center bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10"
      >
        {/* 3D Photo Section */}
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            {/* Shadow base */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full blur-xl"></div>

            {/* Main photo container with 3D effect */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              className="relative preserve-3d"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Photo frame with depth */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                {/* Multiple shadow layers for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 via-transparent to-cyan-400/20 blur-sm"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-pink-400/10 via-transparent to-blue-400/10"></div>

                {/* The actual photo */}
                <img
                  src="/adarsha-paudyal.jpg"
                  alt="Adarsha Paudyal"
                  className="w-full h-full object-cover rounded-full relative z-10 group-hover:brightness-110 transition-all duration-300"
                />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating elements around photo */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60"
              ></motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm opacity-60"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
        >
          👋 Let's Connect!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/70 mb-12 text-lg"
        >
          I'm Adarsha Paudyal - Let's build something amazing together!
        </motion.p>

        <div className="text-lg text-white/80 mb-8">
          <ul className="space-y-4 max-w-2xl mx-auto">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              📩 Hit me up on{" "}
              <LinkPreview
                url="https://github.com/Adarsha59"
                className="font-bold inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
              >
                <FaGithub /> GitHub
              </LinkPreview>{" "}
              — where my code lives!
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              🔗 LinkedIn: Connect with me{" "}
              <LinkPreview
                url="https://www.linkedin.com/in/adarshapaudyal"
                className="font-bold inline-flex items-center gap-2 text-blue-300 hover:text-blue-200"
              >
                <FaLinkedin /> LinkedIn
              </LinkPreview>{" "}
              — let's grow together!
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              📱 Facebook: Let's stay in touch{" "}
              <LinkPreview
                url="https://facebook.com/paudyaladarsha"
                className="font-bold inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <FaFacebook /> Facebook
              </LinkPreview>
              .
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              🎥 YouTube: Check out my videos{" "}
              <LinkPreview
                url="https://www.youtube.com/@moviehunt59"
                className="font-bold inline-flex items-center gap-2 text-red-300 hover:text-red-200"
              >
                <FaYoutube /> YouTube
              </LinkPreview>
              .
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              👻 Snapchat: Snap me{" "}
              <LinkPreview
                url="https://snapchat.com/add/yourusername"
                className="font-bold inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200"
              >
                <FaSnapchatGhost /> Snapchat
              </LinkPreview>
              .
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 ease-in-out backdrop-blur-sm"
            >
              🐦 X: Tweet at me{" "}
              <LinkPreview
                url="https://x.com/adarshapaudyal_"
                className="font-bold inline-flex items-center gap-2 text-sky-300 hover:text-sky-200"
              >
                <FaTwitter /> Twitter
              </LinkPreview>
              .
            </motion.li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="flex justify-center gap-8 text-3xl"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://github.com/Adarsha59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-purple-300 transition duration-300 ease-in-out"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://www.linkedin.com/in/adarshapaudyal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-300 transition duration-300 ease-in-out"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://facebook.com/paudyaladarsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-400 transition duration-300 ease-in-out"
            title="Facebook"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://www.youtube.com/@moviehunt59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-red-300 transition duration-300 ease-in-out"
            title="YouTube"
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://snapchat.com/add/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-yellow-300 transition duration-300 ease-in-out"
            title="Snapchat"
          >
            <FaSnapchatGhost />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotateY: 180 }}
            href="https://x.com/adarshapaudyal_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-sky-300 transition duration-300 ease-in-out"
            title="Twitter (X)"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
