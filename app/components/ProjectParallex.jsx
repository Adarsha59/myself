"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <div className="relative z-20 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences that push boundaries and inspire
            innovation
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Image */}
          <motion.div
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1">
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm">
                <motion.img
                  src={products[activeProject].thumbnail}
                  alt={products[activeProject].title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          window.open(products[activeProject].link, "_blank")
                        }
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        View Project
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {products[activeProject].title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {getProjectDescription(products[activeProject].title)}
            </p>

            <div className="flex flex-wrap gap-3">
              {getProjectTags(products[activeProject].title).map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(products[activeProject].link, "_blank")
              }
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Explore Project</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Project Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((project, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer group ${
                index === activeProject ? "ring-2 ring-blue-500" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-32 object-cover transition-all duration-300 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white text-sm font-semibold truncate">
                    {project.title}
                  </h3>
                </div>

                {/* Active Indicator */}
                {index === activeProject && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500 rounded-xl"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "9+", label: "Projects" },
            { number: "5+", label: "Technologies" },
            { number: "100%", label: "Passion" },
            { number: "∞", label: "Creativity" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Helper functions
function getProjectDescription(title) {
  const descriptions = {
    "NetFlix Clone":
      "A full-featured streaming platform replica with user authentication, movie browsing, and responsive design. Built with modern web technologies for optimal performance.",
    NGL: "Anonymous messaging platform enabling users to send and receive honest feedback. Features real-time messaging and privacy-focused architecture.",
    HamroAI:
      "AI-powered SaaS platform offering intelligent solutions for businesses. Integrates machine learning capabilities with user-friendly interfaces.",
    "Hamro-Blog":
      "Modern blogging platform with rich text editing, user management, and social features. Optimized for content creators and readers alike.",
    "Tour- MERN":
      "Comprehensive travel booking application built with MERN stack. Features tour listings, booking management, and payment integration.",
    "Blog - BOT":
      "Intelligent chatbot for blog management and content assistance. Automates content creation and user engagement processes.",
    "TELEGRAM BOT":
      "Feature-rich Telegram bot for movie recommendations and entertainment. Provides personalized suggestions and interactive experiences.",
    "Final Project":
      "Advanced face recognition system using cutting-edge AI technology. Implements real-time detection and identification capabilities.",
    FRBAS:
      "Attendance management system with biometric integration. Streamlines workforce tracking and reporting for organizations.",
  };
  return (
    descriptions[title] ||
    "An innovative project showcasing modern development practices and cutting-edge technology solutions."
  );
}

function getProjectTags(title) {
  const tags = {
    "NetFlix Clone": ["React", "Node.js", "MongoDB", "Streaming"],
    NGL: ["Next.js", "Anonymous", "Real-time", "Privacy"],
    HamroAI: ["AI/ML", "SaaS", "React", "API"],
    "Hamro-Blog": ["Blog", "CMS", "React", "Database"],
    "Tour- MERN": ["MERN", "Travel", "Booking", "Payment"],
    "Blog - BOT": ["Chatbot", "AI", "Automation", "Content"],
    "TELEGRAM BOT": ["Telegram", "Bot", "Movies", "API"],
    "Final Project": ["AI", "Face Recognition", "Computer Vision", "ML"],
    FRBAS: ["Biometric", "Attendance", "System", "Management"],
  };
  return tags[title] || ["Web Dev", "React", "JavaScript", "Modern"];
}

export const products = [
  {
    title: "NetFlix Clone",
    link: "https://hamro-netflix.vercel.app/",
    thumbnail:
      "https://img.freepik.com/free-vector/social-distancing-movie-theater_23-2148549191.jpg?t=st=1745220526~exp=1745224126~hmac=8eaaead445f853459ff708b8b277f03532fb1c9eec3508570008bf9a6b27d271&w=740",
  },
  {
    title: "NGL",
    link: "hamro-ngl.vercel.app/",
    thumbnail:
      "https://framerusercontent.com/images/v9v7nmCuQWuKMhx9ajbiGlhCrD4.png",
  },
  {
    title: "HamroAI",
    link: "hamroai.vercel.app/",
    thumbnail:
      "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?t=st=1745221088~exp=1745224688~hmac=73ee489e641942c6e005e4a3b21e228cd33ca112d7225b1ddc53182dd495ab60&w=996",
  },
  {
    title: "Hamro-Blog",
    link: "hamroblog.vercel.app",
    thumbnail:
      "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1745221179~exp=1745224779~hmac=453eb2fe56a58e3a8fcedf64a60a2a71e2f203b96facbed6692f9f803b7a0cd5&w=826",
  },
  {
    title: "Tour- MERN",
    link: "https://github.com/Adarsha59/Tour-Full-MERN",
    thumbnail:
      "https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1745221248~exp=1745224848~hmac=0e1b9d85123c3816c01c0ff8fd90483a4c332cf05e2e82124e614ef604a8ca47&w=1380",
  },
  {
    title: "Blog - BOT",
    link: "https://github.com/Adarsha59/blog-bot",
    thumbnail:
      "https://img.freepik.com/free-vector/call-center-isometric-concept_1284-69078.jpg?t=st=1745221366~exp=1745224966~hmac=4e78a5fa6b68b598c663e810d736f68e06243e1e6fab5b32194e7050510a3d12&w=740",
  },
  {
    title: "TELEGRAM BOT",
    link: "https://web.telegram.org/k/#@newmoviehuntbot",
    thumbnail:
      "https://img.freepik.com/free-vector/telegram-icon_23-2147894417.jpg?t=st=1745221559~exp=1745225159~hmac=6d21f07827fe7a4ccf74772284f075d49158a4eea7351520675b092d10414969&w=740",
  },
  {
    title: "Final Project",
    link: "https://github.com/Adarsha59/7thsem-project",
    thumbnail:
      "https://img.freepik.com/free-photo/face-recognition-ar-hologram-screen-smart-technology_53876-167350.jpg?t=st=1745221715~exp=1745225315~hmac=f4fb81274aa7db43f4385c36dfef00dfb2a029b0aa793eb5c745e6c24764c5dc&w=996",
  },
  {
    title: "FRBAS",
    link: "https://github.com/Adarsha59/FRBAS",
    thumbnail:
      "https://img.freepik.com/free-vector/confirmed-attendance-concept-illustration_114360-30959.jpg?t=st=1745221772~exp=1745225372~hmac=45e1c381b017036e5ef55736f9ab65d512f1efb7b156141f997dac791327a898&w=740",
  },
];
