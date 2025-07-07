"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegram, FaUpload, FaComments } from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";
import FileUpload from "../components/FileUpload";

function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("storage");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "stranger",
      message: "Hey, you look cool! 😎",
      avatar: "👽",
    },
    {
      id: 2,
      sender: "you",
      message: "Haha, thanks! Wanna play a game? 🎮",
      avatar: "🤖",
    },
    {
      id: 3,
      sender: "stranger",
      message: "Sure, but I'm not good! 🤣",
      avatar: "🐵",
    },
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

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
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
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
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      />

      <div className="relative z-20 flex justify-center w-full p-8 md:p-16">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
              <span className="text-white/90"> & Share</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your gateway to seamless communication and file sharing
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
              {[
                { id: "storage", label: "Storage", icon: FaUpload },
                { id: "chat", label: "Chat", icon: FaComments },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeSection === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {activeSection === "storage" && (
              <motion.div
                key="storage"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50">
                  <div className="text-center mb-8">
                    <FaTelegram className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        TELEGRAM VAULT
                      </span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                      Your secure file storage solution powered by Telegram
                    </p>
                    <motion.a
                      href="https://t.me/asfasfsfawrw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTelegram className="w-5 h-5" />
                      Access Storage
                    </motion.a>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      Upload Your Files
                    </h3>
                    <FileUpload />
                  </div>

                  <div className="mt-8 grid md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: "🔒",
                        title: "Secure",
                        desc: "End-to-end encryption",
                      },
                      {
                        icon: "⚡",
                        title: "Fast",
                        desc: "Lightning-fast uploads",
                      },
                      {
                        icon: "🌐",
                        title: "Global",
                        desc: "Access from anywhere",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-800/30 p-4 rounded-xl text-center border border-slate-600/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="text-3xl mb-2">{feature.icon}</div>
                        <h4 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50">
                  <div className="text-center mb-8">
                    <FaComments className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                      Chat with a Stranger 😄
                    </h2>
                    <p className="text-gray-300">
                      Connect with random people and have fun conversations!
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-6 mb-6 border border-slate-600/50">
                    <div className="space-y-4 max-h-64 overflow-y-auto">
                      {chatMessages.map((msg, index) => (
                        <motion.div
                          key={msg.id}
                          className={`flex items-start gap-3 ${
                            msg.sender === "you" ? "flex-row-reverse" : ""
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="text-2xl">{msg.avatar}</div>
                          <div
                            className={`max-w-xs p-3 rounded-2xl ${
                              msg.sender === "you"
                                ? "bg-blue-600 text-white"
                                : "bg-slate-700 text-gray-100"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <motion.a
                      href="https://hamro-chat.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaComments className="w-5 h-5" />
                      Start Chatting 🤔
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Page;
