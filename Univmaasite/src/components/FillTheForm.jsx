import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FillTheForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  // 🔑 Web3Forms submit handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "a658a2c1-720d-4ddf-875a-07a7c955d2ec"); // replace with your key

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
        event.target.reset();
        setIsChecked(false);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div
      id="form"
      data-aos="fade-left"
      className="bg-gradient-to-b from-purple-600 to-black p-8 rounded-2xl  md:w-[420px] shadow-lg w-4/4 max-w-md mx-auto mt-20"
    >
      <h3 className="text-2xl font-bold text-center mb-6">Fill the form</h3>
      {success ? (
        <p className="text-green-400 font-semibold text-center">
          ✅ Thank you! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="w-full px-4 py-3 rounded-md text-black h-10"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full px-4 py-3 rounded-md text-black h-10"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            required
            className="w-full px-4 py-3 rounded-md text-black h-10"
          />
          <input
            type="email"
            name="email"
            placeholder="Business Email"
            required
            className="w-full px-4 py-3 rounded-md text-black h-10 "
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            required
            className="w-full px-4 py-3 rounded-md text-black h-10"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-md font-semibold text-white transition"
          >
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
};

export default FillTheForm;
