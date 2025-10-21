import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // for + and - icons
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import experienceimg from "../../assets/experienceimg.png";
import experienceimg2 from "../../assets/experienceimg2.png";
import experienceimg3 from "../../assets/experienceimg3.png";
import icon from "../../assets/icon.jpg";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
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
      <section className="bg-[#0D1117] pt-32 text-white px-6  py-16 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="experience-cloud" />
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
            src={experienceimg}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deliver customer - centric{" "}
            <span className="text-blue-400">Digital Experiences </span> Whenever
            they are
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Salesforce Experience Cloud empowers businesses to create
            personalized, customer-centric digital experiences across channels.
            With Salesforce Experience Cloud Implementation, unify your customer
            data into a single source of truth that can enable you to deliver
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
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r hover:cursor-pointer from-blue-500 to-purple-600 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="bg-black text-white  md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="ps-7"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Establish A Single Point Ecosystem for{" "}
            <span className="text-blue-400">Your Business</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Univmaa can help you create a community platform of sellers,
            vendors, customers, and other business stakeholders.
            <li>Create A Powerful Digital Presence</li>
            <li>Assign Individual Priority Based Tasks</li>
            <li>Pick a Wide Range of Templates</li>
            <li>Launch Your Brand Faster Than Ever</li>
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={experienceimg2}
            alt="Data & AI"
            className="w-96 md:w-[500px]"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 3.5 (Accordion Features) ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center"
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
            src={experienceimg3}
            alt="Experience Cloud Illustration"
            className="w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Transform Your Business into <br />{" "}
            <span className="text-sky-400">An Experience</span>
          </h2>
          <p className="text-gray-300 text-lg">
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
                  <p className="text-gray-400 pb-4">{card.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
          Salesforce Experience Cloud Services by{" "}
          <span className="text-blue-400">Univmaa</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        ></motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Service Solutions:",
              desc: "Implement self-service portals, knowledge bases, forums, and live chat to resolve issues faster and efficiently involve support agents only when needed.",
            },
            {
              title: "Account Management:",
              desc: "Configure business account portals for direct access to account information, with integrations for seamless profile updates and quick request submissions.",
              //   highlight: true,
            },
            {
              title: "Partner Platforms:",
              desc: "Build branded communities for partner collaboration, automating workflows, and tracking leads through integrated solutions.",
            },
            {
              title: "Innovative Communities:",
              desc: "Create market-leading platforms for peer collaboration, idea exchange, and eCommerce integration disrupting your industry.",
            },
            {
              title: "Employee Communities:",
              desc: "Facilitate internal processes, training, and remote work with customized employee communities, supporting communication and development.",
            },
            {
              title: "Custom Development & Integration:",
              desc: "Leverage Salesforce APIs and tools to build custom features, integrate with third-party systems, and extend platform capabilities.",
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
