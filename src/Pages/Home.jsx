import Navbar from "../components/Navbar";
import "../App.css";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";
import SalesforcePage from "../components/SalesforcePage";
import SalesforceTabs from "../components/SalesforceTabs";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CookieConsent from "../components/CookieConsent";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e1a]">
      {" "}
      {/* ✅ Persistent dark background */}
      <AnimatePresence mode="sync">
        {" "}
        {/* ✅ Sync animations to avoid flicker */}
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0e0e1a]"
          >
            <header>
              <Navbar />
            </header>
            <main>
              <HeroSection2 />
              <SalesforcePage />
              <SalesforceTabs />
              <ServiceSection />
              <Contact />
              <CookieConsent />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  /** -----------------------
   * 💫 Modern Animated Loader
   * ----------------------- */
  function Loader() {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#0e0e1a] z-50"
      >
        <motion.div
          className="relative w-16 h-16 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
          </div>

          <motion.div
            className="absolute border-2 border-gray-700 rounded-full w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform -translate-x-1/2" />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-gray-400 tracking-[0.4em] mb-4 text-xs uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Loading
        </motion.p>

        <div className="w-64 h-[2px] bg-gray-800 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    );
  }
};

export default Home;
