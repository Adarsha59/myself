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
import FileUpload from "../components/FileUpload";

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
          <a
            href="https://t.me/asfasfsfawrw"
            className="text-blue-400 underline"
          >
            STORAGE
          </a>
          <main className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">TELEGRAM VAULT</h1>
            <h2 className="mb-6 text-lg">
              Your file is saved in{" "}
              <a
                href="https://t.me/asfasfsfawrw"
                className="text-blue-400 underline"
              >
                STORAGE
              </a>
              <FileUpload />
            </h2>

            {/* Funny Chat Section */}
            <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-4">
                Chat with a Stranger 😄
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg">
                  Stranger: Hey, you look cool! 😎
                </span>
                <span className="text-xl text-yellow-300">👽</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg">
                  You: Haha, thanks! Wanna play a game? 🎮
                </span>
                <span className="text-xl text-pink-400">🤖</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg">
                  Stranger: Sure, but I’m not good! 🤣
                </span>
                <span className="text-xl text-green-400">🐵</span>
              </div>
              <a
                href={"https://hamro-chat.netlify.app/"}
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
              >
                Start Chat 🤔
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Page;
