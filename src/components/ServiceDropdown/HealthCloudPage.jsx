import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import RequestForConsultation from "../RequestForConsultation";

import healthcloudnew from "../../assets/healthcloudnew.webp";
import healthcloudnew2 from "../../assets/healthcloudnew2.webp";
import healthcloudnew3 from "../../assets/healthcloudnew3.webp";
import healthcloudnewvideo from "../../assets/healthcloudnewvideo.webm";

import FillTheForm from "../FillTheForm";
import FaqDynamic from "../FaqDynamic.jsx";
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
      <section
        className="pt-32  px-6  py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center overflow-hidden relative"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
      url(${healthcloudnew2})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="health-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>
      {/* ========================== Section 2 ========================== */}
      <motion.section
        className=" text-black px-6 bg-no-repeat md:px-20 py-16 grid lg:grid-cols-2 md:grid-cols-1  items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${healthcloudnew3})`,
        }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={healthcloudnew}
            alt="Data-Driven Selling"
            className="w-80 lg:w-[420px] md:mb-28 md:w-[390px] mt-[-90px] md:mt-[-69px] lg:mt-0 lg:mb-0"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          className="md:mt-[-100px]"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Healthcare Team with{" "}
            <span className="text-sky-500">Health-Driven Insights</span>
          </h2>
          <p className="text-black mb-4 text-lg">
            The rules for patient engagement have evolved! Today’s patients are
            empowered, informed, and expect personalized healthcare experiences.
          </p>
          <p className="text-black mb-6 text-lg">
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
            className="inline-block px-6 py-3 bg-gradient-to-r hover:cursor-pointer bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white
          rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className=" text-black md:px-16 py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="ps-6 md:ps-0  md:mt-[-80px] mt-[-70px] lg:ms-36 md:ms-4 lg:w-[600px]"
        >
          <h2 className="text-3xl p md:text-4xl font-bold mb-6">
            Accelerate Healthcare Innovation with
            <span className="text-blue-500"> Data & AI</span>
          </h2>
          <p className="text-black mb-4 text-xl">
            Combine the power of Data Cloud with the intelligence of Einstein AI
            to transform the way healthcare organizations deliver care. Data
            Cloud unifies patient records, medical histories, and clinical data
            into a single, trusted source of truth.
          </p>
          <p className="text-black mb-6 text-xl">
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
          className="flex justify-center mt-[-50px] md:mt-0 h-[270px]"
        >
          <video
            src={healthcloudnewvideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg"
          ></video>
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className="bg-white text-black mt-[-90px] px-6 md:mt-[-90px] md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl  font-bold text-center mb-4 text-gray-900"
          variants={fadeInUp}
        >
          Optimize Health Cloud with Univmaa
          <span className="text-blue-500"> Our Offerings</span>
        </motion.h2>

        <motion.p
          className="text-center text-black mb-12 text-xl max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Enhance patient outcomes with efficiency, automation, and intelligence
          powered by Salesforce Health Cloud.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
            {
              title: "Data Security & Compliance",
              desc: "Ensure HIPAA-compliant, secure storage and sharing of sensitive health data, giving patients and providers peace of mind.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 border border-gray-100"
            >
              {/* Orange Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d17dfe] rounded-t-xl" />

              <h3 className="font-bold text-xl text-center text-[#032d60] mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-black text-md leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 6 - CTA ========================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
