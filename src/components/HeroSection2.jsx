import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HomeNotification from "./HomeNotification";

import bg1 from "../assets/hero-bg.jpg";
import bg2 from "../assets/hero-bg2.jpg";
import bg3 from "../assets/hero-bg4.jpg";
import bg4 from "../assets/hero-bg5.jpg";
import homemodal from "../assets/homemodal.png";

const HeroSection2 = () => {
  // Typing animation text
  const staticText = "UNIVMAA Technologies";
  const animatedText = "is one of the fast-growing IT Consulting Companies.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("ltr");

  const navigate = useNavigate();

  // ✅ FIXED Typing effect logic
  useEffect(() => {
    let timeout;
    if (direction === "ltr" && index < animatedText.length) {
      // forward typing
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + animatedText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 120);
    } else if (direction === "rtl" && index > 0) {
      // ✅ fixed backward typing (erasing from the end cleanly)
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [index, direction, animatedText]);

  useEffect(() => {
    if (direction === "ltr" && index === animatedText.length) {
      const reset = setTimeout(() => {
        setDirection("rtl");
      }, 3000);
      return () => clearTimeout(reset);
    }
    if (direction === "rtl" && index === 0) {
      const reset = setTimeout(() => {
        setDirection("ltr");
        setDisplayedText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(reset);
    }
  }, [index, direction, animatedText.length]);

  // Background carousel
  const backgrounds = [bg2, bg3, bg1, bg4];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevBg = () => {
    setBgIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));
  };

  const nextBg = () => {
    setBgIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative hero-section  px-10 sm:py-32 py-24 flex flex-col md:flex-row items-center md:justify-center justify-center w-full md:min-h-screen transition-all duration-1000"
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.712), rgba(0, 0, 0, 0.801)), url(${backgrounds[bgIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Prev Button */}
        <button
          onClick={prevBg}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full z-20 transition"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextBg}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full z-20 transition"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {backgrounds.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === bgIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setBgIndex(i)}
            />
          ))}
        </div>

        {/* Content */}
        <div className="md:px-28 px-4 mx-auto text-center w-full z-10">
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="md:text-5xl text-xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-200">
              {staticText}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="md:mt-4 mt-2 md:text-xl text-slate-300 mb-6">
              We are a strong and diverse team of professionals with a common
              purpose of providing innovative digital solutions by{" "}
              <b>simplifying the complexities</b>.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-violet-600 border-2 border-violet-600 text-white md:px-10 px-2 md:py-3 py-1 rounded-sm hover:bg-transparent hover:text-violet-400 duration-300"
            >
              Get started
            </button>
          </motion.div>
        </div>

        <HomeNotification />
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="bg-[#0B0E1A] rounded-xl shadow-2xl max-w-lg w-full p-4 sm:p-6 text-center border border-gray-700 max-h-[90vh] overflow-y-auto">
                <img
                  src={homemodal}
                  alt="Salesforce"
                  className="w-20 sm:w-40 mx-auto mb-2 sm:mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                  We don’t just deliver projects — we build digital partnerships
                  that help businesses grow faster and smarter.
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium uppercase tracking-wide">
                  What We Deliver Beyond Code
                </p>
                <ul className="text-left text-gray-300 space-y-2 sm:space-y-3 mb-5 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">Growth:</span>{" "}
                      We design platforms that scale with your business.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">
                        Innovation:
                      </span>{" "}
                      Bold ideas powered by Salesforce, AI, and Cloud.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">Trust:</span>{" "}
                      Transparent processes, no jargon — just clarity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">
                        Reliability:
                      </span>{" "}
                      On-time, every time — your success is our priority.
                    </span>
                  </li>
                </ul>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="border border-gray-400 px-5 sm:px-6 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition text-sm sm:text-base"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection2;
