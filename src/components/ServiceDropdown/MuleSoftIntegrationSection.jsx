import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import mulesoft1 from "../../assets/mulesoft1.jpeg";
import mulesoft2 from "../../assets/mulesoft2.jpeg";
import mulesoft3 from "../../assets/mulesoft3.jpeg";
import mulesoft5 from "../../assets/mulesoft5.jpeg";
import mulesoft6 from "../../assets/mulesoft6.jpeg";

import mulesoftimgnew from "../../assets/mulesoftimgnew.webp";
import mulesoftimgnew2 from "../../assets/mulesoftimgnew2.webp";
import mulesoftimgnew3 from "../../assets/mulesoftimgnew3.webp";
import mulesoftimgnew4 from "../../assets/mulesoftimgnew4.webp";
import mulesoftimgnew5 from "../../assets/mulesoftimgnew5.webp";

import marketingimg3 from "../../assets/marketingimg3.png";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

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
      {/* SECTION 1 - Hero Section */}
      <section
        className="text-black px-6 md:px-10 md:pr-16 py-16 pt-32 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)),
       url(${mulesoftimgnew})
    `,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="mulesoft" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* SECTION 2 - End-to-End MuleSoft Services */}
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#032D60] mb-12">
          End-to-End <span className="text-blue-500">MuleSoft Services</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {[
            {
              img: mulesoftimgnew2,
              title: "Advisory & Strategy",
              subtitle: "Integration Roadmap",
              desc: "Define a strategic roadmap for MuleSoft API integration, driving faster business outcomes and future-proofing operations.",
            },
            {
              img: mulesoftimgnew3,
              title: "Architecture & Implementation",
              subtitle: "Seamless Adoption",
              desc: "Leverage pre-built accelerators, best practices, and MuleSoft expertise to ensure seamless adoption and integration.",
            },
            {
              img: mulesoftimgnew4,
              title: "End-to-End Delivery",
              subtitle: "Accelerated Deployment",
              desc: "From design to deployment, our agile, model-driven approach ensures standardized, accelerated API development.",
            },
            {
              img: mulesoftimgnew5,
              title: "Post Go-Live Support",
              subtitle: "Continuous Optimization",
              desc: "Optimize and manage your API ecosystem with best-in-class monitoring tools, ensuring continuous performance and growth.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Background Image (top cloud style) */}
              <div className="relative h-28 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6 mt-[-60px] text-center">
                <h3 className="text-2xl font-bold text-[#032D60] mb-2">
                  {card.title}
                </h3>
                <h4 className="text-base font-semibold text-[#032D60] mb-4">
                  {card.subtitle}
                </h4>
                <p className="text-black text-left">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 3, 4, 5 - Use Cases */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-black text-3xl font-bold text-center mb-12">
          Mulesoft <span className="text-blue-500">Use Cases</span>
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {useCases.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              className=" rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2"
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
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  {item.title}
                </h3>

                {["challenge", "solution", "benefits"].map((key) => (
                  <div key={key} className="border-b border-blue-500 py-2">
                    <button
                      className="flex justify-between items-center w-full text-left text-black font-medium"
                      onClick={() => toggleSection(item.id, key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      <span>{open[item.id] === key ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {open[item.id] === key && (
                        <motion.p
                          className="text-black mt-2"
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
                <p
                  onClick={() => navigate(item.footerLink)}
                  className="text-sky-600 text-sm mt-6 cursor-pointer hover:underline"
                >
                  {item.footer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION - MuleSoft Case Studies */}
      <motion.section
        className="py-16 px-6 mt-[-40px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-blue-950 text-4xl font-bold text-center mb-12">
          MuleSoft <span className="text-blue-500">Case Studies</span>
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Case Study 1 */}
          <motion.div
            className=" rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
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
              <h3 className="text-2xl font-semibold text-black mb-4">
                Automating Customer Onboarding for a Leading Financial
                Institution
              </h3>
              <p className="text-black mb-2">
                <strong>Challenge:</strong> Inefficient onboarding due to
                disconnected legacy systems, leading to delays and high
                operational costs.
              </p>
              <p className="text-black mb-6">
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
                    className="bg-sky-200  text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            className=" rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Optimizing Order Management for a Global E-Commerce Company
              </h3>
              <p className="text-black mb-2">
                <strong>Challenge:</strong> Slow order processing and inventory
                mismatches caused by unintegrated sales and supply chain
                platforms.
              </p>
              <p className="text-black mb-6">
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
                    className="bg-sky-200 text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
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
      <section className=" py-20 px-6 space-y-32">
        <motion.div
          className="max-w-6xl grid mb-[-60px] md:grid-cols-2 lg:mt-[-140px] md:mt-[-80px] items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={marketingimg3}
            alt="Integration Help"
            className="rounded-2xl mt-[-130px] md:mt-0 lg:mt-0 lg:max-w-md lg:ms-36"
          />
          <div className="lg:w-[700px] lg:ms-11 ">
            <h2 className="text-3xl font-bold mb-6">
              Need Help with Other Integration Platforms?
            </h2>
            <p className="text-lg  leading-relaxed mb-6">
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
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
