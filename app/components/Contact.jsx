"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/asstes/assets";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "684c584a-49a2-4c82-9118-285c7c640984");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="px-[10%] py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0a0a0a]"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <h3 className="text-lg font-Ovo text-gray-500 dark:text-gray-400 tracking-wide">
          Get in Touch
        </h3>
        <h2 className="text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mt-2">
          Contact Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
          Have a project in mind? Need technical support or want to collaborate?
          We’d love to hear from you. Fill out the form and our team will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#111] rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-800">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#0c0c0c] text-gray-800 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="name"
              placeholder="What’s this about?"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#0c0c0c] text-gray-800 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#0c0c0c] text-gray-800 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base font-medium shadow-md focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
          >
            Send Message
            <Image
              src={isDarkMode ? assets.mailWhite : assets.mailDark}
              alt="send"
              className="w-6 h-6"
            />
          </motion.button>

          {/* Response Message */}
          {result && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                result.includes("✅")
                  ? "text-green-600 dark:text-green-400"
                  : result.includes("❌")
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-500"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
