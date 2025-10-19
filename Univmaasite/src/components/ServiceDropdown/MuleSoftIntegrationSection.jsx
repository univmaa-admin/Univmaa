import React, { useState } from "react";
import { ClipboardList, Cpu, Send, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import mulesoft1 from "../../assets/mulesoft1.jpeg";
import mulesoft2 from "../../assets/mulesoft2.jpeg";
import mulesoft3 from "../../assets/mulesoft3.jpeg";
import mulesoft5 from "../../assets/mulesoft5.jpeg";
import mulesoft6 from "../../assets/mulesoft6.jpeg";
import marketingimg3 from "../../assets/marketingimg3.png";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";

export default function MuleSoftIntegrationSection() {
  const navigate = useNavigate();
  const [open, setOpen] = useState({});

  // Toggle accordion and scroll smoothly
  const toggleSection = (id, key) => {
    setOpen((prev) => ({
      ...prev,
      [id]: prev[id] === key ? null : key,
    }));

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  const useCases = [
    {
      id: "section3",
      title: "Enhancing eCommerce Efficiency",
      img: mulesoft1,
      challenge:
        "Disconnected inventory, order management, and fulfillment systems created bottlenecks.",
      solution:
        "MuleSoft’s API-led integration synchronized inventory tracking, order processing, and logistics in real time.",
      benefits:
        "Faster order processing, increased accuracy, and seamless omnichannel shopping experiences.",
      footer: "Streamline your eCommerce operations – Contact us today!",
      footerLink: "/contactus", // 👈 Add this
    },
    {
      id: "section4",
      title: "Empowering Agentforce for Seamless Sales Operations",
      img: mulesoft2,
      challenge:
        "Fragmented customer data leads to inconsistent communication and inefficiencies for sales teams.",
      solution:
        "Salesforce Mulesoft integration, marketing automation, and sales platforms, creating a unified customer view.",
      benefits:
        "Increase in sales efficiency, automated workflows, and improved customer engagement.",
      footer: "Enhance your sales operations – Get started with MuleSoft!",
      footerLink: "/contactus", // 👈 Add this
    },
    {
      id: "section5",
      title: "Elevating Customer Service with Connected Experiences",
      img: mulesoft3,
      challenge:
        "Support teams lacked a 360-degree customer view, leading to slower response times and fragmented service.",
      solution:
        "Salesforce Mulesoft integration, support systems, and self-service portals, to ensure real-time data synchronization.",
      benefits:
        "Faster case resolution, enhanced customer satisfaction, and reduced operational costs.",
      footer: "Deliver next-level customer service – Talk to our experts!",
      footerLink: "/contactus", // 👈 Add this
    },
  ];

  return (
    <>
      <Navbar />
      {/* SECTION 1 */}
      <motion.section
        className="relative bg-[#0A0F1C] text-white py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 mt-12 gap-10 items-center">
          {/* Left Content */}
          <ServiceDyanamic serviceKey="mulesoft" />
          {/* Right Form */}
          <FillTheForm />
        </div>
      </motion.section>

      {/* SECTION 2 - End-to-End MuleSoft Services */}
      <motion.section
        className="bg-[#0B1221] text-white py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            End-to-End MuleSoft Services
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <ClipboardList size={28} />,
              title: "Advisory & Strategy",
              text: "Define a strategic roadmap for Mulesoft API integration, driving faster business outcomes and future-proofing operations.",
            },
            {
              icon: <Cpu size={28} />,
              title: "Architecture & Implementation",
              text: "Leverage pre-built accelerators, best practices, and MuleSoft expertise to ensure seamless adoption and integration.",
            },
            {
              icon: <Send size={28} />,
              title: "End-to-End Delivery",
              text: "From design to deployment, our agile, model-driven approach ensures standardized, accelerated API development.",
            },
            {
              icon: <Headphones size={28} />,
              title: "Post Go-Live Support",
              text: "Optimize and manage your API ecosystem with best-in-class monitoring tools, ensuring continuous performance and growth.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 bg-white text-black p-6 rounded-xl shadow-md hover:cursor-pointer hover:bg-blue-800 hover:text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-sky-500 p-3 rounded-full text-white">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3, 4, 5 - Use Cases */}
      <motion.section
        className="bg-black py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          Mulesoft Use Cases
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {useCases.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              className="bg-purple-700 rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-full h-full ${
                  idx % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`p-8 flex flex-col justify-center ${
                  idx % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>

                {["challenge", "solution", "benefits"].map((key) => (
                  <div key={key} className="border-b border-purple-400 py-2">
                    <button
                      className="flex justify-between items-center w-full text-left text-purple-200 font-medium"
                      onClick={() => toggleSection(item.id, key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      <span>{open[item.id] === key ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {open[item.id] === key && (
                        <motion.p
                          className="text-gray-200 mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {item[key]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Footer as clickable link */}
                <a
                  href={item.footerLink}
                  className="text-yellow-300 text-sm mt-6"
                >
                  {item.footer}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION - MuleSoft Case Studies */}
      <motion.section
        className="bg-[#0A0F1C] py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          MuleSoft Case Studies
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Case Study 1 */}
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <img
                src={mulesoft5}
                alt="Customer Onboarding"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Automating Customer Onboarding for a Leading Financial
                Institution
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Challenge:</strong> Inefficient onboarding due to
                disconnected legacy systems, leading to delays and high
                operational costs.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Solution:</strong> MuleSoft API integration streamlined
                workflows and connected disparate systems for seamless data
                flow.
              </p>

              <div className="grid md:grid-cols-3 gap-4 hover:cursor-pointer">
                {[
                  { text: "50% faster onboarding" },
                  { text: "Improved data accuracy" },
                  { text: "Enhanced customer experience" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Optimizing Order Management for a Global E-Commerce Company
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Challenge:</strong> Slow order processing and inventory
                mismatches caused by unintegrated sales and supply chain
                platforms.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Solution:</strong> MuleSoft’s Anypoint Platform unified
                order management, inventory tracking, and fulfillment for
                real-time visibility.
              </p>

              <div className="grid md:grid-cols-3 gap-4 hover:cursor-pointer">
                {[
                  { text: "40% faster order processing" },
                  { text: "Improved inventory accuracy" },
                  { text: "Enhanced operational efficiency" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full order-1 md:order-2">
              <img
                src={mulesoft6}
                alt="Order Management"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section - Integration Platforms + Why Univmaa */}
      <section className="bg-[#0a1128] text-white py-20 px-6 space-y-32">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={marketingimg3}
            alt="Integration Help"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Need Help with Other Integration Platforms?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              While MuleSoft is our specialty, our expertise doesn’t stop there.
              Whether you’re using{" "}
              <strong>Dell Boomi, Integrate.io, Celigo</strong>, or any other
              integration platform, our team can support your end-to-end
              integration needs. From strategy and implementation to ongoing
              optimization, we help you build seamless, scalable integrations
              that power business transformation.
            </p>
            <p className="font-semibold">
              Looking for support beyond MuleSoft?{" "}
              <span
                className="text-blue-400 hover:cursor-pointer"
                onClick={() => {
                  navigate("/contactus");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
              >
                Contact us
              </span>{" "}
              to discuss your unique integration requirements.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <RequestForConsultation />
      <Footer />
    </>
  );
}
