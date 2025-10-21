import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import datacloud2 from "../../assets/datacloud2.png";
import datacloud3 from "../../assets/datacloud3.png";
import datacloud4 from "../../assets/datacloud4.png";
import datacloud5 from "../../assets/datacloud5.jpg";
import datacloud6 from "../../assets/datacloud6.jpg";
import datacloud7 from "../../assets/datacloud7.png";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import RequestForConsultation from "../RequestForConsultation.jsx";

// 🚀 Animation Variants
import Navbar from "../Navbar";
import FillTheForm from "../FillTheForm.jsx";
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
  const [showModal, setShowModal] = useState(null);

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] text-white pt-32 px-6  md:px-10 md:pr-16  py-16 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <ServiceDyanamic serviceKey="data-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>
      {/* ========================== Section 2 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={datacloud2}
            alt="Data-Driven Selling"
            className="w-100 md:w-[550px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You Utilizing Your <span className="text-blue-400">Data</span>{" "}
            To Its Full Potential?
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Today, businesses are inundated with an overwhelming amount of data
            flowing in from an ever-growing number of systems, sources, and
            platforms.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Make customer data quickly accessible & easily actionable with
            real-time insights and scalable personalization using Salesforce
            Data Cloud.
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 hover:cursor-pointer py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        ref={ref}
        className="bg-black text-white px-6 md:px-20 py-16 grid  md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefits of Salesforce{" "}
            <span className="text-blue-400">Data Cloud </span> in your Business:
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Bring your entire organization together around enhanced customer
            experience
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Einstein AI transforms this data into actionable insights,
            predicting customer behavior, automating tasks, and personalizing
            interactions.
          </p>

          {/* Counter Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              variants={fadeInUp}
              className="bg-blue-700 p-6 rounded-lg text-center hover:cursor-pointer"
            >
              <h3 className="text-3xl font-bold">{count67}%</h3>
              <p className="mt-2 text-sm">
                Tech resources freed up by modern data unification solutions
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-blue-700 p-6 rounded-lg text-center hover:cursor-pointer"
            >
              <h3 className="text-3xl font-bold">{count79}%</h3>
              <p className="mt-2 text-sm">
                Companies witnessed cost reduction across their organization via
                AI
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-blue-700 p-6 rounded-lg text-center hover:cursor-pointer"
            >
              <h3 className="text-3xl font-bold">{count77}%</h3>
              <p className="mt-2 text-sm">
                Organizations save 2 or more hours a week through automation
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src={datacloud3} alt="Data & AI" className="w-96 md:w-[500px]" />
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className="bg-[#071426] text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={datacloud4}
            alt="Salesforce Data Cloud"
            className="w-96 md:w-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Make the most of Salesforce <br />
            Data Cloud for sustainable <br />
            <span className="text-blue-400">business outcome</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            We are here to help organizations with Salesforce Data Cloud
            implementation and consultation services ensuring seamless
            integration with your existing data models, sources, and systems.
          </p>
          <p className="text-gray-300 mb-4 text-lg">
            As your trusted Salesforce Implementation Service Partner for Data
            Cloud, we bring firsthand experience in overcoming complex
            challenges. Our proven marketing transformation, deep client
            knowledge, and global insights uniquely position us to support your
            growth and strategic decision-making.
          </p>
          <p className="text-gray-300 text-lg">
            Let us guide you through every step of your transformation.
          </p>
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          Salesforce Data Cloud Implementation Services by –{" "}
          <span className="text-blue-400">Univmaa</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12 text-lg"
          variants={fadeInUp}
        >
          Boost Sales with Efficiency, Automation, and Intelligence Powered by
          Salesforce Sales Cloud
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Get Started with Data Cloud:",
              desc: "New to Salesforce Data Cloud? Get expert guidance to explore & maximize the free features of Salesforce Data Cloud.",
            },
            {
              title: "Implementation Support:",
              desc: "Already implemented? Optimize your existing Data Cloud including troubleshooting, enhancements, and performance tuning to ensure peak performance.",
              //   highlight: true,
            },
            {
              title: "Custom Solutions:",
              desc: "Need a custom solution? Gain tailored solutions based on an assessment of your data quality, sources, and specific business objectives.",
            },
            {
              title: "Strategy for Business Outcomes:",
              desc: "Need long-term business strategy? We can help you develop a comprehensive data strategy that aligns with your long-term business goals to ensure powerful outcomes.",
            },
            {
              title: "Data Security & Compliance:",
              desc: "Ensure your Salesforce Data Cloud implementation meets industry standards with secure data handling, privacy compliance, and robust governance practices.",
            },
            {
              title: "Integration with External Systems:",
              desc: "Seamlessly connect Salesforce Data Cloud with third-party applications, APIs, and enterprise systems to create a unified data ecosystem across your organization.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`p-6 rounded-lg shadow ${
                item.highlight
                  ? "bg-gradient-to-b from-purple-600 to-purple-800"
                  : "bg-[#0c1b33]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className="bg-[#020617] text-white px-6 md:px-20 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Case Studies
        </motion.h2>

        {/* ✅ Modal State */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex  items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f172a] text-white p-4 rounded-xl shadow-lg max-w-4xl mx-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(null)}
                className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl"
              >
                ✖
              </button>

              {/* Modal Content */}
              <h3 className="text-2xl font-bold mb-4">{showModal.title}</h3>
              <img
                src={showModal.img}
                alt={showModal.title}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <div className="text-gray-300 leading-relaxed space-y-4">
                {showModal.content ? (
                  showModal.content
                ) : (
                  <p>{showModal.desc}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Salesforce Data Cloud: Practical Use Cases for Financial Services",
              img: datacloud5,
              desc: "From banking and insurance to personal wealth management – vast amounts of data are generated and need to be processed accurately and swiftly. Salesforce Data Cloud, coupled with Einstein AI, offers a robust solution by integrating and analyzing data from various sources, automating processes, and providing predictive insights.",
            },
            {
              title:
                "Conversation Intelligence: The Future of Retail Customer Service",
              img: datacloud6,
              desc: "According to the Salesforce State of Sales Report, sales reps spend 70% of their week on non-selling tasks. With the tidal wave of conversation data pouring in from every direction, trying to manually analyze it all for trends and patterns is like trying to drink from a firehose— it’s impossible! That’s why conversation intelligence is having its big moment",
            },
            {
              title: "Salesforce Data Cloud Use Cases For Logistics Industry",
              img: datacloud7,
              content: (
                <>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    The logistics industry is rapidly growing, demanding speed,
                    efficiency, and smarter decisions. Salesforce Data Cloud
                    helps optimize the entire supply chain with real-time
                    insights.
                  </p>

                  <p className="mb-2 text-gray-300">
                    What we’re covering here:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-200">
                    <li>
                      <span className="font-semibold">
                        Major Challenges Faced By the Logistics Industry
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold">
                        Role Of Salesforce Data Cloud & AI In Logistics & Supply
                        Chain
                      </span>
                    </li>
                    {/* <li>
                      <span className="font-semibold">
                        How FedEx Grew Shipping Revenue With Salesforce Data
                        Cloud
                      </span>
                    </li> */}
                  </ul>
                </>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gradient-to-b from-transparent to-purple-900/70 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-300 mb-2">Case Study</p>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <button
                  onClick={() => setShowModal(item)}
                  className="text-white font-medium flex items-center gap-2 hover:underline"
                >
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 6 - CTA ========================== */}
      <RequestForConsultation />
      <Footer />
    </>
  );
}
