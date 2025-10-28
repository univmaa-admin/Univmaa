import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import datacloud3 from "../../assets/datacloud3.png";
import datacloudjsonimg from "../../assets/datacloudjsonimg.webp";
import datacloudjsonimg2 from "../../assets/datacloudjsonimg2.png";
import datacloudjsonimg3 from "../../assets/datacloudjsonimg3.webp";
import datacloudjsonimg4 from "../../assets/datacloudjsonimg4.png";
import datacloudjsonimg5 from "../../assets/datacloudjsonimg5.jpg";
import datacloudjsonimg6 from "../../assets/datacloudjsonimg6.png";
import datacloudnewimg from "../../assets/datacloudimgnew.webp";
import datacloudnewimg2 from "../../assets/datacloudnewimg2.webp";
import datacloudnewimg3 from "../../assets/datacloudnewimg3.webp";
import datacloudnewimg4 from "../../assets/datacloudnewimg4.webp";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, Headphones } from "lucide-react";
import RequestForConsultation from "../RequestForConsultation.jsx";

// 🚀 Animation Variants
import Navbar from "../Navbar";
import FillTheForm from "../FillTheForm.jsx";
import FaqDynamic from "../FaqDynamic.jsx";
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function DataCloudPage() {
  // ✅ Counter States
  const [count67, setCount67] = useState(0);
  const [count79, setCount79] = useState(0);
  const [count77, setCount77] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Trigger counter when section comes into view
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start67 = 0;
      let start79 = 0;
      let start77 = 0;

      const duration = 2000;
      const step = 50;

      const increment67 = 67 / (duration / step);
      const increment79 = 79 / (duration / step);
      const increment77 = 77 / (duration / step);

      const counter67 = setInterval(() => {
        start67 += increment67;
        if (start67 >= 67) {
          clearInterval(counter67);
          setCount67(67);
        } else {
          setCount67(Math.ceil(start67));
        }
      }, step);

      const counter79 = setInterval(() => {
        start79 += increment79;
        if (start79 >= 79) {
          clearInterval(counter79);
          setCount79(79);
        } else {
          setCount79(Math.ceil(start79));
        }
      }, step);

      const counter77 = setInterval(() => {
        start77 += increment77;
        if (start77 >= 77) {
          clearInterval(counter77);
          setCount77(77);
        } else {
          setCount77(Math.ceil(start77));
        }
      }, step);

      return () => {
        clearInterval(counter67);
        clearInterval(counter79);
        clearInterval(counter77);
      };
    }
  }, [inView]);
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [barY, setBarY] = useState(0);
  // Slides
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🕒 Auto Slide Every 6 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 🔹 Motion Variants
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
  };

  const slides = [
    {
      title: "Get Started with Data Cloud",
      desc: "New to Salesforce Data Cloud? Get expert guidance to explore & maximize the free features of Salesforce Data Cloud.",
      img: datacloudjsonimg,
      links: [{ text: "Contact Us", icon: <Headphones size={18} /> }],
    },
    {
      title: "Implementation Support",
      desc: "Already implemented? Optimize your existing Data Cloud including troubleshooting, enhancements, and performance tuning to ensure peak performance.",
      img: datacloudjsonimg2,
      links: [{ text: "Request Support", icon: <Headphones size={18} /> }],
    },
    {
      title: "Custom Solutions",
      desc: "Need a custom solution? Gain tailored solutions based on an assessment of your data quality, sources, and specific business objectives.",
      img: datacloudjsonimg3,
      links: [{ text: "Talk to Experts", icon: <Headphones size={18} /> }],
    },
    {
      title: "Strategy for Business Outcomes",
      desc: "Need long-term business strategy? We can help you develop a comprehensive data strategy that aligns with your long-term business goals to ensure powerful outcomes.",
      img: datacloudjsonimg4,
      links: [{ text: "Schedule Call", icon: <Headphones size={18} /> }],
    },
    {
      title: "Data Security & Compliance",
      desc: "Ensure your Salesforce Data Cloud implementation meets industry standards with secure data handling, privacy compliance, and robust governance practices.",
      img: datacloudjsonimg5,
      links: [{ text: "Compliance Details", icon: <Headphones size={18} /> }],
    },
    {
      title: "Integration with External Systems",
      desc: "Seamlessly connect Salesforce Data Cloud with third-party applications, APIs, and enterprise systems to create a unified data ecosystem across your organization.",
      img: datacloudjsonimg6,
      links: [{ text: "Book a Demo", icon: <Headphones size={18} /> }],
    },
  ];
  const items = [
    {
      title: "Build a unified view of your data without moving it.",
      content:
        "Unify customer data from Snowflake and Data Cloud without copying it. With Zero Copy and bi-directional data access, create a consistent customer view while keeping systems secure, governed, and up to date.",
    },
    {
      title: "Govern smarter with AI and automation.",
      content:
        "Automatically tag and classify your unified data using AI. Author, manage, and enforce access policies with clicks — not code — across ingested or Zero Copy data.",
    },
    {
      title: "Launch faster with low code.",
      content:
        "Use enriched customer data to build and deploy AI-powered apps, dashboards, and automation with clicks, not code. Enable business teams to move faster while reducing IT overhead.",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const activeEl = container.querySelector(`[data-index="${active}"]`);
      if (activeEl) {
        const { offsetTop, offsetHeight } = activeEl;
        setBarY(offsetTop + offsetHeight / 2 - 8); // center the blue indicator
      }
    }
  }, [active]);

  const handleClick = (i) => {
    setActive(active === i ? null : i);
    setTimeout(() => {
      const el = containerRef.current?.querySelector(`[data-index="${i}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  };

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section
        className="text-black pt-32 px-6  md:px-10 md:pr-16  py-16 grid lg:grid-cols-2 md:grid-cols-1  gap-10 items-center relative"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)),
        url(${datacloudnewimg3})
    `,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="data-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>
      {/* ========================== Section 2 ========================== */}
      <motion.section
        className=" text-black px-6 md:px-20 mt-[-130px] md:mt-[-180px]  py-16 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center "
        >
          <img
            src={datacloudnewimg}
            alt="Data-Driven Selling"
            className="w-100 md:w-[550px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          className="md:mt-[-80px] lg:mt-0 mt-[-60px]"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-blue-950 font-bold mb-6">
            Are You Utilizing Your <span className="text-blue-500">Data</span>{" "}
            To Its Full Potential?
          </h2>
          <p className="text-black mb-4 text-lg">
            Today, businesses are inundated with an overwhelming amount of data
            flowing in from an ever-growing number of systems, sources, and
            platforms.
          </p>
          <p className="text-black mb-6 text-lg">
            Make customer data quickly accessible & easily actionable with
            real-time insights and scalable personalization using Salesforce
            Data Cloud.
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0);
            }}
            className="inline-block px-6 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white hover:cursor-pointer rounded-md font-semibold transition-all shadow-md"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        ref={ref}
        className="bg-white rounded-3xl mt-[-40px] md:mt-[-20px] lg:mt-[-100px] shadow-2xl mx-4 sm:mx-8 lg:mx-20 my-16 px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#032D60]">
            Benefits of Salesforce{" "}
            <span className="text-[#0176D3]">Data Cloud </span> in your
            Business:
          </h2>

          <p className="text-black mb-4 text-base sm:text-lg">
            Bring your entire organization together around enhanced customer
            experience
          </p>
          <p className="text-black mb-6 text-base sm:text-lg">
            Einstein AI transforms this data into actionable insights,
            predicting customer behavior, automating tasks, and personalizing
            interactions.
          </p>

          {/* Counter Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#F4F6F9] text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl font-bold text-[#032D60]">{count67}%</h3>
              <p className="mt-2 text-sm text-black">
                Tech resources freed up by modern data unification solutions
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#F4F6F9] text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl font-bold text-[#032D60]">{count79}%</h3>
              <p className="mt-2 text-sm text-black">
                Companies witnessed cost reduction across their organization via
                AI
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#F4F6F9] text-center shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1"
            >
              <h3 className="text-3xl font-bold text-[#032D60]">{count77}%</h3>
              <p className="mt-2 text-sm text-black">
                Organizations save 2 or more hours a week through automation
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={datacloud3}
            alt="Data & AI"
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] rounded-2xl"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className=" text-black px-6 md:px-20  py-16 lg:mt-[-40px] mt-[-80px] md:mt-[-40px] grid lg:grid-cols-2 md:grid-cols-1 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:mt-[-50px] lg:mt-0"
        >
          <img
            src={datacloudnewimg2}
            alt="Salesforce Data Cloud"
            className="w-96 md:w-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl text-blue-950  text-left font-bold mb-6 leading-snug">
            Make the most of Salesforce Data Cloud for sustainable
            <span className="text-blue-500"> business outcome</span>
          </h2>
          <p className="text-black mb-4 text-lg">
            We are here to help organizations with Salesforce Data Cloud
            implementation and consultation services ensuring seamless
            integration with your existing data models, sources, and systems.
          </p>
          <p className="text-black mb-4 text-lg">
            As your trusted Salesforce Implementation Service Partner for Data
            Cloud, we bring firsthand experience in overcoming complex
            challenges. Our proven marketing transformation, deep client
            knowledge, and global insights uniquely position us to support your
            growth and strategic decision-making.
          </p>
          <p className="text-black text-lg">
            Let us guide you through every step of your transformation.
          </p>
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <section className="w-full bg-gradient-to-b from-[#f8fbff] to-[#eef4ff] py-12 md:py-16 px-4 flex mt-[-30px]  flex-col items-center overflow-hidden">
        <div className="relative max-w-6xl w-full flex mt-[-40px]  items-center justify-center gap-4">
          {/* Left Button (Hidden on Mobile) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-[-40px] md:left-[-60px] z-10 p-3 border border-blue-800 rounded-full text-blue-800 hover:bg-blue-100 transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Animated Card */}
          <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-700">
            {/* Image Section */}
            {/* Image Section */}
            <div className="md:w-1/2 w-full bg-[#f7faff] relative flex items-center justify-center h-[260px] sm:h-[320px] md:h-[400px] lg:h-[420px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  alt={slides[index].title}
                  variants={imageVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full object-contain md:object-cover rounded-none"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full bg-[#002b7f] text-white p-6 md:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-snug">
                    {slides[index].title}
                  </h2>
                  <p className="text-blue-100 text-sm md:text-base mb-6 leading-relaxed">
                    {slides[index].desc}
                  </p>
                  <div className="flex gap-5 flex-wrap">
                    {slides[index].links.map((link, i) => (
                      <button
                        key={i}
                        onClick={() => navigate("/contactus")}
                        className="flex items-center gap-2 font-semibold underline hover:text-blue-300 transition text-sm md:text-base"
                      >
                        {link.text}
                        {link.icon}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Button (Hidden on Mobile) */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-[-40px] md:right-[-60px] z-10 p-3 border border-blue-800 rounded-full text-blue-800 hover:bg-blue-100 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 md:mt-8 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                i === index ? "bg-blue-800 w-3.5" : "bg-blue-300"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ========================== Section 6 ========================== */}
      <section
        className="relative bg-cover  bg-center bg-no-repeat py-20 px-6 md:px-16"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",

          backgroundImage: `url(${datacloudnewimg4})`,
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/80 md:bg-white/70 lg:bg-white/60"></div>

        <div className="relative max-w-xl lg:left-64  mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C2D63] mb-10">
              How It <span className="text-blue-500">Works</span>
            </h2>

            <div className="relative flex gap-6" ref={containerRef}>
              {/* Gray Line */}
              <div className="absolute left-0 top-0 w-[2px] bg-black h-full"></div>

              {/* Blue Active Indicator */}
              <motion.div
                className="absolute left-[-3px] w-[10px] h-[24px] bg-[#0C62D1] rounded-full"
                animate={{ y: barY }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
              />

              {/* Accordion Items */}
              <div className="flex-1 pl-8 space-y-6">
                {items.map((item, i) => {
                  const open = active === i;
                  return (
                    <div key={i} data-index={i} className="relative">
                      <button
                        onClick={() => handleClick(i)}
                        className={`block text-left font-semibold text-lg md:text-xl transition-colors duration-200 ${
                          open
                            ? "text-[#0C62D1]"
                            : "text-[#002B5C] hover:text-[#0C62D1]"
                        }`}
                      >
                        {item.title}
                      </button>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-balance mt-2 md:mt-3 leading-relaxed text-base md:text-[17px]">
                              {item.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Section 6 - CTA ========================== */}
      <FaqDynamic />
      <RequestForConsultation />
      <Footer />
    </>
  );
}
