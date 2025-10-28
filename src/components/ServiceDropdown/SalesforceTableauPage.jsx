import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Users,
  Layers,
  Activity,
  Settings,
  Share2,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import tableauimg from "../../assets/tableauimg.png";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FaqDynamic from "../FaqDynamic.jsx";

import Tableauimgnew from "../../assets/Tableauimgnew.webp";

export default function SalesforceTableauPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  /* ---------------- Tableau Data ---------------- */
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Transform Data into Actionable Insights",
      desc: "Integrating Tableau with Salesforce enables seamless data analysis through intuitive dashboards and AI-driven insights.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Connect, Analyze, and Act in Real-Time",
      desc: "With 100+ native connectors, Tableau CRM pulls data from clouds, databases, apps, and files.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "AI-Driven Analytics for Strategic Growth",
      desc: "Harness the power of Salesforce Einstein AI to predict trends, automate processes, and uncover opportunities.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      title: "Flexible Deployment for Every Business Need",
      desc: "Deploy Tableau CRM on-premises, public cloud, or Salesforce Hyperforce.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Comprehensive Data Management & Governance",
      desc: "Ensure data quality, security, and governance with Tableau CRM’s advanced tools.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "Seamless Collaboration & Sharing",
      desc: "Empower teams by securely sharing dashboards, reports, and insights across your organization in real time.",
    },
  ];

  const services = [
    {
      icon: <Users className="w-7 h-7 text-blue-400" />,
      title: "Tableau Managed Services",
      desc: "End-to-end support to ensure your analytics environment runs smoothly.",
    },
    {
      icon: <Settings className="w-7 h-7 text-blue-400" />,
      title: "Tableau Consulting & Advisory",
      desc: "Expert guidance to align Tableau with your strategic goals.",
    },
    {
      icon: <Activity className="w-7 h-7 text-blue-400" />,
      title: "Rapid Tableau Implementation",
      desc: "Quick, customized deployments designed to meet your needs.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-blue-400" />,
      title: "Custom Dashboard Development",
      desc: "Personalized dashboards that deliver actionable insights.",
    },
    {
      icon: <Database className="w-7 h-7 text-blue-400" />,
      title: "Integration with CRMs, ERPs, & AI",
      desc: "Unified data integrations across platforms for holistic analytics.",
    },
    {
      icon: <Layers className="w-7 h-7 text-blue-400" />,
      title: "Performance Optimization",
      desc: "Ensure peak performance with real-time insights and quick load times.",
    },
  ];

  /* ---------------- Animation Variants ---------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -40 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Navbar />
      <div className=" text-black">
        {/* ---------------- Hero Section ---------------- */}
        <section
          className=" text-black pt-32 px-6  md:px-10 md:pr-20 py-16 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center relative"
          style={{
            backgroundImage: `
             linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
        url(${Tableauimgnew})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Content */}
          <ServiceDyanamic serviceKey="tableau" />
          {/* Right Form */}
          <FillTheForm />
        </section>

        {/* ---------------- Tableau Features ---------------- */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-6 mt-[-40px] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#032D60]">
              Why Choose Salesforce{" "}
              <span className="text-blue-500">Tableau CRM?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all duration-300 border-t-8 border-[#0176D3]"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-start mb-4 text-[#0176D3] text-3xl">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-[#032D60]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- ROI Section (Last Section with Better Animations) ---------------- */}
        <section className="bg-white text-[#032D60] mb-[-90px]  mt-[-40px] py-20 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid mt-[-60px] grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* Left Side - Animated Image */}
            <motion.div
              className="relative flex items-center justify-center w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={tableauimg}
                alt="Tableau CRM"
                className="rounded-2xl object-contain max-h-[400px] w-full"
                transition={{ duration: 0.4 }}
              />
              {/* Decorative floating gradient circle */}
              <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-sky-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              className=" px-10 mt-[-30px] md:mt-0 lg:mt-0 w-full mx-auto md:mx-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl   md:text-4xl font-bold mb-6 leading-snug text-[#032D60]"
              >
                Drive <span className="text-blue-500">ROI & Business</span>{" "}
                Outcomes
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-black mb-6 text-left leading-relaxed"
              >
                We prioritize your business goals from day one, ensuring Tableau
                CRM delivers measurable value. Our experts work closely with
                your teams to:
              </motion.p>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="list-disc list-inside text-black space-y-2 mb-8"
              >
                {[
                  "Gather user stories and align solutions with business needs.",
                  "Drive user adoption through training and best practices.",
                  "Monitor outcomes and demonstrate ROI with data-backed results.",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={i + 3}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="transition-colors duration-200"
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/contactus");
                  window.scrollTo(0, 0);
                }}
                className="inline-block hover:cursor-pointer px-8 py-3 rounded-md hover:bg-[#0176d3] hover:text-white font-semibold text-blue-500 shadow-lg hover:shadow-xl transition"
              >
                Let&apos;s Connect →
              </motion.a>
            </motion.div>
          </div>
        </section>

        <FaqDynamic />
        <RequestForConsultation />
        <Footer />
      </div>
    </>
  );
}
