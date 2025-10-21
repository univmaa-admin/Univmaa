import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, Rocket, Award } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import applyImg from "../assets/applyimg.jpg";
import apply1 from "../assets/apply1.jpeg";
import apply2 from "../assets/apply2.jpg";
import apply3 from "../assets/apply3.jpg";
// import more images if needed
import { X } from "lucide-react";
import RequestForConsultation from "../components/RequestForConsultation";

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
export default function ApplicationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    jobCategory: "",
    experience: "",
    country: "",
    state: "",
    city: "",
    location: "",
    zip: "",
    resumeLink: "",
    reference: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("access_key", "a658a2c1-720d-4ddf-875a-07a7c955d2ec"); // Replace with your Web3Forms key
    data.append("subject", "New Job Application - Univmaa");
    data.append("from_name", `${form.firstName} ${form.lastName}`);

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          education: "",
          jobCategory: "",
          experience: "",
          country: "",
          state: "",
          city: "",
          location: "",
          zip: "",
          resumeLink: "",
          reference: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#0f172a] text-white overflow-x-hidden">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center py-24 sm:py-28 px-4 sm:px-6 md:px-20"
          style={{ backgroundImage: `url(${applyImg})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto px-2">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              🚀 Build Your Career with Univmaa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-200 leading-relaxed"
            >
              Join a team that values innovation, growth, and people.
              <br /> Apply today or send your CV <br />
              <a
                href="mailto:helpdesk@univmaa.com"
                className="text-sky-400 hover:underline break-words"
              >
                helpdesk@univmaa.com
              </a>
            </motion.p>
          </div>
        </div>
        {/* Job Application Form Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-20 bg-[#0f172a]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto bg-[#111827] rounded-xl shadow-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Job Application Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                {
                  name: "firstName",
                  placeholder: "First Name",
                  required: true,
                },
                { name: "lastName", placeholder: "Last Name", required: true },
                {
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                  required: true,
                  col: 2,
                },
                { name: "phone", placeholder: "Phone", col: 2 },
                {
                  name: "Education",
                  type: "select",
                  options: ["Bachelors", "Masters", "PhD", "Other"],
                },
                {
                  name: "JobCategory",
                  type: "select",
                  options: [
                    "Salesforce Developer",
                    "Salesforce Trainee",
                    "Other",
                  ],
                },
                { name: "experience", placeholder: "Years of Experience" },
                { name: "country", placeholder: "Country" },
                { name: "state", placeholder: "State / Province" },
                { name: "city", placeholder: "City" },
                { name: "location", placeholder: "Preferred Location" },
                { name: "zip", placeholder: "Zip" },
                {
                  name: "resumeLink",
                  placeholder: "Resume Link (Google Drive / OneDrive)",
                  required: true,
                  col: 2,
                },
                { name: "reference", placeholder: "Reference", col: 2 },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={field.col === 2 ? "col-span-1 md:col-span-2" : ""}
                >
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="p-3 rounded bg-[#1f2937] text-white w-full text-sm sm:text-base"
                    >
                      <option value="">
                        {field.placeholder || field.name}
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="p-3 rounded bg-[#1f2937] text-white w-full text-sm sm:text-base"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="col-span-1 md:col-span-2 py-3 rounded bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>

            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                ✅ Application submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                ❌ Failed to submit. Please try again.
              </p>
            )}
          </motion.div>
        </section>

        {/* Life at Univmaa Section */}
        <section className="py-20 px-6 md:px-20 bg-[#0f172a]">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Life at Univmaa 🌍
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: apply1,
                title: "Team Bonding",
                desc: "We believe in work-life balance and celebrate every milestone together.",
              },
              {
                img: apply2,
                title: "Learning Culture",
                desc: "Access to mentorship, certifications, and constant skill upgradation.",
              },
              {
                img: apply3,
                title: "Workspaces",
                desc: "A modern and collaborative environment where ideas come alive.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-[#1f2937] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-300">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="px-6 md:px-20 py-20 bg-[#004d73]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Your Growth Path 🚀
          </motion.h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {[
              {
                time: "Intern",
                activity: "Kickstart your journey with hands-on training.",
              },
              {
                time: "Developer",
                activity: "Take charge of real-world Salesforce projects.",
              },
              {
                time: "Team Lead",
                activity: "Guide teams and shape product solutions.",
              },
              {
                time: "Manager",
                activity: "Drive global impact with leadership.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-[#111827] p-6 rounded-xl shadow-lg w-full md:w-1/2">
                  <span className="text-sky-400 font-bold">{step.time}</span>
                  <p className="text-gray-300 mt-2">{step.activity}</p>
                </div>

                <div className="hidden md:block w-1 md:w-2 h-16 md:h-20 bg-gradient-to-b from-sky-400 to-purple-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Perks & Benefits Section */}
        <section className="py-20 px-6 md:px-20 bg-[#111827]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Perks & Benefits 🎁
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "💻",
                title: "Hybrid Work",
                desc: "Flexible work-from-home options.",
              },
              {
                icon: "📈",
                title: "Career Growth",
                desc: "Structured learning & mentorship.",
              },
              {
                icon: "🏖️",
                title: "Paid Leaves",
                desc: "Enjoy a healthy work-life balance.",
              },
              {
                icon: "🎉",
                title: "Events & Fun",
                desc: "Hackathons, parties & team outings.",
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-[#1f2937] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl mb-3">{perk.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-300">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-6 md:px-20 bg-[#111827]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Why Build Your Career With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Briefcase className="w-10 h-10 text-sky-400" />,
                title: "Challenging Projects",
                desc: "Work on transformative projects with world-leading clients and industries.",
                gradient: "from-sky-400/40 to-blue-600/20",
              },
              {
                icon: <Users className="w-10 h-10 text-purple-400" />,
                title: "Collaborative Culture",
                desc: "Thrive in an inclusive environment built on teamwork and innovation.",
                gradient: "from-purple-400/40 to-pink-600/20",
              },
              {
                icon: <Rocket className="w-10 h-10 text-green-400" />,
                title: "Career Advancement",
                desc: "Accelerate your growth with mentorship, learning, and new opportunities.",
                gradient: "from-green-400/40 to-emerald-600/20",
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-400" />,
                title: "Recognition & Impact",
                desc: "Be valued for your contributions while making a lasting difference.",
                gradient: "from-yellow-400/40 to-orange-600/20",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative group bg-[#1f2937]/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl hover:border-transparent hover:scale-[1.05] transition duration-500`}
              >
                {/* Gradient Border Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 blur-xl transition`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-black/40 shadow-inner">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <RequestForConsultation />
      <Footer />
    </>
  );
}
