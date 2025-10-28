import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation";
import marketingimg from "../../assets/marketingimg.png";
import marketingimg2 from "../../assets/marketingimg2.png";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

import markeingimgnew from "../../assets/markeingimgnew.webp";
import markeingimgnew2 from "../../assets/markeingimgnew2.webp";
import markeingimgnew3 from "../../assets/markeingimgnew3.webp";
import markeingimgnew4 from "../../assets/markeingimgnew4.webp";
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
        className="w-full flex justify-between items-center py-3 px-4 text-left text-black font-medium hover:text-white focus:outline-none hover:bg-blue-500 transition-colors"
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
            <div className="px-4 pb-4 text-black text-sm leading-relaxed">
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
      <section
        className="pt-32 text-black px-6 md:px-16 md:pr-16 py-16 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
       url(${markeingimgnew2})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="marketing-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* ========================== Section 2 (Accordion) ========================== */}
      <section
        className=" text-black px-6 md:px-20  py-16"
        style={{
          backgroundImage: `url(${markeingimgnew3})`,
        }}
      >
        <div className="text-center mb-12 mt-[-60px]">
          <h2 className="text-3xl md:text-4xl text-blue-950 font-bold">
            Be on Top of Your{" "}
            <span className="text-blue-500">Marketing Game</span>
          </h2>
          <p className="text-black mt-3">
            Create, manage, and optimize your marketing efforts efficiently with
            Studios & Builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 ">
          {/* Studios */}
          <div className=" w-full  mt-[-30px] lg:mt-0 md:mt-0  rounded-xl shadow-lg p-6">
            <h3 className="text-xl text-black font-semibold mb-6 text-center">
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
          <div className="text-black  mt-5 md:mt-0 w-full md:ms-6 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Marketing Cloud Builders
            </h3>
            <img
              src={marketingimg2}
              alt="Marketing Cloud Builders"
              className="w-40 md:w-52 mx-auto mb-6 "
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
        className=" text-black px-6 md:px-20 py-16 grid lg:z-10 lg:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundImage: `url(${markeingimgnew3})`,
        }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={markeingimgnew}
            alt="Data-Driven Selling"
            className="w-80 md:w-[620px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock Multi-Channel{" "}
            <span className="text-blue-400">Marketing </span> Excellence
          </h2>
          <p className="text-black mb-4 text-lg">
            The rules for customer engagement have changed ! <br />
            Today’s buyers are informed, discerning, and expect personalized
            experiences.
          </p>
          <p className="text-black mb-6 text-lg">
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
            className="inline-block px-6 py-3 hover:cursor-pointer bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white
 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className=" text-black relative lg:h-[600px] md:bg-cover lg:-z-10  md:h-[550px] h-[620px] bg-no-repeat bg-bottom bg-cover  px-6 md:px-20 py-16  gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${markeingimgnew4})`,
        }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          className="lg:ms-[500px] "
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-blue-950 font-bold mb-6">
            Key Benefits of Salesforce{" "}
            <span className="text-blue-500">Marketing Cloud</span>
          </h2>
          <p className="text-black mb-4 text-lg lg:w-[600px]">
            Marketing Cloud Studios manage content and specific marketing
            channels whereas Builders take care of the data & campaign
            automation. Optimize customer engagement, and drive higher revenue
            by centralizing your marketing efforts. Einstein AI transforms this
            data into actionable insights, predicting customer behavior,
            automating tasks, and personalizing interactions. Let AI do the
            heavy lifting for revenue growth and customer satisfaction.
          </p>
          <p className="text-black mb-6 text-lg"></p>
        </motion.div>
      </motion.section>

      {/* ========================== Section 6 ========================== */}
      <motion.section
        className="bg-white text-black px-6 md:px-20 mt-[-60px] lg:mt-[-100px] lg:z-10 md:mt-[-60px]  py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:mt-[-20px] font-bold text-center mb-4 text-blue-950"
          variants={fadeInUp}
        >
          Partner with Univmaa –{" "}
          <span className="text-blue-500">Our Offerings</span>
        </motion.h2>
        <motion.p className="text-center text-black mb-12" variants={fadeInUp}>
          As a company committed to excellence, we offer solutions that meet
          your unique & evolving business needs.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f59141] rounded-t-xl" />

              <h3 className="font-bold text-xl mt-4 mb-3 text-black">
                {item.title}
              </h3>
              <p className="text-black text-sm mb-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 7 - CTA ========================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
