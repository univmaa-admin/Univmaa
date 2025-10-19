import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const setCookie = (name, value, days = 365) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  };

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // ✅ Initialize tracking only if accepted
  const initializeTracking = () => {
    // Example: Google Analytics
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // Replace with your ID
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // Replace with your tracking ID
  };

  useEffect(() => {
    const consent = getCookie("cookieConsent");

    if (consent === "accepted") {
      initializeTracking(); // ✅ Tracking starts here
    }

    if (consent !== "accepted") {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", 365);
    initializeTracking(); // ✅ Start tracking immediately after accepting
    setShowModal(false);
  };

  const handleReject = () => {
    deleteCookie("cookieConsent"); // remove cookie, will show again
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-white shadow-lg rounded-xl p-4 w-80 z-50 border border-gray-200">
      <h2 className="font-semibold text-gray-800 mb-2">
        We value your privacy
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to personalize content, to provide social media features
        and to analyse our traffic. Click “Accept All” to allow us to track
        analytics.
      </p>
      <div className="flex justify-between">
        <button
          onClick={handleReject}
          className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-100"
        >
          Reject All
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
