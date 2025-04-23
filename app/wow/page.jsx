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

function Page() {
  return (
    <div className="flex justify-center w-full p-17 md:p-26">
      <div className="">
        <div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl w-full text-center bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10"
        >
          <h1 className="text-3xl font-bold mb-6">👋 Let's Connect!</h1>

          <div className="text-lg text-white/80 mb-8 italic">
            <ul className="space-y-4">
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                📩 "Hit me up on{" "}
                <LinkPreview
                  url="https://github.com/Adarsha59"
                  className="font-bold"
                >
                  <FaGithub />
                </LinkPreview>
                , where my code is like my fridge—bare and empty." 🥲
              </li>
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                🔗 "LinkedIn: Let's connect, because my professional network is
                as lonely as my plants.{" "}
                <LinkPreview
                  url="https://www.linkedin.com/in/adarshapaudyal"
                  className="font-bold"
                >
                  <FaLinkedin />
                </LinkPreview>
                " 🌱
              </li>
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                📱 "Facebook: Add me, and let's reminisce about the good old
                days of FarmVille.{" "}
                <LinkPreview
                  url="https://facebook.com/yourusername"
                  className="font-bold"
                >
                  <FaFacebook />
                </LinkPreview>
                " 🚜
              </li>
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                🎥 "YouTube: I post more videos than I answer messages, but
                that’s still not enough.{" "}
                <LinkPreview
                  url="https://www.youtube.com/@moviehunt59"
                  className="font-bold"
                >
                  <FaYoutube />
                </LinkPreview>
                " 📹
              </li>
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                👻 "Snapchat: For when I want to send disappearing messages that
                never get replied to.{" "}
                <LinkPreview
                  url="https://snapchat.com/add/yourusername"
                  className="font-bold"
                >
                  <FaSnapchatGhost />
                </LinkPreview>
                " 🙃
              </li>
              <li className="bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                🐦 "X: Drop me a tweet, I promise I won’t leave you on read.{" "}
                <LinkPreview
                  url="https://x.com/adarshapaudyal_"
                  className="font-bold"
                >
                  <FaTwitter />
                </LinkPreview>
                " 🐦
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-8 text-3xl">
            <a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Adarsha59"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/adarshapaudyal"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com/yourusername"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              whileHover={{ scale: 1.2 }}
              href="https://www.youtube.com/@moviehunt59"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              whileHover={{ scale: 1.2 }}
              href="https://snapchat.com/add/yourusername"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="Snapchat"
            >
              <FaSnapchatGhost />
            </a>
            <a
              whileHover={{ scale: 1.2 }}
              href="https://x.com/adarshapaudyal_"
              target="_blank"
              className="text-white/80 hover:text-white transition duration-300 ease-in-out"
              title="Twitter (X)"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
