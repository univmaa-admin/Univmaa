import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

import implementationimgnew from "../../assets/implementationimgnew.png";
import implementationimgnew2 from "../../assets/implementationimgnew2.webp";

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

  const faqData = {
    overview: [
      {
        q: "What are Salesforce Implementation Services?",
        a: "Salesforce Implementation Services help organizations design, configure, and deploy Salesforce solutions that align with their business goals. They ensure a seamless transition from planning to execution.",
      },
      {
        q: "Why is professional Salesforce implementation important?",
        a: "Expert implementation ensures your Salesforce system is set up correctly, optimized for your workflows, and scalable for future growth — reducing risk and improving ROI.",
      },
      {
        q: "Who provides Salesforce implementation support?",
        a: "Certified Salesforce consultants and partners guide the entire process — from business analysis and customization to data migration, integration, and user training.",
      },
      {
        q: "How long does Salesforce implementation take?",
        a: "The timeline depends on the project's scope and complexity. Smaller projects may take a few weeks, while enterprise-wide deployments can span several months.",
      },
    ],

    process: [
      {
        q: "What are the key stages of Salesforce implementation?",
        a: "A typical implementation includes discovery, system design, configuration, data migration, integration, testing, training, and post-launch support.",
      },
      {
        q: "How do consultants ensure a successful Salesforce rollout?",
        a: "Consultants follow best practices, agile methodologies, and Salesforce’s implementation framework to deliver predictable, measurable outcomes.",
      },
      {
        q: "How is data migration handled during implementation?",
        a: "Data is carefully analyzed, cleaned, and mapped to ensure accuracy and integrity before being migrated to Salesforce using secure tools and processes.",
      },
      {
        q: "Can implementation be customized for unique business needs?",
        a: "Yes. Every implementation is tailored to match your business processes, regulatory requirements, and customer engagement strategies.",
      },
    ],

    optimization: [
      {
        q: "What happens after Salesforce implementation is complete?",
        a: "Post-implementation, consultants monitor performance, fine-tune configurations, and provide ongoing support to ensure continued success.",
      },
      {
        q: "Can implementation services include integration with third-party tools?",
        a: "Yes. Salesforce can be integrated with ERP, marketing, analytics, and communication tools to create a connected digital ecosystem.",
      },
      {
        q: "How do implementation experts ensure user adoption?",
        a: "Through change management, training, and continuous user support, consultants ensure teams confidently adopt the Salesforce platform.",
      },
      {
        q: "What role does testing play in the implementation process?",
        a: "Testing validates that configurations, workflows, and integrations function correctly — reducing risks and ensuring a smooth go-live experience.",
      },
    ],
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
      title: "Data Cloud",
      content:
        "Salesforce Data Cloud unifies all your customer data into a single, real-time profile, enabling personalized experiences at scale. Unlock a 360° view of every customer and activate data across all channels for smarter engagement.",
      path: "/datacloud",
    },
    {
      title: "Revenue Cloud",
      content:
        "Unify sales, partner, operations, and finance teams with Revenue Cloud to accelerate growth. Automate complex revenue processes, optimize quoting and billing, and gain complete visibility into your revenue lifecycle.",
      path: "/revenuecloud",
    },
    {
      title: "Agentforce",
      content:
        "Reimagine customer interactions with Agentforce — Salesforce’s next-gen AI-powered customer service solution. Automate repetitive tasks, empower agents with real-time insights, and deliver exceptional service experiences that scale effortlessly.",
      path: "/agentforce",
    },
    {
      title: "MuleSoft",
      content:
        "Connect applications, data, and devices seamlessly with MuleSoft’s powerful integration platform. Accelerate innovation by building a connected ecosystem that enables data to flow across systems effortlessly.",
      path: "/mulesoft",
    },
    {
      title: "Salesforce CPQ",
      content:
        "Streamline pricing, quote configurations, and add-on management for error-free quotes, accelerated order processing, and competitive pricing strategies. From implementation to ongoing support and maintenance – enhance your sales efficiency with UNIVMAA Salesforce CPQ.",
      path: "/cpq",
    },

    {
      title: "Tableau",
      content:
        "Empower your organization with data visualization and analytics through Tableau. Gain real-time insights, make data-driven decisions, and unlock the full potential of your business intelligence strategy.",
      path: "/tableau",
    },
    {
      title: "Salesforce Advisory",
      content:
        "Our Salesforce Advisory services help organizations strategize, plan, and execute their Salesforce vision effectively. We align technology with business objectives to ensure maximum ROI and sustainable digital transformation.",
      path: "/salesforceadvisory",
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
      <div className="text-black  ">
        {/* Hero Section */}

        <motion.section
          className="relative px-4 sm:px-6 pt-28 sm:pt-36  md:pt-40 sm:pb-24 
             grid grid-cols-1 md:grid-cols-2 items-center gap-10 
             h-auto sm:min-h-[600px] md:min-h-[800px] lg:min-h-[950px]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0)),
           url(${implementationimgnew})
          `,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="absolute inset-0 bg-black/30 "></div> */}
          {/* Left Text */}
          <div className="text-center lg:w-[600px] md:ms-24  md:w-[400px] md:mt-[-240px] lg:ms-64 md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold mb-4 leading-tight">
              Salesforce <br />
              <span className="text-blue-500">Implementation Services</span>
            </h1>
            <p className="text-black mb-6 text-sm sm:text-base md:text-lg">
              Improve your workforce productivity, accelerate customer
              engagement and make Salesforce work best for your business with
              UNIVMAA end-to-end Salesforce Implementation Services.
            </p>
            {/* Explore More Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-6 py-3 bg-white text-[#0176d3] rounded-md hover:bg-[#0176d3] hover:text-white hover:text-whiterounded-md font-semibold  shadow hover:opacity-90 transition"
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
                      <div className="">
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
          <div className="flex justify-center lg:mt-[-200px] md:mt-[-290px] md:ms-20 relative">
            <motion.img
              src="image/implementationbanner.png"
              alt="Rocket Illustration"
              className="w-64 md:w-[400px]  relative z-10"
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
          className="relative px-6 lg:min-h-[150px]  md:mt-[-280px] lg:mt-[-100px]  md:px-2 py-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-start overflow-hidden"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* ✅ Blurred background image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-contain"
            style={{
              backgroundSize: "contain",
              backgroundPosition: "",
              backgroundRepeat: "no-repeat",

              backgroundImage: `url(${implementationimgnew2})`,
              filter: "blur(1px)", // adjust blur strength
              zIndex: 0,
            }}
          ></div>

          {/* ✅ Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-[1]"></div>

          {/* ✅ Content remains crystal clear */}
          <div className="relative lg:z- z-[2] lg:left-32 lg:w-[600px] md:w-4/6 md:ms-32 lg:mt-[-30px]  ">
            <h2 className="text-2xl text-blue-950 sm:text-3xl lg:ms-16  font-bold mb-6">
              Salesforce Products{" "}
              <span className="text-blue-500">We Implement</span>
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
                    className={`flex justify-between items-center w-full px-4 py-3 text-left text-sm sm:text-base transition-colors duration-300
                                    ${
                                      openIndex === index
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black hover:bg-blue-500 hover:text-white"
                                    }`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        className="overflow-hidden bg-white"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <div className="px-4 py-3 text-black text-sm space-y-3">
                          <p>{item.content}</p>
                          <button
                            onClick={() => handleNavigate(item.path)}
                            className="text-blue-950 font-medium hover:text-blue-600 transition-colors"
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

          {/* ✅ Form stays clear and bright */}
          <motion.div
            className="relative z-[2] bg-slate-200 p-4  lg:ms-36 md:ms-44 lg:mt-36  rounded-2xl shadow-2xl w-full max-w-md mt-2 "
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
                  className="w-full px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white text-sm sm:text-base"
                />
              ))}
              <button
                type="submit"
                className="w-full px-4 py-3 rounded bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </motion.section>
      </div>
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
};

export default SalesforceImplementation;
