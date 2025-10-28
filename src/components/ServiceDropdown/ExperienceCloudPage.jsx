import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // for + and - icons
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

import experiencecloudnew from "../../assets/experiencecloudnew.webp";
import experiencecloudnew2 from "../../assets/experiencecloudnew2.webp";
import experiencecloudnew3 from "../../assets/experiencecloudnew3.webp";
import experiencecloudnew4 from "../../assets/experiencecloudnew4.webp";
import experiencecloudnew5 from "../../assets/experiencecloudnew5.webp";
import experiencecloudnew6 from "../../assets/experiencecloudnew6.webp";
import experiencecloudnew7 from "../../assets/experiencecloudnew7.webp";

import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FaqDynamic from "../FaqDynamic.jsx";
// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceCloudPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const expandCards = [
    {
      title: "Secure User Management",
      desc: "Manage users with advanced authentication, role-based access control, and permissions to ensure security.",
    },
    {
      title: "Mobile-First Design",
      desc: "Deliver a seamless, responsive experience across devices, optimized for mobile performance.",
    },
    {
      title: "Integrated Data Platform",
      desc: "Unify customer data across systems to create personalized, data-driven experiences.",
    },
    {
      title: "Custom Reporting",
      desc: "Gain deeper insights with tailored reports and analytics for smarter decision-making.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section
        className=" pt-32  px-6  py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center overflow-hidden relative"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
      url(${experiencecloudnew5})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="experience-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>
      {/* ========================== Section 2 ========================== */}
      <motion.section
        className="relative px-6 md:px-10 py-16 grid lg:grid-cols-2 md:grid-cols-1 items-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Background Image (blurred & dark overlay) */}
        <div
          className="absolute inset-0 z-0 md:bg-contain   md:bg-top"
          style={{
            backgroundImage: `url(${experiencecloudnew6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0.4px)", // <-- blur + darken background
            transform: "scale(1.05)", // prevent edge blur cutoff
          }}
        ></div>

        {/* Overlay to improve readability */}
        <div className="absolute inset-0  backdrop-blur-[1px] z-0"></div>

        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:mt-[-40px] mt-[-56px] mb-6 lg:mb-0 md:mb-0 md:pb-16 z-10"
        >
          <img
            src={experiencecloudnew}
            alt="Data-Driven Selling"
            className="md:w-[520px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          className="z-10 lg:ms-[-150px] lg:mt-[-40px]  lg:w-[700px]"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl  font-bold mb-6 text-blue-950">
            Deliver customer-centric{" "}
            <span className="text-blue-500">Digital Experiences</span> whenever
            they are
          </h2>

          <p className="text-gray-800 mb-6 text-lg leading-relaxed">
            Salesforce Experience Cloud empowers businesses to create
            personalized, customer-centric digital experiences across channels.
            With Salesforce Experience Cloud Implementation, unify your customer
            data into a single source of truth that enables you to deliver
            personalized, seamless digital experiences. With a flexible,
            scalable platform supported by powerful AI and an extensive
            ecosystem of tools, Salesforce Experience Cloud ensures seamless,
            impactful interactions that drive stronger relationships, higher
            engagement, and a greater return on investment.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0);
            }}
            className="inline-block px-6 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white rounded-md font-semibold transition-all shadow-md"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="relative text-black md:px-20 py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 z-0 lg:bg-cover lg:h-[435px] bg-no-repeat bg-bottom bg-cover"
          style={{
            backgroundImage: `url(${experiencecloudnew7})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            filter: "blur(1px) brightness()", // 🔹 Blur + dim effect
            transform: "scale(1.05)", // prevents edge blur artifacts
          }}
        ></div>

        {/* Optional Soft Overlay (adds contrast) */}
        <div className="absolute inset-0 z-0"></div>

        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="ps-7 lg:w-[800px] mt-[-46px] lg:mt-[-30px] lg:ms-72 z-10"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Establish A Single Point Ecosystem for{" "}
            <span className="text-blue-500">Your Business</span>
          </h2>

          <p className="text-black mb-4 text-lg leading-relaxed">
            Univmaa can help you create a community platform of sellers,
            vendors, customers,
            <br /> and other business stakeholders.
          </p>

          <ul className="list-disc list-inside text-black space-y-2 text-lg">
            <li>Create A Powerful Digital Presence</li>
            <li>Assign Individual Priority-Based Tasks</li>
            <li>Pick a Wide Range of Templates</li>
            <li>Launch Your Brand Faster Than Ever</li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:mt-7 lg:ms-0 md:mt-[-190px] md:ms-96 z-10"
        >
          <img
            src={experiencecloudnew2}
            alt="Data & AI"
            className="md:w-[250px] w-60 lg:ms-80 rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 3.5 (Accordion Features) ========================== */}
      <motion.section
        className="text-black px-6  md:px-20 py-16 bg-black  grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${experiencecloudnew3})`,
        }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        ></motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-6  lg:ms-[-90px] mt-[-88px] md:mt-0 md:ms-[-200px] lg:mr-32"
        >
          <h2 className="text-3xl md:text-4xl text-blue-950 lg:mt-[-30px] font-bold leading-snug">
            Transform Your Business into{" "}
            <span className="text-blue-500">An Experience</span>
          </h2>
          <p className="text-black text-lg">
            Leading brands understand the power of investing in brand equity and
            prioritize Salesforce Experience Cloud implementation to create
            exceptional experiences for their customers that go beyond just a
            buy and sell transaction.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {expandCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="border border-gray-700  rounded-lg overflow-hidden"
              >
                {/* Card Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="font-medium">{card.title}</h3>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-sky-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-sky-400" />
                  )}
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <p className="text-black pb-4">{card.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className="bg-white text-black px-6 bg-no-repeat bg-bottom bg-cover md:bg-no-repeat md:bg-cover md:mb-[-30px] md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${experiencecloudnew4})`,
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:mt-[-50px] mt-[-40px] md:mt-[-20px] font-bold text-center mb-4 text-gray-900"
          variants={fadeInUp}
        >
          Salesforce Experience Cloud Services by{" "}
          <span className="text-blue-600">Univmaa</span>
        </motion.h2>

        <motion.p
          className="text-center text-black mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Empower your business with Salesforce Experience Cloud – enabling
          personalized customer engagement, seamless collaboration, and
          connected digital experiences.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {[
            {
              title: "Customer Service Solutions",
              desc: "Implement self-service portals, knowledge bases, forums, and live chat to resolve issues faster and efficiently involve support agents only when needed.",
            },
            {
              title: "Account Management",
              desc: "Configure business account portals for direct access to account information, with integrations for seamless profile updates and quick request submissions.",
            },
            {
              title: "Partner Platforms",
              desc: "Build branded communities for partner collaboration, automating workflows, and tracking leads through integrated solutions.",
            },
            {
              title: "Innovative Communities",
              desc: "Create market-leading platforms for peer collaboration, idea exchange, and eCommerce integration disrupting your industry.",
            },
            {
              title: "Employee Communities",
              desc: "Facilitate internal processes, training, and remote work with customized employee communities, supporting communication and development.",
            },
            {
              title: "Custom Development & Integration",
              desc: "Leverage Salesforce APIs and tools to build custom features, integrate with third-party systems, and extend platform capabilities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="relative bg-transparent rounded-xl shadow-md hover:shadow-lg transition-all p-8 border border-gray-100"
            >
              {/* Green Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500 rounded-t-xl" />

              <h3 className="font-bold text-xl text-[#032d60] mb-3 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
