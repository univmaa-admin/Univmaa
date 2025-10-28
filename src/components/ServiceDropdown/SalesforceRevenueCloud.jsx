import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

import revenueimgnew from "../../assets/revenueimgnew.png";
import revenueimgnew2 from "../../assets/revenueimgnew2.webp";
import revenueimgnew3 from "../../assets/revenueimgnew3.webp";
import revenueimgnew4 from "../../assets/revenueimgnew4.webp";

const SalesforceRevenueCloud = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([]);
  const navigate = useNavigate();

  // ✅ Store accordion item refs
  const setContentRef = (el, index) => {
    if (el) contentRefs.current[index] = el;
  };

  // ✅ Toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // ✅ Calculate content heights dynamically
  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, [contentRefs.current.length]);

  // ✅ Offerings Data
  const offerings = [
    {
      title: "Strategic Salesforce RCA Advisory",
      content:
        "We map your existing Salesforce environment, pinpoint performance bottlenecks, and craft a roadmap that aligns RCA capabilities with your business goals.",
    },
    {
      title: "Salesforce RCA Implementation",
      content:
        "Our experts ensure a seamless RCA setup, from configuration to integration, enabling your business to unlock scalable revenue capabilities with minimal disruption.",
    },
    {
      title: "Seamless CPQ-to-RCA Migration",
      content:
        "Migrate from Salesforce CPQ to RCA effortlessly while maintaining data integrity, automation, and process continuity across sales and billing operations.",
    },
    {
      title: "Managed Services & Optimization",
      content:
        "We provide continuous RCA performance monitoring, optimization, and ongoing support to ensure maximum efficiency and scalability.",
    },
    {
      title: "Agentforce RCA Use Case Enablement",
      content:
        "Empower your sales and service teams by embedding Agentforce-driven automation into RCA use cases, improving productivity and decision-making.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="font-sans overflow-hidden">
        {/* ===================== HERO SECTION ===================== */}
        <section
          className="text-black pt-32 px-6 py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center relative overflow-x-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
               url(${revenueimgnew2})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Content */}
          <ServiceDyanamic serviceKey="revenue-cloud" />
          {/* Right Form */}
          <FillTheForm />
        </section>

        {/* ===================== OVERVIEW SECTION ===================== */}
        <section
          className="w-full text-black py-16 bg-center bg-contain bg-no-repeat px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "bottom ",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${revenueimgnew3})`,
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Illustration */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            ></motion.div>

            {/* Right Text */}
            <motion.div
              className="w-full lg:w-2/3 md:w-[700px]  mt-[-50px] text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl text-blue-950  lg:text-4xl xl:text-4xl font-bold leading-snug mb-6">
                One Ecosystem. All Revenue Channels.
                <span className="">
                  Fully{" "}
                  <span className="text-blue-500">
                    Automated with Agentforce
                  </span>
                </span>
              </h2>

              <p className="text-black text-left leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
                Built on the core Salesforce platform, Revenue Cloud Advanced
                (RCA) is designed with real customer needs in mind. With an
                API-first architecture, Salesforce RCA streamlines the
                quote-to-cash process, improves revenue forecasting, and
                simplifies complex billing models like usage-based billing and
                subscription management.
              </p>

              <p className="text-black text-left leading-relaxed text-sm sm:text-base lg:text-lg mb-8">
                Salesforce RCA brings all your sales channels—direct sales,
                partners, and digital self-service—into one seamless system.
                With Agentforce at its core, it simplifies the entire revenue
                process, while scaling, adapting, and keeping things running
                smoothly—so your team can focus on growing, instead of managing
                complexity.
              </p>

              <motion.a
                onClick={() => {
                  navigate("/contactus");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
                className="inline-block px-6 py-3  hover:cursor-pointer shadow-md bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white
                 rounded-md font-semibold"
              >
                Let’s Connect ➝
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ===================== OFFERINGS SECTION (Accordion Fixed) ===================== */}
        <section className="w-full text-black py-16 mt-[-50px] md:mt-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section - Accordion Content */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Salesforce RCA Services by UNIVMAA –{" "}
                <span className="text-[#00A8FF]">Our Offerings:</span>
              </h2>

              <p className="text-black mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                Empowering your revenue transformation with end-to-end expertise
                and hands-on support.
              </p>

              {/* ✅ Accordion */}
              <div className="space-y-3">
                {offerings.map((item, index) => {
                  const isOpen = activeIndex === index;
                  const panelHeight = heights[index] ?? 0;

                  return (
                    <div
                      key={index}
                      className="border border-[#1E2A38] rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left focus:outline-none transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#00A8FF] text-white"
                            : "bg-white text-black hover:bg-[#00A8FF] hover:text-white"
                        }`}
                      >
                        <span className="font-semibold text-sm sm:text-base">
                          {item.title}
                        </span>
                        <span
                          className={`text-xl transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>

                      <motion.div
                        animate={{
                          height: isOpen ? panelHeight : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          ref={(el) => setContentRef(el, index)}
                          className="px-4 sm:px-6 pb-4 text-black text-sm sm:text-base leading-relaxed bg-white"
                        >
                          {item.content}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.a
                onClick={() => {
                  navigate("/contactus");
                  window.scrollTo(0, 0);
                }}
                className="inline-block px-6 py-3 mt-9 shadow-md hover:cursor-pointer bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white rounded-md font-semibold transition-colors duration-300"
              >
                Let’s Connect ➝
              </motion.a>
            </div>

            {/* Right Section - Illustration */}
            <motion.div
              className="w-full flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={revenueimgnew}
                alt="Salesforce RCA Illustration"
                className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[100%] h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* ===================== FEATURES SECTION ===================== */}
        <section
          className="py-20 px-6 lg:px-20 bg-white md:bg-contain md:bg-bottom mb-[-90px] md:mb-[-60px] lg:mb-0 text-black"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${revenueimgnew4})`,
          }}
        >
          {/* Key Features Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20   md:mt-[-100px] mt-[-90px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
              Key Features & Benefits of{" "}
              <span className="text-blue-500">Salesforce RCA</span>
            </h2>
            <p className="text-center text-black text-xl mb-12">
              Streamline Direct, Partner, and Self-Service Sales with AI-Powered
              Precision
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                {
                  title: "Unified Sales Console",
                  desc: "Manage direct, partner, and digital sales from one interface—boosting visibility and reducing complexity.",
                },
                {
                  title: "Agentforce-Ready",
                  desc: "Supports Agentforce & AI capabilities, automating tasks across the entire product-to-cash lifecycle.",
                },
                {
                  title: "API-First Approach",
                  desc: "Easy integration with other systems using a modern API-first approach.",
                },
                {
                  title: "Unified Product Catalog",
                  desc: "Centralize all product details to help sales close deals faster.",
                },
                {
                  title: "Headless Architecture",
                  desc: "Flexible and scalable architecture for modern enterprises.",
                },
                {
                  title: "Transaction Line Editor (TLE)",
                  desc: "Edit line items seamlessly in transactions with real-time feedback.",
                },
                {
                  title: "Guided Selling",
                  desc: "Empower reps with AI-driven recommendations for the best product options.",
                },
                {
                  title: "End-to-End Process",
                  desc: "Automates everything from lead to cash collection in one unified flow.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  {/* Blue Top Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d58aec] rounded-t-xl" />

                  <h3 className="font-bold text-lg mt-4 mb-2 text-[#032d60]">
                    {feature.title}
                  </h3>
                  <p className="text-black text-md leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:mt-[-40px] md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Smarter Selling Across Channels",
                  desc: "Empowers teams to close deals quicker with unified sales console and guided tools.",
                },
                {
                  title: "Seamless Automation from Quote to Cash",
                  desc: "Agentforce automation improves accuracy, reduces manual effort, and accelerates revenue.",
                },
                {
                  title: "Automated, Accurate Order Orchestration",
                  desc: "Real-time automation and integration streamline fulfillment, billing, and finance.",
                },
                {
                  title: "Unified Billing and Payments",
                  desc: "Automate invoicing, collections, and payments to cut manual effort and boost cash flow.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  {/* Blue Top Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d58aec] rounded-t-xl" />

                  <h3 className="font-bold text-lg mt-4 mb-2 text-[#032d60]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-black text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </section>

      {/* ===================== FOOTER SECTION ===================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
};

export default SalesforceRevenueCloud;
