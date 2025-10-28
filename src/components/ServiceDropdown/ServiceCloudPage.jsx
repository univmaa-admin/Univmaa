import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import serviceimg from "../../assets/serviceimg.jpg";
import RequestForConsultation from "../RequestForConsultation";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic";
import FaqDynamic from "../FaqDynamic";

import servicecloudimgnew from "../../assets/servicecloudimgnew.webp";
import servicecloudimgnew2 from "../../assets/servicecloudimgnew2.webp";
import servicecloudimgnew3 from "../../assets/servicecloudimgnew3.webp";
import servicecloudimgnew4 from "../../assets/servicecloudimgnew4.webp";
import servicecloudimgnew5 from "../../assets/servicecloudimgnew5.webp";
import servicecloudimgnew6 from "../../assets/servicecloudimgnew6.webp";
import servicecloudimgnew7 from "../../assets/servicecloudimgnew7.webp";
import servicecloudimgnew8 from "../../assets/servicecloudimgnew8.webp";
import servicecloudimgnew9 from "../../assets/servicecloudimgnew9.webp";
import servicecloudimgnew10 from "../../assets/servicecloudimgnew10.webp";
import servicecloudimgnew11 from "../../assets/servicecloudimgnew11.webp";
import servicecloudimgnew12 from "../../assets/servicecloudimgnew12.webp";
import servicecloudimgnew13 from "../../assets/servicecloudimgnew13.webp";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCloudPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Innovation");

  const tabs = ["Innovation", "Contents", "Events"];

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section
        className=" pt-28 px-6 py-16 grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center relative overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0)),
      url(${servicecloudimgnew3})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="service-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* ========================== Section 2 ========================== */}
      <motion.section
        className="text-black px-6 md:px-24 mb-[-30px] lg:px-20 md:h-[470px] md:mb-36 grid lg:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${servicecloudimgnew})`,
        }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:mt-[-100px]"
        >
          <img
            src={serviceimg}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          className=" lg:mt-[-10px]"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
            Empower Your Service Team with{" "}
            <span className="text-blue-400">to deliver more with less</span>
          </h2>
          <p className="text-black mb-4 text-lg">
            The rules for customer engagement have changed! Today’s buyers are
            informed, discerning, and expect personalized experiences.
          </p>
          <p className="text-black mb-6 text-lg">
            Salesforce Sales Cloud is a powerful platform designed to empower
            your sales team and transform your sales operations with advanced
            features like AI-driven insights, predictive analytics, integration
            with other Salesforce clouds and more!
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            className="inline-block px-6 py-3 lg:ms-0 ms-0 md:ms-48 hover:cursor-pointer bg-white shadow-md text-[#0176d3] hover:bg-[#0176d3] hover:text-white
          rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className=" text-black grid-cols-1 px-6 md:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          className=" lg:ms-48 lg:w-[650px] lg:mt-[-40px] md:ms-16"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Put Customers at the Heart of Your Business with{" "}
            <span className="text-blue-400">Data & AI</span>
          </h2>
          <p className="text-black tracking-wide mb-4 text-lg">
            By harnessing the power of AI, Service Cloud provides predictive
            insights, automates routine tasks, and personalizes interactions,
            allowing your service teams to focus on what matters most—resolving
            customer issues efficiently. With AI-driven features like Einstein
            Service Replies, your agents can analyze customer conversation in
            real time, generate replies and gain access to intelligent
            recommendations and predictive analytics, enabling them to
            anticipate customer needs and offer proactive solutions.
          </p>
          <p className="text-black mb-6 text-lg">
            Einstein AI transforms this data into actionable insights,
            predicting customer behavior, automating tasks, and personalizing
            interactions. Let AI do the heavy lifting for revenue growth and
            customer satisfaction.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex  md:w-[400px] md:mt-[-40px] md:ms-48 justify-center"
        >
          <img
            src={servicecloudimgnew2}
            alt="Data & AI"
            className="w-[400px]"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 (Workspace Image) ========================== */}
      <section className="py-20 px-6 sm:px-10 mt-[-80px] md:px-16 bg-white text-gray-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Discover what's new in{" "}
          <span className="text-[#0176D3]">Service.</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 flex-wrap gap-3 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 pb-2 font-semibold border-b-2 transition-all ${
                activeTab === tab
                  ? "text-[#0176D3] border-[#0176D3]"
                  : "text-black border-transparent hover:text-[#0176D3]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Innovation Tab */}
        {activeTab === "Innovation" && (
          <motion.div
            className="grid gap-4 sm:gap-6 md:gap-8  lg:gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                img: servicecloudimgnew4,
                title: "Agentforce IT Service",
                desc: "Deliver instant, conversational IT support with Agentforce IT Service — a scalable and secure AI-powered platform for employee success.",
              },
              {
                img: servicecloudimgnew5,
                title: "Service Cloud",
                desc: "Transform your customer service with Service Cloud — connecting every channel, automating workflows, and personalizing experiences using AI and Data Cloud.",
              },
              {
                title: "Field Service Innovation",
                desc: "Empower your field teams with real-time insights and connected tools. With Salesforce Field Service, optimize scheduling, track inventory, and provide exceptional on-site support that enhances customer satisfaction and operational efficiency.",
                img: servicecloudimgnew6,
              },
              {
                img: servicecloudimgnew7,
                title: "Salesforce Voice",
                desc: "Connect your phone systems with Service Cloud. Turn every conversation into actionable insights that empower service agents to deliver exceptional support.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden w-full sm:w-[280px] md:w-[320px] lg:w-[300px] mx-auto"
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl text-black font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-black text-sm sm:text-base">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Contents Tab */}
        {activeTab === "Contents" && (
          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                img: servicecloudimgnew8,
                tag: "Serviceblazer",
                title: "Join the #Serviceblazer movement.",
                desc: "Be part of the growing community for service and field service professionals across the world.",
              },
              {
                img: servicecloudimgnew9,
                tag: "Guided Tour",
                title: "Take a tour of the #1 AI CRM for Service.",
                desc: "Experience Salesforce Service Cloud in action and see how AI and automation drive productivity.",
              },
              {
                img: servicecloudimgnew10,
                tag: "Guide",
                title: "Discover AI and Data in Field Service.",
                desc: "Explore key insights from over 5,500 field service professionals worldwide.",
              },
              {
                img: servicecloudimgnew11,
                tag: "Guide",
                title: "Prepare Your Team for Digital Labour.",
                desc: "Learn practical steps to ready your service teams for the next wave of automation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="shadow-lg rounded-2xl overflow-hidden bg-white"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#0176D3] mb-1">
                    {item.tag}
                  </p>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-black text-sm sm:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Events Tab */}
        {activeTab === "Events" && (
          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                img: servicecloudimgnew12,
                tag: "Multiple events",
                title: "Service Expert Series",
                desc: "Learn how Salesforce can boost resolution speed, enhance CSAT and improve efficiency for service professionals.",
              },
              {
                img: servicecloudimgnew13,
                tag: "London, UK",
                title: "Agentforce World Tour London",
                date: "4/12/2025",
                desc: "Get ready to unlock unprecedented success with the power of trusted AI, real-time data, and CRM. Discover how to transform customer experiences that drive efficiency and growth.",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-auto"
                />
                <div className="p-6 text-left">
                  <p className="text-xs text-[#0176D3] font-semibold mb-1">
                    {event.tag}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {event.title}
                  </h3>
                  {event.date && (
                    <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                  )}
                  <p className="text-gray-600 text-sm sm:text-base">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className="text-black px-6 md:px-20 py-16 mt-[-60px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#032D60]"
          variants={fadeInUp}
        >
          Deliver Value Across Every Customer{" "}
          <span className="text-[#0176D3]">Touchpoint</span>
        </motion.h2>

        <motion.p
          className="text-center text-black mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Empower agents with a perfect set of productivity tools that deliver
          smart, fast, and personalized customer service.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Case Management",
              desc: "Optimize your customer support with our case management system. Automatically route cases, meet service level agreements, and empower agents with knowledge for faster resolutions.",
            },
            {
              title: "Self-Service Experience",
              desc: "Empower your customers with 24/7 access to information and support through self-service portals. Reduce agent workload and improve customer satisfaction by enabling self-service solutions.",
            },
            {
              title: "Omni-Channel Routing",
              desc: "Intelligent omni-channel routing helps you efficiently distribute work across your team based on agent skills and availability, ensuring faster response times and improved customer satisfaction.",
            },
            {
              title: "Service Analytics",
              desc: "Gain actionable insights, visualize trends, and optimize service operations with Salesforce Service Cloud Analytics and boost customer satisfaction and loyalty.",
            },
            {
              title: "Generative AI-Powered Service Replies",
              desc: "Instantly generate relevant responses across multiple channels with AI-powered replies. Reduce agent workload and increase customer satisfaction through faster resolutions.",
            },
            {
              title: "Incident Detection & Response",
              desc: "Proactively identify and address potential service disruptions. Leverage Service Cloud's incident management capabilities to minimize downtime and ensure business continuity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-2 w-full bg-[#c49cdd] rounded-t-2xl"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#032D60] mb-3">
                  {item.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 6 - CTA ========================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
