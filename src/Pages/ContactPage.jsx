import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../assets/contact.png";
import ReCAPTCHA from "react-google-recaptcha";

import contactusnew from "../assets/contactusnew.jpg";
export default function ContactPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  // ✅ Updated Web3Forms submit handler with WhatsApp Integration
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "a658a2c1-720d-4ddf-875a-07a7c955d2ec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        setError(null);

        // ✅ WhatsApp notification integration
        const phoneNumber = "918904466684"; // Your WhatsApp number
        const msg = `📩 *New Contact Form Submission*%0A
          → *First Name:* ${object.first_name}%0A
          → *Last Name:* ${object.last_name}%0A
          → *Email:* ${object.email}%0A
          → *Company:* ${object.company}%0A
          → *Phone:* ${object.phone || "N/A"}%0A
          → *Notes:* ${object.notes || "N/A"}%0A
          Please check your email for more details.`;

        const url = `https://wa.me/${phoneNumber}?text=${msg}`;
        window.open(url, "_blank");

        // Reset form & checkbox
        event.target.reset();
        setIsChecked(false);

        // Hide success after a few seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Something went wrong!");
        setSuccess(false);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError("Error submitting form. Check console for details.");
      setSuccess(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans overflow-hidden">
      <Navbar />
      {/* Captcha */}

      {/* ===== Hero Section ===== */}
      <section
        className="
    relative w-full 
    h-[420px]  md:h-[600px] 
    md:mb-[50px] 
    flex items-center overflow-hidden
    bg-no-repeat bg-center md:bg-right
    bg-cover md:bg-cover 
  "
        style={{
          backgroundImage: `url(${contactusnew})`,
        }}
      >
        {/* Left-to-right Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent backdrop-blur-[1px]"></div>

        {/* Content on the Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6 lg:ms-40 md:px-16 max-w-2xl"
        >
          <h1 className="text-4xl md:text-7xl font-thin mb-6 drop-shadow-xl">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md">
            Let’s connect and explore how we can accelerate your business growth
            with Salesforce-powered innovation and expert consulting.
          </p>
        </motion.div>
      </section>

      {/* ===== Contact Info Section ===== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-11 lg:mt-0 md:mt-0"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4 mt-[-90px]">
            Collaborate with{" "}
            <span className="text-blue-500"> Industry-Leading Experts</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our global team of Salesforce professionals is ready to help you
            turn bold ideas into powerful business outcomes — from consulting to
            implementation and beyond.
          </p>
        </motion.div>

        {/* Office Cards */}
        <motion.section
          className="bg-gradient-to-b from-blue-50 to-white py-20 mt-[-90px] px-6 md:px-16 md:mt-[-50px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-blue-900 mb-3 md:mt-[-50px]">
              Our <span className="text-blue-500">Global Offices</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We’re proud to serve clients across continents — offering on-site
              support, collaboration, and innovation from our offices in the USA
              and India.
            </p>
          </motion.div>

          {/* Office Cards */}
          <div className="grid sm:grid-cols-2 mb-[-35px] gap-10">
            {/* USA Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">USA</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Our U.S. headquarters drives innovation, client success, and
                global delivery operations — ensuring excellence in every
                partnership.
              </p>
              <div className="space-y-4 text-gray-700 text-base">
                <p className="flex items-center gap-3 hover:text-blue-700 transition">
                  <IoMdMail className="text-xl text-blue-600" />
                  <a
                    href="mailto:helpdesk@univmaa.com"
                    className="hover:underline"
                  >
                    helpdesk@univmaa.com
                  </a>
                </p>
                <p className="flex items-center gap-3 hover:text-blue-700 transition">
                  <FiPhoneCall className="text-xl text-blue-600" />
                  <a href="tel:+18157933979" className="hover:underline">
                    +1 (815) 793-3979
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <IoLocation className="text-3xl md:text-2xl text-blue-600" />
                  <a
                    href="https://maps.app.goo.gl/mLnLiQ8CJP9BH8uk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    1020 Eastbourne Terrace, Frederick, MD 21702, USA
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Bengaluru Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl  transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Bengaluru
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Our India center of excellence specializes in advanced
                Salesforce development, enterprise solutions, and strategic
                consulting.
              </p>
              <div className="space-y-4 text-gray-700 text-base">
                <p className="flex items-center gap-3 hover:text-blue-700 transition">
                  <IoMdMail className="text-xl text-blue-600" />
                  <a
                    href="mailto:helpdesk@univmaa.com"
                    className="hover:underline"
                  >
                    helpdesk@univmaa.com
                  </a>
                </p>
                <p className="flex items-center gap-3 hover:text-blue-700 transition">
                  <FiPhoneCall className="text-xl text-blue-600" />
                  <a href="tel:+918904466684" className="hover:underline">
                    +91 8904466684 / +91 9777293266
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <IoLocation className="text-5xl md:text-2xl text-blue-600" />
                  <a
                    href="https://www.google.com/maps?q=Shantiniketan+Tech+Park,+10th+Floor,+Tower+B,+Prestige,+Whitefield+Bengaluru+-+560048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Shantiniketan Tech Park, 10th Floor, Tower B, Prestige,
                    Whitefield, Bengaluru - 560048
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </section>
      {/* ===== Contact Form Section ===== */}
      <motion.div
        className="min-h-screen flex flex-col md:flex-row  lg:ms-28  items-center justify-center px-4 sm:px-6  py-16 sm:py-20  md:mt-[-160px] mt-[-150px] md:mb-[-80px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        {/* ===== LEFT: FORM ===== */}
        <motion.div
          className="w-full md:w-1/2 backdrop-blur-md bg- md:ms-12  rounded-2xl p-6 sm:p-8 md:p-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Let's work <span className="text-blue-500">Together</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8 sm:mb-10 text-center md:text-left text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Tell us about yourself and we’ll figure out the best solution for
            you
          </motion.p>

          {/* ✅ Form */}
          <motion.form
            className="space-y-5 "
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 ">
              <input
                type="text"
                name="first_name"
                placeholder="First Name *"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name *"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Company Email *"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company *"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            />
            <textarea
              name="notes"
              placeholder="Notes"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition resize-none"
            ></textarea>
            <ReCAPTCHA
              sitekey="6LdLDfQrAAAAAB5bdMwT0D9YfVYa1vgA8z3CI1Qn" // replace with your real site key
              onChange={handleCaptchaChange}
            />
            {/* </label> */}
            <motion.button
              type="submit"
              disabled={!captchaValue}
              whileHover={{ scale: isChecked ? 1.05 : 1 }}
              whileTap={{ scale: isChecked ? 0.95 : 1 }}
              className={`w-full ${
                captchaValue
                  ? "bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white shadow-md"
                  : "bg-gray-400 cursor-not-allowed"
              } text-blue-600 font-semibold py-3 rounded-lg mt-4 transition-all`}
            >
              SUBMIT
            </motion.button>
          </motion.form>

          {success && (
            <motion.p
              className="text-green-600 text-center mt-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              ✅ Your message has been sent successfully!
            </motion.p>
          )}
          {error && (
            <motion.p
              className="text-red-500 text-center mt-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        {/* ===== RIGHT: IMAGE ===== */}
        <motion.div
          className="w-full  mt-10 md:mt-0 md:pl-10 flex justify-center md:w-[55%] lg:w-[90%]
               h-[280px] sm:h-[320px] md:h-[380px] lg:h-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={contact}
            alt="Business collaboration"
            className="rounded-2xl object-cover w-[60%] md:[90%] sm:w-[80%] "
          />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}
