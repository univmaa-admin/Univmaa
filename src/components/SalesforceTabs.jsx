import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabbgimg from "../assets/tabs.webp";

const tabs = [
  {
    id: "implementation",
    label: "Implementation",
    content: {
      title: "Salesforce Implementation",
      text: "Gain access to revolutionary solutions for your AppExchange strategy and accelerate your time to market by 3X with Univmaa.",
      points: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "Health Cloud",
        "App Cloud",
        "Experience Cloud",
      ],
      image: "image/tabhome1.jpg",
    },
  },
  {
    id: "msp",
    label: "MSP Services",
    content: {
      title: "Managed Services",
      text: "Stay focused on your business while we handle your Salesforce ecosystem with proactive monitoring and continuous optimization.",
      points: [
        "24/7 Support",
        "System Monitoring",
        "Admin Tasks",
        "User Training",
      ],
      image: "image/tabhome2.jpg",
    },
  },
  {
    id: "pdo",
    label: "PDO Services",
    content: {
      title: "Product Development",
      text: "Accelerate your AppExchange journey with product development outsourcing (PDO) expertise.",
      points: ["AppExchange Strategy", "Product Roadmap", "Security Reviews"],
      image: "image/tabhome3.jpg",
    },
  },
  {
    id: "datacloud",
    label: "Data Cloud",
    content: {
      title: "Salesforce Data Cloud",
      text: "Unify customer data, personalize experiences, and empower decisions with Salesforce Data Cloud.",
      points: [
        "Data Unification",
        "AI-driven Insights",
        "360° View of Customers",
      ],
      image: "image/tabhome4.jpg",
    },
  },
  {
    id: "agentforce",
    label: "Agentforce",
    content: {
      title: "Salesforce Agentforce",
      text: "Deploy AI-driven agents that enhance customer interactions and automate tasks with precision.",
      points: ["AI Agents", "Automation", "Personalized Experiences"],
      image: "image/tabhome5.jpg",
    },
  },
];

export default function SalesforceTabs() {
  const [activeTab, setActiveTab] = useState("implementation");
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  // Animation Variants
  const fadeSlide = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      className=" bg-white px-6 md:px-20 py-16 pb-24 font-sans md:mt-[-90px] md:pb-32 mt-[-120px] flex flex-col items-center"
      style={{
        backgroundImage: `url(${tabbgimg})`,
      }}
    >
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-950  mb-8">
        Solutions for <span className="text-blue-500">Enterprises</span> to
        innovate & Grow
      </h1>

      {/* Capsule Buttons */}
      <div className="relative mb-10 w-full flex justify-center ">
        <div className="flex flex-wrap gap-4 justify-center border-b border-blue-500/30 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white border-blue-500 shadow-md scale-105"
                  : "border-blue-400 text-black hover:bg-blue-400/10 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl border border-blue-500/30   rounded-2xl p-8 md:p-10 backdrop-blur-sm bg bg-white shadow-2xl transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.title}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                {activeContent.title}
              </h2>
              <p className="text-black font-semibold mb-4 leading-relaxed">
                {activeContent.text}
              </p>
              <ul className="list-disc list-inside text-black space-y-2">
                {activeContent.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={activeContent.image}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex-1 flex justify-center"
            >
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-xl p-4 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500">
                <img
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="rounded-xl shadow-2xl sm:w-full sm:h-[300px] w-[300px] h-[200px] object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
