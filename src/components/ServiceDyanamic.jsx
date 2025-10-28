import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import salescloud from "../assets/salescloud.jpg";
import servicemodal from "../assets/servicemodal.jpg";
import agentforcemodal from "../assets/agentforcemodal.jpg";
import dataCloudImg from "../assets/datacloud.png";
import experiencemodal from "../assets/experiencemodal.jpg";
import healthimg2 from "../assets/healthimg2.png";
import marketingcloudmodal from "../assets/marketingcloudmodal.png";
import mulesoft4 from "../assets/mulesoft4.jpg";
import cpq from "../assets/cpq.jpg";
import revenueimg from "../assets/revenueimg.jpg";
import tableaumodal from "../assets/tableaumodal.png";

// 🧠 Service data (add more services here)
const serviceData = {
  "sales-cloud": {
    title: "Salesforce Sales Cloud",
    shortDesc:
      "Meet your customers at the right time and close more deals with a well-structured, data-driven sales process powered by automation. Gain real-time insights, streamline workflows, and accelerate revenue growth with smarter selling.",
    modalTitle: "Salesforce Sales Cloud",
    modalDesc:
      "Sales Cloud helps teams close deals faster with AI-driven insights, automation, and mobile access. It streamlines lead conversion, sales forecasting, and pipeline management while offering a 360° customer view. By unifying marketing, sales, and service data, it enables personalized interactions, real-time dashboards, and collaborative deal tracking—so your team sells more and grows revenue efficiently.",
    img: salescloud,
  },
  "service-cloud": {
    title: "Salesforce Service Cloud",
    shortDesc:
      "Empower your service team by leveraging AI and automation to create a seamless, customer-centric service experience that boosts efficiency, enhances customer satisfaction, and drives long-term loyalty",
    modalTitle: "Salesforce Service Cloud",
    modalDesc:
      "Service Cloud empowers your support teams to provide seamless and personalized customer experiences. With case routing, knowledge management, and Einstein AI, it helps resolve issues faster and improve customer satisfaction. Integrate multiple channels — phone, chat, email — all in one unified console.",
    img: servicemodal,
  },
  "marketing-cloud": {
    title: "Salesforce Marketing Cloud",
    shortDesc:
      "Automate, unify, and streamline your marketing channels to deliver personalized experiences at scale. Engage customers across every touchpoint, optimize campaigns with real-time insights, and boost conversions through data-driven strategies.",
    modalTitle: "Salesforce Marketing Cloud",
    modalDesc:
      "Marketing Cloud helps you deliver personalized customer journeys across email, mobile, social, and web. With AI-driven automation, you can create targeted campaigns, nurture leads, and engage customers at the right time on the right channel. Real-time analytics provide insights into customer behavior and campaign performance, helping you optimize strategies and maximize ROI. By unifying data across marketing, sales, and service, Marketing Cloud empowers you to build stronger relationships and drive long-term growth.",
    img: marketingcloudmodal,
  },
  "experience-cloud": {
    title: "Salesforce Experience Cloud",
    shortDesc:
      "Create powerful, personalized digital experiences that enable you to share information, collaborate seamlessly, and connect with customers, partners, and employees in real time. Build branded portals, communities, and sites that drive engagement and strengthen relationships.  ",
    modalTitle: "Salesforce Experience Cloud",
    modalDesc:
      "Experience Cloud enables you to build portals, forums, and websites that connect customers, partners, and employees. Customizable templates and drag-and-drop tools let you deliver personalized experiences. AI-driven insights and automation streamline collaboration, while analytics track engagement and optimize performance. Whether for customer self-service, partner collaboration, or employee communities, Experience Cloud strengthens relationships, boosts productivity, and drives growth.",
    img: experiencemodal,
  },
  "health-cloud": {
    title: "Salesforce Health Cloud",
    shortDesc:
      "Salesforce Health Cloud is a patient relationship management platform built on Salesforce. It centralizes patient data from multiple sources for a complete health record. Health Cloud enables care coordination, personalized treatment plans, and secure communication. It helps providers improve patient engagement, outcomes, and operational efficiency.",
    modalTitle: "Salesforce Health Cloud",
    modalDesc:
      "Health Cloud allows healthcare organizations to manage patient relationships efficiently, providing 360-degree patient views, personalized care plans, and secure collaboration among care teams. Enhance patient engagement and drive better clinical outcomes.",
    img: healthimg2,
  },
  "revenue-cloud": {
    title: "Salesforce Revenue Cloud ",
    shortDesc:
      "Salesforce Revenue Cloud Advanced brings direct, partner, and self-service sales into one powerful ecosystem, automating every revenue touchpoint with Agentforce.",
    modalTitle: "Salesforce Revenue Cloud",
    modalDesc:
      "Revenue Cloud helps your business unify revenue processes, automate billing, and forecast revenue accurately. Streamline order management, subscription billing, and analytics in a single platform to maximize revenue growth. Enhance collaboration across finance and sales teams for faster decision-making. Gain real-time insights to optimize revenue operations and improve forecasting accuracy.",
    img: revenueimg,
  },
  "cpq-cloud": {
    title: "Salesforce CPQ Consulting & Implementation",
    shortDesc:
      "Empower your sales organization with Salesforce CPQ — a scalable, enterprise-grade Configure, Price, Quote solution built on the Salesforce platform. Enable your teams to create precise, compliant quotes in real time across any channel using guided selling flows, dynamic product bundles, and advanced pricing automation. Strengthen operational governance with embedded approval workflows, robust discount controls, and integrated compliance mechanisms — ensuring every quote aligns with business strategy and profitability goals.",
    modalTitle: "Salesforce CPQ Cloud",
    modalDesc:
      "CPQ Cloud (Configure, Price, Quote) streamlines complex sales cycles by automating product configuration, pricing, and quote generation. It helps sales teams reduce errors, ensure accurate pricing, and deliver professional quotes in minutes. Guided selling, discount management, and approval workflows improve deal velocity and profitability. Seamless integration with Sales Cloud, Service Cloud, and billing systems ensures end-to-end revenue management.",
    img: cpq,
  },
  "data-cloud": {
    title: "Salesforce Data Cloud",
    shortDesc:
      "The single source of truth for all your customer interactions across different touchpoints. Unify data from any system, gain real-time insights, and deliver personalized experiences at scale to drive smarter business decisions.",
    modalTitle: "Salesforce Data Cloud",
    modalDesc:
      "Data Cloud unifies customer data from every source into a single, real-time profile. With AI-driven insights and automation, it transforms raw information into personalized experiences, smarter segmentation, and consistent engagement across all Salesforce apps and channels. Built with enterprise-grade security and scalability, Data Cloud helps organizations optimize campaigns, boost loyalty, and unlock growth while ensuring compliance.",
    img: dataCloudImg,
  },
  agentforce: {
    title: "Salesforce Agentforce",
    shortDesc:
      "Empower your business by seamlessly leveraging autonomous AI agents across sales, service, and marketing, ensuring personalized and efficient customer interactions. From automating workflows to providing proactive support, Agentforce is the next step in enhancing your Salesforce ecosystem.",
    modalTitle: "Agentforce 3.0",
    modalDesc:
      "Agentforce 3.0 is Salesforce’s latest innovation in AI-powered agents. Designed to automate workflows, enhance customer experiences, and empower teams, Agentforce 3.0 brings a new era of intelligent business automation. Features include autonomous AI Agents for sales, service & marketing, seamless integration with the Salesforce ecosystem, and proactive customer engagement with real-time insights.",
    img: agentforcemodal,
  },
  tableau: {
    title: "Salesforce Tableau",
    shortDesc:
      "Discover the future of business with autonomous AI agents built natively into Salesforce. Accelerate sales with intelligent automation. Elevate customer service through proactive, always-on support. Drive marketing impact with personalized engagement at scale.",

    modalTitle: "Unlock Insights with Tableau",
    modalDesc:
      "Tableau empowers organizations to turn raw data into actionable insights. With intuitive visualizations and AI-driven analytics, Tableau helps teams make better, faster decisions. Interactive dashboards for real-time analysis. Connect to 100+ data sources seamlessly. AI-powered predictions with Einstein Discovery. Scalable and secure for enterprise needs.",
    img: tableaumodal,
  },
  mulesoft: {
    title: "Salesforce MuleSoft",
    shortDesc:
      "UNIVMAA, a Salesforce Summit Partner and MuleSoft expert, helps enterprises simplify integration challenges through API-led connectivity. Our solutions enable modularity, autonomy, and real-time orchestration, ensuring seamless collaboration across systems and the digital ecosystem. ",
    modalDesc:
      "MuleSoft connects applications, data, and devices with an API-led approach. It enables businesses to accelerate digital transformation by integrating systems faster, automating workflows, and delivering connected customer experiences.",
    img: mulesoft4,
  },
};

const ServiceDyanamic = ({ serviceKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const service = serviceData[serviceKey];

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-300">
        <h2 className="text-2xl font-semibold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:ps-14  lg:w-[900px] md:w-[700px] lg:ms-44  md:ms-10">
      {/* Heading & Content */}
      <h2 className="text-3xl md:text-5xl text-blue-950 font-bold">
        {service.title.split(" ")[0]}{" "}
        <span className="text-blue-500">
          {service.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>
      <p className="text-black text-lg max-w-xl">{service.shortDesc}</p>

      {/* Explore More Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block px-6 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white rounded-md font-semibold   shadow hover:opacity-90 transition"
      >
        Explore More →
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-2 sm:mx-4 p-6 sm:p-9 relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3 text-center md:text-left">
                    {service.modalTitle}
                  </h3>
                  <p className="text-black leading-relaxed text-sm sm:text-base text-left md:text-left">
                    {service.modalDesc}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={service.img}
                    loading="eager"
                    alt={service.modalTitle}
                    className="rounded-lg shadow-md w-full h-40 sm:h-52 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDyanamic;
