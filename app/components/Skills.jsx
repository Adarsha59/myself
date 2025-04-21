"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans py-12 rounded-tr-4xl rounded-bl-4xl"
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-xl">
            🚀 My Dev Journey
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Skills, Contributions & GitHub Stats
          </p>
        </motion.div>

        {/* Contribution Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">🐍 My Contributions</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)]">
            <img
              alt="snake eating my contributions"
              src="https://raw.githubusercontent.com/Adarsha59/Adarsha59/output/github-contribution-grid-snake.svg"
              className="mx-auto mt-4 rounded-xl shadow-xl"
            />
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">📊 My GitHub Stats</h2>
          <div className="flex flex-col items-center gap-6">
            {[
              "https://github-readme-stats.vercel.app/api?username=Adarsha59&show_icons=true&theme=tokyonight&hide_border=true",
              "https://github-readme-streak-stats.herokuapp.com/?user=Adarsha59&theme=tokyonight&hide_border=true",
              "https://github-readme-stats.vercel.app/api/top-langs/?username=Adarsha59&layout=compact&theme=tokyonight&hide_border=true",
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="GitHub Info"
                className="w-full md:w-2/3 rounded-xl shadow-lg"
                whileHover={{ scale: 1.03 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            ⚒️ Languages, Frameworks & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "react",
              "bootstrap",
              "html",
              "css",
              "python",
              "git",
              "vscode",
              "github",
              "figma",
              "tailwind",
              "nodejs",
              "mongodb",
              "nextjs",
              "express",
              "c",
              "javascript",
            ].map((icon, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${icon}`}
                  alt={icon}
                  className="w-full h-24 object-contain bg-white/10 backdrop-blur-sm p-2 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold capitalize text-lg">
                    {icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
