import React from "react";
import { HeroParallaxDemo } from "../components/ProjectParallex";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen w-full p-4 md:p-10">
      <HeroParallaxDemo />
      <br />
      <Link
        href="./resume"
        className="transition-all duration-300 hover:text-purple-400"
      >
        Resume
      </Link>
      <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold mb-4">Chat with a Stranger 😄</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Stranger: Hey, you look cool! 😎</span>
          <span className="text-xl text-yellow-300">👽</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">
            You: Haha, thanks! Wanna play a game? 🎮
          </span>
          <span className="text-xl text-pink-400">🤖</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Stranger: Sure, but I’m not good! 🤣</span>
          <span className="text-xl text-green-400">🐵</span>
        </div>
        {/* <Link href="https://t.me/asfasfsfawrw"> */}
        <a
          href="www.sfds.com"
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Start Chat 🤔
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default page;
