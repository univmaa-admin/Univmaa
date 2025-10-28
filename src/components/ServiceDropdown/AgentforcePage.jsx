import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  GraduationCap,
  ShoppingCart,
  Megaphone,
  Headphones,
  Plus,
  Minus,
  BarChart3,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import agentforceImg1 from "../../assets/agentforceimg.png";
import agentforceImg2 from "../../assets/agentforceimg2.jpg";
import agentforceImg3 from "../../assets/agentforceimg3.png";
import agentforceimg4 from "../../assets/agentforceimg4.jpeg";
import agentforce from "../../assets/agentforce.jpeg";
import agentbg from "../../assets/agentforce.jpeg";
import agentbg2 from "../../assets/agentbg2.webp";
import agentbg3 from "../../assets/agentbg3.png";
import agentforcebg from "../../assets/agentforcebg.webp";
import agent1 from "../../assets/agent1.png";
import agent2 from "../../assets/agent2.png";
import agent3 from "../../assets/agent3.png";
import agent4 from "../../assets/agent4.png";
import agent5 from "../../assets/agent5.png";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import RequestForConsultation from "../RequestForConsultation.jsx";
import FillTheForm from "../FillTheForm.jsx";
import FaqDynamic from "../FaqDynamic.jsx";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./AgentForce.module.css";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

// Reusable FAQ Item Component
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border  border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
      >
        <span
          className={`${open ? "text-blue-400" : "text-gray-200"} font-medium`}
        >
          {q}
        </span>
        {open ? (
          <Minus className="w-5 h-5 text-blue-400" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-gray-300"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AgentforcePage() {
  const slides = [
    {
      title: "The most complete enterprise agentic platform.",
      desc: "Agentforce is a complete, extensible, and open platform, letting you build and deploy digital labour for your customers and employees leveraging the existing workflows, data, and integrations that power your business today. Agentforce can take action across every channel and be integrated into any system, making it easy to add agentic automation across your entire business.",
      bg: agentforcebg,
      img: agent1,
      links: [{ text: "Book Demo", icon: <Headphones size={18} /> }],
    },
    {
      title: "Tools to manage the entire agent lifecycle.",
      desc: "Build, test, and supervise Agentforce with low-code and pro-code tools to deploy AI agents with confidence. AI powered assistance helps you configure Agentforce from natural language, and helps batch test at scale. Powerful supervision tools help you understand how Agentforce is performing and gives suggestions on how to refine the configuration.",
      bg: agentforcebg,
      img: agent2,
      links: [{ text: "Book Demo", icon: <Headphones size={18} /> }],
    },
    {
      title: "Relevant, accurate results for every business.",
      desc: "The Atlas Reasoning Engine is how Agentforce understands, decides, and acts autonomously to provide trusted, accurate answers for every request. It starts by understanding the user intent and scope of the problem, deciding what data is needed and what actions are required, and then autonomously executes those actions to complete the task.",
      bg: agentforcebg,
      img: agent3,
      links: [{ text: "Get Started", icon: <Headphones size={18} /> }],
    },
    {
      title: "Trust and guardrails, out-of-the-box.",
      desc: "Agentforce contains a powerful set of low code guardrails and security tools designed to keep data secure, prevent abuse, and reduce hallucinated and biased responses. These guardrails are on by default and are easily configurable by admins and business users to ensure Agentforce performs the way they should and not deviate from their instructions.",
      bg: agentforcebg,
      img: agent4,
      links: [{ text: "Contact", icon: <Headphones size={18} /> }],
    },
  ];

  // 🔹 Agents Data
  const agents = [
    {
      icon: <Headphones className="w-10 h-10 text-blue-400" />,
      title: "Service Agent",
      desc: "Provides 24/7 automated support, resolving inquiries and escalating complex cases to human agents.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Sales Development Representative (SDR) Agent",
      desc: "Engages with leads, manages and books meetings to keep your sales pipeline moving efficiently.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-400" />,
      title: "Sales Coach",
      desc: "Offers personalized coaching to help sales teams refine pitches and close deals effectively.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-blue-400" />,
      title: "Personal Shopper Agent",
      desc: "Acts as a virtual concierge, delivering personalized product recommendations and guiding customers through purchases.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-blue-400" />,
      title: "Campaign Agent",
      desc: "Automates end-to-end marketing campaigns, optimizing them with AI to ensure personalization and maximize performance.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
      title: "Data Analyst Agent",
      desc: "Transforms raw data into actionable insights, providing dashboards and forecasts to support smarter decision-making.",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Salesforce’s Next-Gen Agentforce Platform",
      img: agentforceImg1,
      desc: "Salesforce’s new Agentforce claims an extraordinary capability: resolving over 90% of customer inquiries across industries such as healthcare, finance, travel, and entertainment. Discover how Salesforce’s Next-Gen Agentforce is revolutionizing AI-driven customer support.",
      more: "At the core of the new Agentforce Platform is the Einstein Service Agent, blending AI automation with human support to resolve inquiries faster. It spans sales, service, marketing, and commerce. Key features include: Seamless Digital + Human Collaboration, Omni-channel Flexibility, Real-time Analytics, and Cross-Platform Integration.",
    },
    {
      id: 2,
      title: "Agentforce – The Third Wave of AI Revolution",
      desc: "Agentforce represents the third wave of the AI revolution, moving beyond automation to intelligent decision-making and personalized customer engagement.",
      img: agentforceImg2,
      more: "Key Highlights:\n- Context-aware AI that adapts to every interaction\n- Predictive insights to drive proactive decision-making\n- Smarter automation that goes beyond repetitive tasks\n- Enhanced personalization across customer journeys\n- Seamless integration with Salesforce ecosystem",
    },
    {
      id: 3,
      title: "Salesforce Agentforce: Predictive, AI-Driven Support",
      desc: "Discover how Salesforce Agentforce empowers organizations with predictive, AI-driven support to resolve customer issues faster and deliver proactive solutions.",
      img: agentforceImg3,
      more: "Key Highlights:\n- Predictive case resolution with AI-driven recommendations\n- Real-time insights for faster decision-making\n- Proactive alerts to identify and solve issues early\n- Context-aware support across multiple channels\n- Enhanced customer satisfaction through personalized interactions",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide (pause when hovered)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 1.1,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-50%" : "50%",
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.9, ease: [0.6, 0.01, 0.05, 0.95] },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section
        className=" text-black {styles.agentForceSection} pt-32 px-6 py-16 grid lg:grid-cols-2 md:grid-cols-1  gap-10 items-center relative"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
      url(${agentbg2})
    `,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="agentforce" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* ========================== Section 2 - Agentforce Features ========================== */}
      <motion.section
        className="py-16 px-6 md:px-20 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Top Banner Image */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-[-60px] mb-12"
        >
          <img
            src={agentforceimg4}
            alt="What is Agentforce"
            className="rounded-2xl h-[280px] sm:h-[400px] md:h-[500px] w-full  shadow-xl"
          />
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Tailored AI Agents Aligned with <br className="hidden sm:block" />{" "}
            Your Business Needs
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base">
            Harness AI agents designed to fit seamlessly into your workflows and
            operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative  border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Top Blue Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-sky-600"></div>

              {/* Card Body */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 text-black text-3xl">{agent.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {agent.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {agent.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 3 - Why Salesforce Agentforce ========================== */}
      <section
        className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${agentforce})`,
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={agent5}
              alt="Agentforce Illustration"
              className="w-[600px] mt-[-110px] lg:mt-0 md:mt-[-90px] sm:w-[400px] md:w-[520px] lg:w-[620px] drop-shadow-2xl rounded-2xl"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:mt-36 lg:mt-[-90px] px-2 md:px-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-8 leading-tight text-gray-900">
              Why <span className="text-sky-600">Salesforce Agentforce?</span>
            </h2>
            <div className="w-20 h-[3px] bg-sky-500 mx-auto md:mx-0 mb-6 rounded-full"></div>

            <p className="text-black text-base sm:text-lg text-left md:text-lg mb-4 md:mb-5 leading-relaxed">
              Salesforce Agentforce redefines the future of customer engagement
              by seamlessly combining the power of
              <span className="font-semibold text-sky-600">
                {" "}
                Artificial Intelligence, Automation, and Real-time Insights
              </span>
              . It transforms every customer interaction into a meaningful,
              data-driven experience that drives loyalty and efficiency.
            </p>

            <p className="text-black text-left text-base sm:text-lg md:text-lg mb-4 md:mb-5 leading-relaxed">
              At{" "}
              <span className="font-semibold text-sky-600">
                Univmaa Technologies
              </span>
              , we leverage Agentforce to unify your service, sales, and
              marketing workflows under a single intelligent layer — delivering
              hyper-personalized support, faster resolutions, and proactive
              engagement powered by trusted AI.
            </p>

            <p className="text-black text-left text-base sm:text-lg md:text-lg mb-8 leading-relaxed">
              From intelligent routing to predictive recommendations, Agentforce
              helps businesses of all scales operate with agility, accuracy, and
              measurable impact in a fast-evolving digital economy.
            </p>
          </motion.div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-sky-200/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-indigo-200/30 blur-2xl rounded-full"></div>
      </section>

      {/* ========================== Section 5 - Univmaa Difference ========================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className={`${styles.agentForceSection} text-black px-6 md:px-20 bg-no-repeat bg-center lg:mt-0 mt-[-70px] py-20 grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
        style={{
          backgroundImage: `url(${agentbg3})`,
        }}
      >
        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          className="lg:ms-80 lg:mt-[-60px]  mt-[-90px] lg:w-[600px]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            What sets <span className="text-sky-400">UNIVMAA</span> apart as the
            go-to partner for Salesforce Agentforce?
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {[
              {
                title: "Developing Tailored AI Use Cases",
                content:
                  "With Univmaa, your AI agents go beyond standard tasks. We develop custom AI use cases that enable Agentforce to automate complex processes and manage omnichannel interactions.",
              },
              {
                title: "Integrating the heartbeat of Agentforce - Data Cloud",
                content:
                  "We seamlessly integrate Agentforce with Salesforce Data Cloud, ensuring AI agents work with real-time customer data for maximum personalization.",
              },
              {
                title: "Compliance & Data Governance",
                content:
                  "Our implementations follow industry-leading compliance and data governance practices, keeping your operations secure and reliable.",
              },
            ].map((item, idx) => {
              const [open, setOpen] = React.useState(idx === 0); // first open by default
              return (
                <div
                  key={idx}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full px-6 py-4 hover:text-white hover:bg-blue-500 flex justify-between items-center text-left font-semibold "
                  >
                    {item.title}
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 text-black text-xl"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-black">{item.content}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* ========================== Section 6 - Agentforce Capabilities ========================== */}
      <section
        className="relative w-full overflow-hidden md:mt-[-40px]  lg:mt-0 py-12 sm:py-16 md:py-20 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex border border-sky-500 rounded-full p-3 hover:bg-sky-500/20 transition-all"
          >
            <ChevronLeft size={28} className="text-sky-400" />
          </button>

          {/* Main Slide */}
          <div className="relative w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px]">
              {/* Background Image */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={index}
                  src={slides[index].bg}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              </AnimatePresence>

              {/* Overlay Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#030a16]/70 to-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              ></motion.div>

              {/* Content */}
              <div className="absolute inset-0 mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start p-4 sm:p-6 md:p-10 lg:p-12 text-white gap-6 md:gap-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="max-w-full sm:max-w-md md:max-w-lg"
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-sky-300">
                      {slides[index].title}
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                      {slides[index].desc}
                    </p>

                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      {slides[index].links.map((link, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            navigate("/contactus");
                            window.scrollTo(0, 0);
                          }}
                          className="flex items-center gap-2 font-semibold underline hover:text-sky-300 transition-colors text-xs sm:text-sm md:text-base"
                        >
                          {link.text}
                          {link.icon}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Image */}
                {/* Right Image - only visible on desktop */}
                <motion.img
                  key={`img-${index}`}
                  src={slides[index].img}
                  alt="Agentforce"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="hidden md:block w-36 lg:w-80 object-contain mt-4 md:mt-10"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex border border-sky-500 rounded-full p-3 hover:bg-sky-500/20 transition-all"
          >
            <ChevronRight size={28} className="text-sky-400" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                i === index ? "bg-sky-500 w-3 sm:w-4" : "bg-sky-700"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ========================== Section 7 - Featured Resources ========================== */}
      <section className="py-20 text-black md:mt-[-40px] lg:mb-0 md:mb-[-70px] mb-[-70px] relative overflow-hidden">
        {/* Background gradient or decorative element */}

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl md:mt-[-50px] mt-[-80px] font-bold mb-16 text-[#032D60]"
          >
            Featured <span className="text-blue-500">Resources</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {resources.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-semibold text-[#032D60] mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{item.date}</p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentIndex(i);
                      setShowMore(false);
                      setSelected(resources[i]);
                    }}
                    className="mt-auto text-sky-600 font-semibold hover:text-blue-800 transition inline-flex items-center gap-1"
                  >
                    Explore <span className="text-lg">→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-black mt-7 rounded-2xl bg-white shadow-2xl max-w-lg w-full p-8 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-black hover:text-red-700 text-2xl"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold mb-4 text-[#032D60]">
                  {selected.title}
                </h2>
                <p className="text-black mb-4">{selected.desc}</p>
                {showMore && (
                  <p className="text-black whitespace-pre-line leading-relaxed">
                    {selected.more}
                  </p>
                )}

                {!showMore ? (
                  <button
                    onClick={() => setShowMore(true)}
                    className="text-sky-600 font-semibold mt-6 transition"
                  >
                    More →
                  </button>
                ) : (
                  <button
                    onClick={() => setShowMore(false)}
                    className="text-sky-600 font-semibold mt-6 flex items-center  gap-1 hover:text-sky-800 transition"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ========================== Section 9 - CTA ========================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
