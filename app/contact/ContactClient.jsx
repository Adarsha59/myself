// ✅ /app/contact/ContactClient.jsx
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
    <div className="flex justify-center w-full p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full text-center bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10"
      >
        <h1 className="text-3xl font-bold mb-6">👋 Let’s Connect!</h1>

        <div className="text-lg text-white/80 mb-8 italic">
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              📩 Hit me up on{" "}
              <LinkPreview
                url="https://github.com/Adarsha59"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </LinkPreview>{" "}
              — where my code lives!
            </li>
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              🔗 LinkedIn: Connect with me{" "}
              <LinkPreview
                url="https://www.linkedin.com/in/adarshapaudyal"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </LinkPreview>{" "}
              — let’s grow together!
            </li>
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              📱 Facebook: Let’s stay in touch{" "}
              <LinkPreview
                url="https://facebook.com/paudyaladarsha"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaFacebook /> Facebook
              </LinkPreview>
              .
            </li>
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              🎥 YouTube: Check out my videos{" "}
              <LinkPreview
                url="https://www.youtube.com/@moviehunt59"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaYoutube /> YouTube
              </LinkPreview>
              .
            </li>
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              👻 Snapchat: Snap me{" "}
              <LinkPreview
                url="https://snapchat.com/add/yourusername"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaSnapchatGhost /> Snapchat
              </LinkPreview>
              .
            </li>
            <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              🐦 X: Tweet at me{" "}
              <LinkPreview
                url="https://x.com/adarshapaudyal_"
                className="font-bold inline-flex items-center gap-2"
              >
                <FaTwitter /> Twitter
              </LinkPreview>
              .
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-8 text-3xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Adarsha59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/adarshapaudyal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://facebook.com/paudyaladarsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="Facebook"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.youtube.com/@moviehunt59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="YouTube"
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://snapchat.com/add/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="Snapchat"
          >
            <FaSnapchatGhost />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://x.com/adarshapaudyal_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition duration-300 ease-in-out"
            title="Twitter (X)"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
