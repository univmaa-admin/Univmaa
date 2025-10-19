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
      <div className="bg-[#0D1117] text-white">
        {/* ---------------- Hero Section ---------------- */}
        <section className="bg-[#0D1117] text-white pt-32 px-6 md:px-52 py-16 grid md:grid-cols-2 gap-10 items-center relative">
          {/* Left Content */}
          <ServiceDyanamic serviceKey="tableau" />
          {/* Right Form */}
          <FillTheForm />
        </section>

        {/* ---------------- Tableau Features ---------------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Choose Salesforce Tableau CRM?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 text-left shadow-md hover:shadow-blue-500/20 transition"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Tableau Services ---------------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Salesforce Tableau Integration Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="bg-gray-950 border border-gray-800 rounded-xl p-6 shadow hover:shadow-blue-500/20 transition"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- ROI Section (Last Section with Better Animations) ---------------- */}
        <section className="bg-black text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-14">
          {/* Left Side - Image with Floating Animation */}
          <motion.div className="relative flex items-center justify-center w-full md:w-1/2">
            <img
              src={tableauimg}
              alt="Tableau CRM"
              className="rounded-xl shadow-lg object-contain max-h-[400px] w-full"
            />
          </motion.div>

          {/* Right Side - FadeUp Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true }}
            className="max-w-lg w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Drive ROI & Business Outcomes
            </h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              We prioritize your business goals from day one, ensuring Tableau
              CRM delivers measurable value. Our experts work closely with your
              teams to:
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="list-disc list-inside text-gray-300 space-y-2 mb-8"
            >
              {[
                "Gather user stories and align solutions with business needs.",
                "Drive user adoption through training and best practices.",
                "Monitor outcomes and demonstrate ROI with data-backed results.",
              ].map((point, i) => (
                <motion.li key={i} variants={fadeUp} custom={i + 3}>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0); // 👈 reset scroll
              }}
              className="inline-block hover:cursor-pointer px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md font-semibold text-white shadow hover:opacity-90 transition"
            >
              Let&apos;s Connect →
            </motion.a>
          </motion.div>
        </section>
        <RequestForConsultation />
        <Footer />
      </div>
    </>
  );
}
