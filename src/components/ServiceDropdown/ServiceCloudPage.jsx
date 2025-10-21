import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import serviceimg from "../../assets/serviceimg.jpg";
import serviceimg2 from "../../assets/serviceimg2.jpg";
import serviceimg3 from "../../assets/serviceimg3.png";
import icon from "../../assets/icon.jpg";
import RequestForConsultation from "../RequestForConsultation";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic";
// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCloudPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] pt-28 text-white px-6 py-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="service-cloud" />
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
            src={serviceimg}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Service Team with{" "}
            <span className="text-blue-400">to deliver more with less</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            The rules for customer engagement have changed! Today’s buyers are
            informed, discerning, and expect personalized experiences.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Salesforce Sales Cloud is a powerful platform designed to empower
            your sales team and transform your sales operations with advanced
            features like AI-driven insights, predictive analytics, integration
            with other Salesforce clouds and more!
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 hover:cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Put Customers at the Heart of Your Business with{" "}
            <span className="text-blue-400">Data & AI</span>
          </h2>
          <p className="text-gray-300 tracking-wide mb-4 text-lg">
            By harnessing the power of AI, Service Cloud provides predictive
            insights, automates routine tasks, and personalizes interactions,
            allowing your service teams to focus on what matters most—resolving
            customer issues efficiently. With AI-driven features like Einstein
            Service Replies, your agents can analyze customer conversation in
            real time, generate replies and gain access to intelligent
            recommendations and predictive analytics, enabling them to
            anticipate customer needs and offer proactive solutions.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Einstein AI transforms this data into actionable insights,
            predicting customer behavior, automating tasks, and personalizing
            interactions. Let AI do the heavy lifting for revenue growth and
            customer satisfaction.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={serviceimg2}
            alt="Data & AI"
            className="w-96 md:w-[500px]"
          />
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
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
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

      {/* ========================== Section 5 (Workspace Image) ========================== */}
      <motion.section
        className="bg-[#071426] text-white px-6 md:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={fadeInUp}
        >
          One Workspace for Every Service Need
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Leverage AI and automation to create a seamless, customer-centric
          service experience.
        </motion.p>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <img
            src={serviceimg3}
            alt="Workspace for Every Service Need"
            className="w-full max-w-3xl rounded-lg "
          />
        </motion.div>
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
          Deliver Value Across Every Customer{" "}
          <span className="text-blue-400">Touchpoint</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        >
          Empower agents with a perfect set of productivity tools that deliver
          smart, fast, and personalized customer service.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Case Management",
              desc: "Optimize your customer support with our case management system. Automatically route cases, meet service level agreements, and empower agents with knowledge for faster resolutions.",
            },
            {
              title: "Self-Service Experience",
              desc: "Empower your customers with 24/7 access to information and support through self-service portals. Reduce agent workload and improve customer satisfaction by enabling self-service solutions.",
            },
            {
              title: "Omni-Channel Routing",
              desc: "Intelligent omni-channel routing helps you efficiently distribute work across your team based on agent skills and availability, ensuring faster response times and improved customer satisfaction.",
            },
            {
              title: "Service Analytics",
              desc: "Gain actionable insights, visualize trends, and optimize service operations with Salesforce Service Cloud Analytics and boost customer satisfaction and loyalty.",
            },
            {
              title: "Generative AI-Powered Service Replies",
              desc: "Instantly generate relevant responses across multiple channels with AI-powered replies. Reduce agent workload and increase customer satisfaction through faster resolutions.",
            },
            {
              title: "Incident Detection & Response",
              desc: "Proactively identify and address potential service disruptions. Leverage Service Cloud's incident management capabilities to minimize downtime and ensure business continuity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`p-6 rounded-lg shadow ${
                item.highlight
                  ? "bg-gradient-to-b from-purple-600 to-purple-800"
                  : "bg-[#0c1b33]"
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
