import React from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 p-4">
      {/* ---------- LEFT: LOGIN CARD ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white w-full md:w-1/2 max-w-md rounded-2xl shadow-xl p-8 md:mr-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-sm text-gray-500 mb-6">
          Doesn’t have an account yet?{" "}
          <a href="#" className="text-purple-600 font-medium">
            Sign Up
          </a>
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-gray-600 text-sm">Password</label>
            <a href="#" className="text-sm text-purple-600 font-medium">
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            placeholder="Enter 6 character or more"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 accent-purple-600"
          />
          <label htmlFor="remember" className="text-gray-600 text-sm">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition">
          LOGIN
        </button>

        {/* OR Divider */}
        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or login with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex space-x-3">
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
        </div>
      </motion.div>

      {/* ---------- RIGHT: ILLUSTRATION ---------- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 justify-center"
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-4268413-3551747.png"
          alt="Login Illustration"
          className="max-w-lg w-full"
        />
      </motion.div>
    </div>
  );
}
