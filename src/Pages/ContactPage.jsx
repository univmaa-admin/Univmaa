import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

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
    <div className="bg-[#0B0E1A] text-white font-sans">
      <Navbar />

      {/* ===== Contact Info Section ===== */}
      <motion.h2
        className="text-3xl md:text-4xl pt-28 font-bold text-center py-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/image/contactimg.jpg"
          alt="Contact"
          className="rounded-xl shadow-lg w-[90%] md:w-[50%] object-cover"
        />
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 px-8 md:px-4 py-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-4 md:text-xl">
            Collaborate with Industry-Leading Experts
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Drive innovation with our team of seasoned Salesforce experts –
            together, we transform concepts into reality and deliver excellence.
          </p>
        </motion.div>

        {/* USA Office */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">USA</h4>
          <div className="space-y-3 mt-3 text-slate-300 text-sm">
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <IoMdMail className="text-lg text-blue-700" />
              <a href="mailto:helpdesk@univmaa.com">helpdesk@univmaa.com</a>
            </p>
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <FiPhoneCall className="text-lg text-blue-700" />
              <a href="tel:+1(815)793-3979">+1(815)793-3979</a>
            </p>
            <p className="flex items-start gap-2">
              <IoLocation className="text-2xl text-blue-700" />
              <span>
                <a
                  href="https://maps.app.goo.gl/mLnLiQ8CJP9BH8uk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  1020 Eastbourne Terrace Frederick MD USA 21702
                </a>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Bengaluru Office */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-4">Bengaluru</h4>
          <div className="space-y-3 mt-3 text-slate-300 text-sm">
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <IoMdMail className="text-lg text-blue-700" />
              <a href="mailto:helpdesk@univmaa.com">helpdesk@univmaa.com</a>
            </p>
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <FiPhoneCall className="text-lg text-blue-700" />
              <a href="tel:+918904466684">+91 8904466684 / +91 9777293266</a>
            </p>
            <p className="flex items-start gap-2">
              <IoLocation className="text-3xl text-blue-700" />
              <span>
                <a
                  href="https://www.google.com/maps?q=Shantiniketan+Tech+Park,+10th+Floor,+Tower+B,+Prestige,+Whitefield+Bengaluru+-+560048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  Shantiniketan Tech Park, 10th Floor, Tower B, Prestige,
                  Whitefield Bengaluru - 560048
                </a>
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== Contact Form Section ===== */}
      <motion.div
        className="min-h-screen flex items-center justify-center px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="w-full max-w-2xl bg-transparent"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Let's work <span className="text-blue-400">Together</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Tell us about yourself and we’ll figure out the best solution for
            you
          </motion.p>

          {/* ✅ Form with WhatsApp integrated */}
          <motion.form
            className="space-y-4"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Company Email *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
            />
            <textarea
              name="notes"
              placeholder="Notes"
              rows="4"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
            ></textarea>

            <motion.div
              className="w-full bg-zinc-600 rounded-md flex items-center justify-between px-4 py-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="flex items-center gap-2 text-black">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                I’m not a robot
              </label>
              <img
                src="/image/contactimg2.png"
                alt="reCAPTCHA"
                className="h-6"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={!isChecked}
              whileHover={{ scale: isChecked ? 1.05 : 1 }}
              whileTap={{ scale: isChecked ? 0.95 : 1 }}
              className={`w-full ${
                isChecked
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-500 cursor-not-allowed"
              } text-white font-semibold py-3 rounded-md mt-4`}
            >
              SUBMIT
            </motion.button>
          </motion.form>

          {/* Success / Error */}
          {success && (
            <motion.p
              className="text-green-400 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              ✅ Your message has been sent successfully!
            </motion.p>
          )}
          {error && (
            <motion.p
              className="text-red-400 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
