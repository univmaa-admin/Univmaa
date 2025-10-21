import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation.jsx";

const SalesforceImplementation = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const products = [
    {
      title: "Sales Cloud",
      content:
        "Boost revenue, enhance productivity, and revolutionize your sales operations with our expert implementation, customization, and support services. Univmaa is an expert in implementing Sales Cloud for businesses of every size and nature.",
      path: "/salescloud",
    },
    {
      title: "Service Cloud",
      content:
        "Univmaa excels in Service Cloud implementation, offering both standard and customized solutions. We ensure your Service Cloud meets customer service goals through comprehensive configuration, customization, and integration, delivering exceptional support tailored to your needs.",
      path: "/servicecloud",
    },
    {
      title: "Marketing Cloud",
      content:
        "Create, manage, and optimize your marketing efforts efficiently with Studios & Builders. Univmaa Marketing Cloud implementation provides a robust digital marketing platform, enabling you to plan, optimize, and personalize customer journeys from a single, integrated system.",
      path: "/marketingcloud",
    },
    {
      title: "Salesforce CPQ",
      content:
        "Streamline pricing, quote configurations, and add-on management for error-free quotes, accelerated order processing, and competitive pricing strategies. From implementation to ongoing support and maintenance – enhance your sales efficiency with UNIVMAA Salesforce CPQ.",
      path: "/cpq",
    },
    {
      title: "Experience Cloud",
      content:
        "Create customer-first digital experiences with Experience Cloud Implementation services by UNIVMAA. Connect with customers through interactive sites, portals, and applications and benefit from seamless data integration, rapid deployment, and a unified platform for exceptional customer engagement and satisfaction.",
      path: "/experiencecloud",
    },
    {
      title: "Health Cloud",
      content:
        "Salesforce Health Cloud is a patient relationship management platform designed for healthcare providers, payers, and life sciences organizations. It unifies clinical and non-clinical data to give a 360° view of each patient, improves care coordination, and enables personalized engagement. With Health Cloud, healthcare organizations can deliver connected, patient-centric care while driving better health outcomes and stronger patient relationships.",
      path: "/healthcloud",
    },

    {
      title: "Agentforce",
      content:
        "Reimagine customer interactions with Agentforce — Salesforce’s next-gen AI-powered customer service solution. Automate repetitive tasks, empower agents with real-time insights, and deliver exceptional service experiences that scale effortlessly.",
      path: "/agentforce",
    },
    {
      title: "Salesforce Advisory",
      content:
        "Our Salesforce Advisory services help organizations strategize, plan, and execute their Salesforce vision effectively. We align technology with business objectives to ensure maximum ROI and sustainable digital transformation.",
      path: "/salesforceadvisory",
    },
    {
      title: "Tableau",
      content:
        "Empower your organization with data visualization and analytics through Tableau. Gain real-time insights, make data-driven decisions, and unlock the full potential of your business intelligence strategy.",
      path: "/tableau",
    },
    {
      title: "Data Cloud",
      content:
        "Salesforce Data Cloud unifies all your customer data into a single, real-time profile, enabling personalized experiences at scale. Unlock a 360° view of every customer and activate data across all channels for smarter engagement.",
      path: "/datacloud",
    },
    {
      title: "MuleSoft",
      content:
        "Connect applications, data, and devices seamlessly with MuleSoft’s powerful integration platform. Accelerate innovation by building a connected ecosystem that enables data to flow across systems effortlessly.",
      path: "/mulesoft",
    },
    {
      title: "Revenue Cloud",
      content:
        "Unify sales, partner, operations, and finance teams with Revenue Cloud to accelerate growth. Automate complex revenue processes, optimize quoting and billing, and gain complete visibility into your revenue lifecycle.",
      path: "/revenuecloud",
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a658a2c1-720d-4ddf-875a-07a7c955d2ec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      setError(null);
      event.target.reset();
    } else {
      setError("Something went wrong!");
      setSuccess(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white pb-10 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-4 sm:px-6  pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Left Text */}
          <div className="text-center md:text-left md:ps-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Salesforce <br />
              <span className="text-purple-400">Implementation Services</span>
            </h1>
            <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
              Improve your workforce productivity, accelerate customer
              engagement and make Salesforce work best for your business with
              UNIVMAA end-to-end Salesforce Implementation Services.
            </p>
            {/* Explore More Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md font-semibold text-white shadow hover:opacity-90 transition"
            >
              Explore More →
            </button>

            {/* Modal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Modal Content */}
                  <motion.div
                    className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-3xl mx-auto p-6 sm:p-8 relative overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
                    >
                      ✕
                    </button>

                    {/* Modal Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Text Content */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                          Salesforce Implementation Services
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          Our Salesforce Implementation Services help
                          organizations unlock the full potential of the
                          Salesforce platform. From requirement gathering and
                          solution design to deployment and user adoption, we
                          ensure a smooth and efficient rollout. By aligning
                          Salesforce with your business goals, we enable faster
                          time-to-value, streamlined operations, and scalable
                          growth across sales, service, and marketing functions.
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src="image/implementationmodal.jpg"
                          alt="Sales Cloud"
                          className="rounded-lg shadow-md w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center relative">
            <motion.img
              src="image/implementationbanner.png"
              alt="Rocket Illustration"
              className="w-64 sm:w-72 md:w-[400px] relative z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* Fire effect */}
            <div className="absolute bottom-[-40px] flex flex-col items-center z-0">
              <motion.div
                className="w-8 sm:w-10 h-20 sm:h-24 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent rounded-full blur-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full blur-sm mt-2"
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
            </div>
          </div>
        </motion.section>

        {/* Products + Form */}
        <motion.section
          className="container mx-auto px-6 sm:ms-11   md:px-2 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Accordion */}
          <div>
            <h2 className="text-2xl sm:text-3xl  font-bold mb-6">
              Salesforce Products We Implement
            </h2>
            <div className="space-y-3">
              {products.map((item, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full px-4 py-3 bg-black hover:bg-gray-900 text-left text-sm sm:text-base"
                  >
                    <span
                      className={`${
                        openIndex === index ? "text-cyan-400" : "text-white"
                      } font-medium`}
                    >
                      {item.title}
                    </span>
                    <span className="text-white text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        className="overflow-hidden bg-black"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <div className="px-4 py-3 text-gray-300 text-sm space-y-3">
                          <p>{item.content}</p>
                          <button
                            onClick={() => handleNavigate(item.path)}
                            className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                          >
                            Learn more →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="bg-gradient-to-b from-purple-600 to-black p-6 sm:p-8 md:ms-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-20 md:mt-28"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
              Fill the form to get started
            </h3>
            <form className="space-y-4" onSubmit={onSubmit}>
              {[
                "First Name *",
                "Last Name *",
                "Company *",
                "Business Email *",
                "Contact Number",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  type={placeholder.includes("Email") ? "email" : "text"}
                  placeholder={placeholder}
                  required={!placeholder.includes("Contact")}
                  className="w-full px-4 py-3 rounded bg-white text-black focus:outline-none text-sm sm:text-base"
                />
              ))}
              <button
                type="submit"
                className="w-full px-4 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </motion.section>

        {/* Why Section */}
        <motion.section
          className="bg-black text-white container mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* 🚀 Rocket Animation (Left Side) */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="image/implementationbanner2.png"
              alt="Rocket Illustration"
              className="w-64 sm:w-72 md:w-96 relative z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />

            {/* 🔥 Fire Effect */}
            <div
              className="absolute z-0"
              style={{
                bottom: "60px",
                left: "50%",
                transform: "translateX(-50%) rotate(25deg)",
              }}
            >
              <motion.div
                className="w-10 sm:w-12 h-20 sm:h-24 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent rounded-full blur-lg"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full blur-sm mt-2"
                animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
              <motion.div
                className="w-2 h-2 bg-orange-500 rounded-full blur-sm mt-1"
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.7, delay: 0.2 }}
              />
            </div>
          </motion.div>
          <motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Why UNIVMAA?
            </h2>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li className="">
                <span className="font-bold text-white">
                  • Comprehensive Expertise:
                </span>
                <br />
                In-depth understanding of technologies & cloud solutions with
                Salesforce best practices.
              </li>
              <li>
                <span className="font-bold text-white">
                  • Faster Implementation:
                </span>
                <br />
                Streamlined approach with minimal downtime & efficient rollout.
              </li>
              <li>
                <span className="font-bold text-white">
                  • Industry Understanding:
                </span>
                <br />
                Expertise across 15+ industries delivering tailored solutions.
              </li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
      <RequestForConsultation />
      <Footer />
    </>
  );
};

export default SalesforceImplementation;
