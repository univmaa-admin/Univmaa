import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/aboutimg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import missionIcon from "../assets/mission.png"; // optional icon
import visionIcon from "../assets/visions.png"; // o
import RequestForConsultation from "../components/RequestForConsultation";

import aboutimgnew from "../assets/aboutimgnew.webp";
import aboutimgnew2 from "../assets/aboutimgnew2.webp";
import aboutimgnew3 from "../assets/aboutimgnew3.webp";
import aboutimgnew4 from "../assets/aboutimgnew4.webp";
import aboutimgnew5 from "../assets/aboutimgnew5.webp";
import aboutimgnew6 from "../assets/aboutimgnew6.webp";
import aboutimgnew7 from "../assets/aboutimgnew7.webp";
import aboutimgnew8 from "../assets/aboutimgnew8.webp";

const features = [
  {
    title: "Salesforce, Simplified & Supercharged",
    desc: "We turn Salesforce into your business growth engine — easy to use, tailored to you, and built for speed.",
  },
  {
    title: "Startup Agility, Enterprise Impact",
    desc: "UNIVMAA blends the fast, innovative spirit of a startup with the reliability big businesses demand.",
  },
  {
    title: "Future-Ready Cloud Solutions",
    desc: "From automation to AI, our Salesforce-powered solutions keep your business ahead of the curve.",
  },
  {
    title: "Customer Success  Above All",
    desc: "Every solution we design starts with one goal — driving measurable results and lasting success for you.",
  },
  {
    title: "Innovation Without Boundaries",
    desc: "We don’t follow trends — we set them. Expect bold ideas and cutting-edge Salesforce integrations.",
  },
  {
    title: "Your Trusted Salesforce Partner",
    desc: "Beyond technology, we build partnerships. With UNIVMAA, you gain a long-term ally for growth.",
  },
];
const beliefCards = [
  {
    icon: "⏱️",
    title: "Timely Delivery",
    desc: "Delivering value, and ensuring projects are on time.",
  },
  {
    icon: "⭐",
    title: "High Quality",
    desc: "We consistently surpass client expectations with high-quality work.",
  },
  {
    icon: "⚙️",
    title: "Structured Approach",
    desc: "We harness technology for efficiency and organization.",
  },
  {
    icon: "🤝",
    title: "Customer Support",
    desc: "Exceptional service and support are our cornerstones.",
  },
];

// Entry animation used for grid cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, type: "spring", stiffness: 120 },
  }),
};

const Aboutus = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  const ctrl0 = useAnimation();
  const ctrl1 = useAnimation();
  const ctrl2 = useAnimation();
  const ctrl3 = useAnimation();
  const controlsArr = [ctrl0, ctrl1, ctrl2, ctrl3];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    controlsArr.forEach((control, i) => {
      control.start("visible");
    });
  }, []);
  const handleHoverStart = (index) => {
    controlsArr[index].start({
      scale: 1.05,
      y: -6,
      boxShadow: "0 10px 30px rgba(59,130,246,0.4)",
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    controlsArr.forEach((control) =>
      control.start({ scale: 1, y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" })
    );
  };
  const cardHover = {
    scale: 1.03,
    y: -6,
    transition: { duration: 0.3, type: "spring", stiffness: 220 },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-blue-950/80"></div>

        <div className="relative z-10 pt-16">
          <motion.h1
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:pt-6 sm:mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="text-sm sm:text-lg  md:text-2xl  max-w-7xl mx-auto font-thin leading-relaxed px-2"
          >
            UNIVMAA is a Salesforce-focused IT solutions company delivering
            cutting-edge cloud solutions,CRM optimization, automation,and
            integration services that empower businesses worldwide. We
            specialize in transforming complex business processes into seamless
            digital experiences, efficiency and productivity.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <div
        className="bg-white text-white py-20 px-6 md:px-20 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutimgnew})`,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-blue-950 md:mt-[-60px] mt-[-48px] mb-4">
            Our <span className="text-blue-500">Core Beliefs</span>
          </h2>
          <p className="text-black font-thin sm:text-xl  md:text-2xl max-w-3xl mx-auto">
            We are committed to redefining customer experiences through proven
            expertise, strategic insight, and exceptional support.
          </p>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:mt-[-40px] mt-[-40px] gap-10">
          {/* Mission Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className=" backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={missionIcon} alt="Mission" className="w-14 h-14" />
              <h3 className="text-2xl md:text-4xl font-serif text-blue-950">
                Our Mission
              </h3>
            </div>
            <p className="text-black text-sm sm:text-lg leading-relaxed  ">
              We are driven by a commitment to become a premier provider of
              cloud technology solutions, delivering exceptional quality and
              value to our clients. By continuously enhancing our workforce
              capabilities within a culture founded on trust, integrity,
              empathy, and fairness, we foster strong and enduring relationships
              with our customers, employees, and partners. Guided by global best
              practices, we remain steadfast in our pursuit of sustainable
              growth and operational excellence.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className=" backdrop-blur-md border border-blue-500/30 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
              <img src={visionIcon} alt="Vision" className="w-14 h-14" />
              <h3 className="font-serif text-blue-950 text-2xl md:text-4xl">
                Our Vision
              </h3>
            </div>
            <p className="text-black text-sm sm:text-lg   leading-relaxed">
              To establish ourselves as a catalyst of innovation by continually
              challenging conventions and driving measurable impact for our
              clients. We are committed to cultivating enduring partnerships
              built on trust, transparency, and accountability, while empowering
              our people to excel in an environment of integrity and excellence.
              Our vision is to shape the future of cloud technology by
              delivering transformative solutions that inspire progress and
              create lasting value worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Univmaa */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:mt-[-90px] mt-[-70px] mb-[-140px] md:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold mb-4 mt-[-28px] sm:mb-6">
            Why Choose <span className="text-blue-500">UNIVMAA?</span>{" "}
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-black">
            We deliver excellence and create value for customers...
          </p>
        </div>

        <div className="py-16 bg-white md:mt-[-60px] mt-[-50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: false }}
                variants={cardVariants}
                whileHover={
                  {
                    // scale: 1.03,
                  }
                }
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-8 transition-all duration-300"
              >
                {/* Curved Blue Top Border */}
                <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-400"></div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mt-4">
                  {feature.title}
                </h3>

                {/* Status */}
                <p className="text-black font-semibold mt-3">
                  {feature.status}
                </p>

                {/* Description */}
                <p className="text-black leading-relaxed mt-4">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Believe In */}
      <section className="bg-white    py-12 md:mb-[-90px] mb-[-40px]  sm:py-16 px-4 sm:px-6 md:mt-[-120px] overflow-x-hidden">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-blue-950 md:text-5xl font-bold mb-4 sm:mb-6">
            We <span className="text-blue-500">Believe in</span>
          </h2>
          <p className="max-w-3xl mx-auto text-black text-sm sm:text-base md:text-xl">
            We believe innovation is more than just technology...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 max-w-6xl  mx-auto mb-10 sm:mb-16 px-6">
          {beliefCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              // viewport={{ amount: 0.3, once: false }}
              variants={cardVariants}
              // animate={controlsArr[i]}
              onHoverStart={() => handleHoverStart(i)}
              onHoverEnd={handleHoverEnd}
              // whileHover={{
              //   scale: 1.05,
              //   y: -6,
              //   boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
              // }}
              className="relative rounded-2xl p-8 text-center lg:mb-20 mb-2 border border-gray-100 hover:border-blue-500 duration-300"
            >
              {/* Blue gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-400"></div>

              {/* Icon */}
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg sm:text-xl text-black mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-black text-sm sm:text-base leading-relaxed ">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
      </section>
      {/*  */}
      <section className="relative z-10 py-20 px-6 bg-white mt-[-20px] lg:mt-[-160px] sm:mb-11 mb-8  md:mt-[-100px] text-blue-950 ">
        <motion.h2
          className="text-4xl font-bold mt-[-60px] text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Salesforce{" "}
          <span className="text-blue-500"> Consulting Leadership</span>
        </motion.h2>

        <motion.p
          className="text-lg text-center text-black max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We partner with global enterprises to unlock the full potential of
          Salesforce — aligning strategy, technology, and human experience to
          accelerate transformation.
        </motion.p>

        {/* Card Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: aboutimgnew2,
              title: "Global Salesforce Partner",
              desc: "Recognized for delivering scalable, enterprise-grade Salesforce transformations across industries.",
            },
            {
              img: aboutimgnew3,
              title: "Multi-Cloud Expertise",
              desc: "Deep specialization across Sales, Service, Marketing, Experience, and Industry Clouds.",
            },
            {
              img: aboutimgnew4,
              title: "Outcome-Driven Approach",
              desc: "Data-led strategies focused on measurable business impact, customer success, and ROI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Image Section */}
              <div className="h-40 w-full relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {item.title}
                </h3>
                <p className="text-black mb-6">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mt-[-90px] py-20 px-6 bg-white text-blue-950 text-center">
        <motion.h2
          className="text-4xl mt-[-30px] font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Salesforce <span className="text-blue-500">Domain Expertise</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg mb-16 text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our Salesforce-certified experts design and deploy tailored,
          high-performance solutions that optimize business operations, elevate
          CX, and drive sustainable growth.
        </motion.p>

        {/* 🧩 Domain Expertise Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {[
            {
              img: aboutimgnew5,
              title: "Sales & Service Transformation",
              subtitle: "Customer Engagement",
              desc: "Modernize customer engagement and service operations with intelligent workflows and AI-driven insights.",
            },
            {
              img: aboutimgnew6,
              title: "Experience & Marketing Automation",
              subtitle: "Personalized Campaigns",
              desc: "Create personalized, data-led campaigns across omni-channel touchpoints with seamless Salesforce integration.",
            },
            {
              img: aboutimgnew7,
              title: "AI-Powered Innovation",
              subtitle: "Next-Gen Intelligence",
              desc: "Leverage Einstein AI and advanced automation to deliver predictive insights, streamline workflows, and boost business agility.",
            },
            {
              img: aboutimgnew8,
              title: "Data, Analytics & Integration",
              subtitle: "Connected Intelligence",
              desc: "Harness the power of real-time data with robust API and AppExchange integrations across enterprise systems.",
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
                <h3 className="text-3xl font-bold text-[#032D60] mb-2">
                  {card.title}
                </h3>
                <h4 className="text-base font-semibold text-[#032D60] mb-4">
                  {card.subtitle}
                </h4>
                <p className="text-black">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <RequestForConsultation />
      <Footer />
    </div>
  );
};

export default Aboutus;
