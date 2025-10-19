import React from "react";
import { motion } from "framer-motion";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-start bg-gradient-to-br from-purple-500 to-indigo-500 p-4">
      {/* ---------- LEFT: ILLUSTRATION ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 justify-center"
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/registration-form-illustration-4268404-3551738.png"
          alt="Sign Up Illustration"
          className="max-w-lg w-full"
        />
      </motion.div>

      {/* ---------- RIGHT: SIGN UP CARD ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white w-full md:w-1/2 max-w-md rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Already have an account?{" "}
          <a href="#" className="text-purple-600 font-medium">
            Login
          </a>
        </p>

        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter a strong password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Terms Checkbox */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center mb-5"
        >
          <input
            type="checkbox"
            id="terms"
            className="mr-2 accent-purple-600"
          />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            I agree to the{" "}
            <a href="#" className="text-purple-600 font-medium">
              Terms & Conditions
            </a>
          </label>
        </motion.div>

        {/* Sign Up Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition"
        >
          SIGN UP
        </motion.button>

        {/* OR Divider */}
        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or sign up with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Sign Up */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex space-x-3"
        >
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
