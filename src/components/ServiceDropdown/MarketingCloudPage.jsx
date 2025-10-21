import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation";
import marketingimg from "../../assets/marketingimg.png";
import marketingimg2 from "../../assets/marketingimg2.png";
import marketingimg3 from "../../assets/marketingimg3.png";
import marketingimg4 from "../../assets/marketingimg4.png";
import icon from "../../assets/icon.jpg";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

// Accordion Item Component
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-400/30">
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-3 px-4 text-left text-white font-medium focus:outline-none hover:bg-purple-950/40 transition-colors"
      >
        <span>{title}</span>

        {/* Animated + / - Icon */}
        <motion.span
          className="ml-2 text-xl font-bold"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </button>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-200 text-sm leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MarketingCloudPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [openIndexStudio, setOpenIndexStudio] = useState(0);
  const [openIndexBuilder, setOpenIndexBuilder] = useState(0);

  // Accordion Data
  const studios = [
    {
      title: "Email Studio",
      content:
        "Design, preview, test, and send personalized emails effortlessly.",
    },
    {
      title: "Mobile Studio",
      content:
        "Create, send, and track SMS, push notifications, and in-app messages",
    },
    {
      title: "Social Studio",
      content:
        "(Retiring Nov 2024) Manage social media posts with real-time engagement and analytics.",
    },
    {
      title: "Advertising",
      content:
        "Sync online ads with CRM data and reach new prospects with lookalike audiences.",
    },
    {
      title: "Web Studio",
      content:
        "Manage web content like landing pages and forms to personalize user experiences.",
    },
    {
      title: "Automation Studio",
      content:
        "Automate marketing and data activities, integrating seamlessly with Journey Builder for multi-step workflows.",
    },
  ];

  const builders = [
    {
      title: "Journey Builder",
      content:
        "Visually map and automate customer journeys across marketing touchpoints.",
    },
    {
      title: "Contact Builder",
      content:
        "Manage and segment contact data with demographic and behavioral insights",
    },
    {
      title: "Content Builder",
      content:
        "Create dynamic emails and landing page templates with reusable content blocks.",
    },
    {
      title: "BrandBuilder",
      content:
        "Customize your Marketing Cloud account’s appearance with your company’s branding.",
    },
    {
      title: "Analytics Builder (Standard Reports)",
      content:
        "Gain insights from built-in reports on campaigns, contact behavior, and more.",
    },
    {
      title: "Analytics Builder (Datorama Reports)",
      content:
        "Simplify campaign and journey reporting with pre-built dashboards in Datorama.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] pt-32 text-white px-6  py-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="marketing-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* ========================== Section 2 (Accordion) ========================== */}
      <section className="bg-[#071426] text-white px-6 md:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Be on Top of Your Marketing Game
          </h2>
          <p className="text-gray-300 mt-3">
            Create, manage, and optimize your marketing efforts efficiently with
            Studios & Builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 ">
          {/* Studios */}
          <div className="bg-gradient-to-b from-blue-700 to-purple-900 w-full md:w-5/6 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Marketing Cloud Studios
            </h3>
            <img
              src={marketingimg}
              alt="Marketing Cloud Studios"
              className="w-40 md:w-52 mx-auto mb-6"
            />
            {studios.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                content={item.content}
                isOpen={openIndexStudio === i}
                onClick={() =>
                  setOpenIndexStudio(openIndexStudio === i ? null : i)
                }
              />
            ))}
          </div>

          {/* Builders */}
          <div className="bg-gradient-to-b from-blue-700 to-purple-900 w-full md:w-5/6 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Marketing Cloud Builders
            </h3>
            <img
              src={marketingimg2}
              alt="Marketing Cloud Builders"
              className="w-40 md:w-52 mx-auto mb-6"
            />
            {builders.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                content={item.content}
                isOpen={openIndexBuilder === i}
                onClick={() =>
                  setOpenIndexBuilder(openIndexBuilder === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================== Section 3 ========================== */}
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
            Unlock Multi-Channel{" "}
            <span className="text-blue-400">Marketing </span> Excellence
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            The rules for customer engagement have changed ! <br />
            Today’s buyers are informed, discerning, and expect personalized
            experiences.
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

      {/* ========================== Section 4 ========================== */}
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
            Key Benefits of Salesforce{" "}
            <span className="text-blue-400">Marketing Cloud</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Marketing Cloud Studios manage content and specific marketing
            channels whereas Builders take care of the data & campaign
            automation. Optimize customer engagement, and drive higher revenue
            by centralizing your marketing efforts.
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
            src={marketingimg4}
            alt="Data & AI"
            className="w-96 md:w-[500px]"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
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

      {/* ========================== Section 6 ========================== */}
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
          Partner with Univmaa -{" "}
          <span className="text-blue-400">Our Offerings</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        >
          As a Company committed to excellence, we offer solutions that meet
          your unique & evolving business needs.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Customer Journeys",
              desc: "With visual campaign mapping, automation tools, multi-channel engagement, dynamic content personalization, real-time analytics & data integration - we help you create and manage highly targeted campaigns.",
            },
            {
              title: "Data-Driven Marketing Strategy",
              desc: "We help you enable precise audience segmentation based on detailed demographic and behavioral data, understand and analyze customer behavior and tailor content aligned with customer preferences and actions.",
            },
            {
              title: "Migration and Integration",
              desc: "With clear migration goals, data cleansing, technology selection, and thorough documentation - we ensure a smooth transition to Salesforce Marketing Cloud without any loss of critical information.",
            },
            {
              title: "Omnichannel Marketing",
              desc: "Our expertise ensures that your marketing efforts are cohesive and consistent across SMS, email, social media, and advertising channels - ensuring a unified brand presence.",
            },
            {
              title: "AI-Powered Insights and Optimization",
              desc: "Boost your marketing effectiveness using Salesforce Einstein’s AI-driven capabilities. Integrate Einstein into a unified platform offering predictive analytics, content recommendations, journey optimization, data integration and real-time insights.",
            },
            {
              title: "End-to-End Campaign Management",
              desc: "From planning and design to execution and reporting, we provide complete campaign lifecycle support—ensuring maximum ROI and streamlined operations.",
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

      {/* ========================== Section 7 - CTA ========================== */}
      <RequestForConsultation />
      <Footer />
    </>
  );
}
