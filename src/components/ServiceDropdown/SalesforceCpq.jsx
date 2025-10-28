import {
  FaFileInvoice,
  FaChartLine,
  FaHandshake,
  FaMoneyBillWave,
  FaShoppingCart,
  FaRocket,
  FaProjectDiagram,
  FaFileContract,
  FaBoxes,
  FaCheckCircle,
  FaSyncAlt,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import RequestForConsultation from "../RequestForConsultation.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FillTheForm from "../FillTheForm.jsx";
import FaqDynamic from "../FaqDynamic.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import cpqimgnew from "../../assets/cpqimgnew.webp";
import cpqimgnew2 from "../../assets/cpqimgnew2.webp";
import cpqimgnew3 from "../../assets/cpqimgnew3.webp";
import cpqimgnew4 from "../../assets/cpqimgnew4.webp";

import { Plus, Minus } from "lucide-react";

/* ---------------- BENEFITS DATA ---------------- */

const benefits = [
  {
    id: 1,
    icon: <FaFileInvoice className="text-4xl text-blue-400" />,
    title: "Minimize Quote Inaccuracies",
    description: "Ensure accurate quotes every time, reducing costly errors.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-4xl text-blue-400" />,
    title: "Enhanced Pricing & Discount Visibility",
    description:
      "Access clear pricing and discount data for informed decision-making.",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-blue-400" />,
    title: "Improved Negotiation Management",
    description: "Gain better insights to handle negotiations effectively.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className="text-4xl text-blue-400" />,
    title: "Intelligent Invoicing",
    description: "Prevent invoicing errors with automated checks and balances.",
  },
  {
    id: 5,
    icon: <FaShoppingCart className="text-4xl text-blue-400" />,
    title: "Guided Selling",
    description:
      "Equip your sales team with tools to select the best product configurations.",
  },
  {
    id: 6,
    icon: <FaRocket className="text-4xl text-blue-400" />,
    title: "Boost Proposal Productivity",
    description: "Streamline the proposal process for faster turnaround.",
  },
];

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    icon: <FaProjectDiagram size={40} className="text-blue-500" />,
    title: "Guided Selling",
    description:
      "Assist your sales team with step-by-step product selection and configurations for each customer every time.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-blue-500" />,
    title: "Approval Workflows",
    description:
      "Streamline approval processes for discounts, custom deals, and contract approvals.",
  },
  {
    icon: <FaBoxes size={40} className="text-blue-500" />,
    title: "Product Bundling",
    description:
      "Package products and services into custom bundles to offer more value to customers.",
  },
  {
    icon: <FaFileContract size={40} className="text-blue-500" />,
    title: "Contract Management",
    description:
      "Seamlessly integrate quoting with contract creation and lifecycle management.",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-blue-500" />,
    title: "Multi-Currency Support",
    description:
      "Handle global transactions effortlessly with multi-currency quoting capabilities.",
  },
  {
    icon: <FaSyncAlt size={40} className="text-blue-500" />,
    title: "Subscription Management",
    description:
      "Manage subscriptions with automated pricing and streamlined contract renewals.",
  },
  {
    icon: <FaNetworkWired size={40} className="text-blue-500" />,
    title: "Multi-Channel Sales Enablement",
    description:
      "Empower partners and customers with CPQ access via Experience Cloud or B2B Commerce.",
  },
  {
    icon: <FaLayerGroup size={40} className="text-blue-500" />,
    title: "Multi-Dimensional Quoting",
    description:
      "Configure products with multiple price dimensions, enabling independent adjustments.",
  },
];

/* ---------------- MAIN PAGE ---------------- */
export default function SalesforceCpqPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "Salesforce CPQ Consulting:",
      content:
        "We analyze your current sales workflow, identify areas for automation, and design a tailored CPQ strategy that fits your business needs.",
    },
    {
      title: "Salesforce CPQ Implementation:",
      content:
        "Our team sets up Salesforce CPQ based on your product catalog, pricing rules, and discounting strategies, ensuring a smooth transition.",
    },
    {
      title: "Salesforce CPQ Configuration:",
      content:
        "From unique pricing models to custom product configurations, we tailor the solution to your business requirements.",
    },
    {
      title: "Salesforce CPQ Integration:",
      content:
        "Seamlessly integrate Salesforce CPQ with other Salesforce solutions, ERP systems, and third-party tools to create a unified sales ecosystem.",
    },
    {
      title: "Salesforce CPQ Managed Services:",
      content:
        "Eliminate the need for an expensive in-house team and ensure reliable, secure, and optimized CPQ instances with our scalable managed services model.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className=" text-white overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative text-black pt-32 px-6 py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center overflow-hidden">
          {/* 🔹 Blurred Background Layer */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat blur-sm brightness-100"
            style={{
              backgroundImage: `
        linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
        url(${cpqimgnew3})
      `,
            }}
          ></div>

          {/* 🔹 Optional overlay for soft tint (optional for clarity) */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* 🔹 Foreground Content (kept sharp) */}
          <div className="relative ">
            <ServiceDyanamic serviceKey="cpq-cloud" />
          </div>

          <div className="relative">
            <FillTheForm />
          </div>
        </section>

        {/*  */}
        <section className=" text-black py-16 px-6 md:px-12 md:mt-[-60px] lg:mt-0  lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Image Section */}
          <div className="flex justify-center  lg:w-1/2">
            <img
              src={cpqimgnew}
              alt="Salesforce CPQ illustration"
              className="w-[90%] md:w-[70%] lg:w-[80%] mt-[-80px] md:mt-0 lg:mt-0 object-contain md:mb-11 lg:mb-0"
            />
          </div>

          {/* Right Content Section */}
          <motion.div
            className="lg:w-1/2 text-center md:mt-[-40px] lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-blue-950  font-bold mb-6 leading-tight">
              Simplify Your Sales Process <br className="hidden md:block" />
              with <span className="text-blue-500">Salesforce CPQ</span>
            </h2>

            <p className="text-black mb-6 text-lg text-left leading-relaxed">
              Salesforce CPQ (Configure, Price, Quote) streamlines the sales
              journey, offering speed, accuracy, and flexibility. Being a part
              of Revenue Cloud – Salesforce CPQ empowers your sales team to
              streamline their sales process and spend more time nurturing
              client relationships. Deliver accurate quotes swiftly while
              ensuring seamless collaboration across all departments. UNIVMAA’s
              expert CPQ consulting and implementation services ensure that your
              business maximizes the power of Salesforce CPQ, driving
              productivity and revenue.
            </p>

            {/* Quote Box */}
            <div className="border border-black rounded-lg p-6 mb-6 bg-blue-100 text-black italic text-lg">
              “Businesses with CPQ integration have an average 35% increase in
              quote precision when compared to plain Salesforce.”
            </div>

            {/* Button */}
            <motion.a
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0);
              }}
              className="bg-white shadow-md text-[#0176d3] hover:bg-[#0176d3] hover:text-white  px-6 py-3 rounded-lg hover:cursor-pointer font-semibold inline-block"
            >
              Let’s Connect →
            </motion.a>
          </motion.div>
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="px-6 md:px-20 md:mt-[-90px] mt-[-110px]   py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Key Benefits of{" "}
              <span className="text-blue-500">Salesforce CPQ</span>
            </h2>
            <p className="text-black text-lg">
              Empower Your Sales Team with Precision and Speed
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border-t-4 border-[#00BFA5] p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-[#032D60] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ====================== CPQ SERVICE============================ */}
        <section
          className=" text-black py-20 px-6 md:px-12 md:mt-[-80px] lg:mt-0 mt-[-80px]  lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "bottom ",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${cpqimgnew4})`,
          }}
        >
          {/* Left Circular Diagram */}
          <motion.div
            className="flex justify-center md:mt-[-40px] lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={cpqimgnew2}
              alt="Salesforce CPQ Services Diagram"
              className="w-[85%] md:w-[70%] lg:w-[80%] mt-[-70px] md:mt-0 lg:mt-0 object-contain"
            />
          </motion.div>

          {/* Right Accordion Section */}
          <motion.div
            className="lg:w-1/2 bg-transparent p-8 mt-[-70px] text-center md:mt-[-80px] rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl text-blue-950 font-bold mb-4">
              Salesforce CPQ Services –{" "}
              <span className="text-blue-500">Our Offerings</span>
            </h2>
            <p className="text-black mb-8 leading-relaxed text-sm md:text-base">
              We offer end-to-end Salesforce CPQ services and our specialists
              can custom develop and integrate CPQ seamlessly into your
              company's Salesforce CRM.
            </p>

            {/* Accordion Items */}
            <div className="space-y-3">
              {services.map((item, index) => {
                const contentRef = useRef(null);
                const [height, setHeight] = useState("0px");

                useEffect(() => {
                  if (contentRef.current) {
                    setHeight(
                      openIndex === index
                        ? `${contentRef.current.scrollHeight}px`
                        : "0px"
                    );
                  }
                }, [openIndex]);

                return (
                  <div
                    key={index}
                    className="border  rounded-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center px-4 py-3 text-left hover:text-white font-semibold text-black hover:bg-blue-500 transition"
                    >
                      {item.title}
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-black" />
                      ) : (
                        <Plus className="w-4 h-4 text-black" />
                      )}
                    </button>

                    <div
                      ref={contentRef}
                      style={{
                        maxHeight: height,
                        transition: "max-height 0.4s ease-in-out",
                      }}
                      className="overflow-hidden  border-t border-[#5c3cf3]"
                    >
                      <div className="px-4 py-3 text-black  text-left text-sm md:text-base">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ================= FEATURES SECTION ================= */}

        <FaqDynamic />

        <RequestForConsultation />
      </section>

      <Footer />
    </>
  );
}
