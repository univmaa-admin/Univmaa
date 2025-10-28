import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { X, ArrowLeft, ArrowRight, Users } from "lucide-react";
import tourImg001 from "../assets/tourimg001.png";
import tourImg2 from "../assets/tourimg2.jpeg";
import tourImg4 from "../assets/tourimg4.jpeg";

import tourimgnew from "../assets/tourimgnew.webp";
import tourimgnew2 from "../assets/tourimgnew2.webp";
import tourimgnew3 from "../assets/tourimgnew3.png";
import tourimgnew4 from "../assets/tourimgnew4.webp";

import tourImg5 from "../assets/tourimg5.png";
import tourImg6 from "../assets/tourimg6.jpg";
import tourImg7 from "../assets/tourimg7.jpeg";
import tourImg9 from "../assets/tourimg9.png";
import tourimg01 from "../assets/tourimg01.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Extended Salesforce Tour Slides
const slides = [
  {
    title: "Welcome to the Salesforce World ",
    description:
      "Salesforce is the world’s #1 Customer Relationship Management (CRM) platform — trusted by over 150,000 organizations globally, including many Fortune 500 enterprises. But Salesforce is more than just a software platform — it’s a complete digital ecosystem that empowers businesses to innovate, automate, and connect with their customers in entirely new ways.\nFor professionals and freshers alike, Salesforce opens the door to endless opportunities.\nBy the end of this journey, you’ll discover how Salesforce is not only transforming businesses worldwide but also shaping the future of careers in cloud technology.",
    img: tourImg001,
    tooltips: {
      crm: "CRM stands for customer relationship management, which is a system for managing all of your company’s interactions with current and potential customers. The goal is simple: improve relationships to grow your business. CRM technology helps companies stay connected to customers, streamline processes and improve profitability.",
    },
  },

  {
    title: "What is Salesforce ? ",
    description: [
      "Salesforce is one of the fastest-growing technologies in the world. It is the worlds leading Cloud-based Customer Relationship Management ({{crm}}) platform.It helps companies manage interactions with their customers, automate business processes, and gain insights through analytics and AI.",
      "It offers various cloud products like Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, Health Cloud, Automotive Cloud, Education Cloud, and many more for industry-specific needs. Salesforce helps companies manage everything related to their customers — sales, marketing, and support — all in one place.",
    ],
    tooltips: {
      crm: "CRM stands for customer relationship management, which is a system for managing all of your company’s interactions with current and potential customers. The goal is simple: improve relationships to grow your business. CRM technology helps companies stay connected to customers, streamline processes and improve profitability.",
    },
    img: tourimg01,
  },
  {
    title: "Why Salesforce Matters ",
    description:
      "In today’s digital-first world, every organization strives to build stronger relationships with customers, streamline operations, and drive intelligent growth. Salesforce enables businesses to achieve exactly that — with unmatched innovation and scalability. As the #1 CRM platform for over a decade, it’s trusted across industries and powered by cutting-edge AI and automation. By learning Salesforce, you’re not just mastering a platform — you’re becoming part of a global ecosystem that empowers businesses and individuals alike to innovate, connect, and succeed in the digital era.",
    img: tourImg2,
  },

  {
    title: "The Salesforce Ecosystem ",
    description:
      "The Salesforce Ecosystem is a powerful global community of customers, partners, developers, and innovators working together to shape the future of business. It extends far beyond a single platform — connecting people, technology, and industries to drive digital transformation worldwide. Built on trust, scalability, and AI-driven innovation, this ecosystem enables organizations to deliver seamless, data-driven, and personalized customer experiences.\n With over 150,000 organizations and millions of professionals contributing to its growth, Salesforce fosters continuous learning, collaboration, and innovation.",
    img: tourImg4,
  },

  {
    title: "Career Paths in Salesforce ",
    description: (
      <span>
        Salesforce offers diverse career opportunities for both technical and
        non-technical professionals. Roles include: <br />
        <b>Salesforce Administrator</b> – manages users, automations, and system
        configurations.
        <br />
        <b>Salesforce Developer</b> – builds custom applications using Apex,
        LWC, and integrations.
        <br />
        <b>Salesforce Consultant</b> – translates business needs into effective
        Salesforce solutions.
        <br />
        <b>Salesforce Architect</b> – designs scalable, enterprise-grade system
        architectures.
        <br />
        <b>Business Analyst & Project Manager</b> – bridges the gap between
        business and technology teams.
      </span>
    ),
    img: tourImg5,
  },

  {
    title: "Why Now Is The Best Time ",
    description:
      "The demand for Salesforce professionals is growing faster than ever across all industries.Over 9 million new Salesforce jobs are projected to be created by 2026 worldwide.Businesses are rapidly moving to the cloud and AI-powered CRM platforms.Salesforce’s continuous innovation in AI, Data, and Automation is shaping the future of work.A strong community, accessible learning paths, and global certifications make it easier than ever to start.\nWhether you’re a fresher or an experienced professional, this is the perfect time to enter the ecosystem.\nBegin now and position yourself for a high-demand, future-proof career in cloud technology.",
    img: tourImg6,
  },
  {
    title: "Why Join Us ",
    description:
      "At our Salesforce program, we don’t just provide training — we transform careers through real-world experience and expert guidance.\n✅ Personalized Mentorship from certified Salesforce professionals and industry leaders.\n✅ Hands-on Internships with live projects to build practical, job-ready skills.\n✅ Cross-Skilling Opportunities for IT and non-IT professionals to transition into Salesforce roles.\n✅ Comprehensive Certification Guidance for Salesforce Administrator and Developer paths.\n✅ Career Support & Placement Assistance with top MNCs and trusted partner companies.",
    img: tourImg7,
  },

  {
    title: "Your Salesforce Career Starts Here",
    description: (
      <span>
        Imagine launching your career in one of the world’s most in-demand
        technologies.
        <br />
        In <b>3 months</b>, you’ll master essential Salesforce skills. <br /> In{" "}
        <b>6 months</b>, you’ll be ready to contribute to real-world projects.
        And <b>within a year</b>, you could be part of the global Salesforce
        workforce driving digital transformation.
        <br />
        All it takes is a decision today — we’ll provide the right platform,
        mentorship, and opportunities to help you succeed.Are you ready to begin
        your journey into the future of cloud technology?
      </span>
    ),
    img: tourImg9,
    isFinal: true,
  },
];

export default function SalesforceTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const nextSlide = () => setStep((s) => Math.min(s + 1, slides.length - 1));
  const prevSlide = () => setStep((s) => Math.max(s - 1, 0));
  const roles = [
    "Fresher 👩‍🎓",
    "Salesforce Admin 👨‍💻",
    "Developer 💻",
    "Consultant 🧑‍🏫",
    "Architect 🏗",
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    passout: "",
    resume: null,
  });

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  // Handle Web3Forms form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      // <-- replace with your own Web3Forms access_key if needed
      data.append("access_key", "a658a2c1-720d-4ddf-875a-07a7c955d2ec");
      data.append("subject", "New Job Application - Univmaa");
      data.append("from_name", form.name || "");
      data.append("name", form.name || "");
      data.append("email", form.email || "");
      data.append("phone", form.phone || "");
      data.append("address", form.address || "");
      data.append("education", form.education || "");
      data.append("skills", form.skills || "");
      data.append("year of passout", form.passout || "");
      data.append(
        "message",
        `New job application from ${form.name || "Unknown"}. Skills: ${
          form.skills || "N/A"
        }`
      );

      if (form.resume) {
        // Web3Forms accepts attachments[] for files
        data.append("attachments[]", form.resume);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      console.log("data=========>>" + data);

      const result = await response.json();
      // console.log("Web3Forms result", result);

      if (result.success) {
        setSuccess(true);
        setShowModal(false);

        // WhatsApp notification to owner (replace phoneNumber as needed)
        const phoneNumber = "918904466684";

        // Build professional message with line breaks
        const msg = `📩 *New Job Application Received*

        -> *Name:* ${form.name}
        -> *Email:* ${form.email}
        -> *Phone:* ${form.phone}
        -> *Address:* ${form.address}
        -> *Education:* ${form.education}
        -> *Skills:* ${form.skills}
        -> *Year Of Passout:* ${form.passout}
        
        Please check your email for full details.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          msg
        )}`;
        window.open(url, "_blank");

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          education: "",
          skills: "",
          passout: "",
          resume: null,
        });

        // hide success after a few seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error submitting form. Check console for details.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="relative  overflow-x-hidden">
        <div className="relative h-screen flex items-center justify-start overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 lg:h-screen md:h-screen  lg:bg-cover md:bg-cover bg-fixed sm:bg-center md:bg-right bg-no-repeat"
            style={{
              backgroundImage: `url(${tourimgnew})`,
              backgroundPosition: "top center",
            }}
          ></div>

          {/* Left-to-right gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001233]/95 via-[#001233]/60 to-transparent"></div>

          {/* Content section aligned left */}
          <div className="relative z-10 max-w-3xl pl-12 md:pl-24 text-left text-white">
            <img
              src={tourimg01}
              alt="Salesforce"
              className="w-48 mb-6 drop-shadow-lg"
            />

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Build Your Future with
              <span className="text-blue-400"> Salesforce</span>.
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Whether you are a fresher or an experienced IT professional,
              Salesforce offers endless opportunities to grow your career.
              Learn, build, and transform your future with us.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            >
              Take a Tour
            </button>
          </div>
        </div>
        {/*  */}
        <section
          className="relative py-24 px-6 overflow-hidden  bg-no-repeat bg-bottom lg:h-[800px] bg-gradient-to-b from-white to-blue-50"
          style={{
            backgroundImage: `url(${tourimgnew2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
          }}
        >
          <div className="absolute inset-0 bg-white/25 backdrop-blur-[1px]"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Heading */}
            <motion.h2
              className="text-4xl font-bold text-center mt-[-50px] mb-4 md:mt-[-30px] text-blue-950"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empowering the Next Generation of{" "}
              <span className="text-blue-500">Salesforce Talent</span>
            </motion.h2>

            <motion.p
              className="text-lg text-center text-black max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Step into the world of Salesforce innovation. Join a consulting
              company that believes in empowering fresh minds to build smarter,
              connected businesses through technology and creativity.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "🎓",
                  title: "Learn from Real Projects",
                  desc: "Gain hands-on experience through enterprise-grade Salesforce projects guided by certified experts.",
                },
                {
                  icon: "🚀",
                  title: "Accelerate Your Growth",
                  desc: "Our structured learning and mentorship framework helps you grow from trainee to Salesforce professional faster.",
                },
                {
                  icon: "🌍",
                  title: "Be Part of a Global Ecosystem",
                  desc: "Collaborate with consultants and clients across industries, solving real business challenges worldwide.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative bg-white rounded-2xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Teal border strip like the reference image */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-400 rounded-t-2xl"></div>

                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-black">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Why choose Univmaa */}
        <section className="relative z-10 py-20 md:mt-[-90px]  px-6  text-gray-900 overflow-hidden">
          {/* Background blur or light texture (optional) */}
          <div
            className="absolute inset-0  opacity-10"
            style={{
              backgroundImage: `url(${tourimgnew3})`,
            }}
          ></div>

          <motion.h2
            className="text-4xl font-bold text-center text-blue-950 md:mt-[-40px] mt-[-60px] mb-6 relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us to Start Your{" "}
            <span className="text-blue-500"> Salesforce Career</span>
          </motion.h2>

          <motion.p
            className="text-lg text-center text-black max-w-3xl mx-auto mb-16 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We don’t just hire talent — we invest in people. Join a company that
            values innovation, mentorship, and continuous growth.
          </motion.p>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌱",
                title: "Continuous Learning",
                desc: "Access structured learning paths, Salesforce certifications, and leadership workshops.",
                color: "from-green-400 to-green-600",
              },
              {
                icon: "🤝",
                title: "Collaborative Culture",
                desc: "Work alongside supportive mentors and teammates who help you thrive from day one.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: "💡",
                title: "Innovation Projects",
                desc: "Be part of digital transformation journeys that redefine industries and customer experiences.",
                color: "from-purple-400 to-indigo-600",
              },
              {
                icon: "🎯",
                title: "Fast-Track Growth",
                desc: "Accelerate your career through recognition, performance-driven growth, and real impact.",
                color: "from-pink-400 to-rose-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg backdrop-blur-md bg-white/60 border border-white/30 transition-transform duration-300 hover:-translate-y-3"
              >
                {/* Gradient top strip */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-black mb-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Why Join Our Saesforce Pratice */}

        <section className="relative z-20 py-24 px-6 h-[1250px] ">
          {/* Decorative gradient orbs */}

          <motion.h2
            className="text-4xl font-bold text-blue-950 text-center mt-[-100px] md:mt-[-90px] mb-6 relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Join Our{" "}
            <span className="text-blue-500">
              Salesforce Consulting Practice
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-center text-black max-w-3xl mx-auto mb-16 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We are more than a consulting firm — we are a launchpad for talent
            that blends curiosity, innovation, and execution excellence. Joining
            us means becoming part of a culture that values growth, diversity,
            and real impact.
          </motion.p>

          {/* Timeline Path */}
          <div className="relative max-w-6xl mx-auto mt-12 px-4">
            {/* Vertical Connector Line */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500 transform -translate-x-1/2 hidden md:block"></div>

            {[
              {
                title: "Global Project Exposure",
                desc: "Work with leading enterprises across regions — learning international consulting practices and delivery standards.",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Innovation Labs",
                desc: "Contribute to building accelerators, reusable frameworks, and AI-driven Salesforce solutions.",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Mentorship & Community",
                desc: "Grow under the mentorship of senior consultants while networking with Salesforce Trailblazers worldwide.",
                color: "from-purple-400 to-indigo-600",
              },
              {
                title: "Purpose-Driven Growth",
                desc: "Thrive in an environment that rewards learning, creativity, and client success.",
                color: "from-pink-400 to-rose-600",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center mb-20 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Card */}
                <div
                  className={`relative lg:max-w-xl md:max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    i % 2 === 0
                      ? "md:ml-auto md:text-left md:pr-10"
                      : "md:mr-auto md:text-left md:pl-10"
                  }`}
                >
                  {/* Gradient Bar on Top */}
                  <div
                    className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${step.color}`}
                  ></div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🗺 Your First 100 Days */}
        <div className="relative mb-[-80px] lg:mb-4  md:mb-[-90px]  md:mt-[-70px] lg:mt-[-120px] mt-56 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mt-[-30px] text-blue-950 mb-12">
            Your First 100{" "}
            <span className="text-blue-500">Days in Salesforce</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Days 1-30: Learn basics of Salesforce & Admin skills",
              "Days 31-60: Hands-on projects + workflows & automation",
              "Days 61-90: Prepare & attempt Salesforce Admin Certification",
              "Days 91-100: Placement readiness & mock interviews 🚀",
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600"
              >
                <p className="text-lg">{milestone}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌈 Call to Action Section */}

        <motion.section
          className="relative px-6 md:px-20 py-20 text-center
          bg-no-repeat bg-contain bg-bottom md:bg-contain md:bg-bottom lg:bg-cover
          overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            backgroundImage: `url(${tourimgnew4})`,
          }}
        >
          {/* Transparent white box with shadow */}
          <div className="relative z-10   lg:max-w-2xl lg:ms-[260px] lg:mt-[-20px]  mx-auto backdrop-blur-0 shadow-2xl rounded-2xl p-4">
            <motion.h2
              variants={zoomIn}
              className=" md:text-4xl text-xl font-bold mb-6 text-black"
            >
              Ready to Build Your Salesforce Career?
            </motion.h2>

            <motion.p
              variants={zoomIn}
              className="text-black max-w-2xl md:mt-2 mt-[-20px] mx-auto mb-10"
            >
              Don’t just look for a job. Build a career with impact. Let’s grow
              together at Univmaa.
            </motion.p>

            <motion.button
              onClick={() => setFormOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 mt-[-90px] sm:py-4 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white font-bold 
                 rounded-lg sm:rounded-xl shadow-md  transition 
                 text-sm sm:text-base"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.section>

        <AnimatePresence>
          {formOpen && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-slate-200  text-black rounded-2xl h-[600px] mt-16 shadow-xl w-[90%] max-w-lg p-4 relative"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close */}
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute top-3 right-3 text-black hover:text-red-700"
                >
                  <X size={28} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6">
                  Submit Your Application
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-gray-300   text-[8px]"
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px] border  border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Education"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.education}
                    onChange={(e) =>
                      setForm({ ...form, education: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Skills"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.skills}
                    onChange={(e) =>
                      setForm({ ...form, skills: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Years of Passout"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                    required
                    value={form.passout}
                    onChange={(e) =>
                      setForm({ ...form, passout: e.target.value })
                    }
                  />
                  <input
                    type="url"
                    value={form.resume}
                    placeholder="Resume Link (Google Drive/Dropbox/OneDrive)"
                    className="w-full px-4 py-3 rounded-lg border placeholder-black text-[12px] border-gray-700 text-gray-400"
                    required
                    onChange={(e) =>
                      setForm({ ...form, resume: e.target.value })
                    }
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white text-sm rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Submit Application →
                  </button>
                </form>
                {success && (
                  <p className="mt-4 text-center text-green-400 font-semibold">
                    {success}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* 🔹 Salesforce Tour Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={step}
                className="bg-white rounded-2xl shadow-xl sm:w-[95%] max-w-5xl relative 
                 overflow-hidden max-h-[70vh] sm:max-h-[80vh] overflow-y-auto"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 text-gray-600 hover:text-black z-10"
                >
                  <X size={28} />
                </button>

                {/* Slide Content */}
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-8 pt-12 sm:pt-8">
                  {/* Image Section */}
                  <motion.img
                    key={slides[step].img}
                    src={slides[step].img}
                    alt="slide"
                    loading="eager"
                    className="md:w-1/2 rounded-xl object-contain max-h-36 sm:max-h-96 mx-auto"
                  />

                  {/* Text Section */}
                  <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-blue-700 mb-2 sm:mb-4">
                      {slides[step].title}
                    </h2>

                    <div className="text-black text-start whitespace-pre-line text-sm sm:text-lg leading-relaxed">
                      {Array.isArray(slides[step].description)
                        ? slides[step].description.map((line, i) => (
                            <p key={i} className="mb-2">
                              {line.split(/(\{\{.+?\}\})/g).map((part, j) => {
                                const match = part.match(/^\{\{(.+?)\}\}$/);
                                if (match) {
                                  const key = match[1].trim();
                                  const tooltip = slides[step].tooltips?.[key];
                                  return tooltip ? (
                                    <span
                                      key={j}
                                      className="relative group cursor-help text-blue-600"
                                    >
                                      {key.toUpperCase()}
                                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-blue-500 text-white text-xs rounded-md px-3 py-2 w-max max-w-xs z-50">
                                        {tooltip}
                                      </span>
                                    </span>
                                  ) : (
                                    <span key={j}>{part}</span>
                                  );
                                }
                                return part;
                              })}
                            </p>
                          ))
                        : slides[step].description}
                    </div>

                    {/* Final Slide CTA */}
                    {slides[step].isFinal && (
                      <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
                        <button
                          onClick={() => {
                            setOpen(false);
                            setFormOpen(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition text-sm sm:text-lg w-auto"
                        >
                          <Users size={20} /> Apply as Intern
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 gap-3 sm:gap-0">
                  {/* On mobile: Back & Next side by side */}
                  <div className="flex w-full sm:w-[930px] justify-center  sm:justify-center gap-2 order-2 sm:order-1">
                    <button
                      onClick={prevSlide}
                      disabled={step === 0}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm sm:text-base ${
                        step === 0
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white"
                      }`}
                    >
                      <ArrowLeft size={16} /> Back
                    </button>

                    <button
                      onClick={nextSlide}
                      disabled={step === slides.length - 1}
                      className={`flex items-center gap-2 px-3 py-2  rounded-lg text-sm sm:text-base ${
                        step === slides.length - 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white"
                      }`}
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Step Indicator stays centered on mobile */}
                  <p className="text-gray-600 text-sm sm:text-base order-1 sm:order-2">
                    {step + 1} / {slides.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
