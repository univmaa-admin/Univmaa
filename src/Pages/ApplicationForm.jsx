import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apply1 from "../assets/apply1.jpeg";
import apply2 from "../assets/apply2.jpg";
import apply3 from "../assets/apply3.jpg";

import applicationformimgnew from "../assets/applicationformimgnew.webp";
import applicationformimgnew2 from "../assets/applicationformimgnew2.webp";
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
    Education: "",
    JobCategory: "",
    experience: "",
    Country: "",
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
          Education: "",
          JobCategory: "",
          experience: "",
          Country: "",
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
      <div className=" text-white">
        {/* Hero Section */}
        <div className="relative py-24 sm:py-28 lg:h-screen md:h-[600px] px-4 sm:px-6 md:px-20 overflow-hidden">
          {/* Blurred Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-100"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0)),
                url(${applicationformimgnew})
              
              `,
              backgroundPosition: "bottom",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Optional dark overlay for better text contrast */}
          {/* <div className="absolute inset-0 bg-black/15"></div> */}

          {/* Foreground Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-2">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:mt-20 md:text-5xl text-blue-900 font-bold mb-4 drop-shadow-lg"
            >
              🚀 Build Your Career with{" "}
              <span className="text-blue-500"> Univmaa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base pt-4 sm:text-lg text-black leading-relaxed"
            >
              Be part of a world-class team that drives innovation, fosters
              professional growth, and empowers people to make an impact.
              <br /> Submit your application or forward your CV to begin your
              journey with us. <br />
              <p className="mt-4">
                <a
                  href="mailto:helpdesk@univmaa.com"
                  className="text-blue-800  hover:underline break-words"
                >
                  helpdesk@univmaa.com
                </a>
              </p>
            </motion.p>
          </div>
        </div>

        {/* Job Application Form Section */}
        <section
          className="py-16 sm:py-24  px-4 sm:px-6 mt-[-40px] md:mt-[-70px] md:px-20 lg:h-[1350px] bg-transparent"
          style={{
            backgroundImage: `url(${applicationformimgnew2})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl justify-start mx-auto bg-transparent  border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Job Application Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between gap-6"
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
                },
                { name: "phone", placeholder: "Phone" },
                {
                  name: "Education",
                  type: "select",
                  options: [
                    "Bachelors",
                    "Masters",
                    "PhD",
                    "BSc",
                    "MSc",
                    "MCA",
                    "Other",
                  ],
                },
                {
                  name: "JobCategory",
                  type: "select",
                  options: [
                    "Salesforce Developer",
                    "Salesforce Trainee",
                    "Salesforce Consultant",
                    "Other",
                  ],
                },
                { name: "experience", placeholder: "Years of Experience" },
                {
                  name: "Country",
                  type: "select",
                  options: [
                    "India",
                    "USA",
                    "Canada",
                    "UK",
                    "Australia",
                    "Other",
                  ],
                },
                { name: "state", placeholder: "State / Province" },
                { name: "city", placeholder: "City" },
                { name: "location", placeholder: "Preferred Location" },
                { name: "zip", placeholder: "Zip" },
                {
                  name: "resumeLink",
                  placeholder: "Resume Link (Google Drive / OneDrive)",
                  required: true,
                },
                { name: "reference", placeholder: "Reference" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="flex-1 min-w-[250px]"
                >
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="p-3 rounded-lg border bg-white border-gray-300  focus:ring-2 focus:to-blue-800 focus:border-blue-800 w-full text-gray-800 text-sm sm:text-base hover:bg-white transition"
                    >
                      <option value="" className=" font-sans text-[12px]">
                        {field.placeholder || field.name}
                      </option>
                      {field.options.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="md:font-sans text-[12px]"
                        >
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
                      className="p-3 rounded-lg border focus:ring-2 focus:ring-sky-500 outline-none text-black w-full  placeholder:text-black text-sm sm:text-base  hover:bg-white transition"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>

            {status === "success" && (
              <p className="text-green-600 font-medium text-center mt-6">
                ✅ Application submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium text-center mt-6">
                ❌ Failed to submit. Please try again.
              </p>
            )}
          </motion.div>
        </section>

        {/* Life at Univmaa Section */}
        <section className="py-20 px-6 md:px-20 lg:mt-[-560px] md:mt-[-130px] mt-[-86px]  mb-[-40px]">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-blue-950  text-center mb-12"
          >
            Life at <span className="text-blue-500">Univmaa</span>
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
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Card Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 w-full object-cover"
                />

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Perks & Benefits Section */}
      </div>
      <RequestForConsultation />
      <Footer />
    </>
  );
}
