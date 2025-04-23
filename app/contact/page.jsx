import Link from "next/link";
import React from "react";
import FileUpload from "../components/FileUpload";

function Page() {
  return (
    <div className="mt-22  text-white">
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
            <span className="text-lg">
              Stranger: Sure, but I’m not good! 🤣
            </span>
            <span className="text-xl text-green-400">🐵</span>
          </div>
          <Link
            href={"https://t.me/asfasfsfawrw"}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
          >
            Start Chat 🤔
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Page;
