import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
const SalesforceRevenueCloud = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-[#0D0D2B] text-white font-sans">
        <section className="bg-[#0D1117] text-white pt-32 px-6 md:px-16 md:pr-20 py-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
          {/* Left Content */}
          <ServiceDyanamic serviceKey="revenue-cloud" />
          {/* Right Form */}
          <FillTheForm />
        </section>

        {/* Key Features Section */}
        <section className="bg-black py-16 px-6 pt-32 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            Key Features of Salesforce RCA
          </motion.h2>
          <p className="text-gray-400 mb-12">
            Streamline Direct, Partner, and Self-Service Sales with AI-Powered
            Precision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
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
                className="bg-blue-950 text-white p-6 rounded-lg shadow"
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-white-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#0D0D2B] py-16 px-6 lg:px-20 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Benefits of Salesforce RCA:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121233] p-6 rounded-lg border border-gray-700"
              >
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <RequestForConsultation />
      <Footer />
    </>
  );
};

export default SalesforceRevenueCloud;
