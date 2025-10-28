import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import requestform from "../assets/requestform.webp";

export default function RequestForConsultation() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f9ff]">
      {/* Wrapper */}
      <div
        className="relative  flex flex-col-reverse md:flex-row items-center  justify-between
          px-6 sm:px-10 md:px-16 lg:px-24 
          py-16 md:py-0
          bg-no-repeat bg-bottom md:bg-right md:h-[350px] md:mb-[-92px] sm:mb-0 lg:mb-0  h-45 bg-contain"
        style={{
          backgroundImage: `url(${requestform})`,
          backgroundPosition: "contain",
          backgroundSize: "contain",
        }}
      >
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-20 w-full mt-[-60px] md:mt-0 top-7 lg:top-0 md:top-0  lg:ms-64 md:ms-20 md:w-1/2 text-center md:text-left  lg:ps-24"
        >
          <h2 className="text-xl sm:text-4xl  lg:font-bold md:font-bold md:text-[22px] lg:text-3xl font-bold text-[#032d60] mb-4 leading-snug">
            Have Questions?
            <span className="text-blue-500"> Let’s Connect.</span>
          </h2>

          <p className="text-gray-700 mb-8 text-base sm:text-lg md:mb-[10px]  leading-relaxed max-w-md mx-auto md:mx-0">
            Ask about Salesforce products, pricing, implementation, or anything
            else. Our highly trained reps are standing by, ready to help.
          </p>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0);
            }}
            className="bg-white text-[#0176d3] hover:bg-[#0176d3] hover:text-white
                       px-2 sm:px-8 py-3 rounded-md font-semibold shadow-lg
                       transition duration-300 inline-flex md:mb-20  items-center mb-11 gap-2"
          >
            🚀 Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Curved white overlay at bottom */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto hidden lg:block" // 👈 key line
        >
          <path
            fill="#ffffff"
            d="M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,106.7C840,128,960,160,1080,154.7C1200,149,1320,107,1380,85.3L1440,64V180H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
