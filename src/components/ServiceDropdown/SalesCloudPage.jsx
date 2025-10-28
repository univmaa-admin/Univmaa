import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import salescloud3 from "../../assets/salescloud3.png";
import RequestForConsultation from "../RequestForConsultation";
import FillTheForm from "../FillTheForm";
import ServiceDyanamic from "../ServiceDyanamic";
import FaqDynamic from "../FaqDynamic";

import salescloudimgnew from "../../assets/salescloudimgnew.webp";
import salescloudimgnew2 from "../../assets/salescloudimgnew2.webp";
import salescloudimgnew3 from "../../assets/salescloudimgnew3.webp";
import salescloudimgnew4 from "../../assets/salescloudimgnew4.webp";
import salescloudimgnew5 from "../../assets/salescloudimgnew5.webp";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function SalesCloudPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section
        className="text-black px-6 md:px-10 lg:pr-16 py-16 pt-36 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0)),
     url(${salescloudimgnew2})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <ServiceDyanamic serviceKey="sales-cloud" />
        {/* Right Form */}
        <FillTheForm />
      </section>

      {/* ========================== Section 2 ========================== */}
      <motion.section
        className=" text-black px-6 lg:mt-[-70px] md:mt-[-30px] mt-[-130px] md:px-20 py-16 grid lg:grid-cols-2 md:grid-cols-1  gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundImage: `url(${salescloudimgnew3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={salescloudimgnew}
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px] md:h-[400px] bg-transparent"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className=" lg:w-[700px] relative lg:right-24"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Sales Team with{" "}
            <span className="text-blue-400">Data-Driven</span> Selling
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
          <button
            onClick={() => navigate("/contactus")}
            whileHover={{ scale: 1.03 }}
            className="px-8 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white
                rounded-lg font-semibold shadow-lg hover:opacity-95 transition"
          >
            Let&apos;s Connect →
          </button>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className=" text-black bg-transparent md:bg-contain md:bg-no-repeat md:mt-[-43px] lg:mt-0  px-6 md:px-20 py-28 grid  md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        style={{
          backgroundImage: `url(${salescloudimgnew4})`,
        }}
      >
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          className="relative md:left-11 lg:left-40 lg:mt-[-60px] lg:w-[500px]"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accelerate Sales Success with{" "}
            <span className="text-blue-400">Data & AI</span>
          </h2>
          <p className="text-black mb-4 text-lg">
            Combine the strength of Data Cloud with the intelligence of Einstein
            AI to revolutionize your sales process. Data Cloud acts as the
            foundation, bringing together all your customer information into a
            single trusted source.
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
          className="relative md:left-16 lg:left-52 justify-center lg:w-96   "
        >
          <img
            src={salescloud3}
            alt="Data & AI"
            className="w-72 ms-14 md:ms-0 lg:ms-0 md:w-[500px]  md:mt-[-100px] "
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className=" text-black md:mt-[-100px] mt-[-130px] px-6 md:px-16 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${salescloudimgnew5})`,
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          Optimize Sales Cloud with Univmaa –{" "}
          <span className="text-blue-400">Our Offerings</span>
        </motion.h2>
        <motion.p className="text-center text-black mb-12" variants={fadeInUp}>
          Boost Sales with Efficiency, Automation, and Intelligence Powered by
          Salesforce Sales Cloud
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Accurate Sales Forecasting",
              desc: "Leverage powerful forecasting tools, analyze historical data, pipeline info, and KPIs to identify trends and optimize strategy.",
            },
            {
              title: "Sales Performance Management",
              desc: "Set and track sales goals. Incentivize teams and monitor real-time performance to stay on target.",
              highlight: true,
            },
            {
              title: "Lead and Opportunity Management",
              desc: "Focus on high-potential opportunities and increase conversion rates by streamlining lead-to-deal workflows.",
            },
            {
              title: "Mobile and Social Selling",
              desc: "Access critical sales data on the go and integrate with LinkedIn, Twitter for enhanced customer engagement.",
            },
            {
              title: "Sales Cloud Einstein",
              desc: "Use Einstein AI for lead scoring, opportunity insights, and account analysis to uncover new relationships.",
            },
            {
              title: "Territory & Pipeline Management",
              desc: "Align sales territories, optimize coverage, and track pipeline health to maximize revenue opportunities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-transparent rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-8 border-teal-400 p-8"
            >
              <h3 className="text-[#0B1739] font-semibold text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-black text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <FaqDynamic />
      {/* ========================== Section 6 - CTA ========================== */}
      <RequestForConsultation />
      <Footer />
    </>
  );
}
