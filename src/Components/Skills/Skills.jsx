import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    const skills = {
      frontend: [
        { name: "HTML", skill:80, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", skill:70, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript",skill:60, icon: <FaJs className="text-yellow-500" /> },
        { name: "React",skill:70, icon: <FaReact className="text-cyan-500" /> },
        { name: "Firebase",skill:80, icon: <FaFire className="text-cyan-500" /> },
        { name: "TailwindCSS",skill:90, icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "DaisyUI",skill:90, icon: <SiTailwindcss className="text-indigo-400" /> },
      ],
      backend: [
        { name: "Node.js",skill:40, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js",skill:50, icon: <SiExpress className="text-gray-500" /> },
        { name: "MongoDB",skill:40, icon: <SiMongodb className="text-green-700" /> },
      ],
      learning: [
        { name: "Java",skill:40, icon: <FaJava className="text-red-500" /> },
        { name: "NextJs",skill:36, icon: <FaJs className="text-red-500" /> },
      ],
    };
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 flex flex-col lg:flex-row lg:px-28">
        {/* Sidebar for Buttons */}
        <div className="w-full lg:w-1/4 bg-gray-800 p-6 rounded-md flex flex-col items-center lg:items-start space-y-6 overflow-y-auto max-h-80 lg:max-h-screen">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`w-full text-center px-4 py-3 rounded-lg text-lg font-semibold 
              ${activeTab === "frontend" ? "bg-red-500 text-white" : "bg-gray-700 text-gray-300"}
              hover:bg-red-500 hover:text-white transition duration-300`}
          >
            Frontend Skills
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`w-full text-center px-4 py-3 rounded-lg text-lg font-semibold 
              ${activeTab === "backend" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}
              hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            Backend Skills
          </button>
          <button
            onClick={() => setActiveTab("learning")}
            className={`w-full text-center px-4 py-3 rounded-lg text-lg font-semibold 
              ${activeTab === "learning" ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300"}
              hover:bg-green-500 hover:text-white transition duration-300`}
          >
            Currently Learning
          </button>
        </div>
      
        {/* Skills Display */}
        <motion.div
          className="flex-1 px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 w-full sm:w-40 h-32 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 transform transition duration-300 hover:shadow-lg px-3"
            >
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <progress className={`progress  ${activeTab === "frontend"?"progress-error":""} ${activeTab === "backend"?"progress-primary":""} ${activeTab === "learning"?"progress-success":""}`} value={skill.skill} max="100"></progress>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    );
};

export default Skills;