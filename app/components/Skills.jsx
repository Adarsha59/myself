import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const skills = [
  { name: "React", level: "Advanced", color: "#61DAFB" },
  { name: "Next.js", level: "Pro", color: "#000000" },
  { name: "MongoDB", level: "Intermediate", color: "#47A248" },
  { name: "Node.js", level: "Comfortable", color: "#3C873A" },
  { name: "Tailwind CSS", level: "Expert", color: "#38BDF8" },
  { name: "JavaScript", level: "Master", color: "#F7DF1E" },
  { name: "Python", level: "Intermediate", color: "#3776AB" },
];

const SkillsPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            My Skills Journey
          </h1>
          <p className="text-xl mt-4">
            I code with passion, and here's a showcase of my skills, from
            beginner to expert!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="w-16 h-16 rounded-full"
                style={{ backgroundColor: skill.color }}
              />
              <h3 className="text-3xl font-semibold mt-4">{skill.name}</h3>
              <p className="text-lg mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/Adarsha59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Github className="w-10 h-10 text-white hover:text-gray-300 transition duration-300" />
              </motion.div>
            </a>
            <a
              href="https://www.linkedin.com/in/adarshapaudyal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Linkedin className="w-10 h-10 text-white hover:text-gray-300 transition duration-300" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
