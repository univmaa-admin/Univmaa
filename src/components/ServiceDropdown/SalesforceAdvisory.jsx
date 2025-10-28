import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

import advisoryimgnew from "../../assets/advisoryimgnew.webp";
import advisoryimgnew2 from "../../assets/advisoryimgnew2.webp";
import advisoryimgnew3 from "../../assets/advisoryimgnew3.webp";
import advisory from "../../assets/advisory.jpg";

import RequestForConsultation from "../RequestForConsultation.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

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
          className="border border-gray-700 rounded-xl overflow-hidden"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium duration-300
          ${
            activeIndex === index
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }
          hover:bg-blue-500 hover:text-white`}
          >
            <span>{item.title}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-2xl"
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
                  className="px-5 py-4 text-left bg-white text-sm leading-relaxed"
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

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" text-black font-sans">
        {/* Hero Section */}
        <section
          className="relative px-4 lg:h-screen md:h-[550px]  sm:px-6 lg:px-20 
  pt-20 text-black sm:pt-28 md:pt-36 mb-32 py-12 
  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden"
          style={{
            backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0)),
      url(${advisory})
    `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001233]/95 via-[#001233]/70 to-transparent z-0"></div>

          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 md:mt-[-80px] w-full sm:w-[90%] md:w-[700px] text-left sm:ps-6 md:ps-10 lg:ps-0 mt-12"
          >
            <h1 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Salesforce <span className="text-blue-400">Advisory</span>
            </h1>

            <p className="text-white mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Unlock unmatched success with our Salesforce Advisory & Consulting
              Services. Make informed, strategic decisions that maximize the
              value of your Salesforce investment. Our Salesforce Advisory team
              empowers organizations to define a clear CRM vision, optimize
              business processes, and accelerate digital transformation. From
              strategy and architecture to governance and roadmap planning, we
              guide you at every step to ensure your Salesforce ecosystem aligns
              with your business goals.
            </p>

            <button
              className="px-6 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3]  hover:text-white rounded-lg font-medium shadow-md hover:opacity-90 transition"
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0);
              }}
            >
              Contact Us ➜
            </button>
          </motion.div>
        </section>

        {/* Accordion + Form Section */}
        <section
          className="px-4 sm:px-6 lg:px-20 mt-[-130px] py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: `url(${advisoryimgnew})`,
          }}
        >
          {/* Accordion Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:max-w-xl lg:ms-32 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-bold mb-6">
              Accelerate your journey to success with our{" "}
              <span className="text-blue-600">Salesforce experts</span>
            </h2>
            <Accordion />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="relative bg-slate-200 p-6 lg:mt-32 md:mt-44 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto md:mx-0 md lg:ms-36"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
              Let's Talk!
            </h3>
            <form className="space-y-4" onSubmit={onSubmit}>
              {[
                "First Name *",
                "Last Name *",
                "Company *",
                "Business Email *",
                "Comments",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  type={placeholder.includes("Email") ? "email" : "text"}
                  placeholder={placeholder}
                  required={!placeholder.includes("Contact")}
                  className="w-full px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
              ))}
              <button
                type="submit"
                className="w-full px-4 py-3 rounded bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white font-semibold transition-colors duration-300"
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
          className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-1 lg:grid-cols-2  items-center"
        >
          <motion.img
            src={advisoryimgnew2}
            alt="Why Choose"
            className="w-[60%] mb-12  lg:ms-40 md:w-[50%] md:mb-16 lg:w-[70%] mx-auto"
            transition={{ type: "spring", stiffness: 200 }}
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl md:w-[700px] font-bold leading-snug mb-4">
              Why Choose <span className="text-blue-800">Univmaa</span> as your{" "}
              Salesforce Advisory Partner?
            </h2>
            <p className="text-black mb-4 text-sm md:text-base">
              Business processes are transforming at a lightning pace and the
              competition is cutthroat. Evolving your business digitally is the
              only way forward. As a proud Salesforce Summit Partner, we offer
              our advisory services by facilitating digital evolution and
              driving innovation for our clients.
            </p>
            <ul className="list-disc list-inside text-black  text-start space-y-2 mb-6 text-sm md:text-base">
              <li>4.9/5 Customer Satisfaction (CSAT) Score</li>
              <li>Diverse Industry Expertise</li>
              <li>95% Salesforce Certified Professionals</li>
              <li>Well-defined Service Level Agreements (SLAs)</li>
              <li>Data-driven Methodologies</li>
              <li>24/7 support</li>
            </ul>
            <motion.a
              onClick={() => navigate("/contactus")}
              className="bg-white shadow-md text-[#0176d3] hover:bg-[#0176d3] hover:text-white px-6 py-3 rounded-lg hover:cursor-pointer font-semibold inline-block"
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
          className=" container mx-auto px-4 lg:mt-[-100px]  sm:px-6 md:px-12 lg:px-20 py-16 grid lg:grid-cols-2  md:grid-cols-1  "
        >
          <div className="text-center md:text-left mt-[-100px] md:mt-[-70px] lg:mt-0 lg:ms-48 lg:w-[700px]">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Maximizing <span className="text-blue-500">ROI</span> on Your CRM
              System
            </h2>
            <p className="text-black mb-4 text-sm md:text-base">
              A successful CRM implementation starts with an understanding of
              specific business requirements. Our Salesforce CRM advisors are
              industry experts who study your business processes and customize
              your CRM implementation plan to best meet your explicit business
              requirements.
            </p>
            <h3 className="font-semibold mb-3">Our Approach</h3>
            <ul className="list-disc list-inside text-start text-black space-y-2 mb-6 text-sm md:text-base">
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
              className="bg-white shadow-md text-[#0176d3] hover:bg-[#0176d3] hover:text-white  px-6 py-3 rounded-lg hover:cursor-pointer font-semibold inline-block"
            >
              Let’s Connect →
            </motion.a>
          </div>

          <motion.img
            src={advisoryimgnew3}
            alt="CRM ROI"
            className=" md:w-[60%] w-[70%] mt-5 mb-[-80px] md:mb-[-70px] lg:w-[50%] lg:ms-[260px] lg:mt-9 mx-auto"
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.section>

        {/* CTA Section */}
      </div>
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
};

export default SalesforceAdvisory;
