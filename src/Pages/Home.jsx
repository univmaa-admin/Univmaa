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
    }, 2000); // increased slightly for a nicer effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
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
    </>
  );

  function Loader() {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#0e0e1a] z-50"
      >
        <motion.p
          className="text-gray-400 tracking-[0.5em] mb-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          LOADING
        </motion.p>

        <div className="w-64 h-[2px] bg-gray-800 relative overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>
      </motion.div>
    );
  }
};

export default Home;
