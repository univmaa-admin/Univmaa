import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RequestForConsultation() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-white px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-purple-800 to-teal-950 rounded-lg text-center p-10 max-w-5xl mx-auto my-16"
      >
        <h2 className="text-2xl font-bold mb-4">
          Have Questions? Let’s Discuss!
        </h2>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Discover possibilities and navigate through the diverse world of
          Salesforce. Be a part of our thriving community.
        </p>

        <motion.button
          whileHover={{ scale: 1.06, backgroundColor: "#1e40af" }}
          onClick={() => {
            navigate("/contactus");
            window.scrollTo(0, 0); // reset scroll to top
          }}
          whileTap={{ scale: 0.96 }}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md"
        >
          Request a Consultation ➝
        </motion.button>
      </motion.div>
    </div>
  );
}
