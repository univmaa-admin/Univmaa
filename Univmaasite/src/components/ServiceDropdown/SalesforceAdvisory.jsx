import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import marketingimg from "../../assets/marketingimg.png";
import marketingimg2 from "../../assets/marketingimg2.png";
import marketingimg3 from "../../assets/marketingimg3.png";
import RequestForConsultation from "../RequestForConsultation.jsx";

/* ---------------- Accordion Data ---------------- */
const accordionData = [
  {
    title: "Sales Process Design",
    content:
      "We help enterprises leverage the most effective Salesforce features designed to support their sales process including leads, campaigns, products, opportunities, and quotes.",
  },
  {
    title: "Service Process Design",
    content:
      "We optimize service processes with Salesforce Service Cloud, ensuring smooth case management, knowledge base usage, and customer satisfaction tracking.",
  },
  {
    title: "Salesforce Consulting",
    content:
      "Our consulting services provide expert guidance on Salesforce implementations, enhancements, and long-term success strategies.",
  },
  {
    title: "Salesforce Audit & Assessment",
    content:
      "We assess your Salesforce org, identify bottlenecks, and provide actionable recommendations to maximize ROI.",
  },
  {
    title: "Salesforce Program Strategy & Adoption Planning",
    content:
      "We help enterprises define program strategies, adoption plans, and user training for seamless Salesforce integration.",
  },
  {
    title: "Change Management Services",
    content:
      "Our change management ensures smooth adoption, user onboarding, and minimized disruption to business operations.",
  },
];

/* ---------------- Accordion Component ---------------- */
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3 overflow-x-hidden">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-700 rounded-xl overflow-hidden bg-black/90"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium bg-black hover:bg-gray-900 transition-all duration-300"
          >
            <span className="text-white">{item.title}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-2xl text-white"
            >
              +
            </motion.span>
          </button>

          {/* Content */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0, scaleY: 0.95 }}
                animate={{ height: "auto", opacity: 1, scaleY: 1 }}
                exit={{ height: 0, opacity: 0, scaleY: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  className="px-5 py-4 bg-gray-950 text-gray-300 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.content}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

/* ---------------- Animation Variants ---------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Main Page ---------------- */
const SalesforceAdvisory = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0B0B1A] text-white font-sans">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-28 md:pt-36 mb-32 py-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center sm:ps-24 md:text-left mt-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Salesforce Advisory
            </h1>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Unlock unmatched success with our Salesforce Advisory & Consulting
              Services. <br />
              Make informed decisions about your Salesforce strategy.
            </p>
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium shadow-md hover:opacity-90 transition"
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0);
              }}
            >
              Contact Us ➜
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={marketingimg3}
              alt="Advisory Illustration"
              className="w-full sm:w-[70%] md:w-[65%] lg:w-[55%] mx-auto"
            />
          </motion.div>
        </section>

        {/* Accordion + Form Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 grid md:grid-cols-2 gap-8 items-start">
          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-md">
              Accelerate your journey to success with our{" "}
              <span className="text-blue-600">Salesforce experts</span>
            </h2>
            <Accordion />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-purple-600 to-black p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-3/4 max-w-md mx-auto mt-12 sm:mt-28"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6">
              Fill the form to get started
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <input
                type="text"
                placeholder="Company *"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <input
                type="email"
                placeholder="Business Email *"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </section>

        {/* Advisory Section 1 */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.img
            src={marketingimg2}
            alt="Why Choose"
            className="w-full sm:w-[60%] md:w-[80%] lg:w-[70%] mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Why Choose <span className="text-blue-800">Univmaa</span> as your{" "}
              <br /> Salesforce Advisory Partner?
            </h2>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Business processes are transforming at a lightning pace and the
              competition is cutthroat. Evolving your business digitally is the
              only way forward. As a proud Salesforce Summit Partner, we offer
              our advisory services by facilitating digital evolution and
              driving innovation for our clients.
            </p>
            <ul className="list-disc list-inside text-gray-300  text-start space-y-2 mb-6 text-sm md:text-base">
              <li>4.9/5 Customer Satisfaction (CSAT) Score</li>
              <li>Diverse Industry Expertise</li>
              <li>95% Salesforce Certified Professionals</li>
              <li>Well-defined Service Level Agreements (SLAs)</li>
              <li>Data-driven Methodologies</li>
              <li>24/7 support</li>
            </ul>
            <motion.a
              onClick={() => navigate("/contactus")}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg hover:cursor-pointer font-semibold inline-block"
            >
              Contact Us →
            </motion.a>
          </div>
        </motion.section>

        {/* Advisory Section 2 */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-black container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Maximizing ROI on Your CRM System
            </h2>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              A successful CRM implementation starts with an understanding of
              specific business requirements. Our Salesforce CRM advisors are
              industry experts who study your business processes and customize
              your CRM implementation plan to best meet your explicit business
              requirements.
            </p>
            <h3 className="font-semibold mb-3">Our Approach</h3>
            <ul className="list-disc list-inside text-start text-gray-300 space-y-2 mb-6 text-sm md:text-base">
              <li>Business Alignment & Gap Analysis</li>
              <li>Strategic Roadmap</li>
              <li>Prioritize Issues</li>
              <li>Identification & Analysis</li>
              <li>Solutioning</li>
              <li>Continuous Optimization</li>
            </ul>
            <motion.a
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0);
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg hover:cursor-pointer font-semibold inline-block"
            >
              Let’s Connect →
            </motion.a>
          </div>

          <motion.img
            src={marketingimg}
            alt="CRM ROI"
            className="w-full sm:w-[60%] md:w-[80%] lg:w-[70%] mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.section>

        {/* CTA Section */}
        <RequestForConsultation />
      </div>
      <Footer />
    </>
  );
};

export default SalesforceAdvisory;
