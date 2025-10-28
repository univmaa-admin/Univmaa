import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  UserPlus,
  Lightbulb,
  Award,
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Globe,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Star,
  Plus,
  Minus,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

import careersimgnew from "../assets/careersimgnew.avif";
import careersimgnew2 from "../assets/careersimgnew2.webp";
import careersimgnew3 from "../assets/careersimgnew3.webp";
import careersimgnew4 from "../assets/careersimgnew4.webp";
import careersimgnew5 from "../assets/careersimgnew5.webp";
import careersimgnew6 from "../assets/careersimgnew6.webp";
import careersimgnew7 from "../assets/careersimgnew7.webp";
import careersimgnew8 from "../assets/careersimgnew8.webp";
import careersimgnew9 from "../assets/careersimgnew9.jpg";
import careersimgnew10 from "../assets/careersimgnew10.webp";
import careersimgnew11 from "../assets/careersimgnew11.webp";
import careersimgnew12 from "../assets/careersimgnew12.webp";

// ------------------- Animation variants -------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function CareerPortal() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [faqIndex, setFaqIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

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

  // ------------------- Data: jobs, perks, values, journey, faqs -------------------
  const jobs = [
    {
      title: " Senior Salesforce Developer",
      location: "Bangalore, India",
      type: "Full-time",
      Description:
        "Join our innovative team to work on dynamic Salesforce projects! We are seeking a skilled Salesforce Developer with a solid background in programming, database management, and web application development. This role is ideal for someone who thrives in a fast-paced environment and is looking to leverage their technical skills to make a substantial impact.",
      Responsibilities:
        "Design, develop, and implement customized Salesforce solutions – Write robust code and database queries to support web application development – Manage Salesforce roles, profiles, sharing rules, workflows, and groups. – Implement system integrations that leverage Salesforce APIs. – Maintain and enhance existing Salesforce applications and ensure optimal performance. – Participate in the planning of application changes, development, and installation of upgrades and new releases. – Collaborate with team members on various development projects and ensure solutions meet business requirements and best practices.",
      Skills:
        "Excellent problem-solving skills and attention to detail. – Strong communication and interpersonal skills. – Ability to work independently and in a team-oriented, collaborative environment. – Good knowledge of Salesforce administration, customization, enhancement, and integration.",
    },
    {
      title: "Salesforce Developer Trainee ",
      location: "Hyderabad, India",
      type: "Full-time",
      Description:
        "Kickstart your career with our Salesforce team! We are looking for enthusiastic Salesforce Developer Trainees who are eager to learn and grow in the dynamic world of Salesforce development and administration. This role is ideal for fresh graduates or entry-level professionals with a passion for technology, programming, and CRM solutions. You will receive hands-on training, mentorship, and the opportunity to work on real-time projects to build a strong foundation in Salesforce.",
      Responsibilities:
        "Assist in the design, development, and customization of Salesforce applications.Write and maintain code, database queries, and workflows under the guidance of senior developers.Participate in training sessions and workshops to enhance Salesforce knowledge and skills.Collaborate with team members on various development projects and learn best practices.Provide support in testing and debugging Salesforce applications.",
      Skills:
        "Basic understanding of programming concepts and languages (e.g., Java, JavaScript, Apex), Familiarity with databases and web application basics is a plus, Strong problem-solving attitude and willingness to learn, Good communication and teamwork skills, Ability to adapt quickly and take initiative in a fast-paced environment, Knowledge of Salesforce basics (Trailhead modules or certifications) will be an added advantage.",
    },
    {
      title: "Salesforce Consultant",
      location: "Remote",
      type: "Contract",
      Description:
        "We are seeking an experienced Salesforce Consultant to join our team on a contract basis. As a Salesforce Consultant, you will collaborate with clients to analyze business needs, design scalable Salesforce solutions, and ensure successful implementation of CRM strategies. This role is ideal for professionals who have strong expertise in Salesforce configuration, customization, and stakeholder management.",
      Responsibilities:
        "Work closely with clients to gather requirements and translate them into effective Salesforce solutions. Configure and customize Salesforce to meet business objectives. Provide expert guidance on Salesforce best practices and industry standards. Collaborate with developers, administrators, and project managers to deliver high-quality solutions. Support testing, training, and deployment of Salesforce projects. Ensure ongoing system improvements and troubleshoot issues as needed.",
      Skills:
        "Proven experience as a Salesforce Consultant or similar role, Strong knowledge of Salesforce Sales Cloud, Service Cloud, or other relevant clouds, Ability to design and implement business workflows, reports, and dashboards, Excellent communication and client-facing skills, Salesforce certifications (Administrator, Consultant, or Developer) preferred, Strong problem-solving and analytical skills, Ability to work independently in a remote environment.",
    },
  ];

  const perks = [
    {
      icon: <Users className="w-8 h-8 text-sky-400" />,
      title: "Collaborative Culture",
      desc: "Work with passionate people who inspire innovation and growth.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Opportunities",
      desc: "Be part of projects that make an impact worldwide.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
      title: "Learning & Growth",
      desc: "Access training, mentorship, and career development programs.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-green-400" />,
      title: "Diversity & Inclusion",
      desc: "Celebrate differences and create a workplace where everyone belongs.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-400" />,
      title: "Continuous Learning",
      desc: "Get sponsored certifications, e-learning access, and workshops.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Recognition",
      desc: "Celebrate success through awards and employee appreciation programs.",
    },
  ];

  // Culture hexagon (the hex icons above dark rects)
  const cultureValues = [
    {
      icon: <Users className="w-10 h-10 text-sky-600" />,
      title: "Teamwork",
      description:
        "We embrace collaboration and honor the strengths of each team member .",
    },
    {
      icon: <UserPlus className="w-10 h-10 text-sky-600" />,
      title: "Inclusivity",
      description:
        "We support a workplace where diverse perspectives and identities are welcome and respected.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-sky-600" />,
      title: "Innovation",
      description:
        "We aggressively challenge the status quo and foster creativity.",
    },
    {
      icon: <Award className="w-10 h-10 text-sky-600" />,
      title: "Excellence",
      description:
        "We strive to deliver the highest value to our clients and colleagues.",
    },
  ];

  // Gradient value cards used later (distinct from culture hex shapes)
  const gradientValues = [
    {
      title: "Integrity",
      desc: "We act with honesty and fairness.",
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Innovation",
      desc: "We push boundaries to create new possibilities.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Collaboration",
      desc: "We achieve more together.",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Excellence",
      desc: "We deliver quality in everything we do.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const journey = [
    { stage: "Onboarding", desc: "Start strong with training and mentorship." },
    {
      stage: "Skill Building",
      desc: "Grow with certifications and workshops.",
    },
    { stage: "Leadership", desc: "Take ownership and lead teams/projects." },
    { stage: "Impact", desc: "Drive change with global contributions." },
  ];

  const faqs = [
    {
      q: "How do I apply for a job at Univmaa?",
      a: "Click on 'Apply Now' in the Opportunities section. You can submit your resume directly through our portal.",
    },
    {
      q: "What does the interview process look like?",
      a: "Our process usually involves an HR screening, a technical/functional interview, and a culture fit round.",
    },
    {
      q: "Does Univmaa support remote work?",
      a: "Yes! Many roles are hybrid or remote depending on the business needs and project requirements.",
    },
    {
      q: "Can I apply for multiple roles?",
      a: "Yes! You can apply to all roles that match your skills and interests.",
    },
    {
      q: "Will I get feedback if rejected?",
      a: "We do our best to share constructive feedback whenever possible to support candidates in improving for future opportunities.",
    },
  ];

  const benefits = [
    {
      icon: <span className="text-black text-2xl">💰</span>,
      title: "Competitive compensation",
      description:
        "including offering attractive base salaries, potential annual incentive bonuses, and referral bonuses for introducing new talent to our firm.",
    },
    {
      icon: <span className="text-black text-2xl">👥</span>,
      title: "Comprehensive suite of employee benefits",
      description:
        "such as medical, dental, vision, paid time off, parental leave, back-up childcare, and more.",
    },
    {
      icon: <span className="text-black text-2xl">⏳</span>,
      title: "Future enhancing investment opportunities",
      description: "including retirement plans and financial planning support.",
    },
    {
      icon: <span className="text-black text-2xl">💻</span>,
      title: "Hybrid working model",
      description: "that blends time spent in-office, remote, and on-the-go.",
    },
  ];

  // ------------------- Handle form submit (Web3Forms) -------------------
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

  // ------------------- JSX -------------------
  return (
    <>
      <Navbar />
      <div className="text-white overflow-x-hidden">
        {/* Success Toast */}
        {success && (
          <div className="fixed top-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow z-50">
            ✅ Your application has been submitted successfully!
          </div>
        )}

        {/* ---------------- HERO (video background) ---------------- */}
        <motion.section
          className="relative h-screen flex items-center justify-center text-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={zoomIn}
        >
          {/* background video */}
          <div
            className="absolute inset-0 bg-no-repeat lg:bg-cover md:bg-cover md:bg-center bg-center z-0"
            style={{
              backgroundImage: `url(${careersimgnew})`,
              backgroundAttachment: "fixed",
            }}
          ></div>

          {/* overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* content */}
          <div className="relative z-10 px-6">
            <motion.h1
              variants={fadeInUp}
              custom={0}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Your Career at <span className="text-sky-400">Univmaa</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-white font-bold text-xl max-w-3xl mx-auto mb-8"
            >
              At Univmaa, we don’t just offer jobs — we build careers with
              purpose. Joining our team means being part of a culture that
              values innovation, collaboration and continuous learning.
            </motion.p>
            <motion.div variants={fadeInUp} custom={2}>
              <button
                onClick={() => {
                  navigate("/salesforcetour");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
                whileHover={{ scale: 1.03 }}
                className="px-8 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white  rounded-lg font-semibold shadow-lg hover:opacity-95 transition"
              >
                Take a Tour →
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------------- CAREERS BANNER (blue background with left text and right hex image) ---------------- */}
        <section
          className="relative w-full overflow-hidden bg-white
           md:h-[650px]
          "
          style={{
            backgroundImage: `url(${careersimgnew2})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay for professional polish */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/90 to-transparent z-[1]"></div>

          <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28 z-[2]">
            {/* Left section */}
            <div className="relative flex flex-col justify-center w-full md:w-1/2 text-center md:text-left space-y-6">
              {/* Einstein image */}
              {/* <img
                src={einsteinImg}
                alt="Einstein mascot"
                className="absolute -left-8 -bottom-6 w-28 sm:w-36 md:w-44 lg:w-52 object-contain drop-shadow-xl"
              /> */}

              {/* Text block */}
              <div className="relative z-10 md:left-2  lg:pl-44 md:w-[400px] lg:w-[800px]">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-blue-950 leading-tight">
                  Our people power the future of{" "}
                  <span className="text-blue-500">connected wealth.</span>
                </h2>

                <p className="text-black text-base sm:text-lg leading-relaxed md:mt-4 max-w-lg mx-auto md:mx-0">
                  We help clients solve their most demanding challenges and
                  improve the financial wellbeing of millions of investors. Our
                  success is driven by investing in the brightest minds in the
                  business. The future is full of possibilities—join us and help
                  shape it.
                </p>

                <div className="pt-6">
                  <a
                    href="#open-positions"
                    className="inline-flex items-center gap-2 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white  font-semibold px-6 py-3 rounded-md shadow-md hover:scale-[1.03] transition-all duration-300"
                  >
                    VIEW OPEN POSITIONS <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right hex image */}
            {/* Wrapper (acts as blue border) */}
            <div className="flex justify-center md:justify-end md:ms-20 w-full md:w-1/2 mb-12 md:mb-0">
              <div className="relative w-64 h-64 sm:w-72 md:h-64 sm:h-72 lg:mt-32 md:mt md:w-64  lg:w-[320px] lg:h-[300px] group">
                {/* ✅ Outer border (blue frame) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl"></div>

                {/* ✅ Inner image slightly inset */}
                <div className="absolute inset-[5px] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                  <img
                    src={careersimgnew9}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-[1]"></div>
        </section>

        {/* ---------------- Culture & Values (hexagon icons above rectangles) ---------------- */}

        <section
          className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-blue-50"
          style={{
            backgroundImage: `url(${careersimgnew3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
          }}
        >
          <div className="max-w-7xl mx-auto md:mt-[-90px] mt-[-80px] text-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center  justify-center mb-12"
            >
              <div className="h-[2px] w-16  bg-blue-400" />
              <h2 className="mx-6 text-3xl md:text-4xl font-bold text-blue-950 tracking-tight">
                Our <span className="text-blue-500">Culture and Values</span>
              </h2>
              <div className="h-[2px] w-16 bg-blue-400" />
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
              {cultureValues.map((val, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="flex flex-col pt-6 md:pt-14 items-center"
                >
                  <div className="relative w-full group">
                    {/* Hexagon with hover effect */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-transparent md:pb-8  border border-gray-200 shadow-md flex items-center justify-center rounded-2xl group-hover:scale-105 transition-transform duration-300">
                      {val.icon}
                    </div>

                    {/* Card */}
                    <div className="bg-transparent border border-gray-200 rounded-2xl shadow-2xl p-6 pt-16 min-h-[230px] flex flex-col items-center justify-start transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                      <h3 className="text-lg font-semibold mb-3 text-black">
                        {val.title}
                      </h3>
                      <p className=" text-black text-lg leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------Our Benefits--------------------------- */}

        <section
          className="bg-white md:h-[750px]  py-20 px-6"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
            backgroundImage: `url(${careersimgnew4})`,
          }}
        >
          <div className="max-w-6xl mx-auto text-center mt-[-60px]">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-[1px] w-16 bg-gray-400 " />
              <h2 className="mx-6 text-3xl md:text-4xl font-semibold text-blue-950 ">
                Our <span className="text-blue-500">Benefits</span>
              </h2>
              <div className="h-[1px] w-16 bg-gray-400"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black md:text-xl max-w-4xl mx-auto mb-14"
            >
              The forward-thinking compensation and benefits programs we offer
              help our people maximize well-being, work-life balance, income,
              and savings for the future. Because we know that in a healthy
              environment, people thrive.
            </motion.p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start rounded-2xl gap-5 p-2 shadow-2xl bg-transparent"
                >
                  {/* Hexagon icon */}
                  <div className="clip-hex w-16 h-16 bg-transparent flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg text-black">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hexagon Shape */}
          <style jsx>{`
            .clip-hex {
              clip-path: polygon(
                25% 5%,
                75% 5%,
                100% 50%,
                75% 95%,
                25% 95%,
                0% 50%
              );
            }
          `}</style>
        </section>

        {/* ---------------- A Day in the Life (timeline) ---------------- */}
        <motion.section
          className="relative overflow-hidden px-6 md:px-20 py-20 text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* ✅ Section Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${careersimgnew5})`,
              backgroundAttachment: "fixed",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          ></div>

          {/* ✅ Soft overlay to make text readable */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0"></div>

          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold mb-14 text-blue-950 relative z-10"
          >
            Why <span className="text-blue-500">Work With Us?</span>
          </motion.h2>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {perks.map((perk, i) => {
              // ✅ Dynamic card background images
              const bgImages = [
                careersimgnew10,
                careersimgnew11,
                careersimgnew12,
              ];
              const bgImage = bgImages[i % bgImages.length];

              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="relative backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03]"
                >
                  {/* ✅ Card Background Image */}
                  <div
                    className="absolute inset-0  bg-no-repeat bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImage})` }}
                  ></div>

                  {/* ✅ Card overlay for readability */}
                  <div className="absolute inset-0 bg-transparent"></div>

                  {/* ✅ Card content */}
                  <div className="relative flex flex-col justify-between h-full">
                    {/* Top: icon + heading */}
                    <div className="p-8 border-b border-gray-100">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full  text-white text-2xl shadow-lg mb-4">
                        {perk.icon}
                      </div>
                      <h3 className="text-3xl font-extrabold text-[#0B1739] mb-1">
                        {perk.percent}
                      </h3>
                      <h4 className="text-lg font-semibold text-[#0B1739]">
                        {perk.title}
                      </h4>
                    </div>

                    {/* Bottom: description */}
                    <div className="p-6 text-black text-sm leading-relaxed">
                      {perk.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ---------------- Opportunities (jobs list) ---------------- */}
        <motion.section
          className="px-6 md:px-20 mt-20 md:mt-[-15px] py-20  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            backgroundImage: `
      url(${careersimgnew6})
    `,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.h2
            variants={zoomIn}
            className="text-3xl md:text-4xl font-bold md:mt-[-60px] mt-[-100px] text-center lg:mt-[-50px] mb-12 text-black"
            id="open-positions"
          >
            Current <span className="text-blue-500">Opportunities</span>
          </motion.h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-transparent rounded-lg shadow-lg overflow-hidden border sm:hover:border-blue-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-transparent transition"
                >
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-black">
                      <Briefcase className="w-5 h-5 text-sky-400" />
                      {job.title}
                    </h3>
                    <p className="text-sm text-black flex gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-sky-400 transform transition-transform ${
                      openIndex === i ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <h4 className="text-black font-semibold mb-2">
                    Description:
                  </h4>
                  <p className="text-black py-4">{job.Description}</p>

                  {job.Responsibilities && (
                    <>
                      <h4 className="text-black font-semibold mb-2">
                        Responsibilities:
                      </h4>
                      <p className="text-black mb-4">{job.Responsibilities}</p>
                    </>
                  )}

                  {job.Skills && (
                    <>
                      <h4 className="text-black font-semibold mb-2">
                        Skills & Qualifications:
                      </h4>
                      <p className="text-black mb-4">{job.Skills}</p>
                    </>
                  )}
                  <button
                    onClick={() => {
                      navigate("/apply");
                      window.scrollTo(0, 0); // 👈 reset scroll
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="inline-block mb-6 px-5 py-2 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white rounded-md font-semibold shadow hover:opacity-90 transition"
                  >
                    Apply Now →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------------- FAQs ---------------- */}
        <motion.section
          className="px-6 md:px-20 md:mt-[-64px] md:mb-[-30px] py-20 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInRight}
            className="text-3xl md:text-4xl font-bold text-center mb-6 mt-[-40px]  text-black"
          >
            Candidate <span className="text-blue-500"> FAQs</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className=" rounded-lg shadow-md"
              >
                <button
                  onClick={() => setFaqIndex(faqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between hover:bg-blue-500 hover:text-white px-6 py-4 font-medium text-left text-black"
                >
                  {faq.q}
                  {faqIndex === i ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-black" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    faqIndex === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="text-black  pb-4">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* ---------------- CTA ---------------- */}

        <motion.section
          className="
                          relative
                          px-6 md:px-20 py-20 text-center
                          bg-no-repeat bg-contain bg-bottom
                          md:bg-contain md:bg-bottom lg:bg-cover
                          overflow-hidden
                                          "
          style={{
            backgroundImage: `url(${careersimgnew8})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Transparent white box with shadow */}
          <div className="relative z-10  lg:max-w-2xl lg:ms-[260px] lg:mt-[-20px] mx-auto backdrop-blur-0 shadow-2xl rounded-2xl p-8">
            <motion.h2
              variants={zoomIn}
              className="text-3xl md:text-4xl font-bold mb-6 text-black"
            >
              Ready to Shape the Future with Us?
            </motion.h2>

            <motion.p
              variants={zoomIn}
              className="text-black max-w-2xl mx-auto mb-10"
            >
              Don’t just look for a job. Build a career with impact. Let’s grow
              together at Univmaa.
            </motion.p>

            <motion.button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white rounded-lg font-semibold shadow-lg transition"
            >
              Apply Now →
            </motion.button>
          </div>
        </motion.section>

        {/* ---------------- Modal (Apply) ---------------- */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-slate-200 text-[9px] text-white rounded-2xl mt-16 shadow-xl w-[90%] max-w-lg p-4 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-center mb-4 text-black">
                Submit Your Application
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-gray-300"
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 placeholder-black text-[12px] rounded-lg border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Education"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.education}
                  onChange={(e) =>
                    setForm({ ...form, education: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Skills"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Years of Passout"
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
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
                  className="w-full px-4 py-3 rounded-lg placeholder-black text-[12px]  border border-gray-700  focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  onChange={(e) => setForm({ ...form, resume: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white text-sm rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Submit Application →
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- Hexagon clip styles ---------------- */}
        <style>{`
        /* small hex (icons) */
        .clip-hex {
          clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
        }
        /* larger hex for hero/careers image */
        .clip-hex-large {
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          border-radius: 12px; /* soft rounding for the corners */
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
}
