import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import healthimg from "../../assets/healthimg.png";
import marketingimg3 from "../../assets/marketingimg3.png";
import icon from "../../assets/icon.jpg";
import RequestForConsultation from "../RequestForConsultation";
import FillTheForm from "../FillTheForm";
// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function HealthCloudPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] pt-32 text-white px-6  py-16 grid md:grid-cols-2 gap-10 items-center overflow-hidden relative">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="health-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>
      {/* ========================== Section 2 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={marketingimg3}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Healthcare Team with{" "}
            <span className="text-sky-500">Health-Driven Insights</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            The rules for patient engagement have evolved! Today’s patients are
            empowered, informed, and expect personalized healthcare experiences.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Salesforce Health Cloud is a robust platform designed to help your
            healthcare team deliver personalized care, manage patient
            relationships, and improve operational efficiency with features like
            patient 360, AI-driven insights, predictive analytics, and seamless
            integration with other Salesforce clouds.
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-gradient-to-r hover:cursor-pointer from-blue-500 to-purple-600 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="bg-black text-white md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="ps-6 md:ps-0"
        >
          <h2 className="text-3xl p md:text-4xl font-bold mb-6">
            Accelerate Healthcare Innovation with
            <span className="text-blue-400"> Data & AI</span>
          </h2>
          <p className="text-gray-300 mb-4 text-xl">
            Combine the power of Data Cloud with the intelligence of Einstein AI
            to transform the way healthcare organizations deliver care. Data
            Cloud unifies patient records, medical histories, and clinical data
            into a single, trusted source of truth.
          </p>
          <p className="text-gray-300 mb-6 text-xl">
            Einstein AI turns this data into actionable insights—predicting
            patient needs, streamlining administrative tasks, and personalizing
            care journeys. Let AI handle the complexity so your teams can focus
            on what matters most: improving patient outcomes and delivering
            compassionate care.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src={healthimg} alt="Data & AI" className="w-96 md:w-[500px]" />
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className="bg-[#071426] text-white px-6 md:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={fadeInUp}
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-10"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          As a company committed to excellence, we offer solutions that meet
          your unique & evolving business needs.
        </motion.p>

        {/* Industries Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Manufacturing",
            "Finance",
            "Healthcare",
            "Retail",
            "Hi-tech",
            "Real Estate",
          ].map((industry, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#0c1b33] rounded-lg shadow hover:shadow-lg cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={icon}
                alt={industry}
                className="w-12 h-12 mx-auto mb-3"
              />
              <p className="font-semibold">{industry}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          Optimize Health Cloud with Univmaa{" "}
          <span className="text-blue-400">Our Offerings</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        >
          Enhance patient outcomes with efficiency, automation, and intelligence
          powered by Salesforce Health Cloud.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Patient Profiles",
              desc: "Unify clinical and non-clinical data into a single patient record for a 360° view, enabling more personalized and coordinated care.",
            },
            {
              title: "Care Team Collaboration",
              desc: "Connect doctors, nurses, care coordinators, and family members on one secure platform to streamline communication and treatment planning.",
            },
            {
              title: "Patient Engagement & Journeys",
              desc: "Deliver tailored engagement programs, from appointment reminders to wellness campaigns, improving adherence and satisfaction.",
            },
            {
              title: "Mobile & Remote Care Access",
              desc: "Equip providers with mobile access to patient data and enable remote monitoring, ensuring care anytime, anywhere.",
            },
            {
              title: "Health Cloud Einstein",
              desc: "Leverage AI-driven insights to predict patient needs, identify at-risk populations, and recommend proactive interventions for better outcomes.",
            },
            // ✅ New content added
            {
              title: "Data Security & Compliance",
              desc: "Ensure HIPAA-compliant, secure storage and sharing of sensitive health data, giving patients and providers peace of mind.",
              highlight: true, // optional if you want this to be highlighted
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`p-6 rounded-lg shadow ${
                item.highlight ? "bg-[#0c1b33]" : "bg-[#0c1b33]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 6 - CTA ========================== */}
      <RequestForConsultation />
      <Footer />
    </>
  );
}
