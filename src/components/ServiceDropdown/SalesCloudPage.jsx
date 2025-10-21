import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import salescloud2 from "../../assets/salescloud2.png";
import salescloud3 from "../../assets/salescloud3.png";
import icon from "../../assets/icon.jpg";
import RequestForConsultation from "../RequestForConsultation";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function SalesCloudPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] text-white px-6 md:px-10 md:pr-16 py-16 pt-32 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="sales-cloud" />
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
            src={salescloud2}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Sales Team with{" "}
            <span className="text-blue-400">Data-Driven</span> Selling
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
          <button
            onClick={() => navigate("/contactus")}
            whileHover={{ scale: 1.03 }}
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold shadow-lg hover:opacity-95 transition"
          >
            Let&apos;s Connect →
          </button>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accelerate Sales Success with{" "}
            <span className="text-blue-400">Data & AI</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Combine the strength of Data Cloud with the intelligence of Einstein
            AI to revolutionize your sales process. Data Cloud acts as the
            foundation, bringing together all your customer information into a
            single trusted source.
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
            src={salescloud3}
            alt="Data & AI"
            className="w-96 md:w-[450px]"
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
          Optimize Sales Cloud with Univmaa –{" "}
          <span className="text-blue-400">Our Offerings</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        >
          Boost Sales with Efficiency, Automation, and Intelligence Powered by
          Salesforce Sales Cloud
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Accurate Sales Forecasting",
              desc: "Leverage powerful forecasting tools, analyze historical data, pipeline info, and KPIs to identify trends and optimize strategy.",
            },
            {
              title: "Sales Performance Management",
              desc: "Set and track sales goals. Incentivize teams and monitor real-time performance to stay on target.",
              highlight: true,
            },
            {
              title: "Lead and Opportunity Management",
              desc: "Focus on high-potential opportunities and increase conversion rates by streamlining lead-to-deal workflows.",
            },
            {
              title: "Mobile and Social Selling",
              desc: "Access critical sales data on the go and integrate with LinkedIn, Twitter for enhanced customer engagement.",
            },
            {
              title: "Sales Cloud Einstein",
              desc: "Use Einstein AI for lead scoring, opportunity insights, and account analysis to uncover new relationships.",
            },
            {
              title: "Territory & Pipeline Management",
              desc: "Align sales territories, optimize coverage, and track pipeline health to maximize revenue opportunities.",
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
