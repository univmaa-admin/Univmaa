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
  const staticText = "UNIVMAA Technologies";
  const animatedText = "is one of the fast-growing IT Consulting Companies.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("ltr");

  const navigate = useNavigate();

  // Typing effect
  useEffect(() => {
    let timeout;
    if (direction === "ltr" && index < animatedText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + animatedText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 120);
    } else if (direction === "rtl" && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [index, direction, animatedText]);

  useEffect(() => {
    if (direction === "ltr" && index === animatedText.length) {
      const reset = setTimeout(() => setDirection("rtl"), 3000);
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

  // Carousel
  const backgrounds = [bg2, bg3, bg1, bg4];
  const [bgIndex, setBgIndex] = useState(0);

  // Preload
  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // slower transition time for better feel
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const prevBg = () => {
    setBgIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));
  };

  const nextBg = () => {
    setBgIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative hero-section px-10 sm:py-32 py-24 flex flex-col md:flex-row items-center md:justify-center justify-center w-full md:min-h-screen overflow-hidden"
      >
        {/* ✅ Animated Background with Crossfade */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence>
            <motion.div
              key={bgIndex}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(22,22,22,0.7), rgba(0,0,0,0.8)), url(${backgrounds[bgIndex]})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

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
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === bgIndex ? "bg-white scale-110" : "bg-white/50"
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
              {" "}
              {staticText}{" "}
            </span>{" "}
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
              {" "}
              {displayedText} <span className="animate-pulse">|</span>{" "}
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
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition text-sm sm:text-base"
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
              <div
                className="bg-white rounded-xl md:mt-20
                shadow-2xl max-w-lg w-full p-4 sm:p-6 text-center border border-gray-700 max-h-[90vh] overflow-y-auto"
              >
                <img
                  src={homemodal}
                  alt="Salesforce"
                  className="w-20 sm:w-40 mx-auto mb-2 sm:mb-4"
                />
                <h2 className="text-xl sm:text-2xl  font-bold text-black mb-3 sm:mb-4 leading-snug">
                  We don’t just deliver projects — we build digital partnerships
                  that help businesses grow faster and smarter.
                </h2>
                <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4 font-medium uppercase tracking-wide">
                  What We Deliver Beyond Code
                </p>
                <ul className="text-left text-black space-y-2 sm:space-y-3 mb-5 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-black">Growth:</span>{" "}
                      We design platforms that scale with your business.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-black">
                        Innovation:
                      </span>{" "}
                      Bold ideas powered by Salesforce, AI, and Cloud.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-black">Trust:</span>{" "}
                      Transparent processes, no jargon — just clarity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-black">
                        Reliability:
                      </span>{" "}
                      On-time, every time — your success is our priority.
                    </span>
                  </li>
                </ul>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="border border-gray-400 px-5 sm:px-6 py-2 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition text-sm sm:text-base"
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
